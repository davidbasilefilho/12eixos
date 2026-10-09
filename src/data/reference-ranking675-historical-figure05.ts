import type {ReferenceEntry,AxisKey} from './references';
import {AXES} from '../lib/scoring';
const AXIS_KEYS = AXES.map(axis => axis.key);
import {codeReferenceAxis,type ReferenceAxisCoding} from '../lib/reference-coding';
export const ranking675HistoricalFigure05OriginalRecord:ReferenceEntry={
  "id": "friedrich-hayek",
  "kind": "person",
  "category": "historical-figure",
  "name": "Friedrich Hayek",
  "period": "Textos autorais de 1945 e 1960; recodificação documental delimitada",
  "vec": {
    "est": 50,
    "rep": 60,
    "pod": 40,
    "imi": 50,
    "dip": 50,
    "int": 60,
    "eco": 40,
    "con": 20,
    "com": 50,
    "rel": 60,
    "mor": 50,
    "tec": 50
  },
  "rationale": "A releitura distingue coordenação por preços, empreendimento privado, limites à coerção, democracia limitada e separação espiritual/temporal.",
  "caveats": "Não recodifica a carreira completa. O ensaio de 1960 é o posfácio Why I am Not a Conservative, não capítulos 7/9. As posições são âncoras editoriais, sem porcentagens medidas pelo autor.",
  "sources": [
    {
      "title": "Why I am Not a Conservative — Friedrich Hayek, 1960",
      "url": "https://press.uchicago.edu/books/excerpt/2011/hayek_constitution.html",
      "note": "Posfácio original de 1960 reproduzido na edição definitiva de 2011, pp. 517–533; texto autoral completo."
    },
    {
      "title": "The Use of Knowledge in Society — Friedrich Hayek, 1945",
      "url": "https://www.laits.utexas.edu/~mbs31415/HayekUseOfKnowledgeInSociety.pdf",
      "note": "Reprodução universitária de American Economic Review 35(4), setembro de 1945, pp. 519–530; leitura do texto extraído, sem alegar inspeção visual."
    },
    {
      "title": "Palestra Nobel: The Pretence of Knowledge",
      "url": "https://www.nobelprize.org/prizes/economic-sciences/1974/hayek/lecture/",
      "note": "Crítica à pretensão de planejar sistemas complexos. Fonte anterior preservada para continuidade; não gera os novos valores sem alegação localizada nesta recodificação."
    },
    {
      "title": "Friedrich Hayek, Stanford Encyclopedia of Philosophy",
      "url": "https://plato.stanford.edu/entries/friedrich-hayek/",
      "note": "Síntese acadêmica da democracia constitucional, ordem espontânea e economia. Fonte anterior preservada para continuidade; não gera os novos valores sem alegação localizada nesta recodificação."
    }
  ],
  "evidence": {
    "rep": "high",
    "pod": "high",
    "eco": "medium",
    "con": "high",
    "int": "medium",
    "rel": "medium"
  },
  "axisEvidence": {
    "rep": {
      "sourceTitles": [
        "Why I am Not a Conservative — Friedrich Hayek, 1960"
      ],
      "rationale": "Preferência institucional explícita sustenta representação democrática parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Maioria é meio, não fim; não documenta regras completas de sufrágio nem governo ilimitado."
    },
    "pod": {
      "sourceTitles": [
        "Why I am Not a Conservative — Friedrich Hayek, 1960"
      ],
      "rationale": "Limite normativo à coerção sustenta liberdade. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não abole Estado ou toda coerção; aceita regras protetivas gerais."
    },
    "eco": {
      "sourceTitles": [
        "Why I am Not a Conservative — Friedrich Hayek, 1960"
      ],
      "rationale": "Empreendimento produtivo privado sustenta direção privada delimitada. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Passagem industrial não define combinação integral de propriedade pública e privada ou serviços sociais."
    },
    "con": {
      "sourceTitles": [
        "The Use of Knowledge in Society — Friedrich Hayek, 1945"
      ],
      "rationale": "Coordenação por preços é constitutiva da explicação da economia complexa. Codificação editorial strong-second: âncora 20, faixa 10–25; a fonte não mede esse número. Limites: Planejar individualmente não equivale a planejamento central; mecanismo de preços não decide sozinho regime de propriedade."
    },
    "int": {
      "sourceTitles": [
        "Why I am Not a Conservative — Friedrich Hayek, 1960"
      ],
      "rationale": "Crítica explícita à dominação estrangeira sustenta não intervenção parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Caso imperial delimitado; não demonstra regra universal sobre todas as intervenções ou assistência militar."
    },
    "rel": {
      "sourceTitles": [
        "Why I am Not a Conservative — Friedrich Hayek, 1960"
      ],
      "rationale": "Separação política de crenças sustenta direção secular parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Aceita crença religiosa individual e critica antirreligião militante; não é ateísmo presumido."
    }
  },
  "coding": {
    "rep": {
      "axis": "rep",
      "position": "moderate-first",
      "confidence": "high",
      "claims": [
        {
          "sourceTitle": "Why I am Not a Conservative — Friedrich Hayek, 1960",
          "publishedDate": "1960",
          "locator": "§3: Closely connected; At any rate, the advantages of democracy",
          "statement": "Prefere democracia para mudança pacífica e educação política, com poder da maioria limitado.",
          "basis": "norm",
          "accessedDate": "2026-10-07"
        }
      ],
      "rationale": "Preferência institucional explícita sustenta representação democrática parcial.",
      "uncertainty": "Maioria é meio, não fim; não documenta regras completas de sufrágio nem governo ilimitado.",
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
          "sourceTitle": "Why I am Not a Conservative — Friedrich Hayek, 1960",
          "publishedDate": "1960",
          "locator": "§3: It is the recognition; It is for this reason",
          "statement": "Rejeita coerção arbitrária e imposição de convicções sobre condutas sem dano à esfera alheia.",
          "basis": "norm",
          "accessedDate": "2026-10-07"
        }
      ],
      "rationale": "Limite normativo à coerção sustenta liberdade.",
      "uncertainty": "Não abole Estado ou toda coerção; aceita regras protetivas gerais.",
      "reviewedOn": "2026-10-07",
      "version": "editorial-ordinal-v1",
      "value": 40,
      "range": [
        30,
        45
      ]
    },
    "eco": {
      "axis": "eco",
      "position": "moderate-second",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Why I am Not a Conservative — Friedrich Hayek, 1960",
          "publishedDate": "1960",
          "locator": "§3: That the conservative opposition; Indeed, though the restrictions",
          "statement": "Defende livre empreendimento e opõe medidas coletivistas e diretivas na indústria.",
          "basis": "norm",
          "accessedDate": "2026-10-07"
        }
      ],
      "rationale": "Empreendimento produtivo privado sustenta direção privada delimitada.",
      "uncertainty": "Passagem industrial não define combinação integral de propriedade pública e privada ou serviços sociais.",
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
      "position": "strong-second",
      "confidence": "high",
      "claims": [
        {
          "sourceTitle": "The Use of Knowledge in Society — Friedrich Hayek, 1945",
          "publishedDate": "1945-09",
          "locator": "V–VII, pp. 524–529: We must solve it; price system as such a mechanism",
          "statement": "Defende decisões econômicas descentralizadas coordenadas por preços e conhecimento disperso.",
          "basis": "norm",
          "accessedDate": "2026-10-07"
        }
      ],
      "rationale": "Coordenação por preços é constitutiva da explicação da economia complexa.",
      "uncertainty": "Planejar individualmente não equivale a planejamento central; mecanismo de preços não decide sozinho regime de propriedade.",
      "reviewedOn": "2026-10-07",
      "version": "editorial-ordinal-v1",
      "value": 20,
      "range": [
        10,
        25
      ]
    },
    "int": {
      "axis": "int",
      "position": "moderate-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Why I am Not a Conservative — Friedrich Hayek, 1960",
          "publishedDate": "1960",
          "locator": "§4: Only at first; But the more a person dislikes; It is significant",
          "statement": "Rejeita imperialismo civilizador e favorece contato voluntário em vez de governo imposto a outros.",
          "basis": "norm",
          "accessedDate": "2026-10-07"
        }
      ],
      "rationale": "Crítica explícita à dominação estrangeira sustenta não intervenção parcial.",
      "uncertainty": "Caso imperial delimitado; não demonstra regra universal sobre todas as intervenções ou assistência militar.",
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
          "sourceTitle": "Why I am Not a Conservative — Friedrich Hayek, 1960",
          "publishedDate": "1960",
          "locator": "§5: There is no reason; What distinguishes the liberal",
          "statement": "Separa esferas espiritual e temporal e rejeita imposição das próprias crenças.",
          "basis": "norm",
          "accessedDate": "2026-10-07"
        }
      ],
      "rationale": "Separação política de crenças sustenta direção secular parcial.",
      "uncertainty": "Aceita crença religiosa individual e critica antirreligião militante; não é ateísmo presumido.",
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
export const ranking675HistoricalFigure05Proposal:{period:string;rationale:string;caveats:string;sources:ReferenceEntry["sources"];coding:ReferenceAxisCoding[]}={
  "period": "Textos autorais de1944,1945 e1960; excertos e versões identificados",
  "rationale": "Defende democracia limitada, proteção contra coerção, propriedade produtiva dispersa e preços, com contato voluntário entre povos e separação espiritual e temporal.",
  "caveats": "Normas selecionadas, não toda a carreira ou prática comprovada. A edição2007 reproduz capítuloVIII1944; a seleção Kropf tem data de reprodução desconhecida. Preserva serviços públicos, regulação e desigualdade de oportunidades; preços imperfeitos não são apresentados como conhecimento completo. Crítica ao imperialismo não equivale a isolamento ou recusa de toda assistência externa. Separação religiosa não implica ateísmo. Demais eixos sem estimativa.",
  "sources": [
    {
      "title": "Why I am Not a Conservative — Friedrich Hayek, 1960",
      "url": "https://press.uchicago.edu/books/excerpt/2011/hayek_constitution.html",
      "note": "Posfácio original de 1960 reproduzido na edição definitiva de 2011, pp. 517–533; texto autoral completo."
    },
    {
      "title": "The Use of Knowledge in Society — Friedrich Hayek, 1945",
      "url": "https://www.laits.utexas.edu/~mbs31415/HayekUseOfKnowledgeInSociety.pdf",
      "note": "Reprodução universitária de American Economic Review 35(4), setembro de 1945, pp. 519–530; leitura do texto extraído, sem alegar inspeção visual."
    },
    {
      "title": "Palestra Nobel: The Pretence of Knowledge",
      "url": "https://www.nobelprize.org/prizes/economic-sciences/1974/hayek/lecture/",
      "note": "Crítica à pretensão de planejar sistemas complexos. Fonte anterior preservada para continuidade; não gera os novos valores sem alegação localizada nesta recodificação."
    },
    {
      "title": "Friedrich Hayek, Stanford Encyclopedia of Philosophy",
      "url": "https://plato.stanford.edu/entries/friedrich-hayek/",
      "note": "Síntese acadêmica da democracia constitucional, ordem espontânea e economia. Fonte anterior preservada para continuidade; não gera os novos valores sem alegação localizada nesta recodificação."
    },
    {
      "title": "The Road to Serfdom — capítuloVIII, excerto da edição Caldwell2007",
      "url": "https://assets-us-01.kc-usercontent.com/c7bb3f89-eb78-007e-971a-d5864cf7a236/cae9286a-de3d-40a3-8a08-b623e6ace439/Hayek%2C%20The%20Road%20to%20Serfdom%20excerpt.pdf",
      "note": "Cinco páginas da edição definitiva Chicago/Routledge2007, organizada por Bruce Caldwell; colofão indica original1944. Lidos metadados1–45 e corpo autoral selecionado49–95/111–130, não capítuloVIII inteiro. Nota editorial108–109 excluída."
    },
    {
      "title": "The Road to Serfdom — seleção de capítulos, reprodução Kropf",
      "url": "https://www.kropfpolisci.com/democracy.capitalism.hayek.pdf",
      "note": "Seleção de29páginas atribuída à edição Chicago1944; data da reprodução desconhecida. Leitura textual selecionada525–700 e705–839, não livro inteiro; usada para preservar contrapontos sobre serviços públicos, regulação e concorrência."
    }
  ],
  "coding": [
    {
      "axis": "rep",
      "position": "moderate-first",
      "confidence": "high",
      "claims": [
        {
          "sourceTitle": "Why I am Not a Conservative — Friedrich Hayek, 1960",
          "locator": "§3,123–126",
          "statement": "Prefere democracia como método de mudança pacífica e educação política e rejeita poder ilimitado da maioria ou de elites.",
          "basis": "norm",
          "publishedDate": "1960",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "Preferência geral explícita pela autoridade democrática limitada sustenta60. Não é compromisso de soberania majoritária sem limites, que o autor rejeita.",
      "uncertainty": "Maioria é meio, não fim. Não audita sufrágio nem atuação política posterior.",
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "pod",
      "position": "moderate-second",
      "confidence": "high",
      "claims": [
        {
          "sourceTitle": "Why I am Not a Conservative — Friedrich Hayek, 1960",
          "locator": "§3,111–118/120–122",
          "statement": "Rejeita poder arbitrário e imposição coerciva de convicções morais ou religiosas em condutas que não interferem na esfera protegida de terceiros.",
          "basis": "norm",
          "publishedDate": "1960",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "Regra geral da coerção em uma ordem tolerante sustenta liberdade40, além de uma reforma penal isolada.",
      "uncertainty": "Admite poder protetivo e regras gerais; não abole Estado. A declaração não prova conduta em cada contexto de sua carreira.",
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "eco",
      "position": "moderate-second",
      "confidence": "high",
      "claims": [
        {
          "sourceTitle": "The Road to Serfdom — capítuloVIII, excerto da edição Caldwell2007",
          "locator": "Cap.VIII selecionado49–63/86–95/111–130",
          "statement": "Defende meios produtivos divididos entre proprietários independentes e rejeita sua transferência integral ao Estado ou a uma única autoridade comunal.",
          "basis": "norm",
          "publishedDate": "1944; reprodução da edição definitiva2007",
          "accessedDate": "2026-10-08"
        },
        {
          "sourceTitle": "The Road to Serfdom — seleção de capítulos, reprodução Kropf",
          "locator": "Cap.III selecionado553–630,especialmente588–626",
          "statement": "Permite serviços sociais, instituições não adequadamente fornecidas pela iniciativa privada e ação pública para bens coletivos e danos externos, preservando a concorrência onde funciona.",
          "basis": "norm",
          "publishedDate": "1944; data da reprodução desconhecida",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "A prescrição trata da propriedade produtiva geral, não apenas liberdade de preços ou existência de empresas. Direção privada40 é moderada por preservar ação estatal, serviços e limites legais documentados no contraponto, sem privatização universal.",
      "uncertainty": "Reconhece desigualdade de oportunidades49–63. A reprodução de capítuloIII permite serviços públicos e regulação de danos; não significa que todo ativo deva ser privado nem valida dados históricos do ensaio.",
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "con",
      "position": "strong-second",
      "confidence": "high",
      "claims": [
        {
          "sourceTitle": "The Use of Knowledge in Society — Friedrich Hayek, 1945",
          "locator": "§§II,V–VII:68–101/228–360/375–390/433–468",
          "statement": "Prescreve decisões descentralizadas e preços como forma geral de coordenar conhecimento disperso e recursos, em vez de direção central de toda a economia.",
          "basis": "norm",
          "publishedDate": "1945-09",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "Concorrência e informação pelos preços são constitutivas da solução proposta para o conjunto da alocação; orientação de mercado forte20.",
      "uncertainty": "Reconhece imperfeição dos ajustes330–344 e planejamento individual; não infere propriedade a partir de preços. A legislação geral e serviços públicos permanecem permitidos no texto1944.",
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "int",
      "position": "moderate-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Why I am Not a Conservative — Friedrich Hayek, 1960",
          "locator": "§4,138–144,especialmente143",
          "statement": "Prefere contato voluntário entre povos a impor-lhes governo em uma missão civilizadora e critica a combinação de nacionalismo e imperialismo.",
          "basis": "norm",
          "publishedDate": "1960",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "A regra trata da autoridade de uma sociedade sobre outras e rejeita a imposição política externa, sustentando não intervenção moderada60 no âmbito da dominação imperial.",
      "uncertainty": "Não é isolamento ou recusa de toda cooperação; a fonte não especifica cada hipótese de assistência militar ou proteção internacional. Âncora moderada, não não intervenção absoluta.",
      "reviewedOn": "2026-10-08"
    },
    {
      "axis": "rel",
      "position": "moderate-first",
      "confidence": "high",
      "claims": [
        {
          "sourceTitle": "Why I am Not a Conservative — Friedrich Hayek, 1960",
          "locator": "§§3/5,118/147–149",
          "statement": "Separa esferas espiritual e temporal e nega autoridade para impor crenças religiosas aos outros, preservando a fé individual.",
          "basis": "norm",
          "publishedDate": "1960",
          "accessedDate": "2026-10-08"
        }
      ],
      "rationale": "A separação normativa expressa da autoridade temporal e espiritual, combinada à exclusão de coerção religiosa na ordem política, sustenta secularismo60.",
      "uncertainty": "Não é ateísmo: condena antirreligião militante. Não se presumem mecanismos de financiamento religioso não descritos.",
      "reviewedOn": "2026-10-08"
    }
  ]
};
export function reconcileRanking675HistoricalFigure05(entries:ReferenceEntry[]):ReferenceEntry[]{return entries.map(existing=>{
 if(existing.id!==ranking675HistoricalFigure05OriginalRecord.id||JSON.stringify(existing)!==JSON.stringify(ranking675HistoricalFigure05OriginalRecord))return existing;
 const p=ranking675HistoricalFigure05Proposal;const next:ReferenceEntry={...existing,period:p.period,rationale:p.rationale,caveats:p.caveats,sources:p.sources,vec:Object.fromEntries(AXIS_KEYS.map(k=>[k,50])) as Record<AxisKey,number>,evidence:{},axisEvidence:{},coding:{}};
 for(const input of p.coding){const c=codeReferenceAxis(input,next.sources);next.vec[input.axis]=c.value;next.evidence[input.axis]=c.evidence;next.axisEvidence![input.axis]=c.axisEvidence;next.coding![input.axis]=c.coding;}
 return next;
});}
