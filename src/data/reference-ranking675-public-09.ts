import type {ReferenceEntry,ReferenceSource} from './references';
import {AXES} from '../lib/scoring';
import {codeReferenceAxis,type ReferenceAxisCoding} from '../lib/reference-coding';
const AXIS_KEYS=AXES.map(axis=>axis.key);
export const ranking675Public09Before: ReferenceEntry[] = [
  {
    "id": "peter-obi",
    "name": "Peter Obi",
    "aliases": [
      "Peter Gregory Onwubuasi Obi",
      "Peter Gregory Obi"
    ],
    "kind": "person",
    "category": "public-figure",
    "period": "Programa eleitoral2023 endossado pessoalmente; atividade publicada21/08/2026, sem atualizar automaticamente posições",
    "sources": [
      {
        "title": "Obi/Baba-Ahmed — Our Pact with Nigerians, campanha2023, PDF72p",
        "url": "https://elections.civichive.org/wp-content/uploads/2022/12/Peter-Obi-2023-Presidential-Manifesto.pdf",
        "note": "Programa primário arquivado pelo CivicHive;72p físicas, não resumo secundário. Autoria e compromisso pessoal de PeterObi nas p5/7; locais codificados efetivamente lidos. Nome do arquivo fonte03.12.22; não certifica dia editorial interno."
      },
      {
        "title": "Peter Obi — discurso de campanha publicado em sua conta,21/08/2026",
        "url": "https://www.linkedin.com/posts/peterobigregory_my-address-to-mark-the-commencement-of-the-activity-7496525769259544576-Tbdw",
        "note": "Autor nominal e data explícita no corpo20; post e complementos do mesmo autor29–46 realmente lidos para atividade datada. Comentários de terceiros não usados. Conta nominal pública também atribuída a Obi em link efetivamente seguido do CFR27/04/2026; não certifica declarações ou estatísticas de terceiros."
      },
      {
        "title": "CFR — atribuição externa da conta pública de Peter Obi,27/04/2026",
        "url": "https://www.cfr.org/articles/the-political-education-of-peter-obi",
        "note": "Fonte secundária usada só na verificação de identidade/conta: artigo datado, ligação16 efetivamente seguida ao mesmo perfil peterobigregory. Opiniões e alegações não usadas nos eixos."
      },
      {
        "title": "Peter Obi — publicação da conta vinculada pelo CFR",
        "url": "https://www.linkedin.com/posts/peterobigregory_nigeria-is-bleeding-from-within-it-is-deeply-share-7451264087566594048-dQBO/",
        "note": "Ligação do CFR realmente seguida, autoria nominal17 e corpo20–23 lidos, mesma conta da publicação datada21/08/2026. Data relativa5mo não convertida em dia exato; conteúdo não codificado."
      }
    ],
    "caveats": "Programa conjunto explicitamente endossado; posição da candidatura, não prática nem crença privada. Identidade atual via publicação nominal datada; sem autenticação externa da conta. Eixos não codificados desconhecidos; revisão documental independente delimitada aceita.",
    "rationale": "Propõe autonomia dos estados, separação de poderes e responsabilização do Executivo, com IA, robótica e biotecnologia.",
    "vec": {
      "est": 60,
      "rep": 60,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 60
    },
    "evidence": {
      "est": "medium",
      "rep": "medium",
      "tec": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Obi/Baba-Ahmed — Our Pact with Nigerians, campanha2023, PDF72p"
        ],
        "rationale": "Descentralização territorial e fiscal. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Consenso necessário; não defende independência dos estados."
      },
      "rep": {
        "sourceTitles": [
          "Obi/Baba-Ahmed — Our Pact with Nigerians, campanha2023, PDF72p"
        ],
        "rationale": "Limites democráticos ao executivo. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Programa conjunto explicitamente endossado, sem prática comprovada."
      },
      "tec": {
        "sourceTitles": [
          "Obi/Baba-Ahmed — Our Pact with Nigerians, campanha2023, PDF72p"
        ],
        "rationale": "Adoção tecnológica multissetorial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Transição climática condiciona incentivos; metas não são resultados."
      }
    },
    "coding": {
      "est": {
        "axis": "est",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Obi/Baba-Ahmed — Our Pact with Nigerians, campanha2023, PDF72p",
            "locator": "PDFp26/30; linhas556–565/710–718",
            "statement": "Propõe transferir competências e arrecadação aos estados.",
            "basis": "declaration",
            "publishedDate": "Campanha2023; arquivo03.12.22, dia editorial não certificado",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Descentralização territorial e fiscal.",
        "uncertainty": "Consenso necessário; não defende independência dos estados.",
        "relatedQuestionIds": [
          "estrutura_01",
          "estrutura_03"
        ],
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
            "sourceTitle": "Obi/Baba-Ahmed — Our Pact with Nigerians, campanha2023, PDF72p",
            "locator": "PDFp5/27–28;88–98/605–618/632–636",
            "statement": "Defende separação de poderes, controle parlamentar e responsabilização executiva.",
            "basis": "declaration",
            "publishedDate": "Campanha2023; arquivo03.12.22, dia editorial não certificado",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Limites democráticos ao executivo.",
        "uncertainty": "Programa conjunto explicitamente endossado, sem prática comprovada.",
        "relatedQuestionIds": [
          "representacao_05",
          "representacao_19"
        ],
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "tec": {
        "axis": "tec",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Obi/Baba-Ahmed — Our Pact with Nigerians, campanha2023, PDF72p",
            "locator": "PDFp33–34;769–790/803–817",
            "statement": "Promove IA, robótica, biotecnologia e capacitação digital.",
            "basis": "declaration",
            "publishedDate": "Campanha2023; arquivo03.12.22, dia editorial não certificado",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Adoção tecnológica multissetorial.",
        "uncertainty": "Transição climática condiciona incentivos; metas não são resultados.",
        "relatedQuestionIds": [
          "tecnologia_01",
          "tecnologia_02"
        ],
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
export const ranking675Public09NewSources: ReferenceSource[] = [
  {
    "title": "Peter Obi — programa2023 pessoalmente endossado, passagens institucionais e internacionais",
    "url": "https://elections.civichive.org/wp-content/uploads/2022/12/Peter-Obi-2023-Presidential-Manifesto.pdf",
    "note": "PDF primário da candidatura arquivado por CivicHive, não fonte oficial recuperada ou autenticada byte a byte. Compromisso nominal99–104/177–183 efetivamente lido. Edição de campanha2023; título técnico03.12.22 não prova dia editorial. Somente passagens selecionadas lidas, não todas72páginas. Programa conjunto pessoalmente adotado, não autoria exclusiva, execução ou renovação das normas pela atividade2026."
  }
];
export const ranking675Public09Coding: ReferenceAxisCoding[] = [
  {
    "axis": "est",
    "position": "moderate-first",
    "confidence": "medium",
    "claims": [
      {
        "sourceTitle": "Peter Obi — programa2023 pessoalmente endossado, passagens institucionais e internacionais",
        "locator": "Programa2023,88–98/556–565.",
        "statement": "Transfere matérias da competência legislativa federal exclusiva para competência concorrente da federação.",
        "basis": "declaration",
        "publishedDate": "Programa eleitoral2023; dia editorial interno não certificado",
        "accessedDate": "2026-10-08"
      }
    ],
    "rationale": "Devolução legislativa, não apenas administração territorial ou recursos.",
    "uncertainty": "Transferência exige consenso563–565; não soberania independente dos estados, veto geral nacional abolido ou execução.",
    "relatedQuestionIds": [
      "estrutura_01",
      "estrutura_03"
    ],
    "reviewedOn": "2026-10-08"
  },
  {
    "axis": "rep",
    "position": "moderate-first",
    "confidence": "medium",
    "claims": [
      {
        "sourceTitle": "Peter Obi — programa2023 pessoalmente endossado, passagens institucionais e internacionais",
        "locator": "Programa2023,88–98/605–618/632–636.",
        "statement": "Entrincheira separação de poderes, responsabilização presidencial, sufrágio na diáspora e controle parlamentar dos objetivos orçamentários.",
        "basis": "declaration",
        "publishedDate": "Programa eleitoral2023; dia editorial interno não certificado",
        "accessedDate": "2026-10-08"
      }
    ],
    "rationale": "Autoridade eletiva e fiscalização legislativa gerais limitam o Executivo.",
    "uncertainty": "Conselho investigativo presidencial605–610 e orçamento dirigido pelo Presidente632–636 coexistem com controle parlamentar. Reforma eleitoral não prova qualquer eleição livre realizada.",
    "relatedQuestionIds": [
      "representacao_05",
      "representacao_19"
    ],
    "reviewedOn": "2026-10-08"
  },
  {
    "axis": "imi",
    "position": "moderate-second",
    "confidence": "medium",
    "claims": [
      {
        "sourceTitle": "Peter Obi — programa2023 pessoalmente endossado, passagens institucionais e internacionais",
        "locator": "Programa2023,132–133/597–601; limites361–368.",
        "statement": "Integra leis consuetudinárias, normas e governantes tradicionais ao direito e governança formais.",
        "basis": "declaration",
        "publishedDate": "Programa eleitoral2023; dia editorial interno não certificado",
        "accessedDate": "2026-10-08"
      }
    ],
    "rationale": "Reconhecimento institucional de costumes culturais nacionais além de simples igualdade de nomeações.",
    "uncertainty": "Compatibilidade constitucional598 e unidade, patriotismo e integração361–368 limitam autonomia cultural. Não todo costume aceito, pluralidade religiosa convertida em arquitetura religiosa ou fragmentação nacional.",
    "relatedQuestionIds": [
      "imigracao_04"
    ],
    "reviewedOn": "2026-10-08"
  },
  {
    "axis": "dip",
    "position": "moderate-first",
    "confidence": "medium",
    "claims": [
      {
        "sourceTitle": "Peter Obi — programa2023 pessoalmente endossado, passagens institucionais e internacionais",
        "locator": "Programa2023,301–305/331–342/1338–1353.",
        "statement": "Amplia forças, equipamento e capacidade militar nacional, vinculando poder militar a segurança e influência internacional.",
        "basis": "declaration",
        "publishedDate": "Programa eleitoral2023; dia editorial interno não certificado",
        "accessedDate": "2026-10-08"
      }
    ],
    "rationale": "Prescrição geral de fortalecimento militar, com cooperação e diplomacia como contrapontos.",
    "uncertainty": "Foco militar em ameaças externas331–333, fiscalização civil339–342, diálogo1342–1345 e poder cultural1346–1348 persistem. Não guerra de conquista, gasto observado ou superioridade militar factual.",
    "relatedQuestionIds": [
      "diplomacia_01"
    ],
    "reviewedOn": "2026-10-08"
  },
  {
    "axis": "int",
    "position": "moderate-second",
    "confidence": "medium",
    "claims": [
      {
        "sourceTitle": "Peter Obi — programa2023 pessoalmente endossado, passagens institucionais e internacionais",
        "locator": "Programa2023,1338–1345/1352–1364.",
        "statement": "Inclui capacidade militar em atividades de manutenção de paz sub-regionais, regionais e globais.",
        "basis": "declaration",
        "publishedDate": "Programa eleitoral2023; dia editorial interno não certificado",
        "accessedDate": "2026-10-08"
      }
    ],
    "rationale": "Participação armada externa declarada sob a função de manutenção de paz.",
    "uncertainty": "Não inferir operação concreta, licença para guerra unilateral ou autorização da ONU ausente no texto. Dialogar1342–1345, região pacífica/democrática1352–1353 e compromisso global com paz1362–1364 limitam a prescrição.",
    "relatedQuestionIds": [
      "intervencao_05"
    ],
    "reviewedOn": "2026-10-08"
  },
  {
    "axis": "com",
    "position": "moderate-second",
    "confidence": "medium",
    "claims": [
      {
        "sourceTitle": "Peter Obi — programa2023 pessoalmente endossado, passagens institucionais e internacionais",
        "locator": "Programa2023,456–459/508–547/1354–1364.",
        "statement": "Remove impedimentos ao livre comércio, facilita circulação de bens e adere a acordos continentais.",
        "basis": "declaration",
        "publishedDate": "Programa eleitoral2023; dia editorial interno não certificado",
        "accessedDate": "2026-10-08"
      }
    ],
    "rationale": "Abertura geral e facilitação transfronteiriça, com indústria nacional apoiada.",
    "uncertainty": "Incentivos exportadores502–518 e expansão do conteúdo nacional a todos os setores833–837 contrapõem abertura irrestrita. Medidas de fronteira325–328/1354–1357 mantêm segurança; não redução inventada de toda tarifa.",
    "relatedQuestionIds": [
      "comercio_01",
      "comercio_03"
    ],
    "reviewedOn": "2026-10-08"
  },
  {
    "axis": "tec",
    "position": "moderate-first",
    "confidence": "medium",
    "claims": [
      {
        "sourceTitle": "Peter Obi — programa2023 pessoalmente endossado, passagens institucionais e internacionais",
        "locator": "Programa2023,602–604/769–814.",
        "statement": "Aplica IA, robótica, biotecnologia e digitalização à indústria, transportes e administração nacionais.",
        "basis": "declaration",
        "publishedDate": "Programa eleitoral2023; dia editorial interno não certificado",
        "accessedDate": "2026-10-08"
      }
    ],
    "rationale": "Adoção tecnológica multissetorial orienta competitividade e serviços públicos.",
    "uncertainty": "Transporte inclui segurança e impacto ambiental783–786; preservação ambiental809–810 condiciona produção industrial e petróleo. Não inovação irrestrita, efetividade das tecnologias ou edição de embriões inferida.",
    "relatedQuestionIds": [
      "tecnologia_01",
      "tecnologia_03",
      "tecnologia_08"
    ],
    "reviewedOn": "2026-10-08"
  }
];
export const ranking675Public09Proposed:ReferenceEntry[]=ranking675Public09Before.map(before=>{
 const after=structuredClone(before);after.sources.push(...structuredClone(ranking675Public09NewSources));
 after.period='Programa eleitoral2023 endossado pessoalmente; atividade21/08/2026 apenas identidade, sem atualizar a plataforma';
 after.rationale='Propõe autonomia legislativa, fiscalização democrática, costumes reconhecidos, tecnologia e comércio, com forças ampliadas e manutenção de paz.';
 after.caveats='Programa conjunto2023 pessoalmente adotado, não autoria exclusiva ou execução. Consenso federativo, limites constitucionais aos costumes, segurança de fronteiras, conteúdo nacional e controle ambiental permanecem. Manutenção de paz não autoriza guerra unilateral nem prova mandato da ONU. Fontes e objeto anterior íntegros preservados; saúde financiada não prova orientação geral de propriedade pública, e planos estratégicos coexistem com liberalização de mercados. Identidade2026 não renova normas anteriores.';
 after.vec=Object.fromEntries(AXIS_KEYS.map(key=>[key,50])) as ReferenceEntry['vec'];after.evidence={};after.axisEvidence={};after.coding={};
 for(const input of ranking675Public09Coding){const coded=codeReferenceAxis(input,after.sources);after.vec[input.axis]=coded.value;after.evidence[input.axis]=coded.evidence;after.axisEvidence![input.axis]=coded.axisEvidence;after.coding![input.axis]=coded.coding;}
 return after;
});
export function reconcileRanking675Public09(entry:ReferenceEntry):ReferenceEntry{
 const index=ranking675Public09Before.findIndex(x=>x.id===entry.id);if(index<0)return entry;
 const post=ranking675Public09Proposed[index];if(JSON.stringify(entry)===JSON.stringify(post))return entry;
 if(JSON.stringify(entry)!==JSON.stringify(ranking675Public09Before[index]))throw new Error('Ranking public09 whole prior object changed: '+entry.id);
 return structuredClone(post);
}
