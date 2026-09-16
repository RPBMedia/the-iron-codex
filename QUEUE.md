# The Iron Codex — Work Queue

> **This is the only work list.** Every plan, spec and programme lives here as of
> 2026-09-16, by owner instruction. The separate planning files were folded in as
> appendices and deleted, so there is one place to look.
>
> **The four files that are never folded in and never deleted:** `CLAUDE.md`
> (standards), `CODEX.md`, `CONTENT_GUIDELINES.md` (both standards) and
> `COMPLETED_ROADMAP.md` (the record of finished work). `README.md` stays as
> repo documentation — install steps and auth configuration, not a plan.
>
> **When an item is finished, move a condensed record of what was built into
> `COMPLETED_ROADMAP.md` with its date and commits, and delete it from here.**
> That is what keeps this file from growing forever.

## Where the big programmes stand

| Track | Item | Full spec | Status |
|---|---|---|---|
| Rulers programme | 0m | Appendix A | Not started — M0 to M13, the largest content programme |
| Article UI / UX | 0o | Appendix B | In progress — U1–U3 and the hero band done; U4–U7 open |
| Civilizations | 0e | Appendix C | Not started — a new archive category |
| Growth / paid acquisition | — | Appendix D | Proposal only. Nothing activated |
| SEO verification | — | Appendix E | Reference how-to, not work |


**Live state of what's next.** Forward-looking only — history lives in `git log`,
standards in `CLAUDE.md`, content rules in `CONTENT_GUIDELINES.md`.

Update this file **in the same commit as the work it describes** and push
immediately, so a session on any machine can resume from `main` alone.

**Verification:** no local dev servers (user preference, all projects,
2026-09-04). This overrides the "Dev Server Restart Procedure" section of
`CLAUDE.md` — run `npm run check:content-quality` and `npm run check:images`
(plus `node scripts/check-images.mjs --remote` when images change), then push and
let the user test live.

_Last updated: 2026-09-16, early morning, at the end of an owner-away hour. Shipped and verified live:
- Kingdom batches 4a (`943b214`), 4b (`a634e33`) and 4c (`d5d79ea`), bringing 0d to 44 of 54.
- The kingdom arms gate (`9179aef`).
- Insights #2, favourites by period (`937cf4b`).
- New main images for Stiklestad, Gestilren, the Zengids and Teias (`c69434e`).
- The `pope-leo-iii` article (`1b37a7d`).

Owner rulings: coins, seals and objects on white keep their white ground, and historical errors are always corrected. Open questions are listed in the handoff: the Rashidun banner box, Leo III's main image, the Sasanian map's eastern border, and Gestilren's memorial stone. Next: the last 10 polities in 0d, then 0o U0.

Earlier that night the Order of Montjoy's history was corrected against the Catalan, Spanish and English Wikipedia articles (`f019003`; owner rule: historical errors are always corrected). 0p ship 1 is next: 28 margin crops, self-hosted. Earlier that night: the owner confirmed the no-margins ship (`e3372f7`: CSS padding removed site-wide, Malbork drone and Tomar convent photographs, St Thomas of Acre plate cropped). Order of Montjoy now leads with Monfragüe castle instead of its white shield. Queued 0p, the scan for borders baked into image files (owner-approved; the script is `scripts/audit-image-borders.mjs`). Earlier: queued 0o, the global article UI/UX refinement track (spec in the repo root; U0 audit first). Earlier that evening:

**Owner answers on the away-mode questions:**
- 1453 wins, and CLAUDE.md now says so.
- Kingdoms batch 3 and city batch 3 are approved.
- Harald Greycloak gets a monument image.
- Favourites are charted by period.
- The three finished markdown files are deleted.

The owner also reported four fixes, listed under 0n. Known-for linking ships first.

Before that, 0m was queued: the complete medieval rulers program, with its spec in the repo root and M0 first. Earlier, with the owner away, these shipped and were verified live: the Insights per-bar tooltip and accounts-created series; monuments leading for yusuf-ibn-tashfin, muhammad-al-nasir and baraka-khan, with Baraka's death place corrected to Kerak; 0d kingdoms batches 1 and 2, maps and arms for 16 kingdoms, plus the Navarre chains legend fix. Also new: the Siege of Sidon (1110), 11,000 characters, and a Sidon city page, 7,400 characters with 14 timeline entries. Sigurd's prose and timeline now link the siege, and 'siege of sidon' is off BATTLE_BACKLOG. **Next: the owner reviews the away-mode test suite and answers the compiled questions** (al-Adil II and al-Mansur Ali, the Denmark diocesan map, the md-file deletions, the next kingdom batches) before more bulk work. Previously 2026-09-15 (empty cards removed site-wide and the queens' "Undefined" related group fixed; spouse batch B of 21 shipped, so every house-tree spouse now links; previously: step 2's first batch shipped: ten stubs rewritten, event timelines now render, auto-linker hazards fixed at the generator. **Next: step 3, the infra pass.** The owner added item 0 (no article under 2,000 chars; locations to 5,000 with two images; a city standard) and item 0b (a Danelaw article)) — previously 2026-09-15 (session handoff) and 2026-09-14 (step 1 shipped: blank cards, tab titles, Shroud of Turin, template-prose gate)._

---

## TRACK D — Weapons & Armor: unique surviving artifacts — CLOSED

**Closed by the owner, 2026-09-07, as substantially already delivered.**

The audit this track opens with was finally run, and it found the work done:
**12 of the 13 priority artifacts already exist**, not the three the brief
assumed. The section now holds **15 named artifacts** against 59 generic types.

| Priority artifact | Status |
| --- | --- |
| William Wallace's Sword (the brief's "headline omission") | `wallace-sword` |
| Gjermundbu Helmet | `gjermundbu-helmet` |
| Coppergate Helmet | `coppergate-helmet` |
| Helmet of St. Wenceslas | `st-wenceslas-helmet` |
| Imperial Sword (Reichsschwert) | `reichsschwert` |
| **Sword of St. Maurice (Turin)** | **NOT BUILT — the only gap** |
| Szczerbiec | `szczerbiec` |
| Great Helm of Albert von Prankh | `prankh-great-helm` |
| Pembridge Helm | `pembridge-helm` |
| Churburg Armour No. 13 | `churburg-armour` |
| Avant Armour | `avant-armour` |
| Black Prince funeral achievements | `black-prince-achievements` |
| Henry V funeral achievements | `henry-v-achievements` |

The track's other deliverables are also done: every named artifact cross-links to
its generic type and back, **27 of 59** generic articles carry a "Notable
surviving examples" section (27 rather than 59 is correct — most generic types
have no famous named survivor), and CLAUDE.md formalises the two layers with
`NAMED_ARTIFACT_TYPES` keying both validators.

**The one carried forward** is in "Open — small, ready to run" below: the Sword of
St. Maurice, which is worth writing mainly because the brief flagged it as the
object people confuse with the Reichsschwert, and the Reichsschwert exists.

**The lesson, and it is why this track sat "READY TO START" for a day:** the brief
was written from an assumption about coverage and never re-checked before being
queued. A track that opens with "do the internal audit first" should have that
audit run *before* it is scheduled, not after.

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
- [x] **M2 — Vandalic War** (2026-09-07). Vandalic War, Ad Decimum, Tricamarum,
      Vandal Kingdom, Justinian I, Belisarius, Gelimer — 7 articles.
      Note for M3: Tricamarum's battleContinuity points at Manzikert only because
      the archive holds no Byzantine battle between 534 and 1071. **Re-point it at
      the first Gothic War battle when M3 lands.**
- [x] **M3 — Gothic War** (2026-09-07). Gothic War, Siege of Rome 537–538,
      Taginae, Mons Lactarius, Ostrogothic Kingdom, Narses, Totila, Teias —
      8 articles. Tricamarum's continuity re-pointed off Manzikert onto the Siege
      of Rome, so the chain now runs Ad Decimum → Tricamarum → Rome → Taginae →
      Mons Lactarius.
      **VITIGES DEFERRED** — no image of him exists in any form (no coin, no later
      depiction, nothing on Commons), so he cannot have an article. The Siege of
      Rome names him as the Gothic commander without a link, per the archive's
      convention for a named commander awaiting an article. Revisit if an image
      surfaces.
- [x] **M4 — Nineveh 627** (2026-09-07). Battle of Nineveh, Sasanian Empire,
      Heraclius, Khosrow II — 4 articles.
      **SHAHRBARAZ DEFERRED** — no image exists in any form, not even a coin,
      despite his briefly taking the throne in 630. Named in prose without a link.
      Note: Nineveh's continuity points at Manzikert for want of anything nearer.
      **Re-point it at Yarmouk 636 when M13 lands** — that is the battle that
      actually undid what Nineveh won.
      Source shift recorded in the articles: from M4 onward there is no Procopius.
      Theophanes writes two centuries later, George of Pisidia is panegyric verse,
      and the Armenian and Syriac chronicles have their own agendas.
- [x] **M5 — Siege of Constantinople 626** (2026-09-07). The siege and the Avar
      Khaganate as a full anchor realm — 2 articles.
      `locationType: "Khaganate"` is new and was added to `POLITY_TYPES` in
      `check-content-quality.mjs` at the lighter tier (the Khazar and Turkic
      khaganates will reuse it); the article is written to the Empire bar anyway.
      **SERGIUS AND BONUS DEFERRED** — the patriarch and the patrician who
      actually ran the defence. No image of either exists in any form; Sergius's
      own Wikipedia article carries none and Commons has nothing. Named in prose
      without a link, same as Vitiges (M3) and Shahrbaraz (M4). The Avar khagan is
      not a deferral: no surviving source records his name.
      Source note, running opposite to M4's: the evidence here is unusually good
      — Chronicon Paschale within a couple of decades, Theodore Synkellos present,
      George of Pisidia — but all three are Constantinopolitan and credit the
      Virgin, so the chronology is secure and the interpretation is uniform.
      Continuity points forward to Nineveh 627. **When M6 lands, consider whether
      717–718 is the better next step from 626** — same walls, same method, and
      the two sieges are usually read together.
- [x] **M6 — Siege of Constantinople 717–718** (2026-09-07). The siege and Leo III
      — 2 articles.
      **MASLAMA IBN ABD AL-MALIK DEFERRED**, and this one needs an owner decision
      rather than filing: he commanded the entire expedition and no image of him
      exists in any form — no portrait, no coin (never caliph), and his own
      Wikipedia article leads with the Manasses miniature used here for the siege.
      See "Blocked on the user" below: this is the **fourth consecutive deferral**
      and all four are non-Latin, non-Byzantine.
      **626's continuity was deliberately NOT re-pointed here.** The selection
      rule puts "next major event later in the same war" first, and for 626 that
      is Nineveh. The two sieges are paired in related entries instead, both ways.
      Source note, the mirror of M5's: for 626 there was nothing from the other
      side; here al-Tabari and the Arabic compilers give a full account that
      disagrees with Theophanes on the negotiations, the sequence and the scale.
      Both agree on the cause — fire, hunger and winter, not assault.
      Tervel handled per the agreed correction: the Bulgar intervention of 718 is
      credited to Tervel *or* Kormesiy and the article says the sources do not
      settle it.
- [x] **M7 — Akroinon 740 and Lalakaon 863** (2026-09-07). Seven articles: both
      battles, the Abbasid Caliphate and the Emirate of Melitene as anchor realms,
      and Constantine V, Michael III and Petronas.
      The milestone's argument: these two battles bracket the turn. In 740 the
      empire survives a raid; in 863 it destroys the emirate doing the raiding,
      and afterwards Byzantium attacks and the caliphate defends. The Abbasid and
      Melitene articles carry the other half of the explanation — the anarchy at
      Samarra meant the frontier emirate fought 863 with nothing behind it.
      `locationType: "Emirate"` is new, added to `POLITY_TYPES` at the lighter
      tier; **the Emirate of Crete reuses it in M8.**
      Both agreed corrections applied: **Malik ibn Shu'ayb** (not "al-Malik ibn
      Shu'ayb", which is a mis-parse) at Akroinon, and **Nasar is absent from
      Lalakaon** — the article says explicitly that he belongs to the naval
      campaigns of the 880s, since the error is common enough to be worth naming.
      **Lalakaon's continuity points at Manzikert for want of anything nearer, as
      Tricamarum and Nineveh did. Re-point it at Crete 960–961 when M8 lands.**
      Constantine V's succession links back to Leo III, closing the debt from M6.
      Leo IV, Theophilos and Basil I are named as succession endpoints without
      articles — all three are in-scope and are candidates for a later milestone.
      Epithets used for the first time in Track A, both hostile and both typed as
      such: Constantine V's **Kopronymos** and Michael III's **the Drunkard**.
      Michael III's article is built around the fact that the histories of his
      reign were written for the dynasty founded by his murderer.
- [x] **M8 — Crete 960–961** (2026-09-07). The siege of Chandax, the Emirate of
      Crete, Nikephoros II Phokas and Romanos II — 4 articles.
      Where the recovery stops being defensive: Byzantium had failed to retake
      Crete in 843, 866, 911 and 949, and the difference in 961 was an army
      supplied through a winter siege instead of withdrawn before one.
      **Lalakaon's continuity re-pointed off Manzikert onto Chandax**, as promised
      in M7 — 863 broke the raiding emirate on land, 961 the one at sea.
      `locationType: "Emirate"` reused from Melitene exactly as planned.
      **Chandax's own continuity points at Manzikert for want of anything nearer.
      Re-point it at Antioch when M9 lands.**
      Image near-miss worth keeping: the obvious Romanos II coin on Commons has a
      file name and a description that disagree about *which* Romanos it shows, so
      the article uses the Dumbarton Oaks solidus dated inside his sole reign
      instead. A biography must not lead with a contested identification.
      Alias gotcha: "Siege of Candia" was rejected as an alias — it trips the
      battle-link gate as an unresolvable phrase, and the famous Siege of Candia is
      the Ottoman–Venetian one of 1648–1669.
      John Tzimiskes is a succession endpoint on Nikephoros II and is **owed an
      article in M9**, where he is already scheduled.
- [x] **M8b — Dynastic completion** (2026-09-07). **Thirteen ruler articles**:
      Justin I, Justin II, Phocas, Constans II, Constantine IV, Justinian II,
      Theodosius III, Leo IV, Constantine VI, Irene of Athens, Theophilos,
      Basil I, Constantine VII.
      **What it closed.** `link-stale-succession-endpoints.mjs` then linked eight
      endpoints automatically — Justinian I's predecessor and successor,
      Heraclius's predecessor, Leo III's predecessor, Constantine V's successor,
      Michael III's predecessor and successor, and Romanos II's predecessor. The
      **Heraclian and Isaurian houses are now fully linked** (4/4 and 5/5); the
      Amorian gains Theophilos, the Macedonian gains Basil I and Constantine VII.
      **It also forced a sixth house.** Justin I and Justin II joined Justinian I
      as `dynasty: "Justinian dynasty"`, which tripped
      `validateDynastyHouseCoverage` — so `justinian-dynasty` was written too,
      518–602, ending with the murder of Maurice. That rule has now caught a real
      gap twice in one day, both times the moment it opened.
      **STILL DEFERRED:** Constantine III and Heraklonas (641), whose reigns lasted
      months and of whom no image exists in any form. Leo VI is a different case —
      he has images and deserves an article, but is not yet a succession endpoint,
      so he was not swept in.
      **THE CHAIN GREW, as CLAUDE.md says it will.** Unlinked named endpoints went
      from 81 to 86: these thirteen articles closed eight and opened new ones at
      Anastasius I, Tiberius II, Maurice, Philippikos Bardanes, Anastasius II,
      Nikephoros I, Michael II, Leo VI and Alexander. That is the iterative
      chaining rule behaving correctly, not a regression — **the next pass should
      take Maurice and Nikephoros I first**, since both are named in this
      milestone's articles as the hinge of a catastrophe.
      **SECOND PASS, same day** — the owner checked Irene of Athens and found her
      successor Nikephoros I unlinked. Correct behaviour (displayName plus a note),
      but it was the top backlog item, so the generation was closed: **eight more
      rulers** — Anastasius I, Tiberius II Constantine, Maurice, Anastasius II,
      Nikephoros I, Michael II, Leo VI and Alexander. These close on each other and
      the linker then shut **eight more** endpoints automatically.
      **The Byzantine tail is now short and named**: Zeno, Staurakios, Leo V,
      Constantine VIII, Roman and Gabriel Radomir (Bulgarian) remain in scope and
      unwritten; **Philippikos Bardanes, Constantine III and Heraklonas are
      deferred** — no image of any of them exists in any form.
      Leo VI does not reuse the Hagia Sophia mosaic of himself: that image is the
      Macedonian house's primary, so he takes a solidus.
- [x] **M9 — The eastern conquests, 962–969** (2026-09-07). Nine articles: the
      sack of Aleppo, the conquests of Cilicia and Cyprus, the fall of Antioch,
      the Hamdanid Emirate of Aleppo, the city of **Antioch**, and John Tzimiskes,
      Michael Bourtzes and Sayf al-Dawla.
      Both agreed corrections applied. **Antioch was taken by Michael Bourtzes and
      Peter the Stratopedarch against Nikephoros's express orders** — he had
      forbidden a storm, wanting the city intact — and Bourtzes was dismissed for
      winning, then joined the conspiracy that murdered him nine weeks later. M8
      told the end of that story before M9 told the beginning. And **Cyprus was
      taken by Niketas Chalkoutzes, not by Nikephoros personally**, which the
      article says outright because popular accounts get it wrong.
      Cilicia and Cyprus are `eventType: "War"` — campaigns, not engagements,
      which also avoids inventing strength figures for two-year operations.
      **Chandax's continuity re-pointed onto Aleppo** rather than Antioch as M8
      suggested: Aleppo is nearer and forward, which the selection rule prefers.
      The chain now runs Lalakaon → Chandax → Aleppo → Antioch → Manzikert.
      **`antioch` was not in the plan and the gate demanded it.** The phrase
      "Siege of Antioch" could not resolve, because unlike Constantinople the city
      had no article — the archive had been calling it the greatest prize of the
      reconquest since M7 with nothing to send a reader to. Now a full City
      article covering Seleucid foundation to Baibars's destruction in 1268.
      The M8b succession validator also fired correctly on Nikephoros II, whose
      successor entry named John Tzimiskes before this milestone created him.
      **IMAGE CAVEAT — the weakest in the batch, flagged not buried.** The only two
      images on Commons naming Michael Bourtzes are the Skylitzes miniature of
      Antioch (used for the siege) and a 19th-century costume plate from the NYPL
      Vinkhuijzen collection. His article uses the plate under the "later artwork,
      honestly captioned" rule, and the caption says plainly it is a costume study
      and not a likeness. **If the owner would rather defer him, the article can be
      pulled and the Antioch material already carries his story.**
      Also rejected on inspection: every Matson Collection photograph of the walls
      of Antioch on Commons is a **stereoscopic negative pair** — the same view
      twice with the negative border — which no amount of good provenance makes
      usable as a primary image.
- [x] **M10 — Kleidion 1014** (2026-09-07). The battle, the First Bulgarian Empire,
      Basil II, Samuel of Bulgaria and the **Macedonian dynasty** as a House.
      The house was mandatory, not optional: Romanos II (M8) and Basil II make two
      Macedonian rulers, which trips `validateDynastyHouseCoverage` — the rule
      added at the owner's instruction the same day, firing on the very next
      milestone. Basil I, Leo VI and Constantine VII are named in it pending their
      articles in the M8b backfill.
      **Both agreed corrections applied and they govern the battle article.** The
      blinding is **Skylitzes writing about 1070**, fifty-five years later and not
      in the near-contemporary sources; the article reports it as what a later
      chronicler wrote. And **Bulgaria did not fall in 1014** — it fought on under
      Gabriel Radomir and Ivan Vladislav until the annexation of 1018.
      "Boulgaroktonos" gets the same treatment: recorded as a later epithet,
      appearing about 150 years after Basil's death.
      **IMAGE CATCH.** Commons's "Samuil of bolgaria reconstruction.jpg", which is
      the English Wikipedia lead image for Samuel, shows a forensic bust whose
      museum card is legible in the photograph and reads **Яромир Пшемыслович** —
      Jaromír of the Přemyslids, a Bohemian duke. Not used. Samuel leads with his
      fortress at Ohrid instead.
- [x] **M11 — The steppe frontier** (2026-09-07). Levounion 1091, Beroia 1122,
      Sirmium 1167, and the Pechenegs and Cumans as anchor polities — 5 articles.
      **The agreed correction is in the summary, not a footnote: Manuel I was NOT
      present at Sirmium.** Andronikos Kontostephanos commanded and won it, and the
      article has a section called "Who won it" saying so, because the victory is
      routinely filed under the emperor's name.
      **KONTOSTEPHANOS DEFERRED** — no image of him exists in any form. That is the
      **sixth** such deferral in Track A and it is the sharpest one yet, since he is
      the man the correction exists to credit. See the open decision below.
      The milestone's shape: two steppe peoples reach the Danube, one is destroyed
      in a morning at Levounion and finished at Beroia, and the other — which
      helped destroy the first — outlives the empire that hired it and ends up
      supplying the Mamluk sultans of Egypt. The Cumans article therefore runs
      forward to Kalka and Baibars rather than stopping in 1200.
      **Sirmium's continuity points at Kosovo 1389** — `fall-of-constantinople` was
      rejected by the continuity validator, correctly, since it is `Fall of City`
      rather than Battle or Siege. **Re-point it at the sack of 1204 when M13
      lands**, which is the event that actually undid what Manuel built.
- [x] **M12 — Pelagonia 1259 and the recovery of Constantinople** (2026-09-07).
      Eight articles: the battle, the recovery, **Michael VIII Palaiologos** — named
      in the original Track A audit as the most conspicuous missing person — and the
      five states that carved up the Byzantine world after 1204: the Empire of
      Nicaea, the Latin Empire, the Despotate of Epirus, the Principality of Achaea
      and the Kingdom of Sicily.
      `locationType: "Despotate"` is new, added to `POLITY_TYPES` for Epirus; the
      Despotate of the Morea would reuse it.
      **The recovery of 1261 is typed `Fall of City`, not Battle or Siege**, because
      that is what it was — eight hundred men walked in through a postern while the
      Latin fleet was away, and there was no fighting. Typing it honestly also keeps
      it clear of the strength validator, which would otherwise demand army sizes
      for an operation that had none worth naming.
      The polity validator caught three thin articles on the first run (Nicaea and
      Sicily short a section, the Latin Empire short a timeline entry) and all three
      were filled rather than trimmed — the Empire/Kingdom tier is 6 sections and 8
      timeline entries and it was right to insist.
      **Pelagonia's continuity points at Kosovo 1389. Re-point it at Bapheus 1302
      when M13 lands** — the first Ottoman victory over a Byzantine army, and the
      real sequel to everything Michael VIII rebuilt.
- [x] **M13 — Contrast defeats** (2026-09-07). Nine articles: **Yarmouk 636**,
      **Myriokephalon 1176**, the **Fourth Crusade**, the **siege and sack of
      Constantinople 1204** and **Bapheus 1302**, plus the four actors the archive
      lacked — the **Rashidun Caliphate**, the **Sultanate of Rum**, **Khalid ibn
      al-Walid** and **Kilij Arslan II**.
      **The 1204 sack is typed `Siege`, not `Fall of City`**, and deliberately:
      it *was* decided by fighting men off a wall — two assaults on the sea walls,
      on 9 and 12 April. That is the honest type and it also makes the article a
      legal continuity target, which `fall-of-constantinople` is not. This is the
      problem that blocked the Sirmium re-point in M11, solved rather than worked
      around.
      **All three queued continuity re-points applied**: Nineveh → Yarmouk (off
      Manzikert), Sirmium → the 1204 sack (off Kosovo), Pelagonia → Bapheus (off
      Kosovo).
      **KHALID IBN AL-WALID BREAKS THE DEFERRAL PATTERN.** Six Track A commanders
      have been deferred for want of any image, and every one was non-Latin. Khalid
      clears the bar on a 1935 line drawing from an illustrated Arabic history —
      later artwork, which CLAUDE.md permits for people with no contemporary
      portrait. The lesson for the open decision below: the deferral list is a fact
      about what Commons holds and about how hard the search was, not about who
      mattered. Two of the six may be recoverable the same way.
      **Kilij Arslan II has a CONTEMPORARY depiction** — a mina'i tile from the
      Alâeddin Palace at Konya showing him enthroned, made in his own reign. Rare
      enough in this part of the archive to be worth recording. His coinage was
      considered and rejected: the surviving copper is too corroded to read.
      **Two fixes to `kilij-arslan-i` that M13 forced.** Its primary image was a
      locator map of the Sultanate of Rum — the "certain failure" from the
      person-image audit below — and that map is now the primary image of the
      `sultanate-of-rum` article created here, where it belongs. He takes an 1872
      Katzler engraving instead, which depicts him. His `quickFacts.dynasty` also
      read "Not dynastic", which is simply wrong; he was a Seljuk, son of Suleiman
      ibn Qutalmish, and the value silenced his Dynasty card because it sits in the
      validator's `NOT_A_DYNASTY` set.
      **Image work worth recording, since two of three were caught only by looking:**
      the Delacroix exists on Commons at 4608×3456 — a photograph of the painting
      *hanging in the Louvre*, frame, wall, neighbouring canvases and visitors
      included; the clean 2223×1820 reproduction is the one to use, and bigger was
      worse. The best Rashidun conquest map has an Arabic-only legend, so it is a
      section image with the phases explained and the English map leads. The only
      Commons files purporting to be portraits of Kilij Arslan I are three uploads
      from one account described as "potre" and "history", undated and
      unattributed — unusable whatever licence is claimed on them.
- [x] **M14 — integration and final validation** (2026-09-07). **Track A is
      complete.** No new articles: this milestone audited how the ~100 Track A
      articles sit in the archive as a whole, which nothing had ever done — each
      milestone had only ever validated its own output.
      New tool: `scripts/audit-track-a-integration.mjs`, which checks orphans,
      event sort dates, succession endpoints and unlinked commanders.
      **Four defects found and fixed:**
      1. **The events index was sorting wrongly.** `eventSortDates` in
         `server/index.js` is a hand-written day-precision map; an event missing
         from it falls back to `{ year }`, which the sort key turns into
         **1 January** — ahead of every dated event that year. The map had 43
         entries against 93 events. Myriokephalon (17 September 1176) was sorting
         before Legnano (29 May 1176), and the three Vandalic War events of 533
         were tied in array order. Eight events added; **now hard-failed** when
         two events share a year and either lacks a date.
      2. **18 succession notes said "No article yet in this archive" directly
         under a working link to that article** — several still advertising the
         milestone that had delivered them. The succession note renders
         *unconditionally*, unlike a commander note. This is the exact twin of the
         bug the succession-link check was built for, one field to the left, and
         it is now hard-failed too.
      3. **33 unlinked commanders carried no explanation** — the backlog the owner
         first caught on the 717–718 siege. All 33 now say why, in
         `annotate-unlinked-commanders.mjs`. Worded as "No article yet" rather
         than "no image survives", deliberately: most are well documented and
         simply unwritten, and claiming otherwise would assert a search this pass
         did not run.
      4. **16 orphan articles** — nothing in the archive linked to them. 21
         cross-links added on the hosts a reader would actually be browsing.
      **Two false alarms worth recording, because both were mine.** The audit first
      reported 33 orphaned *houses*; every one is linked from every member's
      Dynasty card, which the server resolves at request time in
      `withDynastyHouse` rather than storing a slug. And it first reported all 626
      succession endpoints as unlinked, because the field is `personSlug`, not
      `slug` — the true figure is 86, exactly as this queue already said. The
      audit script now knows about both.
      **Remaining, and not a defect:** 86 unlinked succession endpoints, which is
      the documented transitional `{displayName, note}` form in CLAUDE.md, and 45
      events with no sort date, none of which share a year with anything.

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
- [x] **M3 — Image replacements COMPLETE** (2026-09-06, batches 1–9).
      20 principal images replaced. 12 with real photographs (museum, Commons or
      maker), 8 with AI illustrations after every photographic source was
      exhausted. Every previous image was demoted to a secondary section image
      rather than deleted — the Met head shots, the Marburg shield, MS I.33, the
      Mary Rose bows and the Sutton Hoo original are all still in their articles,
      in the sections where they are the better evidence.

      **The 8 AI illustrations** (`spear`, `bill-billhook`, `poleaxe`, `halberd`,
      `lance`, `javelin-throwing-spear`, `war-bow`, `coat-of-plates`) are all
      flagged `aiGenerated`, disclose themselves in the caption's first sentence,
      and record why — verified programmatically, enforced by `check:images`.
      **They are placeholders**: per CLAUDE.md a real photograph always takes
      precedence, so re-check them whenever a new source opens up. The prompts were in
      `WEAPONS_ARMOR_AI_PROMPTS.md`, deleted 2026-09-15 once all eight had shipped.
      Recover them with `git show f8ee419:WEAPONS_ARMOR_AI_PROMPTS.md`.

      **Review caught one failure before it shipped:** war-bow v1 had the yew
      sapwood and heartwood inverted (pale sapwood on the belly instead of the
      back) and a carved grip swelling, which an English warbow does not have. v2
      corrected both; the prompt now states the layering directionally, since
      "back" and "belly" are counter-intuitive terms.

      **`surcoat` resolved 2026-09-06** — was a stone tomb effigy (a sculpture of
      a knight, not a photograph of a garment). Now a reproduction Templar surcoat
      from Battle-Merchant: sleeveless, split front and back for riding, belted,
      with the genuine red cross pattée. The effigy moves to historical
      development, where it is the stronger evidence — contemporary, and showing
      the garment worn over mail, which no reproduction can attest.

      **`weaponsArmorFullObjectFallbackAllowlist` is now EMPTY.** Every Weapons &
      Armor article has a compliant principal image; no article needs an
      exception. An empty allowlist is the goal state — add an id back only with a
      written, reviewed reason.
- [x] **M4 — Shared rendering** (2026-09-06). Two fixes, both shared rather than
      per-article.
      1. **Image lightbox** — clicking any article image opens it full-screen,
         alone, centred; close via the cross at its top-right, the backdrop or
         Escape. The full-object rule letterboxes images so long objects render
         small, and there was previously no way to look closer: the lance was a
         thin line in a narrow column. One `ZoomableImage` component wired into
         the main image, section figures and the typology diagram (which had used
         a `target="_blank"` anchor to a raw file).
      2. **Object cards contain instead of crop.** `.image-frame` crops to 16:10
         with `object-fit: cover` — correct for portraits and battlefields, wrong
         for objects. The M3 images include a 3:1 lance and 2:3 polearms, which
         cropped to 16:10 show a band of bare shaft **with no head at all**.
         `weaponArmor` and `artifact` cards now use `contain` on a neutral ground,
         matching the detail page, with the bottom vignette dropped since it reads
         as damage on a letterboxed object. Applied to archive/home cards and to
         favourites, which had the same 4:3 crop.

      Detail mains were already correct (`.detail-media-weaponArmor` has used
      `contain` since an earlier pass). Remaining `cover` uses are the 24px account
      avatar and the 64px battle-continuity thumb — both too small to mislead.

      **Not verified in a browser** (no local dev servers). Gates run: production
      build, `check:images`, `check:content-quality`. Needs visual QA on live.
- [x] **M5 — Editorial audit + rewrite: DONE.** Batches 3 to 5 shipped in `1574850`,
      `8de4561` and `278ad22`, and `7354271` turned on `validateWeaponsArmorDepth`.
      It had been parked by the owner on 2026-09-07; the notes below are history. Batches 1 and 2 shipped; batches 3–7 and the
      `validateWeaponsArmorDepth` rule are on hold, not cancelled. Everything
      below is preserved so it can be resumed from `main` alone. The audit file,
      `WEAPONS_ARMOR_EDITORIAL_AUDIT.md`, was deleted 2026-09-15, and its open items moved to the W&A backlog.
      **The archive fails its own documented standard in 40 of 42 articles.**
      CLAUDE.md requires 5+ sections of 3+ substantial paragraphs, seven mandated
      topics, and at least one named battle/person/museum object per article. The
      reality is a median of ~1,150 characters — about 190 words for a whole
      article — one paragraph per section, and an average of ONE date and ONE
      named entity per article. Ratings: 1 exemplary (`longsword`), 1 strong
      (`war-bow`, researched but structurally thin), 11 uneven, 29 weak.
      **The checker missed it because every rule is a presence test** (banned
      phrases, duplicate paragraphs, buzzword lists). Nothing tests for absence,
      so six one-sentence sections with no dates pass cleanly. A
      `validateWeaponsArmorDepth` rule must be added **after** the rewrite, not
      before, or it fails the build — same sequencing lesson as the image
      allowlist.
      Rewrite runs in 7 category batches: shields (5), helmets (7), body armour
      (8), swords/daggers (6), hafted/pole (9), missile (4), named artifacts (3).
      - [x] **Batch 1 — shields** (2026-09-06). `shield` 1,103→7,040 · `buckler`
            1,028→6,036 · `heater-shield` 1,010→5,937 · `pavise` 1,009→5,360 ·
            `kite-shield` 1,071→5,112. Each now has the 7 mandated topics, 21
            paragraphs, zero thin sections, and named anchors: Hastings, Crécy,
            Poitiers, Agincourt, the Visby grave pits, the Gokstad ship burial,
            MS I.33, the Seedorf shield, Konrad von Thüringen's shield, the Black
            Prince's achievements at Canterbury. All five now exceed the Longsword
            benchmark of 4,698 chars.
      - [x] **Batch 2 — helmets** (2026-09-07). `nasal-helmet` 1,016→5,963 ·
            `great-helm` 1,106→5,548 · `bascinet` 1,038→5,347 · `kettle-hat`
            1,075→5,171 · `mail-coif` 1,049→5,087 · `sallet` 1,146→4,990 ·
            `hounskull-bascinet` 1,043→4,828. All 7 sections, 21 paragraphs, no
            thin sections. Anchors: the Prankh and Kornburg helms, the Gjermundbu
            helmet, the St Wenceslas helmet, the Visby grave pits, Hastings,
            Bouvines, Crécy, Poitiers, Agincourt, Nicopolis, Grunwald, Castillon.
            Honest notes carried where they matter — "hounskull" is an
            anglicisation of Hundsgugel, the St Wenceslas attribution is
            devotional rather than documented, and most claimed "Viking helmets"
            are nothing of the kind.
      - [ ] Batch 3 — body armour (8) · Batch 4 — swords/daggers (6)
      - [ ] Batch 5 — hafted/pole (9) · Batch 6 — missile (4)
      - [ ] Batch 7 — named artifacts (3): needs the unique-object structure
            (provenance, measurements, conservation, scholarly disputes)
      - [ ] THEN `validateWeaponsArmorDepth` — after all batches, never before.
- [x] **M6** (2026-09-08). Analytics provider — chose FIRST-PARTY counters in the existing Upstash. GA4 rejected (cookies → consent banner costs more readers than the data is worth); Plausible/Fathom rejected (paid, brief forbids spend); Vercel Analytics rejected (paid). No vendor, no cookies, no banner, no new bill.
- [x] **M7** (2026-09-08). Privacy-safe event model — path, referrer HOST (never the full URL), country from the CDN header. No cookie, id, fingerprint, IP, user agent, session or user id. Nothing can be tied to a person, which is what makes it consent-exempt rather than merely compliant. 90-day TTL. Reports VIEWS, never "visitors", because with no identifier there is no honest way to count people.
- [x] **M8** (2026-09-08). Private Insights page at `/insights` with a REAL empty state — real zeros and an explanation, no demo chart, nothing back-filled. Prerendered noindex (the catch-all now 404s, so a route with no file would 404 on direct load).
- [x] **M9** (2026-09-08). Server-side admin authorization — ADMIN_EMAIL compared on the server, never sent to the browser or in the client bundle. Client learns only a boolean about ITSELF. Requires a verified Google provider, since email alone would let anyone who registered that address via password in. `/api/insights` answers 404, not 403, so the route is not disclosed.
- [x] **M10** (2026-09-08). Conditional header control between search and menu, driven by that server-computed boolean. Hiding it is usability; the route is guarded independently.

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
  **Moved here 2026-09-15 from the deleted audit and coverage-gap files:**
  - `ulfberht-swords` is typed `Famous weapon` but covers a group of about 170 blades. Decide whether a group label belongs under the named-artifact type.
  - Four optional artifact articles were never built: the Mammen axe, the Seax of Beagnoth, the Conyers Falchion and the Coventry Sallet.
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

**M3 sourcing findings (2026-09-06 run).** Workflow proven; three lessons:

1. **Museums photograph polearm HEADS, not whole polearms.** The Met shot each
   polearm from several angles — `Bill MET 14.25.140 001/004`, `Pollaxe MET
   14.25.302 002/003`, `Halberd MET 14.25.29 003` — and *every* frame is a head
   detail. The archive did not pick badly from a good set; the good set does not
   exist. Searching sibling frames by accession number is still the first move for
   any Met object, it just does not solve polearms.
2. **Aspect ratio is the best full-length filter** (a whole halberd is r<0.35 or
   r>2.6), but it surfaces drawings: `Hallebarde, DDER690` turned out to be an ink
   design sketch — FORMAT FAIL. Always fetch and look.
3. **The realistic route for polearms is tier 3–4 of the standard**: a clean
   reproduction or a living-history photograph showing the whole weapon, clearly
   labelled as modern. `kite-shield` was rejected for staging (a dog and bystanders
   in frame), *not* for being reenactment — good living-history photography is
   explicitly permitted and is plentiful for full-length polearms.

Useful queries: Commons `intitle:"<Type> MET"` for Met objects; category listing
beats full-text search; Met's `search?q=…&departmentId=4` returns 0 (API quirk) —
drop the department filter and filter `department === "Arms and Armor"`
client-side.

**Known sourcing risk for M3.** The new standard prefers museum-grade
reconstructions and reputable reproductions, but freely-licensed photographs of
those are scarce: most pristine reproduction photography is commercial retailer
imagery, which is explicitly disallowed. Expect several subjects — buckler,
gambeson, kite shield, coat of plates especially — where no compliant image
exists on Commons. Per the brief these must be **recorded as unresolved, never
quietly accepted**.

### TRACK C — SEO, analytics and private admin dashboard

Brief received 2026-09-06. **Started 2026-09-08** at the owner's instruction, once
Track A completed, Track D closed, and production sign-in was confirmed working by
real users on both the Google and password paths.

15 milestones: SEO audit → technical SEO (sitemap, robots, canonicals, metadata
templates, JSON-LD, breadcrumbs, social) → internal linking and curated landing
pages → performance/crawlability → Search Console + Bing prep → analytics
provider evaluation → privacy-safe event model → private "Insights & Analytics"
page → **server-side** admin authorization → conditional header control between
menu and search → paid-marketing proposal → organic promotion plan → tests →
validation/QA → **M15 approval gate**.

Hard constraints to carry into the work:

- **No spend, no campaign activation, no billing change** without explicit
  approval. M15 is a full stop.
- **Not AdSense.** AdSense is publisher monetisation — it sells ad space *on* the
  site, it does not buy traffic *for* it. Acquisition channels are Google Ads,
  Microsoft Advertising, Reddit, etc. No third-party ads on the Codex unless
  monetisation is separately requested.
- **Admin authorization must be server-side.** Sole admin is the verified account
  for rui.palma.baiao@gmail.com. A hidden header button is a usability choice, not
  a security boundary. Never ship that address in a public client bundle.
- **Analytics starts empty.** No implying historical traffic exists; the dashboard
  needs a real empty state, and no fake production numbers.
- Architecture to establish first: this is a **Vite SPA + Express API**, not
  Next.js — so "server-rendered metadata", sitemap generation and noindex all need
  solutions appropriate to that stack. Do not assume framework features that
  aren't there.

- [x] **M1 — SEO audit** (2026-09-08). Audited against **production**, not the
      repo, because the deployment rewrites are the thing under examination.

      **The site is currently close to invisible to search engines, and the cause
      is one line of configuration.** `vercel.json` rewrites `/(.*)` to
      `/index.html`, so every URL on the domain returns the same static shell:

      ```
      <title>The Iron Codex</title>     ← identical on all 809 pages
      <div id="root"></div>             ← no content
      ```

      No `<meta name="description">`, no canonical, no Open Graph, no Twitter
      card, no JSON-LD, and no client-side substitute either — the client has no
      `react-helmet`, no `document.title` assignment, and its only dependencies
      are `react`, `react-dom` and `react-router-dom`. Verified live on
      `/people/eric-bloodaxe` with a Googlebot user agent.

      **Seven findings, in severity order:**

      1. **All 809 indexable URLs share one title and have no description.**
         Google can render JS and will eventually see the content, but every
         social crawler — Twitter/X, Facebook, Slack, Discord, LinkedIn —
         executes no JavaScript at all. Every share of any article today
         previews as "The Iron Codex" with no summary and no image.
      2. **Everything returns HTTP 200, including URLs that do not exist.**
         `/this-page-does-not-exist` returns 200 with the shell. Soft 404s at
         unlimited scale; Google treats these as a quality signal against the
         whole site.
      3. **`/robots.txt` and `/sitemap.xml` return HTTP 200 with
         `content-type: text/html`** — the catch-all serving the SPA shell. A
         sitemap that returns HTML is a hard error in Search Console, and this
         must be fixed before the property is even submitted. Neither file
         exists; static files in `client/public/` are served ahead of the
         rewrite, so adding them is sufficient.
      4. **Legacy URLs are client-side redirects, so crawlers see duplicates.**
         `/characters/eric-bloodaxe`, `/artifacts/joyeuse` and
         `/locations/teutonic-order` all return 200 with identical HTML to their
         canonical counterparts. React Router redirects after the JS loads;
         a crawler never sees a 301.
      5. **No sitemap for 809 URLs.** Inventory measured: 800 detail pages
         (people 367, locations 171, events 93, weapons-armor 74, houses 70,
         orders 16, artifacts 9), 7 collection indexes, home and `/index`.
      6. **Private and utility routes are indexable**: `/search`, `/login`,
         `/signup`, `/auth/callback`, `/favorites`. Search-results pages in
         particular are what `noindex` exists for.
      7. **Performance is not a problem** and should not be optimised
         speculatively: 396 KB JS / 115 KB gzipped, 43 KB CSS, served from the
         Vercel edge with `x-vercel-cache: HIT`. Findings 1–6 are worth
         thousands of times more than any bundle work.

      **ARCHITECTURE DECISION — this is what M2 depends on.** Three ways to get
      per-page metadata out of a Vite SPA, and they are not close:

      - **(a) Client-side (`react-helmet`).** Rejected. Social crawlers run no
        JavaScript, so it fixes nothing for sharing, which is half the value.
      - **(b) Runtime injection in the Express function.** Route HTML requests
        through the serverless function and inject metadata per request. Works,
        but gives up static edge caching for every page view, and pays a
        function invocation for traffic that is currently free.
      - **(c) Build-time prerendering — RECOMMENDED.** A post-build script writes
        one static HTML file per URL: the existing shell plus a real `<title>`,
        description, canonical, OG/Twitter tags, JSON-LD, and the article's
        summary as crawlable text inside `#root`. React replaces `#root` on
        mount, so the SPA is unchanged for users.

        The decisive argument is that **it costs nothing in content freshness**:
        `history.json` is already bundled into the deployment via
        `includeFiles`, so a content change already requires a redeploy today.
        Prerendering keeps static edge caching, adds no runtime cost, needs no
        React SSR, and puts real text in the HTML for crawlers that do not run
        JS. 809 small files is a non-issue for the build.

- [x] **M2 — Technical SEO** (2026-09-08). Build-time prerendering, per the M1
      decision. `scripts/prerender.mjs` runs after `vite build` and writes **815
      static HTML files** — 800 article pages, 7 collection hubs, home, the
      archive index, 5 noindex utility pages and a real 404 — plus `sitemap.xml`
      (**809 URLs**) and `robots.txt`.
      Every article page now carries its own title, description, canonical,
      Open Graph, Twitter card, typed JSON-LD (Person / Event / Place /
      CreativeWork / Organization) and a BreadcrumbList — **and its real text
      inside `#root`**, so a crawler that runs no JavaScript still reads the
      article. React clears `#root` on mount, so nothing changes for a human.
      **`/index` had to move to `/archive`.** Clean-URL resolution appends
      `.html`, so `/index` resolved to the ROOT `index.html` and would have
      served the home page's metadata on the archive's own hub page. It is a
      permanent redirect, the header link is updated, and the app keeps an
      `/index` route so local development behaves like production.
      **The catch-all rewrite is gone**, which is what makes 404s real: every
      valid URL is now a file, so anything else falls through to `404.html` and
      Vercel returns an actual 404 instead of 200-with-a-shell.
      **Legacy URLs are now server-side 301s** in `vercel.json` — `/characters/:id`,
      `/artifacts/joyeuse`, `/artifacts/sutton-hoo-helmet`,
      `/locations/teutonic-order`. They were client-side React Router redirects,
      so crawlers saw two 200s with identical HTML.
      **Collection hubs link every article they contain**, so all 800 pages are
      reachable by crawling from nine hub pages and do not depend on the sitemap.
      New gate: `npm run check:seo` (`scripts/check-seo.mjs`), which validates
      every article page against the build output — title, canonical,
      description length, og:image, twitter:card, JSON-LD *parseability*, 200+
      characters of crawlable text, an `<h1>`, sitemap membership, hub linkage,
      noindex on utility pages, and the two `vercel.json` settings the whole
      scheme depends on. Negative-tested three ways before being trusted.
      **TWO PRODUCTION BUGS FOUND BY CHECKING THE LIVE SITE, not the config.**
      Removing the catch-all rewrite did not produce real 404s: **Vercel detects
      Vite and injects its own SPA fallback**, so unknown URLs still returned 200
      serving the home page. `"framework": null` did not disable it either —
      verified live, twice. The fix is a catch-all rewrite to `/api/index`:
      Vercel checks the filesystem *before* rewrites, so all 815 prerendered
      pages still come from the CDN and only genuinely unknown URLs reach the
      function, which answers them with a real 404.
      Second: **`/index` → `/archive` never fired**, because `cleanUrls`
      normalises `/index` to `/` before custom redirects run. The rule was
      removed rather than left looking correct; the header points at `/archive`
      and an old `/index` link lands on the home page.
      **Production verified**: 200 on pages and hubs, 404 on unknown URLs and
      unknown API paths, 308 on all legacy URLs, `robots.txt` as `text/plain`
      and `sitemap.xml` as `application/xml`.
      **Appendix E** written for the owner, who asked for it: three levels
      (local gate → live spot checks → Search Console), what "good" looks like,
      and honest timelines — nothing is wrong if traffic is zero in week one.

      **THREE PRODUCTION BUGS FOUND BY THE OWNER'S TESTING, none catchable by
      the build gate.** Recorded because the pattern matters: every one was
      invisible locally and only Google or a real client exposed it.
      1. **Article text was missing from Google's rendered view.** The raw HTML
         had 5,107 characters of it, but URL Inspection shows the RENDERED DOM,
         and React was clearing `#root`, drawing a spinner, and only then
         fetching `/api`. Fixed by inlining each article's data into its page —
         React's first render is now the finished article. Verified in headless
         Chrome with the API unreachable: rendered text went 126 → 8,559 chars.
         The enrichment the API applies moved to `server/article-enrichment.js`,
         imported by both sides so a prerendered and a live-fetched page cannot
         disagree.
      2. **Every hub page was a soft 404 to Google.** `robots.txt` carried
         `Disallow: /api/`, and Googlebot obeys robots.txt for the subresources a
         page fetches while RENDERING — so `/archive` collapsed from 785 links to
         1, and `/people` to zero characters. Google saw blank pages and
         correctly called them errors. Never block render-critical resources;
         `X-Robots-Tag: noindex` on the API keeps the JSON unindexed while still
         fetchable, which robots.txt cannot express. **A local browser check
         cannot catch this — Chrome ignores robots.txt**, so every headless
         render looked perfect.
      3. **Social previews showed the favicon, not the image.** WhatsApp refuses
         a preview image much over ~600 KB; Eric Bloodaxe's was a 2,379 KB PNG,
         and 22 of 29 local images were over the limit. `make-og-images.mjs`
         writes derived cards (2,379 → 253 KB). Commons images were never
         affected — they are fetched at `?width=1200`.
      All three are now gated in `check-seo.mjs`.

- [ ] M3 — Internal linking and curated landing pages
- [x] **M4** (2026-09-08). Performance and crawlability — measured, not assumed: TTFB 37-43ms, Brotli on, pages 3-58 KB. Performance is genuinely fine and was not speculatively optimised. One real fault fixed: content-hashed assets served `max-age=0` now `immutable, 1 year`. Preconnect added to Wikimedia (771 of 800 article images).
- [x] **M5** (2026-09-08). Search Console + Bing — console side owner-completed. Added IndexNow (`npm run ping`) so Bing/DuckDuckGo/AI-search learn about changed URLs in hours. Submits only genuinely changed URLs, refuses bulk without --force, and is deliberately not in the build.
- [ ] M6 — Analytics provider evaluation
- [ ] M7 — Privacy-safe event model
- [ ] M8 — Private "Insights & Analytics" page
- [ ] M9 — Server-side admin authorization
- [x] **M10** (2026-09-08). Conditional header control between search and menu, driven by the server-computed isAdmin boolean. Hiding it is a usability choice; /api/insights is guarded independently and answers 404 to everyone else, exactly as the brief requires.
- [x] **M11** (2026-09-08). Paid-marketing proposal — now **Appendix D**. NOTHING ACTIVATED: no account, no budget, no billing. Recommendation is explicitly DO NOT SPEND YET; revisit in December with real Search Console query data. AdSense addressed as the category error the brief flags — it is publisher monetisation, not acquisition.
- [x] **M12** (2026-09-08). Organic promotion plan — same document. Core insight: compete where the archive is genuinely better (Bapheus, Myriokephalon, Kilij Arslan II) rather than against Wikipedia on Hastings. Zero external links is the real constraint, and the plan says so.
- [x] **M13** (2026-09-08). Tests — 13 tests, zero dependencies (`node:test`). Cover the admin boundary (including that an unset ADMIN_EMAIL means nobody is admin, not everybody) and the analytics privacy guarantees (referrers reduced to host; paths carrying queries, fragments or markup rejected). `npm test`, and they now gate the build.
- [x] **M14** (2026-09-08). Validation — tests 13/13, content-quality, images, SEO gate, build, server syntax, and the integration audit all clean: 0 orphans, 0 mis-sorted events, 0 stale notes, 0 unexplained commanders.
- [x] **M15 — APPROVAL GATE REACHED, 2026-09-08. STOPPED, as the brief requires.**
      **Track C M1-M14 are complete.** Nothing beyond this point has been done and
      nothing will be without an explicit decision.
      **Nothing paid was activated**: no advertising account created, no budget
      set, no billing touched, no campaign started. **Appendix D** is a proposal,
      and its own recommendation is to spend nothing yet and revisit in December
      with real Search Console query data.
      **No third-party tracking was added.** Analytics is first-party, in the
      Upstash the archive already ran — no vendor, no cookies, no consent banner,
      no new bill.
      **OWNER ACTION REQUIRED — one environment variable.** `ADMIN_EMAIL` must be
      set to `rui.palma.baiao@gmail.com` in the Vercel **Production** environment
      before the Insights link appears. Until then `isAdmin` is false for
      everyone, which is the correct and safe default. Set it in Vercel →
      Project → Settings → Environment Variables, then redeploy (env changes do
      not apply to an existing deployment).
      **Awaiting the owner on:** whether to run any paid test at all, and when.

_Note: a few lines of the pasted brief arrived garbled ("Meta descriptionlade",
"Server-rendered content availabilityFox", "Internal links/antlr", and a stray
sentence inside the Canonical URL bullet). Intent is clear from context; confirm
with the owner if any of those bullets mattered specifically._

---

## WHERE IRON CODEX STANDS (handover, 2026-09-08)

**Update 2026-09-14 — step 1 of the owner's plan shipped.** Three live defects
fixed: 60 archive cards with no description, tab titles that ignored client-side
navigation, and the Shroud of Turin's generator template. Two rules came out of
it and bind all future work:

- **Page titles live only in `client/src/lib/pageTitles.js`**, imported by both
  `scripts/prerender.mjs` and the app (`useDocumentTitle`). Never hand-write a
  title in either place — `tests/page-titles.test.mjs` fails if `prerender.mjs`
  builds one. Canonical and `og:title` needed no client-side change: crawlers and
  link-preview scrapers meet every URL through its own prerendered file, never
  through a client-side navigation.
- **Card, search, topic and meta text comes from `leadText()`** in
  `client/src/lib/pageMeta.js` (summary → first overview paragraph → details).
  People are written with `overview`, not `summary`, which is what blanked 58 of
  them. `tests/page-meta.test.mjs` fails the build if any article would render a
  blank card.

**THE OWNER'S PLAN (agreed 2026-09-14) — work it in this order:**

1. ✅ Live defects — shipped 2026-09-14, deploy verified.
2. ✅ **Stub backlog, first batch — shipped 2026-09-15.** The top ten by inbound
   links rewritten to the current standard: Las Navas de Tolosa, Bannockburn,
   Bouvines, Kosovo, Grunwald, Wars of Scottish Independence, Crécy and Svolder
   (events), Rouen and Stamford Bridge (locations). Six or seven sections each, a
   dated timeline, named primary sources in place of homepage links; Stamford
   Bridge's generator template removed (baseline 86 → 85 articles). **The rest of
   the backlog is item 0 below** (owner decision: no article under 2,000 chars).
   Found and fixed on the way:
   - **Event pages never rendered `timeline`.** `EventContent` had no
     `<Timeline>`, so the 24 event timelines already in the archive, the
     Byzantine sieges included, were invisible. One line; now rendered.
   - **Continuity pointed backward where a later battle exists:** Kosovo →
     Nicopolis (was Manzikert), Grunwald → Varna (was Agincourt), Las Navas →
     Aljubarrota (was Tours, 732).
   - **Wrong auto-links, archive-wide.** `gen-entity-links.mjs` split curated
     aliases on commas, so "Ferdinand, Count of Flanders" minted a bare
     "Ferdinand" on every regeneration, and likewise "Holy Roman Emperor" → Otto
     IV, "Queen of Jerusalem" → Sibylla, "Count of Flanders". Bare regnal aliases
     collided: "Henry I" → Castile, "John I" → Tzimiskes, "Louis I" → Louis the
     Pious; and "James" → Anund Jacob. The generator now parses aliases as JSON,
     drops comma fragments, and refuses a bare regnal alias when another ruler of
     that name has an article. "Alexander" (a label) and "Richard I" (also the
     Norman duke) resolve through `ambiguousEntityAliases` context hints instead.
   - The Black Prince is now a linked Crécy commander, with the reciprocal link.
   **Gaps written around, not filled — create-or-document decisions:**
   - Commanders named in prose with no article: Peter II of Aragon and Sancho VII
     of Navarre (Las Navas; the known Aragonese/Navarrese ruler gap), Thomas
     Randolph, James Douglas, Edward Bruce, Aymer de Valence, Gilbert de Clare and
     Humphrey de Bohun (Bannockburn), Renaud de Dammartin, William Longespée and
     Guérin (Bouvines), Vuk Branković and Vlatko Vuković (Kosovo), Zyndram of
     Maszkowice and Heinrich von Plauen (Grunwald), John of Bohemia (Crécy).
   - Battles with no article, written as place names rather than "Battle of X" so
     the gate stays honest: Falkirk 1298, Dupplin Moor 1332, Halidon Hill 1333,
     Neville's Cross 1346 (a Scottish-independence track), Sluys 1340 (Hundred
     Years' War track), Muret 1213, Maritsa 1371, Nesjar 1016. Las Navas has no
     later Reconquista battle to continue to until Río Salado exists.

   **Gotchas — folded from `SESSION_HANDOFF.md` (deleted 2026-09-15); re-verify
   before relying on them:**
   - The auto-linker is case-insensitive and whole-word, so ordinary words that
     are article names get linked: "exhibition tours" → Tours, "Earl of Oxford" →
     Oxford, "William Longsword" → the longsword. Dry-run new prose against
     `client/src/lib/entityLinks.js` before shipping.
   - `tests/page-titles.test.mjs` reads `prerender.mjs` as text and cannot catch a
     syntax error; `npm run build` can. Always run it.
   - `node scripts/check-images.mjs --remote` is rate-limited by Commons and still
     prints "passed". Verify changed images directly.
   - `node scripts/update-content-dates.mjs` dates ANY changed hash to today,
     including old unrecorded edits. Correct those from git history.
   - The content checker also reads `server/index.js`, `entityLinks.js` and the
     template baseline; copy all of them when testing in a scratch copy. Its
     failure lines print the rule name in `[brackets]`.
   - Queue claims go stale. Check a claim against the code before repeating it.
   - Still owed from step 1, owner eyeball only: a pope's card on People now shows
     a description; moving between two pages changes the tab title.
3. **Infra pass:** content-quality, images and tests into the deploy build
   (see the deploy note), plus auth storage hardening (item 7).
4. **One conflict track**, writing the conflict-completeness rule into
   `CLAUDE.md` first. Recommended: the Hundred Years' War.

Then the Insights additions, the chart tooltip and the topic page layout.

**Nothing is broken and nothing is blocking.** Every gate is green: tests 13/13,
content-quality, images (870 references validated remotely), the SEO gate, the
build, and the integration audit (0 orphans, 0 mis-sorted events, 0 stale notes,
0 unexplained commanders). The site is live, indexed-in-progress, and healthy.

**Tracks complete:** A (14/14, Byzantine expansion), C (14/14 + the M15 approval
gate), D (closed as already delivered). **Track B M5 is parked by the owner**;
B M6-M10 were never started.

~~**One owner action outstanding:** set `ADMIN_EMAIL` in Vercel Production.~~
**Done** — the owner uses Insights on the live site (confirmed 2026-09-14).

**One deploy note:** the test step was REMOVED from `vercel.json`'s buildCommand
after two failed deployments. The failure could not be reproduced locally — a
clean clone with Vercel's install and the exact buildCommand exits 0 — but the
deploy went green immediately once the step came out, first as a shell glob and
again as a programmatic runner, which points at `node:test` behaving differently
on Vercel's Node version. Tests still run in `npm run build` and before every
push. **If you want them back in the deploy, find the Node version first.**
**✅ Fixed 2026-09-15 (step 3, part 1): `check-content-quality.mjs` and `check-images.mjs` now run at the start of `vercel.json`'s buildCommand**, so a failing content or image gate blocks the deploy. Both use only Node built-ins. Tests stay out until the Node-version question above is settled. `check-images` also now validates `armsImage`, which houses had been carrying unvalidated. The original note follows. **Also absent from the deploy (verified 2026-09-14):** `check:content-quality`
and `check:images`. `vercel.json`'s buildCommand runs only `check-seo.mjs`, so
every content gate depends on being run before the push — against CLAUDE.md's
own "gates in the deploy build" rule. Step 3 of the 2026-09-14 plan.

### Everything remaining, ranked by what it is worth

0. **OWNER DECISION 2026-09-15 — no article in the archive may stay under
   2,000 characters. All of them, not a top ~10.** (227 at the time, 133 with no
   timeline; `node scripts/audit-stubs.mjs --all`.) Step 2's top-10 batch is the
   first slice of this, not the whole job. Work it in ranked batches, inbound links
   first, and follow the costly-operations rule: propose each batch before writing.
   **City standard, same decision, with Damascus as the example**
   (`/locations/damascus`, reported as an Overview of three lines plus four lines
   of Historical significance). Every city of Damascus's weight (Paris, Córdoba,
   Constantinople, Rome, Rouen…) must carry: its history by period, a timeline,
   famous rulers, what it is known for, its urban structure (walls, quarters,
   citadel, great mosque or cathedral, markets), its impact beyond the city, the
   important events that happened there, and **at least one section image in
   addition to the main image**. `constantinople` (9,447 chars, 11 sections, 15
   timeline entries) is the existing benchmark. Once the first cities are done,
   write the standard into `CLAUDE.md` and add a hard-failing
   `validateCityStandards` beside `validatePolityStandards`, following the
   gates-not-docs rule.
   **Damascus main image: the owner wants a broad, wide-angle view of the city**,
   replacing the current Citadel photograph, which reads as a fragment of ruin.
   **This conflicts with a binding rule and must be reconciled, not overridden
   silently:** CLAUDE.md's Medieval Location Image Rules name Damascus as the
   worked example of *not* using a modern skyline, and `validateMedievalLocationImage`
   hard-fails captions containing "skyline", "cityscape" or "aerial view of the
   city". **Recommended reconciliation:** a pre-modern panorama showing the old
   walled city as a whole: a nineteenth-century view or early photograph (e.g. a
   Roberts lithograph or a Bonfils-era photograph) with the Umayyad Mosque rising
   over the old city. That meets the owner's "broad view" and the rule's "medieval
   subject in focus". Caption it honestly with its date. Apply the same test to
   every city's main image.
   **Locations carry a higher bar: at least 5,000 characters** (owner, same day,
   with `oxford` as the example: 854 chars, one image, no timeline). Each covers
   what the place is chiefly famous for, its origins, who ruled or held it, a
   timeline of its main events, and its legacy, with **at least two images for
   important places**. Audit 2026-09-15: 171 locations, **107 under 2,000 and 129
   under 5,000; only 8 have two or more images.** The worst of the famous: `rome`
   997, `london` 969, `aachen` 881, `paris` 879, `oxford` 854. Rank by inbound
   links and fame, propose each batch, then write. **Batch 1 done 2026-09-15**
   (owner-approved scope: about 40 famous places, in batches of about 10):
   `damascus`, `oxford`, `rome`, `paris`, `london`, `aachen`, `toledo`, `seville`,
   `granada`, `novgorod`, each now over 5,000 chars with a timeline and two or three
   images, the main image a pre-modern view of the whole city under the new
   CLAUDE.md rule. **Batch 2 done 2026-09-15:** `valencia`, `lisbon`,
   `marrakesh`, `winchester`, `westminster`, `poitiers`, `tours`, `antioch`, `edirne`,
   `bursa`, each 6,800–8,300 chars with a timeline of 12–17 entries and 2–4 images.
   Every main image is a pre-1900 view of the whole place, checked by an
   independent reviewer (one Westminster caption corrected). All 33 image URLs load.
   **Batch 3 SHIPPED 2026-09-15 (owner away):** ten places, 7,500–11,800 characters each, with 13–18 timeline entries and 2–4 images. Every main image is a pre-modern view or a medieval depiction with the subject clear. The battle-site towns (Stamford Bridge, Hastings) and Kosovo Field summarise their battles and link to the battle articles instead of retelling them. Kosovo Field left the template-prose baseline. Spot-check `stamford-bridge`: it has the thinnest medieval record, and its main image is only 1900–1912. The batch covered: `stockholm`, `bergen`, `gascony`, `covadonga`, `winchester-cathedral`, `kosovo-field`, `chateau-de-vincennes`, `monmouth`, `stamford-bridge`, `hastings`. `kingdom-of-asturias` and `caliphate-of-cordoba` moved to 0d batch 3, so no two agents write the same article. `papacy` (32 inbound links, 3,621 chars) is an institution, not a place, so it stays with item 1. Side finding: `locationType`
   is inconsistent (`City`/`city`, `Kingdom`/`kingdom`, 50+ distinct values);
   normalise it before any validator keys off it.
0o. **OWNER REQUEST 2026-09-15: GLOBAL ARTICLE UI/UX REFINEMENT. A major track that will take a while.** The full spec is **Appendix B** at the end of this file in the repo root (42 sections). Read all of it before any milestone. The benchmark page is `/events/battle-of-brunanburh`. The goal is to move article pages from a database-looking layout toward a premium digital codex, **fixing shared components rather than single pages, and without redesigning the site's identity**: near-black, ivory, restrained gold, monumental titles, and the side-by-side image and title hero.

   **Owner-reported symptom and its cause (measured 2026-09-15).** Brunanburh shows a huge black space under its image. The hero is two columns: the left column holds a landscape 1024x754 plate, so it ends early. The right column carries the year, location and conflict cards, factions, leaders, strength, outcome and the Stamford Bridge continuation card, so everything under the image on the left is empty. This is the spec's "dead left column" (§5), and the fix is an "On this page" contents rail under the image, not a taller image.

   **The spec's main changes:**
   - an auto-generated, sticky table of contents in the left rail (§5)
   - no cards inside cards (§6)
   - dark surfaces for ordinary metadata, with pale surfaces kept for real archival inserts (§7)
   - remove the duplicate type label (§8)
   - a quieter Favorite control (§9)
   - hero rhythm, plus the summary shown as a deck under the title (§10–11)
   - compact metadata groups (§12–13)
   - distinct visual treatment for people, realms, places and conflicts, and fewer pills (§14–15, §17)
   - a two-column factions comparison (§16) and a scannable outcome (§18)
   - the "story continues" card moved to the end of the article (§19)
   - Related grouped by type, only where the data gives the type (§20)
   - body typography and dividers (§21–22), lighter hero captions (§23), an optional gallery link (§24)
   - responsive, accessible and restrained throughout (§25–29), applied to every article family (§30–31)

   **Hard constraints:**
   - no changes to historical content, IDs, slugs, URLs or SEO (§2, §32, §37)
   - no mass edits to the data to make a component fit
   - no heavy client-side dependencies (§36)
   - graceful handling of missing data (§35), consistent with CLAUDE.md §4 on empty cards
   - keep the existing image rules: captions sit below images, and images are never cropped
   - keep the owner-approved side-figure layout for locator maps (0k)

   **Milestones, one ship each, each with a test case:**
   - **U0: audit, no changes.** Map the article components in `client/src/pages/DetailPage.jsx`: the hero variants (`StandardHero`, `EventHero`, `LocationHero`, `HouseHero`), fact strips, event participants, `BattleContinuity`, `RelatedEntries`, `ArticleSection`, `ArmsImage` and `LocatorMap`, plus the CSS tokens, breakpoints, radii and surfaces in `client/src/styles.css`. Report the smallest set of shared primitives to change.
   - **U1: primitives.** Dark metadata surfaces and tokens, a compact metadata item, entity-link treatments per type, pills reduced, a quieter Favorite control, the duplicate label removed.
   - **U2: Brunanburh benchmark.** The event and battle hero with the left contents rail, the factions comparison, outcome hierarchy, the summary deck, and the continuation card moved to the end. Verify against the spec's §33 checklist.
   - **U3: other families.** People and rulers (reign, realm, house, succession), locations and kingdoms (arms panel, locator map), houses (family tree), weapons and armour (specs), orders and artifacts.
   - **U2 correction (2026-09-16):** the contents rail was recorded as shipped but never built — `grep` for it returned nothing, and the left column still held only the image, arms panel and order sigil. Built 2026-09-16: "On this page" under the hero image, at four or more sections (owner chose that threshold from four measured options; 723 articles get a rail, 134 do not). Anchor ids derive from section titles, verified unique across all 857 articles.
   - ❌ **DECLINED by the owner 2026-09-16: the sticky through-article rail.** Three options were mocked (https://claude.ai/artifact/R81Fq8fiikUQwpDhtS3CLn); the owner's verdict was "leave it as is for now, I don't like any of the options in the artifact. And it's not a pressing issue." The rail stays under the hero image, non-sticky. **Do not re-propose without a new idea** — the three obvious approaches have all been seen and rejected.
   - ~~Deferred from that ship: a STICKY through-article rail.~~ The rail under the image lives in the hero, so it scrolls away. Making it follow the reader means moving it into the content grid, which reflows the body on all six article types, collides with the 72ch reading measure from U3, and would give people rails on both sides (their timeline/related rail is already sticky on the right). Worth doing, but it is a layout change, not a tweak — decide it on its own.
   - **U4: responsive** (wide desktop, laptop, tablet, mobile). **Note before starting:** the stylesheet carries twelve distinct `max-width` breakpoints (820, 760, 640, 560, 520, 900, 960, 620 and smaller) with no shared scale. §25 asks for four deliberate tiers and says not to let the desktop design "collapse unpredictably", so consolidating the scale is the first task of this milestone, not an optional tidy.
   - **U5: accessibility.**
   - **U6: regression** over the §34 page set at desktop and mobile widths.
   - **U7: cleanup** of obsolete styles.

   No local dev server (owner rule), so every milestone is verified live after deploy, with the owner testing each one.
0s. **OWNER DECISION NEEDED: 14 rulers are named on polity pages with no article behind them.** Found 2026-09-16 while fixing polity ruler coverage (`187b1c3` and the fix that followed). Each is dead text on a page that names them as a major ruler, which is the create-or-reconsider case CLAUDE.md describes: either write the article or stop calling them major.
   - **Conspicuous, and I would write these:** **Alfonso X of Castile** (the Learned — the Siete Partidas, the Alfonsine Tables, a reign that reshaped Castilian law and letters) and **Stephen I of Hungary** (the founder-king and patron saint, without whom the Hungarian section has no beginning).
   - **Lithuania's founding line, all four unwritten:** Mindaugas, Gediminas, Algirdas, Kęstutis. The Grand Duchy's page currently names its founders and links none of them.
   - **The rest:** Ine of Wessex; Fernán González of Castile; Ordoño II, Alfonso V, Urraca and Alfonso IX of León; Engelbrekt Engelbrektsson and Sten Sture of Sweden (both regents rather than kings, so arguably correct to name without an article).
   **Note the shape of this:** the shrink-only gate cannot catch it, because it only measures rulers who HAVE articles. A name with no article behind it is invisible to it by construction.

0r. **LOW PRIORITY — owner request 2026-09-16: spelling-tolerant search.** Searching "Erik the Victorious" finds nothing, because the archive spells him **Eric**. The owner found the article missing when it was simply spelled the other way, and asked for "some sort of smart search rule that, for example, when you search for Erik it finds Eric as well". **To discuss before building.**
   The medieval name-variant problem is broad: Eric/Erik/Erik, Olaf/Olav/Óláfr, Cnut/Canute/Knut, Valdemar/Waldemar, Æthelred/Ethelred/Aethelred, Sverker/Sverkir, Haakon/Håkon/Hakon, Louis/Ludwig/Lodewijk, and every ø/oe, æ/ae, å/aa pair. Aliases already cover the cases somebody thought of; this is about the ones nobody did.
   Candidate approaches, cheapest first: (1) fold diacritics and normalise the obvious consonant pairs (c↔k, v↔w, th↔d) in the search index only, never in stored data; (2) add a phonetic key per article — Double Metaphone handles Eric/Erik and Olaf/Olav well; (3) trigram or edit-distance fallback when an exact search returns nothing, which also catches typos. **The risk with all three is false matches** — "Eric" and "Erik" are the same man, but loose matching could equally collapse Henry I and Henry II, and a wrong search result is the same class of error as a wrong link. Whatever ships should show the reader WHY a result matched.

0q. **BARE-NAMED BATTLES — nine written 2026-09-16 (`0dda0e3`), the rest still open.** The owner found that the archive named Falkirk 14 times across 7 articles with no article behind it. The cause: `validateBattleLinking` only scans for the phrase "Battle of X", and the prose said "at Falkirk", "Falkirk (1298)", "Defeat at Falkirk". Not on `BATTLE_BACKLOG` either, so nothing was watching.
   **Written:** `battle-of-falkirk` (1298), `battle-of-dunbar` (1296), `battle-of-methven` (1306), `battle-of-dupplin-moor` (1332), `battle-of-halidon-hill` (1333), `battle-of-carham` (1018), `battle-of-lewes` (1264), `battle-of-evesham` (1265), `battle-of-alnwick` (1174). Stirling Bridge's continuity was re-pointed to Falkirk, as the gate from `cd7a266` now requires.
   **Naming hazards handled:** Evesham and Alnwick are titled with their years (a bare alias would have hit the abbey on `edith-of-wessex` and the 1093 battle on `matilda-of-scotland`); bare "Falkirk" and "Dunbar" carry `ambiguousEntityAliases` context guards, because Edward II marched through both towns in 1314.
   **Gate widened and all six remaining battles written 2026-09-16 (`4a41a65`), with Simon de Montfort — recorded in `COMPLETED_ROADMAP.md`.** The bare form now hard-fails like the full phrase; the widened scan surfaced 17 further unwritten battles, all on `BATTLE_BACKLOG`.
   **Still open:**
   - ~~30 mention rewrites~~ **DONE 2026-09-16 (`d97dd2a`)**: all 29 drafted rewrites from the Falkirk and Lewes batches applied, 14 files, 32 replacements. Evesham and Alnwick were the ones that actually needed it — both carry year-qualified labels with no bare alias, so those mentions did not link at all. Dalrigh, the towns of Falkirk and Dunbar, and the 1093 Alnwick mentions stay bare on purpose. The r32/r33 lists are applied too.
   - **MISSING POLITY: Kingdom of Strathclyde (owner report, 2026-09-16).** The owner reported it has no linked kingdom; the cause is that no Strathclyde article exists at all, so `owain-of-strathclyde`'s realm has nothing to resolve to. The rule is that every kingdom links, so the fix is to WRITE the polity — a Brittonic kingdom in scope (Owain the Bald died at Carham in 1018, and it was absorbed into Alba soon after). Note that `owain-of-strathclyde` and `battle-of-carham` both already reference it, so it lands with reciprocity ready.
   - **The commanders are the bigger gap:** ranked by mentions — Malcolm II (20), Edward Balliol (14), Malcolm III (11) **← all three in progress 2026-09-16**; then Owain of Strathclyde (5), John de Warenne (4), William the Lion (3), Archibald Douglas (3), Aymer de Valence (2). Simon de Montfort (18) was written 2026-09-16 (`4a41a65`).
     Also unwritten and named as battle leaders: James Douglas and Thomas Randolph (Stanhope Park), and the Percy and Douglas commanders at Otterburn and Homildon Hill — each documented-unlinked with a note, not a broken link.
   - **17 further unwritten battles** were surfaced by the widened bare-name gate on 2026-09-16 and are recorded in `BATTLE_BACKLOG`: Lechfeld, Courtrai, Cortenuova, Dandanaqan, La Forbie, Mansurah, Nechtansmere, Heavenfield, Velbazhd, Soissons, the Trent, the Zab, Ponza, Val-ès-Dunes, Bornhöved, Åsle, Épila. Each is a create-or-document decision, not a licence to leave them unwritten.

0m. **OWNER REQUEST 2026-09-15: THE COMPLETE MEDIEVAL RULERS PROGRAM. The largest content program yet, split into milestones, with the audit done before any writing.** The full spec is **Appendix A** at the end of this file in the repo root (100 sections, 2,495 lines). Read all of it before planning any milestone. The goal is a full article for every attested sovereign or substantively governing ruler of every in-scope medieval polity. Each article links into its house, family tree, realm, predecessor and successor chain, wars and battles, with no duplicate identities.

   **Starting point (measured 2026-09-15):**
   - 316 ruler articles (`isRuler`) across 92 distinct offices, 70 houses and 51 polity-type locations.
   - **297 of the 316 are under the spec's 5,000-character prose minimum**, 24 of them under 2,000. Almost every existing ruler is therefore `exists-needs-enrichment`.
   - 89 succession endpoints are still unlinked names, which gives a ready-made Tier II list.
   - The target is roughly 2,500 to 3,500 in-scope candidates. That is a guess, to be replaced by the registry's real count.

   **Settled 2026-09-15:**
   1. 1453 wins, and CLAUDE.md now says so: a reign that begins in or before 1453 is covered to its end, and later reigns are `outside-scope`.
   2. Depth tiers are agreed, main rulers first.
   3. **The data split: owner said go on 2026-09-15.** It runs as M1 before any bulk writing. The plan is under M1 below.

   **Three owner decisions before M2 writes a single article:**
   1. **Scope conflict.** The spec runs to the end of the fifteenth century "with sensible overlap". CLAUDE.md scopes the archive to 476–1453 and marks later reigns `outside-scope`. This decides Matthias Corvinus (from 1458), the later Sforza, Ivan III, most of the Aviz and Kalmar rulers, and Mehmed II after 1453. Move the boundary to 1500, or keep 1453 with the existing overlap exception?
   2. **Cost.** The Sidon pages took about 310k–325k agent tokens each. At even half that, 3,000 rulers comes to roughly 450M tokens. Proposal: depth tiers. Flagship rulers (the §21 list) get the full research pass. Tier III rulers get a cheaper pass covering several rulers per agent, using §97's source-limited exception rather than 5,000 padded characters.
   3. **Data architecture.** `history.json` is 8.6 MB, and a 7,400-character article is about 21 KB of JSON. The program would add roughly 50–70 MB to a single file that the server loads whole and the build prerenders page by page (863 pages today). Split the data store before bulk writing, not after.

   **Where the spec defers to existing conventions, they win:**
   - Character and Personality stays mandatory for people.
   - Succession boxes, battle-leader linking, house↔person links, the no-filler rules and the image rules all apply.
   - Military-order grand masters stay non-rulers, per CLAUDE.md, so §15 is audit-only.
   - The spec's "typecheck and lint" maps to this repo's gates and build.
   - The registry and reports live in `docs/rulers/`: the registry as JSON, the reports generated from it. They never go in `history.json`.

   **Overlaps to coordinate:**
   - **0e Civilizations.** Goths, Visigoths, Ostrogoths, Vandals and Lombards need both people pages and ruler pages from the same research.
   - **0d.** Every newly covered realm needs a polity article with a map and arms.
   - **Item 1.** Ruler stubs fold into this program.
   - **0c-B.** Consorts are people, not rulers, per §35.
   - **Unknown death ages.** About 70 rulers still have `deathAge: "unknown"`.
   - **Houses.** The 4 houses still missing from the houses roster (Ottonian/Salian, Habsburg, Barcelona, Piast) are prerequisites.

   **Milestones:**
   - **M0: reconnaissance and decisions, no content.** A conventions summary (§69.1) covering the person schema, succession, houses and family trees, the People index and its filters, link helpers, image rules and existing audit scripts. The owner answers the three decisions above.
   - **M1: scale infrastructure.** **Data-split plan (2026-09-15).** Recon found 188 files reading `server/data/history.json`. About 170 of them are one-off `add-*`, `fix-*`, `rewrite-*` and `upgrade-*` scripts that already ran. The live readers are `server/index.js`, the gates (`check-content-quality`, `check-images`, `check-seo`), `prerender`, `build-topics`, `gen-entity-links`, `update-content-dates`, `make-og-images`, the `audit-*` and `link-*` tools, and `tests/page-meta.test.mjs`. The server parses the whole file into memory (`historyData()`), and Vercel ships it via `includeFiles`. Steps, one ship each:
     1. A shared loader `server/data/archive.mjs` (`loadArchive()` returns today's `{ events, characters, … }` shape, plus `saveArticle()` and `saveArchive()`) over one file per article in `server/data/articles/<collection>/<id>.json`, created by a split script. A test proves the reassembled archive deep-equals `history.json`.
     2. Switch every live reader to the loader, then delete `history.json`. Move the one-off scripts to `scripts/archive/` unchanged, so nobody reruns them against the new layout.
     3. Server: a generated `index.json` with the card fields that lists, search, related-entry, dynasty and continuity resolution need. Detail pages read one article file through an in-memory LRU cache, and `includeFiles` becomes `server/data/**`.
     4. Measure build, prerender and cold start at the real count and at 2× and 4× synthetic counts, and record the numbers here.

     **Steps 1 and 2 SHIPPED 2026-09-15:**
     - The archive is split into 840 article files plus `index.json` under `server/data/archive/`, with `archive.mjs` providing `loadArchive()`, `saveArchive()` and `archiveVersion()`.
     - The split was proven identical to `history.json` before that file was deleted.
     - The server, the gates, prerender, topics, entity links, the audits, the one live writer (`link-stale-succession-endpoints`) and the tests all use the loader.
     - Vercel bundles `server/data/archive/**`.
     - 170 one-off scripts moved to `scripts/archive/`.
     - `tests/archive.test.mjs` checks that the index and files agree and that save and load round-trip.

     **Scratchpad apply scripts from earlier sessions still write `history.json`,** so future applies must use `loadArchive()` and `saveArchive()`.

     **Next:** step 3 (a lazy server index plus per-article reads) and step 4 (build and cold-start measurements).
     Then come the People index pagination, filters and family-tree branching (below).
     - Split the data store.
     - Measure build and prerender time at 2× and 4× the article count.
     - Make the People index pagination and its ruler, realm, dynasty and century filters ready for thousands of people.
     - Add family-tree branching for oversized dynasties (§64–65).
   - **M2: master registry and audit reports, no articles.**
     - `docs/rulers/registry.json`, one row per candidate with the §32 fields and a status.
     - Scripts that build the duplicate-candidate, missing, thin, family-tree-gap and house-link-gap reports (§56, §69).
     - A Tier I, II or III priority on every row.
     - A realm-completion checker (§54).
     - The owner reviews the polity list and the counts before M3.
   - **M3: automated gates.** Hard-fail checks for ruler articles: duplicate identity, realm link, house link, chain gaps, required sections, and 5,000 characters of prose unless on a documented source-limited exception list. Also normalise the realm and dynasty value inconsistencies these checks surface (§74).
   - **M4: enrich the existing 316, Tier I first.** Upgrade and never shorten (§68). The flagships from §21 go first.
   - **M5 onwards: one milestone per regional phase of §47.** Each is split into polity batches of 5–15 rulers, with one commit per polity or dynasty, and each closes with its realm-completion gate.
     - M5: Western Europe and the British Isles (England and the Heptarchy, Scotland, Wales, Ireland tiers A–B, France and its principalities, Portugal, the Iberian kingdoms, al-Andalus).
     - M6: the Migration-period kingdoms, run together with 0e.
     - M7: the Empire and central Europe.
     - M8: Scandinavia and the Norse world.
     - M9: Byzantium and its successor states, the Balkans, Wallachia and Moldavia.
     - M10: Rus', Lithuania and the Baltic.
     - M11: Italy.
     - M12: the crusader states and the Mediterranean Islamic powers.
     - M13: the steppe powers and the Caucasus.
   - **Final: global reconciliation and a completion report (§98–99).**

   The spec's special audits (§75–89) run inside their region's milestone. **When this starts, the first step is M0 and nothing else.**
0k. **OWNER REQUEST 2026-09-15, a big one: a locator map in every city's Overview.**
   **STATUS 2026-09-16.** The feature is BUILT — projection, crop window, `LocatorMap`, calibration tests. Coordinates are DONE: 97 locations carry `coordinates` + `modernCountry` (`2aa75fb`); 77 places could take a locator. What was missing is base maps: `LOCATOR_MAPS` held exactly one (Kingdom of Jerusalem), which is why only Damascus, Sidon, Kerak and Antioch showed an inset.
   **OWNER DECISION 2026-09-16: Option 1 — three maps first.** British Isles (18 places), France and the Low Countries (22), Scandinavia (16). That is **56 of 77**, 73%, for three calibrations, and covers the regions where the recently enriched stubs live.
   **QUEUED FOR A LATER ITERATION — the owner wants them all eventually:**
   - **Iberia** (9 places: Las Navas de Tolosa, Medina del Campo, Madrigal, Lisbon, Toledo, Granada). Needs a DATE chosen before a map can be: the frontier moved constantly.
   - **Byzantium and Anatolia** (6: Constantinople, Edirne, Bursa, Gebze, Kosovo Field, Manzikert). Also needs a date; Manzikert falls outside a tight Anatolia frame.
   - **Germany and the Empire** (7: Aachen, Rupertsberg, Bermersheim, Legnano, Lechfeld). Overlaps France and Italy; one Empire map may serve all three at lower zoom.
   - **Italy** (2: Rome, Legnano). Not worth its own map — fold into the Empire or a Mediterranean map.
   - **The six outliers** with coordinates but no candidate frame: Tikrit, Manzikert, Grunwald, Marrakesh, Horodok, Novgorod. Either a very wide map or no locator, decided per place.
   **CALIBRATION FINDING, 2026-09-16 — read this before sourcing any map.** I tried to calibrate `France 1154-en.svg` (already used on `aquitaine`) and failed, for a reason that will repeat on most candidates:
   - The SVG has **85 text labels**, 44 of them towns, with positions readable from their `transform`. Fitting the linear model on 27 towns with known coordinates gave a **worst error of 102.6 units on a 1405-wide map — 7.3% of the width**. The Jerusalem map manages 7 units.
   - It is **not the projection**. A full six-parameter affine fit (allowing for a conic projection) barely moved it: 99.2 units. So the model is not the problem.
   - It is **not a constant offset** either. The signed residuals have a standard deviation of 35.6 and 21.2 units around a mean of zero, so there is no single label-anchor correction to subtract.
   - The cause is that **a label's position is not its town's position**. Labels sit left, right, above or below their dot depending on space, giving an irreducible scatter of roughly ±40 units.
   - The obvious fix — pair each label with its marker dot — **does not work on this file**: it has zero `<circle>` elements, and its 26 `<use>` elements are shared path symbols with `x="0" y="0"` and their offset in `transform`. Label-to-nearest-marker distance is a median of 203 units and a maximum of 656, so they are not town dots.
   - On a 340-unit crop window, a 100-unit error puts the marker roughly a quarter of the window away from the true town. That fails the one job a locator has.
   **What this means for the estimate:** the work is not "fit coefficients", it is **finding maps whose town positions are machine-readable at all** — an SVG with real `<circle>` markers, or a raster map with a printed graticule dense enough to measure. `Scandinavia-12th century.svg` is more promising: it carries a **labelled graticule** (0°/10°/20°/30° longitude, 55°/60°/65°/70° latitude) with exact positions, which beats town-matching. Its latitude labels alternate edges at inconsistent spacing, so test it for a conic projection before trusting it. `Norman-conquest-1066.svg` is unusable: **zero text elements**. The British Isles has no good SVG candidate yet — the Commons categories return early-modern engravings and rasters.

   **Calibration is the real work, not the coordinates.** Each map needs `x = a·lon + b` and `y = c·mercY(lat) + d` fitted against towns the map itself marks, then checked against those markers by `tests/locator-maps.test.mjs`. The Jerusalem map was fitted on 23 towns from Akaba to Hama, worst error 7 units. A map with few labelled towns cannot be calibrated accurately however good it looks — prefer SVG sources, whose labels and markers can be read programmatically.
   Each city, town and settlement article gets a map of the country it lies in today,
   with the surrounding region and a marker showing where the city is. Example:
   `antioch`, which is Antakya in southern Turkey near the Syrian border, not in
   Israel as first described.
   **Scope:** 67 city/town/port/settlement/village articles out of 174
   locations. No location has coordinates today (0 carry a coordinates field).

   **Recommended build: generated, not hand-picked images.**
   1. Add `coordinates: { lat, lon }` to each location, sourced from Wikidata/Wikipedia
      and spot-checked.
   2. Add `modernCountry` (ISO code), used for the base map.
   3. Build one `LocatorMap` component that draws the country outline and its
      neighbours from bundled public-domain Natural Earth boundaries (a small
      TopoJSON; no external requests, which fits the CSP) and pins the city.

   Hundreds of consistent maps then cost one component. Picking a Commons locator
   image per city would be slower, inconsistent in style, and brittle.

   **Decide with the owner first:**
   - Modern borders only, or modern borders with the medieval polity named in the
     caption.
   - Whether regions and castles also get one.
   - The rendering: plain SVG, or a light d3-geo projection.

   **Gate once it exists:** every city-type location has coordinates and renders a map.

   **Owner decision 2026-09-15:** the map shows the medieval polity, not the modern country. Sidon gets the Kingdom of Jerusalem, not Lebanon. One high-quality regional map with well-readable city names may be reused for every city in that region. This replaces the modern-borders recommendation above wherever a city lies inside a mapped medieval polity. The Kingdom of Jerusalem map now being chosen, to replace the rejected Conder plate, is the first candidate base map.

   **Owner follow-up 2026-09-15, reported on `kerak`: "we are missing an image of where in the Levant Kerak is located".** The owner attached an example: a Wikipedia-style location map with a pale base map of the region, borders, rivers and coast, one red dot, and the place named beside it ("Kerak Castle"). **Every city gets one, in its Overview, clearly showing where it lies in its region.** CLAUDE.md now carries this as a standing rule.
   **Recommended build**, replacing the Natural Earth idea above:
   - Use the base maps behind Wikipedia's location-map templates (Commons files such as `Jordan location map.svg` or a Levant or Near East map). Their corner coordinates are published in `Module:Location map/data/<map>`.
   - Add `coordinates: { lat, lon }` to each city from Wikidata, spot-checked.
   - Build one `LocatorMap` component that draws the base image and places the dot by linear interpolation between the corners, with the label beside it. No hand-made image per city, and no external requests beyond the Commons image.
   - Pick the base map per region, favouring the medieval region the article belongs to. The earlier decision stands: a legible Kingdom of Jerusalem map is the base for crusader cities where it can carry a dot.
   **Owner decision 2026-09-15: always medieval if possible.** The base map shows the medieval polity or region the city belonged to. A modern-borders base, like the Jordan map in the example, is used **only where no medieval base map is possible**. Where that fallback is used, the caption says the borders are modern.
   **Pilot:** `kerak` first, then the other Levant cities (`sidon`, `damascus`, `antioch`), then every city-type location, with a gate that each has coordinates and renders a map.
   **Pilot shipped 2026-09-15 on `kerak`.** Kerak now carries `coordinates` and `locatorMap: "kingdom-of-jerusalem"`.
   - `client/src/lib/locatorMaps.js` registers the base map. Its Mercator calibration was fitted against 23 towns the map itself marks; the worst error is 7 SVG units, about the size of a marker. `locatorFor()` places the marker, and `cropWindow()` picks a 340×380-unit window with the marker 58% down, so the map's own labels stay readable.
   - `LocatorMap` in DetailPage renders the window after the Overview's first paragraph, with a red marker and a Commons credit.
   - `tests/locator-maps.test.mjs` checks 8 measured markers, that every `locatorMap` article lands on its map, and that the window clamps.
   **Levant extension shipped 2026-09-15 (owner away):** `sidon` (33.5571, 35.3729) and `damascus` (33.5106, 36.3065) now carry locator maps on the same base, so all three archive cities on this map have one. No other city article lies on it; Acre, Tyre, Jerusalem and Tripoli have no articles.
   **Next:** coordinates for `sidon`, `damascus`, `antioch` and the other Levant cities on this map. Antioch lies north of this map's edge, so it needs a northern crusader-states base. Then base maps for the other regions (a medieval one wherever possible), then the gate that every city has a map.
0g. **OWNER REQUEST 2026-09-15, extended 2026-09-16: sweep the repo's markdown files, and move finished work to `COMPLETED_ROADMAP.md`.** The owner's rule, now in CLAUDE.md: when a planning file's work is all done, move a condensed record of what was built into `COMPLETED_ROADMAP.md` (create it the first time) and delete the original; a partly finished file keeps only its open items. `CLAUDE.md`, `CODEX.md` and `CONTENT_GUIDELINES.md` are never deleted. The original request follows. **Sweep the repo's
   markdown files for work already done.** Keep `CLAUDE.md` and `CODEX.md` as they
   are. For every other planning or work-list file, check each item against the code, the data
   and `git log`:
   - **Everything in a file is done:** delete the file.
   - **Part of it is done:** mark those items complete, so no session re-reads
     finished work.
   This includes pruning finished entries out of `QUEUE.md` itself, which has grown
   to about 2,000 lines. Candidates as of today, with the date each last changed:
   - `HOUSES_PLAN.md`: **done, folded into COMPLETED_ROADMAP.md and deleted 2026-09-16.** Its 4 missing houses are tracked in 0m.
   - `WEAPONS_ARMOR_EDITORIAL_AUDIT.md` (09-06): **deleted 2026-09-15.** Its open items are in the W&A backlog.
   - `WEAPONS_ARMOR_AI_PROMPTS.md` (09-06): **deleted 2026-09-15.** All eight images shipped.
   - `WEAPONS_ARMOR_COVERAGE_GAPS.md` (09-07): **deleted 2026-09-15.** Every recommended tier shipped.
   - `SEO_TESTING.md` (09-08): folded in as **Appendix E** 2026-09-16.
   - `MARKETING.md` (09-08): folded in as **Appendix D** 2026-09-16; still an unactivated proposal.
   - `CONTENT_GUIDELINES.md` (06-20; a standards file, so check whether `CLAUDE.md`
     has absorbed it rather than whether it is "done")
   Out of scope, since they are not work lists: `README.md`, the `.claude/agents/*.md`
   definitions, and the civilizations spec, now **Appendix C** (item 0e, not started).
   Propose the delete list to the owner before deleting.
0d. **OWNER REQUEST 2026-09-15 — every kingdom gets BOTH a territory map AND
   its arms or flag.** Reported on `kingdom-of-castile` (map, no arms) and
   `kingdom-of-navarre` (arms, no map). Heuristic audit of captions and
   filenames across 54 kingdom-type articles: about 7 have both, 31 a map only,
   16 neither (`kingdom-of-france`, `kingdom-of-poland`, `kingdom-of-portugal`,
   `kingdom-of-leon`, `kingdom-of-hungary`, `kingdom-of-sicily` among them).
   The heuristic reads words, not pictures, so verify each by eye. One image
   leads; the other is a section image beside the section it explains. **Rules to
   respect:** arms must be attested for the period (armorial rolls, royal seals,
   coinage, surviving banners) and captioned with date and source. A modern
   "flag of the Kingdom of X" SVG is usually an anachronistic reconstruction and
   is either captioned as one or rejected. Byzantine, Islamic and steppe polities
   bore no heraldry, and CLAUDE.md already forbids inventing a shield: use the
   attested emblem instead (a banner described in the sources, a tamga, a seal or
   a coin) and say plainly that the polity had no arms. Once done, gate it in
   `check-images.mjs` for kingdom-type locations, with an allowlist for the
   no-heraldry polities.
   **BATCH 1 SHIPPED 2026-09-15 (owner away), 12 kingdoms:** Poland, Hungary, Sicily, Jerusalem, England, Scotland, France, Holy Roman Empire, Castile, León, Aragon and Navarre. Each now leads with a territory map (a pre-1900 atlas plate or a modern reconstruction, captioned as such) and shows its period arms in the arms panel (`armsImage`, rendered by `ArmsImage` in DetailPage). Replaced main images that were still good (Stephen I in the Chronicon Pictum, the Cappella Palatina, the 878 and Strathclyde maps, Alfonso IX in the Tumbo A) moved to section images. Two were dropped: France's Bourbon royal standard of 1638–1790, whose source link was broken, and Navarre's undated modern flag. The same ship corrected Navarre's prose and timeline, which had stated the Las Navas chains legend as fact. Every image was viewed by the agent that chose it. **BATCH 2 SHIPPED 2026-09-15 (owner away), 4 kingdoms:** Portugal (Shepherd 1911, quinas with the castle bordure of Afonso III), Denmark (Spruner-Menke diocesan map of 1880 plus the lions of Canute VI; the map is of dioceses, which the caption says), Norway (a reconstruction of about 1265 plus the lion with Saint Olaf's axe of about 1280) and Sweden (a reconstruction of 1323 plus the Folkung lion). Three were dropped: the modern locator maps for Denmark and Norway, and Brenner's tiny 1705 coin engraving for Sweden. Portugal's illuminated genealogy moved to "Major rulers". **BATCH 3 SHIPPED 2026-09-15 (owner away): 32 of 54 done.** The 16 polities are listed below.
   - **Maps:** each leads with a map. The kept maps got real metadata; Northumbria's and the North Sea Empire's broken thumbnail and source links were fixed. Carolingian's modern-borders locator and the modern Normandy and Flanders flags were dropped.
   - **Arms panel:** heraldic arms only where attested (Aquitaine, Normandy, Flanders, the Latin Empire). Every non-heraldic polity instead shows a coin or object of its own with a caption saying it bore no arms: a Frankish solidus, a Carolingian denier, pennies of Alfred and Eadberht, a Cnut penny, a solidus of Constans II, a hyperpyron of John III Vatatzes, an aspron trachy, the Cross of Victory, dinars and dirhams.
   - **Open item:** `England_878.svg` now leads both `kingdom-of-wessex` and `danelaw`, and is a section image on `kingdom-of-england`. Give one of them a different map.
   The batch 3 polities (approved 2026-09-15): `frankish-kingdom`, `carolingian-empire`, `kingdom-of-wessex`, `northumbria`, `aquitaine`, `duchy-of-normandy`, `county-of-flanders`, `north-sea-empire`, `byzantine-empire`, `empire-of-nicaea`, `latin-empire`, `despotate-of-epirus`, `kingdom-of-asturias`, `caliphate-of-cordoba`, `umayyad-caliphate` and `almohad-caliphate`. Polities without heraldry get an attested emblem, with a caption saying plainly that they bore no arms. **BATCH 4a SHIPPED 2026-09-15, night (owner away): 36 of 54 done.**
   - `grand-duchy-of-lithuania`: map of the 13th–15th centuries; Vytautas's equestrian seal.
   - `kalmar-union`: a legible map of 1397–1523 replaces an unlabelled locator; union arms after Eric of Pomerania's seal.
   - `kievan-rus`: English-language map; a coin of Volodymyr the Great, captioned that the realm bore no arms.
   - `principality-of-serbia`: 1355 relief map; the Despot's arms from the Prague Richental manuscript, cropped to the heading and shield.

   **BATCH 4b SHIPPED 2026-09-15, night (owner away): 39 of 54 done.**
   - `vandal-kingdom`: a bold 2014 reconstruction map; Hilderic's silver coin from Carthage.
   - `mongol-empire`: Herrmann's 1935 plate of the khanates in 1290; the Met's iron paiza.
   - `sasanian-empire`: a 2020 map of 620, noted as overstating the east; a drachm of Khosrow II.

   The old washed-out maps are dropped.
   **BATCH 4c SHIPPED 2026-09-16 (`d5d79ea`, owner away): 44 of 54 done.**
   - `ottoman-empire`: Occitan map of 1307–1490; Mehmed II's tughra of 1468.
   - `seljuk-turks`: 1092 relief map; Tughril Beg's gold dinar with its tamgha.
   - `sultanate-of-rum`: Italian map of 1100–1240; Kaykhusraw II's sun-and-lion dirham.
   - `ayyubid-sultanate`: map of 1174–1193 after Riley-Smith; Saladin's Damascus dirham.
   - `rashidun-caliphate`: map kept; Arab-Sasanian drachm with "bism Allah".

   **Open question for the owner:** the Rashidun map's corner legend shows a modern black "Rashidun banner" and a "Sunni Islam" label. It could not be cropped out without losing map, and no legible alternative exists: the conquests map already on the article has Arabic labels and is dim.
   **Gate shipped (2026-09-15, night):** `check-images` fails on a kingdom-type location without an arms panel. The 18 still to do are in `scripts/lib/polity-arms-backlog.json`, a shrink-only list: a listed polity that gains a panel must leave the list. No separate no-heraldry allowlist was needed, because those polities carry an emblem in the same panel.
   **BATCH 4e SHIPPED 2026-09-16: 49 of 54 done.** `pechenegs` (map of about 1030; a grave axe), `cumans` (thirteenth-century map; a stone burial figure), `principality-of-achaea` (Greece in 1278; the Villehardouin arms, attested by Geoffrey's seal), `kingdom-of-east-anglia` (map kept; a penny of King Edmund, with the three-crown arms noted as post-medieval) and `kingdom-of-york` (Britain about 886; the St Peter penny moved from the main image to the arms panel). Old photos and miniatures moved to the sections that discuss them.
   **BATCH 4d SHIPPED 2026-09-16: 0d COMPLETE, 54 of 54.** `abbasid-caliphate` (map of about 850 promoted from its own section slot; Harun al-Rashid's purely epigraphic gold dinar of 787–8; the Samarra photo moves to "Losing power"), `first-bulgarian-empire` (map of about 896; the lead seal of Peter I and Irene Lekapene, sealed in the Byzantine manner; the Madara Rider moves to "The khans and the wars"), `ostrogothic-kingdom` (a legible 523 map replaces one where the sea and the Vandal kingdom shared a colour; Theodoric's monogram carved on a Ravenna capital), `lombard-league` (member cities of both leagues, English title and legend; the 1171 Porta Romana militia frieze) and `mecklenburg` (locator of 1250; the bull's head quartered with Rostock's griffin from Grünenberg's armorial of about 1483, cropped to Mecklenburg's own achievement — the page also shows Silesia's).
   `scripts/lib/polity-arms-backlog.json` is now empty, so the gate covers every kingdom-type article with no exceptions.

   **POLITY DATE SPANS SHIPPED 2026-09-16.** `LocationHero` shows "Active <year>–<endYear>" where an end is recorded and "Established <year>" where it is not, and the polity-type list it keys off now matches the arms gate's (a Sultanate, Duchy or Khanate had shown no dates at all). 31 polities carry an end year, researched against two sources each; 20 are deliberately unset because the realm ended in 1707–1946, is a continuing state, or the tempting medieval date is not an end (Castile 1230, Flanders 1384, Hungary, Navarre 1512). Owner decisions: Epirus 1449 (matching our timeline), the four articles whose `year` held a range split into clean start and end (Kievan Rus' 882–1240, Asturias 718–924, Córdoba 929–1031, North Sea Empire 1016–1035), and Aquitaine restarted at 507. The apply asserts that no polity with an end year still has a range in its start year. Several of these lead with a non-map image that becomes a section image.
   - `lombard-league`
   - `mecklenburg`
   - `ostrogothic-kingdom`
   - `abbasid-caliphate`
   - `first-bulgarian-empire`
   - `pechenegs`
   - `cumans`
   - `principality-of-achaea`
   - `kingdom-of-east-anglia`
   - `kingdom-of-york`
0e. **OWNER REQUEST 2026-09-15 — CIVILIZATIONS, a new first-class archive
   category. The largest expansion the project has had.** The owner's full spec is
   **Appendix C** at the end of this file (3,429 lines;
   about 150 peoples, c. 300–1500, plus an archive-wide knowledge-graph audit).
   Read it in full before planning. Existing `pechenegs` and `cumans` are
   Polity-typed locations that already behave like people pages: resolve them,
   don't duplicate them. Non-negotiables:
   civilization ≠ state (Ostrogoths ≠ Ostrogothic Kingdom), flexible entity kinds
   (Vikings are a phenomenon, not an ethnicity), audit first and never duplicate,
   no thin pages for obscure groups, no backward projection of modern national
   identities. **Recommended order:** Phase 0, architecture (collection, route,
   index, search, sitemap, link type, relationship fields) plus an audit report,
   no content; Phase 1, a vertical slice proving the model (Goths, Visigoths,
   Ostrogoths, Norse, Vikings); then region by region, each batch proposed first.
1. **Stub backlog — 146 articles under 2,000 chars (76 under 1,000), measured 2026-09-16.** By collection: locations 81, houses 34, events 15, characters 7, artifacts 7, orders 2; 60 of 104 events carry no timeline. Worst by inbound links: `charlemagne-crowned` (11 links, 1,334 chars), `treaty-of-edinburgh-northampton` (10), `ferdinand-iii-of-castile` (9), `siege-of-kyiv` (8), `almoravid-dynasty` (7), `scone` (6, 679 chars), `oslo` (5, 253 chars). The older count follows. **228 articles under 2,000 chars, 134 with no timeline.**
   Median article is 3,044. This is now the highest-value content work because
   the site is indexed: a 1,800-character page cannot rank for anything, and the
   worst offenders are famous battles people actually search. By inbound links:
   `battle-of-las-navas-de-tolosa` (29 links, 1,889 chars), `battle-of-bannockburn`
   (26), `battle-of-bouvines` (25), `battle-of-kosovo` (25), `battle-of-grunwald`
   (23), `wars-of-scottish-independence` (21), `battle-of-crecy` (21), `rouen`
   (13 links, **911 chars**), `battle-of-svolder` (11 links, **941 chars**).
   Re-run `node scripts/audit-stubs.mjs` for the current list.
2. **Template prose — 4 articles left on the shrink-only baseline (measured 2026-09-16), down from 86 when it was found. Most were rewritten by the stub and batch work since. The original entry follows. 86 articles carry 24 name-substituted generator
   templates.** Found 2026-09-14. The content gate compared paragraphs verbatim,
   and a template that writes each article's own name into the sentence makes
   every copy unique, so none of it was ever flagged. Masking the subject's name
   exposed 71 people, 9 locations, 3 events and 3 artifacts. The two largest
   templates reach 52 articles ("Later saga, saintly, or national traditions often
   amplified §'s reputation…") and 51 ("§'s early life belonged to the medieval
   Scandinavian world…"); "As King of X, § had to turn dynastic claim into
   workable authority…" runs through the Danish, Norwegian and Swedish lists;
   nine battlefield locations share "§ matters historically through §…". **Live
   violations of the Specificity Test, which is non-negotiable.**
   **The gate now catches it** (`scripts/lib/template-prose.mjs`, inside
   `check:content-quality`): a NEW template, or a known one spreading to another
   article, hard-fails. The 86 are a tracked backlog in
   `scripts/lib/template-prose-baseline.json`, and it is **shrink-only** — a
   rewritten article fails the gate until `node scripts/baseline-template-prose.mjs`
   records the fix, and that script refuses to add anything. **Overlaps heavily
   with item 1**: most of these are also stubs, so rewrite them together, not twice.
3. **Five person-image violations that CANNOT be fixed by searching harder.**
   `al-adil-ii`, `al-mansur-ali`, `baraka-khan`, `yusuf-ibn-tashfin`,
   `muhammad-al-nasir` all lead with aniconic Islamic gold coinage. No depiction
   of any of them exists on Commons — the one file titled "محمد الناصر" is
   calligraphy of the name. **Owner decided 2026-09-15: a documented associated monument
   leads, its caption's first sentence saying it is not a likeness (rule in
   CLAUDE.md); the coins move to section images.** To do: choose and verify a
   monument for each of the five. `kerbogha` (was a MAP) and `qutuz` were fixed 2026-09-08.
   **3 of 5 DONE 2026-09-15 (owner away):** `yusuf-ibn-tashfin` now leads with the tomb traditionally held to be his in Marrakesh, `muhammad-al-nasir` with Bab Mahrouk in Fez (built 1204, 1913 autochrome) and `baraka-khan` with the burial chamber of the Zahiriyya in Damascus, where he was buried in 1280. Each coin moved to a section image. The same ship corrected Baraka's death place from Damascus to Kerak (Wikipedia; Zahiriyya article for the burial). **`al-mansur-ali` and `al-adil-ii` remain.** No tomb or building is documented for either. Objects were made for al-Adil II (a Louvre basin, an incense burner), but the rule allows monuments only, so that is an owner question.
4. **~14 Scandinavian/English pennies still need individual eyes** — some carry
   a crude bust and pass, some carry only a cross and a legend. The ~11 Byzantine
   solidi and ~7 royal seals pass and need no work.
5. **Three artifacts are still one generator template** — `lindisfarne-gospels`,
   `codex-gigas` and `royal-frankish-annals` share six name-substituted sentences
   ("§ is a material or textual object whose physical survival helps historians
   read…"). Part of item 2, listed separately because artifacts are only nine
   articles and a third of them are affected. The Shroud of Turin carried the same
   template and was rewritten 2026-09-14. **The "four popes with no summary"
   entry that used to sit here was a misread** — see the update block above.
6. **Sword of St. Maurice (Turin)** — one article, the only unbuilt item from the
   closed Track D. Worth doing because the brief warns it is confused with the
   Reichsschwert, which the archive already has.
7. ✅ **Done 2026-09-15 (step 3, part 2).** The user store now logs its backend at startup. In production (`NODE_ENV=production` or on Vercel) with no Upstash or Supabase variables, it logs an error and every account operation fails with the reason. It deliberately does not throw at import, because every page runs through the same function. `/api/health` now reports `userStore: { backend, ok, ms }` from a read-only round trip (Upstash PING, or a one-row Supabase select), and returns 503 when degraded. The original item follows. **Auth storage hardening** — refuse the JSON-file backend under
   `NODE_ENV=production` and log the selected backend at startup, so a missing
   Upstash variable fails loudly at deploy instead of at the first user's signup.
   ~30 minutes.
8. **Track B M6-M10** (W&A classification, index and relationship repairs, then
   an approval gate). Never started. B M5 remains parked by the owner.

## Open — small, ready to run

### INSIGHTS — three additions (queued 2026-09-11). **#1 SHIPPED 2026-09-15; #2 and #3 wait on the owner**

**#1 is done.** `/api/insights` now returns `accounts: { available, total, daily }`. The data comes from each account's `createdAt` in the user store (`listAccountCreatedDates`), bucketed with the same `day()` and `lastDays()` as views. A user-store failure reports the series as unavailable and never blanks the views. The page shows the total and a daily chart. **#2 (favourites) SHIPPED 2026-09-15, night (owner away).** The owner chose to chart favourites by period.
- **How it works:** every favourite already stores `createdAt`, so the series is read from the favourites themselves (`listFavoriteDates` in the user store, `favoritesByPeriod` in analytics). No new counter was added. Like the accounts series, it answers retroactively and cannot drift.
- **What the page shows:** a "favourites added" stat, a per-day chart and a "Most favourited in this period" table.
- **Limits, stated under the chart:** a favourite that was later removed no longer counts, and any favourite saved without a date is reported as undated.
- **Privacy:** the response carries article paths and counts only, and a unit test checks that no user id or email leaks. **#3 needs Search Console data** and is still an open question.

### INSIGHTS — three additions (queued 2026-09-11, NOT started)

Owner request. Two are straightforward; the third needs its premise corrected
before anyone builds it.

**1. Accounts created in the selected period.** Read it from the user store,
where `created_at` already exists (`server/user-store.js:100`) — **not** from a
new Redis counter. A counter would only start counting the day it shipped and
could never answer for last month; the column answers retroactively and cannot
drift from the accounts it describes. Same day-bucketing as the views series so
the two charts line up.

**2. Most-favourited articles.** Favourites live per user as a `favorites` array
(`server/user-store.js:99`), so the count is a scan-and-tally across users —
fine at this scale, and worth revisiting only if the user table grows a lot.

**The honest catch, which the UI must not hide: this is an ALL-TIME count, and
the period selector cannot apply to it.** Nothing records *when* a favourite was
added, so "most favourited in the last 30 days" is unanswerable from the data we
hold. Two options, and they should be a deliberate choice rather than a silent
one: label the card "all time" and leave the selector greyed for it, or start
writing timestamped favourite events and accept that the series begins empty.
**Do not quietly filter an all-time number by a date range it does not respect.**

**3. "Which pages should I index on Google next?" — the premise needs fixing
first.** Every article is already in `sitemap.xml`: `scripts/prerender.mjs`
writes all 817 pages. There is no queue of unsubmitted URLs, so the useful
question is not *what to index* but **which existing pages are worth
strengthening and promoting** because they are closest to earning traffic.

**And our own analytics cannot answer even that on their own.** `stats:paths`
records what people who ALREADY FOUND US read. It says nothing about what people
searched for and did not find, which is precisely the signal the question needs.
Ranking our best-read pages and calling them "what to index next" would be
circular — it recommends the pages that are already working.

**The data that actually answers it is Google Search Console impressions:** the
queries where we appear, the position we hold, and the click-through we get.
A page at position 11–20 with hundreds of impressions is the highest-value work
in the archive — it is one improvement away from page one — and nothing in our
own store can identify it.

So the real shape of this task is:

- **First, get Search Console data in.** Either export it by hand for a first
  pass, or wire the API. **Appendix E** is the only place it is currently
  mentioned; there is no integration.
- **Then the recommendation is a genuine ranking**, and a defensible one:
  impressions × position-gap, cross-referenced with what the archive already
  covers well enough to improve cheaply.
- **Until then, a useful interim exists from internal data alone** — and it
  should be labelled as the proxy it is: articles with many *inbound internal
  links* (they are already treated as important by the archive's own structure)
  but few views. That gap is a reasonable, if unproven, indicator of a page
  search has not yet found.

**Do not ship the interim as though it were the real answer.** Recommending work
from the wrong signal is worse than recommending none, because it is acted on.


### ✅ Insights chart tooltip — SHIPPED 2026-09-15 (owner away)

Each daily bar now shows a styled readout at once on hover, and on keyboard or touch focus (`.insights-tip`, pure CSS). Bars are focusable list items with their own `aria-label`, so `role="img"` is gone and nothing is mouse-only. The original request follows.

### Insights chart needs a REAL tooltip on the daily bars (queued 2026-09-09)

Owner request: hovering a yellow column should show that day's visit count.

**Half of this already exists, which is why it reads as broken rather than
missing.** `client/src/pages/InsightsPage.jsx:33` puts a native `title` on each
`.insights-bar-slot` — `"2026-09-09: 12 views"`. The browser tooltip is real but
useless in practice: it takes a second or two of stillness to appear, it is
unstyled OS chrome that looks nothing like the archive, it cannot be positioned,
and it never appears on touch at all.

**Replace it with a proper tooltip:** appears immediately on hover, styled like
the rest of the admin views, showing the date and the view count. Keyboard
focus should show it too — the bars are currently not focusable, so that means
making each slot focusable or providing an equivalent readout.

**Accessibility note, worth handling in the same pass:** the chart container
carries `role="img"` with an `aria-label` summarising the whole thing, which
deliberately hides the individual bars from screen readers. If per-bar
information becomes interactive, that decision needs revisiting — either drop
`role="img"` and label each bar, or keep it and provide the numbers in a table
beneath. Do not leave a control that only a mouse can reach.

Small, self-contained, no data changes — the daily series is already fetched
from `/api/insights?days=N`.


### TOPIC PAGE LAYOUT — images beside the text (queued 2026-09-09, NOT started)

Owner-reported from the live site, with screenshots. Two changes, both on topic
pages (`/topics/<slug>`, e.g. `/topics/viking-age`).

**1. The topic header becomes two columns.** Today the introduction runs down
the left with the whole right-hand side empty. It should be: **image on the
left, below the title; text on the right.** For the Viking Age that means an
image depicting the period, not a generic one.

**2. Every entry in the topic's own lists gets a thumbnail.** Under Events,
People and Places the entries are currently title + text only. Each should
instead be a container with **a small square image on the left and the text on
the right** — the owner's words for the Battle of Hastings entry: "instead of
the text only, it should have a container with an image on the left and the text
on the right."

**The image must be no taller than the container.** That is a hard constraint,
stated explicitly: the thumbnail is sized to the row, never the other way
around.

Note the two directions differ deliberately — the topic HEADER puts the image
left of the intro text, and each LIST ROW puts a square thumbnail left of its
summary. Both end up image-left; do not "simplify" them into one component
without checking they still read correctly at both sizes.

**Before building, settle these — they are why this is not a five-minute job:**

- **Where does each thumbnail come from?** Entries already carry images in
  `history.json` for some collections and not others. Decide the fallback for an
  entry with no image: a neutral placeholder, or omit the image column for that
  row and let the text run full width. **Do not invent an image** to fill a gap,
  and do not reuse an unrelated one.
- **AI images still disclose themselves in the caption** — the existing rule
  applies unchanged, and a thumbnail with no visible caption needs an answer for
  where that disclosure lives (alt text is not disclosure).
- **Mobile.** Two columns must collapse sensibly on a phone; a square thumbnail
  beside two lines of text is fine, a 50/50 split is not.
- **Weight.** 61 entries on the Viking Age page alone means 61 thumbnails —
  lazy-load, size them properly, and check the page does not balloon. The
  `check:images` gate and the 600 KB ceiling from the OG work are the reference
  points.
- Prerendered pages must still pass `npm run check:content-quality` and
  `npm run check:images`.


- **DONE 2026-09-09 — the three topic pages are submitted and Search Console is
  clean.** `/topics`, `/topics/viking-age` and `/topics/crusades` were indexed on
  request once the daily quota reset, and the owner reports **all green**: no
  Soft 404, no Blocked by robots.txt, no Server error, no Redirect error.

  That closes the soft-404 saga end to end. The cause was `Disallow: /api/` in
  robots.txt — Googlebot obeys robots.txt for RENDER SUBRESOURCES, so every hub
  page rendered empty for the crawler while looking perfect in Chrome, which
  ignores robots.txt entirely. `X-Robots-Tag: noindex` is the tool for "fetch
  this but do not index it"; robots.txt cannot express that distinction.

  Indexing itself takes days to weeks — no action, just patience.


- **Auth storage hardening — small, and it makes "is sign-in stable?" answerable
  in one request.** The user store falls back through Upstash → Supabase → a local
  JSON file. That ordering is right for development and silent in production: if
  the Upstash variables were ever absent or misnamed in the Production
  environment, the store would quietly select the file backend and fail on the
  first write, which is exactly the original outage wearing a different hat.
  Two changes: (1) **refuse the file backend when `NODE_ENV=production`** and log
  which backend was selected at startup, so a misconfiguration fails loudly and
  immediately instead of at the first user's signup; (2) a **read-only
  `/api/health` endpoint** reporting the active backend and whether a round-trip
  to it succeeds — no account data, no secrets. Turns stability from a thing to be
  believed into a thing to be checked.

- **Sword of St. Maurice (Turin)** — the single unbuilt item from the closed
  Track D. Worth writing because the brief explicitly warns it is confused with
  the **Reichsschwert**, which the archive already has: they are two separate
  objects, and having one without the other is exactly the situation that breeds
  the confusion. Follow the named-artifact structure and the attribution-honesty
  rule — the Turin sword's association with St Maurice is traditional, not
  documented. One article.

- **The stub backlog: 233 articles under 2,000 characters, 139 with no timeline.**
  Measured by `scripts/audit-stubs.mjs` (new 2026-09-07), which ranks by inbound
  links first — a stub nobody links to is a gap, a stub sixty articles point at is
  a broken promise. Median article is 2,963 chars; these are the older base
  standard showing against the current one.
  **Batch 1 done** (2026-09-07): `third-crusade` 1,846→5,036, `al-andalus`
  242→6,305 (the worst in the archive, and the anchor of the whole Reconquista
  corpus), `battle-of-stamford-bridge` 1,871→4,018, `first-crusade-called`
  1,182→4,069, `battle-of-stiklestad` 845→3,572. All five gained timelines.
  **Batch 2 candidates**, by the same ranking: `battle-of-las-navas-de-tolosa`,
  `battle-of-kosovo`, `battle-of-bannockburn`, `battle-of-bouvines`,
  `battle-of-grunwald`, `wars-of-scottish-independence`, `battle-of-crecy`,
  `battle-of-legnano`, `rouen`, `battle-of-svolder`, `charlemagne-crowned`.
  Re-run `node scripts/audit-stubs.mjs` for the current list.

- **AUDIT OWED — person articles whose main image does not depict a person.**
  Eric Bloodaxe led with a coin showing ERIC REX and a sword and no portrait
  (fixed 2026-09-07, and the rule is now in CLAUDE.md). **Nothing has checked
  whether others do the same.** Coins carrying a portrait bust are fine — the
  Byzantine solidi all show a face — so this cannot be automated on the filename
  alone and needs eyes on each candidate.
  **The candidate list is 33 characters** (primary-image filenames matching
  `coin|penny|denier|dinar|seal|map|charter`). Two verdicts already in:
  `theodosius-iii` **passes** — its solidus shows a crowned facing bust, as every
  Byzantine coin in the M8b batch does — and `eric-bloodaxe` failed and is fixed.
  Likely failures, the coinage being text-only by religious convention: `qutuz`,
  `al-adil-ii`, `al-mansur-ali`, `baraka-khan`, `yusuf-ibn-tashfin`,
  `muhammad-al-nasir`. Likely passes: the seals of `vytautas`, `jadwiga-of-poland`,
  `robert-ii-of-scotland`, `john-balliol` and `wladyslaw-iii-of-poland`, which show
  enthroned or equestrian figures. **`kilij-arslan-i` — the certain failure, whose
  primary image was a *locator map* — was FIXED in M13** (2026-09-07): it now uses
  an 1872 Katzler engraving that depicts him, and the map became the primary image
  of the new `sultanate-of-rum` article, which is where it belonged. **The method
  that fixed it is the method for the rest**: when no contemporary depiction exists,
  a later illustration that shows the person beats a map, a coin or a building, and
  CLAUDE.md already permits it provided the caption is honest about what it is.
  Khalid ibn al-Walid was resolved the same way in the same milestone, on a 1935
  drawing. Try that before deferring any of the six above.
  The Scandinavian pennies (`sweyn-forkbeard`, `magnus-the-good`, `olof-skotkonung`,
  `anund-jacob`, `guthrum`, `olaf-guthfrithson`, and the Danish and Swedish series)
  need looking at one by one: some carry crude busts and pass, some carry a cross
  and a legend and do not.

- **The image rule's systematic exclusion of non-Latin commanders has a partial
  answer, found in M13** (2026-09-07). Six Track A commanders were deferred for
  want of any image, and all six were non-Latin — the pattern flagged for the owner
  under "Blocked on the user" below. **Khalid ibn al-Walid, who would have been the
  seventh, was not deferred**, because a 1935 line drawing from an illustrated
  Arabic history depicts him and CLAUDE.md permits later artwork with an honest
  caption. Nothing about the rule needed changing; what needed changing was how far
  the search went. **Before the owner's decision is even needed, re-search the six**
  (Vitiges, Shahrbaraz, Sergius, Bonus, Maslama, Kontostephanos) in later and
  non-European illustrated traditions — nineteenth- and twentieth-century book
  illustration, Ottoman and Persian manuscript painting, national-museum
  commissions — rather than in Commons categories alone. Two or three may be
  recoverable. That shrinks the decision below rather than answering it.

- **Template-filler stubs found by the M14 orphan pass.** Linking an article makes
  it more visible, not better, and four of the sixteen orphans linked in M14 are
  thin. **`shroud-of-turin` is the worst**: its second section opens "Shroud of
  Turin is a material or textual object whose physical survival helps historians
  read medieval politics, belief, art, or memory", which is a template sentence
  with the title substituted in and says nothing. **`pope-clement-v`,
  `pope-gregory-ix`, `pope-john-xxii` and `pope-eugenius-iii` have no `summary` at
  all.** These belong with the stub-rewrite batches above; the popes in particular
  are now reachable from the Templars, the Teutonic Order and Bernard of
  Clairvaux, so readers will actually arrive at them.

### CRUSADES BATTLE ARCHIVE — full audit and expansion (queued 2026-09-10, NOT started)

**Queued by the owner. Large — treat as a track, not a task.** The trigger was
**Montgisard (1177) being absent entirely**, but Montgisard is the symptom. The
brief is to audit the whole crusading movement and leave the archive
substantially complete.

**The organising principle the archive currently gets wrong: numbered Crusades
are not the unit of history.** Montgisard fell through because it sits *between*
numbered expeditions — so a scheme built around "First … Ninth" has a structural
blind spot exactly where the Crusader States did most of their fighting. The
same blind spot hides the Baltic, Albigensian, Iberian, Hussite and anti-Ottoman
theatres. Fix the principle, not just the gap.

**M0 — AUDIT FIRST. Write nothing until this is done.** Ship the working list as
`CRUSADES_AUDIT.md` (per-feature doc, deleted when the track closes). Five
buckets, every crusading-related battle and siege already in the archive placed
in one:

1. exists and adequate
2. exists, needs enrichment
3. exists, metadata/relationships wrong
4. missing, must be created
5. borderline — deliberately NOT getting a standalone article, with the reason

Check alternate spellings, transliterations and campaign labels before declaring
anything missing (La Forbie / Hiribya, Lake Peipus / the Ice, Grunwald /
Tannenberg / Žalgiris). **A duplicate created because the audit was skimped is
worse than the gap it was meant to fill.**

**M1 — Levant, 1095–1192.** First Crusade through Third, plus the inter-crusade
warfare of the Crusader States: Nicaea, Dorylaeum, Antioch (siege and battle),
Jerusalem 1099, Ascalon, Harran, the Ramla engagements, Field of Blood, Azaz,
Damascus 1148, Inab, **Montgisard**, Marj Ayyun, Al-Fule, Cresson, Hattin,
Jerusalem 1187, Acre 1189–91, Arsuf, Jaffa.

**M2 — Levant, 1198–1291, and the Fourth Crusade.** Zara, Constantinople 1203
and **the 1204 siege and sack (major-event treatment)**, the Latin Empire's
first clashes, Damietta 1218–19 and 1249, La Forbie, Mansurah 1250, Fariskur,
Tunis 1270, Tripoli 1289, **Acre 1291**.

**M3 — Northern / Baltic.** Ümera, Viljandi, Saule, Lake Peipus, Durbe, Karuse,
Aizkraukle, Voplaukis, Medininkai, Strėva, Grunwald 1410, Wilkomierz. Vorskla
only if its crusading context genuinely justifies it. **Nationalist readings of
Baltic warfare are a named hazard here** — Soviet, Russian, German, Polish and
Lithuanian traditions all bend these battles.

**M4 — Albigensian and Iberian.** Béziers, Carcassonne, Muret, Toulouse,
Avignon 1226. Then Lisbon 1147 and Las Navas de Tolosa 1212. **Do not tag the
Reconquista wholesale as crusade** — only papally sanctioned campaigns, and say
so in the article where scholarship disputes it.

**M5 — Later crusading.** Nicopolis 1396, Varna 1444, and the Hussite crusades:
Vítkov Hill, Německý Brod, Aussig, Tachov, Domažlice, and Lipany **with the
nuance that it was not crusaders-versus-Hussites**. The Hussite Wars are not
simply "the Crusades" and the archive must not imply it.

**M6 — Discoverability sweep.** Indexes, Crusade filters, century/region/realm/
campaign filters, search, related-content, alternate-name routing. **A valid
article nobody can reach from the archive UI is an unfinished one.**

**M7 — Permanent rules.** Fold the standard into `CLAUDE.md` /
`CONTENT_GUIDELINES.md` so the next content session inherits it: all theatres,
inter-crusade battles included, audit-before-create, full rich-article standard
(no stubs), disputed crusading status stated rather than silently resolved.

**Definition of done for every milestone — wiring is NOT a later milestone.**
The Loudoun Hill entry above says the second half is the one that gets skipped;
this track is large enough that deferring it guarantees it. Each batch ships
with: internal links out to rulers, commanders, houses, realms, locations,
military orders, weapons, armour, castles, campaigns and related battles; the
**reverse** links added to those articles; correct metadata and multi-category
taxonomy (Grunwald is Polish-Lithuanian-Teutonic *and* Northern Crusades *and*
15th century); and the full article structure — overview, background, opposing
forces, terrain, narrative, tactics, weapons and armour, outcome, aftermath,
significance, myths.

**Standing constraints.** Never present medieval army figures as fact. Separate
attested fact, interpretation, chronicler tradition and dispute. No cinema, no
invented detail. Avoid flat "Christian vs Muslim" framing where the alliances
were not. Do not sanitise massacres and sacks; do not relish them either.
Images must match the century — a 1099 Frankish knight is not a 1250 knight and
neither is a 1410 Teutonic one; **keep the placeholder rather than use wrong
armour.**

**Sanity check before declaring the track done** — strong articles must exist
for: Dorylaeum 1097 · Antioch 1098 · Jerusalem 1099 · Ascalon 1099 · Field of
Blood 1119 · Azaz 1125 · Damascus 1148 · Inab 1149 · **Montgisard 1177** ·
Hattin 1187 · Jerusalem 1187 · Acre 1189–91 · Arsuf 1191 · Jaffa 1192 ·
Constantinople 1204 · Las Navas de Tolosa 1212 · Muret 1213 · Damietta 1218–19 ·
Saule 1236 · Lake Peipus 1242 · La Forbie 1244 · Mansurah 1250 · Fariskur 1250 ·
Durbe 1260 · Acre 1291 · Nicopolis 1396 · Grunwald 1410 · Vítkov Hill 1420 ·
Domažlice 1431 · Varna 1444. **A minimum, not the scope.**

### FIRST BARONS’ WAR (1215–1217) — full cluster (queued 2026-09-10, NOT started)

**Queued by the owner. A cluster, not an article.** The war is absent entirely,
which is a real hole in the medieval England archive. Shipping only the war page
would repeat the mistake the Crusades track is fixing: **a conflict article whose
constituent events do not exist is a table of contents for a book nobody wrote.**

**M0 — AUDIT FIRST.** People (John, Henry III, William Marshal, Louis VIII,
Philip II, Innocent III, Hubert de Burgh, Robert FitzWalter, Saer de Quincy,
Ranulf de Blondeville, Falkes de Bréauté, William Longespée, Thomas of Perche,
Eustace the Monk, Willikin of the Weald, Alexander II), houses (Plantagenet,
Capetian), realms, locations (London, Runnymede, Rochester, Dover, Lincoln,
Sandwich, Newark, Gloucester, Mountsorrel, Northampton, Winchester, Windsor) and
existing events — **above all Magna Carta, which almost certainly already
exists.** Report EXISTS / NEEDS UPDATE / MISSING before writing anything.

**M1 — The war article + timeline.** `first-barons-war`. It must carry the
paradox rather than smoothing it: the war grew out of the confrontation that
produced Magna Carta, and **Magna Carta settled nothing** — neither side trusted
it, Innocent III annulled it as extracted under coercion, and the rebels then
invited a French prince to take the crown. Timeline spanning 1214 (Bouvines as
background) through September 1217.

**M2 — 1215.** Seizure of London (17 May), Runnymede — **connect the existing
Magna Carta article, do not duplicate it**, and keep the process distinct across
10/15/19 June rather than collapsing it into one day — and the **Siege of
Rochester** (Oct–Nov, John in personal command, mining, the pig-fat episode
**stated no further than the sources allow**).

**M3 — 1216.** John’s winter campaign (why the rebels felt endangered enough to
invite Louis), Louis’s landing in Kent (May), his proclamation in London, the
**first Siege of Dover** (Hubert de Burgh holds; Dover never falls), John’s death
at Newark (18 Oct), Henry III crowned at Gloucester (28 Oct) — **Westminster was
in Louis’s hands**, which is why Gloucester — and the reissue of Magna Carta as
a reconciliation instrument.

**M4 — 1217 and the settlement.** Second Siege of Dover (Malvoisin; English
Heritage calls it the **earliest recorded** trebuchet use in England — phrase it
as that, not as the first ever), Mountsorrel, **Battle of Lincoln (20 May)** —
Louis was NOT on the field, Perche killed, rebel leadership captured wholesale —
**Battle of Sandwich (24 Aug)**, naval, Hubert de Burgh against Eustace the Monk,
and the **Treaty of Lambeth** (alias Kingston, Sept 1217). **Be cautious with the
payment to Louis; sources and reconstructions differ — no false precision in
structured metadata.**

**M5 — People.** Create only to full standard; **no thin stubs to satisfy
backlinks.** Louis VIII needs the most care: King of France, Capetian, **claimant
to the English throne — and never a crowned King of England.** He must not appear
in any canonical list of English monarchs.

**M6 — Discoverability sweep.** Conflict index, filters, search aliases (First
Barons War / Barons War / Magna Carta war / Prince Louis invasion / French
invasion 1216 / Second Battle of Lincoln / Siege of Dover 1216 / Treaty of
Lambeth). **Hard requirement: "First Barons’ War" must never resolve to Simon de
Montfort’s Second Barons’ War.** If a Battle of Lincoln already exists,
disambiguate as Second Battle of Lincoln with 1217 aliased.

**M7 — Permanent rules + validation.** Two rules into `CLAUDE.md`: a **major-war
completeness rule** (adding a war means auditing and creating its battles,
sieges, treaties and turning points, not just the war page) and a
**conflict-event integrity rule** (every battle/siege/treaty links back to its
conflict, and every conflict exposes its major events). This track exists because
neither rule was written down.

**Definition of done per milestone**, as with the Crusades track: links out,
reverse links, taxonomy and full article depth ship WITH each batch.

**The nuance that must survive editing.** Magna Carta failed immediately. Louis
was a serious claimant holding London and much of the south with major English
barons behind him — not a raid. He was never crowned. John’s death was the
turning point: rebels who would depose John would not depose a nine-year-old.
Marshal led, but Hubert de Burgh and a wider coalition are not to be erased.
Dover never fell. Lincoln was the decisive land victory, Sandwich the naval one.
The war ended in negotiated reconciliation, not annihilation. **No nationalist
framing** — much of the English aristocracy fought for Louis, and loyalty in 1216
was dynastic, feudal and territorial rather than national. **Do not project
parliamentary constitutionalism back onto the 1215 barons.**

**Images: c.1215 only.** Mail hauberks and chausses, early great helms and nasal
helmets, kite-to-heater transition, straight knightly swords, crossbows, period
siege engines. **No plate, bascinets, sallets, brigandines or Gothic harness** —
a 1215 knight is not a 1415 one, and a placeholder beats wrong armour.

### HUNDRED YEARS’ WAR — completeness audit and expansion (queued 2026-09-10, NOT started)

**Queued by the owner. The third track of this shape, and that is now the more
important finding.** The trigger was the **Siege and Sack of Limoges (1370)**
being absent; Crusades was triggered by Montgisard; First Barons’ War by the
whole war. Three separate holes, one cause: **nothing in the project requires a
conflict’s constituent events to exist.** A war article can sit there looking
complete while its battles are missing, and no check anywhere notices.

**So write the rule ONCE, before the content work.** The First Barons’ War track
schedules it at its M7; it should be pulled forward and shared, not written three
times in three tracks that then disagree. Two rules into `CLAUDE.md`:

- **Major-conflict completeness** — never ship a war overview alone; audit its
  battles, sieges, naval actions, campaigns, treaties and commanders, and do an
  independent completeness pass beyond whatever list prompted the work.
- **Conflict classification** — an engagement may relate to several wars but
  keeps its historically correct PRIMARY one. Do not flatten overlapping
  medieval wars into a single label.

**M0 — AUDIT.** Four buckets (adequate / needs expansion / missing / below
threshold). **Search slugs, aliases, titles, relationships, timelines and person
and location articles — not just expected titles.** Crécy/Crecy, Winchelsea/Les
Espagnols sur Mer, Rouvray/Herrings, Limoges under four possible names.

**M1 — Limoges, and the main war article.** `siege-of-limoges` is canonical;
"Sack of Limoges", "Battle of Limoges", "Limoges 1370" are aliases. **The
massacre controversy gets its own substantial section.** Froissart’s ~3,000 dead
is a CLAIM, not a fact: give his account, his limitations, the documentary and
archaeological evidence, and the modern reassessment — **without over-correcting
into "nothing happened"** unless scholarship actually says so. Then audit the war
article itself: it must explain that this was **not 116 years of continuous
war** but phases separated by truces, treaties and dynastic crises.

**M2 — Edwardian phase, 1337-1360.** Sluys (naval, and NOT "permanent naval
supremacy"), Auberoche, Caen, Blanchetaque, **Crécy**, **Calais**, Poitiers,
Reims campaign, **Treaty of Brétigny**. Cadzand, Tournai, Saint-Omer, Rennes
judged against the threshold.

**M3 — Caroline phase, 1369-1389. Flagged as the likeliest hole.** Pontvallain,
**La Rochelle 1372** (naval — the battle that ruins the tidy "England ruled the
sea after Sluys" story), the La Rochelle siege separately, du Guesclin’s
reconquest, John of Gaunt’s 1373 chevauchée, Truce of Leulinghem.

**M4 — Henry V, 1415-1422.** **Harfleur**, the march to Calais, **Agincourt**,
Caen 1417, **Rouen 1418-19**, Montereau as a political turning point,
**Treaty of Troyes**, **Baugé** (English dominance after Agincourt was never
absolute), Meaux.

**M5 — Lancastrian war and Joan, 1422-1431.** Cravant, **Verneuil**, Montargis,
**Siege of Orléans**, **Herrings/Rouvray**, Jargeau, Meung, Beaugency,
**Patay**, coronation at Reims, Paris 1429, **Compiègne** — where **Joan was
captured by BURGUNDIAN troops, not the English**, an attribution the archive must
get right — then the trial and execution.

**M6 — French recovery to the end, 1431-1453.** Gerberoy, **Treaty of Arras**
(strategically enormous), Paris 1436, Truce of Tours, **Rouen 1449 — a DIFFERENT
event from Henry V’s siege, distinct slug and dates**, **Formigny**, Caen and
Cherbourg 1450, Bordeaux 1451, Talbot’s return 1452, **Castillon 1453**, and the
**surrender of Bordeaux in October** — Castillon did not end the war the same
afternoon.

**M7 — Cross-conflict, people, discoverability.** Auray stays Breton War of
Succession; Nájera and Montiel stay Castilian Civil War; Neville’s Cross stays
Second War of Scottish Independence; Roosebeke stays Flemish; Otterburn is not
Hundred Years’ War at all. **All cross-linked, none relabelled.** Then the people
audit (English, French, Burgundian, Castilian, Scottish), aliases, indexes,
filters, bidirectional links.

**M8 — Independent completeness pass and validation.** Ask the question the
owner asked: *what would a knowledgeable medievalist expect to find here and
still not?* Then build, typecheck, lint, content and image checks.

**The myths to refuse, recorded because they are the default in popular
writing.** The longbow did not make knights obsolete; arrows did not defeat all
plate; French commanders were not simply incompetent; English tactics were not
one unchanging system; France did not win by cannon alone; Castillon was not
"the first modern artillery battle" and did not retire the melee weapon; Sluys
did not confer permanent command of the sea; and the war did not end chivalry.

**Images track the DATE, not the war.** 116 years is several equipment worlds:
Crécy 1346 is mail and transitional plate with bascinets; Limoges 1370 is later
transitional harness; Agincourt 1415 is early full plate; Castillon 1453 is
mid-15th-century plate with sallets and organised artillery. **A 1346 warrior
must not be drawn as a 1453 one** — the single most likely image error here.

## SPIKE — how does the Iron Codex make money without a subscription? (queued 2026-09-11, NOT started)

**Research only. No code, no accounts, no spend.** Output is a written
recommendation with numbers attached, not an implementation.

**The owner's premise, and it is correct:** nobody will pay a subscription to
read medieval history when Wikipedia and a thousand other sites give the same
facts away. A paywall over freely substitutable content is a bad business and a
worse look for an archive whose whole character is openness.

**But the facts are not the asset, and that is the thing to keep hold of while
answering this.** Anyone can host the date of Agincourt. What this project has
that is genuinely hard to reproduce is three things:

1. **The editorial standard and the pipeline that enforces it.** Hard-failing
   validators for filler prose, image provenance, reciprocal linking, succession
   integrity and army-strength confidence. That is a *method*, and methods are
   sellable in a way that facts are not.
2. **The structured relational data.** Succession chains with scope handling,
   battle continuity links, strength figures carrying an explicit confidence
   grade, an entity-link graph across 817 articles, house↔person bidirectional
   navigation. Wikipedia has prose and infoboxes; it does not have this shape.
3. **Images with verified provenance** — caption, creator, date, source, licence
   and a reliability note on every single one, audited by script.

**THE HARD CONSTRAINT, TO BE FACED FIRST: advertising revenue is a function of
traffic, and the traffic is not there yet.** **Appendix D**'s own forecast puts
first real traffic at **months 4–6**; indexing is still climbing and impressions
are near zero. Before evaluating any ad network, do the arithmetic:

- History/education display RPMs run roughly **$5–20 per 1,000 pageviews**.
- Network floors: AdSense none, Ezoic ~10k/month, Mediavine 50k sessions,
  Raptive 100k pageviews.
- So 10k pageviews a month is **$50–150**. Write that number down before anyone
  designs an ad slot, because it is the whole argument.

**Note the standing rule this request lifts:** **Appendix D** says "No
third-party advertising will be placed on the Codex unless monetisation is
separately requested." This is that request — so ads are now on the table, but
as a *decision with a cost*, not a default.

### What to evaluate

**Traffic-gated (worth little until traffic exists):**

- **Display advertising.** Cheapest to implement, and it charges the site's
  character as rent. An archive that refuses filler prose and audits every
  caption, then wraps it in programmatic ad units, has spent something real.
  Evaluate reader-respecting formats and a floor below which it is not worth it.
- **Affiliate links — books and reproductions.** The natural fit, because the
  archive already photographs and credits makers (Albion, Wulflund, Darksword)
  and cites museum catalogues. **And the trap is right here, so name it before
  building anything:** `CLAUDE.md` requires judging the object and not the
  seller, and forbids repeating a maker's marketing as evidence. An affiliate
  relationship creates a standing incentive to feature the makers who pay. If
  that corrodes the image standard, it has eaten the asset to rent the audience.
  Any affiliate scheme needs a written firewall between editorial selection and
  commercial relationship, or it should not happen.

**Not traffic-gated (these work at any scale, which is why they deserve the most
attention in this spike):**

- **Licensing the structured dataset.** The succession chains, continuity links,
  graded strength figures and entity graph, as a dataset or an API. Plausible
  buyers: game and TTRPG developers, educational publishers, museum digital
  teams, anyone building historically-grounded content who does not want to
  rebuild this. **This is the strongest hypothesis to test first** — it monetises
  the part nobody else has, rather than the part everyone has.
- **A book, or books, compiled from the archive.** The quality bar makes this
  more credible than most "blog to book" attempts, and it sells to the audience
  the archive attracts rather than taxing them for reading.
- **Patronage** (Ko-fi, Patreon, "support the archive"). Voluntary, keeps
  everything free, and is the model that fits an archive's character best. Low
  ceiling; near-zero cost to try.
- **Digital-humanities and heritage grants.** A free, rigorously sourced,
  properly cited medieval archive is exactly what several funds exist for. Slow,
  and non-dilutive in a way nothing else here is.
- **Selling the method, not the archive** — the validator suite and editorial
  pipeline as a template for other reference projects. Meta, but it is the part
  that took the most work.
- **AI training-data licensing.** It should be listed because it is real money
  for exactly this kind of clean structured corpus, and it should be listed with
  its ethics attached: much of the underlying material is CC/PD from Commons and
  Wikipedia, so what would be licensed is the curation and structure, not the
  facts — and the owner may simply not want it. A decision to be taken
  deliberately rather than stumbled into.

### How to finish the spike

Produce a written comparison with, for each option: **realistic revenue at
today's traffic and at 10× today's traffic**, effort to implement, and — the
column that decides it — **what it costs the archive's character**. Recommend
one to try first and one to rule out permanently.

**The decision rule to apply throughout:** the editorial standards are the
product. Any option that requires softening them is not a monetisation strategy,
it is a slow liquidation.


## Blocked on the user

- ~~**DECISION NEEDED — the image rule is systematically deferring non-Christian
  and non-European commanders.**~~ **DECIDED 2026-09-15: option 2**, now a
  CLAUDE.md rule: when no depiction of any kind survives, a documented associated
  monument leads, and the caption's first sentence says it is not a likeness. It
  unblocks Vitiges, Shahrbaraz, Sergius and Bonus, Maslama, the five coin-led
  rulers, and the spouses with no depiction. History of the question follows.
  Raised 2026-09-07 after M6. Four consecutive
  Track A milestones have deferred a major figure for having no image in any
  form: **Vitiges** (M3, Ostrogothic king), **Shahrbaraz** (M4, Persian general
  and briefly shah), **Sergius and Bonus** (M5, the two men who actually ran the
  626 defence), and now **Maslama ibn Abd al-Malik** (M6), who commanded the
  largest attack on Constantinople before 1453.
  This is not bad luck. Portraits, coins, seals and manuscript depictions survive
  overwhelmingly for Christian European rulers, so a rule requiring an image of
  the person silently filters the archive toward one side of every frontier it
  covers. The rule itself is sound and should not be dropped — the alternative is
  initials cards and fabrications.
  **Three options, owner's call:**
  1. **Keep as is.** Consistent, and the deferrals are documented in prose and in
     this file. Accepts that Maslama has no page.
  2. **Allow a documented associated monument or place** as the primary image for
     such figures, captioned to say exactly what it is and that it is not a
     likeness (for Maslama: the Juma Mosque at Derbent, a city he took in 714).
     Narrow, honest, and it unblocks roughly this whole category.
  3. **Allow a "no likeness survives" article type** with a map or a contemporary
     object of the person's realm instead. Widest, and the one most likely to
     drift.
  Recommendation: **option 2**, restricted to figures with a securely documented
  place association and never for anyone whose likeness does survive.
  **Raised again 2026-09-14, and it is one decision, not two.** The same rule
  governs the five rulers under "Everything remaining" whose articles lead with a
  coin carrying no face — `al-adil-ii`, `al-mansur-ali`, `baraka-khan`,
  `yusuf-ibn-tashfin`, `muhammad-al-nasir` — and those are live violations of
  the "main image must depict the person" rule today, not deferrals.
  `muhammad-al-nasir`'s caption reads, in full, "Image associated with Muhammad
  al-Nasir."; `check:images` does not catch it. Option 2 would give, for
  example, Yusuf ibn Tashfin the city of Marrakesh, which he founded.
- ~~**CRITICAL — account creation has never worked in production**~~ **RESOLVED.**
  The owner confirmed a successful Google sign-in on the live site (2026-09-07),
  and the code confirms it: `server/user-store.js` is now a storage seam that
  selects a backend from the environment — **Upstash Redis** first
  (`UPSTASH_REDIS_REST_URL` + `UPSTASH_REDIS_REST_TOKEN`), then Supabase, then the
  JSON file for local development only. **Upstash is the backend in use.**
  It also replaced the read-all/mutate/write-all pattern with four targeted
  operations, so toggling one favourite no longer rewrites every account. Key
  layout is `user:<id>` for the account and `user:email:<email>` as an index
  holding only the id, so the two cannot disagree about anything but existence.
  **This entry sat here stale and was reported to the owner as open work.** The
  lesson is the same one Track D taught on the same day: a queue entry describing
  a defect is a claim with an expiry date, and it must be re-verified against the
  code before being repeated, not just re-read.
  **One residual fragility, not a bug:** if both remote backends' variables ever
  went missing in Production, the store would fall back to the JSON file and fail
  on write with no loud signal. See the hardening item under "Open" below.

- ~~Google sign-in: `AUTH_BASE_URL` not reaching the runtime~~ RESOLVED. Verified
  live: the redirect now carries
  `redirect_uri=https://www.theironcodex.org/api/auth/google/callback`, and Google
  returns no `redirect_uri_mismatch`, so the Console registration matches.
  Verified live 2026-09-06: `/api/auth/google` returns a 302 to Google carrying a
  correct `client_id` but `redirect_uri=http://localhost:4000/...`, which Google
  rejects as a mismatch. Response was a fresh cache MISS, so this is not stale
  caching. `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` ARE reaching the runtime.
  **Check that `AUTH_BASE_URL` is set for the _Production_ environment** (not only
  Preview/Development) and that the name has no typo, then redeploy. The apex
  308-redirects to www, so the value is `https://www.theironcodex.org` and the
  Google Console redirect URI must be
  `https://www.theironcodex.org/api/auth/google/callback`.
  Mitigated in code: the server now derives the origin from the request when
  `AUTH_BASE_URL` is absent instead of falling back to localhost, so sign-in works
  even if the variable never lands. Setting it is still preferred.

- ~~Google sign-in is not configured~~ (resolved: credentials now present). Kept
  for the setup steps. This was NOT a
  code defect — `server/index.js` redirects to `?error=google_not_configured`
  when `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` are absent, which is correct
  behaviour. To enable it:
  1. Google Cloud Console → APIs & Services → Credentials → **Create OAuth client
     ID** → type **Web application**.
  2. Add the **authorised redirect URI** — it must match exactly:
     `https://<your-domain>/api/auth/google/callback`
     (and `http://localhost:4000/api/auth/google/callback` for local work).
  3. Set in the deployment environment: `GOOGLE_CLIENT_ID`,
     `GOOGLE_CLIENT_SECRET`, and **`AUTH_BASE_URL`** = the site's public origin.
     `AUTH_BASE_URL` matters: the server builds the redirect URI from it, so if it
     is unset it defaults to `http://localhost:4000` and Google rejects the
     callback as a mismatch.
  4. `AUTH_SESSION_SECRET` is already required in production; confirm it is set.
  5. Redeploy — environment variables do not apply to an existing deployment.

  Documented in `.env.example` and `README.md`; the button styling is fixed
  independently (see git log).


- **Track B M9 approval gate** — not yet reached.

## Per-machine local setup

Nothing secret is required for this repo; content lives in
`server/data/history.json`. Node + npm only.

## Parked / backlog

- **Track B M5 — the W&A editorial rewrite** (owner, 2026-09-07). Batches 3–7 and
  the depth validator, held in place under Track B above with the shipped work and
  the sequencing lesson intact. The 40-of-42 depth failure it was fixing is still
  real and still unfixed; this is a scheduling decision, not a verdict on the
  audit.
- `longbow` vs `war-bow` overlap: `war-bow`'s own summary calls itself "an
  umbrella term ... including but not limited to the English longbow". Resolve in
  Track B M6 (merge, or restructure as parent/child).
- Orphaned faction strings with no article: `Kingdom of León`, `Almoravids`,
  `Grand Principality of Vladimir`, `Teutonic Order`, `County of Castile`.
- PRD/CLAUDE.md drift: the Dev Server Restart Procedure section is superseded by
  the no-local-dev rule at the top of this file.


---

# APPENDIX A — The Complete Medieval Rulers Program

> Folded into this file on 2026-09-16 from `iron_codex_complete_medieval_rulers_program.md`, which was then deleted.
> **Owned by:** QUEUE item 0m. **Status:** NOT STARTED — M0 through M13. The largest content programme in the project.
> The text below is the original, unaltered.

# The Iron Codex — Complete Medieval Rulers Coverage Program

## Project
**Repository:** `the-iron-codex`

## Objective

Perform a complete, systematic audit of **all rulers represented by every medieval polity relevant to the Iron Codex**, then create or enrich ruler articles until the archive contains a dedicated high-quality article for **every known ruler who governed a kingdom, empire, principality, duchy, county, crusader state, tribal kingdom, caliphate/emirate/sultanate where relevant to medieval Europe and its connected world, or comparable sovereign/semi-sovereign polity across the Middle Ages**.

This is a **major archive-completion program**, not a narrow content task.

The Codex already contains close to one thousand articles. Many rulers already exist. The first duty is therefore to **audit before creating anything**.

The work must:

- Avoid duplicate ruler articles.
- Detect rulers whose articles already exist under alternate names, regnal names, anglicized names, Latinized names, transliterations, nicknames, or variant spellings.
- Upgrade thin or incomplete ruler articles instead of creating duplicates.
- Ensure every ruler is correctly linked to their dynasty/house, family tree, realm, predecessor, successor, wars, battles, locations, and other relevant archive entities.
- Create missing family trees where appropriate.
- Enrich existing family trees rather than fragmenting the archive into competing trees.
- Preserve all current Iron Codex conventions and data models.
- Be historically rigorous.
- Work incrementally and safely.

---

# 1. Core Historical Scope

The target period is the **Middle Ages in the broad European and Mediterranean sense**, approximately from the fall of the Western Roman Empire / Migration Period through the end of the fifteenth century, with sensible overlap where a dynasty or polity begins slightly earlier or ends slightly later.

Use historical judgment rather than an arbitrary date cutoff when continuity demands it.

The project must cover **all major and minor rulers reasonably belonging to the medieval political world represented by the Codex**.

This includes, but is not limited to, the regions and traditions below.

---

# 2. Geographic and Political Coverage

## 2.1 Iberian Peninsula

Audit and complete ruler coverage for:

- Kingdom of Portugal
- County of Portugal where relevant
- Kingdom of Asturias
- Kingdom of León
- Kingdom of Galicia
- Kingdom of Castile
- Kingdom of Navarre / Pamplona
- Kingdom of Aragon
- Crown of Aragon
- County of Barcelona
- Catalan counties where historically significant
- Kingdom of Majorca
- Taifa kingdoms where rulers warrant sovereign treatment
- Emirate and Caliphate of Córdoba
- Nasrid Emirate of Granada
- Almoravid rulers in Iberian context
- Almohad rulers in Iberian context
- Other major Andalusi dynasties and rulers whose reigns materially shaped medieval Iberia

Ensure political evolution is accurately represented. Do not flatten all medieval Iberian realms into “Spain.”

---

## 2.2 France and Frankish Realms

Cover:

- Merovingian Frankish kingdoms
- Austrasia
- Neustria
- Burgundy under Frankish rule
- Carolingian Empire
- West Francia
- Kingdom of France
- Aquitaine when ruled as a meaningful kingdom or major principality
- Brittany
- Normandy
- Burgundy
- Anjou
- Champagne
- Flanders where rulers had major sovereign or quasi-sovereign significance
- Toulouse
- Provence
- Other major principalities and duchies when their rulers are essential to medieval political history

All Merovingian and Carolingian kings must be audited carefully because naming duplication and overlapping sub-kingdoms are common.

---

## 2.3 British Isles

### England
Cover:

- Anglo-Saxon kingdoms and the Heptarchy where ruler lists are historically recoverable:
  - Wessex
  - Mercia
  - Northumbria
  - East Anglia
  - Kent
  - Essex
  - Sussex
- Kings of the English
- Kingdom of England
- Danish rulers of England
- Norman kings
- Angevin / Plantagenet kings
- Lancastrian kings
- Yorkist kings
- Other rulers within the medieval timeframe

### Scotland
Cover:

- Dál Riata where appropriate
- Pictish rulers where historically usable
- Kingdom of Alba
- Kingdom of Scotland
- Competing kings and major contested claimants when they genuinely exercised royal authority

### Ireland
Do not treat medieval Ireland as a single uninterrupted centralized monarchy.

Audit:

- High Kings of Ireland
- Kings of major provincial kingdoms:
  - Munster
  - Leinster
  - Connacht
  - Ulster
  - Meath
- Major dynastic rulers whose reigns had island-wide significance
- Norse-Gaelic kingdoms such as Dublin where appropriate

Use discretion for extremely fragmentary rulers. The objective is completeness without pretending uncertain genealogical traditions are settled fact.

### Wales
Cover rulers of:

- Gwynedd
- Powys
- Deheubarth
- Morgannwg / Glywysing where relevant
- Other significant Welsh kingdoms
- Princes of Wales

---

# 3. Scandinavia and the Viking World

Audit and complete:

- Denmark
- Norway
- Sweden
- Viking Age petty kingdoms where historically significant and adequately attested
- Jarls or quasi-sovereign rulers only where their political status merits ruler treatment
- Earls of Lade where appropriate
- Scandinavian dynastic unions
- North Sea Empire
- Kalmar Union rulers within medieval scope
- Norse rulers in:
  - Dublin
  - York / Jórvík
  - Isle of Man and the Isles
  - Orkney where major jarls functioned as political rulers
  - Iceland only where political office genuinely corresponds to the Codex ruler model; do not invent kings where none existed

Legendary Scandinavian rulers should be clearly separated from historically attested monarchs.

---

# 4. Germanic and Migration-Period Kingdoms

This section is critical.

Audit and create ruler coverage for:

- Ostrogoths
- Visigoths
- Vandals
- Suebi / Sueves
- Burgundians
- Lombards
- Gepids
- Heruli where recoverable
- Rugii where recoverable
- Thuringians
- Alemanni
- Bavarians where rulers/dukes fit the period
- Saxon rulers and major tribal leaders where political sovereignty can be historically supported
- Franks before and during early Merovingian consolidation
- Other Migration Period Germanic kingdoms that formed durable or historically significant polities

Be careful with semi-legendary king lists. Articles must distinguish:

- historically secure rulers,
- rulers known only from later chronicles,
- rulers of disputed historicity.

Never present legendary material as uncontested fact.

---

# 5. The Holy Roman Empire and German Lands

Audit and complete:

- East Francia
- Kingdom of Germany
- Holy Roman Emperors
- Kings of the Romans
- Major anti-kings
- Ottonians
- Salians
- Hohenstaufen
- Luxembourg rulers
- Habsburg rulers within medieval scope
- Welf rulers where applicable
- Wittelsbach rulers where applicable

Also review major medieval territorial rulers where their status and historical impact justify inclusion:

- Saxony
- Bavaria
- Swabia
- Franconia
- Austria
- Bohemia
- Brandenburg
- Meissen
- Thuringia
- Palatinate
- major prince-archbishoprics only if the Codex ruler model supports ecclesiastical princes

Do not create indiscriminate articles for every minor count in the Empire. The program seeks complete coverage of rulers of historically meaningful polities, not genealogical noise.

---

# 6. Italy

Audit:

- Kingdom of Italy
- Lombard kings
- Duchy of Benevento
- Principality of Salerno
- Principality of Capua
- Norman rulers of southern Italy
- County and Duchy of Apulia and Calabria
- Kingdom of Sicily
- Kingdom of Naples within medieval scope
- Papal temporal rulers only when the Codex already models popes as political rulers or when historically required
- Sardinian giudicati:
  - Cagliari
  - Arborea
  - Gallura
  - Logudoro / Torres
- Venice:
  - Doges within relevant medieval scope if the Codex considers elective heads of state valid rulers
- Genoa:
  - Doges only if consistent with project taxonomy
- Milan:
  - Visconti and Sforza rulers
- Florence:
  - avoid forcing republican office-holders into monarch-style ruler templates unless project conventions support them
- Ferrara / Este
- Mantua / Gonzaga
- Savoy
- Montferrat
- other major Italian principalities

The Italian peninsula requires **polity-specific judgment** because many states were republics rather than hereditary monarchies.

---

# 7. Byzantine and Eastern Roman World

Audit and complete every medieval Eastern Roman / Byzantine emperor and empress relevant to the Codex.

Include:

- emperors
- ruling empresses
- co-emperors only when they held genuine imperial authority or are important enough to warrant a dedicated article
- rival emperors and major usurpers where historically significant
- Latin Empire emperors after 1204
- Empire of Nicaea
- Empire of Trebizond
- Despotate of Epirus where rulers fit the archive model
- restored Palaiologan Empire

Avoid duplicates caused by Greek/Latin/English name variants.

Where an individual rules multiple entities or holds multiple imperial titles, prefer **one canonical person article** with all reigns represented.

---

# 8. Balkans

Audit:

- First Bulgarian Empire
- Second Bulgarian Empire
- Serbian principalities
- Kingdom of Serbia
- Serbian Empire
- Bosnian Banate
- Kingdom of Bosnia
- Croatian duchies and kingdom
- medieval Dalmatian political structures where rulers fit
- Duklja
- Zeta
- Raška
- Epirus where not already covered under Byzantine successor states
- Albanian principalities where relevant
- League/state formations only when a clear ruler model applies

---

# 9. Romania and the Lower Danube

Audit rulers of:

- Wallachia
- Moldavia
- Transylvania where rulers/voivodes fit the medieval timeframe and project taxonomy
- earlier Vlach formations where securely attested
- Dobruja / Despotate of Dobruja where appropriate

Use contemporary polity names and titles rather than retroactively applying modern nation-state terminology.

---

# 10. Hungary and Central Europe

Audit:

- Principality of Hungary
- Kingdom of Hungary
- Árpád dynasty
- Angevin rulers of Hungary
- Luxembourg rulers
- Hunyadi / Corvinus period
- disputed and rival kings
- Croatia-Hungary personal union where represented

Also review:

- Great Moravia
- Principality / Duchy / Kingdom of Bohemia
- Moravian rulers
- Polish duchies and kingdom
- Piast fragmentation-era senior dukes and regional rulers where politically meaningful
- Kingdom of Poland
- Lithuanian grand dukes
- Polish-Lithuanian personal union rulers within medieval scope

---

# 11. Poland, Lithuania, and Baltic Realms

Cover:

- Poland
- Masovia where ruler coverage is warranted
- Silesian duchies only where rulers are major enough to justify inclusion; avoid uncontrolled explosion of minor lines unless completeness rules explicitly demand it later
- Pomerania
- Lithuania
- Grand Duchy of Lithuania
- Prussian tribal leaders only where evidence supports ruler-level treatment
- Teutonic Order:
  - Grand Masters if the project models heads of military orders as rulers
- Livonian Order where appropriate

---

# 12. Rus' and Eastern Europe

Audit:

- Kievan Rus'
- Novgorod
- Vladimir-Suzdal
- Galicia-Volhynia
- Chernigov
- Polotsk
- Smolensk
- Ryazan
- Tver
- Moscow
- other major Rus' principalities

Because Rurikid names repeat heavily, deduplication must be meticulous.

Distinguish individuals with:

- patronymics,
- epithets,
- principality,
- reign dates,
- genealogy.

Never create duplicate Vladimir, Yaroslav, Mstislav, Sviatoslav, Vsevolod, etc., because of naming ambiguity.

---

# 13. Steppe Powers Connected to Medieval Europe

Include rulers of major powers that materially shaped medieval European politics:

- Huns at the Late Antique / early medieval boundary where relevant
- Avars
- Khazars
- Pechenegs
- Cumans / Kipchaks
- Golden Horde
- major successor khanates within medieval scope
- Mongol Empire rulers whose campaigns directly shaped Europe
- Ilkhanate where strongly connected to Crusader and Byzantine history
- Crimean Khanate if within chosen chronological endpoint

Do not expand into a full universal history of every Central Asian polity. Keep inclusion tied to the medieval European/Mediterranean world represented by the Codex.

---

# 14. Crusader States

Audit and complete every ruler of:

- Kingdom of Jerusalem
- County of Edessa
- Principality of Antioch
- County of Tripoli
- Kingdom of Cyprus
- Armenian Kingdom of Cilicia
- Latin Empire
- Principality of Achaea
- Duchy of Athens
- other major Frankish Greece polities where relevant

Include queens regnant, regents, and major contested monarchs where historically necessary.

Do not omit rulers simply because their reign was short.

---

# 15. Military Orders

Where consistent with Iron Codex taxonomy, audit leadership of:

- Knights Templar
- Knights Hospitaller
- Teutonic Order
- Order of Santiago
- Order of Calatrava
- Order of Alcántara
- Livonian Brothers of the Sword

However:

**Do not automatically treat every grand master as a monarch.**

If the existing Codex distinguishes “rulers” from “order leaders,” preserve that distinction. These may belong to a separate people taxonomy.

---

# 16. Mediterranean Muslim Powers Relevant to the Medieval Codex

Because medieval Iberia, Byzantium, Sicily, the Crusades, and Mediterranean warfare cannot be treated coherently without them, audit sovereign rulers of major connected Islamic polities, including:

- Umayyad Córdoba
- Abbasids where directly relevant
- Fatimids
- Ayyubids
- Mamluks
- Seljuks
- Sultanate of Rum
- Zengids
- Artuqids where significant
- Almoravids
- Almohads
- Nasrids
- Hafsids where connected to Mediterranean history
- Marinids
- major taifa rulers

The purpose is not to build every medieval Islamic dynasty on Earth in this pass. Include those deeply entangled with the Codex’s European, Mediterranean, Crusader, Iberian, and Byzantine narratives.

---

# 17. Caucasus and Armenian/Georgian Realms

Audit:

- Kingdom of Georgia
- Bagratid Armenia
- Armenian Kingdom of Cilicia
- relevant Georgian successor polities
- other Caucasian kingdoms only where strongly connected to Byzantine, Crusader, Seljuk, Mongol, or Black Sea history represented by the Codex

---

# 18. Ruler Inclusion Rules

A person qualifies for ruler coverage when one or more of the following apply:

1. They were formally recognized as sovereign ruler of a medieval polity.
2. They exercised de facto sovereign rule even when their title was duke, prince, ban, voivode, doge, emir, caliph, sultan, khan, grand prince, despot, count, jarl, or equivalent.
3. They were a queen/empress regnant.
4. They were a co-ruler with meaningful authority.
5. They were a major rival monarch / anti-king / claimant who actually held territory or exercised power.
6. They headed a successor state created by dynastic collapse, conquest, partition, or civil war.
7. Their reign is necessary to make a dynasty or polity ruler sequence complete.

Do **not** create ruler articles solely because someone:

- was a royal spouse with no governing authority,
- was an heir who never ruled,
- claimed a title without meaningful political control,
- appears only in legendary genealogy with no reasonable historical basis,
- was a minor noble with no sovereign or quasi-sovereign polity.

Such people may still deserve normal people articles, but they should not be forced into the ruler program.

---

# 19. Mandatory Pre-Creation Audit

Before creating **any ruler article**, search the entire repository for that person.

Search by:

- canonical name
- alternate spelling
- native-language form
- Latinized form
- anglicized form
- regnal name
- nickname / epithet
- patronymic
- dynasty + first name
- realm + regnal number
- lifespan
- spouse
- predecessor / successor

Examples of dangerous duplicates:

- Charles the Bald / Charles II
- William the Conqueror / William I
- Harald Hardrada / Harald III
- Basil the Bulgar Slayer / Basil II
- Alfonso / Afonso naming variants
- Constantine XI / Constantine Palaiologos
- multiple rulers with identical names across Rus' principalities

If an existing article is found:

- **Do not create another article.**
- Audit it.
- Bring it up to current ruler quality standards.
- Fix metadata, links, house, dynasty, realm, predecessor/successor, family tree, and images where needed.

---

# 20. Canonical Identity and Naming

Every ruler must have **one canonical person identity**.

Where a person ruled multiple realms, do not create one page per throne.

Example principle:

A ruler who was King of Realm A and later King of Realm B receives **one article**, with multiple reigns represented within the metadata/content.

Alias handling should allow search and linking through variant names.

When regnal numbering differs by realm, explain this clearly in the article rather than cloning the person.

---

# 21. Article Minimum Standard

Every newly created ruler article must be a **full historical article**, not a stub.

### Absolute minimum length
**5,000 characters of substantive prose.**

Do not pad with empty phrasing, repeated facts, generic context, or verbose filler.

For major rulers, length should substantially exceed the minimum.

Major figures may warrant:

- 8,000–15,000+ characters
- several sections
- multiple images
- detailed military and political analysis
- family-tree integration
- multiple related-event links

Examples of rulers who should receive substantially richer treatment include figures of the historical weight of:

- Charlemagne
- Alfred the Great
- William the Conqueror
- Henry II
- Richard the Lionheart
- Edward I
- Edward III
- Philip II Augustus
- Saint Louis
- Frederick Barbarossa
- Frederick II
- Otto I
- Justinian where within scope / archive continuity
- Basil II
- Alexios I Komnenos
- Manuel I Komnenos
- Constantine XI
- Robert Guiscard
- Roger II
- El Cid-era sovereigns of Iberia
- Afonso I of Portugal
- Ferdinand III of Castile
- Alfonso X
- James I of Aragon
- Saladin
- Baybars
- Mehmed II if the chronological boundary includes 1453 and aftermath
- Stefan Dušan
- Matthias Corvinus
- Casimir III
- Vytautas
- major Viking Age monarchs
- Attila only if retained as an early-medieval boundary figure

Use historical importance rather than this example list alone.

---

# 22. Required Article Structure

Follow existing repository conventions first.

At minimum, ruler articles should include logically equivalent sections for:

## Overview
- identity
- titles
- dynasty / house
- realms ruled
- reign dates
- historical importance

## Early Life and Background
- birth
- parents
- dynastic position
- formative political environment
- succession circumstances

## Accession
- how the ruler gained power
- coronation / election / conquest / inheritance
- rival claimants
- legitimacy questions

## Reign
Cover the major political events of the reign.

Use subsections where needed.

## Wars, Campaigns, and Military Activity
Link to all existing relevant war and battle articles.

Create missing event links only where archive conventions permit.

Do not fabricate event pages automatically unless the surrounding task explicitly calls for them.

## Governance and Administration
Where sources allow:
- law
- taxation
- reforms
- church relations
- administration
- aristocratic relations
- urban policy
- succession policy

## Diplomacy
- alliances
- marriages
- treaties
- papal relations
- imperial relations
- neighboring states

## Religion
Only when relevant:
- conversion
- religious policy
- church disputes
- crusading
- heresy
- investiture conflicts
- patronage

## Family and Dynasty
- spouses
- children
- parents
- siblings when politically relevant
- heirs
- dynastic consequences

## Death and Succession
- date / circumstances of death
- burial
- immediate succession
- succession crisis if any

## Legacy
This section is mandatory.

Discuss:
- long-term consequences
- historiographical reputation
- dynastic legacy
- military legacy
- state-building impact
- cultural memory
- later legend versus historical evidence

## Major Feats / Achievements
This may be a distinct section or integrated according to existing template conventions.

It must identify the ruler’s most important accomplishments without descending into heroic propaganda.

---

# 23. Historical Tone

Articles must be:

- rigorous
- readable
- neutral
- evidence-aware
- narrative enough to be engaging
- free from fan-fiction language
- free from invented dialogue
- free from modern nationalist mythmaking

Avoid simplistic moral labels.

For controversial rulers, distinguish:

- contemporary evidence,
- later chroniclers,
- modern historiography,
- legend.

Where evidence conflicts, say so.

---

# 24. Family Trees — Mandatory Audit

Every ruler article must be checked for family-tree integration.

For each ruler:

1. Determine whether an appropriate family tree already exists.
2. If yes:
   - ensure the ruler appears in it,
   - ensure parents, spouse(s), children, siblings, predecessors/successors are connected where the existing tree model supports them,
   - enrich the tree rather than creating a duplicate.
3. If no suitable family tree exists:
   - create one for the dynasty / royal house when enough genealogical material exists to justify it.

Do not create a separate family tree for every ruler.

Family trees should generally be dynasty/house oriented.

Examples:

- House of Normandy
- House of Plantagenet
- Capetians
- Carolingians
- Merovingians
- Árpád dynasty
- Piasts
- Rurikids
- Komnenoi
- Palaiologoi
- Trastámaras
- Jiménez dynasty
- House of Burgundy / Portuguese Burgundy
- Avis
- Hohenstaufen
- Ottonians
- Salian dynasty

Where the dynasty is enormous, multiple navigable branches may be appropriate.

---

# 25. Ruler ↔ House Navigation

Apply the existing Iron Codex rule globally:

If a ruler belongs to a house/dynasty that has its own article:

- the ruler’s house field must link to the house article;
- the house article must link to the ruler;
- family-tree nodes must navigate to the relevant ruler pages;
- ruler pages must provide navigation back to the house/dynasty where the data model supports it.

Do not leave house names as non-clickable text when the article exists.

This requirement applies to **existing rulers as well as newly created rulers**.

---

# 26. Predecessor and Successor Links

Every ruler must be audited for:

- predecessor
- successor
- disputed predecessor/successor where relevant
- co-rulers
- rival rulers during civil wars

Where an article exists, these relationships must be navigable.

If the neighboring ruler article does not yet exist, it should enter the missing-ruler queue for the same polity.

This creates a useful chain-completeness check.

---

# 27. Realm and Polity Links

Every ruler article must link to the correct realm/polity article where one exists.

If a realm has changed names or political form, use the historically appropriate entity.

Examples:

- Wessex ≠ England
- West Francia ≠ France in early periods
- Asturias ≠ León
- Castile ≠ Spain
- Kievan Rus' ≠ Russia
- East Francia ≠ Holy Roman Empire
- Nicaea ≠ Byzantine Empire during the exile period
- Wallachia ≠ Romania

Avoid anachronistic modern-country mapping inside historical political metadata.

---

# 28. Images

Follow existing Iron Codex image rules.

Every ruler article should have an appropriate lead image if a historically responsible image can be sourced or generated under project conventions.

## Major rulers

Important rulers should have **more than one image** when useful.

Possible image types:

- ruler portrait / reconstruction
- coin
- seal
- manuscript illumination
- statue
- tomb effigy
- battle scene
- map
- coronation image
- royal charter or artifact

Images should serve historical understanding rather than decorate the page randomly.

Avoid repeating the same image in multiple placements.

Avoid low-quality placeholders.

Do not use clearly ahistorical fantasy depictions.

Where no contemporary likeness exists, label later depictions or reconstructions honestly.

---

# 29. Maps

For major rulers whose careers involve:

- large territorial change,
- conquest,
- fragmentation,
- crusading,
- succession wars,
- multi-realm monarchy,

consider adding maps when current article conventions support them.

Maps should clarify geography and political change.

---

# 30. Related Events

For every ruler, audit connections to existing:

- battles
- wars
- sieges
- treaties
- crusades
- rebellions
- successions
- coronations
- marriages
- councils
- major religious events

Use internal links aggressively where relevant, but only to real entities.

Never create broken links.

---

# 31. Existing Thin Articles

A pre-existing article does **not** count as complete merely because the file exists.

During the audit, flag existing ruler pages that are:

- under 5,000 characters
- missing legacy
- missing reign detail
- missing family tree links
- missing house links
- missing predecessor/successor
- missing images
- missing major wars
- historically outdated
- structurally inconsistent with current article standards

Upgrade them.

The completion goal is **quality coverage**, not file-count coverage.

---

# 32. Duplicate Detection Strategy

Build a temporary internal audit dataset containing, for every known ruler:

- canonical name
- alternate names
- native names
- regnal number
- title
- dynasty
- polity
- reign start
- reign end
- birth/death dates if known
- existing article path if found
- family tree
- house article
- status

Suggested statuses:

- `complete`
- `exists-needs-enrichment`
- `missing`
- `possible-duplicate`
- `identity-disputed`
- `legendary-or-semi-legendary`
- `out-of-scope`

No new article should be created while its row remains `possible-duplicate`.

---

# 33. Historical Uncertainty

For poorly documented early medieval rulers:

Do not invent precise dates.

Use forms such as:

- “c. 470–c. 490”
- “fl. late 6th century”
- “reign traditionally dated to…”
- “possibly identical with…”
- “attested only by…”

If historians dispute whether two names refer to the same ruler, preserve that uncertainty.

The Codex should never imply greater certainty than the evidence allows.

---

# 34. Legendary Kings

Legendary, heroic, or semi-mythical kings require special handling.

Examples may include early Scandinavian, Anglo-Saxon, Irish, British, or Migration Period genealogical figures.

Do not merge legend into historical ruler lists without qualification.

Where a figure is important to medieval tradition but of doubtful historicity:

- create or retain a person article if justified,
- label historicity clearly,
- keep them visibly distinct from securely attested rulers,
- do not use legendary chronology to “fill gaps” in political sequences.

---

# 35. Queens, Empresses, and Female Rulers

Do not omit female sovereigns.

Include:

- queens regnant
- empresses regnant
- ruling princesses
- women who exercised sovereign or effective regency when historically substantial

For consorts:

Do not automatically include them in the ruler-completion count unless they exercised real rule.

However, major consorts can and should have normal people articles where appropriate.

---

# 36. Regents

A regent should receive ruler-program treatment when:

- they effectively governed a polity for a substantial period,
- their political role was central to the era,
- archive conventions consider regents part of ruler history.

Otherwise, preserve them as normal people articles linked from the sovereign.

---

# 37. Child Rulers

Child monarchs still count as rulers.

Their articles should distinguish:

- formal sovereignty,
- regency government,
- later personal rule.

Do not attribute regent decisions directly to a child ruler without explanation.

---

# 38. Co-Rulers

Handle co-rule carefully.

Common examples occur in:

- Byzantium
- Visigothic succession
- Merovingian partitions
- Scandinavian kingship
- Rus'
- Iberian dynasties
- joint monarchies

A co-ruler should not automatically be collapsed into a parent’s article.

If historical convention recognizes them as a ruler in their own right, create/retain a dedicated article.

---

# 39. Contested Successions and Anti-Kings

Include major rival rulers when they:

- were crowned,
- held substantial territory,
- controlled the capital,
- commanded significant aristocratic recognition,
- appear in standard ruler lists as an anti-king or rival monarch.

Clearly mark the contested nature of the reign.

---

# 40. Conquered Polities and Dynastic Transitions

When one state absorbs another, do not erase the earlier ruler sequence.

Examples:

- Anglo-Saxon kingdoms before English unification
- taifa kingdoms
- Rus' principalities
- Lombard duchies
- Crusader states
- Balkan principalities
- Welsh kingdoms
- Irish provincial kingdoms

The Codex should reflect political evolution rather than project later borders backward.

---

# 41. Article Metadata Audit

For every ruler, verify all fields used by the current schema.

Likely items include, depending on current repository implementation:

- name
- aliases
- epithet
- image
- birth
- death
- reign
- title
- realm
- dynasty
- house
- religion
- predecessor
- successor
- spouse
- children
- parents
- related battles
- related wars
- related locations
- family tree ID
- article tags

Do not invent schema fields.

Inspect the repository and use the current source-of-truth models.

---

# 42. Slugs and URLs

Use existing naming conventions.

Before choosing a slug:

- search for existing aliases,
- search redirects,
- search old route names,
- search data references.

Do not rename existing public ruler URLs without a compelling reason.

If a rename is necessary, preserve redirects if the app supports them.

---

# 43. Internal Link Audit

After each ruler batch:

- scan for broken internal links,
- scan for house links that render as text but should navigate,
- scan predecessor/successor references,
- scan family-tree nodes,
- scan realm links,
- scan battle/war links.

No new ruler batch is complete while it introduces broken navigation.

---

# 44. Search and Index Integration

Every new ruler must appear correctly in:

- global search
- People index
- ruler filters
- realm filters
- dynasty/house filters
- century filters where used
- family-tree navigation
- related article panels

Audit existing rulers that are missing from indexes due to metadata errors.

---

# 45. People Index Taxonomy

Ensure rulers are categorized consistently.

A ruler should not disappear from their realm because:

- realm tags use inconsistent aliases,
- the dynasty field is being used instead of the polity,
- old metadata conventions differ,
- the ruler is only tagged under a later country.

This is especially important for:

- Carolingians
- Merovingians
- Rus' princes
- fragmented Iberian realms
- Anglo-Saxon kingdoms
- Crusader states
- Byzantine successor states

---

# 46. Completion Matrix

Create a structured audit matrix, ideally stored in a project-appropriate data or planning file, containing:

| Region | Polity | Dynasty | Ruler | Reign | Existing Article | Quality Status | Family Tree | House Link | Images | Action |
|---|---|---|---|---|---|---|---|---|---|---|

This matrix should be used as the master campaign tracker.

Do not rely on memory.

---

# 47. Phased Execution

This task is too large for a single uncontrolled generation pass.

Execute in phases.

## Phase 0 — Repository Reconnaissance

Before editing:

- inspect current people schema,
- inspect ruler article format,
- inspect dynasty/house format,
- inspect family tree implementation,
- inspect People index filtering,
- inspect link helpers,
- inspect article image conventions,
- inspect existing audit scripts if any,
- identify current ruler count.

Document repository conventions.

---

## Phase 1 — Build the Master Ruler Registry

Compile a complete polity-by-polity list of rulers.

No article creation yet.

For every candidate:

- canonical identity
- polity
- dynasty
- reign
- aliases
- current archive match
- status

Resolve duplicates before continuing.

---

## Phase 2 — Western Europe

Suggested order:

1. England / Anglo-Saxon kingdoms
2. Scotland
3. Wales
4. Ireland
5. France / West Francia
6. Normandy / Brittany / Burgundy / major French principalities
7. Portugal
8. Iberian kingdoms
9. al-Andalus

---

## Phase 3 — Migration Period and Early Germanic Kingdoms

Suggested order:

1. Franks
2. Visigoths
3. Ostrogoths
4. Vandals
5. Suebi
6. Burgundians
7. Lombards
8. other attested Germanic kingdoms

This phase requires especially strong duplicate and legendary-status checks.

---

## Phase 4 — Central Europe and the Empire

Suggested order:

1. East Francia
2. Holy Roman Empire
3. Bohemia
4. Poland
5. Hungary
6. Austria
7. major German duchies/principalities

---

## Phase 5 — Scandinavia and Viking Realms

Suggested order:

1. Denmark
2. Norway
3. Sweden
4. North Sea Empire
5. Jórvík
6. Dublin
7. Isles / Man
8. Orkney where applicable

Separate legendary dynasties from historical rulers.

---

## Phase 6 — Byzantine and Balkan World

Suggested order:

1. Byzantine emperors
2. Nicaea
3. Trebizond
4. Epirus
5. Bulgaria
6. Serbia
7. Croatia
8. Bosnia
9. Albania
10. Romanian principalities

---

## Phase 7 — Rus', Lithuania, and the Baltic

Suggested order:

1. Kievan Rus'
2. Novgorod
3. Vladimir-Suzdal
4. Galicia-Volhynia
5. major Rus' principalities
6. Moscow
7. Lithuania
8. Baltic polities
9. military-order states where applicable

---

## Phase 8 — Italy

Suggested order:

1. Lombard continuity
2. Kingdom of Italy
3. southern Norman states
4. Sicily
5. Naples
6. Savoy
7. Milan
8. Ferrara
9. Mantua
10. Sardinian giudicati
11. Venice / Genoa only under correct elective-ruler conventions

---

## Phase 9 — Crusader and Mediterranean States

Suggested order:

1. Jerusalem
2. Edessa
3. Antioch
4. Tripoli
5. Cyprus
6. Cilician Armenia
7. Latin Empire
8. Frankish Greece
9. Ayyubids
10. Mamluks
11. Seljuks / Rum
12. relevant North African / Andalusi dynasties

---

## Phase 10 — Steppe and Frontier Powers

Audit:

- Avars
- Khazars
- Pechenegs
- Cumans
- Mongols
- Golden Horde
- related khanates

Only include rulers with meaningful connection to the Codex historical world.

---

# 48. Batch Size

Do not attempt hundreds of full articles in one generation.

Recommended article batch size:

- **5–15 rulers per implementation batch**, depending on article depth
- smaller batches for major rulers
- larger batches only for already-existing articles needing metadata/link fixes

Each batch must end with:

- typecheck
- lint
- tests
- build
- link validation
- duplicate check
- quality review

---

# 49. Priority Ranking

Assign every missing/incomplete ruler a priority.

## Tier I — Essential
- major monarchs
- emperors
- foundational rulers
- conquerors
- unifiers
- rulers tied to major wars
- rulers already referenced throughout existing Codex articles
- missing people causing broken links

## Tier II — Sequence Completion
- rulers needed to complete major royal lines
- short-reign monarchs
- co-rulers
- contested kings

## Tier III — Deep Coverage
- rulers of smaller regional polities
- obscure but historically attested kings
- minor successor states

Complete Tier I first, but the final goal remains full coverage.

---

# 50. Major-Ruler Enhancement Rules

For historically major rulers, go beyond the minimum.

Require where possible:

- multiple images
- family tree
- richer chronology
- detailed political context
- campaign analysis
- map(s)
- coins/seals/manuscripts
- historiography
- stronger legacy section
- links to all major relevant events
- quotes only when historically sourced and appropriate

These articles should feel like flagship Codex entries.

---

# 51. Cross-Article Consistency

When adding a ruler, update affected related content when necessary.

Example:

If a new Visigothic king is added:

- Visigothic Kingdom article should link them if it maintains ruler lists.
- dynasty page should include them.
- family tree should include them.
- predecessor/successor should navigate correctly.
- relevant battle pages should link the king.
- People index should classify them correctly.

Avoid orphan articles.

---

# 52. No Silent Historical Rewrites

If existing Codex content conflicts with better historical evidence:

- correct it,
- but check all linked articles for dependent claims.

Do not fix one ruler page while leaving contradictory dates throughout the archive.

---

# 53. Quality Gate for Each Article

A ruler article is only `complete` if all applicable checks pass:

- [ ] Correct identity
- [ ] No duplicate article
- [ ] Correct polity
- [ ] Correct dynasty/house
- [ ] Reign dates verified
- [ ] Minimum 5,000 characters
- [ ] Overview present
- [ ] Early life/background present
- [ ] Accession explained
- [ ] Reign covered in depth
- [ ] Major wars/events covered
- [ ] Death/succession covered
- [ ] Legacy present
- [ ] Major feats present
- [ ] Family relationships included
- [ ] Family tree linked
- [ ] House link navigable
- [ ] Realm link navigable
- [ ] Predecessor link valid
- [ ] Successor link valid
- [ ] Lead image present if feasible
- [ ] Additional images for major rulers
- [ ] No broken internal links
- [ ] Search/index integration verified
- [ ] Build/tests pass

---

# 54. Realm Completion Gate

A polity is only `complete` when:

- every historically recognized ruler in scope is accounted for,
- every existing ruler page has been audited,
- missing rulers have been created,
- duplicate identities are resolved,
- predecessor/successor chains have no unexplained gaps,
- dynasty/house links are functional,
- family trees are complete enough for the relevant line,
- realm indexes show the expected rulers,
- disputed rulers are documented,
- legendary rulers are clearly marked,
- no new broken links remain.

---

# 55. Program Completion Gate

The overall program is complete only when the master registry contains no unresolved:

- `missing`
- `possible-duplicate`
- `exists-needs-enrichment`

entries for in-scope rulers.

`identity-disputed` may remain only when historical scholarship itself is unresolved, and those entries must have a documented decision.

---

# 56. Automated Checks

Where practical, create reusable scripts to detect:

## Missing ruler relationships
- predecessor exists as plain text but article exists
- successor exists as plain text but article exists
- house exists but ruler link is non-navigable
- ruler file exists but missing from People index
- family tree exists but ruler is absent

## Duplicate candidates
Use combinations of:
- normalized names
- reign dates
- dynasty
- realm
- birth/death
- known aliases

Do not auto-merge files without human-readable evidence.

## Article quality
Flag:
- ruler articles under 5,000 characters
- missing required sections
- missing realm
- missing house/dynasty where known
- missing legacy
- missing images where expected

---

# 57. Source Discipline

Historical factual quality matters more than speed.

Prefer:

- academic reference works
- scholarly books
- university resources
- major museums
- primary-source editions
- Encyclopaedia Britannica where useful
- Oxford / Cambridge reference material when available
- trusted national biography projects
- reputable historical encyclopedias

Wikipedia may be useful for orientation and cross-checking ruler sequences, but do not let it become the sole authority for disputed or obscure reigns.

Never hallucinate:

- reign dates
- parentage
- spouse
- battle participation
- titles
- quotes
- burial sites

If uncertain, state uncertainty.

---

# 58. Naming and Cultural Respect

Use historically appropriate names.

Where English historical convention strongly favors an English form, use it as the canonical title and preserve native forms as aliases.

Where native forms are more standard, keep them.

Examples of naming complications that require deliberate handling:

- Afonso / Alfonso
- Charles / Karl / Carolus
- Louis / Ludwig
- Henry / Heinrich / Henri
- John / João / Juan / Jean / Johann
- Constantine / Konstantinos
- Michael / Mikhail
- Stephen / Stefan / István
- Ladislaus / László / Władysław
- Casimir / Kazimierz

Never assume similarly named rulers are identical.

---

# 59. Slavic and Rus' Transliteration

Choose one canonical transliteration standard consistent with existing archive practice.

Store common alternatives as aliases where supported.

Be particularly cautious with:

- Yaroslav / Iaroslav
- Sviatoslav / Svyatoslav
- Vsevolod
- Mstislav
- Volodymyr / Vladimir
- Iziaslav / Izyaslav
- Yuri / George

Identity should rely on dynasty, patronymic, polity, and chronology, not name string alone.

---

# 60. Multiple Reigns

Some rulers reign more than once.

Represent this within a single person article.

Examples may include rulers restored after deposition.

Metadata and prose should show:

- first reign
- interruption
- restoration
- second reign

Do not create “Ruler X — First Reign” and “Ruler X — Second Reign” as separate people.

---

# 61. Personal Unions

A monarch ruling multiple realms must remain one person.

Example pattern:

- King of Realm A
- later or simultaneously King of Realm B
- perhaps Emperor of Realm C

Each crown belongs in the same article with distinct reign ranges.

---

# 62. Dynastic Partitions

For Merovingian, Carolingian, Rus', Polish, and other partitioned systems:

Do not simplify away sub-kingdoms.

A ruler may rule:

- one partition,
- then inherit another,
- then become sole ruler.

Represent changing territorial authority accurately.

---

# 63. House vs Dynasty

Follow repository conventions.

Where a “house” and “dynasty” differ historically, do not collapse them casually.

Examples include cadet branches.

Ensure links point to the correct entity.

---

# 64. Family Tree Scale Control

Some dynasties are too large for one readable tree.

If needed:

- create dynasty overview tree
- create branch trees
- maintain navigation between them
- avoid duplicate person nodes with separate identities

Potential large-tree cases:

- Rurikids
- Capetians
- Plantagenets
- Piasts
- Árpáds
- Carolingians
- Komnenoi / Doukai / Angeloi intermarriage
- Trastámaras

---

# 65. Performance and UI Safety

Do not allow huge family trees to break layout.

Test:

- desktop wide screens
- common laptop widths
- mobile
- Chrome
- Safari
- Firefox where practical

Avoid overflow problems.

Use collapse/zoom/pan/branching patterns already present in the codebase.

---

# 66. Historical Article Interlink Density

Ruler articles should function as crossroads through the Codex.

A major ruler page should naturally connect to:

- family
- dynasty
- polity
- wars
- battles
- places
- castles
- treaties
- contemporaries
- religious figures
- successors
- enemies
- allies

This is essential to making the archive feel like a connected historical knowledge system rather than a pile of isolated biographies.

---

# 67. Avoid Content Explosion Without Structure

The objective is enormous, but do not simply create thousands of files rapidly.

The correct sequence is:

**inventory → deduplicate → classify → prioritize → write → link → test → continue**

Any approach that skips the registry/audit stage is unacceptable.

---

# 68. Preserve Existing Work

Never overwrite a strong existing article with a shorter generated version.

When upgrading:

- preserve good prose,
- preserve valid citations/data,
- preserve strong images,
- preserve established routes,
- add missing content surgically.

This is an enrichment project, not a mass reset.

---

# 69. Initial Deliverables Before Bulk Article Creation

Before beginning mass creation, produce:

1. A repository-conventions summary.
2. A master polity list.
3. A master ruler registry.
4. A duplicate-candidate report.
5. A missing-rulers report.
6. An existing-thin-rulers report.
7. A family-tree gaps report.
8. A house-link gaps report.
9. A proposed phased execution queue.

Only after these exist should large-scale article generation begin.

---

# 70. Suggested Audit Report Format

Create or maintain a project planning artifact such as:

`docs/ruler-coverage-audit.md`

or an equivalent appropriate repository location.

It should contain:

## Summary
- total ruler candidates
- complete
- needs enrichment
- missing
- possible duplicates
- disputed identities

## By Region
- Western Europe
- Iberia
- British Isles
- Scandinavia
- Migration Period
- Holy Roman Empire
- Central Europe
- Balkans
- Byzantium
- Rus'
- Italy
- Crusader States
- Mediterranean Islamic powers
- Steppe powers

## Blockers
- unclear identity
- missing polity model
- oversized family tree
- conflicting chronology
- missing image
- schema limitation

---

# 71. Commit Strategy

Use small, auditable batches.

Suggested commit scope:

- one polity
- one dynasty
- or one tightly related ruler group

Avoid giant commits touching hundreds of unrelated files.

Each commit should remain reviewable.

---

# 72. Testing

After every implementation batch, run the repository’s established checks.

At minimum where available:

- TypeScript typecheck
- lint
- unit tests
- content validation
- route generation
- production build

Also manually verify representative pages.

Do not assume content-only changes cannot break the app.

---

# 73. Regression Testing

Check that ruler expansion does not break:

- People page performance
- family-tree rendering
- search
- filter dropdowns
- static generation
- route limits
- image loading
- related-content panels

This project may substantially increase content volume.

---

# 74. Data Integrity

Do not introduce inconsistent enum values or free-text realm variants.

If the archive currently has:

- `Carolingian Empire`
- `Carolingian empire`
- `Carolingians`

as different realm values, normalize them according to the canonical model.

Do the same for dynasty aliases and polity naming.

---

# 75. Special Audit: Carolingians

The Carolingian ruler coverage has already shown evidence of under-mapping.

Perform a dedicated audit for:

- Pepinids / Arnulfings where relevant
- Pepin the Short
- Charlemagne
- Carloman I
- Louis the Pious
- Lothair I
- Louis the German
- Charles the Bald
- Pepin I of Aquitaine
- Pepin II of Aquitaine
- Lothair II
- Louis II of Italy
- Charles of Provence
- Carloman of Bavaria
- Louis the Younger
- Charles the Fat
- Arnulf of Carinthia
- Louis the Child
- West Frankish Carolingians through Louis V
- rival/partition kings as appropriate

Verify what already exists before creating anything.

---

# 76. Special Audit: Visigoths, Ostrogoths, Vandals, Lombards

These kingdoms are currently high-priority gaps.

Build complete ruler sequences and verify articles for every historically recognized king.

Particularly watch:

- rulers with uncertain chronology
- co-kings
- rulers known under Latin and Germanic forms
- short reigns
- assassinated kings
- disputed succession sequences

Family trees may be incomplete because dynastic continuity is often poorly documented; do not fabricate genealogical links.

---

# 77. Special Audit: Anglo-Saxon England

Ensure complete coverage for major kingdoms and final English consolidation.

Watch duplicate identities for rulers who:

- ruled Wessex before becoming king of all England,
- held Mercia under another title,
- appear in both Viking and English political contexts.

Do not create one person twice because their title changed.

---

# 78. Special Audit: Rus'

Create a lineage-aware registry before writing articles.

Rurikid repetition makes this a major duplicate risk.

Each registry row should ideally include:

- ruler
- father
- dynasty branch
- principalities ruled
- reign ranges
- spouse
- children
- known epithet

Do not bulk-create Rus' rulers from names alone.

---

# 79. Special Audit: Byzantine Emperors

Verify:

- regnal numbering
- co-emperors
- rival emperors
- dynastic names
- deposition/restoration
- Nicaean continuity
- Latin interruption
- restored empire

A single emperor may have several titles and co-rule periods.

Major emperors should receive flagship-level treatment.

---

# 80. Special Audit: Ireland

Irish medieval kingship requires a separate methodology.

Do not attempt to create every semi-legendary local king from medieval genealogical tradition.

Build tiers:

### Tier A
- widely accepted High Kings
- provincial kings of major historical importance
- rulers with strong source attestation

### Tier B
- historically attested regional kings necessary for political continuity

### Tier C
- legendary / genealogical rulers

Only Tier A and B automatically enter the ruler-completion program.

Tier C should be handled separately.

---

# 81. Special Audit: Holy Roman Empire

Separate:

- king of East Francia
- king of Germany / Romans
- Holy Roman emperor
- anti-king

Do not create separate people pages for one man holding multiple royal/imperial stages.

Use reign metadata to represent offices.

---

# 82. Special Audit: Iberia

Medieval Iberia contains repeated dynastic names and realm partitions.

Track identity across:

- Asturias
- León
- Galicia
- Castile
- Navarre
- Aragon
- Portugal

Examples of frequent duplicate risk:

- Alfonso
- Sancho
- García
- Ferdinand
- Ramiro

Use ordinal + realm + dynasty + dates to resolve identity.

---

# 83. Special Audit: Crusader States

Rulers frequently held multiple titles.

Examples include:

- Count of Edessa
- Prince of Antioch
- King of Jerusalem
- Count of Tripoli
- King of Cyprus

Do not duplicate an individual across state lists.

Ensure marriages and succession claims are deeply connected through family trees.

---

# 84. Special Audit: Scotland

Handle early Alba carefully.

Names may appear in Gaelic, Anglicized, and Latinized forms.

Avoid duplicate pages for the same ruler under:

- Máel Coluim / Malcolm
- Cináed / Kenneth
- Domnall / Donald
- Causantín / Constantine

Use aliases.

---

# 85. Special Audit: Wales

Track changing boundaries and dynastic mergers.

Do not treat “Prince of Wales” as equivalent to every earlier Welsh king.

Preserve kingdom context.

---

# 86. Special Audit: Scandinavia

Ruler lists before roughly the tenth century may mix:

- saga tradition
- archaeology
- later genealogies
- continental sources

Label evidence quality.

Do not turn the legendary Yngling traditions into an unquestioned historical sequence.

---

# 87. Special Audit: Bulgaria

Ensure both empires receive full treatment.

Track title changes:

- khan / kanasubigi
- knyaz
- tsar

Use period-appropriate terminology and acknowledge scholarly debate where titles are uncertain.

---

# 88. Special Audit: Serbia and Bosnia

Account for:

- župans
- grand princes
- kings
- tsars
- despots
- bans

A title other than “king” does not disqualify a sovereign ruler.

---

# 89. Special Audit: Portugal

Portugal should be complete from the county’s formative rulers through the late Middle Ages.

Audit:

- Counts of Portugal where politically foundational
- House of Burgundy
- House of Aviz within medieval scope
- disputed succession periods
- regencies when significant

Ensure Portuguese naming is handled correctly.

---

# 90. The Definition of “Every Ruler”

For this project, “every ruler” means:

**Every historically attested sovereign or substantively governing ruler of every in-scope medieval polity that the Codex intentionally represents.**

It does not mean:

- every mayor
- every castellan
- every count in Europe
- every noble
- every legendary ancestor
- every temporary military governor

Completeness must remain historically meaningful.

---

# 91. Expansion Rule

If the audit discovers an important medieval polity missing from this document:

**add it.**

This specification is intentionally broad, but it is not a closed list.

No significant medieval kingdom should be omitted merely because it was not named here.

---

# 92. No Arbitrary Modern Borders

Do not structure ruler coverage only by modern countries.

The medieval political world was radically different.

Organize primarily by historical polity.

Modern regional headings exist only to make the audit manageable.

---

# 93. UI Presentation

When appropriate, ruler pages should expose quick-reference information clearly:

- reign
- titles
- dynasty
- realm
- predecessor
- successor
- spouse
- issue
- religion
- death
- burial

But preserve the existing visual language of the Codex.

Do not redesign ruler pages globally unless necessary.

---

# 94. Family Tree Navigation Expectations

Clicking a ruler in a family tree should navigate to the ruler article.

From the ruler article, users should be able to reach:

- the house/dynasty article,
- the relevant family tree,
- immediate relatives when their articles exist.

The navigation loop must work in both directions.

---

# 95. Article Discoverability

No ruler article should be orphaned.

A ruler should be discoverable through at least several of:

- People index
- realm page
- dynasty/house page
- family tree
- predecessor/successor links
- search
- related battles/wars
- related people

---

# 96. Editorial Consistency

Avoid formulaic AI prose.

Do not begin every article with identical phrases.

Do not mechanically repeat:

“X was one of the most important rulers…”

Write with historical specificity.

A minor king should feel different from Charlemagne.

A short-lived usurper should not receive inflated heroic prose.

---

# 97. Character Count Rule

The 5,000-character requirement applies to the **main historical prose**, excluding:

- metadata
- navigation
- footers
- raw data
- image captions
- source lists

If an obscure ruler genuinely lacks enough evidence for 5,000 responsible characters, do not invent material.

Instead:

- write the fullest article supported by evidence,
- mark it as a source-limited exception in the audit.

Historical truth overrides arbitrary length.

---

# 98. Final Review Pass

After all regions are complete, run a final global reconciliation.

Check for:

- duplicate people
- inconsistent reign dates
- broken dynastic chains
- missing successor links
- rulers absent from realm lists
- rulers linked to wrong realms
- family trees missing major members
- house links that still do not navigate
- duplicate aliases causing search confusion
- orphan pages
- inconsistent title naming
- modern-country anachronisms

---

# 99. Final Deliverable

When the program is finished, provide a final completion report including:

- total rulers audited
- total articles created
- total existing articles enriched
- total duplicate candidates resolved
- total family trees created
- total family trees enriched
- total house-link fixes
- total predecessor/successor fixes
- remaining source-limited exceptions
- remaining legendary/disputed identities
- regions/polities completed

No region should be marked complete merely because all “famous” rulers are present.

The ruler sequence itself must have been audited.

---

# 100. Prime Directive

This project is meant to transform the Iron Codex from a large medieval archive into a **systematically complete political-biographical network of the medieval world**.

Depth matters.
Accuracy matters.
Navigation matters.
Genealogy matters.
Consistency matters.

The work should proceed like a long campaign:

**map the realm first, identify every banner, remove duplicate names, restore the broken bloodlines, then build each ruler into a proper historical article.**

Do not rush.

Do not generate duplicate kings.

Do not fill uncertainty with invention.

Do not leave rulers isolated from their dynasties or realms.

Do not stop at famous names.

When this program is complete, a user should be able to begin with almost any medieval kingdom represented by the Codex, follow its rulers in sequence, move into their family trees, houses, wars, battles, and successors, and traverse the political history of the Middle Ages as one connected archive.


---

# APPENDIX B — Global Article UI / UX Refinement

> Folded into this file on 2026-09-16 from `iron_codex_global_article_ui_ux_refinement.md`, which was then deleted.
> **Owned by:** QUEUE item 0o. **Status:** IN PROGRESS — U1, U2, U3 and the Option B hero band shipped; U4 responsive, U5 accessibility, U6 regression, U7 cleanup remain.
> The text below is the original, unaltered.

# The Iron Codex — Global Article UI / UX Refinement

## Project

**Repository:** `the-iron-codex`

## Primary Reference Page

Use the current production page below as the principal benchmark:

**https://www.theironcodex.org/events/battle-of-brunanburh**

The purpose of this task is to perform a **systematic UI/UX audit and refinement of article pages across The Iron Codex**, using Battle of Brunanburh as the clearest example of the current issues.

Do **not** redesign the entire website.

Do **not** discard the current visual identity.

The existing identity is strong and should remain recognizably Iron Codex:

- near-black background
- warm ivory typography
- restrained gold accent
- large authoritative article titles
- historical artwork as a major visual element
- dense historical interlinking
- serious archival atmosphere
- modern UI underneath a historical aesthetic

The goal is to move the article experience from a good historical database toward a **premium digital historical codex**.

The primary weaknesses are currently:

- too many cards and nested cards
- excessive large light-grey surfaces
- weak use of the left column below the hero image
- metadata presented like a software dashboard
- insufficient visual distinction between entity types
- excessive use of pill/chip treatments
- redundant labels
- secondary functionality competing with primary historical information
- related/recommendation material appearing too early
- inconsistent hierarchy between historically important information
- large areas of unused space on desktop
- article-header layouts that do not transition elegantly into the actual article

These problems should be corrected **globally wherever the same design patterns occur**, not merely on the Brunanburh page.

---

# 1. FIRST: AUDIT THE CURRENT IMPLEMENTATION

Before changing anything, inspect the repository.

Determine:

- which components render article headers
- which components are shared between article categories
- whether Events, People, Locations, Houses, Weapons, Armor, Civilizations, Wars, Battles, etc. share primitives
- where metadata cards are defined
- where entity pills/chips are defined
- where hero images and captions are rendered
- where Favorite controls are implemented
- where article-side navigation currently exists, if anywhere
- how Related content is generated
- whether article types have separate templates or inherit from common layout components
- responsive breakpoints
- desktop max-width behavior
- current typography tokens
- surface/background tokens
- spacing tokens
- border tokens
- color tokens

Do not begin by editing Battle of Brunanburh directly.

First understand the design system and identify the **smallest set of reusable components/styles that can improve all affected article types safely**.

Prefer fixing shared primitives rather than manually patching hundreds of articles.

---

# 2. DO NOT CHANGE HISTORICAL CONTENT

This task is primarily UI/UX.

Do not rewrite historical prose merely to make the redesign easier.

Do not change historical claims, dates, people, relationships, sources, article IDs, slugs, or links unless an existing UI bug exposes an obvious broken reference.

For the Brunanburh reference page, the existing article structure is good:

- Overview
- Background
- Forces and leaders
- The battle
- Aftermath and significance
- Related

Preserve this type of editorial structure.

The redesign should make the content **easier to inhabit**, not replace it.

---

# 3. CORE DESIGN PRINCIPLE

The current pages sometimes feel like:

> historical information placed inside a series of application dashboard widgets.

Move away from that.

The desired feeling is:

> **a modern, beautifully typeset historical archive whose structure quietly reveals itself through typography, spacing, dividers, imagery, and restrained interaction.**

Cards should be used when they genuinely communicate grouping or interactivity.

Do not put every piece of information inside a rectangle.

Typography and whitespace should do much more of the work.

---

# 4. RETAIN THE CURRENT HERO IDENTITY

The broad hero concept is strong.

Retain:

- large historical image on desktop
- title positioned prominently beside it
- black page background
- ivory title typography
- gold category accent
- restrained historical caption/source treatment
- asymmetrical editorial composition

Do **not** replace it with a generic full-width cinematic banner with gradient text over the image.

That would make Iron Codex look more conventional and less distinctive.

The current side-by-side historical plate + article identity should remain one of the site's signatures.

---

# 5. FIX THE DEAD LEFT COLUMN

This is one of the strongest problems visible on the Brunanburh page.

After the hero image and caption finish, the left side of a wide desktop layout becomes a huge empty black column while metadata continues far down the right.

This creates visual imbalance.

Do not solve this by making the image enormously tall.

Instead, turn the left side into a **useful persistent article rail** after the image.

Recommended desktop pattern:

```text
LEFT COLUMN                       MAIN COLUMN

Hero image                       Back to Events
Caption                          BATTLE
Source                           Battle of Brunanburh
                                 subtitle / concise identity
On this page                     metadata
Overview
Background                       article content...
Forces and leaders
The battle
Aftermath
Legacy / Significance
Sources
```

The exact sections should be generated from the article's actual headings.

## On this page

Introduce a restrained table-of-contents component for sufficiently long articles.

Requirements:

- generated automatically from article headings
- no manual article-by-article configuration
- clickable anchor links
- highlight current section while scrolling if straightforward to implement
- sticky on sufficiently large desktop screens
- stops being sticky where appropriate near footer/content end
- visually quiet
- no giant card around it
- should feel like an archival contents rail

On smaller layouts:

- collapse to a compact "On this page" control
- or place it above the body
- do not create a permanently occupying mobile sidebar

If the existing app already has TOC infrastructure, reuse and refine it.

---

# 6. RADICALLY REDUCE "CARD INSIDE CARD" UI

The Brunanburh header currently uses repeated nested surfaces for:

- factions
- faction sides
- strength
- leaders
- outcome
- continuation content

This creates **containeritis**.

Refactor shared article metadata so that hierarchy comes primarily from:

- labels
- typography
- spacing
- alignment
- subtle separators
- column layout

rather than boxes within boxes.

For example, instead of:

```text
FACTIONS CARD
 ├── ENGLISH CARD
 └── COALITION CARD
```

prefer:

```text
FACTIONS

ENGLISH                    COALITION
Kingdom of England         Kingdom of Norway
                           Kingdom of Scotland
                           ...

────────────────────────────────────

ESTIMATED STRENGTH         ESTIMATED STRENGTH
Not securely recorded      A great host...
```

A single subtle parent surface may remain where necessary.

Do not nest pale panels inside pale panels unless there is a compelling interaction reason.

---

# 7. REDUCE LARGE LIGHT-GREY SURFACES

The existing near-black + ivory + gold palette is excellent.

The repeated large pale-grey metadata cards weaken it.

They:

- dominate the page
- fragment the layout
- make the article feel like a SaaS dashboard
- compete visually with historical artwork
- diminish the elegance of the dark theme

Introduce/refine dark article surfaces instead.

Use the project's existing tokens where possible rather than blindly introducing arbitrary values.

Conceptually:

```text
Page background       near-black
Primary surface       dark charcoal
Secondary surface     slightly lighter charcoal
Primary text          warm ivory
Secondary text        muted warm grey
Accent                existing Iron Codex gold
Borders                subtle low-contrast line
```

The key principle:

**dark surfaces should carry ordinary metadata.**

Reserve light/parchment surfaces for content where that treatment has meaning, for example:

- historical quotation
- primary-source excerpt
- manuscript fragment
- document reproduction
- genealogy/document-style element
- intentionally emphasized archival insert

This will make light surfaces feel special again.

---

# 8. REMOVE REDUNDANT ARTICLE-TYPE LABELS

On Brunanburh the user sees the article category around the title and then another `BATTLE` label below the Favorite control.

Remove this kind of duplication wherever it occurs.

The category eyebrow immediately above the title is sufficient:

```text
BATTLE

Battle of
Brunanburh
```

Do not repeat the type solely because the metadata section begins.

Audit other article templates for similar duplicated category/type labels.

---

# 9. DEMOTE THE FAVORITE CONTROL

Favorite is useful but currently receives too much ceremonial weight underneath the title.

It should not compete with:

- title
- year
- realm
- historical identity
- article metadata

Redesign it as a quieter secondary action.

Possible direction:

```text
☆ Add to favorites
```

or a subtle icon action positioned near the upper-right of the title/hero identity area.

Requirements:

- retain clear discoverability
- retain accessible hit target
- retain saved/unsaved state
- no functionality regression
- visually subordinate it to historical content

Do not turn it into an oversized CTA.

---

# 10. IMPROVE HERO SPACING AND RHYTHM

The title is one of the strongest elements of the current page.

Preserve its scale.

Give the hero slightly more intentional vertical rhythm between:

- back navigation
- article-type eyebrow
- title
- optional description/deck
- secondary actions
- metadata

Use spacing rather than additional containers.

The title should feel monumental without becoming detached from the page.

---

# 11. INTRODUCE A SHORT ARTICLE DECK WHEN AVAILABLE

If the existing content model already contains a short description/summary, consider displaying it beneath the title in the hero.

Do not create new editorial text automatically.

Use existing summary/deck data only.

Presentation:

- maximum readable width
- muted ivory/grey
- visibly subordinate to H1
- roughly 1–3 lines at desktop widths

This would make the hero immediately explain **why this article matters** before the metadata begins.

If some article types do not have a summary field, gracefully omit it.

Do not create empty placeholders.

---

# 12. SIMPLIFY CORE METADATA

Year, Location, Conflict, Realm, Dynasty, Reign, etc. should not automatically become large individual rectangular cards.

Audit each article type and redesign metadata into compact groups.

For an event, a pattern like this would be preferable:

```text
937
YEAR

Northern England
LOCATION

Consolidation of the Kingdom of England
CONFLICT
```

or:

```text
YEAR            LOCATION                  CONFLICT
937             Northern England          Consolidation of...
```

depending on available width.

Use:

- clear small labels
- strong values
- links where applicable
- thin separators if needed

Avoid three separate large pale blocks.

---

# 13. PRESERVE SEMANTIC GROUPING

Removing boxes does **not** mean flattening everything into an undifferentiated wall.

The following concepts still need clear grouping on battle/event pages:

- date/year
- location
- conflict
- factions
- commanders/leaders
- forces/strength
- outcome

Use intentional sections separated by:

- spacing
- typography
- fine borders
- column changes

rather than repeatedly introducing cards.

---

# 14. GIVE ENTITY TYPES DISTINCT VISUAL SEMANTICS

One current weakness is that kingdoms, people, and other linked entities frequently receive essentially identical gold-pill styling.

Audit entity rendering.

The user should gradually learn to distinguish entity classes by appearance.

Do not create a rainbow of colors.

Remain within the restrained Codex palette.

Possible approach:

## Political entities / realms

Retain restrained outlined gold pills where appropriate:

`Kingdom of England`

## People

Prefer:

- linked gold/ivory name text
- possibly tiny portrait/avatar if an existing reliable person image is available
- no pill required

Example:

```text
Æthelstan
King of England
```

## Locations

Use location-oriented text/link treatment, optionally with a tiny existing icon.

## Wars / conflicts

Use linked title treatment.

## Houses / dynasties

Use a restrained house-specific treatment if one already exists.

The exact implementation should arise from the existing design system.

Do not introduce icon clutter merely to differentiate types.

---

# 15. STOP OVERUSING PILLS

Pills/chips should imply one of:

- taxonomy
- compact linked entity
- filter
- selectable state

They should not become the default rendering of every proper noun.

Audit shared components and reduce indiscriminate pill usage across article pages.

A linked historical person's name often looks better as typography than as a button-shaped object.

---

# 16. REDESIGN FACTIONS / SIDES

Battle and war articles need particularly strong comparison layouts.

For Brunanburh, visually preserve the opposing sides but simplify them.

Desired concept:

```text
FACTIONS

ENGLISH                         COALITION

Kingdom of England              Kingdom of Norway
                                Kingdom of Scotland
                                Norse Dublin
                                Strathclyde

Leaders                         Leaders
Æthelstan                       Olaf Guthfrithson
Edmund                          Constantine II
                                Owain

Estimated strength              Estimated strength
Not securely recorded           Not securely recorded
```

Use responsive columns on desktop.

Stack gracefully on mobile.

Do not create an outer card containing two inner cards unless testing clearly shows that is necessary.

Where appropriate, allow a subtle center divider to communicate opposition.

---

# 17. IMPROVE LEADER PRESENTATION

People are important nodes in the Codex.

Do not visually reduce major historical figures to generic chips.

For leaders/commanders:

- render names as clear navigable links
- preserve accessibility
- optionally surface title/role where already known in the data
- optionally support tiny portraits later if the existing image system makes it reliable

Do not require portraits in this task.

Do not introduce placeholders for missing portraits.

---

# 18. GIVE OUTCOME APPROPRIATE HIERARCHY

The outcome of a battle is high-value information.

It should be faster to scan.

For example:

```text
OUTCOME

Decisive English victory

The coalition was shattered and Æthelstan's
authority over England was confirmed.
```

Make the short result visually stronger than the explanatory sentence.

Do not use modern success/failure dashboard colors such as bright green/red.

This is history, not a build pipeline.

Remain within the Codex palette.

---

# 19. MOVE EDITORIAL "STORY CONTINUES" CARDS OUT OF THE HERO

On Brunanburh, the Stamford Bridge continuation card appears before the article itself.

This interrupts focus.

The reader has not yet read Brunanburh and is already being sent elsewhere.

Move this type of chronological/editorial continuation component toward the end of the article.

Ideal placement:

- after Aftermath / Legacy / Significance
- before or within Related
- or immediately before footer-level recommendations

Give it an editorial framing such as:

```text
THE STORY CONTINUES

Battle of Stamford Bridge
1066

The Scandinavian struggle for England continued...
→
```

This is a strong feature.

Keep it.

Change its placement.

It should behave like historical storytelling rather than an early recommendation widget.

Audit other article types for equivalent premature "next event", "related article", "continued at" cards.

---

# 20. DO NOT DESTROY RELATED CONTENT

The Brunanburh page has meaningful relationships to entities such as:

- The Viking Age
- Norman Conquest
- Æthelstan
- Alfred the Great
- Edward the Elder
- Kingdom of England
- Kingdom of Scotland
- Northumbria
- Battle of Edington
- Battle of Stamford Bridge

The relationships are valuable.

Improve how Related content is presented rather than reducing connectivity.

Consider grouping related items semantically:

```text
RELATED

People
Æthelstan
Alfred the Great
Edward the Elder

Realms
Kingdom of England
Kingdom of Scotland

Places
Northumbria

Battles
Battle of Edington
Battle of Stamford Bridge

Periods / Conflicts
The Viking Age
Norman Conquest
```

Only do this when metadata already provides reliable entity type information.

Do not infer categories unreliably from strings.

---

# 21. ARTICLE BODY TYPOGRAPHY

Audit the reading experience below the hero.

The body should feel more editorial and less app-like.

Check:

- text measure / max line length
- paragraph spacing
- H2 hierarchy
- H3 hierarchy
- anchor offset under sticky headers
- inline link visibility
- quotation styling
- caption styling
- list spacing
- table styling
- image spacing
- mobile text size

Aim for approximately **comfortable long-form reading widths**, not huge desktop lines.

Do not make the text tiny merely to fit more onto the screen.

---

# 22. SECTION DIVIDERS

Where the current body needs clearer section rhythm, consider restrained dividers.

Possible treatment:

```text
BACKGROUND
─────────────────────────
```

or rely on H2 + spacing.

Do not put every section into a card.

The article itself should largely live directly on the page background.

---

# 23. IMAGE CAPTION REFINEMENT

Keep captions and sources.

They are important.

But on the hero:

- caption should be slightly less visually heavy than the main content
- source should remain visible and clickable if applicable
- source gold should not overpower the caption
- maintain strong contrast
- use consistent spacing

If an image is not contemporary, captions should continue to make that clear.

Do not alter attribution data.

---

# 24. OPTIONAL GALLERY SUPPORT

Do not build an elaborate gallery system if none exists.

However, if article pages already support multiple images, consider a subtle treatment near the hero such as:

```text
View gallery · 4 images
```

This should only appear when multiple article images genuinely exist.

Major ruler, battle, war, and location articles will increasingly contain:

- manuscript illustrations
- reconstructions
- maps
- coins
- seals
- monuments
- tombs
- battlefield photographs

The header should be able to scale gracefully as that archive grows.

---

# 25. RESPONSIVE BEHAVIOR

This redesign must be designed for at least:

- wide desktop
- normal desktop/laptop
- tablet
- mobile

Do not simply make the desktop design collapse unpredictably.

## Wide desktop

Two-column hero / article rail works well.

## Laptop

Ensure the left image does not steal excessive width from body content.

## Tablet

Likely collapse hero to single column earlier than today if necessary.

## Mobile

Recommended order:

```text
Back
Category
Title
Summary
Favorite
Image
Caption
Metadata
On this page
Article
```

or another arrangement proven cleaner by existing architecture.

Do not create horizontal scrolling.

Do not preserve two-column faction comparisons below widths where readability suffers.

---

# 26. ACCESSIBILITY

Preserve or improve:

- WCAG contrast
- semantic headings
- keyboard focus states
- button labels
- anchor navigation
- screen-reader labels
- image alt text
- clickable target sizes

Do not encode historical entity type solely through color.

Gold text on dark surfaces must remain sufficiently legible.

---

# 27. DO NOT TURN THE SITE GENERIC

Avoid fashionable but inappropriate patterns such as:

- glassmorphism
- giant blurred gradients
- excessive animation
- floating blobs
- neon sci-fi glow
- generic SaaS icon cards
- giant hero gradients covering historical images
- gratuitous parallax
- huge rounded rectangles everywhere
- aggressive drop shadows

Iron Codex should feel **timeless, scholarly, dark, and monumental**.

Its modernity should come from precision and interaction quality, not decorative trends.

---

# 28. BORDER RADIUS

Audit current rounding.

Historical article interfaces should not feel like every element is an iOS widget.

Reduce excessive rounding if present.

Use subtle radii consistently.

Images, surfaces and controls may retain modest rounding if that is already part of the Codex identity.

Do not make every container a rounded card.

---

# 29. MOTION

Keep motion restrained.

Appropriate:

- subtle hover transition
- link underline/colour transition
- TOC active-section movement
- very gentle image interaction
- Favorite state transition

Avoid:

- large entrance animations
- scrolling theatrics
- animated medieval flourishes
- content shifting around

The history is the spectacle.

---

# 30. APPLY THIS ACROSS ALL ARTICLE TYPES

After establishing the shared design improvements, audit **every major article template** in the repository.

Likely categories may include:

- People
- Rulers
- Events
- Battles
- Wars
- Locations
- Realms / Kingdoms
- Houses / Dynasties
- Civilizations
- Weapons
- Armor
- Artifacts
- Periods
- other content types actually present in the codebase

Do not assume these names.

Inspect the repository.

Apply the design principles wherever the same problems exist.

Do not force every article type into an identical layout.

For example:

## Ruler page

High-priority metadata:

- reign
- realm
- house/dynasty
- predecessor
- successor
- spouse / issue where appropriate
- family tree

## Battle page

High-priority metadata:

- date
- location
- conflict
- factions
- commanders
- strength
- outcome

## Weapon page

High-priority metadata:

- period
- type
- dimensions
- weight
- region
- materials

## Location page

High-priority metadata:

- modern location
- historical realm
- type
- period
- coordinates where used

Each template should retain its semantic identity while participating in one coherent design system.

---

# 31. BUILD SHARED PRIMITIVES

Where technically appropriate, create/refine reusable components such as:

- `ArticleHero`
- `ArticleMeta`
- `ArticleMetaItem`
- `ArticleSidebar`
- `ArticleTableOfContents`
- `EntityLink`
- `PersonLink`
- `RealmLink`
- `ArticleOutcome`
- `ArticleComparison`
- `RelatedEntities`
- `StoryContinues`

Names are illustrative.

Use repository naming conventions.

Do not create abstractions solely for abstraction's sake.

If current architecture already has equivalent components, refactor those rather than creating parallel systems.

---

# 32. DO NOT MASS-EDIT ARTICLE DATA TO ACHIEVE VISUAL CONSISTENCY

The styling problem should primarily be solved at component/template level.

Avoid changing hundreds of content records just to satisfy a new visual component.

Content migrations are acceptable only when genuinely required by the current data model.

---

# 33. TEST BATTLE OF BRUNANBURH AS THE PRIMARY VISUAL BENCHMARK

After implementing the shared system, revisit:

`/events/battle-of-brunanburh`

It should satisfy all of the following:

- image remains prominent
- title remains monumental
- article identity is immediately obvious
- summary is visible if supported by existing data
- Favorite no longer dominates
- duplicate `BATTLE` label is gone
- metadata is cleaner
- pale-grey card overload is gone
- Factions no longer looks like nested dashboard cards
- Leaders no longer look identical to kingdoms
- Outcome is highly scannable
- left-side dead space is productively used
- article TOC makes the long page easier to navigate
- Stamford Bridge continuation appears later in the story
- body transitions naturally from hero
- Related content remains rich
- page still unmistakably looks like Iron Codex

---

# 34. VISUAL REGRESSION PAGES

Do not judge the refactor only through Brunanburh.

Select at minimum representative pages from:

- one ruler/person article
- one battle
- one war
- one realm/kingdom
- one dynasty/house
- one location
- one weapon/armor article
- one very short article
- one very long article
- one article with many metadata fields
- one article with very little metadata
- one article with multiple images
- one article without a good hero image

Verify each at desktop and mobile widths.

---

# 35. SPECIAL CARE FOR MISSING DATA

Components must degrade gracefully.

If an article lacks:

- image
- location
- faction
- predecessor
- successor
- dynasty
- summary
- additional images

do not leave:

- blank boxes
- giant gaps
- "N/A" everywhere
- broken separators
- empty columns

The layout must close naturally around the available historical information.

---

# 36. PERFORMANCE

Do not turn the new article framework into a heavy client-side application.

Prefer:

- existing rendering architecture
- CSS layout
- simple browser-native behavior
- minimal client JS

TOC highlighting can use a lightweight IntersectionObserver implementation if needed.

Do not introduce a large dependency solely for this redesign unless there is an exceptional reason.

---

# 37. DO NOT BREAK URLS OR SEO

Preserve:

- current routes
- canonical URLs
- metadata
- OpenGraph data
- structured data
- article titles
- indexability

This is a UI refactor, not an information-architecture migration.

---

# 38. IMPLEMENTATION ORDER

Proceed in this order:

## Phase 1 — Audit

Inspect components/templates and report the architecture.

## Phase 2 — Design primitives

Refactor shared article layout and metadata primitives.

## Phase 3 — Brunanburh benchmark

Implement the improved Event/Battle presentation and verify the reference page.

## Phase 4 — Other article families

Apply compatible improvements to other templates.

## Phase 5 — Responsive pass

Verify laptop/tablet/mobile layouts.

## Phase 6 — Accessibility

Keyboard, contrast, semantic markup, anchors.

## Phase 7 — Regression

Test representative article types.

## Phase 8 — Cleanup

Remove obsolete duplicate styles/components if safe.

---

# 39. TESTING

Run all existing project checks.

At minimum, where available:

- typecheck
- lint
- unit tests
- integration tests
- production build

Then inspect representative routes manually.

No task is complete if the redesign looks excellent but creates:

- broken links
- layout overflow
- inaccessible controls
- hydration problems
- failed static generation
- missing content
- mobile regressions

---

# 40. DO NOT OVER-REFINE INTO STERILITY

Iron Codex should still have character.

Keep:

- the large imagery
- monumental titles
- gold
- deep black
- historical texture from artwork
- strong editorial voice
- sense of exploring an interconnected medieval world

The goal is **less UI chrome, more history**.

---

# 41. END STATE

The desired result should feel closer to:

> a premium interactive historical atlas, museum catalogue, and scholarly narrative archive

than:

> a modern admin dashboard populated with medieval data.

A visitor opening Battle of Brunanburh should first experience:

**the event**

then:

**its essential historical facts**

then:

**the narrative**

then:

**the surrounding web of people, realms, battles, and consequences.**

The interface should guide that progression quietly.

---

# 42. PRIME DIRECTIVE

Do not confuse richness with boxes.

Do not confuse interactivity with buttons.

Do not confuse hierarchy with background colours.

Let **typography, spacing, imagery, fine dividers, semantic links and composition** carry most of the visual hierarchy.

Preserve what already makes The Iron Codex distinctive.

Refine the architecture beneath it.

**Battle of Brunanburh is the benchmark. Fix the system, not merely that page.**


---

# APPENDIX C — Civilizations — Master Archive Expansion

> Folded into this file on 2026-09-16 from `iron-codex-civilizations-master-prompt.md`, which was then deleted.
> **Owned by:** QUEUE item 0e. **Status:** NOT STARTED — a new first-class archive category.
> The text below is the original, unaltered.

# The Iron Codex — Master Civilizations Archive Expansion

You are working on **the-iron-codex**.

This is one of the largest structural and historical expansions undertaken in the project.

We are creating an entirely new first-class archive category:

# CIVILIZATIONS

This must become a foundational historical layer of The Iron Codex.

This is **not** merely a request to add several articles about Germanic tribes.

The goal is to build a comprehensive civilization/people/culture system covering the major peoples who shaped **Europe and the immediately connected Mediterranean, Eurasian, North African and Near Eastern worlds from Late Antiquity through the end of the Middle Ages**, approximately:

**c. 300–1500**

Earlier history may be discussed where necessary to explain origins.

The primary geographical focus remains Europe, but peoples outside Europe must be included when they had major direct influence on medieval European history.

Examples include:

- Arabs
- Berbers
- Mongols
- Turks
- steppe peoples
- North African powers
- Near Eastern peoples involved in the Crusades

This expansion must also trigger a massive archive-wide audit of:

- People
- Rulers
- Queens
- Dynasties
- Houses
- Realms
- Kingdoms
- Empires
- Battles
- Wars
- Events
- Locations
- Religions
- Cultural relationships
- Migration events
- Conquests
- Successor states

The purpose is to transform the archive from a collection of historical articles into an interconnected historical knowledge graph.

---

# 1. FIRST PRINCIPLE: CIVILIZATION ≠ STATE

This distinction is absolutely fundamental.

A civilization, people, cultural identity, ethnic group or historical population is not automatically the same thing as a political state.

Examples:

**Ostrogoths**
≠
**Ostrogothic Kingdom**

**Visigoths**
≠
**Visigothic Kingdom**

**Franks**
≠
**Frankish Kingdom / Francia**

**Lombards**
≠
**Kingdom of the Lombards**

**Norse**
≠
**Kingdom of Norway**

**English**
≠
**Kingdom of England**

**Portuguese**
≠
**Kingdom of Portugal**

**Byzantine/Eastern Roman civilization**
≠
**Byzantine/Eastern Roman Empire as a political state**, although the relationship between Roman identity and the empire is unusually close and must be explained carefully.

Civilization pages describe **people and cultural identity**.

Realm pages describe **political institutions and territories**.

They must link to one another but must never be treated as interchangeable.

---

# 2. DO NOT FORCE EVERY GROUP INTO THE SAME CATEGORY

Historical identity is messy.

The Civilizations system must be flexible enough to represent several kinds of entities.

Examples include:

### Peoples / Ethnocultural Groups
- Goths
- Franks
- Lombards
- Magyars
- Serbs
- Croats
- Basques
- Slavs

### Broader Cultural Civilizations
- Norse
- Byzantine / Eastern Roman
- Anglo-Saxon
- Andalusi
- Rus'

### Developing Medieval Identities
- English
- Portuguese
- French
- Castilian
- Scottish

### Confederations
- Alemanni
- Franks
- Saxons

### Steppe Peoples
- Huns
- Avars
- Pechenegs
- Cumans
- Mongols

### Historical Cultural Phenomena

Some important concepts should exist as historical-cultural pages even though they are not ethnicities.

The most important example is:

**Vikings**

A Viking was not an ethnic group.

“Viking” refers primarily to Scandinavian raiding, trading, warfare and expansion during the Viking Age.

Therefore the architecture should distinguish:

**Norse / North Germanic peoples**

from:

**Viking Age / Vikings**

The Viking page should explain this explicitly.

Do not write as though every Scandinavian was a Viking.

---

# 3. NEW TOP-LEVEL ARCHIVE SECTION

Create:

`/civilizations`

or the equivalent route consistent with the current project architecture.

The index should allow users to explore the major peoples and civilizations of medieval Europe.

Civilization pages should use routes similar to:

`/civilizations/goths`

`/civilizations/norse`

`/civilizations/byzantines`

`/civilizations/english`

`/civilizations/portuguese`

`/civilizations/bulgarians`

etc.

Follow existing project routing conventions.

---

# 4. PERFORM AN ARCHIVE AUDIT FIRST

Before creating anything, inspect the entire repository.

Determine which relevant:

- civilization pages
- realms
- people
- rulers
- battles
- wars
- houses
- dynasties
- locations
- migrations
- events

already exist.

Never duplicate entities.

Examples:

If an **Ostrogothic Kingdom** article exists, keep it.

Create **Ostrogoths** separately and connect them.

If **Theodoric the Great** already exists, enrich his relationships instead of creating another version.

If **Kingdom of Portugal** exists, connect it to the emerging Portuguese civilization/identity.

---

# 5. MASTER CIVILIZATION COVERAGE

The following is the minimum civilization audit.

This is not merely a checklist to blindly generate.

For every entry:

1. determine historical relevance;
2. determine whether a dedicated civilization page is appropriate;
3. determine chronological boundaries;
4. determine parent/child relationships;
5. determine whether the identity changes substantially through time;
6. identify related kingdoms;
7. identify rulers;
8. identify major battles/events;
9. identify existing archive material;
10. create missing high-value content.

---

# PART I — GERMANIC & MIGRATION PERIOD PEOPLES

At minimum audit and include:

## Goths

Create an overarching Gothic civilization article.

Connect:

- Visigoths
- Ostrogoths
- Greuthungi where historically useful
- Tervingi where historically useful
- Gothic language
- Ulfilas/Wulfila
- Roman frontier
- Huns
- Adrianople
- Alaric
- Theodoric
- Visigothic Kingdom
- Ostrogothic Kingdom

Do not portray Visigoths and Ostrogoths as two immutable ancient ethnic units that always existed in their later form.

Explain the historical development of those identities.

## Visigoths

Full civilization page.

Connect the entire trajectory:

- Danube crossing
- Roman relations
- Adrianople
- Alaric I
- Sack of Rome
- settlement in Gaul
- Toulouse
- Visigothic Kingdom
- Catalaunian Plains
- Euric
- Vouillé
- retreat into Hispania
- Toledo
- Leovigild
- Reccared
- conversion from Arian to Nicene Christianity
- Visigothic law
- royal councils
- Byzantine presence in Hispania
- Muslim conquest
- Roderic
- legacy in medieval Iberia

Audit all major Visigothic rulers.

## Ostrogoths

Connect:

- Gothic origins
- Hunnic domination
- Hunnic collapse
- Amal dynasty
- Theodoric the Great
- Italy
- Ravenna
- Roman senatorial culture
- Ostrogothic Kingdom
- Justinian
- Gothic War
- Belisarius
- Totila
- Teia
- Byzantine reconquest

## Vandals

Connect:

- Hasdingi
- Silingi
- Rhine crossing
- Gaul
- Hispania
- North Africa
- Genseric
- Carthage
- Mediterranean naval power
- Sack of Rome 455
- Arian Christianity
- Vandal Kingdom
- Justinian
- Belisarius
- Vandalic War
- Ad Decimum
- Tricamarum

## Lombards / Langobards

Cover:

- early origins
- migration
- Pannonia
- Gepid conflicts
- Alboin
- invasion of Italy
- Lombard duchies
- Pavia
- Kingdom of the Lombards
- Byzantine relations
- Theodelinda
- Rothari
- Liutprand
- Aistulf
- Desiderius
- Charlemagne
- Lombard legacy in Italy

## Franks

Include:

- early confederation
- Salian Franks
- Ripuarian Franks
- Roman military interaction
- foederati
- Childeric
- Clovis
- Soissons
- Tolbiac
- Vouillé
- conversion
- Merovingians
- Austrasia
- Neustria
- Burgundy
- Carolingian transition
- Francia

## Burgundians

Include:

- Rhine settlement
- Roman relationship
- early Burgundian kingdom
- destruction by Hunnic/Roman forces
- Rhône settlement
- Kingdom of Burgundy
- Gundobad
- Burgundian law
- Frankish conquest
- later Burgundian historical identity

## Suebi / Sueves

Include:

- Rhine crossing
- Hispania
- Gallaecia
- Suebic Kingdom
- Braga
- conversion
- relations with Visigoths
- Visigothic conquest

## Alemanni / Alamanni

Include:

- Roman frontier
- confederation
- Alemannia
- warfare with Rome
- Frankish conquest
- Swabian legacy where appropriate

## Gepids

Include:

- relation to Gothic world
- Hunnic domination
- Battle of Nedao
- Carpathian Basin
- Gepid kingdom
- Lombard conflict
- Avars
- collapse

## Heruli

## Rugii / Rugi

## Sciri

## Thuringians

## Frisians

## Baiuvarii / Bavarians

## Marcomanni where relevant

## Quadi where relevant

## Taifals where relevant

Other late antique Germanic peoples should be included when they remain relevant to the transformation into medieval Europe.

Do not create meaningless one-paragraph pages for obscure groups.

---

# PART II — THE NORSE WORLD

This section is essential.

The archive must contain a strong civilization-level treatment of:

# NORSE / NORTH GERMANIC PEOPLES

Explain:

- Scandinavian Iron Age background
- North Germanic languages
- social structure
- jarls
- kings
- free farmers
- thralls
- assemblies / Things
- law
- religion
- seafaring
- shipbuilding
- trade
- warfare
- settlement
- conversion to Christianity
- kingship
- development of Scandinavian kingdoms

Connect to:

- Denmark
- Norway
- Sweden
- Iceland
- Faroe Islands
- Greenland
- British Isles
- Normandy
- Rus'
- Baltic
- North Atlantic
- Vinland where appropriate

# VIKINGS

Create a major separate page for:

**Vikings**

But explicitly state that Vikings were not a separate ethnicity.

Explain the Old Norse term and the historical debate surrounding it.

Cover:

- raiding
- trading
- exploration
- mercenary service
- settlement
- warfare
- longships
- river routes
- eastern expansion
- western expansion
- North Atlantic expansion

Major events should include:

- Lindisfarne
- Great Heathen Army
- Siege of Paris
- settlement of Normandy
- Danelaw
- Battle of Edington
- Scandinavian conquest of England
- Cnut's North Sea Empire
- Icelandic settlement
- Greenland
- Vinland
- Varangian routes
- Viking involvement in Rus'
- Stamford Bridge

# DANES

Create civilization/people treatment where useful.

Connect to:

- Denmark
- Viking Age expansion
- England
- Danelaw
- Harald Bluetooth
- Sweyn Forkbeard
- Cnut
- North Sea Empire

# NORWEGIANS

Connect:

- Harald Fairhair traditions
- Norway
- Atlantic expansion
- Iceland
- Greenland
- Ireland
- Scotland
- Normandy connections where appropriate

# SWEDES / SVEAR

Connect:

- Svealand
- Götar where appropriate
- Baltic trade
- eastern Viking routes
- Rus'
- Varangians
- Swedish kingdom formation

# GEATS / GÖTAR

Investigate whether a dedicated article is warranted.

Do not confuse:

**Goths**

with:

**Geats/Götar**

Explain the distinction clearly.

# VARANGIANS

Create a page if absent.

Connect:

- Scandinavia
- Rus'
- Byzantium
- Varangian Guard
- eastern trade routes

---

# PART III — BRITISH ISLES

The archive needs a complete civilization framework for Britain and Ireland.

# ANGLO-SAXONS

Major civilization page.

Connect:

- Angles
- Saxons
- Jutes
- Frisians where relevant
- post-Roman Britain
- migration/settlement debate
- Old English
- paganism
- Christianization
- kingdoms
- law
- warfare
- social structure
- Viking invasions
- Alfred
- English unification

# ANGLES

Dedicated civilization/people article.

# SAXONS

Distinguish carefully between:

- continental Saxons
- Saxon migration to Britain
- Anglo-Saxons
- later Saxony

Do not merge these identities into one timeless entity.

# JUTES

Create if historically justified.

Connect to Kent, Isle of Wight and migration traditions while noting scholarly uncertainty.

# ENGLISH

This absolutely needs a separate page.

The English identity is not simply identical to Anglo-Saxon identity.

Explain development through:

- Anglo-Saxon kingdoms
- Christianization
- West Saxon expansion
- Viking settlement
- Danelaw
- political unification
- Kingdom of England
- Norman Conquest
- integration of Norman aristocracy and English population
- Middle English
- Plantagenet England
- development of later medieval English identity

Connect rulers from:

- Alfred
- Æthelstan
- Edgar
- Æthelred
- Cnut
- Edward the Confessor
- Harold Godwinson
- William the Conqueror
- Plantagenets

appropriately through realms rather than pretending they share identical cultural contexts.

# BRITONS / BRITTONIC PEOPLES

Create a broad page where appropriate.

Connect to:

- post-Roman Britain
- Welsh
- Cornish
- Cumbrians
- Breton migration

# WELSH / CYMRY

Include:

- post-Roman kingdoms
- Gwynedd
- Powys
- Deheubarth
- Welsh law
- Norman conflict
- English conquest
- Llywelyn rulers

# CORNISH

Evaluate dedicated treatment.

# BRETONS

Include migration from Britain into Armorica and medieval Brittany.

# PICTS

Major early medieval civilization page.

Connect:

- northern Britain
- Pictish kingdoms
- Fortriu
- Gaelic interaction
- Viking pressure
- emergence of Alba

# GAELS

Major cultural page.

Connect:

- Ireland
- Dál Riata
- Scotland
- Gaelic language
- kingship
- monasteries
- warfare

# IRISH

Create medieval Irish civilization page.

Cover:

- Gaelic Ireland
- túatha
- overkingship
- High Kingship
- monasteries
- Viking settlements
- Dublin
- Brian Boru
- Norman invasion
- Gaelic-Norman interaction

# SCOTS

Explain development of medieval Scottish identity from:

- Picts
- Gaels
- Britons
- Anglo-Saxons
- Norse
- Norman influence

Connect to:

- Alba
- Kingdom of Scotland
- House of Dunkeld
- Wars of Scottish Independence
- Bruce
- Balliol

---

# PART IV — IBERIAN PENINSULA

Do not create a single timeless “Spanish civilization” beginning in Late Antiquity.

The medieval Iberian world was much more complicated.

Create the relevant identities separately and explain how later Portuguese and Spanish identities emerge.

# HISPANO-ROMANS

Evaluate a page explaining the late antique Roman population of Hispania and its interaction with Visigoths.

# VISIGOTHS

Already covered above but deeply integrated into Iberian history.

# ANDALUSI / AL-ANDALUS

Create a major civilization/cultural page.

Explain that Andalusi society was multiethnic and multireligious.

Cover:

- Arab conquerors
- Berbers
- local converts
- Christians
- Jews
- Umayyad Córdoba
- Arabic culture
- Mozarabs
- Muladis
- taifa period
- Almoravids
- Almohads
- Granada

Do not simply label everyone in al-Andalus “Arab.”

# ARABS IN IBERIA

Create separate broader Arab civilization coverage if architecture supports it.

# BERBERS / AMAZIGH

Absolutely include.

Connect:

- North Africa
- conquest of Iberia
- Almoravids
- Almohads
- military settlement
- taifa politics

# MOZARABS

Evaluate dedicated civilization/community article.

# MULADIS

Evaluate dedicated identity page.

# BASQUES

Major civilization/people page.

Include:

- Vascones
- Pyrenean geography
- language
- Navarre
- relations with Franks
- Iberian kingdoms

Avoid simplistic claims of direct unchanged continuity where evidence is uncertain.

# GALICIANS

Include medieval Galicia and its cultural identity.

Connect:

- Gallaecia
- Suebi
- Kingdom of Galicia
- León
- Portugal
- Galician-Portuguese culture

# PORTUGUESE

This must be a major page.

Explain that Portuguese identity develops during the medieval period rather than existing unchanged since antiquity.

Cover:

- Roman/Lusitanian background only where relevant
- Suebi
- Visigoths
- Muslim conquest
- Christian northern polities
- Galicia
- County of Portugal
- Portucale
- Galician-Portuguese cultural context
- Afonso Henriques
- Kingdom of Portugal
- Treaty of Zamora
- Reconquista
- consolidation of borders
- Portuguese language
- Burgundy dynasty
- Avis dynasty
- late medieval maritime expansion

Connect all Portuguese monarchs already covered or missing.

# LEONESE

Include the Kingdom of León and Leonese identity where appropriate.

# ASTURIANS

Include:

- Kingdom of Asturias
- post-Visigothic Christian resistance traditions
- Pelagius
- Covadonga
- expansion into León

Avoid nationalist myth-making.

# CASTILIANS

Major civilization/cultural identity page.

Connect:

- County of Castile
- Kingdom of Castile
- León
- Reconquista
- Castilian language
- Castilian monarchy
- Crown of Castile

# ARAGONESE

Connect:

- Aragón
- Kingdom of Aragón
- Crown of Aragón
- Pyrenean origins
- Mediterranean expansion

# CATALANS

Major regional civilization/cultural page.

Connect:

- Carolingian Spanish March
- counties of Barcelona
- Catalan language
- Crown of Aragón
- Mediterranean commerce

# NAVARRESE

Connect:

- Pamplona
- Kingdom of Navarre
- Basque and Romance cultural interaction

# “SPANISH”

Create a page only if the architecture supports **late medieval emerging identities**.

Do not represent “Spanish” as a single civilization throughout the entire period.

Instead explain the gradual political and cultural consolidation of what eventually becomes Spain through:

- Castile
- León
- Aragón
- Catalonia
- Navarre
- Galicia
- Basque regions
- al-Andalus
- Granada

The dynastic union of Castile and Aragón is an important late medieval development but should not be projected backward.

---

# PART V — FRANCE AND THE LOW COUNTRIES

# GALLO-ROMANS

Include where useful for transition from Roman Gaul to Frankish rule.

# FRANKS

Covered above.

# FRENCH

Create a later medieval civilization/cultural identity page.

Explain development from:

- Gallo-Romans
- Franks
- West Francia
- Capetian monarchy
- langue d'oïl cultures
- territorial consolidation
- Hundred Years' War and strengthening of French identity

Do not treat Clovis as culturally identical to a 14th-century Frenchman.

# NORMANS

Absolutely create.

Connect:

- Norse settlers
- Normandy
- Rollo
- Christianization
- French linguistic assimilation
- England
- Sicily
- southern Italy
- Crusades
- Byzantine relations

Normans are one of the most important cross-European medieval cultural groups.

# FLEMINGS / FLEMISH

Evaluate dedicated page due to major economic, military and political significance.

# DUTCH / LOW FRANCONIAN PEOPLES

Use chronological caution.

Late medieval Dutch identity can be discussed but should not be projected backward.

# FRISIANS

Major regional civilization page.

---

# PART VI — GERMAN & CENTRAL EUROPEAN PEOPLES

Do not create a timeless “German civilization” from antiquity onward.

Explain the gradual emergence of German-speaking medieval identities within East Francia and the Holy Roman Empire.

# GERMANS / MEDIEVAL GERMAN PEOPLES

Create a contextual civilization page covering:

- East Francia
- German stem duchies
- Holy Roman Empire
- German language development
- regional identities

Link major subgroups rather than erasing them.

# SAXONS

Continental Saxons deserve full treatment.

Connect:

- Old Saxony
- Charlemagne
- Saxon Wars
- Christianization
- Duchy of Saxony
- Ottonians

# BAVARIANS

Connect:

- Baiuvarii
- Bavaria
- Agilolfings
- Carolingians
- Holy Roman Empire

# SWABIANS

Explain connections to Alemanni and medieval Swabia.

# THURINGIANS

# FRANCONIANS

Evaluate medieval regional identity.

# AUSTRIANS

Do not project modern Austrian identity too early.

Discuss emergence around:

- Bavarian eastern march
- Babenbergs
- Duchy of Austria
- Habsburgs

only where meaningful.

---

# PART VII — ITALIAN PENINSULA

Italy requires especially careful treatment because there is no single unified medieval Italian political civilization.

# ITALO-ROMANS / ROMAN ITALIANS

Create a late antique bridge where useful.

# LOMBARDS

Already covered.

# ITALIANS

Create a medieval Italian cultural civilization page, but explicitly explain the enormous regional diversity.

Cover gradual development through:

- Roman heritage
- Lombard and Byzantine rule
- Papal territories
- communes
- city-states
- Romance vernaculars
- shared Latin/Christian culture
- emerging Italian literary identity

Do not imply that medieval Italy functioned as a unified nation-state.

# VENETIANS

Major civilization/cultural-political page.

Connect:

- Venice
- lagoon settlement
- Byzantium
- maritime trade
- Crusades
- Venetian Empire
- Genoese rivalry

# GENOESE / LIGURIANS

Create medieval Genoese identity page where useful.

# TUSCANS

Evaluate based on Florence and cultural importance.

# FLORENTINES

A civic identity rather than a broad civilization, but potentially appropriate as a culture page if the model permits urban cultures.

# SICILIANS

Important.

Explain layers of:

- Roman
- Byzantine
- Arab
- Berber
- Norman
- Greek
- Latin
- Jewish

influence.

Connect:

- Emirate of Sicily
- Norman Sicily
- Kingdom of Sicily

# SARDINIANS

Include due to distinct language, culture and Judicates.

# SOUTHERN ITALIAN GREEKS

Evaluate Byzantine/Greek population continuity.

# NORMANS OF SOUTHERN ITALY

Connect through the broader Norman civilization rather than creating unnecessary duplication.

---

# PART VIII — BYZANTINE / EASTERN ROMAN WORLD

This is mandatory and should become one of the richest civilization pages.

# ROMANS / EASTERN ROMANS / BYZANTINES

Handle terminology with exceptional care.

The inhabitants of the empire generally understood themselves as:

**Romans — Rhomaioi**

“Byzantine” is a later scholarly convention.

Therefore the canonical article might be:

**Eastern Romans (Byzantines)**

or another solution consistent with the project's naming conventions.

The page must explicitly explain the terminology.

Cover:

- continuity from Roman Empire
- Constantinople
- Roman identity
- Greek language
- Latin heritage
- imperial government
- Orthodox Christianity
- law
- military organization
- themes
- diplomacy
- court culture
- economy
- art
- education
- relationship with western Europeans
- relationship with Slavs
- Bulgaria
- Rus'
- Crusaders
- Arabs
- Turks
- Venice
- Genoa
- Ottoman conquest

Important rulers must link naturally:

- Constantine I where relevant
- Justinian
- Heraclius
- Basil I
- Basil II
- Alexios I Komnenos
- John II
- Manuel I
- emperors surrounding 1204
- Palaiologoi
- Constantine XI

Do not imply that the Byzantine Empire was somehow “less Roman” because Greek became dominant.

---

# PART IX — THE BALKANS

This area requires major expansion.

# SOUTH SLAVS

Create a broad parent civilization page.

Connect:

- Serbs
- Croats
- Slovenes
- Bulgarians where Slavic component applies
- Macedonian Slavic populations where historically appropriate
- Byzantine interaction

Do not assume modern ethnic categories map perfectly onto early medieval populations.

# SERBS

Major civilization page.

Cover:

- early Slavic settlement
- principalities
- Raška
- Duklja
- Nemanjić dynasty
- Serbian Kingdom
- Serbian Empire
- Stefan Nemanja
- Stefan Dušan
- Orthodox Church
- Byzantium
- Kosovo
- Ottoman expansion

# CROATS

Major civilization page.

Cover:

- early settlement
- Croatian duchies
- Kingdom of Croatia
- Tomislav
- relationship with Byzantium
- Venice
- Hungary
- union with Hungary

# SLOVENES / CARANTANIANS

Include:

- Carantania
- Alpine Slavs
- Christianization
- Bavarian/Frankish influence

Use historically appropriate terminology.

# BOSNIANS

Create a medieval Bosnian cultural/political page.

Connect:

- Banate of Bosnia
- Kingdom of Bosnia
- Bosnian Church
- Serbia
- Croatia
- Hungary
- Ottomans

Avoid projecting modern ethnic identities backwards without evidence.

# ALBANIANS

Major civilization page.

Handle origins carefully.

Include:

- earliest reliable medieval references
- Albanian language
- Byzantine world
- principalities
- Angevins
- Serbs
- Venice
- Ottomans
- Skanderbeg

Avoid presenting disputed Illyrian continuity as indisputable fact.

# DALMATIANS

Evaluate a page for Romance-speaking medieval Dalmatian communities.

Connect:

- Roman cities
- Byzantium
- Croatia
- Venice

# VLACHS

Major page.

This is essential for Romanian/Balkan history.

Explain the medieval term **Vlach** and its changing meanings.

Cover:

- Romance-speaking Balkan populations
- pastoralism where relevant
- Byzantium
- Balkans
- Carpathians
- Wallachia
- Moldavia

Do not assume every source using “Vlach” refers to precisely the same population.

# ROMANIANS

Create a later medieval civilization page.

Explain emergence carefully through:

- Eastern Romance speakers
- Vlachs
- Transylvania
- Wallachia
- Moldavia
- Hungarian Kingdom
- Byzantine and Slavic influence
- Orthodox Christianity

Important figures should include:

- Basarab I
- Mircea the Elder
- Vlad II Dracul
- Vlad III Dracula
- Stephen the Great

where within chronological scope.

Do not project modern Romanian nationalism backward into poorly documented centuries.

---

# PART X — BULGARIA AND THE BULGARIAN WORLD

This deserves especially strong coverage.

There should not simply be one “Bulgarian” article with everything collapsed into it.

# BULGARS

Create a civilization page for the early **Bulgars**.

Explain:

- steppe origins
- likely Turkic linguistic background
- Pontic-Caspian context
- Old Great Bulgaria
- Kubrat
- Asparuh
- migration into Balkans
- interaction with Slavic populations

Distinguish:

**Bulgars**

from later:

**Bulgarians**

# OLD GREAT BULGARIA

Keep as realm/political entity, linked to Bulgars.

# VOLGA BULGARS

Create civilization branch or dedicated page.

Connect:

- Volga Bulgaria
- Islam
- trade
- Rus'
- steppe world
- Mongol conquest

Do not confuse them with Balkan Bulgarians.

# DANUBE BULGARS

Represent the Balkan Bulgar component appropriately.

# BULGARIANS

Create a major medieval Bulgarian civilization page.

Explain formation through interaction and fusion of:

- Bulgars
- South Slavs
- local Balkan populations
- Byzantine cultural influence

Cover:

- First Bulgarian Empire
- Christianization
- Boris I
- Simeon the Great
- Preslav
- Cyrillic literary culture
- Byzantine conquest
- Basil II
- Bulgarian uprisings
- Second Bulgarian Empire
- Asen dynasty
- Kaloyan
- Ivan Asen II
- Serbian interaction
- Mongols
- Ottoman conquest

---

# PART XI — HUNGARY & THE STEPPE-CARPATHIAN WORLD

# MAGYARS

Major civilization page.

Cover:

- Uralic linguistic origins
- Pontic steppe
- migration
- Carpathian Basin
- Hungarian conquest
- raids into Europe
- Lechfeld
- Christianization
- Stephen I
- Kingdom of Hungary

# HUNGARIANS

Potentially distinguish later Christian medieval Hungarian civilization from earlier Magyars while making the continuity clear.

Connect:

- Árpád dynasty
- Hungary
- Croats
- Cumans
- Mongol invasion
- Transylvania
- Balkans
- Habsburgs later

# SZÉKELY

Evaluate dedicated coverage where appropriate.

# CUMANS / KIPCHAKS

Major steppe civilization page.

Connect:

- Pontic steppe
- Rus'
- Hungary
- Balkans
- Mongols
- Cuman settlement in Hungary

# PECHENEGS

Major page.

Connect:

- Byzantium
- Rus'
- Bulgaria
- Hungary
- steppe politics

# AVARS

Major civilization page.

Cover:

- Avar Khaganate
- Carpathian Basin
- Byzantium
- Slavs
- siege of Constantinople 626
- Frankish conquest

# HUNS

Major page.

Although primarily Late Antique, they are indispensable to Migration Period history.

Connect:

- Attila
- Goths
- Romans
- Catalaunian Plains
- Nedao

Avoid simplistic ethnic continuity claims with later steppe peoples.

---

# PART XII — SLAVIC & CENTRAL/EASTERN EUROPE

# SLAVS

Create a major parent civilization article.

Cover:

- early sources
- archaeology
- linguistic expansion
- settlement
- social structure
- religion
- Christianization
- Byzantine relations

Explain subdivisions carefully.

# WEST SLAVS

Create parent grouping if useful.

Connect:

- Poles
- Czechs
- Moravians
- Slovaks
- Pomeranians
- Polabian Slavs
- Sorbs

# POLES

Major page.

Connect:

- West Slavs
- Piasts
- Mieszko I
- Christianization
- Bolesław I
- Kingdom of Poland
- fragmentation
- Teutonic Order
- Lithuania
- Jagiellonians

# CZECHS / BOHEMIANS

Major page.

Connect:

- Bohemia
- Přemyslids
- Great Moravia
- Holy Roman Empire
- Luxembourg dynasty
- Hussites

# MORAVIANS

Create page.

Connect:

- Great Moravia
- Mojmirids
- Cyril and Methodius
- Slavic Christianity

# SLOVAKS

Use extreme chronological caution.

Do not project modern Slovak identity directly into Great Moravia.

Create only if historically justified within the project's model.

# POMERANIANS

Include.

# POLABIAN SLAVS

Include as parent identity.

Connect:

- Obotrites
- Veleti/Lutici
- Rani
- Wendish Crusade
- German eastward expansion

# SORBS

Evaluate.

---

# PART XIII — THE RUS' WORLD

This is essential.

# RUS'

Create a major civilization page.

Do not simply label early Rus' as “Russian.”

Explain:

- Varangian element
- East Slavic populations
- Finnic populations
- trade networks
- Dnieper route
- Kyiv
- Novgorod
- Rurikid dynasty
- Byzantium
- Christianization
- Vladimir the Great
- Yaroslav the Wise
- fragmentation
- Mongol conquest

# EAST SLAVS

Parent civilization page where useful.

# NOVGORODIANS

Consider a regional civic/cultural page because Novgorod developed a distinctive medieval political culture.

# RUTHENIANS

Use terminology carefully.

# RUSSIANS

Do not use “Russian” indiscriminately for Kievan Rus'.

Explain the gradual development of northeastern Rus' identities.

Connect:

- Vladimir-Suzdal
- Moscow
- Muscovy

# UKRAINIAN & BELARUSIAN IDENTITIES

Do not project modern national identities backward into the early medieval period.

If discussed, explain their later historical development from the Rus' world.

---

# PART XIV — BALTIC PEOPLES

The Baltic region needs substantial coverage.

# BALTS

Parent civilization page.

# PRUSSIANS / OLD PRUSSIANS

Major page.

Connect:

- Baltic paganism
- Prussian tribes
- Teutonic Order
- Prussian Crusade
- conquest and assimilation

# LITHUANIANS

Major page.

Connect:

- Baltic paganism
- Grand Duchy of Lithuania
- Mindaugas
- Gediminas
- Algirdas
- Kęstutis
- Jogaila
- Christianization
- Poland
- Teutonic Order

# LATGALIANS

# SEMIGALLIANS

# SELONIANS

# CURONIANS

Include major Baltic peoples involved in the Northern Crusades.

# LIVONIANS

Important Finnic people.

Do not classify them as Baltic linguistically.

---

# PART XV — FINNIC & NORTHERN PEOPLES

# FINNS

Create medieval Finnic civilization page carefully.

# ESTONIANS

Include:

- prehistoric/early medieval Estonia
- Danish conquest
- Livonian Crusade
- Teutonic Order

# LIVONIANS

As above.

# KARELIANS

Include where relevant to Novgorod and Sweden.

# SAMI

Major indigenous northern European civilization page.

Discuss:

- geography
- livelihoods
- religion
- relations with Norse
- Finnic peoples
- Scandinavian kingdoms
- taxation

Avoid reducing Sami history to their interactions with southern states.

---

# PART XVI — STEPPE & EURASIAN PEOPLES

These peoples repeatedly transformed European history.

# KHAZARS

Major page.

Connect:

- Khazar Khaganate
- Judaism of elite
- steppe trade
- Rus'
- Byzantium
- Arabs

# ALANS

Major page.

Connect:

- Iranian origins
- Migration Period
- Vandals
- Caucasus
- steppe

# SARMATIANS

Earlier background where relevant.

Do not overextend scope.

# MONGOLS

Major civilization page.

Cover:

- Mongol Empire
- invasion of Rus'
- Poland
- Hungary
- Golden Horde
- European diplomacy

# TATARS

Explain emergence from Mongol imperial context carefully.

# GOLDEN HORDE CULTURAL WORLD

Political realm remains separate but strongly linked.

---

# PART XVII — GREEK WORLD

Do not assume “Greek” and “Byzantine” are perfect synonyms.

# GREEKS

Create a medieval Greek civilization page if architecture supports it.

Explain:

- Greek language
- Eastern Roman identity
- Orthodox Christianity
- regional Greek populations
- Byzantine state
- Latin states after 1204
- Ottoman conquest

A Greek-speaking Byzantine generally considered himself Roman politically/culturally.

The article must preserve that nuance.

---

# PART XVIII — MEDITERRANEAN & ISLAMIC CIVILIZATIONS

Because medieval European history is impossible to understand in isolation.

# ARABS

Major civilization page.

Cover:

- Arabian origins
- Islamic conquests
- Umayyads
- Abbasids
- Iberia
- Sicily
- Mediterranean
- Crusades

# BERBERS / AMAZIGH

Already noted, but give major treatment.

# ANDALUSIS

Major page.

# SICILIAN MUSLIMS

Link to broader Andalusi/Arab/Berber context where appropriate.

# TURKS

Create broad parent page carefully.

# OGHUZ TURKS

# SELJUK TURKS

Major page.

Connect:

- Seljuk Empire
- Anatolia
- Manzikert
- Byzantium
- Crusades
- Sultanate of Rum

# OTTOMAN TURKS

Relevant to late medieval period.

Connect:

- Anatolia
- Balkans
- Byzantium
- Kosovo
- Nicopolis
- Constantinople 1453

---

# PART XIX — CRUSADER & LEVANTINE CULTURAL IDENTITIES

Investigate whether the architecture benefits from:

# FRANKS OF THE LEVANT

Contemporary eastern sources often referred broadly to Latin crusaders as Franks.

Explain this usage carefully.

# OUTREMER LATINS

Potential cultural page covering Latin Christian settler society in:

- Kingdom of Jerusalem
- Antioch
- Tripoli
- Edessa

Do not treat this as an ancient ethnicity.

# ARMENIANS

Major civilization page.

Armenian history is essential to:

- Byzantium
- Caucasus
- Crusades
- Cilicia
- Seljuks
- Mongols

Include:

- Armenian Kingdoms
- Cilician Armenia
- Armenian Apostolic Church

# GEORGIANS

Major page.

Connect:

- Georgian Kingdom
- Bagratids
- David IV
- Tamar
- Byzantium
- Seljuks
- Mongols

---

# PART XX — JEWISH MEDIEVAL COMMUNITIES

The Codex should not present medieval Europe as entirely Christian and Muslim.

Evaluate major cultural/community pages for:

# ASHKENAZI JEWS

# SEPHARDIC JEWS

Explain:

- settlement regions
- language
- religious life
- economic roles without stereotypes
- legal status
- intellectual culture
- persecution
- expulsions
- interactions with Christian and Muslim societies

Do not treat Jewish communities as a single homogeneous medieval population.

---

# PART XXI — ROMANI

The Roma arrive in Europe during the later medieval period.

If within scope, create a historically careful article explaining:

- South Asian origins
- migration
- Byzantine references
- movement into Europe
- late medieval presence

Avoid reproducing stereotypes.

---

# PART XXII — CIVILIZATION ARTICLE STRUCTURE

Every major civilization article should contain, where appropriate:

## Overview

Who they were.

## Names and Identity

Explain:

- self-name/endonym
- names used by outsiders
- modern scholarly terminology
- alternative spellings

This is especially important for:

- Byzantines
- Rus'
- Vlachs
- Vikings
- Bulgars
- Goths

## Origins

Distinguish:

- historical evidence
- archaeology
- linguistic evidence
- later traditions
- legend

## Homeland / Geography

## Migration and Expansion

## Political Organization

## Society

## Social Hierarchy

## Law

## Warfare

## Weapons and Armor

Keep warfare sections consistent with Iron Codex historical standards.

## Religion

## Conversion / Religious Change

## Language

## Material Culture

## Economy

## Trade

## Settlements and Architecture

## Relations With Neighboring Peoples

## Major Realms

## Major Rulers

## Important Women

## Major Wars

## Major Battles

## Major Events

## Cultural Transformation

## Decline / Assimilation / Successor Identities

## Legacy

## Timeline

## Related Civilizations

## Related People

## Related Realms

## Related Battles

## Related Locations

---

# PART XXIII — PARENT / CHILD CIVILIZATION RELATIONSHIPS

Support hierarchical relationships.

Examples:

Goths
→ Visigoths
→ Ostrogoths

Norse
→ Danes
→ Norwegians
→ Swedes
→ Geats where appropriate

Slavs
→ West Slavs
→ East Slavs
→ South Slavs

West Slavs
→ Poles
→ Czechs
→ Moravians
→ Polabian Slavs

South Slavs
→ Serbs
→ Croats
→ Slovenes/Carantanians

Balts
→ Lithuanians
→ Old Prussians
→ Latgalians
→ Curonians
→ Semigallians

Rus'
→ regional successor cultures and states

The hierarchy must not imply biological purity or perfect descent.

These are historical/cultural relationships.

---

# PART XXIV — IDENTITY CHANGES OVER TIME

The system must be capable of representing cultural transformation.

Examples:

Norse settlers
→ Normans

Anglo-Saxons + Scandinavian settlement + Norman aristocracy
→ medieval English identity

Bulgars + Slavic populations
→ medieval Bulgarians

Romanized Balkan populations
→ Vlach/Eastern Romance communities
→ later Romanian identities

Franks + Gallo-Roman populations
→ medieval French populations

Galician-Portuguese frontier society
→ Portuguese identity

Castilian, Leonese, Aragonese, Catalan, Navarrese and other Iberian identities
→ later Spanish political identity

The archive should explain these developments rather than pretending medieval peoples were immutable.

---

# PART XXV — RULER AUDIT

For every civilization introduced, audit all rulers associated with its principal realms.

Do not stop after adding famous kings.

Systematically inspect royal succession lists.

For each ruler determine:

- Does the article exist?
- Is the ruler correctly mapped?
- Correct realm?
- Correct civilization?
- Correct dynasty?
- Correct predecessor?
- Correct successor?
- Correct reign?
- Correct major events?
- Correct related battles?

Create missing significant ruler articles.

---

# PART XXVI — QUEENS AND WOMEN

Audit major female historical actors.

Do not create an archive consisting almost exclusively of kings.

Investigate:

- reigning queens
- regents
- queen mothers
- politically powerful consorts
- dynastic heiresses
- religious patrons
- women central to succession crises

Examples throughout the archive may include figures such as:

- Amalasuntha
- Theodelinda
- Brunhilda
- Matilda
- Eleanor of Aquitaine
- Urraca of León
- Berengaria
- Tamar of Georgia
- Jadwiga
- Margaret I
- Isabella I
- Olga of Kyiv

where within scope and not already properly covered.

---

# PART XXVII — MAJOR EVENTS AUDIT

For every civilization, identify events necessary to understand its history.

Examples include:

- migrations
- invasions
- conversions
- civil wars
- conquests
- sacks
- settlements
- dynastic unions
- kingdom foundations
- collapses
- important treaties

Create missing event articles when historically significant.

---

# PART XXVIII — BATTLE AUDIT

Civilization expansion will expose missing battle coverage.

Audit major engagements involving each people.

Examples include, but are absolutely not limited to:

- Adrianople
- Frigidus
- Catalaunian Plains
- Vouillé
- Nedao
- Soissons
- Tolbiac
- Tours/Poitiers
- Lechfeld
- Stamford Bridge
- Edington
- Brunanburh
- Clontarf
- Hastings
- Manzikert
- Kleidion
- Kosovo
- Bouvines
- Grunwald/Tannenberg
- Saule
- Lake Peipus
- Mohi
- Legnica
- Nicopolis
- Varna
- major Reconquista engagements
- major Byzantine-Bulgarian battles
- major Byzantine-Arab battles
- major Rus'-steppe battles
- major Northern Crusade engagements

Do not create duplicates.

Audit current coverage first.

---

# PART XXIX — WAR AUDIT

Civilizations should connect naturally to wars.

Examples:

- Gothic War
- Vandalic War
- Saxon Wars
- Byzantine-Bulgarian Wars
- Arab-Byzantine Wars
- Viking invasions of England
- Norman Conquest
- Reconquista campaigns
- Northern Crusades
- Byzantine-Seljuk wars
- Crusades
- Mongol invasions
- Anglo-French wars
- Hundred Years' War
- Wars of Scottish Independence
- Hussite Wars
- Ottoman expansion

---

# PART XXX — REALM AUDIT

Civilizations must link to their political manifestations.

Examples:

Norse
→ Denmark
→ Norway
→ Sweden

English
→ Kingdom of England

Portuguese
→ County of Portugal
→ Kingdom of Portugal

Serbs
→ Serbian principalities
→ Kingdom of Serbia
→ Serbian Empire

Bulgarians
→ First Bulgarian Empire
→ Second Bulgarian Empire

Rus'
→ Kievan Rus'
→ Novgorod
→ Galicia-Volhynia
→ Vladimir-Suzdal
→ Moscow

Lithuanians
→ Grand Duchy of Lithuania

Magyars/Hungarians
→ Principality of Hungary
→ Kingdom of Hungary

Do not use political-state labels as civilization substitutes.

---

# PART XXXI — BIDIRECTIONAL LINKING

Every relationship must be navigable both ways.

Civilization → ruler
Ruler → civilization

Civilization → realm
Realm → civilization

Civilization → event
Event → civilization

Civilization → battle
Battle → civilization where historically useful

Civilization → location
Location → civilization where meaningful

Civilization → related civilization
Related civilization → civilization

No visible civilization field should be inert text when an article exists.

---

# PART XXXII — CIVILIZATION METADATA

Extend existing schemas cleanly.

Potential fields:

- name
- aliases
- endonym
- slug
- entityType
- civilizationType
- parentCivilization
- relatedCivilizations
- predecessorCultures
- successorCultures
- chronology
- earliestRecordedAppearance
- primaryRegions
- languages
- religions
- majorRealms
- majorPeople
- majorEvents
- majorWars
- majorBattles
- summary

Only add fields that provide real value.

---

# PART XXXIII — INDEX FILTERING

The Civilizations index should be useful rather than merely alphabetical.

Potential filters:

## Period
- Late Antiquity
- Migration Period
- Early Middle Ages
- High Middle Ages
- Late Middle Ages

## Region
- Scandinavia
- British Isles
- Iberia
- France/Low Countries
- Italy
- Central Europe
- Balkans
- Eastern Europe
- Baltic
- Steppe
- Mediterranean
- Caucasus

## Cultural Family
- Germanic
- Romance
- Slavic
- Baltic
- Finnic
- Turkic
- Iranian
- Semitic
- Uralic
- mixed / developing identity

Do not force historically disputed populations into rigid modern racial categories.

---

# PART XXXIV — SEARCH

Global search must understand aliases and historical terminology.

Examples:

Search:

`Byzantines`

should find:

Eastern Romans / Byzantine civilization.

Search:

`Romans`

should distinguish ancient/Western/Eastern Roman contexts appropriately.

Search:

`Vikings`

should surface both:

Vikings

and:

Norse

Search:

`Langobards`

should resolve to:

Lombards

Search:

`Suevi`

should resolve to:

Suebi

Search:

`Rus`

should resolve to:

Rus'

Search:

`Vlach`

should resolve to:

Vlachs

Search:

`Geiseric`

and:

`Genseric`

must resolve to the same person.

---

# PART XXXV — HISTORICAL ACCURACY

Do not create a 19th-century nationalist map disguised as medieval history.

Avoid:

- projecting modern nations backward;
- treating ethnic groups as biologically fixed;
- assuming migration means complete population replacement;
- equating language, ethnicity and political allegiance automatically;
- assuming kingdoms were nation-states;
- assuming everyone within a realm belonged to its dominant cultural group;
- treating origin legends as established fact.

Use careful scholarly language.

Examples:

“Later tradition claimed…”

“Modern scholarship debates…”

“Contemporary sources describe…”

“Archaeological evidence indicates…”

“The identity appears to have developed…”

“The term was used inconsistently…”

---

# PART XXXVI — PARTICULAR TERMINOLOGY WARNINGS

## Vikings

Not an ethnicity.

## Byzantines

Modern historiographical term; they called themselves Romans.

## Spanish

Do not project a unified Spanish identity across the medieval peninsula.

## Italians

Recognize common cultural development but enormous political/regional fragmentation.

## Germans

Do not treat modern Germany as existing in the Carolingian or Ottonian period.

## Russians

Do not use indiscriminately for Kievan Rus'.

## Romanians

Do not project modern Romanian national identity unchanged into poorly documented early medieval centuries.

## Bulgars vs Bulgarians

Must remain distinct.

## Goths vs Geats

Must remain distinct.

## Saxons

Continental Saxons and Anglo-Saxon contexts need careful distinction.

## Franks vs French

Do not treat them as identical.

---

# PART XXXVII — CIVILIZATION MAPS

If the project supports map visualization, civilization pages should eventually support changing geographic distribution over time.

Examples:

Visigoths:

Danube
→ Balkans
→ Italy
→ Gaul
→ Hispania

Vandals:

Central Europe
→ Rhine
→ Gaul
→ Hispania
→ North Africa

Norse:

Scandinavia
→ North Atlantic
→ British Isles
→ Normandy
→ Baltic
→ Rus'

This should be treated as a future-compatible design consideration even if full dynamic maps are not implemented during this milestone.

---

# PART XXXVIII — TIMELINES

Civilization pages should include useful chronological timelines.

Example:

## Visigoths

376 — Goths cross Danube
378 — Adrianople
410 — Sack of Rome
418 — settlement in Aquitaine
451 — Catalaunian Plains
507 — Vouillé
589 — Reccared converts
711 — Muslim conquest begins

Timelines should link to existing event articles.

---

# PART XXXIX — CIVILIZATION CARDS

Index cards might contain:

**Name**

**Period**

**Primary Region**

**Cultural Family**

**Major Realms**

**Short Description**

Keep cards visually consistent with the rest of the Codex.

---

# PART XL — CIVILIZATION PAGE RELATIONSHIP SECTIONS

Civilization pages should prominently surface:

### Related Civilizations

### Major Realms

### Major Rulers

### Major Women

### Major Battles

### Major Wars

### Major Events

### Major Locations

Use existing components wherever possible.

---

# PART XLI — CLAUDE.MD UPDATE

This expansion must permanently change archive-generation rules.

Update `CLAUDE.md`.

Add explicit rules stating:

1. Civilizations are first-class archive entities.
2. Civilization and political realm are separate concepts.
3. Every relevant ruler should link to civilization(s).
4. Every relevant realm should link to civilization(s).
5. Major events may link to civilizations.
6. Relationships should be bidirectional.
7. Existing archive content must always be audited before creating new entities.
8. Alternative names should use aliases rather than duplicate entries.
9. Modern national identities must never be projected backward without evidence.
10. Historical identity may change over time.
11. Parent/child civilization relationships should be represented where useful.
12. New rulers must automatically be connected to relevant civilization pages.
13. New realm articles must connect to relevant civilizations.
14. Civilization pages should automatically surface related archive content where architecture allows.
15. Civilizations must appear in global search and sitemap generation.

---

# PART XLII — INITIAL AUDIT REPORT

Create an internal working audit similar to:

| Civilization | Exists | Realm Coverage | People Coverage | Battle Coverage | Event Coverage | Action |
|---|---|---|---|---|---|---|

Group by region.

For example:

### Scandinavia

Norse
Danes
Norwegians
Swedes
Geats
Vikings
Varangians

### British Isles

Britons
Picts
Gaels
Irish
Anglo-Saxons
Angles
Saxons
Jutes
English
Welsh
Scots
Bretons

### Iberia

Visigoths
Andalusis
Arabs
Berbers
Asturians
Galicians
Portuguese
Leonese
Castilians
Aragonese
Catalans
Basques
Navarrese

etc.

---

# PART XLIII — IMPLEMENTATION PHASES

This feature is enormous.

Do not attempt it as an uncontrolled mass generation pass.

## PHASE 1 — Architecture

Create:

- civilization schema
- routing
- index page
- article template
- aliases
- parent-child relationships
- related-content relationships
- SEO support
- search integration
- navigation
- sitemap support

## PHASE 2 — EXISTING ARCHIVE AUDIT

Scan:

- people
- realms
- battles
- events
- wars
- locations
- houses

Build an internal relationship map.

## PHASE 3 — FOUNDATIONAL CIVILIZATIONS

Prioritize the most important foundational pages:

- Romans / Eastern Romans
- Goths
- Visigoths
- Ostrogoths
- Franks
- Lombards
- Vandals
- Norse
- Vikings
- Anglo-Saxons
- Slavs
- Rus'
- Byzantines / Eastern Romans
- Bulgars
- Bulgarians
- Magyars
- Arabs
- Berbers
- Turks

## PHASE 4 — REGIONAL EXPANSION

Complete:

- Scandinavia
- British Isles
- Iberia
- France
- Low Countries
- Italy
- German/Central Europe
- Balkans
- Eastern Europe
- Baltic
- Steppe
- Caucasus
- Mediterranean

## PHASE 5 — RULER AUDIT

For each civilization:

audit the royal succession of associated realms.

Create missing major ruler articles.

## PHASE 6 — BATTLE & EVENT AUDIT

Identify all obvious missing engagements.

Add major missing battles and events.

## PHASE 7 — RELATIONSHIP REPAIR

Ensure every relevant:

- person
- kingdom
- war
- battle
- event

links back into the civilization system.

## PHASE 8 — HISTORICAL QA

Check:

- chronology
- naming
- succession
- cultural classification
- anachronisms
- aliases
- disputed identities

## PHASE 9 — TECHNICAL QA

Check:

- TypeScript
- build
- lint
- tests
- broken links
- orphan pages
- duplicate slugs
- mobile layout
- desktop layout
- search
- sitemap
- metadata
- SEO

---

# PART XLIV — PRIORITY LEVELS

Not every civilization requires equal article depth.

Use three levels.

## LEVEL I — Major Civilization

Extensive article.

Examples:

- Byzantines / Eastern Romans
- Norse
- Anglo-Saxons
- English
- Franks
- French
- Visigoths
- Ostrogoths
- Portuguese
- Castilians
- Slavs
- Rus'
- Bulgarians
- Serbs
- Magyars/Hungarians
- Poles
- Lithuanians
- Arabs
- Turks

## LEVEL II — Significant Regional Civilization

Moderate-to-large article.

Examples:

- Suebi
- Burgundians
- Alemanni
- Picts
- Welsh
- Catalans
- Basques
- Croats
- Vlachs
- Moravians
- Old Prussians
- Cumans
- Pechenegs

## LEVEL III — Smaller Historically Relevant People

Shorter but substantive article.

Only create when enough reliable information exists.

No worthless stubs.

---

# PART XLV — IMPORTANT CONTENT RULE

Do not create articles merely because a name exists on the master list.

The master list is an **audit scope**, not an instruction to fabricate certainty.

If a particular identity:

- is poorly attested;
- is anachronistic;
- overlaps almost completely with another page;
- has insufficient historical evidence;

document the reason and use another structure instead.

Historical correctness outranks numerical completeness.

---

# PART XLVI — SOURCE QUALITY

Use serious historical scholarship.

Prioritize:

- academic monographs
- university publications
- Cambridge histories
- Oxford histories
- archaeological studies
- peer-reviewed scholarship
- reputable historical reference works

Primary sources should be contextualized.

Potential sources include:

- Ammianus Marcellinus
- Jordanes
- Procopius
- Gregory of Tours
- Bede
- Paul the Deacon
- Einhard
- Constantine VII
- Anna Komnene
- Byzantine chroniclers
- Anglo-Saxon Chronicle
- Rus' Primary Chronicle
- Iberian chronicles
- Arabic chroniclers
- Scandinavian sagas

Never treat medieval chronicles as perfectly objective factual databases.

---

# PART XLVII — ARTICLE WRITING QUALITY

Avoid AI filler.

Never pad articles with sentences such as:

“played an important role in shaping European history”

unless the article immediately explains how.

Prefer:

specific ruler
specific event
specific location
specific change
specific consequence

Every paragraph should teach something.

---

# PART XLVIII — FINAL COMPLETION REPORT

At completion provide a comprehensive report.

Include:

## Civilizations Architecture

What was added.

## Civilization Articles Created

Every new civilization article.

Group by region.

## Existing Civilization Articles Updated

## People Created

## People Updated

## Queens / Female Figures Added

## Realms Updated

## New Realms Added

## Battles Added

## Battles Updated

## Wars Added or Updated

## Events Added

## Locations Updated

## Search Improvements

## SEO Changes

## Taxonomy Decisions

Explicitly explain difficult cases such as:

- Vikings
- Byzantines
- Spanish identity
- Rus'
- Bulgars/Bulgarians
- Vlachs/Romanians
- Franks/French
- Anglo-Saxons/English
- Norse/Scandinavian identities

## Remaining Gaps

List anything intentionally deferred.

## Validation

Report:

- build
- lint
- tests
- TypeScript
- broken links
- orphan pages
- duplicate entities
- responsive layout
- SEO
- sitemap
- search

---

# FINAL VISION

The Civilizations archive should eventually allow a user to begin with:

**Goths**

and travel naturally through:

Goths
→ Visigoths
→ Alaric I
→ Sack of Rome
→ Visigothic Kingdom
→ Euric
→ Battle of Vouillé
→ Franks
→ Clovis
→ Francia

Or begin with:

**Norse**

and travel:

Norse
→ Vikings
→ Danes
→ Great Heathen Army
→ Danelaw
→ Alfred the Great
→ Anglo-Saxons
→ English
→ Kingdom of England
→ Norman Conquest
→ Normans

Or:

**Bulgars**

→ Old Great Bulgaria
→ Asparuh
→ First Bulgarian Empire
→ Bulgarians
→ Boris I
→ Simeon I
→ Byzantines
→ Basil II
→ Second Bulgarian Empire
→ Asen dynasty

Or:

**Galicians**

→ Galicia
→ County of Portugal
→ Portuguese
→ Afonso Henriques
→ Kingdom of Portugal
→ Reconquista
→ Avis dynasty

Or:

**Rus'**

→ Varangians
→ Kyiv
→ Vladimir the Great
→ Christianization of Rus'
→ Novgorod
→ Vladimir-Suzdal
→ Mongol invasion
→ Golden Horde
→ Moscow

That is the standard.

The user should be able to enter virtually any major medieval civilization, people, culture or emerging national identity and understand:

- where they came from;
- what they called themselves;
- what outsiders called them;
- how their identity developed;
- where they lived;
- what language they spoke;
- what they believed;
- how they organized society;
- how they fought;
- whom they traded with;
- what kingdoms they established;
- who ruled them;
- whom they fought;
- what major events shaped them;
- what happened to them;
- which later peoples or cultures emerged from them.

And every relevant ruler, dynasty, kingdom, battle, war, migration, event and location already represented by **the-iron-codex** should connect into that network.

This feature is not simply another archive category.

It is the **cultural backbone of The Iron Codex**.

Build it accordingly.


---

# APPENDIX D — Growth and paid acquisition plan

> Folded into this file on 2026-09-16 from `MARKETING.md`, which was then deleted.
> **Owned by:** no queue item — awaiting an owner decision. **Status:** PROPOSAL, NOT ACTIVATED. No account, no budget, no billing, no campaign.
> The text below is the original, unaltered.

# Growth plan — The Iron Codex

**Status: proposal only.** Nothing here has been activated, no account has been
created, no budget has been set and no billing has been touched. Track C M15 is a
full stop: none of the paid section happens without an explicit decision.

Written 2026-09-08, immediately after the technical SEO work of M1–M10.

---

## The honest starting position

- **809 indexable pages**, all with real metadata, structured data and crawlable
  text as of today.
- **Zero external links.** No other site on the internet links here.
- **Zero search history.** The domain was submitted to Google today.
- **Zero brand awareness.** Nobody is searching for "Iron Codex".

The technical work removed every *technical* reason not to rank. It cannot
manufacture authority, and authority is what ranking for competitive history
terms requires. That gap is what this document is about.

---

## Recommendation, stated up front

**Do not spend money yet.** Not because paid acquisition is wrong in principle,
but because right now it would buy traffic to a site with no reason for anyone to
return, and would teach us nothing we cannot learn for free in the same period.

Do the organic work in Part 2 for **three months**, watch what actually gets
impressions in Search Console, and revisit paid in December with real query data.
At that point a small test budget would be informed rather than speculative.

If the owner wants to spend sooner, Part 1 says exactly how — but this is the
recommendation.

---

# Part 1 — Paid acquisition (proposal, NOT activated)

## Channels considered

| Channel | Verdict | Why |
| --- | --- | --- |
| **Google Ads (Search)** | Possible later | Reaches people already searching for medieval history. Expensive per click for a site with nothing to sell. |
| **Microsoft Advertising** | Better first test | Meaningfully cheaper clicks than Google, and the audience skews older, which matches a history-reading audience. |
| **Reddit Ads** | Best paid fit | r/history, r/MedievalHistory, r/AskHistorians adjacencies. Cheap, and the audience is exactly right. |
| **Meta / Instagram** | Poor fit | Interest targeting for "history" is broad and low-intent. |
| **AdSense** | **Not applicable** | AdSense is publisher *monetisation* — it sells space *on* the site, it does not buy traffic *for* it. Named here because the brief flags the confusion. No third-party advertising will be placed on the Codex unless monetisation is separately requested. |

## If a test is approved

The smallest experiment that would actually teach us something:

- **Reddit Ads, €150 over three weeks**, one campaign, targeting history
  subreddits, pointing at the **topic pages** rather than the home page — those
  are the pages with a subject a reader chose.
- **Success measure is not clicks.** It is pages-per-session and return visits.
  Traffic that bounces immediately proves nothing except that ads work.
- **Stop condition written in advance:** if pages-per-session is under 2.0 after
  €150, stop. The problem would be the offer, not the channel.

**Nothing above is running.** It requires an explicit go-ahead, an account, and a
payment method — none of which exist.

---

# Part 2 — Organic growth (the actual plan)

This is where a site like this wins, and it costs time rather than money.

## 2.1 Rank for what nobody else covers well

The archive's real advantage is depth on subjects with thin coverage elsewhere.
Competing for "Battle of Hastings" against Wikipedia and Britannica is a losing
proposition for years. Competing for **"Battle of Bapheus"**, **"Kilij Arslan
II"**, **"Order of St Thomas of Acre"** or **"Battle of Myriokephalon"** is
winnable *now*, because the competition is one thin Wikipedia stub.

**Action:** in Search Console, watch **Performance → Queries** monthly. The first
queries to produce impressions are the winnable ones. Write more in those areas.

This is also the argument for finishing the stub backlog: 233 articles under
2,000 characters are 233 pages that cannot rank for anything.

## 2.2 The topic pages are the ranking assets

`/topics/viking-age` and its siblings target subjects people actually search,
carry real prose, and link 20–70 articles each. They are more likely to rank than
any individual article and they distribute crawl authority to everything they
link.

**Action:** as the archive grows, add topics rather than only articles. Candidates
already supportable by the data: the Wars of Scottish Independence, the Rus
principalities, medieval siege warfare, the Ottoman rise.

## 2.3 Wikipedia, done properly

Wikipedia is where people researching these subjects already are, and its external
links are followed by readers even though they are `nofollow`.

**The rule: only where the Codex genuinely adds something Wikipedia does not.**
Adding links to promote a site is spam, will be reverted, and can get a domain
blacklisted. Adding a link from a two-paragraph stub to a 4,000-word researched
article is a real contribution.

Legitimate candidates from this archive's own work: Bapheus, Myriokephalon,
Kilij Arslan II, the Order of St Lazarus, the Rashidun Caliphate article.

**Do a few, months apart, and only ones you would defend on the talk page.**

## 2.4 Reddit and forums — participate, don't post links

Same principle. Answering a question in r/AskHistorians properly and linking the
relevant article as a source is welcome. Dropping links is not, and both
communities are unusually good at spotting it.

## 2.5 The one structural thing still missing: nobody links here

Zero external links is the single biggest constraint. The realistic sources, in
order of value:

1. **Wikipedia** (2.3) — highest value, slowest, needs genuine merit
2. **History subreddits and forums** — earned by participating
3. **Medieval history blogs and podcasts** — a personal email offering the
   archive as a reference is worth more than any broadcast
4. **University and library subject guides** — these link to good free
   resources and are worth writing to directly

## 2.6 What NOT to do

- **Do not buy links.** It is the one thing that can get a domain penalised
  outright rather than merely ignored.
- **Do not spin up social accounts you will not maintain.** A dead Twitter
  account is worse than none.
- **Do not rewrite titles and descriptions repeatedly** chasing rankings in the
  first months. It resets Google's understanding of the page.
- **Do not add articles thinner than the ones already here.** 233 stubs is
  already the archive's biggest quality liability.

---

## Timeline and what to expect

| Month | Expect |
| --- | --- |
| 1 | Indexing climbs toward 809. Impressions near zero. Normal. |
| 2 | First impressions for long-tail queries. Few clicks. |
| 3 | Query data worth reading. **Revisit paid here.** |
| 4–6 | Rankings for specific low-competition subjects. First real traffic. |
| 6–12 | Compounding, *if* external links have started to arrive. |

**The honest summary:** the technical foundation is now good, the content is
genuinely strong, and the missing ingredient is time plus a handful of real
external links. Nothing on this page is a shortcut past that.


---

# APPENDIX E — How to check the SEO is working

> Folded into this file on 2026-09-16 from `SEO_TESTING.md`, which was then deleted.
> **Owned by:** reference for the owner. **Status:** REFERENCE — a how-to, not a work list. Level 1 runs automatically in the build.
> The text below is the original, unaltered.

# How to check the SEO is actually working

> **Status 2026-09-15:** Google Search Console and Bing setup are done. The page
> counts below are out of date: the archive now has 839 articles and 856 sitemap
> URLs. The checks themselves still apply.

Written for someone who has not done SEO before. Nothing here needs paid tools.

There are **three levels**, and they answer different questions:

| Level | Question it answers | How long |
| --- | --- | --- |
| 1. Automatic gate | Did we build the pages correctly? | nothing to do |
| 2. Live spot checks | Is the deployed site serving them correctly? | 5 minutes |
| 3. Google's own tools | Is Google actually indexing and ranking us? | weeks |

**The important thing to understand up front:** levels 1 and 2 are pass/fail and
answer today. Level 3 is the real outcome, and it is *slow* — Google takes days to
weeks to crawl a new site and months to rank it. Do not judge the work by level 3
in the first fortnight. Nothing is wrong if traffic is zero in week one.

---

## Level 1 — the automatic gate (nothing for you to do)

**This runs itself. You never need to run a command for it.**

`scripts/check-seo.mjs` is wired into the build in `vercel.json`, so it runs on
**every deployment**, and a failure **fails the deploy**. A build that would ship
809 pages with a broken title, a missing canonical or an invalid sitemap cannot
reach production — it stops at Vercel with a red build instead.

It checks every one of the 800 article pages for: a unique title, a canonical
URL, a description of reasonable length, a social share image, structured data
that actually parses, at least 200 characters of crawlable text, and membership
in the sitemap. It also verifies the two `vercel.json` settings the whole scheme
depends on.

If you ever *want* to run it by hand, `npm run build` includes it and prints:

```
SEO check passed: 800 article pages, 809 sitemap URLs, robots.txt and 404 in place.
```

But the point is that you should not have to. **If a deploy goes green, level 1
passed.**

---

## Level 2 — is the live site serving it? (5 minutes)

### 2a. The single most important test: view source, not the page

In a browser, open any article, then press **Ctrl+U** (Windows) or **Cmd+Option+U**
(Mac). That shows the **raw HTML the server sent**, before JavaScript runs — which
is what a crawler sees.

Near the top you should see a real title and description for *that article*:

```html
<title>Eric Bloodaxe — king of Norway and Northumbria | The Iron Codex</title>
<meta name="description" content="Eric Bloodaxe was a tenth-century Norwegian king…" />
<link rel="canonical" href="https://www.theironcodex.org/people/eric-bloodaxe" />
```

**Red flag:** if every article shows `<title>The Iron Codex</title>`, the
prerendering has broken.

Scroll further and you should see the article's actual prose inside
`<div id="root">`. That is the text search engines read.

### 2b. Status codes — the thing most sites get wrong

Paste this into a terminal:

```bash
S=https://www.theironcodex.org
for u in / /people /people/eric-bloodaxe /archive /robots.txt /sitemap.xml; do
  printf 'want 200  %-30s ' "$u"; curl -s -o /dev/null -w '%{http_code}\n' "$S$u"
done
for u in /this-does-not-exist /people/not-a-real-person; do
  printf 'want 404  %-30s ' "$u"; curl -s -o /dev/null -w '%{http_code}\n' "$S$u"
done
for u in /characters/eric-bloodaxe /artifacts/joyeuse; do
  printf 'want 30x  %-30s ' "$u"; curl -s -o /dev/null -w '%{http_code}\n' "$S$u"
done
```

Every line must match what it says it wants.

**Why 404 matters so much:** before this work, *every* URL returned 200 —
including ones that did not exist. Google calls that a "soft 404" and counts it
against the whole site's quality. A page that does not exist must say so.

### 2c. Social sharing — the part that is invisible until it embarrasses you

Social networks do **not** run JavaScript, so this was completely broken before
and would never have shown up in Google.

The easiest test: **paste an article link into a WhatsApp, Slack or Discord
message and look at the preview before you send it.** You should see the article
title, its description and its image. Not "The Iron Codex" with a blank square.

Official validators, which show you exactly what each network sees:

- **Facebook / WhatsApp:** https://developers.facebook.com/tools/debug/
- **LinkedIn:** https://www.linkedin.com/post-inspector/
- **X/Twitter:** https://cards-dev.twitter.com/validator (login required)

If you change a page's image or title later, use the Facebook debugger's
**"Scrape Again"** button — these networks cache previews aggressively.

### 2d. Structured data

Paste any article URL into **https://validator.schema.org/** or Google's
**https://search.google.com/test/rich-results**.

You should see `Person`, `Event`, `Place`, `Organization` or `CreativeWork`
detected, plus a `BreadcrumbList`. Warnings about optional fields are fine.
**Errors** are not.

### 2e. Robots and sitemap

Open both in a browser:

- https://www.theironcodex.org/robots.txt — plain text, ends with a `Sitemap:` line
- https://www.theironcodex.org/sitemap.xml — XML with 809 `<loc>` entries

**Red flag:** if either renders as the website instead of as text/XML, the
routing has regressed.

---

## Level 3 — Google's own tools (the real answer, slowly)

This is where you find out whether it worked. **It requires setup that only you
can do**, because it proves you own the domain.

### Step 1 — Google Search Console (do this first, it is the whole game)

Full click-by-click walkthrough below. **Your DNS is hosted at Vercel**
(nameservers `ns1.vercel-dns.com` / `ns2.vercel-dns.com`), *not* at your
registrar — so the TXT record is added in the Vercel dashboard. This is the part
most guides get wrong for this setup, because they assume you edit DNS wherever
you bought the domain.

#### 1a. Create the property

1. Go to https://search.google.com/search-console and sign in with
   **rui.palma.baiao@gmail.com**.
2. If this is your first property you land straight on the "Select property
   type" screen. Otherwise: click the property dropdown at the **top left** →
   **+ Add property**.
3. You get two boxes side by side. Choose the **left one, "Domain"**.
   - **Domain** covers `theironcodex.org`, `www.theironcodex.org`, http and
     https, all in one property. This is what you want.
   - "URL prefix" (right box) would only cover the exact address you type, so
     `www` and the apex would be separate properties. Avoid it.
4. Type `theironcodex.org` — **no `https://`, no `www`**, just the bare domain.
5. Click **Continue**.

Google now shows a box titled "Verify domain ownership via DNS record" with a
string that looks like:

```
google-site-verification=AbCdEf123456...
```

Click **Copy**. Leave this browser tab open — you come back to it in 1c.

#### 1b. Add the TXT record in Vercel

1. Go to https://vercel.com/dashboard and sign in.
2. In the **top navigation bar**, click **Domains**. (This is an account-level
   page — it is *not* inside the project. Project → Settings → Domains only
   controls which domain points at which project, not the DNS records.)
3. Click **`theironcodex.org`** in the list.
4. You land on the DNS records view. Click **Add** (or "Add Record").
5. Fill in exactly:

   | Field | What to enter |
   | --- | --- |
   | **Name** | leave **blank** (some versions show `@` — either means the root domain) |
   | **Type** | `TXT` |
   | **Value** | paste the whole `google-site-verification=…` string |
   | **TTL** | leave the default (60) |

   **Do not** type `theironcodex.org` in the Name field. Vercel appends the
   domain automatically, so that would create a record for
   `theironcodex.org.theironcodex.org`, which verifies nothing. This is the
   single most common mistake here.

6. Click **Add** / **Save**.

#### 1c. Verify

Vercel's DNS uses a 60-second TTL, so this is fast — usually under two minutes,
not the "up to 72 hours" the generic warnings mention.

Optional but reassuring — check it yourself from a terminal:

```bash
dig +short TXT theironcodex.org
```

When it returns your `"google-site-verification=…"` string, you are ready.

Go back to the Search Console tab and click **Verify**. You should get
"Ownership verified".

If it fails, wait a minute and click Verify again — Google sometimes caches a
negative lookup. **Do not delete the TXT record afterwards.** Google re-checks it
periodically and will unverify the property if it disappears.

#### 1d. Submit the sitemap

1. In Search Console, make sure `theironcodex.org` is selected in the property
   dropdown (top left).
2. In the **left sidebar**, find the **Indexing** group → click **Sitemaps**.
3. There is a field labelled **"Add a new sitemap"** reading *"Enter sitemap URL"*.
4. Paste the **complete URL**:

   ```
   https://www.theironcodex.org/sitemap.xml
   ```

   **Use `www`** — that is what the site canonicalises to (the apex 308-redirects
   to it) and what all 809 URLs inside the sitemap use.

   **Why the full URL and not just `sitemap.xml`:** this property is a **Domain**
   property, which covers the apex, `www`, http and https together, so Search
   Console cannot assume a hostname and gives you an empty field. Only
   *URL-prefix* properties show a fixed grey `https://…/` prefix with just the
   path to fill in. Guides that say "type only the filename" are describing a
   URL-prefix property.
5. Click **SUBMIT**.

**What you should see**, in the "Submitted sitemaps" table below:

| Column | Expected |
| --- | --- |
| Status | **Success** |
| Discovered URLs | **809** |
| Type | Sitemap |

If it says **"Couldn't fetch"**, do not panic and do not resubmit repeatedly.
That status very often appears immediately after submission and resolves itself
within a few hours once Google actually fetches the file. Check the file is fine
yourself by opening https://www.theironcodex.org/sitemap.xml in a browser — if
XML loads, the sitemap is good and the status will catch up.

You only ever submit a sitemap **once**. Google re-reads it automatically from
then on, including after every deploy.

#### 1e. URL Inspection — proving Google sees the content

This is the definitive test, and there is an important detail: **which button you
press depends on whether Google has crawled the page yet.** On a new site it has
not, so the "View crawled page" option will not exist — you use the live test
instead.

1. At the **very top** of Search Console there is a wide search bar reading
   *"Inspect any URL in https://www.theironcodex.org"*.
2. Paste a **full article URL**, including `https://www.` — for example:
   `https://www.theironcodex.org/people/eric-bloodaxe`
3. Press **Enter** and wait 10–30 seconds.

You will see one of two results:

- **"URL is not on Google"** — expected for weeks on a new site. It is not an
  error. It means "not indexed yet", not "something is broken".
- **"URL is on Google"** — indexed.

**Now the actual test.** Click **TEST LIVE URL** at the top right. This makes
Google fetch and render the page *right now*, regardless of indexing status.
Wait ~30 seconds, then:

4. Click **VIEW TESTED PAGE** (right-hand side).
5. Select the **HTML** tab.

This is the exact HTML Googlebot received. Search it (Ctrl+F / Cmd+F) for:

| Search for | You should find |
| --- | --- |
| `<title>` | `Eric Bloodaxe — king of Norway and Northumbria \| The Iron Codex` |
| `canonical` | `https://www.theironcodex.org/people/eric-bloodaxe` |
| `og:image` | a real image URL |
| `Bloodaxe was a son of` | the article's actual prose |

If all four are there, Google is receiving everything it needs. That is the
definitive answer to "is our SEO actually working".

Also check the **Screenshot** tab — it shows the page as Googlebot rendered it,
which confirms the JavaScript app loads correctly for Google too.

Once Google *has* crawled a page (weeks later), a **"View crawled page"** option
appears alongside, showing the stored copy rather than a live fetch. Same tabs,
same things to look for.

**"Request indexing"**: on the inspection result there is a *Request indexing*
link. It pushes one URL to the front of the queue. Use it for a handful of
important pages — the home page, `/archive`, two or three strong articles. There
is a daily quota, and it is not a way to index 809 pages. The sitemap does that.

**What to look at afterwards, and what "good" looks like:**

| Report | What it tells you | Healthy sign |
| --- | --- | --- |
| **Pages** (Indexing) | How many of the 809 URLs Google has indexed | Climbing toward 809 over weeks |
| **Sitemaps** | Whether the sitemap parsed | "Success", 809 discovered |
| **Performance** | Actual searches you appear in | Impressions appearing at all |
| **URL Inspection** (top bar) | Everything about one specific URL | "URL is on Google" |

**The single most useful tool** is **URL Inspection**. Paste any article URL into
the search bar at the top. It tells you whether Google has it, when it last
crawled it, and — via **"View crawled page"** — the exact HTML Google received.
That is the definitive answer to "does Google see our content?".

If a page is not indexed yet, press **"Request indexing"**. Useful for a handful
of pages; not something to do 809 times.

### Step 2 — Bing Webmaster Tools (5 minutes, worth it)


https://www.bing.com/webmasters — it can **import directly from Google Search
Console**, so once step 1 is done this is a two-click job. Bing also feeds
DuckDuckGo and ChatGPT search.

### Step 3 — the crude reality check

Search Google for:

```
site:theironcodex.org
```

That lists what Google has indexed. Early on it will show few or no results.
The number climbing over the following weeks is the signal that this worked.

---

## When you add new articles

**Almost all of this is automatic.** Every deploy regenerates the whole SEO
surface from `history.json`, so a new article gets its page, metadata, structured
data, sitemap entry, hub link and topic membership without anyone doing anything.

What the build runs, in order, on every deploy:

```
build-topics.mjs   ->  rebuilds the seven topic clusters
vite build         ->  the app
prerender.mjs      ->  regenerates all 823 pages + sitemap.xml + robots.txt
check-seo.mjs      ->  fails the deploy if anything is wrong
```

So a new article automatically gets:

- its own prerendered page with title, description, canonical, Open Graph,
  Twitter card and JSON-LD
- a `<loc>` entry in `sitemap.xml`
- a link from its collection hub and from `/archive`
- membership in a topic, **if** an existing article in that topic links to it
  (membership expands one hop through `relatedEntries`)

### The one command to run when you add content

```bash
npm run content
```

This does two things that cannot run on Vercel:

1. **Updates `content-dates.json`** — per-article last-modified dates. Without
   it the sitemap would stamp every URL with the build date, telling Google all
   817 pages changed on every deploy. Google treats `lastmod` as a hint and
   stops trusting a site that obviously lies, which costs the one thing the field
   is for: prompt recrawling of the pages that *did* change. This hashes each
   article and only re-dates the ones whose content actually moved.
2. **Generates social cards** for any new locally hosted image over ~600 KB, the
   WhatsApp preview limit.

Commit the changed files along with the content. **If you forget, the build
fails and tells you** — the oversized-image check is a hard gate, so nothing
broken can ship.

### Do you need to touch Search Console?

**No.** Google re-reads your sitemap on its own schedule and will find new URLs
there. The only reason to open Search Console is if you publish something you
particularly want indexed quickly — then use **Request indexing** on that one
URL. There is a daily quota of around ten, so it is for a handful of pages, never
for a batch.

### If you add a new *topic*

Topics are defined in `scripts/build-topics.mjs`, with hand-picked seed articles
and hand-written prose. Adding one is a code change, not a content change — ask
me and I will do it. The gate requires 400+ characters of prose and 10+ linked
articles, so a thin topic page cannot ship.

## Troubleshooting: what the scary messages actually mean

| Message in Search Console | Means | Action |
| --- | --- | --- |
| **"URL is not on Google"** | Not indexed *yet* | None. Normal for weeks. |
| **"Discovered — currently not indexed"** | Google found it, hasn't got to it | None. Normal for a new site. |
| **"Crawled — currently not indexed"** | Crawled, not judged worth indexing yet | None early on. Watch if it persists past ~2 months. |
| **"Indexing request rejected"** | Live test found a problem | Click **View live test**, not Dismiss. It names the real reason. |
| **"Page cannot be indexed: Soft 404"** | Google rendered the page and saw **nothing** | Real problem. See below. |
| **"Blocked by robots.txt"** | Self-explanatory | Real problem. |
| **"Server error (5xx)"** | The site failed | Real problem. |

### The soft-404 trap, which we hit on 2026-09-08

`/archive` reported **"Page cannot be indexed: Soft 404"** while showing
*Crawl allowed: Yes, Page fetch: Successful, Indexing allowed: Yes*. The page
was fine. `robots.txt` was not: it carried `Disallow: /api/`.

**Googlebot obeys robots.txt for the resources a page fetches while rendering.**
Every hub page gets its data from `/api`, so Googlebot rendered them empty:

```
/archive   785 links, 26,554 chars   ->   1 link, 238 chars
/people    full list                 ->   0 links, 0 characters
```

Google saw a blank page and correctly called it an error page.

**Two lessons worth keeping:**

1. **Never block resources a page needs to render** — APIs, CSS, JavaScript. To
   keep JSON out of the *index* while still allowing it to be *fetched*, use an
   `X-Robots-Tag: noindex` response header. robots.txt cannot express that
   distinction; it only blocks fetching.
2. **A local browser check cannot catch this**, because Chrome ignores
   robots.txt. Every headless render looked perfect. Only Google's own verdict
   exposed it — which is the argument for actually doing the Search Console
   checks rather than trusting the build gate alone.

## What to expect, honestly

| When | What is normal |
| --- | --- |
| Day 1 | `site:` search shows almost nothing. Correct. |
| Week 1–2 | Google discovers the sitemap and starts crawling. Indexed count begins to climb. |
| Month 1–2 | Most pages indexed. First impressions in the Performance report. |
| Month 3–6 | Rankings develop for specific, low-competition phrases. |

A new site has no authority, and that is the one thing technical SEO cannot buy.
What this work did was remove every *technical* reason for the site not to rank.
Growing authority is Track C's later milestones — internal linking, landing pages
and promotion.

**One caution:** do not repeatedly change titles and descriptions to chase
rankings in the first months. It resets Google's understanding of the page.

---

## The five-second version

**Before a deploy: nothing.** The gate runs in the build and blocks the deploy if
anything is wrong. A green deployment means the SEO checks passed.

**After a deploy, occasionally:** view source on one article (Cmd+Option+U) and
confirm the title is that article's title and not "The Iron Codex".

**Once a week:** open Search Console and see whether the indexed page count is
going up. That is the only number that really matters.
