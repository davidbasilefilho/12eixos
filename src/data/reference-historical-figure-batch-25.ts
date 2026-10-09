import type {ReferenceEntry,ReferenceSource} from './references';
import {AXES} from '../lib/scoring';
import {codeReferenceAxis,type ReferenceAxisCoding} from '../lib/reference-coding';
/** Five absent identities with actual own political texts; ordinal proposals remain partial. */
const proposals = [
  {
    "id": "pandita-ramabai",
    "name": "Pandita Ramabai Sarasvati",
    "period": "The High-Caste Hindu Woman,1887; VI/VII selecionados",
    "rationale": "Defende autonomia, educação e trabalho das mulheres, criticando dependência familiar e reclusão de viúvas.",
    "caveats": "1858–1922,BU4/11; apenas anos confirmados nesta revisão. Norma1887 selecionada, não todas fases posteriores. Preserva papéis maternais523, teoria pré-natal515–518 não verificada, privilégio intelectual de altas castas546 e instituições que respeitam segregação de casta567. Onze eixos desconhecidos.",
    "sources": [
      {
        "title": "Ramabai — High-Caste Hindu Woman,1887, capítulosVI/VII",
        "url": "https://scalar.lehigh.edu/literature-of-colonial-south-asia/pandita-ramabai-the-high-caste-hindu-woman-1887-full-text",
        "note": "Efetivamente484–590; inclui últimas passagensV e VI/VII507–583 inteiros.484–499 são citações de terceiros, não autoria exclusiva. Cabeçalho acadêmico identifica1887; original completo não cotejado."
      },
      {
        "title": "BostonUniversity — PanditaRamabai, identidade",
        "url": "https://www.bu.edu/missiology/ramabai-dongre-medhavi/",
        "note": "Efetivamente0–35; anos1858–1922 em4, morte seguinte ao ano1921 em11. Reimpressão autorizada de verbete1998; biografia não vetor."
      }
    ],
    "claims": [
      {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Ramabai — High-Caste Hindu Woman,1887, capítulosVI/VII",
            "publishedDate": "The High-Caste Hindu Woman,1887; VI/VII selecionados",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "500–506/509–528/532–541/554–568: novo casamento, família, educação, autonomia e trabalho",
            "statement": "Critica dependência e reclusão feminina; defende educação, formação profissional, autonomia e oportunidade de viúvas escolherem novo casamento."
          }
        ],
        "rationale": "Programa combina posição familiar, escolhas conjugais, educação e subsistência autônoma, além de um direito ou cargo isolado.",
        "uncertainty": "Maternalismo523 e superioridade intelectual das altas castas546 são limites relevantes; respeita caste-rules567 e silêncio irreverente em bibliotecas572. Não igualdade já implantada, estatísticas comprovadas ou posição LGBT.",
        "reviewedOn": "2026-10-08"
      }
    ]
  },
  {
    "id": "marcus-mosiah-garvey",
    "name": "Marcus Mosiah Garvey",
    "period": "Cartas editoriais,NegroWorld11/9/1920; reproduçãoUCLA",
    "rationale": "Propõe liderança mundial centralizada para a organização negra e combina emancipação africana com mobilização comercial da diáspora.",
    "caveats": "1887–1940,Archives52. Textos políticos efetivamente lidos, mas nenhum eixo ordinal atribuído: administração associativa não resolve federação estatalEST/REP; confronto africano149–154 convive com organização comercial sem guerra155. Relatos do agente74–136 não são declarações do autor ou fatos certificados. Doze eixos desconhecidos.",
    "sources": [
      {
        "title": "Garvey — cartas editoriais publicadas11/9/1920",
        "url": "https://www.international.ucla.edu/africa/mgpp/sample03",
        "note": "Efetivamente22–170; primeira carta29–71 coassinadaBrooks, segunda própria141–169 assinada167. Contrapontos: comando exclusivo33/66; sacrifício/combate145–154; organização econômica sem guerra155. Relatório de vigilância74–136 separado."
      },
      {
        "title": "NationalArchives — MarcusGarveyPapers, identidade",
        "url": "https://www.archives.gov/nhprc/projects/catalog/marcus-garvey",
        "note": "Efetivamente38–65; anos1887–1940 em52. Nacionalismo biográfico não resolveMOR/IMI, empreendedor não resolveECO. Fonte aponta projeto documentalUCLA. Não confundir títuloProvisionalPresident com poder estatal efetivamente exercido."
      }
    ],
    "claims": []
  },
  {
    "id": "julia-ward-howe",
    "name": "Julia Ward Howe",
    "period": "Appeal to Womanhood Throughout the World,setembro1870",
    "rationale": "Pede desarmamento e solução amigável de questões internacionais por mobilização de mulheres de diferentes países.",
    "caveats": "27/5/1819–17/10/1910,NPS37/45. Norma1870 datada, não toda carreira ou extrapolação do hino de guerra1862. Mantém fundamento cristão e maternidade5–18; reunião feminina mundial não significa soberania supranacionalINT. Onze eixos desconhecidos.",
    "sources": [
      {
        "title": "Howe — Appeal to Womanhood,1870,LOCfac-símile",
        "url": "https://tile.loc.gov/storage-services/service/rbc/rbpe/rbpe07/rbpe074/07400300/07400300.pdf",
        "note": "PDFp0 único efetivamente inteiro lido,OCR0–31; corpo5–29, assinatura/data30–31. Texto dizChristianwomen13, preservado em vez de substituir por versão popular modernizada."
      },
      {
        "title": "NPS — JuliaWardHowe, identidade",
        "url": "https://www.nps.gov/people/julia-ward-howe.htm",
        "note": "Efetivamente0–68; nascimento37/morte45. TítuloBattleHymn54 não gera orientação por analogia. Biografia reconhece preconceito racial68; nãoMOR da notoriedade sufragista."
      }
    ],
    "claims": [
      {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Howe — Appeal to Womanhood,1870,LOCfac-símile",
            "publishedDate": "Appeal to Womanhood Throughout the World,setembro1870",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "PDFp0/5–29: desarmamento e arbitragem pacífica internacional",
            "statement": "Pede desarmamento e substituição de decisões militares por entendimento e solução amigável de questões entre nacionalidades."
          }
        ],
        "rationale": "Declaração trata de desarmamento geral e relações internacionais, além de oposição a uma única batalha.",
        "uncertainty": "Apela inicialmente aChristianwomen13 e maternidade11–18; congresso feminino não autoridade governante mundial. Declaração1870 não certifica pacifismo de toda vida ou nenhuma força defensiva possível.",
        "reviewedOn": "2026-10-08"
      }
    ]
  },
  {
    "id": "ernestine-louise-rose",
    "name": "Ernestine Louise Rose",
    "period": "A Lecture on Women’s Rights,19/10/1851; edição1886 selecionada",
    "rationale": "Defende igualdade social, jurídica e familiar das mulheres e rejeita sua absorção legal pelo marido.",
    "caveats": "1810–1892,LOC820/824/1498. Seleção acadêmica do discurso1851 na edição1886, não panfleto inteiro. Preserva natureza mais complicada35 e influência moral de mãe/irmã/esposa48. Criticar superstição62–64 não estabelece legislação religiosa nacionalREL. Onze eixos desconhecidos.",
    "sources": [
      {
        "title": "Rose — LectureWomenRights1851, seleção acadêmica",
        "url": "https://womhist.binghamton.edu/awrm/doc14.htm",
        "note": "Efetivamente0–78; próprio17–64 inteiro exibido, mas contém elipses editoriais e não equivale à íntegra do panfleto. Metadata2 ediçãoMendum1886; comentários12–13 não códigos."
      },
      {
        "title": "LibraryofCongress — Rose, bibliografiaAnthony",
        "url": "https://www.loc.gov/static/research-centers/rare-book-and-special-collections/documents/AnthonyBib.pdf",
        "note": "EfetivamentePDF25/817–829 ePDF46–47/1493–1499 viafind; anos1810–1892 e edições1851/1886 distintos. Não131páginas inteiras lidas ou resumo bibliográfico como prova política."
      }
    ],
    "claims": [
      {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Rose — LectureWomenRights1851, seleção acadêmica",
            "publishedDate": "A Lecture on Women’s Rights,19/10/1851; edição1886 selecionada",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "28–48/55–57: direitos, conjugalidade, personalidade e formação",
            "statement": "Exige igualdade social e jurídica das mulheres, autonomia conjugal e desenvolvimento livre de suas capacidades, sem substituir dominação masculina por feminina."
          }
        ],
        "rationale": "Argumento abrange personalidade civil, casamento, direitos gerais e desenvolvimento individual, além de sufrágio ou profissão única.",
        "uncertainty": "Fala de natureza feminina mais complicada35 e cuidado moral48. Relatos legais históricos não verificados todos; elipses impedem declaração de integralidade. Não inferir posição LGBT ou democracia inteira da representação36.",
        "reviewedOn": "2026-10-08"
      }
    ]
  },
  {
    "id": "frances-ellen-watkins-harper",
    "name": "Frances Ellen Watkins Harper",
    "period": "Enlightened Motherhood,15/11/1892; abertura selecionada",
    "rationale": "Relaciona formação cidadã à educação familiar e valoriza casamento, responsabilidade parental e participação política após a emancipação.",
    "caveats": "1825–1911,NPS42–43. Abertura política efetivamente lida28–42, restante não exibido/reabertura rejeitada pelo servidor; doze eixos desconhecidos. Valoriza casamento rompido apenas pela morte39 e mães responsáveis por formar cidadãos31–38, mas não infere todoMOR conservador apenas dessas passagens. Não inventar demais crenças a partir de ativismo biográfico.",
    "sources": [
      {
        "title": "Harper — EnlightenedMotherhood1892, abertura própria",
        "url": "https://awpc.cattcenter.iastate.edu/2017/03/21/enlightened-motherhood-nov-15-1892/",
        "note": "Efetivamentemetadata17–24 e próprio28–42.29–30 menciona liberdade e voto masculino sem fraude/intimidação;31–42 formaçãoCristã/família. Reabertura para45 retornouRequestRejected, não novo corpo."
      },
      {
        "title": "NPS — FrancesEllenWatkinsHarperHouse, identidade",
        "url": "https://www.nps.gov/places/frances-ellen-watkins-harper-house.htm",
        "note": "Efetivamente19–46; nascimento1825 em43 e morte1911 em42. Descrição militante não código. Seleção contémnormas reais, mas infância/família isoladas não ampliadas artificialmente a12eixos."
      },
      {
        "title": "LOC — Harper EnlightenedMotherhood1892, abertura e proveniência revisadas por peer",
        "url": "https://www.loc.gov/resource/lcrbmrp.t1906/?st=brief",
        "note": "Leitura independente method_review: abertura original indexada página1 sobre franquia/commonwealth e famíliaCristã, metadata1892/data15nov/revisedcopy. Autor tentou abrir e recebeu403; não body recuperado pelo autor ou fac-símile inteiro visualmente conferido. Fonte Iowa anterior integralmente preservada; zero códigos."
      }
    ],
    "claims": []
  }
];
export const historicalFigureBatch25:ReferenceEntry[]=proposals.map(p=>{
 const sources:ReferenceSource[]=structuredClone(p.sources);const e:ReferenceEntry={id:p.id,name:p.name,kind:'person',category:'historical-figure',period:p.period,rationale:p.rationale,caveats:p.caveats,sources,vec:Object.fromEntries(AXES.map(({key})=>[key,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{}};
 for(const raw of p.claims){const input=raw as ReferenceAxisCoding;const r=codeReferenceAxis(input,sources);e.vec[input.axis]=r.value;e.evidence[input.axis]=r.evidence;e.axisEvidence![input.axis]=r.axisEvidence;e.coding![input.axis]=r.coding;}return e;
});
