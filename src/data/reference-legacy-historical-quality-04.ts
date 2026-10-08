import type {ReferenceEntry,ReferenceSource} from './references';
import {AXES} from '../lib/scoring';
import {codeReferenceAxis,type ReferenceAxisCoding} from '../lib/reference-coding';
export const legacyHistoricalQuality04OriginalRecords:Record<string,ReferenceEntry>={
  "kwame-nkrumah": {
    "id": "kwame-nkrumah",
    "kind": "person",
    "category": "historical-figure",
    "name": "Kwame Nkrumah",
    "period": "Autobiografia, discursos e governo de Gana, 1945–1966",
    "vec": {
      "est": 74,
      "rep": 54,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 65,
      "eco": 88,
      "con": 84,
      "com": 50,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "rationale": "Nkrumah defendeu pan-africanismo e socialismo estatal, enquanto seu governo concentrou poder em partido único.",
    "caveats": "O perfil inclui tensões entre escritos anticoloniais e prática autoritária; não confunde libertação nacional com democracia liberal.",
    "sources": [
      {
        "title": "Africa Must Unite",
        "url": "https://archive.org/details/africamustunite0000nkrum",
        "note": "Livro de Nkrumah sobre unidade africana e independência política."
      }
    ],
    "evidence": {
      "est": "medium",
      "rep": "medium",
      "int": "medium",
      "eco": "high",
      "con": "medium"
    },
    "axisEvidence": {
      "est": {
        "sourceTitles": [
          "Africa Must Unite"
        ],
        "rationale": "Livro de Nkrumah sobre unidade africana e independência política. Nkrumah defendeu pan-africanismo e socialismo estatal, enquanto seu governo concentrou poder em partido único. A direção editorial deste eixo é Federal, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "rep": {
        "sourceTitles": [
          "Africa Must Unite"
        ],
        "rationale": "Livro de Nkrumah sobre unidade africana e independência política. Nkrumah defendeu pan-africanismo e socialismo estatal, enquanto seu governo concentrou poder em partido único. A direção editorial deste eixo é Democracia, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "int": {
        "sourceTitles": [
          "Africa Must Unite"
        ],
        "rationale": "Livro de Nkrumah sobre unidade africana e independência política. Nkrumah defendeu pan-africanismo e socialismo estatal, enquanto seu governo concentrou poder em partido único. A direção editorial deste eixo é Não intervencionista, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "eco": {
        "sourceTitles": [
          "Africa Must Unite"
        ],
        "rationale": "Livro de Nkrumah sobre unidade africana e independência política. Nkrumah defendeu pan-africanismo e socialismo estatal, enquanto seu governo concentrou poder em partido único. A direção editorial deste eixo é Público, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      },
      "con": {
        "sourceTitles": [
          "Africa Must Unite"
        ],
        "rationale": "Livro de Nkrumah sobre unidade africana e independência política. Nkrumah defendeu pan-africanismo e socialismo estatal, enquanto seu governo concentrou poder em partido único. A direção editorial deste eixo é Planejamento, com valor aproximado do recorte da fonte; ela não mede opinião privada."
      }
    }
  }
};
const book='Nkrumah — Africa Must Unite, programa1963';
export const legacyHistoricalQuality04Sources:ReferenceSource[]=[
 {title:book,url:'https://www.marxists.org/subject/africa/nkrumah/1963/africa-must-unite.pdf',note:'Fac-símile inglês1963, Frederick A. Praeger, título/autoria/publicação0–16. Leitura autoral selecionada real: XIV4243–4734 completo, IX/X2763–3211 parcial, XIX6850–7190 parcial, XXI7588–7787 parcial. Não todas244 páginas nem toda carreira. A abertura focal4260 primeiro falhou timeout e foi reaberta com sucesso.'},
 {title:'Kwame Nkrumah Memorial Park — identidade',url:'https://knmp.gov.gh/new/biography-of-osagyefo-dr-kwame-nkrumah/',note:'Instituição governamental de memória. Corpo38–80 efetivamente lido, identidade40: nascimento setembro1909 sem dia especificado, morte27/4/1972. Relatos políticos secundários e fé pessoal não pontuam declarações1963.'},
];
function c(axis:ReferenceAxisCoding['axis'],position:ReferenceAxisCoding['position'],locator:string,statement:string,rationale:string,uncertainty:string):ReferenceAxisCoding{return{axis,position,confidence:'medium',claims:[{sourceTitle:book,publishedDate:'1963',accessedDate:'2026-10-08',basis:'declaration',locator,statement}],rationale,uncertainty,reviewedOn:'2026-10-08'};}
export const legacyHistoricalQuality04Claims:ReferenceAxisCoding[]=[
 c('est','moderate-second','IX, impresso75–76/PDF88–89, linhas2832–2840; contrapontoX3130–3153/XXI7652–7759','Defende a continuidade de Gana como Estado unitário, rejeitando a autonomia regional usada para secessão.','Declara desenho territorial geral do Estado nacional; não infere unitarismo somente de planejamento econômico.','Mantém chefias tradicionaisX3130–3153 e propõe futura União Africana com autoridade residual dos EstadosXXI7652–7759. Polidades distintas: EST proposto descreve Gana1963, não desenho territorial de toda África ou hierarquia social.'),
 c('rep','moderate-first','X, impresso79–82/PDF92–95, linhas2964–2969/3073–3078; contrapontosIX2900–2962/X3084–3098/XIV4640–4660','Prescreve autoridade de Parlamento escolhido e referendo para mudanças constitucionais, com liderança fundada em maioria eleitoral.','Norma geral de autoridade parlamentar e mudança constitucional, além de vitória individual; não garantia de alternância de governo.','Concentra poder presidencial3084–3098, relativiza formas liberaisIX2900–2962 e prescreve liderança decisiva do CPPXIV4640–4660. Não pluralismo pleno, democracia prática ou toda carreira; tensão pode exigir manter desconhecido após julgamento.'),
 c('dip','moderate-second','XIX, impresso198–204/PDF211–217, linhas6972–7044/7138–7183; contraponto7112–7116/7184–7190/XXI7692–7723','Defende desarmamento, coexistência pacífica e política internacional voltada à paz mundial.','Programa envolve relações e conflitos internacionais em geral, não somente um acordo ou previsão de guerra.','Mantém defesa continental e união militar; recusa coexistência com imperialismo e articula estratégia com movimentos de libertação. Pacifismo moderado proposto, não ausência de apoio armado ou renúncia absoluta.'),
 c('int','moderate-second','X, impresso85–86/PDF98–99, linhas3174–3204; XIX6953–6960; XXI7652–7759','Propõe oferecer soberania de Gana a uma união africana e direção conjunta de defesa, planejamento e diplomacia.','Delegação supranacional de decisões políticas é explícita, além de associação diplomática ou filiação formal à ONU.','União é voluntária7743–7748 e preserva poderes nacionais residuais7652–7657. Defende não alinhamento e combate ingerência imperialista; não legitima toda intervenção externa ou união global já realizada.'),
 c('eco','moderate-first','XIV, impresso119–123/PDF132–136, linhas4291–4314/4352–4361/4458–4462','Defende ampliar propriedade pública dos meios de produção e dos recursos, com governo como principal empreendedor.','Prescrição geral de titularidade produtiva abrange terra, indústria e distribuição, não somente escola ou uma usina.','Reconhece cinco setores públicos, privados estrangeiros/nacionais, mistos e cooperativos4352–4361; horizonte socialista não descreve economia plenamente estatizada ou resultados verificados.'),
 c('con','moderate-first','XIV, impresso120–123/PDF133–136, linhas4332–4346/4382–4423','Prescreve planejamento geral de atividades econômicas, metas anuais, prioridades e controle superior de execução.','Alocação nacional engloba produção, trabalho, educação, saúde e investimento em todos os setores, distinta de mera propriedade pública.','Prevê ajuste e elasticidade4418–4423 e iniciativas locais/privadas; não presume cálculo total perfeito, eficácia ou ausência de mercados.'),
];
/** Six dated directions independently source-reviewed and accepted by Root; applies only to the entire preserved baseline. */
export function reconcileLegacyHistoricalQuality04(entry:ReferenceEntry):ReferenceEntry{
 if(entry.id!=='kwame-nkrumah')return entry;
 if(entry.name!=='Kwame Nkrumah'||entry.category!=='historical-figure')throw Error('Nkrumah quality04 identity mismatch');
 if(JSON.stringify(entry)!==JSON.stringify(legacyHistoricalQuality04OriginalRecords[entry.id]))return entry;
 const sources=structuredClone(entry.sources);for(const s of legacyHistoricalQuality04Sources)if(!sources.some(old=>old.title===s.title&&old.url===s.url))sources.push(structuredClone(s));
 const next:ReferenceEntry={...entry,period:'Declarações de Africa Must Unite, 1963: Gana e projeto de União Africana',rationale:'Defende Gana unitário, autoridade eleitoral com poder presidencial, paz mundial, união africana, propriedade pública e planejamento geral.',caveats:'Nascimento setembro1909, dia não autenticado nesta fonte; morte1972-04-27, Memorial Park40. Apenas declarações1963 selecionadas, não toda carreira ou prática. Estado unitário refere Gana; federação futura preserva poderes nacionais e exige adesão, sem confundir polidades. Maioria parlamentar/referendo convivem com concentração presidencial, subordinação sindical ao CPP e restrições oposicionistas; REP limita-se à autoridade constitucional declarada, sem garantir alternância. Paz mundial convive com defesa armada e luta anticolonial; não renúncia absoluta. Propriedade pública ampliada convive com cinco setores mistos; planejamento aceita flexibilidade. POD/IMI/COM/REL/MOR/TEC desconhecidos, sem rótulos biográficos ou antigo vetor como evidência. Seis direções moderadas aceitas após revisão primária independente, limitadas às declarações1963.',sources,vec:Object.fromEntries(AXES.map(({key})=>[key,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{}};
 for(const input of legacyHistoricalQuality04Claims){const r=codeReferenceAxis(input,sources);next.vec[input.axis]=r.value;next.evidence[input.axis]=r.evidence;next.axisEvidence![input.axis]=r.axisEvidence;next.coding![input.axis]=r.coding;}
 return next;
}
