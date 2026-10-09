import type {ReferenceEntry,ReferenceSource} from './references';
import {AXES} from '../lib/scoring';

export const legacyHistoricalQuality12OriginalRecords:Record<string,ReferenceEntry>={
  "lazaro-cardenas": {
    "id": "lazaro-cardenas",
    "kind": "person",
    "category": "historical-figure",
    "name": "Lázaro Cárdenas",
    "period": "Presidência mexicana e expropriação do petróleo, 1934–1940",
    "vec": {
      "est": 50,
      "rep": 76,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 87,
      "con": 82,
      "com": 70,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "A expropriação petrolífera e a reforma agrária são medidas documentadas de propriedade pública e planejamento estatal.",
    "caveats": "O perfil se limita a um mandato histórico e suas políticas; não projeta organizações posteriores sobre as convicções pessoais de Cárdenas.",
    "sources": [
      {
        "title": "Decreto de expropriação petrolífera, 1938",
        "url": "https://www.memoriapoliticademexico.org/Textos/6Revolucion/1938DPE.html",
        "note": "Decreto presidencial primário sobre a nacionalização da indústria petrolífera."
      }
    ],
    "evidence": {
      "rep": "medium",
      "eco": "high",
      "con": "high",
      "com": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Decreto de expropriação petrolífera, 1938"
        ],
        "rationale": "Decreto presidencial primário sobre a nacionalização da indústria petrolífera. A expropriação petrolífera e a reforma agrária são medidas documentadas de propriedade pública e planejamento estatal. A direção editorial deste eixo é Democracia, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "eco": {
        "sourceTitles": [
          "Decreto de expropriação petrolífera, 1938"
        ],
        "rationale": "Decreto presidencial primário sobre a nacionalização da indústria petrolífera. A expropriação petrolífera e a reforma agrária são medidas documentadas de propriedade pública e planejamento estatal. A direção editorial deste eixo é Público, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "con": {
        "sourceTitles": [
          "Decreto de expropriação petrolífera, 1938"
        ],
        "rationale": "Decreto presidencial primário sobre a nacionalização da indústria petrolífera. A expropriação petrolífera e a reforma agrária são medidas documentadas de propriedade pública e planejamento estatal. A direção editorial deste eixo é Planejamento, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "com": {
        "sourceTitles": [
          "Decreto de expropriação petrolífera, 1938"
        ],
        "rationale": "Decreto presidencial primário sobre a nacionalização da indústria petrolífera. A expropriação petrolífera e a reforma agrária são medidas documentadas de propriedade pública e planejamento estatal. A direção editorial deste eixo é Protecionismo, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      }
    }
  },
  "antonio-gramsci": {
    "id": "antonio-gramsci",
    "kind": "person",
    "category": "historical-figure",
    "name": "Antonio Gramsci",
    "period": "Cadernos do Cárcere e escritos políticos, 1916–1935",
    "vec": {
      "est": 67,
      "rep": 70,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 73,
      "con": 75,
      "com": 50,
      "rel": 50,
      "mor": 64,
      "tec": 50
    },
    "rationale": "Textos de Gramsci analisam hegemonia, sociedade civil e organização política, em chave socialista e histórica.",
    "caveats": "Os Cadernos foram escritos sob censura prisional e são fragmentários; não autorizam converter cada conceito em ponto numérico preciso.",
    "sources": [
      {
        "title": "Selections from the Prison Notebooks",
        "url": "https://www.marxists.org/archive/gramsci/prison_notebooks/",
        "note": "Arquivo de escritos políticos originais e cadernos de Gramsci."
      }
    ],
    "evidence": {
      "est": "medium",
      "rep": "medium",
      "eco": "medium",
      "con": "medium",
      "mor": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Selections from the Prison Notebooks"
        ],
        "rationale": "Arquivo de escritos políticos originais e cadernos de Gramsci. Textos de Gramsci analisam hegemonia, sociedade civil e organização política, em chave socialista e histórica. A direção editorial deste eixo é Federal, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "rep": {
        "sourceTitles": [
          "Selections from the Prison Notebooks"
        ],
        "rationale": "Arquivo de escritos políticos originais e cadernos de Gramsci. Textos de Gramsci analisam hegemonia, sociedade civil e organização política, em chave socialista e histórica. A direção editorial deste eixo é Democracia, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "eco": {
        "sourceTitles": [
          "Selections from the Prison Notebooks"
        ],
        "rationale": "Arquivo de escritos políticos originais e cadernos de Gramsci. Textos de Gramsci analisam hegemonia, sociedade civil e organização política, em chave socialista e histórica. A direção editorial deste eixo é Público, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "con": {
        "sourceTitles": [
          "Selections from the Prison Notebooks"
        ],
        "rationale": "Arquivo de escritos políticos originais e cadernos de Gramsci. Textos de Gramsci analisam hegemonia, sociedade civil e organização política, em chave socialista e histórica. A direção editorial deste eixo é Planejamento, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "mor": {
        "sourceTitles": [
          "Selections from the Prison Notebooks"
        ],
        "rationale": "Arquivo de escritos políticos originais e cadernos de Gramsci. Textos de Gramsci analisam hegemonia, sociedade civil e organização política, em chave socialista e histórica. A direção editorial deste eixo é Progressista, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      }
    }
  },
  "winston-churchill": {
    "id": "winston-churchill",
    "kind": "person",
    "category": "historical-figure",
    "name": "Winston Churchill",
    "period": "Discursos parlamentares e governos britânicos, 1900–1955",
    "vec": {
      "est": 50,
      "rep": 70,
      "pod": 80,
      "imi": 50,
      "dip": 78,
      "int": 42,
      "eco": 50,
      "con": 50,
      "com": 67,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Discursos e registros parlamentares documentam liderança de guerra, defesa imperial e oposição a projetos de autonomia colonial.",
    "caveats": "A longa carreira inclui posições e partidos mutáveis, racismo imperial e defesa da democracia britânica; período selecionado exige cautela.",
    "sources": [
      {
        "title": "“The Sinews of Peace”, 1946",
        "url": "https://winstonchurchill.org/resources/speeches/1946-1963-elder-statesman/the-sinews-of-peace/",
        "note": "Discurso de Churchill sobre segurança europeia e política internacional após a guerra."
      }
    ],
    "evidence": {
      "rep": "medium",
      "pod": "medium",
      "dip": "medium",
      "int": "medium",
      "com": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "“The Sinews of Peace”, 1946"
        ],
        "rationale": "Discurso de Churchill sobre segurança europeia e política internacional após a guerra. Discursos e registros parlamentares documentam liderança de guerra, defesa imperial e oposição a projetos de autonomia colonial. A direção editorial deste eixo é Democracia, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "pod": {
        "sourceTitles": [
          "“The Sinews of Peace”, 1946"
        ],
        "rationale": "Discurso de Churchill sobre segurança europeia e política internacional após a guerra. Discursos e registros parlamentares documentam liderança de guerra, defesa imperial e oposição a projetos de autonomia colonial. A direção editorial deste eixo é Segurança, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "dip": {
        "sourceTitles": [
          "“The Sinews of Peace”, 1946"
        ],
        "rationale": "Discurso de Churchill sobre segurança europeia e política internacional após a guerra. Discursos e registros parlamentares documentam liderança de guerra, defesa imperial e oposição a projetos de autonomia colonial. A direção editorial deste eixo é Militarista, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "int": {
        "sourceTitles": [
          "“The Sinews of Peace”, 1946"
        ],
        "rationale": "Discurso de Churchill sobre segurança europeia e política internacional após a guerra. Discursos e registros parlamentares documentam liderança de guerra, defesa imperial e oposição a projetos de autonomia colonial. A direção editorial deste eixo é Nacionalista, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "com": {
        "sourceTitles": [
          "“The Sinews of Peace”, 1946"
        ],
        "rationale": "Discurso de Churchill sobre segurança europeia e política internacional após a guerra. Discursos e registros parlamentares documentam liderança de guerra, defesa imperial e oposição a projetos de autonomia colonial. A direção editorial deste eixo é Protecionismo, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      }
    }
  },
  "charles-de-gaulle": {
    "id": "charles-de-gaulle",
    "kind": "person",
    "category": "historical-figure",
    "name": "Charles de Gaulle",
    "period": "Discursos e presidências francesas, 1940–1969",
    "vec": {
      "est": 50,
      "rep": 56,
      "pod": 77,
      "imi": 50,
      "dip": 69,
      "int": 43,
      "eco": 56,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 57
    },
    "rationale": "A prática gaullista enfatizou Estado nacional forte, independência estratégica e modernização industrial.",
    "caveats": "De Gaulle liderou em guerra e em república semipresidencial; esses contextos não são diretamente comparáveis ao questionário.",
    "sources": [
      {
        "title": "Appel du 18 juin, 1940",
        "url": "https://www.charles-de-gaulle.org/lhomme/dossiers-thematiques/18-juin-1940-lappel-a-la-resistance/",
        "note": "Arquivo da Fondation Charles de Gaulle com a chamada histórica à resistência."
      }
    ],
    "evidence": {
      "rep": "medium",
      "pod": "medium",
      "dip": "medium",
      "int": "medium",
      "eco": "medium",
      "tec": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Appel du 18 juin, 1940"
        ],
        "rationale": "Arquivo da Fondation Charles de Gaulle com a chamada histórica à resistência. A prática gaullista enfatizou Estado nacional forte, independência estratégica e modernização industrial. A direção editorial deste eixo é Democracia, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "pod": {
        "sourceTitles": [
          "Appel du 18 juin, 1940"
        ],
        "rationale": "Arquivo da Fondation Charles de Gaulle com a chamada histórica à resistência. A prática gaullista enfatizou Estado nacional forte, independência estratégica e modernização industrial. A direção editorial deste eixo é Segurança, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "dip": {
        "sourceTitles": [
          "Appel du 18 juin, 1940"
        ],
        "rationale": "Arquivo da Fondation Charles de Gaulle com a chamada histórica à resistência. A prática gaullista enfatizou Estado nacional forte, independência estratégica e modernização industrial. A direção editorial deste eixo é Militarista, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "int": {
        "sourceTitles": [
          "Appel du 18 juin, 1940"
        ],
        "rationale": "Arquivo da Fondation Charles de Gaulle com a chamada histórica à resistência. A prática gaullista enfatizou Estado nacional forte, independência estratégica e modernização industrial. A direção editorial deste eixo é Nacionalista, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "eco": {
        "sourceTitles": [
          "Appel du 18 juin, 1940"
        ],
        "rationale": "Arquivo da Fondation Charles de Gaulle com a chamada histórica à resistência. A prática gaullista enfatizou Estado nacional forte, independência estratégica e modernização industrial. A direção editorial deste eixo é Público, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "tec": {
        "sourceTitles": [
          "Appel du 18 juin, 1940"
        ],
        "rationale": "Arquivo da Fondation Charles de Gaulle com a chamada histórica à resistência. A prática gaullista enfatizou Estado nacional forte, independência estratégica e modernização industrial. A direção editorial deste eixo é Tecnologia, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      }
    }
  },
  "malcolm-x": {
    "id": "malcolm-x",
    "kind": "person",
    "category": "historical-figure",
    "name": "Malcolm X",
    "period": "Discursos e evolução política, 1952–1965",
    "vec": {
      "est": 50,
      "rep": 76,
      "pod": 50,
      "imi": 24,
      "dip": 50,
      "int": 71,
      "eco": 57,
      "con": 50,
      "com": 50,
      "rel": 37,
      "mor": 72,
      "tec": 50
    },
    "rationale": "Seus discursos denunciam racismo estrutural e defendem autodeterminação; sua posição sobre estratégia e integração evoluiu em 1964–65.",
    "caveats": "A trajetória contém mudanças marcantes e diferenças entre períodos; este vetor privilegia intervenções posteriores à peregrinação a Meca.",
    "sources": [
      {
        "title": "The Ballot or the Bullet, 1964",
        "url": "https://www.malcolmx.com/speeches/the-ballot-or-the-bullet/",
        "note": "Texto transcrito do discurso de Malcolm X sobre direitos políticos e ação coletiva."
      }
    ],
    "evidence": {
      "rep": "medium",
      "imi": "medium",
      "int": "medium",
      "eco": "medium",
      "rel": "medium",
      "mor": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "The Ballot or the Bullet, 1964"
        ],
        "rationale": "Texto transcrito do discurso de Malcolm X sobre direitos políticos e ação coletiva. Seus discursos denunciam racismo estrutural e defendem autodeterminação; sua posição sobre estratégia e integração evoluiu em 1964–65. A direção editorial deste eixo é Democracia, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "imi": {
        "sourceTitles": [
          "The Ballot or the Bullet, 1964"
        ],
        "rationale": "Texto transcrito do discurso de Malcolm X sobre direitos políticos e ação coletiva. Seus discursos denunciam racismo estrutural e defendem autodeterminação; sua posição sobre estratégia e integração evoluiu em 1964–65. A direção editorial deste eixo é Multicultura, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "int": {
        "sourceTitles": [
          "The Ballot or the Bullet, 1964"
        ],
        "rationale": "Texto transcrito do discurso de Malcolm X sobre direitos políticos e ação coletiva. Seus discursos denunciam racismo estrutural e defendem autodeterminação; sua posição sobre estratégia e integração evoluiu em 1964–65. A direção editorial deste eixo é Não intervencionista, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "eco": {
        "sourceTitles": [
          "The Ballot or the Bullet, 1964"
        ],
        "rationale": "Texto transcrito do discurso de Malcolm X sobre direitos políticos e ação coletiva. Seus discursos denunciam racismo estrutural e defendem autodeterminação; sua posição sobre estratégia e integração evoluiu em 1964–65. A direção editorial deste eixo é Público, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "rel": {
        "sourceTitles": [
          "The Ballot or the Bullet, 1964"
        ],
        "rationale": "Texto transcrito do discurso de Malcolm X sobre direitos políticos e ação coletiva. Seus discursos denunciam racismo estrutural e defendem autodeterminação; sua posição sobre estratégia e integração evoluiu em 1964–65. A direção editorial deste eixo é Religioso, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "mor": {
        "sourceTitles": [
          "The Ballot or the Bullet, 1964"
        ],
        "rationale": "Texto transcrito do discurso de Malcolm X sobre direitos políticos e ação coletiva. Seus discursos denunciam racismo estrutural e defendem autodeterminação; sua posição sobre estratégia e integração evoluiu em 1964–65. A direção editorial deste eixo é Progressista, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      }
    }
  }
};

export const legacyHistoricalQuality12Proposals={
  "lazaro-cardenas": {
    "period": "Discurso/decreto de expropriação petrolífera,18/3/1938",
    "rationale": "Justifica expropriar instalações petrolíferas em favor da nação para assegurar abastecimento e obrigações trabalhistas, com indenização.",
    "caveats": "Medida setorial específica, doze eixos desconhecidos; não titularidade de toda economia ou prova da reforma agrária. Exige apoio absoluto49 e sacrifício de outras atividades50, mas indeniza em até dez anos58–59. Acusações sobre empresas e números históricos13–47 não certificados como fatos. Reprodução pessoal deDoraliciaCarmona, não originalDiarioOficial.",
    "sources": [
      {
        "title": "Cárdenas — discurso e decreto18/3/1938, reproduçãoMemoriaPolítica",
        "url": "https://www.memoriapoliticademexico.org/Textos/6Revolucion/1938MEP.html",
        "note": "Próprio13–60 inteiro efetivamente lido, metadata11–12 e cosignaturas60–63. Expropriação55–57, indenização58–59, apoio49–50. URLantiga1938DPEInternalError; URLrecuperada mistura discurso e decreto com titulares distintos, não original facsímile."
      },
      {
        "title": "INAH/BibliotecaNacional — Cárdenas, identidade",
        "url": "https://bnah.inah.gob.mx/bnah_lazaro_cardenas/publico/semblanza.php",
        "note": "Blocos institucionais indexados efetivamente lidos: nasceu1895, morreu19October1970. DirectInternalError; mesma identidade corroborada INEHRM indexed21May1895–19Oct1970. Não leitura biográfica integral."
      }
    ]
  },
  "antonio-gramsci": {
    "period": "Workers’Democracy, L’OrdineNuovo21/6/1919; traduçãoMichaelCarley",
    "rationale": "Propõe organizar conselhos de trabalhadores e camponeses para substituir o Estado burguês, articulando eleições, disciplina e direção partidária.",
    "caveats": "Artigo específico anterior aos cadernos, doze eixos desconhecidos. Autonomia/flexibilidade15 e eleições25–33 coexistem com hierarquia15, poder supremo partidário20 e controle31; não pluralismo universal. Ditadura proletária12/36–37 é seu objetivo declarado. Tradução inglesaMichaelCarley, não original italiano nem efeito histórico.",
    "sources": [
      {
        "title": "Gramsci — Workers’Democracy,21/6/1919",
        "url": "https://www.marxists.org/archive/gramsci/1919/06/workers-democracy.htm",
        "note": "Metadata0–7 e próprio11–38 completos efetivamente lidos. Coordenação15, eleição25–29, controlepartidário20/31 e novaordem36–38. TraduçãoMichaelCarley/proofreadGlennC, não todaPrisonNotebooks; linkreaderq13-18 falhou."
      },
      {
        "title": "FondazioneGramsci — identidade",
        "url": "https://fondazionegramsci.org/pagina-biografie-antonio-gramsci/",
        "note": "Corpo institucional20–30 efetivamente lido, identidade21:22January1891–27April1937. Biografia não gera posições políticas."
      }
    ]
  },
  "winston-churchill": {
    "period": "TheSinewsofPeace,5/3/1946; reproduçãoChartwellTrust",
    "rationale": "Propõe cooperação anglo-americana, garantias constitucionais e força internacional da ONU para prevenir guerras, mantendo defesa e poder imperial.",
    "caveats": "Fala pessoal sem missão oficial113, doze eixos desconhecidos; não todos governos1900–1955 ou oposição colonial comprovada. Defesa nacional124, segredoatômico146–149 e bases comuns160 limitam pacifismo; reivindicações sobre império150/201–204 e blocos172–190 não certificadas como fatos. FonteICS reimprimeChartwellTrust207; propaganda histórica não é prova de execução.",
    "sources": [
      {
        "title": "Churchill — TheSinewsofPeace,5/3/1946",
        "url": "https://winstonchurchill.org/resources/speeches/1946-1963-elder-statesman/the-sinews-of-peace/",
        "note": "Próprio109–125 e143–204 completos efetivamente lidos; inserção newsletter126–142 excluída. Data/local99–102; liberdades150–154, forçaONU143–145, cooperação158–171 e contrapesos124/146–149/201–204. ©ChartwellTrust/CurtisBrown207, não facsímile ou áudio."
      },
      {
        "title": "NobelFoundation — Churchill, identidade",
        "url": "https://www.nobelprize.org/prizes/literature/1953/churchill/biographical/?related=1",
        "note": "Bloco institucional indexado de abertura efetivamente lido: WinstonLeonardSpencerChurchill1874–1965. DirectInternalError, fonteNobelLectureseditorHorstFrenzElsevier1969. Não alegar wholebodydirect."
      }
    ]
  },
  "charles-de-gaulle": {
    "period": "Texto canônico do apelo18/6/1940, reproduçãoÉlysée",
    "rationale": "Convoca resistência armada francesa e mobilização de militares e trabalhadores de armamentos, contando com impérios aliados e indústria americana.",
    "caveats": "Apelo de guerra específico, doze eixos desconhecidos; não programa industrial presidencial ou toda orientação diplomática. Invoca impériofrancês/britânico13–15 e superioridadearmada19–24; não anticolonialismo ou pacifismo. Élysée42 informa não existir gravação18June; este texto canônico reproduzido não certifica palavras exatas pronunciadas, nem confunde com áudio22June.",
    "sources": [
      {
        "title": "DeGaulle — texto do apelo18/6/1940, Élysée",
        "url": "https://www.elysee.fr/front/pdf/elysee-module-3453-fr.pdf",
        "note": "Página única0–27 completa efetivamente lida, próprio3–26/autor27, data0–1. Resistência21–25 e alianças/impérios13–20. Sem original manuscrito ou cotejoáudio. FondationlinklegadoInternalError; corpo recuperado noÉlysée."
      },
      {
        "title": "Élysée — CharlesdeGaulle, identidade/versionamento",
        "url": "https://www.elysee.fr/charles-de-gaulle",
        "note": "Corpo institucional9–58/62–125 efetivamente lido; nascimento9–10 em22Nov1890/morte123–124 em9Nov1970. Advertência ausência de gravação42. Demais biografia não usada para normas ou prática geral."
      }
    ]
  },
  "malcolm-x": {
    "period": "TheBallotortheBullet, Detroit12/4/1964; transcriçãoRadioWorks reproduzida2018",
    "rationale": "Defende controle político e econômico da comunidade negra, uso estratégico do voto e internacionalização da luta pelos direitos humanos.",
    "caveats": "VersãoDetroit específica anterior à viagemMecca; doze eixos desconhecidos. Retórica racial/exclusão135–166/468–493, revolução violenta454–460 e alternativa sem sangue461–467 coexistem; não pacifismo nem igualdade moral geral inferidos de antirracismo. Transcrição marca recordingimpaired524–525 e reconstituição editorial; introdução0–95 não é fala, traz morte12February errada frenteNPS21February. Não original áudio.",
    "sources": [
      {
        "title": "MalcolmX — TheBallotortheBullet, reproduçãoWooster/RadioWorks",
        "url": "https://atribeofthemiddlepassage.voices.wooster.edu/wp-content/uploads/sites/213/2019/04/Malcolm-X-The-Ballot-or-the-Bullet.pdf",
        "note": "Metadata0–6 e próprio96–184/348–579 efetivamente lido; NÃO185–347 ou13pinteiras. Programa comunitário135–184, voto351–378, direitosinternacionais505–529, violência454–493 e união537–579. Impressãoweb23Aug2018, origemAmericanRadioWorks, atribuidodataDetroit12Apr1964em6. Introdução e notas de outras vozes excluídas."
      },
      {
        "title": "NationalParkService — MalcolmXHouseSite, identidade",
        "url": "https://www.nps.gov/places/malcolm-x-house-site.htm",
        "note": "Corpo institucional42–46 efetivamente lido: nascimento19May1925/morte21Feb1965 em42/44. Corrige data errada editorialRadioWorks82–83 sem certificar demais narrativa histórica."
      }
    ]
  }
};

export function reconcileLegacyHistoricalQuality12(entry:ReferenceEntry):ReferenceEntry {
 const original=legacyHistoricalQuality12OriginalRecords[entry.id];
 if(!original||JSON.stringify(entry)!==JSON.stringify(original))return entry;
 const proposal=legacyHistoricalQuality12Proposals[entry.id as keyof typeof legacyHistoricalQuality12Proposals];
 const sources:ReferenceSource[]=structuredClone(proposal.sources);
 for(const source of entry.sources)if(!sources.some(s=>JSON.stringify(s)===JSON.stringify(source)))sources.push(structuredClone(source));
 return {...structuredClone(entry),period:proposal.period,rationale:proposal.rationale,caveats:proposal.caveats,sources,vec:Object.fromEntries(AXES.map(({key})=>[key,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{}};
}
