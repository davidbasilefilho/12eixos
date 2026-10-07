import type { AxisKey, ReferenceEntry, ReferenceSource } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';

const axes: AxisKey[] = ['est', 'rep', 'pod', 'imi', 'dip', 'int', 'eco', 'con', 'com', 'rel', 'mor', 'tec'];
const reviewedOn = '2026-10-07';
export type HistoricalCountryBatchEntry = ReferenceEntry & {
  kind: 'country'; category: 'historical-country';
  documentaryReview: {
    status: 'author-reviewed-bounded-claims'; reviewedOn: string;
    independentReview: 'pending'; scope: string;
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
): HistoricalCountryBatchEntry {
  const result: HistoricalCountryBatchEntry = {
    ...entry, kind: 'country', category: 'historical-country',
    vec: Object.fromEntries(axes.map(axis => [axis, 50])) as Record<AxisKey, number>,
    evidence: {}, axisEvidence: {}, coding: {},
    documentaryReview: { status: 'author-reviewed-bounded-claims', reviewedOn, independentReview: 'pending', scope: reviewScope },
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

const articlesTitle = 'Articles of Confederation (1777) — National Archives';
const federalActTitle = 'German Federal Act, 8 June 1815 — GHDI';
const viennaTitle = 'Final Act of the Viennese Ministerial Conferences, 15 May 1820 — GHDI';
const germanContextTitle = 'Die Deutsche Bundesakte von 1815 — Deutsches Historisches Museum';
const statuteTitle = 'Statuto Albertino, 4 marzo 1848 — Quirinale';
const statuteTranslationTitle = 'Statuto Albertino — tradução histórica em Wikisource';
const texasTitle = 'Constitution of the Republic of Texas, 17 March 1836 — Washington on the Brazos';
const texasContextTitle = 'Texas — Office of the Historian, U.S. Department of State';

/** Four new historical identities; no six-axis eligibility padding. Unknown axes remain absent. */
export const historicalCountryBatch: HistoricalCountryBatchEntry[] = [
  profile({
    id: 'us-articles-confederation-1781', name: 'Estados Unidos — Artigos da Confederação',
    aliases: ['Confederação norte-americana sob os Artigos de 1781'],
    period: 'Ordem confederal dos Artigos, 1781–1789',
    rationale: 'Os Estados preservavam poderes não delegados; o Congresso comum operava sob competências enumeradas e dependência financeira dos Estados.',
    caveats: 'O perfil trata da ordem anterior à Constituição federal de 1789, não do New Deal, da Reconstrução nem dos Estados Confederados de 1861. Confederação e federação moderna não são equivalentes. Não codificamos eleitorados estaduais nem presumimos direitos universais.',
    sources: [source(articlesTitle, 'https://www.archives.gov/milestone-documents/articles-of-confederation', 'Transcrição primária e contexto arquivístico: vigência em 1781–1789, artigos II, V, VIII, IX e XIII e limitações fiscais efetivas do Congresso.')],
  }, [{
    axis: 'est', position: 'strong-first', confidence: 'high', relatedQuestionIds: ['estrutura_01', 'estrutura_05'],
    claims: [
      claim(articlesTitle, 'Transcript, articles II, V, VIII, IX and XIII', 'Poderes residuais permanecem nos Estados; delegados podem ser revogados; financiamento comum depende da arrecadação estadual. Há competências congressuais enumeradas e alterações unânimes.', 'norm', '1777-11-15; vigência a partir de 1781-03-01'),
      claim(articlesTitle, 'Contexto antes de “Transcript”, parágrafos sobre tributação e comércio', 'O arquivo descreve insuficiência efetiva de poderes centrais para tributar e regular comércio, corroborando a autonomia estadual sem confundir fraqueza fiscal com planejamento econômico.', 'practice', 'Página institucional revisada em 2023-10-23; relata 1781–1789'),
    ],
    rationale: 'Autonomia constitucional residual e dependência financeira do centro sustentam direção descentralizadora forte no eixo federal/unitário, não apenas a palavra confederação.',
    uncertainty: 'A âncora 80 representa descentralização confederal formal e não mede uma intensidade comparável estatisticamente a federações atuais. Congresso tinha competências comuns reais; não era ausência completa de governo central.',
  }], 'Artigos institucionais e contexto fiscal lidos; somente estrutura territorial codificada.', {
    rep: 'Delegados estaduais não informam, sozinhos, o alcance do sufrágio ou a democracia efetiva de toda a confederação.',
    com: 'Regras de trânsito e comércio entre Estados não demonstram a orientação geral do comércio internacional.',
    dip: 'Limites a tropas em paz coexistem com defesa e milícias; não se inferiu pacifismo.',
  }),
  profile({
    id: 'german-confederation-1815', name: 'Confederação Germânica', aliases: ['Deutscher Bund'],
    period: 'Ordem confederal dos atos de 1815 e 1820, 1815–1866',
    rationale: 'Uma associação de Estados soberanos era dirigida por enviados dos governos; o princípio monárquico condicionava a participação de assembleias territoriais.',
    caveats: 'A Confederação não era o Império Alemão de 1871 nem uma federação nacional com governo popular. A revolução de 1848–1849 e a variedade dos Estados limitam qualquer média de 51 anos; o recorte codifica o desenho confederal predominante, não todos os governos locais.',
    sources: [
      source(federalActTitle, 'https://germanhistorydocs.org/en/from-vormaerz-to-prussian-dominance-1815-1866/german-federal-act-june-8-1815', 'Seleções primárias traduzidas: soberania dos membros e assembleia de plenipotenciários; contexto identifica encerramento em agosto de 1866.'),
      source(viennaTitle, 'https://germanhistorydocs.org/en/from-vormaerz-to-prussian-dominance-1815-1866/final-act-of-the-viennese-ministerial-conferences-may-15-1820', 'Seleções primárias traduzidas: artigos 53–59 sobre autonomia interna, assembleias estamentais e autoridade principesca.'),
      source(germanContextTitle, 'https://www.dhm.de/lemo/kapitel/vormaerz-und-revolution/wiener-kongress/bundesakte', 'Contexto do museu nacional sobre enviados vinculados aos governos e ausência de representação popular confederal, com limites das assembleias locais.'),
    ],
  }, [
    {
      axis: 'est', position: 'strong-first', confidence: 'high', relatedQuestionIds: ['estrutura_01', 'estrutura_05'],
      claims: [
        claim(federalActTitle, 'Articles 1–4 and 11', 'Os Estados soberanos formam união permanente com assembleia comum e conservam direitos de alianças sob limites federais.', 'norm', '1815-06-08'),
        claim(viennaTitle, 'Article 53', 'A autonomia garantida exclui em regra interferência confederal nas instituições e administração internas dos Estados, com exceções de obrigações comuns.', 'norm', '1820-05-15'),
      ],
      rationale: 'Autonomia institucional interna e membros soberanos sustentam descentralização forte, embora exista obrigação e órgão confederal comum.',
      uncertainty: 'Estados associados não são equivalentes a entes de uma federação moderna; a âncora expressa apenas o polo descentralizador. Prússia e Áustria tinham poder desigual e o ato admitia obrigações conjuntas.',
    }, {
      axis: 'rep', position: 'strong-second', confidence: 'high', relatedQuestionIds: ['representacao_10', 'representacao_15'],
      claims: [
        claim(viennaTitle, 'Articles 54–59, especialmente 57', 'O poder estatal é reservado aos soberanos, com participação limitada de assembleias estamentais e exceção das cidades livres.', 'norm', '1820-05-15'),
        claim(germanContextTitle, 'Parágrafos que começam “Einziges Bundesorgan” e “Der Deutsche Bund besaß”', 'A assembleia comum consistia de enviados instruídos pelos governos; não existia representação popular confederal.', 'practice', '2014-10-10; contexto histórico de 1815–1866'),
      ],
      rationale: 'No nível confederal, representação dos soberanos e reserva monárquica de autoridade sustentam direção autocrática forte; representação dos Estados não equivale a voto dos cidadãos.',
      uncertainty: 'Não se afirma ausência de toda instituição representativa nos Estados; cidades livres e constituições locais são contrapontos. A ruptura revolucionária de 1848–1849 impede ler o vetor como regime homogêneo ininterrupto.',
    },
  ], 'Atos constitutivos e contexto institucional examinados; variações locais e revolução explicitamente delimitadas.', {
    pod: 'A lei de imprensa de 1819 foi localizada, mas não estabelecemos uma leitura de implementação e mudanças para todos os 51 anos; o eixo permanece desconhecido.',
    rel: 'Igualdade entre confissões cristãs e desigualdade de cidadania judaica não estabelecem um único regime Estado–religião para todos os membros.',
  }),
  profile({
    id: 'sardinia-statuto-1848', name: 'Reino da Sardenha — monarquia estatutária', aliases: ['Reino da Sardenha sob o Statuto Albertino'],
    period: 'Monarquia representativa do Statuto Albertino, 1848–1861',
    rationale: 'A carta combina prerrogativas reais, câmara eletiva, garantias individuais e religião católica estatal com tolerância legal a outros cultos.',
    caveats: 'O objeto é a ordem formal do reino anterior à aplicação do estatuto à Itália unificada em 1861. Não estende a carta à ditadura fascista já catalogada. Evolução parlamentar, legislação eleitoral e execução das liberdades exigem pesquisa adicional; não tratamos texto normativo como medição de prática.',
    sources: [
      source(statuteTitle, 'https://www.quirinale.it/allegati_statici/costituzione/Statutoalbertino.pdf', 'Texto primário italiano preservado pela Presidência; páginas 1–5, artigos 1–10, 26–33 e 39–47.'),
      source(statuteTranslationTitle, 'https://en.wikisource.org/wiki/Statuto_Albertino', 'Tradução histórica do documento com ligação a fac-símile; cabeçalho distingue Sardenha (1848) e Itália (1861). A codificação usa a edição italiana oficial, não notas posteriores da tradução.'),
    ],
  }, [
    {
      axis: 'rep', position: 'moderate-second', confidence: 'medium', relatedQuestionIds: ['representacao_10', 'representacao_15'],
      claims: [claim(statuteTitle, 'Articles 2–9, 33 and 39–47; PDF pp. 1–5', 'O rei exerce Executivo e nomeia o Senado vitalício; leis dependem de rei e duas câmaras. A câmara dos deputados é eletiva e possui mecanismos legislativos e de acusação ministerial.', 'norm', '1848-03-04')],
      rationale: 'O desenho reserva poder material à Coroa sem eliminar a representação eletiva, justificando direção monárquica/autocrática moderada, em vez de equiparar monarquia constitucional a ditadura plena.',
      uncertainty: 'Este é o desenho da carta. Não quantificamos o eleitorado nem a evolução da responsabilidade parlamentar de gabinetes no período; por isso grau médio e âncora moderada.',
    }, {
      axis: 'pod', position: 'moderate-second', confidence: 'medium', relatedQuestionIds: ['poder_04', 'poder_19'],
      claims: [claim(statuteTitle, 'Articles 26–28, 32 and 71; PDF pp. 3 and 7', 'A carta protege liberdade individual, domicílio e processo legal, declara imprensa livre e veda tribunais extraordinários; permite repressão de abusos e submete reuniões públicas à polícia.', 'norm', '1848-03-04')],
      rationale: 'Garantias contra coerção arbitrária sustentam inclinação moderada à liberdade no recorte formal, contida pelas exceções policiais e de publicação.',
      uncertainty: 'Não é avaliação da repressão efetiva, de prisões políticas ou de liberdade para toda a população. As exceções impedem posição forte; aplicação histórica ainda não foi revisada.',
    }, {
      axis: 'rel', position: 'moderate-second', confidence: 'medium', relatedQuestionIds: ['religiao_03', 'religiao_08'],
      claims: [claim(statuteTitle, 'Articles 1, 28 and 33(1); PDF pp. 1, 3 and 4', 'O catolicismo é religião estatal; outros cultos são tolerados conforme lei. Livros religiosos dependem de permissão episcopal e arcebispos/bispos são uma categoria elegível ao Senado.', 'norm', '1848-03-04')],
      rationale: 'Religião estabelecida e papel institucional religioso sustentam direção religiosa moderada, limitada pela tolerância declarada a outros cultos.',
      uncertainty: 'Não se infere teocracia, domínio geral do direito religioso, crença dos habitantes nem ausência de conflito entre Coroa e Igreja. Estado confessional com tolerância não autoriza automaticamente âncora forte.',
    },
  ], 'Passagens normativas italianas e identificação histórica da tradução lidas; prática parlamentar/eleitoral não certificada.', {
    est: 'Monarquia e leis sobre municípios, isoladamente, não bastam para estimar a distribuição real de competências territoriais.',
    eco: 'Proteção constitucional da propriedade não mede composição pública/privada da economia.',
    dip: 'Comando militar do rei não estabelece militarismo de todo o regime.',
  }),
  profile({
    id: 'republic-texas-1836', name: 'República do Texas', aliases: ['Republic of Texas'],
    period: 'República independente sob a Constituição de 1836, 1836–1845',
    rationale: 'Instituições republicanas eletivas e proibição de preferência denominacional coexistiam com cidadania racialmente excludente e escravidão constitucionalmente protegida.',
    caveats: 'Trata de uma república historicamente independente, reconhecida pelos EUA em 1837, não do atual Estado federado. A anexação ocorreu em dezembro de 1845 e a transferência cerimonial em fevereiro de 1846. O território era disputado; eleições dos cidadãos admitidos não tornam universal a democracia nem os direitos declarados.',
    sources: [
      source(texasTitle, 'https://wheretexasbecametexas.org/texas-history/constitution-of-the-republic-of-texas-1836/', 'Transcrição primária de Laws of the Republic of Texas (1838), vol. I, pp. 9–25, no sítio histórico de Washington on the Brazos; artigos eleitorais e declaração de direitos confrontados com exclusões gerais.'),
      source(texasContextTitle, 'https://history.state.gov/countries/texas', 'Arquivo diplomático oficial documenta reconhecimento, anexação e dependência efetiva do trabalho escravizado na economia algodoeira.'),
    ],
  }, [
    {
      axis: 'rep', position: 'moderate-first', confidence: 'medium', relatedQuestionIds: ['representacao_01', 'representacao_07', 'representacao_16'],
      claims: [
        claim(texasTitle, 'Articles I–III and VI(11–16); Schedule 3; General Provisions 6, 9–10', 'Congresso e presidência têm eleições e limites de mandato; cidadania exclui africanos, descendentes e indígenas, e cargos são reservados a cidadãos homens. O sufrágio não é universal.', 'norm', '1836-03-17; transcrição de edição de 1838'),
        claim(texasContextTitle, '“Slavery and Cotton”', 'O arquivo descreve dependência do trabalho escravizado na produção de algodão, confrontando as declarações abstratas de igualdade da Constituição.', 'practice', 'Página institucional sem data de publicação indicada; relata 1836–1845'),
      ],
      rationale: 'A direção moderadamente democrática codifica eleições e responsabilização constitucional no grupo de cidadãos admitidos; a exclusão racial da cidadania e a reserva masculina de cargos limitam a inclusão política e impedem posição forte. O confronto com voto universal usa a exclusão racial explícita, sem extrair uma regra de sufrágio feminino apenas da cláusula sobre cargos.',
      uncertainty: 'Não é certificado de competição livre efetiva nem de democracia inclusiva; a âncora resolve editorialmente um desenho eletivo com exclusões profundas, não calcula média entre direitos dos cidadãos e dos escravizados.',
    }, {
      axis: 'rel', position: 'moderate-first', confidence: 'medium', relatedQuestionIds: ['religiao_03', 'religiao_08'],
      claims: [claim(texasTitle, 'Declaration of Rights, Third; Article V(1)', 'A declaração veda preferência legal entre denominações e garante escolha de culto; ministros religiosos não podem ocupar o Executivo ou o Congresso.', 'norm', '1836-03-17; transcrição de edição de 1838')],
      rationale: 'Não preferência denominacional e separação de cargos clericais sustentam laicidade institucional moderada, sem imputar irreligiosidade privada.',
      uncertainty: 'A linguagem da proteção é teísta e a proibição de cargos clericais também restringe direitos; não demonstramos neutralidade completa perante não crentes, financiamento religioso nem a prática de todas as políticas.',
    },
  ], 'Constituição primária lida com exclusões e cláusulas contrárias; contexto diplomático e escravidão efetiva confrontados.', {
    est: 'Divisão em condados e existência de órgãos nacionais não comprovam sozinhas o alcance da autonomia territorial; sem regra de competências revisada, permanece desconhecido.',
    mor: 'Escravidão e exclusão racial são documentadas como limites de cidadania; não imputamos posições atuais sobre cotas, gênero, aborto ou família por analogia histórica.',
    eco: 'A proteção da escravidão não demonstra política geral de propriedade pública/privada.',
    imi: 'Exclusão racial de cidadania não se converte automaticamente em assimilação cultural.',
  }),
];
