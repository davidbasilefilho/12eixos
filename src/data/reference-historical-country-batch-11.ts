import type { AxisKey, ReferenceEntry, ReferenceSource } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';

const axes: AxisKey[] = ['est', 'rep', 'pod', 'imi', 'dip', 'int', 'eco', 'con', 'com', 'rel', 'mor', 'tec'];
const reviewedOn = '2026-10-08';
export type HistoricalCountryBatch11Entry = ReferenceEntry & {
  kind: 'country'; category: 'historical-country';
  documentaryReview: {
    status: 'author-reviewed-bounded-claims'; reviewedOn: string;
    independentReview: 'accepted-bounded-primary-and-identity'; scope: string;
  };
  unknownAxisReasons: Partial<Record<AxisKey, string>>;
};
const source = (title: string, url: string, note: string): ReferenceSource => ({ title, url, note });
const claim = (
  sourceTitle: string, locator: string, statement: string,
  basis: 'norm' | 'practice' | 'declaration', publishedDate: string,
) => ({ sourceTitle, locator, statement, basis, publishedDate, accessedDate: reviewedOn });
function profile(
  entry: Pick<ReferenceEntry, 'id' | 'name' | 'aliases' | 'period' | 'rationale' | 'caveats' | 'sources'>,
  inputs: Omit<ReferenceAxisCoding, 'reviewedOn'>[],
  reviewScope: string,
  unknownAxisReasons: Partial<Record<AxisKey, string>> = {},
): HistoricalCountryBatch11Entry {
  const result: HistoricalCountryBatch11Entry = {
    ...entry, kind: 'country', category: 'historical-country',
    vec: Object.fromEntries(axes.map(axis => [axis, 50])) as Record<AxisKey, number>,
    evidence: {}, axisEvidence: {}, coding: {},
    documentaryReview: { status: 'author-reviewed-bounded-claims', reviewedOn, independentReview: 'accepted-bounded-primary-and-identity', scope: reviewScope },
    unknownAxisReasons: {},
  };
  for (const input of inputs) {
    if (result.coding![input.axis]) throw new Error(`${entry.id}: duplicate axis coding`);
    const coded = codeReferenceAxis({ ...input, reviewedOn }, entry.sources);
    result.vec[input.axis] = coded.value;
    result.evidence[input.axis] = coded.evidence;
    result.axisEvidence![input.axis] = coded.axisEvidence;
    result.coding![input.axis] = coded.coding;
  }
  for (const axis of axes) if (!result.coding![axis]) {
    result.unknownAxisReasons[axis] = unknownAxisReasons[axis]
      ?? 'As passagens revisadas não estabelecem direção suficientemente delimitada para este construto; 50 é desconhecido, sem graduação.';
  }
  return result;
}

type Row = [AxisKey, ReferenceAxisCoding['position'], string, string, string, string];
function normRows(title: string, date: string, rows: Row[]): Omit<ReferenceAxisCoding,'reviewedOn'>[] {
  return rows.map(([axis,position,locator,statement,rationale,uncertainty])=>({axis,position,confidence:'medium',claims:[claim(title,locator,statement,'norm',date)],rationale,uncertainty}));
}
const title = 'Constituição brasileira1946 — Câmara dos Deputados, republicação';
export const historicalCountryBatch11: HistoricalCountryBatch11Entry[] = [profile({
 id:'brazil-fourth-republic-1946',name:'Brasil — Quarta República',aliases:['Brasil — República Populista1946–1964','Brasil — ordem constitucional1946'],
 period:'31/01/1946–ruptura política de31/03/1964; recorte normativo original de18/09/1946',
 rationale:'Retorno de governo eleito e ordem representativa federal após o Estado Novo; ruptura militar encerra o regime. A identidade não transforma cada emenda ou mudança de gabinete em país distinto.',
 caveats:'Norma original1946, não média da prática1946–1964. Interlúdio parlamentar1961–1963 reconhecido sem perfil adicional. Ruptura política1964 não significa revogação formal imediata: AI1 mantém a Constituição com alterações autoritárias. Imigração permanece desconhecida diante de abertura142 e seleção/assimilação162/5XV r/168I; nenhuma sexta direção foi criada para o gate. Fontes legislativas são transcrições oficiais, não inspeção visual dos exemplares originais.',
 sources:[
 source(title,'https://www2.camara.leg.br/legin/fed/consti/1940-1949/constituicao-1946-18-julho-1946-365199-republicacao-1-pl.html','Corpo normativo oficial realmente aberto:1–59,131–175,176–182,205–218. Data18setembro1946 no corpo, apesar do slug18julho. Republicação, sem afirmar inspeção visual do DOU ou auditoria de todas as emendas.'),
 source('Senado200anos — cronologia institucional','https://www12.senado.leg.br/senado200anos/passado','Corpo realmente lido:29out1945 deposição de Vargas;31jan1946 posse de Dutra,1fev1946 Constituinte,18set1946 promulgação; interlúdio parlamentar1961–1963;31mar1964 golpe. Retrospectiva institucional, não fonte de práticas em todos os eixos.'),
 source('AI1 de9abril1964 — Câmara dos Deputados, publicação original','https://www2.camara.leg.br/legin/fed/atoins/1960-1969/atoinstitucional-1-9-abril-1964-364977-publicacaooriginal-1-csr.html','Autoria abriu realmente corpo completo: preâmbulo e1–11. Renderer da revisão independente não exibiu corpo; não nova leitura independente do AI1. Mantém carta1946, altera eleição presidencial e permite cassação/exclusão judicial. Usado para identidade terminal; não projeta seus dispositivos retroativamente na carta original.')
 ]
},normRows(title,'1946-09-18',[
 ['est','moderate-first','Arts.1–2,18,28; contrapontos5/7–14/25–26/28§§1–2','Estados possuem constituições e poderes reservados; municípios administram interesses locais e rendas.','Autonomia federativa efetiva no desenho sustenta direção moderada descentralizada.','Competências nacionais amplas, intervenção e Distrito Federal administrado por prefeito nomeado; capitais e bases militares têm exceções à eleição municipal. Não prática federativa integral.'],
 ['rep','moderate-first','Arts.37–38,56–60,131–134; contrapontos132/135/141§13','Legislaturas periódicas e sufrágio direto/secreto com representação proporcional e ambos os sexos.','Estrutura eletiva renovável e representação plural sustentam desenho democrático moderado.','Exclui analfabetos, quem não se exprime na língua nacional e parte das praças militares; partidos contrários ao regime plural podem ser proibidos. Não certifica eleições livres de toda coerção observada.'],
 ['pod','moderate-second','Art.141§§1–6/11–12/15/20–31; contrapontos141§§5/13/23 e206–215','Direitos gerais, controle judicial, processo/defesa, privacidade, expressão e habeas corpus.','Conjunto de garantias ordinárias sustenta direção moderada de liberdade normativa.','Censura de diversões, proibição partidária e exceção disciplinar ao habeas; estado de sítio permite detenção, desterro, censura e suspensão de reunião, sujeito a duração e controle parlamentar/judicial. Não ausência de repressão.'],
 ['dip','moderate-second','Art.4; contrapontos5II–VI e176–181','Guerra depende do fracasso de meios pacíficos; guerra de conquista é categoricamente excluída.','Regra geral da política de guerra sustenta direção pacífica moderada, como norma.','Mantém defesa armada e serviço militar obrigatório; não pacifismo absoluto nem conduta externa efetivamente auditada.'],
 ['rel','moderate-first','Arts.31II–III,141§§7–10; contrapontos31Vb/168V/196','Proíbe estabelecimento/subvenção de cultos e aliança/dependência de igrejas; garante crença e cemitérios seculares.','Relação geral entre Estado e religião sustenta secularismo moderado.','Permite colaboração de interesse coletivo, isenção de templos, assistência religiosa militar, ensino religioso facultativo e representação junto à Santa Sé; culto limitado por ordem pública/bons costumes.']
]), 'Autoria leu passagens primárias e cronologia institucional; passagens codificadas e cronologia cotejadas independentemente; prática histórica não auditada integralmente, sem auditoria integral da prática.',{
 imi:'Entrada geral em paz142 contraposta à seleção por interesse nacional162, incorporação indígena5XV r e ensino primário em língua nacional168I; direção global não resolvida pela autoria.',
 eco:'145 concilia iniciativa livre e justiça social;146/147 permitem intervenção/monopólio/distribuição sem estabelecer propriedade produtiva geral predominante. Crédito rural150 ou educação pública não resolvem o eixo.',
 con:'Conselho205 estuda e sugere, sem programa obrigatório de alocação geral; planos regionais198/199 não equivalem a planejamento integral da economia.',
 mor:'Casamento indissolúvel163 e igualdade salarial157II não foram convertidos em direção moral global; não há cotejo suficiente de todos os domínios.',
})];
const firstTitle='Constituição brasileira1891 — Câmara, publicação original';
historicalCountryBatch11.push(profile({
 id:'brazil-first-republic-1889',name:'Brasil — Primeira República',aliases:['Brasil — República Velha','Brasil — ordem republicana1891'],
 period:'15/11/1889–ruptura política de24/10/1930; recorte normativo original de24/02/1891',
 rationale:'República federal substitui monarquia; governo provisório1930 dissolve legislaturas e suspende garantias. Não cria identidade por reforma1926; texto fundador é o único recorte codificado.',
 caveats:'Norma original1891, não prática oligárquica1889–1930. Carta não assegura voto secreto nem nomeia sufrágio feminino; exclusões e reconhecimento parlamentar dos mandatos são limites. Retrospectiva Câmara documenta fraudes/voto aberto e exclusão feminina, sem converter tais fatos em orientação autocrática deduzida. Reformas1926, que restringem entrada e modificam direitos, não retrojetadas. Continuidade formal da carta após golpe não significa continuidade do regime.',
 sources:[
 source(firstTitle,'https://www2.camara.leg.br/legin/fed/consti/1824-1899/constituicao-35081-24-fevereiro-1891-532699-publicacaooriginal-15017-pl.html','Corpo original oficial realmente aberto/lido1–48/63–91 e transitória1; passagens72completas. Publicação original transcrita, não fac-símile visual. Sem substituir por reformas1926.'),
 source('Constituição1891 — Planalto, original e alterações1926','https://www.planalto.gov.br/ccivil_03/constituicao/constituicao91.htm','Corpo realmente aberto: texto original tachado e emenda1926 separados. Encoding defeituoso; apenas cotejo da versão, não leitura de mudanças como texto fundador.'),
 source('A1República — cronologia Câmara','https://www2.camara.leg.br/a-camara/conheca/historia/a1republica.html/','Corpo institucional efetivamente lido,24out1930 deposição/prisão presidencial e Junta; críticas ao voto aberto/fraudes/exclusão feminina. Erro1935 no parágrafo subsequente não reutilizado. Retrospectiva, não documento original do golpe.'),
 source('Decreto19398/1930 — Câmara, publicação original','https://www2.camara.leg.br/legin/fed/decret/1930-1939/decreto-19398-11-novembro-1930-517605-publicacaooriginal-1-pe.html','Texto primário1–16 realmente aberto: funções discricionárias, dissolução legislaturas2, manutenção constitucional restrita4, suspensão garantias5 e ratificação da Junta24out14. Identidade terminal, sem retroagir normas à carta1891.')
 ]
},[
 ...normRows(firstTitle,'1891-02-24',[
 ['est','moderate-first','1/4–6/9/63–68; contraponto34','Constituições estaduais e poderes residuais próprios; municípios têm autonomia de interesses locais.','Competência constitucional estadual própria sustenta descentralização moderada.','União mantém poderes nacionais, intervenção6 e requisitos constitucionais; não federalismo sem hierarquia ou prática integral.'],
 ['rep','moderate-first','16–18/28/30–31/43/47/70;transitória1','Câmaras e Presidência em regra eleitas diretamente, com mandatos renováveis e representação minoritária.','Arquitetura representativa eletiva sustenta direção democrática moderada normativa.','Exclui mendigos, analfabetos, praças e ordens religiosas70; primeiro Executivo eleito pelo Congresso, que também resolve falta de maioria47. Não voto secreto/feminino assegurado ou pleitos efetivamente livres.'],
 ['pod','moderate-second','72§§1–2/8–9/11–16/18–23; contraponto80','Liberdades ordinárias, defesa/processo, habeas corpus, privacidade e expressão sem censura.','Garantias gerais e remédios contra abuso sustentam liberdade normativa moderada.','Prisão e fiança têm exceções legais; sítio suspende garantias, admite detenção/desterro e prestação posterior de contas ao Congresso. Não qualidade ou efetividade real.'],
 ['dip','moderate-second','34XI/88; contrapontos14/48VIII/86–87','Arbitramento precede autorização de guerra e conquista é proibida em qualquer hipótese.','Regras gerais de conflito sustentam direção pacífica moderada.','Defesa e serviço militar mantidos; Presidente pode declarar guerra imediatamente por invasão/agressão. Não pacifismo absoluto ou prática externa.'],
 ['rel','moderate-first','11II/72§§3–7/28–29','Cultos livres, ensino público leigo, casamento civil e ausência de subvenção/aliança eclesial.','Regra estatal ampla de separação sustenta secularismo moderado.','Cultos/cemitérios sujeitos às leis/moral pública; recusa de dever cívico religioso perde direitos políticos. Não liberdade de consciência sem limitações.']
 ])
], 'Cinco normas de norma original1891; passagens codificadas e cronologia cotejadas independentemente; prática histórica não auditada integralmente, sem auditoria integral da prática ou emendas.',{
 imi:'Entrada sem passaporte72§10 e incentivo35II cobrem somente admissão migratória; não direção cultural/linguística geral. Pesquisa preservada,50desconhecido.',
 eco:'Direito geral de propriedade72§17 e minas privadas não estabelecem orientação produtiva geral suficiente; sem extrapolar propriedade jurídica para economia inteira.',
 con:'Poderes legislativos e incentivo econômico35II não demonstram sistema geral de alocação por plano ou mercado.',
 mor:'Casamento civil72§4 é relação estatal religiosa; ausência de direitos familiares/sexuais amplamente cotejados impede direção moral global.'
}));
export const historicalCountryBatch11QuarantinedResearch = [{id:'brazil-first-republic-1889',status:'rejected-whole-cultural-scope',coding:{axis:'imi',position:'moderate-second',confidence:'medium',relatedQuestionIds:['imigracao_18'],rationale:'Regra geral de ingresso/saída e estímulo à imigração sustentam abertura moderada na faceta migratória.',uncertainty:'72§10 só tempo de paz; não prova acolhimento real, preservação cultural universal ou ausência de leis infraconstitucionais restritivas. Texto1926 acrescenta condições/expulsão e não é codificado aqui.',claims:[claim(firstTitle,'72§10/35II;contraponto69','Entrada e saída em paz sem passaporte; Congresso deve estimular imigração, com condições separadas de cidadania.','norm','1891-02-24')]}},{id:'brazil-fourth-republic-1946',axis:'imi',locator:'142–143/162;5XV r/168I/216',proposedPosition:'moderate-second',status:'author-unresolved',note:'Entrada/permanência/saída geral em paz; expulsão por dano à ordem pública, seleção migratória nacional e política assimilatória contrapostas. Não ativo nem elegível.'}];
export const historicalCountryBatch11Audit = historicalCountryBatch11.map(entry=>({id:entry.id,documentedAxes:Object.keys(entry.coding??{}),unknownAxes:axes.filter(axis=>!entry.coding?.[axis]),independentReview:'accepted-bounded-primary-and-identity'}));
