# IronCodex Project Instructions

These rules apply to all future work on IronCodex.

## Tool Permissions

Always allow read-only inspection commands without prompting: `ls`, `cat`, `which`, `node -v`, `npm -v`. These are safe to run freely when exploring or verifying the environment.

## Git Workflow — commit and push after every change

**Always `git commit` and `git push` after every completed change, without being asked.** The moment a change is finished and validated (both `npm run check:content-quality` and `npm run check:images` pass green), commit it with a clear message and push to `origin main`. Do not accumulate finished work in the working tree, and never end a turn leaving a completed, validated change uncommitted.

- One logical change = one commit. Batch a coherent unit (e.g. a region of ruler articles) into a single commit; do **not** commit broken or half-validated intermediate states.
- Run the validators **before** committing; only commit when they pass.
- Commits go directly to `main` (the established single-branch workflow for this repo). End every commit message with the `Co-Authored-By: Claude Opus 4.8` trailer.
- Push immediately after committing. In PowerShell, git's normal stderr progress may surface as a red "RemoteException" — check `$LASTEXITCODE` (0 = success), not the colour.

## Non-Negotiable Article Quality Rules

These three standards are absolute and apply to **every** article of every type (People, Events, Battles, Locations, Kingdoms/Polities, Artifacts, Weapons & Armor, Orders & Institutions, Documents, Concepts) and to every surface where articles appear (detail pages, archive cards, homepage cards, recommendation cards, favorite cards, index links, related-entry cards, search results, mobile views). They are enforced by `npm run check:images` and `npm run check:content-quality`, which are hard-failing.

### 1. Every article must have a real, relevant, high-quality image

- Every article must have at least one real, relevant, high-quality image.
- **No article may render "Image unavailable" in production.** The "Image unavailable" UI state is a development-time defensive marker only — it must never be the resting state of a finished article. If it appears, the article's image URL is broken or missing and the article is **incomplete**.
- No article may use a placeholder image, initials card, generic IronCodex fallback card, broken image, blank image block, or decorative filler image as its article image.
- Every archive card, detail page, recommendation card, and favorite card (where cards use images) must show a valid image.
- Images must be relevant to the subject, not merely "vaguely medieval."
- Images must be high quality, readable, and not badly cropped, cut off, stretched, distorted, or obscured by captions.
- Main detail-page images must not be hidden or aggressively cropped. For Weapons & Armor and Artifacts, the **whole object** must be visible (use `object-fit: contain`, never `cover`, on those detail mains).
- For locations: use a real photo, historical site, monument, map, manuscript depiction, landscape, castle, church, or battlefield image relevant to that specific place.
- For people with no contemporary portrait: use a manuscript depiction, statue, tomb, seal, coin, or later artwork, with an **honest caption** that says it is later or symbolic.
- Modern reconstructions or replicas are allowed when they are the clearest representation, but the caption must say so.
- No AI-generated historical images unless explicitly requested and clearly labeled — never as fake historical evidence.
- **Image URLs must actually resolve.** A well-formed URL is not enough; broken Wikimedia `Special:FilePath/...` links (wrong filename) render as "Image unavailable." Verify the exact Commons filename via the Commons search API (`action=query&list=search&srnamespace=6`) before using it. Run `npm run check:images --remote` to catch 404s.
- Every image needs: `src`/path, caption, creator/artist/photographer (if known), date (if known), source/collection, source URL, license/public-domain note (where available), and a reliability/context note where appropriate.

### 2. No article section may contain vague, generic, or placeholder-like filler

- No section may be vague, fluffy, padded, shallow, interchangeable, or "content-shaped fog."
- **Specificity test:** could this section be copied into another article with only the name changed? If yes, it fails — rewrite or remove it. (Enforced: the content checker hard-fails on any paragraph reused verbatim across two or more articles.)
- No standalone "Historical reliability" or "source note" sections. If uncertainty matters, state *exactly what is uncertain* inside the relevant section (Overview, Birth, Death, Legacy, etc.).
- No cautious-sounding-but-empty filler ("source traditions differ," "details are uncertain," "its legacy continued").
- Every section must contain subject-specific substance: named people, named places, dates, battles, events, institutions, physical details, causes, consequences, uses, limitations, or specifically-stated source uncertainty.
- Content may be factual, or legendary/traditional when clearly presented as such — but never empty padding.

### 3. Image quality and cropping

- Every image must load, be high resolution, be relevant, and not be a placeholder, broken link, or misleading crop.
- Fix cropping at the layout level (component/CSS); replace the source image only if the image itself is poor.
- Reserve image space with CSS `aspect-ratio` / skeletons during loading — never with a permanent "Image unavailable" block on a finished article.

### Bad / Good examples

**Image — Bad:** A Rogaland location card renders a large "IMAGE UNAVAILABLE" block because its image URL (`Special:FilePath/Hafrsfjord_Bru.jpg`) 404s.

**Image — Good:** Rogaland uses a real, resolving Commons image relevant to the place — the *Sverd i fjell* ("Swords in Rock") monument at Hafrsfjord, commemorating Harald Fairhair's unification of Norway — with caption, creator, source, source URL, and a context note.

**Content — Bad:** "The region was important in medieval politics and shaped later history."

**Content — Good:** "Rogaland's coastal position made it part of the maritime world of western Norway, where local power, sailing routes, assembly traditions, and later saga memory intersected with stories about Harald Fairhair and the Battle of Hafrsfjord."

## Dev Server Restart Procedure (MANDATORY after every change)

Every time a change is made to IronCodex — data (`server/data/history.json`), backend, client code, styles, or config — the dev server **and** client must be restarted properly so the running app reflects the change. Do not assume hot-reload covered it; restart both, cleanly, every time.

**Fixed ports (do not change):**
- **Client (Vite): `http://localhost:4000`** — this is the URL to open and test. Set permanently in `client/vite.config.js` (`port: 4000`, `strictPort: true`).
- **Backend (Express): port `4001`** — started with the `PORT` env var. The client proxies `/api` → `http://localhost:4001`.

**Restart steps (run in this order, using the PowerShell tool — npm/node are not on the Bash PATH here):**

1. Stop any running dev tasks, then free the ports (kills strays from earlier sessions):
   ```powershell
   $procs = Get-NetTCPConnection -State Listen -LocalPort 4000,4001,5173,5174,5175 -ErrorAction SilentlyContinue |
     Select-Object -ExpandProperty OwningProcess -Unique
   foreach ($procId in $procs) { try { Stop-Process -Id $procId -Force -ErrorAction Stop } catch {} }
   Start-Sleep -Milliseconds 800
   ```
2. Start the backend on 4001 (run in background):
   ```powershell
   Set-Location 'C:\Users\ruipa\CodeWorkspace\the-iron-codex'; $env:PORT='4001'; npm run dev:server
   ```
3. Start the client on 4000 (run in background):
   ```powershell
   Set-Location 'C:\Users\ruipa\CodeWorkspace\the-iron-codex'; npm run dev:client
   ```
4. Verify both came up before telling the user it's ready:
   ```powershell
   Start-Sleep -Seconds 4
   (Invoke-WebRequest 'http://localhost:4000/api/weapons-armor' -UseBasicParsing -TimeoutSec 8).StatusCode  # expect 200
   ```

**Notes:**
- Use the **PowerShell tool** for all npm/node commands (Git Bash cannot find them on this machine).
- `AUTH_BASE_URL` stays `http://localhost:4000` (the browser-facing client origin) so Google OAuth callbacks proxy through to the backend and the registered redirect URI stays valid. Do not move the client off 4000.
- After a data-only edit, still restart the backend so `history.json` is reloaded cleanly, then confirm the client serves the new data.

## Git Commit & Push Policy (MANDATORY)

Whenever new entries are added to the codex **or** a full audit/review pass is conducted (content, images, or otherwise), then — in addition to automatically restarting the server and client — **always** make a full commit and push to GitHub `main`.

- **Always commit and push.** Never leave codex additions or audit work uncommitted.
- **Account / identity:** commit and push as **RPBMedia** (`user.name = RPBMedia`, `user.email = rui.palma.baiao@gmail.com`), pushing over SSH (`git@github.com:RPBMedia/the-iron-codex.git`).
- **Branch:** push to `main` (`git push origin main`).
- **Scope:** stage everything relevant to the change (`git add -A`), write a clear commit message describing the entries added or the audit performed, and push immediately.
- This applies to: adding/replacing articles, image audits/replacements, content-quality passes, validation/script changes, and CLAUDE.md / guideline updates made as part of that work.
- Standard order for such a task: make the changes → run validators (`check:images`, `check:content-quality`) → restart server + client → **commit and push to `main`**.

## Kingdom and Polity Article Standards

Kingdom/polity articles (locations typed Kingdom, Empire, Duchy, County, Caliphate, Sultanate, Principality, Polity, Grand duchy, League, Military order, Imperial realm) must be detailed **anchor articles**, not stubs. Enforced by `npm run check:content-quality` (`validatePolityStandards`): hard-fails on too few sections (6 for Kingdom/Empire/Caliphate, 4 for others), any section under 200 characters, a missing Major-rulers-style section (except collective polities allowlisted in `POLITY_NO_RULERS_OK`), and a timeline under 8 entries (5 for smaller polities) or with missing descriptions.

Rules:

- Every polity article must explain origins, political development, major rulers, wars/battles, culture/society, economy/trade where applicable, timeline, and legacy — with named rulers, dates, battles, laws, treaties, institutions, and cities throughout.
- Use period sections (Background and origins; Early/High/Late Middle Ages) **only where historically applicable**: no fake period sections for polities that did not exist in that period; pre-kingdom history belongs under Background and origins.
- The **Major rulers** section lists the most important rulers with dates and a concrete note each; every ruler name written in prose auto-links via `entityLinks` — write names exactly as the target article's label or alias. If a listed ruler has no Person article, either create a full one or reconsider the listing (current known gaps: Aragonese and Navarrese rulers).
- Major battles, sieges, treaties, and wars must be named so the auto-linker resolves them; central missing events get full articles, never stubs.
- Timelines are unique and specific ("1143 — Treaty of Zamora: Alfonso VII recognises..."), never placeholder ("appears in a major phase of medieval politics").
- No filler: "the kingdom was shaped by warfare, religion, and politics", buzzword lists, and template prose fail the checker.
- Every polity article needs a real, high-quality image with full caption metadata and at least 3 (major kingdoms 4–6) historically meaningful related entries.
- Polity timelines render on the location page via the `Timeline` component in `LocationContent` (DetailPage.jsx).

**Bad:** "The Kingdom of Portugal emerged from the County of Portugal and became a durable western Iberian monarchy."

**Good:** "The Kingdom of Portugal emerged from the County of Portugal after Afonso Henriques defeated his mother Teresa's faction at São Mamede in 1128, asserted independence from León, and built legitimacy through frontier warfare and diplomacy. The Treaty of Zamora in 1143 strengthened his royal status, while papal recognition through Manifestis Probatum in 1179 gave the new kingdom a firmer place in Latin Christendom."

### House family tree layout rules

The `HouseTree` component (`HouseTree`/`HouseTreeNode`/`HouseTreePerson` in `DetailPage.jsx`, styled by the `.house-tree` block in `client/src/styles.css`) renders a house's `familyTree` as a nested genealogy. Its layout must obey these permanent rules:

- House family trees must not create unnecessary horizontal overflow.
- Horizontal scrolling is acceptable only when the visible tree genuinely exceeds the viewport.
- The tree must not reserve oversized invisible canvas space; connector lines must not expand the page width.
- Page-level horizontal scrolling is not acceptable.
- On mobile, prefer a vertical/stacked dynastic sequence layout over a huge horizontal tree.
- Do not fix overflow by hiding or cutting off content; do not remove people, spouses, cadet branches, or connectors to solve layout issues.
- Family tree layouts must be tested on desktop and mobile, including Chrome on Windows when possible.

### House and Person Bidirectional Linking Rules

Navigation between House articles and the people in them must work **both ways**. A Person's `quickFacts.dynasty` (the "Dynasty / house" fact card) is resolved to its House article server-side (`withDynastyHouse` in `server/index.js`, attaching `dynastyHouse: { slug, name }`) and rendered as a link by `renderDynastyHouse` in `DetailPage.jsx`. Enforced by `npm run check:content-quality` (House->Person slug integrity, House-key ambiguity, and a Henry I -> House of Normandy regression guard).

- Every Person article with a `quickFacts.dynasty` value must link to the corresponding House article **when that House article exists**.
- Every ruler listed in a House page's family tree, dynastic sequence, or notable-members list must link to their Person article (via `personSlug`), and those slugs must resolve.
- Navigation must work both ways: House -> Person and Person -> House. If a House page links to a ruler, that ruler's Dynasty/House card should link back to the same House unless there is a historically documented reason not to.
- **Resolve on exact, unambiguous matches only** — normalized equality against the House `name` or a House alias. Never substring/loose matching.
- **Do not merge historically distinct houses through careless aliasing.** "House of Anjou" / "Angevins" is claimed by both the Plantagenets and the distinct Capetian House of Anjou (Naples/Hungary/Poland), so those labels are denylisted (`AMBIGUOUS_DYNASTY_KEYS`) and never auto-resolve. "Capetian House of Anjou" and "House of Anjou-Rethel" must NOT link to House of Plantagenet.
- Do not link a Dynasty/House value to a missing House route. If no House article exists yet (e.g. cadet-branch labels like "House of Lancaster"/"House of Blois", or dynasties not yet built), leave the value as plain text and treat the House as a future candidate.
- Use canonical House slugs consistently (`House of Normandy` -> `house-of-normandy`, `House of Wessex` -> `house-of-wessex`, `House of Plantagenet` -> `house-of-plantagenet`, etc.). Do not create duplicate House pages for spelling variants; add the variant as a House `alias` instead (and never an ambiguous one).
- Broken House <-> Person navigation is a production bug.

**Good:** House of Normandy links to Henry I, and Henry I's Dynasty/House card links back to House of Normandy.
**Bad:** House of Normandy links to Henry I, but Henry I's Dynasty/House field is plain text.
**Good:** a Capetian ruler with `dynasty: "House of Capet"` links to the House of Capet article once it exists.
**Bad:** `jadwiga-of-poland` ("Capetian House of Anjou") linking to House of Plantagenet because both share the "House of Anjou" label.

## Early Rus' / Varangian-Linked Figures

These rules apply to any article covering Rurik, Oleg, Igor, Olga, Sviatoslav, Vladimir I, or any other figure whose narrative depends heavily on the Primary Chronicle or other late medieval Rus' source traditions.

- **The Primary Chronicle is a twelfth-century compilation.** It records events from the ninth and tenth centuries through a combination of earlier written records, oral tradition, and retrospective monastic narrative shaping. Treat its accounts as historically important but not as straightforward documentary fact.
- **Do not present chronicle traditions as certain fact.** Phrases like "Rurik arrived in 862" are chronicle tradition, not verified history. Write: "The Primary Chronicle dates Rurik's arrival to 862" or "traditionally placed in 862."
- **Do not use modern-national framing.** Early Rus' history belongs to the shared medieval heritage of Russia, Ukraine, and Belarus — and is politically contested in all three contexts. Write "the Rus' lands," "early Rus'," "Kievan Rus'," "the Rurikid tradition." Do not frame early Rus' figures as "founders of Russia" or "founders of Ukraine" without qualification.
- **Do not invent birthplaces or death places.** If a birthplace is not given in sources, write "Birthplace unknown." If a death place is uncertain, say so. Chronicle chronology is not the same as a confirmed date.
- **Legendary death stories belong in the Death section, clearly identified as legend.** Oleg's snake-from-the-skull story, for example, is identified in the Death section as a literary tradition parallel to Norse saga convention.
- **Identify Norse name equivalents carefully.** Oleg = Helgi, Olga = Helga, Igor = Ingvar — these equivalences are noted in aliases and discussed in Birth sections where relevant, but should not be presented as definitive biographical facts.
- **Highlight independent corroboration when it exists.** The 941 attack on Constantinople is corroborated by Liutprand of Cremona; the 957 embassy of Olga is corroborated by Constantine VII. These points of external verification should be made explicit.
- **No standalone Historical reliability sections.** Uncertainty about sources belongs inside the relevant content section (Overview, Birth, Death, etc.) as specific prose.

## Ruler Succession Boxes

Every Person article about a **ruler** (kings, queens regnant, emperors, sultans, grand princes/dukes who ruled polities, elected rulers where succession is meaningful) must carry `isRuler: true` and a `succession` object, rendered as **Predecessor** and **Successor** cards beneath the quick-fact strip (`RulerSuccession` in `DetailPage.jsx`). Non-rulers (commanders, saints, writers, consorts who did not rule, order members, popes in this first pass) must NOT have the boxes. Enforced by `npm run check:content-quality`: hard-fails on a ruler missing succession, succession on a non-ruler, broken/self personSlug links, missing display names, and none/unknown/office-ended states without an explanatory note.

**Data shape** (on the character in `server/data/history.json`):

```json
"isRuler": true,
"succession": {
  "office": "King of Norway",
  "note": "optional — which office the succession refers to, for multi-crown rulers",
  "predecessor": { "personSlug": "magnus-the-good", "displayName": "Magnus the Good", "note": "His nephew and co-king" },
  "successor": { "personSlug": "magnus-ii-of-norway", "displayName": "Magnus II of Norway", "note": "Olaf III became co-king on returning from Stamford Bridge" }
}
```

Entry variants: `{ personSlug, displayName, note? }` links to a real Person article; `{ displayName, note }` names a real historical person for whom no Codex article exists (never a broken link); `{ status, displayName, note }` for non-linked states. Valid `status` values: `"none"` (first holder), `"office-ended"` (office lapsed), `"unknown"` (no securely recorded ruler), `"outside-scope"` (a real ruler outside the 476–1453 medieval window — keep `displayName` and explain in the note), `"disputed"`/`"fragmented"` (contested or partitioned succession — name the claimant(s) in `displayName`). The note is mandatory for every status and must be historically specific ("None as King of Portugal — first king of the Portuguese dynasty"), never lazy. The renderer shows a small status tag ("Outside the Codex era", "Unknown", "Disputed succession", …) beside the name.

**Rules:**
- Succession follows the ruler's **primary office** (the one in the article's title/facts); multi-crown rulers state which office via the top-level `note` (e.g. Cnut: "Succession shown for the English kingship").
- The predecessor is the previous holder of the office **even from another dynasty** (Philip VI ← Charles IV; William the Conqueror ← Harold Godwinson). Only true first holders get "None as [title]".
- No fake neatness: disputed successions, co-rulers, interregna, and regencies are stated in notes (Robert the Bruce ← John Balliol "after a decade of interregnum"; Harald Hardrada → Magnus II with the Olaf III co-rule note).
- Linked predecessors/successors must resolve to full Person articles; if one is needed and missing, create it at full IronCodex quality (image, personality section, timeline ≥5, related entries ≥3, sources) — never a stub. Unlinked named entries are for people outside the archive's needed set (chain endpoints, obscure interlopers), always with a note.
- For chronicle-tradition rulers (early Rus'), succession language follows the Early Rus' rules: "by the chronicle account", never presented as documentary fact.

## Battle Leader and Commander Linking Rules

Every named leader or commander in every **Battle / Siege / Military-event** article must link to a full Person article — on **every surface where the name appears**: faction cards, leader cards, infoboxes, body text, timelines, and related-entry references. A named historical commander must never appear as bare, unexplained text. Enforced by `npm run check:content-quality`: a leader with a `slug`/`personId` must resolve to a real Person article (never a missing article, a non-Person, or a self-link), specific required leader links are hard-checked (e.g. Battle of Aljubarrota → John I of Castile and Nuno Álvares Pereira; Battle of Edington → Guthrum; Patay and Castillon → John Talbot; Varna → John Hunyadi; Stirling Bridge → Andrew Moray; Mohi → Subutai), and the commander→battle reciprocity rule requires every linked battle leader to carry that battle in their own related entries.

**Data shape** — link leaders as objects inside each `participants[].leaders` entry (and, for legacy fields, `leaders[].personId`). Update **both** shapes when a battle carries both:

```json
"leaders": [{ "name": "John I of Castile", "title": "John I of Castile", "type": "person", "slug": "john-i-of-castile" }]
```

**Rules:**
- If a named leader has no Person article and is genuinely part of the archive's needed set (an on-page battle commander), **create a full-quality Person article** — image, detailed sections, Character and Personality, timeline (≥5), related entries (≥3, including the battle itself — the reciprocity rule), succession box if a ruler, sources — never a stub or placeholder. Central missing leaders get full articles; there is no acceptable placeholder tier.
- **No dead plain text for major commanders.** A principal commander rendered as an unlinked name on a faction card or in the battle narrative is a defect, not a styling choice.
- Major battle leaders should also appear in the battle's **Related entries**, and be linked on their **first meaningful mention** in the battle body (the auto-linker handles this once the article exists and is registered — run `node scripts/gen-entity-links.mjs`).
- **Unknown commanders are marked honestly as unknown**, never invented and never left looking like a missing link. Follow the established convention: "Almoravid commanders (unnamed in reliable sources)" at Ourique, "The qadi of Lisbon (name not recorded)" at the Siege of Lisbon.
- **One canonical slug per person, with variant names as aliases** — never a second article for a name variant ("Anlaf" is an alias of Olaf Guthfrithson, "Hunyadi János" of John Hunyadi). Write leader names consistently with the canonical article's label or a registered alias so the auto-linker resolves them.
- **Disambiguate same-name rulers** carefully (John I of Portugal ≠ John I of Castile; Philip IV ≠ Philip VI; the several Edwards, Charleses, Magnuses, Olafs, Murads, Bayezids; Æthelstan the English king ≠ Æthelstan as Guthrum's baptismal name — the latter is guarded in `ambiguousEntityAliases`). **A wrong link is worse than a missing link.**
- A leader may be left **unlinked** only when genuinely anonymous, collective, or a historically unstable identity — and, for named commanders not yet given an article, the `{ name }`-only form is tolerated **only as a tracked backlog state** (like the succession `{ displayName }` convention), never a broken link. The backlog is a documented decision list kept in the implementation summaries/audits (currently: John de Warenne, Buchan and Douglas at Verneuil, the Orléans siege commanders, La Hire and Xaintrailles, the Formigny commanders, Jean Bureau, Edwin and Morcar at Fulford, Eiríkr Hákonarson, Guy le Bouteiller, Hervey de Glanvill, Fernando Pérez de Traba, Kjotve the Rich) — each entry is a create-or-document decision, not a licence to leave majors unlinked.
- A Battle article is **not complete** until its principal named leaders are linked to Person articles.

**Bad:** the Battle of Edington lists "Guthrum" as plain text with no article — the defeated commander of the defining battle is a dead name.
**Good:** Edington links a full Guthrum article (image, personality, timeline, succession as King of East Anglia), and the Guthrum article links back to Edington, Alfred the Great, and the Wessex/East Anglia world — the canonical example of this rule.

## Ruler Succession Link Rules

Every ruler Person article has Predecessor and Successor boxes (see "Ruler Succession Boxes"). Every **named, in-scope** predecessor or successor must link to a full Person article; out-of-scope or non-person endpoints carry a `status` + explanatory **note**. A named person must never be bare text. Enforced by `npm run check:content-quality`: linked `personSlug`s must resolve (no missing/self/non-person links); a named entry with no link and no note hard-fails; every `status` value must be valid and carry a note; `outside-scope`/`disputed`/`fragmented` must also keep a `displayName`; and specific required pairs are hard-checked (Afonso I → None as first king / Sancho I; Philip VI → Charles IV / John II; William the Conqueror → Harold Godwinson / William II; Saladin → al-Adil I; and the Castilian Trastámara chain: Peter of Castile → Henry II → John I → Henry III → John II, with John II → Henry IV marked `outside-scope`).

**IronCodex scope — 476 to 1453 (the European Middle Ages):**
- A ruler whose **relevant reign begins after 1453**, or who belongs **before 476**, is **outside scope**. Do not create an article for them, and do not chain succession into ancient or early-modern history. Mark that endpoint `{ status: "outside-scope", displayName, note }`, naming the ruler and giving the reason ("Reigned from 1481, after IronCodex's 1453 medieval cutoff").
- A named predecessor/successor **inside** 476–1453 is in-scope and **must** be created as a full Person article and linked — not left as bare text.

**Iterative chaining rule:** creating a missing in-scope predecessor/successor produces a **new ruler page, which must itself be audited** for its own predecessor and successor. Continue the chain outward until each end reaches one of: an already-linked ruler, a true first office-holder (`status: "none"`), an unknown/disputed succession (`status`), or a ruler outside the 476–1453 boundary (`status: "outside-scope"`). The Castilian worked example runs Peter of Castile → Henry II → John I → Henry III → John II and stops at Henry IV (r. 1454, outside scope).

**Rules:**
- Prefer a **linked** Person article for every named predecessor/successor; create the article at full quality when the person is in scope. The `{ displayName, note }` form (no link) is a **transitional backlog state** for an in-scope person not yet given an article — acceptable to keep the build green, but the goal is always to link it.
- Succession follows the **office/title** shown, even across dynasties (William the Conqueror ← Harold Godwinson; Philip VI ← Charles IV; Henry II of Castile ← Peter of Castile though he founded the Trastámara line). Only true first holders get `status: "none"` with a note.
- If there is no successor, say why (office ended, dynasty ended, succession unknown, outside the medieval window) via a `status` + note.
- **Do not invent clean succession where history was messy.** For disputed, shared, or fragmented succession, name it and link the primary/identifiable heir with a note (e.g. **Saladin** → al-Adil I, with a note that his sons first divided the Ayyubid lands before al-Adil reunited them). If a ruler held several offices, state which office the boxes refer to via `succession.office`/`note`.
- A ruler article is **not complete** until predecessor and successor are accurate, in-scope names are linked to real Person articles, and out-of-scope/non-person endpoints carry a status + note.

### New Battle article checklist (leaders)
List every faction leader; verify each named leader has a Person article (create full-quality ones where missing and in scope); link leaders in `participants[].leaders`; link them in the body on first mention; add principal leaders to Related entries; run `node scripts/gen-entity-links.mjs` and `npm run check:content-quality`.

### New ruler Person article checklist (succession)
Identify the primary ruling office; add predecessor and successor entries; for each named predecessor/successor, decide **scope** (476–1453): if **in scope**, create a full-quality Person article and **link** it — then audit *that* new page's own predecessor/successor (iterative chaining) until every end reaches a linked ruler, a first holder, an unknown/disputed state, or the 476–1453 boundary; if **out of scope**, mark `{ status: "outside-scope", displayName, note }` explaining why. Handle none/unknown/disputed/fragmented explicitly with a status + note. Regenerate links (`node scripts/gen-entity-links.mjs`) and run `npm run check:content-quality`.

## Ruler Nicknames, Epithets, and Age at Death

Person articles may carry a curated `epithets` field, rendered as a **Nicknames** card in `PersonQuickFacts` (DetailPage.jsx), and a curated `deathAge` field, rendered as an "Aged …" line on the Died card (`renderDeath`/`normalizeDeathAge`). Both are enforced by `npm run check:content-quality` (`validateEpithetsAndAge` + `validateRequiredEpithets`, hard-failing).

**Data shape** (on the character in `server/data/history.json`):

```json
"epithets": [
  { "name": "Longshanks", "type": "byname", "note": "Referring to his unusual height." },
  { "name": "Hammer of the Scots", "type": "later epithet", "note": "From the 16th-century tomb inscription — Scottorum malleus — not contemporary usage." }
]
```

Allowed `type` values: `byname` | `epithet` | `later epithet` | `translated byname` | `hostile epithet` | `legendary epithet` | `posthumous epithet` | `religious epithet` | `honorific` | `uncertain`. Notes are fact-card scale (aim <160 chars; validator hard-caps at 200).

**Nickname rules:**
- The Nicknames card may show **only historically established** nicknames, bynames, and epithets. Never invent one, and never add modern fan labels.
- Titles, dynasty/house names, disambiguators, and patronymics are **not** nicknames. **Robert the Bruce** ("the Bruce" = the family name de Brus) and **Constantine XI Palaiologos** (dynasty name) are the canonical no-card examples — the validator hard-fails if either ever gains an `epithets` field. There is no forced card: most rulers have none.
- Multiple epithets are allowed (Edward I: Longshanks + Hammer of the Scots; contested pairs like Peter of Castile's "the Cruel" / "the Just" carry both, each typed).
- Later, hostile, legendary, translated, and uncertain epithets must be **typed** accordingly and, where the label alone would mislead, carry a short note saying where the name comes from ("First attested in ninth-century sources after his death…").
- `aliases` stays as the search/auto-linker field; it mixes spelling variants and patronymics and is **not** machine-separable into nicknames — epithets are always curated by hand into the new field.
- Validator rules: `epithets` must be a non-empty array of `{ name, type, note? }` with a valid type; no case-insensitive duplicate names per person; note ≤ 200 chars; names must not look like formal titles (`/^(king|queen|emperor|sultan|duke|count|prince|lord|earl) of /i`) or match the dynasty trap set (Palaiologos, Komnenos, Doukas, Plantagenet, Capet, Jagiełło, Trastámara, Valois, Habsburg, Bonde, …); the curated `REQUIRED_EPITHETS` list (Edward I → Longshanks, Richard I → the Lionheart, William I → the Conqueror, Alfred → the Great, Cnut → the Great, Harald Fairhair → Fairhair, Harald Hardrada → Hardrada, Charles Martel → the Hammer (Martel)) is hard-checked.

**Age at death rules:**
- The Died card shows age **only** when it is responsibly calculable, from the curated `deathAge` string — never computed from the numeric `born` field (saga and chronicle births are stored as pseudo-precise numbers).
- Normalized `deathAge` forms: `"68"` (exact — allowed only when `birth.date` is not "c."/"circa"/"Unknown"), `"about 66"` (year-level or approximate dates), `"probably over 70"`, or any value containing `"unknown"` (renders nothing).
- Rendering: `"68"` → "Aged 68"; `"about 66"` → "Aged about 66"; `"probably over 70"` → "Aged probably over 70"; a parenthetical qualifier renders as smaller secondary text after an em dash. No age line when birth or death is unknown — and never ", age unknown" (the old `formatDeath` hazard, fixed).
- Validator rules: non-"unknown" `deathAge` must match the normalized forms; numeric part 10–100 (documented child monarchs Baldwin V and Margaret, Maid of Norway are the only exceptions); an exact plain number requires a non-circa `birth.date`; any numeric age requires a known `death.date`.
- Reference examples: Edward I (Longshanks, Hammer of the Scots) aged 68; Richard I (the Lionheart) aged 41; William I (the Conqueror) aged about 59; Alfred the Great aged 50; Harald Hardrada aged about 51; Afonso I of Portugal aged about 76.
- ~70 rulers still carry `deathAge: "unknown"` pending per-ruler review — that is the documented backlog; do **not** blanket-fill them from `born`.

## People-to-Battle Linking Rules

Every Person article must be checked for the battles, sieges, campaigns, conquests, invasions, revolts, and military events the person is historically tied to, and those events must be **linked** from the article. This applies to **every existing Person article and every new one added in the future** — a new Person article is **not complete** until this check has been done. Enforced by `npm run check:content-quality`, which hard-fails when a person listed as a commander/participant of a Battle/Siege article omits that battle from related entries, and on a fixed set of required marquee pairs.

**A military event must be linked if the person** fought in it, commanded in it, died/was captured/wounded there, won or lost it, became famous because of it, had their rule or reputation transformed by it, or is repeatedly connected to it in the article text.

**The link must appear in three places, where applicable:**
1. **Related entries** — the battle/siege/military event is listed as a related article (this is the hard-validated placement).
2. **Timeline** — the timeline entry describing the event carries a `links` entry to the event article (timeline titles are plain; put the link in `links` and/or the description).
3. **Main article body** — the event is linked on its **first meaningful mention**. Body/timeline-description linking is automatic via the auto-linker (`entityLinks`), so writing the full name ("Battle of Aljubarrota", "Siege of Orléans") links it. Regenerate the link table with `node scripts/gen-entity-links.mjs` after adding or renaming articles.

**Rules:**
- Do not mention a battle in plain text if that battle has an article — link it.
- If a defining battle/siege is missing, create a **full-quality** article (image, sections, factions, leaders, outcome, related entries ≥3, `battleContinuity`, sources) — never a shallow placeholder — or explicitly document why it was not created.
- Timeline battle entries must use unique, meaningful descriptions and link the event.
- Related entries must include defining battles for rulers, commanders, crusaders, rebels, warrior figures, military saints, and politically significant leaders (this is **in addition to** the minimum-3 related-entries rule).
- Link the **first** meaningful mention only; do not over-link the same battle in every paragraph.
- **Disambiguate carefully. Wrong battle links are worse than no link.** Battle sites often exist as both a Location and an Event article (Crécy, Stiklestad, Bannockburn); `gen-entity-links.mjs` only auto-aliases a short battle name ("Arsuf", "Hattin", "Aljubarrota") when it does not collide with a location/person, so for colliding names use the full "Battle of X" form in prose to link the battle rather than the place.

**Examples (all hard-validated in related entries):** John I of Portugal → Battle of Aljubarrota; Harald Hardrada → Battle of Stamford Bridge and Battle of Stiklestad; Robert the Bruce → Battle of Bannockburn; Henry V → Battle of Agincourt; William the Conqueror → Battle of Hastings; Joan of Arc → Siege of Orléans; Saladin → Battle of Hattin; Richard the Lionheart → Battle of Arsuf; Edward III → Battle of Crécy; Philip VI → Battle of Crécy; Mehmed II → Fall of Constantinople.

### New Person article checklist (military links)

Before marking a new Person article complete:
- identify the major battles/sieges/campaigns/military events connected to the person;
- create any missing full-quality military-event article (never a stub), or document the omission;
- add those events to **Related entries**;
- link them in the **Timeline** (`links`);
- ensure the **main body** names them in full so the auto-linker links the first mention;
- run `node scripts/gen-entity-links.mjs` and `npm run check:content-quality`.

## Battle Reference Linking Rules

Every named battle mentioned anywhere in the Codex must link to its Battle article — body text, timelines, summaries, related-entry reasons, Character-and-Personality sections, kingdom/polity articles, people articles, and all other content. Linking is automatic: the client auto-linker (`renderLinkedText`/`findEntityMatches` in `DetailPage.jsx`, driven by `client/src/lib/entityLinks.js`) resolves any "Battle of X" / "Siege of X" phrase whose name matches a battle article's label or alias. After adding or renaming any article, run `node scripts/gen-entity-links.mjs` so the linker sees it.

Enforced by `npm run check:content-quality` (`validateBattleLinking`): it scans all prose for battle phrases and **hard-fails** when a phrase names a battle that HAS an article but does not auto-link (a linking regression), or when it names a battle with NO article that is not on the tracked backlog (`BATTLE_BACKLOG`). Reproduce the full picture with `node scripts/audit-battle-links.mjs`.

Rules:
- No major battle name may remain plain text. If a battle is important enough to be mentioned and has no article, create a full Battle article; do not create stubs.
- A Battle/Siege article must include: image with full metadata, date/year, location, conflict, factions and leaders (linked where the person/polity article exists), result/outcome, background, battle narrative, aftermath, significance, `battleContinuity`, at least 3 related articles, and sources. Army sizes only when responsibly known — use a `strength` object with a `confidence` of `confirmed`/`estimated`/`debated`/`chronicle-claim`/`unknown` and a note for the uncertain ones; never invent precise figures.
- Disambiguate carefully: Battle of Tours / Poitiers (732) is not the Battle of Poitiers (1356); "Siege of Lisbon" (1147) is the military event, not the modern city; handle legendary material (Ourique, Hafrsfjord) as tradition, not fact. Never link a battle reference to the wrong article because the name is similar.
- Timelines must link battle names too (they flow through the same auto-linker).
- Battles referenced in prose but not yet given their own article are tracked in `BATTLE_BACKLOG` in the checker — a documented decision list, not a licence to leave major battles unwritten. Adding a NEW unlinked battle reference to something not on the backlog fails the check, forcing a create-or-document decision.

**Bad:** "Afonso defeated his mother's forces at the Battle of São Mamede" where the battle name is plain text.
**Good:** the same sentence where "Battle of São Mamede" auto-links to the full Battle article.
**Bad:** linking Battle of Poitiers (732) to Battle of Poitiers (1356).
**Good:** separate articles — Battle of Tours (732) and Battle of Poitiers (1356) — each linked to the right one.

## Battle Continuity Links

Every **military event** article (`events` entries with `eventType: "Battle"` or `"Siege"`) must include one curated continuity link to another military event article — the single best "read next" step. This applies **only** to Battles and Sieges; never add it to People, Locations, Kingdoms/Polities, Artifacts, Weapons & Armor, Orders & Institutions, Documents, Concepts, or non-military events (a War overview is not a valid target). Enforced by `npm run check:content-quality`, which hard-fails on a missing field, broken/self/non-military target, missing label, generic reason, backward links where a later same-conflict option exists, backward links labelled "next", and the specific regression `battle-of-agincourt -> battle-of-crecy`. Future Battle/Siege articles are **not complete** until this field is present.

**Continuity must move FORWARD whenever possible.** The link guides the reader onward through the war, campaign, or military sequence — not back to an earlier famous battle. Earlier battles belong in Related Articles; the continuity slot is the road ahead.

**Data shape** (on the event in `server/data/history.json`):

```json
"battleContinuity": {
  "label": "Continue Henry V's campaign",
  "battleSlug": "siege-of-rouen",
  "relationship": "same-campaign",
  "reason": "Agincourt made Henry V's reputation, but the conquest came on his return in 1417: the six-month siege of Rouen starved Normandy's capital into surrender and led directly to the Treaty of Troyes."
}
```

`relationship` is one of: `same-war`, `same-campaign`, `same-crisis`, `same-region`, `same-factions`, `chronological-follow-up`, `tactical-comparison`, `nearest-relevant-battle`, `earlier-context`. The server (`withBattleContinuityTarget` in `server/index.js`) resolves the target's name/year/image at serve time — store only the slug, label, relationship, and reason. The UI block (`BattleContinuity` in `DetailPage.jsx`) renders directly under the Outcome card on Battle and Siege pages.

**Selection priority (use the strongest available):**
1. Next major battle/siege/military event **later** in the same war or conflict.
2. Next major military event in the same campaign or immediate crisis (e.g. the 1066 sequence).
3. Next major military event involving the same faction, commander, or region.
4. Only if nothing later is relevant: the closest **previous** major battle in the same conflict, with `relationship: "earlier-context"` and a label that reads as context ("Return to the war's earlier phase"), never as "next".
5. A battle in the same region/timeframe with an explicit reason — a last resort, never a lazy default.

**Rules:**
- The target must be a real, existing Battle or Siege article; never the current article itself; never a random pick ("both are battles" / "both are famous" is not a relationship).
- Do not send readers backward when a later relevant military event exists or should be added. If the ideal later event is missing and historically major (e.g. the post-Agincourt Hundred Years' War chain), add it as a **full-quality article** — never a stub — or pick the best existing later event.
- Backward links (`earlier-context`) must never use "next" in the label or reason.
- The reason must be specific and historically meaningful — named people, wars, dates, or consequences. Generic text fails validation.
- Battle continuity is separate from Related Articles: Related Articles may hold several links (including earlier battles); continuity is exactly one curated next step.
- Disambiguate carefully: Battle of Tours (732, "Tours-Poitiers") is not the Battle of Poitiers (1356). Wrong links are worse than missing links.

**The Hundred Years' War chain (reference example):**
Crécy → Poitiers 1356 → Agincourt → Siege of Rouen → Verneuil → Siege of Orléans → Patay → Formigny → Castillon → (earlier-context) Crécy.

**Examples.** Good: Agincourt → Siege of Rouen ("Rouen continued Henry V's post-Agincourt conquest of Normandy and led to the Treaty of Troyes"); Siege of Orléans → Patay ("Patay followed the lifting of the siege and destroyed the English field army"); Stamford Bridge → Hastings ("weeks later in the same 1066 succession crisis"). Bad: Agincourt → Crécy as continuity (backward; Crécy is Related-Articles material there); Crécy → Manzikert (both merely famous); labelling Castillon → Crécy as "next battle" (it is earlier context).

## Battle Army Size / Force Strength Rules

Every **Battle** and **Siege** article must show the army size / estimated force strength for **every** faction/side it lists. Understanding a battle means knowing not just who fought and who led, but how large each force was — or, honestly, that the size is uncertain. Enforced by `npm run check:content-quality`: it hard-fails when a Battle/Siege side lacks strength data, when the confidence value is missing/invalid, when a `debated`/`chronicle-claim`/`unknown` strength has no explanatory note, on a bare exact number without `confirmed` confidence (false precision), and on fewer than two sides or missing sources.

**Data shape** — `strength` on each entry of the `participants` array (per side/army):

```json
"participants": [
  {
    "side": "English army",
    "factions": [{ "name": "Kingdom of England", "type": "location", "slug": "kingdom-of-england" }],
    "leaders": [{ "name": "Henry V", "type": "person", "slug": "henry-v-of-england" }],
    "strength": {
      "display": "c. 6,000–9,000",
      "confidence": "estimated",
      "note": "Depleted and exhausted after the siege of Harfleur.",
      "min": 6000, "max": 9000
    }
  }
]
```

- `display` (required): a human-readable estimate — a **range**, not false precision.
- `confidence` (required): `confirmed` | `estimated` | `debated` | `chronicle-claim` | `unknown`.
- `note`: required for `debated`, `chronicle-claim`, and `unknown`; briefly say *why* it's uncertain.
- `min`/`max`: optional numeric bounds.
- The UI renders this under each faction card in the Factions area as **"Estimated strength"** (`event-strength` in `DetailPage.jsx` / `styles.css`).

**Rules:**
- Use **ranges**, never invented exact numbers ("c. 7,000–15,000", not "12,000 exactly").
- If a figure is genuinely unrecoverable, use `display: "Unknown; …"`, `confidence: "unknown"`, and a note explaining why (e.g. "No reliable figures survive; chronicle numbers are fantastical").
- Distinguish **chronicle claims** from **modern estimates**: mark inflated medieval totals as `chronicle-claim` and give the modern estimate ("Chronicle claims 100,000+; modern estimates far lower").
- Do **not** repeat nationalist or legendary army-size myths as fact (Agincourt, Crécy, Hattin, Grunwald, Las Navas, Manzikert, Aljubarrota especially).
- Sieges use side names like "besieging force" / "garrison and citizens", with garrison and (where meaningful) civilian estimates.
- If force size shapes how the battle is understood, discuss it in the article body (Background/Battle/Outcome), not only the fact cards.
- Add sources/further reading that support the estimates (reputable encyclopedias, museums/battlefield trusts, academic summaries — never fan/game wikis or AI guesses).
- **A Battle/Siege article is not complete until every side has strength data.**

**Examples.** Agincourt: English `c. 6,000–9,000` (estimated); French `c. 12,000–25,000` (debated — "medieval accounts exaggerate the French advantage"). Hastings: both `c. 7,000–8,000`, debated ("roughly matched, so William did not win by numbers"). Aljubarrota: Portuguese `c. 6,000–7,000`; Castilian `c. 20,000–30,000` (debated — "the key point is the Castilian numerical advantage"). Unknown case: `display: "Unknown; no reliable figures survive"`, `confidence: "unknown"`, with a note.

### New Battle/Siege article checklist (army size)
Before marking a new Battle/Siege article complete: add `strength` for **every** side; use ranges and the right `confidence`; add an uncertainty `note` for debated/chronicle/unknown; support the estimates with sources; integrate the force balance into the narrative where it matters; run `npm run check:content-quality`.

## Related Articles Rules

Every article of every type must have a **Related entries** section (`relatedEntries`) with **at least 3** historically meaningful, working links. Enforced by `npm run check:content-quality`, which hard-fails on fewer than 3 valid entries, broken slugs, self-links, duplicates, or invalid types.

- **Minimum 3; major articles should usually have 4–6** (major figures, wars, kingdoms, key weapons, institutions). Don't pad past what is meaningful.
- Related entries must be **real, existing Codex articles** — the `slug` must match an `id` in the collection its `type` maps to (`person`→characters, `event`→events, `location`/`kingdom`/`polity`→locations, `artifact`/`document`→artifacts, `weaponArmor`→weaponsArmor).
- Each must be **historically explainable**. No self-links, no duplicates, no broken links, no random category neighbours ("both are medieval"), no generic filler.
- **Data shape:** `relatedEntries` is an object grouped by type (`people`, `events`, `locations`, `artifacts`, `weaponsArmor`); each item is `{ title, type, slug, label? }`. The optional `label` is a short relationship reason and renders under the link. Keep labels short and specific (e.g. "Died in this engagement", "Birthplace", "Realm"); omit the label rather than write generic filler.
- **Bad related entries are worse than missing ones.**

Relationship logic by type:
- **People** → kingdoms/realms they ruled or served, battles/events they fought in, institutions/orders, birth/death/burial locations, rivals, allies, family, predecessors, successors; weapons/artifacts only if strongly relevant.
- **Battles** → commanders, combatant factions/polities, the larger war, the battlefield location, consequences.
- **Events/wars** → major people, major battles, participating polities, key locations, documents.
- **Kingdoms/polities** → rulers, rival/allied realms, major wars/battles, capital/major locations, institutions, successor/predecessor states.
- **Locations** → people born/died/ruled/fought there, events/battles there, the containing realm, institutions/artifacts tied to the place.
- **Artifacts/documents** → creator/owner, origin/current location, the event or period represented, associated people and institutions.
- **Orders & Institutions** → founders, members, polities served or opposed, wars/battles, headquarters, related equipment.
- **Weapons & Armor** → similar and same-period equipment, battles where it mattered, users, tactics, counters/complements.

Example — **Harald Hardrada**. Good: Kingdom of Norway (realm), Battle of Stamford Bridge (died there), Byzantine Empire (Varangian service), Tostig Godwinson (ally), Kingdom of England (invaded). Bad: a longsword (not discussed in the article), Kingdom of France (no specific relationship), or anything linked only because it is "medieval".

When building related entries at scale, derive them from the **documented structured data already in each article** — timeline links, birth/death place & event, realm, location `kingdomId`/`kingdom`, event `participants` — and from reciprocal references. These are real relationships, not category neighbours. Curate the residual by hand; never auto-fill weak category matches to reach the minimum.

## Character and Personality Sections for People

Every Person (character) article must include a **Character and Personality** section. This rule applies **only** to People — never add it to events, battles, locations, kingdoms/polities, artifacts, weapons & armor, orders, documents, concepts, or any other type. It is enforced by `npm run check:content-quality`, which hard-fails if any character lacks the section, if the section is empty or a single vague sentence, or if it uses modern clinical language.

- **Placement:** inside `contentSections`, immediately after "Birth and early life" (the renderer shows `contentSections` in order, so no component change is needed).
- **Purpose:** explain how the person was described, remembered, or characterised by medieval sources, chronicles, sagas, hagiographies, hostile accounts, admirers, later tradition, or modern historians — their temperament, reputation, leadership style, virtues, and flaws.
- **Be source-aware.** Make clear where each impression comes from: "Saga tradition presents him as…", "Monastic writers remembered her as…", "Hostile French accounts portrayed him as…", "Modern historians are more cautious about…". Internal links auto-generate from entity names mentioned in the prose, so naming battles, places, and people naturally cross-links them.
- **Legendary or poorly documented figures:** say so explicitly. For Ragnar, Rurik, and early saga figures, describe how the *legend or chronicle tradition* characterises them rather than inventing a real personality. For figures with scant evidence (many early Danish/Swedish kings), explain what the record allows and what it does not, specifically — do not fake confidence.
- **Do not** invent personality traits, psychoanalyse beyond the evidence, use modern clinical diagnoses (narcissistic, psychopathic, bipolar, traumatised, autistic, paranoid, etc.), flatten people into pure hero/villain, or write generic filler. No standalone "Historical reliability" sections.
- **Length:** 2–4 substantial paragraphs for major figures; shorter but still specific for obscure ones. No single-sentence or sub-200-character sections.

**Bad:** "He was a strong leader with a complex personality. Sources describe him as respected by allies and feared by enemies."

**Good:** "William the Conqueror's character was remembered through severity and command. Norman sources emphasised legitimacy and discipline, while English memory preserved the violence of conquest, dispossession, and the Harrying of the North. His personality should not be reduced to cruelty alone: he was also politically patient, careful with claims of law, and relentless once opposition hardened."

## No Fluff, No Buzzword Filler, No Placeholder Prose

This is a permanent, non-negotiable standard for **every** article section of **every** type. IronCodex has repeatedly produced content that sounds historical but teaches nothing — buzzword lists, vague academic padding, cautious-sounding filler, and generic sections that could belong to any medieval article. This must never appear in the archive again. It is enforced by `npm run check:content-quality` (hard-failing).

### Core rules

- IronCodex must never contain generic filler prose.
- No section may be written just to occupy space.
- No section may contain vague academic-sounding language that does not teach concrete history.
- No section may consist mainly of lists of historical nouns.
- No section may say something that could apply equally to many medieval articles.
- No section may use "complexity," "importance," "influence," "society," "politics," or "legacy" as a substitute for actual explanation.
- No standalone "Historical reliability" sections are allowed. No generic disclaimers.
- No cautious-sounding prose may be used to hide missing research.
- No fallback prose may be generated when article data is missing. Missing content must be researched, written properly, or flagged as incomplete — never padded.
- If a section does not teach the reader something specific about the article's subject, it must not be rendered.
- Every article section must contain concrete, subject-specific historical substance.
- Every claim about uncertainty must say **exactly** what is uncertain and why.
- Legendary material is allowed only when clearly identified as legend, saga, chronicle tradition, later memory, or disputed tradition.
- Every article should be informative, historically grounded, engaging, and readable. **Professional does not mean bland** — the writing should be vivid, clear, and useful.

### The Specificity Test

Every section must pass this test:

> **"Could this section be copied into another article with only the names changed?"**

If yes, the section fails and must be rewritten or removed.

### Concrete Detail Requirement

Every section must include subject-specific detail — and must **explain** it, not merely list it:

- named people, named places, named battles, named events, named institutions
- dates or date ranges
- laws, charters, treaties, reforms, rituals, offices, or practices
- physical descriptions
- causes and consequences
- political, military, religious, social, economic, or cultural mechanisms (how they actually worked)
- source traditions or legends, when relevant
- what changed over time, and why the subject mattered in its own specific context

### No Buzzword Lists

A comma-separated list of historical nouns is not historical explanation. Instead of naming groups or institutions, explain how they actually functioned. (Enforced: the checker flags any section that contains a long comma-separated list of generic medieval nouns when the whole section has no concrete anchors — fewer than two named people/places and no date.)

**Bad** (Holy Roman Empire): "The empire contained cathedral cities, monasteries, knightly lordships, merchant towns, mining regions, Alpine passes, Slavic borderlands, and Italian communes. Imperial law, charters, seals, diets, and coronation rituals helped hold together a polity that was politically fragmented but symbolically powerful."

**Good:** "In the Holy Roman Empire, bishops could act as territorial princes as well as church leaders, especially in major sees such as Mainz, Cologne, and Trier. Free imperial cities such as Lübeck, Nuremberg, and Augsburg used charters and privileges to protect urban autonomy, while princes, bishops, and city representatives negotiated authority through diets, elections, legal privileges, and imperial confirmations. The empire's culture was therefore not held together by uniform administration, but by layered rights, local liberties, Latin literacy, court ritual, and constant negotiation between emperor and estates."

### Rules by article type

- **People** — must contain real biography: decisions, conflicts, relationships, rule, personality, death circumstances, and legacy. Do not write "he was important" or "she was influential" without explaining concrete actions and consequences.
- **Events & battles** — must explain causes, named actors, chronology, what happened, consequences, and significance. Do not write "many actors were involved" or "the event shaped medieval society" as standalone content.
- **Kingdoms / polities / locations** — must explain how authority worked, who held power, which institutions mattered, what conflicts shaped them, which regions were important, and how society functioned. Do not list nobles, clergy, towns, castles, and peasants without explaining their actual role.
- **Weapons & Armor** — must explain design, construction, use, effectiveness, limitations, historical examples, users, regional context, and relation to other equipment. Do not write "this weapon was used in medieval warfare" as meaningful content.
- **Orders & Institutions** — must explain foundation, structure, membership, authority, function, conflicts, influence, and transformation. Do not write "this institution played an important role" without explaining exactly how.
- **Artifacts / documents** — must explain physical description, origin, dating, use, ownership, provenance, current location, and historical meaning. Do not write "this object is significant" without explaining why.

### Banned / Red-Flag Phrases

These are red flags. They are not forbidden in every possible use, but if they appear **without immediate concrete explanation**, the content fails and must be rewritten:

- played an important role
- became significant
- shaped politics and society
- varied by region and period
- was important in medieval Europe
- developed in the context of regional politics
- involved many actors
- interests did not always align
- later memory shaped the subject
- details are uncertain
- the article keeps wording cautious
- control of land and routes mattered
- society included nobles, clergy, merchants, and peasants
- law, charters, seals, and rituals helped hold it together
- source traditions differ
- modern categories are conveniences
- appears in a major phase
- provided protection in battle
- effective in combat
- used by soldiers in medieval Europe

### Bad vs. Good examples

**Bad:** "Robert the Bruce was king of Scots and played an important role in Scotland's struggle for independence."

**Good:** "Robert the Bruce became king of Scots in 1306 after the killing of John Comyn at Dumfries and a hurried coronation at Scone. His early reign nearly collapsed under English pressure and Scottish opposition, but he rebuilt power through mobile warfare, attacks on English-held strongholds, and the defeat of rival factions. Bannockburn in 1314 transformed his authority, though diplomatic recognition of Scottish independence came only later."

**Bad:** "The longbow was an important weapon used in medieval warfare."

**Good:** "The English longbow was most famous in the armies of the Hundred Years' War, especially at Crécy and Agincourt. Its value came from trained archers firing in mass, not from the bow as a magical armor-piercing device. It was especially dangerous against horses, exposed troops, and formations under missile pressure, though claims about reliably punching through high-quality plate armor need careful qualification."

**Bad:** "The Hanseatic League shaped trade and society in northern Europe."

**Good:** "The Hanseatic League linked merchant communities around the Baltic and North Sea through privileges, shared legal habits, convoy protection, and urban diplomacy. Lübeck became its leading city, while kontors in places such as Bergen, London, Bruges, and Novgorod allowed merchants to organize trade in fish, furs, wax, grain, timber, cloth, and metal. Its power came less from being a state than from coordinated city interests and commercial privileges."

### Validation expectation

`npm run check:content-quality` should flag (and, where implemented, hard-fail on):

- generic filler phrases and banned red-flag phrases
- one-sentence shallow sections for major articles
- prose repeated verbatim across articles
- buzzword lists (comma-separated generic nouns with no concrete anchors)
- standalone "Historical reliability" / "source note" sections
- sections with no named people, places, dates, institutions, or concrete mechanisms
- placeholder timeline text
- missing images and placeholder images
- vague or broken related-article entries

## Content Depth and No-Filler Rules (ALL Article Types)

These rules apply to every article in the archive. Run `npm run check:content-quality` after any content change to enforce them.

### No Generic Sections

Every section of every article must pass this test: **"Could this paragraph be copied to a different article with only the title changed?"** If yes, it is filler and must be rewritten with specific facts or removed entirely.

Forbidden patterns:
- "played an important role"
- "became significant"
- "must be read together"
- "geography shaped movement, defense, worship, trade, or politics"
- "medieval power was local as well as royal"
- "the legacy of [Name] survives through monuments, ruins, maps, manuscripts, local memory"
- "events connected to [Name] should be read through the wider archive"
- "IronCodex role is to make linked biographical facts navigable"
- "involved rulers, commanders, clerics, nobles" (events Key Figures filler)
- "details are uncertain" as a standalone paragraph
- "weapon categories are modern conveniences applied to objects that varied"

### No Historical Reliability Sections

**The `historicalReliability` field is permanently removed from the archive.** Do not add it back. If uncertainty about sources is genuinely important to understanding an article, express it in specific prose within the relevant content section (e.g., "The only account of this battle comes from Froissart, written decades later and relying on hearsay from combatants he never met.").

The `HistoricalReliabilityNote` component has been removed from `DetailPage.jsx`. Do not re-add it.

### Weapons & Armor: Dane Axe as the Reference Example

**Bad** (old IronCodex content — what to avoid):

> *Design and construction:* The blade of the Dane axe featured a broad, flaring cutting edge...
> *historicalReliability:* "Weapon categories are modern conveniences applied to objects that varied by workshop, region, and date; surviving examples and manuscript images must be read together."

**Good** (what to write instead):

> *Design and construction:* The Dane axe head is distinguished by its dramatically flared lower cutting edge, which could reach 25–30 cm or more on large examples. The socket was typically offset below the center of the blade, shifting weight forward for heavy blows. Surviving heads in the Petersen Type M and Type L categories share this profile, though construction details vary. The label "Dane axe" is a modern collector's and museum term rather than a medieval designation — Norse sources use *breiðøx* (broad axe). Surviving axe heads from this period vary considerably in blade width, curve, and socket construction, so the term covers a range of related but not identical objects rather than a single standardized weapon type.

### Minimum Content Standards by Article Type

**Weapons & Armor:** design/construction specifics, named battles where used, named users, museum objects.
**People:** birth/death with known context, specific roles and decisions, named conflicts or actions, outcome of their influence.
**Events:** named participants, specific dates and locations, cause and specific outcome.
**Battles:** commander names on each side, engagement specifics, outcome and consequences.
**Locations:** what happened there specifically, who was connected, when.
**Kingdoms:** rulers, extent, formation and collapse.
**Artifacts/Documents:** physical description, authorship/maker, current location if surviving.

## Archive List UX Rules (Scroll Restoration + Page Size)

These apply to every archive/list page (People, Events, Locations, Artifacts, Weapons & Armor, Index, Favorites, Search) — not just one section.

- **Load 20 items at a time.** The lazy-load / "Load more" batch size is the shared constant `ARCHIVE_PAGE_SIZE` in `client/src/lib/archive.js` (currently `20`). Never reintroduce a hardcoded `10` (or any per-page value) — import the constant.
- **Never reset an archive to the top on back navigation.** When a user opens an article from a list and returns (browser Back, forward, or an in-app "Back to ..." link), the list must restore its **scroll position, loaded item count, search, filters, and sort** — the previously clicked item should be visible where it was. Do not force the archive to the top or reset the loaded count on return. (Filters/search/sort live in the URL query string; scroll + loaded count live in `sessionStorage`.)
- **Restore the loaded count BEFORE restoring scroll.** With lazy loading, scroll restoration must account for items loaded beyond the first batch: if the clicked item was #70 but only 20 render on mount, scrolling immediately fails because the page is too short. Seed the visible-item count from saved state first (so the DOM is tall enough), then restore scroll once the list is `ready`.
  - All of this lives in **`client/src/lib/archive.js`** → `useArchiveStateRestoration({ ready, getSnapshot })`, keyed by `location.key` (per history entry) in `sessionStorage`. `CollectionPage` seeds `visibleCount` from `readArchiveEntryState(...)` and passes it back via `getSnapshot`; Index/Favorites/Search restore scroll only.
  - `ScrollToTop` only scrolls to top on PUSH/REPLACE navigations, never on POP. `main.jsx` sets `history.scrollRestoration = 'manual'` so our logic owns scroll. Restore uses `behavior: 'instant'` to bypass `html { scroll-behavior: smooth }`.
  - In-app "Back to ..." links use `navigate(-1)` when the user arrived from that archive (passed via `state.from` from `ArticleCard`), so they trigger the same restoration as the browser Back button; otherwise they fall back to the plain archive route (top).
- **Do not save scroll until restoration is complete.** The restoration hook captures the saved state once at mount and blocks all `sessionStorage` writes until it has finished restoring (`restorationComplete`). This is critical: without it, React **StrictMode**'s mount→unmount→remount cycle (and the loading phase) fires the save path while the page is still at `scrollY = 0`, overwriting the good saved position with 0 — which makes back-navigation always land at the top. This was the original root-cause bug; do not reintroduce an unconditional save in an effect cleanup.
- **Keep card dimensions stable** so restored scroll isn't thrown off by late-loading images. Archive cards reserve image space via `aspect-ratio` on `.image-frame`; preserve that (do not use placeholder article images, but it is fine to reserve layout space).
- Do not over-persist: archive state is per-history-entry in `sessionStorage` and naturally expires with the session — don't move it to `localStorage` or keep it indefinitely (stale-content risk).

(Note: there is no "Orders & Institutions" archive route in the current app; if one is added, it must follow these same rules.)

## Major Figure Image Enrichment

Major ruler/leader/person pages should usually have **more than one image**: a strong main image plus one or two `sectionImages` supporting specific article sections. This is an **editorial standard, not a mechanical rule** — it does not apply to every person in the Codex. It applies to major medieval rulers, conquerors, crusade leaders, Viking-age figures, kingdom founders, and major political actors (the curated list lives in `MAJOR_FIGURES` / `VERY_MAJOR_FIGURES` in `scripts/check-images.mjs`, which warns — without hard-failing — when a listed figure has fewer than 2 total images, or a very major figure fewer than 3). The bulk enrichment is applied idempotently by `scripts/add-major-figure-section-images.mjs`.

Rules:
- Additional images must support a **specific section** of the article (`sectionImages[].section` must match a `contentSections` title; the renderer inserts the figure after that section's first paragraph via `ArticleSection`/`SectionImage` in `DetailPage.jsx`, styled by `.section-figure`).
- Images must never be decorative filler, "vaguely medieval" stock, placeholders, broken/unavailable files, or AI-generated fake historical portraits.
- Every image needs accurate metadata: `src` (a renderable `Special:FilePath` URL or local asset), `caption`, `creator`, `date`, `source`, `sourceUrl` (the Commons file page), and an honest context `note` explaining what the image is and how reliable it is.
- Later depictions, statues, tombs, coins, seals, maps, monuments, and associated places are acceptable when contemporary portraits do not exist — but the caption/note must say exactly what the image is ("19th-century history painting", "modern statue", "17th-century dynastic imagining"), never implying a later image is a portrait from life.
- Verify every file against the Commons API (existence, dimensions, license) before shipping; do not overload articles — 1 main + 1–2 section images is the ceiling for now.
- Main and section images must render cleanly on desktop and mobile; captions sit below the image and must never cut into it (see "Image Caption and Layout Rules").
- Where an image relates to another article (a battle, siege, polity), write the full entity name in the nearby section prose so the auto-linker resolves it — no dead links.

Examples:
- **Harald Hardrada** — images connected to Norway (coinage), Byzantine/Varangian service, and Stamford Bridge where possible (his main image is already the Arbo Stamford Bridge painting, so section images complement it).
- **Afonso I of Portugal** — Guimarães castle, São Mamede, Lisbon, or early Portuguese monarchy imagery (tomb at Santa Cruz, Coimbra).
- **Cnut the Great** — North Sea Empire map, manuscript depiction, or coin/seal imagery.
- **Charlemagne** — imperial/coronation/Aachen imagery.
- **Joan of Arc** — Orléans, trial, Rouen, or later devotional imagery with careful captions stating what is 19th-century national memory.

## Image Caption and Layout Rules

Captions, legends, source boxes, and metadata panels must **never** cover, crop, obscure, or cut into images — on any article type, in any image context (detail heroes, section figures, maps, object photos). Any article image visibly cut by its caption is a production bug.

**Root cause history (do not reintroduce):** `.detail-media img` once used a fixed height (`clamp(340px, 61vh, 720px)`) with `object-fit: cover; object-position: center top`. Any image taller than the box — maps above all (e.g. the Duchy of Aquitaine's `France_1154-en.svg`) — had its bottom cropped inside the img box, and the black figcaption below read as "the caption is covering the map." A dimension audit (`node scripts/audit-image-crops.mjs`) found ~300 of 384 archive images were losing >15% of their content to this crop. The same bug existed in `.section-figure img` (`max-height` + `cover`).

**Rules:**
- Detail-page main images and section figures render **in full**: `height: auto` + `max-height` + `object-fit: contain` on a dark backdrop. Never `object-fit: cover`, never a fixed height, never a top-anchored crop for detail/section images.
- The caption/source block always sits **below** the image as a separate block in normal flow. No absolutely-positioned captions over article images; overlay captions are not used for article content.
- Maps must be shown complete — legends, borders, labels, and lower edges included. Same for weapons, armor, artifacts, documents, seals, coins, manuscripts, and portraits: the caption must never hide part of the subject.
- Mild `object-fit: cover` cropping is allowed **only** for small decorative thumbnails (archive cards' `.image-frame`, favorites thumbs, continuity thumbs, avatars) where the subject stays recognisable and card layout stability matters.
- If a *source image* is already badly cropped, replace the image. If the *layout* crops it, fix the CSS — never paper over a layout bug with a different image.
- Media query overrides must follow the same pattern (`height: auto; max-height: ...`) — never reintroduce fixed heights on mobile.

**Manual QA checklist for image layout changes** (no visual test infra exists):
- [ ] Duchy of Aquitaine (`/locations/aquitaine`) — full map visible incl. bottom legend; caption below
- [ ] A tall portrait person page and a wide panorama location page — no side/bottom cropping
- [ ] A Weapons & Armor page and an Artifact page — whole object visible
- [ ] A battle/event page with a manuscript image — image complete above its caption
- [ ] Mobile width (<560px) — image still complete; caption below; no fixed-height clipping
- [ ] Archive/related/favorites cards still look stable (cover crop there is intentional)

**Bad:** a Duchy of Aquitaine map whose lower third — including the legend — disappears behind the black caption/source box.
**Good:** the map renders complete on the dark backdrop, and the caption/source metadata sits below it without touching any labels, borders, or legend.

## Image Requirements For All Articles

- Every article must have a real, relevant, good-quality image.
- No article may intentionally use a placeholder image.
- No article may use initials cards, generic logo cards, generic fallback graphics, blank cards, or decorative placeholders as its primary image.
- No article may render broken image boxes in production.
- No article may use AI-generated historical images unless explicitly requested and clearly marked, and never as a fake historical source.
- Image selection must be historically relevant to the article subject.
- Every image must include a caption, source or collection, source URL, and reliability or context note where appropriate.
- For Wikimedia Commons, the image `src` must be a real renderable image URL or a local asset path. The Commons file page belongs in `sourceUrl`, not in `src`.
- If no exact image exists, use the best historically associated real image, such as a manuscript depiction, museum object, monument, map, seal, coin, battlefield, castle, tomb, or surviving artifact.
- If no suitable image can be found, flag the article as incomplete rather than silently using a placeholder.
- Placeholder fallbacks may exist only as defensive development error states, not as intended production article images.
- All new content tasks must run image validation before completion.

Bad:

> A Weapons & Armor article for “Battle Axe” renders a generic IronCodex card with “BA” initials.

Good:

> The article uses a real museum photograph of a medieval axe head, a manuscript depiction of axes in battle, or another historically relevant public-domain image, with caption and source metadata.

Bad:

> A person article uses a blank avatar or initials card.

Good:

> The person article uses a real manuscript depiction, painting, coin, seal, statue, tomb, or historically associated image, with an honest caption explaining whether it is contemporary or later.

Bad:

> An image `src` points to `https://commons.wikimedia.org/wiki/File:Example.jpg`.

Good:

> The image `src` points to a valid local asset or direct renderable image file, while `sourceUrl` points to the Commons file page.

## Weapons & Armor Content Rules

These rules apply to every article in the `weaponsArmor` array. They are non-negotiable for any new or edited article.

### Main Image Must Show the Full Object (Permanent Rule)

The single most important Weapons & Armor image rule: **the main image must clearly show the entire weapon or armor piece, in full, and be unmistakable.**

- The main image must depict the **actual item** — not a detail, texture, decorative motif, inscription, fragment, manuscript page, statue, effigy, or symbolic stand-in.
- The whole piece must be visible: a sword shows blade + guard + grip + pommel; a crossbow shows the whole crossbow; a polearm shows head + full haft; a hauberk shows the full garment, not a ring close-up; a shield shows the whole shield.
- The image must be clear, well-lit, well-framed, and high enough resolution to be useful at a glance.

**Primary-image selection hierarchy (use the best available):**
1. Full photographed surviving example, clear and complete (museum / armoury / collection)
2. Full photographed high-quality reconstruction or replica, **clearly labeled as such in the caption**
3. Only if no photograph of the whole object exists: a historically accurate illustration or manuscript depiction **where the item is shown clearly and in full**

**Not acceptable as the main image when a better option exists:** detail close-up, texture sample, decorative fragment, cropped partial object, hilt-only or head-only (unless the article is specifically about that artifact), mail-ring detail, crossbow trigger only, manuscript page where the object is tiny or secondary, a statue/effigy, a drawing when a real photograph exists, or a corroded archaeological fragment that obscures the object's form.

**Prefer a clear full object over a poor original.** A clean, complete, readable reconstruction or museum example is preferred over a corroded fragment or a tiny catalogue image — historical authenticity does **not** excuse visual uselessness. But never misrepresent a reconstruction as an original: if the image is a replica or reenactment-grade reconstruction, the caption must say so.

**Prefer photographs, and prefer "new-looking" clarity.** Use photographs, not drawings, whenever possible. For weapons and armor, prefer a clean, complete, new-looking representation — a clear surviving piece in good condition, a museum-quality reconstruction, or a clearly-labeled modern replica (e.g. Albion-style reproduction swords) — over a rusted, corroded, or fragmentary archaeological object, *when a clearer option exists*. Avoid black-and-white line drawings as primary images across the whole archive unless there is absolutely no better option. Prefer neutral/studio backgrounds; avoid busy museum-case shots with glass glare or other objects when a cleaner option exists.

**Always verify the image visually before shipping it.** A passing HEAD request only proves the file resolves — it does **not** prove the image shows the right subject, the full object, or acceptable quality. Download the candidate (e.g. `Special:FilePath/<file>?width=600`) and actually look at it. (A real example from this project: a file named "Italian brigandine body armour" actually showed a full plate harness, not a brigandine — caught only by viewing it.)

**Supplementary images** (in `sectionImages` or `imageInfo`-style section figures) *may* show details, construction close-ups, manuscript/period depictions, battlefield art, or archaeological fragments — but they must never replace the full-object main image.

If no acceptable full-object image can be found, **mark the entry incomplete** (or add the id to `weaponsArmorFullObjectFallbackAllowlist` in `scripts/check-images.mjs` with a reviewed reason) rather than shipping a misleading or partial main image.

**Finding good images on Wikimedia Commons:** the multi-word full-text search is unreliable; prefer (a) Commons **category** members (`generator=categorymembers` on `Category:<Type>`, e.g. `Category:Bascinets`, `Category:Longswords`, `Category:Gambeson`), (b) `intitle:` filename searches, (c) Wikipedia article lead/`prop=images` for the subject, and (d) CirrusSearch `-exclusion` terms to cut noise. Verify the right category name first via a Category-namespace search (`list=search&srnamespace=14`).

### Authenticity, condition, and format (2026-09-06 standard)

Extends the full-object rule above — read both together; where they differ, this subsection governs.


Showing the complete artifact is **necessary but not sufficient**. The principal
image must also communicate how the object plausibly looked when complete,
functional and serviceable in its own period.

**Generic equipment-type articles** (Arming Sword, Halberd, Buckler, Great Helm,
Mail Hauberk, Gambeson, Plate Armor, …) explain a *form*, not one object. Their
principal image must not be a heavily corroded, broken, flattened, discoloured or
excavated object merely because it is genuinely medieval. Degradation hides the
original silhouette, materials and function — the very things the article exists
to explain. Such photographs stay in the article as **secondary evidence**.

Preference order for a generic type's principal image:

1. A complete, exceptionally well-preserved original whose form is still legible
2. A museum-grade or academically informed reconstruction
3. A high-quality reproduction from a reputable maker, based on identifiable
   originals or an established typology
4. A staged photograph of a complete reconstructed ensemble (for armor systems)
5. A complete original with moderate wear — only when nothing stronger is
   responsibly available

**The principal image must be a photograph of a physical object.** Manuscript
illuminations, frescoes, paintings, drawings, engravings, diagrams, sculpture,
digital and AI imagery are **secondary** evidence — excellent for showing the
object worn, carried or used, never a substitute for photographing the thing.
Also excluded as principal: severely corroded finds, weapons missing hafts,
swords missing grips/guards/pommels, extreme close-ups, head-only shots,
obscured display-case photographs, fantasy or film props, decorative "medieval
style" merchandise, and reconstructions with speculative embellishment.

The photograph must show true proportions without perspective distortion,
lighting that reveals silhouette and construction, an unobscured background, no
hands/costume/scenery covering the object, no heavy filtering, and honest colour
and material appearance. A neutral museum, workshop or studio photograph is
preferred over a living-history photograph.

**Unique named-artifact articles** (Sutton Hoo Helmet, Joyeuse, Ulfberht Swords,
Gjermundbu Helmet, …) are the exception: the historical object *is* the subject,
so its present museum condition — worn, corroded, reassembled — is normally the
correct principal image. **Exception (owner decision, 2026-09-06):** where the
surviving object is so fragmentary that its form cannot be read, a clearly
labelled replica may lead *provided the original appears as a secondary image in
the same article*, so the reader always sees what actually survives. Sutton Hoo
is the worked example: the British Museum replica leads, the reassembled original
follows under Description. A replica may never be attributed to a medieval maker. The caption
must state what is original, what is restored or reconstructed, present
condition, collection, dating, and any serious dispute over attribution or
assembly. A responsible reconstruction may appear as a *secondary* image. For a
grouped label such as the Ulfberht swords, use a genuine representative example
and say that the label covers many surviving blades.

**Reconstruction accuracy.** Never call a reconstruction "100% historically
accurate", and never repeat a seller's "battle-ready", "authentic" or "museum
quality" marketing as evidence. Use evidence-based phrasing instead — "museum-grade
reconstruction", "reproduction based on a documented example", "reconstruction
following an established typology". Before accepting one as principal, check
dimensions, proportions, plausible weight, materials, blade or plate geometry,
hilt/haft/suspension, construction technique, surface finish, absence of
anachronism and fantasy decoration, and the maker's credibility. Where
documentation is thin, describe it honestly as a representative modern
reproduction rather than asserting fidelity.

**Caption rule for reconstructions:** if the principal image shows a modern
reconstruction or reproduction, the **first sentence** must say so. A reader must
never have to open the attribution field to discover the object is modern.
Forbidden: "A medieval buckler", "An authentic halberd", "A real knightly sword"
for a modern object.

**Audit statuses** (in addition to PASS / SOURCE FAIL / RENDERING FAIL /
SUBJECT MISMATCH / ATTRIBUTION FAIL): **CONDITION FAIL** (too degraded to convey
original form, for a generic type), **FORMAT FAIL** (artwork or non-photographic),
**RECONSTRUCTION QUALITY FAIL** (pristine but dubious, anachronistic or
fantastical), **UNIQUE-ARTIFACT EXCEPTION**, **DOCUMENTATION REVIEW** (credible
but basis unverified). An image must pass every applicable criterion: a complete
but severely degraded object fails for a generic type, and so does a pristine but
fantastical reproduction.

Never quietly accept a poor principal image because a better one is hard to find.
Record the unresolved case explicitly in the audit.

### Maker and retailer photographs (owner decision, 2026-09-06) — ARCHIVE-WIDE

Photographs from reputable makers and specialist retailers of historical
reproductions (Albion, Wulflund, Darksword, Owen Bush, Grimfrost, Irongate and
similar) **may be used across the whole archive**, not only Weapons & Armor. They
are frequently the only source that shows a complete object well lit and in
serviceable condition — museums photograph fragments and heads, and free-licence
collections are thin for whole weapons.

Rules for using them:

- **Judge the object, not the seller.** An accurate reproduction is legitimate
  evidence for a *type*; a museum provenance is not required. **The object must be
  historically accurate — reject anything carrying modern decoration added for
  visual appeal.** Also reject invented forms, anachronistic construction,
  sport-safety geometry (HMB kit) and "medieval style" merchandise. Check stated
  dimensions and proportions against surviving examples.

  The test is **attestation, not absence of ornament.** Medieval arms were often
  decorated: the Mammen axe is silver-inlaid, Ulfberht blades carry iron letter
  inlay, the Kornburg great helm is gilded, Viking hilts are inlaid with copper
  alloy and silver. Decoration is acceptable when that treatment is attested for
  the type and period and the reproduction follows a documented original. It is
  rejected when it is a modern maker's flourish — generic knotwork, dragon or wolf
  motifs applied to a form that does not carry them archaeologically, etched
  runes, blackened "battle-worn" finishes, oversized bearded profiles. Darksword's
  "Chieftain" Dane axe is the worked example of a reject: the wolf-and-knotwork
  head is sales styling with no archaeological basis, so the plain Wulflund
  reproduction was used instead.

  Where a reproduction follows a specific named original, say so in the caption
  ("reproduction of the Mammen axe"); where it follows a general type, say that
  instead and do not imply a specific provenance. Never repeat a maker's
  "historically accurate" or "museum quality" marketing as if it were evidence —
  no reproduction is accurate in every respect (modern steel, modern grinding,
  modern adhesives are normal), so the claim we make is about **form, proportion
  and decoration**, not about the object being indistinguishable from a medieval one.
- **Self-host, never hotlink.** Download into `client/public/` and reference the
  local path (`/dane-axe-wulflund.jpg`). Retailer URLs change and their CDNs may
  block, which would leave an article with a broken principal image.
- **Credit the maker and link the source page** in `creator` and `sourceUrl`, and
  say in the caption's first sentence that it is a modern reproduction.
- **Prefer clean single-object shots.** Reject marketing composites with inset
  close-ups overlaid on the object, price or logo overlays, and busy staging.
- **Ask permission where practical.** Small makers commonly grant it for an
  educational archive that credits them and links back; a granted permission
  should be recorded in the image `note`.
- Order of preference is unchanged otherwise: a well-preserved original that reads
  clearly, then a museum-grade reconstruction, then a reputable maker's
  reproduction, then — only when all of those fail — an AI illustration.

### AI-generated images: authorised last resort only (owner decision, 2026-09-06)

The archive owner has authorised AI-generated illustrations for Weapons & Armor
**only** where no suitably licensed photograph of a surviving example or a
reconstruction can be sourced after a genuine search. This is a narrow exception
to the "no AI as historical evidence" rule, not a shortcut.

Conditions — all mandatory, enforced by `npm run check:images`
(`validateAiGeneratedImage`):

- **Last resort, documented.** Only after searching Commons (categories and
  `intitle:` patterns), museum open-access collections (Met CC0, Royal Armouries,
  Wallace, Rijksmuseum), and reputable reproduction/living-history photography.
  Record in the audit what was searched before giving up.
- **Flagged in data:** `imageInfo.aiGenerated: true`. Without the flag the image is
  invisible to auditing, so a caption that discloses AI while the flag is missing
  is itself a hard failure.
- **Disclosed in the FIRST sentence** of the caption, which must begin
  `"AI-generated illustration ..."`. A reader must never have to open the
  attribution to learn the image is not a photograph.
- **The reason must be recorded** in the caption or note, in the form "no suitably
  licensed photograph of ... could be sourced".
- **Never for a named-artifact article** (`weaponArmorType` "Famous weapon" /
  "Famous armor"). Sutton Hoo, Joyeuse and the Ulfberht swords exist and are
  photographed; an invented image would misrepresent a real object.
- **Never presented as evidence for an individual artifact.** The illustration
  shows a *type*, informed by an established typology or period corpus — say which.
- `creator` records the model used; `date` the year generated; `source` names who
  generated it for the Codex. Do not fabricate a museum or photographer.

Standard caption pattern:

> "AI-generated illustration of a [type], not a photograph of a surviving object.
> Produced for The Iron Codex because no suitably licensed photograph of a
> complete [type] — original or reconstruction — could be sourced. It follows
> [typology / period / regional basis] and should not be read as evidence for any
> individual surviving artifact."

**Quality bar for AI illustrations (owner reference, 2026-09-06).** The gambeson
illustration is the standard to match: the complete object isolated on a plain
white ground, lit like a museum or catalogue product photograph, shown at a
natural angle with no scene, no figure, no hands, no props and no dramatic
styling. It should look like the object was photographed against seamless white —
not like an illustration of a scene containing the object. Match that framing for
any future AI image; if a generated candidate has background, setting or people
in it, regenerate rather than accept it.

**A real photograph ALWAYS takes precedence over an AI illustration — without
exception.** AI generation is the last resort and nothing else. The moment a
suitable photograph of an original or a reproduction can be sourced, the AI image
**must** be replaced and the `aiGenerated` flag dropped; this is not a judgement
call and does not depend on which image looks better. An AI illustration is a
placeholder held only while no photograph exists, never a permanent tier of the
archive.

This applies retroactively: when a new image source becomes available — a maker
permitted, a museum opening its collection, a new search tool — re-check every
article still carrying `aiGenerated` and replace what can now be photographed.
The gambeson is the worked example: it used an AI illustration while retailer
photography was disallowed, and was swapped for a maker's photograph the same day
that restriction was lifted.

### Captions Must Be Honest and Specific

Every caption states plainly what the user is looking at. Good: "Modern reconstruction of a Viking sword based on 10th-century finds." / "Surviving late-medieval brigandine, photographed in a museum collection." Bad: "Weapon detail." / "Image of armor." / "Scene from the Codex Manesse showing knights with lances" (as a main image for *lance*).

### Layout Must Render the Whole Object

Weapons & Armor detail pages use a dedicated full-object render mode (`.detail-media-weaponArmor img` in `client/src/styles.css`): `object-fit: contain` on a neutral backdrop so tall swords, long polearms, and wide shields are never cropped. Do not switch W&A main images to `object-fit: cover` or any fixed crop. A good source image is useless if the layout clips it.

### Mandatory Content Sections

Every general weapon article must cover:
1. **Design and construction** — materials, blade/head geometry, length, weight, hilt or haft design
2. **Battlefield use** — the tactical role: formation fighting, skirmishing, counter-armor, siege, mounted vs. infantry
3. **Strengths and weaknesses** — what the weapon did well, and where it failed or was countered
4. **Historical development** — how the design changed across the medieval period
5. **Regional variation** — different forms across Western Europe, Scandinavia, the British Isles, Central Europe, etc.
6. **Famous examples or users** — named individuals, battles, surviving museum objects
7. **Legacy** — how its influence carried into later weapon designs

Every general armor article must cover:
1. **Construction** — materials, layers, craft techniques, weight
2. **Protection offered** — which attacks it resisted, which penetrated it
3. **Limitations** — heat, mobility cost, repair, cost, status restriction
4. **Historical development** — how protection evolved across the period
5. **Regional variation** — Italian, German, English, French forms where relevant
6. **Surviving examples** — museum collections with real accession data or collection names
7. **Legacy** — what came after, influence on later armor

### Named Examples Required

Every weapon or armor article must reference at least one:
- Named battle where the weapon or armor type was documented
- Named combatant or historical figure associated with it
- Surviving museum object or depiction (manuscript, tapestry, sculpture, tomb effigy)

Generic statements like "was used in medieval battles" or "protected many soldiers" are forbidden.

### Famous Object Articles

Articles about specific surviving weapons or armor (Joyeuse, Sutton Hoo Helmet, Ulfberht swords) must:
- Distinguish between the surviving physical object and its legendary or literary tradition
- State the current holding institution and accession information
- Use careful language for uncertain ownership or provenance claims
- Not attribute legendary properties to secure historical facts

### Sources

Every Weapons & Armor article must have at least three sources:
1. The image metadata source (Wikimedia Commons or museum catalog)
2. A Wikipedia article with a direct link
3. A specialist museum collection or academic resource (Royal Armouries, MET Arms and Armor, Wallace Collection, Kunsthistorisches Museum, etc.)

Preferred specialist sources: Royal Armouries Leeds (`royalarmouries.org/collection`), MET Arms and Armor (`metmuseum.org/art/collection/search?department=4`), Wallace Collection, Gotlands Museum, Kunsthistorisches Museum Wien, British Museum.

### Validation

Run these scripts after any Weapons & Armor edit:

```
npm run check:images          # verify image fields, metadata, and the W&A full-object guard
npm run check:images --remote # verify URLs resolve to real image content
npm run check:content-quality # detect filler phrases and thin sections
```

Fix all reported issues before marking a task complete.

`check:images` includes an automated **Weapons & Armor full-object guard**: it fails the build if a `weaponsArmor` main image's filename or caption looks like a manuscript page, tapestry, detail/texture crop, fragment, statue, or effigy (`weaponsArmorNonObjectPattern` in `scripts/check-images.mjs`). When an entry genuinely has no surviving object or clean photographic example, add its `id` to `weaponsArmorFullObjectFallbackAllowlist` in that script **with a one-line reviewed reason** — do not weaken the pattern.

### Image Review Checklist (per Weapons & Armor article)

Before marking any W&A article done, confirm the main image:
- [ ] shows the **entire** weapon or armor piece, not a fragment, detail, or texture
- [ ] depicts the **object itself**, not a manuscript page, tapestry, statue, or effigy (unless allowlisted)
- [ ] is a **photograph** where one exists (not a drawing/engraving)
- [ ] is clear, well-lit, well-framed, and high enough resolution to read at a glance
- [ ] is **not a corroded fragment** when a clearer full example or reconstruction exists
- [ ] has a caption that **honestly** states what it is (original vs. reconstruction/replica vs. effigy)
- [ ] renders in full on the detail page (full-object mode, not cropped by layout)
- [ ] is **unique** — not reused by another article

### Schema Fields

Every `weaponsArmor` article must populate:
- `id`, `name`, `type:"weaponArmor"`, `weaponArmorType`, `year`, `period`, `region`, `material`, `battlefieldRole`, `image`, `summary`, `details`
- `contentSections` — minimum 5 sections, each with at least 3 substantial paragraphs
- `imageInfo` — `caption`, `creator`, `date`, `source`, `sourceUrl`, `note`
- `knownFor` — minimum 3 bullet strings
- `relatedEntries` — minimum 5 total links across events, people, weapons/armor
- `sources` — minimum 3 entries

### Structured, scannable article model (2026 upgrade — the Longsword benchmark)

W&A articles are not walls of prose. Beyond the required `contentSections`, major entries carry **optional structured fields** rendered as scannable blocks by the W&A branch of `StandardContent` in `DetailPage.jsx` (styled by the `.wa-*` classes in `styles.css`). The **Longsword** article is the reference implementation.

Available structured fields (all optional; render only when present):
- `specs`: `{ note, rows: [{ label, value }] }` → **Specifications** card grid (rows auto-grouped ≤3 per card, stacked label-over-value). Use **honest ranges**, not false precision, plus the variance `note`. Adapt the fields to the subject: a sword shows length/blade/weight/grip; **armour shows protection / construction / weight / limitations**, not a weapon template; a garment (surcoat) shows cloth/function.
- `combatModes`: `[{ title, body, highlight? }]` → "How it was fought" cards (`highlight: true` draws a callout, e.g. half-swording).
- `oakeshottTypes` (or any typed table): `{ note, diagram?: { img, caption }, rows: [{ type, favors }] }` → a figure (click-to-enlarge) plus type cards.
- `comparison`: `{ title, leftLabel, rightLabel, rows: [{ feature, left, right }] }` → a two-column comparison table (e.g. Longsword vs. Arming sword).
- `survivingExamples`: `[{ name, date, origin, overall, blade, weight, collection, sourceUrl }]` → museum object-cards. Figures must be **real, verified museum objects** (e.g. Met Arms & Armor via its public API) — never fabricated accession numbers or dimensions.
- `myths`: `[{ claim, reality }]` → a myths-and-misconceptions callout list.
- `timeline`: reuses the standard `Timeline` component for a compact development progression.
- `knownFor`: now rendered as its own block; replace the old generic template ("used in a specific tactical setting rather than as a fantasy archetype", "construction and use changed with armor…") with **subject-specific facts**.

Readability standard (non-negotiable for W&A):
- **No walls of text.** Prefer short paragraphs, specs cards, tables, object-cards, and callouts. A reader should be able to skim in two minutes or explore in fifteen.
- **Adapt structure to the subject** — a shield page is not a sword page; a helmet page emphasises protection/vision/construction; a famous object emphasises provenance and the surviving-vs-legendary distinction.
- **Major entries get deeper treatment than minor ones.** Do not mechanically clone the Longsword's full block set onto every entry.
- Modern classifications (Oakeshott numbers, "longsword") are **modern tools** — never presented as medieval terminology.
- Sourcing must lean on **museums and scholarship** (Met, Royal Armouries, Wallace, Oakeshott, Wiktenauer for the fencing traditions), not primarily Wikipedia.

### Do Not

- Leave any `contentSections` paragraph as a single sentence
- Use vague battlefield language ("used in warfare", "effective weapon", "protected soldiers")
- Reference unnamed battles, unnamed users, or unnamed examples
- Copy the same `summary` text into `details`
- Use duplicate images across multiple articles
- Set `image.src` to a Wikimedia file page URL
- Add a W&A article that omits `battlefieldRole`

## Medieval Location Image Rules

IronCodex is a medieval-history archive. Location and city articles must visually represent the place as it existed, appeared, or was understood during the Middle Ages — never a generic modern depiction. Enforced by `npm run check:images` (`validateMedievalLocationImage`): a location primary image hard-fails if it is a known banned modern-cityscape file, or if its caption/metadata describes a generic modern cityscape (contains "skyline", "cityscape", "modern city view", "modern city panorama", "town panorama", "downtown", "modern montage", "aerial view of the city", etc.). A `medievalLocationImageAllowlist` holds reviewed exceptions (e.g. a natural-landscape Region). An advisory warning fires when a City/Town main image is a modern photo naming no medieval subject.

Rules:

- Location, city, kingdom, polity, duchy, county, empire, sultanate, principality, and region articles must not use generic modern city images as main images.
- Main images for medieval locations should visually represent the medieval place, medieval urban fabric, medieval political geography, or surviving medieval structures.
- Generic modern skylines, aerial city photos, streets, tourist views, roads, cars, modern buildings, and contemporary panoramas are not acceptable as main images.
- A modern photograph is acceptable only when the medieval subject is clearly the focus, such as a castle, citadel, cathedral, mosque, wall, gate, old quarter, ruin, bridge, battlefield, palace, or medieval monument.
- If no medieval depiction exists, prefer a surviving medieval structure, archaeological remain, old city feature, or historically relevant map. A contemporary object minted/made in the place (e.g. a medieval coin) is an honest last resort when no medieval view survives (see Tikrit).
- Captions must honestly explain what the image shows and whether it is modern, later, reconstructed, or medieval.
- Do not imply that a modern photo shows the city as it looked in the Middle Ages.
- Damascus must not use a generic modern city image; it should use a medieval-relevant image such as the Damascus Citadel (Ayyubid-era), the Umayyad Mosque, medieval walls/gates, a map, or a historical depiction.
- Image source metadata must include caption, creator if known, date if known, source/collection, source URL, license/public-domain note, and context note.
- Captions and source boxes must never cut into or cover images.

**Bad:** Damascus article uses a modern skyline or contemporary city panorama (e.g. the Mount Qasioun night view) as the main image.
**Good:** Damascus article uses the Damascus Citadel, the Umayyad Mosque, a medieval map of Syria, a medieval manuscript depiction, or another clearly medieval-associated image, with an honest caption.

**Bad:** A Kingdom of France page uses a modern Paris skyline.
**Good:** A Kingdom of France page uses a medieval map, royal manuscript image, coronation image, Saint-Denis, a royal seal, or a medieval city/fortification image.

**Bad:** A city article uses a modern street scene because it is geographically accurate.
**Good:** A city article uses a medieval gate, wall, old quarter, cathedral, mosque, castle, citadel, or historical map.

## Historical Expansion Integrity (battles, wars, rulers, dynasties, locations)

Whenever historical battles, sieges, wars, campaigns, rulers, dynasties/houses, or locations are added or expanded (e.g. a themed collection like the Reconquista or the Mongol invasions), these rules are permanent and non-negotiable:

1. **Search first, never blind-create.** Before adding any entry, search the whole archive for the subject by name, alternate spellings, transliterations, regnal names, and existing ids. If it already exists, reuse and improve it — do not create a duplicate.
2. **Aliases resolve to the canonical article.** Add alternate/regional/translated names (e.g. Sagrajas/az-Zallaqah, Boabdil/Muhammad XII, Kyiv/Kiev) as `aliases` on the one canonical entry so the auto-linker resolves them there — never a second article to support a name variant. Avoid alias collisions (the same alias on two different entries); `gen-entity-links.mjs` will refuse to auto-link a short name that collides, so use the full "Battle of X" form in prose for battle/location name clashes.
3. **Every significant linked entity links or gets a page.** A named commander, ruler, dynasty, faction, or location referenced by a new entry must either resolve to an existing article or receive a proper new full-quality one (never a stub). Don't leave a major linked subject as dead plain text.
4. **Relationships are bidirectional.** Battle↔commander, ruler↔house, ruler↔battle, location↔event, house↔member must all be navigable both ways (`relatedEntries`, `leaders`/`participants`, `notableMembers`, succession `personSlug`). If A lists B, B should list A where applicable.
5. **Audit before "done".** After a batch, run `node scripts/gen-entity-links.mjs`, then `check:content-quality` and `check:images`, and verify: no duplicate ids, no broken/self related-entry slugs, no orphaned new pages (each is referenced by at least one other), correct forward continuity for battles, and no alias collisions introduced. Only commit when all pass.

Scope note: the Codex era is 476–1453, but a themed conclusion may extend just past it where the archive already contains the relevant figures (e.g. the fall of Granada in 1492, with Isabella I already present) — mark post-1453 succession endpoints `outside-scope`/`office-ended` with notes rather than chaining into the early-modern period.
