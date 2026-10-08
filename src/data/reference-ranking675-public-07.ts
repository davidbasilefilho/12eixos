import type {ReferenceEntry,ReferenceSource} from './references';
import {AXES} from '../lib/scoring';
import {codeReferenceAxis,type ReferenceAxisCoding} from '../lib/reference-coding';
const AXIS_KEYS=AXES.map(axis=>axis.key);
export const ranking675Public07Before: ReferenceEntry[] = [
  {
    "id": "jeremy-corbyn",
    "name": "Jeremy Corbyn",
    "kind": "person",
    "category": "public-figure",
    "period": "2022-01-10; assinatura individual; moção apresentada 6/1/2022",
    "sources": [
      {
        "title": "Energy prices — EDM 825, assinatura de Jeremy Corbyn",
        "url": "https://edm.parliament.uk/early-day-motion/59318/energy-prices",
        "note": "Declaração primária efetivamente aberta em 7/10/2026; somente autoria nominal ou assinatura individual codificada."
      },
      {
        "title": "Jeremy Corbyn — identidade contemporânea",
        "url": "https://members.parliament.uk/member/185/contact",
        "note": "Registro parlamentar contemporâneo do próprio membro; não assume filiação partidária antiga. Aberta em 7/10/2026; identidade sem inferência de eixo."
      },
      {
        "title": "Hansard — contribuição nominal de Jeremy Corbyn15/09/2026",
        "url": "https://hansard.parliament.uk/Commons/2026-09-15/debates/4eb35084-7104-4c1e-8d3f-c7a2a3a1e2df/WestminsterHall",
        "note": "Identidade/atividade2026 apenas. Cabeçalho8 e atribuição/contribuição própria338–340 efetivamente lidos completos. Apenas intervenção nominal datada, não1263linhas de todos os debates. Respostas de ministro e comentários de outros excluídos; não certifica resultados habitacionais ou todo programa político anterior."
      }
    ],
    "caveats": "Moção não é legislação executada nem nacionalização de toda a economia. Demais eixos desconhecidos. Revisão independente de conteúdo pendente. Identidade viva/atividade2026 delimitada por fonte adicional; data de publicação ou relato nominal não renova todas as posições anteriores nem certifica presença física, imagens ou cargo contínuo.",
    "rationale": "Endossa, em assinatura parlamentar individual, a proposta de propriedade pública do setor energético.",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 60,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "eco": "medium"
    },
    "axisEvidence": {
      "eco": {
        "sourceTitles": [
          "Energy prices — EDM 825, assinatura de Jeremy Corbyn"
        ],
        "rationale": "Propriedade pública explicitamente proposta sustenta direção pública parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Moção não é legislação executada nem nacionalização de toda a economia."
      }
    },
    "coding": {
      "eco": {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Energy prices — EDM 825, assinatura de Jeremy Corbyn",
            "publishedDate": "2022-01-10; assinatura individual; moção apresentada 6/1/2022",
            "accessedDate": "2026-10-07",
            "locator": "Texto final bring the energy sector into public hands; lista de assinaturas Corbyn, Jeremy Signed on 10 January 2022",
            "statement": "Adere nominalmente à proposta de propriedade pública do setor energético.",
            "basis": "declaration"
          }
        ],
        "rationale": "Propriedade pública explicitamente proposta sustenta direção pública parcial.",
        "uncertainty": "Moção não é legislação executada nem nacionalização de toda a economia.",
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
export const ranking675Public07NewSources: ReferenceSource[] = [
  {
    "title": "Jeremy Corbyn — manifesto coletivo2019 pessoalmente apresentado",
    "url": "https://www.labourinternational.net/wp-content/uploads/sites/70/2020/09/Real-Change-Labour-Manifesto-2019.pdf",
    "note": "Edição2019; prefácio nominal e assinatura212–213, com apresentação pessoal da plataforma em discurso21/11/2019. PDF hospedado por organização política; o original partidário não foi recuperado nem comparado byte a byte. Somente passagens selecionadas efetivamente lidas; não todo o documento de107páginas. Regras214–224 distinguem políticas britânicas das aplicáveis à Inglaterra nas matérias devolvidas. Propostas, não execução ou renovação em2026."
  },
  {
    "title": "Jeremy Corbyn — discurso de lançamento21/11/2019, reprodução nominal",
    "url": "https://labourlist.org/2019/11/labours-manifesto-launch-its-time-for-real-change/",
    "note": "Cabeçalho33 informa21/11/2019; texto próprio66–201 efetivamente lido. Reprodução nominal de lançamento e adoção pessoal do programa, sem inspeção de áudio, vídeo ou autenticação criptográfica. Comentários do editor e outros participantes excluídos, assim como estatísticas e acusações sobre resultados."
  }
];
export const ranking675Public07Coding: ReferenceAxisCoding[] = [
  {
    "axis": "rep",
    "position": "moderate-first",
    "confidence": "medium",
    "claims": [
      {
        "sourceTitle": "Jeremy Corbyn — manifesto coletivo2019 pessoalmente apresentado",
        "locator": "Manifesto2019,3754–3809; adoção própria58–213 e discurso66–201.",
        "statement": "Propõe Senado eleito, convenção constitucional com assembleia cidadã e ampliação geral do sufrágio.",
        "basis": "declaration",
        "publishedDate": "Manifesto2019; pessoalmente apresentado21/11/2019; dia editorial do PDF não indicado",
        "accessedDate": "2026-10-08"
      }
    ],
    "rationale": "Autoridade representativa eleita e participação popular na reforma constitucional.",
    "uncertainty": "Doações políticas, lobby e segundos empregos parlamentares são regulados3810–3840; não autoridade popular irrestrita. Aplicabilidade territorial214–224 preservada.",
    "relatedQuestionIds": [
      "representacao_15",
      "representacao_16"
    ],
    "reviewedOn": "2026-10-08"
  },
  {
    "axis": "pod",
    "position": "moderate-second",
    "confidence": "medium",
    "claims": [
      {
        "sourceTitle": "Jeremy Corbyn — manifesto coletivo2019 pessoalmente apresentado",
        "locator": "Manifesto2019,1936–1946/2419–2441/2911–2916/3817–3820.",
        "statement": "Subordina poderes de segurança a direitos e proporcionalidade, protege imprensa e liberdades civis.",
        "basis": "declaration",
        "publishedDate": "Manifesto2019; pessoalmente apresentado21/11/2019; dia editorial do PDF não indicado",
        "accessedDate": "2026-10-08"
      }
    ],
    "rationale": "Garantias gerais limitam poderes coercitivos e ampliam fiscalização pública.",
    "uncertainty": "1939–1940 propõe REVISAR circunstâncias dos mandados judiciais, não garantir mandado em toda operação. Aumenta polícia1852–1901, admite revista proporcional1904–1911, inteligência1931–1935 e dever digital de cuidado2366–2372; liberdade não irrestrita.",
    "relatedQuestionIds": [
      "poder_03"
    ],
    "reviewedOn": "2026-10-08"
  },
  {
    "axis": "eco",
    "position": "moderate-first",
    "confidence": "medium",
    "claims": [
      {
        "sourceTitle": "Jeremy Corbyn — manifesto coletivo2019 pessoalmente apresentado",
        "locator": "Manifesto2019,130–139/529–582/2226–2234/2342–2350.",
        "statement": "Amplia propriedade pública entre redes nacionais de energia, água, transporte, correio e banda larga.",
        "basis": "declaration",
        "publishedDate": "Manifesto2019; pessoalmente apresentado21/11/2019; dia editorial do PDF não indicado",
        "accessedDate": "2026-10-08"
      }
    ],
    "rationale": "Expansão pública multissetorial de ativos produtivos em economia mista.",
    "uncertainty": "Mantém empresas privadas, pequenas empresas e cooperativas381–384 e investimento privado624. Não propriedade pública majoritária de toda a economia; financiamento só é propriedade quando participação explícita579–582.",
    "relatedQuestionIds": [
      "economia_03",
      "economia_04",
      "economia_05"
    ],
    "reviewedOn": "2026-10-08"
  },
  {
    "axis": "con",
    "position": "moderate-first",
    "confidence": "medium",
    "claims": [
      {
        "sourceTitle": "Jeremy Corbyn — manifesto coletivo2019 pessoalmente apresentado",
        "locator": "Manifesto2019,287–301/335–404/417–444/641–685.",
        "statement": "Coordena recursos públicos e privados por conselho nacional, crédito orientado e regras gerais de investimento.",
        "basis": "declaration",
        "publishedDate": "Manifesto2019; pessoalmente apresentado21/11/2019; dia editorial do PDF não indicado",
        "accessedDate": "2026-10-08"
      }
    ],
    "rationale": "Planejamento multissetorial da transformação econômica e dos fluxos de investimento.",
    "uncertainty": "Finalidade de transição ambiental, não plano estatal de cada preço ou produção. Empresas e sindicatos participam345–346; pequenos negócios/cooperativas381–384 e atração de capital privado624 contrapõem alocação exclusivamente estatal.",
    "relatedQuestionIds": [
      "controle_01",
      "controle_11"
    ],
    "reviewedOn": "2026-10-08"
  },
  {
    "axis": "mor",
    "position": "moderate-first",
    "confidence": "medium",
    "claims": [
      {
        "sourceTitle": "Jeremy Corbyn — manifesto coletivo2019 pessoalmente apresentado",
        "locator": "Manifesto2019,2923–2984/3124–3166.",
        "statement": "Promove igualdade de gênero, autonomia de identidade trans e direitos gerais LGBT no trabalho, família e educação.",
        "basis": "declaration",
        "publishedDate": "Manifesto2019; pessoalmente apresentado21/11/2019; dia editorial do PDF não indicado",
        "accessedDate": "2026-10-08"
      }
    ],
    "rationale": "Reforma progressista de papéis de gênero e normas de sexualidade.",
    "uncertainty": "Preserva exceções de espaços de um só sexo2966–2969 e não rejeita toda tradição. Políticas declaratórias com limites territoriais214–224; não certifica igualdade realizada.",
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
        "sourceTitle": "Jeremy Corbyn — manifesto coletivo2019 pessoalmente apresentado",
        "locator": "Manifesto2019,473–493/610–672/1197–1207/2331–2372.",
        "statement": "Adota inovação industrial, tecnologias energéticas, IA médica e infraestrutura digital nacional.",
        "basis": "declaration",
        "publishedDate": "Manifesto2019; pessoalmente apresentado21/11/2019; dia editorial do PDF não indicado",
        "accessedDate": "2026-10-08"
      }
    ],
    "rationale": "Adoção tecnológica multissetorial sujeita a proteção de pessoas e ambiente.",
    "uncertainty": "Veda fracking495–496, exige proteção de dados médicos1200–1207 e cuidado digital2366–2372. Prioridade ambiental254–260 limita expansão; não inovação sem restrições, engenharia genética presumida ou crescimento a qualquer custo.",
    "relatedQuestionIds": [
      "tecnologia_01",
      "tecnologia_03",
      "tecnologia_08"
    ],
    "reviewedOn": "2026-10-08"
  }
];
export const ranking675Public07Proposed:ReferenceEntry[]=ranking675Public07Before.map(before=>{
 const after=structuredClone(before);after.sources.push(...structuredClone(ranking675Public07NewSources));
 after.period='Manifesto2019 pessoalmente apresentado21/11/2019; moção energética2022 preservada no arquivo; atividade2026 apenas identidade';
 after.rationale='Propõe participação popular, liberdades civis, igualdade de gênero e inovação com expansão pública e investimento coordenado.';
 after.caveats='Programa coletivo2019 pessoalmente adotado, não autoria exclusiva, execução ou renovação em2026. Políticas britânicas e inglesas diferem nas matérias devolvidas. Empresas privadas, policiamento, limites de gênero, proteção de dados e prioridades ambientais coexistem com as reformas. Defesa mantém NATO, Trident e gasto mínimo de2%; não se presume pacifismo geral. Fontes e objeto anterior íntegros preservados no arquivo; moção2022 não retrodata o programa2019.';
 after.vec=Object.fromEntries(AXIS_KEYS.map(key=>[key,50])) as ReferenceEntry['vec'];after.evidence={};after.axisEvidence={};after.coding={};
 for(const input of ranking675Public07Coding){const coded=codeReferenceAxis(input,after.sources);after.vec[input.axis]=coded.value;after.evidence[input.axis]=coded.evidence;after.axisEvidence![input.axis]=coded.axisEvidence;after.coding![input.axis]=coded.coding;}
 return after;
});
export function reconcileRanking675Public07(entry:ReferenceEntry):ReferenceEntry{
 const index=ranking675Public07Before.findIndex(x=>x.id===entry.id);if(index<0)return entry;
 const post=ranking675Public07Proposed[index];if(JSON.stringify(entry)===JSON.stringify(post))return entry;
 if(JSON.stringify(entry)!==JSON.stringify(ranking675Public07Before[index]))throw new Error('Ranking public07 whole prior object changed: '+entry.id);
 return structuredClone(post);
}
