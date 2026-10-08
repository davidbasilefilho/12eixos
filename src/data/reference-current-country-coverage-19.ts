import type {AxisKey,ReferenceEntry} from './references';
const axes:AxisKey[]=['est','rep','pod','imi','dip','int','eco','con','com','rel','mor','tec'];
export const currentCountryCoverage19Before:ReferenceEntry[]=[
  {
    "id": "ukraine-current-2025",
    "kind": "country",
    "category": "country",
    "name": "Ucrânia",
    "period": "Instituições e políticas vigentes, 2024–2025",
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
    "rationale": "Centro mantido: lei marcial e invasão suspenderam eleições, impedindo comparação ordinária.",
    "caveats": "Descreve instituições e políticas do governo, nunca opiniões dos habitantes. Não pontuar eleição suspensa como posição democrática permanente. Eixos sem evidência suficiente permanecem em 50 como desconhecidos.",
    "sources": [
      {
        "title": "Constituição / documento institucional — Ucrânia",
        "url": "https://www.constituteproject.org/constitution/Ukraine_2019",
        "note": "Fonte constitucional ou institucional para a organização formal do Estado; sustenta somente os eixos explicitamente cobertos no documento."
      },
      {
        "title": "Freedom in the World 2025 — Ucrânia",
        "url": "https://freedomhouse.org/country/ukraine/freedom-world/2025",
        "note": "Relatório de eventos de 2024, competição política e direitos civis; avaliação independente para confrontar texto constitucional e prática."
      }
    ],
    "evidence": {},
    "axisEvidence": {}
  },
  {
    "id": "russia-current-2025",
    "kind": "country",
    "category": "country",
    "name": "Rússia",
    "period": "Instituições e políticas vigentes, 2024–2025",
    "vec": {
      "est": 50,
      "rep": 14,
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
    "rationale": "Relatório descreve restrição severa à oposição e à imprensa.",
    "caveats": "Descreve instituições e políticas do governo, nunca opiniões dos habitantes. Guerra e coerção não são convertidas em outros eixos sem evidência direta. Eixos sem evidência suficiente permanecem em 50 como desconhecidos.",
    "sources": [
      {
        "title": "Constituição / documento institucional — Rússia",
        "url": "https://www.constituteproject.org/constitution/Russia_2020",
        "note": "Fonte constitucional ou institucional para a organização formal do Estado; sustenta somente os eixos explicitamente cobertos no documento."
      },
      {
        "title": "Freedom in the World 2025 — Rússia",
        "url": "https://freedomhouse.org/country/russia/freedom-world/2025",
        "note": "Relatório de eventos de 2024, competição política e direitos civis; avaliação independente para confrontar texto constitucional e prática."
      }
    ],
    "evidence": {
      "rep": "high"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — Rússia"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 14."
      }
    }
  },
  {
    "id": "china-current-2025",
    "kind": "country",
    "category": "country",
    "name": "China",
    "period": "Instituições e políticas vigentes, 2024–2025",
    "vec": {
      "est": 50,
      "rep": 6,
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
    "rationale": "Partido único sem competição multipartidária e restrições políticas amplas.",
    "caveats": "Descreve instituições e políticas do governo, nunca opiniões dos habitantes. Economia e propriedade variam por setor e ficam centradas sem codificação rastreável. Eixos sem evidência suficiente permanecem em 50 como desconhecidos.",
    "sources": [
      {
        "title": "Constituição / documento institucional — China",
        "url": "https://www.constituteproject.org/constitution/China_2018",
        "note": "Fonte constitucional ou institucional para a organização formal do Estado; sustenta somente os eixos explicitamente cobertos no documento."
      },
      {
        "title": "Freedom in the World 2025 — China",
        "url": "https://freedomhouse.org/country/china/freedom-world/2025",
        "note": "Relatório de eventos de 2024, competição política e direitos civis; avaliação independente para confrontar texto constitucional e prática."
      }
    ],
    "evidence": {
      "rep": "high"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — China"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 6."
      }
    }
  },
  {
    "id": "israel-current-2025",
    "kind": "country",
    "category": "country",
    "name": "Israel",
    "period": "Instituições e políticas vigentes, 2024–2025",
    "vec": {
      "est": 50,
      "rep": 72,
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
    "rationale": "Democracia parlamentar sob tensão; território e populações sob controle diferenciado complicam avaliação.",
    "caveats": "Descreve instituições e políticas do governo, nunca opiniões dos habitantes. Não há constituição única codificada; escopo territorial é contestado. Eixos sem evidência suficiente permanecem em 50 como desconhecidos.",
    "sources": [
      {
        "title": "Constituição / documento institucional — Israel",
        "url": "https://www.constituteproject.org/constitution/Israel_1958",
        "note": "Fonte constitucional ou institucional para a organização formal do Estado; sustenta somente os eixos explicitamente cobertos no documento."
      },
      {
        "title": "Freedom in the World 2025 — Israel",
        "url": "https://freedomhouse.org/country/israel/freedom-world/2025",
        "note": "Relatório de eventos de 2024, competição política e direitos civis; avaliação independente para confrontar texto constitucional e prática."
      }
    ],
    "evidence": {
      "rep": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — Israel"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 72."
      }
    }
  },
  {
    "id": "iran-current-2025",
    "kind": "country",
    "category": "country",
    "name": "Irã",
    "period": "Instituições e políticas vigentes, 2024–2025",
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
    "rationale": "Autoridade religiosa filtra candidaturas e limita a competição nacional.",
    "caveats": "Descreve instituições e políticas do governo, nunca opiniões dos habitantes. A carta combina eleição e autoridade clerical; isso não descreve crenças dos habitantes. Eixos sem evidência suficiente permanecem em 50 como desconhecidos.",
    "sources": [
      {
        "title": "Constituição / documento institucional — Irã",
        "url": "https://www.constituteproject.org/constitution/Iran_1989",
        "note": "Fonte constitucional ou institucional para a organização formal do Estado; sustenta somente os eixos explicitamente cobertos no documento."
      },
      {
        "title": "Freedom in the World 2025 — Irã",
        "url": "https://freedomhouse.org/country/iran/freedom-world/2025",
        "note": "Relatório de eventos de 2024, competição política e direitos civis; avaliação independente para confrontar texto constitucional e prática."
      }
    ],
    "evidence": {
      "rep": "high"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — Irã"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 15."
      }
    }
  },
  {
    "id": "uae-current-2025",
    "kind": "country",
    "category": "country",
    "name": "Emirados Árabes Unidos",
    "period": "Instituições e políticas vigentes, 2024–2025",
    "vec": {
      "est": 50,
      "rep": 14,
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
    "rationale": "Federação de monarquias hereditárias sem competição nacional por governo.",
    "caveats": "Descreve instituições e políticas do governo, nunca opiniões dos habitantes. Grande parte dos residentes migrantes não tem cidadania; o perfil é institucional. Eixos sem evidência suficiente permanecem em 50 como desconhecidos.",
    "sources": [
      {
        "title": "Constituição / documento institucional — Emirados Árabes Unidos",
        "url": "https://www.constituteproject.org/constitution/United_Arab_Emirates_2004",
        "note": "Fonte constitucional ou institucional para a organização formal do Estado; sustenta somente os eixos explicitamente cobertos no documento."
      },
      {
        "title": "Freedom in the World 2025 — Emirados Árabes Unidos",
        "url": "https://freedomhouse.org/country/united-arab-emirates/freedom-world/2025",
        "note": "Relatório de eventos de 2024, competição política e direitos civis; avaliação independente para confrontar texto constitucional e prática."
      }
    ],
    "evidence": {
      "rep": "high"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — Emirados Árabes Unidos"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 14."
      }
    }
  },
  {
    "id": "egypt-current-2025",
    "kind": "country",
    "category": "country",
    "name": "Egito",
    "period": "Instituições e políticas vigentes, 2024–2025",
    "vec": {
      "est": 50,
      "rep": 18,
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
    "rationale": "Relatório documenta presidência centralizada e repressão da oposição.",
    "caveats": "Descreve instituições e políticas do governo, nunca opiniões dos habitantes. Direitos constitucionais formais não equivalem à execução prática. Eixos sem evidência suficiente permanecem em 50 como desconhecidos.",
    "sources": [
      {
        "title": "Constituição / documento institucional — Egito",
        "url": "https://www.constituteproject.org/constitution/Egypt_2014",
        "note": "Fonte constitucional ou institucional para a organização formal do Estado; sustenta somente os eixos explicitamente cobertos no documento."
      },
      {
        "title": "Freedom in the World 2025 — Egito",
        "url": "https://freedomhouse.org/country/egypt/freedom-world/2025",
        "note": "Relatório de eventos de 2024, competição política e direitos civis; avaliação independente para confrontar texto constitucional e prática."
      }
    ],
    "evidence": {
      "rep": "high"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — Egito"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 18."
      }
    }
  },
  {
    "id": "morocco-current-2025",
    "kind": "country",
    "category": "country",
    "name": "Marrocos",
    "period": "Instituições e políticas vigentes, 2024–2025",
    "vec": {
      "est": 50,
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
    "rationale": "Eleições multipartidárias coexistem com prerrogativas decisivas da monarquia.",
    "caveats": "Descreve instituições e políticas do governo, nunca opiniões dos habitantes. Saara Ocidental e desigualdades regionais são questões de escopo. Eixos sem evidência suficiente permanecem em 50 como desconhecidos.",
    "sources": [
      {
        "title": "Constituição / documento institucional — Marrocos",
        "url": "https://www.constituteproject.org/constitution/Morocco_2011",
        "note": "Fonte constitucional ou institucional para a organização formal do Estado; sustenta somente os eixos explicitamente cobertos no documento."
      },
      {
        "title": "Freedom in the World 2025 — Marrocos",
        "url": "https://freedomhouse.org/country/morocco/freedom-world/2025",
        "note": "Relatório de eventos de 2024, competição política e direitos civis; avaliação independente para confrontar texto constitucional e prática."
      }
    ],
    "evidence": {
      "rep": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — Marrocos"
        ],
        "rationale": "O relatório documenta competição política e direitos civis no período, base da estimativa democrática de 39."
      }
    }
  },
  {
    "id": "somalia-current-2025",
    "kind": "country",
    "category": "country",
    "name": "Somália",
    "period": "Instituições e políticas avaliadas, 2024–2025",
    "vec": {
      "est": 90,
      "rep": 15,
      "pod": 50,
      "imi": 50,
      "dip": 50,
      "int": 50,
      "eco": 50,
      "con": 50,
      "com": 50,
      "rel": 15,
      "mor": 50,
      "tec": 50
    },
    "rationale": "O texto provisório define uma república federal e o Islã como religião do Estado; conflito, instituições incompletas e restrições civis limitam o governo efetivo.",
    "caveats": "O registro compara algumas características institucionais do Estado, nunca crenças de seus habitantes. Os demais eixos ficam em 50 por falta de evidência específica neste recorte; este perfil tem cobertura inferior a seis eixos e deve permanecer fora do ranking até revisão documental mais ampla.",
    "sources": [
      {
        "title": "Constituição Provisória Federal da Somália (2012)",
        "url": "https://www.constituteproject.org/constitution/Somalia_2012?lang=en",
        "note": "Texto constitucional reproduzido em tradução pelo Comparative Constitutions Project; fonte para a forma territorial do Estado e a cláusula religiosa."
      },
      {
        "title": "Freedom in the World 2025 — Somália",
        "url": "https://freedomhouse.org/country/somalia/freedom-world/2025",
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
          "Constituição Provisória Federal da Somália (2012)"
        ],
        "rationale": "A constituição define a estrutura territorial como federal; a nota editorial aproxima esse desenho do polo correspondente, sem afirmar que o texto mede autonomia praticada."
      },
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — Somália"
        ],
        "rationale": "A classificação narrativa de direitos políticos e liberdades civis como “Not Free” fundamenta somente um intervalo amplo (85, 55 ou 15), não uma pontuação psicométrica nem os outros eixos."
      },
      "rel": {
        "sourceTitles": [
          "Constituição Provisória Federal da Somália (2012)"
        ],
        "rationale": "A cláusula constitucional caracteriza o Estado como com religião oficial; o valor descreve a norma estatal, não a religiosidade da população."
      }
    }
  },
  {
    "id": "south-sudan-current-2025",
    "kind": "country",
    "category": "country",
    "name": "Sudão do Sul",
    "period": "Instituições e políticas avaliadas, 2024–2025",
    "vec": {
      "est": 90,
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
    "rationale": "A constituição estabelece república federal secular; guerra, adiamentos eleitorais e violência impedem competição política e liberdades estáveis.",
    "caveats": "O registro compara algumas características institucionais do Estado, nunca crenças de seus habitantes. Os demais eixos ficam em 50 por falta de evidência específica neste recorte; este perfil tem cobertura inferior a seis eixos e deve permanecer fora do ranking até revisão documental mais ampla.",
    "sources": [
      {
        "title": "Constituição de Transição do Sudão do Sul (2011)",
        "url": "https://www.constituteproject.org/constitution/South_Sudan_2011?lang=en",
        "note": "Texto constitucional reproduzido em tradução pelo Comparative Constitutions Project; fonte para a forma territorial do Estado e a cláusula religiosa."
      },
      {
        "title": "Freedom in the World 2025 — Sudão do Sul",
        "url": "https://freedomhouse.org/country/south-sudan/freedom-world/2025",
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
          "Constituição de Transição do Sudão do Sul (2011)"
        ],
        "rationale": "A constituição define a estrutura territorial como federal; a nota editorial aproxima esse desenho do polo correspondente, sem afirmar que o texto mede autonomia praticada."
      },
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — Sudão do Sul"
        ],
        "rationale": "A classificação narrativa de direitos políticos e liberdades civis como “Not Free” fundamenta somente um intervalo amplo (85, 55 ou 15), não uma pontuação psicométrica nem os outros eixos."
      },
      "rel": {
        "sourceTitles": [
          "Constituição de Transição do Sudão do Sul (2011)"
        ],
        "rationale": "A cláusula constitucional caracteriza o Estado como secular ou sem religião oficial; o valor descreve a norma estatal, não a religiosidade da população."
      }
    }
  },
  {
    "id": "sudan-current-2025",
    "kind": "country",
    "category": "country",
    "name": "Sudão",
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
    "rationale": "O texto constitucional interino deixou de representar a ordem de facto após golpes e a guerra iniciada em 2023; a situação atual não sustenta escores institucionais estáveis.",
    "caveats": "O registro compara algumas características institucionais do Estado, nunca crenças de seus habitantes. Os demais eixos ficam em 50 por falta de evidência específica neste recorte; este perfil tem cobertura inferior a seis eixos e deve permanecer fora do ranking até revisão documental mais ampla.",
    "sources": [
      {
        "title": "Constituição Interina do Sudão (2005)",
        "url": "https://www.constituteproject.org/constitution/Sudan_2005?lang=en",
        "note": "Texto constitucional reproduzido em tradução pelo Comparative Constitutions Project; fonte para a forma territorial do Estado e a cláusula religiosa."
      },
      {
        "title": "Freedom in the World 2025 — Sudão",
        "url": "https://freedomhouse.org/country/sudan/freedom-world/2025",
        "note": "Avaliação anual de direitos políticos e liberdades civis para 2024; usada apenas como orientação categórica, não como medição dos demais eixos."
      }
    ],
    "evidence": {
      "rep": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — Sudão"
        ],
        "rationale": "A classificação narrativa de direitos políticos e liberdades civis como “Not Free” fundamenta somente um intervalo amplo (85, 55 ou 15), não uma pontuação psicométrica nem os outros eixos."
      }
    }
  },
  {
    "id": "zimbabwe-current-2025",
    "kind": "country",
    "category": "country",
    "name": "Zimbábue",
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
    "rationale": "A carta define república unitária secular, mas violência política, repressão da oposição e limites à imprensa comprometem a competição.",
    "caveats": "O registro compara algumas características institucionais do Estado, nunca crenças de seus habitantes. Os demais eixos ficam em 50 por falta de evidência específica neste recorte; este perfil tem cobertura inferior a seis eixos e deve permanecer fora do ranking até revisão documental mais ampla.",
    "sources": [
      {
        "title": "Constituição do Zimbábue (2013)",
        "url": "https://www.constituteproject.org/constitution/Zimbabwe_2013?lang=en",
        "note": "Texto constitucional reproduzido em tradução pelo Comparative Constitutions Project; fonte para a forma territorial do Estado e a cláusula religiosa."
      },
      {
        "title": "Freedom in the World 2025 — Zimbábue",
        "url": "https://freedomhouse.org/country/zimbabwe/freedom-world/2025",
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
          "Constituição do Zimbábue (2013)"
        ],
        "rationale": "A constituição define a estrutura territorial como unitária; a nota editorial aproxima esse desenho do polo correspondente, sem afirmar que o texto mede autonomia praticada."
      },
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — Zimbábue"
        ],
        "rationale": "A classificação narrativa de direitos políticos e liberdades civis como “Not Free” fundamenta somente um intervalo amplo (85, 55 ou 15), não uma pontuação psicométrica nem os outros eixos."
      },
      "rel": {
        "sourceTitles": [
          "Constituição do Zimbábue (2013)"
        ],
        "rationale": "A cláusula constitucional caracteriza o Estado como secular ou sem religião oficial; o valor descreve a norma estatal, não a religiosidade da população."
      }
    }
  },
  {
    "id": "slovenia-current-2025",
    "kind": "country",
    "category": "country",
    "name": "Eslovênia",
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
    "rationale": "A república parlamentar unitária secular protege direitos e competição eleitoral; o perfil registra o desenho institucional geral.",
    "caveats": "O registro compara algumas características institucionais do Estado, nunca crenças de seus habitantes. Os demais eixos ficam em 50 por falta de evidência específica neste recorte; este perfil tem cobertura inferior a seis eixos e deve permanecer fora do ranking até revisão documental mais ampla.",
    "sources": [
      {
        "title": "Constituição da Eslovênia (1991)",
        "url": "https://www.constituteproject.org/constitution/Slovenia_1991?lang=en",
        "note": "Texto constitucional reproduzido em tradução pelo Comparative Constitutions Project; fonte para a forma territorial do Estado e a cláusula religiosa."
      },
      {
        "title": "Freedom in the World 2025 — Eslovênia",
        "url": "https://freedomhouse.org/country/slovenia/freedom-world/2025",
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
          "Constituição da Eslovênia (1991)"
        ],
        "rationale": "A constituição define a estrutura territorial como unitária; a nota editorial aproxima esse desenho do polo correspondente, sem afirmar que o texto mede autonomia praticada."
      },
      "rep": {
        "sourceTitles": [
          "Freedom in the World 2025 — Eslovênia"
        ],
        "rationale": "A classificação narrativa de direitos políticos e liberdades civis como “Free” fundamenta somente um intervalo amplo (85, 55 ou 15), não uma pontuação psicométrica nem os outros eixos."
      },
      "rel": {
        "sourceTitles": [
          "Constituição da Eslovênia (1991)"
        ],
        "rationale": "A cláusula constitucional caracteriza o Estado como secular ou sem religião oficial; o valor descreve a norma estatal, não a religiosidade da população."
      }
    }
  }
];
export const currentCountryCoverage19Proposals=[
  {
    "id": "ukraine-current-2025",
    "title": "Constitutional institutional norm — Ucrânia",
    "url": "https://zakonst.rada.gov.ua/docs/en/constitution.pdf",
    "period": "Constituição de 1996, revisão indicada até 03/09/2019; consulta em 08/10/2026",
    "version": "28June1996 Constitution; source lists amendments through law27-IX3September2019",
    "rationale": "Texto revisto em 2019 prevê soberania popular, divisão dos poderes e autonomia local, dentro de Estado unitário.",
    "caveats": "O Estado é unitário; participação local segue regras constitucionais. O rumo europeu e euro-atlântico do preâmbulo não comprova adesão concluída ou prática atual. Recorte documental institucional, sem certificação de toda legislação vigente ou prática política atual.",
    "scope": "Leitura de pesquisa documental atribuída; escopo efetivamente lido: Actual title/amendment list0–16; preamble86–98; COMPLETEArticles1–8 at101–135; selectedArticle17 at178–193. Not all52pages. Versão: 28June1996 Constitution; source lists amendments through law27-IX3September2019 Limitações: Dated formal prescription only; no complete current-law, implementation or whole-axis certification.",
    "additionalSources": []
  },
  {
    "id": "russia-current-2025",
    "title": "Constitutional institutional norm — Rússia",
    "url": "https://www.vsrf.ru/en/documents/constitution/",
    "period": "Constituição, tradução do Supremo revista em 21/07/2014; consulta em 08/10/2026",
    "version": "SupremeCourt English page expressly as amended21July2014",
    "rationale": "Texto revisto em 2014 prevê república federal, soberania popular e divisão de competências, sob supremacia constitucional.",
    "caveats": "Supremacia federal, unidade territorial e poder estatal uniforme limitam entes federados. Edição de 2014 não incorpora automaticamente emendas de 2020 ou reivindicações posteriores. Recorte documental institucional, sem certificação de toda legislação vigente ou prática política atual.",
    "scope": "Leitura de pesquisa documental atribuída; escopo efetivamente lido: Actual exact institutional indexed header/preamble and COMPLETEArticles1–5. Direct route not accessible; no whole Constitution read. Versão: SupremeCourt English page expressly as amended21July2014 Limitações: Dated formal prescription only; no complete current-law, implementation or whole-axis certification. Edition2014 is explicit; not presented as complete2026 law. DirectSupremeCourt and Kremlin routes not accessible.",
    "additionalSources": []
  },
  {
    "id": "china-current-2025",
    "title": "Constitutional institutional norm — China",
    "url": "https://en.npc.gov.cn.cdurl.cn/2018-03/11/c_1145393.htm",
    "period": "Constituição de 1982, redação atualizada em 11/03/2018; consulta em 08/10/2026",
    "version": "NPC text updated11March2018; original1982 with amendment list through2018",
    "rationale": "Texto de 2018 prevê Estado socialista, liderança do Partido Comunista e poder popular exercido por congressos.",
    "caveats": "O texto proíbe enfraquecimento do sistema socialista. Poder por congressos e centralismo democrático não demonstram eleições competitivas ou pluralismo partidário. Recorte documental institucional, sem certificação de toda legislação vigente ou prática política atual.",
    "scope": "Leitura de pesquisa documental atribuída; escopo efetivamente lido: Actual exact NPC English header/amendment dates; COMPLETEArticles1–2 and first sentenceArticle3 democratic centralism. Chinese NPC2018 first two clauses corroborate, not full text. Versão: NPC text updated11March2018; original1982 with amendment list through2018 Limitações: Dated formal prescription only; no complete current-law, implementation or whole-axis certification. Indexed institutional text, not direct original-byte authentication. Alternative English NPC direct find returnedInternalError.",
    "additionalSources": []
  },
  {
    "id": "israel-current-2025",
    "title": "Constitutional institutional norm — Israel",
    "url": "https://main.knesset.gov.il/EN/News/PressReleases/Pages/Pr13978_pg.aspx",
    "period": "Lei Básica do Estado-Nação de 19/07/2018, tradução não oficial; consulta em 08/10/2026",
    "version": "Knesset19July2018 final NationStateBasicLaw; expressly unofficial English translation",
    "rationale": "Lei básica de 2018 reserva a autodeterminação nacional ao povo judeu e prevê hebraico estatal e status especial do árabe.",
    "caveats": "A lei preserva status anterior do árabe e dias de descanso de outras comunidades. A designação nacional judaica não mede crenças individuais nem toda estrutura constitucional. Recorte documental institucional, sem certificação de toda legislação vigente ou prática política atual.",
    "scope": "Leitura de pesquisa documental atribuída; escopo efetivamente lido: Actual exact institutional indexed complete eleven clauses; no full set of Israeli BasicLaws reviewed. Versão: Knesset19July2018 final NationStateBasicLaw; expressly unofficial English translation Limitações: Dated formal prescription only; no complete current-law, implementation or whole-axis certification. Unofficial English translation is disclosed; no original Hebrew or translation-byte authentication. Separate BasicLawKnesset direct PDF maintenance/geographic access failure; not used.",
    "additionalSources": []
  },
  {
    "id": "iran-current-2025",
    "title": "Constitutional institutional norm — Irã",
    "url": "https://www.shora-gc.ir/en/news/87/constitution-of-the-islamic-republic-of-iran-full-text",
    "period": "Constituição, reprodução inglesa institucional publicada em 02/06/2021; consulta em 08/10/2026",
    "version": "ConstitutionalCouncil English reproduction published2June2021; historical Constitution1979/revised1989 per WIPO metadata, exact translation amendment cutoff not certified",
    "rationale": "Texto constitucional reproduzido em 2021 prevê república islâmica, supervisão religiosa das leis e eleições e referendos.",
    "caveats": "Critérios islâmicos e liderança do jurista qualificam todas as normas. Liberdades legais coexistem com defesa da independência e integridade; reconhecimento religioso é limitado. Publicação em 2021 não é data de promulgação. Recorte documental institucional, sem certificação de toda legislação vigente ou prática política atual.",
    "scope": "Leitura de pesquisa documental atribuída; escopo efetivamente lido: Actual publication header22–26 and COMPLETEArticles1–9 at148–245; selected12–14 at259–272. Not all1465lines or original Persian. Versão: ConstitutionalCouncil English reproduction published2June2021; historical Constitution1979/revised1989 per WIPO metadata, exact translation amendment cutoff not certified Limitações: Dated formal prescription only; no complete current-law, implementation or whole-axis certification. Publisher2021 date is not enactment; do not transfer WIPO1989 metadata into a claim exact translation version authenticated. Referendum figures are source assertions, not certified empirical facts. WIPO English PDF links redirected to metadata/failedInternalError, not body evidence.",
    "additionalSources": [
      {
        "title": "Documento complementar — Irã",
        "url": "https://www.wipo.int/wipolex/en/legislation/details/7697",
        "note": "Leitura de pesquisa documental atribuída; escopo efetivamente lido: Actually read version metadata1989/amendment28July1989 only, not original body."
      }
    ]
  },
  {
    "id": "uae-current-2025",
    "title": "Constitutional institutional norm — Emirados Árabes Unidos",
    "url": "https://uaelegislation.gov.ae/en/constitution?ya_src=serp300",
    "period": "Texto constitucional eletrônico oficial sem corte de emendas comprovado; consulta em 08/10/2026",
    "version": "Official electronic constitutional text; exact amendment cutoff unlisted in selected body",
    "rationale": "Texto constitucional prevê federação de emirados com competências próprias, Islã oficial e Sharia como fonte principal das leis.",
    "caveats": "Competências locais são delimitadas pelas federais, com unidade territorial. Sharia é fonte principal, sem afirmação de fonte exclusiva ou competição política. Recorte documental institucional, sem certificação de toda legislação vigente ou prática política atual.",
    "scope": "Leitura de pesquisa documental atribuída; escopo efetivamente lido: Actual exact official indexed preamble and COMPLETEArticles1–9; official PDF indexed first two pages independently corroborate Articles1–6. Direct PDF403; no all clauses. Versão: Official electronic constitutional text; exact amendment cutoff unlisted in selected body Limitações: Dated formal prescription only; no complete current-law, implementation or whole-axis certification. Undated electronic edition explicitly retained; file crawl/update dates not treated as norm dates. Official PDFdownload403.",
    "additionalSources": []
  },
  {
    "id": "egypt-current-2025",
    "title": "Constitutional institutional norm — Egito",
    "url": "https://hrightsstudies.sis.gov.eg/media/4918/dustor-eng-1.pdf",
    "period": "Constituição de 2014, cópia institucional sem corte de emendas comprovado; consulta em 08/10/2026",
    "version": "Selected clauses attributable to2014 constitutional text; PDF exact amendment/consolidation cutoff unestablished",
    "rationale": "Texto de 2014 prevê soberania popular, pluralismo partidário e divisão dos poderes, com Sharia como fonte principal das leis.",
    "caveats": "Cristãos e judeus conservam regras religiosas em matérias pessoais; o Estado é indivisível. Não se comprova que este arquivo incorpore a revisão de 2019. Recorte documental institucional, sem certificação de toda legislação vigente ou prática política atual.",
    "scope": "Leitura de pesquisa documental atribuída; escopo efetivamente lido: Actual exact official indexed COMPLETEArticles1–6 printedp7; SIS citizenship page separately attributes Articles1/4/5 to2014 Constitution. Direct PDFtimeout, no whole body. Versão: Selected clauses attributable to2014 constitutional text; PDF exact amendment/consolidation cutoff unestablished Limitações: Dated formal prescription only; no complete current-law, implementation or whole-axis certification. No2019 amendment consolidation or original Arabic translation authentication claimed. DirectPDFtimeout; parentSISpage502.",
    "additionalSources": [
      {
        "title": "Documento complementar — Egito",
        "url": "https://sis.gov.eg/en/egypt/society/citizenship/citizenship-in-egypt/",
        "note": "Leitura de pesquisa documental atribuída; escopo efetivamente lido: Actual indexed institution article attributes quoted Articles1/4/5 to2014 norm; date support only."
      }
    ]
  },
  {
    "id": "morocco-current-2025",
    "title": "Constitutional institutional norm — Marrocos",
    "url": "https://www.sgg.gov.ma/Portals/0/constitution/constitution_2011_Fr.pdf",
    "period": "Constituição de 2011, republicação francesa institucional; consulta em 08/10/2026",
    "version": "Institutional2011 French text; exact copy publication/promulgation day not established",
    "rationale": "Texto de 2011 prevê monarquia parlamentar, participação popular e regionalização, com separação e colaboração dos poderes.",
    "caveats": "Monarquia, religião muçulmana moderada, unidade e escolha democrática são constantes constitucionais. Primazia de tratados é condicionada; regionalização não significa soberania independente. Recorte documental institucional, sem certificação de toda legislação vigente ou prática política atual.",
    "scope": "Leitura de pesquisa documental atribuída; escopo efetivamente lido: Actual exact official indexed printedp4 preamble tail and COMPLETEArticles1–2. Direct PDFtimeout; not whole Constitution. Versão: Institutional2011 French text; exact copy publication/promulgation day not established Limitações: Dated formal prescription only; no complete current-law, implementation or whole-axis certification. No2011 exact enactment day or later revision certification. DirectSGGPDF400timeout.",
    "additionalSources": []
  },
  {
    "id": "somalia-current-2025",
    "title": "Constitutional institutional norm — Somália",
    "url": "https://parliament.gov.so/wp-content/uploads/simple-file-list/Nuqulo-Af-Ingiriis/Provisional-Constitution-2012.pdf",
    "period": "Constituição provisória adotada em 01/08/2012; consulta em 08/10/2026",
    "version": "Provisional Constitution adopted1August2012 per actual cover",
    "rationale": "Texto provisório de 2012 prevê partilha federal de poder e separação dos poderes, com primazia da Sharia.",
    "caveats": "A Constituição só é suprema após a Sharia e nenhuma lei pode contrariá-la. Texto de 2012 não é apresentado como consolidação das emendas posteriores. Recorte documental institucional, sem certificação de toda legislação vigente ou prática política atual.",
    "scope": "Leitura de pesquisa documental atribuída; escopo efetivamente lido: Actual cover0–4; Article2(3) and COMPLETEArticles3–4 at228–251. Selected federal participation46/48 at612–637 also read; not full66pages. Versão: Provisional Constitution adopted1August2012 per actual cover Limitações: Dated formal prescription only; no complete current-law, implementation or whole-axis certification. 2012 body not treated as2024/2026 amended Constitution; later upload announcement is not an amendment date.",
    "additionalSources": []
  },
  {
    "id": "south-sudan-current-2025",
    "title": "Constitutional institutional norm — Sudão do Sul",
    "url": "https://mop.gov.ss/doc/SS_Transitional_Constitution.pdf",
    "period": "Constituição de Transição de 2011, cópia institucional; consulta em 08/10/2026",
    "version": "Transitional Constitution2011 per actual cover",
    "rationale": "Texto de 2011 prevê governo democrático descentralizado, soberania popular e separação entre religião e Estado.",
    "caveats": "Fontes legislativas também incluem costumes e tradições; resistência a derrubada e deveres constitucionais são previstos. Transferência pacífica é prescrição, não acontecimento certificado. Recorte documental institucional, sem certificação de toda legislação vigente ou prática política atual.",
    "scope": "Leitura de pesquisa documental atribuída; escopo efetivamente lido: Actual cover0–2, preamble299–322 and COMPLETEArticles1–8 at326–387. Not all92pages/3153lines. Versão: Transitional Constitution2011 per actual cover Limitações: Dated formal prescription only; no complete current-law, implementation or whole-axis certification. No2018/2026 complete consolidated edition certification. AlternativeJusticeMinistryPDF400timeout; actual chosen MOPbody successful.",
    "additionalSources": []
  },
  {
    "id": "sudan-current-2025",
    "title": "Constitutional institutional norm — Sudão",
    "url": "https://www.refworld.org/sites/default/files/2025-02/constitutional_charter_2019-official_gazzette68.pdf",
    "period": "Carta Constitucional de 2019, Diário Oficial de 03/10/2019; texto anterior às rupturas posteriores; consulta em 08/10/2026",
    "version": "Nominal2019 ConstitutionalCharter reproduction, Gazette1895 dated3October2019; exact signing day not certified",
    "rationale": "Carta de 2019 previa governo parlamentar pluralista e descentralizado, cidadania igual e supremacia do texto constitucional.",
    "caveats": "A carta preservava leis e decretos anteriores até substituição, sujeitos a sua supremacia. Texto de 2019 não certifica validade após 2021 ou emendas de 2025; reprodução nominal não autentica original por comparação de bytes. Recorte documental institucional, sem certificação de toda legislação vigente ou prática política atual.",
    "scope": "Leitura de pesquisa documental atribuída; escopo efetivamente lido: Actual exact indexed Gazetteheader and COMPLETEArticles1–5,Article6(1). Direct PDFonly88linespageheaders/OCRmetadata, not substantive clauses. No2025 amendments read. Versão: Nominal2019 ConstitutionalCharter reproduction, Gazette1895 dated3October2019; exact signing day not certified Limitações: Dated formal prescription only; no complete current-law, implementation or whole-axis certification. UNHCR-hosted nominal Gazette reproduction, not direct original-byte authentication. Exact original signing day unknown. August2019draft with different numbering excluded. MOJ2019/2025download linksInternalError; original pages not read.",
    "additionalSources": [
      {
        "title": "Documento complementar — Sudão",
        "url": "https://moj.gov.sd/files/index/28%20",
        "note": "Leitura de pesquisa documental atribuída; escopo efetivamente lido: Actual official index lists2019gazette upload5October2019 and2025amendment uploads23February/22June only; no bodies."
      }
    ]
  },
  {
    "id": "zimbabwe-current-2025",
    "title": "Constitutional institutional norm — Zimbábue",
    "url": "https://wipolex-res.wipo.int/edocs/lexdocs/laws/en/zw/zw038en.html",
    "period": "Constituição de 2013, reprodução da Comissão de Desenvolvimento Legislativo; consulta em 08/10/2026",
    "version": "Constitution AmendmentNo20Act2013; reproduced LawDevelopmentCommission text",
    "rationale": "Texto de 2013 prevê república unitária, eleições multipartidárias, divisão dos poderes e descentralização administrativa.",
    "caveats": "Princípios preservam valores tradicionais, unidade e direitos adquiridos; governos provinciais e locais não implicam soberania federal. Não há consolidação de emendas posteriores certificada. Recorte documental institucional, sem certificação de toda legislação vigente ou prática política atual.",
    "scope": "Leitura de pesquisa documental atribuída; escopo efetivamente lido: Actual exact WIPOindexed Acttitle/enacting clauses, printedp15preamble and COMPLETESections1–5 atprinted16–17, including all3(2) good-governance principles. DirectHTMLredirectmetadata only; not whole Constitution. Versão: Constitution AmendmentNo20Act2013; reproduced LawDevelopmentCommission text Limitações: Dated formal prescription only; no complete current-law, implementation or whole-axis certification. Nominal commission reproduction through WIPO; no exact original-byte or2021/2023 consolidated version claim. WIPOdirectHTMLredirected to metadata; Veritas2023PDF/2021pageInternalError, not body evidence.",
    "additionalSources": []
  },
  {
    "id": "slovenia-current-2025",
    "title": "Constitutional institutional norm — Eslovênia",
    "url": "https://www.us-rs.si/en/legal-basis/constitution",
    "period": "Constituição de 1991, edição institucional com revisão indicada até dezembro de 2025; consulta em 08/10/2026",
    "version": "ConstitutionalCourt English text citesGazettes33/91-I through98/25; indexedArticle74a expressly inserted1December2025; original23December1991",
    "rationale": "Texto revisto em 2025 prevê república democrática e separação dos poderes e das religiões, sob unidade territorial.",
    "caveats": "Território é indivisível; transferência internacional de competências exige tratado com dois terços parlamentares e pode ter referendo vinculante. A edição indicada não certifica todo cumprimento atual. Recorte documental institucional, sem certificação de toda legislação vigente ou prática política atual.",
    "scope": "Leitura de pesquisa documental atribuída; escopo efetivamente lido: Actual exact institutional indexed edition list/preamble and COMPLETEArticles1–7 including3a; Article74a amendmentdate read only for edition. No full Constitution read. Versão: ConstitutionalCourt English text citesGazettes33/91-I through98/25; indexedArticle74a expressly inserted1December2025; original23December1991 Limitações: Dated formal prescription only; no complete current-law, implementation or whole-axis certification. Indexed text edition evidence, not implementation or entire constitutional case-law certification.",
    "additionalSources": []
  }
];
export function extendCurrentCountryCoverage19(entry:ReferenceEntry):ReferenceEntry{
 const before=currentCountryCoverage19Before.find(old=>old.id===entry.id), proposal=currentCountryCoverage19Proposals.find(p=>p.id===entry.id);
 if(!before||!proposal||JSON.stringify(entry)!==JSON.stringify(before))return entry;
 return {...entry,sources:[...entry.sources,{title:proposal.title,url:proposal.url,note:proposal.scope},...proposal.additionalSources],period:proposal.period,rationale:proposal.rationale,caveats:proposal.caveats+' Fontes e avaliações anteriores preservadas para consulta documental. Recorte qualitativo sem avaliação geral dos eixos; perfil fora do ranking.',vec:Object.fromEntries(axes.map(axis=>[axis,50]))as Record<AxisKey,number>,evidence:{},axisEvidence:{},coding:{},documentaryReview:{status:'accepted-bounded-primary-and-identity',independentReview:'accepted-bounded-qualitative',reviewedOn:'2026-10-08',scope:proposal.scope},unknownAxisReasons:Object.fromEntries(axes.map(axis=>[axis,'Orientação deste eixo não estabelecida pelo recorte institucional examinado. Pesquisa anterior preservada para consulta documental.']))}as ReferenceEntry;
}
export const currentCountryCoverage19Audit={existingIdentities:13,newIdentities:0,candidateCodedAxes:0,qualitativeProfiles:13,unknownAxes:156,eligibleCandidates:0,independentReview:'accepted-bounded-qualitative',rootReview:'accepted-bounded-qualitative'}as const;
