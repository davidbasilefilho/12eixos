import type {ReferenceEntry,ReferenceSource} from './references';
import {codeReferenceAxis,type ReferenceAxisCoding} from '../lib/reference-coding';
export const ranking675Ideology04PreviousSnapshots=[
  {
    "id": "green-politics",
    "kind": "ideology",
    "category": "ideology",
    "name": "Política verde",
    "period": "Carta Global Greens, atualização da Coreia, 2023",
    "vec": {
      "est": 80,
      "rep": 80,
      "pod": 40,
      "imi": 20,
      "dip": 20,
      "int": 50,
      "eco": 50,
      "con": 60,
      "com": 50,
      "rel": 50,
      "mor": 80,
      "tec": 40
    },
    "rationale": "Defende democracia descentralizada, justiça social e limites ecológicos, incluindo oposição à expansão nuclear.",
    "caveats": "Não infere segurança de precaução ecológica. Comércio condicionado à sustentabilidade não define automaticamente protecionismo nacional; religião e intervenção permanecem desconhecidas. A defesa de propriedade pública da água e de acesso não mercantil a serviços essenciais não demonstra a predominância de propriedade pública na economia inteira; esse eixo permanece desconhecido. Os demais eixos herdados aguardam sua revisão integral específica.",
    "sources": [
      {
        "title": "Global Greens Charter 2023",
        "url": "https://globalgreens.org/wp-content/uploads/2023/07/GlobalGreens_Charter_2023.pdf",
        "note": "Princípios de sabedoria ecológica, justiça, democracia, não violência e diversidade."
      }
    ],
    "evidence": {
      "est": "high",
      "rep": "high",
      "pod": "medium",
      "imi": "high",
      "dip": "high",
      "con": "medium",
      "mor": "high",
      "tec": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Global Greens Charter 2023"
        ],
        "rationale": "Descentralização territorial expressamente abrangente. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Não fixa uma constituição federal única."
      },
      "rep": {
        "sourceTitles": [
          "Global Greens Charter 2023"
        ],
        "rationale": "Democracia explícita. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Programa declarado, não prática de todos os partidos ou opinião dos membros."
      },
      "pod": {
        "sourceTitles": [
          "Global Greens Charter 2023"
        ],
        "rationale": "Liberdades e limites ao poder penal. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não descreve toda política policial."
      },
      "imi": {
        "sourceTitles": [
          "Global Greens Charter 2023"
        ],
        "rationale": "Pluralidade cultural explícita. Codificação editorial strong-second: âncora 20, faixa 10–25; a fonte não mede esse número. Limites: Asilo protegido não equivale a todas as fronteiras abertas."
      },
      "dip": {
        "sourceTitles": [
          "Global Greens Charter 2023"
        ],
        "rationale": "Pacifismo programático amplo. Codificação editorial strong-second: âncora 20, faixa 10–25; a fonte não mede esse número. Limites: Organização de segurança coletiva continua prevista."
      },
      "con": {
        "sourceTitles": [
          "Global Greens Charter 2023"
        ],
        "rationale": "Coordenação pública parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não é comando central integral."
      },
      "mor": {
        "sourceTitles": [
          "Global Greens Charter 2023"
        ],
        "rationale": "Reforma social em várias pautas explícitas. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Programa declarado, não prática de todos os partidos ou opinião dos membros."
      },
      "tec": {
        "sourceTitles": [
          "Global Greens Charter 2023"
        ],
        "rationale": "Cautela tecnológica com proposições específicas. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Também promove tecnologias sustentáveis; não rejeita ciência ou toda automação."
      }
    },
    "coding": {
      "est": {
        "axis": "est",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Global Greens Charter 2023",
            "locator": "Participatory Democracy, p.6",
            "statement": "Poder local/regional; níveis superiores apenas quando essenciais.",
            "basis": "declaration",
            "publishedDate": "Atualização Coreia 2023",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Descentralização territorial expressamente abrangente.",
        "uncertainty": "Não fixa uma constituição federal única.",
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
            "sourceTitle": "Global Greens Charter 2023",
            "locator": "Participatory Democracy, p.6",
            "statement": "Voto igual, proporcionalidade, multipartidarismo e participação.",
            "basis": "declaration",
            "publishedDate": "Atualização Coreia 2023",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Democracia explícita.",
        "uncertainty": "Programa declarado, não prática de todos os partidos ou opinião dos membros.",
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
            "sourceTitle": "Global Greens Charter 2023",
            "locator": "§6.2,6.9–6.13, pp.15–16",
            "statement": "Rejeita tortura, pena capital e detenção arbitrária.",
            "basis": "declaration",
            "publishedDate": "Atualização Coreia 2023",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Liberdades e limites ao poder penal.",
        "uncertainty": "Não descreve toda política policial.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "imi": {
        "axis": "imi",
        "position": "strong-second",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Global Greens Charter 2023",
            "locator": "Respect for Diversity, p.8; §6.18, p.16",
            "statement": "Defende diversidade e direitos linguísticos minoritários.",
            "basis": "declaration",
            "publishedDate": "Atualização Coreia 2023",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Pluralidade cultural explícita.",
        "uncertainty": "Asilo protegido não equivale a todas as fronteiras abertas.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 20,
        "range": [
          10,
          25
        ]
      },
      "dip": {
        "axis": "dip",
        "position": "strong-second",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Global Greens Charter 2023",
            "locator": "Nonviolence, p.7",
            "statement": "Não violência, desarmamento e cooperação são centrais.",
            "basis": "declaration",
            "publishedDate": "Atualização Coreia 2023",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Pacifismo programático amplo.",
        "uncertainty": "Organização de segurança coletiva continua prevista.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 20,
        "range": [
          10,
          25
        ]
      },
      "con": {
        "axis": "con",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Global Greens Charter 2023",
            "locator": "§5.9–5.10,8.7, pp.14,18",
            "statement": "Regula finanças e empresas; planejamento sustentável local.",
            "basis": "declaration",
            "publishedDate": "Atualização Coreia 2023",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Coordenação pública parcial.",
        "uncertainty": "Não é comando central integral.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "mor": {
        "axis": "mor",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Global Greens Charter 2023",
            "locator": "§6.6,6.16, pp.15–16",
            "statement": "Autonomia reprodutiva, reconhecimento trans e igualdade familiar.",
            "basis": "declaration",
            "publishedDate": "Atualização Coreia 2023",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Reforma social em várias pautas explícitas.",
        "uncertainty": "Programa declarado, não prática de todos os partidos ou opinião dos membros.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      },
      "tec": {
        "axis": "tec",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Global Greens Charter 2023",
            "locator": "§3.6,7.9,7.11, pp.11,17",
            "statement": "Rejeita expansão nuclear e cultivos transgênicos; precaução científica.",
            "basis": "declaration",
            "publishedDate": "Atualização Coreia 2023",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Cautela tecnológica com proposições específicas.",
        "uncertainty": "Também promove tecnologias sustentáveis; não rejeita ciência ou toda automação.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      }
    }
  },
  {
    "id": "ideology-program-technocracy-inc-2004",
    "kind": "ideology",
    "category": "ideology",
    "name": "Tecnocracia: governo funcional continental de Technocracy Inc.",
    "period": "Programa do Study Course, edição eletrônica 1.1, 2004",
    "sources": [
      {
        "title": "Technocracy Study Course — Technocracy Inc., electronic edition 1.1, 2004",
        "url": "https://www.technate.org/pdf/Technocracy%20study%20guide.pdf",
        "note": "Documento primário organizacional; edição eletrônica 2004 identificada, preâmbulo e Lessons 22–23 efetivamente lidos. Não é Veblen 1921 nem prova de implementação ou de previsões científicas."
      }
    ],
    "vec": {
      "est": 20,
      "rep": 20,
      "pod": 60,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 80,
      "con": 80,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 60
    },
    "evidence": {
      "est": "medium",
      "rep": "medium",
      "pod": "medium",
      "eco": "medium",
      "con": "medium",
      "tec": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Technocracy Study Course — Technocracy Inc., electronic edition 1.1, 2004"
        ],
        "rationale": "Desenho integral de comando territorial central, com execução regional. Codificação editorial strong-second: âncora 20, faixa 10–25; a fonte não mede esse número. Limites: Não confundir delegação administrativa com autonomia política. Proposta, não prática."
      },
      "rep": {
        "sourceTitles": [
          "Technocracy Study Course — Technocracy Inc., electronic edition 1.1, 2004"
        ],
        "rationale": "Seleção funcional autônoma à eleição popular no governo inteiro. Codificação editorial strong-second: âncora 20, faixa 10–25; a fonte não mede esse número. Limites: Competência não prova legitimidade; veto interno preservado, nenhuma ocorrência histórica inferida."
      },
      "pod": {
        "sourceTitles": [
          "Technocracy Study Course — Technocracy Inc., electronic edition 1.1, 2004"
        ],
        "rationale": "Controle coercitivo e capacidade geral de vigilância econômica limitam privacidade. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Certificados são analógicos; não inferir interceptação digital ou ausência de todo devido processo por rejeição do júri."
      },
      "eco": {
        "sourceTitles": [
          "Technocracy Study Course — Technocracy Inc., electronic edition 1.1, 2004"
        ],
        "rationale": "Provisão coletiva de todo sistema, além de um setor. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Controle operacional comum explícito; título jurídico estatal moderno não especificado."
      },
      "con": {
        "sourceTitles": [
          "Technocracy Study Course — Technocracy Inc., electronic edition 1.1, 2004"
        ],
        "rationale": "Alocação planejada integral substitui preços/renda monetária negociáveis. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Escolha de consumo permanece dentro do orçamento. Eficiência prevista não demonstrada."
      },
      "tec": {
        "sourceTitles": [
          "Technocracy Study Course — Technocracy Inc., electronic edition 1.1, 2004"
        ],
        "rationale": "Programa tecnológico de produção e pesquisa em vários campos. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não implica aprimoramento corporal irrestrito ou IA moderna; aprovação central limita adoção."
      }
    },
    "coding": {
      "est": {
        "axis": "est",
        "position": "strong-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Technocracy Study Course — Technocracy Inc., electronic edition 1.1, 2004",
            "locator": "Lesson 22 printed pp221–224 (PDF zero-based 226–229); §22.6.2/22.7",
            "statement": "Direção continental final; regiões subordinadas e polícia única, eliminando subdivisões políticas anteriores.",
            "basis": "declaration",
            "publishedDate": "Electronic edition 1.1, Edmonton 2004; printed-edition sequence 1934–1947",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Desenho integral de comando territorial central, com execução regional.",
        "uncertainty": "Não confundir delegação administrativa com autonomia política. Proposta, não prática.",
        "relatedQuestionIds": [
          "estrutura_06",
          "estrutura_20"
        ],
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 20,
        "range": [
          10,
          25
        ]
      },
      "rep": {
        "axis": "rep",
        "position": "strong-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Technocracy Study Course — Technocracy Inc., electronic edition 1.1, 2004",
            "locator": "§22.6.2 printed pp222–223 (PDF zero-based 227–228), web 6720–6765",
            "statement": "Diretores nomeados internamente; chefe escolhido pelo próprio controle; veto/recall apenas desse corpo, sem sufrágio público.",
            "basis": "declaration",
            "publishedDate": "Electronic edition 1.1, Edmonton 2004; printed-edition sequence 1934–1947",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Seleção funcional autônoma à eleição popular no governo inteiro.",
        "uncertainty": "Competência não prova legitimidade; veto interno preservado, nenhuma ocorrência histórica inferida.",
        "relatedQuestionIds": [
          "representacao_14",
          "representacao_15"
        ],
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 20,
        "range": [
          10,
          25
        ]
      },
      "pod": {
        "axis": "pod",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Technocracy Study Course — Technocracy Inc., electronic edition 1.1, 2004",
            "locator": "Printed pp221,226,230–232; §22.6.1/22.8.5–6/22.9.1 (PDF226/231/235–237)",
            "statement": "Polícia sob disciplina militar; registro obrigatório identificado de todo consumo sob controle continental, com ampla escolha individual de produtos.",
            "basis": "declaration",
            "publishedDate": "Electronic edition 1.1, Edmonton 2004; printed-edition sequence 1934–1947",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Controle coercitivo e capacidade geral de vigilância econômica limitam privacidade.",
        "uncertainty": "Certificados são analógicos; não inferir interceptação digital ou ausência de todo devido processo por rejeição do júri.",
        "relatedQuestionIds": [
          "poder_18"
        ],
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "eco": {
        "axis": "eco",
        "position": "strong-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Technocracy Study Course — Technocracy Inc., electronic edition 1.1, 2004",
            "locator": "§22.6.2/22.9.1; printed pp223,231–232; web 6756–6765/7031–7040",
            "statement": "Recursos/equipamentos pertencem à organização; ela opera toda produção e distribuição de bens e serviços para a população.",
            "basis": "declaration",
            "publishedDate": "Electronic edition 1.1, Edmonton 2004; printed-edition sequence 1934–1947",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Provisão coletiva de todo sistema, além de um setor.",
        "uncertainty": "Controle operacional comum explícito; título jurídico estatal moderno não especificado.",
        "relatedQuestionIds": [
          "economia_01",
          "economia_20"
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
            "sourceTitle": "Technocracy Study Course — Technocracy Inc., electronic edition 1.1, 2004",
            "locator": "§§22.8–22.9.1 printed pp225–232; web 6835–6847/6887–6986",
            "statement": "Orçamento energético comum de produção/consumo; renda igual por certificados pessoais não transferíveis nem acumuláveis.",
            "basis": "declaration",
            "publishedDate": "Electronic edition 1.1, Edmonton 2004; printed-edition sequence 1934–1947",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Alocação planejada integral substitui preços/renda monetária negociáveis.",
        "uncertainty": "Escolha de consumo permanece dentro do orçamento. Eficiência prevista não demonstrada.",
        "relatedQuestionIds": [
          "controle_02",
          "controle_12",
          "controle_13"
        ],
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      },
      "tec": {
        "axis": "tec",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Technocracy Study Course — Technocracy Inc., electronic edition 1.1, 2004",
            "locator": "Printed pp220–221,232,242,247; web 6661–6682/7062–7079/7364–7374/7496–7526",
            "statement": "Pesquisa científica contínua e inovação supervisionada; automação do transporte e correio para reduzir trabalho do sistema.",
            "basis": "declaration",
            "publishedDate": "Electronic edition 1.1, Edmonton 2004; printed-edition sequence 1934–1947",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Programa tecnológico de produção e pesquisa em vários campos.",
        "uncertainty": "Não implica aprimoramento corporal irrestrito ou IA moderna; aprovação central limita adoção.",
        "relatedQuestionIds": [
          "tecnologia_02",
          "tecnologia_03"
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
    "rationale": "Propõe autoridade funcional continental e produção e distribuição comuns. Valores são âncoras editoriais, não medidas.",
    "caveats": "Exemplar único de tecnocracia para a seleção, não doutrina adicional independente de um Veblen supostamente endossado. Veblen é outro registro histórico preservado, com projeto condicional não qualificado. Não valida abundância, previsão de colapso, viabilidade ou realização do programa. Seis eixos não verificam independência de todas as tradições; religião, migração, diplomacia, nacionalismo, comércio e moral permanecem desconhecidos."
  }
] as const;
export const ranking675Ideology04Codings={
  "green-politics": [
    {
      "axis": "est",
      "position": "strong-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Global Greens — Carta atualizada na Coreia em 2023",
          "locator": "Participatory Democracy; §§1.12/8.7, pp.6/9/18 (134–158/276/628–630)",
          "statement": "Prescreve concentrar poder e responsabilidade em comunidades locais e regionais, transferindo decisões para níveis superiores apenas quando essencial.",
          "basis": "declaration",
          "publishedDate": "Atualização da Carta na Coreia, 2023",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "A descentralização das decisões políticas, econômicas e sociais constitui a ordem geral proposta.",
      "uncertainty": "Coordenação internacional e níveis superiores continuam previstos. Não exige uma única forma constitucional federal nem soberania absoluta de cada comunidade.",
      "relatedQuestionIds": [
        "estrutura_01",
        "estrutura_03",
        "estrutura_05",
        "estrutura_09",
        "estrutura_15",
        "estrutura_17"
      ],
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "rep",
      "position": "strong-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Global Greens — Carta atualizada na Coreia em 2023",
          "locator": "Participatory Democracy; §§1.6/1.8–1.11, pp.6/9 (134–158/262–275)",
          "statement": "Defende participação cidadã, voto adulto igual, representação proporcional, multipartidarismo, transparência, informação e separação de poderes.",
          "basis": "declaration",
          "publishedDate": "Atualização da Carta na Coreia, 2023",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "Regras de representação e responsabilização democrática são explícitas para todo governo.",
      "uncertainty": "Participação direta coexiste com representantes eleitos e níveis superiores. A declaração não comprova a prática dos partidos nem implica referendo final para toda lei.",
      "relatedQuestionIds": [
        "representacao_01",
        "representacao_03",
        "representacao_07",
        "representacao_11",
        "representacao_13",
        "representacao_19"
      ],
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "pod",
      "position": "moderate-second",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Global Greens — Carta atualizada na Coreia em 2023",
          "locator": "§§1.6/1.8/6.2/6.9–6.13/6.16, pp.9/15–16 (262–268/480–485/506–526/531–551)",
          "statement": "Prescreve defesa e proporcionalidade penal, liberdades universais, rejeição da tortura e pena de morte, processos justos e ausência de detenção arbitrária de solicitantes de asilo.",
          "basis": "declaration",
          "publishedDate": "Atualização da Carta na Coreia, 2023",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "Limites ao poder coercitivo e garantias individuais são compromissos gerais de justiça e direitos.",
      "uncertainty": "Responsabilidade criminal, tribunais e segurança coletiva permanecem. Não se presume ausência de policiamento, legalização de todas as drogas ou direito geral a armas.",
      "relatedQuestionIds": [
        "poder_04",
        "poder_14",
        "poder_15",
        "poder_16",
        "poder_19"
      ],
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "imi",
      "position": "strong-second",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Global Greens — Carta atualizada na Coreia em 2023",
          "locator": "Respect for Diversity; §§6.7–6.8/6.18, pp.8/15–16 (221–238/499–505/554)",
          "statement": "Prescreve sociedade multicultural, direito de minorias a desenvolver cultura, religião e idioma e autodeterminação e vida cultural dos povos indígenas.",
          "basis": "declaration",
          "publishedDate": "Atualização da Carta na Coreia, 2023",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "A pluralidade cultural e linguística é fundamento afirmativo da sociedade e dos direitos políticos.",
      "uncertainty": "Responsabilidade individual, democracia e sustentabilidade delimitam o programa. Proteção cultural e asilo não equivalem a toda fronteira irrestrita ou a soberania internacional de cada grupo.",
      "relatedQuestionIds": [
        "imigracao_01",
        "imigracao_02",
        "imigracao_06",
        "imigracao_14",
        "imigracao_20"
      ],
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "con",
      "position": "moderate-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Global Greens — Carta atualizada na Coreia em 2023",
          "locator": "Sustainability; §§5.9–5.10/8.7–8.12, pp.8/14/18–19 (210–218/453–459/628–650)",
          "statement": "Prescreve regulação financeira e empresarial, preços que incorporem danos ambientais, tributos e incentivos distributivos e planejamento local de negócios, habitação e transporte.",
          "basis": "declaration",
          "publishedDate": "Atualização da Carta na Coreia, 2023",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "A coordenação e regulação econômicas atravessam produção, finanças, território e distribuição.",
      "uncertainty": "Mercados, investimento e escolhas de consumidores continuam; não é comando central integral ou extinção de toda iniciativa privada.",
      "relatedQuestionIds": [
        "controle_01",
        "controle_02",
        "controle_04",
        "controle_06",
        "controle_13",
        "controle_20"
      ],
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "mor",
      "position": "strong-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Global Greens — Carta atualizada na Coreia em 2023",
          "locator": "Sustainability; §§6.6/6.16, pp.8/15–16 (207–209/494–498/531–551)",
          "statement": "Defende controle da fertilidade, autonomia corporal, reconhecimento trans e intersexo, relações e famílias do mesmo sexo e integração desses direitos em toda política pública.",
          "basis": "declaration",
          "publishedDate": "Atualização da Carta na Coreia, 2023",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "A autonomia de corpo, gênero, sexualidade e família forma programa social abrangente e explícito.",
      "uncertainty": "Não imputa cada lei de aborto ou prostituição. §2.9 deseja segurança econômica sem atividades consideradas danosas, incluindo pornografia e prostituição, e diversidade mantém responsabilidade.",
      "relatedQuestionIds": [
        "moral_01",
        "moral_03",
        "moral_06",
        "moral_07",
        "moral_09",
        "moral_18"
      ],
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "tec",
      "position": "moderate-second",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Global Greens — Carta atualizada na Coreia em 2023",
          "locator": "Ecological Wisdom/Sustainability; §§3.6/3.11–3.12/4.2–4.3/7.9/7.11, pp.5/7–8/11–12/17 (104–110/187–218/350/364–387/588–592)",
          "statement": "Prescreve limites ecológicos ao desenvolvimento industrial, precaução na pesquisa, eliminação da energia nuclear e proibição do cultivo comercial transgênico; promove tecnologia sustentável.",
          "basis": "declaration",
          "publishedDate": "Atualização da Carta na Coreia, 2023",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "A precaução tecnológica e a preferência por limites ecológicos atravessam energia, alimentos, pesquisa e produção.",
      "uncertainty": "Não rejeita ciência, medicina ou toda automação: pesquisa e transferência de tecnologias eficientes e energias sustentáveis são positivas. Não imputa proibição de toda engenharia genética corporal.",
      "relatedQuestionIds": [
        "tecnologia_01",
        "tecnologia_02",
        "tecnologia_05",
        "tecnologia_08",
        "tecnologia_10",
        "tecnologia_19"
      ],
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "dip",
      "position": "moderate-second",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Global Greens — Carta atualizada na Coreia em 2023",
          "locator": "Nonviolence; §§9.2/9.5–9.9, pp.7/19–20 (164–185/665–671/683–697)",
          "statement": "Prioriza não violência, cooperação, desarmamento geral e redução do comércio de armas; admite força excepcional sob mandato da ONU para impedir graves violações ou genocídio.",
          "basis": "declaration",
          "publishedDate": "Atualização da Carta na Coreia, 2023",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "A orientação geral privilegia paz e desarmamento, conservando coerção coletiva excepcional.",
      "uncertainty": "A força é permitida em último recurso e países podem não participar. Esse contraponto impede pacifismo absoluto ou inferência de ausência de toda defesa.",
      "relatedQuestionIds": [
        "diplomacia_02",
        "diplomacia_06",
        "diplomacia_10",
        "diplomacia_14",
        "diplomacia_18",
        "diplomacia_20"
      ],
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "rel",
      "position": "strong-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Global Greens — Carta atualizada na Coreia em 2023",
          "locator": "§§1.8/1.11; Respect for Diversity, pp.8–9 (221–238/267–275)",
          "statement": "Prescreve sistema jurídico secular e separação entre Estado e religião, preservando diversidade e direitos religiosos de minorias.",
          "basis": "declaration",
          "publishedDate": "Atualização da Carta na Coreia, 2023",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "Há norma institucional explícita para justiça e governo, além de tolerância cultural.",
      "uncertainty": "Liberdade e práticas religiosas permanecem. Não se mede fé pessoal nem se define cada imposto, símbolo ou feriado.",
      "relatedQuestionIds": [
        "religiao_01",
        "religiao_03",
        "religiao_08",
        "religiao_18"
      ],
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "int",
      "position": "moderate-second",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Global Greens — Carta atualizada na Coreia em 2023",
          "locator": "§9.2, p.19 (665–671)",
          "statement": "Admite intervenção pela força se for o único meio de impedir mais sofrimento e violações massivas de direitos ou genocídio, sob mandato da ONU.",
          "basis": "declaration",
          "publishedDate": "Atualização da Carta na Coreia, 2023",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "Autoriza ação externa coletiva em situações graves, não somente ajuda humanitária doméstica.",
      "uncertainty": "Prevenção deve ter falhado, autorização multilateral é necessária e cada país pode não cooperar. Não autoriza intervenção unilateral por qualquer interesse nacional.",
      "relatedQuestionIds": [
        "intervencao_05",
        "intervencao_07",
        "intervencao_09",
        "intervencao_13",
        "intervencao_17"
      ],
      "reviewedOn": "2026-10-08"
    }
  ],
  "ideology-program-technocracy-inc-2004": [
    {
      "axis": "est",
      "position": "strong-second",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Technocracy Inc. — Study Course, edição eletrônica 1.1 de 2004",
          "locator": "§§22.6.2/22.7, printed pp.222–225, PDF zero-based227–230 (6720–6730/6766–6820)",
          "statement": "Prescreve direção continental com decisão final sobre todo mecanismo social e substitui antigas fronteiras políticas por divisões regionais administrativas.",
          "basis": "declaration",
          "publishedDate": "Edição eletrônica 1.1, Edmonton, 2004; sequência editorial impressa 1934–1947",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "A autoridade territorial é centralizada no continente; regiões coordenam execução e registros.",
      "uncertainty": "Sequências funcionais e coordenação regional não equivalem a autonomia constitucional ou federal. Não se imputa implementação histórica.",
      "relatedQuestionIds": [
        "estrutura_03",
        "estrutura_04",
        "estrutura_06",
        "estrutura_20"
      ],
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "rep",
      "position": "strong-second",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Technocracy Inc. — Study Course, edição eletrônica 1.1 de 2004",
          "locator": "§22.6.2/22.10, printed pp.222–223/233 (6733–6765/7084–7088)",
          "statement": "Prescreve nomeações hierárquicas, escolha do diretor pelo próprio Controle Continental e veto ou destituição por dois terços desse corpo, rejeitando o modelo democrático.",
          "basis": "declaration",
          "publishedDate": "Edição eletrônica 1.1, Edmonton, 2004; sequência editorial impressa 1934–1947",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "A autoridade governante inteira é autoselecionada funcionalmente, sem sufrágio público.",
      "uncertainty": "Veto e destituição internos limitam o diretor; não são voto universal, oposição política ou controle popular. Não valida a alegada competência científica.",
      "relatedQuestionIds": [
        "representacao_02",
        "representacao_06",
        "representacao_08",
        "representacao_14",
        "representacao_15"
      ],
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "pod",
      "position": "moderate-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Technocracy Inc. — Study Course, edição eletrônica 1.1 de 2004",
          "locator": "§§22.6.1/22.8/22.9.1, printed pp.221/226/230–232 (6683–6710/6844–6847/7014–7040)",
          "statement": "Prescreve polícia continental sob disciplina militar e registro central obrigatório identificado de todo consumo de bens e serviços.",
          "basis": "declaration",
          "publishedDate": "Edição eletrônica 1.1, Edmonton, 2004; sequência editorial impressa 1934–1947",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "A coerção policial e a capacidade de vigilância econômica abrangem a população inteira.",
      "uncertainty": "Preserva a mais ampla escolha de consumo dentro da quota. Certificados são analógicos; rejeitar júri não demonstra ausência de todo processo e registro não prova interceptação digital.",
      "relatedQuestionIds": [
        "poder_01",
        "poder_03",
        "poder_18",
        "poder_20"
      ],
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "eco",
      "position": "strong-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Technocracy Inc. — Study Course, edição eletrônica 1.1 de 2004",
          "locator": "§§22.4/22.6.2/22.9.1, printed pp.214/223/231 (6514–6517/6763–6765/7035–7040)",
          "statement": "Prescreve uma organização comum operando todos os equipamentos e recursos continentais e produzindo e distribuindo todos os bens e serviços.",
          "basis": "declaration",
          "publishedDate": "Edição eletrônica 1.1, Edmonton, 2004; sequência editorial impressa 1934–1947",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "O controle produtivo e a provisão comuns abrangem o sistema econômico inteiro, não apenas água ou infraestrutura.",
      "uncertainty": "Não especifica um título jurídico estatal moderno nem propriedade de cada objeto pessoal. A organização não é automaticamente um Estado contemporâneo; escolha individual de consumo permanece.",
      "relatedQuestionIds": [
        "economia_01",
        "economia_08",
        "economia_09",
        "economia_15",
        "economia_20"
      ],
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "con",
      "position": "strong-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Technocracy Inc. — Study Course, edição eletrônica 1.1 de 2004",
          "locator": "§§22.8–22.9.1, printed pp.225–232 (6821–6847/6916–6996/7014–7040)",
          "statement": "Prescreve orçamento energético continental de toda produção e consumo e rendimentos iguais por certificados pessoais não transferíveis nem acumuláveis.",
          "basis": "declaration",
          "publishedDate": "Edição eletrônica 1.1, Edmonton, 2004; sequência editorial impressa 1934–1947",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "A alocação integral planejada substitui renda e preços monetários negociáveis em todo o sistema.",
      "uncertainty": "A escolha individual de consumo permanece dentro do orçamento e a produção acompanha o uso efetivo. Não valida os pressupostos de abundância ou eficiência do modelo.",
      "relatedQuestionIds": [
        "controle_01",
        "controle_02",
        "controle_09",
        "controle_12",
        "controle_13"
      ],
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "tec",
      "position": "moderate-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Technocracy Inc. — Study Course, edição eletrônica 1.1 de 2004",
          "locator": "§§22.2/22.4/22.6.1/22.10; §§23.4–23.5, printed pp.212/215/220–221/232–233/242/247 (6440–6445/6527–6534/6662–6682/7062–7088/7367–7374/7496–7526)",
          "statement": "Prescreve melhoria e automação contínuas da produção, pesquisa em física, química e biologia e adoção de processos e equipamentos novos para reduzir trabalho e desperdício.",
          "basis": "declaration",
          "publishedDate": "Edição eletrônica 1.1, Edmonton, 2004; sequência editorial impressa 1934–1947",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "A organização inteira é orientada por desenvolvimento tecnológico e pesquisa contínua em várias funções.",
      "uncertainty": "Pesquisa central aprova inovações e limites energéticos condicionam adoção. Não implica IA moderna ou aprimoramento corporal irrestrito; previsões científicas e benefícios alegados não são comprovados.",
      "relatedQuestionIds": [
        "tecnologia_01",
        "tecnologia_02",
        "tecnologia_03",
        "tecnologia_19"
      ],
      "reviewedOn": "2026-10-08"
    }
  ]
} as const;
const reviewedSources={
  "green-politics": {
    "title": "Global Greens — Carta atualizada na Coreia em 2023",
    "url": "https://globalgreens.org/wp-content/uploads/2023/07/GlobalGreens_Charter_2023.pdf",
    "note": "Carta organizacional de 2023 relida integralmente, 21 páginas, em 8 de outubro de 2026. Participação, liberdades, diversidade, separação religiosa, planejamento ecológico e segurança coletiva são propostas, não resultados observados. A autorização excepcional de força sob mandato da ONU, a opção de não participação e o incentivo a tecnologias sustentáveis permanecem como contrapontos. Propriedade pública da água não estabelece predominância na economia inteira."
  },
  "ideology-program-technocracy-inc-2004": {
    "title": "Technocracy Inc. — Study Course, edição eletrônica 1.1 de 2004",
    "url": "https://www.technate.org/pdf/Technocracy%20study%20guide.pdf",
    "note": "Metadados da edição eletrônica 1.1, Edmonton 2004, e desenho completo da Lesson 22 relidos em 8 de outubro de 2026; trechos de transporte e comunicação da Lesson 23 também lidos. São normas do programa continental organizacional, não Veblen nem comprovação de viabilidade, abundância, condicionamento humano ou previsões científicas. Controle operacional coletivo não demonstra um título jurídico estatal contemporâneo."
  }
} as const;
const reviewedCaveats:Partial<Record<string,string>>={
  "green-politics": "Carta organizacional atualizada na Coreia em 2023, não prática uniforme dos partidos. A autorização excepcional de força sob mandato da ONU e a opção de não participar limitam o pacifismo; mercados, consumidores e tecnologias sustentáveis permanecem. Água pública e serviços essenciais não demonstram predominância de propriedade pública na economia inteira. ECO e COM permanecem desconhecidos; condicionamento ambiental de acordos não determina por si uma orientação tarifária. Não valida estatísticas, causalidade ou previsões do texto."
};
function canonical(v:unknown):string{if(Array.isArray(v))return '['+v.map(canonical).join(',')+']';if(v!==null&&typeof v==='object')return '{'+Object.entries(v).sort(([a],[b])=>a.localeCompare(b)).map(([k,x])=>JSON.stringify(k)+':'+canonical(x)).join(',')+'}';return JSON.stringify(v)}
function reviewed(entry:ReferenceEntry):ReferenceEntry{
 const id=entry.id as keyof typeof ranking675Ideology04Codings;
 const sources:ReferenceSource[]=[reviewedSources[id],...entry.sources];
 const vec=Object.fromEntries(Object.keys(entry.vec).map(axis=>[axis,50])) as ReferenceEntry['vec'];
 const evidence:NonNullable<ReferenceEntry['evidence']>={};const axisEvidence:NonNullable<ReferenceEntry['axisEvidence']>={};const coding:NonNullable<ReferenceEntry['coding']>={};
 for(const input of ranking675Ideology04Codings[id]){const c=codeReferenceAxis(input as unknown as ReferenceAxisCoding,sources);vec[input.axis]=c.value;evidence[input.axis]=c.evidence;axisEvidence[input.axis]=c.axisEvidence;coding[input.axis]=c.coding;}
 return {...entry,vec,evidence,axisEvidence,coding,sources,...(reviewedCaveats[entry.id]?{caveats:reviewedCaveats[entry.id]}:{})};
}
export const ranking675Ideology04ExpectedPosts=ranking675Ideology04PreviousSnapshots.map(prior=>reviewed(prior as unknown as ReferenceEntry));
export function reconcileRanking675Ideology04(entry:ReferenceEntry):ReferenceEntry{
 const prior=ranking675Ideology04PreviousSnapshots.find(p=>p.id===entry.id);if(!prior)return entry;
 const post=ranking675Ideology04ExpectedPosts.find(p=>p.id===entry.id)!;
 if(canonical(entry)===canonical(post))return entry;
 if(canonical(entry)!==canonical(prior))throw new Error('ranking675-ideology04 changed baseline: '+entry.id);
 return reviewed(entry);
}
