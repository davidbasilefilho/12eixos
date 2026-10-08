import type { ReferenceEntry, ReferenceSource } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';

export const ranking675Country01Before: ReferenceEntry[] = [
  {
    "id": "germany",
    "kind": "country",
    "category": "country",
    "name": "Alemanha",
    "period": "Normas dos artigos 20 e 30 da Lei Fundamental em páginas oficiais sem data editorial comprovada; tratado europeu de 2016; narrativa FH2025 sobre 2024",
    "vec": {
      "est": 80,
      "rep": 80,
      "pod": 40,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 40,
      "rel": 50,
      "mor": 60,
      "tec": 50
    },
    "rationale": "Lei Fundamental prevê federação e competências dos estados como regra, sujeitas às exceções constitucionais, com poderes públicos vinculados à lei.",
    "caveats": "Narrativa de democracia, protestos e reforma de gênero é de 2024. Índice constitucional não certifica incorporação religiosa; integração aduaneira tem controles externos. Fontes legais e narrativas de prática têm datas e alcances distintos. Descrição documental limitada, sem certificar toda legislação ou prática atual.",
    "sources": [
      {
        "title": "Freedom in the World — Alemanha",
        "url": "https://freedomhouse.org/country/germany/freedom-world/2025",
        "note": "Direitos, federalismo e acontecimentos de 2024."
      },
      {
        "title": "OECD Government at a Glance 2025",
        "url": "https://www.oecd.org/en/publications/government-at-a-glance-2025_0efd0bcd-en.html",
        "note": "Papel econômico do Estado."
      },
      {
        "title": "Freedom in the World 2025 — Alemanha",
        "url": "https://freedomhouse.org/country/germany/freedom-world/2025",
        "note": "Prática institucional relatada na edição 2025; itens localizados e contraevidências registrados por eixo. Relatório abreviado; seu score não é convertido em vetor."
      },
      {
        "title": "TFUE — versão consolidada de 2016, EUR-Lex",
        "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:12016E/TXT",
        "note": "Texto primário: regras da união aduaneira e política comercial; não mede barreiras efetivamente aplicadas em cada setor."
      },
      {
        "title": "Lei Fundamental, artigos 20 e 30 — texto oficial alemão",
        "url": "https://www.gesetze-im-internet.de/gg/art_30.html",
        "note": "Artigos 20 e 30 integralmente lidos; artigo 20 em https://www.gesetze-im-internet.de/gg/art_20.html. Competências dos Länder com exceções constitucionais."
      },
      {
        "title": "Lei Fundamental — tradução oficial, versão de 22/03/2025",
        "url": "https://www.gesetze-im-internet.de/englisch_gg/englisch_gg.pdf",
        "note": "Tradução oficial com emendas até 22/03/2025, 46 páginas; índice oficial também inspecionado. Acesso posterior ao PDF e algumas páginas individuais falhou."
      },
      {
        "title": "Constituição de Weimar, artigo 137 — texto oficial incorporado pela Lei Fundamental",
        "url": "https://www.gesetze-im-internet.de/wrv/art_137.html",
        "note": "Artigo 137(1), (3), (5)–(6); considerar a incorporação constitucional pelo artigo 140 da Lei Fundamental, não como regime de Weimar aplicado isoladamente."
      }
    ],
    "evidence": {
      "est": "high",
      "rep": "high",
      "pod": "medium",
      "com": "medium",
      "mor": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Lei Fundamental, artigos 20 e 30 — texto oficial alemão"
        ],
        "rationale": "Competências territoriais próprias sustentam federalismo institucional. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: União federal mantém competências exclusivas e supremacia legal; não é confederação."
      },
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — Alemanha"
        ],
        "rationale": "Prática de competição e representação sustenta direção democrática forte. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Não é transformação do score agregado do relatório; ameaças e déficits de direitos permanecem."
      },
      "pod": {
        "sourceTitles": [
          "Freedom in the World 2025 — Alemanha"
        ],
        "rationale": "Garantias civis relatadas, com restrições concretas a protestos, sustentam direção moderada de liberdade. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Limites de expressão, vigilância e segurança impedem tratar as liberdades como absolutas."
      },
      "com": {
        "sourceTitles": [
          "TFUE — versão consolidada de 2016, EUR-Lex"
        ],
        "rationale": "Abertura comercial regulada no quadro da UE sustenta direção moderada de livre comércio. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não equivale a ausência de tarifas; são regras comuns, não preferências da população nem medição nacional de comércio. Groenlândia possui regime territorial próprio."
      },
      "mor": {
        "sourceTitles": [
          "Freedom in the World 2025 — Alemanha"
        ],
        "rationale": "Reforma documental de identidade de gênero sustenta direção reformista moderada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Cobertura parcial do construto; não deduz aborto, todas as pautas familiares ou consenso social."
      }
    },
    "coding": {
      "est": {
        "axis": "est",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Lei Fundamental, artigos 20 e 30 — texto oficial alemão",
            "locator": "Artigos 20(1) e 30, texto integral das páginas individuais",
            "statement": "Estado federal; exercício de poderes e funções cabe aos Länder salvo disposição constitucional.",
            "basis": "norm",
            "publishedDate": "Versão 2025-03-22",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Competências territoriais próprias sustentam federalismo institucional.",
        "uncertainty": "União federal mantém competências exclusivas e supremacia legal; não é confederação.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      },
      "rep": {
        "axis": "rep",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Freedom in the World 2025 — Alemanha",
            "locator": "Overview; Key Developments in 2024, eleições estaduais e voto de confiança",
            "statement": "Democracia representativa; coalizões estaduais e voto de confiança federal são relatados.",
            "basis": "practice",
            "publishedDate": "Edição 2025",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Prática de competição e representação sustenta direção democrática forte.",
        "uncertainty": "Não é transformação do score agregado do relatório; ameaças e déficits de direitos permanecem.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      },
      "pod": {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Freedom in the World 2025 — Alemanha",
            "locator": "Overview; Key Developments in 2024, manifestações",
            "statement": "Liberdades são geralmente respeitadas; autoridades restringiram ou dispersaram alguns protestos.",
            "basis": "practice",
            "publishedDate": "Edição 2025",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Garantias civis relatadas, com restrições concretas a protestos, sustentam direção moderada de liberdade.",
        "uncertainty": "Limites de expressão, vigilância e segurança impedem tratar as liberdades como absolutas.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "com": {
        "axis": "com",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "TFUE — versão consolidada de 2016, EUR-Lex",
            "locator": "Artigos 28(1), 34 e 206–207",
            "statement": "Elimina barreiras internas; prevê redução de barreiras externas, com tarifa comum e defesa comercial.",
            "basis": "norm",
            "publishedDate": "2016-06-07",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Abertura comercial regulada no quadro da UE sustenta direção moderada de livre comércio.",
        "uncertainty": "Não equivale a ausência de tarifas; são regras comuns, não preferências da população nem medição nacional de comércio. Groenlândia possui regime territorial próprio.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "mor": {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Freedom in the World 2025 — Alemanha",
            "locator": "Key Developments in 2024, lei em vigor em novembro",
            "statement": "Adultos podem alterar nome e gênero em documentos sem avaliação psiquiátrica ou audiência judicial previamente exigidas.",
            "basis": "practice",
            "publishedDate": "Edição 2025",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Reforma documental de identidade de gênero sustenta direção reformista moderada.",
        "uncertainty": "Cobertura parcial do construto; não deduz aborto, todas as pautas familiares ou consenso social.",
        "reviewedOn": "2026-10-07",
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

const morSources: ReferenceSource[] = [
  {
    "title": "BGB — casamento e divisão familiar de trabalho, §§1353/1356/1360",
    "url": "https://www.gesetze-im-internet.de/bgb/__1356.html",
    "note": "Leitura efetiva integral de1356; também1353 em https://www.gesetze-im-internet.de/bgb/__1353.html e1360 em https://www.gesetze-im-internet.de/bgb/__1360.html. Normas oficiais consultadas08/10/2026, edição consolidada inteira/data editorial não certificadas."
  },
  {
    "title": "Lei Fundamental — proteção familiar, artigo6",
    "url": "https://www.gesetze-im-internet.de/gg/art_6.html",
    "note": "Artigo6 integral efetivamente lido08/10/2026; família/maternidade e igualdade de condições dos filhos não matrimoniais. Norma oficial sem data editorial verificada."
  },
  {
    "title": "StGB — aborto, §§218/218a",
    "url": "https://www.gesetze-im-internet.de/stgb/__218a.html",
    "note": "218 integral diretamente lido em https://www.gesetze-im-internet.de/stgb/__218.html?level=1. Após falha direta218a, corpo completo(1–4) efetivamente recuperado/lido pelo índice oficial. Consulta08/10/2026; sem certificar todo o código/edição ou prática."
  }
];
const expandedMor: ReferenceAxisCoding = {
  "axis": "mor",
  "position": "moderate-first",
  "confidence": "medium",
  "claims": [
    {
      "sourceTitle": "Freedom in the World 2025 — Alemanha",
      "locator": "Key Developments in 2024, lei em vigor em novembro",
      "statement": "Adultos podem alterar nome e gênero em documentos sem avaliação psiquiátrica ou audiência judicial previamente exigidas.",
      "basis": "practice",
      "publishedDate": "Edição 2025",
      "accessedDate": "2026-10-07"
    },
    {
      "sourceTitle": "BGB — casamento e divisão familiar de trabalho, §§1353/1356/1360",
      "locator": "BGB1353(1–2),1356(1–2),1360",
      "statement": "Casamento admite pessoas de sexos iguais ou diferentes; tarefas domésticas dependem de acordo mútuo e ambos os cônjuges podem trabalhar, respeitando interesses familiares. Sustento é dever de ambos, e trabalho doméstico pode cumprir contribuição.",
      "basis": "norm",
      "publishedDate": "Texto oficial consultado08/10/2026; data editorial não comprovada",
      "accessedDate": "2026-10-08"
    },
    {
      "sourceTitle": "Lei Fundamental — proteção familiar, artigo6",
      "locator": "GG6(1–5)",
      "statement": "Estado protege casamento, família e maternidade e exige iguais condições de desenvolvimento e posição social para filhos não matrimoniais.",
      "basis": "norm",
      "publishedDate": "Texto oficial consultado08/10/2026; data editorial não comprovada",
      "accessedDate": "2026-10-08"
    },
    {
      "sourceTitle": "StGB — aborto, §§218/218a",
      "locator": "StGB218(1–4),218a(1–4)",
      "statement": "Aborto é tipificado; pedido com aconselhamento prévio de três dias, médico e até doze semanas não realiza o tipo. Há exceções médicas e por violência sexual e hipótese distinta de não punição da gestante até22semanas após aconselhamento, sem presumir licitude geral.",
      "basis": "norm",
      "publishedDate": "Texto oficial consultado08/10/2026; data editorial não comprovada",
      "accessedDate": "2026-10-08"
    }
  ],
  "rationale": "Direitos de identidade de gênero combinados com casamento igualitário e divisão privada de tarefas/atividade econômica por acordo, sem papel feminino fixo, sustentam direção reformista moderada no recorte documental.",
  "uncertainty": "Normas oficiais de família consultadas2026 e narrativa de2024 são camadas datadas distintas, sem certificar prática social inteira. Família/maternidade têm proteção especial; manutenção e consideração dos interesses familiares continuam obrigatórias. Aborto permanece tipificado com exceções condicionadas; não inferimos escolha irrestrita ou consenso em toda pauta moral.",
  "reviewedOn": "2026-10-08"
};

const proposals = [
  {
    "id": "germany",
    "source": {
      "title": "Lei Fundamental, artigo 140 — incorporação oficial das normas religiosas",
      "url": "https://www.gesetze-im-internet.de/gg/art_140.html",
      "note": "Artigo140 e transcrição integral136–139/141 efetivamente lidos; artigos137/138 também abertos. Texto oficial consultado08/10/2026, sem data editorial comprovada. Contraponto educacional: artigo7 integral em https://www.gesetze-im-internet.de/gg/art_7.html?level=1. Não verificação de toda a consolidação ou prática atual."
    },
    "axis": "rel",
    "position": "moderate-first",
    "confidence": "high",
    "claims": [
      {
        "sourceTitle": "Lei Fundamental, artigo 140 — incorporação oficial das normas religiosas",
        "locator": "GG140; WRV136(1–4),137(1–8),138–139/141; contraponto GG7(2–3)",
        "statement": "A incorporação constitucional veda igreja estatal, separa direitos civis de confissão e mantém autogoverno religioso; admite corporações religiosas públicas, tributação religiosa, direitos patrimoniais, prestações e assistência religiosa, além de ensino religioso constitucionalmente reconhecido.",
        "basis": "norm",
        "publishedDate": "Texto oficial consultado08/10/2026; data editorial ausente",
        "accessedDate": "2026-10-08"
      }
    ],
    "rationale": "Ausência de igreja estatal, independência confessional dos direitos civis e autogoverno religioso estabelecem direção laica institucional moderada; não hostilidade à religião.",
    "uncertainty": "Cooperação com religiões, corporações públicas, impostos e prestações, descanso religioso, assistência pública e ensino confessional impedem direção de separação máxima. Texto normativo oficial sem certificação da edição consolidada inteira; não mede crenças ou prática2026.",
    "periodAppend": "; normas religiosas dos artigos140/7 em páginas oficiais consultadas em08/10/2026, data editorial não comprovada",
    "caveatAppend": "Artigo140 foi efetivamente verificado nesta ampliação: laicidade constitucional com cooperação e ensino religioso, sem inferir irreligiosidade populacional."
  }
] as const;

/** Pending independent documentary review; imports are intentionally absent. */
export function extendRanking675Country01(entries: ReferenceEntry[]): ReferenceEntry[] {
 return entries.map(entry => {
  const previous = ranking675Country01Before.find(item => item.id === entry.id);
  if (!previous || JSON.stringify(entry) !== JSON.stringify(previous)) return entry;
  const row = proposals.find(item => item.id === entry.id)!;
  const sources: ReferenceSource[] = row.source ? [...entry.sources, row.source, ...morSources] : [...entry.sources, ...morSources];
  const input: ReferenceAxisCoding = {axis: row.axis, position: row.position, confidence: row.confidence, claims: [...row.claims], rationale: row.rationale, uncertainty: row.uncertainty, reviewedOn: '2026-10-08'};
  const encoded = codeReferenceAxis(input, sources);
  const morEncoded = codeReferenceAxis(expandedMor, sources);
  const estEncoded = codeReferenceAxis({...entry.coding!.est!, claims: entry.coding!.est!.claims.map(claim => ({...claim, locator: 'GG20(1), corpo indexado oficial; GG30, página individual integral; contraponto GG31', publishedDate: 'Páginas oficiais individuais consultadas08/10/2026; data editorial não comprovada', accessedDate: '2026-10-08'})), reviewedOn: '2026-10-08'}, sources);
  const comEncoded = codeReferenceAxis({...entry.coding!.com!, uncertainty: entry.coding!.com!.uncertainty.replace(' Groenlândia possui regime territorial próprio.', ''), reviewedOn: '2026-10-08'}, sources);
  return {...entry, sources, period: entry.period + row.periodAppend + '; normas familiares BGB1353/1356/1360,GG6 eStGB218/218a consultadas08/10/2026, edição editorial não comprovada',
   caveats: entry.caveats.replace('Índice constitucional não certifica incorporação religiosa;', 'A incorporação religiosa foi examinada no artigo140;') + ' ' + row.caveatAppend + ' A orientação moral reúne narrativa2024 e normas familiares consultadas2026; deveres familiares e aborto condicionado são contrapontos, sem alegar consenso ou prática social inteira.',
   vec: {...entry.vec, [row.axis]: encoded.value, mor: morEncoded.value, est: estEncoded.value, com: comEncoded.value}, evidence: {...entry.evidence, [row.axis]: encoded.evidence, mor: morEncoded.evidence, est: estEncoded.evidence, com: comEncoded.evidence},
   axisEvidence: {...entry.axisEvidence, [row.axis]: encoded.axisEvidence, mor: morEncoded.axisEvidence, est: estEncoded.axisEvidence, com: comEncoded.axisEvidence}, coding: {...entry.coding, [row.axis]: encoded.coding, mor: morEncoded.coding, est: estEncoded.coding, com: comEncoded.coding}};
 });
}
