import type { AxisKey } from '../lib/scoring';

/** Original independent documentary queue, deliberately NOT ReferenceEntry.
 * Partial claims were promoted via reference-public-figure-batch using the explicit
 * editorial-ordinal-v1 protocol; original observations and queue status are preserved.
 * Source publication dates are not inferred from retrieval dates.
 */
export type PublicFigureResearch = {
  id: string;
  name: string;
  category: 'public-figure';
  status: 'unscored-review';
  retrievedAt: '2026-10-07';
  scope: string;
  sources: readonly {
    id: string; title: string; url: string;
    publisher: string; publicationDate: string | null;
  }[];
  claims: readonly {
    axis: AxisKey;
    direction: 'toward-left' | 'toward-right' | 'mixed';
    sourceId: string;
    locator: string;
    observation: string;
    limitation: string;
  }[];
  unresolvedAxes: readonly AxisKey[];
  caveats: string;
};

export const publicFigureResearch = [
  {
    id: 'ilhan-omar', name: 'Ilhan Omar', category: 'public-figure', status: 'unscored-review', retrievedAt: '2026-10-07',
    scope: 'Posições legislativas autodeclaradas na página Issues consultada em 7 de outubro de 2026; página sem data de publicação.',
    sources: [{ id: 'omar-issues', title: 'Issues — Representative Ilhan Omar', url: 'https://omar.house.gov/issues', publisher: 'Gabinete de Ilhan Omar, Câmara dos EUA', publicationDate: null }],
    claims: [
      { axis: 'imi', direction: 'toward-right', sourceId: 'omar-issues', locator: 'Immigration, primeiro parágrafo', observation: 'Defende direitos para imigrantes sem documentação e reassentamento de refugiados.', limitation: 'Inclusão migratória não estabelece toda a política de integração cultural.' },
      { axis: 'eco', direction: 'toward-left', sourceId: 'omar-issues', locator: 'Healthcare, primeiro parágrafo; Education, primeiro parágrafo', observation: 'Defende sistema de pagador único Medicare for All e ensino superior sem mensalidades.', limitation: 'Financiamento público de serviços não determina propriedade em todos os setores.' },
      { axis: 'con', direction: 'toward-left', sourceId: 'omar-issues', locator: 'Workers and Economy, dois parágrafos; Environmental Justice, primeiro parágrafo', observation: 'Propõe elevar salário mínimo, licença remunerada nacional e investimento em renováveis.', limitation: 'Regulação e investimento setoriais não equivalem a planejamento integral.' },
      { axis: 'dip', direction: 'toward-right', sourceId: 'omar-issues', locator: 'Foreign Policy, primeiro parágrafo', observation: 'Prioriza diplomacia, retorno das tropas e ação militar como último recurso.', limitation: 'Não é rejeição absoluta de toda ação militar.' },
    ],
    unresolvedAxes: ['est', 'rep', 'pod', 'int', 'com', 'rel', 'mor', 'tec'],
    caveats: 'Fonte de posições, não de implementação. Não inferir religião política pela identidade religiosa nem democracia pelo cargo eletivo. O eixo int tem polos peculiares e exige exame adicional.',
  },
  {
    id: 'rashida-tlaib', name: 'Rashida Tlaib', category: 'public-figure', status: 'unscored-review', retrievedAt: '2026-10-07',
    scope: 'Agenda publicada pelo gabinete: Justice for All Act de 2023 e página Ending Poverty sem data; consulta em 7 de outubro de 2026.',
    sources: [
      { id: 'tlaib-justice', title: 'Justice for All', url: 'https://tlaib.house.gov/resources/justice', publisher: 'Gabinete de Rashida Tlaib, Câmara dos EUA', publicationDate: null },
      { id: 'tlaib-poverty', title: 'Ending Poverty', url: 'https://tlaib.house.gov/resources/ending-poverty', publisher: 'Gabinete de Rashida Tlaib, Câmara dos EUA', publicationDate: null },
    ],
    claims: [
      { axis: 'rep', direction: 'toward-left', sourceId: 'tlaib-justice', locator: 'My Position on Justice for All, primeiro parágrafo', observation: 'Declara compromisso com a proteção do direito ao voto.', limitation: 'Não sustenta um retrato completo de desenho democrático.' },
      { axis: 'imi', direction: 'toward-right', sourceId: 'tlaib-justice', locator: 'My Position on Justice for All, segundo parágrafo', observation: 'Defende facilitar o acesso à cidadania para comunidades imigrantes.', limitation: 'Cidadania não resolve todas as posições sobre multiculturalismo.' },
      { axis: 'pod', direction: 'toward-right', sourceId: 'tlaib-justice', locator: 'Justice for All Civil Rights Act, item 4', observation: 'Propõe responsabilização de agentes públicos e vedação a perfilamento racial e de gênero pela polícia.', limitation: 'Proteção contra abuso não implica rejeição de toda política de segurança.' },
      { axis: 'mor', direction: 'toward-left', sourceId: 'tlaib-justice', locator: 'Justice for All Civil Rights Act, item 7', observation: 'Propõe proteção antidiscriminatória para orientação sexual e identidade de gênero.', limitation: 'Escopo é direitos civis especificados, não todos os temas morais.' },
      { axis: 'con', direction: 'toward-left', sourceId: 'tlaib-poverty', locator: 'My Position on Ending Poverty, primeiro parágrafo; BOOST Act, primeiro parágrafo', observation: 'Defende salário mínimo maior e crédito tributário para famílias de renda baixa e moderada.', limitation: 'Redistribuição tributária não demonstra propriedade pública nem planejamento integral.' },
    ],
    unresolvedAxes: ['est', 'dip', 'int', 'eco', 'com', 'rel', 'tec'],
    caveats: 'A descrição do JFA é de proposta reapresentada em 2023, não de lei em vigor. Não atribuir nacionalização com base em transferência de renda. A página Health Care consultada é genérica e foi excluída como sustentação do eixo eco.',
  },
  {
    id: 'ayanna-pressley', name: 'Ayanna Pressley', category: 'public-figure', status: 'unscored-review', retrievedAt: '2026-10-07',
    scope: 'Plataforma de campanha publicada sem datas; consulta em 7 de outubro de 2026. O texto econômico menciona recuperação da crise de COVID-19 e não deve ser tratado como proposta recém-lançada.',
    sources: [
      { id: 'pressley-economy', title: 'Fighting for a Just Economy', url: 'https://ayannapressley.com/issues/jobguarantee/', publisher: 'Ayanna Pressley for Congress', publicationDate: null },
      { id: 'pressley-abortion', title: 'Abortion Care as a Human Right', url: 'https://ayannapressley.com/issues/lgbtq/', publisher: 'Ayanna Pressley for Congress', publicationDate: null },
      { id: 'pressley-diplomacy', title: 'Foreign Policy Centered on Empathy and the Pursuit of Peace', url: 'https://ayannapressley.com/issues/protecting-the-rights-of-cisgender-and-transgender-women-and-girls/', publisher: 'Ayanna Pressley for Congress', publicationDate: null },
      { id: 'pressley-immigration', title: 'A Just and Humane Immigration System', url: 'https://ayannapressley.com/issues/immigration/', publisher: 'Ayanna Pressley for Congress', publicationDate: null },
    ],
    claims: [
      { axis: 'eco', direction: 'toward-left', sourceId: 'pressley-economy', locator: 'Fighting for a Just Economy, terceiro parágrafo (Federal Job Guarantee)', observation: 'Defende empregos públicos financiados federalmente para adultos que busquem trabalho.', limitation: 'Emprego público não especifica propriedade de toda a economia.' },
      { axis: 'con', direction: 'toward-left', sourceId: 'pressley-economy', locator: 'Fighting for a Just Economy, terceiro parágrafo (Federal Job Guarantee)', observation: 'Propõe garantia legal de emprego com salário, benefícios e proteção sindical.', limitation: 'A organização local da execução não codifica automaticamente federalismo constitucional.' },
      { axis: 'mor', direction: 'toward-left', sourceId: 'pressley-abortion', locator: 'Abortion Care as a Human Right, dois parágrafos', observation: 'Defende acesso nacional ao aborto e proteção da autonomia corporal.', limitation: 'A URL termina em lgbtq, mas o conteúdo atual trata de aborto; não usar a URL para inferir outras posições.' },
      { axis: 'dip', direction: 'toward-right', sourceId: 'pressley-diplomacy', locator: 'Foreign Policy Centered on Empathy and the Pursuit of Peace, primeiro e quarto parágrafos', observation: 'Prioriza diplomacia e define ação militar como último recurso.', limitation: 'Coalizões e direitos humanos não estabelecem posição inequívoca no eixo int.' },
      { axis: 'imi', direction: 'toward-right', sourceId: 'pressley-immigration', locator: 'A Just and Humane Immigration System, segundo parágrafo', observation: 'Defende instituições públicas inclusivas para imigrantes independentemente do status migratório.', limitation: 'Não é uma plataforma completa de política cultural.' },
    ],
    unresolvedAxes: ['est', 'rep', 'pod', 'int', 'com', 'rel', 'tec'],
    caveats: 'Autodescrição de campanha não prova resultados legislativos. Os títulos exibidos foram conferidos apesar dos slugs inconsistentes; datas ausentes permanecem ausentes.',
  },
  {
    id: 'ro-khanna', name: 'Ro Khanna', category: 'public-figure', status: 'unscored-review', retrievedAt: '2026-10-07',
    scope: 'Plataforma de Ro for Congress disponível em 7 de outubro de 2026, sem data de publicação. Inclui propostas futuras e relatos de atividade anterior.',
    sources: [{ id: 'khanna-platform', title: "Ro’s Platform | Issues & Policy Positions", url: 'https://rokhanna.com/en/platform', publisher: 'Ro for Congress', publicationDate: null }],
    claims: [
      { axis: 'eco', direction: 'toward-left', sourceId: 'khanna-platform', locator: 'Medicare for All / Medicare for All Must Be Passed', observation: 'Defende Medicare for All; admite cobertura privada complementar.', limitation: 'Não confundir pagador público com eliminação de toda provisão privada.' },
      { axis: 'con', direction: 'toward-left', sourceId: 'khanna-platform', locator: 'Marshall Plan for America / National Industrial Bank', observation: 'Propõe banco industrial federal e conselho nacional de desenvolvimento.', limitation: 'O banco investiria também com capital privado.' },
      { axis: 'com', direction: 'mixed', sourceId: 'khanna-platform', locator: 'Keeping Factories in America: Tax Offshoring and Oppose Unfair Trade; Lower Costs / Lower Prices', observation: 'Defende tarifas setoriais e penalidades por transferência de fábricas, mas revogação de tarifas gerais sobre alimentos.', limitation: 'Preservar a distinção setorial; não reduzir a posição a uma direção única.' },
      { axis: 'dip', direction: 'mixed', sourceId: 'khanna-platform', locator: 'Stop Wars and Genocide / Cut the Pentagon Budget; Support Ukraine and Taiwan / Ensure U.S. naval superiority', observation: 'Propõe cortes militares e oposição a guerras, junto com armas para Ucrânia e Taiwan e superioridade naval.', limitation: 'Não apagar a defesa militar seletiva ao codificar oposição a guerras.' },
      { axis: 'tec', direction: 'mixed', sourceId: 'khanna-platform', locator: 'Humans Over AI / Keep humans in the loop; Regulate AI so it is used to improve humanity, not damage it', observation: 'Apoia desenvolvimento de IA com regulação e decisões humanas obrigatórias.', limitation: 'Regulação da IA não resolve todo o construto Tecnologia/Biologia.' },
    ],
    unresolvedAxes: ['est', 'rep', 'pod', 'imi', 'int', 'rel', 'mor'],
    caveats: 'Seções de biografia e links jornalísticos não foram usados como evidência de eixos. A identidade religiosa declarada não codifica rel. O gabinete bloqueou a leitura de páginas de temas; a fonte utilizada é a plataforma primária da campanha.',
  },
] as const satisfies readonly PublicFigureResearch[];
