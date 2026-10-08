import type {ReferenceEntry} from './references';
import {codeReferenceAxis,type ReferenceAxisCoding} from '../lib/reference-coding';

// Unimported proposal, dependent on exact approved partial01 output.
export const ranking675HistoricalFigure02OriginalRecords:Record<string,ReferenceEntry>={
  "na-george-washington": {
    "id": "na-george-washington",
    "name": "George Washington",
    "aliases": [],
    "kind": "person",
    "category": "historical-figure",
    "period": "Farewell Address,1796",
    "rationale": "Defende escolha popular, limites constitucionais ao poder, paz com defesa preparada, alianças restritas e comércio imparcial.",
    "caveats": "1732-02-22–1799-12-14, identidade MountVernon. República e escravidão historicamente excludentes. Advertências contra partidos/associações limitam pluralismo; preparação defensiva e alianças temporárias limitam neutralidade. União não foi inferida como unitário/federal; legalidade não foi transformada em eixo pod.",
    "sources": [
      {
        "title": "First Inaugural Address, 1789",
        "url": "https://www.presidency.ucsb.edu/documents/inaugural-address-16",
        "note": "Transcrição do discurso inaugural de Washington, registro primário hospedado pelo American Presidency Project."
      },
      {
        "title": "Washington: Farewell Address (1796)",
        "url": "https://avalon.law.yale.edu/18th_century/washing.asp",
        "note": "Texto primário efetivamente lido, corpo20–115, assinatura; ano1796 sem inventar dia."
      },
      {
        "title": "MountVernon: vida de George Washington",
        "url": "https://www.mountvernon.org/george-washington/biography",
        "note": "Corpo institucional efetivamente lido: nascimento22Fev1732; identidade sem eixos."
      },
      {
        "title": "MountVernon: morte de George Washington",
        "url": "https://www.mountvernon.org/george-washington/death",
        "note": "Corpo institucional efetivamente lido: morte14Dez1799; identidade sem eixos."
      }
    ],
    "vec": {
      "est": 50,
      "rep": 60,
      "pod": 40,
      "imi": 50,
      "dip": 40,
      "int": 60,
      "eco": 50,
      "con": 50,
      "com": 40,
      "rel": 50,
      "mor": 50,
      "tec": 50
    },
    "evidence": {
      "rep": "medium",
      "dip": "medium",
      "int": "medium",
      "com": "medium",
      "pod": "medium"
    },
    "axisEvidence": {
      "rep": {
        "sourceTitles": [
          "Washington: Farewell Address (1796)"
        ],
        "rationale": "Subordina poder a escolha popular, alteração constitucional e controles recíprocos. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Critica partidos e associações oposicionistas; não democracia universal contemporânea."
      },
      "dip": {
        "sourceTitles": [
          "Washington: Farewell Address (1796)"
        ],
        "rationale": "Prefere relações pacíficas à hostilidade, admitindo guerra defensiva. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Admite defesa preparada e escolha de guerra conforme interesse e justiça."
      },
      "int": {
        "sourceTitles": [
          "Washington: Farewell Address (1796)"
        ],
        "rationale": "Distingue comércio de vínculos políticos estrangeiros e evita alianças permanentes. Codificação editorial moderate-first: âncora 60, faixa 55–70; a fonte não mede esse número. Limites: Honra compromissos existentes e permite alianças temporárias em emergências."
      },
      "com": {
        "sourceTitles": [
          "Washington: Farewell Address (1796)"
        ],
        "rationale": "Recomenda intercâmbio internacional liberal sem privilégios exclusivos, com regras negociadas. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Regras negociadas podem variar; não afirma eliminar todas as tarifas."
      },
      "pod": {
        "sourceTitles": [
          "Washington: Farewell Address (1796)"
        ],
        "rationale": "A limitação geral do poder pela liberdade e pelos direitos individuais, combinada à prevenção de usurpação e de militarização interna, orienta o eixo à liberdade. A âncora40 é moderada: defende também autoridade eficaz e obediência às leis, sem compromisso libertário absoluto. Codificação editorial moderate-second: âncora 40, faixa 30–45; a fonte não mede esse número. Limites: Critica associações que contrariem autoridades e partidos;69 recomenda mitigação pela opinião pública, não demonstra proibição penal. Não documenta execução nem direitos universais atuais. Declaração1796, não toda a carreira."
      }
    },
    "coding": {
      "rep": {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Washington: Farewell Address (1796)",
            "publishedDate": "1796",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "linhas20–22,55,70–73; contrapontos56–69",
            "statement": "Defende eleição, soberania constitucional popular e controles recíprocos contra usurpação."
          }
        ],
        "rationale": "Subordina poder a escolha popular, alteração constitucional e controles recíprocos.",
        "uncertainty": "Critica partidos e associações oposicionistas; não democracia universal contemporânea.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 60,
        "range": [
          55,
          70
        ]
      },
      "dip": {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Washington: Farewell Address (1796)",
            "publishedDate": "1796",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "linhas80,83–87,97,100,108–110",
            "statement": "Prescreve paz, justiça entre nações e contenção de hostilidade e guerra."
          }
        ],
        "rationale": "Prefere relações pacíficas à hostilidade, admitindo guerra defensiva.",
        "uncertainty": "Admite defesa preparada e escolha de guerra conforme interesse e justiça.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "int": {
        "axis": "int",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Washington: Farewell Address (1796)",
            "publishedDate": "1796",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "linhas94–100",
            "statement": "Rejeita vínculos políticos e alianças permanentes com potências estrangeiras."
          }
        ],
        "rationale": "Distingue comércio de vínculos políticos estrangeiros e evita alianças permanentes.",
        "uncertainty": "Honra compromissos existentes e permite alianças temporárias em emergências.",
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
            "sourceTitle": "Washington: Farewell Address (1796)",
            "publishedDate": "1796",
            "accessedDate": "2026-10-07",
            "basis": "declaration",
            "locator": "linhas101–102",
            "statement": "Prefere intercâmbio liberal e política comercial imparcial, sem preferências exclusivas."
          }
        ],
        "rationale": "Recomenda intercâmbio internacional liberal sem privilégios exclusivos, com regras negociadas.",
        "uncertainty": "Regras negociadas podem variar; não afirma eliminar todas as tarifas.",
        "reviewedOn": "2026-10-07",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      },
      "pod": {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Washington: Farewell Address (1796)",
            "locator": "Corpo45,54–61,69–73; contrapontos56–68",
            "statement": "Recomenda governo vigoroso somente com segurança da liberdade, proteção dos direitos pessoais e patrimoniais, controles contra usurpação e contenção de grandes estruturas militares.",
            "basis": "declaration",
            "publishedDate": "1796",
            "accessedDate": "2026-10-08"
          }
        ],
        "rationale": "A limitação geral do poder pela liberdade e pelos direitos individuais, combinada à prevenção de usurpação e de militarização interna, orienta o eixo à liberdade. A âncora40 é moderada: defende também autoridade eficaz e obediência às leis, sem compromisso libertário absoluto.",
        "uncertainty": "Critica associações que contrariem autoridades e partidos;69 recomenda mitigação pela opinião pública, não demonstra proibição penal. Não documenta execução nem direitos universais atuais. Declaração1796, não toda a carreira.",
        "reviewedOn": "2026-10-08",
        "version": "editorial-ordinal-v1",
        "value": 40,
        "range": [
          30,
          45
        ]
      }
    }
  }
};

export const ranking675HistoricalFigure02Proposal={
  "period": "Endosso coletivo à Constituição,17/9/1787; conselhos individuais no Farewell Address,1796.",
  "rationale": "Endossa a repartição constitucional entre União e Estados e defende escolha popular, limites ao poder, paz com defesa e comércio imparcial.",
  "caveats": "1732-02-22–1799-12-14, identidade MountVernon. República e escravidão historicamente excludentes. Advertências contra partidos/associações limitam pluralismo; preparação defensiva e alianças temporárias limitam neutralidade. União não foi inferida como unitário/federal; legalidade não foi transformada em eixo pod. Recorte de dois documentos: em1787 assina por ordem unânime da Convenção, sem autoria exclusiva; os outros cinco eixos vêm dos conselhos individuais de1796. Não afirma posição constante em toda a carreira. A Constituição recomendada fortalece competências e supremacia nacionais; preserva instituições estaduais e poderes de emenda, não soberania estadual absoluta. As disposições originais incluem escravidão e exclusões eleitorais. Federalismo decorre das cláusulas de competências e instituições efetivamente examinadas, não da palavra União; não usa emendas posteriores como texto original1787.",
  "sources": [
    {
      "title": "First Inaugural Address, 1789",
      "url": "https://www.presidency.ucsb.edu/documents/inaugural-address-16",
      "note": "Transcrição do discurso inaugural de Washington, registro primário hospedado pelo American Presidency Project."
    },
    {
      "title": "Washington: Farewell Address (1796)",
      "url": "https://avalon.law.yale.edu/18th_century/washing.asp",
      "note": "Texto primário efetivamente lido, corpo20–115, assinatura; ano1796 sem inventar dia."
    },
    {
      "title": "MountVernon: vida de George Washington",
      "url": "https://www.mountvernon.org/george-washington/biography",
      "note": "Corpo institucional efetivamente lido: nascimento22Fev1732; identidade sem eixos."
    },
    {
      "title": "MountVernon: morte de George Washington",
      "url": "https://www.mountvernon.org/george-washington/death",
      "note": "Corpo institucional efetivamente lido: morte14Dez1799; identidade sem eixos."
    },
    {
      "title": "Washington e Convenção: carta de transmissão da Constituição,17/9/1787",
      "url": "https://avalon.law.yale.edu/18th_century/translet.asp",
      "note": "Carta coletiva adotada e assinada por Washington como presidente, por ordem unânime da Convenção; reprodução Avalon de GPO1927/Tansill, com notas sobre reimpressão1894. Corpo21–27, assinatura32 e ordem34 efetivamente lidos; não autoria pessoal exclusiva nem prova de execução."
    },
    {
      "title": "Constituição proposta em1787: artigoI — repartição de poderes",
      "url": "https://avalon.law.yale.edu/18th_century/art1.asp",
      "note": "Reprodução inglesa Avalon das cláusulas originais1787, corpo21–116 efetivamente lido; notas editoriais sobre emendas posteriores não aplicadas ao recorte. Legislaturas estaduais e Senado; competências centrais, reserva de oficiais/treinamento da milícia aos Estados e limitações estaduais."
    },
    {
      "title": "Constituição proposta em1787: artigoIV — instituições estaduais",
      "url": "https://avalon.law.yale.edu/18th_century/art4.asp",
      "note": "Reprodução inglesa Avalon, cláusulas originais21–33 efetivamente lidas: atos e tribunais estaduais, consentimento das legislaturas à reorganização territorial e garantia de governo republicano. Cláusula de devolução de pessoas escravizadas preservada como contraponto histórico, não substituída pela nota de emenda posterior."
    },
    {
      "title": "Constituição proposta em1787: artigoV — poder estadual de emenda",
      "url": "https://avalon.law.yale.edu/18th_century/art5.asp",
      "note": "Reprodução inglesa Avalon, corpo18 efetivamente lido: participação das legislaturas/convenções estaduais em iniciativa e ratificação de emendas; proteção do sufrágio igual no Senado mediante consentimento do Estado."
    },
    {
      "title": "Constituição proposta em1787: artigoVI — supremacia nacional",
      "url": "https://avalon.law.yale.edu/18th_century/art6.asp",
      "note": "Reprodução inglesa Avalon, corpo19–21 efetivamente lido, incluindo supremacia federal sobre normas estaduais; constitui contraponto à autonomia absoluta. A cláusula sem teste religioso foi lida, mas não convertida isoladamente em novo eixo de religião."
    },
    {
      "title": "Constituição proposta em1787: artigoVII — ratificação estadual",
      "url": "https://avalon.law.yale.edu/18th_century/art7.asp",
      "note": "Reprodução inglesa Avalon, corpo19 efetivamente lido: entrada em vigor entre Estados ratificantes mediante convenções de nove Estados. Sem certificar prática posterior ou toda a trajetória presidencial."
    }
  ],
  "coding": {
    "axis": "est",
    "position": "moderate-first",
    "confidence": "high",
    "claims": [
      {
        "sourceTitle": "Washington e Convenção: carta de transmissão da Constituição,17/9/1787",
        "locator": "Corpo21–27; assinatura32 e ordem coletiva34; edição38–45",
        "statement": "Transmite e recomenda em nome da Convenção o desenho constitucional que cede poderes à União e preserva outros direitos dos Estados; defende consolidar a União.",
        "basis": "norm",
        "publishedDate": "1787-09-17",
        "accessedDate": "2026-10-08"
      },
      {
        "sourceTitle": "Constituição proposta em1787: artigoI — repartição de poderes",
        "locator": "Art.I§§2–4 (24,29,33–35,46), §8(69–97), §10(114–116)",
        "statement": "O desenho recomendado conserva legislaturas/executivos estaduais e sua participação eleitoral e militar, delegando tributação, comércio interestadual, guerra e competências enumeradas à União e limitando tratados, moeda e tarifas estaduais.",
        "basis": "norm",
        "publishedDate": "1787-09-17",
        "accessedDate": "2026-10-08"
      },
      {
        "sourceTitle": "Constituição proposta em1787: artigoIV — instituições estaduais",
        "locator": "Art.IV§§1–4 (21–33), especialmente§3(1)/§4",
        "statement": "Reconhece atos, tribunais e governos estaduais, exige consentimento de suas legislaturas à reorganização de Estados e lhes garante forma republicana; reserva autoridade federal sobre territórios.",
        "basis": "norm",
        "publishedDate": "1787-09-17",
        "accessedDate": "2026-10-08"
      },
      {
        "sourceTitle": "Constituição proposta em1787: artigoV — poder estadual de emenda",
        "locator": "Art.V,corpo18",
        "statement": "Dá aos Estados poderes de iniciativa e ratificação de emendas e impede privá-los de igualdade no Senado sem consentimento.",
        "basis": "norm",
        "publishedDate": "1787-09-17",
        "accessedDate": "2026-10-08"
      },
      {
        "sourceTitle": "Constituição proposta em1787: artigoVI — supremacia nacional",
        "locator": "Art.VI§2,corpo20",
        "statement": "Estabelece supremacia da Constituição, leis federais constitucionais e tratados sobre constituições e leis estaduais.",
        "basis": "norm",
        "publishedDate": "1787-09-17",
        "accessedDate": "2026-10-08"
      }
    ],
    "rationale": "A recomendação assinada abrange repartição territorial de autoridade: governos/legislaturas estaduais, representação e consentimento estaduais protegidos, competências nacionais enumeradas e milícia parcialmente estadual. A âncora60 representa federalismo moderado no recorte de endosso: a própria carta exige ceder soberania e consolidar a União, e o desenho inclui ampla autoridade e supremacia nacionais. Não equivale a autonomia estadual irrestrita ou mede sua execução.",
    "uncertainty": "Endosso coletivo institucional assinado por Washington em1787, não autoria pessoal exclusiva. O constitucionalismo territorial não é transferido de sua biografia nem da simples palavra federal. A preservação de instituições estaduais é direta, mas autonomia fiscal e legislativa efetiva posterior não foi auditada. Os cinco outros eixos têm documento próprio1796; não inferir continuidade em cada ano intermediário. Art.I§9 eIV§2 preservam escravidão; a estrutura federativa não implica direitos universais.",
    "reviewedOn": "2026-10-08"
  }
};

export function reconcileRanking675HistoricalFigure02(entries:ReferenceEntry[]):ReferenceEntry[]{return entries.map(existing=>{
const before=ranking675HistoricalFigure02OriginalRecords[existing.id];if(!before||JSON.stringify(existing)!==JSON.stringify(before))return existing;
const p=ranking675HistoricalFigure02Proposal;const c=codeReferenceAxis(p.coding as ReferenceAxisCoding,p.sources);
return {...existing,period:p.period,rationale:p.rationale,caveats:p.caveats,sources:p.sources,vec:{...existing.vec,est:c.value},evidence:{...existing.evidence,est:c.evidence},axisEvidence:{...existing.axisEvidence,est:c.axisEvidence},coding:{...existing.coding,est:c.coding}};
});}
