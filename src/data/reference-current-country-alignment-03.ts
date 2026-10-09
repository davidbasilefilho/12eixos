import type {ReferenceEntry} from './references';
export const currentCountryAlignment03Before=[
  {
    "id": "uruguay",
    "kind": "country",
    "category": "country",
    "name": "Uruguai",
    "period": "Instituições e prática relatada, 2024–2025; revisão documental em 07/10/2026",
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
    "rationale": "Democracia, garantias civis, ensino público, planejamento plural, separação religiosa e igualdade matrimonial são descritos por normas localizadas e prática institucional.",
    "caveats": "Recorte 2024–2025; normas antigas continuam explicitamente datadas. Não atribui instituições aos habitantes. Comércio permanece desconhecido: artigo 50 protege produção/substituição de importações, enquanto acordos podem promover abertura; não se deduz uma tarifa geral dessa tensão. Revisão de escopo econômico em 7/10/2026: provisão/propriedade setorial permanece arquivada como pesquisa delimitada; orientação econômica nacional desconhecida, sem evidência de ranqueamento em eco.",
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
    "id": "denmark",
    "kind": "country",
    "category": "country",
    "name": "Dinamarca",
    "period": "Instituições e prática relatada, 2024–2025; revisão documental em 07/10/2026",
    "vec": {
      "est": 50,
      "rep": 80,
      "pod": 40,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 40,
      "rel": 40,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Recorte de democracia, liberdades limitadas por problemas concretos, provisão social pública, comércio europeu e igreja estabelecida com pluralismo.",
    "caveats": "Objeto institucional de 2024–2025; cópia constitucional antiga explicitamente datada. Federalismo, imigração, defesa, intervenção, planejamento, moral e tecnologia ficam desconhecidos. Assistência e educação públicas não demonstram propriedade estatal dominante. Revisão de escopo econômico em 7/10/2026: provisão/propriedade setorial permanece arquivada como pesquisa delimitada; orientação econômica nacional desconhecida, sem evidência de ranqueamento em eco.",
    "sources": [
      {
        "title": "Freedom in the World — Dinamarca",
        "url": "https://freedomhouse.org/country/denmark/freedom-world/2025",
        "note": "Democracia e liberdades."
      },
      {
        "title": "OECD Government at a Glance 2025",
        "url": "https://www.oecd.org/en/publications/government-at-a-glance-2025_0efd0bcd-en.html",
        "note": "Papel do governo e gasto público."
      },
      {
        "title": "Freedom in the World 2025 — Dinamarca",
        "url": "https://freedomhouse.org/country/denmark/freedom-world/2025",
        "note": "Prática institucional relatada na edição 2025; itens localizados e contraevidências registrados por eixo. Relatório abreviado; seu score não é convertido em vetor."
      },
      {
        "title": "TFUE — versão consolidada de 2016, EUR-Lex",
        "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:12016E/TXT",
        "note": "Texto primário: regras da união aduaneira e política comercial; não mede barreiras efetivamente aplicadas em cada setor."
      },
      {
        "title": "Constituição dinamarquesa — texto primário de 1953, acervo University of Minnesota",
        "url": "https://hrlibrary.umn.edu/research/denmark-constitution.html",
        "note": "Documento primário reproduzido; status editorial de 1992, arquivo fechado em 2023. Não representa atualização integral de todos os atos e sucessão dinástica de 2009; usada somente nas cláusulas localizadas."
      }
    ],
    "evidence": {
      "rep": "high",
      "pod": "medium",
      "com": "medium",
      "rel": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constituição dinamarquesa — texto primário de 1953, acervo University of Minnesota",
          "Freedom in the World 2025 — Dinamarca"
        ],
        "rationale": "Representação parlamentar e prática eleitoral sustentam direção democrática forte. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: A monarquia constitucional não elimina eleição e responsabilidade ministerial."
      },
      "pod": {
        "sourceTitles": [
          "Constituição dinamarquesa — texto primário de 1953, acervo University of Minnesota",
          "Freedom in the World 2025 — Dinamarca"
        ],
        "rationale": "Liberdades protegidas com déficits concretos sustentam direção moderada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Contraevidências sobre deportações, vigilância e coerção impedem um extremo libertário."
      },
      "com": {
        "sourceTitles": [
          "TFUE — versão consolidada de 2016, EUR-Lex"
        ],
        "rationale": "Abertura comercial regulada no quadro da UE sustenta direção moderada de livre comércio. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não equivale a ausência de tarifas; são regras comuns, não preferências da população nem medição nacional de comércio. Groenlândia possui regime territorial próprio."
      },
      "rel": {
        "sourceTitles": [
          "Constituição dinamarquesa — texto primário de 1953, acervo University of Minnesota"
        ],
        "rationale": "Estabelecimento religioso com pluralismo sustenta papel público religioso moderado. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não é teocracia nem crença atribuída aos habitantes; substitui a antiga direção secular forte sem medir religiosidade."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Constituição dinamarquesa — texto primário de 1953, acervo University of Minnesota",
            "locator": "Seções 15 e 29–31",
            "statement": "Governo responsável ao Parlamento e eleições diretas.",
            "basis": "norm",
            "publishedDate": "1953-06-05; edição 1992",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "Freedom in the World 2025 — Dinamarca",
            "locator": "Overview",
            "statement": "Democracia com eleições regulares livres e justas é descrita.",
            "basis": "practice",
            "publishedDate": "Edição 2025",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Representação parlamentar e prática eleitoral sustentam direção democrática forte.",
        "uncertainty": "A monarquia constitucional não elimina eleição e responsabilidade ministerial.",
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
            "sourceTitle": "Constituição dinamarquesa — texto primário de 1953, acervo University of Minnesota",
            "locator": "Seções 71 e 77–79",
            "statement": "Proteção da liberdade, publicação, associação e reunião.",
            "basis": "norm",
            "publishedDate": "1953-06-05; edição 1992",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "Freedom in the World 2025 — Dinamarca",
            "locator": "Overview; Key Developments in 2024, deportações, dados sociais e deficiência",
            "statement": "Expressão, associação e Judiciário independente coexistem com violações na deportação, privacidade e coerção.",
            "basis": "practice",
            "publishedDate": "Edição 2025",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Liberdades protegidas com déficits concretos sustentam direção moderada.",
        "uncertainty": "Contraevidências sobre deportações, vigilância e coerção impedem um extremo libertário.",
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
      "rel": {
        "axis": "rel",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constituição dinamarquesa — texto primário de 1953, acervo University of Minnesota",
            "locator": "Seções 4, 6 e 67–70",
            "statement": "Igreja luterana estabelecida e apoiada pelo Estado, com liberdade de culto e direitos civis.",
            "basis": "norm",
            "publishedDate": "1953-06-05; edição 1992",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Estabelecimento religioso com pluralismo sustenta papel público religioso moderado.",
        "uncertainty": "Não é teocracia nem crença atribuída aos habitantes; substitui a antiga direção secular forte sem medir religiosidade.",
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
    "id": "germany",
    "kind": "country",
    "category": "country",
    "name": "Alemanha",
    "period": "Instituições e prática relatada, 2024–2025; revisão documental em 07/10/2026",
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
    "rationale": "Recorte institucional de federalismo, competição eleitoral, garantias civis, comércio europeu e reforma documental de identidade de gênero; codificação ordinal, sem medição de opinião nacional.",
    "caveats": "Objeto: normas e prática institucional relatada em 2025. Religião, defesa, intervenção, cultura, propriedade, planejamento e tecnologia permanecem desconhecidos neste lote. A Constituição não prova execução e o relatório é abreviado.",
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
  },
  {
    "id": "new-zealand",
    "kind": "country",
    "category": "country",
    "name": "Nova Zelândia",
    "period": "Instituições e prática relatada, 2024–2025; revisão documental em 07/10/2026",
    "vec": {
      "est": 50,
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
    "rationale": "Competição parlamentar, garantias civis com reservas, liberalização comercial e reconhecimento de uniões civis sustentam apenas quatro posições moderadas ou fortes deste lote.",
    "caveats": "Prática relatada na edição 2025 e acordo comercial vigente desde 2024; páginas oficiais sem data são identificadas. O título literal de Key Developments do relatório diz 2025, embora a narrativa remeta à coalizão eleita em 2023; não corrigimos sua cronologia silenciosamente. Não deduz federalismo da soberania parlamentar nem assimilação de uma política linguística. Tecnologia, religião, propriedade, planejamento e política militar/externa permanecem desconhecidos.",
    "sources": [
      {
        "title": "Freedom in the World — Nova Zelândia",
        "url": "https://freedomhouse.org/country/new-zealand/freedom-world/2025",
        "note": "Direitos políticos e liberdades."
      },
      {
        "title": "OECD Government at a Glance 2025",
        "url": "https://www.oecd.org/en/publications/government-at-a-glance-2025_0efd0bcd-en.html",
        "note": "Indicadores do setor público."
      },
      {
        "title": "Freedom in the World 2025 — Nova Zelândia",
        "url": "https://freedomhouse.org/country/new-zealand/freedom-world/2025",
        "note": "Prática institucional relatada na edição 2025; itens localizados e contraevidências registrados por eixo. Relatório abreviado; seu score não é convertido em vetor."
      },
      {
        "title": "Constituição da Nova Zelândia — Governor-General",
        "url": "https://gg.govt.nz/office-governor-general/roles-and-functions-governor-general/constitutional-role/constitution",
        "note": "Descrição oficial da Constituição de 1986 e instituições; página sem data de publicação informada."
      },
      {
        "title": "ICCPR e reservas da Nova Zelândia — Ministry of Justice",
        "url": "https://www.justice.govt.nz/justice-sector-policy/constitutional-issues-and-human-rights/human-rights/international-human-rights/international-covenant-on-civil-and-political-rights/",
        "note": "Atualização 24/04/2024: reservas e crítica da ONU ao sufrágio de presos; evita apresentar garantias como absolutas."
      },
      {
        "title": "Acordo NZ–UE, capítulo 2 — MFAT",
        "url": "https://www.mfat.govt.nz/assets/Trade-agreements/EU-NZ-FTA/Chapters/2.-National-Treatment-and-Market-Access-for-Goods.pdf",
        "note": "Texto primário do acordo assinado em 09/07/2023, vigente desde 01/05/2024; capítulo 2, 22 páginas."
      },
      {
        "title": "Uniões civis — New Zealand Government",
        "url": "https://www.govt.nz/browse/family-and-whanau/getting-married/",
        "note": "Guia oficial sobre uniões civis sob Civil Union Act 2004; página sem publicação datada. Não substitui uma versão histórica do Marriage Act."
      }
    ],
    "evidence": {
      "rep": "high",
      "pod": "medium",
      "com": "medium",
      "mor": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Constituição da Nova Zelândia — Governor-General",
          "Freedom in the World 2025 — Nova Zelândia",
          "ICCPR e reservas da Nova Zelândia — Ministry of Justice"
        ],
        "rationale": "Instituições e prática sustentam democracia forte com contraevidência específica. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Não é democracia sem exclusões; crítica ao sufrágio de presos foi preservada."
      },
      "pod": {
        "sourceTitles": [
          "Freedom in the World 2025 — Nova Zelândia",
          "ICCPR e reservas da Nova Zelândia — Ministry of Justice"
        ],
        "rationale": "Liberdades institucionais com reservas explícitas sustentam liberdade moderada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não ignora exceções em prisões e compensação por erro judicial; relatório abreviado limita detalhe."
      },
      "com": {
        "sourceTitles": [
          "Acordo NZ–UE, capítulo 2 — MFAT"
        ],
        "rationale": "Redução vinculante de barreiras sustenta abertura comercial moderada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Acordo bilateral não demonstra liberalização universal nem ausência de proteção em cada setor."
      },
      "mor": {
        "sourceTitles": [
          "Uniões civis — New Zealand Government"
        ],
        "rationale": "Reconhecimento de uniões civis independentemente do gênero sustenta reforma social parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não converte uma política em progressismo universal; fonte atual não prova toda a prática histórica e déficits indígenas são relevantes."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Constituição da Nova Zelândia — Governor-General",
            "locator": "The Constitution Act 1986; The role of political parties",
            "statement": "Executivo depende do Parlamento eleito e confiança partidária.",
            "basis": "declaration",
            "publishedDate": "Página sem data; Constituição de 1986 descrita",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "Freedom in the World 2025 — Nova Zelândia",
            "locator": "Overview",
            "statement": "Democracia parlamentar com histórico de eleições livres e justas é descrita.",
            "basis": "practice",
            "publishedDate": "Edição 2025",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "ICCPR e reservas da Nova Zelândia — Ministry of Justice",
            "locator": "Monitoring: Committee Decision, 2023",
            "statement": "Decisão da ONU aponta violação do sufrágio de presos.",
            "basis": "practice",
            "publishedDate": "2024-04-24",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Instituições e prática sustentam democracia forte com contraevidência específica.",
        "uncertainty": "Não é democracia sem exclusões; crítica ao sufrágio de presos foi preservada.",
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
            "sourceTitle": "Freedom in the World 2025 — Nova Zelândia",
            "locator": "Overview",
            "statement": "Garantias de direitos políticos e liberdades civis coexistem com discriminação de minorias.",
            "basis": "practice",
            "publishedDate": "Edição 2025",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "ICCPR e reservas da Nova Zelândia — Ministry of Justice",
            "locator": "Reservas aos artigos 10, 14(6), 20 e 22 do ICCPR",
            "statement": "Governo registra exceções relativas a detenção, compensação e outras garantias.",
            "basis": "declaration",
            "publishedDate": "2024-04-24",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Liberdades institucionais com reservas explícitas sustentam liberdade moderada.",
        "uncertainty": "Não ignora exceções em prisões e compensação por erro judicial; relatório abreviado limita detalhe.",
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
            "sourceTitle": "Acordo NZ–UE, capítulo 2 — MFAT",
            "locator": "Artigos 2.1, 2.5 e 2.11; pp. 2-1, 2-3–2-4, 2-8",
            "statement": "Acordo prevê liberalização recíproca, cronograma tarifário e regras com exceções.",
            "basis": "norm",
            "publishedDate": "Assinado 2023-07-09; vigência 2024-05-01",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Redução vinculante de barreiras sustenta abertura comercial moderada.",
        "uncertainty": "Acordo bilateral não demonstra liberalização universal nem ausência de proteção em cada setor.",
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
            "sourceTitle": "Uniões civis — New Zealand Government",
            "locator": "Civil unions",
            "statement": "União civil formaliza relação independentemente do gênero.",
            "basis": "declaration",
            "publishedDate": "Página sem data; referência a Civil Union Act 2004",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Reconhecimento de uniões civis independentemente do gênero sustenta reforma social parcial.",
        "uncertainty": "Não converte uma política em progressismo universal; fonte atual não prova toda a prática histórica e déficits indígenas são relevantes.",
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
    "id": "united-states",
    "kind": "country",
    "category": "country",
    "name": "Estados Unidos",
    "period": "Prática institucional em 2024; Constituição e emendas de 1791 no texto oferecido pelo Senado em 2026; Página atualizada em 2026-06-02",
    "vec": {
      "est": 80,
      "rep": 80,
      "pod": 40,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 80,
      "mor": 60,
      "tec": 50
    },
    "rationale": "Federalismo, competição eleitoral, limites à coerção, não estabelecimento religioso e igualdade matrimonial são documentados separadamente.",
    "caveats": "Recorte institucional, sem imputar opinião aos habitantes. Propriedade, planejamento, comércio, defesa, intervenção, cultura e tecnologia permanecem desconhecidos nesta revisão; não se infere estrutura produtiva da simples proteção jurídica de propriedade. Recorte de saúde dos veteranos; não implica sistema universal, predominância pública nacional ou inexistência de prestadores privados. Revisão de escopo econômico em 7/10/2026: provisão/propriedade setorial permanece arquivada como pesquisa delimitada; orientação econômica nacional desconhecida, sem evidência de ranqueamento em eco.",
    "sources": [
      {
        "title": "Freedom in the World — Estados Unidos",
        "url": "https://freedomhouse.org/country/united-states/freedom-world/2025",
        "note": "Democracia e liberdades em 2024."
      },
      {
        "title": "Constituição dos Estados Unidos",
        "url": "https://www.senate.gov/about/origins-foundations/senate-and-constitution/constitution.htm",
        "note": "Base institucional do federalismo."
      },
      {
        "title": "Freedom in the World 2025 — Estados Unidos",
        "url": "https://freedomhouse.org/country/united-states/freedom-world/2025",
        "note": "Narrativa institucional de 2024 lida; pontuações agregadas e respostas numéricas não são convertidas em eixos."
      },
      {
        "title": "Constituição dos Estados Unidos — Senado, texto oferecido em 2026",
        "url": "https://www.senate.gov/about/origins-foundations/senate-and-constitution/constitution.htm",
        "note": "Texto integral lido, incluindo 27 emendas; as cláusulas de 1791 e o recorte de prática de 2024 são datados separadamente."
      },
      {
        "title": "VA — Veterans Health Administration, provisão direta",
        "url": "https://department.va.gov/vha/about-us/",
        "note": "Fonte primária efetivamente aberta e passagem lida em 7/10/2026."
      }
    ],
    "evidence": {
      "est": "high",
      "rep": "high",
      "pod": "medium",
      "rel": "high",
      "mor": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Constituição dos Estados Unidos — Senado, texto oferecido em 2026"
        ],
        "rationale": "Competências territoriais constitucionalmente reservadas sustentam federalismo forte. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Supremacia federal e competências nacionais permanecem; não é soberania estadual irrestrita."
      },
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — Estados Unidos"
        ],
        "rationale": "Competição e representação efetivas sustentam a direção democrática neste recorte. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Competição eleitoral não elimina desigualdade de representação, financiamento ou déficits civis."
      },
      "pod": {
        "sourceTitles": [
          "Constituição dos Estados Unidos — Senado, texto oferecido em 2026",
          "Freedom in the World 2025 — Estados Unidos"
        ],
        "rationale": "Garantias contra coerção sustentam liberdade parcial com déficits de execução. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não descreve todas as políticas de vigilância, armas ou polícia; limitações não são apagadas pela norma."
      },
      "rel": {
        "sourceTitles": [
          "Constituição dos Estados Unidos — Senado, texto oferecido em 2026",
          "Freedom in the World 2025 — Estados Unidos"
        ],
        "rationale": "Regra constitutiva de não estabelecimento sustenta separação religiosa forte. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Exceções e financiamento educacional são contraevidência; não mede religiosidade pessoal."
      },
      "mor": {
        "sourceTitles": [
          "Freedom in the World 2025 — Estados Unidos"
        ],
        "rationale": "Igualdade matrimonial sustenta direção reformista parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Aborto e direitos trans não são presumidos progressistas; o construto é coberto parcialmente."
      }
    },
    "coding": {
      "est": {
        "axis": "est",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Constituição dos Estados Unidos — Senado, texto oferecido em 2026",
            "locator": "Artigo I, seção 8; Emenda X",
            "statement": "Poderes nacionais enumerados; poderes não delegados são reservados aos estados ou ao povo.",
            "basis": "norm",
            "publishedDate": "1787; Emenda X, 1791",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Competências territoriais constitucionalmente reservadas sustentam federalismo forte.",
        "uncertainty": "Supremacia federal e competências nacionais permanecem; não é soberania estadual irrestrita.",
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
            "sourceTitle": "Freedom in the World 2025 — Estados Unidos",
            "locator": "A1–A3; B2, narrativa de eleições de 2024",
            "statement": "Eleições competitivas tiveram resultados aceitos e vitória da oposição; distritos manipulados e exclusões limitam representação.",
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
            "sourceTitle": "Constituição dos Estados Unidos — Senado, texto oferecido em 2026",
            "locator": "Emendas IV–V",
            "statement": "Busca exige causa provável; liberdade depende de devido processo.",
            "basis": "norm",
            "publishedDate": "1791",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "Freedom in the World 2025 — Estados Unidos",
            "locator": "F3, força policial e prisões",
            "statement": "Abusos policiais, impunidade e condições prisionais limitam garantias.",
            "basis": "practice",
            "publishedDate": "Edição 2025; acontecimentos de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Garantias contra coerção sustentam liberdade parcial com déficits de execução.",
        "uncertainty": "Não descreve todas as políticas de vigilância, armas ou polícia; limitações não são apagadas pela norma.",
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
            "sourceTitle": "Constituição dos Estados Unidos — Senado, texto oferecido em 2026",
            "locator": "Emenda I",
            "statement": "Proíbe estabelecimento religioso e protege exercício da religião.",
            "basis": "norm",
            "publishedDate": "1791",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "Freedom in the World 2025 — Estados Unidos",
            "locator": "D2, narrativa sobre religião e financiamento escolar",
            "statement": "Proibição de endosso oficial coexiste com decisões que ampliam financiamento de escolas religiosas.",
            "basis": "practice",
            "publishedDate": "Edição 2025; acontecimentos de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Regra constitutiva de não estabelecimento sustenta separação religiosa forte.",
        "uncertainty": "Exceções e financiamento educacional são contraevidência; não mede religiosidade pessoal.",
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
            "sourceTitle": "Freedom in the World 2025 — Estados Unidos",
            "locator": "G3, casamento, aborto e cuidados trans",
            "statement": "Casamento entre pessoas do mesmo sexo é nacionalmente reconhecido; aborto e cuidados trans sofrem restrições estaduais.",
            "basis": "practice",
            "publishedDate": "Edição 2025; acontecimentos de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Igualdade matrimonial sustenta direção reformista parcial.",
        "uncertainty": "Aborto e direitos trans não são presumidos progressistas; o construto é coberto parcialmente.",
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
    "id": "brazil",
    "kind": "country",
    "category": "country",
    "name": "Brasil",
    "period": "Prática institucional em 2024; norma constitucional no texto consolidado que inclui emendas até 2025, consultado em 07/10/2026",
    "vec": {
      "est": 80,
      "rep": 80,
      "pod": 40,
      "imi": 50,
      "dip": 40,
      "int": 50,
      "eco": 50,
      "con": 60,
      "com": 50,
      "rel": 80,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Federalismo, eleições, garantias com déficits, saúde pública plural, planejamento indicativo, não estabelecimento e preferência diplomática têm evidência localizada.",
    "caveats": "Perfil institucional sem imputação aos habitantes. Cultura, intervenção, comércio, costumes e tecnologia ficam desconhecidos. Fonte constitucional contém redações históricas riscadas; somente os trechos ativos indicados foram usados. Revisão de escopo econômico em 7/10/2026: provisão/propriedade setorial permanece arquivada como pesquisa delimitada; orientação econômica nacional desconhecida, sem evidência de ranqueamento em eco.",
    "sources": [
      {
        "title": "Freedom in the World 2025 — Brazil",
        "url": "https://freedomhouse.org/country/brazil/freedom-world/2025",
        "note": "Eleições competitivas, pluralismo, liberdades, violência política e limites institucionais."
      },
      {
        "title": "Constituição da República Federativa do Brasil",
        "url": "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm",
        "note": "Fonte primária para federação, regime democrático, direitos sociais e laicidade estatal."
      },
      {
        "title": "Freedom in the World 2025 — Brasil",
        "url": "https://freedomhouse.org/country/brazil/freedom-world/2025",
        "note": "Narrativa institucional de 2024 lida; pontuações agregadas e respostas numéricas não são convertidas em eixos."
      },
      {
        "title": "Constituição brasileira — Planalto, texto consolidado consultado em 2026",
        "url": "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm",
        "note": "Texto primário integral; incorpora redações vigentes e versões riscadas, distinguídas na leitura. Extração apresenta caracteres acentuados corrompidos."
      }
    ],
    "evidence": {
      "est": "high",
      "rep": "high",
      "pod": "medium",
      "con": "medium",
      "rel": "high",
      "dip": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Constituição brasileira — Planalto, texto consolidado consultado em 2026"
        ],
        "rationale": "Autonomia territorial e competências próprias sustentam federalismo. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Há competências federais exclusivas e supremacia constitucional; não é autonomia irrestrita."
      },
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — Brasil"
        ],
        "rationale": "Competição e representação efetivas sustentam a direção democrática neste recorte. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Competição eleitoral não elimina desigualdade de representação, financiamento ou déficits civis."
      },
      "pod": {
        "sourceTitles": [
          "Constituição brasileira — Planalto, texto consolidado consultado em 2026",
          "Freedom in the World 2025 — Brasil"
        ],
        "rationale": "Salvaguardas constitucionais gerais de processo e controle judicial da coerção sustentam direção libertária moderada no desenho normativo; não representam saldo medido das liberdades praticadas em2024. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Norma não demonstra cumprimento. FH2025 relata acesso desigual à defesa, ausência de devido processo em grande parte das mortes policiais, impunidade e prisões degradadas. Exceção constitucional de prisão por transgressão/crime militar permanece; não se conclui orientação líquida da prática policial ou prisional."
      },
      "con": {
        "sourceTitles": [
          "Constituição brasileira — Planalto, texto consolidado consultado em 2026"
        ],
        "rationale": "Coordenação econômica estatal com setor privado autônomo sustenta planejamento parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não é comando central integral nem medida de volume efetivamente planejado."
      },
      "rel": {
        "sourceTitles": [
          "Constituição brasileira — Planalto, texto consolidado consultado em 2026"
        ],
        "rationale": "Não estabelecimento explícito sustenta separação institucional. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Exceção de cooperação e execução religiosa não são apagadas; não mede crenças dos brasileiros."
      },
      "dip": {
        "sourceTitles": [
          "Constituição brasileira — Planalto, texto consolidado consultado em 2026"
        ],
        "rationale": "Preferência normativa por paz e solução diplomática sustenta direção pacífica parcial. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Princípio formal não demonstra ausência de força armada nem política efetiva em cada conflito."
      }
    },
    "coding": {
      "est": {
        "axis": "est",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Constituição brasileira — Planalto, texto consolidado consultado em 2026",
            "locator": "Artigos 18 e 25",
            "statement": "União, estados, Distrito Federal e municípios são autônomos; estados possuem competências reservadas.",
            "basis": "norm",
            "publishedDate": "Texto consolidado consultado em 2026, com emendas de 2025",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Autonomia territorial e competências próprias sustentam federalismo.",
        "uncertainty": "Há competências federais exclusivas e supremacia constitucional; não é autonomia irrestrita.",
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
            "sourceTitle": "Freedom in the World 2025 — Brasil",
            "locator": "Overview; A1–A3; B1, eleições e pluralismo",
            "statement": "Eleições competitivas e pluralismo coexistem com violência política e tentativa de ruptura institucional.",
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
            "sourceTitle": "Constituição brasileira — Planalto, texto consolidado consultado em 2026",
            "locator": "Artigo 5, LIV–LVI e LXI–LXV",
            "statement": "Devido processo, defesa, prisão judicial ou flagrante e relaxamento de prisão ilegal são garantidos.",
            "basis": "norm",
            "publishedDate": "Texto consolidado consultado em 2026",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "Freedom in the World 2025 — Brasil",
            "locator": "F2–F3, narrativa de processo penal e polícia",
            "statement": "Acesso desigual à defesa, abusos policiais e prisões degradadas limitam garantias.",
            "basis": "practice",
            "publishedDate": "Edição 2025; acontecimentos de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Salvaguardas constitucionais gerais de processo e controle judicial da coerção sustentam direção libertária moderada no desenho normativo; não representam saldo medido das liberdades praticadas em2024.",
        "uncertainty": "Norma não demonstra cumprimento. FH2025 relata acesso desigual à defesa, ausência de devido processo em grande parte das mortes policiais, impunidade e prisões degradadas. Exceção constitucional de prisão por transgressão/crime militar permanece; não se conclui orientação líquida da prática policial ou prisional.",
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
            "sourceTitle": "Constituição brasileira — Planalto, texto consolidado consultado em 2026",
            "locator": "Artigo 174 e §1",
            "statement": "Planejamento é obrigatório para setor público e indicativo para privado, com planos nacionais e regionais.",
            "basis": "norm",
            "publishedDate": "1988; texto consolidado consultado em 2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Coordenação econômica estatal com setor privado autônomo sustenta planejamento parcial.",
        "uncertainty": "Não é comando central integral nem medida de volume efetivamente planejado.",
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
            "sourceTitle": "Constituição brasileira — Planalto, texto consolidado consultado em 2026",
            "locator": "Artigo 19, I",
            "statement": "Proíbe estabelecimento e subsídio de cultos e dependência ou aliança, ressalvada colaboração de interesse público.",
            "basis": "norm",
            "publishedDate": "1988; texto consolidado consultado em 2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Não estabelecimento explícito sustenta separação institucional.",
        "uncertainty": "Exceção de cooperação e execução religiosa não são apagadas; não mede crenças dos brasileiros.",
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
            "sourceTitle": "Constituição brasileira — Planalto, texto consolidado consultado em 2026",
            "locator": "Artigo 4, IV e VI–VII",
            "statement": "Princípios externos incluem não intervenção, defesa da paz e solução pacífica de conflitos.",
            "basis": "norm",
            "publishedDate": "1988; texto consolidado consultado em 2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Preferência normativa por paz e solução diplomática sustenta direção pacífica parcial.",
        "uncertainty": "Princípio formal não demonstra ausência de força armada nem política efetiva em cada conflito.",
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
    "id": "japan",
    "kind": "country",
    "category": "country",
    "name": "Japão",
    "period": "Prática institucional em 2024; Constituição de 1946 oferecida pela Câmara em 2026 e interpretação oficial de defesa posterior à decisão de 01/07/2014; provisão escolar pública declarada pelo MEXT em página sem data consultada em 2026; 2026-04-10",
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
    "rationale": "Eleição competitiva, garantias processuais limitadas, educação gratuita, separação religiosa e limites de defesa sustentam cinco eixos.",
    "caveats": "Local autonomy, artigos 92–95, não resolve predominância de competências territoriais: est permanece desconhecido. Planejamento, propriedade geral, comércio, cultura, intervenção, costumes e tecnologia ficam desconhecidos; não se deduz tecnocracia de capacidade tecnológica. Não trata todo acordo assinado como vigente, nem elimina tarifas agrícolas, reservas ou barreiras específicas; política declarada, não medição de abertura. Revisão de escopo econômico em 7/10/2026: provisão/propriedade setorial permanece arquivada como pesquisa delimitada; orientação econômica nacional desconhecida, sem evidência de ranqueamento em eco.",
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
  },
  {
    "id": "india",
    "kind": "country",
    "category": "country",
    "name": "Índia",
    "period": "Prática institucional em 2024, exceto Caxemira administrada pela Índia; norma constitucional em 01/05/2024 e mandato NITI consultado em 2026",
    "vec": {
      "est": 60,
      "rep": 60,
      "pod": 60,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 60,
      "com": 50,
      "rel": 60,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Competências estaduais limitadas, competição sob restrições, coerção, educação pública, não estabelecimento parcial e coordenação estratégica têm suportes distintos.",
    "caveats": "FH exclui Caxemira administrada pela Índia; não estender sua prática ao território excluído. Norma datada de 2024 e mandato consultado em 2026 são camadas distintas. Cultura, defesa, intervenção, comércio, costumes e tecnologia permanecem desconhecidos.",
    "sources": [
      {
        "title": "Freedom in the World 2025 — India",
        "url": "https://freedomhouse.org/country/india/freedom-world/2025",
        "note": "Eleições, federalismo, restrições cívicas, tratamento de minorias e liberdades."
      },
      {
        "title": "The Constitution of India — Legislative Department",
        "url": "https://legislative.gov.in/constitution-of-india/",
        "note": "Fonte primária para a república, federação, direitos fundamentais e caráter secular constitucional."
      },
      {
        "title": "Freedom in the World 2025 — Índia",
        "url": "https://freedomhouse.org/country/india/freedom-world/2025",
        "note": "Narrativa institucional de 2024 lida; pontuações agregadas e respostas numéricas não são convertidas em eixos."
      },
      {
        "title": "Constituição da Índia — edição oficial em 01/05/2024",
        "url": "https://cdnbbsr.s3waas.gov.in/s380537a945c7aaa788ccfcdf1b99b5d8f/uploads/2024/07/20240716890312078.pdf",
        "note": "PDF oficial de 402 páginas, atualizado até a 106ª emenda de 2023; não apresentado como consolidação de 2026."
      },
      {
        "title": "NITI Aayog — Objectives and Features",
        "url": "https://www.niti.gov.in/about-us/objectives-and-features",
        "note": "Página primária sem data editorial: mandato de estratégias econômicas, planos locais, coordenação setorial e monitoramento; consulta 07/10/2026."
      },
      {
        "title": "Kendriya Vidyalayas — Ministry of Education / PIB, 06/12/2024",
        "url": "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2081686&lang=2&reg=48",
        "note": "Corpo primário datado efetivamente lido:1256KVs funcionais e rede CentralSchools criada como unidade ministerial. Aprovação de85novas para2025–26 não é execução contada."
      },
      {
        "title": "Reimbursements under Right to Education — Rajya Sabha, 22/03/2023",
        "url": "https://sansad.in/getFile/annex/259/AU2435.pdf?source=pqars",
        "note": "Resposta ministerial primária,p.1: reembolso a escolas privadas não subsidiadas comprova contraponto de provedores privados; não medimos participação nacional."
      }
    ],
    "evidence": {
      "est": "medium",
      "rep": "medium",
      "pod": "medium",
      "rel": "medium",
      "con": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Constituição da Índia — edição oficial em 01/05/2024"
        ],
        "rationale": "Competências territoriais efetivas com supremacia nacional relevante sustentam federalismo moderado. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não afirma igualdade de poderes; exceções de intervenção nacional são preservadas."
      },
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — Índia"
        ],
        "rationale": "Competição e representação efetivas sustentam a direção democrática neste recorte. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Competição real coexiste com assimetria eleitoral, interferência executiva e restrições oposicionistas; não deriva do rótulo de liberdade."
      },
      "pod": {
        "sourceTitles": [
          "Freedom in the World 2025 — Índia"
        ],
        "rationale": "Coerção e restrições efetivas sustentam direção autoritária moderada neste recorte. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não transforma violência privada em posição estatal; garantias normativas e variação regional permanecem."
      },
      "rel": {
        "sourceTitles": [
          "Constituição da Índia — edição oficial em 01/05/2024",
          "Freedom in the World 2025 — Índia"
        ],
        "rationale": "Limites concretos ao estabelecimento religioso sustentam direção secular parcial, estritamente normativa. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não é média de secularismo e violência nem simples rótulo; exceções educacionais, leis de conversão e déficits efetivos são preservados."
      },
      "con": {
        "sourceTitles": [
          "NITI Aayog — Objectives and Features"
        ],
        "rationale": "Coordenação estratégica pública de desenvolvimento sustenta planejamento parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Mandato declarado não prova comando da produção, execução, participação econômica ou resultados; não infere tecnocracia."
      }
    },
    "coding": {
      "est": {
        "axis": "est",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constituição da Índia — edição oficial em 01/05/2024",
            "locator": "Artigos 246 e 248–251; pp. 175–177 do PDF",
            "statement": "Listas definem poderes estaduais; União mantém competências residuais e exceções de interesse nacional e emergência.",
            "basis": "norm",
            "publishedDate": "Edição 2024-05-01",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Competências territoriais efetivas com supremacia nacional relevante sustentam federalismo moderado.",
        "uncertainty": "Não afirma igualdade de poderes; exceções de intervenção nacional são preservadas.",
        "reviewedOn": "2026-10-07",
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
            "sourceTitle": "Freedom in the World 2025 — Índia",
            "locator": "Overview; A1–A3, eleição nacional e limitações à oposição",
            "statement": "Eleição competitiva reduziu a bancada do partido governista, com prisões de opositores e bloqueio de recursos antes do pleito.",
            "basis": "practice",
            "publishedDate": "Edição 2025; acontecimentos de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Competição e representação efetivas sustentam a direção democrática neste recorte.",
        "uncertainty": "Competição real coexiste com assimetria eleitoral, interferência executiva e restrições oposicionistas; não deriva do rótulo de liberdade.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "pod": {
        "axis": "pod",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Freedom in the World 2025 — Índia",
            "locator": "F2–F3, detenção, tortura e autorização para processar agentes",
            "statement": "Longas detenções e impunidade de abusos limitam aplicação de garantias.",
            "basis": "practice",
            "publishedDate": "Edição 2025; acontecimentos de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Coerção e restrições efetivas sustentam direção autoritária moderada neste recorte.",
        "uncertainty": "Não transforma violência privada em posição estatal; garantias normativas e variação regional permanecem.",
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
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constituição da Índia — edição oficial em 01/05/2024",
            "locator": "Artigos 27–28; pp. 45 do PDF",
            "statement": "Proíbe imposto destinado a religião específica e instrução religiosa em instituições inteiramente estatais, com exceções.",
            "basis": "norm",
            "publishedDate": "Edição 2024-05-01",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "Freedom in the World 2025 — Índia",
            "locator": "D2, narrativa sobre conversão e minorias",
            "statement": "Leis de conversão e violência contra minorias limitam a liberdade religiosa.",
            "basis": "practice",
            "publishedDate": "Edição 2025; acontecimentos de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Limites concretos ao estabelecimento religioso sustentam direção secular parcial, estritamente normativa.",
        "uncertainty": "Não é média de secularismo e violência nem simples rótulo; exceções educacionais, leis de conversão e déficits efetivos são preservados.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "con": {
        "axis": "con",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "NITI Aayog — Objectives and Features",
            "locator": "Objectives and Features: economic strategy; strategic frameworks; inter-sectoral issues; monitoring",
            "statement": "Órgão público formula estratégias econômicas, planos e programas e coordena implementação setorial.",
            "basis": "declaration",
            "publishedDate": "Página sem data editorial, consultada em 2026-10-07",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Coordenação estratégica pública de desenvolvimento sustenta planejamento parcial.",
        "uncertainty": "Mandato declarado não prova comando da produção, execução, participação econômica ou resultados; não infere tecnocracia.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      }
    },
    "unknownAxisReasons": {
      "eco": "Direito21A, rede escolarKVS e reembolso privadoRTE são fatos setoriais; sem evidência suficiente da orientação de toda economia. 50 desconhecido, sem evidência."
    },
    "educationResearch": {
      "status": "quarantined-sector-scope",
      "reviewedOn": "2026-10-07",
      "independentDocumentaryRead": "PIB corpo17–27 independentemente relido; aceitação dos fatos não valida orientação econômica nacional.",
      "reason": "Rede pública KVS e direito21A não estabelecem composição ou orientação de toda economia. Eco50 desconhecido sem evidência/codificação.",
      "sourceClaims": [
        {
          "sourceTitle": "Kendriya Vidyalayas — Ministry of Education / PIB, 06/12/2024",
          "locator": "Corpo, parágrafos1–7: CentralSectorScheme, KVs funcionais, organização ministerial e operação Sangathan",
          "statement": "Comunicado ministerial de dezembro2024 registra1256KVs funcionais e rede CentralSchools criada como unidade do Ministério, com normas Sangathan para operação; ampliação aprovada é futura.",
          "basis": "practice",
          "publishedDate": "2024-12-06",
          "accessedDate": "2026-10-07"
        },
        {
          "sourceTitle": "Reimbursements under Right to Education — Rajya Sabha, 22/03/2023",
          "locator": "Página1, resposta(a)–(b), Section12(2) e12(1)(c)",
          "statement": "Ministério descreve reembolso público a escolas privadas não subsidiadas por vagasRTE, distinguindo financiamento público de provedor estatal.",
          "basis": "practice",
          "publishedDate": "2023-03-22",
          "accessedDate": "2026-10-07"
        }
      ]
    }
  },
  {
    "id": "south-africa",
    "kind": "country",
    "category": "country",
    "name": "África do Sul",
    "period": "Prática institucional em 2024; normas da edição constitucional oficial com emendas até 2012, sem certificação de consolidação em 2024–2026; Camada normativa da edição com emendas até 2012; consultada em 2026-10-07",
    "vec": {
      "est": 60,
      "rep": 80,
      "pod": 40,
      "imi": 40,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 60,
      "mor": 60,
      "tec": 50
    },
    "rationale": "Poderes territoriais, eleições competitivas, garantias processuais, provisão pública e igualdade jurídica são tratados por norma e prática separadas.",
    "caveats": "Normas constitucionais da camada anterioràemenda18/2023, família nas versões1998/emenda2021 e2006; prática2024 do relatório2025 anterior preservada. Revisão independente adicional leu FH2025 e cláusulas oficiais indexadas territoriais e de direitos; PDF2012 direto permaneceu inacessível. Artigo37 admite emergência e derrogação condicionada, além dos déficits concretos de defesa e demora. Cultura e autonomia familiar são recortes gerais documentados, não opiniões dos habitantes ou eficácia plena. REL norma aceita em alcance delimitado: separação funcional constitucional com ampla acomodação religiosa, não exclusão da vida pública. Eco/con/int/dip/com/tec desconhecidos; acesso a serviços, permissões patrimoniais e banco público não medem orientação econômica geral.",
    "sources": [
      {
        "title": "Freedom in the World 2025 — South Africa",
        "url": "https://freedomhouse.org/country/south-africa/freedom-world/2025",
        "note": "Eleições competitivas, liberdades, direitos e contexto após as eleições de 2024."
      },
      {
        "title": "Constitution of the Republic of South Africa",
        "url": "https://www.gov.za/documents/constitution-republic-south-africa-1996",
        "note": "Fonte primária para democracia constitucional, diversidade, direitos e Estado de direito."
      },
      {
        "title": "Freedom in the World 2025 — África do Sul",
        "url": "https://freedomhouse.org/country/south-africa/freedom-world/2025",
        "note": "Narrativa institucional de 2024 lida; pontuações agregadas e respostas numéricas não são convertidas em eixos."
      },
      {
        "title": "Constituição da África do Sul — edição oficial com emendas até 2012",
        "url": "https://www.justice.gov.za/constitution/SAConstitution-web-eng.pdf",
        "note": "PDF oficial de 182 páginas; capa registra emendas até 2012. Camada normativa datada, não confirmação de cláusulas após emendas posteriores, incluindo língua de sinais em 2023."
      },
      {
        "title": "Constituição sul-africana — Ministério da Justiça, capítulos1–2",
        "url": "https://www.justice.gov.za/constitution/chp02.html",
        "note": "Corpo oficial7–39 efetivamente lido integralmente; capítulo1sec6 obtido como corpo indexado, não nova abertura direta bem-sucedida. Texto HTML com onze línguas pertence à camada anterior à emenda18; não se afirma consolidação atual2026. Edição anterioraté2012 preservada."
      },
      {
        "title": "Recognition of Customary Marriages Act120/1998 — edição oficial hospedada, maio2025",
        "url": "https://www.justice.gov.za/legislation/acts/1998-120.pdf",
        "note": "Cinco páginas efetivamente lidas, com emenda1/2021 e downloadJuta29/05/2025 no próprio arquivo. Republicação comercial hospedada pelo Ministério, não fac-símile da Gazeta1998. Igualcapacidade6, propriedade7 e divórcio8; poliginia2/7 e exceções de idade3 preservadas."
      },
      {
        "title": "Civil Union Act17/2006 — Gazeta oficial original",
        "url": "https://www.gov.za/sites/default/files/a17-06.pdf",
        "note": "Todas sete páginas/corpo1–16 realmente aberto e lido; OCR apresenta muitos erros, sem certificação visual fac-símile. Usados1/8/13/16 para inclusão conjugal e efeitos gerais. Original6contém objeção de oficiais; não alegada vigente2025 porque emenda8/2020 existe e seu corpo ainda não foi lido."
      },
      {
        "title": "Fourie [2005]ZACC19 — acórdão constitucional, republicação SAFLII",
        "url": "https://www3.saflii.org/za/cases/ZACC/2005/19.html",
        "note": "Abertura direta403; recuperação indexada efetivamente devolveu passagens completas90/94–97, não título/snippet isolado.92/93/98retornaram sob caso conjuntoZACC20, fonte separada. Doutrina geral distingue crença religiosa e interpretação de direitos; participação religiosa e casamento celebrado por ministros reconhecidos são contrapontos. Não equivalência integral com registro oficial da Corte ou auditoria atual de execução."
      },
      {
        "title": "Equality Project [2005]ZACC20 — acórdão conjunto, republicação SAFLII",
        "url": "https://www.saflii.org/za/cases/ZACC/2005/20.html",
        "note": "Corpos indexados realmente devolvidos90/92/93/98; a busca direcionadaZACC19retornou este caso conjunto. Sem alegar nova leitura diretaZACC19para estas passagens. Mesma matéria constitucional consolidada, proveniência explicitada separadamente."
      }
    ],
    "evidence": {
      "est": "medium",
      "rep": "high",
      "pod": "medium",
      "mor": "medium",
      "imi": "medium",
      "rel": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Constituição da África do Sul — edição oficial com emendas até 2012"
        ],
        "rationale": "Poderes territoriais próprios com intervenção nacional limitada sustentam descentralização moderada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Recorte da edição 2012; não certifica toda a prática territorial contemporânea nem status após emendas posteriores."
      },
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — África do Sul"
        ],
        "rationale": "Competição e representação efetivas sustentam a direção democrática neste recorte. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Competição eleitoral não elimina desigualdade de representação, financiamento ou déficits civis."
      },
      "pod": {
        "sourceTitles": [
          "Constituição da África do Sul — edição oficial com emendas até 2012",
          "Freedom in the World 2025 — África do Sul"
        ],
        "rationale": "Garantias de defesa e liberdade sustentam direção parcial, com déficits concretos. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Norma de 2012 não certifica prática plena ou redação atual; atrasos judiciais impedem extremo libertário."
      },
      "mor": {
        "sourceTitles": [
          "Constituição sul-africana — Ministério da Justiça, capítulos1–2",
          "Recognition of Customary Marriages Act120/1998 — edição oficial hospedada, maio2025",
          "Civil Union Act17/2006 — Gazeta oficial original"
        ],
        "rationale": "Autonomia civil e conjugal, capacidade patrimonial feminina, dissolução e reconhecimento de união entre pessoas do mesmo sexo cobrem família além de emprego ou aborto. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Normas não eliminam violência e desigualdade observadas no relatório2025 preservado. Casamentos costumeiros admitem poliginia e exceções de idade; sistemas familiares coexistem e propriedades têm regras próprias. Originalobjeção6/2006não certificada vigente após2020."
      },
      "imi": {
        "sourceTitles": [
          "Constituição sul-africana — Ministério da Justiça, capítulos1–2"
        ],
        "rationale": "Programa cultural aberto à população e às comunidades em geral sustenta multiculturalismo normativo moderado. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Direitos sujeitos ao Bill of Rights; educação em língua escolhida depende de praticabilidade/equidade. Não política migratória aberta nem cumprimento integral. Onze línguas no HTML não certificam consolidação2026."
      },
      "rel": {
        "sourceTitles": [
          "Equality Project [2005]ZACC20 — acórdão conjunto, republicação SAFLII",
          "Fourie [2005]ZACC19 — acórdão constitucional, republicação SAFLII",
          "Constituição sul-africana — Ministério da Justiça, capítulos1–2"
        ],
        "rationale": "Separação funcional entre doutrina religiosa e fundamento jurídico constitucional, com governo de igual respeito, sustenta orientação secular moderada no desenho jurídico. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Decisão surge em caso matrimonial e não estabelece laicidade absoluta. Religião participa da vida pública, ministros celebram casamento com efeito estatal e instituições públicas podem ter observâncias equitativas voluntárias. Não usar liberdade religiosa isolada como separação."
      }
    },
    "coding": {
      "est": {
        "axis": "est",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constituição da África do Sul — edição oficial com emendas até 2012",
            "locator": "Artigos 40–41, 44 e 146–147; Schedule 5",
            "statement": "Esferas nacional, provincial e local possuem poderes; competências provinciais exclusivas admitem exceções nacionais.",
            "basis": "norm",
            "publishedDate": "Edição com emendas até 2012",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Poderes territoriais próprios com intervenção nacional limitada sustentam descentralização moderada.",
        "uncertainty": "Recorte da edição 2012; não certifica toda a prática territorial contemporânea nem status após emendas posteriores.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "rep": {
        "axis": "rep",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Freedom in the World 2025 — África do Sul",
            "locator": "Overview; A1–A2, eleições de maio e coalizão",
            "statement": "Eleições livres e competitivas reduziram maioria do ANC e produziram coalizão multipartidária.",
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
            "sourceTitle": "Constituição da África do Sul — edição oficial com emendas até 2012",
            "locator": "Artigos 12, 14 e 35; pp. 17–19 do PDF para art. 35",
            "statement": "Garante segurança pessoal, privacidade, defesa e controle judicial de prisão.",
            "basis": "norm",
            "publishedDate": "Edição com emendas até 2012",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "Freedom in the World 2025 — África do Sul",
            "locator": "F2, duração da prisão preventiva e acesso à defesa",
            "statement": "Atrasos e falta de defesa geram detenções prolongadas antes do julgamento.",
            "basis": "practice",
            "publishedDate": "Edição 2025; acontecimentos de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Garantias de defesa e liberdade sustentam direção parcial, com déficits concretos.",
        "uncertainty": "Norma de 2012 não certifica prática plena ou redação atual; atrasos judiciais impedem extremo libertário.",
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
        "reviewedOn": "2026-10-08",
        "claims": [
          {
            "sourceTitle": "Constituição sul-africana — Ministério da Justiça, capítulos1–2",
            "locator": "9/12(2)",
            "statement": "Antidiscriminação sexual e por estado conjugal, integridade corporal e decisão reprodutiva.",
            "basis": "norm",
            "publishedDate": "Camada constitucional anterior à emenda18/2023",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Recognition of Customary Marriages Act120/1998 — edição oficial hospedada, maio2025",
            "locator": "6–8; contrapontos2/3/7(6)",
            "statement": "Esposa tem plena capacidade em igualdade com marido; gestão patrimonial igual e divórcio judicial por ruptura irreparável.",
            "basis": "norm",
            "publishedDate": "Consolidado com emenda1/2021; arquivo29/05/2025",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Civil Union Act17/2006 — Gazeta oficial original",
            "locator": "1/8/13; contraponto5; vigência16",
            "statement": "União voluntária de duas pessoas adultas estende consequências jurídicas conjugais, inclusive a parceiros do mesmo sexo.",
            "basis": "norm",
            "publishedDate": "2006-11-30",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Autonomia civil e conjugal, capacidade patrimonial feminina, dissolução e reconhecimento de união entre pessoas do mesmo sexo cobrem família além de emprego ou aborto.",
        "uncertainty": "Normas não eliminam violência e desigualdade observadas no relatório2025 preservado. Casamentos costumeiros admitem poliginia e exceções de idade; sistemas familiares coexistem e propriedades têm regras próprias. Originalobjeção6/2006não certificada vigente após2020.",
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
        "reviewedOn": "2026-10-08",
        "relatedQuestionIds": [
          "imigracao_02",
          "imigracao_08"
        ],
        "claims": [
          {
            "sourceTitle": "Constituição sul-africana — Ministério da Justiça, capítulos1–2",
            "locator": "30–31; contrapontos29(2)/36; capítulo1sec6(2–5), corpo indexado",
            "statement": "Todos podem escolher língua e vida cultural; todas as comunidades podem manter associações culturais, religiosas e linguísticas.",
            "basis": "norm",
            "publishedDate": "Camada constitucional anterior à emenda18/2023",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Programa cultural aberto à população e às comunidades em geral sustenta multiculturalismo normativo moderado.",
        "uncertainty": "Direitos sujeitos ao Bill of Rights; educação em língua escolhida depende de praticabilidade/equidade. Não política migratória aberta nem cumprimento integral. Onze línguas no HTML não certificam consolidação2026.",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "rel": {
        "axis": "rel",
        "position": "moderate-first",
        "confidence": "medium",
        "reviewedOn": "2026-10-08",
        "claims": [
          {
            "sourceTitle": "Equality Project [2005]ZACC20 — acórdão conjunto, republicação SAFLII",
            "locator": "92–93; contrapontos90/98",
            "statement": "Doutrina religiosa não pode substituir fundamento jurídico na interpretação de direitos constitucionais.",
            "basis": "norm",
            "publishedDate": "2005-12-01",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Fourie [2005]ZACC19 — acórdão constitucional, republicação SAFLII",
            "locator": "94–95; contrapontos90/96–97",
            "statement": "Corte distingue esferas secular e sagrada e exige igual respeito governamental a todos, com coexistência e acomodação religiosa.",
            "basis": "norm",
            "publishedDate": "2005-12-01",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Constituição sul-africana — Ministério da Justiça, capítulos1–2",
            "locator": "15(1–3)",
            "statement": "Observâncias em instituições estatais precisam de equidade e participação livre/voluntária; reconhecimento familiar religioso deve respeitar Constituição.",
            "basis": "norm",
            "publishedDate": "Camada constitucional anterior à emenda18/2023",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Separação funcional entre doutrina religiosa e fundamento jurídico constitucional, com governo de igual respeito, sustenta orientação secular moderada no desenho jurídico.",
        "uncertainty": "Decisão surge em caso matrimonial e não estabelece laicidade absoluta. Religião participa da vida pública, ministros celebram casamento com efeito estatal e instituições públicas podem ter observâncias equitativas voluntárias. Não usar liberdade religiosa isolada como separação.",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      }
    },
    "documentaryReview07": {
      "status": "accepted-bounded-whole-profile",
      "independentReview": "accepted-six-bounded-claims-and-source-scopes",
      "reviewedOn": "2026-10-08",
      "scope": "Três normas aprofundadas IMI/MOR/REL aceitas pelo Root. EST/REP/POD herdados exatos receberam leitura independente adicional de cláusulas oficiais indexadas e FH2025; os seis foram aceitos pelo Root em seus recortes datados, sem certificação de toda prática2026. Falha direta do PDF2012 não é certificação dessa edição."
    }
  },
  {
    "id": "singapore",
    "kind": "country",
    "category": "country",
    "name": "Singapura",
    "period": "Prática institucional em 2024; declarações oficiais do MHA de 29/09/2026 e Singapore Customs de 09/03/2026",
    "vec": {
      "est": 50,
      "rep": 40,
      "pod": 60,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 40,
      "rel": 60,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Competição, coerção, separação entre religião e política e cobertura aduaneira possuem suporte específico.",
    "caveats": "SSO recusou acesso à Constituição com 403; não se codificou norma constitucional por fragmentos de busca. Página HDB falhou, portanto não se inventou provisão habitacional. Outras oito dimensões continuam desconhecidas.",
    "sources": [
      {
        "title": "Freedom in the World — Singapura",
        "url": "https://freedomhouse.org/country/singapore/freedom-world/2025",
        "note": "Direitos políticos e civis."
      },
      {
        "title": "WTO Trade Policy Review — Singapore",
        "url": "https://www.wto.org/english/tratop_e/tpr_e/s413_e.pdf",
        "note": "Abertura comercial e papel do Estado."
      },
      {
        "title": "Freedom in the World 2025 — Singapura",
        "url": "https://freedomhouse.org/country/singapore/freedom-world/2025",
        "note": "Narrativa referente a 2024 efetivamente lida; nenhuma conversão de notas ou classificações agregadas."
      },
      {
        "title": "MHA — harmonia racial e religiosa",
        "url": "https://www.mha.gov.sg/what-we-do/managing-security-threats/maintaining-racial-and-religious-harmony/",
        "note": "Página oficial atualizada em 29/09/2026: princípios, restraining orders e leis de 2019/2025; leitura integral."
      },
      {
        "title": "Singapore Customs — categorias de bens tributáveis",
        "url": "https://www.customs.gov.sg/doing-business/valuation-duties-and-fees/duties-and-dutiable-goods/duties-and-dutiable-goods-overview/",
        "note": "Página atualizada em 09/03/2026: quatro categorias, bens não tributáveis e GST."
      }
    ],
    "evidence": {
      "rep": "medium",
      "pod": "medium",
      "rel": "medium",
      "com": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — Singapura"
        ],
        "rationale": "Vantagem institucional e controle da competição sustentam direção despótica parcial. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: A existência de oposição impede supor ausência total de competição; duração de governo sozinha não determina o eixo."
      },
      "pod": {
        "sourceTitles": [
          "Freedom in the World 2025 — Singapura"
        ],
        "rationale": "Coerção sobre expressão e organização sustenta direção autoritária parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não presume todas as dimensões de polícia e privacidade; não converte pena de morte isolada em índice global."
      },
      "rel": {
        "sourceTitles": [
          "MHA — harmonia racial e religiosa"
        ],
        "rationale": "Separação declarada entre religião e política sustenta secularismo parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Regulação estatal intensa de organizações religiosas limita a inferência; não é certificação de separação completa nem de execução em 2024."
      },
      "com": {
        "sourceTitles": [
          "Singapore Customs — categorias de bens tributáveis"
        ],
        "rationale": "Cobertura aduaneira limitada sustenta abertura comercial parcial. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: GST é tributação de consumo, não prova de proteção; licenças e tarifas específicas permanecem. Só cobre importações, não toda integração ou exportação."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-second",
        "claims": [
          {
            "sourceTitle": "Freedom in the World 2025 — Singapura",
            "locator": "Overview; Key Developments in 2024",
            "statement": "Pluralismo controlado e regras favoráveis ao PAP limitam oposição; sucessão de 2024 ocorreu dentro do partido.",
            "basis": "practice",
            "publishedDate": "Relatório 2025; prática de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Vantagem institucional e controle da competição sustentam direção despótica parcial.",
        "uncertainty": "A existência de oposição impede supor ausência total de competição; duração de governo sozinha não determina o eixo.",
        "confidence": "medium",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "pod": {
        "axis": "pod",
        "position": "moderate-first",
        "claims": [
          {
            "sourceTitle": "Freedom in the World 2025 — Singapura",
            "locator": "Overview; Key Developments in 2024, POFMA",
            "statement": "POFMA foi usada contra opositores e veículos; expressão, reunião e associação sofrem restrições.",
            "basis": "practice",
            "publishedDate": "Relatório 2025; prática de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Coerção sobre expressão e organização sustenta direção autoritária parcial.",
        "uncertainty": "Não presume todas as dimensões de polícia e privacidade; não converte pena de morte isolada em índice global.",
        "confidence": "medium",
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
        "position": "moderate-first",
        "claims": [
          {
            "sourceTitle": "MHA — harmonia racial e religiosa",
            "locator": "MRHA, princípios; alterações de 2019",
            "statement": "Política oficial separa religião de política, exige moderação e mantém ordens restritivas e controles de influências estrangeiras.",
            "basis": "declaration",
            "publishedDate": "2026-09-29",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Separação declarada entre religião e política sustenta secularismo parcial.",
        "uncertainty": "Regulação estatal intensa de organizações religiosas limita a inferência; não é certificação de separação completa nem de execução em 2024.",
        "confidence": "medium",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "com": {
        "axis": "com",
        "position": "moderate-second",
        "claims": [
          {
            "sourceTitle": "Singapore Customs — categorias de bens tributáveis",
            "locator": "Categorias; definição de bens não tributáveis",
            "statement": "Somente quatro categorias estão sujeitas a direitos aduaneiros ou excise; bens não tributáveis podem pagar GST.",
            "basis": "declaration",
            "publishedDate": "2026-03-09",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Cobertura aduaneira limitada sustenta abertura comercial parcial.",
        "uncertainty": "GST é tributação de consumo, não prova de proteção; licenças e tarifas específicas permanecem. Só cobre importações, não toda integração ou exportação.",
        "confidence": "medium",
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
    "id": "indonesia",
    "kind": "country",
    "category": "country",
    "name": "Indonésia",
    "period": "Prática institucional em 2024; camada normativa da tradução constitucional oferecida pela Corte em 2026, sem data editorial ou certificação independente de consolidação contemporânea; 2026-06-26",
    "vec": {
      "est": 40,
      "rep": 60,
      "pod": 60,
      "imi": 40,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 40,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Competências regionais, competição, coerção estatal, privilégio religioso e proteção cultural são proposições separadas.",
    "caveats": "Camada normativa oferecida em 2026, sem prova independente de edição atual; data não foi inferida de OCR ilegível. Controle estatal do artigo 33 não basta para provar propriedade/provedor: eco desconhecido. Demais eixos sem suporte permanecem desconhecidos. Documento anuncia entrada prevista, não verifica execução posterior; acordo bilateral não resolve todas as reservas ou política comercial global. Revisão de escopo em8/10/2026: a passagem setorial permanece arquivada como pesquisa delimitada; direção geral no eixo com desconhecida, sem evidência de ranqueamento.",
    "sources": [
      {
        "title": "Freedom in the World 2025 — Indonesia",
        "url": "https://freedomhouse.org/country/indonesia/freedom-world/2025",
        "note": "Eleições, transições, restrições políticas e liberdades civis."
      },
      {
        "title": "Constitution of the Republic of Indonesia — Constitutional Court",
        "url": "https://en.mkri.id/public/content/constitution/constitution_english.pdf",
        "note": "Fonte primária para república unitária, soberania popular e organização constitucional."
      },
      {
        "title": "Freedom in the World 2025 — Indonésia",
        "url": "https://freedomhouse.org/country/indonesia/freedom-world/2025",
        "note": "Narrativa referente a 2024 efetivamente lida; nenhuma conversão de notas ou classificações agregadas."
      },
      {
        "title": "Constituição da Indonésia — tradução oferecida pela Corte Constitucional",
        "url": "https://en.mkri.id/download/constitution/constitution_1_1625426222_4c1e13f466840d7ed721.pdf",
        "note": "PDF de 25 páginas recuperado via índice oficial library/constitution; tradução não oficial inglesa do Ministério, última página com OCR invertido, sem data editorial segura."
      },
      {
        "title": "MOFA — protocolo bilateral Japão–Indonésia, notas diplomáticas",
        "url": "https://www.mofa.go.jp/press/release/pressite_000001_02465.html",
        "note": "Fonte primária efetivamente aberta e passagem lida em 7/10/2026."
      }
    ],
    "evidence": {
      "est": "medium",
      "rep": "medium",
      "pod": "medium",
      "rel": "medium",
      "imi": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Constituição da Indonésia — tradução oferecida pela Corte Constitucional"
        ],
        "rationale": "Autonomia substantiva dentro de competências nacionais sustenta direção unitária moderada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não se infere centralização da palavra unitário; a edição normativa não certifica execução territorial em 2024."
      },
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — Indonésia"
        ],
        "rationale": "Competição efetiva com restrições materiais sustenta democracia parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Corte não encontrou irregularidade na distribuição assistencial investigada; parentesco não determina o eixo sozinho."
      },
      "pod": {
        "sourceTitles": [
          "Freedom in the World 2025 — Indonésia"
        ],
        "rationale": "Coerção estatal sobre expressão e defesa sustenta autoritarismo parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Pluralismo midiático e proteções legais coexistem; não descreve toda a segurança pública."
      },
      "rel": {
        "sourceTitles": [
          "Constituição da Indonésia — tradução oferecida pela Corte Constitucional",
          "Freedom in the World 2025 — Indonésia"
        ],
        "rationale": "Privilégio institucional da adesão religiosa sustenta direção confessional parcial. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Pluralidade reconhecida é contraevidência; efeitos futuros do código penal de 2026 não são tratados como prática de 2024."
      },
      "imi": {
        "sourceTitles": [
          "Constituição da Indonésia — tradução oferecida pela Corte Constitucional"
        ],
        "rationale": "Proteção explícita de pluralidade cultural sustenta multiculturalismo parcial. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Só cobre cultura e língua de grupos internos; não afirma abertura migratória ou implementação contemporânea."
      }
    },
    "coding": {
      "est": {
        "axis": "est",
        "position": "moderate-second",
        "claims": [
          {
            "sourceTitle": "Constituição da Indonésia — tradução oferecida pela Corte Constitucional",
            "locator": "Artigo 18(1–6)",
            "statement": "Estado unitário com autonomia regional, assembleias eleitas e regulamentos próprios; matérias nacionais são excepcionadas por lei.",
            "basis": "norm",
            "publishedDate": "Tradução sem data editorial, oferecida pela Corte e consultada em 2026-10-07; sem certificação de consolidação",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Autonomia substantiva dentro de competências nacionais sustenta direção unitária moderada.",
        "uncertainty": "Não se infere centralização da palavra unitário; a edição normativa não certifica execução territorial em 2024.",
        "confidence": "medium",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "rep": {
        "axis": "rep",
        "position": "moderate-first",
        "claims": [
          {
            "sourceTitle": "Freedom in the World 2025 — Indonésia",
            "locator": "A1; B1–B2",
            "statement": "Eleições pacíficas e alternâncias coexistem com exigências partidárias e aumento de candidaturas locais sem concorrentes.",
            "basis": "practice",
            "publishedDate": "Relatório 2025; prática de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Competição efetiva com restrições materiais sustenta democracia parcial.",
        "uncertainty": "Corte não encontrou irregularidade na distribuição assistencial investigada; parentesco não determina o eixo sozinho.",
        "confidence": "medium",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "pod": {
        "axis": "pod",
        "position": "moderate-first",
        "claims": [
          {
            "sourceTitle": "Freedom in the World 2025 — Indonésia",
            "locator": "D1; F2",
            "statement": "Leis digitais prendem jornalistas; polícia pratica detenções arbitrárias, coerção de confissões e nega acesso a advogados.",
            "basis": "practice",
            "publishedDate": "Relatório 2025; prática de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Coerção estatal sobre expressão e defesa sustenta autoritarismo parcial.",
        "uncertainty": "Pluralismo midiático e proteções legais coexistem; não descreve toda a segurança pública.",
        "confidence": "medium",
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
        "position": "moderate-second",
        "claims": [
          {
            "sourceTitle": "Constituição da Indonésia — tradução oferecida pela Corte Constitucional",
            "locator": "Artigo 29(1–2)",
            "statement": "Estado fundamentado em Deus garante prática religiosa.",
            "basis": "norm",
            "publishedDate": "Tradução sem data editorial, oferecida pela Corte e consultada em 2026-10-07; sem certificação de consolidação",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "Freedom in the World 2025 — Indonésia",
            "locator": "D2, narrativa",
            "statement": "Seis religiões reconhecidas; ateísmo não aceito legalmente e identidades sem religião enfrentam discriminação.",
            "basis": "practice",
            "publishedDate": "Relatório 2025; prática de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Privilégio institucional da adesão religiosa sustenta direção confessional parcial.",
        "uncertainty": "Pluralidade reconhecida é contraevidência; efeitos futuros do código penal de 2026 não são tratados como prática de 2024.",
        "confidence": "medium",
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
        "position": "moderate-second",
        "claims": [
          {
            "sourceTitle": "Constituição da Indonésia — tradução oferecida pela Corte Constitucional",
            "locator": "Artigo 32(1–2)",
            "statement": "Protege liberdade de preservar valores culturais e reconhece línguas locais como patrimônio nacional.",
            "basis": "norm",
            "publishedDate": "Tradução sem data editorial, oferecida pela Corte e consultada em 2026-10-07; sem certificação de consolidação",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Proteção explícita de pluralidade cultural sustenta multiculturalismo parcial.",
        "uncertainty": "Só cobre cultura e língua de grupos internos; não afirma abertura migratória ou implementação contemporânea.",
        "confidence": "medium",
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
    "id": "mexico",
    "kind": "country",
    "category": "country",
    "name": "México",
    "period": "Prática institucional em 2024; Constituição oficial consolidada com últimas reformas DOF de 02/06/2026",
    "vec": {
      "est": 80,
      "rep": 60,
      "pod": 60,
      "imi": 40,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 60,
      "com": 50,
      "rel": 80,
      "mor": 60,
      "tec": 50
    },
    "rationale": "Oito dimensões possuem cláusulas ou prática específicas; direções não são derivadas de rótulos partidários.",
    "caveats": "Norma de junho de 2026 e prática de 2024 são camadas explícitas. Defesa, intervenção, comércio e tecnologia permanecem desconhecidos; o mínimo de seis eixos não certifica completude semântica. Revisão de escopo econômico em 7/10/2026: provisão/propriedade setorial permanece arquivada como pesquisa delimitada; orientação econômica nacional desconhecida, sem evidência de ranqueamento em eco.",
    "sources": [
      {
        "title": "Freedom in the World 2025 — Mexico",
        "url": "https://freedomhouse.org/country/mexico/freedom-world/2025",
        "note": "Eleições de 2024, violência criminosa, militarização e situação das liberdades."
      },
      {
        "title": "Constitución Política de los Estados Unidos Mexicanos",
        "url": "https://www.diputados.gob.mx/LeyesBiblio/pdf/CPEUM.pdf",
        "note": "Fonte primária para república representativa, democrática e federal."
      },
      {
        "title": "Freedom in the World 2025 — México",
        "url": "https://freedomhouse.org/country/mexico/freedom-world/2025",
        "note": "Narrativa referente a 2024 efetivamente lida; nenhuma conversão de notas ou classificações agregadas."
      },
      {
        "title": "Constituição mexicana — Câmara, reformas até 02/06/2026",
        "url": "https://www.diputados.gob.mx/LeyesBiblio/pdf/CPEUM.pdf",
        "note": "PDF oficial de 414 páginas, cabeçalho DOF 02/06/2026; cláusulas atuais e notas de alterações efetivamente lidas."
      }
    ],
    "evidence": {
      "est": "high",
      "rep": "medium",
      "pod": "medium",
      "imi": "medium",
      "con": "medium",
      "rel": "high",
      "mor": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Constituição mexicana — Câmara, reformas até 02/06/2026"
        ],
        "rationale": "Competências territoriais constitucionalmente reservadas sustentam federalismo forte. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Supremacia do pacto federal permanece; não implica soberania irrestrita."
      },
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — México"
        ],
        "rationale": "Competição e alternâncias sustentam democracia parcial com obstáculos materiais. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não se atribui toda a violência ao Estado nem se converte status institucional em vetor."
      },
      "pod": {
        "sourceTitles": [
          "Freedom in the World 2025 — México"
        ],
        "rationale": "Coerção estatal documentada sustenta autoritarismo parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Criminalidade privada não é confundida com política autoritária; garantias legais e progressos contra confissões por tortura permanecem."
      },
      "imi": {
        "sourceTitles": [
          "Constituição mexicana — Câmara, reformas até 02/06/2026"
        ],
        "rationale": "Proteção de pluralidade cultural sustenta multiculturalismo parcial. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Recorte indígena interno, sem inferir política migratória ou efetividade plena."
      },
      "con": {
        "sourceTitles": [
          "Constituição mexicana — Câmara, reformas até 02/06/2026"
        ],
        "rationale": "Coordenação econômica explícita sustenta planejamento parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Mandato normativo não comprova execução nem comando integral da produção."
      },
      "rel": {
        "sourceTitles": [
          "Constituição mexicana — Câmara, reformas até 02/06/2026"
        ],
        "rationale": "Não estabelecimento e separação constitutiva sustentam secularismo forte. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Norma não certifica igualdade prática de todas as crenças."
      },
      "mor": {
        "sourceTitles": [
          "Constituição mexicana — Câmara, reformas até 02/06/2026"
        ],
        "rationale": "Igualdade e autonomia reprodutiva sustentam reforma social parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não se afirmou direito constitucional ao aborto nem cobertura de todos os costumes."
      }
    },
    "coding": {
      "est": {
        "axis": "est",
        "position": "strong-first",
        "claims": [
          {
            "sourceTitle": "Constituição mexicana — Câmara, reformas até 02/06/2026",
            "locator": "Artigos 40–41 e 124",
            "statement": "Estados têm governo interior próprio e competências não atribuídas à União são reservadas a estados ou Cidade do México.",
            "basis": "norm",
            "publishedDate": "Consolidação 2026-06-02",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Competências territoriais constitucionalmente reservadas sustentam federalismo forte.",
        "uncertainty": "Supremacia do pacto federal permanece; não implica soberania irrestrita.",
        "confidence": "high",
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
        "position": "moderate-first",
        "claims": [
          {
            "sourceTitle": "Freedom in the World 2025 — México",
            "locator": "Overview; A1–A3",
            "statement": "Eleições de 2024 amplamente consideradas justas coexistiram com violência contra candidatos e distorções de representação e financiamento.",
            "basis": "practice",
            "publishedDate": "Relatório 2025; prática de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Competição e alternâncias sustentam democracia parcial com obstáculos materiais.",
        "uncertainty": "Não se atribui toda a violência ao Estado nem se converte status institucional em vetor.",
        "confidence": "medium",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "pod": {
        "axis": "pod",
        "position": "moderate-first",
        "claims": [
          {
            "sourceTitle": "Freedom in the World 2025 — México",
            "locator": "F2–F3",
            "statement": "Detenção preventiva expandida e abusos de forças de segurança limitam defesa e controle da coerção.",
            "basis": "practice",
            "publishedDate": "Relatório 2025; prática de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Coerção estatal documentada sustenta autoritarismo parcial.",
        "uncertainty": "Criminalidade privada não é confundida com política autoritária; garantias legais e progressos contra confissões por tortura permanecem.",
        "confidence": "medium",
        "reviewedOn": "2026-10-07",
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
        "claims": [
          {
            "sourceTitle": "Constituição mexicana — Câmara, reformas até 02/06/2026",
            "locator": "Artigo 2",
            "statement": "Reconhece composição pluricultural, autonomia indígena e preservação de línguas e identidades.",
            "basis": "norm",
            "publishedDate": "Redação 2024-09-30; consolidação 2026-06-02",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Proteção de pluralidade cultural sustenta multiculturalismo parcial.",
        "uncertainty": "Recorte indígena interno, sem inferir política migratória ou efetividade plena.",
        "confidence": "medium",
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
        "claims": [
          {
            "sourceTitle": "Constituição mexicana — Câmara, reformas até 02/06/2026",
            "locator": "Artigo 25, primeiros parágrafos",
            "statement": "Estado planeja, conduz, coordena e orienta atividade econômica com participação pública, social e privada.",
            "basis": "norm",
            "publishedDate": "Consolidação 2026-06-02",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Coordenação econômica explícita sustenta planejamento parcial.",
        "uncertainty": "Mandato normativo não comprova execução nem comando integral da produção.",
        "confidence": "medium",
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
        "claims": [
          {
            "sourceTitle": "Constituição mexicana — Câmara, reformas até 02/06/2026",
            "locator": "Artigos 24 e 130",
            "statement": "Congresso não estabelece religião; princípio histórico de separação entre Estado e igrejas rege as normas.",
            "basis": "norm",
            "publishedDate": "Consolidação 2026-06-02",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Não estabelecimento e separação constitutiva sustentam secularismo forte.",
        "uncertainty": "Norma não certifica igualdade prática de todas as crenças.",
        "confidence": "high",
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
        "claims": [
          {
            "sourceTitle": "Constituição mexicana — Câmara, reformas até 02/06/2026",
            "locator": "Artigo 4, primeiros parágrafos",
            "statement": "Protege igualdade substantiva entre mulheres e homens e decisão livre sobre número e espaçamento de filhos.",
            "basis": "norm",
            "publishedDate": "Consolidação 2026-06-02",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Igualdade e autonomia reprodutiva sustentam reforma social parcial.",
        "uncertainty": "Não se afirmou direito constitucional ao aborto nem cobertura de todos os costumes.",
        "confidence": "medium",
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
    "id": "turkey",
    "kind": "country",
    "category": "country",
    "name": "Turquia",
    "period": "Prática institucional em 2024; camada normativa histórica da Constituição revista em 2017, sem certificação de consolidação em 2024–2026; Página sem data editorial, contém dados de2025; consultada em2026-10-07",
    "vec": {
      "est": 40,
      "rep": 40,
      "pod": 60,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 60,
      "com": 40,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Competição/coerção de 2024 e autonomia/provisão/planejamento na norma histórica são separados.",
    "caveats": "Artigos 24 e 136 sobre religião foram lidos, mas separação declarada, currículo religioso e agência estatal não foram arbitrariamente promediados: rel desconhecido. Cultura, defesa, intervenção, comércio, costumes e tecnologia também desconhecidos. Não afirma abertura de todos os setores ou inexistência de defesa comercial; extensão proposta ainda sem diretivas do Conselho. Revisão de escopo econômico em 7/10/2026: provisão/propriedade setorial permanece arquivada como pesquisa delimitada; orientação econômica nacional desconhecida, sem evidência de ranqueamento em eco.",
    "sources": [
      {
        "title": "Freedom in the World 2025 — Turkey",
        "url": "https://freedomhouse.org/country/turkey/freedom-world/2025",
        "note": "Concentração presidencial, competição eleitoral, restrições à imprensa e à oposição."
      },
      {
        "title": "Constitution of the Republic of Türkiye — Constitutional Court",
        "url": "https://www.anayasa.gov.tr/en/legislation/turkish-constitution/",
        "note": "Fonte primária para a estrutura republicana e laica, distinta da avaliação de sua prática."
      },
      {
        "title": "Freedom in the World 2025 — Turquia",
        "url": "https://freedomhouse.org/country/turkey/freedom-world/2025",
        "note": "Narrativa referente a 2024 efetivamente lida; nenhuma conversão de notas ou classificações agregadas."
      },
      {
        "title": "Constituição turca — edição 2017 em Constitute",
        "url": "https://www.constituteproject.org/constitution/Turkey_2017?lang=en",
        "note": "Tradução integral revista em 2017; tentativas de acesso à Corte/legislação oficial falharam. Não se apresenta como norma consolidada contemporânea."
      },
      {
        "title": "Comissão Europeia — relações comerciais com Türkiye",
        "url": "https://policy.trade.ec.europa.eu/eu-trade-relationships-country-and-region/countries-and-regions/turkiye_en",
        "note": "Fonte primária efetivamente aberta e passagem lida em 7/10/2026."
      }
    ],
    "evidence": {
      "est": "medium",
      "rep": "medium",
      "pod": "medium",
      "con": "medium",
      "com": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Constituição turca — edição 2017 em Constitute"
        ],
        "rationale": "Autonomia local subordinada à tutela central sustenta direção unitária moderada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Recorte normativo de 2017; não prova toda a prática territorial atual."
      },
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — Turquia"
        ],
        "rationale": "Controle assimétrico da competição sustenta direção despótica parcial. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Vitórias da oposição impedem presumir ausência total de competição."
      },
      "pod": {
        "sourceTitles": [
          "Freedom in the World 2025 — Turquia"
        ],
        "rationale": "Coerção sobre expressão e organização sustenta direção autoritária parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não descreve todas as dimensões de defesa ou vigilância individual."
      },
      "con": {
        "sourceTitles": [
          "Constituição turca — edição 2017 em Constitute"
        ],
        "rationale": "Planejamento econômico explícito sustenta direção planejadora parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não certifica execução contemporânea nem planejamento integral da produção."
      },
      "com": {
        "sourceTitles": [
          "Comissão Europeia — relações comerciais com Türkiye"
        ],
        "rationale": "Liberalização industrial efetiva descrita pela contraparte sustenta integração parcial. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não afirma abertura de todos os setores ou inexistência de defesa comercial; extensão proposta ainda sem diretivas do Conselho."
      }
    },
    "coding": {
      "est": {
        "axis": "est",
        "position": "moderate-second",
        "claims": [
          {
            "sourceTitle": "Constituição turca — edição 2017 em Constitute",
            "locator": "Artigos 123 e 126–127",
            "statement": "Órgãos locais eleitos coexistem com tutela administrativa central e afastamento provisório de dirigentes pelo ministro.",
            "basis": "norm",
            "publishedDate": "Edição revista em 2017",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Autonomia local subordinada à tutela central sustenta direção unitária moderada.",
        "uncertainty": "Recorte normativo de 2017; não prova toda a prática territorial atual.",
        "confidence": "medium",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "rep": {
        "axis": "rep",
        "position": "moderate-second",
        "claims": [
          {
            "sourceTitle": "Freedom in the World 2025 — Turquia",
            "locator": "Overview; A1–A2; Key Developments in 2024",
            "statement": "Favoritismo estatal e repressão limitam competição; oposição venceu cidades importantes nas eleições municipais de 2024.",
            "basis": "practice",
            "publishedDate": "Relatório 2025; prática de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Controle assimétrico da competição sustenta direção despótica parcial.",
        "uncertainty": "Vitórias da oposição impedem presumir ausência total de competição.",
        "confidence": "medium",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "pod": {
        "axis": "pod",
        "position": "moderate-first",
        "claims": [
          {
            "sourceTitle": "Freedom in the World 2025 — Turquia",
            "locator": "Overview; Key Developments in 2024",
            "statement": "Opositores e jornalistas foram presos; protestos bloqueados e centenas detidos; plataformas e críticas digitais sofreram restrições.",
            "basis": "practice",
            "publishedDate": "Relatório 2025; prática de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Coerção sobre expressão e organização sustenta direção autoritária parcial.",
        "uncertainty": "Não descreve todas as dimensões de defesa ou vigilância individual.",
        "confidence": "medium",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "con": {
        "axis": "con",
        "position": "moderate-first",
        "claims": [
          {
            "sourceTitle": "Constituição turca — edição 2017 em Constitute",
            "locator": "Artigo 166",
            "statement": "Estado planeja indústria, agricultura, investimento e emprego; atividades de desenvolvimento seguem o plano.",
            "basis": "norm",
            "publishedDate": "Edição revista em 2017",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Planejamento econômico explícito sustenta direção planejadora parcial.",
        "uncertainty": "Não certifica execução contemporânea nem planejamento integral da produção.",
        "confidence": "medium",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "com": {
        "axis": "com",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Comissão Europeia — relações comerciais com Türkiye",
            "locator": "The EU and Türkiye, parágrafos2–6; Trading with the world",
            "statement": "União aduaneira remove tarifas e restrições quantitativas em bens industriais; agricultura tem concessões específicas, serviços e compras públicas aguardam extensão.",
            "basis": "declaration",
            "publishedDate": "Página sem data editorial, contém dados de2025; consultada em2026-10-07",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Liberalização industrial efetiva descrita pela contraparte sustenta integração parcial.",
        "uncertainty": "Não afirma abertura de todos os setores ou inexistência de defesa comercial; extensão proposta ainda sem diretivas do Conselho.",
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
    "id": "saudi-arabia",
    "kind": "country",
    "category": "country",
    "name": "Arábia Saudita",
    "period": "Prática institucional em 2024; Lei Básica na edição com emendas de 2006/2017, sem certificação contemporânea; estratégia PIF declarada para 2026–2030",
    "vec": {
      "est": 50,
      "rep": 20,
      "pod": 80,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 60,
      "com": 50,
      "rel": 20,
      "mor": 40,
      "tec": 50
    },
    "rationale": "Supremacia régia, dissenso, direito religioso, regras de costumes, provisão e investimentos têm suportes próprios.",
    "caveats": "Fonte legal histórica espelhada, não prova de consolidação de 2026. Datas normativa, prática e estratégia permanecem distintas. Artigo 41 exige respeito a tradições, mas não adoção ou abandono cultural explícito: imi desconhecido. Estrutura territorial, defesa, intervenção, comércio e tecnologia seguem desconhecidos. Revisão de escopo econômico em 7/10/2026: provisão/propriedade setorial permanece arquivada como pesquisa delimitada; orientação econômica nacional desconhecida, sem evidência de ranqueamento em eco.",
    "sources": [
      {
        "title": "Freedom in the World 2025 — Saudi Arabia",
        "url": "https://freedomhouse.org/country/saudi-arabia/freedom-world/2025",
        "note": "Monarquia hereditária, ausência de eleições nacionais competitivas e limites a direitos civis."
      },
      {
        "title": "Basic Law of Governance — Bureau of Experts at the Council of Ministers",
        "url": "https://laws.boe.gov.sa/BoeLaws/Laws/LawDetails/16a2e5f8-68c3-4a3d-9a9a-a9a700f2a2d6/1",
        "note": "Fonte oficial para a estrutura monárquica, religião estatal e organização do poder."
      },
      {
        "title": "Freedom in the World 2025 — Arábia Saudita",
        "url": "https://freedomhouse.org/country/saudi-arabia/freedom-world/2025",
        "note": "Narrativa referente a 2024 efetivamente lida; nenhuma conversão de notas ou classificações agregadas."
      },
      {
        "title": "Lei Básica saudita — tradução oficial, edição com emendas até 2017",
        "url": "https://www.refworld.org/sites/default/files/2025-05/alnzam_alasasy_llhkm_1.pdf",
        "note": "Tradução oficial Bureau of Experts em espelho Refworld, 14 páginas; norma árabe prevalece. Capa 02/03/1992, apêndice até 2017; não assume redação de 2026."
      },
      {
        "title": "PIF — estratégia 2026–2030",
        "url": "https://www.pif.gov.sa/en/strategy-and-impact/our-strategy/",
        "note": "Página primária efetivamente lida: objetivos e carteiras 2026–2030, direção de investimentos e colaboração privada; sem converter métricas promocionais."
      }
    ],
    "evidence": {
      "rep": "high",
      "pod": "high",
      "rel": "high",
      "mor": "medium",
      "con": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Lei Básica saudita — tradução oficial, edição com emendas até 2017",
          "Freedom in the World 2025 — Arábia Saudita"
        ],
        "rationale": "Ausência de representação nacional eleita e supremacia régia sustentam despotismo forte. Codificação editorial strong-second: âncora 20, faixa 10–25; a fonte não mede esse número. Limites: Conselho consultivo não equivale a legislatura democrática."
      },
      "pod": {
        "sourceTitles": [
          "Freedom in the World 2025 — Arábia Saudita"
        ],
        "rationale": "Supressão ampla de dissenso sustenta autoritarismo forte. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Não se deduz direção apenas da quantidade de execuções nem de todos os crimes comuns."
      },
      "rel": {
        "sourceTitles": [
          "Lei Básica saudita — tradução oficial, edição com emendas até 2017"
        ],
        "rationale": "Fundamento e aplicação religiosa do direito sustentam direção confessional forte. Codificação editorial strong-second: âncora 20, faixa 10–25; a fonte não mede esse número. Limites: Norma histórica datada, sem certificação de alterações posteriores; não mede crença dos habitantes."
      },
      "mor": {
        "sourceTitles": [
          "Freedom in the World 2025 — Arábia Saudita"
        ],
        "rationale": "Regras estatais de costumes sustentam conservadorismo parcial. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Vestuário e desigualdade não resolvem todos os costumes; não presume rejeição total de reformas."
      },
      "con": {
        "sourceTitles": [
          "PIF — estratégia 2026–2030"
        ],
        "rationale": "Direção pública de investimentos estratégicos sustenta planejamento parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: É mandato de fundo estatal, não comando de toda a produção nem resultado observado da estratégia."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "strong-second",
        "claims": [
          {
            "sourceTitle": "Lei Básica saudita — tradução oficial, edição com emendas até 2017",
            "locator": "Artigo 44",
            "statement": "Rei é autoridade final dos poderes judicial, executivo e legislativo.",
            "basis": "norm",
            "publishedDate": "Edição com emendas até 2017",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "Freedom in the World 2025 — Arábia Saudita",
            "locator": "Overview; Key Developments in 2024, Shura",
            "statement": "Não há autoridades nacionais eleitas; conselho nomeado pelo rei não tem poder legislativo.",
            "basis": "practice",
            "publishedDate": "Relatório 2025; prática de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Ausência de representação nacional eleita e supremacia régia sustentam despotismo forte.",
        "uncertainty": "Conselho consultivo não equivale a legislatura democrática.",
        "confidence": "high",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 20,
        "range": [
          10,
          25
        ]
      },
      "pod": {
        "axis": "pod",
        "position": "strong-first",
        "claims": [
          {
            "sourceTitle": "Freedom in the World 2025 — Arábia Saudita",
            "locator": "Overview; Key Developments in 2024, punição de crítica",
            "statement": "Vigilância extensa e criminalização de dissenso coexistem com penas longas contra crítica política e imprensa.",
            "basis": "practice",
            "publishedDate": "Relatório 2025; prática de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Supressão ampla de dissenso sustenta autoritarismo forte.",
        "uncertainty": "Não se deduz direção apenas da quantidade de execuções nem de todos os crimes comuns.",
        "confidence": "high",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      },
      "rel": {
        "axis": "rel",
        "position": "strong-second",
        "claims": [
          {
            "sourceTitle": "Lei Básica saudita — tradução oficial, edição com emendas até 2017",
            "locator": "Artigos 1, 7, 23 e 48",
            "statement": "Alcorão e Sunna fundamentam governo e decisões judiciais; Estado aplica Sharia e propaga Islã.",
            "basis": "norm",
            "publishedDate": "Edição com emendas até 2017",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Fundamento e aplicação religiosa do direito sustentam direção confessional forte.",
        "uncertainty": "Norma histórica datada, sem certificação de alterações posteriores; não mede crença dos habitantes.",
        "confidence": "high",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 20,
        "range": [
          10,
          25
        ]
      },
      "mor": {
        "axis": "mor",
        "position": "moderate-second",
        "claims": [
          {
            "sourceTitle": "Freedom in the World 2025 — Arábia Saudita",
            "locator": "Overview; Key Developments in 2024, vestuário",
            "statement": "Leis restringem direitos de mulheres; trajes tradicionais foram impostos a funcionários, professores e alunos em 2024.",
            "basis": "practice",
            "publishedDate": "Relatório 2025; prática de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Regras estatais de costumes sustentam conservadorismo parcial.",
        "uncertainty": "Vestuário e desigualdade não resolvem todos os costumes; não presume rejeição total de reformas.",
        "confidence": "medium",
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
        "claims": [
          {
            "sourceTitle": "PIF — estratégia 2026–2030",
            "locator": "Objetivos estratégicos; carteiras e ecossistemas",
            "statement": "PIF dirige investimentos, administra ativos estratégicos e coordena ecossistemas com empresas privadas e governo.",
            "basis": "declaration",
            "publishedDate": "Estratégia 2026–2030; página sem data editorial consultada em 2026-10-07",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Direção pública de investimentos estratégicos sustenta planejamento parcial.",
        "uncertainty": "É mandato de fundo estatal, não comando de toda a produção nem resultado observado da estratégia.",
        "confidence": "medium",
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
    "id": "france",
    "kind": "country",
    "category": "country",
    "name": "França",
    "period": "Prática institucional em 2024; normas constitucionais e de família de 1946–2024, versões oficiais consultadas em 08/10/2026; regime aduaneiro sem data consultado em 07/10/2026",
    "vec": {
      "est": 40,
      "rep": 80,
      "pod": 40,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 40,
      "rel": 80,
      "mor": 60,
      "tec": 50
    },
    "rationale": "Descentralização sob lei nacional, competição parlamentar, direitos com restrições, laicidade e autonomia reprodutiva possuem trechos próprios.",
    "caveats": "Texto completo do Conseil constitutionnel e reaberturas do tratado europeu falharam; comércio permanece desconhecido, sem reutilizar inferência não verificada. Propriedade, planejamento, imigração, defesa, intervenção e tecnologia não receberam evidência neste lote. Com cobre integração aduaneira interna, não livre comércio universal; controles externos e escopo territorial permanecem.",
    "sources": [
      {
        "title": "Freedom in the World — França",
        "url": "https://freedomhouse.org/country/france/freedom-world/2025",
        "note": "Instituições democráticas, liberdades e questões de segurança."
      },
      {
        "title": "Constituição da República Francesa, art. 1",
        "url": "https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000019240997/2022-01-22",
        "note": "Estado indivisível, laico, democrático e social."
      },
      {
        "title": "OECD Government at a Glance 2025",
        "url": "https://www.oecd.org/en/publications/government-at-a-glance-2025_0efd0bcd-en.html",
        "note": "Dimensão do setor público."
      },
      {
        "title": "Freedom in the World 2025 — França",
        "url": "https://freedomhouse.org/country/france/freedom-world/2025",
        "note": "Narrativa institucional de 2024 lida; pontuações agregadas e respostas numéricas não são convertidas em eixos."
      },
      {
        "title": "Constituição francesa, artigo 1 — Legifrance",
        "url": "https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000019240997",
        "note": "Texto integral do artigo, redação vigente desde 2008; não usa a antiga URL congelada em 2022."
      },
      {
        "title": "Constituição francesa, artigo 72 — Legifrance",
        "url": "https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000006527579",
        "note": "Artigo completo: poderes locais, regulamentação, experimentação e controle nacional de legalidade."
      },
      {
        "title": "Constituição francesa, artigo 34 — Legifrance",
        "url": "https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000049255019",
        "note": "Redação em vigor desde 10/03/2024; garantia constitucional da liberdade de interrupção da gravidez."
      },
      {
        "title": "União Europeia — funcionamento da união aduaneira",
        "url": "https://european-union.europa.eu/priorities-and-actions/actions-topic/customs_en",
        "note": "Explicação institucional primária efetivamente lida: ausência de direitos internos e tarifas externas comuns; página sem data editorial."
      },
      {
        "title": "União Europeia — França, pertencimento institucional",
        "url": "https://european-union.europa.eu/principles-countries-history/eu-countries/france_en",
        "note": "Perfil institucional contemporâneo efetivamente lido, usado apenas para delimitar aplicação do regime comum."
      },
      {
        "title": "Préambule1946 — igualdade jurídica de gênero, Legifrance",
        "url": "https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000006527445",
        "note": "§3,27/10/1946: igualdade em todos os domínios. Texto primário indexado lido pelo revisor em8/10/2026; acesso direto403. Incorporação pela Constituição1958 documentada separadamente."
      },
      {
        "title": "Préambule1958 — incorporação constitucional1946, Legifrance",
        "url": "https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000006527447",
        "note": "Texto direto313–317 lido pelo revisor em8/10/2026, versão em vigor desde2/3/2005; referência expressa ao preâmbulo1946. Nova tentativa direta do codificador403."
      },
      {
        "title": "Código Civil francês143 — casamento civil, Legifrance",
        "url": "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000027431993/2026-04-07",
        "note": "Art143, versão exibida7/4/2026, redação em vigor19/5/2013; texto direto150–154 lido pelo revisor em8/10/2026. Tentativa URL8/10/2026 falhou; nova tentativa direta do codificador403."
      }
    ],
    "evidence": {
      "est": "medium",
      "rep": "high",
      "pod": "medium",
      "rel": "high",
      "mor": "medium",
      "com": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Constituição francesa, artigo 1 — Legifrance",
          "Constituição francesa, artigo 72 — Legifrance"
        ],
        "rationale": "Autonomia local substantiva dentro da supremacia legal nacional sustenta direção unitária moderada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não se deduz centralização do adjetivo indivisível sozinho; autonomia fiscal, prática territorial e ultramar exigem revisão própria."
      },
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — França"
        ],
        "rationale": "Competição e representação efetivas sustentam a direção democrática neste recorte. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Competição eleitoral não elimina desigualdade de representação, financiamento ou déficits civis."
      },
      "pod": {
        "sourceTitles": [
          "Freedom in the World 2025 — França"
        ],
        "rationale": "Garantias civis com restrições concretas sustentam liberdade parcial. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: A narrativa não autoriza classificar toda a segurança francesa como permissiva nem resolver todas as políticas digitais."
      },
      "rel": {
        "sourceTitles": [
          "Constituição francesa, artigo 1 — Legifrance"
        ],
        "rationale": "Laicidade constitutiva explícita sustenta separação institucional. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Norma, não certificação de igualdade prática; restrições religiosas e conflitos sobre símbolos requerem auditoria própria."
      },
      "mor": {
        "sourceTitles": [
          "Constituição francesa, artigo 34 — Legifrance",
          "Préambule1946 — igualdade jurídica de gênero, Legifrance",
          "Código Civil francês143 — casamento civil, Legifrance"
        ],
        "rationale": "Igualdade jurídica de gênero em todos os domínios, casamento civil sem distinção do sexo dos cônjuges e liberdade reprodutiva constitucional sustentam reforma social moderada no desenho jurídico. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Normas de2013/2024 e preâmbulo incorporado não certificam igualdade ou acesso efetivos, ausência de condições legais nem todas as normas de família, sexualidade ou costumes; não são pontos somados nem prova de progresso irrestrito."
      },
      "com": {
        "sourceTitles": [
          "União Europeia — França, pertencimento institucional",
          "União Europeia — funcionamento da união aduaneira"
        ],
        "rationale": "Remoção de barreiras internas num regime comum sustenta integração comercial parcial. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não é inferência de pertença sozinha; tarifas e controles externos persistem. França: não estende automaticamente regime a todos os territórios ultramarinos."
      }
    },
    "coding": {
      "est": {
        "axis": "est",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Constituição francesa, artigo 1 — Legifrance",
            "locator": "Artigo 1",
            "statement": "República indivisível com organização descentralizada.",
            "basis": "norm",
            "publishedDate": "2008-07-25",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "Constituição francesa, artigo 72 — Legifrance",
            "locator": "Artigo 72, parágrafos 2–6",
            "statement": "Conselhos locais administram e regulamentam dentro da lei; representante nacional controla legalidade.",
            "basis": "norm",
            "publishedDate": "2003-03-29",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Autonomia local substantiva dentro da supremacia legal nacional sustenta direção unitária moderada.",
        "uncertainty": "Não se deduz centralização do adjetivo indivisível sozinho; autonomia fiscal, prática territorial e ultramar exigem revisão própria.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "rep": {
        "axis": "rep",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Freedom in the World 2025 — França",
            "locator": "Overview; Key Developments in 2024, eleições legislativas e queda do governo",
            "statement": "Eleições competitivas produziram Parlamento plural e governo minoritário sujeito a voto de desconfiança.",
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
            "sourceTitle": "Freedom in the World 2025 — França",
            "locator": "Overview; Key Developments in 2024, protestos, Nova Caledônia e Martinica",
            "statement": "Direitos civis coexistem com proibições de protestos, toques de recolher e bloqueio de TikTok na Nova Caledônia.",
            "basis": "practice",
            "publishedDate": "Edição 2025; acontecimentos de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Garantias civis com restrições concretas sustentam liberdade parcial.",
        "uncertainty": "A narrativa não autoriza classificar toda a segurança francesa como permissiva nem resolver todas as políticas digitais.",
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
            "sourceTitle": "Constituição francesa, artigo 1 — Legifrance",
            "locator": "Artigo 1",
            "statement": "Estado laico respeita todas as crenças e igualdade sem distinção religiosa.",
            "basis": "norm",
            "publishedDate": "2008-07-25",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Laicidade constitutiva explícita sustenta separação institucional.",
        "uncertainty": "Norma, não certificação de igualdade prática; restrições religiosas e conflitos sobre símbolos requerem auditoria própria.",
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
        "reviewedOn": "2026-10-08",
        "claims": [
          {
            "sourceTitle": "Constituição francesa, artigo 34 — Legifrance",
            "locator": "Art34, parágrafo iniciado La loi détermine les conditions; texto direto313–347",
            "statement": "A lei determina condições para exercer a liberdade constitucionalmente garantida da mulher de interromper voluntariamente a gravidez.",
            "basis": "norm",
            "publishedDate": "Redação em vigor10/3/2024; lei constitucional2024-200 de8/3/2024",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Préambule1946 — igualdade jurídica de gênero, Legifrance",
            "locator": "Preâmbulo1946, terceiro parágrafo substantivo/§3; incorporado pelo preâmbulo1958, texto direto313–317, fonte auxiliar listada",
            "statement": "A lei garante à mulher direitos iguais aos do homem em todos os domínios; o preâmbulo1958 refere expressamente o preâmbulo1946.",
            "basis": "norm",
            "publishedDate": "27/10/1946; incorporação1958, versão do preâmbulo em vigor2/3/2005",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Código Civil francês143 — casamento civil, Legifrance",
            "locator": "Código Civil Art143, texto direto150–154; versão exibida7/4/2026",
            "statement": "O casamento civil pode ser celebrado entre duas pessoas de sexo diferente ou do mesmo sexo.",
            "basis": "norm",
            "publishedDate": "Redação em vigor19/5/2013; lei2013-404 de17/5/2013Art1",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Igualdade jurídica de gênero em todos os domínios, casamento civil sem distinção do sexo dos cônjuges e liberdade reprodutiva constitucional sustentam reforma social moderada no desenho jurídico.",
        "uncertainty": "Normas de2013/2024 e preâmbulo incorporado não certificam igualdade ou acesso efetivos, ausência de condições legais nem todas as normas de família, sexualidade ou costumes; não são pontos somados nem prova de progresso irrestrito.",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "com": {
        "axis": "com",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "União Europeia — França, pertencimento institucional",
            "locator": "Overview, EU Member State",
            "statement": "Integra a União Europeia desde 1958.",
            "basis": "declaration",
            "publishedDate": "Página sem data editorial, consultada em 2026-10-07",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "União Europeia — funcionamento da união aduaneira",
            "locator": "The EU customs union in action, primeiros três parágrafos",
            "statement": "Não há direitos aduaneiros entre membros; importações externas recebem tarifa comum e controles.",
            "basis": "declaration",
            "publishedDate": "Página sem data editorial, consultada em 2026-10-07",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Remoção de barreiras internas num regime comum sustenta integração comercial parcial.",
        "uncertainty": "Não é inferência de pertença sozinha; tarifas e controles externos persistem. França: não estende automaticamente regime a todos os territórios ultramarinos.",
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
    "id": "canada-current-2025",
    "kind": "country",
    "category": "country",
    "name": "Canadá",
    "period": "Normas constitucionais e leis civis/culturais em versões oficiais consultadas em 08/10/2026; precedente de neutralidade de 2015. Não certifica prática de 2025.",
    "vec": {
      "est": 60,
      "rep": 60,
      "pod": 40,
      "imi": 40,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 60,
      "mor": 60,
      "tec": 50
    },
    "rationale": "Organização provincial, representação, garantias processuais, pluralidade cultural, igualdade civil e neutralidade institucional tratadas como normas jurídicas distintas.",
    "caveats": "Perfil normativo, sem opiniões dos habitantes ou cumprimento medido. Limites federais, Senado nomeado, cláusula33, escolas confessionais e condições familiares/culturais explicitados por eixo. Seis demais construtos desconhecidos.",
    "sources": [
      {
        "title": "Constituição / documento institucional — Canadá",
        "url": "https://www.constituteproject.org/constitution/Canada_2011",
        "note": "Fonte constitucional ou institucional para a organização formal do Estado; sustenta somente os eixos explicitamente cobertos no documento."
      },
      {
        "title": "Freedom in the World 2025 — Canadá",
        "url": "https://freedomhouse.org/country/canada/freedom-world/2025",
        "note": "Relatório de eventos de 2024, competição política e direitos civis; avaliação independente para confrontar texto constitucional e prática."
      },
      {
        "title": "Canada — Constitution Act1867, competências legislativas, Justiça",
        "url": "https://laws-lois.justice.gc.ca/eng/const/page-3.html",
        "note": "Autor leu diretamente91–95; revisor leu rota/eng/Const/page-3.html. Portal modificado28/9/2026, consulta8/10/2026; texto normativo e exceções nacionais, não prática."
      },
      {
        "title": "Canada — Constitution Act1867, Senado e Parlamento, Justiça",
        "url": "https://laws-lois.justice.gc.ca/eng/const/page-1.html",
        "note": "Autor leu17/21–24/29/37 no fulltext oficial; revisor leu diretamentepage1. Senado nomeado e mandatos/aposentadoria, contraponto a inferência democrática máxima."
      },
      {
        "title": "Canada — Charter1982, Justiça, edição oferecida em2026",
        "url": "https://laws-lois.justice.gc.ca/eng/const/page-12.html",
        "note": "Autor e revisor leram efetivamente1–35.1, inclusive limites1, exceções33, direitos25/27/28/29/35; recorte jurídico, não cumprimento. Portal modificado28/9/2026."
      },
      {
        "title": "Canada — Canadian Multiculturalism Act, Justiça",
        "url": "https://laws-lois.justice.gc.ca/eng/acts/C-18.7/FullText.html",
        "note": "Texto direto lido: atual21/9/2026, última emenda1/4/2014. Revisor leupage1:2–3/5–6; exclusões de instituições territoriais/indígenas e compromisso com línguas oficiais explícitos."
      },
      {
        "title": "Canada — Civil Marriage Act, Justiça",
        "url": "https://lois-laws.justice.gc.ca/eng/acts/C-31.5/FullText.html",
        "note": "Autor leu texto direto/indexado2–4 e PDF oficial indexado atual17/3/2026, última emenda18/6/2015. Revisor leu FullText atual21/9/2026, não o PDF17/3. Igual casamento civil e exceções de consciência/religião."
      },
      {
        "title": "Canada — Saguenay2015SCC16, Supremo, texto primário indexado",
        "url": "https://decisions.scc-csc.ca/scc-csc/scc-csc/en/item/15288/index.do?iframe=true",
        "note": "Autor leu efetivamente texto primário indexado72–74; revisor leu partes72–74/75–90/132–137/148. Aberturas diretas HTML/PDF403. Não alegar leitura direta nem separação estrita:137 expressamente a rejeita. Decisão15/4/2015."
      }
    ],
    "evidence": {
      "est": "medium",
      "rep": "medium",
      "pod": "medium",
      "imi": "medium",
      "mor": "medium",
      "rel": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Canada — Constitution Act1867, competências legislativas, Justiça"
        ],
        "rationale": "Autonomia legislativa provincial abrangendo vários domínios sustenta descentralização normativa moderada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Poder nacional de paz/ordem/bom governo, competências enumeradas, obras de interesse nacional e prevalência federal92A(3)limitam autonomia. Não confederação soberana nem prática territorial medida."
      },
      "rep": {
        "sourceTitles": [
          "Canada — Charter1982, Justiça, edição oferecida em2026",
          "Canada — Constitution Act1867, Senado e Parlamento, Justiça"
        ],
        "rationale": "Representação eleitoral constitucional e renovação legislativa sustentam direção democrática moderada, coexistindo com Senado não eleito. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não certificar eleições2025/2026 ou práticas partidárias. Senado nomeado, Coroa e prorrogação por guerra/invasão/insurreição4(2)excluem democracia irrestrita; antigo97não é recertificado."
      },
      "pod": {
        "sourceTitles": [
          "Canada — Charter1982, Justiça, edição oferecida em2026"
        ],
        "rationale": "Salvaguardas gerais contra coerção e controle judicial sustentam direção libertária normativa moderada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Limites legais justificáveis1e declarações33podem afastar temporariamente2/7–15, renováveis após cinco anos. Não cumprimento policial, drogas, armas, segurança ou saldo nacional de liberdades observado."
      },
      "imi": {
        "sourceTitles": [
          "Canada — Canadian Multiculturalism Act, Justiça",
          "Canada — Charter1982, Justiça, edição oferecida em2026"
        ],
        "rationale": "Preservação cultural geral e inclusão institucional de origens diversas sustentam multiculturalismo normativo moderado. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Mantém compromisso inglês/francês, exclusões institucionais legais e acordos provinciais. Não entrada migratória irrestrita, cidadania automática, ausência de assimilação prática ou igualdade de todas línguas oficiais."
      },
      "mor": {
        "sourceTitles": [
          "Canada — Charter1982, Justiça, edição oferecida em2026",
          "Canada — Civil Marriage Act, Justiça"
        ],
        "rationale": "Igualdade geral de gênero e casamento civil sem exclusão por mesmo sexo sustentam reforma social jurídica moderada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Liberdades religiosas/de consciência preservadas, requisitos familiares e exceção33explicitados; não implementação, acesso reprodutivo, todos costumes ou progressismo irrestrito."
      },
      "rel": {
        "sourceTitles": [
          "Canada — Saguenay2015SCC16, Supremo, texto primário indexado",
          "Canada — Charter1982, Justiça, edição oferecida em2026"
        ],
        "rationale": "Dever jurídico geral de neutralidade das instituições diante de crença e não crença sustenta direção não confessional moderada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não separação estrita entre igrejas e Estado (§137), irreligiosidade líquida do país ou opinião dos habitantes. Escolas confessionais93/29, exceçãoQuébec93A, Deus no preâmbulo e33são contrapontos; decisão2015não auditora toda prática contemporânea."
      }
    },
    "coding": {
      "est": {
        "axis": "est",
        "position": "moderate-first",
        "confidence": "medium",
        "reviewedOn": "2026-10-08",
        "claims": [
          {
            "sourceTitle": "Canada — Constitution Act1867, competências legislativas, Justiça",
            "locator": "1867§§91–95, em especial92/92A; contrapontos91/92(10)c/92A(3)/93",
            "statement": "Províncias têm competências legislativas exclusivas em tributação local, municípios, propriedade/direitos civis, justiça, educação e recursos; União conserva domínios enumerados e exceções nacionais.",
            "publishedDate": "Constitution Act1867, texto oficial oferecido em consulta8/10/2026; portal modificado28/9/2026",
            "basis": "norm",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Autonomia legislativa provincial abrangendo vários domínios sustenta descentralização normativa moderada.",
        "uncertainty": "Poder nacional de paz/ordem/bom governo, competências enumeradas, obras de interesse nacional e prevalência federal92A(3)limitam autonomia. Não confederação soberana nem prática territorial medida.",
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
        "reviewedOn": "2026-10-08",
        "claims": [
          {
            "sourceTitle": "Canada — Charter1982, Justiça, edição oferecida em2026",
            "locator": "Charter§§3–5; contraponto4(2)",
            "statement": "Cidadãos têm direito de votar e candidatar-se à Câmara e assembleias; mandatos limitados e sessões anuais são exigidos.",
            "publishedDate": "1982; texto oficial oferecido em consulta8/10/2026",
            "basis": "norm",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Canada — Constitution Act1867, Senado e Parlamento, Justiça",
            "locator": "1867§§17/21–24/29/37",
            "statement": "Parlamento inclui Senado nomeado; Câmara possui composição representativa, enquanto senadores são convocados pela autoridade executiva sob requisitos próprios.",
            "publishedDate": "1867, texto oficial oferecido em consulta8/10/2026",
            "basis": "norm",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Representação eleitoral constitucional e renovação legislativa sustentam direção democrática moderada, coexistindo com Senado não eleito.",
        "uncertainty": "Não certificar eleições2025/2026 ou práticas partidárias. Senado nomeado, Coroa e prorrogação por guerra/invasão/insurreição4(2)excluem democracia irrestrita; antigo97não é recertificado.",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "pod": {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "reviewedOn": "2026-10-08",
        "claims": [
          {
            "sourceTitle": "Canada — Charter1982, Justiça, edição oferecida em2026",
            "locator": "Charter§§7–14/24, contrapontos1/33",
            "statement": "Protege liberdade pessoal, revistas razoáveis, não arbitrariedade da prisão, advogado/habeas corpus, julgamento independente e não punição cruel; permite reparação judicial e exclusão de prova ilícita condicionada.",
            "publishedDate": "1982; texto oficial oferecido em consulta8/10/2026",
            "basis": "norm",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Salvaguardas gerais contra coerção e controle judicial sustentam direção libertária normativa moderada.",
        "uncertainty": "Limites legais justificáveis1e declarações33podem afastar temporariamente2/7–15, renováveis após cinco anos. Não cumprimento policial, drogas, armas, segurança ou saldo nacional de liberdades observado.",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "imi": {
        "axis": "imi",
        "position": "moderate-second",
        "confidence": "medium",
        "reviewedOn": "2026-10-08",
        "claims": [
          {
            "sourceTitle": "Canada — Canadian Multiculturalism Act, Justiça",
            "locator": "§3(1)a–j/3(2), contrapontos2/3(1)i–j/5(2)/6(2)",
            "statement": "Política geral preserva/partilha heranças culturais, promove participação de todas origens e idiomas diversos; impõe deveres a instituições federais.",
            "publishedDate": "Lei1988; atual21/9/2026, última emenda1/4/2014",
            "basis": "norm",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Canada — Charter1982, Justiça, edição oferecida em2026",
            "locator": "Charter§§25/27/35 e16–23",
            "statement": "Interpretação da Charter deve preservar patrimônio multicultural e direitos indígenas; regime de idiomas oficiais e direitos minoritários linguísticos permanecem específicos.",
            "publishedDate": "1982; texto oficial oferecido em consulta8/10/2026",
            "basis": "norm",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Preservação cultural geral e inclusão institucional de origens diversas sustentam multiculturalismo normativo moderado.",
        "uncertainty": "Mantém compromisso inglês/francês, exclusões institucionais legais e acordos provinciais. Não entrada migratória irrestrita, cidadania automática, ausência de assimilação prática ou igualdade de todas línguas oficiais.",
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
        "reviewedOn": "2026-10-08",
        "claims": [
          {
            "sourceTitle": "Canada — Charter1982, Justiça, edição oferecida em2026",
            "locator": "Charter§§15/28/35(4); contraponto33",
            "statement": "Direitos e liberdades são garantidos igualmente a homens/mulheres e lei protege igualdade contra discriminação; inclui igualdade nos direitos indígenas.",
            "publishedDate": "1982; texto oficial oferecido em consulta8/10/2026",
            "basis": "norm",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Canada — Civil Marriage Act, Justiça",
            "locator": "§§2/4; contrapontos3/3.1 e2.1–2.3",
            "statement": "Casamento civil é união de duas pessoas, não invalidável por mesmo sexo; consentimento/idade/monogamia e liberdade de oficiais religiosos permanecem.",
            "publishedDate": "Lei2005, última emenda18/6/2015; autor PDF oficial indexado17/3/2026; revisor FullText atual21/9/2026",
            "basis": "norm",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Igualdade geral de gênero e casamento civil sem exclusão por mesmo sexo sustentam reforma social jurídica moderada.",
        "uncertainty": "Liberdades religiosas/de consciência preservadas, requisitos familiares e exceção33explicitados; não implementação, acesso reprodutivo, todos costumes ou progressismo irrestrito.",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "rel": {
        "axis": "rel",
        "position": "moderate-first",
        "confidence": "medium",
        "reviewedOn": "2026-10-08",
        "claims": [
          {
            "sourceTitle": "Canada — Saguenay2015SCC16, Supremo, texto primário indexado",
            "locator": "§§72–74/75–90/132–137/148;137não separação estrita",
            "statement": "Instituições estatais devem ser neutras perante crença e não crença, sem favorecer ou impedir religião; neutralidade institucional não exclui religião individual do espaço público.",
            "publishedDate": "2015-04-15, decisão2015SCC16",
            "basis": "norm",
            "accessedDate": "2026-10-08"
          },
          {
            "sourceTitle": "Canada — Charter1982, Justiça, edição oferecida em2026",
            "locator": "Preâmbulo/§§2(a)/29/33; fonte auxiliar1867§93/93A",
            "statement": "Carta reconhece liberdade religiosa, preserva direitos escolares confessionais e invoca Deus no preâmbulo; declaração33pode afastar2temporariamente.",
            "publishedDate": "1982, texto oficial oferecido8/10/2026; contraponto1867§93/93A",
            "basis": "norm",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "Dever jurídico geral de neutralidade das instituições diante de crença e não crença sustenta direção não confessional moderada.",
        "uncertainty": "Não separação estrita entre igrejas e Estado (§137), irreligiosidade líquida do país ou opinião dos habitantes. Escolas confessionais93/29, exceçãoQuébec93A, Deus no preâmbulo e33são contrapontos; decisão2015não auditora toda prática contemporânea.",
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
    "id": "andorra-current-2025",
    "name": "Andorra",
    "aliases": [],
    "kind": "country",
    "category": "country",
    "period": "Prática em 2024; norma: 1993, texto oferecido pelo Parlamento em consulta de 2026; sem certificação independente de consolidação; Descrição aduaneira EEAS de24/11/2021 e autorização do Conselho de16/07/2026, sem prova das etapas posteriores",
    "vec": {
      "est": 40,
      "rep": 80,
      "pod": 40,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 40,
      "rel": 40,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "rep": "high",
      "est": "medium",
      "rel": "medium",
      "pod": "medium",
      "com": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — Andorra"
        ],
        "rationale": "Eleições parlamentares regulares consideradas livres e justas. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Naturalização restritiva exclui muitos residentes do sufrágio; não codificamos integração cultural a partir de cidadania."
      },
      "est": {
        "sourceTitles": [
          "Texto constitucional — Andorra / portal oficial"
        ],
        "rationale": "Conselhos locais eleitos têm autogoverno, orçamento, tributação e competências de planejamento e serviços comunais. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Autonomia local substantiva dentro de leis nacionais; não é estrutura federativa nem avaliação de execução. Escopo temporal: 1993, texto oferecido pelo Parlamento em consulta de 2026; sem certificação independente de consolidação."
      },
      "rel": {
        "sourceTitles": [
          "Texto constitucional — Andorra / portal oficial"
        ],
        "rationale": "Liberdade religiosa coexistindo com cooperação especial com Igreja Católica e bispo entre os copríncipes. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Privilégio institucional não demonstra que toda legislação seja religiosa nem crenças individuais. Escopo temporal: 1993, texto oferecido pelo Parlamento em consulta de 2026; sem certificação independente de consolidação."
      },
      "pod": {
        "sourceTitles": [
          "Texto constitucional — Andorra / portal oficial"
        ],
        "rationale": "Proíbe morte e tortura, assegura defesa e exige controle judicial da detenção e ingresso domiciliar. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Garantias processuais normativas, sem demonstrar todas as políticas de armas, drogas ou vigilância; exceções emergenciais no artigo 42. Escopo temporal: 1993, texto oferecido pelo Parlamento em consulta de 2026; sem certificação independente de consolidação."
      },
      "com": {
        "sourceTitles": [
          "EEAS — relações aduaneiras com Andorra",
          "Conselho da UE — autorização de acordo com Andorra e San Marino"
        ],
        "rationale": "Integração aduaneira datada e ampliação comercial expressamente negociada sustentam abertura parcial. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Declaração de2021 não certifica regime atual; autorização de2026 não comprova assinatura, ratificação ou aplicação. Não afirma adesão à UE."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Freedom in the World 2025 — Andorra",
            "locator": "Overview; Key Developments in 2024",
            "statement": "Eleições parlamentares regulares consideradas livres e justas.",
            "basis": "practice",
            "publishedDate": "2025; observações de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Eleições parlamentares regulares consideradas livres e justas.",
        "uncertainty": "Naturalização restritiva exclui muitos residentes do sufrágio; não codificamos integração cultural a partir de cidadania.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      },
      "est": {
        "axis": "est",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Texto constitucional — Andorra / portal oficial",
            "locator": "Artigos 79–80",
            "statement": "Conselhos locais eleitos têm autogoverno, orçamento, tributação e competências de planejamento e serviços comunais.",
            "basis": "norm",
            "publishedDate": "1993, texto oferecido pelo Parlamento em consulta de 2026; sem certificação independente de consolidação",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Conselhos locais eleitos têm autogoverno, orçamento, tributação e competências de planejamento e serviços comunais.",
        "uncertainty": "Autonomia local substantiva dentro de leis nacionais; não é estrutura federativa nem avaliação de execução. Escopo temporal: 1993, texto oferecido pelo Parlamento em consulta de 2026; sem certificação independente de consolidação.",
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
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Texto constitucional — Andorra / portal oficial",
            "locator": "Artigos 11(1)–(3) e 43(2)",
            "statement": "Liberdade religiosa coexistindo com cooperação especial com Igreja Católica e bispo entre os copríncipes.",
            "basis": "norm",
            "publishedDate": "1993, texto oferecido pelo Parlamento em consulta de 2026; sem certificação independente de consolidação",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Liberdade religiosa coexistindo com cooperação especial com Igreja Católica e bispo entre os copríncipes.",
        "uncertainty": "Privilégio institucional não demonstra que toda legislação seja religiosa nem crenças individuais. Escopo temporal: 1993, texto oferecido pelo Parlamento em consulta de 2026; sem certificação independente de consolidação.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "pod": {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Texto constitucional — Andorra / portal oficial",
            "locator": "Artigos 8–10 e 15",
            "statement": "Proíbe morte e tortura, assegura defesa e exige controle judicial da detenção e ingresso domiciliar.",
            "basis": "norm",
            "publishedDate": "1993, texto oferecido pelo Parlamento em consulta de 2026; sem certificação independente de consolidação",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Proíbe morte e tortura, assegura defesa e exige controle judicial da detenção e ingresso domiciliar.",
        "uncertainty": "Garantias processuais normativas, sem demonstrar todas as políticas de armas, drogas ou vigilância; exceções emergenciais no artigo 42. Escopo temporal: 1993, texto oferecido pelo Parlamento em consulta de 2026; sem certificação independente de consolidação.",
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
            "sourceTitle": "EEAS — relações aduaneiras com Andorra",
            "locator": "Economic relations, trade, investments",
            "statement": "União aduaneira industrial e entrada sem direitos para produtos agrícolas andorranos são descritas no regime de1990.",
            "basis": "declaration",
            "publishedDate": "2021-11-24",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "Conselho da UE — autorização de acordo com Andorra e San Marino",
            "locator": "Parágrafos iniciais; elementos essenciais; Next steps",
            "statement": "Conselho autoriza assinatura/aplicação provisória de acordo de mercado interno ampliado; acesso financeiro é progressivo e condicionado a auditoria.",
            "basis": "declaration",
            "publishedDate": "2026-07-16; revisão2026-07-17",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Integração aduaneira datada e ampliação comercial expressamente negociada sustentam abertura parcial.",
        "uncertainty": "Declaração de2021 não certifica regime atual; autorização de2026 não comprova assinatura, ratificação ou aplicação. Não afirma adesão à UE.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      }
    },
    "sources": [
      {
        "title": "Texto constitucional — Andorra / portal oficial",
        "url": "https://www.consellgeneral.ad/fitxers/documents/constitucio/const-en",
        "note": "Texto primário lido em 7/10/2026. Versão: 1993, texto oferecido pelo Parlamento em consulta de 2026; sem certificação independente de consolidação. Artigos 11,43,51,79–80: Parlamentarismo com copríncipes e autonomia administrativa e financeira das paróquias. Norma no texto apresentado pelo Parlamento consultado em 2026; não prova execução em 2024 nem consolidação independente."
      },
      {
        "title": "Freedom in the World 2025 — Andorra",
        "url": "https://freedomhouse.org/country/andorra/freedom-world/2025",
        "note": "Overview e Key Developments in 2024 efetivamente lidos em 7/10/2026; relatório abreviado de 2025. Usam-se narrativas específicas, sem conversão de notas numéricas."
      },
      {
        "title": "EEAS — relações aduaneiras com Andorra",
        "url": "https://www.eeas.europa.eu/topic-page/european-union-and-principality-andorra_en",
        "note": "Página primária de24/11/2021 efetivamente aberta: regime industrial e direitos de entrada agrícola na UE; camada histórica."
      },
      {
        "title": "Conselho da UE — autorização de acordo com Andorra e San Marino",
        "url": "https://www.consilium.europa.eu/en/press/press-releases/2026/07/16/council-greenlights-eu-deal-with-andorra-and-san-marino/",
        "note": "Comunicado16/7/2026, revisão17/7: autorização de assinatura/aplicação provisória; etapas posteriores não são presumidas realizadas."
      }
    ],
    "rationale": "Eleições parlamentares regulares consideradas livres e justas. Conselhos locais eleitos têm autogoverno, orçamento, tributação e competências de planejamento e serviços comunais. Liberdade religiosa coexistindo com cooperação especial com Igreja Católica e bispo entre os copríncipes. Proíbe morte e tortura, assegura defesa e exige controle judicial da detenção e ingresso domiciliar. Aborto permanecia completamente proibido; ativista crítica foi absolvida de difamação.",
    "caveats": "Naturalização restritiva exclui muitos residentes do sufrágio; não codificamos integração cultural a partir de cidadania. Autonomia local substantiva dentro de leis nacionais; não é estrutura federativa nem avaliação de execução. Escopo temporal: 1993, texto oferecido pelo Parlamento em consulta de 2026; sem certificação independente de consolidação. Privilégio institucional não demonstra que toda legislação seja religiosa nem crenças individuais. Escopo temporal: 1993, texto oferecido pelo Parlamento em consulta de 2026; sem certificação independente de consolidação. Garantias processuais normativas, sem demonstrar todas as políticas de armas, drogas ou vigilância; exceções emergenciais no artigo 42. Escopo temporal: 1993, texto oferecido pelo Parlamento em consulta de 2026; sem certificação independente de consolidação. Codificação parcial da escolha reprodutiva, sem inferir conservadorismo extremo em todos os costumes; absolvição limita conclusão sobre repressão. Âncoras editoriais não são medições. Normas e execução têm escopos distintos. Eixos ausentes são desconhecidos; cobertura menor que seis eixos para matches. Con permanece desconhecido: direito de empresa/mercado e permissão genérica de intervenção não provam predominância operacional. Com possui escopos datados e condicionais explícitos. Revisão de escopo em8/10/2026: a passagem setorial permanece arquivada como pesquisa delimitada; direção geral no eixo mor desconhecida, sem evidência de ranqueamento."
  },
  {
    "id": "malta-current-2025",
    "name": "Malta",
    "aliases": [],
    "kind": "country",
    "category": "country",
    "period": "Prática em 2024; norma: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026; Regime aduaneiro descrito institucionalmente em páginas sem data consultadas em 2026-10-07",
    "vec": {
      "est": 50,
      "rep": 80,
      "pod": 50,
      "imi": 50,
      "dip": 40,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 40,
      "rel": 40,
      "mor": 60,
      "tec": 50
    },
    "evidence": {
      "rep": "high",
      "rel": "medium",
      "dip": "medium",
      "mor": "medium",
      "com": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — Malta"
        ],
        "rationale": "Eleições regulares competitivas e alternância periódica; presidência cerimonial eleita pelo Parlamento em 2024. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Barreiras a partidos pequenos e corrupção continuam; prática de 2024 e normas de 2026 são recortes distintos."
      },
      "rel": {
        "sourceTitles": [
          "Texto constitucional — Malta / portal oficial"
        ],
        "rationale": "Religião católica estatal e ensino religioso nas escolas públicas coexistem com liberdade de culto e recusa de instrução religiosa. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Norma de 2026, sem afirmar prática escolar universal ou identidade religiosa da população. Escopo temporal: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026."
      },
      "dip": {
        "sourceTitles": [
          "Texto constitucional — Malta / portal oficial"
        ],
        "rationale": "Adota neutralidade, não alinhamento e recusa alianças militares, com exceções de autodefesa e medidas da ONU. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Orientação normativa em 2026, sem afirmar ausência de forças de defesa ou não intervenção absoluta. Escopo temporal: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026."
      },
      "mor": {
        "sourceTitles": [
          "Texto constitucional — Malta / portal oficial"
        ],
        "rationale": "Proteção antidiscriminatória inclui sexo, orientação sexual e identidade de gênero. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Proteção normativa parcial; artigo 45 preserva exceções, inclusive matérias de direito pessoal, e não estabelece toda política de aborto ou família. Escopo temporal: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026."
      },
      "com": {
        "sourceTitles": [
          "União Europeia — Malta, pertencimento institucional",
          "União Europeia — funcionamento da união aduaneira"
        ],
        "rationale": "Remoção de barreiras internas num regime comum sustenta integração comercial parcial. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não é inferência de pertença sozinha; tarifas e controles externos persistem. O recorte é o regime aduaneiro comum aplicado a Malta."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "Freedom in the World 2025 — Malta",
            "locator": "Overview; Key Developments in 2024",
            "statement": "Eleições regulares competitivas e alternância periódica; presidência cerimonial eleita pelo Parlamento em 2024.",
            "basis": "practice",
            "publishedDate": "2025; observações de 2024",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Eleições regulares competitivas e alternância periódica; presidência cerimonial eleita pelo Parlamento em 2024.",
        "uncertainty": "Barreiras a partidos pequenos e corrupção continuam; prática de 2024 e normas de 2026 são recortes distintos.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 80,
        "range": [
          75,
          90
        ]
      },
      "rel": {
        "axis": "rel",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Texto constitucional — Malta / portal oficial",
            "locator": "Artigos 2 e 40",
            "statement": "Religião católica estatal e ensino religioso nas escolas públicas coexistem com liberdade de culto e recusa de instrução religiosa.",
            "basis": "norm",
            "publishedDate": "Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Religião católica estatal e ensino religioso nas escolas públicas coexistem com liberdade de culto e recusa de instrução religiosa.",
        "uncertainty": "Norma de 2026, sem afirmar prática escolar universal ou identidade religiosa da população. Escopo temporal: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "dip": {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Texto constitucional — Malta / portal oficial",
            "locator": "Artigo 1(3)",
            "statement": "Adota neutralidade, não alinhamento e recusa alianças militares, com exceções de autodefesa e medidas da ONU.",
            "basis": "norm",
            "publishedDate": "Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Adota neutralidade, não alinhamento e recusa alianças militares, com exceções de autodefesa e medidas da ONU.",
        "uncertainty": "Orientação normativa em 2026, sem afirmar ausência de forças de defesa ou não intervenção absoluta. Escopo temporal: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026.",
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
            "sourceTitle": "Texto constitucional — Malta / portal oficial",
            "locator": "Artigo 45(1)–(5), versão consultada em 2026",
            "statement": "Proteção antidiscriminatória inclui sexo, orientação sexual e identidade de gênero.",
            "basis": "norm",
            "publishedDate": "Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Proteção antidiscriminatória inclui sexo, orientação sexual e identidade de gênero.",
        "uncertainty": "Proteção normativa parcial; artigo 45 preserva exceções, inclusive matérias de direito pessoal, e não estabelece toda política de aborto ou família. Escopo temporal: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "com": {
        "axis": "com",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "União Europeia — Malta, pertencimento institucional",
            "locator": "Overview, EU Member State",
            "statement": "Integra a União Europeia desde 2004.",
            "basis": "declaration",
            "publishedDate": "Página sem data editorial, consultada em 2026-10-07",
            "accessedDate": "2026-10-07"
          },
          {
            "sourceTitle": "União Europeia — funcionamento da união aduaneira",
            "locator": "The EU customs union in action, primeiros três parágrafos",
            "statement": "Não há direitos aduaneiros entre membros; importações externas recebem tarifa comum e controles.",
            "basis": "declaration",
            "publishedDate": "Página sem data editorial, consultada em 2026-10-07",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Remoção de barreiras internas num regime comum sustenta integração comercial parcial.",
        "uncertainty": "Não é inferência de pertença sozinha; tarifas e controles externos persistem. O recorte é o regime aduaneiro comum aplicado a Malta.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      }
    },
    "sources": [
      {
        "title": "Texto constitucional — Malta / portal oficial",
        "url": "https://legislation.mt/eli/const/eng/pdf",
        "note": "Texto primário lido em 7/10/2026. Versão: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026. Artigos 1,2,10,40,45: Constituição oficial consolidada substitui tradução de 2016 marcada como posteriormente emendada. O texto é uma fonte normativa datada, não certificado de execução ou consolidação de todas as emendas."
      },
      {
        "title": "Freedom in the World 2025 — Malta",
        "url": "https://freedomhouse.org/country/malta/freedom-world/2025",
        "note": "Overview e Key Developments in 2024 efetivamente lidos em 7/10/2026; relatório abreviado de 2025. Usam-se narrativas específicas, sem conversão de notas numéricas."
      },
      {
        "title": "União Europeia — funcionamento da união aduaneira",
        "url": "https://european-union.europa.eu/priorities-and-actions/actions-topic/customs_en",
        "note": "Explicação institucional primária efetivamente lida: ausência de direitos internos e tarifas externas comuns; página sem data editorial."
      },
      {
        "title": "União Europeia — Malta, pertencimento institucional",
        "url": "https://european-union.europa.eu/principles-countries-history/eu-countries/malta_en",
        "note": "Perfil institucional contemporâneo efetivamente lido, usado apenas para delimitar aplicação do regime comum."
      }
    ],
    "rationale": "Eleições regulares competitivas e alternância periódica; presidência cerimonial eleita pelo Parlamento em 2024. Religião católica estatal e ensino religioso nas escolas públicas coexistem com liberdade de culto e recusa de instrução religiosa. Adota neutralidade, não alinhamento e recusa alianças militares, com exceções de autodefesa e medidas da ONU. Prevê ensino primário gratuito em escolas estatais e assistência social, preservando incentivo à empresa privada. Proteção antidiscriminatória inclui sexo, orientação sexual e identidade de gênero.",
    "caveats": "Barreiras a partidos pequenos e corrupção continuam; prática de 2024 e normas de 2026 são recortes distintos. Norma de 2026, sem afirmar prática escolar universal ou identidade religiosa da população. Escopo temporal: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026. Orientação normativa em 2026, sem afirmar ausência de forças de defesa ou não intervenção absoluta. Escopo temporal: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026. Provisão pública setorial, não predominância estatal da economia; princípios deste capítulo não são diretamente exigíveis em juízo. Escopo temporal: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026. Proteção normativa parcial; artigo 45 preserva exceções, inclusive matérias de direito pessoal, e não estabelece toda política de aborto ou família. Escopo temporal: Consolidação oficial consultada em 7/10/2026, incorpora Atos IX e XVI de 2026. Âncoras editoriais não são medições. Normas e execução têm escopos distintos. Eixos ausentes são desconhecidos; cobertura menor que seis eixos para matches. Com cobre integração aduaneira interna, não livre comércio universal; controles externos e escopo territorial permanecem. Revisão de escopo econômico em 7/10/2026: provisão/propriedade setorial permanece arquivada como pesquisa delimitada; orientação econômica nacional desconhecida, sem evidência de ranqueamento em eco."
  }
] as ReferenceEntry[];
export const currentCountryAlignment03Proposals=[
  {
    "id": "uruguay",
    "period": "Normas constitucionais de 1967, artigo 230 revisto em 1996, direito matrimonial revisto em 2013; narrativa FH2025 sobre 2024",
    "rationale": "Normas exigem controle legal da detenção e garantem liberdade religiosa, sem sustento estatal de religiões, em desenho institucional complementado por planejamento de desenvolvimento.",
    "caveats": "Planejamento inclui trabalhadores e empresas públicas e privadas; ensino gratuito não prova propriedade geral. O relato de eleições e dificuldades de justiça/prisão pertence a 2024. Fontes legais e narrativas de prática têm datas e alcances distintos. Descrição documental limitada, sem certificar toda legislação ou prática atual.",
    "report": "docs/reference-current-country-reconciliation.md",
    "scope": "Parágrafo Uruguay: páginasIMPO77/15/71/230/5 eCódigoCivil83 realmente lidas; FHOverview/KeyDevelopments narrativas, não tabelas."
  },
  {
    "id": "denmark",
    "period": "Texto constitucional de 1953, edição republicada de 1992 arquivada em 2023; narrativa FH2025 sobre 2024; tratado europeu de 2016",
    "rationale": "Texto constitucional prevê responsabilidade parlamentar do governo e garantias de expressão e associação, com Igreja Luterana estabelecida e liberdade religiosa.",
    "caveats": "Texto antigo não certifica mudanças sucessórias de 2009 nem consolidação atual. Deportação, privacidade e coerção são contrapontos narrados separadamente; regime europeu não se estende automaticamente à Groenlândia. Fontes legais e narrativas de prática têm datas e alcances distintos. Descrição documental limitada, sem certificar toda legislação ou prática atual.",
    "report": "docs/reference-current-country-reconciliation.md",
    "scope": "Parágrafos Denmark/Europeantrade: seções15/29–31/71/77–79/4/6/67–70 eTFUE28/34/206–207; relato diz passagens lidas, acesso/originalleitorpessoal não recuperados."
  },
  {
    "id": "germany",
    "period": "Normas dos artigos 20 e 30 da Lei Fundamental em páginas oficiais sem data editorial comprovada; tratado europeu de 2016; narrativa FH2025 sobre 2024",
    "rationale": "Lei Fundamental prevê federação e competências dos estados como regra, sujeitas às exceções constitucionais, com poderes públicos vinculados à lei.",
    "caveats": "Narrativa de democracia, protestos e reforma de gênero é de 2024. Índice constitucional não certifica incorporação religiosa; integração aduaneira tem controles externos. Fontes legais e narrativas de prática têm datas e alcances distintos. Descrição documental limitada, sem certificar toda legislação ou prática atual.",
    "report": "docs/reference-current-country-reconciliation.md",
    "scope": "Parágrafo Germany: artigos20(1–3)/30inteiros lidos; Europeantrade28/34/206–207, FHOverview/KeyDevelopments."
  },
  {
    "id": "new-zealand",
    "period": "Descrição institucional da Constituição de 1986 sem data editorial; declaração Justiça atualizada em 24/04/2024; acordo comercial vigente em 01/05/2024; narrativa FH2025",
    "rationale": "Descrição institucional atribui o governo ao desenho parlamentar e reconhece proteção jurídica de direitos, com limites e reservas apresentados separadamente.",
    "caveats": "Fonte é declaração institucional, pois recuperação do texto legislativo falhou. A crítica sobre voto de presos é de 2023; o relatório2025 tem divergência de título cronológico, sem correção silenciosa. Fontes legais e narrativas de prática têm datas e alcances distintos. Descrição documental limitada, sem certificar toda legislação ou prática atual.",
    "report": "docs/reference-current-country-reconciliation.md",
    "scope": "Parágrafo NewZealand: GovernorGeneralConstitutionAct/parties, JusticeICCPR, MFAT2.1/2.5/2.11 eguideMarriage efetivamente lidos; leitororiginal/acessomodo não resolvidos."
  },
  {
    "id": "united-states",
    "period": "Normas constitucionais de 1787/1791 em texto do Senado; narrativa FH2025 sobre 2024",
    "rationale": "Norma constitucional distribui competências nacionais e reserva poderes não delegados aos estados ou ao povo, com garantias processuais e religiosas localizadas.",
    "caveats": "Reserva territorial não afasta competências federais enumeradas. Garantias normativas não demonstram cumprimento; passagens de eleições e restrições pertencem ao relato de 2024. Fontes legais e narrativas de prática têm datas e alcances distintos. Descrição documental limitada, sem certificar toda legislação ou prática atual.",
    "report": "docs/reference-current-country-reconciliation-03.md",
    "scope": "ItemEstadosUnidos: artigoIseção8 e emendasI/IV/V/X realmente lidos; FH A1–A3/B2/D2/F3/G3."
  },
  {
    "id": "brazil",
    "period": "Constituição consolidada consultada em 07/10/2026, edição integral não certificada; narrativa FH2025 sobre 2024",
    "rationale": "Normas organizam federação com poderes estaduais sujeitos à Constituição e garantias de processo, além de limites à relação estatal com religiões.",
    "caveats": "O artigo174 distingue planejamento indicativo privado; normas de saúde admitem participação privada. Leitura separou texto ativo de redação riscada e declarou corrupção de caracteres; prática é do relato2024. Fontes legais e narrativas de prática têm datas e alcances distintos. Descrição documental limitada, sem certificar toda legislação ou prática atual.",
    "report": "docs/reference-current-country-reconciliation-03.md",
    "scope": "ItemBrasil: Planalto4/5LIV–LVI/LXI–LXV/18–19/25/174/196/198–199; actuallegalselectedpassages eFH narrativasOverview/A/B/F."
  },
  {
    "id": "japan",
    "period": "Constituição de 1946 oferecida pela Câmara; interpretação oficial de defesa posterior a 01/07/2014; narrativa FH2025 sobre 2024; declaração MEXT consultada em 2026",
    "rationale": "Normas oferecem garantias processuais e separação religiosa, com renúncia constitucional da guerra interpretada oficialmente dentro de limites de autodefesa.",
    "caveats": "Autodefesa coletiva limitada é contraponto à renúncia literal. Autonomia local não resolve predominância territorial; gratuidade e rede escolar setorial não descrevem propriedade geral da economia. Fontes legais e narrativas de prática têm datas e alcances distintos. Descrição documental limitada, sem certificar toda legislação ou prática atual.",
    "report": "docs/reference-current-country-reconciliation-03.md",
    "scope": "ItemJapão: Câmara9/20/26/31/33/92–95, defesaoficial eMEXTintrodução/segundoparágrafo realmente lidos; declaraçõessemdataeditorial separadas."
  },
  {
    "id": "india",
    "period": "Constituição oficial atualizada em 01/05/2024; mandato NITI sem data editorial consultado em 2026; narrativa FH2025 sobre 2024, exceto Caxemira administrada pela Índia",
    "rationale": "Normas distribuem competências legislativas entre União e estados e limitam estabelecimento e ensino religioso, com garantias sujeitas às exceções constitucionais.",
    "caveats": "Poderes residuais e prevalências nacionais limitam estados. Mandato estratégico não comprova execução geral; educação gratuita ou uma rede pública não define orientação econômica nacional. FH exclui Caxemira administrada pela Índia. Fontes legais e narrativas de prática têm datas e alcances distintos. Descrição documental limitada, sem certificar toda legislação ou prática atual.",
    "report": "docs/reference-current-country-reconciliation-03.md",
    "scope": "ItemÍndia: oficialPDF edição1May2024,21A/25–28/246/248–251 eNITI; pesquisaKVs arquivada sem inferênciaeconômica."
  },
  {
    "id": "south-africa",
    "period": "Camada constitucional com emendas até 2012 e cláusulas paralelas oficiais indexadas; normas familiares de 1998/2021 e 2006, julgados de 1997/2005; narrativa FH2025 sobre 2024",
    "rationale": "Normas reconhecem competências provinciais e proteções processuais, culturais e familiares, com independência funcional do direito constitucional perante doutrinas religiosas.",
    "caveats": "Poderes provinciais convivem com prevalência nacional condicionada. Emergência37, demora judicial e defesa insuficiente são contrapontos; observâncias públicas e casamentos religiosos impedem separação absoluta. PDF2012direto falhou na revisão recente. Fontes legais e narrativas de prática têm datas e alcances distintos. Descrição documental limitada, sem certificar toda legislação ou prática atual.",
    "report": "docs/reference-current-country-coverage-07.md",
    "scope": "Doc07 revisãofinal: methodFH28–216, Constituição40–44/104/125/146–150/12/14/35/37 eFourie92–95; author/peerindexedvsPDFfailed separados."
  },
  {
    "id": "singapore",
    "period": "Narrativa FH2025 sobre 2024; declarações MHA de 29/09/2026 e Singapore Customs de 09/03/2026",
    "rationale": "Declaração institucional descreve gestão legal da harmonia religiosa, com ordens restritivas, separada do relato eleitoral e das regras de importação.",
    "caveats": "Gestão de harmonia não significa ausência de restrições religiosas. Constituição SSO falhou e não foi substituída por fragmentos; GST é consumo, não tarifa geral. Fontes legais e narrativas de prática têm datas e alcances distintos. Descrição documental limitada, sem certificar toda legislação ou prática atual.",
    "report": "docs/reference-current-country-reconciliation-04.md",
    "scope": "ItemSingapura: MHAprincípio2MRHA/ordensrestritivas eCustomsdefinição/categorias efetivamente lidos;FHOverview2024."
  },
  {
    "id": "indonesia",
    "period": "Tradução constitucional oferecida pela Corte em 2026, sem data editorial comprovada; narrativa FH2025 sobre 2024",
    "rationale": "Normas reconhecem competências regionais e preservação cultural, em organização territorial subordinada ao desenho nacional.",
    "caveats": "Tradução sem corte de emendas seguro e OCR final invertido; oferta2026 não prova implementação2024. Fundamento religioso e autonomia têm limites; controle do artigo33 não define propriedade geral. Fontes legais e narrativas de prática têm datas e alcances distintos. Descrição documental limitada, sem certificar toda legislação ou prática atual.",
    "report": "docs/reference-current-country-reconciliation-04.md",
    "scope": "ItemIndonésia:Corteconstituição18/29/32 realmente lidos. Demaisrevisõesposteriores/códigos atuais preservados sem nova certificação."
  },
  {
    "id": "mexico",
    "period": "Constituição oficial consolidada com reformas DOF de 02/06/2026; narrativa FH2025 sobre 2024",
    "rationale": "Normas organizam república federal e competências estaduais reservadas, com reconhecimento cultural e limites constitucionais ao exercício do poder.",
    "caveats": "Competências federais enumeradas limitam a reserva estadual. Prática eleitoral e coerção são narradas para2024, sem confundir violência privada com ação estatal ou inventar direito constitucional ao aborto. Fontes legais e narrativas de prática têm datas e alcances distintos. Descrição documental limitada, sem certificar toda legislação ou prática atual.",
    "report": "docs/reference-current-country-reconciliation-04.md",
    "scope": "ItemMéxico: CPEUMcabeçalhoDOF2Jun2026 e2/4/24–25/40–41/124/130 realmente lidos; FHOverview/A/F2–F3 separados."
  },
  {
    "id": "turkey",
    "period": "Constituição revista em 2017, camada histórica; narrativa FH2025 sobre 2024; declarações posteriores sem data editorial segura",
    "rationale": "Texto de 2017 organiza administração central e local sob unidade administrativa e supervisão legal, com planejamento econômico constitucional.",
    "caveats": "Norma antiga não certifica consolidação atual. Separação declarada, agência religiosa e currículo não foram arbitrariamente combinados; prestação setorial e declarações de comércio não definem orientação econômica geral. Fontes legais e narrativas de prática têm datas e alcances distintos. Descrição documental limitada, sem certificar toda legislação ou prática atual.",
    "report": "docs/reference-current-country-reconciliation-04.md",
    "scope": "ItemTurquia:123/126–127/130/166/169 e24/136 efetivamente lidos; fontesoficiaisfalharam, republicação2017."
  },
  {
    "id": "saudi-arabia",
    "period": "Lei Básica de 02/03/1992 com emendas de 2006/2017 na tradução oferecida; narrativa FH2025 sobre 2024; estratégia PIF para 2026–2030",
    "rationale": "Lei Básica vincula autoridade e justiça à matriz islâmica e organiza poderes sob chefia régia, em normas distintas da estratégia declarada de investimento.",
    "caveats": "Árabe prevalece sobre tradução; edição histórica não comprova vigência integral2026. EstratégiaPIF é declaração prospectiva, não resultado ou comando de toda produção. Fontes legais e narrativas de prática têm datas e alcances distintos. Descrição documental limitada, sem certificar toda legislação ou prática atual.",
    "report": "docs/reference-current-country-reconciliation-04.md",
    "scope": "ItemArábiaSaudita:BasicLaw1/7/14/23/30–31/44/48 realmente lidos, capa/apêndicesdates;PIFobjetivos/ecossistemas declaração."
  },
  {
    "id": "france",
    "period": "Normas constitucionais nas redações de 2003/2008/2024; leis familiares e outras versões oficiais datadas separadamente; narrativa FH2025 sobre 2024",
    "rationale": "Normas reconhecem descentralização e administração territorial dentro das leis nacionais, com laicidade e direitos sujeitos ao ordenamento constitucional.",
    "caveats": "Texto constitucional integral falhou; artigos individuais efetivamente recuperados sustentam apenas o recorte. Datas das diferentes normas não são data única da prática; limites nacionais da autonomia permanecem. Fontes legais e narrativas de prática têm datas e alcances distintos. Descrição documental limitada, sem certificar toda legislação ou prática atual.",
    "report": "docs/reference-current-country-reconciliation-03.md",
    "scope": "ItemFrança:Legifrance1/72/34 redações2008/2003/março2024 efetivamente lidos; FHOverview/KeyDevelopments2024. Qualidadeposterior atual preservada, não recertificada."
  },
  {
    "id": "canada-current-2025",
    "period": "Constitution Acts de 1867/1982, versões oficiais consultadas em 08/10/2026; leis civis e culturais em edições próprias; precedente de neutralidade de 2015",
    "rationale": "Normas distribuem competências entre União e províncias e reconhecem direitos processuais, culturais e civis, com neutralidade institucional perante crença e não crença.",
    "caveats": "Poderes nacionais e exceções limitam províncias; Senado nomeado, cláusula33 e escolas confessionais são contrapontos. Normas não medem cumprimento; versão específica das leis e julgamento é preservada nas fontes. Fontes legais e narrativas de prática têm datas e alcances distintos. Descrição documental limitada, sem certificar toda legislação ou prática atual.",
    "report": "docs/reference-current-country-coverage-06.md",
    "scope": "LeiturasdiretasCharter3/4/7–15/25/27/28/29/33/35;91–95/92A/93; CivilMarriage2–4; Saguenayindex72–74; peerboundedlaterread declarado."
  },
  {
    "id": "andorra-current-2025",
    "period": "Constituição de 1993 oferecida pelo Parlamento em 2026; narrativa FH2025 sobre 2024; descrição aduaneira de 24/11/2021 e autorização de 16/07/2026",
    "rationale": "Normas atribuem autogoverno, orçamento e competências locais aos comuns, dentro de hierarquia nacional, com garantias legais de processo e liberdade religiosa.",
    "caveats": "Autonomia não equivale a federação; copríncipe episcopal e cooperação católica coexistem com liberdade. Emergência42 e limites de cidadania são contrapontos. Descrição aduaneira/autorização não demonstram etapas posteriores concluídas. Fontes legais e narrativas de prática têm datas e alcances distintos. Descrição documental limitada, sem certificar toda legislação ou prática atual.",
    "report": "docs/reference-current-country-batch-03.md",
    "scope": "Doc declarafontesprimárias efetivamente abertas e artigosdosconstitutionalContext/claims lidos:Andorra1993; readerindividual/accessunknown. Contextos79–80/11–12/42 conferidosmetadados, não nova visita."
  },
  {
    "id": "malta-current-2025",
    "period": "Constituição consolidada com Atos IX e XVI de 2026, consultada em 07/10/2026; narrativa FH2025 sobre 2024; descrição aduaneira institucional sem data",
    "rationale": "Normas reconhecem religião católica estatal com liberdade religiosa e recusa de instrução, além de neutralidade militar sujeita a exceções constitucionais.",
    "caveats": "Neutralidade admite autodefesa e medidas da ONU; catolicismo institucional não define crenças de habitantes. Garantias de direitos têm exceções pessoais e princípios sociais não diretamente exigíveis; provisão escolar não define propriedade econômica geral. Fontes legais e narrativas de prática têm datas e alcances distintos. Descrição documental limitada, sem certificar toda legislação ou prática atual.",
    "report": "docs/reference-current-country-batch-03.md",
    "scope": "Doc declarafontesprimárias efetivamente abertas e constitutionalContext/claims lidos:Malta2/40/1(3)/7/45/21 conforme objeto legado, consultada2026; readerindividual/accessunknown."
  }
];
export function alignCurrentCountryDescription03(entry:ReferenceEntry):ReferenceEntry{const before=currentCountryAlignment03Before.find(e=>e.id===entry.id),proposal=currentCountryAlignment03Proposals.find(e=>e.id===entry.id);if(!before||!proposal||JSON.stringify(before)!==JSON.stringify(entry))return entry;return {...entry,period:proposal.period,rationale:proposal.rationale,caveats:proposal.caveats};}
export const currentCountryAlignment03Audit={existingIdentities:18,newIdentities:0,changedFields:['period','rationale','caveats'],changedCodes:0,sourceObjectsChanged:0,status:'accepted-prior-report-description-time-alignment'}as const;
