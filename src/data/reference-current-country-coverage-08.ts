import type { AxisKey, ReferenceEntry, ReferenceSource } from './references';
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';
export const currentCountryCoverage08Before:ReferenceEntry = {
  "id": "senegal-current-2025",
  "kind": "country",
  "category": "country",
  "name": "Senegal",
  "period": "Instituições e políticas vigentes, 2024–2025",
  "vec": {
    "est": 50,
    "rep": 77,
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
  "rationale": "Eleição de 2024 restabeleceu transferência civil após adiamento controverso.",
  "caveats": "Descreve instituições e políticas do governo, nunca opiniões dos habitantes. Relatório anual inclui protestos e crise eleitoral. Eixos sem evidência suficiente permanecem em 50 como desconhecidos.",
  "sources": [
    {
      "title": "Constituição / documento institucional — Senegal",
      "url": "https://www.constituteproject.org/constitution/Senegal_2001",
      "note": "Fonte constitucional ou institucional para a organização formal do Estado; sustenta somente os eixos explicitamente cobertos no documento."
    },
    {
      "title": "Freedom in the World 2025 — Senegal",
      "url": "https://freedomhouse.org/country/senegal/freedom-world/2025",
      "note": "Relatório de eventos de 2024, competição política e direitos civis; avaliação independente para confrontar texto constitucional e prática."
    }
  ],
  "evidence": {
    "rep": "medium"
  },
  "axisEvidence": {
    "rep": {
      "sourceTitles": [
        "Freedom in the World 2025 — Senegal"
      ],
      "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 77."
    }
  }
};
const axes:AxisKey[]=['est','rep','pod','imi','dip','int','eco','con','com','rel','mor','tec'];
const normSource:ReferenceSource={title:'Constitution du Sénégal — republicação pelo Conseil Constitutionnel, versão anotada',url:'https://conseilconstitutionnel.sn/la-constitution/',note:'Corpo primário indexado efetivamente lido nota explicativa/1/22–24/37, com referências2016/2018 em outras cláusulas. Diretamente abriu1029linhas, reaberturas posteriores timeout; não leitura integral nem certificação de consolidação vigente2026. O próprio Conselho aponta ausência de consolidação única oficial e erros textuais.'};
const row:ReferenceAxisCoding={axis:'rel',position:'moderate-first',confidence:'medium',reviewedOn:'2026-10-08',claims:[{sourceTitle:normSource.title,locator:'1/24; contraponto22–23/37 e nota explicativa',statement:'República laica respeita todas crenças e comunidades religiosas administram autonomamente seus assuntos.',basis:'norm',publishedDate:'2001-01-22',accessedDate:'2026-10-08'}],rationale:'Laicidade geral e autonomia institucional religiosa sustentam secularismo normativo moderado neste texto constitucional.',uncertainty:'Cláusulas reproduzidas da carta2001 em edição anotada, não certificação integral de todas mudanças2026. Ordem pública limita culto24, educação religiosa reconhecida22 e escolas privadas autorizadas23 e juramento presidencial diante de Deus37. Laicidade funcional não proíbe acomodação religiosa. Não ausência absoluta de financiamento ou prática religiosa uniforme; data é promulgação original, não publicação do HTML certificada.'};
export function extendCurrentCountryCoverage08(entry:ReferenceEntry):ReferenceEntry {
 if(entry.id===currentCountryCoverage08BeninBefore.id)return extendBenin(entry);
 if(entry.id===currentCountryCoverage08CameroonBefore.id)return extendCameroon(entry);
 if(entry.id===currentCountryCoverage08MadagascarBefore.id)return extendMadagascar(entry);
 if(entry.id===currentCountryCoverage08BurkinaBefore.id)return extendBurkina(entry);
 if(entry.id!==currentCountryCoverage08Before.id||JSON.stringify(entry)!==JSON.stringify(currentCountryCoverage08Before))return entry;
 const sources=[...entry.sources,normSource];
 const coded=codeReferenceAxis(row,sources);
 const vec=Object.fromEntries(axes.map(axis=>[axis,50])) as Record<AxisKey,number>;
 vec.rel=coded.value;
 return {...entry,sources,vec,evidence:{rel:coded.evidence},axisEvidence:{rel:coded.axisEvidence},coding:{rel:coded.coding},
 period:'Eventos de prática originalmente indicados2024–2025 não recertificados; norma religiosa da carta22/01/2001 na versão anotada do Conselho consultada08/10/2026',
 rationale:'A norma constitucional geral de laicidade e autonomia religiosa é localizada; a antiga estimativa eleitoral sem codificação permanece no arquivo integral anterior.',
 caveats:'Perfil parcial, um eixo normativo. Avaliações anteriores preservadas para consulta documental; as fontes anteriores permanecem disponíveis. Os demais eixos não têm evidência revisada suficiente. Não opiniões dos habitantes nem consolidação/prática2026 auditadas. Ordem pública, educação religiosa e juramento presidencial diante de Deus37 são contrapontos expressos.',
 documentaryReview:{status:'accepted-bounded-primary-and-identity',independentReview:'accepted',reviewedOn:'2026-10-08',scope:'Autor leu1/22–24/37 e advertência; revisor leu nota/1/22–24/37 indexados, não carta integral/prática. Root aceitaREL60 funcional com juramento religioso.'},
 unknownAxisReasons:Object.fromEntries(axes.filter(axis=>axis!=='rel').map(axis=>[axis,'As passagens revistas não sustentam avaliação deste eixo. Fontes e avaliações anteriores preservadas para consulta documental.']))
 } as ReferenceEntry;
}
export const currentCountryCoverage08Audit={existingIdentities:5,newIdentities:0,candidateCodedAxes:3,unknownAxes:57,eligibleCandidates:0,independentReview:'accepted'} as const;

export const currentCountryCoverage08BeninBefore:ReferenceEntry = {
  "id": "benin-current-2025",
  "kind": "country",
  "category": "country",
  "name": "Benim",
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
    "rel": 85,
    "mor": 50,
    "tec": 50
  },
  "rationale": "A carta estabelece uma república unitária e laica; a pontuação democrática reflete eleições e liberdades com limitações documentadas.",
  "caveats": "O registro compara algumas características institucionais do Estado, nunca crenças de seus habitantes. Os demais eixos ficam em 50 por falta de evidência específica neste recorte; este perfil tem cobertura inferior a seis eixos e deve permanecer fora do ranking até revisão documental mais ampla.",
  "sources": [
    {
      "title": "Constituição do Benim (1990)",
      "url": "https://www.constituteproject.org/constitution/Benin_1990?lang=en",
      "note": "Texto constitucional reproduzido em tradução pelo Comparative Constitutions Project; fonte para a forma territorial do Estado e a cláusula religiosa."
    },
    {
      "title": "Freedom in the World 2025 — Benim",
      "url": "https://freedomhouse.org/country/benin/freedom-world/2025",
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
        "Constituição do Benim (1990)"
      ],
      "rationale": "A constituição define a estrutura territorial como unitária; a nota editorial aproxima esse desenho do polo correspondente, sem afirmar que o texto mede autonomia praticada."
    },
    "rep": {
      "sourceTitles": [
        "Freedom in the World 2025 — Benim"
      ],
      "rationale": "A classificação narrativa de direitos políticos e liberdades civis como “Partly Free” fundamenta somente um intervalo amplo (85, 55 ou 15), não uma pontuação psicométrica nem os outros eixos."
    },
    "rel": {
      "sourceTitles": [
        "Constituição do Benim (1990)"
      ],
      "rationale": "A cláusula constitucional caracteriza o Estado como secular ou sem religião oficial; o valor descreve a norma estatal, não a religiosidade da população."
    }
  }
};
const beninSource:ReferenceSource={title:'Cour constitutionnelleBénin — DCC25-22017/7/2025, PDF officiel',url:'https://courconstitutionnelle.bj/files/decisions/DCC25-220_17_juillet_2025.pdf',note:'PDF officiel7p texte OCR effectivement ouvert/lus corps et dispositif; décision interprète laïcité constitutionnelle et admet soutienVodunDays comme devoir culturel. Pas constitution consolidée17/12/2025, dontPDF non lu; ne pas certifier toutes règles2026.'};
function extendBenin(entry:ReferenceEntry):ReferenceEntry {
 if(JSON.stringify(entry)!==JSON.stringify(currentCountryCoverage08BeninBefore))return entry;
 const sources=[...entry.sources,beninSource];
 const row:ReferenceAxisCoding={axis:'rel',position:'moderate-first',confidence:'medium',reviewedOn:'2026-10-08',claims:[{sourceTitle:beninSource.title,locator:'pp3–4, Sur la violation du principe de laïcité; dispositif1p6',statement:'Tribunal exige neutralidade e independência gerais entre Estado e confissões, admitindo apoio cultural ao VodunDays.',basis:'norm',publishedDate:'2025-07-17',accessedDate:'2026-10-08'}],rationale:'Interpretação constitucional geral de neutralidade institucional sustenta secularismo normativo moderado.',uncertainty:'Apoio estatal ao evento com dimensão cultual/cultural é julgado conforme ao dever cultural10; neutralidade não proíbe financiamento e dia religioso pago não foi julgado no mérito, por incompetência de legalidade. Decisão17/7/2025 antes reforma17/12; não integral consolidação2026 ou implementação neutra de toda prática.'};
 const coded=codeReferenceAxis(row,sources);
 const vec=Object.fromEntries(axes.map(axis=>[axis,50])) as Record<AxisKey,number>;vec.rel=coded.value;
 return {...entry,sources,vec,evidence:{rel:coded.evidence},axisEvidence:{rel:coded.axisEvidence},coding:{rel:coded.coding},period:'Interpretação constitucionalDCC25-220 de17/07/2025; não certificação integral após reforma17/12/2025 ou prática2026',rationale:'Neutralidade constitucional religiosa é localizada em decisão oficial, com autorização de apoio estatal cultural explícita.',caveats:'Perfil parcial de um eixo. Avaliações anteriores preservadas para consulta documental e fontes anteriores mantidas. A relação entre Estado e religião foi revisada a partir de decisão efetivamente lida; os demais eixos permanecem sem evidência suficiente. Norma judicial2025 não todo comportamento estatal2026.',documentaryReview:{status:'accepted-bounded-primary-and-identity',independentReview:'accepted',reviewedOn:'2026-10-08',scope:'Autor leu corpoOCR oficial7p e dispositivo; revisor recuperou somente p3 judicial de neutralidade/independência, não p4/dispositivo; direto timeout/shell403. Root aceitou claim limitado; leitura mais ampla continua atribuída ao autor.'},unknownAxisReasons:Object.fromEntries(axes.filter(axis=>axis!=='rel').map(axis=>[axis,'As passagens judiciais revistas não sustentam avaliação deste eixo. Avaliações anteriores preservadas para consulta documental.']))} as ReferenceEntry;
}

export const currentCountryCoverage08CameroonBefore:ReferenceEntry = {
  "id": "cameroon-current-2025",
  "kind": "country",
  "category": "country",
  "name": "Camarões",
  "period": "Instituições e políticas avaliadas, 2024–2025",
  "vec": {
    "est": 30,
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
  "rationale": "A constituição declara um Estado unitário descentralizado e secular; a concentração executiva e as restrições cívicas reduzem a competição.",
  "caveats": "O registro compara algumas características institucionais do Estado, nunca crenças de seus habitantes. Os demais eixos ficam em 50 por falta de evidência específica neste recorte; este perfil tem cobertura inferior a seis eixos e deve permanecer fora do ranking até revisão documental mais ampla.",
  "sources": [
    {
      "title": "Constituição de Camarões",
      "url": "https://www.constituteproject.org/constitution/Cameroon_1972?lang=en",
      "note": "Texto constitucional reproduzido em tradução pelo Comparative Constitutions Project; fonte para a forma territorial do Estado e a cláusula religiosa."
    },
    {
      "title": "Freedom in the World 2025 — Camarões",
      "url": "https://freedomhouse.org/country/cameroon/freedom-world/2025",
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
        "Constituição de Camarões"
      ],
      "rationale": "A constituição define a estrutura territorial como unitária com descentralização; a nota editorial aproxima esse desenho do polo correspondente, sem afirmar que o texto mede autonomia praticada."
    },
    "rep": {
      "sourceTitles": [
        "Freedom in the World 2025 — Camarões"
      ],
      "rationale": "A classificação narrativa de direitos políticos e liberdades civis como “Not Free” fundamenta somente um intervalo amplo (85, 55 ou 15), não uma pontuação psicométrica nem os outros eixos."
    },
    "rel": {
      "sourceTitles": [
        "Constituição de Camarões"
      ],
      "rationale": "A cláusula constitucional caracteriza o Estado como secular ou sem religião oficial; o valor descreve a norma estatal, não a religiosidade da população."
    }
  }
};

export const currentCountryCoverage08MadagascarBefore:ReferenceEntry = {
  "id": "madagascar-current-2025",
  "kind": "country",
  "category": "country",
  "name": "Madagascar",
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
    "rel": 85,
    "mor": 50,
    "tec": 50
  },
  "rationale": "A constituição define república unitária e secular; eleições são competitivas, mas liberdades e capacidade do governo enfrentam restrições.",
  "caveats": "O registro compara algumas características institucionais do Estado, nunca crenças de seus habitantes. Os demais eixos ficam em 50 por falta de evidência específica neste recorte; este perfil tem cobertura inferior a seis eixos e deve permanecer fora do ranking até revisão documental mais ampla.",
  "sources": [
    {
      "title": "Constituição de Madagascar (2010)",
      "url": "https://www.constituteproject.org/constitution/Madagascar_2010?lang=en",
      "note": "Texto constitucional reproduzido em tradução pelo Comparative Constitutions Project; fonte para a forma territorial do Estado e a cláusula religiosa."
    },
    {
      "title": "Freedom in the World 2025 — Madagascar",
      "url": "https://freedomhouse.org/country/madagascar/freedom-world/2025",
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
        "Constituição de Madagascar (2010)"
      ],
      "rationale": "A constituição define a estrutura territorial como unitária; a nota editorial aproxima esse desenho do polo correspondente, sem afirmar que o texto mede autonomia praticada."
    },
    "rep": {
      "sourceTitles": [
        "Freedom in the World 2025 — Madagascar"
      ],
      "rationale": "A classificação narrativa de direitos políticos e liberdades civis como “Partly Free” fundamenta somente um intervalo amplo (85, 55 ou 15), não uma pontuação psicométrica nem os outros eixos."
    },
    "rel": {
      "sourceTitles": [
        "Constituição de Madagascar (2010)"
      ],
      "rationale": "A cláusula constitucional caracteriza o Estado como secular ou sem religião oficial; o valor descreve a norma estatal, não a religiosidade da população."
    }
  }
};

const cameroonNorm:ReferenceSource={title:'Camarões — constituição republicadaMJP, atualização2026',url:'https://mjp.univ-perp.fr/constit/cm2008.htm',note:'Corpo indexado: introdução de versão2026, preâmbulo e1–13 efetivamente lidos; nomeURL2008 não indica edição atual. Não carta integral ou fac-símile. Lei2026 cotejada separadamente, artigos5/6/7/10/53/66 alterados; preâmbulo/1 não constam da lista.'};
const cameroonAmendment:ReferenceSource={title:'PrésidenceCameroun — lei2026/002 de14/04/2026, PDF oficial',url:'https://www.prc.cm/files/46/ed/95/3a411d638294c6467ca56bd0423c61fd.pdf',note:'TextoOCR das cinco páginas efetivamente lido: artigo1 enumera e reproduz alterações5/6/7/10/53/66; artigo2 publicação urgente. Data corroborada pelo catálogo presidencial, pois cabeçalhoOCR é garbado. Cotejo de versão, não fonte autônoma de laicidade ou certificação visual de assinatura.'};
function extendCameroon(entry:ReferenceEntry):ReferenceEntry {
 if(JSON.stringify(entry)!==JSON.stringify(currentCountryCoverage08CameroonBefore))return entry;
 const sources=[...entry.sources,cameroonNorm,cameroonAmendment];
 const row:ReferenceAxisCoding={axis:'rel',position:'moderate-first',confidence:'medium',reviewedOn:'2026-10-08',claims:[{sourceTitle:cameroonNorm.title,locator:'Preâmbulo, laicidade/neutralidade/independência;1(2); introdução2026',statement:'Norma geral garante neutralidade e independência estatal diante de todas religiões e livre culto.',basis:'norm',publishedDate:'2026-04-14',accessedDate:'2026-10-08'}],rationale:'Neutralidade institucional geral expressa sustenta secularismo normativo moderado.',uncertainty:'Data marca reforma incorporada, não criação desta cláusula religiosa ou publicação certificada do HTML. Crenças sujeitas à ordem pública e bons costumes; não ausência absoluta de financiamento ou implementação religiosa neutra. Lei2026 altera5/6/7/10/53/66, não preâmbulo/1; só passagens declaradas lidas.'};
 const coded=codeReferenceAxis(row,sources);
 const vec=Object.fromEntries(axes.map(axis=>[axis,50])) as Record<AxisKey,number>;vec.rel=coded.value;
 return {...entry,sources,vec,evidence:{rel:coded.evidence},axisEvidence:{rel:coded.axisEvidence},coding:{rel:coded.coding},period:'Norma constitucional religiosa na republicação atualizada14/04/2026; sem média de prática2024–2026',rationale:'Laicidade geral localizada em versão que incorpora a reforma2026; estimativas anteriores permanecem arquivadas integralmente.',caveats:'Um eixo normativo. Avaliações anteriores preservadas para consulta documental e fontes anteriores mantidas. Os demais eixos permanecem sem evidência revisada suficiente. Ordem pública/bons costumes são contrapontos; não certificação de prática ou integralidade do texto.',documentaryReview:{status:'accepted-bounded-primary-and-identity',independentReview:'accepted',reviewedOn:'2026-10-08',scope:'Autor leu preâmbulo/1–13 e introduçãoMJP indexados e textoOCR cinco páginas da lei oficial2026; revisor leu header2026/pre/1–13 indexados, não consolidação inteira ou novoPDF integral.'},unknownAxisReasons:Object.fromEntries(axes.filter(axis=>axis!=='rel').map(axis=>[axis,'Sem evidência política suficiente para avaliar este eixo no recorte. Avaliações anteriores preservadas para consulta documental.']))} as ReferenceEntry;
}
const madagascar2025:ReferenceSource={title:'MadagascarHCC — decisão10/D3 de14/10/2025',url:'https://www.hcc.gov.mg/?p=9647',note:'Corpo completo e dispositivo efetivamente lidos. Vacâncias civis, autoridade militar para exercício presidencial, continuidade dos demais órgãos e convite a eleição60dias. Alegações do requerente não confundidas com conclusões da Corte; não prova de eleição executada.'};
const madagascar2026:ReferenceSource={title:'MadagascarHCC — decisão05/D3 de26/02/2026',url:'https://www.hcc.gov.mg/?p=9838',note:'Corpo completo efetivamente lido anteriormente; reabertura direta timeout, recuperação indexada completa novamente lida. Controle obrigatório de lei submetida pelo Presidente da Refondação após aprovação nas duas câmaras; decisão recusa lei genética por imprecisão. Uma decisão não mede liberdade geral.'};
function extendMadagascar(entry:ReferenceEntry):ReferenceEntry {
 if(JSON.stringify(entry)!==JSON.stringify(currentCountryCoverage08MadagascarBefore))return entry;
 return {...entry,sources:[...entry.sources,madagascar2025,madagascar2026],vec:Object.fromEntries(axes.map(axis=>[axis,50])) as Record<AxisKey,number>,evidence:{},axisEvidence:{},coding:{},period:'Decisões institucionais14/10/2025 e26/02/2026; execução posterior não auditada',rationale:'Em outubro2025 a Corte atribui exercício presidencial à autoridade militar após vacâncias civis, mantendo os demais órgãos. Em fevereiro2026 exerce controle obrigatório de lei aprovada pelas duas câmaras e submetida pelo Presidente da Refondação, declarando-a inconstitucional.',caveats:'Descrição política qualitativa fundada em duas decisões, sem score ou média de direitos. Convite eleitoral60dias não prova eleição realizada. Continuidade constitucional não certifica todos artigos2010 vigentes ou prática democrática; recusa de uma lei não fundamenta POD geral. Avaliações anteriores preservadas para consulta documental; fontes anteriores mantidas.',documentaryReview:{status:'accepted-bounded-primary-and-identity',independentReview:'accepted',reviewedOn:'2026-10-08',scope:'Autor e revisor leram corpos completos9647/9838 indexados; Root aceita apenas descrição institucional qualitativa, não direção geral de eixo ou execução posterior.'},unknownAxisReasons:Object.fromEntries(axes.map(axis=>[axis,'A descrição institucional datada não sustenta direção geral deste eixo. Avaliações anteriores preservadas para consulta documental.']))} as ReferenceEntry;
}

export const currentCountryCoverage08BurkinaBefore:ReferenceEntry = {
  "id": "burkina-faso-current-2025",
  "kind": "country",
  "category": "country",
  "name": "Burkina Faso",
  "period": "Instituições e políticas avaliadas, 2024–2025",
  "vec": {
    "est": 50,
    "rep": 15,
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
  "rationale": "A carta constitucional anterior foi suspensa após os golpes; a avaliação de direitos descreve o período, mas não pontuamos estrutura e religião com base em texto que deixou de reger a transição.",
  "caveats": "O registro compara algumas características institucionais do Estado, nunca crenças de seus habitantes. Os demais eixos ficam em 50 por falta de evidência específica neste recorte; este perfil tem cobertura inferior a seis eixos e deve permanecer fora do ranking até revisão documental mais ampla.",
  "sources": [
    {
      "title": "Constituição de Burkina Faso (2015)",
      "url": "https://www.constituteproject.org/constitution/Burkina_Faso_2015?lang=en",
      "note": "Texto constitucional reproduzido em tradução pelo Comparative Constitutions Project; fonte para a forma territorial do Estado e a cláusula religiosa."
    },
    {
      "title": "Freedom in the World 2025 — Burkina Faso",
      "url": "https://freedomhouse.org/country/burkina-faso/freedom-world/2025",
      "note": "Avaliação anual de direitos políticos e liberdades civis para 2024; usada apenas como orientação categórica, não como medição dos demais eixos."
    }
  ],
  "evidence": {
    "rep": "medium"
  },
  "axisEvidence": {
    "rep": {
      "sourceTitles": [
        "Freedom in the World 2025 — Burkina Faso"
      ],
      "rationale": "A classificação narrativa de direitos políticos e liberdades civis como “Not Free” fundamenta somente um intervalo amplo (85, 55 ou 15), não uma pontuação psicométrica nem os outros eixos."
    }
  }
};

const burkina2026:ReferenceSource={title:'BurkinaFaso — Assembleia, recomposição de mandatos31/07/2026',url:'https://www.an.bf/826',note:'Corpo institucional completo efetivamente lido. Relata designação de vinte membros, validação de dezoito presentes, encerramento de mandatos partidários13/04 e redistribuição de doze lugares. Referência à carta1/04/2026 não equivale a leitura do corpo integral dessa carta; linguagem promocional não adotada como julgamento.'};
function extendBurkina(entry:ReferenceEntry):ReferenceEntry {
 if(JSON.stringify(entry)!==JSON.stringify(currentCountryCoverage08BurkinaBefore))return entry;
 return {...entry,sources:[...entry.sources,burkina2026],vec:Object.fromEntries(axes.map(axis=>[axis,50])) as Record<AxisKey,number>,evidence:{},axisEvidence:{},coding:{},period:'Recomposição parlamentar relatada31/07/2026; não consolidação integral da carta2026',rationale:'Assembleia relata encerramento dos mandatos de representantes partidários em abril2026 e redistribuição dos doze lugares entre regiões, pessoas designadas pelo chefe de Estado e sociedade civil; em julho valida dezoito dos vinte membros designados.',caveats:'Descrição institucional parcial de prática relatada pelo próprio Parlamento, sem score geral de competição ou direitos. Carta2026 não lida integralmente; vinte designados não equivalem a vinte mandatos validados naquela sessão. Avaliações anteriores preservadas para consulta documental; fontes anteriores mantidas. Não há evidência suficiente para pontuar os eixos neste recorte. Não inferir totalidade do sistema de uma sessão ou linguagem promocional oficial.',documentaryReview:{status:'accepted-bounded-primary-and-identity',independentReview:'accepted',reviewedOn:'2026-10-08',scope:'Autor leu corpo do comunicado31/07/2026; revisor leu direto131–141. Root aceita descrição institucional limitada, sem score geral ou carta integral2026.'},unknownAxisReasons:Object.fromEntries(axes.map(axis=>[axis,'A descrição parcial de recomposição parlamentar não sustenta orientação geral deste eixo. Avaliações anteriores preservadas para consulta documental.']))} as ReferenceEntry;
}
