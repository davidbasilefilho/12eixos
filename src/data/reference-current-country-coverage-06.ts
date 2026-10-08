import type { ReferenceEntry, ReferenceSource } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';
import { AXES } from '../lib/scoring';
/** Literal committed c220acc Canada; same complete record preserved through696. */
export const currentCountryCoverage06OriginalBefore:ReferenceEntry={
  "id": "canada-current-2025",
  "kind": "country",
  "category": "country",
  "name": "Canadá",
  "period": "Instituições e políticas vigentes, 2024–2025",
  "vec": {
    "est": 80,
    "rep": 97,
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
  "rationale": "Federação parlamentar, direitos robustos e divisão constitucional de competências sustentam a descrição.",
  "caveats": "Descreve instituições e políticas do governo, nunca opiniões dos habitantes. Imigração, energia e povos indígenas variam entre províncias e não cabem em média nacional. Eixos sem evidência suficiente permanecem em 50 como desconhecidos.",
  "sources": [
    {
      "title": "Constituição / documento institucional — Canadá",
      "url": "https://www.constituteproject.org/constitution/Canada_2011",
      "note": "Fonte constitucional ou institucional para a organização formal do Estado; sustenta somente os eixos explicitamente cobertos no documento."
    },
    {
      "title": "Freedom in the World 2025 — Canadá",
      "url": "https://freedomhouse.org/country/canada/freedom-world/2025",
      "note": "Relatório de eventos de 2024, competição política e direitos civis; avaliação independente para confrontar texto constitucional e prática."
    }
  ],
  "evidence": {
    "est": "high",
    "rep": "high"
  },
  "axisEvidence": {
    "est": {
      "sourceTitles": [
        "Constituição / documento institucional — Canadá"
      ],
      "rationale": "A carta constitucional descreve a distribuição territorial de poder, sustentando a posição federal/descentralizada codificada."
    },
    "rep": {
      "sourceTitles": [
        "Freedom in the World 2025 — Canadá"
      ],
      "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 97."
    }
  }
};
const reviewedOn='2026-10-08';
const sources:ReferenceSource[]=[
 {title:'Canada — Constitution Act1867, competências legislativas, Justiça',url:'https://laws-lois.justice.gc.ca/eng/const/page-3.html',note:'Autor leu diretamente91–95; revisor leu rota/eng/Const/page-3.html. Portal modificado28/9/2026, consulta8/10/2026; texto normativo e exceções nacionais, não prática.'},
 {title:'Canada — Constitution Act1867, Senado e Parlamento, Justiça',url:'https://laws-lois.justice.gc.ca/eng/const/page-1.html',note:'Autor leu17/21–24/29/37 no fulltext oficial; revisor leu diretamentepage1. Senado nomeado e mandatos/aposentadoria, contraponto a inferência democrática máxima.'},
 {title:'Canada — Charter1982, Justiça, edição oferecida em2026',url:'https://laws-lois.justice.gc.ca/eng/const/page-12.html',note:'Autor e revisor leram efetivamente1–35.1, inclusive limites1, exceções33, direitos25/27/28/29/35; recorte jurídico, não cumprimento. Portal modificado28/9/2026.'},
 {title:'Canada — Canadian Multiculturalism Act, Justiça',url:'https://laws-lois.justice.gc.ca/eng/acts/C-18.7/FullText.html',note:'Texto direto lido: atual21/9/2026, última emenda1/4/2014. Revisor leupage1:2–3/5–6; exclusões de instituições territoriais/indígenas e compromisso com línguas oficiais explícitos.'},
 {title:'Canada — Civil Marriage Act, Justiça',url:'https://lois-laws.justice.gc.ca/eng/acts/C-31.5/FullText.html',note:'Autor leu texto direto/indexado2–4 e PDF oficial indexado atual17/3/2026, última emenda18/6/2015. Revisor leu FullText atual21/9/2026, não o PDF17/3. Igual casamento civil e exceções de consciência/religião.'},
 {title:'Canada — Saguenay2015SCC16, Supremo, texto primário indexado',url:'https://decisions.scc-csc.ca/scc-csc/scc-csc/en/item/15288/index.do?iframe=true',note:'Autor leu efetivamente texto primário indexado72–74; revisor leu partes72–74/75–90/132–137/148. Aberturas diretas HTML/PDF403. Não alegar leitura direta nem separação estrita:137 expressamente a rejeita. Decisão15/4/2015.'}
];
const claim=(sourceTitle:string,locator:string,statement:string,publishedDate:string)=>({sourceTitle,locator,statement,publishedDate,basis:'norm' as const,accessedDate:reviewedOn});
export const currentCountryCoverage06Inputs:ReferenceAxisCoding[]=[
 {axis:'est',position:'moderate-first',confidence:'medium',reviewedOn,claims:[claim(sources[0].title,'1867§§91–95, em especial92/92A; contrapontos91/92(10)c/92A(3)/93','Províncias têm competências legislativas exclusivas em tributação local, municípios, propriedade/direitos civis, justiça, educação e recursos; União conserva domínios enumerados e exceções nacionais.','Constitution Act1867, texto oficial oferecido em consulta8/10/2026; portal modificado28/9/2026')],rationale:'Autonomia legislativa provincial abrangendo vários domínios sustenta descentralização normativa moderada.',uncertainty:'Poder nacional de paz/ordem/bom governo, competências enumeradas, obras de interesse nacional e prevalência federal92A(3)limitam autonomia. Não confederação soberana nem prática territorial medida.'},
 {axis:'rep',position:'moderate-first',confidence:'medium',reviewedOn,claims:[claim(sources[2].title,'Charter§§3–5; contraponto4(2)','Cidadãos têm direito de votar e candidatar-se à Câmara e assembleias; mandatos limitados e sessões anuais são exigidos.','1982; texto oficial oferecido em consulta8/10/2026'),claim(sources[1].title,'1867§§17/21–24/29/37','Parlamento inclui Senado nomeado; Câmara possui composição representativa, enquanto senadores são convocados pela autoridade executiva sob requisitos próprios.','1867, texto oficial oferecido em consulta8/10/2026')],rationale:'Representação eleitoral constitucional e renovação legislativa sustentam direção democrática moderada, coexistindo com Senado não eleito.',uncertainty:'Não certificar eleições2025/2026 ou práticas partidárias. Senado nomeado, Coroa e prorrogação por guerra/invasão/insurreição4(2)excluem democracia irrestrita; antigo97não é recertificado.'},
 {axis:'pod',position:'moderate-second',confidence:'medium',reviewedOn,claims:[claim(sources[2].title,'Charter§§7–14/24, contrapontos1/33','Protege liberdade pessoal, revistas razoáveis, não arbitrariedade da prisão, advogado/habeas corpus, julgamento independente e não punição cruel; permite reparação judicial e exclusão de prova ilícita condicionada.','1982; texto oficial oferecido em consulta8/10/2026')],rationale:'Salvaguardas gerais contra coerção e controle judicial sustentam direção libertária normativa moderada.',uncertainty:'Limites legais justificáveis1e declarações33podem afastar temporariamente2/7–15, renováveis após cinco anos. Não cumprimento policial, drogas, armas, segurança ou saldo nacional de liberdades observado.'},
 {axis:'imi',position:'moderate-second',confidence:'medium',reviewedOn,claims:[claim(sources[3].title,'§3(1)a–j/3(2), contrapontos2/3(1)i–j/5(2)/6(2)','Política geral preserva/partilha heranças culturais, promove participação de todas origens e idiomas diversos; impõe deveres a instituições federais.','Lei1988; atual21/9/2026, última emenda1/4/2014'),claim(sources[2].title,'Charter§§25/27/35 e16–23','Interpretação da Charter deve preservar patrimônio multicultural e direitos indígenas; regime de idiomas oficiais e direitos minoritários linguísticos permanecem específicos.','1982; texto oficial oferecido em consulta8/10/2026')],rationale:'Preservação cultural geral e inclusão institucional de origens diversas sustentam multiculturalismo normativo moderado.',uncertainty:'Mantém compromisso inglês/francês, exclusões institucionais legais e acordos provinciais. Não entrada migratória irrestrita, cidadania automática, ausência de assimilação prática ou igualdade de todas línguas oficiais.'},
 {axis:'mor',position:'moderate-first',confidence:'medium',reviewedOn,claims:[claim(sources[2].title,'Charter§§15/28/35(4); contraponto33','Direitos e liberdades são garantidos igualmente a homens/mulheres e lei protege igualdade contra discriminação; inclui igualdade nos direitos indígenas.','1982; texto oficial oferecido em consulta8/10/2026'),claim(sources[4].title,'§§2/4; contrapontos3/3.1 e2.1–2.3','Casamento civil é união de duas pessoas, não invalidável por mesmo sexo; consentimento/idade/monogamia e liberdade de oficiais religiosos permanecem.','Lei2005, última emenda18/6/2015; autor PDF oficial indexado17/3/2026; revisor FullText atual21/9/2026')],rationale:'Igualdade geral de gênero e casamento civil sem exclusão por mesmo sexo sustentam reforma social jurídica moderada.',uncertainty:'Liberdades religiosas/de consciência preservadas, requisitos familiares e exceção33explicitados; não implementação, acesso reprodutivo, todos costumes ou progressismo irrestrito.'},
 {axis:'rel',position:'moderate-first',confidence:'medium',reviewedOn,claims:[claim(sources[5].title,'§§72–74/75–90/132–137/148;137não separação estrita','Instituições estatais devem ser neutras perante crença e não crença, sem favorecer ou impedir religião; neutralidade institucional não exclui religião individual do espaço público.','2015-04-15, decisão2015SCC16'),claim(sources[2].title,'Preâmbulo/§§2(a)/29/33; fonte auxiliar1867§93/93A','Carta reconhece liberdade religiosa, preserva direitos escolares confessionais e invoca Deus no preâmbulo; declaração33pode afastar2temporariamente.','1982, texto oficial oferecido8/10/2026; contraponto1867§93/93A')],rationale:'Dever jurídico geral de neutralidade das instituições diante de crença e não crença sustenta direção não confessional moderada.',uncertainty:'Não separação estrita entre igrejas e Estado (§137), irreligiosidade líquida do país ou opinião dos habitantes. Escolas confessionais93/29, exceçãoQuébec93A, Deus no preâmbulo e33são contrapontos; decisão2015não auditora toda prática contemporânea.'}
];
/** Applies only to the literal accepted prior record; later useful reviews survive. */
export function extendCurrentCountryCoverage06(entry:ReferenceEntry):ReferenceEntry {
 if(entry.id!==currentCountryCoverage06OriginalBefore.id)return entry;
 if(JSON.stringify(entry)!==JSON.stringify(currentCountryCoverage06OriginalBefore))return entry;
 const union=[...entry.sources];for(const source of sources)if(!union.some(s=>s.title===source.title&&s.url===source.url))union.push(source);
 const next:ReferenceEntry={...entry,sources:union,period:'Normas constitucionais e leis civis/culturais em versões oficiais consultadas em 08/10/2026; precedente de neutralidade de 2015. Não certifica prática de 2025.',rationale:'Organização provincial, representação, garantias processuais, pluralidade cultural, igualdade civil e neutralidade institucional tratadas como normas jurídicas distintas.',caveats:'Perfil normativo, sem opiniões dos habitantes ou cumprimento medido. Limites federais, Senado nomeado, cláusula33, escolas confessionais e condições familiares/culturais explicitados por eixo. Seis demais construtos desconhecidos.',vec:Object.fromEntries(AXES.map(({key})=>[key,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{}};
 for(const input of currentCountryCoverage06Inputs){const code=codeReferenceAxis(input,union);next.vec[input.axis]=code.value;next.evidence[input.axis]=code.evidence;next.axisEvidence![input.axis]=code.axisEvidence;next.coding![input.axis]=code.coding;}
 return next;
}
export const currentCountryCoverage06Audit={id:'canada-current-2025',locatedNormAxes:6,unknownAxes:6,identityAdditions:0,actualIndependentSourceReview:'method_review; Root accepted six moderate legal-norm directions; independent runtime guards/source union accepted; Civil Marriage read-version distinction repaired',practiceCertified:false};
