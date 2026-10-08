import type { ReferenceEntry, ReferenceSource } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';

/** Research16 full handoff baseline. No import to the catalog is authorized here.
 * Incoming evidence SHA256: 1c1a3f0114eb6101e9da3efa1d0c6c45d62eb0f0928b1a3036ae6f829deca765.
 * Full prior objects and active source objects are retained, not reconstructed from vectors.
 */
export const native16IdeologiesBefore: ReferenceEntry[] = [
  {
    "id": "ideology-program-zapatista-autonomy-ezln-1993-1996",
    "name": "Autonomia zapatista: programa inicial do EZLN, 1993–1996",
    "kind": "ideology",
    "category": "ideology",
    "period": "Leis revolucionárias dezembro 1993, Terceira Declaração janeiro 1995 e programa assinado 15 fevereiro 1996",
    "sources": [
      {
        "title": "EZLN signed regional-autonomy programme — 15 February 1996",
        "url": "https://enlacezapatista.ezln.org.mx/1996/02/15/el-dialogo-de-san-andres-y-los-derechos-y-cultura-indigena-punto-y-seguido/",
        "note": "Signed CCRI-CG/EZLN and advisers pronunciamiento71–116, especially81–98 actually read; affirmative proposed authority, not measured implementation."
      },
      {
        "title": "EZLN Third Declaration — 1 January 1995",
        "url": "https://enlacezapatista.ezln.org.mx/1995/01/01/tercera-declaracion-de-la-selva-lacandona/",
        "note": "Author25–92 read;71incorporates revolutionarylaws,72federalpact,74–77plural politicalforces/indigenousautonomy."
      },
      {
        "title": "EZLN Fourth Declaration — 1 January 1996",
        "url": "https://enlacezapatista.ezln.org.mx/1996/01/01/cuarta-declaracion-de-la-selva-lacandona/",
        "note": "Author34–163 read;124–140civilnonpartymovement and constituent/referendum,150allpeoples/languages. Historical accusations not verified facts."
      },
      {
        "title": "EZLN Peoples Rights Law — December 1993",
        "url": "https://enlacezapatista.ezln.org.mx/1993/12/31/ley-de-derechos-y-obligaciones-de-los-pueblos-en-lucha/",
        "note": "Author13–47 read; civil free elections and accountability, but enemy exclusion and compulsory wartime services."
      },
      {
        "title": "EZLN Revolutionary Armed Forces duties — December 1993",
        "url": "https://enlacezapatista.ezln.org.mx/1993/12/31/ley-de-derechos-y-obligaciones-de-las-fuerzas-armadas-revolucionarias/",
        "note": "Author13–44 read; civilian freeelections/noninterference and militaryjustice/continuedwar counter."
      },
      {
        "title": "EZLN Revolutionary Women’s Law — December 1993",
        "url": "https://enlacezapatista.ezln.org.mx/1993/12/31/ley-revolucionaria-de-mujeres/",
        "note": "Author14–34 read; reproduction-number, partnerchoice and women political participation; no abortion/LGBT/euthanasia position inferred."
      },
      {
        "title": "EZLN Labour Law — December 1993",
        "url": "https://enlacezapatista.ezln.org.mx/1993/12/31/ley-del-trabajo/",
        "note": "Author15–20 read; wage commission with workers/employers/traders/electedauthorities, public/private clinics employerpaid."
      },
      {
        "title": "EZLN Industry and Commerce Law — December 1993",
        "url": "https://enlacezapatista.ezln.org.mx/1993/12/31/ley-de-industria-y-comercio/",
        "note": "Author15–20 read; staple-pricecommission, conditionalmachinerynationalization, military sabotage prosecution for hoarding."
      },
      {
        "title": "EZLN Urban Reform Law — December 1993",
        "url": "https://enlacezapatista.ezln.org.mx/1993/12/31/ley-de-reforma-urbana/",
        "note": "Author15–22 read; rent limits and housing allocation, preserves homeownership."
      },
      {
        "title": "EZLN Agrarian Revolutionary Law — December 1993",
        "url": "https://enlacezapatista.ezln.org.mx/1993/12/31/ley-agraria-revolucionaria/",
        "note": "Author15–39 read; collective land/production, permitted smallownersIII; XV37leisurecentreswithouttaverns/brothels; modern medicine/technology not whole TEC stance."
      }
    ],
    "vec": {
      "est": 60,
      "rep": 60,
      "pod": 50,
      "imi": 40,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 60,
      "com": 50,
      "rel": 50,
      "mor": 60,
      "tec": 50
    },
    "evidence": {
      "est": "medium",
      "rep": "medium",
      "imi": "medium",
      "con": "medium",
      "mor": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "EZLN signed regional-autonomy programme — 15 February 1996"
        ],
        "rationale": "Redistribuição explícita de competências econômicas, jurisdicionais e de segurança configura ordem territorial descentralizada, não só delegação administrativa. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Pacto federal e financiamento público permanecem; não prescreve secessão nem soberania regional ilimitada. Direção moderada reconhece responsabilidades e normas compartilhadas do Estado."
      },
      "rep": {
        "sourceTitles": [
          "EZLN Third Declaration — 1 January 1995",
          "EZLN Peoples Rights Law — December 1993",
          "EZLN Revolutionary Armed Forces duties — December 1993",
          "EZLN Fourth Declaration — 1 January 1996"
        ],
        "rationale": "Normas de escolha e controle popular da autoridade atravessam governo local e transformação constitucional nacional. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Direitos de guerra excluem inimigos da revolução; movimento não concorre a cargos, sem implicar rejeição da escolha civil. Não presume todas as separações de poder."
      },
      "imi": {
        "sourceTitles": [
          "EZLN Fourth Declaration — 1 January 1996",
          "EZLN signed regional-autonomy programme — 15 February 1996"
        ],
        "rationale": "Pluralidade de línguas, normas e culturas deve estruturar a ordem nacional, além de admissão migratória isolada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Mantém unidade nacional; não determina fronteiras, asilo ou toda obrigação linguística comum. Não imputa respostas individuais ao questionário."
      },
      "con": {
        "sourceTitles": [
          "EZLN Labour Law — December 1993",
          "EZLN Industry and Commerce Law — December 1993",
          "EZLN Urban Reform Law — December 1993",
          "EZLN Agrarian Revolutionary Law — December 1993"
        ],
        "rationale": "Regulação de trabalho, bens essenciais, moradia e produção rural atravessa alocação e investimento do programa econômico, sem direção central total. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Propriedade pequena, empregadores, comércio legal e serviços privados permanecem; comissão plural não equivale a planejamento nacional obrigatório."
      },
      "mor": {
        "sourceTitles": [
          "EZLN Revolutionary Women’s Law — December 1993",
          "EZLN signed regional-autonomy programme — 15 February 1996"
        ],
        "rationale": "Autonomia familiar e reprodutiva e igualdade política/econômica das mulheres compõem várias esferas normativas, com intensidade editorial moderada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Agrarian XV37 prevê centros de lazer sem bares/bordéis; não declara sua proibição geral. Não infere aborto, LGBT, eutanásia nem aprovação de toda escolha adulta; escopo limitado ao programa histórico."
      }
    },
    "coding": {
      "est": {
        "axis": "est",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "EZLN signed regional-autonomy programme — 15 February 1996",
            "locator": "Signed pronunciamiento81–86",
            "statement": "Prescreve autonomia comunal, municipal e regional com território, economia, justiça, segurança e competências próprias, dentro da estrutura estatal.",
            "basis": "declaration",
            "publishedDate": "15 February 1996",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Redistribuição explícita de competências econômicas, jurisdicionais e de segurança configura ordem territorial descentralizada, não só delegação administrativa.",
        "uncertainty": "Pacto federal e financiamento público permanecem; não prescreve secessão nem soberania regional ilimitada. Direção moderada reconhece responsabilidades e normas compartilhadas do Estado.",
        "relatedQuestionIds": [
          "estrutura_05",
          "estrutura_06",
          "estrutura_11",
          "estrutura_13",
          "estrutura_17"
        ],
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "rep": {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "EZLN Third Declaration — 1 January 1995",
            "locator": "II, transition government: current75–76, all national/regional/local political forces and general national elections",
            "statement": "Defende participação das forças políticas nacionais, regionais e locais e novas eleições gerais nacionais.",
            "basis": "declaration",
            "publishedDate": "1 January 1995",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "EZLN Peoples Rights Law — December 1993",
            "locator": "I.a (current renderer18), II (current25), IV.a (current48); clause labels stable across renderer shifts",
            "statement": "Exige livre escolha democrática de autoridades civis e prestação pública regular de contas.",
            "basis": "declaration",
            "publishedDate": "El Despertador Mexicano No1, December 1993; archive header31December1993, original publication day not established",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "EZLN Revolutionary Armed Forces duties — December 1993",
            "locator": "II.a–c (current renderer24–27); clause labels stable across renderer shifts",
            "statement": "Proíbe pressão militar sobre eleições e interferência nos assuntos civis.",
            "basis": "declaration",
            "publishedDate": "El Despertador Mexicano No1, December 1993; archive header31December1993, original publication day not established",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "EZLN Fourth Declaration — 1 January 1996",
            "locator": "II137–140",
            "statement": "Defende novo constituinte e Constituição, plebiscito e referendo, por organização civil não partidária.",
            "basis": "declaration",
            "publishedDate": "1 January 1996",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Normas de escolha e controle popular da autoridade atravessam governo local e transformação constitucional nacional.",
        "uncertainty": "Direitos de guerra excluem inimigos da revolução; movimento não concorre a cargos, sem implicar rejeição da escolha civil. Não presume todas as separações de poder.",
        "relatedQuestionIds": [
          "representacao_09",
          "representacao_15"
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
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "EZLN Fourth Declaration — 1 January 1996",
            "locator": "III150",
            "statement": "Defende pátria em que coexistam todos os povos e suas línguas.",
            "basis": "declaration",
            "publishedDate": "1 January 1996",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "EZLN signed regional-autonomy programme — 15 February 1996",
            "locator": "Signed pronunciamiento84/87",
            "statement": "Defende pluralismo jurídico e florescimento de todas as culturas nacionais com matriz própria.",
            "basis": "declaration",
            "publishedDate": "15 February 1996",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Pluralidade de línguas, normas e culturas deve estruturar a ordem nacional, além de admissão migratória isolada.",
        "uncertainty": "Mantém unidade nacional; não determina fronteiras, asilo ou toda obrigação linguística comum. Não imputa respostas individuais ao questionário.",
        "relatedQuestionIds": [
          "imigracao_02",
          "imigracao_04",
          "imigracao_08"
        ],
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "con": {
        "axis": "con",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "EZLN Labour Law — December 1993",
            "locator": "II18",
            "statement": "Submete aumentos salariais a comissão local de preços e salários com trabalhadores, empresários, comerciantes e autoridades eleitas.",
            "basis": "declaration",
            "publishedDate": "El Despertador Mexicano No1, December 1993; archive header31December1993, original publication day not established",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "EZLN Industry and Commerce Law — December 1993",
            "locator": "I15",
            "statement": "Regula preços dos produtos básicos por comissão local plural.",
            "basis": "declaration",
            "publishedDate": "El Despertador Mexicano No1, December 1993; archive header31December1993, original publication day not established",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "EZLN Urban Reform Law — December 1993",
            "locator": "II–V18–22",
            "statement": "Limita aluguéis e distribui moradia por comitês civis conforme necessidades e recursos.",
            "basis": "declaration",
            "publishedDate": "El Despertador Mexicano No1, December 1993; archive header31December1993, original publication day not established",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "EZLN Agrarian Revolutionary Law — December 1993",
            "locator": "V21/VIII26/X28–29",
            "statement": "Organiza produção agrária coletiva prioritariamente para necessidades públicas e intercâmbio regional.",
            "basis": "declaration",
            "publishedDate": "El Despertador Mexicano No1, December 1993; archive header31December1993, original publication day not established",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Regulação de trabalho, bens essenciais, moradia e produção rural atravessa alocação e investimento do programa econômico, sem direção central total.",
        "uncertainty": "Propriedade pequena, empregadores, comércio legal e serviços privados permanecem; comissão plural não equivale a planejamento nacional obrigatório.",
        "relatedQuestionIds": [
          "controle_02",
          "controle_09"
        ],
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "mor": {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "EZLN Revolutionary Women’s Law — December 1993",
            "locator": "III19/IV21/VII26",
            "statement": "Defende escolha do número de filhos e parceiro, impede casamento forçado e assegura participação democrática das mulheres.",
            "basis": "declaration",
            "publishedDate": "El Despertador Mexicano No1, December 1993; archive header31December1993, original publication day not established",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "EZLN signed regional-autonomy programme — 15 February 1996",
            "locator": "Signed pronunciamiento91–98",
            "statement": "Exige plena participação feminina em toda autonomia, recursos próprios e eliminação de discriminação constitucional.",
            "basis": "declaration",
            "publishedDate": "15 February 1996",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Autonomia familiar e reprodutiva e igualdade política/econômica das mulheres compõem várias esferas normativas, com intensidade editorial moderada.",
        "uncertainty": "Agrarian XV37 prevê centros de lazer sem bares/bordéis; não declara sua proibição geral. Não infere aborto, LGBT, eutanásia nem aprovação de toda escolha adulta; escopo limitado ao programa histórico.",
        "relatedQuestionIds": [
          "moral_18",
          "moral_13",
          "moral_16"
        ],
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      }
    },
    "rationale": "Defende autonomia regional na estrutura estatal e pluralidade de povos. Valores são âncoras editoriais, não medidas.",
    "caveats": "Cinco eixos aceitos após revisão das fontes primárias; outros sete desconhecidos. Perfil sem elegibilidade. Normas declaradas, não implementação verificada. Não incorpora Sexta Declaração de 2005. Original preservado como alternativa e snapshot completo. Direitos de guerra e restrições tradicionais impedem leitura universalmente libertária."
  },
  {
    "id": "ideology-program-anarcho-syndicalism-iwa-2022",
    "kind": "ideology",
    "category": "ideology",
    "name": "Anarcossindicalismo: programa da AIT/IWA, 2022",
    "period": "Estatutos aprovados 9–10 dezembro 2022; página atualizada 10 fevereiro 2023",
    "sources": [
      {
        "title": "Statutes — International Workers Association, Congress 2022 / webpage 2023",
        "url": "https://www.iwa-ait.org/content/statutes",
        "note": "Documento organizacional primário, aprovado no XXVIII Congresso de 9–10 dezembro 2022; atualização da página 10 fevereiro 2023. Introdução, princípios e organização efetivamente lidos; não atribuído inalterado à fundação de 1922."
      }
    ],
    "vec": {
      "est": 80,
      "rep": 50,
      "pod": 50,
      "imi": 50,
      "dip": 40,
      "int": 50,
      "eco": 80,
      "con": 80,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "est": "medium",
      "dip": "medium",
      "eco": "medium",
      "con": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Statutes — International Workers Association, Congress 2022 / webpage 2023"
        ],
        "rationale": "O programa inteiro de autoridade social afirma federalismo e rejeita centralismo. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Federalismo anarquista, não competências constitucionais de estados atuais. Acordo de produção e defesa conjunta limitam a autonomia irrestrita."
      },
      "dip": {
        "sourceTitles": [
          "Statutes — International Workers Association, Congress 2022 / webpage 2023"
        ],
        "rationale": "Oposição geral a guerra e exércitos permanentes com exceção defensiva expressa. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não é pacifismo absoluto: milícias, força defensiva e ajuda a revoluções permanecem. Não imputa posição sobre armas nucleares ou tribunais internacionais."
      },
      "eco": {
        "sourceTitles": [
          "Statutes — International Workers Association, Congress 2022 / webpage 2023"
        ],
        "rationale": "Controle produtivo comum no sistema inteiro, em vez de proprietários privados. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Propriedade/administração social não equivale a título estatal. Não determina bens pessoais, herança doméstica ou eficiência observada."
      },
      "con": {
        "sourceTitles": [
          "Statutes — International Workers Association, Congress 2022 / webpage 2023"
        ],
        "rationale": "Planejamento comunitário integral substitui coordenação produtiva por proprietários privados. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Plano descentralizado e acordado, sem comando estatal central. Não imputa congelamento de preços, impostos ou política monetária específica."
      }
    },
    "coding": {
      "est": {
        "axis": "est",
        "position": "strong-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Statutes — International Workers Association, Congress 2022 / webpage 2023",
            "locator": "II.2–4; actual webpage 29–36",
            "statement": "Conselhos livres sem subordinação a autoridade ou partido; cada unidade produtiva é autônoma numa organização social federal de baixo para cima.",
            "basis": "declaration",
            "publishedDate": "Congress 9–10 December 2022; webpage updated 10 February 2023",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "O programa inteiro de autoridade social afirma federalismo e rejeita centralismo.",
        "uncertainty": "Federalismo anarquista, não competências constitucionais de estados atuais. Acordo de produção e defesa conjunta limitam a autonomia irrestrita.",
        "relatedQuestionIds": [
          "estrutura_01",
          "estrutura_15"
        ],
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      },
      "dip": {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Statutes — International Workers Association, Congress 2022 / webpage 2023",
            "locator": "II.7 and II.10; actual webpage 40–48",
            "statement": "Combate militarismo e guerra, substitui exércitos permanentes por milícias operárias e admite defesa da revolução contra violência adversária.",
            "basis": "declaration",
            "publishedDate": "Congress 9–10 December 2022; webpage updated 10 February 2023",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Oposição geral a guerra e exércitos permanentes com exceção defensiva expressa.",
        "uncertainty": "Não é pacifismo absoluto: milícias, força defensiva e ajuda a revoluções permanecem. Não imputa posição sobre armas nucleares ou tribunais internacionais.",
        "relatedQuestionIds": [
          "diplomacia_04",
          "diplomacia_18"
        ],
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "eco": {
        "axis": "eco",
        "position": "strong-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Statutes — International Workers Association, Congress 2022 / webpage 2023",
            "locator": "I paragraph on land/factories; II.1–3; actual webpage 23/27–33",
            "statement": "Trabalhadores tomam e administram conjuntamente terra e fábricas; reorganização de toda produção e distribuição comunitária elimina monopólio de propriedade.",
            "basis": "declaration",
            "publishedDate": "Congress 9–10 December 2022; webpage updated 10 February 2023",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Controle produtivo comum no sistema inteiro, em vez de proprietários privados.",
        "uncertainty": "Propriedade/administração social não equivale a título estatal. Não determina bens pessoais, herança doméstica ou eficiência observada.",
        "relatedQuestionIds": [
          "economia_01",
          "economia_05"
        ],
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      },
      "con": {
        "axis": "con",
        "position": "strong-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Statutes — International Workers Association, Congress 2022 / webpage 2023",
            "locator": "II.3; actual webpage 32–33",
            "statement": "Cada ramo ou fábrica autônoma organiza produção e distribuição segundo interesses comunitários, plano acordado e consentimento mútuo.",
            "basis": "declaration",
            "publishedDate": "Congress 9–10 December 2022; webpage updated 10 February 2023",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Planejamento comunitário integral substitui coordenação produtiva por proprietários privados.",
        "uncertainty": "Plano descentralizado e acordado, sem comando estatal central. Não imputa congelamento de preços, impostos ou política monetária específica.",
        "relatedQuestionIds": [
          "controle_02",
          "controle_13"
        ],
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      }
    },
    "rationale": "Programa afirmativo de autoridade social federal e produção comum; exemplar datado preserva a antiga identidade genérica sem atribuição temporal indevida.",
    "caveats": "Quatro eixos documentados inicialmente. Representação e poder civil aguardam avaliação de amplitude: organização interna sindical não prova sufrágio universal, direitos da oposição ou salvaguardas processuais da sociedade futura. Demais eixos desconhecidos, sem pontuação inventada para atingir elegibilidade."
  }
];
export const native16IdeologiesCodings: Record<string, ReferenceAxisCoding[]> = {
  "ideology-program-zapatista-autonomy-ezln-1993-1996": [
    {
      "axis": "est",
      "position": "moderate-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "EZLN signed regional-autonomy programme — 15 February 1996",
          "locator": "Signed pronunciamiento 81–86",
          "statement": "Prescreve autonomia comunal, municipal e regional com território, economia, justiça, segurança e competências próprias, dentro da estrutura estatal.",
          "basis": "declaration",
          "publishedDate": "15 February 1996",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "Redistribuição explícita de competências econômicas, jurisdicionais e de segurança configura ordem territorial descentralizada, não só delegação administrativa.",
      "uncertainty": "Pacto federal e financiamento público permanecem; não prescreve secessão nem soberania regional ilimitada. Direção moderada reconhece responsabilidades e normas compartilhadas do Estado.",
      "relatedQuestionIds": [
        "estrutura_05",
        "estrutura_06",
        "estrutura_11",
        "estrutura_13",
        "estrutura_17"
      ],
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "rep",
      "position": "moderate-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "EZLN Third Declaration — 1 January 1995",
          "locator": "II, transition government: current 75–76, all national/regional/local political forces and general national elections",
          "statement": "Defende participação das forças políticas nacionais, regionais e locais e novas eleições gerais nacionais.",
          "basis": "declaration",
          "publishedDate": "1 January 1995",
          "accessedDate": "2026-10-08"
        },
        {
          "sourceTitle": "EZLN Peoples Rights Law — December 1993",
          "locator": "I.a (current renderer 18), II (current 25), IV.a (current 48); clause labels stable across renderer shifts",
          "statement": "Exige livre escolha democrática de autoridades civis e prestação pública regular de contas.",
          "basis": "declaration",
          "publishedDate": "El Despertador Mexicano No 1, December 1993; archive header 31 December 1993, original publication day not established",
          "accessedDate": "2026-10-08"
        },
        {
          "sourceTitle": "EZLN Revolutionary Armed Forces duties — December 1993",
          "locator": "II.a–c (current renderer 24–27); clause labels stable across renderer shifts",
          "statement": "Proíbe pressão militar sobre eleições e interferência nos assuntos civis.",
          "basis": "declaration",
          "publishedDate": "El Despertador Mexicano No 1, December 1993; archive header 31 December 1993, original publication day not established",
          "accessedDate": "2026-10-08"
        },
        {
          "sourceTitle": "EZLN Fourth Declaration — 1 January 1996",
          "locator": "II 137–140",
          "statement": "Defende novo constituinte e Constituição, plebiscito e referendo, por organização civil não partidária.",
          "basis": "declaration",
          "publishedDate": "1 January 1996",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "Normas de escolha e controle popular da autoridade atravessam governo local e transformação constitucional nacional.",
      "uncertainty": "Direitos de guerra excluem inimigos da revolução; movimento não concorre a cargos, sem implicar rejeição da escolha civil. Não presume todas as separações de poder. A remissão provisória de 1995 ao original 1917 inclui Art 130 sem voto clerical e com restrições à imprensa política e agrupamentos confessionais; não se presume harmonização integral dessas restrições com inclusão política declarada.",
      "relatedQuestionIds": [
        "representacao_09",
        "representacao_15"
      ],
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "imi",
      "position": "moderate-second",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "EZLN Fourth Declaration — 1 January 1996",
          "locator": "III 150",
          "statement": "Defende pátria em que coexistam todos os povos e suas línguas.",
          "basis": "declaration",
          "publishedDate": "1 January 1996",
          "accessedDate": "2026-10-08"
        },
        {
          "sourceTitle": "EZLN signed regional-autonomy programme — 15 February 1996",
          "locator": "Signed pronunciamiento 84/87",
          "statement": "Defende pluralismo jurídico e florescimento de todas as culturas nacionais com matriz própria.",
          "basis": "declaration",
          "publishedDate": "15 February 1996",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "Pluralidade de línguas, normas e culturas deve estruturar a ordem nacional, além de admissão migratória isolada.",
      "uncertainty": "Mantém unidade nacional; não determina fronteiras, asilo ou toda obrigação linguística comum. Não imputa respostas individuais ao questionário. O original 1917 provisoriamente incorporado (Arts 11/32/33) restringe estrangeiros, prevê preferência nacional e expulsão sem julgamento prévio; pluralismo indígena não equivale a abertura migratória.",
      "relatedQuestionIds": [
        "imigracao_02",
        "imigracao_04",
        "imigracao_08"
      ],
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "con",
      "position": "moderate-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "EZLN Labour Law — December 1993",
          "locator": "II 18",
          "statement": "Submete aumentos salariais a comissão local de preços e salários com trabalhadores, empresários, comerciantes e autoridades eleitas.",
          "basis": "declaration",
          "publishedDate": "El Despertador Mexicano No 1, December 1993; archive header 31 December 1993, original publication day not established",
          "accessedDate": "2026-10-08"
        },
        {
          "sourceTitle": "EZLN Industry and Commerce Law — December 1993",
          "locator": "I 15",
          "statement": "Regula preços dos produtos básicos por comissão local plural.",
          "basis": "declaration",
          "publishedDate": "El Despertador Mexicano No 1, December 1993; archive header 31 December 1993, original publication day not established",
          "accessedDate": "2026-10-08"
        },
        {
          "sourceTitle": "EZLN Urban Reform Law — December 1993",
          "locator": "II–V 18–22",
          "statement": "Limita aluguéis e distribui moradia por comitês civis conforme necessidades e recursos.",
          "basis": "declaration",
          "publishedDate": "El Despertador Mexicano No 1, December 1993; archive header 31 December 1993, original publication day not established",
          "accessedDate": "2026-10-08"
        },
        {
          "sourceTitle": "EZLN Agrarian Revolutionary Law — December 1993",
          "locator": "V 21/VIII 26/X 28–29",
          "statement": "Organiza produção agrária coletiva prioritariamente para necessidades públicas e intercâmbio regional.",
          "basis": "declaration",
          "publishedDate": "El Despertador Mexicano No 1, December 1993; archive header 31 December 1993, original publication day not established",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "Regulação de trabalho, bens essenciais, moradia e produção rural atravessa alocação e investimento do programa econômico, sem direção central total.",
      "uncertainty": "Propriedade pequena, empregadores, comércio legal e serviços privados permanecem; comissão plural não equivale a planejamento nacional obrigatório. Art 28 do original 1917 incorporado exige concorrência e reprime acordos anticompetitivos; não se infere economia inteiramente administrada.",
      "relatedQuestionIds": [
        "controle_02",
        "controle_09"
      ],
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "mor",
      "position": "moderate-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "EZLN Revolutionary Women’s Law — December 1993",
          "locator": "III 19/IV 21/VII 26",
          "statement": "Defende escolha do número de filhos e parceiro, impede casamento forçado e assegura participação democrática das mulheres.",
          "basis": "declaration",
          "publishedDate": "El Despertador Mexicano No 1, December 1993; archive header 31 December 1993, original publication day not established",
          "accessedDate": "2026-10-08"
        },
        {
          "sourceTitle": "EZLN signed regional-autonomy programme — 15 February 1996",
          "locator": "Signed pronunciamiento 91–98",
          "statement": "Exige plena participação feminina em toda autonomia, recursos próprios e eliminação de discriminação constitucional.",
          "basis": "declaration",
          "publishedDate": "15 February 1996",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "Autonomia familiar e reprodutiva e igualdade política/econômica das mulheres compõem várias esferas normativas, com intensidade editorial moderada.",
      "uncertainty": "Agrarian XV 37 prevê centros de lazer sem bares/bordéis; não declara sua proibição geral. Não infere aborto, LGBT, eutanásia nem aprovação de toda escolha adulta; escopo limitado ao programa histórico.",
      "relatedQuestionIds": [
        "moral_18",
        "moral_13",
        "moral_16"
      ],
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "eco",
      "position": "moderate-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "EZLN Agrarian Revolutionary Law — December 1993",
          "locator": "Arts III–VII, XI e XIV; original dezembro 1993",
          "statement": "Redistribui excedentes e grandes empresas agrárias em propriedade e administração coletivas, com ativos produtivos; preserva pequenos proprietários e declara águas coletivas.",
          "basis": "declaration",
          "publishedDate": "1993-12; El Despertador Mexicano, No. 1; arquivo usa 31/12/1993, dia original não estabelecido",
          "accessedDate": "2026-10-08"
        },
        {
          "sourceTitle": "EZLN Industry and Commerce Law — December 1993",
          "locator": "Art IV; original dezembro 1993",
          "statement": "Estabelecimentos que fechem para retirar equipamento passam à administração operária, com máquinas pertencentes à nação.",
          "basis": "declaration",
          "publishedDate": "1993-12; El Despertador Mexicano, No. 1; arquivo usa 31/12/1993, dia original não estabelecido",
          "accessedDate": "2026-10-08"
        },
        {
          "sourceTitle": "EZLN Third Declaration — 1 January 1995",
          "locator": "II, inciso Segundo",
          "statement": "Adota provisoriamente o original constitucional de 1917 com leis revolucionárias e autonomia incorporadas, até novo constituinte.",
          "basis": "declaration",
          "publishedDate": "1995-01-01; corpo assinado apenas México, enero de 1995; dia consta do cabeçalho do arquivo",
          "accessedDate": "2026-10-08"
        },
        {
          "sourceTitle": "Constitución Política de los Estados Unidos Mexicanos que reforma la de 5 de febrero del 1857 — texto original, Diario Oficial 5 de febrero de 1917, edición de la Cámara de Diputados",
          "locator": "Arts 27 e 28; PDF pp 2–3; original 5/2/1917, incorporado provisoriamente pela Terceira Declaração 1995",
          "statement": "Prevê domínio nacional de recursos, propriedade privada e concessões; excetua moeda, correios e telégrafos da vedação a monopólios, prevê banco federalmente controlado e exige concorrência nas demais áreas.",
          "basis": "declaration",
          "publishedDate": "1917-02-05; data da transcrição digital da Câmara não informada",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "Transferência de terras e ativos, controle industrial condicional e regime nacional de recursos formam orientação coletiva/pública em várias áreas, sem socialização integral.",
      "uncertainty": "Propriedade comum não é título estatal. Pequenos proprietários, empregadores, concessões e comércio permanecem; hospitais privados custeados pelo empregador não se tornam públicos. Original 1917 é remissão provisória/adaptada de 1995, não prática nem texto vigente consolidado. Não se presume resolução definitiva das tensões documentais.",
      "reviewedOn": "2026-10-08",
      "relatedQuestionIds": [
        "economia_03",
        "economia_05"
      ]
    },
    {
      "axis": "rel",
      "position": "moderate-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "EZLN Third Declaration — 1 January 1995",
          "locator": "II, inciso Segundo; chamada inicial e inciso Terceiro",
          "statement": "Adota provisoriamente o original de 1917 e inclui no movimento participantes de distintos credos, inclusive religiosos.",
          "basis": "declaration",
          "publishedDate": "1995-01-01; corpo assinado apenas México, enero de 1995; dia consta do cabeçalho do arquivo",
          "accessedDate": "2026-10-08"
        },
        {
          "sourceTitle": "Constitución Política de los Estados Unidos Mexicanos que reforma la de 5 de febrero del 1857 — texto original, Diario Oficial 5 de febrero de 1917, edición de la Cámara de Diputados",
          "locator": "Arts 3,24,130; PDF pp 1–2/11–12; original 5/2/1917, incorporado provisoriamente em 1995",
          "statement": "Prescreve ensino laico e estado civil secular, impede religião estabelecida e restringe direitos políticos clericais; admite culto sob vigilância.",
          "basis": "declaration",
          "publishedDate": "1917-02-05; data da transcrição digital da Câmara não informada",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "A remissão normativa expressa alcança educação, estado civil e autoridade religiosa pública, sustentando direção secular moderada.",
      "uncertainty": "Validade declarada em 1995 é provisória e incorpora leis/autonomia; não certifica execução, versão consolidada ou harmonização integral. Inclusão de religiosos e pluralismo permanecem. Art 130 retira voto e associação política clerical, limita periódicos confessionais e grupos políticos religiosos; vigilância e limites ao culto não são liberdade religiosa irrestrita. Não se infere hostilidade à fé privada.",
      "reviewedOn": "2026-10-08",
      "relatedQuestionIds": [
        "religiao_03",
        "religiao_08",
        "religiao_14"
      ]
    }
  ],
  "ideology-program-anarcho-syndicalism-iwa-2022": [
    {
      "axis": "est",
      "position": "strong-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Statutes — International Workers Association, Congress 2022 / webpage 2023",
          "locator": "II.2–4; actual webpage 29–36",
          "statement": "Conselhos livres sem subordinação a autoridade ou partido; cada unidade produtiva é autônoma numa organização social federal de baixo para cima.",
          "basis": "declaration",
          "publishedDate": "Congress 9–10 December 2022; webpage updated 10 February 2023",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "O programa inteiro de autoridade social afirma federalismo e rejeita centralismo.",
      "uncertainty": "Federalismo anarquista, não competências constitucionais de estados atuais. Acordo de produção e defesa conjunta limitam a autonomia irrestrita.",
      "relatedQuestionIds": [
        "estrutura_01",
        "estrutura_15"
      ],
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "dip",
      "position": "moderate-second",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Statutes — International Workers Association, Congress 2022 / webpage 2023",
          "locator": "II.7 and II.10; actual webpage 40–48",
          "statement": "Combate militarismo e guerra, substitui exércitos permanentes por milícias operárias e admite defesa da revolução contra violência adversária.",
          "basis": "declaration",
          "publishedDate": "Congress 9–10 December 2022; webpage updated 10 February 2023",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "Oposição geral a guerra e exércitos permanentes com exceção defensiva expressa.",
      "uncertainty": "Não é pacifismo absoluto: milícias, força defensiva e ajuda a revoluções permanecem. Não imputa posição sobre armas nucleares ou tribunais internacionais.",
      "relatedQuestionIds": [
        "diplomacia_04",
        "diplomacia_18"
      ],
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "eco",
      "position": "strong-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Statutes — International Workers Association, Congress 2022 / webpage 2023",
          "locator": "I paragraph on land/factories; II.1–3; actual webpage 23/27–33",
          "statement": "Trabalhadores tomam e administram conjuntamente terra e fábricas; reorganização de toda produção e distribuição comunitária elimina monopólio de propriedade.",
          "basis": "declaration",
          "publishedDate": "Congress 9–10 December 2022; webpage updated 10 February 2023",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "Controle produtivo comum no sistema inteiro, em vez de proprietários privados.",
      "uncertainty": "Propriedade/administração social não equivale a título estatal. Não determina bens pessoais, herança doméstica ou eficiência observada.",
      "relatedQuestionIds": [
        "economia_01",
        "economia_05"
      ],
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "con",
      "position": "strong-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Statutes — International Workers Association, Congress 2022 / webpage 2023",
          "locator": "II.3; actual webpage 32–33",
          "statement": "Cada ramo ou fábrica autônoma organiza produção e distribuição segundo interesses comunitários, plano acordado e consentimento mútuo.",
          "basis": "declaration",
          "publishedDate": "Congress 9–10 December 2022; webpage updated 10 February 2023",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "Planejamento comunitário integral substitui coordenação produtiva por proprietários privados.",
      "uncertainty": "Plano descentralizado e acordado, sem comando estatal central. Não imputa congelamento de preços, impostos ou política monetária específica.",
      "relatedQuestionIds": [
        "controle_02",
        "controle_13"
      ],
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "tec",
      "position": "moderate-second",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Statutes — International Workers Association, Congress 2022 / webpage 2023",
          "locator": "II.8, dois parágrafos; XI último tópico; aprovação ao final",
          "statement": "Condiciona toda produção à proteção ambiental, minimização de recursos não renováveis e alternativas renováveis; também prefere tecnologias livres na organização.",
          "basis": "declaration",
          "publishedDate": "Aprovado 2022-12-09/10; página atualizada 2023-02-10",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "Restrição ambiental abrange o sistema produtivo e a escolha de recursos, sustentando cautela ambiental moderada no construto TEC.",
      "uncertainty": "Não é rejeição geral de tecnologia nem conservação local isolada. XI aceita tecnologia livre; não declara posições sobre IA, nuclear, genes, corpo ou espaço. Alegações causais contra capitalismo não são certificadas como fatos. Não imputa respostas individuais ao questionário.",
      "reviewedOn": "2026-10-08",
      "relatedQuestionIds": [
        "tecnologia_08"
      ]
    }
  ]
};
const additionalSource: ReferenceSource = {
  "title": "Constitución Política de los Estados Unidos Mexicanos que reforma la de 5 de febrero del 1857 — texto original, Diario Oficial 5 de febrero de 1917, edición de la Cámara de Diputados",
  "url": "https://www.diputados.gob.mx/LeyesBiblio/ref/cpeum/CPEUM_orig_05feb1917.pdf",
  "note": "Transcrição oficial do original de 5/2/1917, não consolidado 1995/atual. Artigos 3/24/27/28/29/33/35/130 efetivamente abertos 8/10/2026. Ligação exclusivamente pela remissão provisória/adaptada da Terceira Declaração 1995; não prática implementada. Não alega leitura integral dos 136 artigos."
};
const reviewedCaveats: Record<string, string> = {
  "ideology-program-zapatista-autonomy-ezln-1993-1996": "Sete eixos revisados editorialmente no programa 1993–1996; cinco restantes desconhecidos. A Terceira Declaração 1995 adota expressamente o original 1917, acrescido de leis 1993/autonomia, só até novo constituinte: não é mistura silenciosa de constituições vigentes. Propriedade pequena/privada e concorrência, inclusão de religiosos, restrições clericais/estrangeiras e coerção de guerra são contrapontos ativos. Não se certifica harmonização integral, implementação ou posições posteriores 2005. Fontes e registro anterior completo preservados. Números são âncoras, não medições.",
  "ideology-program-anarcho-syndicalism-iwa-2022": "Cinco eixos revisados no texto aprovado 9–10/12/2022, página 2023; os outros sete permanecem desconhecidos e não passa a porta de seis. Não transfere votos, dados internos ou antiparlamentarismo sindical a sufrágio, oposição e direitos públicos da sociedade futura. Propriedade produtiva social/plano comunitário não são estatização/centralismo. Defesa revolucionária limita pacifismo; preferência tecnológica livre limita inferência ambiental. Sem prática certificada ou atribuição inalterada desde 1922. Registro e fonte anterior completos preservados."
};
function canonical(value: unknown): string {
  if (Array.isArray(value)) return '[' + value.map(canonical).join(',') + ']';
  if (value !== null && typeof value === 'object') return '{' + Object.entries(value).sort(([a], [b]) => a.localeCompare(b)).map(([key, item]) => JSON.stringify(key) + ':' + canonical(item)).join(',') + '}';
  return JSON.stringify(value);
}
function reviewed(entry: ReferenceEntry): ReferenceEntry {
  const result = structuredClone(entry);
  const candidates = entry.id === native16IdeologiesBefore[0].id ? [...result.sources, additionalSource] : result.sources;
  result.sources = candidates.filter((source, index) => candidates.findIndex(other => other.title === source.title && other.url === source.url) === index);
  result.vec = Object.fromEntries(Object.keys(entry.vec).map(axis => [axis, 50])) as ReferenceEntry['vec'];
  result.evidence = {}; result.axisEvidence = {}; result.coding = {};
  for (const input of native16IdeologiesCodings[entry.id]) {
    const coded = codeReferenceAxis(input, result.sources);
    result.vec[input.axis] = coded.value;
    result.evidence[input.axis] = coded.evidence;
    result.axisEvidence[input.axis] = coded.axisEvidence;
    result.coding[input.axis] = coded.coding;
  }
  result.caveats = reviewedCaveats[entry.id];
  return result;
}
export const native16IdeologiesAfter: ReferenceEntry[] = native16IdeologiesBefore.map(reviewed);
/** Reject any changed whole baseline; unknown IDs retain object identity; idempotent posts retain identity. */
export function reconcileNative16Ideologies(entry: ReferenceEntry): ReferenceEntry {
  const index = native16IdeologiesBefore.findIndex(prior => prior.id === entry.id);
  if (index < 0) return entry;
  if (canonical(entry) === canonical(native16IdeologiesAfter[index])) return entry;
  if (canonical(entry) !== canonical(native16IdeologiesBefore[index])) throw new Error('native16 ideologies whole baseline changed: ' + entry.id);
  return structuredClone(native16IdeologiesAfter[index]);
}
