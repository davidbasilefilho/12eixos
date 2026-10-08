import type {ReferenceEntry,ReferenceSource} from './references';
import {AXES} from '../lib/scoring';

export const legacyHistoricalQuality09OriginalRecords:Record<string,ReferenceEntry>={
  "alan-turing": {
    "id": "alan-turing",
    "kind": "person",
    "category": "historical-figure",
    "name": "Alan Turing",
    "period": "Trabalho científico e público, 1936–1954",
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
    "rationale": "O registro público conhecido documenta contribuições à lógica, computação e criptoanálise, mas não uma doutrina política comparável nos doze eixos.",
    "caveats": "O vetor central é explicitamente falta de evidência, não neutralidade ou consenso. Não se infere opinião política, econômica ou moral a partir de sua ciência, serviço de guerra, perseguição ou vida pessoal; a compatibilidade resultante é pouco informativa.",
    "sources": [
      {
        "title": "Alan Turing — Computer History Museum",
        "url": "https://www.computerhistory.org/timeline/1949/",
        "note": "Fonte histórica para o trabalho técnico de Turing e a fotografia de 1951; não documenta uma plataforma política."
      }
    ],
    "evidence": {}
  },
  "eduard-bernstein": {
    "id": "eduard-bernstein",
    "kind": "person",
    "category": "historical-figure",
    "name": "Eduard Bernstein",
    "period": "Socialismo evolucionário e atuação parlamentar, 1899–1920",
    "vec": {
      "est": 50,
      "rep": 86,
      "pod": 26,
      "imi": 50,
      "dip": 22,
      "int": 68,
      "eco": 72,
      "con": 56,
      "com": 50,
      "rel": 63,
      "mor": 70,
      "tec": 50
    },
    "rationale": "Bernstein defendeu reformas graduais, organização sindical e competição parlamentar, em oposição à previsão de colapso e revolução iminente.",
    "caveats": "O vetor retrata o revisionismo social-democrata de sua obra tardia, não todo o movimento operário alemão. Imigração, tecnologia e vários temas culturais têm evidência escassa.",
    "sources": [
      {
        "title": "Die Voraussetzungen des Sozialismus und die Aufgaben der Sozialdemokratie (1899) — Internet Archive",
        "url": "https://archive.org/details/dievoraussetzung00bern",
        "note": "Obra primária em que Bernstein expõe a revisão gradualista do marxismo ortodoxo."
      },
      {
        "title": "Eduard Bernstein — German History in Documents and Images",
        "url": "https://germanhistorydocs.org/en/wilhelmine-germany-and-the-first-world-war-1890-1918/eduard-bernstein-the-preconditions-of-socialism-1899",
        "note": "Fonte histórica contextualiza programa reformista, parlamento e sindicatos."
      }
    ],
    "evidence": {
      "rep": "high",
      "pod": "medium",
      "dip": "medium",
      "int": "medium",
      "eco": "high",
      "con": "medium",
      "rel": "medium",
      "mor": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Die Voraussetzungen des Sozialismus und die Aufgaben der Sozialdemokratie (1899) — Internet Archive"
        ],
        "rationale": "Bernstein defende reformas graduais por sufrágio e ação parlamentar em vez de ruptura revolucionária imediata."
      },
      "pod": {
        "sourceTitles": [
          "Die Voraussetzungen des Sozialismus und die Aufgaben der Sozialdemokratie (1899) — Internet Archive"
        ],
        "rationale": "A obra associa socialismo democrático a liberdades políticas e à ampliação da participação dos trabalhadores."
      },
      "dip": {
        "sourceTitles": [
          "Eduard Bernstein — German History in Documents and Images"
        ],
        "rationale": "A entrada documental relaciona sua atuação ao parlamentarismo e à oposição gradualista à revolução armada; sustenta apenas pacifismo moderado."
      },
      "int": {
        "sourceTitles": [
          "Die Voraussetzungen des Sozialismus und die Aufgaben der Sozialdemokratie (1899) — Internet Archive"
        ],
        "rationale": "O texto trata interesses dos trabalhadores em escala internacional e cooperação transnacional, sustentando uma inclinação não nacionalista moderada."
      },
      "eco": {
        "sourceTitles": [
          "Die Voraussetzungen des Sozialismus und die Aufgaben der Sozialdemokratie (1899) — Internet Archive"
        ],
        "rationale": "Bernstein defende expansão gradual de sindicatos, cooperativas e seguridade como alternativas à concentração privada."
      },
      "con": {
        "sourceTitles": [
          "Die Voraussetzungen des Sozialismus und die Aufgaben der Sozialdemokratie (1899) — Internet Archive"
        ],
        "rationale": "A obra propõe reformas planejadas e organização social crescente, sem defender substituir integralmente a atividade de mercado."
      },
      "rel": {
        "sourceTitles": [
          "Eduard Bernstein — German History in Documents and Images"
        ],
        "rationale": "O texto contextualizado discute a crítica de Bernstein a fundamentos religiosos da tradição marxista, sustentando apenas uma inclinação secular moderada."
      },
      "mor": {
        "sourceTitles": [
          "Die Voraussetzungen des Sozialismus und die Aufgaben der Sozialdemokratie (1899) — Internet Archive"
        ],
        "rationale": "Bernstein defende reformas sociais e ampliação de direitos por vias democráticas, sustentando a direção progressista moderada."
      }
    }
  },
  "simon-bolivar": {
    "id": "simon-bolivar",
    "kind": "person",
    "category": "historical-figure",
    "name": "Simón Bolívar",
    "period": "Cartas e projetos republicanos, 1815–1830",
    "vec": {
      "est": 84,
      "rep": 68,
      "pod": 65,
      "imi": 50,
      "dip": 62,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 59,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "A Carta da Jamaica e a Constituição boliviana articulam independência, república e integração continental, mas também uma presidência forte.",
    "caveats": "Escritos de guerra e fundação estatal não correspondem a políticas democráticas contemporâneas; não inferimos economia ou costumes ausentes.",
    "sources": [
      {
        "title": "Carta da Jamaica, 1815",
        "url": "https://www.cervantesvirtual.com/obra-visor/carta-de-jamaica-6/html/",
        "note": "Carta primária de Bolívar sobre independência, ordem política e unidade latino-americana."
      }
    ],
    "evidence": {
      "est": "high",
      "rep": "medium",
      "pod": "medium",
      "dip": "medium",
      "com": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Carta da Jamaica, 1815"
        ],
        "rationale": "Carta primária de Bolívar sobre independência, ordem política e unidade latino-americana. A Carta da Jamaica e a Constituição boliviana articulam independência, república e integração continental, mas também uma presidência forte. A direção editorial deste eixo é Federal, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "rep": {
        "sourceTitles": [
          "Carta da Jamaica, 1815"
        ],
        "rationale": "Carta primária de Bolívar sobre independência, ordem política e unidade latino-americana. A Carta da Jamaica e a Constituição boliviana articulam independência, república e integração continental, mas também uma presidência forte. A direção editorial deste eixo é Democracia, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "pod": {
        "sourceTitles": [
          "Carta da Jamaica, 1815"
        ],
        "rationale": "Carta primária de Bolívar sobre independência, ordem política e unidade latino-americana. A Carta da Jamaica e a Constituição boliviana articulam independência, república e integração continental, mas também uma presidência forte. A direção editorial deste eixo é Segurança, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "dip": {
        "sourceTitles": [
          "Carta da Jamaica, 1815"
        ],
        "rationale": "Carta primária de Bolívar sobre independência, ordem política e unidade latino-americana. A Carta da Jamaica e a Constituição boliviana articulam independência, república e integração continental, mas também uma presidência forte. A direção editorial deste eixo é Militarista, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "com": {
        "sourceTitles": [
          "Carta da Jamaica, 1815"
        ],
        "rationale": "Carta primária de Bolívar sobre independência, ordem política e unidade latino-americana. A Carta da Jamaica e a Constituição boliviana articulam independência, república e integração continental, mas também uma presidência forte. A direção editorial deste eixo é Protecionismo, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      }
    }
  },
  "emiliano-zapata": {
    "id": "emiliano-zapata",
    "kind": "person",
    "category": "historical-figure",
    "name": "Emiliano Zapata",
    "period": "Plano de Ayala e Revolução Mexicana, 1911–1919",
    "vec": {
      "est": 70,
      "rep": 58,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 78,
      "con": 74,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "O Plano de Ayala exige restituição de terras e autonomia camponesa frente a governos centralizadores.",
    "caveats": "O texto é um manifesto revolucionário, não uma plataforma completa de governo ou prova de compromisso com democracia pluralista.",
    "sources": [
      {
        "title": "Plan de Ayala, 1911",
        "url": "https://www.memoriapoliticademexico.org/Textos/6Revolucion/1911PDA.html",
        "note": "Transcrição do manifesto assinado por Zapata e outros líderes revolucionários."
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
          "Plan de Ayala, 1911"
        ],
        "rationale": "Transcrição do manifesto assinado por Zapata e outros líderes revolucionários. O Plano de Ayala exige restituição de terras e autonomia camponesa frente a governos centralizadores. A direção editorial deste eixo é Federal, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "rep": {
        "sourceTitles": [
          "Plan de Ayala, 1911"
        ],
        "rationale": "Transcrição do manifesto assinado por Zapata e outros líderes revolucionários. O Plano de Ayala exige restituição de terras e autonomia camponesa frente a governos centralizadores. A direção editorial deste eixo é Democracia, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "eco": {
        "sourceTitles": [
          "Plan de Ayala, 1911"
        ],
        "rationale": "Transcrição do manifesto assinado por Zapata e outros líderes revolucionários. O Plano de Ayala exige restituição de terras e autonomia camponesa frente a governos centralizadores. A direção editorial deste eixo é Público, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "con": {
        "sourceTitles": [
          "Plan de Ayala, 1911"
        ],
        "rationale": "Transcrição do manifesto assinado por Zapata e outros líderes revolucionários. O Plano de Ayala exige restituição de terras e autonomia camponesa frente a governos centralizadores. A direção editorial deste eixo é Planejamento, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      }
    }
  },
  "benito-juarez": {
    "id": "benito-juarez",
    "kind": "person",
    "category": "historical-figure",
    "name": "Benito Juárez",
    "period": "Leis de Reforma e presidência mexicana, 1855–1872",
    "vec": {
      "est": 50,
      "rep": 77,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 91,
      "mor": 65,
      "tec": 50
    },
    "rationale": "As Leis de Reforma separaram instituições religiosas e civis e afirmaram igualdade jurídica republicana.",
    "caveats": "Medidas liberais do século XIX foram implementadas em meio a conflito e não mapeiam diretamente direitos e costumes atuais.",
    "sources": [
      {
        "title": "Leyes de Reforma, 1859",
        "url": "https://www.memoriapoliticademexico.org/Textos/3Reforma/1859LGR.html",
        "note": "Texto legislativo primário do governo de Juárez sobre secularização e igualdade civil."
      }
    ],
    "evidence": {
      "rep": "medium",
      "rel": "high",
      "mor": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Leyes de Reforma, 1859"
        ],
        "rationale": "Texto legislativo primário do governo de Juárez sobre secularização e igualdade civil. As Leis de Reforma separaram instituições religiosas e civis e afirmaram igualdade jurídica republicana. A direção editorial deste eixo é Democracia, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "rel": {
        "sourceTitles": [
          "Leyes de Reforma, 1859"
        ],
        "rationale": "Texto legislativo primário do governo de Juárez sobre secularização e igualdade civil. As Leis de Reforma separaram instituições religiosas e civis e afirmaram igualdade jurídica republicana. A direção editorial deste eixo é Irreligioso, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "mor": {
        "sourceTitles": [
          "Leyes de Reforma, 1859"
        ],
        "rationale": "Texto legislativo primário do governo de Juárez sobre secularização e igualdade civil. As Leis de Reforma separaram instituições religiosas e civis e afirmaram igualdade jurídica republicana. A direção editorial deste eixo é Progressista, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      }
    }
  }
};

export const legacyHistoricalQuality09Proposals={
  "alan-turing": {
    "period": "Carta conjunta a Winston Churchill, 21/10/1941",
    "rationale": "Com três coautores, solicita intervenção do primeiro-ministro nas prioridades de pessoal civil e militar para o trabalho de guerra.",
    "caveats": "Advocacia institucional conjunta e específica, não doutrina política geral. Doze eixos desconhecidos. Welchman, Alexander e Milner-Barry também assinam; a introdução de Copeland não é fala de Turing. A prioridade excepcional de pessoal e o risco de convocação militar são pedidos dos autores, não comprovação de execução. Profissão, perseguição e papéis de gênero da equipe não definem os eixos. King’s confirma 1912–1954; descoberta do corpo em 8 de junho não determina aqui o dia da morte.",
    "sources": [
      {
        "title": "Turing e coautores — carta a Churchill, 21/10/1941",
        "url": "https://webhomes.maths.ed.ac.uk/~v1ranick/turingletter.pdf",
        "note": "Reprodução de The Essential Turing, cap.7, pp.336–340; própria carta48–124 lida integralmente pelo autor desta revisão. Coautores1–3/121–124, data52, prioridade estatal65–72, convocação83–85 e WRNS93–103. Introdução4–47 separada; referência arquivísticaHW1/155 e permissão Crown25–30. Sem inspeção do original manuscrito."
      },
      {
        "title": "Oxford — edição de The Essential Turing",
        "url": "https://academic.oup.com/book/42030",
        "note": "Metadados institucionais indexados lidos: B.J.Copeland(ed), Oxford University Press, 9/9/2004; ISBN9780198250791. Confirma edição, não acesso ao livro inteiro."
      },
      {
        "title": "King’s College — Alan Mathison Turing (1912–54)",
        "url": "https://www.kings.cam.ac.uk/alan-mathison-turing-1912-54",
        "note": "Cabeçalho113, nascimento23/6/1912 em126 e descoberta do corpo8/6/1954 em225 efetivamente lidos. Identidade falecida; biografia científica não usada como posição política."
      }
    ],
    "claims": []
  },
  "eduard-bernstein": {
    "period": "As tarefas imediatas da social-democracia, excerto de 1899",
    "rationale": "Defende reformas democráticas, direitos trabalhistas, cooperativas e participação parlamentar, com serviços municipais.",
    "caveats": "Excerto editorial de um programa, não todo o livro ou prática partidária. Doze eixos desconhecidos. Não renuncia ao direito de revolução66; defesa de interesses nacionais43 limita a arbitragem pacífica41–42. Serviços municipais60 não estabelecem orientação de toda propriedade produtiva. Tradução inglesa Thomas Dunlap; o resumo inglês contém data impossível1850–1832, por isso identidade1850–1932 cotejada na versão alemã.",
    "sources": [
      {
        "title": "Bernstein — The Immediate Tasks of Social Democracy (1899)",
        "url": "https://germanhistorydocs.org/en/wilhelmine-germany-and-the-first-world-war-1890-1918/ghdi:document-767",
        "note": "Página0–105 efetivamente lida; corpo próprio29–70 e nota73, seleção com elipses. Bibliografia74: obra1899 cap.4D p.144ff, reproduçãoSchraepler1996 pp.136–143; tradutorThomasDunlap76. Reforma democrática/trabalho29–32/50–65 e contrapartida revolucionária66."
      },
      {
        "title": "GHDI — Sozialistischer Revisionismus (1899), versão alemã",
        "url": "https://germanhistorydocs.org/de/das-wilhelminische-kaiserreich-und-der-erste-weltkrieg-1890-1918/sozialistischer-revisionismus-die-naechsten-aufgaben-der-sozialdemokratie-1899",
        "note": "Página0–104 lida, identidade1850–1932 no resumo16 e corpo selecionado29–71. Corrige explicitamente o erro do resumo inglês, sem alegar cotejo do livro alemão completo."
      }
    ],
    "claims": []
  },
  "simon-bolivar": {
    "period": "Carta a Santiago Mariño, Valencia, 16/12/1813",
    "rationale": "Propõe governo central, representantes provinciais em assembleia e união de Venezuela e Nova Granada durante a guerra.",
    "caveats": "Carta específica, não Carta da Jamaica1815, constituição boliviana1826 ou toda carreira. Doze eixos desconhecidos. Dois departamentos militares sob autoridade central24 e contexto de guerra limitam inferências pluralistas; declaração de não ambicionar poder25 não comprova conduta. Reprodução de Doctrina del Libertador, documento11; edição da coletânea não determinada neste acesso.",
    "sources": [
      {
        "title": "Bolívar — carta a Mariño, documento11 de Doctrina del Libertador",
        "url": "https://www.cervantesvirtual.com/obra-visor/doctrina-del-libertador--0/html/ff6f5f94-82b1-11df-acc7-002185ce6064_28.html",
        "note": "Documento próprio11–34 completo efetivamente lido: título/data11, destinatário13, governo/assembleia22–24, união28–30, assinatura34. A página reúne outros documentos, não todos atribuídos à mesma data."
      },
      {
        "title": "Project Gutenberg — catálogo de Simón Bolívar, biografia Sherwell",
        "url": "https://www.gutenberg.org/ebooks/8928",
        "note": "Metadados0–54 lidos; assunto46 identifica Bolívar1783–1830. O autor39 é Sherwell1878–1926 e não pode fornecer essas datas a Bolívar. Sumário gerado e biografia não usados para normas políticas."
      }
    ],
    "claims": []
  },
  "emiliano-zapata": {
    "period": "Plano de Ayala, adoção conjunta de 28/11/1911",
    "rationale": "Endossa restituição e redistribuição agrária e substituição revolucionária do governo, com eleições após a vitória.",
    "caveats": "Plano coletivo assinado por Zapata, não autoria exclusiva ou execução comprovada. Doze eixos desconhecidos. Restituição27, desapropriação parcial indenizada29 e nacionalização de bens de opositores30 são distintos; não propriedade pública de toda economia. Chefes militares escolhem autoridades provisórias35–36 e o texto prescreve luta armada38–39; não pluralismo universal ou pacifismo.",
    "sources": [
      {
        "title": "Plano de Ayala — texto assinado, 28/11/1911",
        "url": "https://www.memoriapoliticademexico.org/Textos/6Revolucion/1911PDA.html",
        "note": "Texto próprio13–42 inteiro efetivamente lido; título/data11–12, agrária27–30, transição35–36 e assinaturas39–42. Arquivo Memoria Política de México, Doralicia Carmona4–5, não publicação oficial estatal."
      },
      {
        "title": "SEP — Emiliano Zapata, identidade e datas",
        "url": "https://murales.sep.gob.mx/Inicio/zapata.html",
        "note": "Página0–20 efetivamente lida: cabeçalho5 informa8/8/1879–10/4/1919. Biografia7–9 não substitui a leitura do plano coletivo."
      }
    ],
    "claims": []
  },
  "benito-juarez": {
    "period": "Decreto sobre cemitérios, Veracruz, 31/7/1859",
    "rationale": "Promulga inspeção civil dos cemitérios e sepultamentos, permitindo cerimônias religiosas e administração particular fiscalizada.",
    "caveats": "Norma de um setor assinada por Juárez e Ocampo, não avaliação de todas as Leis de Reforma ou aplicação. Doze eixos desconhecidos. Administração particular permanece subordinada à inspeção15, ritos dos ministros são permitidos16 e sanções incluem prisão18/31; não secularismo geral ou liberdade irrestrita. Reprodução com referência Dublán–Lozano5061, sem cotejo do original impresso.",
    "sources": [
      {
        "title": "Juárez e Ocampo — decreto sobre cemitérios, 31/7/1859",
        "url": "https://www.memoriapoliticademexico.org/Textos/3Reforma/1859LSC.html",
        "note": "Corpo normativo11–32 completo efetivamente lido; Juárez12/32, data11/32, inspeção13–15, ministros16, sanções18/31 e referênciaDublán–Lozano5061. Arquivo privado de reprodução, não Diário Oficial atual."
      },
      {
        "title": "Correos de México — 150 aniversario luctuoso de Benito Juárez",
        "url": "https://www.gob.mx/correosdemexico/acciones-y-programas/150-aniversario-luctuoso-de-benito-juarez",
        "note": "Parágrafo institucional indexado completo efetivamente lido: nascimento21/3/1806, morte18/7/1872,66anos. Abertura direta403; não se alega leitura direta da página nem prova política por biografia."
      }
    ],
    "claims": []
  }
};

export function reconcileLegacyHistoricalQuality09(entry:ReferenceEntry):ReferenceEntry {
 const original=legacyHistoricalQuality09OriginalRecords[entry.id];
 if(!original||JSON.stringify(entry)!==JSON.stringify(original))return entry;
 const proposal=legacyHistoricalQuality09Proposals[entry.id as keyof typeof legacyHistoricalQuality09Proposals];
 const sources:ReferenceSource[]=structuredClone(entry.sources);
 for(const source of proposal.sources)if(!sources.some(s=>JSON.stringify(s)===JSON.stringify(source)))sources.push(structuredClone(source));
 return {...structuredClone(entry),period:proposal.period,rationale:proposal.rationale,caveats:proposal.caveats,sources,vec:Object.fromEntries(AXES.map(({key})=>[key,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{}};
}
