import type {AxisKey,ReferenceEntry,ReferenceSource} from './references';
import {codeReferenceAxis,type ReferenceAxisCoding} from '../lib/reference-coding';
const axes:AxisKey[]=['est','rep','pod','imi','dip','int','eco','con','com','rel','mor','tec'];
const reviewedOn='2026-10-08';
export const currentCountryCoverage11Before:ReferenceEntry[] = [
  {
    "id": "angola-current-2025",
    "kind": "country",
    "category": "country",
    "name": "Angola",
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
    "rationale": "A ordem constitucional é unitária e reconhece liberdade religiosa; a competição política e liberdades civis permanecem limitadas.",
    "caveats": "O registro compara algumas características institucionais do Estado, nunca crenças de seus habitantes. Os demais eixos ficam em 50 por falta de evidência específica neste recorte; este perfil tem cobertura inferior a seis eixos e deve permanecer fora do ranking até revisão documental mais ampla.",
    "sources": [
      {
        "title": "Constituição da República de Angola",
        "url": "https://www.constituteproject.org/constitution/Angola_2010?lang=en",
        "note": "Texto constitucional reproduzido em tradução pelo Comparative Constitutions Project; fonte para a forma territorial do Estado e a cláusula religiosa."
      },
      {
        "title": "Freedom in the World 2025 — Angola",
        "url": "https://freedomhouse.org/country/angola/freedom-world/2025",
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
          "Constituição da República de Angola"
        ],
        "rationale": "A constituição define a estrutura territorial como unitária; a nota editorial aproxima esse desenho do polo correspondente, sem afirmar que o texto mede autonomia praticada."
      },
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — Angola"
        ],
        "rationale": "A classificação narrativa de direitos políticos e liberdades civis como “Not Free” fundamenta somente um intervalo amplo (85, 55 ou 15), não uma pontuação psicométrica nem os outros eixos."
      },
      "rel": {
        "sourceTitles": [
          "Constituição da República de Angola"
        ],
        "rationale": "A cláusula constitucional caracteriza o Estado como secular ou sem religião oficial; o valor descreve a norma estatal, não a religiosidade da população."
      }
    }
  },
  {
    "id": "mozambique-current-2025",
    "kind": "country",
    "category": "country",
    "name": "Moçambique",
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
    "rationale": "A república unitária secular prevê eleições competitivas; violência insurgente, disputas eleitorais e restrições a liberdades afetam a prática.",
    "caveats": "O registro compara algumas características institucionais do Estado, nunca crenças de seus habitantes. Os demais eixos ficam em 50 por falta de evidência específica neste recorte; este perfil tem cobertura inferior a seis eixos e deve permanecer fora do ranking até revisão documental mais ampla.",
    "sources": [
      {
        "title": "Constituição de Moçambique (2004)",
        "url": "https://www.constituteproject.org/constitution/Mozambique_2004?lang=en",
        "note": "Texto constitucional reproduzido em tradução pelo Comparative Constitutions Project; fonte para a forma territorial do Estado e a cláusula religiosa."
      },
      {
        "title": "Freedom in the World 2025 — Moçambique",
        "url": "https://freedomhouse.org/country/mozambique/freedom-world/2025",
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
          "Constituição de Moçambique (2004)"
        ],
        "rationale": "A constituição define a estrutura territorial como unitária; a nota editorial aproxima esse desenho do polo correspondente, sem afirmar que o texto mede autonomia praticada."
      },
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — Moçambique"
        ],
        "rationale": "A classificação narrativa de direitos políticos e liberdades civis como “Partly Free” fundamenta somente um intervalo amplo (85, 55 ou 15), não uma pontuação psicométrica nem os outros eixos."
      },
      "rel": {
        "sourceTitles": [
          "Constituição de Moçambique (2004)"
        ],
        "rationale": "A cláusula constitucional caracteriza o Estado como secular ou sem religião oficial; o valor descreve a norma estatal, não a religiosidade da população."
      }
    }
  },
  {
    "id": "namibia-current-2025",
    "kind": "country",
    "category": "country",
    "name": "Namíbia",
    "period": "Instituições e políticas avaliadas, 2024–2025",
    "vec": {
      "est": 15,
      "rep": 85,
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
    "rationale": "A constituição define república unitária secular e direitos abrangentes; eleições competitivas coexistem com longa predominância partidária.",
    "caveats": "O registro compara algumas características institucionais do Estado, nunca crenças de seus habitantes. Os demais eixos ficam em 50 por falta de evidência específica neste recorte; este perfil tem cobertura inferior a seis eixos e deve permanecer fora do ranking até revisão documental mais ampla.",
    "sources": [
      {
        "title": "Constituição da Namíbia (1990)",
        "url": "https://www.constituteproject.org/constitution/Namibia_1990?lang=en",
        "note": "Texto constitucional reproduzido em tradução pelo Comparative Constitutions Project; fonte para a forma territorial do Estado e a cláusula religiosa."
      },
      {
        "title": "Freedom in the World 2025 — Namíbia",
        "url": "https://freedomhouse.org/country/namibia/freedom-world/2025",
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
          "Constituição da Namíbia (1990)"
        ],
        "rationale": "A constituição define a estrutura territorial como unitária; a nota editorial aproxima esse desenho do polo correspondente, sem afirmar que o texto mede autonomia praticada."
      },
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — Namíbia"
        ],
        "rationale": "A classificação narrativa de direitos políticos e liberdades civis como “Free” fundamenta somente um intervalo amplo (85, 55 ou 15), não uma pontuação psicométrica nem os outros eixos."
      },
      "rel": {
        "sourceTitles": [
          "Constituição da Namíbia (1990)"
        ],
        "rationale": "A cláusula constitucional caracteriza o Estado como secular ou sem religião oficial; o valor descreve a norma estatal, não a religiosidade da população."
      }
    }
  },
  {
    "id": "mauritius-current-2025",
    "kind": "country",
    "category": "country",
    "name": "Maurício",
    "period": "Instituições e políticas avaliadas, 2024–2025",
    "vec": {
      "est": 15,
      "rep": 85,
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
    "rationale": "A república parlamentar unitária protege liberdade religiosa e competição eleitoral; o perfil constitucional não resume as diferenças sociais da população.",
    "caveats": "O registro compara algumas características institucionais do Estado, nunca crenças de seus habitantes. Os demais eixos ficam em 50 por falta de evidência específica neste recorte; este perfil tem cobertura inferior a seis eixos e deve permanecer fora do ranking até revisão documental mais ampla.",
    "sources": [
      {
        "title": "Constituição das Ilhas Maurício",
        "url": "https://www.constituteproject.org/constitution/Mauritius_1968?lang=en",
        "note": "Texto constitucional reproduzido em tradução pelo Comparative Constitutions Project; fonte para a forma territorial do Estado e a cláusula religiosa."
      },
      {
        "title": "Freedom in the World 2025 — Maurício",
        "url": "https://freedomhouse.org/country/mauritius/freedom-world/2025",
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
          "Constituição das Ilhas Maurício"
        ],
        "rationale": "A constituição define a estrutura territorial como unitária; a nota editorial aproxima esse desenho do polo correspondente, sem afirmar que o texto mede autonomia praticada."
      },
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — Maurício"
        ],
        "rationale": "A classificação narrativa de direitos políticos e liberdades civis como “Free” fundamenta somente um intervalo amplo (85, 55 ou 15), não uma pontuação psicométrica nem os outros eixos."
      },
      "rel": {
        "sourceTitles": [
          "Constituição das Ilhas Maurício"
        ],
        "rationale": "A cláusula constitucional caracteriza o Estado como secular ou sem religião oficial; o valor descreve a norma estatal, não a religiosidade da população."
      }
    }
  },
  {
    "id": "gambia-current-2025",
    "kind": "country",
    "category": "country",
    "name": "Gâmbia",
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
    "rationale": "A constituição estabelece uma república unitária e liberdade de culto; a abertura eleitoral após 2017 é real, com instituições ainda frágeis.",
    "caveats": "O registro compara algumas características institucionais do Estado, nunca crenças de seus habitantes. Os demais eixos ficam em 50 por falta de evidência específica neste recorte; este perfil tem cobertura inferior a seis eixos e deve permanecer fora do ranking até revisão documental mais ampla.",
    "sources": [
      {
        "title": "Constituição da Gâmbia",
        "url": "https://www.constituteproject.org/constitution/Gambia_1996?lang=en",
        "note": "Texto constitucional reproduzido em tradução pelo Comparative Constitutions Project; fonte para a forma territorial do Estado e a cláusula religiosa."
      },
      {
        "title": "Freedom in the World 2025 — Gâmbia",
        "url": "https://freedomhouse.org/country/gambia/freedom-world/2025",
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
          "Constituição da Gâmbia"
        ],
        "rationale": "A constituição define a estrutura territorial como unitária; a nota editorial aproxima esse desenho do polo correspondente, sem afirmar que o texto mede autonomia praticada."
      },
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — Gâmbia"
        ],
        "rationale": "A classificação narrativa de direitos políticos e liberdades civis como “Partly Free” fundamenta somente um intervalo amplo (85, 55 ou 15), não uma pontuação psicométrica nem os outros eixos."
      },
      "rel": {
        "sourceTitles": [
          "Constituição da Gâmbia"
        ],
        "rationale": "A cláusula constitucional caracteriza o Estado como secular ou sem religião oficial; o valor descreve a norma estatal, não a religiosidade da população."
      }
    }
  }
];

const source=(title:string,url:string,note:string):ReferenceSource=>({title,url,note});
const ao=source('AngolaAssembleia — Constituição2010 republicada após revisão2021','https://portaladmin.parlamento.ao/storage/dropzone/image/2023_08_01/20230801_134612_CONSTITUI%C3%87%C3%83O%20DA%20REP%C3%9ABLICA%20DE%20ANGOLA%202010%20%28Rep%C3%BAblica%C3%A7%C3%A3o%29.pdf','PDF164p abriu; capa/ficha/lei18/21 primeiros três recortes diretos lidos: republicaçãoart4daLei18/21 de16/08/2021, ediçãoAssembleiaNacional/deposito2021. Art1/10(1–3) completos indexados efetivamente lidos; reabertura/findfalhouInternalError. Não164p integral ou todas mudanças/prática2026. Nome2010 do arquivo não omite revisão2021.');
const mz=source('MoçambiqueAssembleia — Constituição, republicação institucional','https://www.parlamento.mz/wp-content/uploads/2022/08/Constittuicao_Republica.pdf','PDF144p aberto; preâmbulo/1–22 direto e12(1–4) indexado efetivamente lidos. Disposições300/311/313 e assinaturas finais lidas: texto incorpora desenho descentralizado/elections2018–2024, mas data editorial não comprovada; último campo promulgação2014 contradiz aprovação2004 e Chissano e não foi corrigido por palpite. Upload2022 não data da norma. Cotejo independente de12(1–4)/13/14/15(1) no arquivo oficial ALTERNATIVO LegislaçãoBásica.pdf, rodapép16Assembleia; sem comprovar mesma edição ou texto144p inteiro. Não versão integral2026 nem comprovação de eleições distritais executadas.');
const na=source('NamíbiaMissãoONU — Constituição, República1','https://www.un.int/namibia/namibia/chapter-1-republic','Corpo1(1–6)/2/3 completo oferecido indexado efetivamente lido; diretoInternalError. Republicação institucional de normas constitucionais sem data editorial comprovada. Define Estado secular e território inclusiveWalvisBay, não certifica efeito de todas emendas2026.');
const naCounter=source('NamíbiaMissãoONU — direitos fundamentais, capítulo3','https://www.un.int/namibia/namibia/chapter-3-fundamental-human-rights-and-freedoms','Corpo oferecido5–25 indexado efetivamente lido, destaque19/20/21/22/24. Liberdade religiosa21(1)(c) com limites legais21(2), cultura19direitosalheios/interesse nacional;21religião inderrogável24(3). Algumas alíneas/17 truncados/formatados na republicação não recertificados. Sem data editorial ou prática2026 integral.');
const mu=source('MaurícioNHRC — divisão de direitos humanos, atribuições institucionais','https://nhrc.govmu.org/nhrc/human-rights-division/','Corpo inteiro oferecido efetivamente lido: função de investigar queixas de violações constitucionais por agentes públicos segundolei1998 e revisão de condenação por novasprovas após mudança2013. Página sem atualização datada comprovada; consulta8/10/2026. Relato institucional, não texto integral da lei/Constituição ou prova de resolução de casos.');
const muIdentity=source('MaurícioNHRC — Constituição republicada,1–3','https://nhrc.govmu.org/Documents/Legislation/THE%20CONSTITUTION%201968%20%281%29.pdf','Corpo1–3 completo indexado efetivamente lido: República soberana, supremacia e garantiaslimitadasinteresse público.1indicaemenda48/1991. Consolidação sem data editorial comprovada, não simplesoriginalmonárquico1968. OutroPDFAssembleiafilenameupdated2025abriu131pheader mas corpo não recuperado; não fonte numérica. Divergência11(2) em exemplaresAttorneyGeneral/Treasury não resolvida, não usar paraimputarREL.');
const gm=source('GâmbiaAssembleia — Constituição1997, reimpressão2002','https://www.assembly.gm/wp-content/uploads/2021/12/CONSTITUTION-OF-THE-GAMBIA-1997.pdf','Capa1997/reprinted2002 epreâmbulo/1(1–2)/2–3 completos oferecidos indexados efetivamente lidos, diretoInternalError.1secReligSecularRepublic tem anotação6/2001, não atribuirredação aooriginal1997. Preâmbulo invocaDeus e elogia mudança1994; relato político declaratório não democracia praticada. Não todas emendas2026.');
const gmInstitution=source('GâmbiaAssembleia — identificação institucional e documentos atuais','https://assembly.gm/index.php','Corpo oferecido efetivamente lido: identifica Assembleia unicameral/RepúblicaGâmbia e1997como lei suprema oferecida. Calendário mostra até12/10/2026 como inprogress antes dessa data e não serve como prova de sessão efetivamenterealizada. Apenas descrição institucional, não relatório de execução ou rejeição legal de todosprojetos2020/2024.');
type Proposal={id:string,sources:ReferenceSource[],period:string,rationale:string,caveats:string,scope:string,row?:ReferenceAxisCoding};
const rel=(s:ReferenceSource,date:string,locator:string,statement:string,uncertainty:string):ReferenceAxisCoding=>({axis:'rel',position:'moderate-first',confidence:'medium',reviewedOn,claims:[{sourceTitle:s.title,publishedDate:date,accessedDate:reviewedOn,locator,statement,basis:'norm'}],rationale:'Princípio constitucional geral de separação religiosa ou secularidade estatal sustenta orientação institucional moderadamente secular no recorte documental.',uncertainty});
const proposals:Proposal[]=[
{id:'angola-current-2025',sources:[ao],period:'Norma religiosa na republicação constitucional após revisão16/08/2021; sem prática2026 inferida',rationale:'Constituição define separação entre Estado e igrejas, reconhece confissões e protege lugares de culto mediante respeito à Constituição, lei e ordem pública.',caveats:'Camada normativa republicada2021 de carta2010, não média de prática2024–2026. Proteção/cooperação religiosas permanecem expressas, sem secularismo absoluto ou opinião dos habitantes.',scope:'Autor leu header/revisão2021 direto e1/10 completos indexados. Cotejo independente concluído nas passagens selecionadas; não prática histórica ou toda consolidação2026.',row:rel(ao,'2021-08-16','10(1–3),p25;1,p21; capa/revisãoLei18/21','Estado angolano é laico, com separação entre Estado e igrejas nos termos da lei.','10(2–3) reconhece/protege confissões e objetos/lugares de culto sob Constituição/leis/ordem pública. Republicação2021, não todas alterações ou prática2026; proteção não implica religião estatal nem inexistência de cooperação.')},
{id:'mozambique-current-2025',sources:[mz],period:'Cláusulas constitucionais da republicação parlamentar consultada8/10/2026; data da consolidação não comprovada',rationale:'Texto institucional separa Estado e confissões religiosas, preservando liberdade legal de organização/culto e valorização estatal das suas atividades sociais.',caveats:'Edição parlamentar incorpora reformas territoriais posteriores ao fundador2004, sem data editorial única comprovada. Campo final2014 conflitante com aprovação2004 não corrigido por inferência. Não todas alterações2026 ou execução eleitoral/neutralidade religiosa medida.',scope:'Autor leu direto1–22,300/311/313/assinaturas e12completo indexado. Cotejo independente concluído nas passagens selecionadas; não prática histórica ou toda consolidação2026.',row:rel(mz,'Aprovação2004; data editorial da consolidação não comprovada','12(1–4),p16;1/6; edição final313','República é laica e a laicidade assenta na separação entre Estado e confissões religiosas.','12(3) sujeita organização/culto às leis;12(4) reconhece/valoriza atuação religiosa na paz/unidade/bem-estar/desenvolvimento. Data editorial não certificada e terminalpromulgação2014 conflitante; não inferir prática2026 ou separar toda cooperação pública.')},
{id:'namibia-current-2025',sources:[na,naCounter],period:'Cláusulas constitucionais na republicação institucional sem data editorial comprovada; consulta8/10/2026',rationale:'Constituição caracteriza República secular e protege manifestação religiosa, com limites legais de segurança, ordem, moralidade e direitos alheios.',caveats:'Camada normativa institucional, não mensuração de crenças ou prática2026. Provisão educacional pública e escolas privadas não são inferidas como orientação econômica; formatação defeituosa de outros artigos não recertificada.',scope:'Autor leu capítulos1/3 oferecidos indexados, diretocap1InternalError. Cotejo independente concluído nas passagens selecionadas; não prática histórica ou toda consolidação2026.',row:rel(na,'Republicação institucional sem data editorial; consulta2026-10-08','1(1–6); contraponto21(1)(c)/21(2),19/24(3) emcap3','República namibiana é constitucionalmente secular.','21liberdade religiosa é limitada por leis razoáveis necessárias relativas à soberania/segurança/ordem/decência/moral e direitos;19interesse nacional/direitosalheios.24(3) proíbe derrogar religião21(1)(c). Sem data editorial ou efeito2026 integral comprovados; não ausência de toda participação religiosa.')},
{id:'mauritius-current-2025',sources:[mu,muIdentity],period:'Normas e atribuições institucionais republicadas pelaNHRC; consulta8/10/2026, sem consolidação integral datada',rationale:'Constituição republicada define República soberana e supremacia constitucional. Comissão nacional relata competência de investigar queixas de direitos contra agentes públicos e encaminhar novas provas de condenação à SupremaCorte.',caveats:'Descrição institucional e jurídica parcial, sem scoreREP/POD/REL. Competência declarada não prova resultado de queixas ou revisão executada; datas1998/2013 são referências do relato, não leis integrais novamente lidas. Consolidação sem data comprovada; não transformar filenameupdated2025 de outra cópia em certificado de vigência.',scope:'Autor leu NHRCbodyinteiro e1–3constituiçãoindexados. Cotejo independente concluído nas passagens selecionadas; não prática histórica ou toda consolidação2026.'},
{id:'gambia-current-2025',sources:[gm,gmInstitution],period:'Normas na reimpressão2002 da carta1997; identificação parlamentar consultada8/10/2026',rationale:'Reimpressão constitucional define República soberana secular e soberania popular. Assembleia se identifica como legislatura unicameral e oferece a carta1997 como lei suprema.',caveats:'Descrição normativa/institucional parcial, sem scoreREL/REP ou promessa constitucional convertida em prática. Secularidade1anotaemenda6/2001; preâmbuloDeus e endosso1994mantidos como limites discursivos. Documento2002 não todas emendas2026 e calendário futuro inconsistente não prova sessões executadas.',scope:'Autor leu header/preâmbulo/1–3 indexados e página institucional oferecida. PDFdiretoInternalError. Revisor leu fim do preâmbulo/1(1–2)anotação6/2001/2/3(1); cabeçalho2002 continua autor-only. Cotejo independente concluído nas passagens selecionadas; não prática histórica ou toda consolidação2026.'}
];
export function extendCurrentCountryCoverage11(entry:ReferenceEntry):ReferenceEntry {
 const before=currentCountryCoverage11Before.find(old=>old.id===entry.id),proposal=proposals.find(p=>p.id===entry.id);
 if(!before||!proposal||JSON.stringify(entry)!==JSON.stringify(before))return entry;
 const sources=[...entry.sources,...proposal.sources];
 const result={...entry,sources,period:proposal.period,rationale:proposal.rationale,caveats:proposal.caveats+' Avaliações anteriores preservadas para consulta documental e fontes anteriores mantidas. Eixos sem evidência revisada suficiente permanecem sem avaliação. Perfil parcial fora do ranking.',vec:Object.fromEntries(axes.map(axis=>[axis,50])) as Record<AxisKey,number>,evidence:{},axisEvidence:{},coding:{},documentaryReview:{status:'accepted-bounded-primary-and-identity',independentReview:'accepted-bounded-claims',reviewedOn,scope:proposal.scope},unknownAxisReasons:{}} as ReferenceEntry & {unknownAxisReasons:Partial<Record<AxisKey,string>>};
 if(proposal.row){const coded=codeReferenceAxis(proposal.row,sources);result.vec.rel=coded.value;result.evidence.rel=coded.evidence;result.axisEvidence!.rel=coded.axisEvidence;result.coding!.rel=coded.coding;}
 for(const axis of axes)if(!result.coding![axis])result.unknownAxisReasons[axis]='Este recorte não sustenta avaliação geral deste eixo. Fontes e avaliações anteriores preservadas para consulta documental.';
 return result;
}
export const currentCountryCoverage11Audit={existingIdentities:5,newIdentities:0,candidateCodedAxes:3,qualitativeProfiles:2,unknownAxes:57,eligibleCandidates:0,independentReview:'accepted-bounded-claims'} as const;
