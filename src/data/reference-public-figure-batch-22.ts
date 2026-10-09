import { AXES } from '../lib/scoring';
import type { ReferenceEntry, ReferenceSource, AxisKey } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';

export const publicFigureBatch22Sources: Record<string, ReferenceSource[]> = {
  "xochitl-galvez": [
    {
      "title": "Xóchitl Gálvez — intervenções próprias no segundo debate, INE2024",
      "url": "https://centralelectoral.ine.mx/2024/04/29/version-estenografica-del-segundo-debate-presidencial-federal-2023-2024/",
      "note": "Publicação29/04/2024; intervenções nominativas próprias. Leitura0–415/1041–1360 e reaberturas selecionadas; não os outros candidatos, alegações empíricas ou redaçõesXXX."
    },
    {
      "title": "Tiempo — entrevista de Xóchitl Gálvez04/09/2026",
      "url": "https://www.tiempo.com.mx/local/alianzas-deben-sacar-perfiles-competitivos-rumbo-al-27-xochitl/",
      "note": "Data27/corpo22–32 lidos: entrevista concluída confirma atividade viva. Identidade somente; sem vídeo/imagem ou renovação das posições2024."
    }
  ],
  "anura-kumara-dissanayake": [
    {
      "title": "Anura Kumara Dissanayake — discurso próprio à Assembleia Geral da ONU2025",
      "url": "https://bangkok.embassy.gov.lk/wp-content/uploads/2025/09/Address-80th-UN-General-Assembly-Eng.pdf",
      "note": "Texto oficial nominal0–3,24/09/2025; corpo0–168 efetivamente lido. Normas declaradas, não execução ou certificação das estatísticas."
    },
    {
      "title": "Sri Lanka News — discurso próprio de Anura Kumara Dissanayake13/08/2026",
      "url": "https://news.lk/current-affairs/the-full-speech-by-president-anura-kumara-dissanayake-at-the-discussion-with-the-bar-association-of-sri-lanka",
      "note": "Cabeçalho27–30 e corpo34–119 lidos. Atividade viva13/08/2026; identidade somente, sem tratar reforma judicial administrativa como posição geral ou renovação do discurso2025."
    }
  ],
  "maia-sandu": [
    {
      "title": "Maia Sandu — declarações próprias em Helsinki02/10/2026",
      "url": "https://presedinte.md/rom/discursuri/declaratiile-de-presa-ale-presedintei-maia-sandu-sustinute-la-helsinki",
      "note": "Data61/título62 e corpo64–88 lidos em romeno. Declaração própria e atividade concluída02/10/2026; números/resultados do discurso não verificados, sem exame visual."
    }
  ],
  "salome-zourabichvili": [
    {
      "title": "Salomé Zourabichvili — discurso próprio ao Seimas reproduzido25/03/2025",
      "url": "https://1tv.ge/lang/en/news/salome-zourabichvili-addresses-lithuanian-seimas/",
      "note": "Data91/atribuição95–97/corpo98–189 lidos. Reprodução inglesa de discurso nominal pela emissora pública, não áudio original examinado; acusações empíricas não certificadas."
    },
    {
      "title": "Interpressnews — atividade de Salomé Zourabichvili26/09/2026",
      "url": "https://www.interpressnews.ge/en/article/149793-salome-zurabishvili-an-authoritarian-regime-supported-from-abroad-can-be-defeated-only-when-the-country-unites-the-current-situation-goes-beyond-party-competition-and-requires-a-united-response-from-the-entire-civil-society",
      "note": "Data25/corpo26–32 lidos: discurso nominal em Paris confirma atividade viva. Identidade somente, sem renovação das posições2025 ou exame visual."
    }
  ],
  "samia-suluhu-hassan": [
    {
      "title": "Official President’s Office — United Republic of Tanzania",
      "url": "https://www.ikulu.go.tz/",
      "note": "Fonte de identidade do candidato arquivístico preservada exatamente em título/URL; não confirmação atual por homepage."
    },
    {
      "title": "Samia Suluhu Hassan — discurso próprio ao fórum empresarial05/05/2021",
      "url": "https://www.ikulu.go.tz/uploads/speeches/sw-1625033520-BUSINESS%20FORUM%20-%20KENYA_1.%205%20MAY%202021doc.pdf",
      "note": "Cabeçalho1–5 e corpo0–139 previamente efetivamente lidos. Reaberturas posteriores retornaram timeout/InternalError; não alegar disponibilidade atual ou revisão independente concluída."
    },
    {
      "title": "Samia Suluhu Hassan — discurso próprio aos ministros de Justiça04/03/2024",
      "url": "https://www.ikulu.go.tz/uploads/speeches/en-1712652890-COMMONWEALTH%20LAW%20MINISTERS%20SPEECH%20(1).pdf",
      "note": "Cabeçalho6–7 e corpo0–264 efetivamente lidos. Pesquisa judicial preservada sem pontuação nem composição temporal com o discurso2021."
    },
    {
      "title": "The Chanzo — atividade e discurso de Samia Suluhu Hassan23/04/2026",
      "url": "https://thechanzo.com/2026/04/24/full-text-president-samias-address-upon-receiving-the-commission-report-on-the-events-of-october-29-2025/",
      "note": "Publicação24/04/2026 em44; evento23/04 em55, atribuição56/corpo59–132 lidos. Edição para legibilidade58. Descrição qualitativa111–114/117/123–127 e identidade; sem eixo graduado ou conclusões da comissão certificadas."
    }
  ]
};

export const publicFigureBatch22Coding: Record<string, ReferenceAxisCoding[]> = {
  "xochitl-galvez": [
    {
      "axis": "tec",
      "position": "moderate-first",
      "confidence": "medium",
      "relatedQuestionIds": [
        "tecnologia_02"
      ],
      "claims": [
        {
          "sourceTitle": "Xóchitl Gálvez — intervenções próprias no segundo debate, INE2024",
          "publishedDate": "2024-04-29; publicação da transcrição, dia da fala não certificado",
          "accessedDate": "2026-10-08",
          "locator": "329/1161–1164/1224–1227; contraponto1179–1190",
          "statement": "Promove ciência, infraestrutura tecnológica e transição energética nacional.",
          "basis": "declaration"
        }
      ],
      "rationale": "Inovação transversal.",
      "uncertainty": "Compromissos ambientais1179–1190; proposta eleitoral, sem execução comprovada.",
      "reviewedOn": "2026-10-08"
    }
  ],
  "anura-kumara-dissanayake": [
    {
      "axis": "dip",
      "position": "moderate-second",
      "confidence": "medium",
      "relatedQuestionIds": [
        "diplomacia_04",
        "diplomacia_05"
      ],
      "claims": [
        {
          "sourceTitle": "Anura Kumara Dissanayake — discurso próprio à Assembleia Geral da ONU2025",
          "publishedDate": "2025-09-24",
          "accessedDate": "2026-10-08",
          "locator": "69–110, especialmente101–104; contraponto147–152",
          "statement": "Prioriza paz e necessidades sociais frente a armas e guerras.",
          "basis": "declaration"
        }
      ],
      "rationale": "Prioridade diplomática.",
      "uncertainty": "Mantém segurança coletiva e participação em missões ONU147–152; não abolição militar.",
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "tec",
      "position": "moderate-first",
      "confidence": "medium",
      "relatedQuestionIds": [
        "tecnologia_02"
      ],
      "claims": [
        {
          "sourceTitle": "Anura Kumara Dissanayake — discurso próprio à Assembleia Geral da ONU2025",
          "publishedDate": "2025-09-24",
          "accessedDate": "2026-10-08",
          "locator": "129–145",
          "statement": "Promove digitalização e IA para desenvolvimento e governança.",
          "basis": "declaration"
        }
      ],
      "rationale": "Adoção digital ampla.",
      "uncertainty": "Desigualdade/insegurança136–140 e infraestrutura verde144 delimitam; não adoção irrestrita.",
      "reviewedOn": "2026-10-08"
    }
  ],
  "maia-sandu": [
    {
      "axis": "dip",
      "position": "moderate-first",
      "confidence": "medium",
      "relatedQuestionIds": [
        "diplomacia_05",
        "diplomacia_18"
      ],
      "claims": [
        {
          "sourceTitle": "Maia Sandu — declarações próprias em Helsinki02/10/2026",
          "publishedDate": "2026-10-02",
          "accessedDate": "2026-10-08",
          "locator": "66–69/79–87, especialmente82",
          "statement": "Defende modernização militar e aumento nacional de despesas de defesa.",
          "basis": "declaration"
        }
      ],
      "rationale": "Fortalecimento defensivo.",
      "uncertainty": "Contexto defensivo80–87, diálogo66–69 e ajuda humanitária78; não guerra preventiva.",
      "reviewedOn": "2026-10-08"
    }
  ],
  "salome-zourabichvili": [
    {
      "axis": "rep",
      "position": "moderate-first",
      "confidence": "medium",
      "relatedQuestionIds": [
        "representacao_01",
        "representacao_03",
        "representacao_19"
      ],
      "claims": [
        {
          "sourceTitle": "Salomé Zourabichvili — discurso próprio ao Seimas reproduzido25/03/2025",
          "publishedDate": "2025-03-25",
          "accessedDate": "2026-10-08",
          "locator": "98–112/124–137/169–172",
          "statement": "Defende eleições livres, oposição e instituições independentes.",
          "basis": "declaration"
        }
      ],
      "rationale": "Autoridade democrática.",
      "uncertainty": "Sanções estrangeiras condicionais169 e estratégia NATO176 preservadas; alegações de fraude não certificadas.",
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "pod",
      "position": "moderate-second",
      "confidence": "medium",
      "relatedQuestionIds": [
        "poder_05",
        "poder_07"
      ],
      "claims": [
        {
          "sourceTitle": "Salomé Zourabichvili — discurso próprio ao Seimas reproduzido25/03/2025",
          "publishedDate": "2025-03-25",
          "accessedDate": "2026-10-08",
          "locator": "114–137/179–181",
          "statement": "Rejeita repressão de expressão, protestos pacíficos e vigilância política.",
          "basis": "declaration"
        }
      ],
      "rationale": "Limites à coerção civil.",
      "uncertainty": "Não afirma legalização geral de condutas privadas; segurança externa176–187 permanece.",
      "reviewedOn": "2026-10-08"
    }
  ],
  "samia-suluhu-hassan": []
};

export const publicFigureBatch22HeldCoding: Record<string, ReferenceAxisCoding[]> = {
  "samia-suluhu-hassan": [
    {
      "axis": "tec",
      "position": "moderate-first",
      "confidence": "medium",
      "relatedQuestionIds": [
        "tecnologia_02"
      ],
      "claims": [
        {
          "sourceTitle": "Samia Suluhu Hassan — discurso próprio ao fórum empresarial05/05/2021",
          "publishedDate": "2021-05-05",
          "accessedDate": "2026-10-08",
          "locator": "100–113/129–133",
          "statement": "Promove pesquisa empresarial, inovação e transferência tecnológica para desenvolvimento.",
          "basis": "declaration"
        }
      ],
      "rationale": "Inovação produtiva.",
      "uncertainty": "Contexto empresarial bilateral e parcerias110–113/129–134; sem execução ou continuidade2026 verificadas.",
      "reviewedOn": "2026-10-08"
    }
  ]
};

export const publicFigureBatch22QualitativeResearch = {
  "samia-suluhu-hassan": {
    "sourceTitle": "The Chanzo — atividade e discurso de Samia Suluhu Hassan23/04/2026",
    "publishedDate": "2026-04-24; fala23/04/2026",
    "accessedDate": "2026-10-08",
    "locator": "111–114/117/123–127",
    "statement": "Propõe comissão de reconciliação e posterior revisão constitucional.",
    "counter": "Mantém investigação criminal114 e órgãos de segurança117; rejeita provocação política/criminal126. Não demonstra orientação geral de um eixo ou implementação."
  }
} as const;

export const publicFigureBatch22DormantArchive = {
  "candidateOnly": true,
  "id": "samia-suluhu-hassan",
  "name": "Samia Suluhu Hassan",
  "category": "public-figure",
  "period": "Presidência da Tanzânia, 2021–2026",
  "identitySource": {
    "title": "Official President’s Office — United Republic of Tanzania",
    "url": "https://www.ikulu.go.tz/"
  }
} as const;

const identities = [
  {
    "id": "xochitl-galvez",
    "name": "Xóchitl Gálvez",
    "aliases": [
      "Bertha Xóchitl Gálvez Ruiz",
      "Bertha Xochitl Galvez Ruiz"
    ],
    "period": "Intervenções próprias na transcrição eleitoral publicada29/04/2024; atividade04/09/2026",
    "rationale": "Promove ciência, infraestrutura e energia renovável, com compromissos ambientais."
  },
  {
    "id": "anura-kumara-dissanayake",
    "name": "Anura Kumara Dissanayake",
    "aliases": [
      "Anura Kumara Disanayaka",
      "Anura Kumara Dissanayaka"
    ],
    "period": "Discurso próprio à ONU24/09/2025; atividade13/08/2026",
    "rationale": "Prioriza paz e necessidades sociais frente ao armamento; promove digitalização e IA para desenvolvimento."
  },
  {
    "id": "maia-sandu",
    "name": "Maia Sandu",
    "aliases": [],
    "period": "Declarações próprias em Helsinki02/10/2026",
    "rationale": "Defende modernização militar e aumento das despesas de defesa em contexto de proteção territorial."
  },
  {
    "id": "salome-zourabichvili",
    "name": "Salomé Zourabichvili",
    "aliases": [
      "Salome Zourabichvili",
      "Salome Zurabishvili",
      "Salomé Zurabishvili"
    ],
    "period": "Discurso próprio ao Seimas25/03/2025; atividade26/09/2026",
    "rationale": "Defende eleições livres, instituições independentes e proteção da expressão e dos protestos pacíficos."
  },
  {
    "id": "samia-suluhu-hassan",
    "name": "Samia Suluhu Hassan",
    "aliases": [],
    "period": "Declaração própria de reconciliação23/04/2026; pesquisa empresarial05/05/2021 não graduada",
    "rationale": "Propõe comissão de reconciliação e revisão constitucional, preservando a segurança e a unidade nacional."
  }
];

const specificUnknownReasons: Record<string, Partial<Record<AxisKey, string>>> = {
  "xochitl-galvez": {
    "eco": "Preserva Pemex1133–1136 e admite energia privada1227; composição proprietária geral não resolvida.",
    "con": "Crédito subsidiado323–325 e facilitação empresarial não resolvem alocação geral.",
    "mor": "Igualdade salarial/cuidados267 é evidência setorial insuficiente para orientação moral ampla."
  },
  "anura-kumara-dissanayake": {
    "rep": "Legislatura inclusiva116–126 e relato de eleição não estabelecem por si arquitetura geral de autoridade.",
    "imi": "Representação de comunidades118–121 não define orientação cultural geral.",
    "rel": "Crítica ao extremismo91–97 não estabelece relação institucional religião/Estado.",
    "pod": "Repressão criminal47–50 é insuficiente para orientar coerção civil geral.",
    "eco": "Prioridades de financiamento social não demonstram hierarquia proprietária nacional."
  },
  "maia-sandu": {
    "rep": "Relato eleitoral75–77 não basta para autoridade política inteira.",
    "tec": "IA sob controle humano69 e energia83 não resolvem orientação tecnológica geral.",
    "int": "Ajuda à Ucrânia/coalizão79 é recorte específico, sem regra geral de intervenção.",
    "imi": "Auxílio a refugiados78 não define convivência cultural geral."
  },
  "salome-zourabichvili": {
    "dip": "Estratégia regional NATO176–187 não basta para hierarquia militar nacional inteira.",
    "int": "Sanções e apoio externo169–181 são caso específico, sem regra geral de intervenção.",
    "tec": "Rejeição de vigilância facial133 é coerção civil, não oposição geral à tecnologia.",
    "com": "Corredores comerciais146–154 não definem barreiras/tarifas gerais."
  },
  "samia-suluhu-hassan": {
    "rep": "Pesquisa judicial2024 não misturada ao recorte empresarial2021.",
    "eco": "Papel privado55–57 não demonstra composição proprietária nacional.",
    "con": "Facilitação empresarial60–84 coexiste com estratégia industrial; direção geral não resolvida.",
    "com": "Contexto empresarial bilateral67–75 não demonstra política geral de barreiras comerciais.",
    "pod": "Reconciliação/revisão constitucional2026 preservadas como declaração qualitativa, com investigação criminal114/segurança117; sem orientação coerciva geral ou prática certificadas.",
    "tec": "Proposta2021 preservada somente em pesquisa: PDF atualmente indisponível e sem extrato durável; orientação ativa desconhecida."
  }
};

export const publicFigureBatch22: ReferenceEntry[] = identities.map(identity => {
  const entry: ReferenceEntry = { ...identity, kind: 'person', category: 'public-figure', sources: publicFigureBatch22Sources[identity.id], vec: Object.fromEntries(AXES.map(({key}) => [key,50])) as ReferenceEntry['vec'], evidence: {}, axisEvidence: {}, coding: {}, caveats: 'Perfil documental parcial, fora do ranking. Fontes próprias sustentam somente declarações do período indicado; relatos de atividade2026 não renovam posições antigas. Estatísticas/alegações e execução não certificadas. Demais eixos desconhecidos sem evidência. Revisão documental delimitada; fontes indisponíveis permanecem apenas em pesquisa.' };
  for (const input of publicFigureBatch22Coding[entry.id]) {
    const c = codeReferenceAxis(input, entry.sources);
    entry.vec[input.axis] = c.value; entry.evidence[input.axis] = c.evidence;
    entry.axisEvidence![input.axis] = c.axisEvidence; entry.coding![input.axis] = c.coding;
  }
  return entry;
});

export const publicFigureBatch22UnknownAxes = Object.fromEntries(publicFigureBatch22.map(entry => [entry.id, Object.fromEntries(AXES.filter(({key}) => !entry.coding?.[key]).map(({key}) => [key, specificUnknownReasons[entry.id][key] ?? 'Orientação geral não estabelecida nas passagens efetivamente lidas; sem inferência por cargo ou filiação.']))]));
