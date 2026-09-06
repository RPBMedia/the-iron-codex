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
- [x] **M2 — Principal-image audit** (2026-09-06, re-run against the authenticity
      and condition standard added the same day). All 42 images downloaded,
      measured and **visually inspected**. Under the completeness rule alone 9
      failed; once condition, format and reconstruction quality count, **~20 fail
      and ~9 more need review**. See the breakdown below.
- [ ] **M3 — Image replacements** ← NEXT. Now ~20 replacements, not 9. Demote
      strong museum/manuscript images to secondary rather than deleting them.
- [ ] M4 — Shared rendering/responsive fix (`object-fit: contain` on W&A mains)
- [ ] M5 — Editorial audit: **38 of 42 articles are built from just two rigid
      section templates**; only Longsword has the rich fields
- [ ] M6 — Classification, index, relationship repairs
- [ ] M7 — Validation + manual visual QA
- [ ] M8 — Coverage-gap analysis (**analysis only**)
- [ ] M9 — **APPROVAL GATE — stop and wait**
- [ ] M10 — Approved additions only

**M2 verdicts by status**

- **SOURCE FAIL — object incomplete (7):** `dane-axe`, `bill-billhook`, `halberd`,
  `lance` (head not in frame at all), `poleaxe`, `spear`, `plate-armor`
  (half-armour, no legs).
- **FORMAT FAIL — not a photograph of the object (2):** `buckler` (MS I.33
  manuscript scene), `surcoat` (stone tomb effigy).
- **SUBJECT MISMATCH (2):** `javelin-throwing-spear` (reenactment crowd photo),
  `war-bow` (display case of many bows behind glass).
- **CONDITION FAIL — generic type, too degraded to show original form (8):**
  `great-helm`, `nasal-helmet`, `heater-shield`, `shield`, `coat-of-plates`
  (interior view of a corroded find), `gambeson`, `pavise`, `rondel-dagger`.
- **RECONSTRUCTION QUALITY / STAGING FAIL (1):** `kite-shield` (crude painted
  reenactment shields on grass, with a dog and bystanders in frame).
- **UNIQUE-ARTIFACT EXCEPTION (3):** `joyeuse` retained (the actual Louvre object;
  caption must be expanded to cover its composite dating). `sutton-hoo-helmet`
  **must change**: it currently uses the British Museum *replica*, and the new rule
  says a named artifact may not be represented by a modern replica — use the
  reassembled original, demote the replica to secondary, and fix the attribution
  that credits a 20th-century replica to an "Anglo-Saxon (East Anglian) smith".
  `ulfberht-swords` needs a complete representative blade; the current hilt
  close-up becomes secondary evidence for the inscription.
- **DOCUMENTATION REVIEW / borderline (9):** `bascinet` (aged, photographed on a
  windowsill beside a radiator), `falchion` (aged, B&W), `brigandine` (faded),
  `hauberk` (damaged hem), `battle-axe`, `crossbow` (display case, angled, glass),
  `gothic-plate-armor` (verify it is genuinely Gothic and not a composite),
  `seax` (pairs a pristine reproduction with a corroded original — defensible),
  `mail-armor` (missing `date`).
- **Clean PASS (10):** `arming-sword`, `longsword`, `viking-sword`, `mace`,
  `war-hammer`, `longbow`*, `hounskull-bascinet`, `kettle-hat`, `sallet`,
  `mail-coif`. (* `longbow` is image-compliant but has a caption defect, below.)

Counts reconcile: 7 + 2 + 2 + 8 + 1 + 3 + 9 review + 10 pass = 42.

**Caption defects to fix with the images.** Six captions assert something the
image does not support:
`dane-axe` "shown in full", `lance` "with its full wooden shaft and steel head",
`war-bow` "shown complete", `plate-armor` "shown head to foot",
`javelin-throwing-spear` "shown in full", and `longbow` — plainly a modern
reproduction but captioned "A full English longbow" with no mention that it is
modern, which the first-sentence rule now forbids.

**Why the existing guard missed all this.** `check-images.mjs` already had a
Weapons & Armor full-object guard — but it only regex-matches *filenames and
captions* for words like "manuscript", "detail", "effigy". It cannot see a
cropped haft, a corroded surface, a display case or a half-armour, so 20 failures
passed it cleanly. It did catch `surcoat` and `buckler`, and both were then
**allowlisted** in `weaponsArmorFullObjectFallbackAllowlist` with the reason that
no better image existed on Commons. The 2026-09-06 standard **overrides both
exceptions**: a verified reconstruction now outranks artwork, which is exactly the
option those allowlist reasons never considered.

**M3 must delete `surcoat` and `buckler` from
`weaponsArmorFullObjectFallbackAllowlist`** — but only in the same commit that
replaces their images, since removing them first would hard-fail `check:images`
and block the commit.

**Known sourcing risk for M3.** The new standard prefers museum-grade
reconstructions and reputable reproductions, but freely-licensed photographs of
those are scarce: most pristine reproduction photography is commercial retailer
imagery, which is explicitly disallowed. Expect several subjects — buckler,
gambeson, kite shield, coat of plates especially — where no compliant image
exists on Commons. Per the brief these must be **recorded as unresolved, never
quietly accepted**.

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
