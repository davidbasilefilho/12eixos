/** Primary-source research queue. Deliberately excluded from the scored catalog. */
import type { AxisKey, ReferenceSource } from './references';

export interface HistoricalResearchDossier {
  id: string;
  name: string;
  period: string;
  status: 'unscored-research';
  identityDisposition: 'new-candidate' | 'existing-profile-review';
  existingReferenceId?: string;
  reviewedOn: string;
  sources: ReferenceSource[];
  axisCandidates: Partial<Record<AxisKey, { sourceTitle: string; locator: string; fact: string; limitation: string }>>;
  blockers: string[];
}

const codingBlocker = 'A metodologia existente permite interpolação editorial, mas não oferece regra quantitativa reproduzível para converter estes fatos em pontos. Nenhum vetor ou evidência de match é atribuído neste dossiê.';

export const historicalResearchDossiers: HistoricalResearchDossier[] = [
  {
    id: 'research-us-articles-confederation-1781',
    name: 'Estados Unidos — Artigos da Confederação',
    period: 'Ordem dos Artigos da Confederação, 1781–1789',
    status: 'unscored-research', identityDisposition: 'new-candidate', reviewedOn: '2026-10-07',
    sources: [
      { title: 'Articles of Confederation (1781) — Avalon Project', url: 'https://avalon.law.yale.edu/18th_century/artconf.asp', note: 'Transcrição primária consultada; edição documental do Government Printing Office de 1927.' },
      { title: 'Articles of Confederation — National Archives', url: 'https://www.archives.gov/historical-docs/articles-of-confederation', note: 'Página arquivística consultada confirma vigência de março de 1781 até 1789.' },
    ],
    axisCandidates: {
      est: { sourceTitle: 'Articles of Confederation (1781) — Avalon Project', locator: 'Artigos II, V e XIII', fact: 'Estados conservam poderes não delegados; cada Estado tem um voto; emendas exigem confirmação de todas as legislaturas.', limitation: 'Confederação não equivale automaticamente ao federalismo atual.' },
      rep: { sourceTitle: 'Articles of Confederation (1781) — Avalon Project', locator: 'Artigo V', fact: 'As legislaturas estaduais definem a nomeação anual e podem revogar seus delegados ao Congresso.', limitation: 'Não estabelece sufrágio popular universal nem informa a prática eleitoral estadual.' },
      dip: { sourceTitle: 'Articles of Confederation (1781) — Avalon Project', locator: 'Artigo VI', fact: 'Restringe forças estaduais em paz, mas exige milícias armadas e admite guerra defensiva.', limitation: 'Limites jurídicos à competência militar não demonstram pacifismo do governo.' },
      com: { sourceTitle: 'Articles of Confederation (1781) — Avalon Project', locator: 'Artigo IX', fact: 'Tratados comerciais não podem impedir os Estados de restringir importação ou exportação.', limitation: 'Permissão para restrição comercial não prova política protecionista praticada.' },
    },
    blockers: [codingBlocker, 'Faltam fontes da execução institucional e das políticas do período para distinguir regras formais de prática.'],
  },
  {
    id: 'research-brazil-imperial-charter-1824',
    name: 'Brasil — ordem imperial da Constituição original de 1824',
    period: 'Arranjo constitucional outorgado em 25 de março de 1824',
    status: 'unscored-research', identityDisposition: 'new-candidate', reviewedOn: '2026-10-07',
    sources: [{ title: 'Constituição de 1824 — publicação original, Câmara dos Deputados', url: 'https://www2.camara.leg.br/legin/fed/consti/1824-1899/constituicao-35041-25-marco-1824-532540-publicacaooriginal-14770-pl.html', note: 'Texto primário integral consultado; este dossiê não extrapola a redação original para todo o Império.' }],
    axisCandidates: {
      est: { sourceTitle: 'Constituição de 1824 — publicação original, Câmara dos Deputados', locator: 'Artigos 2, 83 e 101, IV', fact: 'Divide território em províncias e submete resoluções provinciais a poderes nacionais.', limitation: 'Não abrange reformas provinciais posteriores.' },
      rep: { sourceTitle: 'Constituição de 1824 — publicação original, Câmara dos Deputados', locator: 'Artigos 90–95 e 98–101', fact: 'Prevê eleições indiretas com exigências de renda e Poder Moderador privativo do imperador.', limitation: 'Representação formal não mede competição efetiva.' },
      rel: { sourceTitle: 'Constituição de 1824 — publicação original, Câmara dos Deputados', locator: 'Artigo 5', fact: 'Estabelece religião católica oficial e limita outros cultos à prática doméstica ou particular.', limitation: 'Não informa crenças da população.' },
      eco: { sourceTitle: 'Constituição de 1824 — publicação original, Câmara dos Deputados', locator: 'Artigo 179, XXII', fact: 'Garante propriedade e prevê indenização prévia por uso público.', limitation: 'Garantia de propriedade não determina proporção pública da economia.' },
    },
    blockers: [codingBlocker, 'Delimitar um governo/período homogêneo e reunir fontes sobre aplicação, escravidão e reformas antes de criar perfil comparável.'],
  },
  {
    id: 'research-us-confederacy-constitution-1861',
    name: 'Estados Confederados da América — revisão documental',
    period: 'Texto constitucional adotado em 11 de março de 1861',
    status: 'unscored-research', identityDisposition: 'existing-profile-review', existingReferenceId: 'us-confederacy-1861', reviewedOn: '2026-10-07',
    sources: [{ title: 'Constitution of the Confederate States (1861) — Avalon Project', url: 'https://avalon.law.yale.edu/19th_century/csa_csa.asp', note: 'Transcrição primária consultada; complementa perfil existente sem validar seus números.' }],
    axisCandidates: {
      est: { sourceTitle: 'Constitution of the Confederate States (1861) — Avalon Project', locator: 'Preâmbulo; artigo VI, 6', fact: 'Constitui governo federal e reserva aos Estados ou ao povo poderes não delegados.', limitation: 'Não documenta distribuição efetiva de poder durante a guerra.' },
      mor: { sourceTitle: 'Constitution of the Confederate States (1861) — Avalon Project', locator: 'Artigo I, seção 9, 4; artigo IV, seção 3, 3', fact: 'Protege juridicamente a escravidão e exige sua proteção nos territórios.', limitation: 'A violação documentada não valida uma pontuação numérica exata.' },
      com: { sourceTitle: 'Constitution of the Confederate States (1861) — Avalon Project', locator: 'Artigo I, seção 8, 1', fact: 'Proíbe tarifas destinadas a favorecer setores industriais.', limitation: 'Texto normativo não prova execução fiscal uniforme.' },
      rel: { sourceTitle: 'Constitution of the Confederate States (1861) — Avalon Project', locator: 'Artigo I, seção 9, 12; artigo VI, 4', fact: 'Veda estabelecimento religioso pelo Congresso e teste religioso para cargo público.', limitation: 'Não permite inferir irreligiosidade social ou pessoal.' },
    },
    blockers: [codingBlocker, 'O perfil já existe; não criar segunda entidade nem aumentar contagem com esta revisão.'],
  },
  {
    id: 'research-spanish-second-republic-constitution-1931',
    name: 'Espanha — Segunda República, revisão documental',
    period: 'Constituição promulgada em 9 de dezembro de 1931',
    status: 'unscored-research', identityDisposition: 'existing-profile-review', existingReferenceId: 'spanish-second-republic', reviewedOn: '2026-10-07',
    sources: [{ title: 'Constitución de la República Española (1931) — Gaceta de Madrid / BOE', url: 'https://www.boe.es/gazeta/dias/1931/12/09/pdfs/D00001-00014.pdf', note: 'Digitalização oficial da publicação primária consultada. Links do Congreso presentes no catálogo falharam na abertura desta sessão.' }],
    axisCandidates: {
      est: { sourceTitle: 'Constitución de la República Española (1931) — Gaceta de Madrid / BOE', locator: 'Artigos 1 e 13; páginas 1–2 do PDF', fact: 'Prevê Estado integral com autonomia regional e proíbe federação entre regiões autônomas.', limitation: 'Autonomia regional não equivale a federação.' },
      rep: { sourceTitle: 'Constitución de la República Española (1931) — Gaceta de Madrid / BOE', locator: 'Artigo 36; página 5 do PDF', fact: 'Estabelece direitos eleitorais iguais para cidadãos de ambos os sexos maiores de 23 anos.', limitation: 'Direito formal não demonstra prática de todo o período 1931–1939.' },
      rel: { sourceTitle: 'Constitución de la República Española (1931) — Gaceta de Madrid / BOE', locator: 'Artigos 3, 26–27; páginas 1 e 4 do PDF', fact: 'Não adota religião oficial; restringe organizações religiosas e condiciona culto público a autorização.', limitation: 'Separação religiosa coexistiu com restrições; evitar equipará-la a liberdade religiosa irrestrita.' },
      dip: { sourceTitle: 'Constitución de la República Española (1931) — Gaceta de Madrid / BOE', locator: 'Artigo 6; página 1 do PDF', fact: 'Renuncia à guerra como instrumento de política nacional.', limitation: 'A cláusula não descreve política militar praticada nem a Guerra Civil.' },
    },
    blockers: [codingBlocker, 'O perfil já existe; esta fonte alternativa e suas ressalvas exigem revisão, sem validar ou substituir os scores atuais.'],
  },
];
