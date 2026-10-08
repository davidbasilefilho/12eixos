import type {ReferenceEntry,ReferenceSource} from './references';
import {codeReferenceAxis,type ReferenceAxisCoding} from '../lib/reference-coding';
// Candidate only: independent whole-source/literal review and Root acceptance pending.
export const native14HistoricalFiguresBefore:ReferenceEntry[] = [
  {
    "id": "aristotle",
    "name": "Aristóteles",
    "aliases": [
      "Aristotle"
    ],
    "kind": "person",
    "category": "historical-figure",
    "period": "Politics, livrosI/II/VII, séculoIVa.C.; tradução Benjamin Jowett",
    "rationale": "Normas expressas sobre a cidade ideal; não mede opinião pessoal percentual nem a aplicação por governantes associados ao autor.",
    "caveats": "384–322a.C., cronologia acadêmica Stanford efetivamente lida; sem inventar dias. Comparação limitada entre polis antiga e eixos modernos: cidadania exclui mulheres, escravizados e trabalhadores; igualdade entre cidadãos não significa universalidade. Rejeição de monopólio governamental não é inferida do papel docente ou de outra biografia. Composição do tratado não tem data única comprovada;350a.C. é aproximação do host. Tradição familiar patriarcal coexiste com aborto precoce e exposição eugênica; não atribui bloco partidário contemporâneo.",
    "sources": [
      {
        "title": "Aristotle — Politics I, tradução Benjamin Jowett",
        "url": "https://classics.mit.edu/Aristotle/politics.1.one.html",
        "note": "Internet Classics Archive/MIT: tradução Jowett, §§VIII–XIII, corpo99–149 e153–180 efetivamente lido; somenteXII–XIII fundamentammor."
      },
      {
        "title": "Aristotle — Politics II, tradução Benjamin Jowett",
        "url": "https://classics.mit.edu/Aristotle/politics.2.two.html",
        "note": "Tradução Jowett: §§I–V, corpo27–72 efetivamente lido; não atribui propostas de Sócrates ao autor que as critica."
      },
      {
        "title": "Aristotle — Politics VII, tradução Benjamin Jowett",
        "url": "https://classics.mit.edu/Aristotle/politics.7.seven.html",
        "note": "Tradução Jowett: §§I–XVI, corpo27–233 efetivamente lido; normas da cidade ideal distinguidas de costumes alheios relatados."
      },
      {
        "title": "Aristotle — Stanford Encyclopedia of Philosophy, identidade",
        "url": "https://plato.stanford.edu/entries/aristotle/",
        "note": "Corpo15/48/60 efetivamente lido confirma nascimento384a.C./morte322a.C.;63–69 ressalta problemas de composição. Fonte acadêmica de identidade/limites, sem gerar códigos."
      }
    ],
    "vec": {
      "est": 50,
      "rep": 60,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 40,
      "con": 50,
      "com": 60,
      "rel": 40,
      "mor": 40,
      "tec": 50
    },
    "evidence": {
      "rep": "medium",
      "eco": "medium",
      "com": "medium",
      "rel": "medium",
      "mor": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Aristotle — Politics VII, tradução Benjamin Jowett"
        ],
        "rationale": "A alternância de autoridade entre iguais constitui regra geral da cidade ideal. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Cidadania exclui trabalhadores, mulheres e escravizados. Não democracia universal nem toda constituição discutida no tratado."
      },
      "eco": {
        "sourceTitles": [
          "Aristotle — Politics II, tradução Benjamin Jowett"
        ],
        "rationale": "A regra abrange a titularidade produtiva e as vantagens do interesse individual. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: VII também reserva terra e trabalhadores públicos ao culto/refeições; não propriedade privada exclusiva ou política nacional moderna."
      },
      "com": {
        "sourceTitles": [
          "Aristotle — Politics VII, tradução Benjamin Jowett"
        ],
        "rationale": "Impõe orientação geral de restrição à integração comercial externa, sem eliminar todo intercâmbio. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Importa carências e exporta excedentes; não tarifa específica nem isolamento comercial absoluto."
      },
      "rel": {
        "sourceTitles": [
          "Aristotle — Politics VII, tradução Benjamin Jowett"
        ],
        "rationale": "Religião integra expressamente o desenho e os recursos das instituições políticas. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não monoteísmo, primazia de igreja moderna ou decisão religiosa sobre todas as leis."
      },
      "mor": {
        "sourceTitles": [
          "Aristotle — Politics I, tradução Benjamin Jowett"
        ],
        "rationale": "Hierarquia familiar e papéis morais de gênero são prescrições gerais, não um cargo isolado. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: VII regula casamento/adultério mas admite aborto precoce e exposição eugênica; não conservadorismo contemporâneo uniforme."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Aristotle — Politics VII, tradução Benjamin Jowett",
            "publishedDate": "séculoIVa.C.; data aproximada350a.C. indicada pelo host",
            "accessedDate": "2026-10-08",
            "basis": "norm",
            "locator": "§§IX/XIII–XIV, corpo120–129/175/180–185; contrapontoexclusão120–126",
            "statement": "Exige que os cidadãos governem e sejam governados alternadamente, sem superioridade régia presumida."
          }
        ],
        "rationale": "A alternância de autoridade entre iguais constitui regra geral da cidade ideal.",
        "uncertainty": "Cidadania exclui trabalhadores, mulheres e escravizados. Não democracia universal nem toda constituição discutida no tratado.",
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
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Aristotle — Politics II, tradução Benjamin Jowett",
            "publishedDate": "séculoIVa.C.; data aproximada350a.C. indicada pelo host",
            "accessedDate": "2026-10-08",
            "basis": "norm",
            "locator": "§V, corpo61–71; contrapontoVII.§X,137–143",
            "statement": "Prefere propriedade privada como regra, com uso comum por consentimento."
          }
        ],
        "rationale": "A regra abrange a titularidade produtiva e as vantagens do interesse individual.",
        "uncertainty": "VII também reserva terra e trabalhadores públicos ao culto/refeições; não propriedade privada exclusiva ou política nacional moderna.",
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "com": {
        "axis": "com",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Aristotle — Politics VII, tradução Benjamin Jowett",
            "publishedDate": "séculoIVa.C.; data aproximada350a.C. indicada pelo host",
            "accessedDate": "2026-10-08",
            "basis": "norm",
            "locator": "§§V–VI, corpo82–94: autossuficiência, importações e mercado",
            "statement": "Prefere autossuficiência e comércio para necessidades próprias, rejeitando ser mercado do mundo."
          }
        ],
        "rationale": "Impõe orientação geral de restrição à integração comercial externa, sem eliminar todo intercâmbio.",
        "uncertainty": "Importa carências e exporta excedentes; não tarifa específica nem isolamento comercial absoluto.",
        "reviewedOn": "2026-10-08",
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
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Aristotle — Politics VII, tradução Benjamin Jowett",
            "publishedDate": "séculoIVa.C.; data aproximada350a.C. indicada pelo host",
            "accessedDate": "2026-10-08",
            "basis": "norm",
            "locator": "§§VIII–X/XII, corpo114–116/127–140/158–163",
            "statement": "Inclui culto e sacerdócio entre funções públicas, financiados pela propriedade pública."
          }
        ],
        "rationale": "Religião integra expressamente o desenho e os recursos das instituições políticas.",
        "uncertainty": "Não monoteísmo, primazia de igreja moderna ou decisão religiosa sobre todas as leis.",
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "mor": {
        "axis": "mor",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Aristotle — Politics I, tradução Benjamin Jowett",
            "publishedDate": "séculoIVa.C.; data aproximada350a.C. indicada pelo host",
            "accessedDate": "2026-10-08",
            "basis": "norm",
            "locator": "§§XII–XIII, corpo159–180; contrapontoVII.§XVI,213–226",
            "statement": "Defende autoridade masculina permanente na família e virtudes distintas para esposas e maridos."
          }
        ],
        "rationale": "Hierarquia familiar e papéis morais de gênero são prescrições gerais, não um cargo isolado.",
        "uncertainty": "VII regula casamento/adultério mas admite aborto precoce e exposição eugênica; não conservadorismo contemporâneo uniforme.",
        "reviewedOn": "2026-10-08",
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
    "id": "na-john-adams",
    "name": "John Adams",
    "aliases": [],
    "kind": "person",
    "category": "historical-figure",
    "period": "Programa inaugural4/3/1797; contraponto legal1798 explícito",
    "rationale": "Defende representação popular e autonomia estadual, paz e neutralidade externa; valoriza o cristianismo no serviço público.",
    "caveats": "1735-10-30–1826-07-04, National Archives corpo52. A redação1779 é relatório de comissão preparado principalmente por Adams, com alterações não inteiramente recuperáveis; artigoIII sobre culto de autoria incerta não fundamenta rel. Direitos civis1779 não equivalem à política posterior: Adams aprovou em1798 deportação por decisão presidencial e criminalização de escritos políticos, transcrição assinada efetivamente lida. Recortes distintos devem permanecer visíveis; não vetor uniforme da carreira. Eleitorado qualificado masculino; elogios ao sistema não provam igualdade factual.",
    "sources": [
      {
        "title": "Inaugural Address, 1797",
        "url": "https://www.presidency.ucsb.edu/documents/inaugural-address-21",
        "note": "Transcrição do discurso de posse de Adams, uma fonte primária para seu programa presidencial inicial."
      },
      {
        "title": "Adams — Inaugural Address, 1797",
        "url": "https://avalon.law.yale.edu/18th_century/adams.asp",
        "note": "Corpo44–70 integral lido; data4/3/1797. Somente programa explicitamente adotado pelo orador."
      },
      {
        "title": "Adams — Report of a Constitution, 1779, edição Charles Francis Adams",
        "url": "https://oll-resources.s3.us-east-2.amazonaws.com/oll3/store/titles/2102/Adams_1431-04_EBk_v6.0.pdf",
        "note": "OLL reprodução1856/ebook2011. Nota editorial de autoria6094–6130 e6171–6179 efetivamente lida: relatório preparado por Adams, modificado pela comissão; autoria artigoIII incerta. Corpo6182–6277,6290–6348 e6356–6421 lido; lacunas6278–6289/6349–6355 não reivindicadas. Direito de expressão6314–6316, busca6302–6309, julgamento6290–6301 e punições6356–6357."
      },
      {
        "title": "National Archives — Alien and Sedition Acts, contraponto1798",
        "url": "https://www.archives.gov/milestone-documents/alien-and-sedition-acts",
        "note": "Transcrições69–129 efetivamente lidas, assinatura Adams91–93/127–129. Não autoria legislativa exclusiva: aprovação presidencial. Contraponto forte ao programa anterior, não usado para ocultar coerção ou proclamar liberdade da presidência inteira."
      },
      {
        "title": "National Archives — Signers fact sheet, identidade John Adams",
        "url": "https://www.archives.gov/founding-docs/signers-factsheet",
        "note": "Tabela institucional52 efetivamente lida confirma1735-10-30–1826-07-04. Compilação bibliográfica institucional, não texto autobiográfico; não produz scores."
      }
    ],
    "vec": {
      "est": 60,
      "rep": 60,
      "pod": 50,
      "imi": 50,
      "dip": 40,
      "int": 60,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 40,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "est": "medium",
      "rep": "medium",
      "dip": "medium",
      "int": "medium",
      "rel": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Adams — Inaugural Address, 1797"
        ],
        "rationale": "A divisão territorial de autoridade é defendida em programa nacional amplo, mantendo a Constituição federal. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Critica fragilidade da Confederação48; não autonomia absoluta ou secessão."
      },
      "rep": {
        "sourceTitles": [
          "Adams — Inaugural Address, 1797"
        ],
        "rationale": "O fundamento geral do governo é a representação eleitoral, não somente sua própria eleição. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Franquia histórica excludente; sua retórica não prova inclusão universal."
      },
      "dip": {
        "sourceTitles": [
          "Adams — Inaugural Address, 1797"
        ],
        "rationale": "Norma geral para relações internacionais e solução de divergências, admitindo encaminhamento ao Legislativo quando negociação falha. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Admite outras medidas parlamentares se negociação falhar; não pacifismo absoluto ou descrição de toda a presidência."
      },
      "int": {
        "sourceTitles": [
          "Adams — Inaugural Address, 1797"
        ],
        "rationale": "A neutralidade é apresentada como política externa geral, e não simples oposição a um conflito particular. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Congresso pode alterar neutralidade; não proibição absoluta de intervenção."
      },
      "rel": {
        "sourceTitles": [
          "Adams — Inaugural Address, 1797"
        ],
        "rationale": "Religião entra explicitamente no critério normativo de autoridade pública, além da devoção pessoal do fechamento. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não requisito legal exclusivo nem igreja oficial; amor a pessoas de todas denominações no mesmo programa. ArtigoIII1779 excluído por autoria incerta."
      }
    },
    "coding": {
      "est": {
        "axis": "est",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Adams — Inaugural Address, 1797",
            "publishedDate": "1797-03-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo66: constituições estaduais, cautela perante seus governos",
            "statement": "Defende respeito aos governos e constituições dos Estados e igualdade entre eles dentro da União."
          }
        ],
        "rationale": "A divisão territorial de autoridade é defendida em programa nacional amplo, mantendo a Constituição federal.",
        "uncertainty": "Critica fragilidade da Confederação48; não autonomia absoluta ou secessão.",
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
            "sourceTitle": "Adams — Inaugural Address, 1797",
            "publishedDate": "1797-03-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo53/57–62/66: eleições, poder popular e alteração constitucional",
            "statement": "Defende autoridade derivada do povo, eleições regulares e alteração constitucional pelo povo e seus representantes."
          }
        ],
        "rationale": "O fundamento geral do governo é a representação eleitoral, não somente sua própria eleição.",
        "uncertainty": "Franquia histórica excludente; sua retórica não prova inclusão universal.",
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "dip": {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Adams — Inaugural Address, 1797",
            "publishedDate": "1797-03-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo66: paz com todas as nações, reparação por negociação",
            "statement": "Prefere manter paz e resolver danos comerciais por negociação amistosa."
          }
        ],
        "rationale": "Norma geral para relações internacionais e solução de divergências, admitindo encaminhamento ao Legislativo quando negociação falha.",
        "uncertainty": "Admite outras medidas parlamentares se negociação falhar; não pacifismo absoluto ou descrição de toda a presidência.",
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "int": {
        "axis": "int",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Adams — Inaugural Address, 1797",
            "publishedDate": "1797-03-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo62/66: influência externa, neutralidade e imparcialidade",
            "statement": "Defende independência do governo perante influência estrangeira e neutralidade entre beligerantes."
          }
        ],
        "rationale": "A neutralidade é apresentada como política externa geral, e não simples oposição a um conflito particular.",
        "uncertainty": "Congresso pode alterar neutralidade; não proibição absoluta de intervenção.",
        "reviewedOn": "2026-10-08",
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
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Adams — Inaugural Address, 1797",
            "publishedDate": "1797-03-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo66: respeito à religião cristã como recomendação para serviço público",
            "statement": "Considera respeito ao cristianismo uma das melhores recomendações para exercer serviço público."
          }
        ],
        "rationale": "Religião entra explicitamente no critério normativo de autoridade pública, além da devoção pessoal do fechamento.",
        "uncertainty": "Não requisito legal exclusivo nem igreja oficial; amor a pessoas de todas denominações no mesmo programa. ArtigoIII1779 excluído por autoria incerta.",
        "reviewedOn": "2026-10-08",
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
    "id": "william-mckinley",
    "name": "William McKinley",
    "kind": "person",
    "category": "historical-figure",
    "period": "Declaração inaugural1897-03-04",
    "rationale": "Defende eleições e liberdades civis, tarifas protetoras com reciprocidade e solução diplomática antes da guerra.",
    "caveats": "1843-01-29–1901-09-14,Miller46/50. Recorte é promessa inaugural1897; não comportamento da presidência1897–1901. Visão secundária institucional29–30 registra guerra/império posteriores e não sustenta estes códigos de norma. Naturalização restritiva58, autoridade legal56 e defesa de direitos externos66 são contrapontos. Sete eixos desconhecidos: moeda, antitruste e orçamento não propriedade ou alocação gerais.",
    "sources": [
      {
        "title": "William McKinley — programa inaugural1897-03-04",
        "url": "https://avalon.law.yale.edu/19th_century/mckin1.asp",
        "note": "Corpo próprio19–83 inteiro efetivamente lido por duas aberturas sucessivas:19–43 e44–83. Data17. Não segundo programa1901 nem decisões1898."
      },
      {
        "title": "Miller Center — William McKinley, identidade",
        "url": "https://millercenter.org/president/mckinley",
        "note": "Página0–174 efetivamente lida, nascimento46 e morte50; visão29–30 contextualiza limite norma/prática, não gera score. Metadata, religião pessoal e partido não códigos."
      }
    ],
    "vec": {
      "est": 50,
      "rep": 60,
      "pod": 40,
      "imi": 50,
      "dip": 40,
      "int": 60,
      "eco": 50,
      "con": 50,
      "com": 60,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
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
          "William McKinley — programa inaugural1897-03-04"
        ],
        "rationale": "Norma de autoridade eleitoral e responsabilização dos representantes, além da própria posse. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não prova democracia inclusiva efetiva; exclusões migratórias58 e contexto histórico de sufrágio ficam explícitos."
      },
      "pod": {
        "sourceTitles": [
          "William McKinley — programa inaugural1897-03-04"
        ],
        "rationale": "Conjunto amplo de liberdade civil e contenção de coerção extrajudicial, não um único direito isolado. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Também exige cumprimento vigoroso das leis54–56 e veda certos imigrantes58; norma não ausência histórica de repressão ou toda prática da presidência."
      },
      "dip": {
        "sourceTitles": [
          "William McKinley — programa inaugural1897-03-04"
        ],
        "rationale": "Regra ampla para guerra e paz entre países, não metáfora econômica. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Direitos nacionais66 e guerra após fracasso diplomático67 não renunciados. Recorte1897 não certifica conduta posterior1898–1901."
      },
      "int": {
        "sourceTitles": [
          "William McKinley — programa inaugural1897-03-04"
        ],
        "rationale": "Declaração geral de soberania estrangeira, além de um tratado específico. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Insiste em direitos de cidadãos americanos em todo lugar66. Declaração1897 não comprova ou resume decisões posteriores de guerra/império."
      },
      "com": {
        "sourceTitles": [
          "William McKinley — programa inaugural1897-03-04"
        ],
        "rationale": "Proteção abrange comércio de importações nacional, além de uma mercadoria. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Concessões para produtos não produzidos internamente44–45 e abertura de mercados externos fazem proteção moderada, não autarquia."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "William McKinley — programa inaugural1897-03-04",
            "publishedDate": "1897-03-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "52–53/72–78",
            "statement": "Defende eleições justas e Congresso como agente da vontade soberana popular, sujeito a posterior julgamento eleitoral."
          }
        ],
        "rationale": "Norma de autoridade eleitoral e responsabilização dos representantes, além da própria posse.",
        "uncertainty": "Não prova democracia inclusiva efetiva; exclusões migratórias58 e contexto histórico de sufrágio ficam explícitos.",
        "reviewedOn": "2026-10-08",
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
        "claims": [
          {
            "sourceTitle": "William McKinley — programa inaugural1897-03-04",
            "publishedDate": "1897-03-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "52–56",
            "statement": "Defende preservar expressão, imprensa, pensamento e crença livres e justiça por tribunais contra linchamento."
          }
        ],
        "rationale": "Conjunto amplo de liberdade civil e contenção de coerção extrajudicial, não um único direito isolado.",
        "uncertainty": "Também exige cumprimento vigoroso das leis54–56 e veda certos imigrantes58; norma não ausência histórica de repressão ou toda prática da presidência.",
        "reviewedOn": "2026-10-08",
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
            "sourceTitle": "William McKinley — programa inaugural1897-03-04",
            "publishedDate": "1897-03-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "65–71",
            "statement": "Propõe evitar conquista e agressão territorial, recorrer à guerra apenas depois de esgotar meios pacíficos e favorecer arbitragem."
          }
        ],
        "rationale": "Regra ampla para guerra e paz entre países, não metáfora econômica.",
        "uncertainty": "Direitos nacionais66 e guerra após fracasso diplomático67 não renunciados. Recorte1897 não certifica conduta posterior1898–1901.",
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "int": {
        "axis": "int",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "William McKinley — programa inaugural1897-03-04",
            "publishedDate": "1897-03-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "65–66",
            "statement": "Propõe não interferir nos assuntos domésticos de governos estrangeiros e evitar alianças como amigo ou inimigo."
          }
        ],
        "rationale": "Declaração geral de soberania estrangeira, além de um tratado específico.",
        "uncertainty": "Insiste em direitos de cidadãos americanos em todo lugar66. Declaração1897 não comprova ou resume decisões posteriores de guerra/império.",
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "com": {
        "axis": "com",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "William McKinley — programa inaugural1897-03-04",
            "publishedDate": "1897-03-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "39–45",
            "statement": "Propõe tarifas gerais de proteção ao trabalho e às indústrias nacionais, com concessões recíprocas condicionadas."
          }
        ],
        "rationale": "Proteção abrange comércio de importações nacional, além de uma mercadoria.",
        "uncertainty": "Concessões para produtos não produzidos internamente44–45 e abertura de mercados externos fazem proteção moderada, não autarquia.",
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      }
    }
  }
];
export const native14HistoricalFiguresNewSources:ReferenceSource[] = [
  {
    "title": "Aristotle — Politics VII, Benjamin Jowett — Internet Classics Archive",
    "url": "https://classics.mit.edu/Aristotle/politics.7.seven.html",
    "note": "Tradução Benjamin Jowett. Nova leitura delimitada: trechos das partes I–II, IV–V, VI até a proposição naval inicial, VIII–XVII. Parte XVII realmente lida integralmente nesta consulta; não se afirma nova leitura integral de todo o livro VII. Expansão do recorte anterior I–XVI; cidade ideal e prescrições próprias separadas de relatos históricos. Composição sem data exata."
  },
  {
    "title": "Aristotle — Politics VIII, Benjamin Jowett — Internet Classics Archive",
    "url": "https://classics.mit.edu/Aristotle/politics.8.eight.html",
    "note": "Tradução Benjamin Jowett. Partes I–III e início de IV efetivamente lidos; somente I–II fundamentam educação pública comum e subordinação cívica. Não livro VIII integral nem aplicação histórica. Século IV a.C.; indicação 350 a.C. do host é aproximação, não data documental precisa."
  }
];
export const native14HistoricalFiguresCoding:ReferenceAxisCoding[] = [
  {
    "axis": "eco",
    "position": "moderate-second",
    "confidence": "medium",
    "claims": [
      {
        "sourceTitle": "Aristotle — Politics II, tradução Benjamin Jowett",
        "publishedDate": "século IV a.C.; composição exata e edição da tradução não datadas; 350 a.C. é aproximação do host",
        "accessedDate": "2026-10-08",
        "basis": "norm",
        "locator": "§V, corpo61–71; contrapontoVII.§X,137–143",
        "statement": "Prefere propriedade privada como regra, com uso comum por consentimento."
      },
      {
        "sourceTitle": "Aristotle — Politics VIII, Benjamin Jowett — Internet Classics Archive",
        "locator": "I–II",
        "statement": "Educação deve ser pública, comum e regulada por lei, em vez de cada família ensinar separadamente.",
        "basis": "norm",
        "publishedDate": "século IV a.C.; composição exata e edição da tradução não datadas; 350 a.C. é aproximação do host",
        "accessedDate": "2026-10-08"
      }
    ],
    "rationale": "A regra abrange a titularidade produtiva e as vantagens do interesse individual.",
    "uncertainty": "Uso compartilhado por consentimento, terras e trabalhadores públicos para culto/refeições em VII.X e educação pública uniforme em VIII.I–II limitam a preferência privada. Não domínio privado exclusivo, estatística da economia ou provisão exclusivamente privada.",
    "reviewedOn": "2026-10-08"
  },
  {
    "axis": "com",
    "position": "moderate-first",
    "confidence": "medium",
    "claims": [
      {
        "sourceTitle": "Aristotle — Politics VII, tradução Benjamin Jowett",
        "publishedDate": "século IV a.C.; composição exata e edição da tradução não datadas; 350 a.C. é aproximação do host",
        "accessedDate": "2026-10-08",
        "basis": "norm",
        "locator": "§§V–VI, corpo82–94: autossuficiência, importações e mercado",
        "statement": "Prefere autossuficiência e comércio para necessidades próprias, rejeitando ser mercado do mundo."
      }
    ],
    "rationale": "Impõe orientação geral de restrição à integração comercial externa, sem eliminar todo intercâmbio.",
    "uncertainty": "Importa carências e exporta excedentes; não tarifa específica nem isolamento comercial absoluto.",
    "reviewedOn": "2026-10-08"
  },
  {
    "axis": "rel",
    "position": "moderate-second",
    "confidence": "medium",
    "claims": [
      {
        "sourceTitle": "Aristotle — Politics VII, tradução Benjamin Jowett",
        "publishedDate": "século IV a.C.; composição exata e edição da tradução não datadas; 350 a.C. é aproximação do host",
        "accessedDate": "2026-10-08",
        "basis": "norm",
        "locator": "§§VIII–X/XII, corpo114–116/127–140/158–163",
        "statement": "Inclui culto e sacerdócio entre funções públicas, financiados pela propriedade pública."
      }
    ],
    "rationale": "Religião integra expressamente o desenho e os recursos das instituições políticas.",
    "uncertainty": "Não monoteísmo, primazia de igreja moderna ou decisão religiosa sobre todas as leis.",
    "reviewedOn": "2026-10-08"
  },
  {
    "axis": "mor",
    "position": "moderate-second",
    "confidence": "medium",
    "claims": [
      {
        "sourceTitle": "Aristotle — Politics I, tradução Benjamin Jowett",
        "publishedDate": "século IV a.C.; composição exata e edição da tradução não datadas; 350 a.C. é aproximação do host",
        "accessedDate": "2026-10-08",
        "basis": "norm",
        "locator": "§§XII–XIII, corpo159–180; contrapontoVII.§XVI,213–226",
        "statement": "Defende autoridade masculina permanente na família e virtudes distintas para esposas e maridos."
      }
    ],
    "rationale": "Hierarquia familiar e papéis morais de gênero são prescrições gerais, não um cargo isolado.",
    "uncertainty": "Hierarquia patriarcal e papéis familiares antigos coexistem com aborto antes da sensação e exposição eugênica em VII.XVI; não pacote conservador contemporâneo, endosso factual das premissas biológicas ou aplicação real.",
    "reviewedOn": "2026-10-08"
  },
  {
    "axis": "pod",
    "position": "moderate-first",
    "confidence": "medium",
    "claims": [
      {
        "sourceTitle": "Aristotle — Politics VII, Benjamin Jowett — Internet Classics Archive",
        "locator": "XVI–XVII",
        "statement": "Legislador regula casamento e reprodução e pune adultério, linguagem e imagens indecentes; há censura educativa e punições corporais ou perda de privilégios.",
        "basis": "norm",
        "publishedDate": "século IV a.C.; composição exata e edição da tradução não datadas; 350 a.C. é aproximação do host",
        "accessedDate": "2026-10-08"
      },
      {
        "sourceTitle": "Aristotle — Politics VIII, Benjamin Jowett — Internet Classics Archive",
        "locator": "I–II",
        "statement": "Educação é comum, pública e regulada por lei; cidadãos são considerados partes da cidade, não pertencentes apenas a si mesmos.",
        "basis": "norm",
        "publishedDate": "século IV a.C.; composição exata e edição da tradução não datadas; 350 a.C. é aproximação do host",
        "accessedDate": "2026-10-08"
      }
    ],
    "rationale": "Controle cívico sobre corpo, família, expressão e formação restringe amplamente a autonomia individual no desenho proposto.",
    "uncertainty": "Finalidade é virtude e conservação da constituição, não teoria moderna de vigilância. Famílias e propriedade particulares permanecem; II rejeita unidade absoluta. VII.XIII considera punição mal necessário; XVII admite exceções cultuais e revisão posterior do alcance dos espetáculos. Não repressão executada.",
    "reviewedOn": "2026-10-08"
  },
  {
    "axis": "dip",
    "position": "moderate-first",
    "confidence": "medium",
    "claims": [
      {
        "sourceTitle": "Aristotle — Politics VII, Benjamin Jowett — Internet Classics Archive",
        "locator": "VI; XI; XIV",
        "statement": "Recomenda força naval, fortificações e invenções defensivas para dissuadir ataques; educação militar e capacidade de guerra são meios necessários, subordinados à paz.",
        "basis": "norm",
        "publishedDate": "século IV a.C.; composição exata e edição da tradução não datadas; 350 a.C. é aproximação do host",
        "accessedDate": "2026-10-08"
      }
    ],
    "rationale": "Preparação e dissuasão armadas ocupam papel geral na preservação e atuação da cidade, sustentando orientação militar moderada.",
    "uncertainty": "Paz e lazer são fins superiores; conquista indiscriminada e fazer da guerra fim único são rejeitados. Também admite domínio considerado legítimo. Não supremacia militar irrestrita, vitória histórica, diplomacia moderna ou pacifismo deduzido apenas do fim pacífico.",
    "reviewedOn": "2026-10-08"
  },
  {
    "axis": "int",
    "position": "moderate-second",
    "confidence": "medium",
    "claims": [
      {
        "sourceTitle": "Aristotle — Politics VII, Benjamin Jowett — Internet Classics Archive",
        "locator": "II; XIV",
        "statement": "Rejeita domínio indiscriminado, mas permite império para o bem dos governados e sujeição de quem julga destinado à escravidão.",
        "basis": "norm",
        "publishedDate": "século IV a.C.; composição exata e edição da tradução não datadas; 350 a.C. é aproximação do host",
        "accessedDate": "2026-10-08"
      }
    ],
    "rationale": "A autorização geral de domínio externo condicionado sustenta direção intervencionista moderada além da defesa própria.",
    "uncertainty": "Admite cidade feliz isolada e condena despotismo geral/conquista como fim. A distinção moral entre povos é prescrição do autor, não legitimidade factual aceita. Não nacionalismo moderno, guerra concreta ou autorização ilimitada de intervenção.",
    "reviewedOn": "2026-10-08"
  }
];
function canonical(value:unknown):string{if(Array.isArray(value))return '['+value.map(canonical).join(',')+']';if(value!==null&&typeof value==='object')return '{'+Object.keys(value).sort().map(k=>JSON.stringify(k)+':'+canonical((value as Record<string,unknown>)[k])).join(',')+'}';return JSON.stringify(value);}
function prepare(entry:ReferenceEntry):ReferenceEntry{
 if(entry.id!=='aristotle')return entry;
 const after:ReferenceEntry={...entry,
 period:'Politics, livros I, II, VII (incluindo XVII) e VIII.I–II, século IV a.C.; tradução de Benjamin Jowett, sem data exata de composição ou edição da tradução certificada.',
 caveats:entry.caveats+' Alternância por idade dentro da elite cívica não estabelece suficientemente eleições e pluralismo gerais: REP fica desconhecido, sem direção autocrática oposta imputada. Repartição de funções, terras e espaços comerciais não basta para graduar predominância de planejamento econômico. Educação pública e uso comum são contrapontos à propriedade privada; punições, censura e reprodução regulada limitam autonomia. Preparação militar e domínio externo condicionado coexistem com paz como fim e rejeição de conquista indiscriminada. Recorte ampliado somente dentro da mesma obra.',
 sources:[...entry.sources,...native14HistoricalFiguresNewSources],vec:{...entry.vec,rep:50},evidence:{},axisEvidence:{},coding:{}};
 for(const input of native14HistoricalFiguresCoding){const coded=codeReferenceAxis(input,after.sources);after.vec[input.axis]=coded.value;after.evidence[input.axis]=coded.evidence;after.axisEvidence![input.axis]=coded.axisEvidence;after.coding![input.axis]=coded.coding;}
 return after;
}
export const native14HistoricalFiguresExpectedPosts:ReferenceEntry[]=native14HistoricalFiguresBefore.map(prepare);
export function reconcileNative14HistoricalFigures(entry:ReferenceEntry):ReferenceEntry{
 const index=native14HistoricalFiguresBefore.findIndex(e=>e.id===entry.id);if(index<0)return entry;
 if(canonical(entry)===canonical(native14HistoricalFiguresExpectedPosts[index]))return entry;
 if(canonical(entry)!==canonical(native14HistoricalFiguresBefore[index]))throw new Error('Native14 historical full prior changed: '+entry.id);
 return prepare(entry);
}
