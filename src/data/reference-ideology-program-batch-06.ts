import type { ReferenceEntry } from './references';

/** Accepted normative definition and bounded nearest contrast; accepted integrated programmes; no numeric axis claims. */
export const ideologyProgramBatch06: ReferenceEntry[] = [
  {
    "id": "ideology-program-panarchy-de-puydt-1860",
    "name": "Panarquia: jurisdições pessoais concorrentes de De Puydt, 1860",
    "category": "ideology",
    "kind": "ideology",
    "period": "Panarchie, Revue Trimestrielle, julho de 1860; reprodução francesa",
    "vec": {
      "est": 50,
      "rep": 50,
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
    "evidence": {},
    "axisEvidence": {},
    "coding": {},
    "rationale": "Defende escolha pessoal entre governos coexistentes, inclusive de regimes diferentes. Nenhum eixo numérico é presumido.",
    "caveats": "Definição normativa localizada, sem eixos codificados e sem elegibilidade. Contratos podem ter duração anual, grupos sem orçamento precisam escolher governo viável e regimes teocráticos ou autocráticos podem ser escolhidos. Previsões de paz e eficiência não são resultados verificados. Contraste de funções permitidas com Molinari não certifica independência de toda variante anarcocapitalista.",
    "sources": [
      {
        "title": "Panarchie — Paul-Émile de Puydt, original-language reproduction, 1860",
        "url": "https://www.panarchy.org/depuydt/1860.fr.html",
        "note": "Actual French author body111–274 read, separate from host/editorial metadata. Personally chosen jurisdiction168/175/233/264; permissible theocracy/despotism191/216 and subsidies/protection221–223; annual commitment252 and underfunded minorities188–189 counter. Original journal identified by host85–87, not facsimile verified."
      }
    ]
  },
  {
    "id": "ideology-program-socialist-self-management-tito-1950",
    "name": "Autogestão socialista: programa produtivo de Tito, 1950",
    "category": "ideology",
    "kind": "ideology",
    "period": "Discurso à Assembleia Federal, 26 de junho de 1950; panfleto de Belgrado 1950, transcrição inglesa 2006",
    "vec": {
      "est": 50,
      "rep": 50,
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
    "evidence": {},
    "axisEvidence": {},
    "coding": {},
    "rationale": "Defende gestão produtiva por conselhos operários, com plano geral e transferência gradual de funções estatais.",
    "caveats": "Definição política normativa localizada; nenhum eixo numérico é transferido do perfil legado e o exemplar permanece sem elegibilidade. Normas não são resultados históricos verificados. Regulamentos dependem da associação econômica superior OU órgão estatal competente; planejamento geral e educação sob liderança do Partido permanecem. Voto secreto fabril não estabelece pluralismo político geral. Diferença de autoridade produtiva com GIK é delimitada, não prova independência de todas as tradições de conselhos.",
    "sources": [
      {
        "title": "Workers Manage Factories in Yugoslavia — Josip Broz Tito, speech 26 June 1950",
        "url": "https://www.marxists.org/archive/tito/1950/06/26.htm",
        "note": "Full author speech12–192 actually read, excluding modern editorial notes196–197. Defended bill12–15; gradual State-function transfer89–105/131–134; elected councils173, approval by higher association OR State176, plans177–178, social ownership181. General accumulation150/Party-led education168 remain. Host metadata identifies Belgrade1950 pamphlet4–43, English transcription2006; original-language pamphlet not independently collated."
      }
    ]
  }
];

export const ideologyProgramBatch06PreviousSnapshot: ReferenceEntry = {
  "id": "civic-consociational-democracy",
  "kind": "ideology",
  "category": "ideology",
  "name": "Democracia consociativa",
  "period": "Constituição da Bélgica, federalização de 1993",
  "vec": {
    "est": 72,
    "rep": 84,
    "pod": 50,
    "imi": 82,
    "dip": 50,
    "int": 50,
    "eco": 50,
    "con": 50,
    "com": 50,
    "rel": 50,
    "mor": 50,
    "tec": 50
  },
  "rationale": "Acomodação institucional entre comunidades linguísticas, autonomia regional e partilha de poder limitam a imposição de uma maioria única.",
  "caveats": "A Constituição belga é um caso institucional, não um manual completo da teoria consociativa.",
  "sources": [
    {
      "title": "The Belgian Constitution — Belgian House of Representatives",
      "url": "https://www.dekamer.be/kvvcr/pdf_sections/publications/constitution/GrondwetUK.pdf",
      "note": "Texto constitucional sobre regiões, comunidades, línguas e instituições."
    }
  ],
  "evidence": {
    "est": "medium",
    "rep": "medium",
    "imi": "medium"
  },
  "axisEvidence": {
    "est": {
      "sourceTitles": [
        "The Belgian Constitution — Belgian House of Representatives"
      ],
      "rationale": "Competências são distribuídas entre federação, regiões e comunidades."
    },
    "rep": {
      "sourceTitles": [
        "The Belgian Constitution — Belgian House of Representatives"
      ],
      "rationale": "Órgãos legislativos eleitos integram a estrutura federal."
    },
    "imi": {
      "sourceTitles": [
        "The Belgian Constitution — Belgian House of Representatives"
      ],
      "rationale": "Comunidades linguísticas dispõem de reconhecimento e instituições próprias."
    }
  }
};

export const ideologyProgramBatch06Audit = {
  "reviewedOn": "2026-10-08",
  "integrationStatus": "Integrated qualitative definition; zero coded axes and unranked; ledger216/64referents/46contrasts",
  "normativeDefinition": "Personally selected coexisting political jurisdictions may embody internally different regimes; legitimacy binds subscribers, not all territorial residents.",
  "nearestContrast": {
    "sourceA": "https://www.panarchy.org/depuydt/1860.fr.html",
    "locatorA": "De Puydt French191/216/221–223",
    "sourceB": "https://www.panarchy.org/molinari/securite.html",
    "locatorB": "Molinari FrenchII151–161, especially161; X349–358 switching/monarchy-republic counter",
    "finding": "Molinari confines government to security with absolute freedom of other labour/exchange. De Puydt positively permits subscribers to choose theocratic/autocratic/protective/subsidizing governments, even while expecting liberal competition to change preferences.",
    "sharedFoundation": "Both advocate competitive, nonexclusive authority and individual choice. Molinari local districts are not coercive geographical monopoly; both allow monarchy/republic. No empirical peace or efficiency result is inferred."
  },
  "codedAxes": [],
  "unknownAxes": [
    "est",
    "rep",
    "pod",
    "imi",
    "dip",
    "int",
    "eco",
    "con",
    "com",
    "rel",
    "mor",
    "tec"
  ],
  "previousSnapshotBasis": "Full exact LIVE civic-consociational-democracy preserved; original Belgian source/vectors remain extra. New normative referent substitutes a selected institutional case, not another author-year clone."
} as const;

export const ideologyProgramBatch06PreviousTitoSnapshot: ReferenceEntry = {
  "id": "ideology-left-yugoslav-self-management",
  "name": "Socialismo autogestionário iugoslavo",
  "period": "Lei de autogestão das empresas, 1950",
  "rationale": "O modelo iugoslavo transferiu decisões econômicas específicas a conselhos de trabalhadores sob um sistema socialista federal.",
  "caveats": "A lei e o discurso que a acompanha não eliminam o poder do partido nem provam autonomia plena dos conselhos. É um modelo histórico delimitado.",
  "sources": [
    {
      "title": "Workers Manage Factories in Yugoslavia — Josip Broz Tito",
      "url": "https://www.marxists.org/archive/tito/1950/06/26.htm",
      "note": "Discurso de Tito à Assembleia Federal sobre a lei de gestão de empresas por trabalhadores, junho de 1950."
    }
  ],
  "kind": "ideology",
  "category": "ideology",
  "vec": {
    "est": 67,
    "rep": 58,
    "pod": 50,
    "imi": 50,
    "dip": 50,
    "int": 50,
    "eco": 68,
    "con": 60,
    "com": 50,
    "rel": 50,
    "mor": 50,
    "tec": 50
  },
  "evidence": {
    "est": "medium",
    "rep": "medium",
    "eco": "medium",
    "con": "medium"
  },
  "axisEvidence": {
    "est": {
      "sourceTitles": [
        "Workers Manage Factories in Yugoslavia — Josip Broz Tito"
      ],
      "rationale": "A federação iugoslava distribuiu poderes entre repúblicas, embora este discurso foque gestão econômica."
    },
    "rep": {
      "sourceTitles": [
        "Workers Manage Factories in Yugoslavia — Josip Broz Tito"
      ],
      "rationale": "A autogestão de trabalhadores introduz participação nas decisões produtivas, não pluralismo estatal amplo."
    },
    "eco": {
      "sourceTitles": [
        "Workers Manage Factories in Yugoslavia — Josip Broz Tito"
      ],
      "rationale": "A lei preserva propriedade social das empresas."
    },
    "con": {
      "sourceTitles": [
        "Workers Manage Factories in Yugoslavia — Josip Broz Tito"
      ],
      "rationale": "O discurso descreve planos e administração de produção sob conselhos."
    }
  }
};

export const ideologyProgramBatch06TitoAudit = {
  "reviewedOn": "2026-10-08",
  "integrationStatus": "Integrated source-defined programme; zero coded axes and unranked; previous full LIVE record preserved",
  "normativeDefinition": "Socialist production should be managed by elected worker councils, gradually receiving State economic functions, within coordinated economic plans and retained competent supervisory approval.",
  "nearestContrast": {
    "sourceA": "https://www.marxists.org/archive/tito/1950/06/26.htm",
    "locatorA": "Author131–134/173–181, especially176 approval by higher association OR competent State body",
    "sourceB": "https://www.marxists.org/subject/left-wing/gik/1930/13.htm",
    "locatorB": "Full chapterXIII21–37, especially26 and35–37",
    "finding": "GIK rejects productive administration by reconstructed State and assigns direct administration to factory councils; Tito permits competent State or higher-association approval in the gradual mixed authority design.",
    "counter": "GIK retains general coordinated planning and compulsory accounting discipline30–36. Tito does not always require State approval, and neither programme means unregulated isolated workplaces."
  },
  "independentReadScope": "Method Tito70–154/150–192 and GIKXIII20–37; second peer exactTito clauses and fullGIKXIII21–37 plus boundedGIKI, documented separately. Author fullTito12–192; no blanket all-source reread assertion.",
  "codedAxes": [],
  "previousSnapshotBasis": "Complete exact LIVE original self-management record and all source objects preserved; no transfer of EST67/REP58/ECO68/CON60."
} as const;
