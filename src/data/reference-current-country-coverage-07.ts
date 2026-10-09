import type { ReferenceEntry, ReferenceSource } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';
export const currentCountryCoverage07Before = {
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
    "rel": 50,
    "mor": 60,
    "tec": 50
  },
  "rationale": "Poderes territoriais, eleições competitivas, garantias processuais, provisão pública e igualdade jurídica são tratados por norma e prática separadas.",
  "caveats": "Não converter liberdade religiosa em separação: artigo 15 permite religião em instituições públicas e rel permanece desconhecido. PDF normativo termina em 2012; reconhecimento contemporâneo de cada cláusula precisa de consolidação adicional. Cultura, defesa, intervenção, planejamento, comércio e tecnologia ficam desconhecidos. Norma histórica de 2012; não certifica consolidação ou prática em 2024–2026 nem abertura migratória. Direitos sujeitos ao Bill of Rights. Revisão de escopo econômico em 7/10/2026: provisão/propriedade setorial permanece arquivada como pesquisa delimitada; orientação econômica nacional desconhecida, sem evidência de ranqueamento em eco.",
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
    }
  ],
  "evidence": {
    "est": "medium",
    "rep": "high",
    "pod": "medium",
    "mor": "medium",
    "imi": "medium"
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
        "Constituição da África do Sul — edição oficial com emendas até 2012",
        "Freedom in the World 2025 — África do Sul"
      ],
      "rationale": "Igualdade jurídica e autonomia reprodutiva sustentam reforma social parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não apaga violência e desigualdade; redação atual pós-2012 não foi certificada."
    },
    "imi": {
      "sourceTitles": [
        "Constituição da África do Sul — edição oficial com emendas até 2012"
      ],
      "rationale": "Preservação explícita de culturas e línguas sustenta multiculturalismo parcial. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Norma histórica de 2012; não certifica consolidação ou prática em 2024–2026 nem abertura migratória. Direitos sujeitos ao Bill of Rights."
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
      "claims": [
        {
          "sourceTitle": "Constituição da África do Sul — edição oficial com emendas até 2012",
          "locator": "Artigos 9 e 12(2)",
          "statement": "Proíbe discriminação por orientação sexual e protege decisões reprodutivas.",
          "basis": "norm",
          "publishedDate": "Edição com emendas até 2012",
          "accessedDate": "2026-10-07"
        },
        {
          "sourceTitle": "Freedom in the World 2025 — África do Sul",
          "locator": "Overview; F4, igualdade e violência de gênero",
          "statement": "Igualdade formal coexiste com desigualdade e violência contra mulheres.",
          "basis": "practice",
          "publishedDate": "Edição 2025; acontecimentos de 2024",
          "accessedDate": "2026-10-07"
        }
      ],
      "rationale": "Igualdade jurídica e autonomia reprodutiva sustentam reforma social parcial.",
      "uncertainty": "Não apaga violência e desigualdade; redação atual pós-2012 não foi certificada.",
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
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Constituição da África do Sul — edição oficial com emendas até 2012",
          "locator": "Artigos 30–31; p.16 do PDF",
          "statement": "Protege uso da língua e cultura escolhidas e associações culturais, religiosas e linguísticas de comunidades.",
          "basis": "norm",
          "publishedDate": "Camada normativa da edição com emendas até 2012; consultada em 2026-10-07",
          "accessedDate": "2026-10-07"
        }
      ],
      "rationale": "Preservação explícita de culturas e línguas sustenta multiculturalismo parcial.",
      "uncertainty": "Norma histórica de 2012; não certifica consolidação ou prática em 2024–2026 nem abertura migratória. Direitos sujeitos ao Bill of Rights.",
      "reviewedOn": "2026-10-07",
      "version": "editorial-ordinal-v1",
      "value": 40,
      "range": [
        30,
        45
      ]
    }
  }
} as const;
const constitution:ReferenceSource={title:'Constituição sul-africana — Ministério da Justiça, capítulos1–2',url:'https://www.justice.gov.za/constitution/chp02.html',note:'Corpo oficial7–39 efetivamente lido integralmente; capítulo1sec6 obtido como corpo indexado, não nova abertura direta bem-sucedida. Texto HTML com onze línguas pertence à camada anterior à emenda18; não se afirma consolidação atual2026. Edição anterioraté2012 preservada.'};
const customary:ReferenceSource={title:'Recognition of Customary Marriages Act120/1998 — edição oficial hospedada, maio2025',url:'https://www.justice.gov.za/legislation/acts/1998-120.pdf',note:'Cinco páginas efetivamente lidas, com emenda1/2021 e downloadJuta29/05/2025 no próprio arquivo. Republicação comercial hospedada pelo Ministério, não fac-símile da Gazeta1998. Igualcapacidade6, propriedade7 e divórcio8; poliginia2/7 e exceções de idade3 preservadas.'};
const unions:ReferenceSource={title:'Civil Union Act17/2006 — Gazeta oficial original',url:'https://www.gov.za/sites/default/files/a17-06.pdf',note:'Todas sete páginas/corpo1–16 realmente aberto e lido; OCR apresenta muitos erros, sem certificação visual fac-símile. Usados1/8/13/16 para inclusão conjugal e efeitos gerais. Original6contém objeção de oficiais; não alegada vigente2025 porque emenda8/2020 existe e seu corpo ainda não foi lido.'};
const judgment:ReferenceSource={title:'Fourie [2005]ZACC19 — acórdão constitucional, republicação SAFLII',url:'https://www3.saflii.org/za/cases/ZACC/2005/19.html',note:'Abertura direta403; recuperação indexada efetivamente devolveu passagens completas90/94–97, não título/snippet isolado.92/93/98retornaram sob caso conjuntoZACC20, fonte separada. Doutrina geral distingue crença religiosa e interpretação de direitos; participação religiosa e casamento celebrado por ministros reconhecidos são contrapontos. Não equivalência integral com registro oficial da Corte ou auditoria atual de execução.'};
const companion:ReferenceSource={title:'Equality Project [2005]ZACC20 — acórdão conjunto, republicação SAFLII',url:'https://www.saflii.org/za/cases/ZACC/2005/20.html',note:'Corpos indexados realmente devolvidos90/92/93/98; a busca direcionadaZACC19retornou este caso conjunto. Sem alegar nova leitura diretaZACC19para estas passagens. Mesma matéria constitucional consolidada, proveniência explicitada separadamente.'};
function claim(source:ReferenceSource,locator:string,statement:string,publishedDate:string){return {sourceTitle:source.title,locator,statement,basis:'norm' as const,publishedDate,accessedDate:'2026-10-08'};}
const rows:ReferenceAxisCoding[]=[
 {axis:'imi',position:'moderate-second',confidence:'medium',reviewedOn:'2026-10-08',relatedQuestionIds:['imigracao_02','imigracao_08'],claims:[claim(constitution,'30–31; contrapontos29(2)/36; capítulo1sec6(2–5), corpo indexado','Todos podem escolher língua e vida cultural; todas as comunidades podem manter associações culturais, religiosas e linguísticas.','Camada constitucional anterior à emenda18/2023')],rationale:'Programa cultural aberto à população e às comunidades em geral sustenta multiculturalismo normativo moderado.',uncertainty:'Direitos sujeitos ao Bill of Rights; educação em língua escolhida depende de praticabilidade/equidade. Não política migratória aberta nem cumprimento integral. Onze línguas no HTML não certificam consolidação2026.'},
 {axis:'mor',position:'moderate-first',confidence:'medium',reviewedOn:'2026-10-08',claims:[claim(constitution,'9/12(2)','Antidiscriminação sexual e por estado conjugal, integridade corporal e decisão reprodutiva.','Camada constitucional anterior à emenda18/2023'),claim(customary,'6–8; contrapontos2/3/7(6)','Esposa tem plena capacidade em igualdade com marido; gestão patrimonial igual e divórcio judicial por ruptura irreparável.','Consolidado com emenda1/2021; arquivo29/05/2025'),claim(unions,'1/8/13; contraponto5; vigência16','União voluntária de duas pessoas adultas estende consequências jurídicas conjugais, inclusive a parceiros do mesmo sexo.','2006-11-30')],rationale:'Autonomia civil e conjugal, capacidade patrimonial feminina, dissolução e reconhecimento de união entre pessoas do mesmo sexo cobrem família além de emprego ou aborto.',uncertainty:'Normas não eliminam violência e desigualdade observadas no relatório2025 preservado. Casamentos costumeiros admitem poliginia e exceções de idade; sistemas familiares coexistem e propriedades têm regras próprias. Originalobjeção6/2006não certificada vigente após2020.'},
 {axis:'rel',position:'moderate-first',confidence:'medium',reviewedOn:'2026-10-08',claims:[claim(companion,'92–93; contrapontos90/98','Doutrina religiosa não pode substituir fundamento jurídico na interpretação de direitos constitucionais.','2005-12-01'),claim(judgment,'94–95; contrapontos90/96–97','Corte distingue esferas secular e sagrada e exige igual respeito governamental a todos, com coexistência e acomodação religiosa.','2005-12-01'),claim(constitution,'15(1–3)','Observâncias em instituições estatais precisam de equidade e participação livre/voluntária; reconhecimento familiar religioso deve respeitar Constituição.','Camada constitucional anterior à emenda18/2023')],rationale:'Separação funcional entre doutrina religiosa e fundamento jurídico constitucional, com governo de igual respeito, sustenta orientação secular moderada no desenho jurídico.',uncertainty:'Decisão surge em caso matrimonial e não estabelece laicidade absoluta. Religião participa da vida pública, ministros celebram casamento com efeito estatal e instituições públicas podem ter observâncias equitativas voluntárias. Não usar liberdade religiosa isolada como separação.'},
];
export function extendCurrentCountryCoverage07(entry:ReferenceEntry):ReferenceEntry {
 if(JSON.stringify(entry)!==JSON.stringify(currentCountryCoverage07Before))return entry;
 const sources=[...entry.sources,constitution,customary,unions,judgment,companion];
 const result={...entry,sources,vec:{...entry.vec},evidence:{...entry.evidence},axisEvidence:{...entry.axisEvidence},coding:{...entry.coding}};
 for(const row of rows){const c=codeReferenceAxis(row,sources);result.vec[row.axis]=c.value;result.evidence[row.axis]=c.evidence;result.axisEvidence[row.axis]=c.axisEvidence;result.coding[row.axis]=c.coding;}
 return Object.assign(result,{caveats:'Normas constitucionais da camada anterioràemenda18/2023, família nas versões1998/emenda2021 e2006; prática2024 do relatório2025 anterior preservada. Revisão independente adicional leu FH2025 e cláusulas oficiais indexadas territoriais e de direitos; PDF2012 direto permaneceu inacessível. Artigo37 admite emergência e derrogação condicionada, além dos déficits concretos de defesa e demora. Cultura e autonomia familiar são recortes gerais documentados, não opiniões dos habitantes ou eficácia plena. REL norma aceita em alcance delimitado: separação funcional constitucional com ampla acomodação religiosa, não exclusão da vida pública. Eco/con/int/dip/com/tec desconhecidos; acesso a serviços, permissões patrimoniais e banco público não medem orientação econômica geral.',documentaryReview07:{status:'accepted-bounded-whole-profile',independentReview:'accepted-six-bounded-claims-and-source-scopes',reviewedOn:'2026-10-08',scope:'Três normas aprofundadas IMI/MOR/REL aceitas pelo Root. EST/REP/POD herdados exatos receberam leitura independente adicional de cláusulas oficiais indexadas e FH2025; os seis foram aceitos pelo Root em seus recortes datados, sem certificação de toda prática2026. Falha direta do PDF2012 não é certificação dessa edição.'}});
}
export const currentCountryCoverage07Audit={id:'south-africa',identityAdditions:0,locatedMetadataAxes:6,newAcceptedNormAxes:3,independentlyReviewedInheritedAxes:3,independentReview:'accepted-six-bounded-claims-and-source-scopes'}as const;
