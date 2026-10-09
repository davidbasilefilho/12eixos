import type {ReferenceEntry,ReferenceSource} from './references';
import {AXES} from '../lib/scoring';
import {codeReferenceAxis,type ReferenceAxisCoding} from '../lib/reference-coding';
/** Entire dormant peopleEuropeExpansion record; not an active catalog baseline. */
export const legacyHistoricalQuality05OriginalRecords:Record<string,ReferenceEntry>={
  'robert-owen': {
  "id": "robert-owen",
  "kind": "person",
  "category": "historical-figure",
  "name": "Robert Owen",
  "period": "A new view of society e movimento cooperativo, 1813–1830",
  "vec": {
    "est": 53,
    "rep": 62,
    "pod": 49,
    "imi": 50,
    "dip": 50,
    "int": 50,
    "eco": 83,
    "con": 86,
    "com": 50,
    "rel": 50,
    "mor": 84,
    "tec": 50
  },
  "rationale": "Owen defende educação universal, melhoria de condições de trabalho e comunidades cooperativas planejadas.",
  "caveats": "Owen atuou como empresário e reformador em períodos distintos; sua proposta cooperativa não elimina ambiguidades sobre autoridade e propriedade.",
  "sources": [
    {
      "title": "A New View of Society — Internet Archive",
      "url": "https://archive.org/details/newviewofsociety00owen",
      "note": "Texto primário do reformador sobre educação, condições de trabalho e comunidades cooperativas."
    }
  ],
  "evidence": {
    "est": "medium",
    "rep": "medium",
    "pod": "medium",
    "eco": "medium",
    "con": "medium",
    "mor": "medium"
  },
  "axisEvidence": {
    "est": {
      "sourceTitles": [
        "A New View of Society — Internet Archive"
      ],
      "rationale": "As comunidades cooperativas são autogeridas, mas o texto não desenha uma federação política nacional."
    },
    "rep": {
      "sourceTitles": [
        "A New View of Society — Internet Archive"
      ],
      "rationale": "A reforma social requer participação e educação populares, embora o sufrágio moderno não seja seu tema principal."
    },
    "pod": {
      "sourceTitles": [
        "A New View of Society — Internet Archive"
      ],
      "rationale": "Owen busca mudar condições por instituições e educação, sem plataforma clara sobre aparelho de segurança."
    },
    "eco": {
      "sourceTitles": [
        "A New View of Society — Internet Archive"
      ],
      "rationale": "A proposta favorece cooperativas e produção social orientada ao bem-estar comum."
    },
    "con": {
      "sourceTitles": [
        "A New View of Society — Internet Archive"
      ],
      "rationale": "Owen planeja explicitamente comunidades, educação e condições produtivas de modo coletivo."
    },
    "mor": {
      "sourceTitles": [
        "A New View of Society — Internet Archive"
      ],
      "rationale": "Educação e melhoria das condições sociais são tratadas como motores de aperfeiçoamento."
    }
  }
}
};
const reply='Owen — Reply to the Prime Minister question, 1840';
const outline='Owen — Outline of the Rational System of Society, 1841';
export const legacyHistoricalQuality05Sources:ReferenceSource[]=[
 {title:reply,url:'https://www.marxists.org/reference/subject/economics/owen/1840-49ro/prime-minister.pdf',note:'Fac-símile12 páginas, corpo0–137 inteiro efetivamente lido. Data1840 atribuída pelo índice MIA, sem data impressa explícita neste exemplar. Autoria título2–5 e assinatura133. Plano hipotético nacional próprio, não mandato realizado.'},
 {title:outline,url:'https://www.marxists.org/reference/subject/economics/owen/1840-49ro/outline.pdf',note:'Fac-símile16 páginas, texto e materiais0–435 integralmente efetivamente lidos em aberturas sucessivas. Título/autoria/publicação1841 em0–19; programa próprio começa48, termina assinatura408. Anúncio institucional25–48 assinado Cuddon e catálogo409–435 não usados como declarações exclusivas de Owen.'},
 {title:'Robert Owen Museum — identidade',url:'https://www.robertowenmuseum.co.uk/',note:'Corpo institucional27–44 efetivamente lido: cabeçalho29 identifica14/5/1771–17/11/1858. Não conferir com data errada1771–1851 do cabeçalho MIA nem atribuir biografia secundária como programa político.'},
];
function c(axis:ReferenceAxisCoding['axis'],position:ReferenceAxisCoding['position'],title:string,date:string,locator:string,statement:string,rationale:string,uncertainty:string):ReferenceAxisCoding{return{axis,position,confidence:'medium',claims:[{sourceTitle:title,publishedDate:date,accessedDate:'2026-10-08',basis:'declaration',locator,statement}],rationale,uncertainty,reviewedOn:'2026-10-08'};}
export const legacyHistoricalQuality05Claims:ReferenceAxisCoding[]=[
 c('est','moderate-first',outline,'1841','Impresso11–13/PDF10–12,289–341: comunidades, uniões e competências','Propõe comunidades com governo interno próprio, unidas em círculos para fins locais e gerais, com delegados para assuntos comuns.','O desenho distribui governo territorial entre comunidades e suas uniões; não se deduz federalismo apenas de cooperativas econômicas. A polidade comparada é a sociedade racional futura inteira.','Não desenho constitucional da Grã-Bretanha já praticado: comunidade300–2000 pessoas289–292 e círculos por extensão de interesses293–297. Conselhos de cada comunidade têm poder pleno338–341 e devem seguir a mesma lei natural; limites de competência das uniões não são completamente detalhados.'),
 c('dip','moderate-second',reply,'1840','Impresso2–3/PDF1–2,21–29: diplomacia e não agressão','Propõe relações internacionais transparentes e cooperativas, rejeitando agressão e injustiça contra outras nações.','Programa de toda política exterior distingue amizade e cooperação de conquista; não simples previsão de paz ou um tratado isolado.','Mantém poder defensivo suficiente para impedir ataques26–27 e proteção das dependências29; independência colonial só após preparação. Não pacifismo absoluto nem prática britânica verificada. Data1840 do índice arquivístico.'),
 c('eco','moderate-first',reply,'1840','Impresso7–8/PDF6–7,69–71/84–89: aquisição geral da propriedade','Propõe comprar a propriedade privada pela nação ou governo e substituir disputas individuais por organização associada da produção.','Objetivo final nacional de titularidade geral está explícito88 e não é inferido só de escola pública ou de suas fábricas pessoais.','Aquisição pelo preço integral e concordância progressiva, preservando proprietários33 e comprando só propriedades oferecidas69. Outline283–285 rejeita propriedade privada inútil, não necessariamente todo bem pessoal; plano futuro gradual, não economia implantada.'),
 c('con','moderate-first',outline,'1841','Impresso10–13/PDF9–12,267–273/323–341: provisão e organização geral','Propõe provisão pública de toda a população e conselhos responsáveis pela organização da produção e distribuição.','Regra alocativa abrange indústria, talentos, produção e distribuição em toda sociedade proposta, além da titularidade comum dos meios.','Articula coordenação entre comunidades e transporte de excedentes329–337, não cálculo nacional único perfeitamente detalhado. Formação e ocupação seguem rotina comum273, enquanto expressão e liberdade têm normas próprias164–165/255–265. Não eficácia ou implementação.'),
 c('mor','moderate-first',outline,'1841','Impresso11/PDF10,274–281/289–292: família, ambos sexos e liberdade','Propõe igualdade de educação, direitos, privilégios e liberdade pessoal de ambos os sexos e formação de vínculos afetivos sem distinções artificiais.','Conjunto reforma direitos gerais, casamento e criação familiar coletiva, além de presença de mulheres em uma atividade.','Concebe dois sexos e comunidades em proporções usuais; não inferir posição LGBT moderna. Crianças sob cuidado comunitário com acesso dos pais274–277, sem presumir autonomia infantil ou abolir toda coerção. Programa futuro, não práticas familiares verificadas.'),
 c('tec','moderate-first',reply,'1840','Impresso5/PDF4,55–59; complemento Outline impresso13/PDF12,323–337','Propõe aplicar descobertas das várias ciências e organização produtiva para elevar a abundância e reduzir trabalho necessário de toda população.','Uso normativo de ciência e descobertas visa transformar produção e condições de vida gerais, reforçado pela circulação de invenções e melhorias entre comunidades, não entusiasmo por um aparelho isolado.','Benefício é condicionado à organização racional e exercício temperado de faculdades55–59; previsões de abundância não certificadas. Não aprova todas tecnologias atuais ou ausência de riscos; seu determinismo ambiental não prova resultados científicos.'),
];
legacyHistoricalQuality05Claims.find(x=>x.axis==='tec')!.claims.push({sourceTitle:outline,publishedDate:'1841',accessedDate:'2026-10-08',basis:'declaration',locator:'Impresso12–13/PDF11–12,323–337: aperfeiçoar circunstâncias e circular invenções',statement:'Incumbe os conselhos de substituir condições inferiores pelas melhores conhecidas e comunicar invenções, descobertas e melhorias entre as comunidades.'});
/** Pending independent judgment; preserves any useful live/dormant changes beyond the entire captured baseline. */
export function reconcileLegacyHistoricalQuality05(entry:ReferenceEntry):ReferenceEntry{
 if(entry.id!=='robert-owen')return entry;
 if(entry.name!=='Robert Owen'||entry.category!=='historical-figure')throw Error('Owen quality05 identity mismatch');
 if(JSON.stringify(entry)!==JSON.stringify(legacyHistoricalQuality05OriginalRecords[entry.id]))return entry;
 const sources=structuredClone(entry.sources);for(const s of legacyHistoricalQuality05Sources)if(!sources.some(old=>old.title===s.title&&old.url===s.url))sources.push(structuredClone(s));
 const next:ReferenceEntry={...entry,period:'Planos próprios de sociedade racional, Reply1840 e Outline1841',rationale:'Propõe comunidades unidas, não agressão, propriedade social gradual, alocação coletiva, igualdade familiar e ciência para benefício geral.',caveats:'1771-05-14–1858-11-17, Museu29. Programas hipotéticos1840/1841, não todo percurso1813–1858 ou práticas. Comunidades e uniões futuras não são a Grã-Bretanha efetiva; aquisição consensual/indenizada e defesa armada são contrapontos. Governo escalonado por idade307–322 dispensa eleições314–315, com revisão por maioria jovem351–363; REP permanece desconhecido. Liberdade de expressão255–265 e ausência futura de punição286–288 convivem com remoção compulsória de pessoas consideradas física/mental/moralmente doentes342–346, portanto POD desconhecido. Rational Religion171–218 adora poder incompreensível ao lado de liberdade de crença; REL desconhecido, sem score de ateísmo pessoal. Igualdade dos sexos não implica posições LGBT. IMI/INT/COM também desconhecidos: língua comum e trocas não resolvem assimilação migratória, soberania externa ou regras tarifárias. Seis direções moderadas aceitas, restritas aos programas hipotéticos1840/1841.',sources,vec:Object.fromEntries(AXES.map(({key})=>[key,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{}};
 for(const input of legacyHistoricalQuality05Claims){const r=codeReferenceAxis(input,sources);next.vec[input.axis]=r.value;next.evidence[input.axis]=r.evidence;next.axisEvidence![input.axis]=r.axisEvidence;next.coding![input.axis]=r.coding;}
 return next;
}
/** Dormant activation proposal only; importer must preserve an already useful live identity. */
export const legacyHistoricalQuality05:ReferenceEntry[]=[reconcileLegacyHistoricalQuality05(structuredClone(legacyHistoricalQuality05OriginalRecords['robert-owen']))];
