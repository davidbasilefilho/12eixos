import type { AxisKey, ReferenceEntry, ReferenceSource } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';
const axes: AxisKey[] = ['est','rep','pod','imi','dip','int','eco','con','com','rel','mor','tec'];
const reviewedOn = '2026-10-07';
/** Immutable raw vectors before centering or evidence preparation. */
export const historical03RawBaseVectors = {
  "weimar-republic": [
    78,
    85,
    48,
    50,
    38,
    51,
    49,
    47,
    50,
    57,
    68,
    50
  ],
  "ussr-1977": [
    32,
    12,
    78,
    54,
    74,
    17,
    96,
    95,
    71,
    94,
    51,
    80
  ],
  "yugoslavia-1974": [
    91,
    28,
    55,
    50,
    43,
    86,
    83,
    72,
    50,
    74,
    55,
    55
  ],
  "uk-attlee-1945": [
    27,
    94,
    39,
    50,
    54,
    43,
    78,
    67,
    45,
    61,
    64,
    57
  ],
  "chile-up-1970": [
    22,
    75,
    38,
    50,
    44,
    58,
    86,
    82,
    66,
    70,
    77,
    58
  ],
  "brazil-estado-novo-1937": [
    17,
    8,
    77,
    47,
    52,
    49,
    78,
    75,
    76,
    48,
    31,
    64
  ]
};
/** Actual live input captured before overlay; all source objects preserved. */
export const historical03LiveBaseline = [
  {
    "id": "brazil-estado-novo-1937",
    "kind": "country",
    "category": "historical-country",
    "name": "Brasil — Estado Novo",
    "period": "Governo Vargas, 1937–1945",
    "vec": {
      "est": 17,
      "rep": 8,
      "pod": 77,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 78,
      "con": 75,
      "com": 76,
      "rel": 50,
      "mor": 31,
      "tec": 50
    },
    "rationale": "O golpe de 1937 fechou o Congresso e os partidos; o governo centralizou o poder, ampliou a intervenção econômica e o nacionalismo industrial.",
    "caveats": "A constituição de 1937 descrevia direitos e federalismo que não foram aplicados plenamente; o regime governou por decretos e censura. O vetor descreve o Estado, não a população brasileira, e resume políticas de anos distintos.",
    "sources": [
      {
        "title": "Getúlio Vargas — FGV CPDOC",
        "url": "https://cpdoc.fgv.br/biografias/getulio-vargas",
        "note": "Pesquisa histórica sobre golpe, dissolução do Congresso e dos partidos e intervenção estatal entre 1937 e 1945."
      },
      {
        "title": "Constituição de 1937 — FGV CPDOC",
        "url": "https://cpdoc.fgv.br/sites/default/files/brasilia/dhbb/Get%C3%BAlio%20Vargas.pdf",
        "note": "Documento e análise sobre centralização, estado de emergência, economia corporativa e aplicação incompleta da carta constitucional."
      }
    ],
    "evidence": {
      "est": "high",
      "rep": "high",
      "pod": "medium",
      "eco": "high",
      "con": "high",
      "com": "medium",
      "mor": "medium"
    },
    "axisEvidence": {}
  },
  {
    "id": "chile-up-1970",
    "kind": "country",
    "category": "historical-country",
    "name": "Chile — Unidade Popular",
    "period": "Governo Allende, 1970–1973",
    "vec": {
      "est": 50,
      "rep": 75,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 86,
      "con": 82,
      "com": 66,
      "rel": 70,
      "mor": 77,
      "tec": 50
    },
    "rationale": "A via eleitoral ao socialismo, a nacionalização do cobre, a ampliação de políticas sociais e a economia planejada concentram o perfil do programa governamental.",
    "caveats": "A Unidade Popular governou em meio a forte polarização e terminou com o golpe de 11 de setembro de 1973. Os valores retratam o programa e as políticas do governo, não a sociedade chilena nem o regime posterior.",
    "sources": [
      {
        "title": "El gobierno de la Unidad Popular (1970–1973) — Biblioteca Nacional de Chile",
        "url": "https://www.memoriachilena.gob.cl/602/w3-article-31433.html",
        "note": "Pesquisa da Biblioteca Nacional descreve a eleição democrática, a via chilena ao socialismo, o programa de economia planejada, nacionalização do cobre e o golpe que encerrou o governo."
      },
      {
        "title": "Programa básico de gobierno de la Unidad Popular",
        "url": "https://www.memoriachilena.gob.cl/602/w3-article-98051.html",
        "note": "Registro arquivístico do programa aprovado pela coalizão em 1969 e fonte primária do período."
      }
    ],
    "evidence": {
      "rep": "medium",
      "eco": "high",
      "con": "high",
      "com": "medium",
      "rel": "medium",
      "mor": "medium"
    },
    "axisEvidence": {}
  },
  {
    "id": "uk-attlee-1945",
    "kind": "country",
    "category": "historical-country",
    "name": "Reino Unido — governo Attlee",
    "period": "Governo trabalhista, 1945–1951",
    "vec": {
      "est": 50,
      "rep": 94,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 43,
      "eco": 78,
      "con": 67,
      "com": 50,
      "rel": 50,
      "mor": 64,
      "tec": 50
    },
    "rationale": "O governo parlamentar eleito expandiu o serviço social, criou o NHS e nacionalizou setores-chave como carvão, eletricidade e ferrovias.",
    "caveats": "O perfil cobre um gabinete e um período de reconstrução após a guerra, não uma característica permanente do Reino Unido. Defesa, costumes, secularismo e tecnologia permanecem estimativas próximas ao centro quando o recorte não permite uma codificação segura.",
    "sources": [
      {
        "title": "Clement Attlee — GOV.UK",
        "url": "https://www.gov.uk/government/history/past-prime-ministers/clement-attlee",
        "note": "Fonte institucional para mandato, NHS, seguridade, nacionalizações e descolonização."
      },
      {
        "title": "Attlee’s Britain 1945–1951 — The National Archives",
        "url": "https://www.nationalarchives.gov.uk/education/resources/attlees-britain/",
        "note": "Contexto arquivístico do mandato parlamentar, Estado de bem-estar e nacionalizações."
      }
    ],
    "evidence": {
      "rep": "high",
      "eco": "high",
      "con": "high",
      "int": "medium",
      "mor": "medium"
    },
    "axisEvidence": {}
  },
  {
    "id": "weimar-republic",
    "kind": "country",
    "category": "historical-country",
    "name": "República de Weimar",
    "period": "Constituição de 1919, 1919–1933",
    "vec": {
      "est": 78,
      "rep": 85,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 68,
      "tec": 50
    },
    "rationale": "A constituição criou uma república federal parlamentar, com sufrágio universal e direitos fundamentais; o perfil dá maior peso a essas instituições documentadas.",
    "caveats": "A República atravessou governos e crises muito distintos e terminou com a destruição da ordem constitucional em 1933. Eixos econômicos, culturais, militares e tecnológicos ficam perto do centro por não haver um único programa de governo representativo para todo o período.",
    "sources": [
      {
        "title": "The Weimar Constitution (August 11, 1919) — German History in Documents and Images",
        "url": "https://germanhistorydocs.org/en/weimar-germany-1918-1933/the-weimar-constitution-august-11-1919",
        "note": "Fonte primária traduzida e contexto acadêmico: república, federalismo, sufrágio universal, parlamento, direitos e cores nacionais."
      }
    ],
    "evidence": {
      "est": "high",
      "rep": "high",
      "mor": "medium"
    },
    "axisEvidence": {}
  },
  {
    "id": "yugoslavia-1974",
    "kind": "country",
    "category": "historical-country",
    "name": "República Socialista Federativa da Iugoslávia",
    "period": "Constituição de 1974 e período Tito, 1974–1980",
    "vec": {
      "est": 91,
      "rep": 28,
      "pod": 50,
      "imi": 50,
      "dip": 43,
      "int": 86,
      "eco": 83,
      "con": 72,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "A constituição definiu uma federação de repúblicas, autogestão e propriedade social; a política externa não alinhada distingue o período.",
    "caveats": "A constituição descrevia autogestão democrática, mas a Liga dos Comunistas mantinha papel dirigente e não havia alternância multipartidária competitiva. O vetor não iguala o texto constitucional à prática política nem representa a Iugoslávia posterior a Tito.",
    "sources": [
      {
        "title": "Constituição da República Socialista Federativa da Iugoslávia, 1974 — Wikisource",
        "url": "https://en.wikisource.org/wiki/Constitution_of_Yugoslavia_(1974)",
        "note": "Fonte primária para estrutura federal (arts. 1–5), bandeira (art. 7), propriedade social e autogestão (art. 10) e papel dirigente da Liga dos Comunistas."
      },
      {
        "title": "Constituent Acts of Yugoslavia — Archives of Yugoslavia",
        "url": "https://arhivyu.applied.rs/en/leksikon-jugoslavije/konstitutivni_akti_jugoslavije",
        "note": "Contexto arquivístico sobre a constituição de 1974 e o sistema de delegados."
      },
      {
        "title": "Foreign Relations of the United States: Tito and nonalignment — Office of the Historian",
        "url": "https://history.state.gov/historicaldocuments/frus1969-76v29/d220",
        "note": "Registro diplomático contemporâneo da política de não alinhamento."
      }
    ],
    "evidence": {
      "est": "high",
      "rep": "medium",
      "dip": "medium",
      "int": "high",
      "eco": "high",
      "con": "high"
    },
    "axisEvidence": {}
  },
  {
    "id": "ussr-1977",
    "kind": "country",
    "category": "historical-country",
    "name": "União Soviética — período Brejnev",
    "period": "Constituição de 1977 e governo Brejnev, 1977–1982",
    "vec": {
      "est": 32,
      "rep": 12,
      "pod": 78,
      "imi": 50,
      "dip": 74,
      "int": 17,
      "eco": 96,
      "con": 95,
      "com": 71,
      "rel": 94,
      "mor": 50,
      "tec": 80
    },
    "rationale": "A constituição reservou papel dirigente ao Partido Comunista e definiu a economia socialista planificada; a intervenção militar no Afeganistão marca a política externa do fim do período.",
    "caveats": "A URSS se definia formalmente como união federal de repúblicas, mas o poder e a economia eram fortemente centralizados. O perfil combina texto constitucional com prática do período e não descreve as repúblicas, povos ou pessoas soviéticas individualmente.",
    "sources": [
      {
        "title": "Constituição da URSS, 1977 — tradução integral em inglês",
        "url": "https://www.marxists.org/history/ussr/government/constitution/1977/constitution-ussr-1977.pdf",
        "note": "Fonte primária traduzida para partido dirigente, direitos declarados, propriedade e economia planificada."
      },
      {
        "title": "Soviet Union: A Country Study — Library of Congress",
        "url": "https://tile.loc.gov/storage-services/master/frd/frdcstdy/so/sovietunioncount00zick/sovietunioncount00zick.pdf",
        "note": "Estudo histórico sobre centralização, controle estatal da economia e reformas no fim da URSS."
      },
      {
        "title": "The Soviet Invasion of Afghanistan, 1978–1980 — Office of the Historian",
        "url": "https://history.state.gov/milestones/1977-1980/soviet-invasion-afghanistan",
        "note": "Registro histórico sobre a intervenção militar soviética no Afeganistão."
      }
    ],
    "evidence": {
      "est": "medium",
      "rep": "high",
      "pod": "medium",
      "dip": "medium",
      "int": "high",
      "eco": "high",
      "con": "high",
      "com": "medium",
      "rel": "medium",
      "tec": "medium"
    },
    "axisEvidence": {}
  }
];
type Row = [AxisKey, ReferenceAxisCoding['position'], ReferenceAxisCoding['confidence'], string, string, string, string];
type Review = { source: ReferenceSource; published: string; basis: 'norm' | 'practice' | 'declaration'; scope: string; rows: Row[]; limits: string };
const reviews: Record<string, Review> = {
  'weimar-republic': {
    source: {title:'The Weimar Constitution (August 11, 1919) — German History in Documents and Images',url:'https://germanhistorydocs.org/en/weimar-germany-1918-1933/the-weimar-constitution-august-11-1919',note:'Seleções primárias traduzidas, edição fundadora de 1919; não prova prática homogênea até 1933.'}, published:'1919-08-11',basis:'norm',scope:'Texto fundador de 1919; duração da República 1919–1933 não é prática inalterada.',
    rows:[
      ['est','moderate-first','high','Arts. 5, 12, 60–63 e 74','Estados exercem poderes próprios e participam da legislação nacional; competências do Reich e intervenção central limitam autonomia.','Competências estaduais e representação territorial sustentam federalismo moderado.','Primazia nacional e poderes centrais impedem equiparar a confederação soberana; prática não auditada.'],
      ['rep','moderate-first','high','Arts. 17, 22, 41, 48, 50 e 54','Voto igual de homens e mulheres, representação proporcional e confiança parlamentar coexistem com Presidência forte e emergência controlável pelo Reichstag.','Instituições eletivas sustentam democracia moderada com contrapoder presidencial explícito.','Não certifica eleições e prática durante crises finais; artigo48 impede inferência irrestrita.'],
      ['rel','moderate-first','medium','Arts. 135 e 137','Liberdade de consciência e culto é declarada e não há igreja estatal.','Separação institucional expressa sustenta laicidade moderada.','Seleção não cobre todos os privilégios fiscais das igrejas ou prática; não presume irreligiosidade popular.'],
    ], limits:'Democracia e federalismo são inferências normativas delimitadas. Emergência versus garantias impede resolver pod sem prática; igualdade civil não autoriza imputar todo eixo mor atual. Economia, cultura, guerra e tecnologia permanecem desconhecidas.'
  },
  'ussr-1977': {
    source:{title:'Constituição da URSS, 1977 — tradução integral em inglês',url:'https://www.marxists.org/history/ussr/government/constitution/1977/constitution-ussr-1977.pdf',note:'Edição primária traduzida, artigos localizados em fac-símile; declaração normativa e execução econômica são distintas.'},published:'1977-10-07',basis:'norm',scope:'Desenho normativo original de 1977 no período Brejnev, 1977–1982.',
    rows:[
      ['rep','strong-second','medium','Arts. 2–6; PDF pp. 14–16','Soberania popular formal é subordinada à direção política do Partido Comunista.','Supremacia partidária institucional sustenta direção autocrática forte no desenho.','Sem auditoria de pleitos; conselhos e participação declarada são contrapontos, não prova de pluralismo.'],
      ['eco','strong-first','high','Arts. 10–13 e 17; PDF pp. 16–19','Propriedade estatal e cooperativa é fundamento econômico; setores centrais são estatais, mas bens pessoais e trabalho individual são permitidos.','Predomínio social normativo sustenta propriedade pública forte.','Cooperativa não equivale a administração estatal; não mede ativos reais nem nega bens privados pessoais.'],
      ['con','strong-first','high','Art. 16; PDF p. 19','Complexo econômico integrado é dirigido por planos estatais com iniciativa empresarial e incentivos de lucro/custo.','Planejamento nacional explícito sustenta direção forte sem negar incentivos empresariais.','Não mede implementação; lucro de contabilidade não converte desenho em mercado irrestrito.'],
    ],limits:'Federalismo declarado e centralização partidária precisam de análise própria: est desconhecido. Direitos e propaganda pacífica não provam liberdades ou não intervenção efetivas. Não inferimos secularismo, moral ou entusiasmo tecnológico da identidade comunista.'
  },
  'yugoslavia-1974': {
    source:{title:'Constituição da República Socialista Federativa da Iugoslávia, 1974 — Wikisource',url:'https://en.wikisource.org/wiki/Constitution_of_Yugoslavia_(1974)',note:'Transcrição traduzida do texto primário de 1974; cotejo integral com edição oficial ainda pendente.'},published:'1974-02-21',basis:'norm',scope:'Desenho constitucional de 1974 no recorte Tito, 1974–1980.',
    rows:[
      ['est','moderate-first','medium','Arts. 244, 273–279 e 281','Repúblicas/províncias participam de decisões federais e concordam com volume orçamentário; centro conserva poderes enumerados e supervisão de execução.','Participação territorial substantiva sustenta federalismo moderado.','Não atribui soberania independente às repúblicas nem mede poder informal de Tito; cotejo oficial pendente.'],
      ['rep','strong-second','medium','Princípios fundamentais IV e VIII; art. 321','Liga comunista é força dirigente e integra Presidência por cargo; delegações e revogabilidade operam dentro do sistema socialista protegido.','Direção partidária institucional e limites do sistema sustentam orientação autocrática forte.','Autogestão e delegações são contrapontos; não imputamos fraude ou ausência de toda participação pela palavra socialista.'],
      ['eco','strong-first','medium','Princípios fundamentais III; arts. 10 e 64–68','Propriedade social é base da produção, gerida por trabalhadores; atividade pessoal e propriedade agrícola limitada coexistem.','Base produtiva não privada sustenta o polo social/público, com ressalva da autogestão.','Propriedade social não é juridicamente propriedade estatal: o próprio texto veda apropriação por comunidades e indivíduos; construto público/privado é aproximação delimitada.'],
      ['con','moderate-first','medium','Arts. 69–71; princípios III','Organizações adotam planos e os coordenam por acordos com planos sociais; a produção também realiza valor no mercado.','Planejamento concertado com mercado sustenta direção planejadora moderada.','Não equipara autogestão ao planejamento central soviético; execução e força dos acordos não auditadas.'],
    ],limits:'Cotejo oficial integral pendente; todas as inferências médias. Não alinhamento não equivale a não intervenção e defesa territorial não é pacifismo. Eixos sem passagens revisadas permanecem desconhecidos.'
  },
  'uk-attlee-1945': {
    source:{title:'Clement Attlee — GOV.UK',url:'https://www.gov.uk/government/history/past-prime-ministers/clement-attlee',note:'História institucional do governo: pleitos de 1945/1950/1951 e setores nacionalizados. Retrospectiva, não texto original das leis.'},published:'Página institucional sem data indicada; relata 1945–1951',basis:'practice',scope:'Governo Attlee, 1945–1951; eleições e nacionalizações documentadas em retrospectiva institucional.',
    rows:[
      ['rep','strong-first','medium','Biography, eleições de 1945, 1950 e derrota de 1951','Mandato resulta de eleições parlamentares; a derrota eleitoral de 1951 encerra o governo.','Competição parlamentar com perda efetiva do poder sustenta direção democrática forte.','Não é auditoria completa de inclusão do eleitorado, administração colonial ou todos os direitos políticos.'],
      ['eco','moderate-first','medium','Major acts; Interesting facts; Biography','Carvão, eletricidade, ferrovias e transporte são nacionalizados; a página estima um quinto da economia, com restante não nacionalizado.','Nacionalização multissetorial sustenta orientação pública moderada numa economia mista.','Estimativa institucional de um quinto não vira escore; não sustenta predomínio público de toda economia.'],
    ],limits:'Fontes institucionais relatam prática; textos originais das leis ainda não lidos. NHS e seguridade não equivalem a planejamento de toda economia. Descolonização não prova política geral não intervencionista; moral e religião desconhecidas.'
  },
  'chile-up-1970': {
    source:{title:'Programa básico de gobierno de la Unidad Popular — edição de 1970, Biblioteca Nacional',url:'https://www.memoriachilena.gob.cl/archivos2/pdfs/MC0000544.pdf',note:'Fac-símile primário MC0000544, catálogo artigo7738; páginas impressas 12–13 e 19–23. Página98051 é contexto, não o programa integral.'},published:'1970; programa aprovado em 1969-12-17',basis:'declaration',scope:'Programa pré-governamental aprovado em 1969, edição1970; não execução homogênea de 1970–1973.',
    rows:[
      ['eco','strong-first','medium','Área de propiedad social/privada/mixta; pp. impressas 19–21, PDF20–22','Programa propõe área estatal dominante em setores-chave, mantendo empresas privadas numerosas e setor misto.','Objetivo explícito de domínio público estratégico sustenta polo público forte no programa.','Maioria por número de empresas continua privada; objetivo não prova realização e não mede peso econômico.'],
      ['con','strong-first','medium','La construcción de la nueva economía; Política de desarrollo económico; pp.19/23, PDF20/24','Órgãos centrais planejam com decisões executivas e sistema nacional integra controle, crédito e orientação.','Planejamento multissetorial com poder executivo sustenta orientação planejadora forte no programa.','Não presume êxito, implementação completa ou eliminação de toda transação de mercado.'],
      ['pod','moderate-second','medium','La profundización de la democracia; pp.12–13, PDF13–14','Programa promete expressão, imprensa, reunião, domicílio e associação com garantias individuais.','Compromissos explícitos de direitos sustentam direção moderada à liberdade no programa.','Declaração não prova execução em polarização e conflito; sem auditoria de coerção estatal de todo governo.'],
    ],limits:'Objeto desta codificação é o programa, não todo resultado do governo. Liberdades declaradas não certificam eleições e alternância; rep permanece desconhecido até revisar fonte de prática. Nacionalização do comércio exterior não significa proteção tarifária: com desconhecido. Religião e moral sem suporte revisto.'
  },
  'brazil-estado-novo-1937': {
    source:{title:'Constituição de 1937 — Presidência, texto com versões anotadas',url:'https://www.planalto.gov.br/ccivil_03/constituicao/constituicao37.htm',note:'Cláusulas originais de 1937 explicitamente separadas das redações e revogações de 1938/1945; texto consolidado não é tomado como edição original integral.'},published:'1937-11-10; cláusulas originais identificadas nas anotações',basis:'norm',scope:'Cláusulas originais da carta de 1937 e regime transitório declarado; não imputa redações de 1945 a todo1937–1945.',
    rows:[
      ['rep','strong-second','high','Arts. 178, 180–181 e 187','Câmaras nacionais/estaduais/municipais são dissolvidas; Presidente legisla enquanto Parlamento não reúne e marca eleições condicionadas ao plebiscito.','Dissolução representativa com poder legislativo presidencial sustenta autocracia forte no dispositivo de fundação.','Órgãos eletivos futuros são promessa condicionada; texto não prova sozinho se plebiscito ou todas as eleições ocorreram.'],
      ['pod','strong-first','high','Arts. 168(a–d), 170 e redação original de186','Emergência é declarada para todo país e autoriza detenção, desterro, censura, suspensão de reunião e busca; atos de emergência não são conhecidos judicialmente.','Amplitude excepcional de coerção e barreira judicial sustentam segurança/restrição forte no desenho ativado pela carta.','Somente competências expressas, não contagem de prisões ou censura efetiva; artigo186 foi revogado em1945. Não usamos alínea168(e)acrescentada em1938.'],
    ],limits:'Federalismo textual com intervenção e dissolução local requer cotejo de prática para est; não graduado nesta revisão. Corporativismo e incentivo estatal não demonstram predomínio da propriedade pública ou planejamento integral. Sem inferências atuais de moral, religião ou tecnologia.'
  },
};

export function reconcileHistoricalCountry03(entry: ReferenceEntry): ReferenceEntry {
  const review = reviews[entry.id];
  if (!review) return entry;
  const sources = [...entry.sources];
  if (!sources.some(s => s.title === review.source.title && s.url === review.source.url)) sources.push(review.source);
  const result: ReferenceEntry & { documentaryReview: unknown; unknownAxisReasons: Partial<Record<AxisKey,string>> } = {
    ...entry, period: entry.period?.includes('; recorte codificado: ') ? entry.period : `${entry.period}; recorte codificado: ${review.scope}`, sources, vec: Object.fromEntries(axes.map(axis=>[axis,50])) as Record<AxisKey,number>, evidence:{},axisEvidence:{},coding:{},
    rationale:'Inferências documentais delimitadas recodificadas pelo protocolo ordinal; o vetor anterior e suas fontes foram preservados no módulo de reconciliação.',
    caveats: review.limits,
    documentaryReview:{ status:'author-reviewed-bounded-claims',reviewedOn,independentReview:'pending',scope:review.scope },
    unknownAxisReasons:{},
  };
  for (const [axis,position,confidence,locator,statement,rationale,uncertainty] of review.rows) {
    const input: ReferenceAxisCoding = {axis,position,confidence,rationale,uncertainty,reviewedOn,
      claims:[{sourceTitle:review.source.title,locator,statement,basis:review.basis,publishedDate:review.published,accessedDate:reviewedOn}]};
    const coded=codeReferenceAxis(input,sources);
    result.vec[axis]=coded.value;result.evidence[axis]=coded.evidence;result.axisEvidence![axis]=coded.axisEvidence;result.coding![axis]=coded.coding;
  }
  for(const axis of axes)if(!result.coding![axis])result.unknownAxisReasons[axis]='Sem inferência suficientemente delimitada nas passagens revistas; 50 desconhecido, sem evidência. '+review.limits;
  return result;
}
export const historical03CodingAudit = Object.entries(reviews).map(([id,review])=>({id,reviewedOn,scope:review.scope,rawBaseVector:historical03RawBaseVectors[id as keyof typeof historical03RawBaseVectors],integratedLiveBaseline:historical03LiveBaseline.find(e=>e.id===id),supportedAxes:review.rows.map(row=>row[0]),independentSourceValidation:'pending'}));
/** SHA-256 of compact JSON serialization; distinguishes raw and actual live snapshots. */
export const historical03LiveBaselineSha256 = 'cf224a9e48e4f2f4bd1c52f20b09e37ef3f0987a067f4e2bf158e476b1805f32';
export const historical03RawBaseVectorsSha256 = 'cdf8b7ba979a325ed27f83e40b0a3d48e752cf29b7f8690ab64eb4033b81091d';
