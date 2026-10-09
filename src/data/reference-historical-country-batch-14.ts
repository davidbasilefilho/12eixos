import type { AxisKey, ReferenceEntry, ReferenceSource } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';

const axes: AxisKey[] = ['est', 'rep', 'pod', 'imi', 'dip', 'int', 'eco', 'con', 'com', 'rel', 'mor', 'tec'];
const reviewedOn = '2026-10-08';
export type HistoricalCountryBatch14Entry = ReferenceEntry & {
  kind: 'country'; category: 'historical-country';
  documentaryReview: {
    status: 'accepted-bounded-primary-and-identity'; reviewedOn: string;
    independentReview: 'accepted-selected-primary-clauses-and-identity'; scope: string;
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
): HistoricalCountryBatch14Entry {
  const result: HistoricalCountryBatch14Entry = {
    ...entry, kind: 'country', category: 'historical-country',
    vec: Object.fromEntries(axes.map(axis => [axis, 50])) as Record<AxisKey, number>,
    evidence: {}, axisEvidence: {}, coding: {},
    documentaryReview: { status: 'accepted-bounded-primary-and-identity', reviewedOn, independentReview: 'accepted-selected-primary-clauses-and-identity', scope: reviewScope },
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
const title='Constituição argentina1949 — republicação do texto primário';
export const historicalCountryBatch14:HistoricalCountryBatch14Entry[]=[profile({
 id:'argentina-first-peron-administration-1946',name:'Argentina — primeira administração peronista1946–1955',aliases:['Argentina — primeiro peronismo1946–1955'],
 period:'04/06/1946–ruptura política19/09/1955; recorte normativo11/03/1949',
 rationale:'Administração contínua dos dois primeiros mandatos de Perón, encerrada por golpe e junta militar. Código descreve desenho constitucional1949, não média de toda prática1946–55 ou uma identidade criada apenas pela emenda.',
 caveats:'República anterior1946, renovação1952 e constituição1949 não são contadas separadamente. Texto primário republicado por historiador privado, com erros tipográficos, não fac-símile oficial autenticado. Arquivo oficialANM166p revelou introdução moderna mas corpo fundador ainda não cotejado; downloaddireto403. Garantias/elegibilidade eleitoral de1949 não certificam pluralismo praticado, censura ou repressão: tensões com oposição/Igreja são preservadas na biografia institucional. FRUSnota192 marca resignação e junta19/09/1955, distinta do intervalo presidencial21/09 em lista institucional; usamos ruptura política, não data legal precisa pacificada. Seis direções normativas aceitas pelo Root após cotejo independente selecionado, sem certificação de toda prática.',
 sources:[source(title,'https://elhistoriador.com.ar/constitucion-de-la-nacion-argentina-1949/','Texto primário republicado, sancionado11/03/1949 e assinatura. Leitura efetiva1–103 e disposições transitórias; não cotejo de imagem ou originalANM. Cabeçalho web2026 é wrapper, não data normativa. Erros evidentes99remete50 e83termoimpresso não corrigidos por inferência.'),source('Casa Rosada — Juan Domingo Perón, biografia institucional2025','https://www.casarosada.gob.ar/la-casa-rosada/bustos-presidenciales/50907-juan-domingo-peron-1895-1974','Corpo completo biografia/presidência realmente lido: posse04/06/1946, primeirosmandatos1946–52/1952–55, golpe1955. Retrospectiva oficial, não programa primário nem fonte de scores econômicos; tensão com oposição e Igreja explícita.'),source('FRUS1955–1957volumeVII — nota editorial192','https://history.state.gov/historicaldocuments/frus1955-57v07/d192','Corpo completo da nota efetivamente lido: revolta16setembro, resignação forçada19setembro e junta no mesmo dia. Fonte editorial oficial baseada em despachos arquivados, não texto original do ato de destituição. Identidade terminal apenas, sem códigos derivados.')]
},normRows(title,'1949-03-11',[
 ['est','moderate-first','1/5–6/22/97–103','Províncias conservam poderes não delegados, instituições e eleição própria de governadores e legisladores.','Competência territorial política própria sustenta descentralização moderada.','Supremacia22, códigos nacionais68(11), intervenção6, governadores agentes federais103 e cooperação5 limitam autonomia. Não independência ou eficácia federativa1946–55.'],
 ['rep','moderate-first','42/47/82;contrapontos15/21/43/48/77–78/transitórias4–6','Deputados, senadores e presidente são escolhidos diretamente pelo eleitorado; mandatos renováveis e impeachment46/52.','Escolha representativa renovável sustenta democracia normativa moderada.','Reeleição presidencial78 sem limite expresso, exclusões de organizações15/21, critérios de nacionalidade e confissão77, adaptação de mandatos/transitória6 e nova confirmação de nomeações4. Não sufrágio universal por ambos sexos inferido desse texto nem prática plural integral.'],
 ['pod','moderate-second','26–30/35/90–91;contrapontos15/21/29/32/34/83(19)','Direitos gerais de expressão sem censura prévia, privacidade, defesa judicial e habeas corpus com controle imediato.','Garantias ordinárias gerais sustentam liberdade normativa moderada.','Prisão por autoridade competente não necessariamente mandado judicial; foro militar29, moral pública30, dever de armar-se em defesa da Pátria32, suspensão34 em sítio e prevenção com detenção até30dias. Proibições de organizações15/21; não saldo empírico de repressão.'],
 ['eco','moderate-first','38–40/68(5);contrapontos38/40','Recursos energéticos/minerais nacionais e serviços públicos inalienáveis se articulam ao comércio externo estatal e bancos oficiais.','Direção pública nacional atravessa recursos, infraestrutura, comércio e finanças, sustentando proposta moderada além de um fornecedor público.','Demais atividades se organizam por iniciativa privada e propriedade privada tem função social com compensação/expropriação por lei. Transferência de serviços depende lei; não maioria produtiva pública executada nem autorização genérica usada sozinha.'],
 ['con','moderate-second','40;contrapontos38–40/68(5)','Regra geral organiza a atividade econômica pela iniciativa privada e veda dominação dos mercados, supressão da concorrência e lucros usurários.','Organização geral por iniciativa concorrencial sustenta proposta de alocação mercantil moderada, distinta da propriedade pública de setores.','Comércio externo estatal e intervenção/monopólio legais autorizados; capital subordinado ao bem-estar39, bancos oficiais68(5). Não plano quinquenal lido, desregulação integral ou execução de mercados em toda economia.'],
 ['rel','moderate-second','2/77/81/83(8–9);contrapontos26/68(19–20)','Governo sustenta culto católico; chefia presidencial exige comunhão católica e exerce patronato nacional.','Vínculo confessional institucional amplo sustenta orientação religiosa moderada.','Culto individual livre26; aprovação de concordatas e ordens pelo Congresso68. Não exclusividade do culto ou prática estável após conflito Igreja1954–55.']
]),'Root aceitou seis normas e identidade após leitura independente selecionada1–35/37família-cultura/38–44/47–68selecionados/77–83/90–103/transitórias1–6/assinatura, CasaRosada1–18 e FRUS192nota4–5. Não cotejo independente completo1–103 ou fac-símile oficial; autoria completa permanece distinta.',{
 imi:'Admissão europeia17 e nacionalização31 são facetas migratórias, não direção cultural geral; cursos nacionais37IV e cultura regional não codificados sem análise de amplitude.',
 mor:'Igualdade de cônjuges37II convive com instrução doméstica feminina rural37IV2; nenhum conjunto suficiente sobre orientação familiar/cultural geral foi consolidado.',
 dip:'Tratados de paz/comércio19 convivem com defesa32 e guerra/represálias68/83; não direção diplomática geral verificada.',
})];
export const historicalCountryBatch14Audit={identityAdditions:1,acceptedNormAxes:6,unknownAxes:6,documentaryAcceptance:'accepted-selected-primary-clauses-and-identity'}as const;
