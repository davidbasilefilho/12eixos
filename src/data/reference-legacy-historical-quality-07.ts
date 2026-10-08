import type {ReferenceEntry,ReferenceSource} from './references';
import {AXES} from '../lib/scoring';
import {codeReferenceAxis,type ReferenceAxisCoding} from '../lib/reference-coding';

/** Full exact live before objects, all fields and original sources retained. */
export const legacyHistoricalQuality07OriginalRecords:Record<string,ReferenceEntry>={
  "karl-marx": {
    "id": "karl-marx",
    "kind": "person",
    "category": "historical-figure",
    "name": "Karl Marx",
    "period": "Manifesto do Partido Comunista e textos associados, 1848–1875",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 96,
      "con": 93,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 77
    },
    "rationale": "Crítica da propriedade privada dos meios de produção e defesa da transformação coletiva da economia produzem a proximidade principal.",
    "caveats": "Não projetamos regimes do século XX sobre a opinião pessoal de Marx. Democracia, imigração e diplomacia são difíceis de traduzir para o questionário atual.",
    "sources": [
      {
        "title": "Manifesto do Partido Comunista",
        "url": "https://www.marxists.org/archive/marx/works/1848/communist-manifesto/",
        "note": "Texto primário sobre classe, propriedade, Estado e internacionalismo."
      }
    ],
    "evidence": {
      "eco": "high",
      "con": "high",
      "rel": "medium",
      "tec": "medium"
    },
    "axisEvidence": {
      "eco": {
        "sourceTitles": [
          "Manifesto do Partido Comunista"
        ],
        "rationale": "O manifesto defende propriedade comum dos meios de produção e transformação social da propriedade privada capitalista."
      },
      "con": {
        "sourceTitles": [
          "Manifesto do Partido Comunista"
        ],
        "rationale": "O manifesto propõe coordenação coletiva da produção e medidas econômicas deliberadas, sustentando o polo de planejamento."
      },
      "tec": {
        "sourceTitles": [
          "Manifesto do Partido Comunista"
        ],
        "rationale": "O manifesto descreve a indústria moderna e suas inovações produtivas como forças que transformam a sociedade, reconhecendo seu potencial tecnológico."
      }
    }
  },
  "albert-einstein": {
    "id": "albert-einstein",
    "kind": "person",
    "category": "historical-figure",
    "name": "Albert Einstein",
    "period": "Ensaios políticos e pacifismo, 1930–1955",
    "vec": {
      "est": 50,
      "rep": 78,
      "pod": 28,
      "imi": 50,
      "dip": 9,
      "int": 50,
      "eco": 74,
      "con": 66,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Em “Why Socialism?”, Einstein defende uma economia sujeita a fins sociais e alerta contra concentração de poder; seus pronunciamentos pacifistas sustentam baixa ênfase militarista.",
    "caveats": "O perfil usa ensaios públicos, não respostas ao questionário. A posição econômica não equivale a defender um modelo único de planejamento; eixos culturais, federais e migratórios têm pouca evidência direta.",
    "sources": [
      {
        "title": "Why Socialism? — Monthly Review",
        "url": "https://monthlyreview.org/2009/05/01/why-socialism/",
        "note": "Ensaio de Einstein de 1949 sobre concentração econômica, planejamento e direitos democráticos."
      },
      {
        "title": "Albert Einstein: pacifism — Nobel Prize",
        "url": "https://www.nobelprize.org/prizes/physics/1921/einstein/biographical/",
        "note": "Biografia institucional registra o compromisso pacifista e sua mudança diante do nazismo."
      }
    ],
    "evidence": {
      "rep": "medium",
      "pod": "medium",
      "dip": "high",
      "int": "medium",
      "eco": "medium",
      "con": "medium",
      "tec": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Why Socialism? — Monthly Review"
        ],
        "rationale": "Einstein considera democracia política e proteção de direitos indispensáveis, ao mesmo tempo que alerta para concentração econômica capaz de limitar escolhas reais."
      },
      "pod": {
        "sourceTitles": [
          "Why Socialism? — Monthly Review"
        ],
        "rationale": "O ensaio critica o poder econômico concentrado por restringir liberdade individual e debate público."
      },
      "dip": {
        "sourceTitles": [
          "Albert Einstein: pacifism — Nobel Prize"
        ],
        "rationale": "A biografia institucional documenta o compromisso pacifista público de Einstein, com ressalva de sua evolução diante do nazismo."
      },
      "eco": {
        "sourceTitles": [
          "Why Socialism? — Monthly Review"
        ],
        "rationale": "Einstein defende que a economia sirva necessidades sociais e critica a propriedade privada concentrada dos meios de produção."
      },
      "con": {
        "sourceTitles": [
          "Why Socialism? — Monthly Review"
        ],
        "rationale": "O ensaio pede planejamento democrático da produção para necessidades humanas, acompanhado de direitos e controle público."
      }
    }
  },
  "jean-jacques-rousseau": {
    "id": "jean-jacques-rousseau",
    "kind": "person",
    "category": "historical-figure",
    "name": "Jean-Jacques Rousseau",
    "period": "Du contrat social, 1762",
    "vec": {
      "est": 76,
      "rep": 79,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 63,
      "con": 71,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Rousseau relaciona soberania popular, lei e vontade geral em crítica às hierarquias políticas herdadas.",
    "caveats": "Sua teoria é objeto de interpretações concorrentes e antecede democracia representativa, direitos atuais e política econômica moderna.",
    "sources": [
      {
        "title": "Du contrat social, 1762",
        "url": "https://www.gutenberg.org/ebooks/46333",
        "note": "Texto primário de Rousseau sobre soberania, cidadania e organização política."
      }
    ],
    "evidence": {
      "est": "medium",
      "rep": "medium",
      "eco": "medium",
      "con": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Du contrat social, 1762"
        ],
        "rationale": "Texto primário de Rousseau sobre soberania, cidadania e organização política. Rousseau relaciona soberania popular, lei e vontade geral em crítica às hierarquias políticas herdadas. A direção editorial deste eixo é Federal, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "rep": {
        "sourceTitles": [
          "Du contrat social, 1762"
        ],
        "rationale": "Texto primário de Rousseau sobre soberania, cidadania e organização política. Rousseau relaciona soberania popular, lei e vontade geral em crítica às hierarquias políticas herdadas. A direção editorial deste eixo é Democracia, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "eco": {
        "sourceTitles": [
          "Du contrat social, 1762"
        ],
        "rationale": "Texto primário de Rousseau sobre soberania, cidadania e organização política. Rousseau relaciona soberania popular, lei e vontade geral em crítica às hierarquias políticas herdadas. A direção editorial deste eixo é Público, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "con": {
        "sourceTitles": [
          "Du contrat social, 1762"
        ],
        "rationale": "Texto primário de Rousseau sobre soberania, cidadania e organização política. Rousseau relaciona soberania popular, lei e vontade geral em crítica às hierarquias políticas herdadas. A direção editorial deste eixo é Planejamento, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      }
    }
  },
  "mary-wollstonecraft": {
    "id": "mary-wollstonecraft",
    "kind": "person",
    "category": "historical-figure",
    "name": "Mary Wollstonecraft",
    "period": "A Vindication of the Rights of Woman, 1792",
    "vec": {
      "est": 50,
      "rep": 82,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 82,
      "mor": 94,
      "tec": 50
    },
    "rationale": "Wollstonecraft argumenta que mulheres devem receber educação racional e direitos como cidadãs.",
    "caveats": "A obra é do século XVIII e discute especialmente educação e igualdade; as demais posições não são inferidas sem fonte.",
    "sources": [
      {
        "title": "A Vindication of the Rights of Woman",
        "url": "https://www.gutenberg.org/ebooks/3420",
        "note": "Obra primária de Wollstonecraft contra a exclusão educacional e cívica das mulheres."
      }
    ],
    "evidence": {
      "rep": "medium",
      "rel": "medium",
      "mor": "high"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "A Vindication of the Rights of Woman"
        ],
        "rationale": "Obra primária de Wollstonecraft contra a exclusão educacional e cívica das mulheres. Wollstonecraft argumenta que mulheres devem receber educação racional e direitos como cidadãs. A direção editorial deste eixo é Democracia, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "rel": {
        "sourceTitles": [
          "A Vindication of the Rights of Woman"
        ],
        "rationale": "Obra primária de Wollstonecraft contra a exclusão educacional e cívica das mulheres. Wollstonecraft argumenta que mulheres devem receber educação racional e direitos como cidadãs. A direção editorial deste eixo é Irreligioso, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "mor": {
        "sourceTitles": [
          "A Vindication of the Rights of Woman"
        ],
        "rationale": "Obra primária de Wollstonecraft contra a exclusão educacional e cívica das mulheres. Wollstonecraft argumenta que mulheres devem receber educação racional e direitos como cidadãs. A direção editorial deste eixo é Progressista, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      }
    }
  },
  "frederick-douglass": {
    "id": "frederick-douglass",
    "kind": "person",
    "category": "historical-figure",
    "name": "Frederick Douglass",
    "period": "Narrative, abolitionist speeches and Reconstruction, 1845–1895",
    "vec": {
      "est": 50,
      "rep": 91,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 78,
      "mor": 97,
      "tec": 50
    },
    "rationale": "Douglass defendeu abolição, cidadania igual e sufrágio negro, ligando instituições democráticas à luta antiescravista.",
    "caveats": "Suas opiniões mudaram ao longo da vida e refletiram disputas de reconstrução pós-escravidão; não inferimos política econômica atual.",
    "sources": [
      {
        "title": "What to the Slave Is the Fourth of July?, 1852",
        "url": "https://www.gutenberg.org/ebooks/202",
        "note": "Discurso primário de Douglass contra escravidão e hipocrisia republicana."
      }
    ],
    "evidence": {
      "rep": "high",
      "rel": "medium",
      "mor": "high"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "What to the Slave Is the Fourth of July?, 1852"
        ],
        "rationale": "Discurso primário de Douglass contra escravidão e hipocrisia republicana. Douglass defendeu abolição, cidadania igual e sufrágio negro, ligando instituições democráticas à luta antiescravista. A direção editorial deste eixo é Democracia, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "rel": {
        "sourceTitles": [
          "What to the Slave Is the Fourth of July?, 1852"
        ],
        "rationale": "Discurso primário de Douglass contra escravidão e hipocrisia republicana. Douglass defendeu abolição, cidadania igual e sufrágio negro, ligando instituições democráticas à luta antiescravista. A direção editorial deste eixo é Irreligioso, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "mor": {
        "sourceTitles": [
          "What to the Slave Is the Fourth of July?, 1852"
        ],
        "rationale": "Discurso primário de Douglass contra escravidão e hipocrisia republicana. Douglass defendeu abolição, cidadania igual e sufrágio negro, ligando instituições democráticas à luta antiescravista. A direção editorial deste eixo é Progressista, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      }
    }
  }
};

export const legacyHistoricalQuality07Proposals={
  "karl-marx": {
    "period": "Manifesto1848, capítuloII; programa conjuntoMarx/Engels na tradução1888",
    "rationale": "Propõe apropriação social do capital e concentração dos instrumentos produtivos, com plano comum e transformação posterior do poder político.",
    "caveats": "Programa coletivoMarx/Engels1848, não crença exclusiva privada ou regimes posteriores. Transição varia por país147–149 e admite coerção145/154/158. Apropriação pessoal48/68 permanece, enquanto poder político de classe deveria extinguir-se162–165. Não transfere descrição industrial a posição tecnológica.",
    "sources": [
      {
        "title": "Marx eEngels — Manifesto1848, capítuloII",
        "url": "https://www.marxists.org/archive/marx/works/1848/communist-manifesto/ch02.htm",
        "note": "Próprio5–165 capítuloII completo efetivamente. Programa econômico27–48/141–165. Não Manifesto completo, original alemão cotejado ou apropriação pessoal integralmente abolida."
      },
      {
        "title": "MIA — Manifesto1848, bibliografia tradução1888",
        "url": "https://www.marxists.org/archive/marx/works/1848/communist-manifesto/index.htm",
        "note": "0–38 lido: escrito1847/publicadoFev1848 em5–6; traduçãoSamuelMoore emcooperaçãoEngels1888 em8; fonte1969/correção2004 em7/10. Autoria conjuntaMarxEngels, não obra exclusiva."
      }
    ],
    "claims": [
      {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Marx eEngels — Manifesto1848, capítuloII",
            "publishedDate": "Manifesto,1848; tradução inglesa1888",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "27–48/68/143/151–162: capital e produção sociais",
            "statement": "Propõe tornar o capital propriedade comum e centralizar os instrumentos produtivos na organização estatal da classe trabalhadora."
          }
        ],
        "rationale": "Regra geral de propriedade produtiva, não um serviço ou empresa isolado.",
        "uncertainty": "Preserva apropriação pessoal48/68; Estado transitório perde caráter político162–165 e medidas variam147–149.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "con",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Marx eEngels — Manifesto1848, capítuloII",
            "publishedDate": "Manifesto,1848; tradução inglesa1888",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "143–165: instrumentos gerais, medidas e plano comum",
            "statement": "Propõe direção comum da produção, crédito e transporte centralizados e articulação planejada da agricultura e indústria."
          }
        ],
        "rationale": "Programa coordena múltiplos setores e produção nacional inteira, além de propriedade pública isolada.",
        "uncertainty": "Transição por país147–149, medidas inicialmente insuficientes145 e associação posterior162–165. Não comprova eficácia ou execução histórica.",
        "reviewedOn": "2026-10-08"
      }
    ]
  },
  "albert-einstein": {
    "period": "WhySocialism,Maio1949; ensaio na reprodução portuguesaMIA",
    "rationale": "Defende propriedade social e produção planejada para necessidades coletivas, com proteção contra burocracia e domínio sobre indivíduos.",
    "caveats": "Ensaio normativo, não especialidade econômica ou biografia como evidência. Reprodução portuguesa atribui transcrição a blogs10 sem tradutor nomeado; reviewer cotejou os parágrafos finais ingleses indexados da reimpressão oficial2009, não fac-símile1949. Reconhece planejamento compatível com escravização62 e pergunta como garantir direitos e contrapeso democrático63. Sem DIP herdado de biografia pacifista.",
    "sources": [
      {
        "title": "Einstein — PorQueSocialismo1949, reprodução portuguesa",
        "url": "https://www.marxists.org/portugues/einstein/1949/05/socialismo.htm",
        "note": "Metadata0–13/próprio14–64 completos efetivamente; planos60–63. Alguns colchetes editoriais15/33/48/55 não tratados como termos originais exclusivos. MonthlyReview1949falhouInternalError; URL2009redirecionouarticles/why-socialism e exibiuapenas29linhas sem corpo."
      },
      {
        "title": "Einstein — Why Socialism?, reimpressão oficial inglesa indexada",
        "url": "https://monthlyreview.org/articles/why-socialism/",
        "note": "Corroboração independente method_review, não recuperação autoral: busca site:monthlyreview.org/1949/05/01/why-socialism/ com 'means of production' expôs metadados da reimpressão maio2009/original maio1949 e parágrafos finais completos sobre propriedade social, planejamento, escravização, burocracia e contrapeso democrático. A abertura direta ainda exibiu29linhas de menus. Não leitura de todo ensaio inglês, original1949 ou fac-símile."
      }
    ],
    "claims": [
      {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Einstein — PorQueSocialismo1949, reprodução portuguesa",
            "publishedDate": "WhySocialism,Maio1949",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "60–63: propriedade social e limites burocráticos",
            "statement": "Defende que meios de produção pertençam à sociedade, acompanhados de garantias contra burocracia dominante."
          }
        ],
        "rationale": "Norma geral de propriedade produtiva, não uma intervenção isolada.",
        "uncertainty": "Planejamento sozinho não socialismo62; tradução de reprodução sem tradutor nomeado, com corroboração independente apenas dos parágrafos finais ingleses indexados da reimpressão2009.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "con",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Einstein — PorQueSocialismo1949, reprodução portuguesa",
            "publishedDate": "WhySocialism,Maio1949",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "60–63: produção e trabalho conforme necessidades",
            "statement": "Defende planejar produção e distribuição de trabalho para necessidades da comunidade e sustento de todos."
          }
        ],
        "rationale": "Alocação geral de produção e trabalho explicitamente normativa.",
        "uncertainty": "Não indica desenho completo das instituições; alerta para escravização62 e centralização burocrática63, não ditadura automaticamente aprovada.",
        "reviewedOn": "2026-10-08"
      }
    ]
  },
  "jean-jacques-rousseau": {
    "period": "DuContratSocial,1762; seleções na traduçãoG.D.H.Cole1920",
    "rationale": "Subordina governo à soberania dos cidadãos e à ratificação popular das leis, admitindo várias formas executivas e coerção pela vontade geral.",
    "caveats": "Soberania legislativa popular não significa democracia executiva exclusiva ou pluralismo contemporâneo. Reconhece aristocracia eleitoral919–925 e monarquia para Estadosgrandes945; totalalienação513 e coerção539/1122 são limites. CidadaniaGeneva524 excluiordens; escravidão1133–1137 é contraponto histórico discutido, não legitimação automaticamente assumida.",
    "sources": [
      {
        "title": "Rousseau — SocialContract1762, soberania popular selecionada",
        "url": "https://www.gutenberg.org/files/46333/46333-h/46333-h.htm",
        "note": "Metadata0–87 edição1920/tradutorCole2/45–51; introdução58–87 não vozRousseau. Próprio513–557,II578–591,III1095–1145 e919–984 efetivamente. Claims519/578–584/1106–1138, não todo livro ou introdução como prova."
      }
    ],
    "claims": [
      {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Rousseau — SocialContract1762, soberania popular selecionada",
            "publishedDate": "DuContratSocial,1762; traduçãoCole1920",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "519/578–584/1106–1138: cidadãos soberanos e ratificação",
            "statement": "Reserva soberania aos cidadãos e exige ratificação popular das leis, subordinando a autoridade executiva ao corpo político."
          }
        ],
        "rationale": "Norma geral da origem e responsabilidade política, além de direito de voto de um único grupo.",
        "uncertainty": "Executivo pode ser aristocracia919–925 ou monarquia945; coerção539/1122 e limites de cidadania524/1133–1137 impedem descrição de democracia universal ou liberal.",
        "reviewedOn": "2026-10-08"
      }
    ]
  },
  "mary-wollstonecraft": {
    "period": "A Vindication of the Rights of Woman,1792; dedicatória e seleção própria",
    "rationale": "Defende autonomia feminina, direitos civis e políticos e formação racional, cobrando igualdade moral também dentro do casamento.",
    "caveats": "Emancipação normativa em múltiplos domínios, não todos costumes atuais. Modéstia/chastidade100/103 e casamento sagrado114 coexistem com direitos; maioria feminina permanece em famílias574–576. Alma imortal572 e razão dada porDeus105 impedem inferir irreligião. Rousseau568 e biografia65–84 são vozes distintas.",
    "sources": [
      {
        "title": "Wollstonecraft — Vindication1792, autonomia e direitos",
        "url": "https://www.gutenberg.org/cache/epub/3420/pg3420-images.html",
        "note": "Próprio90–115 e549–576 completos efetivamente; direito/autonomia93–114/568. Introdução biográfica65–84 lida separadamente, não claim próprio; citaRousseau568/Bacon574–575 sem atribuição exclusiva. Não1700linhas ou livro inteiro."
      }
    ],
    "claims": [
      {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Wollstonecraft — Vindication1792, autonomia e direitos",
            "publishedDate": "A Vindication of the Rights of Woman,1792",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "93–114/567–576: direitos, conjugalidade e autonomia",
            "statement": "Defende autonomia das mulheres, direitos civis e políticos e capacidade racional, rejeitando subjugação conjugal e moral sexual desigual."
          }
        ],
        "rationale": "Programa articula formação, personalidade, direitos e relações familiares, além de sufrágio ou cargo isolado.",
        "uncertainty": "Chastidade e modéstia100/103, casamento sagrado114 e papéis familiares574–576; nenhuma posiçãoLGBT ou secularismo inferida.",
        "reviewedOn": "2026-10-08"
      }
    ]
  },
  "frederick-douglass": {
    "period": "DiscursoRochester5/7/1852; extrato emMyBondageandMyFreedom1855",
    "rationale": "Condena escravidão, negação da liberdade e hipocrisia nacional, exigindo que princípios constitucionais alcancem os escravizados.",
    "caveats": "Perfil qualitativo com doze eixos desconhecidos; abolição não equivale por si a eixo moral geral, nem denúncia da religião escravista a irreligião. Recorre à Bíblia/Deus2044–2050/2063–2065 e usa imagens civilizatórias2067–2069. Relatos de leis/estatísticas2053 não todos verificados. Não discurso íntegro ou carreira1852–1895 toda.",
    "sources": [
      {
        "title": "Douglass — Oration5July1852, extrato republicado1855",
        "url": "https://www.gutenberg.org/cache/epub/202/pg202-images.html",
        "note": "Próprioextrato2036–2069 completo efetivamente; data5Jul1852em2038, livro1855em22. Catalog202 éMyBondageandMyFreedom37–38, contém discurso como EXTRATO e não publicação standalone. IntroduçãoSmith108–174 não prova própria; cartaDouglass93–104 distinta."
      },
      {
        "title": "NPS — Douglass1852, contexto de data e ocasião",
        "url": "https://home.nps.gov/frdo/what-to-the-slave-is-the-4th-of-july.htm",
        "note": "Body35–48 efetivamente,5Jul1852em39/45–48, não própriotexto integral. Rochester2945redirecionouhomepage113linhas sem discurso; YalePDFInternalError. Metadados/falhas distinguem evidência real."
      }
    ],
    "claims": []
  }
};

/** Refuses every later field change; replaces only the exact captured unlocated baseline. */
export function reconcileLegacyHistoricalQuality07(entry:ReferenceEntry):ReferenceEntry {
 const original=legacyHistoricalQuality07OriginalRecords[entry.id];
 if(!original||JSON.stringify(entry)!==JSON.stringify(original))return entry;
 const proposal=legacyHistoricalQuality07Proposals[entry.id as keyof typeof legacyHistoricalQuality07Proposals];
 const sources:ReferenceSource[]=structuredClone(entry.sources);
 for(const source of proposal.sources)if(!sources.some(s=>JSON.stringify(s)===JSON.stringify(source)))sources.push(structuredClone(source));
 const next:ReferenceEntry={...structuredClone(entry),period:proposal.period,rationale:proposal.rationale,caveats:proposal.caveats,sources,vec:Object.fromEntries(AXES.map(({key})=>[key,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{}};
 for(const raw of proposal.claims){const input=raw as ReferenceAxisCoding;const coded=codeReferenceAxis(input,sources);next.vec[input.axis]=coded.value;next.evidence[input.axis]=coded.evidence;next.axisEvidence![input.axis]=coded.axisEvidence;next.coding![input.axis]=coded.coding;}
 return next;
}
