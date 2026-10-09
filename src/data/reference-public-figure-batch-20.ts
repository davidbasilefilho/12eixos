import { AXES } from '../lib/scoring';
import type { ReferenceEntry, ReferenceSource } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';
export const publicFigureBatch20Sources: ReferenceSource[] = [
  {
    "title": "Jo Swinson — manifesto pessoalmente endossado, novembro2019, versão1.2",
    "url": "https://www.libdems.org.uk/fileadmin/groups/2_Federal_Party/Documents/PolicyPapers/2019_General_Election_Manifesto__2019__Stop_Brexit_and_Build_a_Brighter_Future.pdf",
    "note": "Prefácio próprio82–129; edição2612–13. Corpo primário seletivo efetivamente lido0–664/1848–2569 e trechos finais, não todas98páginas. Declaração coletiva adotada, não autoria exclusiva ou execução."
  },
  {
    "title": "P4NE — atividade de Jo Swinson em23/06/2026",
    "url": "https://p4ne.org/stories/new-economy-summer-drinks/",
    "note": "Corpo42–73/byline80–82 efetivamente lido. Evento23/06/2026 em42 e fala nominal48; atividade viva somente, sem política2019 renovada. Publicação sem dia indicado; fotos não examinadas."
  },
  {
    "title": "UK Parliament — passes de ex-parlamentares, abril2026",
    "url": "https://www.parliament.uk/site-information/freedom-of-information/information-we-already-publish/house-of-commons-publication-scheme/security-and-access/parliamentary-passes-for-former-mps/parliamentary-passes-list-april-2026/",
    "note": "Registro580 Joanne Swinson efetivamente lido; corroboração institucional de identidade, não comparecimento presencial ou pontuação."
  }
];
export const publicFigureBatch20Coding: ReferenceAxisCoding[] = [
  {
    "axis": "est",
    "position": "moderate-first",
    "confidence": "medium",
    "relatedQuestionIds": [
      "estrutura_03",
      "estrutura_06"
    ],
    "claims": [
      {
        "sourceTitle": "Jo Swinson — manifesto pessoalmente endossado, novembro2019, versão1.2",
        "publishedDate": "2019-11; versão1.2, dia editorial não indicado",
        "accessedDate": "2026-10-08",
        "locator": "2185–2189/2283–2301/2321–2343/2366–2381",
        "statement": "Propõe constituição federal e jurisdição/competências legislativas regionais.",
        "basis": "declaration"
      }
    ],
    "rationale": "Autonomia constitucional.",
    "uncertainty": "Unidade nacional2304–05; financiamento central compartilhado2355–65.",
    "reviewedOn": "2026-10-08"
  },
  {
    "axis": "rep",
    "position": "moderate-first",
    "confidence": "medium",
    "relatedQuestionIds": [
      "representacao_02",
      "representacao_16"
    ],
    "claims": [
      {
        "sourceTitle": "Jo Swinson — manifesto pessoalmente endossado, novembro2019, versão1.2",
        "publishedDate": "2019-11; versão1.2, dia editorial não indicado",
        "accessedDate": "2026-10-08",
        "locator": "2164–2214/2259–2262",
        "statement": "Amplia voto, representação proporcional e autoridade parlamentar/cidadã.",
        "basis": "declaration"
      }
    ],
    "rationale": "Autoridade popular.",
    "uncertainty": "Representantes profissionais permanecem; regulação de mídia2253–55.",
    "reviewedOn": "2026-10-08"
  },
  {
    "axis": "pod",
    "position": "moderate-second",
    "confidence": "medium",
    "relatedQuestionIds": [
      "poder_03",
      "poder_05"
    ],
    "claims": [
      {
        "sourceTitle": "Jo Swinson — manifesto pessoalmente endossado, novembro2019, versão1.2",
        "publishedDate": "2019-11; versão1.2, dia editorial não indicado",
        "accessedDate": "2026-10-08",
        "locator": "1976–2023/1910/1943–1946",
        "statement": "Restringe vigilância estatal e coerção civil geral.",
        "basis": "declaration"
      }
    ],
    "rationale": "Liberdades civis.",
    "uncertainty": "Polícia1881–1909, crimes de ódio2039–44 e inteligência2493–94 mantidas.",
    "reviewedOn": "2026-10-08"
  },
  {
    "axis": "dip",
    "position": "moderate-first",
    "confidence": "medium",
    "relatedQuestionIds": [
      "diplomacia_18"
    ],
    "claims": [
      {
        "sourceTitle": "Jo Swinson — manifesto pessoalmente endossado, novembro2019, versão1.2",
        "publishedDate": "2019-11; versão1.2, dia editorial não indicado",
        "accessedDate": "2026-10-08",
        "locator": "2475–2498",
        "statement": "Mantém e fortalece forças armadas/dissuasão.",
        "basis": "declaration"
      }
    ],
    "rationale": "Defesa armada.",
    "uncertainty": "Desarmamento multilateral/dissuasão mínima2495–98 e mediação2446–48.",
    "reviewedOn": "2026-10-08"
  },
  {
    "axis": "int",
    "position": "moderate-second",
    "confidence": "medium",
    "relatedQuestionIds": [
      "intervencao_07",
      "intervencao_11"
    ],
    "claims": [
      {
        "sourceTitle": "Jo Swinson — manifesto pessoalmente endossado, novembro2019, versão1.2",
        "publishedDate": "2019-11; versão1.2, dia editorial não indicado",
        "accessedDate": "2026-10-08",
        "locator": "2401–2412/2443–2455",
        "statement": "Admite intervenção humanitária com legalidade, apoio regional e êxito definido.",
        "basis": "declaration"
      }
    ],
    "rationale": "Intervenção condicionada.",
    "uncertainty": "Legalidade, apoio regional, sucesso definido; emergências dispensam voto2450–51.",
    "reviewedOn": "2026-10-08"
  },
  {
    "axis": "mor",
    "position": "moderate-first",
    "confidence": "medium",
    "relatedQuestionIds": [
      "moral_06",
      "moral_18"
    ],
    "claims": [
      {
        "sourceTitle": "Jo Swinson — manifesto pessoalmente endossado, novembro2019, versão1.2",
        "publishedDate": "2019-11; versão1.2, dia editorial não indicado",
        "accessedDate": "2026-10-08",
        "locator": "2024–2033/2045–2048/2060–2081",
        "statement": "Amplia famílias, autonomia de gênero e igualdade de papéis.",
        "basis": "declaration"
      }
    ],
    "rationale": "Normas familiares modernas.",
    "uncertainty": "Direitos de coabitação2025–26 são limitados; compromisso declarado.",
    "reviewedOn": "2026-10-08"
  },
  {
    "axis": "tec",
    "position": "moderate-first",
    "confidence": "medium",
    "relatedQuestionIds": [
      "tecnologia_02"
    ],
    "claims": [
      {
        "sourceTitle": "Jo Swinson — manifesto pessoalmente endossado, novembro2019, versão1.2",
        "publishedDate": "2019-11; versão1.2, dia editorial não indicado",
        "accessedDate": "2026-10-08",
        "locator": "368–456/1862–1867",
        "statement": "Adota inovação e tecnologia transversalmente.",
        "basis": "declaration"
      }
    ],
    "rationale": "Adoção tecnológica.",
    "uncertainty": "Ética/privacidade436–447 e ambiente366–67; sem tecnologia irrestrita.",
    "reviewedOn": "2026-10-08"
  }
];
const entry: ReferenceEntry={id:'jo-swinson',name:'Jo Swinson',aliases:['Joanne Swinson','Joanne Kate Swinson'],kind:'person',category:'public-figure',period:'Manifesto coletivo pessoalmente adotado, novembro2019 versão1.2; atividade23/06/2026',sources:publicFigureBatch20Sources,vec:Object.fromEntries(AXES.map(({key})=>[key,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{},rationale:'Federalismo, representação democrática, liberdades civis, defesa armada, intervenção condicionada, igualdade familiar e inovação.',caveats:'Revisão documental independente delimitada e julgamento Root aceitos. Prefácio próprio endossa programa coletivo, sem autoria exclusiva, implementação ou continuidade2026. Leitura seletiva, não todas98páginas. Política devolvida aplica-se conforme âmbito territorial2607–11. Estatísticas/projeções não certificadas. Cinco eixos desconhecidos sem evidência; quantidade de códigos não substitui julgamento substantivo.'};
for(const input of publicFigureBatch20Coding){const c=codeReferenceAxis(input,entry.sources);entry.vec[input.axis]=c.value;entry.evidence[input.axis]=c.evidence;entry.axisEvidence![input.axis]=c.axisEvidence;entry.coding![input.axis]=c.coding;}
export const publicFigureBatch20: ReferenceEntry[]=[entry];
export const publicFigureBatch20UnknownAxes={imi:'Diversidade/acolhimento não promovidos sem revisão cultural inteira.',eco:'Capitalismo responsável e serviços públicos preservados; composição proprietária ampla aguarda julgamento.',con:'Estratégia industrial e incentivos privados coexistem, sem direção ampla adjudicada.',com:'Mercado europeu e condições ambientais não resolvem sozinhos orientação comercial global.',rel:'Reconhecimento de casamentos não estabelece arquitetura Estado–religião inteira.'};
