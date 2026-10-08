import type { ReferenceEntry, ReferenceSource } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';

export const ranking675Country02Before: ReferenceEntry[] = [
  {
    "id": "uruguay",
    "kind": "country",
    "category": "country",
    "name": "Uruguai",
    "period": "Normas constitucionais de 1967, artigo 230 revisto em 1996, direito matrimonial revisto em 2013; narrativa FH2025 sobre 2024",
    "vec": {
      "est": 50,
      "rep": 80,
      "pod": 40,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 60,
      "com": 50,
      "rel": 80,
      "mor": 60,
      "tec": 50
    },
    "rationale": "Normas exigem controle legal da detenção e garantem liberdade religiosa, sem sustento estatal de religiões, em desenho institucional complementado por planejamento de desenvolvimento.",
    "caveats": "Planejamento inclui trabalhadores e empresas públicas e privadas; ensino gratuito não prova propriedade geral. O relato de eleições e dificuldades de justiça/prisão pertence a 2024. Fontes legais e narrativas de prática têm datas e alcances distintos. Descrição documental limitada, sem certificar toda legislação ou prática atual.",
    "sources": [
      {
        "title": "Freedom in the World — Uruguai",
        "url": "https://freedomhouse.org/country/uruguay/freedom-world/2025",
        "note": "Direitos políticos e liberdades civis."
      },
      {
        "title": "IMF Article IV Consultation — Uruguay 2024",
        "url": "https://www.elibrary.imf.org/view/journals/002/2024/215/article-A001-en.xml",
        "note": "Empresas estatais e setor público."
      },
      {
        "title": "Freedom in the World 2025 — Uruguai",
        "url": "https://freedomhouse.org/country/uruguay/freedom-world/2025",
        "note": "Prática institucional relatada na edição 2025; itens localizados e contraevidências registrados por eixo. Relatório abreviado; seu score não é convertido em vetor."
      },
      {
        "title": "Constituição uruguaia, artigo 77 — IMPO",
        "url": "https://www.impo.com.uy/bases/constitucion/1967-1967/77",
        "note": "Regra primária de sufrágio e eleições; texto atualizado indicado pelo IMPO."
      },
      {
        "title": "Constituição uruguaia, artigo 15 — IMPO",
        "url": "https://www.impo.com.uy/bases/constitucion/1967-1967/15",
        "note": "Prisão exige flagrante ou ordem judicial escrita."
      },
      {
        "title": "Constituição uruguaia, artigo 5 — IMPO",
        "url": "https://www.impo.com.uy/bases/constitucion/1967-1967/5",
        "note": "Ausência de religião sustentada pelo Estado, com direitos patrimoniais e isenções religiosas."
      },
      {
        "title": "Constituição uruguaia, artigo 71 — IMPO",
        "url": "https://www.impo.com.uy/bases/constitucion/1967-1967/71",
        "note": "Gratuidade do ensino oficial em vários níveis; garantia normativa de provisão, não estatística de cobertura."
      },
      {
        "title": "Constituição uruguaia, artigo 230 — IMPO",
        "url": "https://www.impo.com.uy/bases/constitucion/1967-1967/230",
        "note": "Redação da reforma de 08/12/1996: planejamento de desenvolvimento com participação pública e privada."
      },
      {
        "title": "Código Civil uruguaio, artigo 83 — IMPO",
        "url": "https://www.impo.com.uy/bases/codigo-civil/16603-1994/83",
        "note": "Texto do artigo 83 conforme Lei 19.075 de 03/05/2013, sobre casamento civil entre pessoas de sexo igual ou diferente."
      }
    ],
    "evidence": {
      "rep": "high",
      "pod": "medium",
      "con": "medium",
      "rel": "high",
      "mor": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constituição uruguaia, artigo 77 — IMPO",
          "Freedom in the World 2025 — Uruguai"
        ],
        "rationale": "Norma eleitoral confrontada com prática sustenta democracia forte. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Não corresponde ao score agregado de liberdade; não elimina problemas de implementação."
      },
      "pod": {
        "sourceTitles": [
          "Constituição uruguaia, artigo 15 — IMPO",
          "Freedom in the World 2025 — Uruguai"
        ],
        "rationale": "Garantias civis com limites na prática sustentam liberdade moderada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não apresenta toda a política penal, condições carcerárias ou policiamento como liberal."
      },
      "con": {
        "sourceTitles": [
          "Constituição uruguaia, artigo 230 — IMPO"
        ],
        "rationale": "Planejamento de desenvolvimento com economia plural sustenta direção moderada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não implica planejamento central integral nem mede volume de produção coordenado pelo Estado."
      },
      "rel": {
        "sourceTitles": [
          "Constituição uruguaia, artigo 5 — IMPO"
        ],
        "rationale": "A separação formal explícita sustenta secularismo institucional forte. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Crença pessoal não é codificada; isenções religiosas e patrimônio protegido permanecem."
      },
      "mor": {
        "sourceTitles": [
          "Código Civil uruguaio, artigo 83 — IMPO"
        ],
        "rationale": "Igualdade matrimonial sustenta reforma social moderada neste recorte. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Uma lei não define todas as pautas morais; não codifica consenso popular ou todas as políticas reprodutivas."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Constituição uruguaia, artigo 77 — IMPO",
            "locator": "Artigo 77",
            "statement": "Sufrágio é a base da soberania e há regras eleitorais.",
            "basis": "norm",
            "publishedDate": "1967-02-02; texto atualizado IMPO",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "Freedom in the World 2025 — Uruguai",
            "locator": "Overview; Key Developments in 2024, eleição presidencial e parlamentar",
            "statement": "Eleições pacíficas tiveram resultados aceitos e vitória presidencial da oposição.",
            "basis": "practice",
            "publishedDate": "Edição 2025",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Norma eleitoral confrontada com prática sustenta democracia forte.",
        "uncertainty": "Não corresponde ao score agregado de liberdade; não elimina problemas de implementação.",
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
            "sourceTitle": "Constituição uruguaia, artigo 15 — IMPO",
            "locator": "Artigo 15",
            "statement": "Prisão condicionada a flagrante ou ordem judicial.",
            "basis": "norm",
            "publishedDate": "1967-02-02",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "Freedom in the World 2025 — Uruguai",
            "locator": "Overview; Key Developments in 2024, imprensa e prisão",
            "statement": "Direitos civis coexistem com pressão sobre jornalistas, atrasos judiciais e problemas carcerários.",
            "basis": "practice",
            "publishedDate": "Edição 2025",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Garantias civis com limites na prática sustentam liberdade moderada.",
        "uncertainty": "Não apresenta toda a política penal, condições carcerárias ou policiamento como liberal.",
        "reviewedOn": "2026-10-07",
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
            "sourceTitle": "Constituição uruguaia, artigo 230 — IMPO",
            "locator": "Artigo 230, parágrafos sobre comissões setoriais e planos de desenvolvimento",
            "statement": "Órgão presidencial formula planos de desenvolvimento, envolvendo trabalhadores e empresas públicas e privadas.",
            "basis": "norm",
            "publishedDate": "Redação da reforma 1996-12-08",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Planejamento de desenvolvimento com economia plural sustenta direção moderada.",
        "uncertainty": "Não implica planejamento central integral nem mede volume de produção coordenado pelo Estado.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "rel": {
        "axis": "rel",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Constituição uruguaia, artigo 5 — IMPO",
            "locator": "Artigo 5",
            "statement": "Estado não sustenta religião; cultos livres têm proteção e isenções.",
            "basis": "norm",
            "publishedDate": "1967-02-02",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "A separação formal explícita sustenta secularismo institucional forte.",
        "uncertainty": "Crença pessoal não é codificada; isenções religiosas e patrimônio protegido permanecem.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      },
      "mor": {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Código Civil uruguaio, artigo 83 — IMPO",
            "locator": "Artigo 83; nota da Lei 19.075/2013",
            "statement": "Casamento civil inclui pessoas de sexo igual ou diferente.",
            "basis": "norm",
            "publishedDate": "Redação 2013-05-03",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Igualdade matrimonial sustenta reforma social moderada neste recorte.",
        "uncertainty": "Uma lei não define todas as pautas morais; não codifica consenso popular ou todas as políticas reprodutivas.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      }
    }
  },
  {
    "id": "japan",
    "kind": "country",
    "category": "country",
    "name": "Japão",
    "period": "Constituição de 1946 oferecida pela Câmara; interpretação oficial de defesa posterior a 01/07/2014; narrativa FH2025 sobre 2024; declaração MEXT consultada em 2026",
    "vec": {
      "est": 50,
      "rep": 80,
      "pod": 40,
      "imi": 50,
      "dip": 40,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 40,
      "rel": 80,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Normas oferecem garantias processuais e separação religiosa, com renúncia constitucional da guerra interpretada oficialmente dentro de limites de autodefesa.",
    "caveats": "Autodefesa coletiva limitada é contraponto à renúncia literal. Autonomia local não resolve predominância territorial; gratuidade e rede escolar setorial não descrevem propriedade geral da economia. Fontes legais e narrativas de prática têm datas e alcances distintos. Descrição documental limitada, sem certificar toda legislação ou prática atual.",
    "sources": [
      {
        "title": "Freedom in the World 2025 — Japan",
        "url": "https://freedomhouse.org/country/japan/freedom-world/2025",
        "note": "Democracia multipartidária, liberdades e questões de discriminação."
      },
      {
        "title": "Constitution of Japan — Prime Minister of Japan and His Cabinet",
        "url": "https://japan.kantei.go.jp/constitution_and_government_of_japan/constitution_e.html",
        "note": "Fonte primária para soberania popular, direitos, separação religião-Estado e Artigo 9."
      },
      {
        "title": "Freedom in the World 2025 — Japão",
        "url": "https://freedomhouse.org/country/japan/freedom-world/2025",
        "note": "Narrativa institucional de 2024 lida; pontuações agregadas e respostas numéricas não são convertidas em eixos."
      },
      {
        "title": "Constituição japonesa — Câmara dos Representantes",
        "url": "https://www.shugiin.go.jp/internet/itdb_english.nsf/html/statics/english/constitution_e.htm",
        "note": "Texto oficial efetivamente lido; a URL legada do Kantei falhou."
      },
      {
        "title": "Interpretação constitucional de defesa — Ministry of Defense",
        "url": "https://www.mod.go.jp/en/d_act/d_policy/index.html",
        "note": "Página oficial sem data editorial: interpretação do artigo 9, força mínima de autodefesa e condições de defesa coletiva; declaração governamental, não estatística de prática."
      },
      {
        "title": "MEXT — admissão em escolas públicas de ensino obrigatório",
        "url": "https://www.mext.go.jp/a_menu/shotou/clarinet/003/001.htm",
        "note": "Página oficial japonesa efetivamente lida: introdução, segundo parágrafo, descreve escolas públicas, matrícula de estrangeiros e gratuidade. Sem data editorial; inclui plano de docentes até ano fiscal 2026."
      },
      {
        "title": "MOFA — política de EPA/FTA",
        "url": "https://www.mofa.go.jp/policy/economy/fta/index.html",
        "note": "Fonte primária efetivamente aberta e passagem lida em 7/10/2026."
      }
    ],
    "evidence": {
      "rep": "high",
      "pod": "medium",
      "rel": "high",
      "dip": "medium",
      "com": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — Japão"
        ],
        "rationale": "Competição e representação efetivas sustentam a direção democrática neste recorte. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Competição eleitoral não elimina desigualdade de representação, financiamento ou déficits civis."
      },
      "pod": {
        "sourceTitles": [
          "Constituição japonesa — Câmara dos Representantes",
          "Freedom in the World 2025 — Japão"
        ],
        "rationale": "Garantias e controle judicial sustentam liberdade parcial. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não oculta 23 dias de detenção nem fabrica abrangência total a partir de dois artigos."
      },
      "rel": {
        "sourceTitles": [
          "Constituição japonesa — Câmara dos Representantes"
        ],
        "rationale": "Separação institucional explícita sustenta laicidade forte. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Não mede fé pessoal nem elimina toda controvérsia de implementação."
      },
      "dip": {
        "sourceTitles": [
          "Constituição japonesa — Câmara dos Representantes",
          "Interpretação constitucional de defesa — Ministry of Defense"
        ],
        "rationale": "Limites constitucionais e interpretação restritiva sustentam direção pacífica parcial. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Autodefesa, bases dos EUA e defesa coletiva são contraevidências; não afirma desarmamento ou pacifismo absoluto."
      },
      "com": {
        "sourceTitles": [
          "MOFA — política de EPA/FTA"
        ],
        "rationale": "Promoção explícita de redução de barreiras sustenta integração comercial parcial. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não trata todo acordo assinado como vigente, nem elimina tarifas agrícolas, reservas ou barreiras específicas; política declarada, não medição de abertura."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Freedom in the World 2025 — Japão",
            "locator": "Overview; A1–A2; B2, eleição de outubro de 2024",
            "statement": "Eleições competitivas reduziram a maioria da coalizão governante; oposição ganhou espaço.",
            "basis": "practice",
            "publishedDate": "Edição 2025; acontecimentos de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Competição e representação efetivas sustentam a direção democrática neste recorte.",
        "uncertainty": "Competição eleitoral não elimina desigualdade de representação, financiamento ou déficits civis.",
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
            "sourceTitle": "Constituição japonesa — Câmara dos Representantes",
            "locator": "Artigos 31 e 33",
            "statement": "Prisão e punição dependem de processo legal e mandado judicial.",
            "basis": "norm",
            "publishedDate": "1946-11-03; texto oferecido em 2026",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "Freedom in the World 2025 — Japão",
            "locator": "F2, detenção e caso Hakamada",
            "statement": "Detenção pré-acusação prolongada e confissões coercitivas coexistem com garantias geralmente respeitadas.",
            "basis": "practice",
            "publishedDate": "Edição 2025; acontecimentos de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Garantias e controle judicial sustentam liberdade parcial.",
        "uncertainty": "Não oculta 23 dias de detenção nem fabrica abrangência total a partir de dois artigos.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "rel": {
        "axis": "rel",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Constituição japonesa — Câmara dos Representantes",
            "locator": "Artigo 20",
            "statement": "Organizações religiosas não recebem privilégios estatais; Estado e órgãos abstêm-se de educação e atividade religiosa.",
            "basis": "norm",
            "publishedDate": "1946-11-03; texto oferecido em 2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Separação institucional explícita sustenta laicidade forte.",
        "uncertainty": "Não mede fé pessoal nem elimina toda controvérsia de implementação.",
        "reviewedOn": "2026-10-07",
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
            "sourceTitle": "Constituição japonesa — Câmara dos Representantes",
            "locator": "Artigo 9",
            "statement": "Renuncia à guerra como meio de resolver disputas internacionais.",
            "basis": "norm",
            "publishedDate": "1946-11-03; texto oferecido em 2026",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "Interpretação constitucional de defesa — Ministry of Defense",
            "locator": "The Constitution and the Right of Self-Defense; Scope of the Right of Self-Defense",
            "statement": "Interpretação permite força mínima de autodefesa, incluindo hipóteses limitadas de ataque contra aliado.",
            "basis": "declaration",
            "publishedDate": "Página sem data; inclui interpretação de 2014, consultada em 2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Limites constitucionais e interpretação restritiva sustentam direção pacífica parcial.",
        "uncertainty": "Autodefesa, bases dos EUA e defesa coletiva são contraevidências; não afirma desarmamento ou pacifismo absoluto.",
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
            "sourceTitle": "MOFA — política de EPA/FTA",
            "locator": "EPA and FTA; In Force or Signed; Under Negotiation; In Suspension",
            "statement": "Japão promove acordos de liberalização de comércio e investimento; distingue acordos assinados/vigentes, negociação e suspensão.",
            "basis": "declaration",
            "publishedDate": "2026-04-10",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Promoção explícita de redução de barreiras sustenta integração comercial parcial.",
        "uncertainty": "Não trata todo acordo assinado como vigente, nem elimina tarifas agrícolas, reservas ou barreiras específicas; política declarada, não medição de abertura.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      }
    }
  }
];

const uruguayMorSources: ReferenceSource[] = [
  {
    "title": "Lei10783 — direitos civis da mulher, IMPO",
    "url": "https://www.impo.com.uy/bases/leyes/10783-1946",
    "note": "Corpo1–22/notas e cabeçalho integralmente lidos08/10/2026. Promulg18/09/1946/public2/10/1946; IMPO oferece documento atualizado, com referência de vigência1984 e transição21, sem edição legislativa completa certificada."
  },
  {
    "title": "Constituição uruguaia — família e maternidade, arts40–42",
    "url": "https://www.impo.com.uy/bases/constitucion/1967-1967/40",
    "note": "Artigos40/41/42 integralmente lidos;41 em https://www.impo.com.uy/bases/constitucion/1967-1967/41 e42 em https://www.impo.com.uy/bases/constitucion/1967-1967/42. Páginas IMPO atualizadas indicam publicação02/02/1967. Não prática social."
  }
];
const expandedUruguayMor: ReferenceAxisCoding = {
  "axis": "mor",
  "position": "moderate-first",
  "confidence": "medium",
  "claims": [
    {
      "sourceTitle": "Código Civil uruguaio, artigo 83 — IMPO",
      "locator": "Artigo 83; nota da Lei 19.075/2013",
      "statement": "Casamento civil inclui pessoas de sexo igual ou diferente.",
      "basis": "norm",
      "publishedDate": "Redação 2013-05-03",
      "accessedDate": "2026-10-07"
    },
    {
      "sourceTitle": "Lei10783 — direitos civis da mulher, IMPO",
      "locator": "Lei10783 arts1–2/5–6/9–15/18/21",
      "statement": "Igual capacidade civil geral; mulher casada administra seus bens/atividade, ambos consentem alienação de bens comuns, ambos contribuem despesas domésticas, domicilio é acordado e autoridade parental é compartilhada; tribunais resolvem desacordos e disposições transitórias preservam certos bens anteriores.",
      "basis": "norm",
      "publishedDate": "Lei promulg1946-09-18; texto atualizado IMPO consultado2026-10-08",
      "accessedDate": "2026-10-08"
    },
    {
      "sourceTitle": "Constituição uruguaia — família e maternidade, arts40–42",
      "locator": "Constituição40–42",
      "statement": "Família é base social protegida em estabilidade moral/material; educação dos filhos é dever parental, inclusive iguais deveres com filhos fora do matrimônio; maternidade recebe proteção própria.",
      "basis": "norm",
      "publishedDate": "Publicação1967-02-02; texto atualizado IMPO",
      "accessedDate": "2026-10-08"
    }
  ],
  "rationale": "Casamento civil igualitário somado à igualdade civil geral, autonomia patrimonial feminina e decisão/responsabilidade familiar recíproca sustenta reforma moderada dos papéis familiares e de sexo.",
  "uncertainty": "Direitos normativos não provam igualdade executada nem consenso social. Família mantém proteção moral/material, educação parental e maternidade específicas; há limites de consentimento patrimonial, intervenção judicial e regime transitório de bens antigos. Não estabelece todas as políticas reprodutivas ou de costume.",
  "reviewedOn": "2026-10-08"
};
const expandedJapanPod: ReferenceAxisCoding = {
  "axis": "pod",
  "position": "moderate-second",
  "confidence": "medium",
  "claims": [
    {
      "sourceTitle": "Constituição japonesa — Câmara dos Representantes",
      "locator": "Artigos 31 e 33",
      "statement": "Prisão e punição dependem de processo legal e mandado judicial.",
      "basis": "norm",
      "publishedDate": "1946-11-03; texto oferecido em 2026",
      "accessedDate": "2026-10-07"
    },
    {
      "sourceTitle": "Freedom in the World 2025 — Japão",
      "locator": "F2, detenção e caso Hakamada",
      "statement": "Detenção pré-acusação prolongada e confissões coercitivas coexistem com garantias geralmente respeitadas.",
      "basis": "practice",
      "publishedDate": "Edição 2025; acontecimentos de 2024",
      "accessedDate": "2026-10-07"
    },
    {
      "sourceTitle": "Constituição japonesa — Câmara dos Representantes",
      "locator": "Arts12–13/19–22/31–40",
      "statement": "Norma protege consciência, expressão, associação e sigilo; prevê mandado/justificação da prisão, advogado e processo público imparcial, proíbe tortura, autoincriminação e condenação só por confissão, assegura defesa e reparação após absolvição.",
      "basis": "norm",
      "publishedDate": "1946-11-03",
      "accessedDate": "2026-10-08"
    }
  ],
  "rationale": "Garantias gerais de expressão, privacidade e processo criminal documentam proteção normativa de liberdades moderada, além da regra isolada de mandado.",
  "uncertainty": "Direitos têm limites de bem-estar público e flagrante excepciona mandado. A narrativa herdada sobre detenção até23dias e condições de justiça é contraponto de prática, não eliminado pelo texto; não certifica liberdade efetiva integral ou toda legislação contemporânea.",
  "reviewedOn": "2026-10-08"
};

const uruguayCompetitionSource: ReferenceSource = {
  "title": "Lei18159 — princípio geral de concorrência, IMPO",
  "url": "https://www.impo.com.uy/bases/leyes/18159-2007",
  "note": "Leitura direta efetiva: cabeçalho earts1–10 completos oferecidos, inclusive notas,17/21 contexto. Lei20/07/2007/public30/07; IMPO atualizado:4/4bis2019,7redação2023,9redação16/12/2025. Não versãooriginal2007integral nem aplicação econômica mensurada."
};
const correctedUruguayCon: ReferenceAxisCoding = {
  "axis": "con",
  "position": "moderate-second",
  "confidence": "medium",
  "claims": [
    {
      "sourceTitle": "Lei18159 — princípio geral de concorrência, IMPO",
      "locator": "Lei18159 arts1–3/4–4bis; contrapontos2/7/9–10 e respectivas notas2019/2023/2025",
      "statement": "Todos os mercados e todos os agentes econômicos públicos/privados devem reger-se pela livre concorrência; cartelização de preços, quantidades e mercados é proibida. Restrições por lei/interesse geral e prerrogativas legais permanecem, e concentrações podem exigir autorização/condições estatais.",
      "basis": "norm",
      "publishedDate": "Lei2007-07-20; texto atualizado IMPO:4/4bis2019-09-20,7rev2023-11-06,9rev2025-12-16",
      "accessedDate": "2026-10-08"
    },
    {
      "sourceTitle": "Constituição uruguaia, artigo 230 — IMPO",
      "locator": "Art230 integral; nota reforma1996-12-08",
      "statement": "Oficina presidencial auxilia o Executivo na formulação de planos de desenvolvimento e reúne comissões com trabalhadores/empresas; planos de descentralização aprovados aplicam-se aos organismos públicos competentes. Não estabelece submissão geral de produção/preços privados a planos.",
      "basis": "norm",
      "publishedDate": "Redação da reforma1996-12-08",
      "accessedDate": "2026-10-08"
    }
  ],
  "rationale": "Regra geral obrigatória de concorrência em todos os mercados e operadores, incluindo alocação de preços/quantidades sem concertação, sustenta direção moderada de mercado no recorte normativo, além da mera permissão de empreendimento.",
  "uncertainty": "A lei admite limites por interesse geral e prerrogativas legais; controle de concentrações, reguladores setoriais e planejamento público consultivo permanecem. Não mede qual mecanismo predomina de fato nem afirma liberalização irrestrita. A instituição de planejamento230 não prova alocação privada obrigatória. Texto legal atualizado com emendas datadas, não mesmaedição2007inteira.",
  "reviewedOn": "2026-10-08"
};

const uruguayRightsSource: ReferenceSource = {
  "title": "Constituição uruguaia — direitos gerais e processo, IMPO",
  "url": "https://www.impo.com.uy/bases/constitucion/1967-1967/7",
  "note": "Leitura direta de7/10/11/16/17/20/26 completos, cada página individual IMPO1967-1967/artigo; contraponto168(17) efetivamente lido. Páginas atualizadas indicam publicação02/02/1967. Não leitura integral do texto/legislação penal ou prática carcerária."
};
const expandedUruguayPod: ReferenceAxisCoding = {
  "axis": "pod",
  "position": "moderate-second",
  "confidence": "medium",
  "claims": [
    {
      "sourceTitle": "Constituição uruguaia, artigo 15 — IMPO",
      "locator": "Artigo 15",
      "statement": "Prisão condicionada a flagrante ou ordem judicial.",
      "basis": "norm",
      "publishedDate": "1967-02-02",
      "accessedDate": "2026-10-07"
    },
    {
      "sourceTitle": "Freedom in the World 2025 — Uruguai",
      "locator": "Overview; Key Developments in 2024, imprensa e prisão",
      "statement": "Direitos civis coexistem com pressão sobre jornalistas, atrasos judiciais e problemas carcerários.",
      "basis": "practice",
      "publishedDate": "Edição 2025",
      "accessedDate": "2026-10-07"
    },
    {
      "sourceTitle": "Constituição uruguaia — direitos gerais e processo, IMPO",
      "locator": "Arts7/10–11/16–17/20/26; contraponto168(17)",
      "statement": "Constituição protege liberdades gerais, esfera privada e domicílio; declaração judicial tem prazos e defensor, há habeas corpus, proibição de juramentos compulsórios na confissão e pena de morte. Restrições legais por interesse geral e emergência com arresto submetido ao Parlamento permanecem.",
      "basis": "norm",
      "publishedDate": "Publicação1967-02-02, texto IMPO atualizado;168redação1996-12-08",
      "accessedDate": "2026-10-08"
    }
  ],
  "rationale": "Proteção geral da esfera pessoal/privada, defesa e revisão judicial e limites a punição documentam direção normativa moderada de liberdade, além da cláusula isolada de prisão.",
  "uncertainty": "Interesse geral e direitos de terceiros limitam autonomia; emergências168permitem arrestos/transferências sob controle parlamentar. Norma não certifica condições carcerárias, policiamento, aplicação efetiva do habeas corpus ou liberdade líquida contemporânea.",
  "reviewedOn": "2026-10-08"
};

const correctedUruguayRep: ReferenceAxisCoding = {
  "axis": "rep",
  "position": "strong-first",
  "confidence": "high",
  "claims": [
    {
      "sourceTitle": "Constituição uruguaia, artigo 77 — IMPO",
      "locator": "Art77 inteiro, especialmente1–3/4–5/9/11–12; nota de redação1996",
      "statement": "Sufrágio é a base da soberania e há regras eleitorais.",
      "basis": "norm",
      "publishedDate": "Publicação1967-02-02; redação dada pela reforma1996-12-08",
      "accessedDate": "2026-10-08"
    },
    {
      "sourceTitle": "Freedom in the World 2025 — Uruguai",
      "locator": "Overview; Key Developments in 2024, eleição presidencial e parlamentar",
      "statement": "Eleições pacíficas tiveram resultados aceitos e vitória presidencial da oposição.",
      "basis": "practice",
      "publishedDate": "Edição 2025",
      "accessedDate": "2026-10-07"
    }
  ],
  "rationale": "Norma eleitoral confrontada com prática sustenta democracia forte.",
  "uncertainty": "Não corresponde ao score agregado de liberdade; não elimina problemas de implementação. A norma atualizada assegura liberdade partidária e representação proporcional, com abstenção política obrigatória de certas autoridades e militares salvo voto; não transforma norma em execução.",
  "reviewedOn": "2026-10-08"
};
const correctedUruguayRel: ReferenceAxisCoding = {
  "axis": "rel",
  "position": "strong-first",
  "confidence": "high",
  "claims": [
    {
      "sourceTitle": "Constituição uruguaia, artigo 5 — IMPO",
      "locator": "Artigo 5",
      "statement": "Estado não sustenta religião e cultos são livres; reconhece domínio católico sobre templos construídos total/parcialmente com fundos públicos, exceto capelas de instituições públicas, e isenta de impostos templos de diversas religiões.",
      "basis": "norm",
      "publishedDate": "1967-02-02",
      "accessedDate": "2026-10-08"
    }
  ],
  "rationale": "A separação formal explícita sustenta secularismo institucional forte.",
  "uncertainty": "Crença pessoal não é codificada. Domínio católico sobre templos construídos total/parcialmente pelo Erário, excetuadas capelas de instituições públicas, e isenções de impostos para templos de diversos cultos são acomodações materiais específicas, não ausência total de relação estatal religiosa.",
  "reviewedOn": "2026-10-08"
};

const proposals = [
  {
    "id": "japan",
    "sources": [],
    "coding": {
      "axis": "mor",
      "position": "moderate-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Constituição japonesa — Câmara dos Representantes",
          "locator": "Carta1946 arts14/24/44; contrapontos2/12–13 e24, primeiro parágrafo",
          "statement": "A norma exige igualdade dos sexos em relações sociais, políticas e econômicas e coloca consentimento matrimonial, propriedade, herança, domicílio, divórcio e demais assuntos familiares sob dignidade individual e igualdade essencial dos sexos. Casamento é formulado em termos de ambos os sexos, sem concluir reconhecimento de uniões do mesmo sexo.",
          "basis": "norm",
          "publishedDate": "1946-11-03",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "Igualdade social e familiar, escolha conjugal e regulação de toda a esfera familiar pela dignidade individual sustentam reforma moderada de papéis de sexo no recorte constitucional, além de mera elegibilidade pública.",
      "uncertainty": "Casamento constitucional é referido a marido/esposa e ambos os sexos; sucessão imperial é dinástica e direitos têm limites de bem-estar público. Não afirma casamento igualitário, aborto, igualdade executada ou política familiar2026; apenas norma1946 oferecida pela Câmara.",
      "reviewedOn": "2026-10-08"
    },
    "periodAppend": "; igualdade social e familiar no texto constitucional1946,arts14/24/44",
    "caveatAppend": "A orientação moral adicional descreve igualdade dos sexos e dignidade na norma familiar1946; não certifica execução atual, uniões do mesmo sexo ou toda pauta moral."
  },
  {
    "id": "uruguay",
    "sources": [
      {
        "title": "Constituição uruguaia — solução pacífica e guerra, artigos6/168",
        "url": "https://www.impo.com.uy/bases/constitucion/1967-1967/6",
        "note": "Artigo6 completo efetivamente lido; contrapontos/complemento168(1–2/16–17) em https://www.impo.com.uy/bases/constitucion/1967-1967/168. IMPO indica publicação02/02/1967, texto atualizado; redação168 dada por reforma08/12/1996. Não prática militar ou leitura integral de toda a Constituição."
      }
    ],
    "coding": {
      "axis": "dip",
      "position": "moderate-second",
      "confidence": "high",
      "claims": [
        {
          "sourceTitle": "Constituição uruguaia — solução pacífica e guerra, artigos6/168",
          "locator": "Art6 primeiro parágrafo;168(1–2/16–17); nota168 reforma08/12/1996",
          "statement": "A República deve propor solução de diferenças por arbitragem ou outros meios pacíficos nos tratados. O Executivo só pode declarar guerra após resolução da Assembleia e fracasso de meios pacíficos. Mantém comando das forças armadas, segurança externa e medidas emergenciais.",
          "basis": "norm",
          "publishedDate": "Art6 publicação1967-02-02, texto atualizado; Art168 reforma1996-12-08",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "Obrigação de propor resolução pacífica e condicionar guerra ao fracasso de arbitragem/outros meios estabelece preferência formal geral por evitar emprego bélico, em direção pacífica moderada.",
      "uncertainty": "Não proíbe guerra nem elimina forças armadas: defesa e emergência continuam autorizadas. A proposta de cláusula não prova aceitação por todo parceiro. Norma constitucional atualizada com168revisto1996, sem demonstrar prática operacional, orçamento ou todos os conflitos contemporâneos.",
      "reviewedOn": "2026-10-08"
    },
    "periodAppend": "; norma eleitoral77 rev1996 e solução pacífica/guerra nos arts6/168 em texto IMPO atualizado,168revisto1996",
    "caveatAppend": "A orientação diplomático-militar adicional é normativa e admite guerra autorizada após fracasso de meios pacíficos, forças armadas e emergência; não mede prática militar."
  }
] as const;

/** Pending whole-profile independent review; no import is authorized by this module. */
export function extendRanking675Country02(entries: ReferenceEntry[]): ReferenceEntry[] {
 return entries.map(entry => {
  const previous=ranking675Country02Before.find(item=>item.id===entry.id);
  if(!previous || JSON.stringify(previous)!==JSON.stringify(entry))return entry;
  const row=proposals.find(item=>item.id===entry.id)!;
  const sources:ReferenceSource[]=[...entry.sources,...row.sources,...(entry.id==='uruguay'?[...uruguayMorSources,uruguayCompetitionSource,uruguayRightsSource]:[])];
  const encoded=codeReferenceAxis({...row.coding,claims:[...row.coding.claims]} as ReferenceAxisCoding,sources);
  const axis=row.coding.axis;
  const additionalAxis=entry.id==='uruguay'?'mor':'pod';
  const additional=codeReferenceAxis(entry.id==='uruguay'?expandedUruguayMor:expandedJapanPod,sources);
  const conEncoded=entry.id==='uruguay'?codeReferenceAxis(correctedUruguayCon,sources):undefined;
  const podEncoded=entry.id==='uruguay'?codeReferenceAxis(expandedUruguayPod,sources):undefined;
  const repEncoded=entry.id==='uruguay'?codeReferenceAxis(correctedUruguayRep,sources):undefined;
  const relEncoded=entry.id==='uruguay'?codeReferenceAxis(correctedUruguayRel,sources):undefined;
  return {...entry,sources,period:entry.period+row.periodAppend+(entry.id==='uruguay'?'; igualdade civil-familiar na Lei10783de1946 e concorrência geral na Lei18159de2007 em texto IMPO atualizado, com emendas2019/2023/2025':'; garantias constitucionais de expressão/privacidade/processo,arts19–22/31–40'),caveats:entry.caveats+' '+row.caveatAppend+' '+additional.coding.uncertainty+(conEncoded?' '+conEncoded.coding.uncertainty:'')+(podEncoded?' '+podEncoded.coding.uncertainty:'')+(relEncoded?' '+relEncoded.coding.uncertainty:''),
   vec:{...entry.vec,[axis]:encoded.value,[additionalAxis]:additional.value,...(conEncoded?{con:conEncoded.value}:{}),...(podEncoded?{pod:podEncoded.value}:{}),...(repEncoded?{rep:repEncoded.value}:{}),...(relEncoded?{rel:relEncoded.value}:{})},evidence:{...entry.evidence,[axis]:encoded.evidence,[additionalAxis]:additional.evidence,...(conEncoded?{con:conEncoded.evidence}:{}),...(podEncoded?{pod:podEncoded.evidence}:{}),...(repEncoded?{rep:repEncoded.evidence}:{}),...(relEncoded?{rel:relEncoded.evidence}:{})},axisEvidence:{...entry.axisEvidence,[axis]:encoded.axisEvidence,[additionalAxis]:additional.axisEvidence,...(conEncoded?{con:conEncoded.axisEvidence}:{}),...(podEncoded?{pod:podEncoded.axisEvidence}:{}),...(repEncoded?{rep:repEncoded.axisEvidence}:{}),...(relEncoded?{rel:relEncoded.axisEvidence}:{})},coding:{...entry.coding,[axis]:encoded.coding,[additionalAxis]:additional.coding,...(conEncoded?{con:conEncoded.coding}:{}),...(podEncoded?{pod:podEncoded.coding}:{}),...(repEncoded?{rep:repEncoded.coding}:{}),...(relEncoded?{rel:relEncoded.coding}:{})}};
 });
}
