import type { AxisKey, ReferenceEntry, ReferenceSource } from './references';
import { codeReferenceAxis } from '../lib/reference-coding';

/** Integrated primary referent; one located axis, without rank eligibility. */
const reviewedOn='2026-10-08';
const axes:AxisKey[]=['est','rep','pod','imi','dip','int','eco','con','com','rel','mor','tec'];
const essay:ReferenceSource={
 title:'Future Primitive — John Zerzan, 1994 collection / online author text',
 url:'https://theanarchistlibrary.org/library/john-zerzan-future-primitive',
 note:'Corpo autoral 16–176 efetivamente lido; encerramento 174–176 afirma vida entre iguais e sem dominação. Metadado autoral confirma coletânea Autonomedia 1994; texto hospedado não foi comparado página a página com exemplar impresso. Não valida alegações antropológicas ou científicas.',
};
const interview:ReferenceSource={
 title:'If the Future Isn’t Somehow Primitive, There Won’t Be a Future — Zerzan interview, 22 January 2016',
 url:'https://www.johnzerzan.net/articles/disinfo.html',
 note:'Reprodução primária na página do autor; metadado identifica entrevista Brian Whitney/Disinfo 22 janeiro 2016. Respostas autorais 13–14/16–20/22/25 efetivamente lidas. Introdução elogiosa do entrevistador e alegações causais não usadas como prova empírica.',
};
const bibliography:ReferenceSource={
 title:'John Zerzan bibliography — Future Primitive, Autonomedia 1994',
 url:'https://johnzerzan.net/books/',
 note:'Inventário autoral efetivamente aberto; entrada Future Primitive, Autonomedia 1994 estabelece data da coletânea, não posição de eixo nem identidade textual com revisão 2012.',
};
const sources=[essay,interview,bibliography];
const technology=codeReferenceAxis({axis:'tec',position:'strong-second',confidence:'medium',
 claims:[{sourceTitle:interview.title,locator:'Author replies to worldview/1994 retrospective/community questions; actual lines13–14/16–20; interview metadata line9',
 statement:'Rejeita civilização industrial tecnológica e reformas que preservem a domesticação; defende vida comunitária não industrial.',
 basis:'declaration',publishedDate:'Disinfo interview 22 January 2016, identified on author-hosted primary reproduction',accessedDate:reviewedOn}],
 rationale:'A crítica geral da modernização industrial e nanotecnológica é constitutiva do programa, não oposição isolada a uma aplicação.',
 uncertainty:'Ferramentas simples e fogo no ensaio 48–57 são contraponto: não rejeita toda técnica. Não imputa resposta sobre toda intervenção corporal. Alegações históricas, antropológicas, médicas e causais do autor permanecem não verificadas.',
 relatedQuestionIds:['tecnologia_02','tecnologia_08'],reviewedOn},sources);
export const ideologyProgramBatch04:ReferenceEntry[]=[{
 id:'ideology-program-anarcho-primitivism-zerzan-1994-2016',
 name:'Anarcoprimitivismo: crítica da civilização de Zerzan, 1994–2016',
 kind:'ideology',category:'ideology',
 period:'Future Primitive, coletânea Autonomedia 1994; confirmação autoral em entrevista 22 janeiro 2016',
 vec:{...Object.fromEntries(axes.map(axis=>[axis,50])) as Record<AxisKey,number>,tec:technology.value},
 sources,evidence:{tec:technology.evidence},axisEvidence:{tec:technology.axisEvidence},coding:{tec:technology.coding},
 rationale:'Defende vida comunitária não industrial entre iguais. Valores são âncoras editoriais, não medidas.',
 caveats:'Só TEC documentado; outros onze eixos desconhecidos e perfil sem elegibilidade. Recusa de um projeto constitucional detalhado não é recusa de defender valores. Este exemplar único não duplica uma doutrina pelo ano. Registro original 1994 e seus valores/fontes preservados separadamente; não transfere EST78/TEC3 anteriores. Antropologia e alegações científicas não validadas.',
}];
export const ideologyProgramBatch04Audit={reviewedOn,id:ideologyProgramBatch04[0].id,
 sourceScope:'Actual author essay and 2016 affirmation; bibliography establishes the 1994 collection, not all edition equivalence.',
 supportedAxes:['tec'],unknownAxes:axes.filter(axis=>axis!=='tec'),
 ontologyScope:'One located normative primary referent; productive-form contrast with IWA, not author/date uniqueness. No all 75 independence or six-axis qualification.',
 integrationStatus:'Accepted and imported primary candidate; one located TEC axis, eleven unknown, unranked. No all75 independence certification.'};

/** Complete original integrated profile, not raw BASE and never inserted twice. */
export const ideologyProgramBatch04PreviousSnapshot:ReferenceEntry = {
  "id": "ideology-left-anarcho-primitivism",
  "name": "Anarcoprimitivismo",
  "period": "Future Primitive, 1994",
  "rationale": "Zerzan critica a civilização industrial, a tecnologia e instituições de dominação, defendendo formas de vida não industriais.",
  "caveats": "É uma vertente contemporânea minoritária e criticada por generalizações sobre sociedades pré-históricas; o perfil representa os argumentos do ensaio.",
  "sources": [
    {
      "title": "Future Primitive — John Zerzan",
      "url": "https://theanarchistlibrary.org/library/john-zerzan-future-primitive",
      "note": "Ensaio primário de 1994 que expõe a crítica anarcoprimitivista à tecnologia, divisão do trabalho e civilização."
    }
  ],
  "kind": "ideology",
  "category": "ideology",
  "vec": {
    "est": 78,
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
    "tec": 3
  },
  "evidence": {
    "est": "medium",
    "tec": "medium"
  },
  "axisEvidence": {
    "est": {
      "sourceTitles": [
        "Future Primitive — John Zerzan"
      ],
      "rationale": "O texto rejeita instituições centralizadas em favor de organização local."
    },
    "tec": {
      "sourceTitles": [
        "Future Primitive — John Zerzan"
      ],
      "rationale": "A rejeição explícita da tecnologia industrial sustenta a direção forte ao polo biológico/natural."
    }
  }
};
