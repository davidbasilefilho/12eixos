import type {ReferenceEntry,AxisKey} from './references';
import {AXES} from '../lib/scoring';
import {codeReferenceAxis,type ReferenceAxisCoding} from '../lib/reference-coding';
const AXIS_KEYS = AXES.map(axis => axis.key);
export const ranking675HistoricalFigure07OriginalRecord:ReferenceEntry={
  "id": "giuseppe-mazzini",
  "name": "Giuseppe Mazzini",
  "kind": "person",
  "category": "historical-figure",
  "period": "On the Duties of Man, seções Country (1859) e Liberty (1860), edição acadêmica de 2009",
  "rationale": "O texto propõe unidade italiana, voto, liberdades civis e limites à intervenção sob uma lei política moral religiosa.",
  "caveats": "Edição acadêmica abreviada e adaptada de traduções anteriores, hospedada pela Universidade de Bologna. UMass dá cronologia divergente; segue-se a nota editorial de 2009. A URL antiga Gutenberg 26029 identifica outro livro e fica apenas na auditoria.",
  "sources": [
    {
      "title": "On the Duties of Man — Mazzini, 1859–1860; edição Recchia/Urbinati, 2009",
      "url": "https://virtuale.unibo.it/pluginfile.php/1797807/mod_unibores/content/0/1.%20Mazzini%201.pdf",
      "note": "Texto primário em A Cosmopolitanism of Nations, Recchia/Urbinati, 2009; nota p. 80 data originais Country 1859 e Liberty 1860; passagens pp. 94–98."
    },
    {
      "title": "Duties of Man — excerto UMass, cronologia divergente",
      "url": "https://people.umass.edu/hist101/Mazzini%20Duties%20of%20Man.pdf",
      "note": "Comparação textual e identidade 1805–1872; datas 1844–1858 divergem da nota da edição acadêmica. Não gera valores."
    }
  ],
  "vec": {
    "est": 20,
    "rep": 80,
    "pod": 40,
    "imi": 50,
    "dip": 50,
    "int": 60,
    "eco": 50,
    "con": 50,
    "com": 50,
    "rel": 20,
    "mor": 60,
    "tec": 50
  },
  "evidence": {
    "est": "high",
    "rep": "high",
    "rel": "high",
    "mor": "medium",
    "pod": "high",
    "int": "medium"
  },
  "axisEvidence": {
    "est": {
      "sourceTitles": [
        "On the Duties of Man — Mazzini, 1859–1860; edição Recchia/Urbinati, 2009"
      ],
      "rationale": "Desenho explicitamente unitário sustenta o polo forte. Codificação editorial strong-second: âncora 20, faixa 10–25; a fonte não mede esse número. Limites: Recorte italiano de unificação, não regra universal sobre toda federação."
    },
    "rep": {
      "sourceTitles": [
        "On the Duties of Man — Mazzini, 1859–1860; edição Recchia/Urbinati, 2009"
      ],
      "rationale": "Soberania eleitoral constitutiva sustenta direção democrática forte. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Linguagem masculina histórica; não acrescenta garantias eleitorais modernas ausentes."
    },
    "rel": {
      "sourceTitles": [
        "On the Duties of Man — Mazzini, 1859–1860; edição Recchia/Urbinati, 2009"
      ],
      "rationale": "Fundamento religioso constitutivo organiza o dever político. Codificação editorial strong-second: âncora 20, faixa 10–25; a fonte não mede esse número. Limites: Não propõe primazia clerical ou igreja estatal."
    },
    "mor": {
      "sourceTitles": [
        "On the Duties of Man — Mazzini, 1859–1860; edição Recchia/Urbinati, 2009"
      ],
      "rationale": "Igualdade civil documenta um subtema emancipatório. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não cobre gênero, aborto ou demais costumes atuais."
    },
    "pod": {
      "sourceTitles": [
        "On the Duties of Man — Mazzini, 1859–1860; edição Recchia/Urbinati, 2009"
      ],
      "rationale": "Garantias explícitas documentam liberdade civil. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Aceita autoridade e punição posterior de crimes e erros; não é rejeição de toda coerção."
    },
    "int": {
      "sourceTitles": [
        "On the Duties of Man — Mazzini, 1859–1860; edição Recchia/Urbinati, 2009"
      ],
      "rationale": "Limite explícito à intervenção externa documenta não intervenção no caso delimitado. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não é proibição geral de toda intervenção; mantém protesto interno e solidariedade entre povos."
    }
  },
  "coding": {
    "est": {
      "axis": "est",
      "position": "strong-second",
      "confidence": "high",
      "claims": [
        {
          "sourceTitle": "On the Duties of Man — Mazzini, 1859–1860; edição Recchia/Urbinati, 2009",
          "publishedDate": "1859 (edição de 2009)",
          "locator": "4. Duties toward your Country, p. 94, Your Country is one and indivisible e Each Country must therefore",
          "statement": "Exige governo italiano único e rejeita federalistas que dividam a nação em estados.",
          "basis": "declaration",
          "accessedDate": "2026-10-07"
        }
      ],
      "rationale": "Desenho explicitamente unitário sustenta o polo forte.",
      "uncertainty": "Recorte italiano de unificação, não regra universal sobre toda federação.",
      "reviewedOn": "2026-10-07",
      "version": "editorial-ordinal-v1",
      "value": 20,
      "range": [
        10,
        25
      ]
    },
    "rep": {
      "axis": "rep",
      "position": "strong-first",
      "confidence": "high",
      "claims": [
        {
          "sourceTitle": "On the Duties of Man — Mazzini, 1859–1860; edição Recchia/Urbinati, 2009",
          "publishedDate": "1859–1860 (edição de 2009)",
          "locator": "4. Duties toward your Country, pp. 95–96, The entire Nation should legislate; 5. Liberty, p. 97, The Republic is thus",
          "statement": "Exige participação direta ou indireta de toda a nação nas leis e voto de cada cidadão.",
          "basis": "declaration",
          "accessedDate": "2026-10-07"
        }
      ],
      "rationale": "Soberania eleitoral constitutiva sustenta direção democrática forte.",
      "uncertainty": "Linguagem masculina histórica; não acrescenta garantias eleitorais modernas ausentes.",
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
      "confidence": "high",
      "claims": [
        {
          "sourceTitle": "On the Duties of Man — Mazzini, 1859–1860; edição Recchia/Urbinati, 2009",
          "publishedDate": "1859 (edição de 2009)",
          "locator": "4. Duties toward your Country, p. 95, Your Country should be your Temple e All secondary laws",
          "statement": "Subordina a legislação a uma lei moral com Deus no topo e povo igual na base.",
          "basis": "declaration",
          "accessedDate": "2026-10-07"
        }
      ],
      "rationale": "Fundamento religioso constitutivo organiza o dever político.",
      "uncertainty": "Não propõe primazia clerical ou igreja estatal.",
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
      "position": "moderate-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "On the Duties of Man — Mazzini, 1859–1860; edição Recchia/Urbinati, 2009",
          "publishedDate": "1859 (edição de 2009)",
          "locator": "4. Duties toward your Country, p. 95, There is no true country e Every privilege",
          "statement": "Combate castas, privilégios hereditários e desigualdade de direitos.",
          "basis": "declaration",
          "accessedDate": "2026-10-07"
        }
      ],
      "rationale": "Igualdade civil documenta um subtema emancipatório.",
      "uncertainty": "Não cobre gênero, aborto ou demais costumes atuais.",
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
      "position": "moderate-second",
      "confidence": "high",
      "claims": [
        {
          "sourceTitle": "On the Duties of Man — Mazzini, 1859–1860; edição Recchia/Urbinati, 2009",
          "publishedDate": "1860 (edição de 2009)",
          "locator": "5. Liberty, pp. 97–98, You have a right to liberty; Nobody has a right to imprison; The Press must be absolutely free",
          "statement": "Protege associação, expressão e audiência judicial contra coerção arbitrária.",
          "basis": "declaration",
          "accessedDate": "2026-10-07"
        }
      ],
      "rationale": "Garantias explícitas documentam liberdade civil.",
      "uncertainty": "Aceita autoridade e punição posterior de crimes e erros; não é rejeição de toda coerção.",
      "reviewedOn": "2026-10-07",
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
          "sourceTitle": "On the Duties of Man — Mazzini, 1859–1860; edição Recchia/Urbinati, 2009",
          "publishedDate": "1860 (edição de 2009)",
          "locator": "5. Liberty, p. 97, No majority may establish a tyrannical regime; While foreigners do not have a right",
          "statement": "Nega a estrangeiros o direito de intervir pela força contra um povo que estabeleça tirania.",
          "basis": "declaration",
          "accessedDate": "2026-10-07"
        }
      ],
      "rationale": "Limite explícito à intervenção externa documenta não intervenção no caso delimitado.",
      "uncertainty": "Não é proibição geral de toda intervenção; mantém protesto interno e solidariedade entre povos.",
      "reviewedOn": "2026-10-07",
      "version": "editorial-ordinal-v1",
      "value": 60,
      "range": [
        55,
        70
      ]
    }
  }
};
export const ranking675HistoricalFigure07Proposal:{period:string;rationale:string;caveats:string;sources:ReferenceEntry["sources"];coding:ReferenceAxisCoding[]}={
  "period": "Programa selecionado: Country/Liberty (1859) e Social Question/Conclusion (1860), edição Recchia/Urbinati2009",
  "rationale": "Propõe Itália unitária e republicana, liberdades civis e emancipação feminina, com leis de fundamento religioso e associações voluntárias de produtores.",
  "caveats": "Normas selecionadas, não a obra italiana integral nem toda a carreira. A edição adaptada contém elipses. Country e Liberty datam1859; Social Question e Conclusion datam1860. Preserva punição de imoralidade, missão moral coletiva, solidariedade externa armada, secularização de funções da igreja, propriedade individual e empreendedores privados. As associações exigem voluntariedade e saída. Eixos sem evidência documental permanecem não estimados.",
  "sources": [
    {
      "title": "On the Duties of Man — Mazzini, 1859–1860; edição Recchia/Urbinati, 2009",
      "url": "https://virtuale.unibo.it/pluginfile.php/1797807/mod_unibores/content/0/1.%20Mazzini%201.pdf",
      "note": "Texto primário selecionado em A Cosmopolitanism of Nations, Recchia/Urbinati, 2009, adaptado de traduções anteriores. A nota da p.80 data Country e Liberty em1859 e Social Question e Conclusion em1860; corrige a nota anterior que atribuía Liberty a1860. Leitura textual dos capítulos oferecidos Country429–567, Liberty569–674, Social Question676–884 e Conclusion886–974, com elipses editoriais; não se apresenta como livro italiano integral ou fac-símile."
    },
    {
      "title": "Duties of Man — excerto UMass, cronologia divergente",
      "url": "https://people.umass.edu/hist101/Mazzini%20Duties%20of%20Man.pdf",
      "note": "Comparação textual e identidade 1805–1872; datas 1844–1858 divergem da nota da edição acadêmica. Não gera valores."
    }
  ],
  "coding": [
    {
      "axis": "est",
      "position": "strong-second",
      "confidence": "high",
      "claims": [
        {
          "sourceTitle": "On the Duties of Man — Mazzini, 1859–1860; edição Recchia/Urbinati, 2009",
          "publishedDate": "1859; seleção traduzida2009",
          "locator": "Country502–514, pp.94–95",
          "statement": "Exige Itália indivisível com um único governo e rejeita sua divisão federal em Estados separados.",
          "basis": "norm",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "A organização territorial unitária é condição constitutiva explícita do projeto de unificação italiano: unitário20, não mera centralização de um serviço.",
      "uncertainty": "Não é regra universal contra toda federação, nem afirmação de que a Itália histórica já funcionava assim. A igualdade nacional não elimina diferenças individuais.",
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "rep",
      "position": "strong-first",
      "confidence": "high",
      "claims": [
        {
          "sourceTitle": "On the Duties of Man — Mazzini, 1859–1860; edição Recchia/Urbinati, 2009",
          "publishedDate": "1859–1860; seleção traduzida2009",
          "locator": "Country540–548; Liberty594–600; Conclusion969–974",
          "statement": "Requer legislação de toda a nação, representantes eleitos e revogáveis e protesta a exclusão política das mulheres.",
          "basis": "norm",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "A autoridade eleitoral popular organiza todo o governo proposto; compromisso constitutivo justifica democracia80. A conclusão explicita a emancipação política feminina, sem depender de supor significado universal da linguagem masculina anterior.",
      "uncertainty": "É declaração programática, não certificação de sufrágio praticado ou de toda a trajetória revolucionária. A autoridade coletiva tem missão moral e religiosa superior, preservada como limite.",
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "pod",
      "position": "moderate-second",
      "confidence": "high",
      "claims": [
        {
          "sourceTitle": "On the Duties of Man — Mazzini, 1859–1860; edição Recchia/Urbinati, 2009",
          "publishedDate": "1859; seleção traduzida2009",
          "locator": "Liberty613–655/656–674, pp.97–99",
          "statement": "Protege pessoa, circulação, consciência religiosa, imprensa, associação e audiência judicial contra imposição arbitrária.",
          "basis": "norm",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "Garantias gerais contra coerção sobre a vida pessoal sustentam liberdade40. A magnitude é moderada porque o autor admite punição e autoridade coletiva para fins morais, em vez de reduzir Estado a evitar danos individuais.",
      "uncertainty": "631 admite punição de erros e imoralidade da imprensa;653–674 rejeita liberdade sem limites e subordina seu uso ao progresso moral coletivo. Não é libertarismo absoluto20 nem prova de prática repressiva.",
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "int",
      "position": "moderate-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "On the Duties of Man — Mazzini, 1859–1860; edição Recchia/Urbinati, 2009",
          "publishedDate": "1859; seleção traduzida2009",
          "locator": "Liberty609–612; Country498–500",
          "statement": "Nega a estrangeiros intervenção armada para substituir o governo escolhido por um povo, mesmo quando esse povo escolha tirania.",
          "basis": "norm",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "A regra delimita a autoridade de povos estrangeiros sobre a escolha governamental de outro povo, sustentando não imposição política60. Não é apenas autonomia individual ou política comercial.",
      "uncertainty": "Country498–500 conserva dever de lutar pela liberdade de outros povos. A tensão entre solidariedade e não imposição impede não intervenção absoluta80; não se extrapola a todas as formas de assistência ou a guerras atuais.",
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "rel",
      "position": "moderate-second",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "On the Duties of Man — Mazzini, 1859–1860; edição Recchia/Urbinati, 2009",
          "publishedDate": "1859–1860; seleção traduzida2009",
          "locator": "Country530–534; Liberty623–625; Conclusion918–927",
          "statement": "Requer que leis secundárias apliquem a lei moral suprema com Deus no topo, mas protege consciência religiosa e prevê secularização de bens e funções educacionais da igreja.",
          "basis": "norm",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "A justificação religiosa é uma regra explícita de legislação, não apenas fé pessoal. Religioso40 é moderado pela ausência de primazia clerical e pela transferência prevista de funções da igreja ao Estado, retirando a intensidade forte20 herdada.",
      "uncertainty": "Não propõe igreja como governo nem proíbe crença individual. Confisco e secularização previstos na conclusão são contrapontos institucionais reais, sem provar Estado inteiramente neutro a valores religiosos. A magnitude permanece proposta editorial pendente.",
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "mor",
      "position": "moderate-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "On the Duties of Man — Mazzini, 1859–1860; edição Recchia/Urbinati, 2009",
          "publishedDate": "1860; seleção traduzida2009",
          "locator": "Conclusion969–974, p.107",
          "statement": "Exige protestar contra a desigualdade civil, política e social das mulheres e liga sua emancipação à emancipação dos trabalhadores.",
          "basis": "norm",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "A alegação abrange condição feminina social, além de voto ou igualdade de uma prestação financeira. Sustenta direção emancipatória60 mediante substituição do antigo argumento restrito a castas e privilégios.",
      "uncertainty": "Não detalha organização doméstica, sexualidade, aborto ou costumes atuais. Linguagem religiosa e binária permanece histórica; emancipação explícita não é convertida em liberalismo irrestrito80.",
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "eco",
      "position": "moderate-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "On the Duties of Man — Mazzini, 1859–1860; edição Recchia/Urbinati, 2009",
          "publishedDate": "1860; seleção traduzida2009",
          "locator": "Social Question712–749/764–853/854–884; Conclusion886–927",
          "statement": "Propõe transformar trabalho assalariado em associações voluntárias de produtores que unem trabalho e capital e controlam seus frutos, preservando propriedade individual adquirida e rejeitando concentração estatal de todos os meios produtivos.",
          "basis": "norm",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "A transformação pretendida é geral: substitui a separação capital/trabalho por propriedade e produção associadas, não somente fundo de crédito ou empresa isolada. Direção coletiva60 é moderada pela aquisição individual, saída voluntária e coexistência com empreendedores privados.",
      "uncertainty": "764–816 protege propriedade obtida por trabalho;817–829 rejeita todos os meios produtivos no Estado;845–853 exige voluntariedade e saída;854–884 admite acionistas e juros;907–908 mantém contratos públicos para empreendedores individuais e924 prevê algumas empresas estatais. Não prescreve estatização universal80 nem elimina mercados.",
      "reviewedOn": "2026-10-08"
    }
  ]
};
export function reconcileRanking675HistoricalFigure07(entries:ReferenceEntry[]):ReferenceEntry[]{return entries.map(existing=>{
 if(existing.id!==ranking675HistoricalFigure07OriginalRecord.id||JSON.stringify(existing)!==JSON.stringify(ranking675HistoricalFigure07OriginalRecord))return existing;
 const p=ranking675HistoricalFigure07Proposal;const next:ReferenceEntry={...existing,period:p.period,rationale:p.rationale,caveats:p.caveats,sources:p.sources,vec:Object.fromEntries(AXIS_KEYS.map(k=>[k,50])) as Record<AxisKey,number>,evidence:{},axisEvidence:{},coding:{}};
 for(const input of p.coding){const c=codeReferenceAxis(input,next.sources);next.vec[input.axis]=c.value;next.evidence[input.axis]=c.evidence;next.axisEvidence![input.axis]=c.axisEvidence;next.coding![input.axis]=c.coding;}
 return next;
});}
