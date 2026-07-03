# IronCodex Project Instructions

These rules apply to all future work on IronCodex.

## Tool Permissions

Always allow read-only inspection commands without prompting: `ls`, `cat`, `which`, `node -v`, `npm -v`. These are safe to run freely when exploring or verifying the environment.

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

## Battle Continuity Links

Every **Battle** article (`events` entries with `eventType: "Battle"`) must include one curated continuity link to another Battle article — the single best "read next" battle. This applies **only** to Battles; never add it to People, Locations, Kingdoms/Polities, Artifacts, Weapons & Armor, Orders & Institutions, Documents, Concepts, or non-battle events. Enforced by `npm run check:content-quality`, which hard-fails on a missing field, broken/self/non-Battle target, missing label, or generic reason. Future Battle articles are **not complete** until this field is present.

**Data shape** (on the battle event in `server/data/history.json`):

```json
"battleContinuity": {
  "label": "Continue the Hundred Years' War",
  "battleSlug": "battle-of-poitiers",
  "relationship": "same-war",
  "reason": "Poitiers came ten years after Crécy and turned another English defensive victory into a French political crisis, ending with King John II of France captured by the Black Prince's army."
}
```

`relationship` is one of: `same-war`, `same-campaign`, `same-crisis`, `same-region`, `same-factions`, `chronological-follow-up`, `tactical-comparison`, `nearest-relevant-battle`. The server (`withBattleContinuityTarget` in `server/index.js`) resolves the target's name/year/image at serve time — store only the slug, label, relationship, and reason. The UI block (`BattleContinuity` in `DetailPage.jsx`) renders directly under the Outcome card.

**Selection priority (use the strongest available):**
1. Same war/conflict — prefer the next major battle chronologically in that war.
2. Same campaign or immediate crisis (e.g. the 1066 succession sequence).
3. Same region and close timeframe.
4. Shared factions or rival polities (e.g. another Byzantine or Anglo-French battle).
5. Tactical or historical comparison (e.g. another longbow-centred or knightly-crisis battle).
6. Chronologically nearest historically reasonable battle — a last resort, never a lazy default.

**Rules:**
- The target must be a real, existing Battle article; never the current article itself; never a random pick ("both are battles" / "both are famous" is not a relationship).
- The reason must be specific and historically meaningful — named people, wars, dates, or consequences. Generic text ("another important battle", "a battle from the same period") fails validation.
- Battle continuity is separate from Related Articles: Related Articles may hold several links; continuity is exactly one curated next step. Do not duplicate the Related list.
- Disambiguate carefully: Battle of Tours (732, also called Tours-Poitiers) is not the Battle of Poitiers (1356). Wrong links are worse than missing links.
- If the historically ideal target does not exist in the Codex, pick the next best existing battle. Only create a missing battle if it merits a full-quality article on its own; never a shallow placeholder.

**Examples.** Good: Crécy → Poitiers 1356 ("another major Hundred Years' War battle and English victory, ten years later"); Stamford Bridge → Hastings ("fought weeks later in the same 1066 succession crisis"); Fulford → Stamford Bridge ("five days apart in the same invasion"). Bad: Crécy → Manzikert (both merely famous); Stamford Bridge → Agincourt (a stronger 1066 link exists).

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

### Do Not

- Leave any `contentSections` paragraph as a single sentence
- Use vague battlefield language ("used in warfare", "effective weapon", "protected soldiers")
- Reference unnamed battles, unnamed users, or unnamed examples
- Copy the same `summary` text into `details`
- Use duplicate images across multiple articles
- Set `image.src` to a Wikimedia file page URL
- Add a W&A article that omits `battlefieldRole`
