# IronCodex Project Instructions

These rules apply to all future work on IronCodex.

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
- `historicalReliability` — `level` and `note`
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
