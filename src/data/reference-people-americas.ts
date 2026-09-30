/** Source-verified Americas profiles; unsupported axes remain unknown at 50. */
import type { AxisKey, ReferenceEntry } from './references';

const axes: readonly AxisKey[] = ['est', 'rep', 'pod', 'imi', 'dip', 'int', 'eco', 'con', 'com', 'rel', 'mor', 'tec'];
type AxisNote = { value: number; why: string; strength?: 'medium' | 'high' };
type Profile = {
  id: string; name: string; period: string; values: Partial<Record<AxisKey, AxisNote>>;
  title: string; url: string; sourceNote: string; caveats: string;
};

const profiles: Profile[] = [
  {
    id: 'salvador-allende', name: 'Salvador Allende',
    period: 'Programa da Unidade Popular, candidatura presidencial de 1970',
    title: 'Programa básico de gobierno de la Unidad Popular',
    url: 'https://www.memoriachilena.gob.cl/archivos2/pdfs/MC0000544.pdf',
    sourceNote: 'Programa primário de 1969, preservado e digitalizado pela Biblioteca Nacional do Chile; coalizão da candidatura de Allende, não uma declaração individual isolada.',
    caveats: 'Vetor do programa coletivo da Unidade Popular na eleição de 1970, não de toda a trajetória de Allende nem da implementação do governo. Eixos sem proposta equivalente permanecem desconhecidos.',
    values: {
      rep: { value: 82, strength: 'high', why: 'O programa propõe preservar e aprofundar garantias democráticas, direitos individuais, eleições e participação popular no poder.' },
      pod: { value: 34, strength: 'medium', why: 'Defende ampliar liberdades de consciência, expressão, imprensa e reunião e garantir direitos individuais e sociais.' },
      int: { value: 78, strength: 'medium', why: 'A plataforma propõe independência nacional e romper a dependência política e econômica atribuída ao imperialismo estrangeiro.' },
      eco: { value: 86, strength: 'high', why: 'O texto prevê propriedade pública dos recursos e controle estatal de setores estratégicos, mantendo áreas privadas e mistas.' },
      con: { value: 84, strength: 'high', why: 'O programa prevê planejar a transição econômica, organizar produção e investimento e ampliar a coordenação pública.' },
      mor: { value: 72, strength: 'medium', why: 'O programa prevê igualdade salarial e civil entre mulheres e homens, além de direitos iguais para filhos dentro e fora do casamento.' },
    },
  },
  {
    id: 'ricardo-flores-magon', name: 'Ricardo Flores Magón',
    period: 'Programa do Partido Liberal Mexicano, 1906',
    title: 'Programa del Partido Liberal (1906), Junta Organizadora del PLM',
    url: 'https://www.memoriapoliticademexico.org/Textos/5RepDictadura/1906PPL.html',
    sourceNote: 'Transcrição integral do programa primário de 1906; o texto identifica Flores Magón como presidente e signatário da Junta Organizadora, que publicou o programa coletivamente.',
    caveats: 'Vetor do programa coletivo de 1906, não de todos os textos ou fases da vida de Flores Magón. A plataforma combina reformas sociais com propriedade privada produtiva e contém uma proposta racista de proibir imigração chinesa; essa proposta não foi tratada como pluralismo cultural.',
    values: {
      est: { value: 25, strength: 'medium', why: 'O programa propõe reorganizar e fortalecer os municípios, distribuir poder político localmente e extinguir chefias políticas usadas para controlar as regiões.' },
      rep: { value: 91, strength: 'high', why: 'Defende sufrágio, eleições não consecutivas, alternância de poder, liberdade de imprensa, fiscalização popular e governo democrático.' },
      pod: { value: 27, strength: 'high', why: 'Propõe garantias à expressão, imprensa e defesa judicial, além de abolir a pena de morte e tribunais militares em tempos de paz.' },
      dip: { value: 20, strength: 'high', why: 'Rejeita conscrição obrigatória e militarismo profissional e prevê serviço militar voluntário e Guarda Nacional cidadã.' },
      int: { value: 80, strength: 'medium', why: 'Recusa novas dívidas externas e defende unidade latino-americana para proteger a soberania nacional contra pressões externas.' },
      eco: { value: 58, strength: 'medium', why: 'Combina terra produtiva em posse privada com redistribuição estatal de terras ociosas, banco agrícola e proteção legal ao trabalho.' },
      con: { value: 62, strength: 'medium', why: 'Prevê ação estatal para redistribuir terras improdutivas, financiar agricultores e regular jornada, salários e condições de trabalho.' },
      com: { value: 76, strength: 'medium', why: 'O texto prioriza trabalhadores mexicanos e limita a participação estrangeira em certos empregos; a leitura deste eixo se limita a essa orientação econômica nacional.' },
      rel: { value: 10, strength: 'high', why: 'Defende educação laica, separação entre Igreja e Estado e restrição ao controle clerical de escolas e bens.' },
      mor: { value: 63, strength: 'medium', why: 'Prevê igualdade civil entre filhos, proteção indígena e garantias de direitos do trabalho. O mesmo programa contém uma exclusão racial explícita, registrada na ressalva.' },
    },
  },
  {
    id: 'rigoberta-menchu', name: 'Rigoberta Menchú',
    period: 'Discurso Nobel e atuação pública, 1992',
    title: 'Nobel Lecture, December 10, 1992 — Rigoberta Menchú Tum',
    url: 'https://www.nobelprize.org/prizes/peace/1992/tum/lecture/',
    sourceNote: 'Transcrição oficial em espanhol do discurso Nobel de Menchú, com versão inglesa e data do pronunciamento.',
    caveats: 'Este registro cobre compromissos expressos no discurso de 1992. Ele não é uma plataforma de governo e não fundamenta posições econômicas ou tecnológicas.',
    values: {
      imi: { value: 12, strength: 'high', why: 'Menchú rejeita racismo e discriminação cultural e defende direitos indígenas e convivência entre os povos ladino, garífuna e indígena.' },
      dip: { value: 18, strength: 'medium', why: 'O discurso defende paz, reconciliação e soluções pacíficas para conflitos internacionais.' },
      mor: { value: 88, strength: 'high', why: 'A fala denuncia discriminação contra mulheres indígenas e reivindica justiça e direitos humanos.' },
      int: { value: 74, strength: 'medium', why: 'Menchú reivindica autodeterminação e soberania integral do Panamá, além de paz justa e direitos dos povos.' },
    },
  },
  {
    id: 'fidel-castro', name: 'Fidel Castro',
    period: 'Programa de oposição a Batista, discurso de defesa de 1953',
    title: 'History Will Absolve Me, Fidel Castro (edição de 1961)',
    url: 'https://stars.library.ucf.edu/prism/363/',
    sourceNote: 'Registro da University of Central Florida Libraries Special Collections com acesso à digitalização integral da edição de 1961 do discurso apresentado em 1953.',
    caveats: 'Este é o programa oposicionista de Castro em 1953, publicado nesta edição em 1961, anterior ao governo revolucionário e às políticas posteriores. Não se transfere automaticamente a outros períodos.',
    values: {
      rep: { value: 80, strength: 'medium', why: 'O discurso denuncia o golpe de Batista e reivindica a restauração da Constituição de 1940, das liberdades e das instituições republicanas.' },
      pod: { value: 28, strength: 'medium', why: 'A fala acusa perseguição e remoção arbitrária de juízes e reivindica liberdades de reunião, associação, expressão e imprensa.' },
      eco: { value: 68, strength: 'medium', why: 'O programa inicial inclui reforma agrária e participação dos trabalhadores nos lucros industriais e açucareiros.' },
      mor: { value: 66, strength: 'medium', why: 'A defesa reivindica direitos trabalhistas e reformas sociais para grupos pobres e rurais.' },
    },
  },
];

export const peopleAmericasExpansion: ReferenceEntry[] = profiles.map((profile) => {
  const evidence: Partial<Record<AxisKey, 'medium' | 'high'>> = {};
  const axisEvidence: NonNullable<ReferenceEntry['axisEvidence']> = {};
  const vec = Object.fromEntries(axes.map((axis) => {
    const item = profile.values[axis];
    if (!item) return [axis, 50];
    evidence[axis] = item.strength ?? 'medium';
    axisEvidence[axis] = { sourceTitles: [profile.title], rationale: item.why };
    return [axis, item.value];
  })) as Record<AxisKey, number>;
  return {
    id: profile.id, kind: 'person', category: profile.id === 'rigoberta-menchu' ? 'public-figure' : 'historical-figure', name: profile.name, period: profile.period,
    vec, rationale: `${profile.name}: estimativa documental limitada ao recorte indicado.`, caveats: profile.caveats,
    sources: [{ title: profile.title, url: profile.url, note: profile.sourceNote }], evidence, axisEvidence,
  };
});
