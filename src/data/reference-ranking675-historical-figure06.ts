import type {ReferenceEntry,AxisKey} from './references';
import {AXES} from '../lib/scoring';
const AXIS_KEYS = AXES.map(axis => axis.key);
import {codeReferenceAxis,type ReferenceAxisCoding} from '../lib/reference-coding';
export const ranking675HistoricalFigure06OriginalRecord:ReferenceEntry={
  "id": "thomas-paine",
  "kind": "person",
  "category": "historical-figure",
  "name": "Thomas Paine",
  "period": "Rights of Man, 1791–1792; The Age of Reason I, 1794; Agrarian Justice, 1797",
  "vec": {
    "est": 60,
    "rep": 80,
    "pod": 40,
    "imi": 50,
    "dip": 50,
    "int": 50,
    "eco": 50,
    "con": 50,
    "com": 40,
    "rel": 80,
    "mor": 50,
    "tec": 50
  },
  "rationale": "A releitura fundamenta representação republicana, direitos preservados, federação delimitada, circulação comercial, fundo público universal e separação religiosa do poder.",
  "caveats": "O antigo URL Gutenberg 3743, rotulado Rights of Man, contém o volume IV com The Age of Reason. A citação anterior permanece apenas nos snapshots de auditoria; Rights of Man usa o volume II, 3742. Não resolve todas as tensões da política externa da carreira.",
  "sources": [
    {
      "title": "Rights of Man — Thomas Paine, partes I/II, 1791–1792, volume II",
      "url": "https://www.gutenberg.org/cache/epub/3742/pg3742-images.html",
      "note": "Volume II da coleção editorial de Moncure Conway; usa texto autoral Rights of Man I (1791) e II (1792), distinguindo notas editoriais."
    },
    {
      "title": "Agrarian Justice — Thomas Paine, 1797, volume III",
      "url": "https://www.gutenberg.org/cache/epub/31271/pg31271-images.html",
      "note": "Volume III, seção XXVIII Agrarian Justice. Nota editorial informa redação no inverno de 1795–1796 e publicação em 1797; alegações usam o corpo autoral."
    },
    {
      "title": "The Age of Reason — Thomas Paine, parte I, 1794, volume IV",
      "url": "https://www.gutenberg.org/cache/epub/3743/pg3743-images.html",
      "note": "Volume IV, The Age of Reason I, capítulo I, 1794. Este endereço não contém Rights of Man."
    },
    {
      "title": "Agrarian Justice — Project Gutenberg",
      "url": "https://www.gutenberg.org/ebooks/31271",
      "note": "Proposta primária de tributação sobre heranças e pagamento social universal. Fonte anterior preservada para continuidade; não gera os novos valores sem alegação localizada nesta recodificação."
    },
    {
      "title": "Common Sense — National Archives",
      "url": "https://www.archives.gov/milestone-documents/thomas-paines-common-sense",
      "note": "Contexto arquivístico do panfleto republicano de 1776. Fonte anterior preservada para continuidade; não gera os novos valores sem alegação localizada nesta recodificação."
    }
  ],
  "evidence": {
    "est": "medium",
    "rep": "high",
    "pod": "high",
    "com": "high",
    "rel": "high"
  },
  "axisEvidence": {
    "est": {
      "sourceTitles": [
        "Rights of Man — Thomas Paine, partes I/II, 1791–1792, volume II"
      ],
      "rationale": "Divisão territorial constitucional sustenta federalismo parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não maximiza autonomia local: considera excessivo poder anterior dos Estados e insuficiente o federal."
    },
    "rep": {
      "sourceTitles": [
        "Rights of Man — Thomas Paine, partes I/II, 1791–1792, volume II"
      ],
      "rationale": "Soberania representativa é constitutiva da teoria. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Não atribui automaticamente inclusão moderna de todos os grupos omitidos no texto."
    },
    "pod": {
      "sourceTitles": [
        "Rights of Man — Thomas Paine, partes I/II, 1791–1792, volume II"
      ],
      "rationale": "Limite explícito ao poder civil sustenta liberdade. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Aceita força coletiva para proteger direitos; não equivale a abolição de Estado."
    },
    "com": {
      "sourceTitles": [
        "Rights of Man — Thomas Paine, partes I/II, 1791–1792, volume II"
      ],
      "rationale": "Abertura econômica internacional explícita sustenta direção comercial aberta. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não apresenta aqui tabela tarifária ou regime institucional completo de integração."
    },
    "rel": {
      "sourceTitles": [
        "The Age of Reason — Thomas Paine, parte I, 1794, volume IV"
      ],
      "rationale": "Rejeição constitutiva da autoridade religiosa coerciva sustenta direção secular forte. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Declara crença em Deus e direito dos outros à fé; não representa ateísmo pessoal."
    }
  },
  "coding": {
    "est": {
      "axis": "est",
      "position": "moderate-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Rights of Man — Thomas Paine, partes I/II, 1791–1792, volume II",
          "publishedDate": "1792",
          "locator": "Parte II, IV: Nothing on the part of congress; Congress first informed; The powers vested",
          "statement": "Endossa constituição federal com competências definidas entre Estados e União, corrigindo insuficiência do centro.",
          "basis": "norm",
          "accessedDate": "2026-10-07"
        }
      ],
      "rationale": "Divisão territorial constitucional sustenta federalismo parcial.",
      "uncertainty": "Não maximiza autonomia local: considera excessivo poder anterior dos Estados e insuficiente o federal.",
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
          "sourceTitle": "Rights of Man — Thomas Paine, partes I/II, 1791–1792, volume II",
          "publishedDate": "1791–1792",
          "locator": "Parte I: were the election as universal as taxation; Parte II, III: Retaining, then, democracy; By ingrafting",
          "statement": "Exige eleição tão universal quanto tributação e representação democrática contra monarquia e aristocracia hereditárias.",
          "basis": "norm",
          "accessedDate": "2026-10-07"
        }
      ],
      "rationale": "Soberania representativa é constitutiva da teoria.",
      "uncertainty": "Não atribui automaticamente inclusão moderna de todos os grupos omitidos no texto.",
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
      "confidence": "high",
      "claims": [
        {
          "sourceTitle": "Rights of Man — Thomas Paine, partes I/II, 1791–1792, volume II",
          "publishedDate": "1791",
          "locator": "Parte I, Natural rights; The natural rights which he retains; Thirdly, That the power",
          "statement": "Preserva direitos da mente e proíbe poder civil de invadir direitos individuais retidos.",
          "basis": "norm",
          "accessedDate": "2026-10-07"
        }
      ],
      "rationale": "Limite explícito ao poder civil sustenta liberdade.",
      "uncertainty": "Aceita força coletiva para proteger direitos; não equivale a abolição de Estado.",
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
      "confidence": "high",
      "claims": [
        {
          "sourceTitle": "Rights of Man — Thomas Paine, partes I/II, 1791–1792, volume II",
          "publishedDate": "1792",
          "locator": "Parte II, V: In all my publications; If commerce were permitted; Whatever has a tendency",
          "statement": "Defende extensão universal do comércio e intercâmbio recíproco entre nações.",
          "basis": "norm",
          "accessedDate": "2026-10-07"
        }
      ],
      "rationale": "Abertura econômica internacional explícita sustenta direção comercial aberta.",
      "uncertainty": "Não apresenta aqui tabela tarifária ou regime institucional completo de integração.",
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
          "sourceTitle": "The Age of Reason — Thomas Paine, parte I, 1794, volume IV",
          "publishedDate": "1794",
          "locator": "Parte I, I: All national institutions of churches; The adulterous connection",
          "statement": "Rejeita igrejas nacionais monopolizando poder e a coerção da união entre igreja e Estado.",
          "basis": "norm",
          "accessedDate": "2026-10-07"
        }
      ],
      "rationale": "Rejeição constitutiva da autoridade religiosa coerciva sustenta direção secular forte.",
      "uncertainty": "Declara crença em Deus e direito dos outros à fé; não representa ateísmo pessoal.",
      "reviewedOn": "2026-10-07",
      "version": "editorial-ordinal-v1",
      "value": 80,
      "range": [
        75,
        90
      ]
    }
  }
};
export const ranking675HistoricalFigure06Proposal:{period:string;rationale:string;caveats:string;sources:ReferenceEntry["sources"];coding:ReferenceAxisCoding[]}={
  "period": "Normas selecionadas de Rights of Man I/II (1791–1792) e The Age of Reason I (1794), reproduções Conway",
  "rationale": "Defende federação representativa, direitos pessoais, comércio recíproco e separação entre igrejas e Estado; propõe reduzir frotas e recrutamento.",
  "caveats": "Recorte de normas, não toda a carreira ou prática comprovada. Preserva autoridade federal, força civil protetiva, prioridade comercial doméstica e pressão naval contra a Espanha. O desarmamento proposto não elimina toda força. Crença pessoal em Deus não equivale a união entre igrejas e Estado. O fundo de Agrarian Justice permanece arquivado sem sustentar propriedade coletiva ou costumes. Eixos sem evidência documental permanecem não estimados.",
  "sources": [
    {
      "title": "Rights of Man — Thomas Paine, partes I/II, 1791–1792, volume II",
      "url": "https://www.gutenberg.org/cache/epub/3742/pg3742-images.html",
      "note": "Volume II da coleção editorial de Moncure Conway; usa texto autoral Rights of Man I (1791) e II (1792), distinguindo notas editoriais."
    },
    {
      "title": "Agrarian Justice — Thomas Paine, 1797, volume III",
      "url": "https://www.gutenberg.org/cache/epub/31271/pg31271-images.html",
      "note": "Volume III, seção XXVIII Agrarian Justice. Nota editorial informa redação no inverno de 1795–1796 e publicação em 1797; alegações usam o corpo autoral."
    },
    {
      "title": "The Age of Reason — Thomas Paine, parte I, 1794, volume IV",
      "url": "https://www.gutenberg.org/cache/epub/3743/pg3743-images.html",
      "note": "Volume IV, The Age of Reason I, capítulo I, 1794. Este endereço não contém Rights of Man."
    },
    {
      "title": "Agrarian Justice — Project Gutenberg",
      "url": "https://www.gutenberg.org/ebooks/31271",
      "note": "Proposta primária de tributação sobre heranças e pagamento social universal. Fonte anterior preservada para continuidade; não gera os novos valores sem alegação localizada nesta recodificação."
    },
    {
      "title": "Common Sense — National Archives",
      "url": "https://www.archives.gov/milestone-documents/thomas-paines-common-sense",
      "note": "Contexto arquivístico do panfleto republicano de 1776. Fonte anterior preservada para continuidade; não gera os novos valores sem alegação localizada nesta recodificação."
    },
    {
      "title": "Rights of Man — leitura delimitada das partes I/II, coleção Conway",
      "url": "https://www.gutenberg.org/cache/epub/3742/pg3742-images.html",
      "note": "Leitura delimitada do corpo autoral das partes I (1791) e II (1792), na coleção Conway digitalizada. Metadados0–28 contêm nota de reimpressão1894–1896 com referência divergente ao volumeI; não se apresenta como fac-símile original. Lidos344–381/1032–1086/1133–1168/1272–1329/1847–1868, não a obra inteira."
    },
    {
      "title": "The Age of Reason I — capítulo I, coleção Conway",
      "url": "https://www.gutenberg.org/cache/epub/3743/pg3743-images.html",
      "note": "Corpo autoral completo oferecido do capítuloI,176–192, em volumeIV organizado por Moncure Conway; obra original de1794, reprodução digital lançada2003/atualizada2021. Metadados0–28 lidos; introdução editorial e suas disputas de data não são atribuídas ao autor. Não corresponde a leitura completa das partes de The Age of Reason."
    }
  ],
  "coding": [
    {
      "axis": "est",
      "position": "moderate-first",
      "confidence": "high",
      "claims": [
        {
          "sourceTitle": "Rights of Man — leitura delimitada das partes I/II, coleção Conway",
          "publishedDate": "1792; reprodução editorial Conway",
          "locator": "Rights of Man II,1133–1168, especialmente1138/1144",
          "statement": "Endossa Estados que delegam poderes ao governo federal representativo e constituição elaborada por convenção popular.",
          "basis": "norm",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "A distribuição territorial explícita entre Estados e poder federal sustenta federalismo60; não decorre apenas da palavra união.",
      "uncertainty": "1144 critica poderes estaduais excessivos e autoridade federal insuficiente, contraponto à descentralização máxima. É norma constitucional escolhida, não avaliação de toda prática federal.",
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "rep",
      "position": "strong-first",
      "confidence": "high",
      "claims": [
        {
          "sourceTitle": "Rights of Man — leitura delimitada das partes I/II, coleção Conway",
          "publishedDate": "1792; reprodução editorial Conway",
          "locator": "Rights of Man II,1032–1086",
          "statement": "Prescreve autoridade representativa fundada na nação e rejeita governos hereditários monárquicos e aristocráticos.",
          "basis": "norm",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "A representação popular é princípio constitutivo de todo o governo proposto, justificando democracia80 em vez de apoio pontual a uma eleição.",
      "uncertainty": "Não se presumem sufrágio efetivo de todas as categorias históricas, participação feminina explicitada neste trecho ou resultados políticos posteriores.",
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "pod",
      "position": "moderate-second",
      "confidence": "high",
      "claims": [
        {
          "sourceTitle": "Rights of Man — leitura delimitada das partes I/II, coleção Conway",
          "publishedDate": "1791; reprodução editorial Conway",
          "locator": "Rights of Man I,344–381, especialmente348–360",
          "statement": "Preserva direitos naturais que não exigem força coletiva e nega que a autoridade civil adquirida possa invadir esses direitos retidos.",
          "basis": "norm",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "A regra geral dos limites da autoridade sobre a pessoa e seus direitos sustenta liberdade40, além de uma reforma jurídica isolada.",
      "uncertainty": "Aceita força civil coletiva para proteger direitos que o indivíduo não consegue garantir sozinho; não elimina todo governo ou coerção. A liberdade pessoal exige não prejudicar direitos alheios.",
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "com",
      "position": "moderate-second",
      "confidence": "high",
      "claims": [
        {
          "sourceTitle": "Rights of Man — leitura delimitada das partes I/II, coleção Conway",
          "publishedDate": "1792; reprodução editorial Conway",
          "locator": "Rights of Man II,1272–1329, especialmente1297–1322; contraponto1860",
          "statement": "Favorece abertura comercial recíproca entre nações, contra obstáculos e domínio militar como condição de comércio.",
          "basis": "norm",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "A preferência geral por intercâmbio internacional aberto e recíproco sustenta comércio livre40, sem inferir orientação a partir de um tratado isolado.",
      "uncertainty": "1317 dá maior benefício nacional ao comércio doméstico;1860 descreve prejuízo de importações asiáticas à manufatura inglesa. Esses contrapontos não são convertidos em uma tarifa inexistente, mas impedem abertura absoluta20 ou declaração de ausência de tensões.",
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "rel",
      "position": "strong-first",
      "confidence": "high",
      "claims": [
        {
          "sourceTitle": "The Age of Reason I — capítulo I, coleção Conway",
          "publishedDate": "1794; reprodução editorial Conway",
          "locator": "The Age of Reason I, capítuloI,176–192, especialmente186–191",
          "statement": "Rejeita instituições eclesiásticas como instrumentos de poder sobre a humanidade e sua união punitiva com o Estado; preserva a crença individual e sua comunicação.",
          "basis": "norm",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "A oposição institucional à união coerciva entre igrejas e Estado, acompanhada de liberdade religiosa, sustenta separação forte80; não depende de presumir ateísmo.",
      "uncertainty": "Declara crença pessoal em Deus180–181 e não se interpreta sua crítica de igrejas como proibição de toda fé privada. A norma não certifica legislação implementada.",
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "dip",
      "position": "moderate-second",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Rights of Man — leitura delimitada das partes I/II, coleção Conway",
          "publishedDate": "1792; reprodução editorial Conway",
          "locator": "Rights of Man II,1847–1868, especialmente1853–1856/1866; contraponto1858–1859",
          "statement": "Propõe às potências europeias cessar novos navios de guerra, reduzir frotas existentes a um décimo e cessar recrutamento com dispensa remunerada de soldados.",
          "basis": "norm",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "A prescrição generalizada de redução naval e de recrutamento é uma orientação militar de desarmamento, não apenas previsão de paz pelo comércio. Paz40 é moderada pelo uso coercivo admitido no próprio programa.",
      "uncertainty": "1858–1859 conserva frotas confederadas e propõe pressão conjunta sobre a Espanha pela independência sul-americana. Não renuncia a toda capacidade militar nem a toda força; por isso não paz20. Escopo europeu datado, sem extensão automática a conflitos atuais.",
      "reviewedOn": "2026-10-08"
    }
  ]
};
export function reconcileRanking675HistoricalFigure06(entries:ReferenceEntry[]):ReferenceEntry[]{return entries.map(existing=>{
 if(existing.id!==ranking675HistoricalFigure06OriginalRecord.id||JSON.stringify(existing)!==JSON.stringify(ranking675HistoricalFigure06OriginalRecord))return existing;
 const p=ranking675HistoricalFigure06Proposal;const next:ReferenceEntry={...existing,period:p.period,rationale:p.rationale,caveats:p.caveats,sources:p.sources,vec:Object.fromEntries(AXIS_KEYS.map(k=>[k,50])) as Record<AxisKey,number>,evidence:{},axisEvidence:{},coding:{}};
 for(const input of p.coding){const c=codeReferenceAxis(input,next.sources);next.vec[input.axis]=c.value;next.evidence[input.axis]=c.evidence;next.axisEvidence![input.axis]=c.axisEvidence;next.coding![input.axis]=c.coding;}
 return next;
});}
