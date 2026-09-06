# The Iron Codex — Work Queue

**Live state of what's next.** Forward-looking only — history lives in `git log`,
standards in `CLAUDE.md`, content rules in `CONTENT_GUIDELINES.md`.

Update this file **in the same commit as the work it describes** and push
immediately, so a session on any machine can resume from `main` alone.

**Verification:** no local dev servers (user preference, all projects,
2026-09-04). This overrides the "Dev Server Restart Procedure" section of
`CLAUDE.md` — run `npm run check:content-quality` and `npm run check:images`
(plus `node scripts/check-images.mjs --remote` when images change), then push and
let the user test live.

_Last updated: 2026-09-06_

---

## Two large tracks in flight

### TRACK A — Byzantine military-history expansion

Audit delivered 2026-09-04. Scope confirmed at **maximum**: all four contrast
defeats included, all 15 opponent realms as full anchor articles. ~100 articles
across 14 milestones.

Key audit findings: only **2 of ~25** requested events existed
(`battle-of-manzikert`, `fall-of-constantinople`); everything from 533 to 1014 is
absent; ~30 people missing including **Michael VIII Palaiologos**; ~15 realms and
~20 locations missing. There is **no `Campaign` event type** — parent conflicts
use `eventType: "War"` (precedent: `third-crusade`, `hundred-years-war`).

- [x] **M1 — Foundations** (2026-09-04, `adc0694`). `byzantine-empire` retyped
      Kingdom→Empire; `kingdom-of-hungary` created as a full anchor polity (it was
      an orphaned faction string on `battle-of-mohi`).
- [ ] **M2 — Vandalic War** + Ad Decimum, Tricamarum; Vandal Kingdom; Justinian I,
      Belisarius, Gelimer. ← NEXT
- [ ] M3 — Gothic War + Siege of Rome 537–538, Taginae, Mons Lactarius;
      Ostrogothic Kingdom; Narses, Totila, Vitiges, Teias
- [ ] M4 — Nineveh 627; Sasanian Empire; Heraclius, Khosrow II, Shahrbaraz
- [ ] M5 — Siege of Constantinople 626; Avar Khaganate
- [ ] M6 — Siege of Constantinople 717–718; Leo III, Maslama
- [ ] M7 — Akroinon 740, Lalakaon 863; Abbasids, Melitene; Constantine V, Michael III, Petronas
- [ ] M8 — Crete 960–961; Emirate of Crete; Nikephoros II, Romanos II
- [ ] M9 — Eastern conquests (Aleppo, Cyprus, Cilicia, Antioch); Tzimiskes, Bourtzes, Sayf al-Dawla
- [ ] M10 — Kleidion 1014; First Bulgarian Empire; Basil II, Samuel
- [ ] M11 — Levounion 1091, Beroia 1122, Sirmium 1167; Pechenegs, Cumans
- [ ] M12 — Pelagonia 1259 + recovery of Constantinople 1261; Empire of Nicaea,
      Latin Empire, Epirus, Achaea, Sicily; Michael VIII
- [ ] M13 — Contrast defeats: Yarmouk 636, Myriokephalon 1176, Sack of
      Constantinople 1204, Bapheus 1302
- [ ] M14 — PRD/index integration, cross-links, final validation

**Historical corrections already agreed** (apply when writing): Nasar belongs to
the 880s, not Lalakaon; "Al-Malik ibn Shuʿayb" is a mis-parse of Malik ibn
Shu'ayb; Tervel's presence in 718 is insecure (possibly Kormesiy); Cyprus 965 was
taken by Niketas Chalkoutzes, not Nikephoros personally; Antioch 969 by Michael
Bourtzes and Peter, ahead of Nikephoros's intent; the Kleidion blinding is
Skylitzes writing c. 1070, not contemporary, and Bulgaria fell only in 1018;
Manuel I was **not present** at Sirmium — Andronikos Kontostephanos commanded.

### TRACK B — Weapons & Armor audit and improvement

Brief received 2026-09-06. **Milestone 10 is gated behind explicit user approval
of the coverage-gap list — do not create proposed new subjects without it.**

- [x] **M1 — Inventory** (2026-09-06). 42 articles: Weapon 19, Armor 8, Helmet 7,
      Shield 5, Famous weapon 2, Famous armor 1.
- [x] **M2 — Principal-image audit** (2026-09-06). All 42 images downloaded,
      measured and **visually inspected**. 9 fail. Full matrix in the session
      report; failures listed below.
- [ ] **M3 — Image replacements** ← NEXT. Replace 9 failing principals; demote
      good detail shots to secondary rather than deleting them.
- [ ] M4 — Shared rendering/responsive fix (`object-fit: contain` on W&A mains)
- [ ] M5 — Editorial audit: **38 of 42 articles are built from just two rigid
      section templates**; only Longsword has the rich fields
- [ ] M6 — Classification, index, relationship repairs
- [ ] M7 — Validation + manual visual QA
- [ ] M8 — Coverage-gap analysis (**analysis only**)
- [ ] M9 — **APPROVAL GATE — stop and wait**
- [ ] M10 — Approved additions only

**M2 failures to fix in M3:**
`dane-axe`, `bill-billhook`, `halberd`, `lance`, `poleaxe`, `spear` (hafted
weapons shown as head-detail photographs); `war-bow`, `buckler`,
`javelin-throwing-spear` (wrong subject entirely); `ulfberht-swords` (hilt
detail); `plate-armor` (half-armour, no legs).

**Five captions actively assert completeness the image does not have** —
`dane-axe`, `lance`, `war-bow`, `plate-armor`, `javelin-throwing-spear` all say
"in full"/"complete"/"head to foot". Fix captions with the images.

**Attribution defects:** `sutton-hoo-helmet` credits a 20th-century British Museum
replica to an "Anglo-Saxon (East Anglian) smith", early 7th century;
`mail-armor` is missing its `date` field.

---

## Blocked on the user

- **Track B M9 approval gate** — not yet reached.

## Per-machine local setup

Nothing secret is required for this repo; content lives in
`server/data/history.json`. Node + npm only.

## Parked / backlog

- `longbow` vs `war-bow` overlap: `war-bow`'s own summary calls itself "an
  umbrella term ... including but not limited to the English longbow". Resolve in
  Track B M6 (merge, or restructure as parent/child).
- Orphaned faction strings with no article: `Kingdom of León`, `Almoravids`,
  `Grand Principality of Vladimir`, `Teutonic Order`, `County of Castile`.
- PRD/CLAUDE.md drift: the Dev Server Restart Procedure section is superseded by
  the no-local-dev rule at the top of this file.
