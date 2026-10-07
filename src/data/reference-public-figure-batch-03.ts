import type { ReferenceEntry, ReferenceSource } from './references';
import { AXES } from '../lib/scoring';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';

const accessedDate = '2026-10-07';
type Document = ReferenceSource & { publishedDate: string };
const doc = (title: string, url: string, publishedDate: string, note: string): Document => ({ title, url, publishedDate, note });
const karman = doc('Tawakkol Karman — discurso de Sarajevo sobre democracia',
  'https://www.tawakkolkarman.net/texts/speeches/5059-tawakkol-karman-speech-on-sarajevo-conference-on-democracy-in-the-arab-world',
  'Sem data editorial indicada na página consultada', 'Texto autoral no próprio gabinete, aberto em 7/10/2026; data do evento não confirmada. Não atribuir automaticamente o discurso a 2026.');
const karmanDated = doc('Tawakkol Karman — Nobel Prize Summit, Washington, 25/5/2023',
  'https://www.tawakkolkarman.net/texts/speeches/4335-tawakkol-karman-speech-at-nobel-prize-summit-washington',
  '2023-05-25; data indicada no índice da página inicial do gabinete',
  'Texto autoral aberto em 7/10/2026; o índice https://www.tawakkolkarman.net/ associa a este título/link a data 05-25-2023. O discurso de Sarajevo fica somente como contexto sem data confirmada.');
const ebadi = doc('Conversation with Shirin Ebadi — JFK Library, 8/5/2005',
  'https://www.jfklibrary.org/events-and-awards/kennedy-library-forums/browse-all-forums/transcripts/conversation-with-shirin-ebadi',
  '2005-05-08', 'Transcrição primária do diálogo, aberta em 7/10/2026. Somente respostas identificadas MS. EBADI codificam a autora; tradução e trechos inaudíveis são limitações.');
const mohammadi = doc('Narges Mohammadi — Gender Apartheid must end',
  'https://www.nobelpeacecenter.org/en/news/gender-apartheid-must-end',
  '2025-05-22; discurso de 21/5/2025', 'Texto assinado publicado pelo anfitrião, aberto em 7/10/2026; afirmações sobre leis iranianas são enquadramento da autora, não auditoria jurídica independente.');
const ressa = doc('Maria Ressa — discurso preparado para prêmio CPJ de 2018',
  'https://cpj.org/awards/maria-ressa/', '2018; dia da publicação não indicado',
  'O organizador publica o texto preparado para apresentação, aberto em 7/10/2026. Distinguir discurso primário da biografia editorial da página.');
const mukwege = doc('Denis Mukwege — Without women, there can be no lasting peace',
  'https://theelders.org/news/without-women-there-can-be-no-lasting-peace', '2025-11-13',
  'Artigo assinado, adaptado de boletim pelo próprio organismo do autor; aberto em 7/10/2026. Não atribuir declarações coletivas dos Elders sem adesão pessoal documentada.');

const settlementSanctions = doc('Mary Robinson e Helen Clark — declaração conjunta sobre sanções a assentamentos',
  'https://theelders.org/news/mary-robinson-and-helen-clark-react-israeli-settlement-trade-ban-uk-and-others',
  '2026-09-09', 'Declaração atribuída nominalmente às duas autoras, aberta em 7/10/2026; adesão individual explícita, sem imputar posições genéricas da organização.');
const santosPeace = doc('Juan Manuel Santos — negociações inclusivas sobre Ucrânia',
  'https://theelders.org/news/juan-manuel-santos-urges-inclusive-peace-talks-ukraines-future',
  '2025-02-24', 'Declaração nominal reproduzida pelo próprio organismo, aberta em 7/10/2026; conteúdo distinto da biografia editorial.');

function code(axis: ReferenceAxisCoding['axis'], position: ReferenceAxisCoding['position'], source: Document,
  locator: string, statement: string, rationale: string, uncertainty: string,
  confidence: ReferenceAxisCoding['confidence'] = 'medium'): ReferenceAxisCoding {
  return { axis, position, confidence, claims: [{ sourceTitle: source.title, publishedDate: source.publishedDate,
    accessedDate, locator, statement, basis: 'declaration' }], rationale, uncertainty, reviewedOn: accessedDate };
}
export interface PublicFigureBatch03Spec {
  id: string; name: string; period: string; sources: ReferenceSource[]; coding: ReferenceAxisCoding[];
  caveats: string; identityReview: 'author-current-source-checked';
}
const identity = (title: string, url: string, note: string): ReferenceSource => ({ title, url, note: `${note} Aberta em 7/10/2026; identidade contemporânea, sem valores de eixo.` });
const identities = {
  karman: identity('Tawakkol Karman — gabinete, atividade pública contemporânea', 'https://www.tawakkolkarman.net/', 'Página pessoal atual e notícias do próprio gabinete; data exata de todas as atividades não certificada.'),
  ebadi: identity('Shirin Ebadi — entrevista no Amanpour and Company, 16/1/2026', 'https://www.pbs.org/video/january-16-2026-xla3nu/', 'Página da emissora e transcrição identificam entrevista com Ebadi nesta data; vídeo indisponível no acesso.'),
  mohammadi: identity('Narges Mohammadi — entrevista publicada em 6/10/2026', 'https://www.theguardian.com/global-development/2026/oct/06/iranian-nobel-laureate-narges-mohammadi-recounts-prison-beating', 'Reportagem com entrevista recente; usada somente para identidade viva/publicamente ativa.'),
  ressa: identity('Maria Ressa — Institute of Global Politics, Columbia', 'https://igp.sipa.columbia.edu/distinguished-fellows/maria-ressa', 'Perfil institucional atual de atividade pública; sem assumir cargo de governo.'),
  mukwege: identity('Denis Mukwege — membro atual dos Elders', 'https://theelders.org/profile/denis-mukwege', 'Perfil institucional atual, distinto do artigo assinado que sustenta o eixo.'),
  robinson: identity('Mary Robinson — membro atual dos Elders', 'https://theelders.org/profile/mary-robinson', 'Perfil institucional atual identifica membro ativo após deixar a presidência em 2024.'),
  clark: identity('Helen Clark — membro atual dos Elders', 'https://theelders.org/profile/helen-clark', 'Perfil institucional atual identifica atividade pública e vínculo atual.'),
  santos: identity('Juan Manuel Santos — presidente atual dos Elders', 'https://theelders.org/profile/juan-manuel-santos', 'Perfil institucional atual identifica presidência da organização, não cargo atual no governo colombiano.'),
};

/** Primary claims read; identity/status and independent review remain explicit integration prerequisites. */
export const publicFigureBatch03Specs: PublicFigureBatch03Spec[] = [
  {
    id: 'tawakkol-karman', name: 'Tawakkol Karman', period: 'Nobel Prize Summit, edição indexada em 25 de maio de 2023',
    sources: [karmanDated, karman, identities.karman], identityReview: 'author-current-source-checked',
    caveats: 'Declaração de 2023 sobre expressão digital. Sarajevo permanece contexto sem data confirmada e não gera scores; não certificar implementação.',
    coding: [
      code('pod', 'moderate-second', karmanDated, 'Parágrafos Global democracies; Tech companies; They should resist demands for censorship',
        'Defende expressão digital protegida contra censura autoritária e manipulação, com remoção de conteúdos causadores de dano real.',
        'Proteção da expressão limita coerção estatal.', 'Preserva moderação contra danos; não resolve todas as políticas de segurança.'),
    ],
  },
  {
    id: 'shirin-ebadi', name: 'Shirin Ebadi', period: 'Diálogo na JFK Library, 8 de maio de 2005',
    sources: [ebadi, identities.ebadi], identityReview: 'author-current-source-checked',
    caveats: 'Respostas próprias de 2005. A entrevista de 2026 contém posições distintas sobre ações externas direcionadas e não é misturada neste vetor datado.',
    coding: [
      code('rep', 'moderate-first', ebadi, 'Respostas sobre governo democrático e filtragem de candidaturas pelo Guardian Council',
        'Defende governo democrático e candidaturas livres de veto político prévio.',
        'Escolha eleitoral aberta sustenta direção democrática.', 'Não fornece arquitetura completa de representação.'),
      code('rel', 'strong-first', ebadi, 'Resposta My personal belief is that church and state should be separated',
        'Defende separar religião e Estado, compatibilizando isso com sua fé islâmica.',
        'Separação institucional explícita sustenta laicidade.', 'Não implica irreligião nem rejeição de toda ética religiosa.', 'high'),
      code('dip', 'moderate-second', ebadi, 'Respostas sobre ajuda à democracia iraniana e política externa: military attack; negotiate',
        'Rejeita ataque militar como ajuda à democratização e prefere negociação seguida da ONU.',
        'Preferência diplomática pacífica delimitada.', 'Não prova pacifismo absoluto em todos os conflitos.'),
    ],
  },
  {
    id: 'narges-mohammadi', name: 'Narges Mohammadi', period: 'Discurso sobre discriminação de gênero, 21 de maio de 2025',
    sources: [mohammadi, identities.mohammadi], identityReview: 'author-current-source-checked',
    caveats: 'Codifica oposição declarada à subordinação de mulheres; não adota como parecer jurídico as descrições legais do discurso.',
    coding: [code('mor', 'moderate-first', mohammadi, 'Do parágrafo In 2025, in Iran até This is gender apartheid and it must end',
      'Contesta tutela masculina, imposição de vestuário e limitações à participação e autonomia reprodutiva de mulheres.',
      'Emancipação de gênero sustenta direção reformista.', 'Não cobre todos os costumes ou posições em desigualdade econômica.')],
  },
  {
    id: 'maria-ressa', name: 'Maria Ressa', period: 'Discurso preparado para o prêmio CPJ de 2018',
    sources: [ressa, identities.ressa], identityReview: 'author-current-source-checked',
    caveats: 'Texto preparado, não transcrição verificada da apresentação; críticas tecnológicas não geram rejeição geral de tecnologia.',
    coding: [code('pod', 'moderate-second', ressa, 'Discurso preparado: parágrafo With this announced indictment e lista de seis apelos, itens 1–3',
      'Contesta instrumentalização penal contra jornalistas e defende publicar sem medo ou favorecimento.',
      'Liberdade de imprensa limita coerção estatal.', 'Não resolve todas as políticas de segurança; suas denúncias não são aqui decisões judiciais verificadas.')],
  },
  {
    id: 'denis-mukwege', name: 'Denis Mukwege', period: 'Artigo assinado de 13 de novembro de 2025',
    sources: [mukwege, identities.mukwege], identityReview: 'author-current-source-checked',
    caveats: 'Participação feminina na construção da paz é o subtema lido; prêmio e profissão não geram posições nos demais eixos.',
    coding: [code('mor', 'moderate-first', mukwege, 'Parágrafos While women often bear; However; As we mark; The participation of women',
      'Defende liderança e participação plena e igual de mulheres nas negociações e construção da paz.',
      'Igualdade de participação sustenta direção emancipatória.', 'Não estabelece programa completo sobre família, aborto ou outros costumes.')],
  },
  ...([
    { id: 'mary-robinson', name: 'Mary Robinson', identity: identities.robinson },
    { id: 'helen-clark', name: 'Helen Clark', identity: identities.clark },
  ]).map(person => ({
    id: person.id, name: person.name, period: 'Declaração conjunta nominal de 9 de setembro de 2026',
    sources: [settlementSanctions, person.identity], identityReview: 'author-current-source-checked' as const,
    caveats: 'Sanções comerciais dirigidas a assentamentos: não infere intervenção militar, bloqueio geral de Israel ou proteção industrial doméstica.',
    coding: [{ ...code('int', 'moderate-second', settlementSanctions,
      'Declaração nominal: parágrafos The measures targeting; Those who trade; The EU should now follow suit',
      'Apoia medidas econômicas internacionais dirigidas a assentamentos e pede extensão coordenada pela UE.',
      'Coerção econômica externa delimitada sustenta direção intervencionista moderada.',
      'Não abrange intervenção militar ou eficácia comprovada de sanções; as qualificações jurídicas são argumentos das autoras.'), relatedQuestionIds: ['intervencao_15'] }],
  })),
  {
    id: 'juan-manuel-santos', name: 'Juan Manuel Santos', period: 'Declaração nominal de 24 de fevereiro de 2025',
    sources: [santosPeace, identities.santos], identityReview: 'author-current-source-checked',
    caveats: 'Negociação inclusiva nesse conflito; apoio à segurança ucraniana não equivale a pacifismo absoluto nem prova toda a trajetória.',
    coding: [code('dip', 'moderate-second', santosPeace,
      'Declaração nominal: parágrafos The conflict is entering; The whole world will pay',
      'Pede negociações de paz com participação direta da Ucrânia e de países europeus, preservando soberania e garantias de segurança.',
      'Preferência por solução diplomática inclusiva sustenta direção pacífica delimitada.',
      'Não rejeita defesa militar ou apoio a aliados; não transforma negociações em neutralidade.')],
  },

];

export const publicFigureBatch03: ReferenceEntry[] = publicFigureBatch03Specs.map(spec => {
  const entry: ReferenceEntry = { id: spec.id, name: spec.name, kind: 'person', category: 'public-figure', period: spec.period,
    sources: spec.sources, caveats: spec.caveats, rationale: 'Recorte de declarações primárias documentadas; demais eixos desconhecidos.',
    vec: Object.fromEntries(AXES.map(({ key }) => [key, 50])) as ReferenceEntry['vec'], evidence: {}, axisEvidence: {}, coding: {} };
  for (const input of spec.coding) {
    const coded = codeReferenceAxis(input, spec.sources);
    entry.vec[input.axis] = coded.value; entry.evidence[input.axis] = coded.evidence;
    entry.axisEvidence![input.axis] = coded.axisEvidence; entry.coding![input.axis] = coded.coding;
  }
  return entry;
});
