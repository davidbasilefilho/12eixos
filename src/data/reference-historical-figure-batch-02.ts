import type { ReferenceEntry, ReferenceSource } from './references';
import { AXES } from '../lib/scoring';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';

/** Bounded primary-text readings; identity sources never generate axis values. */
export interface HistoricalFigureBatch02Spec {
  id: string; name: string; period: string; rationale: string; caveats: string;
  sources: ReferenceSource[]; claims: ReferenceAxisCoding[]; unresolved: string[];
}
const accessedDate = '2026-10-07';
const source = (title: string, url: string, note: string): ReferenceSource => ({ title, url, note });
const claim = (axis: ReferenceAxisCoding['axis'], position: ReferenceAxisCoding['position'], confidence: ReferenceAxisCoding['confidence'], sourceTitle: string, publishedDate: string, locator: string, statement: string, rationale: string, uncertainty: string): ReferenceAxisCoding => ({
  axis, position, confidence, claims: [{ sourceTitle, publishedDate, accessedDate, locator, statement, basis: 'declaration' }], rationale, uncertainty, reviewedOn: accessedDate,
});
const titles = {
  rizal: 'The Philippines a Century Hence — José Rizal, 1889–1890, tradução de 1912',
  fukuzawa: 'Nakatsu Ritsubetsu no Sho — Fukuzawa, 1870, excerto preservado pela Keio',
  sarmiento: 'Facundo — Domingo Faustino Sarmiento, 1845, edição de 1921',
  tolstoy: 'The Kingdom of God Is Within You — Leo Tolstoy, 1893, tradução de Constance Garnett',
  russell: 'Russell–Einstein Manifesto — signatários, 9 de julho de 1955',
  cleyre: 'Direct Action — Voltairine de Cleyre, Selected Works, edição de 1914',
  equiano: 'The Interesting Narrative — Olaudah Equiano, 1789',
  naoroji: 'Civil Service of India (Examination) — discurso de Naoroji, Hansard, 2 de junho de 1893',
};

export const historicalFigureBatch02Specs: HistoricalFigureBatch02Spec[] = [
  {
    id: 'jose-rizal', name: 'José Rizal', period: 'Filipinas dentro de cien años, 1889–1890; tradução de 1912',
    rationale: 'O ensaio propõe imprensa livre, representação filipina e rejeição de barreiras raciais à cidadania.',
    caveats: 'Recorte reformista sob domínio espanhol, não toda a vida nem programa da república posterior. A introdução de Austin Craig e o excerto de Jagor são textos de terceiros e não codificam Rizal.',
    sources: [source(titles.rizal, 'https://www.gutenberg.org/files/35899/35899-h/35899-h.htm', 'Texto primário traduzido por Charles Derbyshire; introdução identifica publicação serial setembro de 1889–janeiro de 1890.'), source('Jose Rizal (1861–1896) — NHCP', 'https://philhistoricsites.nhcp.gov.ph/registry_database/jose-rizal-1861-1896-2/', 'Registro oficial de identidade histórica; sem valores políticos.')],
    claims: [
      claim('rep', 'moderate-first', 'high', titles.rizal, '1889–1890', 'Parte III, pp. 70–81; parágrafos The minister, then e Likewise inadmissible', 'Solicita delegados filipinos e escolha de representantes mesmo para cidadãos pouco instruídos.', 'Representação e prestação de contas sustentam direção democrática.', 'Representação em parlamento imperial não prova sufrágio universal pleno nem desenho republicano.'),
      claim('pod', 'moderate-second', 'high', titles.rizal, '1889–1890', 'Parte III, pp. 70–74; parágrafos The minister, then e The free press is needed', 'Exige imprensa livre para expor abusos e informar governantes.', 'Liberdade de expressão limita arbítrio estatal.', 'Uma liberdade específica não cobre todo o eixo de segurança e liberdade.'),
      claim('mor', 'moderate-first', 'medium', titles.rizal, '1889–1890', 'Parte III, pp. 77–81; Law has no skin e No one ceases to be a man', 'Rejeita cor e suposta incultura como razões para negar direitos e representação.', 'Igualdade racial e cidadania sustentam o subtema emancipatório.', 'Não atribui posições em aborto, gênero ou outros costumes contemporâneos.'),
    ],
    unresolved: ['est/imi/dip/int/eco/con/com/rel/tec: sem cobertura suficiente neste ensaio.', 'Pedidos de reforma colonial não viram automaticamente doutrina universal de não intervenção.'],
  },
  {
    id: 'yukichi-fukuzawa', name: 'Yukichi Fukuzawa', period: 'Nakatsu Ritsubetsu no Sho, 1870; excerto institucional',
    rationale: 'O excerto autoral rejeita graus distintos de importância para homens e mulheres.',
    caveats: 'Apenas um excerto primário atribuído e preservado pela universidade fundada pelo autor, não leitura integral da obra. A política de igualdade da Keio no século XXI não é atribuída a Fukuzawa.',
    sources: [source(titles.fukuzawa, 'https://www.keio.ac.jp/en/about/engagement/work-life-balance/initiatives/philosophy/', 'Página Gender Equality Basic Principles; citação explicitamente atribuída ao texto de 1870, distinguida da política atual.'), source('Yukichi Fukuzawa — Keio University', 'https://www.keio.ac.jp/en/about/philosophy/fukuzawa-en/', 'Identidade 1835–1901 e contexto; o resumo institucional sobre ciência não substitui texto político autoral.')],
    claims: [claim('mor', 'moderate-first', 'medium', titles.fukuzawa, '1870', 'Gender Equality Basic Principles, primeiro parágrafo; citação de Nakatsu Ritsubetsu no Sho', 'Afirma que homens e mulheres, igualmente humanos, não devem ter importância diferente.', 'Igualdade de gênero sustenta progressismo no subtema documentado.', 'Excerto traduzido e selecionado por instituição; não prova todos os costumes ou aplicações práticas.')],
    unresolved: ['Todos os outros onze eixos: não inferir liberdade, tecnologia, religião ou diplomacia dos resumos biográficos.', 'An Encouragement of Learning é contexto, não texto integral usado para gerar valores.'],
  },
  {
    id: 'domingo-faustino-sarmiento', name: 'Domingo Faustino Sarmiento', period: 'Programa final de Facundo, 1845; edição de 1921',
    rationale: 'O programa defende conter o arbítrio; circulação fluvial e colonização permanecem contexto sem eixo próprio.',
    caveats: 'Oposição a Rosas não demonstra democracia plena. O projeto de colonização e sua hierarquia civilização/barbárie impedem pressupor inclusão igualitária; elogio da imigração europeia não é multiculturalismo.',
    sources: [source(titles.sarmiento, 'https://www.gutenberg.org/files/33267/33267-h/33267-h.htm', 'Texto espanhol; prólogo de Ricardo Rojas distinguido do texto de Sarmiento. Passagens usadas pertencem ao programa final, não ao prólogo.'), source('Sepulcro de Domingo Faustino Sarmiento — Argentina.gob.ar', 'https://www.argentina.gob.ar/node/503454', 'Confirma falecimento em Asunción em 11 de setembro de 1888; identidade apenas.')],
    claims: [
      claim('pod', 'moderate-second', 'medium', titles.sarmiento, '1845', 'Programa final, p. 323; parágrafo Todas las cuestiones sociales, ventiladas', 'Defende conter a arbitrariedade dos poderes, mantendo o sentimento de autoridade.', 'Limitação do arbítrio sustenta liberdade moderada.', 'Também afirma autoridade; oposição a um adversário não prova liberdades uniformes para todos.'),
      claim('com', 'moderate-second', 'medium', titles.sarmiento, '1845', 'Programa final, pp. 317–318; parágrafos ¿No quiere Rosas que se naveguen los ríos? e La cuestión de la libre navegación', 'Endossa trânsito comercial livre nos rios do Prata para Paraguai, Uruguai, Inglaterra e França.', 'Abertura internacional explicitamente identificada sustenta direção globalista moderada.', 'Navegação internacional é um subtema; não especifica tarifa geral, todos os produtos ou tratados multilaterais.'),
    ],
    unresolved: ['imi: imigração europeia selecionada não resolve o eixo assimilação/multicultura.', 'com: desenvolvimento interno e transportes na p. 330 permanecem contexto; a codificação usa somente abertura internacional explícita das pp. 317–318.', 'dip: exército permanente e colônias militares coexistem com crítica a guerras; leitura parcial insuficiente.', 'est/rep/int/eco/con/rel/mor/tec: não inferir pelo rótulo unitário ou pela profissão.'],
  },
  {
    id: 'leo-tolstoy', name: 'Leo Tolstoy', period: 'The Kingdom of God Is Within You, 1893; tradução inglesa',
    rationale: 'A argumentação religiosa subordina Estado e guerra à consciência e à não violência cristã.',
    caveats: 'Recorte normativo tardio, não a ficção nem toda a biografia. Crítica às igrejas não significa irreligião; as citações de Dymond, Garrison e críticos são separadas da conclusão do autor.',
    sources: [source(titles.tolstoy, 'https://www.gutenberg.org/cache/epub/4602/pg4602-images.html', 'Texto primário traduzido por Constance Garnett; prefácio assinado em 14/26 de maio de 1893.'), source('The Kingdom of God Is Within You — catálogo Gutenberg', 'https://www.gutenberg.org/ebooks/4602', 'Identidade catalográfica de Tolstoy, 1828–1910; sem codificação biográfica.')],
    claims: [
      claim('dip', 'strong-second', 'high', titles.tolstoy, '1893', 'Cap. XII; parágrafos Share all that you have e Your duties as a citizen', 'Rejeita matar e usar violência em nome do bem público ou da nação.', 'Não violência constitutiva sustenta pacifismo forte no texto.', 'Doutrina normativa, não medição da prática de toda a vida; não usar citações de terceiros como declaração autoral.'),
      claim('pod', 'strong-second', 'medium', titles.tolstoy, '1893', 'Cap. XII; Try the simple experiment e And therefore you cannot but reflect', 'Contesta posições de governo, justiça e exército sustentadas por violência contra a consciência.', 'Recusa constitutiva da coerção sustenta direção forte de liberdade.', 'Não fornece catálogo moderno de direitos nem plano institucional de segurança.'),
      claim('rel', 'strong-second', 'high', titles.tolstoy, '1893', 'Cap. XII; parágrafos But besides belonging to the state e Your duties as a citizen', 'Subordina deveres estatais a Deus e à vida eterna.', 'Fundamento religioso explícito governa o dever político.', 'Cristianismo heterodoxo e anti-eclesiástico; não inferir apoio ao poder das igrejas.'),
    ],
    unresolved: ['est/rep/imi/int/eco/con/com/mor/tec: sem cobertura suficiente no recorte.', 'Partilhar bens como dever moral não identifica propriedade estatal nem planejamento.'],
  },
  {
    id: 'bertrand-russell', name: 'Bertrand Russell', period: 'Manifesto coletivo Russell–Einstein, 9 de julho de 1955',
    rationale: 'Russell subscreve resolução que exige meios pacíficos para disputas internacionais sob risco nuclear.',
    caveats: 'Documento coletivo e temporalmente delimitado; não afirma autoria exclusiva de cada frase, pacifismo absoluto vitalício ou rejeição geral da ciência.',
    sources: [source(titles.russell, 'https://pugwash.org/1955/07/09/statement-manifesto/', 'Texto primário e lista de signatários mantidos pela Pugwash; Russell explicitamente listado.'), source('Bertrand Russell Archives — McMaster University', 'https://library.mcmaster.ca/node/238', 'Arquivo institucional confirma identidade 1872–1970; não gera scores.')],
    claims: [claim('dip', 'moderate-second', 'high', titles.russell, '1955-07-09', 'Resolution final e Signatories, Bertrand Russell', 'Subscreve apelo aos governos para resolver todas as disputas por meios pacíficos, evitando guerra mundial.', 'Compromisso diplomático pacífico sustentado por adesão explícita.', 'Argumento centrado em guerra mundial nuclear; não prova posição sobre qualquer conflito convencional ou defesa em outros períodos.')],
    unresolved: ['Demais onze eixos: manifesto não sustenta plataformas sobre Estado, economia, costumes ou religião.', 'Preocupação com armas nucleares não é rejeição tecnológica.'],
  },
  {
    id: 'voltairine-de-cleyre', name: 'Voltairine de Cleyre', period: 'Direct Action, coletânea póstuma Selected Works, edição de 1914',
    rationale: 'O ensaio articula iniciativa trabalhadora e acesso coletivo aos recursos e meios de produção.',
    caveats: 'Ação direta pode ser pacífica ou violenta segundo a autora; portanto não codifica pacifismo. Crítica eleitoral não equivale a apoio à autocracia.',
    sources: [source(titles.cleyre, 'https://www.gutenberg.org/cache/epub/43098/pg43098-images.html', 'Texto primário em coletânea póstuma publicada em maio de 1914; Direct Action, pp. 220–242. Ano original do ensaio não informado nessa seção.'), source('Selected Works of Voltairine de Cleyre — catálogo Gutenberg', 'https://gutenberg.org/ebooks/43098', 'Identidade 1866–1912; edição póstuma de 1914. Não usa prefácio biográfico para valores.')],
    claims: [
      claim('eco', 'strong-first', 'high', titles.cleyre, '1914 (edição póstuma)', 'Direct Action, pp. 240–242; parágrafos I quite agree that the sources of life e And finally they must learn', 'Exige acesso livre aos recursos e instrumentos produtivos e expropriação da riqueza natural.', 'Transformação constitutiva da propriedade produtiva sustenta o polo público/social.', 'Acesso e expropriação coletiva não equivalem a administração estatal central.'),
      claim('pod', 'moderate-second', 'medium', titles.cleyre, '1914 (edição póstuma)', 'Direct Action, pp. 221–223 e 240–242; Every person who ever had a plan; They must learn that if they want to win battles; réplica But the military power', 'Defende liberdade dos trabalhadores para agir em conjunto e resistir à coerção militar contra sua organização.', 'Autonomia de organização e resistência à coerção sustentam liberdade no subtema trabalhista.', 'Estratégia de ação não descreve todo o eixo de coerção/segurança; não inferir modelo completo de governo.'),
    ],
    unresolved: ['rep/dip: crítica eleitoral e pluralidade de meios não autorizam autocracia ou pacifismo.', 'est/imi/int/con/com/rel/mor/tec: sem suporte suficiente neste ensaio.'],
  },
  {
    id: 'olaudah-equiano', name: 'Olaudah Equiano', period: 'The Interesting Narrative, 1789; apelo abolicionista no capítulo XII',
    rationale: 'O apelo público reivindica liberdade dos africanos escravizados com justificação moral cristã.',
    caveats: 'Não transforma comércio com a África em doutrina de livre comércio. O relato autobiográfico e sua localização de nascimento têm debates historiográficos; o apelo assinado permanece objeto desta codificação.',
    sources: [source(titles.equiano, 'https://www.gutenberg.org/cache/epub/15399/pg15399-images.html', 'Texto primário autobiográfico; capítulo XII inclui petição assinada Gustavus Vassa e defesa da abolição.'), source('The Interesting Narrative — catálogo Gutenberg', 'https://www.gutenberg.org/ebooks/15399', 'Identidade catalográfica Equiano, 1745–1797; ano de nascimento convencional, não resolvido pelo presente lote.')],
    claims: [
      claim('mor', 'moderate-first', 'medium', titles.equiano, '1789', 'Cap. XII; petição à rainha, parágrafo I presume, therefore; conclusão Tortures, murder', 'Pede elevar africanos escravizados à condição e direitos de pessoas livres e abolir o tráfico.', 'Emancipação racial sustenta progressismo no subtema abolicionista.', 'Não cobre gênero ou todos os costumes; linguagem e deferência monárquica são do contexto histórico.'),
      claim('rel', 'moderate-second', 'medium', titles.equiano, '1789', 'Cap. XII; parágrafos May Heaven make the British senators e Those that honour their Maker', 'Justifica compaixão e liberdade por deveres perante Deus e citações bíblicas.', 'Religião estrutura explicitamente o argumento público moral.', 'Não fornece programa teocrático; um apelo religioso não demonstra todos os arranjos de Estado e religião.'),
    ],
    unresolved: ['rep: deferência à rainha não prova autocracia; mor não implica democracia.', 'est/pod/imi/dip/int/eco/con/com/tec: sem cobertura suficiente no recorte.'],
  },
  {
    id: 'dadabhai-naoroji', name: 'Dadabhai Naoroji', period: 'Discurso parlamentar de 2 de junho de 1893; cartas de 1885 e 1903 como contexto',
    rationale: 'O discurso exige igualdade racial e religiosa no acesso ao serviço público da Índia.',
    caveats: 'Recorte distingue discurso de Naoroji das falas de Paul, Curzon e citações de Lytton. Autogoverno sob supremacia britânica nas cartas não vira doutrina universal de não intervenção.',
    sources: [source(titles.naoroji, 'https://api.parliament.uk/historic-hansard/commons/1893/jun/02/civil-service-of-india-examination', 'Registro parlamentar primário; seção MR. NAOROJI, colunas 111–116, não o debate inteiro como opinião única.'), source('A Nationalist’s Letter Box — correspondência de Naoroji, Dinyar Patel', 'https://dinyarpatel.com/naoroji/letter-box/', 'Transcrições primárias selecionadas por historiador: cartas de Naoroji a Slagg (1885) e Dutt (1903); contexto sem eixo adicional.'), source('Mr Dadabhai Naoroji — Hansard', 'https://api.parliament.uk/historic-hansard/people/mr-dadabhai-naoroji/index.html', 'Identidade histórica, falecimento em 1917. O dia exibido difere de outras cronologias; este lote usa apenas o ano.')],
    claims: [claim('mor', 'moderate-first', 'medium', titles.naoroji, '1893-06-02', 'MR. NAOROJI, HC Deb 02 June 1893 vol. 13, cc111–116; parágrafo The question simply was', 'Exige admissão igual ao serviço público sem distinção de raça, classe ou credo e denuncia promessas violadas.', 'Igualdade racial e religiosa sustenta o subtema emancipatório.', 'Acesso profissional não cobre todos os costumes nem política de gênero; reivindicação ocorre dentro do império.')],
    unresolved: ['int/rep: cartas sobre autogoverno não especificam doutrina universal de intervenção ou desenho eleitoral.', 'est/pod/imi/dip/eco/con/com/rel/tec: sem suporte suficiente no material lido.'],
  },
];

export const historicalFigureBatch02: ReferenceEntry[] = historicalFigureBatch02Specs.map(spec => {
  const entry: ReferenceEntry = {
    id: spec.id, name: spec.name, kind: 'person', category: 'historical-figure', period: spec.period,
    rationale: spec.rationale, caveats: spec.caveats, sources: spec.sources,
    vec: Object.fromEntries(AXES.map(({ key }) => [key, 50])) as ReferenceEntry['vec'], evidence: {}, axisEvidence: {}, coding: {},
  };
  for (const input of spec.claims) {
    const coded = codeReferenceAxis(input, spec.sources);
    entry.vec[input.axis] = coded.value;
    entry.evidence[input.axis] = coded.evidence;
    entry.axisEvidence![input.axis] = coded.axisEvidence;
    entry.coding![input.axis] = coded.coding;
  }
  return entry;
});
