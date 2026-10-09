import type {AxisKey,ReferenceEntry,ReferenceSource} from './references';
import {codeReferenceAxis,type ReferenceAxisCoding} from '../lib/reference-coding';
const axes:AxisKey[]=['est','rep','pod','imi','dip','int','eco','con','com','rel','mor','tec'];
const reviewedOn='2026-10-08';
export const currentCountryCoverage10Before:ReferenceEntry[] = [
  {
    "id": "ethiopia-current-2025",
    "kind": "country",
    "category": "country",
    "name": "Etiópia",
    "period": "Instituições e políticas vigentes, 2024–2025",
    "vec": {
      "est": 78,
      "rep": 39,
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
    "rationale": "Constituição institui federação étnica, enquanto conflitos e restrições limitam a competição.",
    "caveats": "Descreve instituições e políticas do governo, nunca opiniões dos habitantes. Prática recente diverge dos direitos escritos e agrega conflitos diversos. Eixos sem evidência suficiente permanecem em 50 como desconhecidos.",
    "sources": [
      {
        "title": "Constituição / documento institucional — Etiópia",
        "url": "https://www.constituteproject.org/constitution/Ethiopia_1994",
        "note": "Fonte constitucional ou institucional para a organização formal do Estado; sustenta somente os eixos explicitamente cobertos no documento."
      },
      {
        "title": "Freedom in the World 2025 — Etiópia",
        "url": "https://freedomhouse.org/country/ethiopia/freedom-world/2025",
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
          "Constituição / documento institucional — Etiópia"
        ],
        "rationale": "A carta constitucional descreve a distribuição territorial de poder, sustentando a posição federal/descentralizada codificada."
      },
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — Etiópia"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 39."
      }
    }
  },
  {
    "id": "uganda-current-2025",
    "kind": "country",
    "category": "country",
    "name": "Uganda",
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
    "rationale": "A república unitária secular conserva eleições, porém restrições à oposição, à imprensa e à sociedade civil tornam a competição desigual.",
    "caveats": "O registro compara algumas características institucionais do Estado, nunca crenças de seus habitantes. Os demais eixos ficam em 50 por falta de evidência específica neste recorte; este perfil tem cobertura inferior a seis eixos e deve permanecer fora do ranking até revisão documental mais ampla.",
    "sources": [
      {
        "title": "Constituição de Uganda (1995)",
        "url": "https://www.constituteproject.org/constitution/Uganda_1995?lang=en",
        "note": "Texto constitucional reproduzido em tradução pelo Comparative Constitutions Project; fonte para a forma territorial do Estado e a cláusula religiosa."
      },
      {
        "title": "Freedom in the World 2025 — Uganda",
        "url": "https://freedomhouse.org/country/uganda/freedom-world/2025",
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
          "Constituição de Uganda (1995)"
        ],
        "rationale": "A constituição define a estrutura territorial como unitária; a nota editorial aproxima esse desenho do polo correspondente, sem afirmar que o texto mede autonomia praticada."
      },
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — Uganda"
        ],
        "rationale": "A classificação narrativa de direitos políticos e liberdades civis como “Not Free” fundamenta somente um intervalo amplo (85, 55 ou 15), não uma pontuação psicométrica nem os outros eixos."
      },
      "rel": {
        "sourceTitles": [
          "Constituição de Uganda (1995)"
        ],
        "rationale": "A cláusula constitucional caracteriza o Estado como secular ou sem religião oficial; o valor descreve a norma estatal, não a religiosidade da população."
      }
    }
  },
  {
    "id": "rwanda-current-2025",
    "kind": "country",
    "category": "country",
    "name": "Ruanda",
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
    "rationale": "A república unitária secular tem eleições regulares, mas competição política e liberdades civis são severamente restringidas.",
    "caveats": "O registro compara algumas características institucionais do Estado, nunca crenças de seus habitantes. Os demais eixos ficam em 50 por falta de evidência específica neste recorte; este perfil tem cobertura inferior a seis eixos e deve permanecer fora do ranking até revisão documental mais ampla.",
    "sources": [
      {
        "title": "Constituição de Ruanda (2003)",
        "url": "https://www.constituteproject.org/constitution/Rwanda_2003?lang=en",
        "note": "Texto constitucional reproduzido em tradução pelo Comparative Constitutions Project; fonte para a forma territorial do Estado e a cláusula religiosa."
      },
      {
        "title": "Freedom in the World 2025 — Ruanda",
        "url": "https://freedomhouse.org/country/rwanda/freedom-world/2025",
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
          "Constituição de Ruanda (2003)"
        ],
        "rationale": "A constituição define a estrutura territorial como unitária; a nota editorial aproxima esse desenho do polo correspondente, sem afirmar que o texto mede autonomia praticada."
      },
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — Ruanda"
        ],
        "rationale": "A classificação narrativa de direitos políticos e liberdades civis como “Not Free” fundamenta somente um intervalo amplo (85, 55 ou 15), não uma pontuação psicométrica nem os outros eixos."
      },
      "rel": {
        "sourceTitles": [
          "Constituição de Ruanda (2003)"
        ],
        "rationale": "A cláusula constitucional caracteriza o Estado como secular ou sem religião oficial; o valor descreve a norma estatal, não a religiosidade da população."
      }
    }
  },
  {
    "id": "malawi-current-2025",
    "kind": "country",
    "category": "country",
    "name": "Maláui",
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
    "rationale": "A constituição estabelece república unitária sem religião estatal; eleições competitivas e alternância sustentam a classificação, com dificuldades de governança.",
    "caveats": "O registro compara algumas características institucionais do Estado, nunca crenças de seus habitantes. Os demais eixos ficam em 50 por falta de evidência específica neste recorte; este perfil tem cobertura inferior a seis eixos e deve permanecer fora do ranking até revisão documental mais ampla.",
    "sources": [
      {
        "title": "Constituição do Maláui (1994)",
        "url": "https://www.constituteproject.org/constitution/Malawi_1994?lang=en",
        "note": "Texto constitucional reproduzido em tradução pelo Comparative Constitutions Project; fonte para a forma territorial do Estado e a cláusula religiosa."
      },
      {
        "title": "Freedom in the World 2025 — Maláui",
        "url": "https://freedomhouse.org/country/malawi/freedom-world/2025",
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
          "Constituição do Maláui (1994)"
        ],
        "rationale": "A constituição define a estrutura territorial como unitária; a nota editorial aproxima esse desenho do polo correspondente, sem afirmar que o texto mede autonomia praticada."
      },
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — Maláui"
        ],
        "rationale": "A classificação narrativa de direitos políticos e liberdades civis como “Partly Free” fundamenta somente um intervalo amplo (85, 55 ou 15), não uma pontuação psicométrica nem os outros eixos."
      },
      "rel": {
        "sourceTitles": [
          "Constituição do Maláui (1994)"
        ],
        "rationale": "A cláusula constitucional caracteriza o Estado como secular ou sem religião oficial; o valor descreve a norma estatal, não a religiosidade da população."
      }
    }
  },
  {
    "id": "botswana-current-2025",
    "kind": "country",
    "category": "country",
    "name": "Botsuana",
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
    "rationale": "A constituição estabelece uma república unitária sem religião oficial; eleições competitivas e liberdades civis sustentam o perfil democrático.",
    "caveats": "O registro compara algumas características institucionais do Estado, nunca crenças de seus habitantes. Os demais eixos ficam em 50 por falta de evidência específica neste recorte; este perfil tem cobertura inferior a seis eixos e deve permanecer fora do ranking até revisão documental mais ampla.",
    "sources": [
      {
        "title": "Constituição de Botsuana",
        "url": "https://www.constituteproject.org/constitution/Botswana_1966?lang=en",
        "note": "Texto constitucional reproduzido em tradução pelo Comparative Constitutions Project; fonte para a forma territorial do Estado e a cláusula religiosa."
      },
      {
        "title": "Freedom in the World 2025 — Botsuana",
        "url": "https://freedomhouse.org/country/botswana/freedom-world/2025",
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
          "Constituição de Botsuana"
        ],
        "rationale": "A constituição define a estrutura territorial como unitária; a nota editorial aproxima esse desenho do polo correspondente, sem afirmar que o texto mede autonomia praticada."
      },
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — Botsuana"
        ],
        "rationale": "A classificação narrativa de direitos políticos e liberdades civis como “Free” fundamenta somente um intervalo amplo (85, 55 ou 15), não uma pontuação psicométrica nem os outros eixos."
      },
      "rel": {
        "sourceTitles": [
          "Constituição de Botsuana"
        ],
        "rationale": "A cláusula constitucional caracteriza o Estado como secular ou sem religião oficial; o valor descreve a norma estatal, não a religiosidade da população."
      }
    }
  }
];

const source=(title:string,url:string,note:string):ReferenceSource=>({title,url,note});
const et=source('Etiópia — Gazette constitucional1/1995, texto inglês paralelo','https://justice.gov.et/wp-content/uploads/2025/02/%E1%8A%A0%E1%8B%8B%E1%8C%85-%E1%89%81%E1%8C%A5%E1%88%AD-1-1987.pdf','PDF oficial38p aberto; header/p0 e inglês11p3,34(4–5)p10,78(5)p28 efetivamente lidos. Gazette21/08/1995, adoção8/12/1994 e vigência21/08/1995 distintos. Sem certificação linguísticaamárica ou todas mudanças/prática2026. Upload2025 não data da norma.');
const ug=source('UgandaULII — constituição, versão31/12/2023','https://ulii.org/en/akn/ug/act/statute/1995/constitution/eng%402023-12-31','RepublicaçãoLaws.Africa/ULII de revisãoLawReformCommission31/12/2023, não scanGazette. Corpo indexado header/preâmbulo/objetivosIII/XVIII/5–9/29–40 e juramentos efetivamente lidos; direto403. Adoção22/09/1995 e vigência8/10/1995 distintos. Sem afirmação de leitura integral ou prática2026.');
const rw=source('RuandaRLRC — Gazette especial04/08/2023, República4','https://www.rlrc.gov.rw/fileadmin/user_upload/RLRC/Laws_of_Rwanda_v2/Domestic_laws/Laws_in_force/1._Fundamental/1.1._National_Instruments/1.1.1._Constitution/1.1.1.1._Constitution_of_the_Rep._of_Rwanda_2023.pdf','Corpo primário completo4(1–2) indexado efetivamente lido, em inglês paralelo; direto403. Não fac-símile inteiro nem certificaçãoKinyarwanda. VersãoGazette04/08/2023, não simplesmente corpo2015.');
const rwCounter=source('RuandaRGB — Gazette especial04/08/2023,37/41/176','https://www.rgb.rw/fileadmin/user_upload/RGB/Publications/LAWS_AND_REGULATIONS/THE_CONSTITUTION_OF_THE_REPUBLIC_OF_RWANDA.pdf','PDF149p inicialmente abriu metadados, reabertura/find falharamInternalError/timeout; corpos primários37(1–2),41 completos e176/assinaturas indexados efetivamente lidos. Apenas essas passagens, não149p inteiras. Vigência por promulgação/publicação176; assinatura4/08/2023.');
const rwPractice=source('RuandaRGB — registro e supervisão de organizações religiosas','https://www.rgb.rw/1/civil-society-faith-based-and-political-organisations/faith-based-organisations','Corpo institucional oferecido efetivamente lido: registro/personificação obrigatório, fiscalização/suspensão/revogação e requisitos administrativos. Página sem data de atualização comprovada, consultada8/10/2026; remete constituição2003/2015 anterior à Gazette2023. Contraponto administrativo declarado, não auditoria de execução nem norma nova2023.');
const mw=source('MalawiMinistérioJustiça — constituição consolidada até lei38/1998','https://justice.gov.mw/sites/default/files/2021-06/Malawi%20Constitution.pdf','PDF93p abriu; header lista alterações1994/1995/1997/38de1998. Autor leu direto1–13 e corpos indexados31–39/44(1–5) completos selecionados. Upload2021 não versão consolidada2021. Curl403 não produziu scanlocal. Não versão integral vigente2026.');
const bw=source('BotswanaParlamento — constituição, consciência11','https://parliament.gov.bw/images/constitution.pdf','Corpo primário inteiro11(1–5) indexado efetivamente lido; PDF direto timeout. CopyrightGovernmentBotswana visível, data da consolidação não comprovada. Data de indexação não tratada como publicação. Sem certificação do PDF inteiro ou de todas alterações2026.');
type Proposal={id:string,sources:ReferenceSource[],period:string,rationale:string,caveats:string,scope:string,row?:ReferenceAxisCoding};
const rel=(s:ReferenceSource,date:string,locator:string,statement:string,uncertainty:string):ReferenceAxisCoding=>({axis:'rel',position:'moderate-first',confidence:'medium',reviewedOn,claims:[{sourceTitle:s.title,publishedDate:date,accessedDate:reviewedOn,locator,statement,basis:'norm'}],rationale:'Princípio constitucional geral de separação religiosa ou não adoção de religião estatal sustenta orientação institucional moderadamente secular no recorte documental.',uncertainty});
const proposals:Proposal[]=[
{id:'ethiopia-current-2025',sources:[et],period:'Norma religiosa original vigente21/08/1995; não consolidação integral ou prática2026',rationale:'Constituição separa Estado e religião e veda religião estatal e interferência recíproca, mantendo reconhecimento de casamento/foro religioso consentido.',caveats:'Só desenho normativo inglês1995, não crenças dos habitantes, prática federal/regional ou todas alterações2026.',scope:'Autor leu inglês11/34(4–5)/78(5) e headerGazette direto; revisor leu diretamente11/27/34/78 selecionados. Root aceita norma limitada, não PDF inteiro ou prática2026.',row:rel(et,'1995-08-21','11(1–3),p3; contrapontos34(4–5),p10;78(5),p28','Estado e religião são separados; inexiste religião estatal e é vedada interferência recíproca.','Casamentos religiosos/customários podem ser reconhecidos34(4); questões pessoais/familiares podem ser julgadas conforme religião/costume com consentimento34(5). Tribunais religiosos/customários federais e estaduais podem ser reconhecidos/reorganizados78(5). Não secularismo absoluto ou prática2026 certificada.')},
{id:'uganda-current-2025',sources:[ug],period:'Norma religiosa1995 na versão31/12/2023; não prática/consolidação integral2026',rationale:'Carta proíbe adoção de religião estatal, permitindo manifestação religiosa compatível com a Constituição e escolas religiosas sob padrões nacionais.',caveats:'Recorte normativo de republicação jurídica2023. PreâmbuloFORGODANDMYCOUNTRY e juramentos divinos têm contraponto explícito; juramentos oferecem afirmação solene alternativa.',scope:'Autor leu7/29(1)(c)/XVIII(iii)/preâmbulo/juramentos indexados; direto403. Revisor leu header2023/preâmbulo/III/XVIII/7/29 completos indexados; juramentos permanecem autorais, sem nova leitura independente alegada. Root aceitou norma limitada.',row:rel(ug,'2023-12-31','7;29(1)(c); contrapontosobjetivoXVIII(iii),preâmbulo/quartoanexo','Uganda não adotará religião estatal; toda pessoa pode praticar e manifestar religião de modo compatível com a Constituição.','Instituições religiosas podem operar educação conforme política geral/padrões nacionaisXVIII(iii); preâmbulo invoca Deus e juramentos oferecem Deus OU afirmação solene. Não negar toda cooperação/financiamento público ou impor juramento teísta obrigatório; prática2026 não medida.')},
{id:'rwanda-current-2025',sources:[rw,rwCounter,rwPractice],period:'Norma religiosa na Gazette04/08/2023; contraponto administrativoRGB consultado8/10/2026',rationale:'Constituição caracteriza República secular e garante consciência/religião, subordinando exercício a leis; órgão público descreve registro e supervisão das entidades religiosas.',caveats:'Norma2023 com contraponto administrativo declarado sem data documental; não liberdade religiosa irrestrita ou execução auditada2026. Leitura inglesa selecionada, não certificação linguística ou todas149p.',scope:'Autor leu4(1–2)RLRC/37(1–2)/41/176RGB indexados e página administrativa; RLRC403, RGBreabertura timeout. Revisor leu4/37(1–2)/41 completos indexados e página administrativa inteira; wording2015 desta separado da norma2023. Root aceitou norma limitada.',row:rel(rw,'2023-08-04','4(1–2); contrapontos37(1–2)/41 emRGB','República ruandesa é constitucionalmente secular.','37garante crença/culto de acordo com lei e pune propaganda discriminatória/divisionista;41limita por direitos alheios/moral pública/ordem/bem-estar. RGB declara registro/personificação e supervisão/suspensão/revogação das entidades, não execução auditada nem ausência de intervenção administrativa. Sem prática2026 generalizada.')},
{id:'malawi-current-2025',sources:[mw],period:'Garantias constitucionais na consolidação até38/1998; sem todas alterações2026 verificadas',rationale:'Texto constitucional protege associação, consciência, opinião, expressão, imprensa e reunião pacífica; informação é sujeita a lei parlamentar e restrições legais de direitos devem respeitar condições constitucionais.',caveats:'Descrição qualitativa de garantias31–39/44, sem scorePOD ou inferência geral de separaçãoEstado/religião só da consciência33. Art44(1) protege núcleo inderrogável,44(2–3) permite restrições legais razoáveis necessárias e não destrutivas do conteúdo essencial;44(5) permite limitar escolha profissional quando serviço é estatal. Não corpo/prática2026 ou análise inteira de emergência45.',scope:'Autor leu diretoheader/1–13 e31–39/44(1–5) indexados; curl403. Revisor leu31–39/44 completos indexados. Root aceita descrição qualitativa1998, não toda norma/prática2026.'},
{id:'botswana-current-2025',sources:[bw],period:'Garantias de consciência11 na republicação parlamentar consultada8/10/2026; consolidação sem data comprovada',rationale:'Texto constitucional protege consciência, mudança e manifestação religiosa, instituições educativas confessionais próprias e recusa de juramento contrário à crença.',caveats:'Descrição qualitativa de11(1–5), sem scoreREL por inferência de ausência de religião estatal. Escolas próprias às expensas das comunidades11(2); participação escolar diversa exige consentimento próprio/guardião11(3);11(5) admite limites de defesa/segurança/ordem/moral/saúde e direitos de terceiros, sujeitos a justificação democrática. Sem versão atual2026 integral ou efeitos praticados.',scope:'Autor e revisor leram11(1–5) inteiro indexado; direto autor timeout. Data da consolidação não comprovada. Root aceita descrição qualitativa com limite de versão explícito.'}
];
export function extendCurrentCountryCoverage10(entry:ReferenceEntry):ReferenceEntry {
 const before=currentCountryCoverage10Before.find(old=>old.id===entry.id),proposal=proposals.find(p=>p.id===entry.id);
 if(!before||!proposal||JSON.stringify(entry)!==JSON.stringify(before))return entry;
 const sources=[...entry.sources,...proposal.sources];
 const result={...entry,sources,period:proposal.period,rationale:proposal.rationale,caveats:proposal.caveats+' Avaliações anteriores preservadas para consulta documental e fontes anteriores mantidas. Eixos sem evidência revisada suficiente permanecem sem avaliação. Perfil parcial fora do ranking.',vec:Object.fromEntries(axes.map(axis=>[axis,50])) as Record<AxisKey,number>,evidence:{},axisEvidence:{},coding:{},documentaryReview:{status:'accepted-bounded-primary-and-identity',independentReview:'accepted',reviewedOn,scope:proposal.scope},unknownAxisReasons:{}} as ReferenceEntry & {unknownAxisReasons:Partial<Record<AxisKey,string>>};
 if(proposal.row){const coded=codeReferenceAxis(proposal.row,sources);result.vec.rel=coded.value;result.evidence.rel=coded.evidence;result.axisEvidence!.rel=coded.axisEvidence;result.coding!.rel=coded.coding;}
 for(const axis of axes)if(!result.coding![axis])result.unknownAxisReasons[axis]='Este recorte não sustenta avaliação geral deste eixo. Fontes e avaliações anteriores preservadas para consulta documental.';
 return result;
}
export const currentCountryCoverage10Audit={existingIdentities:5,newIdentities:0,candidateCodedAxes:3,qualitativeProfiles:2,unknownAxes:57,eligibleCandidates:0,independentReview:'accepted'} as const;
