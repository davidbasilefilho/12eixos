import type {AxisKey,ReferenceEntry,ReferenceSource} from './references';
import {codeReferenceAxis,type ReferenceAxisCoding} from '../lib/reference-coding';
const axes:AxisKey[]=['est','rep','pod','imi','dip','int','eco','con','com','rel','mor','tec'];
const reviewedOn='2026-10-08';
export const currentCountryCoverage09Before:ReferenceEntry[] = [
  {
    "id": "nigeria-current-2025",
    "kind": "country",
    "category": "country",
    "name": "Nigéria",
    "period": "Instituições e políticas vigentes, 2024–2025",
    "vec": {
      "est": 72,
      "rep": 61,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Federação constitucional e eleições competitivas; decisão judicial de 2024 confirmou autonomia local.",
    "caveats": "Descreve instituições e políticas do governo, nunca opiniões dos habitantes. Insegurança e capacidade pública diferem por região. Eixos sem evidência suficiente permanecem em 50 como desconhecidos.",
    "sources": [
      {
        "title": "Constituição / documento institucional — Nigéria",
        "url": "https://www.constituteproject.org/constitution/Nigeria_1999",
        "note": "Fonte constitucional ou institucional para a organização formal do Estado; sustenta somente os eixos explicitamente cobertos no documento."
      },
      {
        "title": "Freedom in the World 2025 — Nigéria",
        "url": "https://freedomhouse.org/country/nigeria/freedom-world/2025",
        "note": "Relatório de eventos de 2024, competição política e direitos civis; avaliação independente para confrontar texto constitucional e prática."
      }
    ],
    "evidence": {
      "est": "high",
      "rep": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Constituição / documento institucional — Nigéria"
        ],
        "rationale": "A carta constitucional descreve a distribuição territorial de poder, sustentando a posição federal/descentralizada codificada."
      },
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — Nigéria"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 61."
      }
    }
  },
  {
    "id": "kenya-current-2025",
    "kind": "country",
    "category": "country",
    "name": "Quênia",
    "period": "Instituições e políticas vigentes, 2024–2025",
    "vec": {
      "est": 72,
      "rep": 68,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Constituição descentralizou poder a 47 condados; eleições são competitivas.",
    "caveats": "Descreve instituições e políticas do governo, nunca opiniões dos habitantes. Protestos de 2024 e ação policial tornam segurança dinâmica. Eixos sem evidência suficiente permanecem em 50 como desconhecidos.",
    "sources": [
      {
        "title": "Constituição / documento institucional — Quênia",
        "url": "https://www.constituteproject.org/constitution/Kenya_2010",
        "note": "Fonte constitucional ou institucional para a organização formal do Estado; sustenta somente os eixos explicitamente cobertos no documento."
      },
      {
        "title": "Freedom in the World 2025 — Quênia",
        "url": "https://freedomhouse.org/country/kenya/freedom-world/2025",
        "note": "Relatório de eventos de 2024, competição política e direitos civis; avaliação independente para confrontar texto constitucional e prática."
      }
    ],
    "evidence": {
      "est": "high",
      "rep": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Constituição / documento institucional — Quênia"
        ],
        "rationale": "A carta constitucional descreve a distribuição territorial de poder, sustentando a posição federal/descentralizada codificada."
      },
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — Quênia"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 68."
      }
    }
  },
  {
    "id": "ghana-current-2025",
    "kind": "country",
    "category": "country",
    "name": "Gana",
    "period": "Instituições e políticas vigentes, 2024–2025",
    "vec": {
      "est": 50,
      "rep": 88,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Alternância presidencial e liberdades civis robustas na região.",
    "caveats": "Descreve instituições e políticas do governo, nunca opiniões dos habitantes. A democracia eleitoral não mede desigualdade ou serviços. Eixos sem evidência suficiente permanecem em 50 como desconhecidos.",
    "sources": [
      {
        "title": "Constituição / documento institucional — Gana",
        "url": "https://www.constituteproject.org/constitution/Ghana_1992",
        "note": "Fonte constitucional ou institucional para a organização formal do Estado; sustenta somente os eixos explicitamente cobertos no documento."
      },
      {
        "title": "Freedom in the World 2025 — Gana",
        "url": "https://freedomhouse.org/country/ghana/freedom-world/2025",
        "note": "Relatório de eventos de 2024, competição política e direitos civis; avaliação independente para confrontar texto constitucional e prática."
      }
    ],
    "evidence": {
      "rep": "high"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — Gana"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 88."
      }
    }
  },
  {
    "id": "zambia-current-2025",
    "kind": "country",
    "category": "country",
    "name": "Zâmbia",
    "period": "Instituições e políticas avaliadas, 2024–2025",
    "vec": {
      "est": 15,
      "rep": 55,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 60,
      "mor": 50,
      "tec": 50
    },
    "rationale": "A constituição chama a Zâmbia de nação cristã e mantém república unitária; alternância eleitoral ocorre junto a restrições a liberdades e oposição.",
    "caveats": "O registro compara algumas características institucionais do Estado, nunca crenças de seus habitantes. Os demais eixos ficam em 50 por falta de evidência específica neste recorte; este perfil tem cobertura inferior a seis eixos e deve permanecer fora do ranking até revisão documental mais ampla.",
    "sources": [
      {
        "title": "Constituição da Zâmbia (1991)",
        "url": "https://www.constituteproject.org/constitution/Zambia_1991?lang=en",
        "note": "Texto constitucional reproduzido em tradução pelo Comparative Constitutions Project; fonte para a forma territorial do Estado e a cláusula religiosa."
      },
      {
        "title": "Freedom in the World 2025 — Zâmbia",
        "url": "https://freedomhouse.org/country/zambia/freedom-world/2025",
        "note": "Avaliação anual de direitos políticos e liberdades civis para 2024; usada apenas como orientação categórica, não como medição dos demais eixos."
      }
    ],
    "evidence": {
      "est": "medium",
      "rep": "medium",
      "rel": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Constituição da Zâmbia (1991)"
        ],
        "rationale": "A constituição define a estrutura territorial como unitária; a nota editorial aproxima esse desenho do polo correspondente, sem afirmar que o texto mede autonomia praticada."
      },
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — Zâmbia"
        ],
        "rationale": "A classificação narrativa de direitos políticos e liberdades civis como “Partly Free” fundamenta somente um intervalo amplo (85, 55 ou 15), não uma pontuação psicométrica nem os outros eixos."
      },
      "rel": {
        "sourceTitles": [
          "Constituição da Zâmbia (1991)"
        ],
        "rationale": "A cláusula constitucional caracteriza o Estado como secular com reconhecimento constitucional de uma tradição religiosa; o valor descreve a norma estatal, não a religiosidade da população."
      }
    }
  },
  {
    "id": "tanzania-current-2025",
    "kind": "country",
    "category": "country",
    "name": "Tanzânia",
    "period": "Instituições e políticas avaliadas, 2024–2025",
    "vec": {
      "est": 15,
      "rep": 15,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 85,
      "mor": 50,
      "tec": 50
    },
    "rationale": "A república unitária secular realiza eleições multipartidárias, mas a predominância do partido governante e restrições cívicas reduzem a competição.",
    "caveats": "O registro compara algumas características institucionais do Estado, nunca crenças de seus habitantes. Os demais eixos ficam em 50 por falta de evidência específica neste recorte; este perfil tem cobertura inferior a seis eixos e deve permanecer fora do ranking até revisão documental mais ampla.",
    "sources": [
      {
        "title": "Constituição da Tanzânia (1977)",
        "url": "https://www.constituteproject.org/constitution/Tanzania_1977?lang=en",
        "note": "Texto constitucional reproduzido em tradução pelo Comparative Constitutions Project; fonte para a forma territorial do Estado e a cláusula religiosa."
      },
      {
        "title": "Freedom in the World 2025 — Tanzânia",
        "url": "https://freedomhouse.org/country/tanzania/freedom-world/2025",
        "note": "Avaliação anual de direitos políticos e liberdades civis para 2024; usada apenas como orientação categórica, não como medição dos demais eixos."
      }
    ],
    "evidence": {
      "est": "medium",
      "rep": "medium",
      "rel": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Constituição da Tanzânia (1977)"
        ],
        "rationale": "A constituição define a estrutura territorial como unitária; a nota editorial aproxima esse desenho do polo correspondente, sem afirmar que o texto mede autonomia praticada."
      },
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — Tanzânia"
        ],
        "rationale": "A classificação narrativa de direitos políticos e liberdades civis como “Not Free” fundamenta somente um intervalo amplo (85, 55 ou 15), não uma pontuação psicométrica nem os outros eixos."
      },
      "rel": {
        "sourceTitles": [
          "Constituição da Tanzânia (1977)"
        ],
        "rationale": "A cláusula constitucional caracteriza o Estado como secular ou sem religião oficial; o valor descreve a norma estatal, não a religiosidade da população."
      }
    }
  }
];

const source=(title:string,url:string,note:string):ReferenceSource=>({title,url,note});
const ng=source('Nigéria — constituição ediçãoPLAC2023 depositadaNILDS','https://ir.nilds.gov.ng/bitstream/handle/123456789/1729/1999%20consitution.pdf?isAllowed=y&sequence=1','PDF280p direto; header/proveniência0–4 e10,p33/277(1–2),pp186–187 efetivamente lidos. Impressão privadaPLAC em repositório institucionalNILDS, não fac-símile oficial. Incorpora alterações até2023, não todas versões2026. Catálogo atribui GovernoFederal, mas próprioPDF identificaPLAC; essa diferença permanece explícita.');
const ke=source('QuêniaKLRC — Constituição2010,8 Estado/religião','https://www.klrc.go.ke/index.php/constitution-of-kenya/108-chapter-two-the-republic/174-8-state-and-religion','Cláusula8 inteira indexada efetivamente lida; direto falhouInternalError/429. Republicação oficial por artigo, não consolidação integral2026 ouPDF inteiro.');
const ke24=source('QuêniaKLRC — Constituição2010,24 limites de direitos','https://klrc.go.ke/index.php/constitution-of-kenya/110-chapter-four-the-bill-of-rights/111-part-1-general-provisions-relating-to-the-bill-of-rights/190-24-limitation-of-rights-and-fundamental-freedoms','Corpo primário inteiro24(1–5) indexado efetivamente lido:24(4) excepciona igualdade estritamente para direito muçulmano pessoal peranteKadhis. Não qualquer suspensão religiosa universal.');
const ke170=source('QuêniaKLRC — Constituição2010,170 tribunaisKadhis','https://www.klrc.go.ke/index.php/constitution-of-kenya/133-chapter-ten-judiciary/136-part-3-subordinate-courts/339-170-kadhis-courts','Art170(1–5) inteiro indexado efetivamente lido: cargo exige fé muçulmana; foro para status pessoal/casamento/divórcio/herança, todaspartesmuçulmanas e submissão ao foro. Não fonte da ausência de religião estatal, mas contraponto institucional explícito.');
const tz=source('TanzâniaNAO — Constituição1977, versão inglesa oficial revista2005','https://www.nao.go.tz/uploads/Constitution_of_the_United_Republic_of_Tanzania_en.pdf','PDF91p abriu e nota inicial declara revisão oficial até2005. Leitura normativa de corpos indexados1–4/17–21, não91p integral. Art3(1) Estado secular e19 liberdade religiosa com limites; versão2005 não certifica automaticamente prática ou todas alterações2026. Versão anterior1995WIPO expressamente rejeitada para este recorte.');
const gh=source('GanaJudicialService — Constituição1992, partidos55','https://judicial.gov.gh/jsweb/index.php/jsg-services/libraryservices/statute-on-elections/395-political-parties','Corpo direto55(1–17) oferecido efetivamente lido. HTML contém provável erro de transcrição55(9), não usado;56 está truncado e não usado. Fonte de garantias partidárias parciais, não auditoria da eleição2026 ou certificação integral do exemplar.');
const zm=source('ZâmbiaAssembleia — eleição da direção da XIV legislatura, outubro2026','https://pbo.parliament.gov.zm/node/14125','Corpo completo indexado efetivamente lido; direto timeout. Relata226 lugares de círculos/40 proporcional/até11 nomeados após lei13/2025. Data2/10/2026 corroborada pelo corpo da homepage parlamentar e listagemArticles; não texto integral da lei2025 ou julgamento de liberdade geral.');
const zmDate=source('ZâmbiaAssembleia — listagem institucionalArticles','https://pbo.parliament.gov.zm/articles','Corpo indexado de entradaMUTTI RETAINS efetivamente lido: sexta2/10/2026. Apenas corroborador de data da sessão, não todo catálogo.');
type Proposal={id:string,sources:ReferenceSource[],period:string,rationale:string,caveats:string,scope:string,row?:ReferenceAxisCoding};
const rel=(s:ReferenceSource,date:string,locator:string,statement:string,uncertainty:string):ReferenceAxisCoding=>({axis:'rel',position:'moderate-first',confidence:'medium',reviewedOn,claims:[{sourceTitle:s.title,publishedDate:date,accessedDate:reviewedOn,locator,statement,basis:'norm'}],rationale:'Princípio constitucional geral de não adoção religiosa ou secularidade estatal sustenta orientação institucional moderadamente secular no recorte documental.',uncertainty});
const proposals:Proposal[]=[
{id:'nigeria-current-2025',sources:[ng],period:'Norma religiosa da constituição1999 na edição2023; não consolidação/prática2026 integral',rationale:'A constituição proíbe adoção religiosa pelo GovernoFederal e Estados, mantendo tribunais religiosos reconhecidos.',caveats:'Norma secular funcional, não ausência de instituições confessionais. Edição privada depositada institucionalmente, não Gazette. Estimativas antigas não recertificadas.',scope:'Autor leu header/proveniência e10/277selected de PDF direto; Revisor leu diretamente metadados0–43/10 e275–279, incluindo277; Root aceitou recorte.',row:rel(ng,'2023','10,p33; contraponto277(1–2),pp186–187','Governos federal e estaduais não podem adotar religião estatal.','TribunaisSharia têm competência civil de direito pessoal277(2) e competência adicional que lei estadual possa conferir277(1); não afirmar exclusivamente pessoal em toda aplicação. Edição incorpora2023, não certificar todas alterações2026 ou prática regional homogênea.')},
{id:'kenya-current-2025',sources:[ke,ke24,ke170],period:'Norma religiosa da carta2010, republicações oficiais por artigo consultadas08/10/2026',rationale:'Ausência constitucional de religião estatal convive com tribunaisKadhis e acomodação de direito pessoal religioso.',caveats:'Só norma2010 nas cláusulas oficiais localizadas. Não inferir secularismo absoluto, número de escolas religiosas ou neutralidade cotidiana.',scope:'Autor leu corpos oficiais indexados8/24(1–5)/170(1–5), direto8falhou429; revisor leu corpos indexados completos8/24(1–5)/170(1–5), direto429; Root aceitou recorte.',row:rel(ke,'2010','8; contrapontos24(4) e170(1–5) em fontes próprias','Constituição estabelece ausência de religião estatal.','TribunaisKadhis reconhecidos170 e qualificação muçulmana para cargo; jurisdição pessoal exige todaspartesmuçulmanas e submissão. Igualdade pode ser qualificada estritamente pelo direito pessoal24(4). Versão de cláusulas2010, não recertificação integral2026; preâmbulo divino conhecido pela republicaçãoKenyaLaw não significa religião estatal.')},
{id:'tanzania-current-2025',sources:[tz],period:'Norma religiosa da carta1977 na revisão oficial inglesa2005; sem prática2026 inferida',rationale:'Texto constitucional declara Estado secular e protege mudança de crença, sujeito a limites legais.',caveats:'Versão oficial2005, não original1977 nem todas alterações2026. Religiosidade da população e efeito cotidiano não medidos.',scope:'Autor leu header/revisãoPDF direto e corpos indexados1–4/17–21; revisor diretoInternalError e leitura indexada nota2005/1–4selecionados/17–19completos/20–21completos; Root aceitou recorte.',row:rel(tz,'2005','3(1);19(1–3);20(2)(a)(i)','Constituição declara Estado secular e assegura liberdade de consciência, fé e mudança religiosa.','Art19(2) subordina proteção a leis de segurança/paz/integridade social;20 impede partido dedicado a fé/grupo religioso. Sem certificar toda consolidação2026, financiamento inexistente ou uniforme práticaZanzibar/mainland.')},
{id:'ghana-current-2025',sources:[gh],period:'Normas partidárias da carta1992 republicadas peloJudicialService; não eleições2026 auditadas',rationale:'Texto constitucional55 garante formação/participação em partidos e acesso equitativo à mídia estatal, impondo caráter nacional e registro.',caveats:'Descrição qualitativa de normas partidárias; não scoreREP da constituição ou prática. Exclui candidaturas partidárias a assembleiasdistritais/níveis inferiores55(3), restrições identitárias55(4)/(7), registro55(6). Transcrição55(9) suspeita e56truncado não usados; outra páginaexecutiva traz anúncios e erros, não usada para pontuarREP.',scope:'Autor leu corpo direto55(1–17), selecionou garantias/limites e excluiu passagens defeituosas; revisor leu55(1–17) indexado, excluiu55(9)/56, direto timeout; Root aceitou descrição.'},
{id:'zambia-current-2025',sources:[zm,zmDate],period:'Recomposição parlamentar relatada02/10/2026; não corpo integral da lei13/2025',rationale:'Parlamento relata XIV legislatura com226 lugares de círculos e40 lugares proporcionais reservados a mulheres, jovens e pessoas com deficiência; admite até11 nomeados. Direção foi eleita pela própria Assembleia.',caveats:'Descrição institucional de relato oficial, sem score geralREP ou validação de elogios oficiais. Relato não prova competição eleitoral irrestrita nem texto constitucional inteiro; preâmbulo2016Cristã como pesquisa anterior não basta sozinho para novoREL. Não converter eleição de mesa numa medição nacional.',scope:'Autor leu comunicado inteiro indexado e entradaArticles datada2/10; direto timeout. Revisor leu comunicado inteiro indexado eArticlesdatado2/10; Root aceitou descrição.'},
];
export function extendCurrentCountryCoverage09(entry:ReferenceEntry):ReferenceEntry {
 const before=currentCountryCoverage09Before.find(old=>old.id===entry.id),proposal=proposals.find(p=>p.id===entry.id);
 if(!before||!proposal||JSON.stringify(entry)!==JSON.stringify(before))return entry;
 const sources=[...entry.sources,...proposal.sources];
 const result={...entry,sources,period:proposal.period,rationale:proposal.rationale,caveats:proposal.caveats+' Avaliações anteriores preservadas para consulta documental e fontes anteriores mantidas. Eixos sem evidência revisada suficiente permanecem sem avaliação. Perfil parcial fora do ranking.',vec:Object.fromEntries(axes.map(axis=>[axis,50])) as Record<AxisKey,number>,evidence:{},axisEvidence:{},coding:{},documentaryReview:{status:'accepted-bounded-primary-and-identity',independentReview:'accepted',reviewedOn,scope:proposal.scope},unknownAxisReasons:{}} as ReferenceEntry & {unknownAxisReasons:Partial<Record<AxisKey,string>>};
 if(proposal.row){const coded=codeReferenceAxis(proposal.row,sources);result.vec.rel=coded.value;result.evidence.rel=coded.evidence;result.axisEvidence!.rel=coded.axisEvidence;result.coding!.rel=coded.coding;}
 for(const axis of axes)if(!result.coding![axis])result.unknownAxisReasons[axis]='Este recorte não sustenta avaliação geral deste eixo. Fontes e avaliações anteriores preservadas para consulta documental.';
 return result;
}
export const currentCountryCoverage09Audit={existingIdentities:5,newIdentities:0,candidateCodedAxes:3,qualitativeProfiles:2,unknownAxes:57,eligibleCandidates:0,independentReview:'accepted'} as const;
