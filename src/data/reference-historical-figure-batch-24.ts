import type {ReferenceEntry,ReferenceSource} from './references';
import {AXES} from '../lib/scoring';
import {codeReferenceAxis,type ReferenceAxisCoding} from '../lib/reference-coding';
/** Five absent identities; selected partial proposals await independent and Root review. */
const proposals = [
  {
    "id": "anna-julia-cooper",
    "name": "Anna Julia Cooper",
    "period": "A Voice from the South,1892; capítulos selecionados",
    "rationale": "Defende emancipação das mulheres e igualdade social entre raças, contrapondo direitos humanos gerais a preconceitos de sexo e casta.",
    "caveats": "Nascimento1858–1859 divergente: NPS37/57 dá1858, título/URL1859; morte27/2/1964 em45/83. Norma1892, não toda carreira. Preserva maternalismo213–244 e retórica depreciativa orientalista/anti-islâmica155–161; não trata história religiosa narrada como fato validado. Onze eixos desconhecidos.",
    "sources": [
      {
        "title": "Cooper — A Voice from the South,1892",
        "url": "https://www.gutenberg.org/cache/epub/61741/pg61741-images.html",
        "note": "Efetivamente lidos0–251 e572–666; metadatapub36/38, prefácio114. Capítulos selecionados apenas; não1798linhas completas. Citações de outros autores distinguidas da própria defesa."
      },
      {
        "title": "NPS — AnnaJuliaCooper, identidade",
        "url": "https://www.nps.gov/people/dr-anna-julia-cooper-1859-1964.htm",
        "note": "Efetivamente corpo19–113; nascimento37/57 e morte45/83. Divergência título1859/corpo1858 preservada. Biografia não códigos."
      }
    ],
    "claims": [
      {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Cooper — A Voice from the South,1892",
            "publishedDate": "A Voice from the South,1892; capítulos selecionados",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "600–626/650–664: emancipação, direitos humanos e preconceitos",
            "statement": "Defende emancipação feminina e igualdade social, rejeitando barreiras de sexo, raça e casta em oportunidades e reconhecimento."
          }
        ],
        "rationale": "Norma ampla associa autonomia feminina à igualdade civil e social de toda humanidade, além de um cargo ou direito eleitoral isolado.",
        "uncertainty": "Não exige associação pessoal forçada616–623; atribui à mulher função moral/maternal662/213–244. Retórica orientalista155–161 constitui limite real, não apagado pela defesa de igualdade. Não inferir posições LGBT.",
        "reviewedOn": "2026-10-08"
      }
    ]
  },
  {
    "id": "mary-church-terrell",
    "name": "Mary Church Terrell",
    "period": "What It Means to Be Colored in the Capital of the United States,10/10/1906; transcrição parcial",
    "rationale": "Critica segregação e exclusão racial de moradia, transporte, trabalho, educação e vida pública.",
    "caveats": "23/9/1863–24/7/1954,Archives51–59. Reprodução privada localizada18–41, não edição crítica integral: LOA confirma atribuição/data21–29, mas seu PDF não abriu. Relatos históricos particulares não foram verificados independentemente. Antidiscriminação racial em múltiplos espaços sociais não estabelece por si direção moral geral; doze eixos desconhecidos. Proposta MOR conservada apenas como pesquisa arquivada, sem vetor ativo.",
    "sources": [
      {
        "title": "Terrell — What It Means to Be Colored,1906, reprodução localizada",
        "url": "https://www.emersonkent.com/speeches/what_it_means_to_be_colored_in_the_capital_of_the_united_states.htm",
        "note": "Corpo efetivamente lido18–41; host anuncia fulltext15, mas não certificamos integralidade perante manuscrito/LOA. Distinguimos relato autobiográfico de inferência normativa."
      },
      {
        "title": "NationalArchives — MaryChurchTerrell, identidade",
        "url": "https://www.archives.gov/research/african-americans/individuals/mary-church-terrell",
        "note": "Efetivamente51–59: título com ambas datas51, nascimento53/morte59. Ocupação/ativismo não códigos."
      },
      {
        "title": "LibraryofAmerica — atribuição de Terrell1906",
        "url": "https://storyoftheweek.loa.org/2011/01/what-it-means-to-be-colored-in-capital.html",
        "note": "Efetivamente21–29: atribui discurso1906 e publicação anônima janeiro seguinte. PDFloa.org redirecionaS3 inacessível; conteúdo integral não lido nesta fonte."
      }
    ],
    "claims": []
  },
  {
    "id": "elizabeth-cady-stanton",
    "name": "Elizabeth Cady Stanton",
    "period": "Solitude of Self,18/1/1892; reimpressãoGPO1915",
    "rationale": "Defende autonomia, educação ampla e igualdade das mulheres na vida familiar, social, profissional e política.",
    "caveats": "12/11/1815–26/10/1902,NPS23–24. Norma1892 reproduzida de edição1915, não trajetória inteira. Referências protestantes36 e família38/59–60 permanecem; não deduzir secularismo, pacifismo ou economia da defesa de direitos individuais. Onze eixos desconhecidos.",
    "sources": [
      {
        "title": "Stanton — Solitude of Self,1892/GPO1915",
        "url": "https://www.nps.gov/wori/learn/historyculture/solitude-of-self.htm",
        "note": "Efetivamente22–96, corpo próprio35–91 inteiro; reimpressãoGPO1915 em92. Transcrição com erros aparentes, originalCongressionalRecord não cotejado."
      },
      {
        "title": "NPS — identidadeStanton na reprodução",
        "url": "https://www.nps.gov/wori/learn/historyculture/solitude-of-self.htm",
        "note": "Efetivamente nascimento23 e morte24. Não transferir a data1902 de outra biografia ao discurso explicitamente1892 neste documento."
      }
    ],
    "claims": [
      {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Stanton — Solitude of Self,1892/GPO1915",
            "publishedDate": "Solitude of Self,18/1/1892; reimpressãoGPO1915",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "36–42/54–60/69–79: indivíduo, família, formação e direitos",
            "statement": "Defende autonomia das mulheres, igualdade social, educação completa e direitos profissionais, políticos e patrimoniais sem dependência conjugal."
          }
        ],
        "rationale": "Argumento percorre papéis familiares, formação intelectual e posição social e jurídica, sustentando direção moderada de emancipação de gênero.",
        "uncertainty": "Admite deveres especiais nas relações familiares38 e descreve mãe/esposa59–60, mas rejeita currículo restrito por sexo77–79. Exemplo de prisão65–67 não estabelece programa coercivo geral; metáforas militares nãoDIP. Não posição LGBT.",
        "reviewedOn": "2026-10-08"
      }
    ]
  },
  {
    "id": "lucretia-coffin-mott",
    "name": "Lucretia Coffin Mott",
    "period": "Discourse on Woman,17/12/1849; reprodução acadêmica",
    "rationale": "Defende direitos civis, formação e casamento em igualdade, rejeitando a autoridade superior do marido.",
    "caveats": "1793–1880,NPS22. Norma1849 em reprodução acadêmica, não toda carreira. Mantém diferenças criadas por Deus1045–1048 e dignidade feminina/doméstica1060–1065; não inferir secularismo de crítica à exclusão ministerial. Onze eixos desconhecidos.",
    "sources": [
      {
        "title": "Mott — Discourse on Woman,1849",
        "url": "https://openbooks.library.umass.edu/giftsofspeech/chapter/lucretia-mott-discourse-on-woman-december-17-1849/",
        "note": "Efetivamente metadataprópria1011–1015 e corpo1016–1088 em aberturas sucessivas; restante não certificado. TrechoBeecher1052–1056 é citação, não autoria exclusiva."
      },
      {
        "title": "NPS — LucretiaMott, identidade",
        "url": "https://www.nps.gov/wori/learn/historyculture/lucretia-mott.htm",
        "note": "Corpo21–28 efetivamente lido, anos1793–1880 em22. Nenhum código derivado da descrição de militância."
      }
    ],
    "claims": [
      {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Mott — Discourse on Woman,1849",
            "publishedDate": "Discourse on Woman,17/12/1849; reprodução acadêmica",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "1025–1029/1045–1049/1060/1076–1081: relações dos sexos, direitos e matrimônio",
            "statement": "Defende remoção de desvantagens civis, sociais e religiosas das mulheres e casamento sem autoridade masculina ou promessa de obediência."
          }
        ],
        "rationale": "Conjunto alcança educação, direitos civis, atuação pública e estrutura familiar, além de voto ou cargo único.",
        "uncertainty": "Preserva distinções naturais e papel feminino1045–1048/1060; casamento reciprocamente fiel e sagrado1079–1081. Declarações bíblicas citadas não prova historiográfica. Não inferir orientação LGBT ou que liberdade de discussão1022 resolve todoPOD.",
        "reviewedOn": "2026-10-08"
      }
    ]
  },
  {
    "id": "millicent-garrett-fawcett",
    "name": "Millicent Garrett Fawcett",
    "period": "Women’s Suffrage,capítuloI; s.d., texto menciona1911",
    "rationale": "Defende igualdade entre mulheres e homens na educação, vida pública, relações familiares e padrões morais.",
    "caveats": "1847–1929,Parliament154. Data original não exibida noGutenberg; capítuloI menciona1911/lei vigente133. Não inventar ano original a partir de release2015. Aprova compromisso doméstico79 e oferece referência favorável à construção imperial125–131, sem inferirINT. Onze eixos desconhecidos.",
    "sources": [
      {
        "title": "Fawcett — Women’s Suffrage,capítuloI",
        "url": "https://www.gutenberg.org/cache/epub/48614/pg48614-images.html",
        "note": "Efetivamente0–171, capítuloI72–134 inteiro; II140–171 abertura. PoemaWordsworth35–62 e falasGodwin/Thackeray/Disraeli não autoria exclusiva. Metadata não traz ano impresso original."
      },
      {
        "title": "UKParliament — MillicentGarrettFawcett, identidade",
        "url": "https://www.parliament.uk/about/living-heritage/transformingsociety/electionsvoting/womenvote/case-studies-women-parliament/millicent-garrett-fawcett/millicent-garrett-fawcett/",
        "note": "Efetivamente corpo153–167, anos1847–1929 em154; institucional não transforma biografia em vetor."
      }
    ],
    "claims": [
      {
        "axis": "mor",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Fawcett — Women’s Suffrage,capítuloI",
            "publishedDate": "Women’s Suffrage,capítuloI; s.d., texto menciona1911",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "81–92/106–112/132–134: educação, padrão moral e direitos familiares",
            "statement": "Endossa igualdade entre sexos e critica padrões morais e direitos de guarda/divórcio que privilegiam homens, vinculando formação feminina à participação pública."
          }
        ],
        "rationale": "Avaliação própria explícita107–112 chama a desigualdade familiar injustiça e rejeita duplo padrão moral, em conjunto com educação e vida pública.",
        "uncertainty": "Reconstituição histórica inclui opiniões alheias, não todas autoria exclusiva. Preserva domesticidade79 e valorização imperial125–131. Exigir voto feminino não completaREP geral; atuar contra violência interna nãoDIP. Sem posições LGBT inferidas.",
        "reviewedOn": "2026-10-08"
      }
    ]
  }
];
export const historicalFigureBatch24:ReferenceEntry[]=proposals.map(p=>{
 const sources:ReferenceSource[]=structuredClone(p.sources);const e:ReferenceEntry={id:p.id,name:p.name,kind:'person',category:'historical-figure',period:p.period,rationale:p.rationale,caveats:p.caveats,sources,vec:Object.fromEntries(AXES.map(({key})=>[key,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{}};
 for(const raw of p.claims){const input=raw as ReferenceAxisCoding;const r=codeReferenceAxis(input,sources);e.vec[input.axis]=r.value;e.evidence[input.axis]=r.evidence;e.axisEvidence![input.axis]=r.axisEvidence;e.coding![input.axis]=r.coding;}return e;
});

/** Quarantined narrow racial-equality proposal; not active coding or axis metadata. */
export const historicalFigureBatch24TerrellResearch = [
  {
    "axis": "mor",
    "position": "moderate-first",
    "confidence": "medium",
    "claims": [
      {
        "sourceTitle": "Terrell — What It Means to Be Colored,1906, reprodução localizada",
        "publishedDate": "What It Means to Be Colored in the Capital of the United States,10/10/1906; transcrição parcial",
        "accessedDate": "2026-10-08",
        "basis": "declaration",
        "locator": "21–29/33–41: segregação social, educação e trabalho",
        "statement": "Critica exclusão racial de alojamento, refeições, transporte, profissões, educação e oportunidades, exigindo coerência com igualdade humana."
      }
    ],
    "rationale": "Conjunto expressa orientação contra hierarquia racial na vida social e civil, além de um episódio ou proteção setorial isolada.",
    "uncertainty": "Reprodução sem fac-símile cotejado; ampla série de exemplos próprios e conclusão41, não comprovação de cada ocorrido. Não deduzir liberdade civil globalPOD da prisão particular24 nem política econômica de empregos.",
    "reviewedOn": "2026-10-08"
  }
];

/** Full pre-quarantine candidate row, including its original proposed code and all sources. */
export const historicalFigureBatch24TerrellOriginalRecord = {
  "id": "mary-church-terrell",
  "name": "Mary Church Terrell",
  "period": "What It Means to Be Colored in the Capital of the United States,10/10/1906; transcrição parcial",
  "rationale": "Critica segregação e exclusão racial de moradia, transporte, trabalho, educação e vida pública.",
  "caveats": "23/9/1863–24/7/1954,Archives51–59. Reprodução privada localizada18–41, não edição crítica integral: LOA confirma atribuição/data21–29, mas seu PDF não abriu. Relatos históricos particulares não foram verificados independentemente. Onze eixos desconhecidos.",
  "sources": [
    {
      "title": "Terrell — What It Means to Be Colored,1906, reprodução localizada",
      "url": "https://www.emersonkent.com/speeches/what_it_means_to_be_colored_in_the_capital_of_the_united_states.htm",
      "note": "Corpo efetivamente lido18–41; host anuncia fulltext15, mas não certificamos integralidade perante manuscrito/LOA. Distinguimos relato autobiográfico de inferência normativa."
    },
    {
      "title": "NationalArchives — MaryChurchTerrell, identidade",
      "url": "https://www.archives.gov/research/african-americans/individuals/mary-church-terrell",
      "note": "Efetivamente51–59: título com ambas datas51, nascimento53/morte59. Ocupação/ativismo não códigos."
    },
    {
      "title": "LibraryofAmerica — atribuição de Terrell1906",
      "url": "https://storyoftheweek.loa.org/2011/01/what-it-means-to-be-colored-in-capital.html",
      "note": "Efetivamente21–29: atribui discurso1906 e publicação anônima janeiro seguinte. PDFloa.org redirecionaS3 inacessível; conteúdo integral não lido nesta fonte."
    }
  ],
  "claims": [
    {
      "axis": "mor",
      "position": "moderate-first",
      "confidence": "medium",
      "claims": [
        {
          "sourceTitle": "Terrell — What It Means to Be Colored,1906, reprodução localizada",
          "publishedDate": "What It Means to Be Colored in the Capital of the United States,10/10/1906; transcrição parcial",
          "accessedDate": "2026-10-08",
          "basis": "declaration",
          "locator": "21–29/33–41: segregação social, educação e trabalho",
          "statement": "Critica exclusão racial de alojamento, refeições, transporte, profissões, educação e oportunidades, exigindo coerência com igualdade humana."
        }
      ],
      "rationale": "Conjunto expressa orientação contra hierarquia racial na vida social e civil, além de um episódio ou proteção setorial isolada.",
      "uncertainty": "Reprodução sem fac-símile cotejado; ampla série de exemplos próprios e conclusão41, não comprovação de cada ocorrido. Não deduzir liberdade civil globalPOD da prisão particular24 nem política econômica de empregos.",
      "reviewedOn": "2026-10-08"
    }
  ]
};
