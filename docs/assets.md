# Asset attribution

## World map

- File: [`public/assets/world-map.svg`](../public/assets/world-map.svg)
- Source: [Wikimedia Commons — Blank world map Robinson projection.svg](https://commons.wikimedia.org/wiki/File:Blank_world_map_Robinson_projection.svg)
- Author: Justinkunimune; map borders based on [Natural Earth](https://www.naturalearthdata.com/), representing de facto territory status in 2022.
- License: [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). Attribution is included for provenance; the license does not require it.
- Source file dimensions: 2048 × 1038.75 SVG units (viewBox `-180 -91.296 360 182.592`); vector artwork scales without raster resolution limits.
- Source verification: packaged file SHA-1 `b4669e52c8f39094e482dcf94db64e2456107136`, matching the Wikimedia Commons original retrieved 2026-09-29.

The projection is Robinson, centered near 11°E. Preserve the full viewBox when using the map as cartographic texture. At its native aspect ratio (~1.97:1), `contain` avoids clipping; if a wide hero uses `cover`, center the image and expect the top/bottom edges to crop. Suggested integration path: `/assets/world-map.svg`; for example, a decorative `.world-map-art` background layer with centered positioning and low opacity. Keep the layer decorative (`aria-hidden="true"`) when it conveys no information.

## Country flags

The SVG files below are packaged under `public/assets/flags/`. Historical-government entries use the flag recognized for that entity and period; do not substitute the present-day national flag when the design differs. Keep the intrinsic aspect ratio shown below when fitting flags into equal-size image slots. The flag designs themselves may remain subject to national rules on official or political symbols independent of copyright.

| File | Source and attribution | License |
| --- | --- | --- |
| `uruguay.svg` | [Flag of Uruguay](https://commons.wikimedia.org/wiki/File:Flag_of_Uruguay.svg) | Public domain under Uruguayan law; simple geometry |
| `denmark.svg` | [Flag of Denmark](https://commons.wikimedia.org/wiki/File:Flag_of_Denmark.svg), Madden and other contributors | Public domain, simple geometry |
| `united-states.svg` | [Flag of the United States](https://commons.wikimedia.org/wiki/File:Flag_of_the_United_States.svg), Dbenbenn, Zscout370, Jacobolus, Indolences, Technion and other contributors | Public domain, simple geometry; based on U.S. flag law/specification |
| `singapore.svg` | [Flag of Singapore](https://commons.wikimedia.org/wiki/File:Flag_of_Singapore.svg), Government of Singapore (design), Zscout370 (vector) | Public domain/simple geometry |
| `germany.svg` | [Flag of Germany](https://commons.wikimedia.org/wiki/File:Flag_of_Germany.svg), SKopp, Madden and other contributors | Public domain, simple geometry and German official-work notice |
| `new-zealand.svg` | [Flag of New Zealand](https://commons.wikimedia.org/wiki/File:Flag_of_New_Zealand.svg) | Public domain |
| `france.svg` | [Flag of France](https://commons.wikimedia.org/wiki/File:Flag_of_France.svg), vector by SKopp | Public domain, simple geometry |
| `chile-up-1970.svg` | [Flag of Chile](https://commons.wikimedia.org/wiki/File:Flag_of_Chile.svg); same national flag used by Chile during the 1970–1973 Unidad Popular government | Public domain/CC0 dedication; retain source credit as requested under Chilean moral-rights law |
| `uk-attlee-1945.svg` | [Flag of the United Kingdom (3:5 land ratio)](https://commons.wikimedia.org/wiki/File:Flag_of_the_United_Kingdom_(3-5).svg); Union Flag in use during the 1945–1951 Attlee government | Public domain; Crown copyright expiry and public-domain mark |
| `weimar-republic.svg` | [Flag of Germany (3:2)](https://commons.wikimedia.org/wiki/File:Flag_of_Germany_(3-2).svg); black-red-gold Reich colors specified by Article 3 of the 1919 Weimar Constitution | Public domain, simple geometry |
| `yugoslavia-1974.svg` | [Flag of Yugoslavia (1946–1992)](https://commons.wikimedia.org/wiki/File:Flag_of_Yugoslavia_(1946-1992).svg); flag specified in Article 7 of the 1974 Constitution | Public domain, simple geometry; Commons notes symbol-display restrictions in some jurisdictions |
| `ussr-1977.svg` | [Flag of the Soviet Union](https://commons.wikimedia.org/wiki/File:Flag_of_the_Soviet_Union.svg); official symbol of the USSR | Public domain under Russian Civil Code Article 1259; Commons notes symbol-display restrictions in some jurisdictions |

The historical files `chile-up-1970.svg`, `uk-attlee-1945.svg`, `weimar-republic.svg`, `yugoslavia-1974.svg`, and `ussr-1977.svg` have intrinsic width:height ratios of `3:2`, `5:3`, `3:2`, `2:1`, and `2:1`, respectively. The USSR asset now follows the 1:2 width-to-length ratio specified by Article 170 of the [1977 USSR Constitution](https://www.marxists.org/history/ussr/government/constitution/1977/constitution-ussr-1977.pdf). Socialist-state symbols in the latter files are subject to restrictions in some jurisdictions; they identify historical entities and must remain labelled in that context.

## Additional profile flags

Each flag is stored locally as an SVG. Dimensions list the source and packaged file; ratios are width:height and remain intrinsic. `imperial-japan-1931.svg`, `chile-pinochet-1973.svg`, and `france-de-gaulle-1958.svg` are byte-for-byte aliases of the respective national-flag SVG cited below.

| Profile asset | Source file / creator | Dimensions and ratio | License / notes |
| --- | --- | --- | --- |
| `brazil.svg` | [Flag of Brazil](https://commons.wikimedia.org/wiki/File:Flag_of_Brazil.svg); design Raimundo Teixeira Mendes | 1,000 × 700 → 1,000 × 700; `10:7` | Public domain under Brazilian rules for official/government works; flag uses may be regulated. |
| `japan.svg` | [Flag of Japan](https://commons.wikimedia.org/wiki/File:Flag_of_Japan.svg); design source is the 1999 national-flag law; vector author listed as various | 900 × 600 → 900 × 600; `3:2` | Public-domain/simple geometry on Commons; preserve official-symbol context. |
| `india.svg` | [Flag of India](https://commons.wikimedia.org/wiki/File:Flag_of_India.svg); Government of India | 900 × 600 → 900 × 600; `3:2` | Public domain as simple geometry/common information; the flag/emblem is an official symbol. |
| `south-africa.svg` | [Flag of South Africa](https://commons.wikimedia.org/wiki/File:Flag_of_South_Africa.svg); design by Frederick Brownell, vector by Commons contributors | 900 × 600 → 900 × 600; `3:2` | Public domain under the South African Copyright Act for official texts and designs; flag use may be regulated. |
| `indonesia.svg` | [Flag of Indonesia](https://commons.wikimedia.org/wiki/File:Flag_of_Indonesia.svg); vector by Jayakatwang, based on statute | 900 × 600 → 900 × 600; `3:2` | Public domain/simple geometry. |
| `mexico.svg` | [Flag of Mexico](https://commons.wikimedia.org/wiki/File:Flag_of_Mexico.svg); vector by Omar Alejandro Covarrubias Neri, based on the 1968 arms by Francisco Eppens Helguera and Juan Manuel Gabino Villascán | 980 × 560 → 980 × 560; `7:4` | Commons cites Mexican Copyright Law, art. 14(VII), for the national emblem. |
| `turkey.svg` | [Flag of Turkey](https://commons.wikimedia.org/wiki/File:Flag_of_Turkey.svg); vector by David Benbennick, based on official specifications | 1,200 × 800 → 1,200 × 800; `3:2` | Public domain under Turkish law and as simple geometry; official-symbol use may be regulated. |
| `saudi-arabia.svg` | [Flag of Saudi Arabia](https://commons.wikimedia.org/wiki/File:Flag_of_Saudi_Arabia.svg); authoring authority listed as the Shura Council | 900 × 600 → 900 × 600; `3:2` | Public domain under Saudi rules as listed by Commons; official-symbol use may be regulated. |
| `paris-commune-1871.svg` | [Socialist red flag](https://commons.wikimedia.org/wiki/File:Socialist_red_flag.svg); R-41 | 450 × 300 → 450 × 300; `3:2` | Public-domain dedication/simple geometry. This is a symbolic red field, not a standardized or exclusive flag of the Paris Commune. Socialist symbols face restrictions in some jurisdictions. |
| `us-new-deal-1933.svg` | [48-star U.S. flag (1912–1959)](https://commons.wikimedia.org/wiki/File:Flag_of_the_United_States_(1912-1959).svg); vector by jacobolus from public-domain flag specifications | 1,235 × 650 → 1,235 × 650; `1.9:1` | Public domain/simple geometry; exact flag in use during the 1933–1939 New Deal profile. |
| `brazil-estado-novo-1937.svg` | [Flag of Brazil (1889–1960)](https://commons.wikimedia.org/wiki/File:Flag_of_Brazil_(1889%E2%80%931960).svg); original design by Raimundo Teixeira Mendes | 1,000 × 700 → 1,000 × 700; `10:7` | Public domain under Brazilian rules and Public Domain Mark; 21 stars match the 1937–1945 period. |
| `imperial-japan-1931.svg` | Alias of [Flag of Japan](https://commons.wikimedia.org/wiki/File:Flag_of_Japan.svg); various vector contributors | 900 × 600 → 900 × 600; `3:2` | Same national flag artwork and license as `japan.svg`, used by the historical profile. |
| `prc-mao-1949.svg` | [Flag of the People’s Republic of China](https://commons.wikimedia.org/wiki/File:Flag_of_the_People%27s_Republic_of_China.svg); original design by Zeng Liansong | 900 × 600 → 900 × 600; `3:2` | Public domain/simple geometry; Commons notes government-symbol and communist-symbol restrictions in some jurisdictions. |
| `cuba-revolutionary-1959.svg` | [Flag of Cuba](https://commons.wikimedia.org/wiki/File:Flag_of_Cuba.svg); design by Miguel Teurbe Tolón and Narciso López | 1,200 × 600 → 1,200 × 600; `2:1` | Public domain/simple geometry. Commons separately warns that socialist symbols may be restricted in some jurisdictions. |
| `portugal-estado-novo-1933.svg` | [Flag of Portugal](https://commons.wikimedia.org/wiki/File:Flag_of_Portugal.svg); original design by Columbano Bordalo Pinheiro; vector by Vítor Luís Rodrigues and António Martins-Tuválkin | 600 × 400 → 600 × 400; `3:2` | The 2004 vector set was commissioned by the Portuguese Presidency for public-domain release; Commons also applies the Public Domain Mark. |
| `chile-pinochet-1973.svg` | Alias of [Flag of Chile](https://commons.wikimedia.org/wiki/File:Flag_of_Chile.svg); same national design as `chile-up-1970.svg` | 900 × 600 → 900 × 600; `3:2` | Same public-domain/CC0 source and credit as `chile-up-1970.svg`; this profile uses the flag of the state, not a junta emblem. |
| `roc-taiwan-1949.svg` | [Flag of the Republic of China](https://commons.wikimedia.org/wiki/File:Flag_of_the_Republic_of_China.svg); attributed to Sun Yat-sen | 900 × 600 → 900 × 600; `3:2` | Public domain under Taiwan Copyright Act art. 9 for common symbols; official-symbol restrictions may apply. |
| `france-de-gaulle-1958.svg` | Alias of [Flag of France](https://commons.wikimedia.org/wiki/File:Flag_of_France.svg); vector by SKopp | 900 × 600 → 900 × 600; `3:2` | Same public-domain/simple-geometry source as `france.svg`. |
| `yugoslavia-1974.svg` | [Flag of Yugoslavia (1946–1992)](https://commons.wikimedia.org/wiki/File:Flag_of_Yugoslavia_(1946-1992).svg) | 1,000 × 500 → 1,000 × 500; `2:1` | Public domain/simple geometry; flag specified in Article 7 of the 1974 Constitution. |
| `ussr-1977.svg` | [Flag of the Soviet Union](https://commons.wikimedia.org/wiki/File:Flag_of_the_Soviet_Union.svg); official symbol of the USSR | 1,200 × 600 → 1,200 × 600; `2:1` | Public domain under Russian Civil Code art. 1259 for state symbols. Ratio now matches 1977 Constitution art. 170; symbolic restrictions apply in some jurisdictions. |

## Historical figure portraits

The locally packaged files in `public/assets/portraits/` are intended for small editorial portraits. Source pixel dimensions are listed below; no image has been generated. Preserve attribution and license notices when reusing or adapting the files.

| File | Source / creator | Source dimensions | License |
| --- | --- | ---: | --- |
| `bernie-sanders.jpg` | [Sanders portrait square](https://commons.wikimedia.org/wiki/File:Sanders_portrait_square.jpg), U.S. Congress | 1200 × 1200 | U.S. Congress public domain |
| `nelson-mandela.jpg` | [Mandela minus Clinton](https://commons.wikimedia.org/wiki/File:Mandela_minus_Clinton.jpg), cropped from White House Photograph Office image in National Archives record NAID 2569290 | 310 × 479 | U.S. federal government public domain |
| `friedrich-hayek.jpg` | [Friedrich August von Hayek, 1981](https://commons.wikimedia.org/wiki/File:Friedrich_August_von_Hayek_1981.jpg), LSE Library | Original 3500 × 4601; packaged 609 × 800 (76,080 B) | Flickr Commons: no known copyright restrictions; credit LSE Library |
| `mahatma-gandhi.jpg` | [Mahatma Gandhi photo](https://commons.wikimedia.org/wiki/File:Mahatma_Gandhi_photo.jpg), Rudreshnnjadav | 300 × 392 | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/); credit Rudreshnnjadav |
| `john-stuart-mill.jpg` | [Portrait of John Stuart Mill](https://commons.wikimedia.org/wiki/File:John-stuart-mill_1.jpg), painting by George Frederic Watts | 366 × 458 | Public domain painting/reproduction (Public Domain Mark) |
| `karl-marx.jpg` | [Marx1866](https://commons.wikimedia.org/wiki/File:Marx1866.jpg), The Fort, London photographic company | Original 2416 × 3576; packaged 541 × 800 (93,261 B) | Public domain; Public Domain Mark |

## Additional historical-figure portraits

These are local JPEG thumbnails from the cited, non-generated source images. Original dimensions refer to the Commons source; packaged dimensions describe the local file actually used. Keep the stated credit and license link, especially for the CC BY asset.

| File | Source / creator | Original → packaged dimensions (ratio) | License / notes |
| --- | --- | --- | --- |
| `albert-einstein.jpg` | [Albert Einstein 1947 square cropped](https://commons.wikimedia.org/wiki/File:Albert_Einstein_1947_square_cropped.jpg); original photograph by Oren Jack Turner, crop derivative by KeyboardSpellbounder | 449 × 450 → 449 × 450 (`1:1`) | U.S. public domain; copyright was not renewed. |
| `friedrich-engels.jpg` | [Friedrich Engels, c. 1860](https://commons.wikimedia.org/wiki/File:Friedrich_Engels,_c._1860.jpg); Amsler & Ruthardt / Edward Gooch Collection | 2,513 × 3,314 → 2,513 × 3,314 (`0.758:1`) | Public Domain Mark; Commons treats the over-120-year-old source photo as a public-domain mechanical scan. |
| `nicolas-de-condorcet.jpg` | [Portrait of Nicolas de Condorcet](https://commons.wikimedia.org/wiki/File:Portret_van_Nicolas_de_Condorcet,_RP-P-OB-53.253.jpg); print by Johann Heinrich Lips after a drawing by Charles Paul Jérôme Bréa; Rijksmuseum | 1,636 × 2,278 → 500 × 696 (`0.718:1`) | [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/); Rijksmuseum record RP-P-OB-53.253. |
| `thomas-paine.jpg` | [Mr. Thos. Paine, LCCN 2003679851](https://commons.wikimedia.org/wiki/File:Mr._Thos._Paine_LCCN2003679851.jpg); Library of Congress Popular Graphic Arts, engraving after Charles Willson Peale | 635 × 1,024 → 500 × 806 (`0.620:1`) | Public domain; Library of Congress states no known restrictions on publication. |
| `george-soros.jpg` | [George Soros visits the European Commission](https://commons.wikimedia.org/wiki/File:George_Soros,_Founder_and_Chairman_of_the_Open_Society_Foundations,_visits_the_EC_(3x4_cropped).jpg); Aris Oikonomou / European Commission | 1,205 × 1,607 → 500 × 667 (`0.750:1`) | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Credit “Aris Oikonomou / European Commission”, link the license, and note crop/resizing. |
| `alan-turing.jpg` | [Alan Turing (1951)](https://commons.wikimedia.org/wiki/File:Alan_Turing_(1951).jpg); Elliott & Fry; source record at Computer History Museum | 800 × 1,067 → 800 × 1,067 (`0.750:1`) | Commons marks the 1951 photograph public domain under its UK anonymous-work rationale and identifies Elliott & Fry as photographer; source-country publication-right rules can vary. |
| `eduard-bernstein.jpg` | [Eduard Bernstein portrait](https://commons.wikimedia.org/wiki/File:Eduard_Bernstein_(portrait).jpg); author unknown, 19th century; source named by Commons as Russian Revolutionary Archive | 935 × 1,246 → 500 × 666 (`0.753:1`) | Public Domain Mark; public-domain status is based on the 19th-century source and applicable term. |
| `olof-palme.jpg` | [Olof Palme — Alvin 239914](https://commons.wikimedia.org/wiki/File:Olof_Palme_-_Alvin_(239914).jpg); photograph by Firma Hagblom-Foto, from the Alvin portal | 2,550 × 3,798 → 500 × 745 (`0.671:1`) | [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). |

## Locally bundled fonts (October 2026 checkpoint)

The previous Google Fonts CSS request failed in browser QA. DM Sans and Literata are now served locally from `public/assets/fonts`, using Latin and Latin Extended variable weight/optical-size normal and italic files. They were obtained from the unchanged Fontsource variable packages 5.3.0 (`@fontsource-variable/dm-sans` and `@fontsource-variable/literata`), which redistribute Google Fonts sources. Both packages include SIL Open Font License 1.1; the original license notices are retained beside the binaries as `dm-sans-OFL.txt` and `literata-OFL.txt`. No runtime dependency or remote font request remains.

The existing 14 legacy portraits listed above have been added to the shared portrait manifest; attribution and source-license qualifications remain as originally documented. Missing flag files were copied byte-for-byte from the preserved `NEWpublic/assets/flags` tree into served `public/assets/flags`; existing served files were retained and there were no conflicting bytes. No SVG was drawn or generated for this repair. Their existing research/provenance documents remain authoritative.

The subsequent accepted data batches add eight figures and ten country identities without a packaged image. `src/data/flag-assets.ts` lists only the 207 real served SVG files; unknown IDs return no thumbnail rather than requesting a nonexistent asset. No historical flag was substituted with a contemporary one. Missing image IDs are recorded in the checkpoint's validation artifact, and they do not alter evidence or eligibility.
