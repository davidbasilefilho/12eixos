# UI verification — 7 October 2026 bounded local checkpoint

Functional QA passed for the checked flows. Reference fidelity does **not** pass; no publication or complete-product claim is supported.

## Environment and flow

Browser plugin not available. Used Playwright 1.64.0 with system `/usr/bin/chromium` against `http://127.0.0.1:5173`, Vite dev server, React/Vite application. Playwright is isolated in `/tmp/12eixos-browser`; no browser dependency was added to product packages. Screenshots and scripts are preserved outside the repository in `/workspace/12eixos-deliverables/ui`.

Flow under test: landing → 36/60/240 quiz → automatic answer advance → reload preserving question order → previous question and changed answer → complete quiz → results → direct result URL after local storage is cleared → axis detail → exported PNG. Theme and mobile menu controls were also exercised.

## Repairs verified

- Removed duplicate ID-based media renderer from `App.tsx`; UI now uses `reference-media.tsx` and the portrait manifest, including prefixed regional aliases. Restored 14 already packaged, already documented legacy portraits to that manifest. Dimensions retain the existing thumbnail presentation. Failed image requests remove the image rather than leaving a broken frame; a deliberately aborted secondary portrait still allowed export.
- Copied missing flag files byte-for-byte from preserved `NEWpublic/assets/flags` into Vite-served `public/assets/flags`, including period variants. Existing served files were retained; no differing duplicates and no manually authored SVG. Served tree contains 207 SVG files. Original provenance documents are preserved.
- Replaced blocked Google Fonts CSS with locally bundled Latin/Latin Extended DM Sans and Literata variable fonts, normal/italic, with original OFL notices. Added an empty favicon data URI to avoid the browser's unrelated favicon 404. Final matrix has no console errors.
- Matching and methodology prose now states the six-axis gate, exact cited source correspondence, documented-axis restriction on all four components, and comparability limits.
- Actual PNG inspection found overlapping hero/figure text and six very narrow secondary-figure columns. Scoped fixed-capture styles now keep the canvas independent of viewport, contain long rationale/source copy, show secondary figures as compact rows, and state when countries lack sufficient evidence. Preserved before/after PNGs demonstrate the repair.

## Results and evidence

| Check | Result | Evidence |
| --- | --- | --- |
| Page identity / meaningful content | Pass | `browser-results.json`: 120 rendered states, page title and H1 recorded |
| Framework overlay / runtime errors | Pass | No overlays; zero recorded browser errors in final matrix |
| Local media / horizontal overflow | Pass | Zero broken images and zero horizontal overflow across matrix; active catalog media inventory has no requested file gaps |
| Routes / responsive / themes | Pass for checked states | 1440×1080, 768×1024, 390×844; light/dark; landing, all quiz starts, `/quiz/36`, `/eixos`, all 12 axis details, methodology, valid result URL |
| All quiz lengths | Pass | `flows.json`: 36, 60 and 240 completed; reload/back/change answer, then direct URL without stored state |
| Result → axis navigation | Pass | First “Entenda este eixo” navigates to `/eixos/est` |
| Manual/system theme and menu | Pass | `states.json`, `flows.json`: system light→dark follows OS, manual dark survives reload; theme menu keeps body overflow visible; mobile dialog navigates to methodology |
| Keyboard / reduced motion | Pass for checked interaction | Numeric key 1 advances when focus is on question content; reduced-motion context used in state and route checks |
| Export | Pass | `export-checks.json`: desktop/mobile × dark/light downloads, no rendered text beyond canvas; every PNG is 1440×1920; missing secondary portrait omitted and download succeeds |
| Unknown axis presentation | Pass | `unknown-check.json`, `axis-unknown-expanded.png`: Social-democracia appears as “— / Não estimado” in unknown Federal/Unitário group, without a bar, and is absent from documented buckets |
| Build | Pass | `bun run build` after final media/export edits. JS 1,297.64 kB, gzip 398.06 kB; chunk warning remains |
| Approved reference fidelity | **Fail / incomplete** | Direct `view_image` comparison of reference and rendered landing/results; ledger below |

The first `states.json` string probe (`unknownText: false`) and first `flows.json` selector probe (`unknownSection: 0`) used an incorrect string/class and were not evidence of a product absence. The exact selector, expanded group, explicit profile assertion, and screenshot in `unknown-check.json` supersede those probes. Likewise, initial export overflow detection included `display:none` secondary period text at zero-sized rectangles; final checks exclude non-rendered nodes and report no actual canvas overflow. Secondary periods are omitted from the compact PNG, while the primary figure period and source remain visible and full periods remain on the result page.

## Reference comparison ledger

Inspected approved `references/landing-dark.png` and `references/results-dark.png` alongside the latest rendered desktop captures with `view_image`; also inspected repaired dark/light exports and mobile results. Data and example percentages in references are illustrative, not imported evidence.

| Comparison point | Current evidence and disposition |
| --- | --- |
| Header scale/navigation | Rendered wordmark is much smaller and header contains additional axis/method navigation. Material mismatch remains. |
| Landing map/materiality | Rendered map is a large bright blue globe silhouette behind the copy; reference uses finer orange/blue cartography and texture. Material mismatch remains. |
| Landing preview composition | Current documented-profile panel differs structurally from reference two-column axes/radar + comparison footer. Material mismatch remains. |
| Steps/media | Reference illustrated books/globe/map stacks are replaced by small UI icons and revised text. Material mismatch remains. |
| Result composition/density | Reference fits summary/explanation/12-axis cards in 1799 px; current result is a much longer editorial section with separate match catalogs. Material mismatch remains. |
| Typography/palette | Fonts now load locally and semantic orange/blue/mineral palette is intact, but overall sizes, body density, and map treatment do not match reference. |
| Export legibility | Before PNG had overlap and narrow wrapped names. After PNG has readable principal figure, ideology, 12 axes, secondary names and percentages, explicit country empty states, and visible final disclaimer. Fixed functionality/legibility; exact reference composition still not signed off. |
| Above-the-fold copy | Current landing deck/preview labels and result heading differ from approved image copy. Existing deviations retained in this bounded repair; no exact copy-fidelity claim. |

## Remaining limitations

- This is a bounded functional/media repair, not a completed redesign. Material fidelity discrepancies remain and block overall visual signoff.
- Eight historical research portrait gaps in `docs/assets-expansion-portraits.md` remain documented; unavailable manifest entries render no image. Every **currently integrated** catalog person resolves to a packaged portrait.
- Country match empty states reflect the current evidence gate. Packaging flags does not make country vectors eligible.
- Chromium only; no Safari/Firefox, screen-reader, full contrast audit, all hover/pressed states, or every scoring input pattern was assessed. Route matrix used reduced motion; motion fidelity was not signed off.
- Full quiz answer runs establish working completion and URL reconstruction, not independent validation of source semantics or editorial vector correctness. Repository scoring/catalog tests are reported separately.
- Bundle size warning and unfinished bespoke-CSS migration remain.

## Repeatable scripts

Scripts are in `/workspace/12eixos-deliverables/ui/scripts`: `routes.mjs`, `flows.mjs`, `states.mjs`, `export.mjs`, `unknown.mjs`. Runtime prerequisites: Node 24, installed Playwright, system Chromium, Vite app on `127.0.0.1:5173`, writable evidence directory. To rerun without product dependency changes, install Playwright into `/tmp/12eixos-browser` with an explicit npm cache under `/tmp`, copy the saved scripts there so ESM package resolution finds Playwright, and run each with Node. Scripts contain explicit environment paths; update Chromium/output/base URL paths for another machine. Fonts/license binaries are part of product source; screenshot PNGs are deliverables outside source. Do not run source edits during the matrix: HMR can invalidate a navigation context.

No push, merge, deploy, or Site creation occurred.

## Subsequent accepted data-batch checkpoint — 512 records

After bounded documentary reviews accepted by the root agent, integrated six current countries (11 coded axes), four public figures (15), four historical figures (9), four historical countries (8), and complete recoding overlays for four existing current countries (20). Coding metadata remains on each record. Overlays run **after** legacy corrections, preserve original source objects, replace the full vector/evidence/mapping before adding supported claims, and never inherit generic grades on uncoded axes.

Final counts: 512 records — 206 ideologies, 42 public figures, 51 historical figures, 130 current countries and 83 historical countries. Structural ranking: 60 profiles — 25 ideologies, 18 public figures, 16 historical figures and one current country (Uruguay). Twenty-two profiles retain coding metadata for 63 axes. Documentary coding does not certify all remaining historical/legacy vectors. The gate remains six documented axes.

The immutable integrated baseline audit remains 209 unsupported directional axes in 35 profiles. Live catalog after these overlays has **196 unsupported directional axes in 31 profiles**: 13 debt axes removed, not 48. The preserved twelve-number arrays for Germany/Denmark/Uruguay/New Zealand are the original **raw base vectors** from `9db0807`, which differ from prepared/corrected integrated vectors. All four raw arrays were compared exactly against `git show 9db0807:src/data/references.ts`; they are recovery/audit evidence rather than live score values.

Final full Bun suite: **28 pass, 0 fail, 49,632 assertions**. Final build passes TypeScript/Vite (6,566 modules); JS 1,374.47 kB, gzip 422.53 kB. `git diff --check` passes. Raw test output, counts, diff-check output and an explicitly labeled recorded build-result summary are in `/workspace/12eixos-deliverables/validation/latest`.

Targeted browser regression uses the immutable built preview at **`http://127.0.0.1:4173`** (development HMR invalidated an earlier attempt; it was not treated as a product failure). Preserved the initial 120-state matrix separately. `/workspace/12eixos-deliverables/ui/checkpoint-batches/browser-results.json` records 16 country-axis states (est/rep/rel/com × 1440/390 × light/dark), four result ranking assertions and four actual PNG downloads. All targeted states show zero runtime/console errors, zero broken images and no horizontal overflow. Germany renders 80 for est/rep, 40 for com, and “Não estimado” without a direction bar for rel; Uruguay is the sole ranked current country. All four exported PNGs are 1440×1920, include the now-eligible Uruguay and were inspected for readability. Repeatable `batches.mjs` is preserved in the scripts directory.

A manifest of the 207 **existing packaged** flag SVG files now prevents missing identities from making failed requests. No new country flag or historical substitute was invented. The accepted batches add 18 explicit media gaps: eight new figure portraits and ten new country flags. They render no image; source identity, displayed claims and matching never depend on a photo or flag. Exact gap IDs are preserved in `validation/latest/catalog-counts.json`. The earlier assertion that all then-integrated figures had media applies only to the pre-batch snapshot.

This checkpoint adds sourced records and safe media omission; the reference-fidelity limitations above remain. No push, merge, deploy or Site creation occurred. The root artifact manifest will record the final immutable commit for this source/evidence package.
