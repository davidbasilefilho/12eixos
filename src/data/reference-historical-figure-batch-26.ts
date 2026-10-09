import type {ReferenceEntry,ReferenceSource} from './references';
import {AXES} from '../lib/scoring';
import {codeReferenceAxis,type ReferenceAxisCoding} from '../lib/reference-coding';
/** Three absent deceased identities; selected own programmes remain partial proposals. */
const proposals = [
  {
    "id": "john-dewey",
    "name": "John Dewey",
    "period": "Democracy and Education,1916; capítuloVII, seleção",
    "rationale": "Defende participação democrática, interesses compartilhados e abertura entre grupos, com educação acessível para sustentar essa vida comum.",
    "caveats": "1859–1952, Columbia15 e editora116. Seleção filosófica geral, não todo livro ou trajetória. Não codifica política econômica, imigração ou moral social a partir da pedagogia. Termos civilizatórios e interpretação de Platão contextualizados; escola democrática não prova implementação política.",
    "sources": [
      {
        "title": "Dewey — Democracy and Education, ideal democrático selecionado",
        "url": "https://www.gutenberg.org/files/852/852-h/852-h.htm",
        "note": "Efetivamente630–660; núcleo próprio647–655. Transcritor9 admite erros possíveis. Não2319linhas inteiras ou todos capítulos."
      },
      {
        "title": "Columbia — JohnDewey, identidade",
        "url": "https://c250.columbia.edu/c250_celebrates/remarkable_columbians/john_dewey.html",
        "note": "Body15–23, anos1859–1952 em15; biografia não vetor."
      },
      {
        "title": "ColumbiaUniversityPress — DemocracyEducation, bibliografia",
        "url": "https://cup.columbia.edu/book/democracy-and-education/9780231558273/",
        "note": "72 e116 confirmam primeira obra1916 e anos de vida; edição2024 não o período do programa. Não usa comentário editorial como claim político."
      }
    ],
    "claims": [
      {
        "axis": "rep",
        "position": "moderate-first",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Dewey — Democracy and Education, ideal democrático selecionado",
            "publishedDate": "Democracy and Education,1916",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "647–655: ideal democrático e autoridade popular",
            "statement": "Prefere sociedade democrática de participação ampla e interesses recíprocos, rejeita autoridade externa e associa sufrágio à formação de governantes e governados."
          }
        ],
        "rationale": "Ideal geral abrange organização da sociedade e autoridade, além da gestão escolar; direção moderada de participação democrática.",
        "uncertainty": "Não detalha garantias constitucionais ou alternância; democracia é também modo de associação. Divisão laboral638 permanece possível; interpretação de Platão656–660 não programa próprio completo.",
        "reviewedOn": "2026-10-08"
      }
    ]
  },
  {
    "id": "william-james",
    "name": "William James",
    "period": "The Moral Equivalent of War,1910; declaração selecionada",
    "rationale": "Propõe substituir guerras por disciplina cívica e serviço social compulsório, preservando virtudes marciais dentro de uma sociedade pacífica.",
    "caveats": "1842–1910, Harvard51. Paz normativa condicionada a disciplina severa e serviço juvenil compulsório; não carreira inteira. Ideal de masculinidade310 e analogia racista323 são limites explícitos. Não infere propriedade econômica do termo equilíbrio socialista295/299, nem nota tecnológica de citações de Wells315–321.",
    "sources": [
      {
        "title": "James — The Moral Equivalent of War,1910",
        "url": "https://pressbooks.pub/writingtextbook/chapter/the-moral-equivalent-of-war-by-william-james/",
        "note": "Reprodução declarada de ProjectGutenberg233; título/autor/1910 e publicações237–245. Próprio278–315/321–323 lido;315–320 cita Wells.247 lido isoladamente, não todo ensaio ou original impresso."
      },
      {
        "title": "HarvardPsychology — WilliamJames, identidade",
        "url": "https://psychology.fas.harvard.edu/people/william-james",
        "note": "Body49–61, anos1842–1910 em51. Não usa profissão como evidência política."
      }
    ],
    "claims": [
      {
        "axis": "dip",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "James — The Moral Equivalent of War,1910",
            "publishedDate": "The Moral Equivalent of War,1910",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "295–298/304–314/321–323: paz e equivalente cívico",
            "statement": "Declara preferência por paz e proscrição da guerra entre povos civilizados, com substituição da disciplina militar por serviço cívico severo."
          }
        ],
        "rationale": "A finalidade geral explicitamente antimilitarista favorece moderação pacífica, sem apagar os meios disciplinares propostos.",
        "uncertainty": "Preserva virtudes marciais298–301, serviço compulsório307–311 e guerra até equivalente organizado312. Restrição a povos civilizados297 e analogia racista323 impedem descrição de pacifismo universal absoluto.",
        "reviewedOn": "2026-10-08"
      }
    ]
  },
  {
    "id": "leonard-trelawny-hobhouse",
    "name": "Leonard Trelawny Hobhouse",
    "period": "Liberalism,1911; capítuloII, §§1–3 selecionados",
    "rationale": "Defende garantias judiciais, igualdade perante a lei e liberdade de pensamento e expressão, com limites para proteger direitos alheios.",
    "caveats": "1864–1929, catálogo institucionalUPenn5. Primeira publicação1911; reprodução lista reimpressões até1944, não original cotejado. Admite coerção legal para proteger liberdade, ordem pública e direitos alheios, além de linguagem colonial177. Não supõe laissez-faire de um rótulo ou descreve prática histórica.",
    "sources": [
      {
        "title": "Hobhouse — Liberalism, liberdades civil e pessoal",
        "url": "https://www.gutenberg.org/files/28278/28278-h/28278-h.htm",
        "note": "Metadata0–122 e capítuloII134–207 efetivamente lidos. Primeira publicação1911/reimpressões70–71. Claims próprios155–165/171–186; frase de Locke160 distinguida. Não1513linhas ou livro inteiro."
      },
      {
        "title": "UniversityPennsylvania — Hobhouse, catálogo bibliográfico",
        "url": "https://onlinebooks.library.upenn.edu/webbin/book/lookupname?c=x&key=Hobhouse%2C+L.+T.+%28Leonard+Trelawny%29%2C+1864-1929",
        "note": "Body0–52; autoridade5 confirma nome completo1864–1929; edições1911 em24–26. Bodleian biografia retornou bloqueio13linhas e não foi certificada como body lido."
      }
    ],
    "claims": [
      {
        "axis": "pod",
        "position": "moderate-second",
        "confidence": "medium",
        "claims": [
          {
            "sourceTitle": "Hobhouse — Liberalism, liberdades civil e pessoal",
            "publishedDate": "Liberalism,1911",
            "accessedDate": "2026-10-08",
            "basis": "declaration",
            "locator": "155–165/171–186: garantias, pensamento e expressão",
            "statement": "Combate detenção e punição arbitrárias, exige garantias judiciais e sustenta liberdade de pensamento, expressão e culto compatível com direitos alheios."
          }
        ],
        "rationale": "Programa geral delimita coerção estatal e direitos pessoais em múltiplos domínios, além de um único benefício ou processo.",
        "uncertainty": "Lei também restringe indivíduos161–163; expressão e culto não absolutos175–186. Restrições de ordem pública e paternalismo colonial177 preservados. Não recodifica toda religião ou política econômica.",
        "reviewedOn": "2026-10-08"
      }
    ]
  }
];
export const historicalFigureBatch26:ReferenceEntry[]=proposals.map(p=>{
 const sources:ReferenceSource[]=structuredClone(p.sources);const e:ReferenceEntry={id:p.id,name:p.name,kind:'person',category:'historical-figure',period:p.period,rationale:p.rationale,caveats:p.caveats,sources,vec:Object.fromEntries(AXES.map(({key})=>[key,50])) as ReferenceEntry['vec'],evidence:{},axisEvidence:{},coding:{}};
 for(const raw of p.claims){const input=raw as ReferenceAxisCoding;const r=codeReferenceAxis(input,sources);e.vec[input.axis]=r.value;e.evidence[input.axis]=r.evidence;e.axisEvidence![input.axis]=r.axisEvidence;e.coding![input.axis]=r.coding;}return e;
});
