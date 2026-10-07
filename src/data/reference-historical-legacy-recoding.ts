import type { ReferenceEntry, ReferenceSource } from './references';
import { AXES } from '../lib/scoring';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';

export interface HistoricalLegacyRecodingSpec {
  id: string; period: string; rationale: string; caveats: string;
  sources: ReferenceSource[]; claims: ReferenceAxisCoding[]; unresolved: string[];
}
const accessedDate = '2026-10-07';
const s = (title: string, url: string, note: string): ReferenceSource => ({ title, url, note });
const c = (axis: ReferenceAxisCoding['axis'], position: ReferenceAxisCoding['position'], confidence: ReferenceAxisCoding['confidence'], sourceTitle: string, publishedDate: string, locator: string, statement: string, rationale: string, uncertainty: string): ReferenceAxisCoding => ({
  axis, position, confidence, claims: [{ sourceTitle, publishedDate, locator, statement, basis: 'norm', accessedDate }], rationale, uncertainty, reviewedOn: accessedDate,
});
const h = 'Why I am Not a Conservative — Friedrich Hayek, 1960';
const hk = 'The Use of Knowledge in Society — Friedrich Hayek, 1945';
const cw = 'Sur l’admission des femmes au droit de cité — Condorcet, 1790';
const ce = 'Rapport sur l’instruction publique — Condorcet, 1792';
const pr = 'Rights of Man — Thomas Paine, partes I/II, 1791–1792, volume II';
const pa = 'Agrarian Justice — Thomas Paine, 1797, volume III';
const pg = 'The Age of Reason — Thomas Paine, parte I, 1794, volume IV';

/** Located rereading of three existing identities; these are replacements, never additions. */
export const historicalLegacyRecodingSpecs: HistoricalLegacyRecodingSpec[] = [
  {
    id: 'friedrich-hayek', period: 'Textos autorais de 1945 e 1960; recodificação documental delimitada',
    rationale: 'A releitura distingue coordenação por preços, empreendimento privado, limites à coerção, democracia limitada e separação espiritual/temporal.',
    caveats: 'Não recodifica a carreira completa. O ensaio de 1960 é o posfácio Why I am Not a Conservative, não capítulos 7/9. As posições são âncoras editoriais, sem porcentagens medidas pelo autor.',
    sources: [s(h, 'https://press.uchicago.edu/books/excerpt/2011/hayek_constitution.html', 'Posfácio original de 1960 reproduzido na edição definitiva de 2011, pp. 517–533; texto autoral completo.'), s(hk, 'https://www.laits.utexas.edu/~mbs31415/HayekUseOfKnowledgeInSociety.pdf', 'Reprodução universitária de American Economic Review 35(4), setembro de 1945, pp. 519–530; leitura do texto extraído, sem alegar inspeção visual.')],
    claims: [
      c('rep', 'moderate-first', 'high', h, '1960', '§3: Closely connected; At any rate, the advantages of democracy', 'Prefere democracia para mudança pacífica e educação política, com poder da maioria limitado.', 'Preferência institucional explícita sustenta representação democrática parcial.', 'Maioria é meio, não fim; não documenta regras completas de sufrágio nem governo ilimitado.'),
      c('pod', 'moderate-second', 'high', h, '1960', '§3: It is the recognition; It is for this reason', 'Rejeita coerção arbitrária e imposição de convicções sobre condutas sem dano à esfera alheia.', 'Limite normativo à coerção sustenta liberdade.', 'Não abole Estado ou toda coerção; aceita regras protetivas gerais.'),
      c('eco', 'moderate-second', 'medium', h, '1960', '§3: That the conservative opposition; Indeed, though the restrictions', 'Defende livre empreendimento e opõe medidas coletivistas e diretivas na indústria.', 'Empreendimento produtivo privado sustenta direção privada delimitada.', 'Passagem industrial não define combinação integral de propriedade pública e privada ou serviços sociais.'),
      c('con', 'strong-second', 'high', hk, '1945-09', 'V–VII, pp. 524–529: We must solve it; price system as such a mechanism', 'Defende decisões econômicas descentralizadas coordenadas por preços e conhecimento disperso.', 'Coordenação por preços é constitutiva da explicação da economia complexa.', 'Planejar individualmente não equivale a planejamento central; mecanismo de preços não decide sozinho regime de propriedade.'),
      c('int', 'moderate-first', 'medium', h, '1960', '§4: Only at first; But the more a person dislikes; It is significant', 'Rejeita imperialismo civilizador e favorece contato voluntário em vez de governo imposto a outros.', 'Crítica explícita à dominação estrangeira sustenta não intervenção parcial.', 'Caso imperial delimitado; não demonstra regra universal sobre todas as intervenções ou assistência militar.'),
      c('rel', 'moderate-first', 'medium', h, '1960', '§5: There is no reason; What distinguishes the liberal', 'Separa esferas espiritual e temporal e rejeita imposição das próprias crenças.', 'Separação política de crenças sustenta direção secular parcial.', 'Aceita crença religiosa individual e critica antirreligião militante; não é ateísmo presumido.'),
    ], unresolved: ['est/imi/dip/com/mor/tec: confiança em mudança ou conhecimento não é proposta de adoção tecnológica; anti-nacionalismo não define imigração; crítica resumida ao protecionismo não foi promovida a política comercial completa.'],
  },
  {
    id: 'nicolas-de-condorcet', period: 'Direitos de cidadania, 3 de julho de 1790; instrução pública, 20–21 de abril de 1792',
    rationale: 'Textos autorais sustentam cidadania inclusiva, direitos iguais, instrução pública gratuita e liberdade intelectual com ensino não confessional.',
    caveats: 'As antigas alegações sobre federalismo, imigração, intervenção e tecnologia não são transportadas. A proposta educacional não determina organização de toda a economia nem prova execução do projeto.',
    sources: [s(cw, 'https://classiques.uqam.ca/classiques/condorcet/admission_femmes_droit_de_cite/admission_femmes_droit_de_cite_texte.html', 'Transcrição acadêmica de Jean-Marc Simonet, a partir de Œuvres, tomo X, O’Connor/Arago, 1847; texto datado 3 de julho de 1790.'), s(ce, 'https://www.assemblee-nationale.fr/histoire/7ed.asp', 'Transcrição parlamentar do relatório de 20–21 de abril de 1792; alegações usam o discurso que começa Messieurs, não o contexto editorial.')],
    claims: [
      c('rep', 'strong-first', 'high', cw, '1790-07-03', 'Parágrafos Par exemple; Or, les droits; Or, puisqu’il serait; Si on admettait', 'Exige participação feminina nas leis e cargos e rejeita restringir cidadania a uma elite instruída.', 'Inclusão eleitoral e política é a tese constitutiva do ensaio.', 'Defesa normativa histórica; não comprova implementação ou mecanismos eleitorais modernos.'),
      c('mor', 'moderate-first', 'medium', cw, '1790-07-03', 'Or, les droits des hommes; Il est donc injuste; Les diverses aristocraties', 'Afirma direitos iguais independentemente de sexo, cor ou religião e rejeita exclusão civil das mulheres.', 'Igualdade jurídica sustenta subtemas emancipatórios.', 'Mantém linguagem doméstica de época; não resolve o conjunto dos costumes contemporâneos.'),
      c('pod', 'moderate-second', 'high', ce, '1792-04-20/21', 'Enfin, aucun pouvoir public; Ni la Constitution française', 'Nega ao poder público autoridade para impedir ensino de teorias contrárias à política governamental.', 'Liberdade intelectual explícita limita coerção estatal.', 'Garantia específica do ensino, não abolição do poder público ou toda polícia.'),
      c('eco', 'moderate-first', 'medium', ce, '1792-04-20/21', 'Nous avons pensé; Toute collection; L’Acte constitutionnel; Quant aux autres degrés; élèves de la patrie', 'Propõe rede pública gratuita de ensino e sustento público de alunos pobres.', 'Provisão e financiamento público de educação documentam direção pública parcial.', 'Um setor não prova predominância pública de toda a propriedade ou produção.'),
      c('rel', 'moderate-first', 'high', ce, '1792-04-20/21', 'Les principes de la morale; La Constitution; Il était donc rigoureusement', 'Exclui ensino de qualquer culto da instrução pública, preservando-o nos templos.', 'Norma institucional não confessional sustenta direção secular parcial.', 'Campo educacional; não implica proibição de fé privada ou posição sobre toda relação igreja/Estado.'),
    ], unresolved: ['est/imi/dip/int/con/com/tec: rede local de escolas não é federalismo; educação científica não comprova política concreta de adoção tecnológica; fontes Gallica não foram validáveis nesta leitura.'],
  },
  {
    id: 'thomas-paine', period: 'Rights of Man, 1791–1792; The Age of Reason I, 1794; Agrarian Justice, 1797',
    rationale: 'A releitura fundamenta representação republicana, direitos preservados, federação delimitada, circulação comercial, fundo público universal e separação religiosa do poder.',
    caveats: 'O antigo URL Gutenberg 3743, rotulado Rights of Man, contém o volume IV com The Age of Reason. A citação anterior permanece apenas nos snapshots de auditoria; Rights of Man usa o volume II, 3742. Não resolve todas as tensões da política externa da carreira.',
    sources: [s(pr, 'https://www.gutenberg.org/cache/epub/3742/pg3742-images.html', 'Volume II da coleção editorial de Moncure Conway; usa texto autoral Rights of Man I (1791) e II (1792), distinguindo notas editoriais.'), s(pa, 'https://www.gutenberg.org/cache/epub/31271/pg31271-images.html', 'Volume III, seção XXVIII Agrarian Justice. Nota editorial informa redação no inverno de 1795–1796 e publicação em 1797; alegações usam o corpo autoral.'), s(pg, 'https://www.gutenberg.org/cache/epub/3743/pg3743-images.html', 'Volume IV, The Age of Reason I, capítulo I, 1794. Este endereço não contém Rights of Man.')],
    claims: [
      c('est', 'moderate-first', 'medium', pr, '1792', 'Parte II, IV: Nothing on the part of congress; Congress first informed; The powers vested', 'Endossa constituição federal com competências definidas entre Estados e União, corrigindo insuficiência do centro.', 'Divisão territorial constitucional sustenta federalismo parcial.', 'Não maximiza autonomia local: considera excessivo poder anterior dos Estados e insuficiente o federal.'),
      c('rep', 'strong-first', 'high', pr, '1791–1792', 'Parte I: were the election as universal as taxation; Parte II, III: Retaining, then, democracy; By ingrafting', 'Exige eleição tão universal quanto tributação e representação democrática contra monarquia e aristocracia hereditárias.', 'Soberania representativa é constitutiva da teoria.', 'Não atribui automaticamente inclusão moderna de todos os grupos omitidos no texto.'),
      c('pod', 'moderate-second', 'high', pr, '1791', 'Parte I, Natural rights; The natural rights which he retains; Thirdly, That the power', 'Preserva direitos da mente e proíbe poder civil de invadir direitos individuais retidos.', 'Limite explícito ao poder civil sustenta liberdade.', 'Aceita força coletiva para proteger direitos; não equivale a abolição de Estado.'),
      c('eco', 'moderate-first', 'medium', pa, '1797', 'The plan: To create a National Fund; MEANS: But the fault; It is proposed', 'Propõe fundo público universal para jovens e idosos, financiado na sucessão patrimonial.', 'Transferências e proteção social públicas documentam subtema público.', 'Protege cultivo e propriedade privada existentes; não propõe estatização de meios produtivos.'),
      c('com', 'moderate-second', 'high', pr, '1792', 'Parte II, V: In all my publications; If commerce were permitted; Whatever has a tendency', 'Defende extensão universal do comércio e intercâmbio recíproco entre nações.', 'Abertura econômica internacional explícita sustenta direção comercial aberta.', 'Não apresenta aqui tabela tarifária ou regime institucional completo de integração.'),
      c('rel', 'strong-first', 'high', pg, '1794', 'Parte I, I: All national institutions of churches; The adulterous connection', 'Rejeita igrejas nacionais monopolizando poder e a coerção da união entre igreja e Estado.', 'Rejeição constitutiva da autoridade religiosa coerciva sustenta direção secular forte.', 'Declara crença em Deus e direito dos outros à fé; não representa ateísmo pessoal.'),
      c('mor', 'moderate-first', 'medium', pa, '1797', 'To create a National Fund: his or her; It is proposed; not a man or woman born', 'Propõe mesmos pagamentos sociais para homens e mulheres, pobres ou ricos, como direito.', 'Igualdade de gênero e acesso jurídico ao fundo sustentam subtemas emancipatórios.', 'Não resolve toda cidadania, raça ou costumes; universalidade da transferência não é moralidade contemporânea completa.'),
    ], unresolved: ['imi/dip/int/con/tec: comércio pacificador não prova pacifismo; denúncia de domínio colonial convive com proposta de ação conjunta sobre Espanha/Sul da América no mesmo texto, mantida como tensão não pontuada. Fundo tributário não é planejamento da produção.'],
  },
];

export const historicalLegacyOriginalRecords: Record<string, ReferenceEntry> = {
  "friedrich-hayek": {
    "id": "friedrich-hayek",
    "kind": "person",
    "category": "historical-figure",
    "name": "Friedrich Hayek",
    "period": "Obra política e econômica, 1944–1978",
    "vec": {
      "est": 74,
      "rep": 82,
      "pod": 23,
      "imi": 46,
      "dip": 44,
      "int": 55,
      "eco": 9,
      "con": 6,
      "com": 20,
      "rel": 60,
      "mor": 51,
      "tec": 68
    },
    "rationale": "Sua crítica ao planejamento e defesa de preços, propriedade e limites constitucionais ao poder aproximam liberais econômicos.",
    "caveats": "Hayek não deixou plataformas completas para os 12 eixos; imigração, diplomacia e costumes receberam estimativas centrais.",
    "sources": [
      {
        "title": "Palestra Nobel: The Pretence of Knowledge",
        "url": "https://www.nobelprize.org/prizes/economic-sciences/1974/hayek/lecture/",
        "note": "Crítica à pretensão de planejar sistemas complexos."
      },
      {
        "title": "Friedrich Hayek, Stanford Encyclopedia of Philosophy",
        "url": "https://plato.stanford.edu/entries/friedrich-hayek/",
        "note": "Síntese acadêmica da democracia constitucional, ordem espontânea e economia."
      }
    ],
    "evidence": {
      "rep": "medium",
      "eco": "high",
      "con": "high",
      "pod": "medium"
    }
  },
  "nicolas-de-condorcet": {
    "id": "nicolas-de-condorcet",
    "kind": "person",
    "category": "historical-figure",
    "name": "Nicolas de Condorcet",
    "period": "Escritos e atuação política, 1785–1794",
    "vec": {
      "est": 73,
      "rep": 89,
      "pod": 19,
      "imi": 18,
      "dip": 31,
      "int": 55,
      "eco": 53,
      "con": 49,
      "com": 38,
      "rel": 93,
      "mor": 89,
      "tec": 92
    },
    "rationale": "Republicanismo, direitos civis, educação pública e crítica à escravidão e à exclusão das mulheres aparecem em seus projetos e escritos; sua teoria do progresso dá suporte ao eixo tecnológico.",
    "caveats": "As ideias pertencem à Revolução Francesa e não se traduzem diretamente em todos os polos atuais. A defesa de instrução pública não determina preferência por propriedade estatal; política externa e segurança têm evidência limitada.",
    "sources": [
      {
        "title": "Relatório e projeto de decreto sobre instrução pública (1792) — Assemblée nationale",
        "url": "https://www.assemblee-nationale.fr/histoire/7ed.asp",
        "note": "Projeto de sistema público de instrução apresentado por Condorcet à Assembleia."
      },
      {
        "title": "Esboço de um quadro histórico dos progressos do espírito humano — Gallica / BnF",
        "url": "https://gallica.bnf.fr/ark:/12148/bpt6k101973b",
        "note": "Obra primária sobre progresso, conhecimento e aperfeiçoamento humano."
      },
      {
        "title": "Sur l’admission des femmes au droit de cité — Gallica / BnF",
        "url": "https://gallica.bnf.fr/ark:/12148/bpt6k417181",
        "note": "Texto de 1790 que defende direitos políticos iguais para mulheres."
      }
    ],
    "evidence": {
      "est": "medium",
      "rep": "high",
      "imi": "medium",
      "int": "medium",
      "rel": "high",
      "mor": "high",
      "tec": "high"
    }
  },
  "thomas-paine": {
    "id": "thomas-paine",
    "kind": "person",
    "category": "historical-figure",
    "name": "Thomas Paine",
    "period": "Escritos republicanos e sociais, 1776–1797",
    "vec": {
      "est": 80,
      "rep": 87,
      "pod": 25,
      "imi": 18,
      "dip": 38,
      "int": 62,
      "eco": 59,
      "con": 50,
      "com": 41,
      "rel": 92,
      "mor": 82,
      "tec": 63
    },
    "rationale": "Paine associa governo representativo a direitos naturais e propõe tributação progressiva e um fundo social em Agrarian Justice.",
    "caveats": "Os eixos são uma leitura de textos do século XVIII, não uma plataforma atual. Suas posições sobre guerra e política externa variaram entre contextos; economia e religião não cobrem toda a obra.",
    "sources": [
      {
        "title": "Rights of Man — Project Gutenberg",
        "url": "https://www.gutenberg.org/ebooks/3743",
        "note": "Texto primário sobre representação, direitos e legitimidade do governo."
      },
      {
        "title": "Agrarian Justice — Project Gutenberg",
        "url": "https://www.gutenberg.org/ebooks/31271",
        "note": "Proposta primária de tributação sobre heranças e pagamento social universal."
      },
      {
        "title": "Common Sense — National Archives",
        "url": "https://www.archives.gov/milestone-documents/thomas-paines-common-sense",
        "note": "Contexto arquivístico do panfleto republicano de 1776."
      }
    ],
    "evidence": {
      "est": "medium",
      "rep": "high",
      "pod": "medium",
      "int": "medium",
      "eco": "medium",
      "rel": "high",
      "mor": "medium"
    }
  }
};

/** Active catalog snapshot before recoding, 2026-10-07. Never imported into ranking. */
export const historicalLegacyBeforeRecoding: Record<string, ReferenceEntry> = {
  "friedrich-hayek": {
    "id": "friedrich-hayek",
    "kind": "person",
    "category": "historical-figure",
    "name": "Friedrich Hayek",
    "period": "Obra política e econômica, 1944–1978",
    "vec": {
      "est": 50,
      "rep": 82,
      "pod": 23,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 9,
      "con": 6,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Sua crítica ao planejamento e defesa de preços, propriedade e limites constitucionais ao poder aproximam liberais econômicos.",
    "caveats": "Hayek não deixou plataformas completas para os 12 eixos; imigração, diplomacia e costumes receberam estimativas centrais.",
    "sources": [
      {
        "title": "Palestra Nobel: The Pretence of Knowledge",
        "url": "https://www.nobelprize.org/prizes/economic-sciences/1974/hayek/lecture/",
        "note": "Crítica à pretensão de planejar sistemas complexos."
      },
      {
        "title": "Friedrich Hayek, Stanford Encyclopedia of Philosophy",
        "url": "https://plato.stanford.edu/entries/friedrich-hayek/",
        "note": "Síntese acadêmica da democracia constitucional, ordem espontânea e economia."
      }
    ],
    "evidence": {
      "rep": "medium",
      "eco": "high",
      "con": "high",
      "pod": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "The Constitution of Liberty — University of Chicago Press excerpt"
        ],
        "rationale": "Hayek distingue democracia de governo ilimitado e defende instituições constitucionais que limitam a maioria sem abandonar o governo representativo."
      },
      "pod": {
        "sourceTitles": [
          "The Constitution of Liberty — University of Chicago Press excerpt"
        ],
        "rationale": "O texto defende liberdades individuais sob regras gerais e limites à coerção estatal."
      },
      "eco": {
        "sourceTitles": [
          "Palestra Nobel: The Pretence of Knowledge"
        ],
        "rationale": "Hayek atribui à ordem de mercado e à propriedade privada a coordenação de conhecimento disperso e a alocação de recursos."
      },
      "con": {
        "sourceTitles": [
          "Palestra Nobel: The Pretence of Knowledge"
        ],
        "rationale": "A palestra critica a coordenação econômica centralizada e explica por que preços e mercados descentralizados transmitem informação."
      }
    }
  },
  "nicolas-de-condorcet": {
    "id": "nicolas-de-condorcet",
    "kind": "person",
    "category": "historical-figure",
    "name": "Nicolas de Condorcet",
    "period": "Escritos e atuação política, 1785–1794",
    "vec": {
      "est": 73,
      "rep": 89,
      "pod": 50,
      "imi": 18,
      "dip": 50,
      "int": 55,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 93,
      "mor": 89,
      "tec": 92
    },
    "rationale": "Republicanismo, direitos civis, educação pública e crítica à escravidão e à exclusão das mulheres aparecem em seus projetos e escritos; sua teoria do progresso dá suporte ao eixo tecnológico.",
    "caveats": "As ideias pertencem à Revolução Francesa e não se traduzem diretamente em todos os polos atuais. A defesa de instrução pública não determina preferência por propriedade estatal; política externa e segurança têm evidência limitada.",
    "sources": [
      {
        "title": "Relatório e projeto de decreto sobre instrução pública (1792) — Assemblée nationale",
        "url": "https://www.assemblee-nationale.fr/histoire/7ed.asp",
        "note": "Projeto de sistema público de instrução apresentado por Condorcet à Assembleia."
      },
      {
        "title": "Esboço de um quadro histórico dos progressos do espírito humano — Gallica / BnF",
        "url": "https://gallica.bnf.fr/ark:/12148/bpt6k101973b",
        "note": "Obra primária sobre progresso, conhecimento e aperfeiçoamento humano."
      },
      {
        "title": "Sur l’admission des femmes au droit de cité — Gallica / BnF",
        "url": "https://gallica.bnf.fr/ark:/12148/bpt6k417181",
        "note": "Texto de 1790 que defende direitos políticos iguais para mulheres."
      }
    ],
    "evidence": {
      "est": "medium",
      "rep": "high",
      "imi": "medium",
      "int": "medium",
      "rel": "high",
      "mor": "high",
      "tec": "high"
    },
    "axisEvidence": {}
  },
  "thomas-paine": {
    "id": "thomas-paine",
    "kind": "person",
    "category": "historical-figure",
    "name": "Thomas Paine",
    "period": "Escritos republicanos e sociais, 1776–1797",
    "vec": {
      "est": 80,
      "rep": 87,
      "pod": 25,
      "imi": 50,
      "dip": 50,
      "int": 62,
      "eco": 59,
      "con": 50,
      "com": 50,
      "rel": 92,
      "mor": 82,
      "tec": 50
    },
    "rationale": "Paine associa governo representativo a direitos naturais e propõe tributação progressiva e um fundo social em Agrarian Justice.",
    "caveats": "Os eixos são uma leitura de textos do século XVIII, não uma plataforma atual. Suas posições sobre guerra e política externa variaram entre contextos; economia e religião não cobrem toda a obra.",
    "sources": [
      {
        "title": "Rights of Man — Project Gutenberg",
        "url": "https://www.gutenberg.org/ebooks/3743",
        "note": "Texto primário sobre representação, direitos e legitimidade do governo."
      },
      {
        "title": "Agrarian Justice — Project Gutenberg",
        "url": "https://www.gutenberg.org/ebooks/31271",
        "note": "Proposta primária de tributação sobre heranças e pagamento social universal."
      },
      {
        "title": "Common Sense — National Archives",
        "url": "https://www.archives.gov/milestone-documents/thomas-paines-common-sense",
        "note": "Contexto arquivístico do panfleto republicano de 1776."
      }
    ],
    "evidence": {
      "est": "medium",
      "rep": "high",
      "pod": "medium",
      "int": "medium",
      "eco": "medium",
      "rel": "high",
      "mor": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Rights of Man — Project Gutenberg"
        ],
        "rationale": "Paine defende governo representativo fundado no consentimento popular e se opõe à monarquia hereditária."
      },
      "pod": {
        "sourceTitles": [
          "Rights of Man — Project Gutenberg"
        ],
        "rationale": "A obra apresenta direitos naturais e proteção da liberdade individual como limites à autoridade governamental."
      },
      "eco": {
        "sourceTitles": [
          "Agrarian Justice — Project Gutenberg"
        ],
        "rationale": "Paine propõe tributação de heranças e pagamentos universais para compensar a desigualdade, sustentando uma inclinação moderada à provisão pública."
      },
      "mor": {
        "sourceTitles": [
          "Rights of Man — Project Gutenberg"
        ],
        "rationale": "Paine critica privilégios hereditários e defende direitos iguais e reformas sociais, sustentando a direção progressista."
      }
    }
  }
};

/** Complete bounded replacements, isolated pending review and integration by the catalog owner. */
export const historicalLegacyRecoding: ReferenceEntry[] = historicalLegacyRecodingSpecs.map(spec => {
  const old = historicalLegacyBeforeRecoding[spec.id];
  if (!old || old.category !== 'historical-figure') throw new Error(`Missing existing historical profile: ${spec.id}`);
  const preservedSources = old.sources.filter(source => !(spec.id === 'thomas-paine' && source.title === 'Rights of Man — Project Gutenberg' && source.url === 'https://www.gutenberg.org/ebooks/3743'));
  const sources = [...spec.sources, ...preservedSources.filter(source => !spec.sources.some(next => next.title === source.title && next.url === source.url)).map(source => ({ ...source, note: `${source.note ?? ''} Fonte anterior preservada para continuidade; não gera os novos valores sem alegação localizada nesta recodificação.` }))];
  const entry: ReferenceEntry = {
    ...structuredClone(old), period: spec.period, rationale: spec.rationale, caveats: spec.caveats,
    sources, vec: Object.fromEntries(AXES.map(({ key }) => [key, 50])) as ReferenceEntry['vec'],
    evidence: {}, axisEvidence: {}, coding: {},
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
