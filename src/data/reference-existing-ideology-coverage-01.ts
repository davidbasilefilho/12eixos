import type { AxisKey, ReferenceEntry, ReferenceSource } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';

/** Documentary repairs of two existing identities, never imported as new records. */
const axes: AxisKey[] = ['est','rep','pod','imi','dip','int','eco','con','com','rel','mor','tec'];
const reviewedOn = '2026-10-08';
export const existingIdeology01BaselineProvenance = {
  catalogCommit: '030cc471f16431aa6f6cf4674451bfdd0fec4e70',
  capturedOn: '2026-10-07',
  rawBaseMeaning: 'Literal arrays in source modules, not prepared or integrated vectors.',
  preparedMeaning: 'Module helper output captured separately before this overlay.',
  integratedMeaning: 'Complete live records captured before this overlay; original source objects preserved.',
} as const;
export const existingIdeology01RawBaseVectors = {
  "ideology-technocracy": {
    "est": 50,
    "rep": 34,
    "pod": 58,
    "imi": 50,
    "dip": 57,
    "int": 50,
    "eco": 66,
    "con": 82,
    "com": 49,
    "rel": 50,
    "mor": 48,
    "tec": 95
  },
  "civic-transhumanism": {
    "est": 50,
    "rep": 68,
    "pod": 69,
    "imi": 50,
    "dip": 50,
    "int": 50,
    "eco": 50,
    "con": 50,
    "com": 50,
    "rel": 50,
    "mor": 83,
    "tec": 96
  }
} as const;
export const existingIdeology01ModulePreparedBaseline = [
  {
    "id": "ideology-technocracy",
    "category": "ideology",
    "kind": "ideology",
    "name": "Tecnocracia",
    "period": "The Engineers and the Price System, 1921",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Veblen propõe ampliar a coordenação técnica da produção e reduzir o poder de interesses empresariais no sistema industrial.",
    "caveats": "O ensaio não descreve instituições eleitorais detalhadas e é crítico ao capitalismo de sua época; o perfil não implica que especialistas devam governar sem prestação de contas.",
    "sources": [
      {
        "title": "The Engineers and the Price System — Project Gutenberg",
        "url": "https://www.gutenberg.org/ebooks/4355",
        "note": "Texto primário de Thorstein Veblen sobre engenharia, indústria e coordenação econômica."
      }
    ],
    "evidence": {},
    "axisEvidence": {}
  },
  {
    "id": "civic-transhumanism",
    "kind": "ideology",
    "category": "ideology",
    "name": "Transumanismo",
    "period": "Transhumanist Declaration, revisão de 2012",
    "vec": {
      "est": 50,
      "rep": 68,
      "pod": 69,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 83,
      "tec": 96
    },
    "rationale": "A declaração apoia liberdade morfológica, pesquisa científica e uso voluntário de tecnologia para ampliar capacidades humanas, considerando riscos.",
    "caveats": "Declaração internacional de princípios, não programa eleitoral; não implica apoio irrestrito a toda tecnologia.",
    "sources": [
      {
        "title": "The Transhumanist Declaration — Humanity+",
        "url": "https://www.humanityplus.org/the-transhumanist-declaration",
        "note": "Princípios sobre ciência, autonomia, riscos e tecnologias emergentes."
      }
    ],
    "evidence": {
      "rep": "medium",
      "pod": "medium",
      "mor": "medium",
      "tec": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "The Transhumanist Declaration — Humanity+"
        ],
        "rationale": "Defende participação pública em futuros tecnológicos."
      },
      "pod": {
        "sourceTitles": [
          "The Transhumanist Declaration — Humanity+"
        ],
        "rationale": "Destaca autonomia e liberdade morfológica."
      },
      "mor": {
        "sourceTitles": [
          "The Transhumanist Declaration — Humanity+"
        ],
        "rationale": "Enfatiza bem-estar e ampliação de capacidades."
      },
      "tec": {
        "sourceTitles": [
          "The Transhumanist Declaration — Humanity+"
        ],
        "rationale": "Tecnologia e ciência são centrais."
      }
    }
  }
] as const;
export const existingIdeology01IntegratedBaseline = [
  {
    "id": "ideology-technocracy",
    "category": "ideology",
    "kind": "ideology",
    "name": "Tecnocracia",
    "period": "The Engineers and the Price System, 1921",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Veblen propõe ampliar a coordenação técnica da produção e reduzir o poder de interesses empresariais no sistema industrial.",
    "caveats": "O ensaio não descreve instituições eleitorais detalhadas e é crítico ao capitalismo de sua época; o perfil não implica que especialistas devam governar sem prestação de contas.",
    "sources": [
      {
        "title": "The Engineers and the Price System — Project Gutenberg",
        "url": "https://www.gutenberg.org/ebooks/4355",
        "note": "Texto primário de Thorstein Veblen sobre engenharia, indústria e coordenação econômica."
      }
    ],
    "evidence": {},
    "axisEvidence": {}
  },
  {
    "id": "civic-transhumanism",
    "kind": "ideology",
    "category": "ideology",
    "name": "Transumanismo",
    "period": "Transhumanist Declaration, revisão de 2012",
    "vec": {
      "est": 50,
      "rep": 68,
      "pod": 69,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 83,
      "tec": 96
    },
    "rationale": "A declaração apoia liberdade morfológica, pesquisa científica e uso voluntário de tecnologia para ampliar capacidades humanas, considerando riscos.",
    "caveats": "Declaração internacional de princípios, não programa eleitoral; não implica apoio irrestrito a toda tecnologia.",
    "sources": [
      {
        "title": "The Transhumanist Declaration — Humanity+",
        "url": "https://www.humanityplus.org/the-transhumanist-declaration",
        "note": "Princípios sobre ciência, autonomia, riscos e tecnologias emergentes."
      }
    ],
    "evidence": {
      "rep": "medium",
      "pod": "medium",
      "mor": "medium",
      "tec": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "The Transhumanist Declaration — Humanity+"
        ],
        "rationale": "Defende participação pública em futuros tecnológicos."
      },
      "pod": {
        "sourceTitles": [
          "The Transhumanist Declaration — Humanity+"
        ],
        "rationale": "Destaca autonomia e liberdade morfológica."
      },
      "mor": {
        "sourceTitles": [
          "The Transhumanist Declaration — Humanity+"
        ],
        "rationale": "Enfatiza bem-estar e ampliação de capacidades."
      },
      "tec": {
        "sourceTitles": [
          "The Transhumanist Declaration — Humanity+"
        ],
        "rationale": "Tecnologia e ciência são centrais."
      }
    }
  }
] as const;

const veblen: ReferenceSource = {
  title: 'The Engineers and the Price System, chapter VI — Veblen, CUNY primary transcription',
  url: 'https://cuny.manifoldapp.org/read/the-engineers-and-the-price-system/section/28eeaad7-4ea9-4320-9abc-a9705b160870',
  note: 'Texto autoral de 1921 em reedição Viking 1933, transcrição CUNY 2023; capítulo VI efetivamente lido. Prognósticos e viabilidade não validados.',
};
const bostrom: ReferenceSource = {
  title: 'Transhumanist Values — Nick Bostrom, author primary, 2005',
  url: 'https://nickbostrom.com/papers/transhumanist-values/',
  note: 'Programa de escolhas tecnológicas, acesso, democracia e redução de riscos; publicação autoral 2005, não medição quantitativa.',
};
const declaration: ReferenceSource = {
  title: 'The Transhumanist Declaration — Humanity+',
  url: 'https://www.humanityplus.org/the-transhumanist-declaration',
  note: 'O texto institucional explicita adoção em março de 2009, originado em 1998; leitura dos oito princípios, sem supor revisão 2012.',
};
const claim = (source: ReferenceSource, locator: string, statement: string, publishedDate: string) => ({
  sourceTitle: source.title, locator, statement, basis: 'declaration' as const,
  publishedDate, accessedDate: reviewedOn,
});
/** Research only: author expressly brackets moral/other endorsement in VI166.
 * These conditional design inputs MUST NOT be applied to the catalog or matching.
 */
export const existingIdeology01QuarantinedVeblenDesign: ReferenceAxisCoding[] = [
    {
      axis: 'eco', position: 'strong-first', confidence: 'medium',
      claims: [claim(veblen, 'Chapter VI author paragraphs web 148–158, especially 150–153; 185',
        'O cenário condicional especifica cancelamento da propriedade absenteísta de recursos, equipamentos, capital e estoques industriais, inclusive títulos societários; direção técnica administra a indústria para a coletividade, preservando uso próprio doméstico.',
        'Author text 1921; Viking reprint publisher note January 1933; CUNY transcription 2023')],
      relatedQuestionIds: ['economia_18','economia_20'],
      rationale: 'Reorganização de toda propriedade produtiva absenteísta e controle industrial coletivo, além de um subsídio ou empresa pública setorial.',
      uncertainty: 'Objeto é a grande ordem industrial proposta; propriedade doméstica em uso próprio permanece. Não afirma estatização jurídica de todo bem, nem realização histórica. A âncora codifica a direção editorial, não percentuais de propriedade.',
      reviewedOn,
    },
    {
      axis: 'con', position: 'strong-first', confidence: 'medium',
      claims: [claim(veblen, 'Chapter VI web 95–103, 134–144, 175–185',
        'O cenário condicional atribui a um conselho técnico central a coordenação de alocação dos recursos, transporte e distribuição; uma rede consultiva de conselhos locais participa, substituindo direção para lucros dos proprietários ausentes.',
        'Author text 1921; Viking reprint publisher note January 1933; CUNY transcription 2023')],
      relatedQuestionIds: ['controle_01','controle_02','controle_13'],
      rationale: 'Coordenação deliberada de produção e distribuição industrial como sistema, em lugar da alocação pelo interesse comercial.',
      uncertainty: 'Não identifica esse conselho econômico com todas as instituições do Estado; participação local não é autarquia plena. O autor apresenta cenário condicional e diz não argumentar mérito moral no parágrafo 166; eficiência e factibilidade não verificadas.',
      reviewedOn,
    },
  ];
const rows: Record<string,ReferenceAxisCoding[]> = {
  'ideology-technocracy': [],
  'civic-transhumanism': [
    {
      axis: 'rep', position: 'moderate-first', confidence: 'medium',
      claims: [claim(bostrom, '§5 author web 97–98',
        'Prescreve debate público sobre futuros e extensão da democracia e do Estado de direito ao plano internacional para decisões responsáveis.', '2005')],
      relatedQuestionIds: ['representacao_01','representacao_19'],
      rationale: 'Compromisso democrático e jurídico explícito na governança coletiva de riscos e aprimoramentos.',
      uncertainty: 'Programa internacional normativo, sem desenho constitucional eleitoral completo, posição sobre cada sistema de governo ou prova de prática institucional.', reviewedOn,
    },
    {
      axis: 'dip', position: 'moderate-second', confidence: 'medium',
      claims: [claim(bostrom, '§4 web 79; §5 web 100',
        'Prioriza segurança existencial e paz/cooperação internacional, defendendo combate à proliferação de armas de destruição em massa.', '2005')],
      relatedQuestionIds: ['diplomacia_10'],
      rationale: 'Estratégia de cooperação e redução de armamentos catastróficos, limitada pela necessidade de segurança.',
      uncertainty: 'Não é pacifismo absoluto nem proibição de toda guerra, forças armadas ou defesa; nada inferido sobre intervenção externa ou patriotismo.', reviewedOn,
    },
    {
      axis: 'tec', position: 'strong-first', confidence: 'medium',
      claims: [claim(bostrom, '§1 web 14–23; §3 web 70–71; §5 web 93–94',
        'Aprimoramentos tecnológicos de corpo e mente são meio central do projeto; inclui genética e inteligência artificial, mantendo escolha voluntária, redução de riscos e rejeição de otimismo automático.', '2005'),
        claim(declaration, 'Whole eight principles, especially 1–4 and 8; adoption note March 2009',
        'Defende desenvolvimento e escolha ampla de tecnologias para memória, concentração, prolongamento da vida, reprodução e outras modificações, com gestão responsável de riscos.', 'Adopted March 2009; originated 1998')],
      relatedQuestionIds: ['tecnologia_04','tecnologia_15','tecnologia_20'],
      rationale: 'Ampliação artificial voluntária de capacidades constitui finalidade central, com múltiplos campos e limites explícitos.',
      uncertainty: 'Não se atribui aceitação de poucas restrições ou segurança de toda inovação. Predições sobre viabilidade tecnológica e pós-humanos não validadas como fatos.', reviewedOn,
    },
  ],
};

/** Corrects only supported claims; unknown values stay 50 without grades or mappings. */
export function reconcileExistingIdeology01(entry: ReferenceEntry): ReferenceEntry {
  const inputs = rows[entry.id]?.map(input => entry.id === 'ideology-technocracy'
    ? { ...input, claims: input.claims.map(claim => ({ ...claim, basis: 'norm' as const })) } : input);
  if (!inputs) return entry;
  // The original wrong title/URL object is preserved in the complete baseline above.
  // Abbott's biography cannot remain a current evidentiary citation for Veblen.
  const sources = entry.sources.filter(source => !(entry.id === 'ideology-technocracy'
    && source.url === 'https://www.gutenberg.org/ebooks/4355'));
  const additions = entry.id === 'ideology-technocracy' ? [veblen] : [bostrom,declaration];
  for (const source of additions) {
    const existing = sources.findIndex(item => item.title === source.title && item.url === source.url);
    if (existing < 0) sources.push(source);
    else if (source === declaration) sources[existing] = source;
  }
  const result: ReferenceEntry = { ...entry, sources,
    period: entry.id === 'ideology-technocracy'
      ? 'The Engineers and the Price System, 1921; reedição Viking 1933, transcrição CUNY 2023'
      : 'Bostrom, 2005; declaração Humanity+ adotada em março de 2009',
    vec: Object.fromEntries(axes.map(axis => [axis,50])) as Record<AxisKey,number>,
    evidence: {}, axisEvidence: {}, coding: {},
    rationale: entry.id === 'ideology-technocracy'
      ? 'Fonte primária recuperada; o projeto industrial é condicional e o autor não demonstra endosso normativo, portanto nenhum eixo é pontuado.'
      : 'Âncoras editoriais transparentes derivadas de normas primárias localizadas; não valores medidos pelas fontes.',
    caveats: entry.id === 'ideology-technocracy'
      ? 'Referente preservado e delimitado: projeto industrial condicional de Veblen, não Technocracy Inc. 2004. O autor não argumenta a favor ou contra a proposta por razões morais ou outras (VI 166); as regras internas hipotéticas foram preservadas como pesquisa não aplicada, sem pontuar posições pessoais. Proposta industrial condicional; previsões e instituições políticas além da administração econômica desconhecidas. Fonte incorreta anterior integralmente arquivada.'
      : 'Referente tecnológico e político delimitado, não programa eleitoral completo. Religião jurídica, migração e todo programa moral permanecem desconhecidos; raízes seculares e antirracismo não os pontuam.',
  };
  for (const input of inputs) {
    const coded = codeReferenceAxis(input,sources);
    result.vec[input.axis] = coded.value;
    result.evidence[input.axis] = coded.evidence;
    result.axisEvidence![input.axis] = coded.axisEvidence;
    result.coding![input.axis] = coded.coding;
  }
  return result;
}
export const existingIdeology01CodingAudit = Object.entries(rows).map(([id,coding]) => ({
  id, reviewedOn, rawBaseVector: existingIdeology01RawBaseVectors[id as keyof typeof existingIdeology01RawBaseVectors],
  integratedBaseline: existingIdeology01IntegratedBaseline.find(entry => entry.id === id),
  supportedAxes: coding.map(input => input.axis),
  coding: coding.map(input => codeReferenceAxis(id === 'ideology-technocracy'
    ? { ...input, claims: input.claims.map(claim => ({ ...claim, basis: 'norm' as const })) } : input,
    [veblen,bostrom,declaration]).coding),
  eligibilityClaim: 'No claim: both reviewed profiles have fewer than six supported axes.',
}));
