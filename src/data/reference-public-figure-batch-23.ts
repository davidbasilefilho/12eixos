import { AXES } from '../lib/scoring';
import type { ReferenceEntry, ReferenceSource, AxisKey } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';

export const publicFigureBatch23Sources: Record<string,ReferenceSource[]> = {
  "hakainde-hichilema": [
    {
      "title": "Hakainde Hichilema — discurso próprio sobre valores constitucionais20/02/2026",
      "url": "https://www.pdu.gov.zm/blog/president-hichilemas-state-of-the-nation-address-2026",
      "note": "Título50/data56/atribuição64 e corpo próprio64–439 efetivamente lidos. Portal institucional reproduz discurso nominal, distinguindo resumo56–61 do texto próprio. Propostas/relatos não certificam execução."
    }
  ],
  "kamla-persad-bissessar": [
    {
      "title": "Kamla Persad-Bissessar — intervenção própria no Hansard não revisado10/06/2026",
      "url": "https://www.ttparliament.org/wp-content/uploads/2026/06/hh20260610u.pdf",
      "note": "Hansard10/06/2026 explicitamenteUNREVISED,336páginas/9682linhas. Leitura selecionada8213–8574 e excertos adicionais, não todo o documento. Somente turnos próprios; não atribuir falas de outros parlamentares ou da Presidente citada."
    },
    {
      "title": "Ministério do Planejamento — atividade de Kamla Persad-Bissessar22/09/2026",
      "url": "https://www.planning.gov.tt/newsite/watch/pm-kamla-persad-bissessars-feature-address-81st-session-of-the-united-nations-general-assembly/",
      "note": "Título0 e relato nominal4 efetivamente lidos. Atividade22/09/2026 apenas; não houve exame de vídeo ou renovação da posição de junho."
    }
  ],
  "irfaan-ali": [
    {
      "title": "Irfaan Ali — discurso próprio à Assembleia Geral da ONU, publicação24/09/2026",
      "url": "https://op.gov.gy/address-by-his-excellency-dr-mohamed-irfaan-ali-president-of-the-co-operative-republic-of-guyana-at-the-81st-session-of-the-general-assembly-of-the-united-nations/",
      "note": "Título23/publicação25/corpo29–129 efetivamente lidos na renderização192linhas. Declaração própria e atividade2026; dia exato da fala não certificado além da data editorial. Estatísticas/projeções não certificadas."
    }
  ],
  "antonio-jose-seguro": [
    {
      "title": "António José Seguro — declaração própria de posse reproduzida pela RTP09/03/2026",
      "url": "https://www.rtp.pt/noticias/politica/antonio-jose-seguro-quer-estabilidade-montenegro-espera-cooperacao-institucional_e1724492",
      "note": "Liveblog09/03/2026; excertos próprios656–732 e citações selecionadas efetivamente lidos.731–732 nominalmente Seguro;734–752 é Aguiar-Branco, não pontuado. Reprodução textual delimitada, não transcrição integral ou vídeo examinado."
    },
    {
      "title": "Presidência portuguesa — atividade de António José Seguro09/03/2026",
      "url": "https://www.presidencia.pt/en-en/news-agenda/all-news/2026/03/tomada-de-posse-de-antonio-jose-seguro-como-xxi-presidente-da-republica/",
      "note": "Data133/corpo135–139 efetivamente lidos: posse/discurso nominal concluídos. Link55 ao texto próprio retornou timeout posteriormente; nenhuma leitura integral desse link afirmada."
    }
  ],
  "maryam-nawaz": [
    {
      "title": "Maryam Nawaz — declaração própria reproduzida no encontro de IA27/01/2026",
      "url": "https://dunyanews.tv/en/Pakistan/931959-maryam-nawaz-sharif-mandates-ai-use-in-punjab-schools",
      "note": "Data25/corpo28–36 efetivamente lidos. Declaração nominal32 reproduzida por redação, sem áudio/vídeo ou transcrição literal certificados; relato de iniciativas28–35 não prova implementação."
    },
    {
      "title": "Radio Pakistan — atividade e declaração nominal de Maryam Nawaz23/08/2026",
      "url": "https://radio.gov.pk/23-08-2026/punjab-enters-new-era-of-development-technology-cm",
      "note": "Data19/corpo25–30 efetivamente lidos. Declaração própria relatada em encontro concluído26 confirma atividade; usados também os limites de serviços públicos, sem certificar resultados hospitalares."
    },
    {
      "title": "Tech Valley — relato presencial de diretivas nominais de Maryam Nawaz, publicação27/01/2026",
      "url": "https://techvalley.pk/accelerating-vision-2026-tech-valley-and-google-experts-empower-punjab-cabinet-with-ai-driven-governance-tools-in-lahore/",
      "note": "Publicação38/relato45–57 efetivamente lidos. Organizador do encontro atribui diretivas50–55/57 nominalmente; não é transcrição própria assinada. Dateline do encontro26/01, publicação27/01; não confundir fala de especialistas46–49 ou Marriyum56 com Maryam."
    }
  ]
};

export const publicFigureBatch23Coding: Record<string,ReferenceAxisCoding[]> = {
  "hakainde-hichilema": [
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
          "sourceTitle": "Hakainde Hichilema — discurso próprio sobre valores constitucionais20/02/2026",
          "publishedDate": "2026-02-20",
          "accessedDate": "2026-10-08",
          "locator": "186–219, especialmente200–205/214–219",
          "statement": "Defende eleições livres, reunião, associação e liberdade da imprensa.",
          "basis": "declaration"
        }
      ],
      "rationale": "Autoridade democrática plural.",
      "uncertainty": "Regulação de conteúdo digital148–151/419 é contraponto; mudanças constitucionais188–195 são relatos, não execução validada.",
      "reviewedOn": "2026-10-08"
    }
  ],
  "kamla-persad-bissessar": [
    {
      "axis": "pod",
      "position": "moderate-first",
      "confidence": "medium",
      "relatedQuestionIds": [
        "poder_11"
      ],
      "claims": [
        {
          "sourceTitle": "Kamla Persad-Bissessar — intervenção própria no Hansard não revisado10/06/2026",
          "publishedDate": "2026-06-10; edição não revisada",
          "accessedDate": "2026-10-08",
          "locator": "8273–8309/8367–8401/8420–8454/8488–8527",
          "statement": "Defende exceção emergencial e restrições de direitos para segurança pública.",
          "basis": "declaration"
        }
      ],
      "rationale": "Prioridade coerciva emergencial.",
      "uncertainty": "Recurso judicial8306–8309, limites temporais8392–8396 e protestos legítimos8464–8466 permanecem. Legalidade/eficácia alegadas não certificadas.",
      "reviewedOn": "2026-10-08"
    }
  ],
  "irfaan-ali": [
    {
      "axis": "dip",
      "position": "moderate-second",
      "confidence": "medium",
      "relatedQuestionIds": [
        "diplomacia_06"
      ],
      "claims": [
        {
          "sourceTitle": "Irfaan Ali — discurso próprio à Assembleia Geral da ONU, publicação24/09/2026",
          "publishedDate": "2026-09-24; data de publicação",
          "accessedDate": "2026-10-08",
          "locator": "38/48–62/95–100",
          "statement": "Prioriza diálogo e diplomacia para resolver conflitos e conter destruição.",
          "basis": "declaration"
        }
      ],
      "rationale": "Soluções diplomáticas.",
      "uncertainty": "Cooperação securitária/inteligência65–71 e apoio material ao Haiti53 preservados; não abolição militar.",
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
          "sourceTitle": "Irfaan Ali — discurso próprio à Assembleia Geral da ONU, publicação24/09/2026",
          "publishedDate": "2026-09-24; data de publicação",
          "accessedDate": "2026-10-08",
          "locator": "74–79",
          "statement": "Promove IA, biotecnologia e comunicação digital para desenvolvimento transversal.",
          "basis": "declaration"
        }
      ],
      "rationale": "Adoção tecnológica inclusiva.",
      "uncertainty": "Benefícios devem alcançar toda a humanidade75; limites ambientais85 e finalidade humana74, sem adoção irrestrita ou resultados certificados.",
      "reviewedOn": "2026-10-08"
    }
  ],
  "antonio-jose-seguro": [
    {
      "axis": "rep",
      "position": "moderate-first",
      "confidence": "medium",
      "relatedQuestionIds": [
        "representacao_02",
        "representacao_15"
      ],
      "claims": [
        {
          "sourceTitle": "António José Seguro — declaração própria de posse reproduzida pela RTP09/03/2026",
          "publishedDate": "2026-03-09",
          "accessedDate": "2026-10-08",
          "locator": "725–732; contraponto679–685",
          "statement": "Afirma autoridade popular plural do Parlamento e cooperação constitucional.",
          "basis": "declaration"
        }
      ],
      "rationale": "Representação democrática plural.",
      "uncertainty": "Preferência por completar legislaturas e conter eleições antecipadas679–685; não suprime eleições. Declaração própria, não eficácia institucional medida.",
      "reviewedOn": "2026-10-08"
    }
  ],
  "maryam-nawaz": []
};

const identities = [
  {
    "id": "hakainde-hichilema",
    "name": "Hakainde Hichilema",
    "aliases": [],
    "period": "Discurso constitucional próprio20/02/2026",
    "rationale": "Defende eleições livres, pluralismo, liberdade de reunião e da imprensa, com regulação de conteúdo digital."
  },
  {
    "id": "kamla-persad-bissessar",
    "name": "Kamla Persad-Bissessar",
    "aliases": [
      "Kamla Susheila Persad-Bissessar"
    ],
    "period": "Intervenção parlamentar própria10/06/2026; atividade22/09/2026",
    "rationale": "Defende estado de emergência e restrições de direitos para segurança, com recurso judicial e limites temporais."
  },
  {
    "id": "irfaan-ali",
    "name": "Irfaan Ali",
    "aliases": [
      "Mohamed Irfaan Ali",
      "Mohammed Irfaan Ali"
    ],
    "period": "Discurso próprio à ONU publicado24/09/2026; dia da fala não certificado separadamente",
    "rationale": "Prioriza diplomacia e soluções pacíficas; promove IA, biotecnologia e desenvolvimento inclusivo."
  },
  {
    "id": "antonio-jose-seguro",
    "name": "António José Seguro",
    "aliases": [
      "António José Martins Seguro",
      "Antonio Jose Seguro"
    ],
    "period": "Declarações próprias de posse reproduzidas09/03/2026",
    "rationale": "Afirma autoridade popular plural do Parlamento, cooperação constitucional e estabilidade das legislaturas."
  },
  {
    "id": "maryam-nawaz",
    "name": "Maryam Nawaz",
    "aliases": [
      "Maryam Nawaz Sharif"
    ],
    "period": "Declaração própria de IA reproduzida27/01/2026; atividade23/08/2026",
    "rationale": "Promove tecnologia digital e uso responsável de IA para educação, serviços públicos e elaboração de políticas."
  }
];

const specificUnknownReasons: Record<string, Partial<Record<AxisKey,string>>> = {
  "hakainde-hichilema": {
    "est": "Fundos e descentralização176 não demonstram competências legislativas independentes.",
    "mor": "Santidade do casamento136–138 e combate a casamento infantil/violência119–132 preservados, direção moral inteira não resolvida.",
    "rel": "Nação cristã111 não demonstra arquitetura institucional religiosa.",
    "imi": "Unidade/diversidade175–182 preservadas, relação geral integração/autonomia cultural não resolvida.",
    "eco": "Serviços/fundos sociais não demonstram propriedade nacional predominante.",
    "pod": "Regulação digital148–151 não explicita poder coercivo suficientemente geral."
  },
  "kamla-persad-bissessar": {
    "dip": "Expansão de efetivos8604–8608 é pesquisa setorial; direção militar geral não inferida.",
    "rep": "Legalidade parlamentar alegada não converte cargo eleito em orientação democrática geral.",
    "rel": "Expressão religiosa8506 não estabelece desenho institucional religioso."
  },
  "irfaan-ali": {
    "int": "Venezuela/Haiti/aliança são casos específicos, sem regra geral de intervenção.",
    "eco": "Financiamento social79 não comprova orientação proprietária geral.",
    "con": "Inclusão de metas em orçamento78 não define alocação geral da economia.",
    "mor": "Candidatura de mulher indígena116 não prova orientação moral social ampla."
  },
  "antonio-jose-seguro": {
    "eco": "Citações anteriores sobre saúde/seguridade1094 não misturadas ao recorte de posse; sem direção proprietária geral.",
    "tec": "Citação eleitoral1101 não misturada ao recorte de posse.",
    "mor": "Igualdade salarial674 isolada não define orientação moral inteira."
  },
  "maryam-nawaz": {
    "tec": "Declaração qualitativa de IA na educação e administração preservada; proposta anterior arquivada, orientação tecnológica inteira não estabelecida.",
    "eco": "Serviços públicos25–30 da Radio Pakistan não demonstram hierarquia proprietária.",
    "con": "Digitalização administrativa não demonstra alocação econômica geral.",
    "pod": "Nenhuma posição coerciva geral estabelecida nos trechos próprios."
  }
};

export const publicFigureBatch23: ReferenceEntry[] = identities.map(identity => {
  const entry: ReferenceEntry = {...identity,kind:'person',category:'public-figure',sources:publicFigureBatch23Sources[identity.id],vec:Object.fromEntries(AXES.map(({key})=>[key,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{},caveats:'Perfil documental parcial fora do ranking; eixos desconhecidos sem graduação. Declarações próprias somente no período delimitado, com limites de reprodução e edição registrados em cada fonte. Relatos e acusações não são execução verificada; atividade2026 não renova posições antigas. Leitura independente limitada aos trechos documentados; direções não estabelecidas permanecem desconhecidas.'};
  for(const input of publicFigureBatch23Coding[entry.id]){const c=codeReferenceAxis(input,entry.sources);entry.vec[input.axis]=c.value;entry.evidence[input.axis]=c.evidence;entry.axisEvidence![input.axis]=c.axisEvidence;entry.coding![input.axis]=c.coding;}
  return entry;
});
export const publicFigureBatch23UnknownAxes=Object.fromEntries(publicFigureBatch23.map(entry=>[entry.id,Object.fromEntries(AXES.filter(({key})=>!entry.coding?.[key]).map(({key})=>[key,specificUnknownReasons[entry.id][key]??'Orientação geral não estabelecida nas passagens efetivamente lidas; sem inferência por cargo, filiação ou resultados alegados.']))]));

export const publicFigureBatch23HeldCoding: Record<string,ReferenceAxisCoding[]> = {
  "maryam-nawaz": [
    {
      "axis": "tec",
      "position": "moderate-first",
      "confidence": "medium",
      "relatedQuestionIds": [
        "tecnologia_02"
      ],
      "claims": [
        {
          "sourceTitle": "Maryam Nawaz — declaração própria reproduzida no encontro de IA27/01/2026",
          "publishedDate": "2026-01-27; declaração reproduzida",
          "accessedDate": "2026-10-08",
          "locator": "28–35, especialmente32",
          "statement": "Promove tecnologia digital e IA para reforma, educação e elaboração de políticas.",
          "basis": "declaration"
        }
      ],
      "rationale": "Adoção digital declarada.",
      "uncertainty": "Uso responsável32; escopo governamental/educacional provincial. Reprodução nominal, não literalidade, implementação ou posição sobre toda tecnologia comprovadas.",
      "reviewedOn": "2026-10-08"
    }
  ]
};
export const publicFigureBatch23HeldProposal: ReferenceEntry = {
  "id": "maryam-nawaz",
  "name": "Maryam Nawaz",
  "aliases": [
    "Maryam Nawaz Sharif"
  ],
  "period": "Declaração própria de IA reproduzida27/01/2026; atividade23/08/2026",
  "rationale": "Promove tecnologia digital e uso responsável de IA para educação, serviços públicos e elaboração de políticas.",
  "kind": "person",
  "category": "public-figure",
  "sources": [
    {
      "title": "Maryam Nawaz — declaração própria reproduzida no encontro de IA27/01/2026",
      "url": "https://dunyanews.tv/en/Pakistan/931959-maryam-nawaz-sharif-mandates-ai-use-in-punjab-schools",
      "note": "Data25/corpo28–36 efetivamente lidos. Declaração nominal32 reproduzida por redação, sem áudio/vídeo ou transcrição literal certificados; relato de iniciativas28–35 não prova implementação."
    },
    {
      "title": "Radio Pakistan — atividade e declaração nominal de Maryam Nawaz23/08/2026",
      "url": "https://radio.gov.pk/23-08-2026/punjab-enters-new-era-of-development-technology-cm",
      "note": "Data19/corpo25–30 efetivamente lidos. Declaração própria relatada em encontro concluído26 confirma atividade; usados também os limites de serviços públicos, sem certificar resultados hospitalares."
    },
    {
      "title": "Tech Valley — relato presencial de diretivas nominais de Maryam Nawaz, publicação27/01/2026",
      "url": "https://techvalley.pk/accelerating-vision-2026-tech-valley-and-google-experts-empower-punjab-cabinet-with-ai-driven-governance-tools-in-lahore/",
      "note": "Publicação38/relato45–57 efetivamente lidos. Organizador do encontro atribui diretivas50–55/57 nominalmente; não é transcrição própria assinada. Dateline do encontro26/01, publicação27/01; não confundir fala de especialistas46–49 ou Marriyum56 com Maryam."
    }
  ],
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
    "tec": 60
  },
  "evidence": {
    "tec": "medium"
  },
  "axisEvidence": {
    "tec": {
      "sourceTitles": [
        "Maryam Nawaz — declaração própria reproduzida no encontro de IA27/01/2026"
      ],
      "rationale": "Adoção digital declarada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Uso responsável32; escopo governamental/educacional provincial. Reprodução nominal, não literalidade, implementação ou posição sobre toda tecnologia comprovadas."
    }
  },
  "coding": {
    "tec": {
      "axis": "tec",
      "position": "moderate-first",
      "confidence": "medium",
      "relatedQuestionIds": [
        "tecnologia_02"
      ],
      "claims": [
        {
          "sourceTitle": "Maryam Nawaz — declaração própria reproduzida no encontro de IA27/01/2026",
          "publishedDate": "2026-01-27; declaração reproduzida",
          "accessedDate": "2026-10-08",
          "locator": "28–35, especialmente32",
          "statement": "Promove tecnologia digital e IA para reforma, educação e elaboração de políticas.",
          "basis": "declaration"
        }
      ],
      "rationale": "Adoção digital declarada.",
      "uncertainty": "Uso responsável32; escopo governamental/educacional provincial. Reprodução nominal, não literalidade, implementação ou posição sobre toda tecnologia comprovadas.",
      "reviewedOn": "2026-10-08",
      "version": "editorial-ordinal-v1",
      "value": 60,
      "range": [
        55,
        70
      ]
    }
  },
  "caveats": "Perfil documental parcial fora do ranking; eixos desconhecidos sem graduação. Declarações próprias somente no período delimitado, com limites de reprodução e edição registrados em cada fonte. Relatos e acusações não são execução verificada; atividade2026 não renova posições antigas. Julgamento documental independente pendente."
};
