/** Rebuild qualitative selection metadata only; never generates coding or scores.
 * Run from the repository root: bun scripts/build-ideology-selection.ts.
 */
import fs from 'node:fs';
import { createHash } from 'node:crypto';
const buf = fs.readFileSync('docs/research/ideology75/selected-75.json');
if (createHash('sha256').update(buf).digest('hex') !== 'ef57dcfc83eb3ba6f71a4db2bdc43fc95c69993715253967ed2f1ca3d4761883') throw new Error('Research input changed; review and update the identity ledger first.');
const data = JSON.parse(buf.toString());
const resolutions = JSON.parse(fs.readFileSync('docs/research/ideology75/identity-resolution.json', 'utf8'));
if (resolutions.length !== 75 || new Set(resolutions.map(row => row.catalogId)).size !== 75) throw new Error('Expected 75 distinct resolved IDs.');
for (let i = 0; i < data.entries.length; i++) {
  if (data.entries[i].suggestedId !== resolutions[i].researchId) throw new Error('Resolution order changed.');
}
const profiles=data.entries.map((e,i)=>({
 researchId:e.suggestedId,id:resolutions[i].catalogId,existing:resolutions[i].relationship==='same-bounded-referent',name:e.namePT,period:e.scopePeriod,
 rationale:e.definition+' '+e.distinctiveMechanism,
 caveats:[...e.caveats,'Pesquisa qualitativa de seleção; não atribui novos scores nem certifica os 12 eixos. Lacunas não equivalem a neutralidade.'].join(' '),
 family:e.family,neighbors:e.nearestSelectedNeighbors.map(n=>({id:resolutions.find(r=>r.researchId===n.id).catalogId,difference:n.difference})),
 sources:e.sourceRefs.map(r=>{const s=data.sourceRegistry[r.sourceId];return{title:s.title,url:s.url,note:[`Publicação: ${s.publishedDate}. Acesso registrado pela pesquisa: ${s.accessedDate}. Tipo: ${s.type}.`,`Localizador: ${r.locator}.`,`Leitura efetiva declarada na pesquisa: ${r.actualReadScope}`,r.retrievalMode?`Recuperação: ${r.retrievalMode}.`:'',r.note??''].filter(Boolean).join(' ')}}),
}));
fs.writeFileSync('src/data/reference-ideology75-profiles.ts',`/** Generated from docs/research/ideology75/selected-75.json and identity-resolution.json.
 * Qualitative research only. Scores are not generated from coverage prospects.
 * Input SHA-256: ef57dcfc83eb3ba6f71a4db2bdc43fc95c69993715253967ed2f1ca3d4761883.
 */\nimport type { ReferenceSource } from './references';\nexport interface IdeologySelectionProfile {researchId:string;id:string;existing:boolean;name:string;period:string;rationale:string;caveats:string;family:string;neighbors:{id:string;difference:string}[];sources:ReferenceSource[]}\nexport const ideology75Profiles: readonly IdeologySelectionProfile[] = ${JSON.stringify(profiles,null,2)};\n`);
