import type { ReferenceEntry, ReferenceSource } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';
type RankingPublic02ArchiveEntry = Omit<ReferenceEntry, 'sources'> & { sources: (ReferenceSource & { publishedDate?: string })[] };

/** Full selected prior object; unimported candidate awaiting whole-six review and Root. */
export const ranking675Public02Before: RankingPublic02ArchiveEntry[] = [
  {
    "id": "marine-le-pen",
    "name": "Marine Le Pen",
    "aliases": [
      "Marine Lepen"
    ],
    "kind": "person",
    "category": "public-figure",
    "period": "Programa presidencial próprio2022; identidade/atividade verificada21/09/2026",
    "sources": [
      {
        "title": "Marine Le Pen —22 mesures pour2022, programa presidencial próprio",
        "url": "https://mlafrance.fr/pdfs/22-mesures-pour-2022.pdf",
        "note": "Programa próprio2022, PDF8p; corpo textual0–211 lido; dia editorial não certificado."
      },
      {
        "title": "Marine Le Pen — espelho oficial22 mesures",
        "url": "https://rassemblementnational.fr/22-mesures",
        "note": "Espelho oficial100–198 lido, confirma atribuição pessoal2022; mesma evidência, não confirmação independente."
      },
      {
        "title": "Marine Le Pen — controle da imigração, livreto presidencial2022",
        "url": "https://rassemblementnational.fr/documents/projet/projet-controle-de-limmigration.pdf",
        "note": "PDF46p, áreas24–31/449–590 efetivamente lidas; não leitura integral."
      },
      {
        "title": "Marine Le Pen — segurança, livreto presidencial2022",
        "url": "https://rassemblementnational.fr/documents/projet/projet-la-securite.pdf",
        "note": "PDF24p, áreas0–459/470–613/637–740 lidas; propostas/alegações próprias, não prática verificada."
      },
      {
        "title": "Marine Le Pen — ecologia, livreto presidencial2022",
        "url": "https://rassemblementnational.fr/documents/projet/projet-lecologie.pdf",
        "note": "PDF18p, áreas0–562 lidas, com contrapontos ambientais; dia editorial não certificado."
      },
      {
        "title": "Marine Le Pen — carta própria aos profissionais imobiliários,21/09/2026",
        "url": "https://rassemblementnational.fr/post/lettre-ouverte-de-marine-le-pen-aux-professionnels-de-limmobilier",
        "note": "Autoria/data100–105 e corpo107–146 lidos; identidade/atividade2026 somente, não atualização das posições2022."
      }
    ],
    "caveats": "Declarações eleitorais2022, não prática nem posições medidas2026. Estatísticas dos livretos não auditadas. Sete eixos desconhecidos; tecnologia permanece pesquisa contraditória. Revisão documental delimitada aceita pela revisão independente e pelo Root.",
    "rationale": "Propõe referendos, coerção policial, assimilação cultural e proteção comercial, com maior orçamento e equipamento militar.",
    "vec": {
      "est": 50,
      "rep": 60,
      "pod": 60,
      "imi": 60,
      "dip": 60,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 60,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "rep": "medium",
      "pod": "medium",
      "imi": "medium",
      "dip": "medium",
      "com": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Marine Le Pen —22 mesures pour2022, programa presidencial próprio"
        ],
        "rationale": "Participação eleitoral e direta proposta. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Controle judicial limitado na reforma migratória480–483/577–590; restrição de publicações643–673 no livreto segurança. Não certifica todos os direitos oposicionistas ou execução."
      },
      "pod": {
        "sourceTitles": [
          "Marine Le Pen —22 mesures pour2022, programa presidencial próprio",
          "Marine Le Pen — segurança, livreto presidencial2022"
        ],
        "rationale": "Autoridade coerciva para segurança. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Reinserção261–267, proporcionalidade411–423 e culpa comprovada528–531 preservadas; não apoio presumido à detenção sem julgamento."
      },
      "imi": {
        "sourceTitles": [
          "Marine Le Pen —22 mesures pour2022, programa presidencial próprio",
          "Marine Le Pen — controle da imigração, livreto presidencial2022"
        ],
        "rationale": "Assimilação cultural declarada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Descreve proposta constitucional e costumes, não apenas fronteiras; não certifica efeitos ou estatísticas demográficas."
      },
      "dip": {
        "sourceTitles": [
          "Marine Le Pen —22 mesures pour2022, programa presidencial próprio"
        ],
        "rationale": "Defesa armada como garantia nacional. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Limita-se à capacitação/independência; não autoriza inferir guerra preventiva, uso nuclear ou intervenção externa."
      },
      "com": {
        "sourceTitles": [
          "Marine Le Pen —22 mesures pour2022, programa presidencial próprio"
        ],
        "rationale": "Proteção comercial declarada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Normas agrícolas e revisão de acordos, não autarquia total ou tarifa universal; livretoecologia358–363 admite diversificar fornecedores."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Marine Le Pen —22 mesures pour2022, programa presidencial próprio",
            "locator": "Medida11; PDFphysicalp5, linhas106",
            "statement": "Propõe referendo de iniciativa cidadã e representação proporcional.",
            "basis": "declaration",
            "publishedDate": "Programa presidencial2022; dia editorial não certificado",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Participação eleitoral e direta proposta.",
        "uncertainty": "Controle judicial limitado na reforma migratória480–483/577–590; restrição de publicações643–673 no livreto segurança. Não certifica todos os direitos oposicionistas ou execução.",
        "relatedQuestionIds": [
          "representacao_09"
        ],
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "pod": {
        "axis": "pod",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Marine Le Pen —22 mesures pour2022, programa presidencial próprio",
            "locator": "Medida3; PDFphysicalp2, linhas22–36",
            "statement": "Amplia prisão e presunção de legítima defesa policial.",
            "basis": "declaration",
            "publishedDate": "Programa presidencial2022; dia editorial não certificado",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Marine Le Pen — segurança, livreto presidencial2022",
            "locator": "Physicalp7–8, linhas76–97; p21,643–673; p11,211–227",
            "statement": "Defende força policial e proibição de publicações ideológicas, com sanção à posse de drogas.",
            "basis": "declaration",
            "publishedDate": "Programa presidencial2022; dia editorial não certificado",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Autoridade coerciva para segurança.",
        "uncertainty": "Reinserção261–267, proporcionalidade411–423 e culpa comprovada528–531 preservadas; não apoio presumido à detenção sem julgamento.",
        "relatedQuestionIds": [
          "poder_01",
          "poder_04",
          "poder_06"
        ],
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "imi": {
        "axis": "imi",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Marine Le Pen —22 mesures pour2022, programa presidencial próprio",
            "locator": "Medida1; PDFphysicalp2,18–20",
            "statement": "Condiciona naturalização à assimilação.",
            "basis": "declaration",
            "publishedDate": "Programa presidencial2022; dia editorial não certificado",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Marine Le Pen — controle da imigração, livreto presidencial2022",
            "locator": "Physicalp16–18,503–505/526–559",
            "statement": "Exige língua e costumes nacionais e substitui ensino de cultura de origem.",
            "basis": "declaration",
            "publishedDate": "Programa presidencial2022; dia editorial não certificado",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Assimilação cultural declarada.",
        "uncertainty": "Descreve proposta constitucional e costumes, não apenas fronteiras; não certifica efeitos ou estatísticas demográficas.",
        "relatedQuestionIds": [
          "imigracao_01",
          "imigracao_06",
          "imigracao_07"
        ],
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "dip": {
        "axis": "dip",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Marine Le Pen —22 mesures pour2022, programa presidencial próprio",
            "locator": "Medida20; PDFphysicalp7,197–203",
            "statement": "Amplia orçamento e equipamento militar para proteger interesses nacionais.",
            "basis": "declaration",
            "publishedDate": "Programa presidencial2022; dia editorial não certificado",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Defesa armada como garantia nacional.",
        "uncertainty": "Limita-se à capacitação/independência; não autoriza inferir guerra preventiva, uso nuclear ou intervenção externa.",
        "relatedQuestionIds": [
          "diplomacia_01",
          "diplomacia_05"
        ],
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "com": {
        "axis": "com",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Marine Le Pen —22 mesures pour2022, programa presidencial próprio",
            "locator": "Medidas13/18; PDFphysicalp5/7,122–125/186–188",
            "statement": "Restringe importações agrícolas e revê livre-comércio para proteção nacional.",
            "basis": "declaration",
            "publishedDate": "Programa presidencial2022; dia editorial não certificado",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Proteção comercial declarada.",
        "uncertainty": "Normas agrícolas e revisão de acordos, não autarquia total ou tarifa universal; livretoecologia358–363 admite diversificar fornecedores.",
        "relatedQuestionIds": [
          "comercio_04",
          "comercio_07"
        ],
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      }
    }
  }
];
export const ranking675Public02SpeechSource: ReferenceSource = {
 title: 'Marine Le Pen — discurso próprio no congresso de Perpignan,05/07/2021',
 url: 'https://rassemblementnational.fr/discours/congres-de-perpignan-discours-de-marine-le-pen',
 note: 'Cabeçalho100–105 e corpo próprio107–396 efetivamente lidos. Preparação da candidatura presidencial2022; não atualização de posições em2026. Estatísticas e acusações do discurso não certificadas.'
};
export const ranking675Public02Tec: ReferenceAxisCoding = {
 axis: 'tec', position: 'moderate-first', confidence: 'medium',
 claims: [
  {sourceTitle: ranking675Public02SpeechSource.title,
   locator: 'Discurso05/07/2021: lançamento nacional de setores tecnológicos353–358; exigência de regulação de IA e transumanismo236.',
   statement: 'Propõe desenvolver IA, tecnologia digital, biotecnologia, espaço, hidrogênio e nova geração nuclear, com regulação dos riscos da técnica.',
   basis: 'declaration', publishedDate: '2021-07-05', accessedDate: '2026-10-08'},
  {sourceTitle: 'Marine Le Pen — ecologia, livreto presidencial2022',
   locator: 'Livret environnement2022: inovação geral155–169; papel da técnica e controle político525–540. Contrapontos energético222–234 e digital467–473/521.',
   statement: 'Defende inovação tecnológica como componente do desenvolvimento, condicionada à proteção da natureza e ao controle político democrático.',
   basis: 'declaration', publishedDate: 'Programa presidencial2022; dia editorial não certificado', accessedDate: '2026-10-08'}
 ],
 rationale: 'Adoção tecnológica ampla em setores produtivos, energia e serviços, com condições políticas e ambientais; direção moderada, sem autorização irrestrita.',
 uncertainty: 'Declarações da campanha2021–2022, não execução nem renovação2026. Regulação de IA e transumanismo236, controle político da técnica525–540 e críticas à expansão digital467–473/521 são contrapontos materiais. Moratórias de eólicas e solares222–234 coexistem com nuclear, hidrogênio e geotermia; não defesa de toda tecnologia nem alteração biológica humana irrestrita.',
 reviewedOn: '2026-10-08'
};
export const ranking675Public02Proposed: RankingPublic02ArchiveEntry[] = ranking675Public02Before.map(before => {
 const sources = [...before.sources, ranking675Public02SpeechSource];
 const coded = codeReferenceAxis(ranking675Public02Tec, sources);
 return {...structuredClone(before), sources,
  period: 'Campanha presidencial2021–2022: discurso próprio05/07/2021 e programa2022; atividade pessoal21/09/2026',
  vec: {...before.vec, tec: coded.value},
  evidence: {...before.evidence, tec: coded.evidence},
  axisEvidence: {...before.axisEvidence, tec: coded.axisEvidence},
  coding: {...before.coding, tec: coded.coding},
  rationale: 'Propõe referendos, segurança coerciva, assimilação, proteção comercial, reforço militar e desenvolvimento tecnológico regulado.',
  caveats: 'Declarações da campanha2021–2022, não prática nem posições medidas2026. Estatísticas e acusações das fontes não auditadas. Tecnologia combina adoção em vários setores com limites ambientais e políticos. Seis eixos permanecem desconhecidos; nenhuma posição em direitos de reprodução, arquitetura territorial, intervenção ou crenças pessoais é imputada.'
 };
});
export function reconcileRanking675Public02(entry: ReferenceEntry): ReferenceEntry {
 const index = ranking675Public02Before.findIndex(before => before.id === entry.id);
 if (index < 0) return entry;
 const proposed = ranking675Public02Proposed[index];
 if (JSON.stringify(entry) === JSON.stringify(proposed)) return entry;
 if (JSON.stringify(entry) !== JSON.stringify(ranking675Public02Before[index])) throw new Error('Ranking public02 whole prior object changed: ' + entry.id);
 return structuredClone(proposed);
}
