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

_Last updated: 2026-09-15, late evening. Queued 0o, the global article UI/UX refinement track (spec in the repo root; U0 audit first). Earlier that evening:

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
      **`SEO_TESTING.md`** written for the owner, who asked for it: three levels
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
- [x] **M11** (2026-09-08). Paid-marketing proposal — `MARKETING.md`. NOTHING ACTIVATED: no account, no budget, no billing. Recommendation is explicitly DO NOT SPEND YET; revisit in December with real Search Console query data. AdSense addressed as the category error the brief flags — it is publisher monetisation, not acquisition.
- [x] **M12** (2026-09-08). Organic promotion plan — same document. Core insight: compete where the archive is genuinely better (Bapheus, Myriokephalon, Kilij Arslan II) rather than against Wikipedia on Hastings. Zero external links is the real constraint, and the plan says so.
- [x] **M13** (2026-09-08). Tests — 13 tests, zero dependencies (`node:test`). Cover the admin boundary (including that an unset ADMIN_EMAIL means nobody is admin, not everybody) and the analytics privacy guarantees (referrers reduced to host; paths carrying queries, fragments or markup rejected). `npm test`, and they now gate the build.
- [x] **M14** (2026-09-08). Validation — tests 13/13, content-quality, images, SEO gate, build, server syntax, and the integration audit all clean: 0 orphans, 0 mis-sorted events, 0 stale notes, 0 unexplained commanders.
- [x] **M15 — APPROVAL GATE REACHED, 2026-09-08. STOPPED, as the brief requires.**
      **Track C M1-M14 are complete.** Nothing beyond this point has been done and
      nothing will be without an explicit decision.
      **Nothing paid was activated**: no advertising account created, no budget
      set, no billing touched, no campaign started. `MARKETING.md` is a proposal,
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
0o. **OWNER REQUEST 2026-09-15: GLOBAL ARTICLE UI/UX REFINEMENT. A major track that will take a while.** The full spec is `iron_codex_global_article_ui_ux_refinement.md` in the repo root (42 sections). Read all of it before any milestone. The benchmark page is `/events/battle-of-brunanburh`. The goal is to move article pages from a database-looking layout toward a premium digital codex, **fixing shared components rather than single pages, and without redesigning the site's identity**: near-black, ivory, restrained gold, monumental titles, and the side-by-side image and title hero.

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
   - **U4: responsive** (wide desktop, laptop, tablet, mobile).
   - **U5: accessibility.**
   - **U6: regression** over the §34 page set at desktop and mobile widths.
   - **U7: cleanup** of obsolete styles.

   No local dev server (owner rule), so every milestone is verified live after deploy, with the owner testing each one.
0n. **OWNER REPORTS 2026-09-15 (evening), made while testing the away-mode ships:**
   1. **Known for must link: "a big one".** Names, places and events in any article's Known for must be navigable, like body prose. Reported on `kingdom-of-hungary`. Shipping first: the W&A block, the location and polity list, and the person fact card all run through `renderLinkedText`, and CLAUDE.md §5 makes it a rule.
   2. **Insights: the accounts-created chart runs past the dark page area** onto the light footer. Next ship.
   3. ✅ **`baraka-khan`'s death place, Kerak, had no page. Shipped 2026-09-15:** the new `kerak` article (13,000 chars, 13 sections, 17 timeline entries, 5 images) covers Pagan the Butler's castle, Oultrejordain and Reynald of Châtillon, Saladin's sieges, and Ayyubid and Mamluk Kerak. The death place now links, and Baraka's timeline is fixed: he died at Kerak, not Damascus, and Qalawun took the throne in November 1279, not on Baraka's death.
   4. ✅ **`kingdom-of-jerusalem`'s Conder map was unreadable. Shipped 2026-09-15:** it is replaced by "Principal locations in the Kingdom of Jerusalem.svg" (2025, CC BY-SA 4.0), a colour relief map with large English labels. It names Jerusalem, Acre, Tyre, Sidon, Beirut, Jaffa, Ascalon, Caesarea, Tiberias, Kerak and Damascus. It is tall (about 1:2.2), so it displays narrow on desktop. It is the medieval base map for the 0k Levant locator pilot, which will need a lat/lon calibration against the named towns. Conder's map and its source entry were dropped, and the arms were untouched.

   6. **Owner report on `kerak`'s main image (2026-09-15): black and white, with the ruins far away and barely visible.** The main image was replaced the same day with a 2012 colour photograph in which the walls fill the ridge. The section image of a tunnelled town entrance is also black and white, but it is kept because it is the only image of that feature. CLAUDE.md now carries the rule: colour, with the subject large in the frame. **Follow-up:** audit every main image for black-and-white or distant subjects. Start with the pre-modern city views chosen under the broad-view rule (Damascus by Bonfils, London in Royal MS 16 F II, Rome in the Nuremberg Chronicle), and propose replacements where a colour option exists.
   7. **Owner report 2026-09-15: `louis-ix-of-france`'s main image is a church.** The caption reads "Louis IX of France in a medieval or later historical depiction", but the image is the 19th-century Église Saint-Louis at La Roche-sur-Yon. The cause: the image was set by a guessed filename, `Saint_Louis.jpg`, and on Commons that name belongs to the church. **The same placeholder caption, with the same note ("Historical depiction or associated visual source; not necessarily a contemporary portrait") and a guessed `<Name>.jpg` filename, leads 21 person articles**, so any of them may show the wrong subject:
      - `godfrey-of-bouillon`, `baldwin-i-of-jerusalem`, `baldwin-ii-of-jerusalem`, `raymond-iv-of-toulouse`, `bohemond-i-of-antioch`, `alexios-i-komnenos`, `anna-komnene`
      - `louis-vii-of-france`, `balian-of-ibelin`, `henry-ii-of-champagne`, `enrico-dandolo`, `baldwin-i-latin-emperor`, `pope-innocent-iii`
      - `frederick-ii-holy-roman-emperor`, `louis-ix-of-france`, `andrew-ii-of-hungary`, `john-of-brienne`, `jean-de-joinville`, `charles-of-anjou`, `jacques-de-molay`, `hermann-von-salza`

      **Progress 2026-09-15 (owner away, audit requested):** a caption audit of all 1,074 captions found 57 hedged or placeholder captions and about 90 more pure template phrases. Of the 21 `medieval or later` images:
      - All 21 were viewed. The 13 correct images got specific captions and notes, for example Frederick II in his falconry manuscript, Andrew II in the Chronicon Pictum, and Dandolo by Domenico Tintoretto.
      - 8 need replacing: Louis IX (the church), Louis VII, Jean de Joinville and Innocent III (tiny scans), Godfrey of Bouillon (no metadata), Bohemond (a poster-shop source), Baldwin II (tiny), and Charles of Anjou (his knights, not him). Two agents are drafting those replacements.
      - **Gate shipped:** `check-images` fails on vague captions (`scripts/lib/vague-captions.mjs`). The 75 captions already vague are listed in `scripts/lib/vague-caption-baseline.json`, a shrink-only list: fixing one without removing it also fails. Next ship: the 8 replacements, then the 30 `image associated with` captions, then the rest of the list.
      **Progress, second update 2026-09-15 (owner away):**
      - **Caption batch 2 shipped (`a579a60`):** all 37 `image associated with` and `image of` images were viewed; 33 got specific captions, dates and notes.
      - **Replacements shipped (`2045518`):** Louis IX (Bible moralisée, about 1227–1234), Louis VII (Grandes Chroniques, about 1375–1380), Joinville (BnF fr. 13568, about 1330–1340), Innocent III (Subiaco fresco, about 1219), Jacques de Molay (coloured 19th-century engraving).
      - **Still open:**
        - Replacements being drafted: Godfrey of Bouillon, Bohemond I, Baldwin II and Charles of Anjou.
        - Wrong subject, needing a replacement: Stenkil (a church interior), Guido da Landriano (a battle painting) and Ulrich von Jungingen (a coat of arms).
        - Not yet viewed: Eric II of Denmark.
        - About 29 undated `later depiction` captions and other template phrases ("represented with a relevant image", "medieval-style") on events and houses.
      - **Caption batch 3 shipped (`9bed53f`):** the last 30 baseline captions, mostly battle and event images, now name medium and date. Narses' caption is corrected: it is the San Vitale mosaic of about 547, from his lifetime. **The baseline is now EMPTY (portraits ship, 2026-09-15):** Stenkil leads with an engraving from 1702, the only depiction of him. Ulrich von Jungingen leads with the Grand Master detail of Matejko's Grunwald (1878), and Eric II with the Ribe Cathedral portrait of about 1576. Guido da Landriano keeps his Cassioli battle detail by owner decision, with an honest caption. Wessex has its own ninth-century map, so England 878 leads only the Danelaw.
      - **Flagged by that batch for replacement (captioned honestly, not yet replaced):**
        - `battle-of-gestilren`: a blank relief map of Sweden
        - `battle-of-stiklestad`: a 2007 photo of Stiklestad Church
        - `zengid-dynasty`: a 164px crop of a generic knight
        - `teias`: a blurry crop of the Zick painting that already leads Mons Lactarius
      - **Search fixes also shipped (`684d4ac`, `a00fa0e`, owner-confirmed):** archive-page search ranks name matches first, folds ł, ø and æ, and matches words in any order.
      - **The vague-caption baseline is down from 75 to 38.**
      **Fix:**
      1. View each of the 21 images.
      2. Where an image shows the wrong subject, replace it with a real depiction under the person-image rules: manuscript, effigy, seal, portrait coin or later artwork, captioned honestly. Louis IX has many good ones (the Bible of Saint Louis, the Joinville manuscripts, the Saint-Louis statue at Mainneville).
      3. Rewrite every caption and note to say specifically what the image is.
      4. **Gate:** make `check-images.mjs` hard-fail on the caption "in a medieval or later historical depiction" and on that stock note, so the template cannot come back.
   5. **A `pope-leo-iii` article (owner: yes, 2026-09-15).** No Pope Leo III article exists, so since the Known-for ship "Pope Leo III" on `charlemagne-crowned` and the Charlemagne pages links to nothing. Before that fix it linked wrongly to the emperor Leo III the Isaurian. Build a full Person article, not a stub:
      - The main image is a depiction of him, such as the contemporary Lateran triclinium mosaic or a manuscript. Commons search comes first.
      - Required: Character and Personality, a timeline of at least 5 entries, sources, and related entries covering at least `charlemagne`, `charlemagne-crowned`, `papacy` and `rome`.
      - Popes are not rulers in this pass, so there is no succession box.
      - Cover the 799 assault in Rome by Paschal and Campulus, his flight to Paderborn, the oath of purgation, the coronation of 800, and the filioque dispute.
      - When it ships, add the pope as a second target to the existing `"Leo III"` ambiguity guard in `client/src/lib/entityLinks.js`, with hints such as "Pope", "Charlemagne", "coronation", "800", "Saint Peter's", "Paderborn", "Paschal". Then "Pope Leo III" links to him and the Isaurian keeps his own contexts.

   **Done 2026-09-15 (owner: yes):** unit tests now run in the deploy build. Node is pinned to 24.x, matching the Vercel project setting. The first attempt (`ec64dce`) pinned 22.x, which Vercel rejected before the build started (a 0 ms build). The whole chain passes locally on both 22 and 24. The original recommendation follows. Run the unit tests in the deploy build. Add `node scripts/run-tests.mjs` to `vercel.json`'s buildCommand and pin `engines.node` to `22.x`, so the Node version is fixed rather than "anything that satisfies >=20". `run-tests.mjs` exists because the shell-glob form once failed on Vercel, so the known risk is already handled.
0m. **OWNER REQUEST 2026-09-15: THE COMPLETE MEDIEVAL RULERS PROGRAM. The largest content program yet, split into milestones, with the audit done before any writing.** The full spec is `iron_codex_complete_medieval_rulers_program.md` in the repo root (100 sections, 2,495 lines). Read all of it before planning any milestone. The goal is a full article for every attested sovereign or substantively governing ruler of every in-scope medieval polity. Each article links into its house, family tree, realm, predecessor and successor chain, wars and battles, with no duplicate identities.

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
   - **Houses.** The 4 houses still missing from `HOUSES_PLAN.md` (Ottonian/Salian, Habsburg, Barcelona, Piast) are prerequisites.

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
0l. ✅ **Done 2026-09-15 (owner away; follow-ups found while fixing `el-cid`).**
   - **Birth and death places normalised:** 116 plain-text places became
     `{ name }` objects, and the 35 whose text exactly names a location article now
     link to it (e.g. Constantinople, Marrakesh, Kingdom of León). The gate
     hard-fails a place that is not an object with a name.
   - **Family-tree spouse gate:** `check-content-quality` now hard-fails any spouse
     node without `personSlug`, now that every one of the 37 is linked.
0j. ✅ **Done 2026-09-15: `sigurd-of-norway`'s crusade section expanded** from 437 to 2,870 characters. The timeline went from 7 to 12 entries, with England, Galicia, the Portuguese coast, the Balearics, Acre and Sidon. Five sources were added where there were none. Related links were added both ways to Baldwin I of Jerusalem and Alexios I Komnenos, and one way to Henry I of England, Lisbon, Magnus Barefoot and the Kingdom of Jerusalem. The siege of Sidon (1110) went on `BATTLE_BACKLOG` until it has its own event article. The original request follows. **OWNER REQUEST 2026-09-15: expand `sigurd-of-norway`'s crusade section.** "As king of
   Norway and crusader" is 437 characters and names no place, siege or battle. The owner
   notes he is famous for at least one crusader siege. Cover the Norwegian Crusade of
   1107–1111 concretely:
   - the winter in England
   - the fighting on the Iberian coast (Galicia, Sintra, Lisbon, Alcácer do Sal)
   - the Balearic cave fight on Formentera, plus Ibiza and Menorca
   - Sicily and the young Roger II
   - the landing at Acre in 1110 and the meeting with Baldwin I at Jerusalem
   - **the siege of Sidon (1110)**, where his fleet blockaded the port while Baldwin
     took the town, and the relic of the True Cross he was given
   - the return by Constantinople, where he left his ships to Alexios I, and home
     overland

   Check the sagas (Snorri's Magnússona saga) against Fulcher of Chartres and Albert
   of Aachen, and hedge the saga-only episodes. Add timeline entries (England, Lisbon,
   Formentera, Acre, Sidon) and related links to `baldwin-i-of-jerusalem`,
   `kingdom-of-jerusalem`, `alexios-i-komnenos`, `lisbon`, `kingdom-of-sicily`.
   **Gap:** no `sidon` or siege-of-Sidon article exists. Either create a
   `siege-of-sidon-1110` event to the battle standard or write it lower-case ("the siege
   of Sidon") and add it to `BATTLE_BACKLOG`. The same applies to Sintra/Lisbon 1108
   if capitalised.
0i. ✅ **Fixed 2026-09-15 (owner report on `el-cid`): 15 person pages showed only a name
   and an image.** Their `type` was "person" instead of "character", and `DetailPage`
   chooses the person layout from `type`, so neither the facts panel nor the article
   body rendered. Affected: pelagius-of-asturias, ramiro-ii-of-leon, abd-al-rahman-iii, alfonso-vi-of-leon-and-castile, yusuf-ibn-tashfin, el-cid, johannes-liechtenauer, fiore-dei-liberi, yaqub-al-mansur, ferdinand-iii-of-castile, ferdinand-ii-of-aragon, muhammad-xii-of-granada, mstislav-the-bold, khalid-ibn-al-walid, kilij-arslan-ii. Data fixed, and `check-content-quality`
   now hard-fails any article whose type does not match its collection. **Same
   commit:** 58 people store `birth.place`/`death.place` as plain text (e.g. "London or
   Oxford"), which `LinkedLocationFact` rendered as nothing; plain text now shows. Of
   those, 27 match an existing location article exactly. Linking them is a possible
   follow-up, not done.
0h. ✅ **Fixed 2026-09-15 (owner report on `catherine-of-valois`): empty Key
   achievements boxes.** 48 people stored `keyAchievements` as plain sentences, but
   `KeyAchievements` read only `.title`, so each achievement rendered as an empty card.
   That includes all 33 queens and consorts from batches A and B, whose module
   template used strings, plus 15 older articles such as Empress Matilda, El Cid
   and Abd al-Rahman III. The page now treats a sentence as the title and drops
   items with no text. `check-content-quality` now hard-fails on list items the page
   cannot render: a keyAchievement with no title text, a non-string or empty
   `knownFor`, `greatestFeats`, `aliases` or `roles` entry, or a non-object
   `contentSections`, `timeline`, `sources` or `sectionImages` entry. The earlier
   gate checked only that each field was an array.
0g. **OWNER REQUEST 2026-09-15 (eventually, not urgent): sweep the repo's
   markdown files for work already done.** Keep `CLAUDE.md` and `CODEX.md` as they
   are. For every other planning or work-list file, check each item against the code, the data
   and `git log`:
   - **Everything in a file is done:** delete the file.
   - **Part of it is done:** mark those items complete, so no session re-reads
     finished work.
   This includes pruning finished entries out of `QUEUE.md` itself, which has grown
   to about 2,000 lines. Candidates as of today, with the date each last changed:
   - `HOUSES_PLAN.md` (2026-08-15): **marked done 2026-09-15.** Its 4 missing houses are tracked in 0m.
   - `WEAPONS_ARMOR_EDITORIAL_AUDIT.md` (09-06): **deleted 2026-09-15.** Its open items are in the W&A backlog.
   - `WEAPONS_ARMOR_AI_PROMPTS.md` (09-06): **deleted 2026-09-15.** All eight images shipped.
   - `WEAPONS_ARMOR_COVERAGE_GAPS.md` (09-07): **deleted 2026-09-15.** Every recommended tier shipped.
   - `SEO_TESTING.md` (09-08): kept as reference, with setup marked done.
   - `MARKETING.md` (09-08): kept, because it is still open.
   - `CONTENT_GUIDELINES.md` (06-20; a standards file, so check whether `CLAUDE.md`
     has absorbed it rather than whether it is "done")
   Out of scope, since they are not work lists: `README.md`, the `.claude/agents/*.md`
   definitions, and `iron-codex-civilizations-master-prompt.md` (item 0e, not started).
   Propose the delete list to the owner before deleting.
0f. ✅ **Fixed 2026-09-15 (owner report on `danelaw`): empty cards no longer render.**
   Hero fact strips for locations, events and artifacts now drop any fact with
   no value. `LocationHero` had printed a blank "Kingdom" card and a "Region in
   undefined" subtitle for the 34 non-kingdom locations with no parent kingdom,
   and misread the lowercase types `kingdom` and `caliphate`. Iskorosten's empty
   "Known for" heading and any section with neither text nor images are gone too.
   The rule is now CLAUDE.md "Non-Negotiable Article Quality Rules" §4.
   **Same commit:** the six Plantagenet queen pages that showed an "Undefined"
   related-entries heading are fixed. Batch A's script had filed seven house links
   under an `undefined` group; they are moved to `houses`, and
   `validateRelatedEntries` now hard-fails any unknown group key.
0c-B. ✅ **Done 2026-09-15: the other 21 tree spouses have articles, and every
   spouse node in all 70 house trees now links (0 unlinked).**
   - **Normandy:** `matilda-of-flanders`, `matilda-of-scotland`, `geoffrey-of-anjou`,
     `stephen-henry-count-of-blois`, `matilda-of-boulogne`, `adela-of-normandy`.
   - **Wessex:** `ealhswith`, `eadgifu-of-kent`, `emma-of-normandy`, `edith-of-wessex`.
   - **Byzantine:** `theodora-wife-of-justinian`, `sophia-wife-of-justin-ii`,
     `theodora-wife-of-theophilos`, `theophano-wife-of-romanos-ii`,
     `eudokia-makrembolitissa`, `irene-doukaina`.
   - **The rest:** `constance-of-sicily`, `thyra`, `marjorie-bruce`,
     `philippa-of-lancaster`, `milica-of-serbia`.

   Also in this batch:
   - 25 tree nodes linked, with reverse links from husbands, sons and houses.
   - Three new `ambiguousEntityAliases` entries, for Theodora, Eudokia and Irene,
     so bare names link only in a recognisable context.
   - Four existing wrong links fixed: Leo IV's Khazar mother (now "Tzitzak"),
     Hagia Irene in `isaurian-dynasty`, John II's mother and wife, and King
     Stephen's father.
   - Ealhswith leads with the Nunnaminster site under the associated-monument
     rule; Theodora (Justinian) leads with a crop of the San Vitale mosaic; Matilda
     of Boulogne with the 1865 Cassell scene of her plea for Stephen.

   **Worth a gate next:** fail on any spouse node without `personSlug`, so the
   trees cannot regress. Not built; propose it to the owner first.
0a. ✅ **REDONE 2026-09-15 on owner feedback ("anything is better than a random landscape"): `harald-greycloak` now leads with Christian Krohg's 1899 Heimskringla illustration of Gunnhild urging her sons, Harald among them**, the image Wikidata uses for him. No coin of his exists, since Norwegian coinage begins after him. The Hals photo was dropped, and CLAUDE.md now says a landscape never leads a person. The earlier attempt: **SHIPPED 2026-09-15 (owner away): `harald-greycloak` led with a colour photograph of the Limfjord at Hals** (Hals Limfjorden1.jpg, public domain), where the memorial poem Gráfeldardrápa says he fell about 970, under the associated-monument rule. Krohg's ships vignette is dropped. No memorial to Harald himself exists; the monuments at Hals commemorate his killer, Gold-Harald. The original report follows. **OWNER REPORT 2026-09-15: `harald-greycloak`'s main image is wrong.** **Resolution drafted:** the owner left the photo choice to the assistant. Of the Hals candidates, `Hals Limfjorden1.jpg` (the inlet with fishing nets; public domain) has the best overall quality. The rest show modern tankers, a cruise ship or hazy nets. Module `b14/harald-greycloak.mjs`; ships after the owner confirms the current ship. The
   lead is Christian Krohg's 1899 Heimskringla vignette "Olav Tryggvasons saga -
   Harald Graafell - c. Krohg.jpg", a low-quality drawing of ships at sea with no
   visible Harald. It breaks the rule that a person's main image must depict the
   person. **Candidate replacement (seen, not yet applied):** Krohg's "Eiriksonnenes
   saga - Gunnhild egger sonnene sine - C. Krohg.jpg" (796x470, public domain), in
   which Gunnhild urges on her sons, Harald among them, at the table. It is still an
   1899 imagining, so the caption must say so, and the ships vignette can move to a
   section image or go. **Searched 2026-09-15:** none of the 1899 Heimskringla
   illustrations on Commons makes Harald an identifiable, central figure. The
   Krohg and Munthe vignettes for Eiriksønnenes saga and Håkon den godes saga were
   checked, including the Fitjar battle scene. In the Gunnhild scene he is only one of
   several sons, so it is weak as a likeness. Decide between that and an
   associated site (Hals on the Limfjord, where he was killed) under the
   associated-monument rule. **Owner decision 2026-09-15: the monument image, for now.** An agent is drafting it.
0b. ✅ **Done 2026-09-15: `danelaw`, `kingdom-of-york`, `kingdom-of-east-anglia`
   and `great-heathen-army`** (owner's choice: the Danelaw plus core neighbours;
   Mercia, Æthelflæd and the treaty of Alfred and Guthrum stay named without links
   for now). Each has a map plus a coin, regalia or hoard image, and reverse links
   from Guthrum, Alfred, Eric Bloodaxe, Northumbria and the rest. **Ruler gap
   logged:** the Viking kings of York and East Anglia with no articles (Halfdan,
   Guthfrith, Ragnall, Sihtric Cáech, Olaf Sihtricson, Eohric) and the English
   kings Edmund the Martyr and Rædwald. The original request follows.
   Searched first: no article,
   alias or Five Boroughs entry exists, and seven articles already mention the
   Danelaw in prose (`battle-of-edington`, `alfred-the-great`, `edward-the-elder`,
   `edmund-i-of-england`, `guthrum`, `kingdom-of-wessex`, `house-of-wessex`);
   link them in once it exists. Write it to the Kingdom and Polity standard: how
   it formed (the Great Heathen Army from 865, the settlement of Northumbria, East
   Anglia and eastern Mercia in the 870s, the boundary agreed by Alfred and
   Guthrum); what law and custom meant inside it (Scandinavian legal terms, the
   wapentake, the Five Boroughs, and "Danelaw" as a legal label first recorded in
   the early eleventh century rather than a state); who ruled which part (the
   kings of York, Guthrum in East Anglia, the armies of the Five Boroughs); the
   West Saxon reconquest under Edward the Elder and Æthelflæd; Eric Bloodaxe's
   fall in 954; and the Anglo-Scandinavian legacy in place names, law and
   language. **At least two images** with full metadata, e.g. a map of the
   division plus coinage of the York kings or a monument. **Gaps will surface:**
   there is no article for East Anglia, the Kingdom of York (Jórvík), Mercia, the
   Treaty of Alfred and Guthrum, the Great Heathen Army or Æthelflæd. Decide
   which are created with it and which are named without links. Existing
   neighbours to link: `guthrum`, `northumbria`, `battle-of-edington`,
   `battle-of-brunanburh`, `eric-bloodaxe`, `aethelstan`, `cnut-the-great`,
   `coppergate-helmet`.
0c. ✅ **DONE 2026-09-15: the Plantagenet batch is recorded below, the rest in 0c-B above.** **OWNER REQUEST 2026-09-15 — articles for queens, starting with the house
   trees. The owner expects this to be big, and it is.** **Owner chose all 36
   unlinked spouses. Plantagenet batch done 2026-09-15:** `berengaria-of-navarre`,
   `isabella-of-angouleme`, `eleanor-of-provence`, `eleanor-of-castile`,
   `isabella-of-france`, `philippa-of-hainault`, `joan-of-kent`, `anne-of-bohemia`,
   `blanche-of-lancaster`, `mary-de-bohun`, `catherine-of-valois`,
   `margaret-of-anjou`, each linked in the Plantagenet (and, for Catherine,
   Lancaster) tree with reverse links from husbands and sons. The four tree
   spouses that already had articles (`margaret-i`, `jadwiga-of-poland`,
   `isabella-i-of-jerusalem`, `irene-of-athens`) are now linked too. **Remaining:**
   Normandy (Matilda of Flanders, Matilda of Scotland, Geoffrey of Anjou, Stephen of
   Blois, Matilda of Boulogne), Wessex (Ealhswith, Eadgifu, Emma of Normandy, Edith
   of Wessex), and the rest (Philippa of Lancaster, Irene Doukaina, Constance of
   Sicily, Thyra, Eudokia Makrembolitissa, Marjorie Bruce, Adela of Normandy, Milica,
   both Theodoras, Theophano, Sophia). Images: Ealhswith leads with the Nunnaminster site under the
   associated-monument rule, and Marjorie Bruce with the effigy traditionally
   identified as hers at Paisley. Two empresses named Theodora need distinct labels plus a
   context-hint entry, as "Alexander" has. Reported on
   `house-of-plantagenet`: every queen in the tree is plain text, e.g. Henry V's
   wife Catherine of Valois, who has no article under any spelling. Audit
   2026-09-15: the 70 house trees hold **44 spouse nodes, 38 of them unlinked (36
   distinct people)**. Plantagenet 12 of 14, Normandy 5 of 5, Wessex 4 of 4, the
   rest one or two each. The two Plantagenet spouses that do link, Empress Matilda
   and Eleanor of Aquitaine, both ruled in their own right. **Scope by importance,
   not by tree position:**
   - **Tier 1, queens who governed or changed events:** Isabella of France (with
     Mortimer, deposed Edward II), Margaret of Anjou (led the Lancastrian cause),
     Catherine of Valois (the Treaty of Troyes marriage; through Owen Tudor,
     grandmother of Henry VII), Philippa of Hainault, Eleanor of Castile, Isabella
     of Angoulême, Berengaria of Navarre, Eleanor of Provence, Anne of Bohemia.
   - **Tier 2, spouses in the tree who were never queens:** Joan of Kent (Princess
     of Wales, mother of Richard II), Blanche of Lancaster, and Mary de Bohun
     (Henry Bolingbroke's first wife, dead five years before he was king). Create
     where the record supports a biography; otherwise name them unlinked, as the
     unlinked-commander convention does.
   - Then the unlinked spouses in the other trees (Normandy, Wessex, the Byzantine
     dynasties), then important queens outside the trees.
   **Rules that apply:** the full Person standard, including a main image that
   depicts the woman herself (the tomb effigies at Westminster, Fontevraud and
   L'Épau, manuscript portraits), Character and Personality, a timeline of at
   least 5 and at least 3 related entries. A consort is not a ruler, so **no
   succession box**; a queen regnant gets one. Link both ways: the tree node gains
   `personSlug`, and her article links her husband and the house. Worth a gate once
   tier 1 exists: fail on an unlinked spouse node whose partner is a linked ruler,
   with an allowlist for the documented no-biography cases.
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
   The batch 3 polities (approved 2026-09-15): `frankish-kingdom`, `carolingian-empire`, `kingdom-of-wessex`, `northumbria`, `aquitaine`, `duchy-of-normandy`, `county-of-flanders`, `north-sea-empire`, `byzantine-empire`, `empire-of-nicaea`, `latin-empire`, `despotate-of-epirus`, `kingdom-of-asturias`, `caliphate-of-cordoba`, `umayyad-caliphate` and `almohad-caliphate`. Polities without heraldry get an attested emblem, with a caption saying plainly that they bore no arms. **Still to do:** the rest, then the `check-images` gate and the no-heraldry allowlist.
0e. **OWNER REQUEST 2026-09-15 — CIVILIZATIONS, a new first-class archive
   category. The largest expansion the project has had.** The owner's full spec is
   `iron-codex-civilizations-master-prompt.md` in the repo root (3,429 lines;
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
1. **Stub backlog — 228 articles under 2,000 chars, 134 with no timeline.**
   Median article is 3,044. This is now the highest-value content work because
   the site is indexed: a 1,800-character page cannot rank for anything, and the
   worst offenders are famous battles people actually search. By inbound links:
   `battle-of-las-navas-de-tolosa` (29 links, 1,889 chars), `battle-of-bannockburn`
   (26), `battle-of-bouvines` (25), `battle-of-kosovo` (25), `battle-of-grunwald`
   (23), `wars-of-scottish-independence` (21), `battle-of-crecy` (21), `rouen`
   (13 links, **911 chars**), `battle-of-svolder` (11 links, **941 chars**).
   Re-run `node scripts/audit-stubs.mjs` for the current list.
2. **Template prose — 86 articles carry 24 name-substituted generator
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

**#1 is done.** `/api/insights` now returns `accounts: { available, total, daily }`. The data comes from each account's `createdAt` in the user store (`listAccountCreatedDates`), bucketed with the same `day()` and `lastDays()` as views. A user-store failure reports the series as unavailable and never blanks the views. The page shows the total and a daily chart. **#2 (favourites): the owner chose on 2026-09-15 to chart them by period.** Record timestamped favourite events; the series starts empty on the day it ships. **#3 needs Search Console data** and is still an open question.

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
  pass, or wire the API. `SEO_TESTING.md` is the only place it is currently
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


### NEW ARTICLE + ARCHIVE AUDIT — Battle of Loudoun Hill (1307)

**Queued by the owner 2026-09-09. Not started.** Two halves, and the second is
the one that usually gets skipped: the article, then a full archive audit so
every existing plain-text mention of the battle becomes navigable to it.

**1. The article.** Follow the strongest existing battle articles for structure,
tone, metadata and sourcing — inspect them first and match, do not invent a
pattern. Cover, where the evidence supports it: date, location, wider conflict,
belligerents, commanders, approximate forces (clearly caveated), outcome,
strategic significance, background, lead-up, terrain and tactical context, the
course of the battle, Robert the Bruce's role, Aymer de Valence / Pembroke's
role, aftermath, the effect on Bruce's campaign and consolidation, and the
relationship to the wider Wars of Scottish Independence.

**Separate four registers explicitly:** securely attested fact, reasonable
historical interpretation, later chronicler tradition, and disputed detail. Do
not reconstruct thin evidence as fact or overstate uncertain numbers.

**2. Positioning.** Loudoun Hill was an important early victory in Bruce's
recovery from the setbacks of 1306. Explain the battlefield context carefully —
especially the constrained terrain and prepared ground that blunted the English
mounted force — WITHOUT turning it into cinema, and without implying certainty
where the tactical reconstruction rests on later sources. The article must
answer **why it mattered**, not merely that Bruce won.

**3. Internal links out.** Robert the Bruce, Aymer de Valence, Edward I,
Edward II where contextually relevant, Scotland, England, Wars of Scottish
Independence, plus any relevant houses, realms, places, battles, people and
campaign pages already in the archive. Follow current link conventions exactly,
and **do not create a duplicate for an entity that already exists under another
slug**.

**4. The archive audit — links in.** Search the whole archive for "Battle of
Loudoun Hill", "Loudoun Hill", name variants, and prose that plainly describes
the 1307 battle without naming it. Make every relevant mention link to the new
article: Robert the Bruce's page, English commanders' biographies, campaign and
war articles, Scottish history articles, timeline entries, related battles,
house and realm pages.

**5. Do NOT over-link.** Only references to the 1307 battle itself. Not
geographic mentions of the hill, not later events at the same place, not
ambiguous references. Respect the existing rule against repeating a link within
one section or paragraph.

**6. Both directions.** The battle links out to people and context; those pages
link back. **Verify the Robert the Bruce article specifically** and confirm its
Loudoun Hill mention is navigable.

**7. Slug and routing.** Prefer `/battles/battle-of-loudoun-hill` unless current
routing says otherwise. Inspect comparable battle articles first and match their
implementation — no one-off pattern.

**8. Image.** If a hero image is needed, follow the current image rules: early
14th-century Scotland, correct armour, shields and weapons for 1307; NO later
14th/15th-century plate, no fantasy, no Victorian romanticism, no anachronistic
heraldry, terrain consistent with Loudoun Hill. Historical plausibility over
spectacle. **AI images must disclose themselves in the caption** per the
existing rule.

**9. Metadata.** Match current battle conventions — title, subtitle/summary,
date, location, conflict, participants, outcome, SEO title, meta description,
tags, related people/places/battles, realm and faction associations. Confirm it
appears in the battle indexes, filters, search, timelines and relationship
views.

**10. Convention, if not already written down.** The archive should enforce:
*when a new battle article is created, audit the archive for plain-text mentions
and convert the relevant ones into links; and a new person or historical article
mentioning an existing battle links to it.* **Strengthen the existing rule if
one exists rather than adding a second copy** — `CLAUDE.md` and
`CONTENT_GUIDELINES.md` already carry linking rules, so check before writing.

**11. Validation before finishing.** Article renders; route resolves; appears in
the right indexes; the Robert the Bruce link works; every other discovered
reference navigates; no broken links; no duplicate Loudoun Hill article;
metadata follows convention; `npm run check:content-quality` and
`npm run check:images` pass.

**Report at the end:** files created, files modified, every article where a link
was added or corrected, whether the project docs were updated, and any reference
left unlinked with the reason.


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
traffic, and the traffic is not there yet.** `MARKETING.md`'s own forecast puts
first real traffic at **months 4–6**; indexing is still climbing and impressions
are near zero. Before evaluating any ad network, do the arithmetic:

- History/education display RPMs run roughly **$5–20 per 1,000 pageviews**.
- Network floors: AdSense none, Ezoic ~10k/month, Mediavine 50k sessions,
  Raptive 100k pageviews.
- So 10k pageviews a month is **$50–150**. Write that number down before anyone
  designs an ad slot, because it is the whole argument.

**Note the standing rule this request lifts:** `MARKETING.md` says "No
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
