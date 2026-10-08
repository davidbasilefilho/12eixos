import type {ReferenceEntry,ReferenceSource} from './references';
import {AXES} from '../lib/scoring';

export const legacyHistoricalQuality10OriginalRecords:Record<string,ReferenceEntry>={
  "olof-palme": {
    "id": "olof-palme",
    "kind": "person",
    "category": "historical-figure",
    "name": "Olof Palme",
    "period": "Discursos e governos sociais-democratas, 1969–1986",
    "vec": {
      "est": 50,
      "rep": 96,
      "pod": 50,
      "imi": 50,
      "dip": 14,
      "int": 83,
      "eco": 71,
      "con": 67,
      "com": 50,
      "rel": 50,
      "mor": 89,
      "tec": 50
    },
    "rationale": "A defesa do parlamento e do Estado de bem-estar, o internacionalismo, o desarmamento e a oposição pública ao apartheid sustentam os sinais mais fortes.",
    "caveats": "Palme liderou governos em diferentes conjunturas e o perfil combina discursos públicos com políticas sociais-democratas do período. Seu apoio à defesa sueca não se reduz a pacifismo absoluto; tecnologia e imigração têm evidência parcial.",
    "sources": [
      {
        "title": "The Common Security — Olof Palme International Center",
        "url": "https://www.palmecenter.se/en/olof-palme/common-security/",
        "note": "Relatório da comissão internacional presidida por Palme sobre desarmamento e segurança comum."
      },
      {
        "title": "Olof Palme: apartheid speech, 1964 — Sveriges Radio",
        "url": "https://sverigesradio.se/artikel/6582254",
        "note": "Registro do discurso de Palme contra o apartheid na África do Sul."
      },
      {
        "title": "Olof Palme — Swedish Social Democratic Party",
        "url": "https://www.socialdemokraterna.se/vart-parti/om-partiet/historia/olof-palme",
        "note": "História partidária do primeiro-ministro e das reformas sociais do período."
      }
    ],
    "evidence": {
      "rep": "high",
      "imi": "medium",
      "dip": "high",
      "int": "high",
      "eco": "medium",
      "con": "medium",
      "rel": "medium",
      "mor": "high"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Olof Palme — Swedish Social Democratic Party"
        ],
        "rationale": "O registro partidário descreve os governos parlamentares de Palme e sua defesa de direitos democráticos e liberdades públicas."
      },
      "dip": {
        "sourceTitles": [
          "The Common Security — Olof Palme International Center"
        ],
        "rationale": "O relatório da comissão internacional presidida por Palme recomenda desarmamento e segurança comum em vez de escalada militar."
      },
      "int": {
        "sourceTitles": [
          "The Common Security — Olof Palme International Center",
          "Olof Palme: apartheid speech, 1964 — Sveriges Radio"
        ],
        "rationale": "O relatório defende segurança cooperativa e o pronunciamento se opõe ao apartheid; juntos sustentam internacionalismo e não intervenção em política externa."
      },
      "eco": {
        "sourceTitles": [
          "Olof Palme — Swedish Social Democratic Party"
        ],
        "rationale": "O registro associa os governos de Palme à expansão do Estado de bem-estar e de serviços públicos."
      },
      "con": {
        "sourceTitles": [
          "Olof Palme — Swedish Social Democratic Party"
        ],
        "rationale": "As reformas sociais descritas foram conduzidas por políticas públicas e coordenação estatal, sustentando uma inclinação moderada ao planejamento."
      },
      "mor": {
        "sourceTitles": [
          "Olof Palme: apartheid speech, 1964 — Sveriges Radio"
        ],
        "rationale": "O discurso de Palme denuncia o apartheid e defende igualdade de direitos, sustentando a orientação progressista."
      }
    }
  },
  "jose-marti": {
    "id": "jose-marti",
    "kind": "person",
    "category": "historical-figure",
    "name": "José Martí",
    "period": "Ensaios e independência cubana, 1881–1895",
    "vec": {
      "est": 76,
      "rep": 78,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 69,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "“Nuestra América” critica imitação colonial e defende repúblicas enraizadas em realidades locais e solidariedade latino-americana.",
    "caveats": "O corpus é anterior às categorias atuais e foi escrito em luta anticolonial; eixos sem equivalência textual ficam no centro.",
    "sources": [
      {
        "title": "Nuestra América, 1891",
        "url": "https://biblioteca.clacso.edu.ar/clacso/se/20191016112552/Nuestra_America.pdf",
        "note": "Ensaio original de Martí sobre república, identidade e autodeterminação."
      }
    ],
    "evidence": {
      "est": "medium",
      "rep": "medium",
      "int": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Nuestra América, 1891"
        ],
        "rationale": "Ensaio original de Martí sobre república, identidade e autodeterminação. “Nuestra América” critica imitação colonial e defende repúblicas enraizadas em realidades locais e solidariedade latino-americana. A direção editorial deste eixo é Federal, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "rep": {
        "sourceTitles": [
          "Nuestra América, 1891"
        ],
        "rationale": "Ensaio original de Martí sobre república, identidade e autodeterminação. “Nuestra América” critica imitação colonial e defende repúblicas enraizadas em realidades locais e solidariedade latino-americana. A direção editorial deste eixo é Democracia, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "int": {
        "sourceTitles": [
          "Nuestra América, 1891"
        ],
        "rationale": "Ensaio original de Martí sobre república, identidade e autodeterminação. “Nuestra América” critica imitação colonial e defende repúblicas enraizadas em realidades locais e solidariedade latino-americana. A direção editorial deste eixo é Não intervencionista, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      }
    }
  },
  "julius-nyerere": {
    "id": "julius-nyerere",
    "kind": "person",
    "category": "historical-figure",
    "name": "Julius Nyerere",
    "period": "Declaração de Arusha e presidência da Tanzânia, 1967–1985",
    "vec": {
      "est": 74,
      "rep": 50,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 88,
      "con": 82,
      "com": 62,
      "rel": 50,
      "mor": 50,
      "tec": 38
    },
    "rationale": "A Declaração de Arusha apresenta ujamaa, propriedade social e autossuficiência; o governo também privilegiou unidade nacional.",
    "caveats": "O texto é uma declaração de partido e governo; a experiência histórica incluiu coerção e não deve ser confundida com ideal normativo.",
    "sources": [
      {
        "title": "The Arusha Declaration, 1967",
        "url": "https://www.marxists.org/subject/africa/nyerere/1967/arusha-declaration.htm",
        "note": "Declaração assinada por Nyerere sobre socialismo, autossuficiência e liderança pública."
      }
    ],
    "evidence": {
      "est": "medium",
      "eco": "high",
      "con": "high",
      "com": "medium",
      "tec": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "The Arusha Declaration, 1967"
        ],
        "rationale": "Declaração assinada por Nyerere sobre socialismo, autossuficiência e liderança pública. A Declaração de Arusha apresenta ujamaa, propriedade social e autossuficiência; o governo também privilegiou unidade nacional. A direção editorial deste eixo é Federal, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "eco": {
        "sourceTitles": [
          "The Arusha Declaration, 1967"
        ],
        "rationale": "Declaração assinada por Nyerere sobre socialismo, autossuficiência e liderança pública. A Declaração de Arusha apresenta ujamaa, propriedade social e autossuficiência; o governo também privilegiou unidade nacional. A direção editorial deste eixo é Público, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "con": {
        "sourceTitles": [
          "The Arusha Declaration, 1967"
        ],
        "rationale": "Declaração assinada por Nyerere sobre socialismo, autossuficiência e liderança pública. A Declaração de Arusha apresenta ujamaa, propriedade social e autossuficiência; o governo também privilegiou unidade nacional. A direção editorial deste eixo é Planejamento, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "com": {
        "sourceTitles": [
          "The Arusha Declaration, 1967"
        ],
        "rationale": "Declaração assinada por Nyerere sobre socialismo, autossuficiência e liderança pública. A Declaração de Arusha apresenta ujamaa, propriedade social e autossuficiência; o governo também privilegiou unidade nacional. A direção editorial deste eixo é Protecionismo, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "tec": {
        "sourceTitles": [
          "The Arusha Declaration, 1967"
        ],
        "rationale": "Declaração assinada por Nyerere sobre socialismo, autossuficiência e liderança pública. A Declaração de Arusha apresenta ujamaa, propriedade social e autossuficiência; o governo também privilegiou unidade nacional. A direção editorial deste eixo é Biologia, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      }
    }
  },
  "patrice-lumumba": {
    "id": "patrice-lumumba",
    "kind": "person",
    "category": "historical-figure",
    "name": "Patrice Lumumba",
    "period": "Discurso de independência e governo do Congo, 1960",
    "vec": {
      "est": 50,
      "rep": 72,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 75,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 71,
      "tec": 50
    },
    "rationale": "No discurso de independência, Lumumba reivindica autodeterminação e igualdade; sua atuação defendeu soberania nacional diante de intervenção externa.",
    "caveats": "A fonte registra momento fundacional e discurso público, não um programa consolidado para os doze eixos.",
    "sources": [
      {
        "title": "Discurso de independência do Congo, 1960",
        "url": "https://www.marxists.org/subject/africa/lumumba/1960/06/independence.htm",
        "note": "Texto primário pronunciado por Lumumba em 30 de junho de 1960."
      }
    ],
    "evidence": {
      "rep": "medium",
      "int": "medium",
      "mor": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Discurso de independência do Congo, 1960"
        ],
        "rationale": "Texto primário pronunciado por Lumumba em 30 de junho de 1960. No discurso de independência, Lumumba reivindica autodeterminação e igualdade; sua atuação defendeu soberania nacional diante de intervenção externa. A direção editorial deste eixo é Democracia, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "int": {
        "sourceTitles": [
          "Discurso de independência do Congo, 1960"
        ],
        "rationale": "Texto primário pronunciado por Lumumba em 30 de junho de 1960. No discurso de independência, Lumumba reivindica autodeterminação e igualdade; sua atuação defendeu soberania nacional diante de intervenção externa. A direção editorial deste eixo é Não intervencionista, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "mor": {
        "sourceTitles": [
          "Discurso de independência do Congo, 1960"
        ],
        "rationale": "Texto primário pronunciado por Lumumba em 30 de junho de 1960. No discurso de independência, Lumumba reivindica autodeterminação e igualdade; sua atuação defendeu soberania nacional diante de intervenção externa. A direção editorial deste eixo é Progressista, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      }
    }
  },
  "wangari-maathai": {
    "id": "wangari-maathai",
    "kind": "person",
    "category": "historical-figure",
    "name": "Wangari Maathai",
    "period": "Green Belt Movement e atuação pública, 1977–2011",
    "vec": {
      "est": 50,
      "rep": 88,
      "pod": 50,
      "imi": 50,
      "dip": 14,
      "int": 69,
      "eco": 56,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 83,
      "tec": 44
    },
    "rationale": "Discursos e iniciativas associam democracia, direitos das mulheres, conservação ambiental e organização comunitária.",
    "caveats": "Ativismo ambiental não determina todas as posições econômicas e tecnológicas; estimativas centrais refletem limites do corpus.",
    "sources": [
      {
        "title": "Nobel Lecture, 2004",
        "url": "https://www.nobelprize.org/prizes/peace/2004/maathai/lecture/",
        "note": "Discurso primário de Maathai sobre ambiente, democracia, paz e desenvolvimento."
      }
    ],
    "evidence": {
      "rep": "high",
      "dip": "high",
      "int": "medium",
      "eco": "medium",
      "mor": "medium",
      "tec": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Nobel Lecture, 2004"
        ],
        "rationale": "Discurso primário de Maathai sobre ambiente, democracia, paz e desenvolvimento. Discursos e iniciativas associam democracia, direitos das mulheres, conservação ambiental e organização comunitária. A direção editorial deste eixo é Democracia, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "dip": {
        "sourceTitles": [
          "Nobel Lecture, 2004"
        ],
        "rationale": "Discurso primário de Maathai sobre ambiente, democracia, paz e desenvolvimento. Discursos e iniciativas associam democracia, direitos das mulheres, conservação ambiental e organização comunitária. A direção editorial deste eixo é Pacifista, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "int": {
        "sourceTitles": [
          "Nobel Lecture, 2004"
        ],
        "rationale": "Discurso primário de Maathai sobre ambiente, democracia, paz e desenvolvimento. Discursos e iniciativas associam democracia, direitos das mulheres, conservação ambiental e organização comunitária. A direção editorial deste eixo é Não intervencionista, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "eco": {
        "sourceTitles": [
          "Nobel Lecture, 2004"
        ],
        "rationale": "Discurso primário de Maathai sobre ambiente, democracia, paz e desenvolvimento. Discursos e iniciativas associam democracia, direitos das mulheres, conservação ambiental e organização comunitária. A direção editorial deste eixo é Público, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "mor": {
        "sourceTitles": [
          "Nobel Lecture, 2004"
        ],
        "rationale": "Discurso primário de Maathai sobre ambiente, democracia, paz e desenvolvimento. Discursos e iniciativas associam democracia, direitos das mulheres, conservação ambiental e organização comunitária. A direção editorial deste eixo é Progressista, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "tec": {
        "sourceTitles": [
          "Nobel Lecture, 2004"
        ],
        "rationale": "Discurso primário de Maathai sobre ambiente, democracia, paz e desenvolvimento. Discursos e iniciativas associam democracia, direitos das mulheres, conservação ambiental e organização comunitária. A direção editorial deste eixo é Biologia, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      }
    }
  }
};

export const legacyHistoricalQuality10Proposals={
  "jose-marti": {
    "period": "Nuestra América, publicação mexicana de30/1/1891; reprodução2019",
    "rationale": "Propõe repúblicas fundadas na realidade dos seus povos, inclusão dos oprimidos e solidariedade americana diante da dominação externa.",
    "caveats": "Ensaio específico, doze eixos desconhecidos. Defende formas locais e crítica1731–1732, mas exige unidade de mente e usa retórica de expulsar expatriados1559–1561; não pluralismo irrestrito. Sangue necessário1684 e estereótipos1614–1618 limitam idealização pacifista ou cultural. Edição reúne vários textos: só Nuestra América foi lido inteiro, não a coletânea nem manuscrito.",
    "sources": [
      {
        "title": "Martí — Nuestra América, Biblioteca del Congreso2019",
        "url": "https://digitales.bcn.gob.ar/files/textos/NuestraAmerica.pdf",
        "note": "Metadata0–118 e próprio1528–1800 completos efetivamente lidos, PDF61–70/pp.63–72; título1528, formas locais1592–1601/1633–1640, oprimidos1675–1684 e inclusão1724–1728, dataElPartidoLiberal30/1/1891 em1800. ISBN9789506911096/edição2019 em14–30, vida1853–1895 em29–30. Prólogo de Battilana/Caresani separado; CLACSO legado não abriu."
      }
    ],
    "claims": []
  },
  "patrice-lumumba": {
    "period": "Discurso de independência do Congo,30/6/1960; edição inglesa1961",
    "rationale": "Propõe liberdades fundamentais, fim da discriminação e independência econômica, aceitando cooperação estrangeira sem imposição política.",
    "caveats": "Programa declarado, doze eixos desconhecidos; não prática de todo governo. Protege vida e bens de estrangeiros59, mas permite expulsão judicial conforme conduta; unidade tribal56 e sacrifício58 são contrapontos. Justiça econômica40/64 não define titularidade e planejamento gerais. Relatos de violência colonial24–32 não foram auditados como fatos. Tradução inglesa sem tradutor identificado, transcriçãoThomasSchmidt, ediçãoMoscou1961pp.44–47.",
    "sources": [
      {
        "title": "Lumumba — discurso30/6/1960, reproduçãoMIA",
        "url": "https://www.marxists.org/subject/africa/lumumba/1960/06/independence.htm",
        "note": "Metadata0–9 e próprio13–70 completos efetivamente lidos: direitos46–49, cooperação52–53, estrangeiros59 e economia64. PublicaçãofonteForeignLanguagesPublishingHouse1961pp.44–47, não original francês ou áudio."
      },
      {
        "title": "AfricaMuseum — PatriceLumumba, autoridade arquivística",
        "url": "https://archives.africamuseum.be/agents/people/178",
        "note": "Página0–36 efetivamente lida; existência1925–1961 em14, nascimento2/7/1925 em16, assassinato17/1/1961 em19. Biografia não gera pontuação."
      }
    ],
    "claims": []
  },
  "julius-nyerere": {
    "period": "Declaração de Arusha/TANU,5/2/1967; tradução inglesa revisada",
    "rationale": "Propõe controle público e cooperativo dos principais meios produtivos, autossuficiência rural e direitos iguais sob liderança socialista.",
    "caveats": "Programa escrito paraTANU, doze eixos desconhecidos; não execução1967–1985 ou corpo inteiro em suaíli. Controle dos principais meios67–68 coexiste com investimento estrangeiro protegido126 e salários privados240. Participação/liberdades24–25/72–73 se subordinam à lei e à adesão socialista214; rejeita ociosidade204. Autoajuda admite auxílio complementar123–125; não isolamento absoluto. Tradução revisada8 sem tradutor identificado.",
    "sources": [
      {
        "title": "Nyerere/TANU — ArushaDeclaration,5/2/1967",
        "url": "https://www.marxists.org/subject/africa/nyerere/1967/arusha-declaration.htm",
        "note": "Leitura efetiva0–177 e203–247; lacuna178–202 não alegada integral. Atribuição6, tradução revisada8; direitos24–25, controle67–68, democracia72–73, investimento126 e trabalho/filiação203–214, resoluçãoliderança219–240. Resolução reúneNEC26–29jan, publicação5fev0."
      },
      {
        "title": "NyerereFoundation — notícia de memória/identidade",
        "url": "https://juliusnyerere.org/resources/publications/nyerere_of_tanzania/P7",
        "note": "Corpo institucional24–30/84–109 efetivamente lido: nascimento13/4/1922 e morte14/10/1999 em27, repetidos109/88. Página de excertos de artigos, não texto político próprio; matériaPANA preservada emPDF tem mêsMarch divergente, usamos apenas anos1922–1999."
      }
    ],
    "claims": []
  },
  "wangari-maathai": {
    "period": "Conferência Nobel,10/12/2004; reprodução em memorial2011",
    "rationale": "Defende democracia, direitos humanos, igualdade de gênero e participação civil como condições para conservação ambiental e paz.",
    "caveats": "Conferência específica, doze eixos desconhecidos. Sustenta deveres da sociedade civil563–569 e tradições culturais úteis654–662, rejeitando mutilação genital658–659; não posição de toda religião ou tecnologia. Números de árvores e efeitos narrados459–466 não auditados. PDF memorial reúne músicas e outras vozes, excluídas da atribuição; OCR reordena colunas, cotejado parcialmente com reproduçãoGPF.",
    "sources": [
      {
        "title": "Maathai — NobelLecture2004, memorial reproduzido/Yale",
        "url": "https://fore.yale.edu/files/wangari_maathai_memorial_program.pdf",
        "note": "Página inicial0–3 vida1940–2011; corpo próprio367–662 completo efetivamente lido em saídas sucessivas, PDF7–10. Democracia/ambiente402–417, responsabilização471–497, sociedadecivil563–569, igualdade376–377, reformas654–662. Colunas reordenadasOCR; memorial14/11/2011 não data da fala."
      },
      {
        "title": "Maathai — NobelLecture, reproduçãoGlobalPolicyForum",
        "url": "https://archive.globalpolicy.org/ngos/socecon/general/2004/1210maathai.htm",
        "note": "Metadata25–28 e próprio38–60 efetivamente lidos; atribuiNobelprize/date10/12/2004. Cotejo parcial do começo e núcleo43, não alegar leitura de todo38–130. Nobel original403/InternalError, PDFoficial não acessível."
      },
      {
        "title": "NobelFoundation — WangariMaathai, identidade",
        "url": "https://www.nobelprize.org/prizes/peace/2004/maathai/facts/",
        "note": "Bloco factual oficial indexado completo efetivamente lido:1/4/1940–25/9/2011. Abertura diretaInternalError, não corpo direto. MemorialYale0–3 corrobora anos, sem gerar posições."
      }
    ],
    "claims": []
  },
  "olof-palme": {
    "period": "Declaração àONU,21/10/1985; texto preparado em inglês",
    "rationale": "Defende desarmamento nuclear, cooperação da ONU, respeito à soberania e sanções contra o apartheid, com prevenção de conflitos.",
    "caveats": "Texto preparado com indicação checkagainstdelivery1, não áudio ou prova de cada palavra pronunciada. Doze eixos desconhecidos. Preserva veto67–72, operações de paz84–85 e legítima defesa122–129; não desarmamento unilateral absoluto ou ausência de ação coletiva. Apoio a sanções176–177 qualifica não ingerência. Declarações sobre violações territoriais118–120 não auditadas. Não comprova política de bem-estar de toda carreira.",
    "sources": [
      {
        "title": "Palme — declaração21/10/1985 àONU, arquivoArbark",
        "url": "https://olofpalme.arbark.se/wp-content/dokument/851021b_fn.pdf",
        "note": "Onze páginas/linhas0–236 completas efetivamente lidas, títuloautor/data3–5, nuclear26–61, veto67–72, operações84–85, defesa122–129, apartheid166–177 e cooperação231–236. ©famíliaPalme/arquivoArbetarrörelsensarkivochbibliotek; OCR contém palavras partidas."
      },
      {
        "title": "Riksarkivet — S.OlofJ.Palme, registro biográfico",
        "url": "https://sok.riksarkivet.se/sbl/Artikel/7983",
        "note": "Bloco institucional indexado de identidade efetivamente lido:30/1/1927–28/2/1986, distintas posições políticas não inferidas. Abertura diretaInternalError; não leitura de todo verbete."
      }
    ],
    "claims": []
  }
};

export function reconcileLegacyHistoricalQuality10(entry:ReferenceEntry):ReferenceEntry {
 const original=legacyHistoricalQuality10OriginalRecords[entry.id];
 if(!original||JSON.stringify(entry)!==JSON.stringify(original))return entry;
 const proposal=legacyHistoricalQuality10Proposals[entry.id as keyof typeof legacyHistoricalQuality10Proposals];
 const sources:ReferenceSource[]=structuredClone(entry.sources);
 for(const source of proposal.sources)if(!sources.some(s=>JSON.stringify(s)===JSON.stringify(source)))sources.push(structuredClone(source));
 return {...structuredClone(entry),period:proposal.period,rationale:proposal.rationale,caveats:proposal.caveats,sources,vec:Object.fromEntries(AXES.map(({key})=>[key,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{}};
}
