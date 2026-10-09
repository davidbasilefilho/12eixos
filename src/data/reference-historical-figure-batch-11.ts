import type {ReferenceEntry, ReferenceSource} from './references';
import {AXES} from '../lib/scoring';
import {codeReferenceAxis, type ReferenceAxisCoding} from '../lib/reference-coding';
interface Batch11Spec {recoverDormant:boolean;id:string;name:string;aliases:string[];period:string;rationale:string;caveats:string;sources:ReferenceSource[];claims:ReferenceAxisCoding[]}
export const historicalFigureBatch11Specs:Batch11Spec[] = [
  {
    "id": "calvin-coolidge",
    "name": "Calvin Coolidge",
    "aliases": [],
    "recoverDormant": false,
    "period": "Programas presidenciais3/12/1924 e4/3/1925",
    "rationale": "Defende federalismo, governo eleitoral, arbitragem, independência externa, propriedade privada, concorrência e tarifas protetoras.",
    "caveats": "1872-07-04–1933-01-05, metadados institucionais MillerCenter45/49 lidos. Não usa reputação de laissez-faire para gerar eixos. Mantém limites: domínio colonial e intervenção hemisférica reconhecidos43/57; apoio à força militar defensiva47; controle regulatório ferroviário1924,86–93. O próprio orador admite em91 que os princípios não foram plenamente praticados; declarações não comprovam implementação. Linguagem eugênica/racial88/92 e restrição imigratória84 não são omitidas, mas não geram vetor contemporâneo moral ou multicultural por estereótipo. Não presume sucesso econômico, universalidade de direitos ou toda carreira.",
    "sources": [
      {
        "title": "Coolidge — Inaugural Address, 1925",
        "url": "https://millercenter.org/the-presidency/presidential-speeches/march-4-1925-inaugural-address",
        "note": "Reprodução institucional UVA, fonte declarada National Archives29. Corpo35–96 integral efetivamente lido. Declaração adotada, não autoria exclusiva de redação ou práticas comprovadas."
      },
      {
        "title": "Coolidge — Second Annual Message, 1924",
        "url": "https://millercenter.org/the-presidency/presidential-speeches/december-3-1924-second-annual-message",
        "note": "Reprodução institucional, fonte National Archives30. Corpo36–93 e97–174 efetivamente lidos, não95–96 ou restante175–221. Normas e contrapontos econômicos/militares explicitamente lidos."
      },
      {
        "title": "Miller Center — Calvin Coolidge, identidade",
        "url": "https://millercenter.org/president/coolidge",
        "note": "Metadados institucionais43–49 efetivamente lidos confirmam1872-07-04–1933-01-05. Biografia não produz códigos."
      }
    ],
    "claims": [
      {
        "axis": "est",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Coolidge — Inaugural Address, 1925",
            "publishedDate": "1925-03-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo86: soberania dividida entre Nation and State",
            "statement": "Defende preservar soberania dividida entre governo nacional e Estados."
          }
        ],
        "rationale": "Prescreve divisão constitucional territorial como fundamento geral a proteger.",
        "uncertainty": "Também defende governo nacional e menor sectarismo92; não secessão ou autonomia absoluta.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Coolidge — Inaugural Address, 1925",
            "publishedDate": "1925-03-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo66–70/87–90: vontade popular, eleições e representação",
            "statement": "Defende eleições, representação da vontade popular e governo republicano representativo."
          }
        ],
        "rationale": "O programa articula fundamento e operação geral da autoridade eleitoral e parlamentar.",
        "uncertainty": "Disciplina partidária e maioria não comprovam participação igual de todos; práticas não verificadas.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Coolidge — Inaugural Address, 1925",
            "publishedDate": "1925-03-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo47–56: limitação de armas, conferências, arbitragem e corte",
            "statement": "Prefere arbitragem, razão e limitação negociada de armamentos a ameaças e guerra."
          }
        ],
        "rationale": "Norma geral de resolução de conflitos acompanhada de medidas abrangentes de contenção militar.",
        "uncertainty": "Mantém força militar moderna defensiva47 e celebra entrada anterior na guerra43; não pacifismo absoluto.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "int",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Coolidge — Inaugural Address, 1925",
            "publishedDate": "1925-03-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo57/64–65/95: não interferência e independência; contraponto43/57",
            "statement": "Prefere afastamento de controvérsias políticas externas e independência."
          }
        ],
        "rationale": "A contenção é formulada para relações com todas as nações, reconhecendo assistência e cooperação.",
        "uncertainty": "Reconhece intervenção em pequenos países hemisféricos57 e domínio colonial43; não posição pura nem validação da alegada ausência de império95.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "eco",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Coolidge — Inaugural Address, 1925",
            "publishedDate": "1925-03-04",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo71–72/77/82: propriedade e controle pelos indivíduos",
            "statement": "Defende titularidade e controle da propriedade nas mãos dos indivíduos em vez do governo."
          }
        ],
        "rationale": "A declaração geral sobre a propriedade nacional e seus direitos excede o caso de ferrovias/eletricidade71.",
        "uncertainty": "Serviços públicos e regulação não desaparecem; não propriedade privada exclusiva nem simples opinião biográfica.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "con",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Coolidge — Second Annual Message, 1924",
            "publishedDate": "1924-12-03",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo65–67: cada negócio, preços e leis econômicas; contraponto86–93",
            "statement": "Prefere formação de preços pelas relações econômicas a fixação legislativa e sustentação artificial de mercados e indústrias."
          }
        ],
        "rationale": "Embora situado na recuperação agrícola, formula a regra para cada negócio, mercados e indústrias em geral.",
        "uncertainty": "Admite administração monetária, crédito e distribuição67, regulação tarifária ferroviária86 e pressão governamental93; direção moderada, não ausência estatal.",
        "reviewedOn": "2026-10-08"
      },
      {
        "axis": "com",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Coolidge — Second Annual Message, 1924",
            "publishedDate": "1924-12-03",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "Corpo129–132: tarifa protetora e mercado nacional; paralelo inaugural84",
            "statement": "Defende tarifa protetora para reservar o mercado nacional aos produtos dos trabalhadores nacionais."
          }
        ],
        "rationale": "Programa tarifário de abrangência nacional, não proteção de uma obra ou produto isolado.",
        "uncertainty": "Não recusa toda troca internacional; deseja exportações49 e relações econômicas externas159–162; alegado efeito salarial não verificado.",
        "reviewedOn": "2026-10-08"
      }
    ]
  }
];

/** Pending independent judgment; no dormant original exists. */
export const historicalFigureBatch11:ReferenceEntry[] = historicalFigureBatch11Specs.map(spec=>{
 const sources=structuredClone(spec.sources);
 const entry:ReferenceEntry={id:spec.id,name:spec.name,aliases:spec.aliases,kind:'person',category:'historical-figure',period:spec.period,rationale:spec.rationale,caveats:spec.caveats,sources,
 vec:Object.fromEntries(AXES.map(({key})=>[key,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{}};
 for(const input of spec.claims){const result=codeReferenceAxis(input,sources);entry.vec[input.axis]=result.value;entry.evidence[input.axis]=result.evidence;entry.axisEvidence![input.axis]=result.axisEvidence;entry.coding![input.axis]=result.coding;}
 return entry;
});
