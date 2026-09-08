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

_Last updated: 2026-09-08 (**Track C STARTED** — M1 SEO audit done. Track A complete 14/14; Track D closed; auth confirmed working in production on both sign-in paths.)_

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
      precedence, so re-check them whenever a new source opens up. Prompts are in
      `WEAPONS_ARMOR_AI_PROMPTS.md`.

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
- [ ] **M5 — Editorial audit + rewrite** — **PARKED (owner, 2026-09-07): not
      being worked for now.** Batches 1 and 2 shipped; batches 3–7 and the
      `validateWeaponsArmorDepth` rule are on hold, not cancelled. Everything
      below is preserved so it can be resumed from `main` alone. Audit delivered:
      `WEAPONS_ARMOR_EDITORIAL_AUDIT.md`.
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

- [ ] M2 — Technical SEO: prerendered metadata, sitemap, robots, canonicals,
      JSON-LD, social cards, real 404s, 301s for the legacy URLs
- [ ] M3 — Internal linking and curated landing pages
- [ ] M4 — Performance and crawlability
- [ ] M5 — Search Console + Bing preparation
- [ ] M6 — Analytics provider evaluation
- [ ] M7 — Privacy-safe event model
- [ ] M8 — Private "Insights & Analytics" page
- [ ] M9 — Server-side admin authorization
- [ ] M10 — Conditional header control between menu and search
- [ ] M11 — Paid-marketing proposal
- [ ] M12 — Organic promotion plan
- [ ] M13 — Tests
- [ ] M14 — Validation and QA
- [ ] M15 — **APPROVAL GATE — stop and wait**

_Note: a few lines of the pasted brief arrived garbled ("Meta descriptionlade",
"Server-rendered content availabilityFox", "Internal links/antlr", and a stray
sentence inside the Canonical URL bullet). Intent is clear from context; confirm
with the owner if any of those bullets mattered specifically._

---

## Open — small, ready to run

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

## Blocked on the user

- **DECISION NEEDED — the image rule is systematically deferring non-Christian
  and non-European commanders.** Raised 2026-09-07 after M6. Four consecutive
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
