# Session handoff — 2026-09-15

> **Temporary file.** Read this, then `QUEUE.md`. Once the next session has folded
> anything durable into `QUEUE.md` or `CLAUDE.md`, delete it — a note that records
> a gap is an object with an expiry date.

## Resume here

- **Project in flight: The Iron Codex.** The owner approved a 4-step plan on
  2026-09-14. **Step 1 is shipped and verified live. Next: step 2.**
- **Read order:** this file → `QUEUE.md` (the "Update 2026-09-14" block and
  "Everything remaining, ranked" under WHERE IRON CODEX STANDS) → `CLAUDE.md`.
- **All three repos were clean and pushed** at session end: the-iron-codex
  `09835d2` (plus the commit adding this file), career-forger `e3dab40`, personal
  site `1aeeac3`.

## The agreed plan

1. ✅ **Live defects** — 60 blank archive cards (`d63eba3`), tab titles that
   ignored navigation (`8221d71`), the Shroud of Turin rewrite plus a
   template-prose gate (`09835d2`). Deploy verified live.
2. **Stub backlog — top ~10 by inbound links, not all 228.** The owner wants lean
   scope for bulk work. Run `node scripts/audit-stubs.mjs` first. The top of the
   list on 2026-09-14: `battle-of-las-navas-de-tolosa` (29 links, 1,889 chars),
   `battle-of-bannockburn` (26), `battle-of-bouvines` (25), `battle-of-kosovo` (25),
   `battle-of-grunwald` (23), `wars-of-scottish-independence` (21),
   `battle-of-crecy` (21), plus the worst short ones: `rouen` (911 chars),
   `battle-of-svolder` (941), `stamford-bridge` (248).
   **Overlap to use:** many stubs are also in the template-prose backlog. Check
   each target against `scripts/lib/template-prose-baseline.json`, remove its
   templates in the same rewrite, then run `node scripts/baseline-template-prose.mjs`
   to record the shrink (the gate fails until you do).
3. **Infra pass.** Put `check:content-quality`, `check:images` and the tests into
   `vercel.json`'s `buildCommand` — today only `check-seo.mjs` runs at deploy.
   Tests were pulled after two failed Vercel deploys: find Vercel's Node version
   first. Also auth storage hardening (~30 min): refuse the JSON backend under
   `NODE_ENV=production` and log the selected backend.
4. **One conflict track**, and **write the shared conflict-completeness rule into
   `CLAUDE.md` first** (the Hundred Years' War entry in `QUEUE.md` explains why).
   Recommended: Hundred Years' War.

After that: Insights additions (accounts created, most-favourited), the chart
tooltip, the topic page layout. The monetisation spike is parked for later.

## Waiting on the owner

- **Image rule for figures with no surviving likeness** (`QUEUE.md` → Blocked on
  the user). Recommended: **option 2**, a documented associated monument or place,
  captioned as not a likeness. The same decision covers the **five rulers whose
  article leads with a coin that has no face**, which are live violations of the
  "main image must depict the person" rule: `al-adil-ii`, `al-mansur-ali`,
  `baraka-khan`, `yusuf-ibn-tashfin`, `muhammad-al-nasir` (caption literally
  "Image associated with Muhammad al-Nasir."). Raised again 2026-09-14, no answer.
- **Owner eyeball, client-side fixes a script cannot see:** on People, a pope's
  card now shows a description; moving between two pages changes the tab title.

## Rules introduced this session — binding

- **Page titles** live only in `client/src/lib/pageTitles.js`, used by both
  `scripts/prerender.mjs` and the app via `useDocumentTitle`.
  `tests/page-titles.test.mjs` fails if `prerender.mjs` builds a title by hand.
- **Card, search, topic and meta text** comes from `leadText()` in
  `client/src/lib/pageMeta.js`. People articles use `overview`, not `summary`.
- **Template prose.** `check:content-quality` masks each article's subject names
  and hard-fails on a new template or a known one spreading. The 86-article backlog
  is shrink-only; `node scripts/baseline-template-prose.mjs` refuses additions, and
  `--init` is not a way to silence a new template.
- Content-gate failure lines now print the rule name in `[brackets]`.

## Gotchas learned — re-verify before relying on them

- **The auto-linker is case-insensitive and whole-word.** Ordinary words that are
  also article names get linked: "exhibition tours" → Tours, a surname "de
  Poitiers" → Poitiers. Dry-run new prose against `client/src/lib/entityLinks.js`.
- `tests/page-titles.test.mjs` reads `prerender.mjs` as text, so it cannot catch a
  syntax error. `npm run build` (the prerender step) can — always run it.
- `node scripts/check-images.mjs --remote` gets rate-limited by Commons (645 of 870
  on 2026-09-14) and still prints "passed". Verify changed images directly.
- `node scripts/update-content-dates.mjs` dates ANY changed hash to today,
  including old edits nobody recorded. Correct those from git history — the
  sitemap date belongs to the edit, not the deploy.
- The content checker also reads `server/index.js`, `client/src/lib/entityLinks.js`
  and the template baseline. Copy all of them when testing in a scratch copy.
- **Queue claims go stale.** "Four popes with no summary" was a misread, and the
  `ADMIN_EMAIL` action was already done. Check a claim against the code before
  repeating it.
- The Read tool sometimes rejects an image ("media removed"). The fallback that
  worked: an ffmpeg brightness map. `sips` crops from the centre whatever
  `--cropOffset` says; use `ffmpeg -vf crop=W:H:X:Y`.
- **No local dev servers** (owner preference): static gates, push, owner tests live.

## Other projects touched this session

- **CareerForger** — pre-launch audit P0–P3 shipped 2026-09-11 (`AUDIT.md`),
  P0–P2 verified live by the owner; performance pass (request-scoped `cache()` on
  auth, Stripe reconcile moved to `after()`, skeleton `loading.tsx` on every
  route). Open items are in its `QUEUE.md` → "Next up", including an untested
  `past_due` Stripe card test and the auth-middleware decision.
- **Personal website** — CareerForger portfolio thumbnail and copy updated
  (`1aeeac3`). Nothing pending.
- **Saved to memory:** page-shaped skeletons for every loading state, on every
  project (owner's standing preference).
