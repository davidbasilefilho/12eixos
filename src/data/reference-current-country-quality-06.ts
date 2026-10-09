import type { ReferenceEntry } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';
/** Literal committed c220acc records; all previous values, claims and bibliography retained. */
export const currentCountryQuality06OriginalBefore: ReferenceEntry[] = [
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
        "rationale": "Garantias contra coerção sustentam liberdade parcial, com contraevidência grave. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Norma não prova cumprimento; mortes policiais, impunidade e condições prisionais impedem extremo libertário."
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
        "rationale": "Garantias contra coerção sustentam liberdade parcial, com contraevidência grave.",
        "uncertainty": "Norma não prova cumprimento; mortes policiais, impunidade e condições prisionais impedem extremo libertário.",
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
    "id": "france",
    "kind": "country",
    "category": "country",
    "name": "França",
    "period": "Prática institucional em 2024; artigos constitucionais nas redações de 2003, 2008 e 10/03/2024 oferecidas pelo Legifrance; Regime aduaneiro descrito institucionalmente em páginas sem data consultadas em 2026-10-07",
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
          "Constituição francesa, artigo 34 — Legifrance"
        ],
        "rationale": "Garantia de autonomia reprodutiva sustenta reforma social parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não implica ausência de condições legais nem posições sobre todos os costumes."
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
        "claims": [
          {
            "sourceTitle": "Constituição francesa, artigo 34 — Legifrance",
            "locator": "Artigo 34, parágrafo da lei sobre interrupção da gravidez",
            "statement": "Lei define condições para exercer liberdade garantida de interrupção da gravidez.",
            "basis": "norm",
            "publishedDate": "2024-03-10",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Garantia de autonomia reprodutiva sustenta reforma social parcial.",
        "uncertainty": "Não implica ausência de condições legais nem posições sobre todos os costumes.",
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
  }
];
export const currentCountryQuality06Review = {
 reviewedOn:'2026-10-08', provenance:'Actual source and construct review by method_review and Root; encoder direct Legifrance reopens returned403. No additional independent source-read claim.',
 francePackage:'/workspace/12eixos-deliverables/france-moral-primary-review-2026-10-08.md',
 scope:'Legal norm clarification only; unchanged anchors; no whole-catalog or implementation certification.'
};
const franceSources = [
 {title:'Préambule1946 — igualdade jurídica de gênero, Legifrance',url:'https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000006527445',note:'§3,27/10/1946: igualdade em todos os domínios. Texto primário indexado lido pelo revisor em8/10/2026; acesso direto403. Incorporação pela Constituição1958 documentada separadamente.'},
 {title:'Préambule1958 — incorporação constitucional1946, Legifrance',url:'https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000006527447',note:'Texto direto313–317 lido pelo revisor em8/10/2026, versão em vigor desde2/3/2005; referência expressa ao preâmbulo1946. Nova tentativa direta do codificador403.'},
 {title:'Código Civil francês143 — casamento civil, Legifrance',url:'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000027431993/2026-04-07',note:'Art143, versão exibida7/4/2026, redação em vigor19/5/2013; texto direto150–154 lido pelo revisor em8/10/2026. Tentativa URL8/10/2026 falhou; nova tentativa direta do codificador403.'}
];
function revisedInput(entry:ReferenceEntry):ReferenceAxisCoding {
 if(entry.id==='brazil') return {...entry.coding!.pod!, reviewedOn:'2026-10-08',
 rationale:'Salvaguardas constitucionais gerais de processo e controle judicial da coerção sustentam direção libertária moderada no desenho normativo; não representam saldo medido das liberdades praticadas em2024.',
 uncertainty:'Norma não demonstra cumprimento. FH2025 relata acesso desigual à defesa, ausência de devido processo em grande parte das mortes policiais, impunidade e prisões degradadas. Exceção constitucional de prisão por transgressão/crime militar permanece; não se conclui orientação líquida da prática policial ou prisional.'};
 return {axis:'mor',position:'moderate-first',confidence:'medium',reviewedOn:'2026-10-08',claims:[
 {sourceTitle:'Constituição francesa, artigo 34 — Legifrance',locator:'Art34, parágrafo iniciado La loi détermine les conditions; texto direto313–347',statement:'A lei determina condições para exercer a liberdade constitucionalmente garantida da mulher de interromper voluntariamente a gravidez.',basis:'norm',publishedDate:'Redação em vigor10/3/2024; lei constitucional2024-200 de8/3/2024',accessedDate:'2026-10-08'},
 {sourceTitle:franceSources[0].title,locator:'Preâmbulo1946, terceiro parágrafo substantivo/§3; incorporado pelo preâmbulo1958, texto direto313–317, fonte auxiliar listada',statement:'A lei garante à mulher direitos iguais aos do homem em todos os domínios; o preâmbulo1958 refere expressamente o preâmbulo1946.',basis:'norm',publishedDate:'27/10/1946; incorporação1958, versão do preâmbulo em vigor2/3/2005',accessedDate:'2026-10-08'},
 {sourceTitle:franceSources[2].title,locator:'Código Civil Art143, texto direto150–154; versão exibida7/4/2026',statement:'O casamento civil pode ser celebrado entre duas pessoas de sexo diferente ou do mesmo sexo.',basis:'norm',publishedDate:'Redação em vigor19/5/2013; lei2013-404 de17/5/2013Art1',accessedDate:'2026-10-08'}],
 rationale:'Igualdade jurídica de gênero em todos os domínios, casamento civil sem distinção do sexo dos cônjuges e liberdade reprodutiva constitucional sustentam reforma social moderada no desenho jurídico.',
 uncertainty:'Normas de2013/2024 e preâmbulo incorporado não certificam igualdade ou acesso efetivos, ausência de condições legais nem todas as normas de família, sexualidade ou costumes; não são pontos somados nem prova de progresso irrestrito.'};
}
export function clarifyCurrentCountryQuality06(entry:ReferenceEntry):ReferenceEntry {
 const before=currentCountryQuality06OriginalBefore.find(e=>e.id===entry.id); if(!before)return entry;
 const axis=entry.id==='france'?'mor':'pod';
 // Only the accepted previous axis is replaced. Later or absent codes are preserved.
 if(entry.vec[axis]!==before.vec[axis]||JSON.stringify(entry.coding?.[axis])!==JSON.stringify(before.coding?.[axis]))return entry;
 const sources=[...entry.sources]; if(entry.id==='france')for(const source of franceSources)if(!sources.some(s=>s.title===source.title&&s.url===source.url))sources.push(source);
 const coded=codeReferenceAxis(revisedInput(entry),sources);
 return {...entry,period:entry.id==='france'?'Prática institucional em 2024; normas constitucionais e de família de 1946–2024, versões oficiais consultadas em 08/10/2026; regime aduaneiro sem data consultado em 07/10/2026':entry.period,sources,vec:{...entry.vec,[axis]:coded.value},evidence:{...entry.evidence,[axis]:coded.evidence},axisEvidence:{...entry.axisEvidence,[axis]:coded.axisEvidence},coding:{...entry.coding,[axis]:coded.coding}};
}
