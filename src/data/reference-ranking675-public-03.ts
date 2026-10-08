import type { ReferenceEntry, ReferenceSource } from './references';
import { AXES } from '../lib/scoring';
const AXIS_KEYS = AXES.map(axis => axis.key);
import { codeReferenceAxis, type ReferenceAxisCoding } from '../lib/reference-coding';
type RankingPublic03ArchiveEntry = Omit<ReferenceEntry, 'sources'> & { sources: (ReferenceSource & { publishedDate?: string })[] };
/** Entire old object retained. Research proposal; no six-axis qualification. */
export const ranking675Public03Before: RankingPublic03ArchiveEntry[] = [
  {
    "id": "prabowo-subianto",
    "name": "Prabowo Subianto",
    "aliases": [],
    "kind": "person",
    "category": "public-figure",
    "period": "2026-01-22",
    "sources": [
      {
        "title": "Prabowo Subianto — Davos 2026 special address, full transcript",
        "url": "https://www.weforum.org/stories/forum-institutional/davos-2026-special-address-prabowo-subianto-indonesia/",
        "note": "Transcrição do organizador do evento efetivamente lida; produzida com IA e editada posteriormente para clareza, como informa a página. Atividade pessoal datada 22/1/2026; não certifica resultados relatados."
      }
    ],
    "caveats": "Declarações autorais delimitadas; demais eixos desconhecidos. Revisão documental independente delimitada aceita; integração pelo Root pendente. ",
    "rationale": "Propõe refeições e exames públicos, financiamento industrial e educação digital, com abertura comercial e cooperação internacional.",
    "vec": {
      "est": 50,
      "rep": 50,
      "pod": 50,
      "imi": 50,
      "dip": 40,
      "int": 50,
      "eco": 60,
      "con": 60,
      "com": 40,
      "rel": 50,
      "mor": 50,
      "tec": 60
    },
    "evidence": {
      "eco": "medium",
      "con": "medium",
      "tec": "medium",
      "com": "medium",
      "dip": "medium"
    },
    "axisEvidence": {
      "eco": {
        "sourceTitles": [
          "Prabowo Subianto — Davos 2026 special address, full transcript"
        ],
        "rationale": "Financiamento social público sustenta direção parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não certifica alcance numérico ou estatização completa."
      },
      "con": {
        "sourceTitles": [
          "Prabowo Subianto — Davos 2026 special address, full transcript"
        ],
        "rationale": "Coordenação pública de investimento sustenta planejamento parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Também defende parceiros privados e simplificação regulatória."
      },
      "tec": {
        "sourceTitles": [
          "Prabowo Subianto — Davos 2026 special address, full transcript"
        ],
        "rationale": "Adoção digital educacional sustenta orientação parcial. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Não certifica implantação ou eficácia."
      },
      "com": {
        "sourceTitles": [
          "Prabowo Subianto — Davos 2026 special address, full transcript"
        ],
        "rationale": "Integração comercial explícita sustenta globalismo parcial. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Também prioriza autossuficiência alimentar e energética."
      },
      "dip": {
        "sourceTitles": [
          "Prabowo Subianto — Davos 2026 special address, full transcript"
        ],
        "rationale": "Preferência explícita pela paz sustenta direção parcial. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Não estabelece desarmamento absoluto ou ausência de força."
      }
    },
    "coding": {
      "eco": {
        "axis": "eco",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Prabowo Subianto — Davos 2026 special address, full transcript",
            "locator": "Free nutritious meals; free medical checkups",
            "statement": "Defende refeições e exames médicos financiados por recursos públicos.",
            "basis": "declaration",
            "publishedDate": "2026-01-22",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Financiamento social público sustenta direção parcial.",
        "uncertainty": "Não certifica alcance numérico ou estatização completa.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "con": {
        "axis": "con",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Prabowo Subianto — Davos 2026 special address, full transcript",
            "locator": "Danantara finance/co-finance industries of the future",
            "statement": "Defende fundo soberano para direcionar financiamento industrial.",
            "basis": "declaration",
            "publishedDate": "2026-01-22",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Coordenação pública de investimento sustenta planejamento parcial.",
        "uncertainty": "Também defende parceiros privados e simplificação regulatória.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "tec": {
        "axis": "tec",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Prabowo Subianto — Davos 2026 special address, full transcript",
            "locator": "Education digitalization, interactive smart panels",
            "statement": "Defende ampliar equipamentos digitais interativos nas escolas.",
            "basis": "declaration",
            "publishedDate": "2026-01-22",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Adoção digital educacional sustenta orientação parcial.",
        "uncertainty": "Não certifica implantação ou eficácia.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "com": {
        "axis": "com",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Prabowo Subianto — Davos 2026 special address, full transcript",
            "locator": "Trade agreements; more deeply integrated global economy; reducing barriers",
            "statement": "Defende acordos comerciais e redução de barreiras internacionais.",
            "basis": "declaration",
            "publishedDate": "2026-01-22",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Integração comercial explícita sustenta globalismo parcial.",
        "uncertainty": "Também prioriza autossuficiência alimentar e energética.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "dip": {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Prabowo Subianto — Davos 2026 special address, full transcript",
            "locator": "Conclusion, peace/friendship/collaboration over confrontation",
            "statement": "Declara preferência por cooperação e amizade entre países.",
            "basis": "declaration",
            "publishedDate": "2026-01-22",
            "accessedDate": "2026-10-07"
          }
        ],
        "rationale": "Preferência explícita pela paz sustenta direção parcial.",
        "uncertainty": "Não estabelece desarmamento absoluto ou ausência de força.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      }
    }
  }
];
export const ranking675Public03NewSources: ReferenceSource[] = [
  {
    "title": "Prabowo Subianto — briefing próprio20/07/2026, tradução oficial",
    "url": "https://setkab.go.id/en/briefing-of-the-president-of-the-republic-of-indonesia-at-the-plenary-cabinet-meeting-at-the-state-palace-jakarta-july-20-2026/",
    "note": "Cabeçalho23–27 e corpo35–222 efetivamente lidos. Tradução institucional; regras declaradas e resultados relatados são separados. Segurança dos dados216–219 e desregulação176 retidas."
  },
  {
    "title": "Prabowo Subianto — discurso próprio14/08/2026, original oficial",
    "url": "https://setkab.go.id/pidato-kenegaraan-pada-sidang-tahunan-mpr-ri-dan-sidang-bersama-dpr-dan-dpd-ri-dalam-rangka-hut-ke-81-kemerdekaan-republik-indonesia/",
    "note": "Cabeçalho32–43 e corpo84–258 selecionado efetivamente lidos; original indonésio. Mercados149, parceria privada159, redução de empresas160 e exportação sem monopólio196–201 retidos. Cifras e execução não certificadas."
  },
  {
    "title": "Prabowo Subianto — observações próprias sobre tecnologia28/06/2026, relato oficial",
    "url": "https://presidenri.go.id/siaran-pers/presiden-prabowo-tekankan-peran-teknologi-dalam-percepatan-penyelesaian-persoalan-nasional/amp/",
    "note": "Acesso direto falhou; corpo completo do relato nominal recuperado no índice atéBPMI Setpres e efetivamente lido. Aplicações nucleares e riscos de IA/nuclear; sem inspeção audiovisual nem transferência de falas ministeriais."
  },
  {
    "title": "Prabowo Subianto — UNGA23/09/2025, excertos oficiais UNISPAL",
    "url": "https://www.un.org/unispal/document/indonesia-remarks-at-the-unga80-23sep25/",
    "note": "Direto403; excertos publicados completos efetivamente lidos via índice oficial. Oferta armada geral condicionada à autorização ONU. PDF preparado General Debate tem enumeração geográfica mais restrita; não identidade integral das versões nem envio realizado."
  }
];
export const ranking675Public03Coding: ReferenceAxisCoding[] = [
  {
    "axis": "eco",
    "position": "moderate-first",
    "confidence": "medium",
    "claims": [
      {
        "sourceTitle": "Prabowo Subianto — briefing próprio20/07/2026, tradução oficial",
        "locator": "Briefing20/07/2026: adoção constitucional85–102; ativos estatais139–146.",
        "statement": "Adota controle estatal de produção vital e recursos como regra econômica geral, com patrimônio produtivo público.",
        "basis": "declaration",
        "publishedDate": "2026-07-20",
        "accessedDate": "2026-10-08"
      },
      {
        "sourceTitle": "Prabowo Subianto — discurso próprio14/08/2026, original oficial",
        "locator": "Discurso14/08/2026: titularidade das empresas154; reinvestimento produtivo185–188.",
        "statement": "Afirma propriedade popular das empresas estatais e reinvestimento de seus lucros em desenvolvimento produtivo.",
        "basis": "declaration",
        "publishedDate": "2026-08-14",
        "accessedDate": "2026-10-08"
      }
    ],
    "rationale": "Participação pública produtiva em regra geral de setores vitais e empresas nacionais; direção moderada em economia mista.",
    "uncertainty": "Controle constitucional não equivale a propriedade jurídica de toda empresa nem maioria pública. Mantém mercados149 e parcerias estrangeiras159, elimina estatais improdutivas160; setor privado dinâmicoWEF79. Resultados e cifras não auditados.",
    "reviewedOn": "2026-10-08"
  },
  {
    "axis": "tec",
    "position": "moderate-first",
    "confidence": "medium",
    "claims": [
      {
        "sourceTitle": "Prabowo Subianto — discurso próprio14/08/2026, original oficial",
        "locator": "Discurso14/08/2026: indústria185–188 e biotecnologia pecuária191–192.",
        "statement": "Propõe adquirir tecnologia e propriedade intelectual para desenvolvimento industrial e utilizar clonagem pecuária.",
        "basis": "declaration",
        "publishedDate": "2026-08-14",
        "accessedDate": "2026-10-08"
      },
      {
        "sourceTitle": "Prabowo Subianto — briefing próprio20/07/2026, tradução oficial",
        "locator": "Briefing20/07/2026: integração digital nacional216–219; educação209–213.",
        "statement": "Prescreve digitalização nacional de serviços e integração entre dados sociais, educacionais, sanitários e de trabalho, com segurança.",
        "basis": "declaration",
        "publishedDate": "2026-07-20",
        "accessedDate": "2026-10-08"
      }
    ],
    "rationale": "Adoção tecnológica entre indústria, biotecnologia e serviços digitais nacionais, condicionada à segurança e avaliação de riscos.",
    "uncertainty": "Não restrita a telas escolares, nem defesa de toda tecnologia. Relato próprio28/06 alerta para destruição nuclear e riscos de IA; dados integrados devem ser protegidos216–218; compromisso ambiental original14/08,217. Não autorização para alteração humana irrestrita.",
    "reviewedOn": "2026-10-08"
  },
  {
    "axis": "int",
    "position": "moderate-second",
    "confidence": "medium",
    "claims": [
      {
        "sourceTitle": "Prabowo Subianto — UNGA23/09/2025, excertos oficiais UNISPAL",
        "locator": "ExcertosUNISPAL23/09/2025: parágrafo próprio depeacekeeping, várias zonas de conflito e onde guardar paz; autorizaçãoConselho/Assembleia.",
        "statement": "Oferece contingentes armados para guardar a paz sob autorização das Nações Unidas em múltiplos conflitos.",
        "basis": "declaration",
        "publishedDate": "2025-09-23",
        "accessedDate": "2026-10-08"
      }
    ],
    "rationale": "Aceita atuação militar coletiva condicionada à ONU; direção moderada intervencionista, sem guerra unilateral.",
    "uncertainty": "Excertos, não discurso inteiro. Conselho e Assembleia condicionam a oferta, acompanhada de assistência e negociação; PDF preparadoGeneral Debate enumeraGaza/Palestina, reproduçãoUNISPAL é mais ampla. Não envio realizado, conquista ou agência militar irrestrita.",
    "reviewedOn": "2026-10-08"
  },
  {
    "axis": "com",
    "position": "moderate-second",
    "confidence": "medium",
    "claims": [
      {
        "sourceTitle": "Prabowo Subianto — Davos 2026 special address, full transcript",
        "locator": "WEF22/01/2026, própria abertura comercial74–79; autossuficiência alimentar e energética33/73.",
        "statement": "Defende redução de barreiras e acordos de livre-comércio como orientação internacional, sem abandonar autossuficiência estratégica.",
        "basis": "declaration",
        "publishedDate": "2026-01-22",
        "accessedDate": "2026-10-08"
      }
    ],
    "rationale": "Abertura comercial geral declarada, com proteção de interesses estratégicos.",
    "uncertainty": "Autossuficiência nacional e coordenação de recursos permanecem contrapontos. Discurso14/08/2026,196–201 distingue monitoramento exportador de monopólio comercial de uma só empresa; não liberalização de toda tarifa ou mercado.",
    "reviewedOn": "2026-10-08"
  }
];
export const ranking675Public03Proposed: RankingPublic03ArchiveEntry[] = ranking675Public03Before.map(before => {
 const after: RankingPublic03ArchiveEntry = {...structuredClone(before),
  sources: [...structuredClone(before.sources), ...ranking675Public03NewSources],
  period: 'Declarações próprias23/09/2025 e22/01,28/06,20/07,14/08/2026; não auditoria de execução',
  vec: Object.fromEntries(AXIS_KEYS.map(axis => [axis,50])) as ReferenceEntry['vec'],
  evidence: {}, axisEvidence: {}, coding: {},
  rationale: 'Defende patrimônio produtivo público, tecnologia multissetorial e abertura comercial, com operações armadas condicionadas à ONU.',
  caveats: 'Declarações datadas, não execução comprovada. Propriedade e mercados coexistem; controle de exportações não equivale a monopólio. Oito eixos desconhecidos: investimento estratégico não fixa a regra geral de alocação; amizade não estabelece orientação militar. Fontes e vetores anteriores completos preservados no arquivo de reconciliação. Acesso direto e recuperação por índice distinguidos nas fontes.'
 };
 for (const input of ranking675Public03Coding) {
  const coded = codeReferenceAxis(input, after.sources);
  after.vec[input.axis] = coded.value; after.evidence[input.axis] = coded.evidence;
  after.axisEvidence![input.axis] = coded.axisEvidence; after.coding![input.axis] = coded.coding;
 }
 return after;
});
export function reconcileRanking675Public03(entry: ReferenceEntry): ReferenceEntry {
 const index = ranking675Public03Before.findIndex(before => before.id === entry.id);
 if(index < 0) return entry;
 const proposed = ranking675Public03Proposed[index];
 if(JSON.stringify(entry) === JSON.stringify(proposed)) return entry;
 if(JSON.stringify(entry) !== JSON.stringify(ranking675Public03Before[index])) throw new Error('Ranking public03 whole prior object changed: '+entry.id);
 return structuredClone(proposed);
}
