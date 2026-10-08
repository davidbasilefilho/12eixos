import type { AxisKey, ReferenceEntry, ReferenceSource } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';

/** Accepted bounded programme identities. All original catalog records remain unchanged. */
const reviewedOn = '2026-10-08';
const axes:AxisKey[] = ['est','rep','pod','imi','dip','int','eco','con','com','rel','mor','tec'];
const dsa:ReferenceSource = {
  title:'Workers Deserve More — Democratic Socialists of America, programme 2026',
  url:'https://program.dsausa.org/',
  note:'Programa primário efetivamente lido: corpo 25–169. Nota autoral identifica redação abril–junho 2026 e aprovação final pelo NPC, sem dia exato. Não confundido com rascunho 2021; propostas, não resultados observados.',
};
const spd:ReferenceSource = {
  title:'Godesberger Programm — SPD, original German programme adopted 13–15 November 1959',
  url:'https://www.spd.de/fileadmin/Dokumente/Beschluesse/Grundsatzprogramme/godesberger_programm.pdf',
  note:'PDF primário alemão de 20 páginas hospedado pelo partido. Data de adoção na p0; data da transcrição digital não informada. Cláusulas codificadas e contrapontos efetivamente lidos; paráfrases portuguesas são traduções editoriais.',
};
const spdEnglish:ReferenceSource = {
  title:'Godesberg Program of the SPD — institutional English excerpt of 1959 programme',
  url:'https://germanhistorydocs.org/en/occupation-and-the-emergence-of-two-states-1945-1961/godesberg-program-of-the-spd-november-1959',
  note:'Reprodução institucional abreviada efetivamente lida, corpo 30–190; editorial inicial excluído. Fonte identifica edição Bonn 1959 e antologia 1987, com reticências. A codificação usa o original alemão completo, não supõe equivalência com todos os trechos omitidos.',
};
function claim(source:ReferenceSource, axis:AxisKey, position:ReferenceAxisCoding['position'], locator:string,
 statement:string, rationale:string, uncertainty:string, relatedQuestionIds:string[]):ReferenceAxisCoding {
 return {axis,position,confidence:'medium',claims:[{sourceTitle:source.title,locator,statement,basis:'declaration',
 publishedDate:source===dsa?'Drafted April–June 2026; NPC final approval described, exact day unlisted':'Adopted 13–15 November 1959; digital transcription date unlisted',
 accessedDate:reviewedOn}],rationale,uncertainty,relatedQuestionIds,reviewedOn};
}
const dsaInputs:ReferenceAxisCoding[] = [
 claim(dsa,'rep','moderate-first','Democracy for All / A Real Democracy / A Democratic Congress; 141/146/151',
 'Propõe sufrágio ampliado, pluralismo partidário e representação proporcional, mas subordina Executivo e Judiciário ao Congresso.',
 'Desenho geral de seleção democrática com contraponto constitucional substancial; âncora moderada.',
 'Não garante toda independência judicial nem todas as salvaguardas da oposição. Não imputa sufrágio secreto, eleições empíricas livres ou toda separação liberal de poderes.',
 ['representacao_07','representacao_05']),
 claim(dsa,'pod','moderate-second','End Mass Incarceration and Police Immunity / Feminism for All; 106/111',
 'Propõe abolir polícia e prisões, controle civil e liberdade corporal e íntima.',
 'Norma ampla de limitar coerção institucional e ingerência estatal na vida privada, além de uma prestação setorial.',
 'Não estabelece todas as garantias processuais, liberdade absoluta de expressão ou ausência de punições futuras. Tratar dependência como saúde não equivale a legalizar toda produção e venda de drogas.',
 ['poder_01','poder_16']),
 claim(dsa,'dip','moderate-second','End The U.S. War Machine / Free Palestine; 121/126',
 'Rejeita guerras externas e bases estrangeiras; mantém apoio à resistência contra ocupação.',
 'Prioridade geral contra expansão militar com exceção defensiva expressa, sem pacifismo absoluto.',
 'Não prova abolir toda força defensiva ou toda arma. Direito de resistência e apoio ao tribunal internacional continuam; acusações históricas não são tratadas como fatos verificados.',
 ['diplomacia_04']),
 claim(dsa,'int','moderate-first','End Blockades, Embargoes, and Sanctions / End The U.S. War Machine; 131/121',
 'Rejeita interferência estadunidense, sanções e bases externas; apoia atuação do tribunal penal internacional.',
 'Norma geral de não ingerência militar/econômica; primeiro polo não intervencionista corretamente codificado em 60.',
 'Tribunal internacional e solidariedade política excluem soberania absolutamente imune a toda ação externa. Fim de sanções não é programa de eliminação de tarifas comerciais.',
 ['intervencao_13','intervencao_15']),
 claim(dsa,'eco','strong-first','A Day Without Capitalism / Our Perspective / Economic Democracy; 34/55–57/156',
 'Prioriza propriedade pública dos maiores grupos e indústrias essenciais e bens comuns nas necessidades centrais.',
 'Arquitetura geral de transformação produtiva e provisão comum, não uma única clínica ou empresa pública.',
 'Não nacionaliza explicitamente todos os bens ou toda empresa pequena; não determina título jurídico estatal de cada serviço nem demonstra eficiência. Sociedade futura é proposta.',
 ['economia_03','economia_05']),
 claim(dsa,'con','moderate-first','Freedom To Flourish / Housing For All / Economic Democracy; 85/95/156',
 'Propõe salário mínimo, jornada legal, controle universal de aluguéis e tributação patrimonial para bens públicos.',
 'Conjunto amplo de regras de trabalho, preços habitacionais e distribuição fiscal limita coordenação por livre contratação.',
 'Não estabelece plano integral de toda produção, banco central subordinado ou controle de todos os preços. Não infere planejamento apenas do título público de empresas.',
 ['controle_05','controle_09','controle_19']),
 claim(dsa,'mor','strong-first','Healthcare For All / Feminism For All; 90/111',
 'Defende autonomia sobre aborto, transição de gênero, casamento, divórcio, reprodução e vida íntima.',
 'Programa afirmativo amplo em vários componentes morais: corporal, familiar, sexual e de gênero.',
 'Não imputa posição sobre toda fase gestacional, eutanásia ou todos os modelos de parentalidade. Norma declarada, não prática social observada.',
 ['moral_03','moral_09','moral_06']),
];
const spdInputs:ReferenceAxisCoding[] = [
 claim(spd,'est','moderate-first','Die staatliche Ordnung; p5 / 140–148',
 'Divide poder entre Federação, estados e municípios, defendendo autogoverno local financeiramente sustentado.',
 'Autonomia territorial significativa explicitamente normativa; competências detalhadas não disponíveis para âncora forte.',
 'Não garante secessão, constituições estaduais autônomas em toda matéria ou veto local irrestrito. Declara adesão ao sistema federal, não levantamento completo de competências.',
 ['estrutura_03','estrutura_15']),
 claim(spd,'rep','strong-first','Grundforderungen / Die staatliche Ordnung; pp3–5 / 83–94/131–148',
 'Defende democracia, oposição e minorias, competição partidária igual e poderes separados.',
 'Conjunto geral explícito de legitimidade democrática e limites à maioria, além de um procedimento eleitoral isolado.',
 'Não valida eleições reais de 1959 nem todo mecanismo de democracia direta, recall ou sufrágio atual. Programa histórico afirmativo, não descrição de implementação.',
 ['representacao_03','representacao_19','representacao_05']),
 claim(spd,'pod','moderate-second','Die staatliche Ordnung / Die Kunst; pp4–5/16 / 117–126/155–168/516–520',
 'Defende direitos contra o Estado, imprensa independente, juízes independentes e arte sem censura.',
 'Programa geral de autonomia civil, expressão e limites à coerção jurídica; âncora moderada preserva lacunas.',
 'Não determina vigilância digital, todos os casos de discurso extremista ou descriminalização de drogas. Independência judicial não equivale automaticamente a toda regra de prova criminal.',
 ['poder_04']),
 claim(spd,'dip','moderate-second','Grundforderungen / Landesverteidigung; pp3/6 / 78–79/169–195',
 'Rejeita guerra como política, limita forças à defesa e defende desarmamento controlado.',
 'Prioridade anti-guerra e desarmamento com defesa nacional e ordem internacional coercitiva como contrapontos.',
 'Mantém defesa armada e meios de força da ordem internacional, portanto não pacifismo absoluto. Não demonstra comportamento militar efetivo.',
 ['diplomacia_04','diplomacia_10']),
 claim(spd,'int','moderate-first','Internationale Gemeinschaft / Landesverteidigung; pp17/6/3 / 532–545/189/78/194–195',
 'Defende não ingerência e integridade territorial, mas aceita força internacional e segurança coletiva.',
 'Norma geral de soberania e arbitragem limitada por instituições multilaterais; primeiro polo não intervencionista em 60.',
 'Não recusa toda operação externa ou obrigação de segurança. Autoridade executiva internacional e sistemas regionais da ONU são exceções substanciais, não omitidas.',
 ['intervencao_13']),
 claim(spd,'eco','moderate-second','Eigentum und Macht / Agrarwirtschaft; pp8–10 / 255–289/314–319',
 'Protege propriedade produtiva privada; admite empresas públicas e socialização se outros controles forem insuficientes.',
 'Presunção geral de proteção privada, não contagem arbitrária de setores; exceções públicas justificam somente inclinação moderada.',
 'Não quantifica predominância privada ou papel público mínimo. Serviços de monopólio natural e competição pública são necessários; propriedade comum deve ter autogestão descentralizada.',
 ['economia_18','economia_03']),
 claim(spd,'con','moderate-first','Wirtschafts- und Sozialordnung; p7–8 / 203–231',
 'Defende orçamento macroeconômico e regulação indireta, preservando decisões privadas, concorrência e banco central autônomo.',
 'Coordenação pública explícita do ciclo e distribuição da economia inteira, com autonomia de mercado contrária a comando integral.',
 'Não é plano central completo nem substituição de todos os preços pelo Estado. Autonomia monetária e negociação trabalhista são contrapontos explícitos; dados históricos de participação pública não são resultados aqui verificados.',
 ['controle_01','controle_02','controle_16']),
 claim(spd,'com','moderate-second','Internationale Gemeinschaft / Agrarwirtschaft; pp17/10–11 / 530–551/320–331',
 'Defende comércio mundial aberto a todas as nações, mantendo regulação agrícola de mercados e preços.',
 'Norma geral contra blocos comerciais fechados com exceções setoriais, não mera participação em uma organização.',
 'Não exige tarifas zero, livre aquisição estrangeira de terra ou sacrifício irrestrito da produção nacional. Benefícios econômicos previstos não são resultados demonstrados.',
 ['comercio_08','comercio_10']),
];
function entry(id:string,name:string,period:string,sources:ReferenceSource[],inputs:ReferenceAxisCoding[]):ReferenceEntry {
 const result:ReferenceEntry={id,name,period,kind:'ideology',category:'ideology',sources,
 vec:Object.fromEntries(axes.map(axis=>[axis,50])) as Record<AxisKey,number>,evidence:{},axisEvidence:{},coding:{},
 rationale:id.endsWith('2026')?'Defende propriedade pública dos maiores grupos e indústrias essenciais. Valores são âncoras editoriais, não medidas.':'Protege propriedade privada, com empresas públicas e socialização condicionada. Valores são âncoras editoriais, não medidas.',
 caveats:'Programa primário revisto em amplitude e contrapontos, com codificação ordinal editorial. Não substitui identidade SI antiga, nem redefine toda escola por ano/autor. Eixos sem cobertura permanecem desconhecidos; não se força elegibilidade.'};
 for(const input of inputs){const coded=codeReferenceAxis(input,sources);result.vec[input.axis]=coded.value;result.evidence[input.axis]=coded.evidence;
 result.axisEvidence![input.axis]=coded.axisEvidence;result.coding![input.axis]=coded.coding;}
 return result;
}
export const ideologyProgramBatch03:ReferenceEntry[] = [
 entry('ideology-program-democratic-socialism-dsa-2026','Socialismo democrático: programa DSA, 2026',
  'Workers Deserve More; redação abril–junho 2026, aprovação NPC descrita sem dia',[dsa],dsaInputs),
 entry('ideology-program-social-democracy-spd-1959','Social-democracia: programa de Godesberg, SPD 1959',
  'Aprovado 13–15 novembro 1959; transcrição digital sem data',[spd,spdEnglish],spdInputs),
];
export const ideologyProgramBatch03Audit = ideologyProgramBatch03.map(item=>({id:item.id,reviewedOn,
 supportedAxes:Object.keys(item.coding??{}),scope:'Parent accepted scoped axes after actual independent source/construct review; no original record or source object overwritten.',
 unknownAxisRule:'Uncoded axes50 with absent evidence/map/coding; no forced six axes.',
 ontologyStatus:'Primary inclusion and bounded property contrast accepted; two selected exemplars proposed, no two extra traditions or year-based distinctness.',
}));

/** Full integrated original SI records before this batch; not raw BASE arrays. Never inserted twice. */
export const ideologyProgramBatch03PreviousSnapshots:ReferenceEntry[] = [
  {
    "id": "social-democracy",
    "kind": "ideology",
    "category": "ideology",
    "name": "Social-democracia",
    "period": "Declaração de Estocolmo, junho de 1989",
    "vec": {
      "est": 50,
      "rep": 80,
      "pod": 40,
      "imi": 20,
      "dip": 20,
      "int": 50,
      "eco": 60,
      "con": 60,
      "com": 50,
      "rel": 50,
      "mor": 60,
      "tec": 50
    },
    "rationale": "Posições programáticas codificadas em âncoras ordinais explícitas a partir de trechos primários localizados; não são números medidos pelas fontes.",
    "caveats": "Distinção ontológica frente ao socialismo democrático é provisória: documentos SI sobrepostos não provam famílias distintas. Tecnologia é desconhecida: §4/49–53 combina benefícios com proibição de manipulação genética e riscos nucleares; otimismo genérico não resolve o eixo inteiro. Não confundir não violência com não intervenção.",
    "sources": [
      {
        "title": "Declaração de princípios da Internacional Socialista",
        "url": "https://www.socialistinternational.org/about-us/declaration-of-principles/",
        "note": "Base primária para democracia, economia, direitos e cooperação internacional."
      },
      {
        "title": "SI — Declaração de Estocolmo 1989",
        "url": "https://www.socialistinternational.org/our-meetings/congresses/xviii-stockholm/declaration-of-principles-of-the-socialist-international/",
        "note": "Fonte primária lida em 07/10/2026; locadores e limites registrados por eixo. Programa declarado, não estatística ou prática observada."
      }
    ],
    "evidence": {
      "rep": "high",
      "pod": "medium",
      "imi": "high",
      "dip": "high",
      "eco": "medium",
      "con": "medium",
      "mor": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "SI — Declaração de Estocolmo 1989"
        ],
        "rationale": "Democracia explicitamente definida. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Programa declarado, não prática de todos os partidos ou opinião dos membros."
      },
      "pod": {
        "sourceTitles": [
          "SI — Declaração de Estocolmo 1989"
        ],
        "rationale": "Garantias civis declaradas. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Direitos sociais coexistem; política penal completa não está definida."
      },
      "imi": {
        "sourceTitles": [
          "SI — Declaração de Estocolmo 1989"
        ],
        "rationale": "Multiculturalismo explicitamente defendido. Codificação editorial strong-second: âncora 20, faixa 10–25; a fonte não mede esse número. Limites: Não determina uma regra universal de admissão de migrantes."
      },
      "dip": {
        "sourceTitles": [
          "SI — Declaração de Estocolmo 1989"
        ],
        "rationale": "Pacifismo programático amplo. Codificação editorial strong-second: âncora 20, faixa 10–25; a fonte não mede esse número. Limites: Não estabelece abolição imediata de toda defesa armada."
      },
      "eco": {
        "sourceTitles": [
          "SI — Declaração de Estocolmo 1989"
        ],
        "rationale": "Público com mercado e propriedade plural. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não estabelece predominância estatal absoluta."
      },
      "con": {
        "sourceTitles": [
          "SI — Declaração de Estocolmo 1989"
        ],
        "rationale": "Coordenação democrática sem comando integral. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não mede produção efetivamente planejada."
      },
      "mor": {
        "sourceTitles": [
          "SI — Declaração de Estocolmo 1989"
        ],
        "rationale": "Reforma de gênero declarada. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não cobre todas as pautas morais contemporâneas."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "SI — Declaração de Estocolmo 1989",
            "locator": "§19–22",
            "statement": "Eleições plurais, alternância e Judiciário independente.",
            "basis": "declaration",
            "publishedDate": "1989-06",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Democracia explicitamente definida.",
        "uncertainty": "Programa declarado, não prática de todos os partidos ou opinião dos membros.",
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
            "sourceTitle": "SI — Declaração de Estocolmo 1989",
            "locator": "§13,26",
            "statement": "Rejeita coerção, tortura e restrições às liberdades.",
            "basis": "declaration",
            "publishedDate": "1989-06",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Garantias civis declaradas.",
        "uncertainty": "Direitos sociais coexistem; política penal completa não está definida.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "imi": {
        "axis": "imi",
        "position": "strong-second",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "SI — Declaração de Estocolmo 1989",
            "locator": "§27,66",
            "statement": "Defende diversidade cultural; rejeita uniformidade.",
            "basis": "declaration",
            "publishedDate": "1989-06",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Multiculturalismo explicitamente defendido.",
        "uncertainty": "Não determina uma regra universal de admissão de migrantes.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 20,
        "range": [
          10,
          25
        ]
      },
      "dip": {
        "axis": "dip",
        "position": "strong-second",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "SI — Declaração de Estocolmo 1989",
            "locator": "§28–36",
            "statement": "Defende desarmamento e solução pacífica.",
            "basis": "declaration",
            "publishedDate": "1989-06",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Pacifismo programático amplo.",
        "uncertainty": "Não estabelece abolição imediata de toda defesa armada.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 20,
        "range": [
          10,
          25
        ]
      },
      "eco": {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "SI — Declaração de Estocolmo 1989",
            "locator": "§59–62",
            "statement": "Propriedade pública e socialização numa economia mista.",
            "basis": "declaration",
            "publishedDate": "1989-06",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Público com mercado e propriedade plural.",
        "uncertainty": "Não estabelece predominância estatal absoluta.",
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
            "sourceTitle": "SI — Declaração de Estocolmo 1989",
            "locator": "§60–64",
            "statement": "Controle participativo, regulação e mercados dinâmicos.",
            "basis": "declaration",
            "publishedDate": "1989-06",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Coordenação democrática sem comando integral.",
        "uncertainty": "Não mede produção efetivamente planejada.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "mor": {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "SI — Declaração de Estocolmo 1989",
            "locator": "§68–72",
            "statement": "Igualdade feminina e assistência ao planejamento familiar.",
            "basis": "declaration",
            "publishedDate": "1989-06",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Reforma de gênero declarada.",
        "uncertainty": "Não cobre todas as pautas morais contemporâneas.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      }
    }
  },
  {
    "id": "democratic-socialism",
    "kind": "ideology",
    "category": "ideology",
    "name": "Socialismo democrático",
    "period": "Declaração de Frankfurt, 30/06–03/07/1951",
    "vec": {
      "est": 50,
      "rep": 80,
      "pod": 40,
      "imi": 40,
      "dip": 40,
      "int": 50,
      "eco": 60,
      "con": 80,
      "com": 50,
      "rel": 50,
      "mor": 60,
      "tec": 50
    },
    "rationale": "Posições programáticas codificadas em âncoras ordinais explícitas a partir de trechos primários localizados; não são números medidos pelas fontes.",
    "caveats": "Distinção ontológica frente à social-democracia permanece provisória; mesma organização abrange as duas famílias. O recorte de 1951 substitui o antigo período composto 1951–1989. Diferença econômica não é intensidade inventada do mesmo texto: decorre da obrigação sistemática de planejar em 1951, contrastada com meios variados e mercados em 1989.",
    "sources": [
      {
        "title": "Declaração de Frankfurt",
        "url": "https://www.socialistinternational.org/our-meetings/congresses/i-frankfurt/",
        "note": "Texto fundador sobre democracia política, direitos e economia socialista."
      },
      {
        "title": "Declaração de princípios",
        "url": "https://www.socialistinternational.org/about-us/declaration-of-principles/",
        "note": "Atualização pluralista de 1989."
      },
      {
        "title": "SI — Declaração de Frankfurt 1951",
        "url": "https://www.socialistinternational.org/our-meetings/congresses/i-frankfurt/",
        "note": "Fonte primária lida em 07/10/2026; locadores e limites registrados por eixo. Programa declarado, não estatística ou prática observada."
      }
    ],
    "evidence": {
      "rep": "high",
      "pod": "medium",
      "imi": "medium",
      "eco": "medium",
      "con": "high",
      "mor": "medium",
      "dip": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "SI — Declaração de Frankfurt 1951"
        ],
        "rationale": "Democracia explícita. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Programa declarado, não prática de todos os partidos ou opinião dos membros."
      },
      "pod": {
        "sourceTitles": [
          "SI — Declaração de Frankfurt 1951"
        ],
        "rationale": "Liberdades declaradas. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Admite defesa da democracia contra seus adversários."
      },
      "imi": {
        "sourceTitles": [
          "SI — Declaração de Frankfurt 1951"
        ],
        "rationale": "Reconhecimento cultural parcial. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não estabelece política integral de fronteiras."
      },
      "eco": {
        "sourceTitles": [
          "SI — Declaração de Frankfurt 1951"
        ],
        "rationale": "Público com propriedade plural. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não deriva 88 do texto nem universaliza nacionalização."
      },
      "con": {
        "sourceTitles": [
          "SI — Declaração de Frankfurt 1951"
        ],
        "rationale": "Planejamento explicitamente abrangente. Codificação editorial strong-first: âncora 80, faixa 75–90; a fonte não mede esse número. Limites: Rejeita planejamento totalitário e centralização de toda decisão."
      },
      "mor": {
        "sourceTitles": [
          "SI — Declaração de Frankfurt 1951"
        ],
        "rationale": "Reforma igualitária parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não projeta posições contemporâneas não mencionadas."
      },
      "dip": {
        "sourceTitles": [
          "SI — Declaração de Frankfurt 1951"
        ],
        "rationale": "Pacifismo condicionado à segurança coletiva. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Segurança coletiva não significa não intervenção."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "SI — Declaração de Frankfurt 1951",
            "locator": "Political Democracy §1–5",
            "statement": "Eleições universais secretas, oposição e multipartidarismo.",
            "basis": "declaration",
            "publishedDate": "1951-07-03",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Democracia explícita.",
        "uncertainty": "Programa declarado, não prática de todos os partidos ou opinião dos membros.",
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
            "sourceTitle": "SI — Declaração de Frankfurt 1951",
            "locator": "Political Democracy §3(a,b,g)",
            "statement": "Privacidade, expressão e processo judicial imparcial.",
            "basis": "declaration",
            "publishedDate": "1951-07-03",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Liberdades declaradas.",
        "uncertainty": "Admite defesa da democracia contra seus adversários.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "imi": {
        "axis": "imi",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "SI — Declaração de Frankfurt 1951",
            "locator": "Political Democracy §3(f)",
            "statement": "Autonomia cultural para grupos linguísticos.",
            "basis": "declaration",
            "publishedDate": "1951-07-03",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Reconhecimento cultural parcial.",
        "uncertainty": "Não estabelece política integral de fronteiras.",
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
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "SI — Declaração de Frankfurt 1951",
            "locator": "Economic Democracy §3–5",
            "statement": "Propriedade pública estratégica com setores privados importantes.",
            "basis": "declaration",
            "publishedDate": "1951-07-03",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Público com propriedade plural.",
        "uncertainty": "Não deriva 88 do texto nem universaliza nacionalização.",
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
        "position": "strong-first",
        "confidence": "high",
        "claims": [
          {
            "sourceTitle": "SI — Declaração de Frankfurt 1951",
            "locator": "Economic Democracy §2–7",
            "statement": "Produção sistematicamente planejada, democrática e descentralizada.",
            "basis": "declaration",
            "publishedDate": "1951-07-03",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Planejamento explicitamente abrangente.",
        "uncertainty": "Rejeita planejamento totalitário e centralização de toda decisão.",
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
            "sourceTitle": "SI — Declaração de Frankfurt 1951",
            "locator": "Social Democracy and Cultural Progress §4",
            "statement": "Elimina discriminação legal, econômica e política entre sexos.",
            "basis": "declaration",
            "publishedDate": "1951-07-03",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Reforma igualitária parcial.",
        "uncertainty": "Não projeta posições contemporâneas não mencionadas.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "dip": {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "SI — Declaração de Frankfurt 1951",
            "locator": "International Democracy §9–10",
            "statement": "Paz, segurança coletiva e desarmamento internacional.",
            "basis": "declaration",
            "publishedDate": "1951-07-03",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Pacifismo condicionado à segurança coletiva.",
        "uncertainty": "Segurança coletiva não significa não intervenção.",
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
