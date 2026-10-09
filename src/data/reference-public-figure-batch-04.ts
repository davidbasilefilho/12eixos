import type { ReferenceEntry, ReferenceSource } from './references';
import { AXES } from '../lib/scoring';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';
const accessedDate = '2026-10-07';
export interface PublicFigureBatch04Spec { id: string; name: string; period: string; sources: ReferenceSource[]; coding: ReferenceAxisCoding[]; caveats: string; identityReview: 'author-current-source-checked'; }
export const publicFigureBatch04Specs: PublicFigureBatch04Spec[] = [
{
  "id": "hina-jilani",
  "name": "Hina Jilani",
  "period": "2022-11-25",
  "identityReview": "author-current-source-checked",
  "sources": [
    {
      "title": "Leaders must tackle root causes of gender-based violence and ensure justice for all",
      "url": "https://theelders.org/news/leaders-must-tackle-root-causes-gender-based-violence-and-ensure-justice-all",
      "note": "Declaração primária efetivamente aberta em 7/10/2026; somente autoria nominal ou assinatura individual codificada."
    },
    {
      "title": "Hina Jilani — identidade contemporânea",
      "url": "https://theelders.org/profile/hina-jilani",
      "note": "Perfil institucional atual, distinto da declaração nominal. Aberta em 7/10/2026; identidade sem inferência de eixo."
    }
  ],
  "caveats": "Não cobre todos os costumes; não imputa a ela cada parágrafo coletivo da página. Demais eixos desconhecidos. Revisão independente de conteúdo pendente.",
  "coding": [
    {
      "axis": "mor",
      "position": "moderate-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Leaders must tackle root causes of gender-based violence and ensure justice for all",
          "publishedDate": "2022-11-25",
          "accessedDate": "2026-10-07",
          "locator": "Citação nominal de Hina Jilani, dois parágrafos após Hina Jilani said",
          "statement": "Defende autonomia corporal e acesso igual de mulheres à justiça contra discriminação patriarcal.",
          "basis": "declaration"
        }
      ],
      "rationale": "Emancipação de gênero estabelece direção reformista delimitada.",
      "uncertainty": "Não cobre todos os costumes; não imputa a ela cada parágrafo coletivo da página.",
      "reviewedOn": "2026-10-07"
    }
  ]
},
{
  "id": "ernesto-zedillo",
  "name": "Ernesto Zedillo",
  "period": "2025-05-07",
  "identityReview": "author-current-source-checked",
  "sources": [
    {
      "title": "Nuclear weapons pose a terrible danger to us all",
      "url": "https://theelders.org/news/nuclear-weapons-pose-terrible-danger-us-all",
      "note": "Declaração primária efetivamente aberta em 7/10/2026; somente autoria nominal ou assinatura individual codificada."
    },
    {
      "title": "Ernesto Zedillo — identidade contemporânea",
      "url": "https://theelders.org/profile/ernesto-zedillo",
      "note": "Perfil institucional atual dos Elders. Aberta em 7/10/2026; identidade sem inferência de eixo."
    }
  ],
  "caveats": "Política nuclear não estabelece rejeição de todas as forças armadas ou guerras. Demais eixos desconhecidos. Revisão independente de conteúdo pendente.",
  "coding": [
    {
      "axis": "dip",
      "position": "moderate-second",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Nuclear weapons pose a terrible danger to us all",
          "publishedDate": "2025-05-07",
          "accessedDate": "2026-10-07",
          "locator": "Parágrafos No First Use; four Ds; diplomatic efforts; assinatura Ernesto Zedillo",
          "statement": "Pede redução do risco nuclear, não primeiro uso e esforços diplomáticos para desarmamento.",
          "basis": "declaration"
        }
      ],
      "rationale": "Negociação e redução de armamentos sustentam direção pacífica nesse domínio.",
      "uncertainty": "Política nuclear não estabelece rejeição de todas as forças armadas ou guerras.",
      "reviewedOn": "2026-10-07"
    }
  ]
},
{
  "id": "ban-ki-moon",
  "name": "Ban Ki-moon",
  "period": "2025-12-15",
  "identityReview": "author-current-source-checked",
  "sources": [
    {
      "title": "The UN is only as strong as its 193 Member States want it to be",
      "url": "https://theelders.org/news/un-only-strong-its-193-member-states-want-it-be",
      "note": "Declaração primária efetivamente aberta em 7/10/2026; somente autoria nominal ou assinatura individual codificada."
    },
    {
      "title": "Ban Ki-moon — identidade contemporânea",
      "url": "https://theelders.org/profile/ban-ki-moon",
      "note": "Perfil atual identifica Elder Emeritus; não atribui antiga vice-presidência como atual. Aberta em 7/10/2026; identidade sem inferência de eixo."
    }
  ],
  "caveats": "Termo genérico intervir não especifica meios coercivos e não gera score int. Demais eixos desconhecidos. Revisão independente de conteúdo pendente.",
  "coding": [
    {
      "axis": "dip",
      "position": "moderate-second",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "The UN is only as strong as its 193 Member States want it to be",
          "publishedDate": "2025-12-15",
          "accessedDate": "2026-10-07",
          "locator": "Discurso: parágrafos UN leadership; more confident and active political role; mediating and settling",
          "statement": "Defende liderança política ativa da ONU na mediação e solução de crises internacionais.",
          "basis": "declaration"
        }
      ],
      "rationale": "Mediação diplomática é preferência pacífica delimitada.",
      "uncertainty": "Termo genérico intervir não especifica meios coercivos e não gera score int.",
      "reviewedOn": "2026-10-07"
    }
  ]
},
{
  "id": "zeid-raad-al-hussein",
  "name": "Zeid Ra’ad Al Hussein",
  "period": "2025-10-14",
  "identityReview": "author-current-source-checked",
  "sources": [
    {
      "title": "The UN must take the need for reform seriously",
      "url": "https://theelders.org/news/un-must-take-need-reform-seriously",
      "note": "Declaração primária efetivamente aberta em 7/10/2026; somente autoria nominal ou assinatura individual codificada."
    },
    {
      "title": "Zeid Ra’ad Al Hussein — identidade contemporânea",
      "url": "https://theelders.org/profile/zeid-raad-al-hussein",
      "note": "Perfil institucional atual. Aberta em 7/10/2026; identidade sem inferência de eixo."
    }
  ],
  "caveats": "Reforma da ONU não equivale a democracia doméstica ou pacifismo absoluto. Demais eixos desconhecidos. Revisão independente de conteúdo pendente.",
  "coding": [
    {
      "axis": "dip",
      "position": "moderate-second",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "The UN must take the need for reform seriously",
          "publishedDate": "2025-10-14",
          "accessedDate": "2026-10-07",
          "locator": "Parágrafo reinstating the Secretary-General as an independent and dynamic international mediator; assinatura",
          "statement": "Defende restaurar a função independente e dinâmica do secretário-geral como mediador internacional.",
          "basis": "declaration"
        }
      ],
      "rationale": "A preferência explícita por mediação sustenta direção diplomática.",
      "uncertainty": "Reforma da ONU não equivale a democracia doméstica ou pacifismo absoluto.",
      "reviewedOn": "2026-10-07"
    }
  ]
},
{
  "id": "lakhdar-brahimi",
  "name": "Lakhdar Brahimi",
  "period": "2021-09-07",
  "identityReview": "author-current-source-checked",
  "sources": [
    {
      "title": "The international community must act responsibly on Afghanistan",
      "url": "https://theelders.org/news/international-community-must-act-responsibly-afghanistan",
      "note": "Declaração primária efetivamente aberta em 7/10/2026; somente autoria nominal ou assinatura individual codificada."
    },
    {
      "title": "Lakhdar Brahimi — identidade contemporânea",
      "url": "https://theelders.org/profile/lakhdar-brahimi",
      "note": "Perfil atual identifica Elder Emeritus desde agosto de 2021. Aberta em 7/10/2026; identidade sem inferência de eixo."
    }
  ],
  "caveats": "Não endossa o regime nem determina todas as respostas militares possíveis. Demais eixos desconhecidos. Revisão independente de conteúdo pendente.",
  "coding": [
    {
      "axis": "dip",
      "position": "moderate-second",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "The international community must act responsibly on Afghanistan",
          "publishedDate": "2021-09-07",
          "accessedDate": "2026-10-07",
          "locator": "Parágrafos sobre representante especial da ONU em Kabul, discussão franca com Taliban e ajuda humanitária",
          "statement": "Defende diálogo diplomático com o Taliban e programas humanitários sem reconhecimento diplomático imediato.",
          "basis": "declaration"
        }
      ],
      "rationale": "Engajamento negociado sustenta direção pacífica nesse conflito.",
      "uncertainty": "Não endossa o regime nem determina todas as respostas militares possíveis.",
      "reviewedOn": "2026-10-07"
    }
  ]
},
{
  "id": "ricardo-lagos",
  "name": "Ricardo Lagos",
  "period": "2022-11-25",
  "identityReview": "author-current-source-checked",
  "sources": [
    {
      "title": "Leaders must tackle root causes of gender-based violence and ensure justice for all",
      "url": "https://theelders.org/news/leaders-must-tackle-root-causes-gender-based-violence-and-ensure-justice-all",
      "note": "Declaração primária efetivamente aberta em 7/10/2026; somente autoria nominal ou assinatura individual codificada."
    },
    {
      "title": "Ricardo Lagos — identidade contemporânea",
      "url": "https://theelders.org/profile/ricardo-lagos",
      "note": "Perfil atual identifica Elder Emeritus. Aberta em 7/10/2026; identidade sem inferência de eixo."
    }
  ],
  "caveats": "Oposição à violência isolada seria insuficiente; codifica a proposta explícita de reforma sistêmica, sem programa completo de costumes. Demais eixos desconhecidos. Revisão independente de conteúdo pendente.",
  "coding": [
    {
      "axis": "mor",
      "position": "moderate-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Leaders must tackle root causes of gender-based violence and ensure justice for all",
          "publishedDate": "2022-11-25",
          "accessedDate": "2026-10-07",
          "locator": "Citação nominal de Ricardo Lagos: segundo parágrafo Everyone in a position of authority",
          "statement": "Pede enfrentar causas sistêmicas da violência de gênero e tornar a justiça responsiva aos direitos de mulheres.",
          "basis": "declaration"
        }
      ],
      "rationale": "Reforma institucional contra subordinação de gênero fornece direção emancipatória parcial.",
      "uncertainty": "Oposição à violência isolada seria insuficiente; codifica a proposta explícita de reforma sistêmica, sem programa completo de costumes.",
      "reviewedOn": "2026-10-07"
    }
  ]
},
{
  "id": "ziauddin-yousafzai",
  "name": "Ziauddin Yousafzai",
  "period": "2019-06-05",
  "identityReview": "author-current-source-checked",
  "sources": [
    {
      "title": "Ziauddin Yousafzai — Women Deliver Conference",
      "url": "https://malala.org/news-and-voices/ziauddin-women-deliver-conference",
      "note": "Declaração primária efetivamente aberta em 7/10/2026; somente autoria nominal ou assinatura individual codificada."
    },
    {
      "title": "Ziauddin Yousafzai — identidade contemporânea",
      "url": "https://malala.org/board?sc=header",
      "note": "Página atual identifica membro do conselho U.S. e cofundador; não transfere posições de Malala. Aberta em 7/10/2026; identidade sem inferência de eixo."
    }
  ],
  "caveats": "Declaração de 2019 não certifica execução nem todos os costumes. Demais eixos desconhecidos. Revisão independente de conteúdo pendente.",
  "coding": [
    {
      "axis": "mor",
      "position": "moderate-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Ziauddin Yousafzai — Women Deliver Conference",
          "publishedDate": "2019-06-05",
          "accessedDate": "2026-10-07",
          "locator": "Discurso: trechos sobre casamento forçado, normas prejudiciais, remuneração igual e participação de mulheres na paz",
          "statement": "Contesta casamento infantil e forçado e pede igualdade salarial e participação política de mulheres.",
          "basis": "declaration"
        }
      ],
      "rationale": "Revisão de normas de gênero sustenta direção emancipatória.",
      "uncertainty": "Declaração de 2019 não certifica execução nem todos os costumes.",
      "reviewedOn": "2026-10-07"
    }
  ]
},
{
  "id": "jacinda-ardern",
  "name": "Jacinda Ardern",
  "period": "2022-05-27",
  "identityReview": "author-current-source-checked",
  "sources": [
    {
      "title": "Harvard Commencement speech: democracy, disinformation and kindness",
      "url": "https://www.beehive.govt.nz/speech/harvard-commencement-speech-democracy-disinformation-and-kindness",
      "note": "Declaração primária efetivamente aberta em 7/10/2026; somente autoria nominal ou assinatura individual codificada."
    },
    {
      "title": "Jacinda Ardern — identidade contemporânea",
      "url": "https://www.theguardian.com/world/2026/feb/26/jacinda-ardern-living-in-australia-former-nz-new-zealand-pm",
      "note": "Reportagem contemporânea com porta-voz; somente identidade pública, sem scores. Aberta em 7/10/2026; identidade sem inferência de eixo."
    }
  ],
  "caveats": "Não deriva posições de citações de terceiros nem certifica toda a prática governamental. Demais eixos desconhecidos. Revisão independente de conteúdo pendente.",
  "coding": [
    {
      "axis": "rep",
      "position": "moderate-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Harvard Commencement speech: democracy, disinformation and kindness",
          "publishedDate": "2022-05-27",
          "accessedDate": "2026-10-07",
          "locator": "Parágrafos próprios democracy gives equal voice; debate and dialogue; mixed member proportional system",
          "statement": "Defende igualdade de voz, debate democrático e representação parlamentar proporcional.",
          "basis": "declaration"
        }
      ],
      "rationale": "Representação eleitoral inclusiva sustenta direção democrática.",
      "uncertainty": "Não deriva posições de citações de terceiros nem certifica toda a prática governamental.",
      "reviewedOn": "2026-10-07"
    }
  ]
},
{
  "id": "jeremy-corbyn",
  "name": "Jeremy Corbyn",
  "period": "2022-01-10; assinatura individual; moção apresentada 6/1/2022",
  "identityReview": "author-current-source-checked",
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
    }
  ],
  "caveats": "Moção não é legislação executada nem nacionalização de toda a economia. Demais eixos desconhecidos. Revisão independente de conteúdo pendente.",
  "coding": [
    {
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
      "reviewedOn": "2026-10-07"
    }
  ]
},
{
  "id": "gro-harlem-brundtland",
  "name": "Gro Harlem Brundtland",
  "period": "2019-09-06",
  "identityReview": "author-current-source-checked",
  "sources": [
    {
      "title": "Universal health coverage is affordable, even in tough times",
      "url": "https://theelders.org/news/universal-health-coverage-affordable-even-tough-times",
      "note": "Declaração primária efetivamente aberta em 7/10/2026; somente autoria nominal ou assinatura individual codificada."
    },
    {
      "title": "Gro Harlem Brundtland — identidade contemporânea",
      "url": "https://theelders.org/profile/gro-harlem-brundtland",
      "note": "Perfil institucional atual identifica membro ativo; antigo cargo de vice-presidente não é atribuído como atual. Aberta em 7/10/2026; identidade sem inferência de eixo."
    }
  ],
  "caveats": "Financiamento não determina propriedade de todos os prestadores; não estabelece nacionalização de toda a economia ou execução do NHI. Demais eixos desconhecidos. Revisão independente de conteúdo pendente.",
  "coding": [
    {
      "axis": "eco",
      "position": "moderate-first",
      "confidence": "medium",
      "relatedQuestionIds": ["economia_04"],
      "claims": [
        {
          "sourceTitle": "Universal health coverage is affordable, even in tough times",
          "publishedDate": "2019-09-06",
          "accessedDate": "2026-10-07",
          "locator": "Artigo nominal conjunto: Establishing a publicly funded health system; Every country; South Africa, like the US, needs to make this transition",
          "statement": "Defende sistema de saúde publicamente financiado e transição do financiamento privado voluntário para financiamento público.",
          "basis": "declaration"
        }
      ],
      "rationale": "Financiamento público explícito de serviço essencial sustenta direção pública parcial.",
      "uncertainty": "Financiamento não determina propriedade de todos os prestadores; não estabelece nacionalização de toda a economia ou execução do NHI.",
      "reviewedOn": "2026-10-07"
    }
  ]
},
] ;
export const publicFigureBatch04: ReferenceEntry[] = publicFigureBatch04Specs.map(spec => {
 const entry: ReferenceEntry = { id: spec.id, name: spec.name, kind: 'person', category: 'public-figure', period: spec.period, sources: spec.sources, caveats: spec.caveats, rationale: 'Declaração primária delimitada; demais eixos desconhecidos.', vec: Object.fromEntries(AXES.map(({ key }) => [key, 50])) as ReferenceEntry['vec'], evidence: {}, axisEvidence: {}, coding: {} };
 for (const input of spec.coding) { const coded = codeReferenceAxis(input, spec.sources); entry.vec[input.axis] = coded.value; entry.evidence[input.axis] = coded.evidence; entry.axisEvidence![input.axis] = coded.axisEvidence; entry.coding![input.axis] = coded.coding; }
 return entry;
});
