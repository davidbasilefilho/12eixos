import type {ReferenceEntry,ReferenceSource} from './references';
import {AXES} from '../lib/scoring';
import {codeReferenceAxis,type ReferenceAxisCoding} from '../lib/reference-coding';
const AXIS_KEYS=AXES.map(axis=>axis.key);
export const ranking675Public08Before: ReferenceEntry[] = [
  {
    "id": "keir-starmer",
    "name": "Keir Starmer",
    "kind": "person",
    "category": "public-figure",
    "period": "2026-06-08",
    "sources": [
      {
        "title": "Keir Starmer — London Tech Week 2026",
        "url": "https://www.gov.uk/government/speeches/prime-ministers-speech-at-london-tech-week-2026",
        "note": "Texto autoral efetivamente aberto em 7/10/2026; somente os trechos localizados abaixo geram evidência. Declaração, não auditoria de execução."
      },
      {
        "title": "Keir Starmer — identidade pública em 2026",
        "url": "https://www.gov.uk/government/speeches/keir-starmers-final-speech-as-prime-minister-20-july-2026",
        "note": "Transcrição oficial de 20/7/2026 registra discurso de saída; não rotular primeiro-ministro atual. Página efetivamente aberta em 7/10/2026; não gera scores."
      }
    ],
    "caveats": "Declarações delimitadas, sem transferir posições do governo, partido ou de terceiros. Demais eixos desconhecidos; trechos autorais revistos independentemente, sem recertificar fontes arquivadas.",
    "rationale": "Promove IA com proteção contra danos e compras públicas de chips e infraestrutura para orientar inovação industrial.",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 60,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 60
    },
    "evidence": {
      "tec": "medium",
      "con": "medium"
    },
    "axisEvidence": {
      "tec": {
        "sourceTitles": [
          "Keir Starmer — London Tech Week 2026"
        ],
        "rationale": "Adoção tecnológica concreta com salvaguardas sustenta direção tecnológica. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Trechos Political content redacted não utilizados nem reconstruídos; não valida diagnósticos ou impactos alegados."
      },
      "con": {
        "sourceTitles": [
          "Keir Starmer — London Tech Week 2026"
        ],
        "rationale": "Compras e infraestrutura direcionadas constituem coordenação pública parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Empresas privadas e simplificação de regulação permanecem; não é planejamento central integral."
      }
    },
    "coding": {
      "tec": {
        "axis": "tec",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Keir Starmer — London Tech Week 2026",
            "publishedDate": "2026-06-08",
            "accessedDate": "2026-10-07",
            "locator": "Britain has three options; third path; AI tutors; AI jobs tool",
            "statement": "Defende adoção de IA com proteção contra danos e ferramentas de educação e emprego.",
            "basis": "declaration"
          }
        ],
        "rationale": "Adoção tecnológica concreta com salvaguardas sustenta direção tecnológica.",
        "uncertainty": "Trechos Political content redacted não utilizados nem reconstruídos; não valida diagnósticos ou impactos alegados.",
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
            "sourceTitle": "Keir Starmer — London Tech Week 2026",
            "publishedDate": "2026-06-08",
            "accessedDate": "2026-10-07",
            "locator": "Government will use the power of public procurement; sovereign compute capability; active industrial strategy",
            "statement": "Defende compras públicas de chips e infraestrutura computacional para orientar inovação industrial.",
            "basis": "declaration"
          }
        ],
        "rationale": "Compras e infraestrutura direcionadas constituem coordenação pública parcial.",
        "uncertainty": "Empresas privadas e simplificação de regulação permanecem; não é planejamento central integral.",
        "reviewedOn": "2026-10-07",
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
export const ranking675Public08NewSources: ReferenceSource[] = [
  {
    "title": "Keir Starmer — manifesto2024 com prefácio próprio, edição acessível oficial",
    "url": "https://labour.org.uk/wp-content/uploads/2024/06/Change-Labour-manifesto-2024-screen-reader.pdf",
    "note": "Edição oficial2024 em inglês; prefácio próprio0–196 apresenta e adota o programa143, com assinatura nominal196. Corpo selecionado efetivamente lido, não todas136páginas ou5309linhas. Dia editorial não informado no PDF, sem inferência do caminho. Propostas nacionais coexistem com competências devolvidas e provisões específicas para Inglaterra; não execução ou renovação em2026. Depoimentos de eleitores e empresários não codificados."
  }
];
export const ranking675Public08Coding: ReferenceAxisCoding[] = [
  {
    "axis": "rep",
    "position": "moderate-first",
    "confidence": "medium",
    "claims": [
      {
        "sourceTitle": "Keir Starmer — manifesto2024 com prefácio próprio, edição acessível oficial",
        "locator": "Manifesto2024,4295–4368; adoção143/196.",
        "statement": "Reforma câmara não eleita, amplia sufrágio a16–17anos e facilita registro e participação eleitoral.",
        "basis": "declaration",
        "publishedDate": "Manifesto nacional2024; edição acessível sem dia editorial indicado no PDF",
        "accessedDate": "2026-10-08"
      }
    ],
    "rationale": "Autoridade parlamentar e participação geral dos eleitores sustentam direção democrática.",
    "uncertainty": "Segundo órgão regional apenas sujeito a consulta4332–4341, não já eleito; reforma preserva pares não hereditários e nomeações4319–4331. Financiamento e segundos empregos são regulados4258–4294/4366–4368.",
    "relatedQuestionIds": [
      "representacao_15",
      "representacao_16"
    ],
    "reviewedOn": "2026-10-08"
  },
  {
    "axis": "dip",
    "position": "moderate-first",
    "confidence": "medium",
    "claims": [
      {
        "sourceTitle": "Keir Starmer — manifesto2024 com prefácio próprio, edição acessível oficial",
        "locator": "Manifesto2024,332–381/4773–4863.",
        "statement": "Mantém dissuasão nuclear e NATO, planeja expansão do gasto militar e fortalece capacidade nacional de defesa.",
        "basis": "declaration",
        "publishedDate": "Manifesto nacional2024; edição acessível sem dia editorial indicado no PDF",
        "accessedDate": "2026-10-08"
      }
    ],
    "rationale": "Prescrição geral de capacidade militar ampliada, limitada por cooperação e diplomacia.",
    "uncertainty": "Caminho para2,5% é promessa de revisão358–359, não gasto observado. Direitos e direito internacional4755–4772, exportação responsável4813–4817 e diplomacia5004–5021 contrapõem militarismo irrestrito. Ajuda à Ucrânia não se torna automaticamente intervenção direta.",
    "relatedQuestionIds": [
      "diplomacia_01",
      "diplomacia_11"
    ],
    "reviewedOn": "2026-10-08"
  },
  {
    "axis": "eco",
    "position": "moderate-first",
    "confidence": "medium",
    "claims": [
      {
        "sourceTitle": "Keir Starmer — manifesto2024 com prefácio próprio, edição acessível oficial",
        "locator": "Manifesto2024,1084–1107/1197–1205/1964–2006.",
        "statement": "Propõe ferrovias e empresa energética produtiva públicas, com coinvestimento, e duplicar o setor cooperativo e mutualista.",
        "basis": "declaration",
        "publishedDate": "Manifesto nacional2024; edição acessível sem dia editorial indicado no PDF",
        "accessedDate": "2026-10-08"
      }
    ],
    "rationale": "Expansão de propriedade pública produtiva e do setor cooperativo e mutualista em economia mista.",
    "uncertainty": "Não estatiza toda energia, rede elétrica ou operadores de acesso aberto1104–1107. Empresa energética coinveste com parceiros1971–2006; fundo econômico busca capital privado3:1,864–867. Não maioria pública da economia nem inferência a partir de financiamento de saúde. Abrangência dessas propostas multissetoriais ainda requer julgamento integral.",
    "relatedQuestionIds": [
      "economia_03",
      "economia_04",
      "economia_05"
    ],
    "reviewedOn": "2026-10-08"
  },
  {
    "axis": "com",
    "position": "moderate-second",
    "confidence": "medium",
    "claims": [
      {
        "sourceTitle": "Keir Starmer — manifesto2024 com prefácio próprio, edição acessível oficial",
        "locator": "Manifesto2024,4722–4734/4893–4961.",
        "statement": "Defende abertura comercial, retirada de barreiras e novos acordos de livre comércio com regras multilaterais.",
        "basis": "declaration",
        "publishedDate": "Manifesto nacional2024; edição acessível sem dia editorial indicado no PDF",
        "accessedDate": "2026-10-08"
      }
    ],
    "rationale": "Acesso internacional e abertura geral ao comércio sustentam direção globalista moderada.",
    "uncertainty": "Acordos são seletivos e alinhados à estratégia industrial4907–4919; padrões alimentares, tributação global4944–4949 e prioridade defensiva britânica4810–4817 persistem. Não ausência de qualquer barreira ou resultados de tratados.",
    "relatedQuestionIds": [
      "comercio_01",
      "comercio_03"
    ],
    "reviewedOn": "2026-10-08"
  },
  {
    "axis": "mor",
    "position": "moderate-first",
    "confidence": "medium",
    "claims": [
      {
        "sourceTitle": "Keir Starmer — manifesto2024 com prefácio próprio, edição acessível oficial",
        "locator": "Manifesto2024,3451–3462/3508–3538.",
        "statement": "Promove igualdade nos papéis de gênero, proteção LGBT e liberdade de explorar orientação sexual e identidade de gênero.",
        "basis": "declaration",
        "publishedDate": "Manifesto nacional2024; edição acessível sem dia editorial indicado no PDF",
        "accessedDate": "2026-10-08"
      }
    ],
    "rationale": "Reforma progressista entre trabalho, sexualidade e reconhecimento de identidade.",
    "uncertainty": "Reconhecimento trans mantém diagnóstico de especialista3530–3532, e espaços de um só sexo preservam exceções3534–3538. Não autodeterminação legal irrestrita, nova regra de aborto inferida ou igualdade executada.",
    "relatedQuestionIds": [
      "moral_03",
      "moral_07"
    ],
    "reviewedOn": "2026-10-08"
  },
  {
    "axis": "tec",
    "position": "moderate-first",
    "confidence": "medium",
    "claims": [
      {
        "sourceTitle": "Keir Starmer — manifesto2024 com prefácio próprio, edição acessível oficial",
        "locator": "Manifesto2024,1067–1077/1142–1201/1900–1945/3774–3830.",
        "statement": "Adota IA, infraestrutura de dados, medicina tecnológica, veículos elétricos e inovação energética industrial.",
        "basis": "declaration",
        "publishedDate": "Manifesto nacional2024; edição acessível sem dia editorial indicado no PDF",
        "accessedDate": "2026-10-08"
      }
    ],
    "rationale": "Adoção tecnológica multissetorial, com proteção de dados e limites a riscos e impactos ambientais.",
    "uncertainty": "Dados protegidos1160–1162, modelos mais potentes regulados1190–1196, novas licenças fósseis e fracking limitados1938–1945. Medicina aqui específica da Inglaterra3810–3811; não vantagens clínicas ou execução comprovadas, engenharia genética ou inovação irrestrita.",
    "relatedQuestionIds": [
      "tecnologia_01",
      "tecnologia_03",
      "tecnologia_08"
    ],
    "reviewedOn": "2026-10-08"
  }
];
export const ranking675Public08Proposed:ReferenceEntry[]=ranking675Public08Before.map(before=>{
 const after=structuredClone(before);after.sources.push(...structuredClone(ranking675Public08NewSources));
 after.period='Manifesto2024 com prefácio próprio; fontes2026 preservadas como declarações separadas e identidade, sem renovação integral';
 after.rationale='Propõe voto ampliado, igualdade de gênero, abertura comercial e inovação, com defesa militar e expansão pública em transportes e energia.';
 after.caveats='Programa coletivo2024 pessoalmente adotado, não autoria exclusiva ou execução. Competências devolvidas e medidas específicas inglesas diferem de políticas britânicas. Propriedade privada e coinvestimento, diplomacia e direito internacional, diagnóstico de gênero e proteção de dados limitam as propostas. Não é estatização majoritária. Fontes e objeto anterior íntegros arquivados; compras tecnológicas2026 isoladas não estabelecem planejamento econômico geral. Discurso de saída20/07/2026 permanece identidade, sem cargo atual inferido.';
 after.vec=Object.fromEntries(AXIS_KEYS.map(key=>[key,50])) as ReferenceEntry['vec'];after.evidence={};after.axisEvidence={};after.coding={};
 for(const input of ranking675Public08Coding){const coded=codeReferenceAxis(input,after.sources);after.vec[input.axis]=coded.value;after.evidence[input.axis]=coded.evidence;after.axisEvidence![input.axis]=coded.axisEvidence;after.coding![input.axis]=coded.coding;}
 return after;
});
export function reconcileRanking675Public08(entry:ReferenceEntry):ReferenceEntry{
 const index=ranking675Public08Before.findIndex(x=>x.id===entry.id);if(index<0)return entry;
 const post=ranking675Public08Proposed[index];if(JSON.stringify(entry)===JSON.stringify(post))return entry;
 if(JSON.stringify(entry)!==JSON.stringify(ranking675Public08Before[index]))throw new Error('Ranking public08 whole prior object changed: '+entry.id);
 return structuredClone(post);
}
