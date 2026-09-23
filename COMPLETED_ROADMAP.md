# Completed roadmap

Work that is finished, moved here out of the planning files so the working set
stays small. Each entry records **what was built**, the date and the commits —
not the original brief. Open items stay in `QUEUE.md`; standards live in
`CLAUDE.md`, `CODEX.md` and `CONTENT_GUIDELINES.md` and never move here.

---

## Bandwidth: off the server function — closed 2026-09-23

The site went past Vercel's free **10 GB of Fast Origin Transfer** (11.2 GB in
30 days, most of it in the last four). That meter only counts traffic through
the server function, and the cause was not the images: the header search box
fetched **all eight collections, 9.5 MB, through the function on every visit**,
uncached, and the archive and article pages fetched theirs the same way.

- **Static data.** `scripts/build-static-data.mjs` writes cards, per-collection
  search text, every enriched article and the header search index to
  `client/dist/data/` at build; the app reads those first (`lib/api.js`) and
  keeps the API as the fallback. Cards for all eight collections: ~200 KB
  gzipped (People 4 MB → 78 KB).
- **Search loads on use.** The header index loads on focus or typing, not with
  the page; an archive page's box fetches its full text on the first keystroke.
- **API cached.** `/api/:collection(/:id)` carry `s-maxage=3600`; `/api/home`
  stays uncached (personalised).
- **Images as WebP.** 62 local images, 41.8 MB → 9.2 MB, ≤1600 px
  (`scripts/optimize-images.mjs`); originals in `client/assets/originals/`;
  JPEG social cards kept; `check-images` now fails on a local PNG/JPEG.

Expected: origin transfer ~97–99% lower at the same traffic.

---

## The fourteen approved rulers — queue item 0s — closed 2026-09-17

All fourteen are written: Alfonso X of Castile, Stephen I of Hungary, Ine of
Wessex and Fernán González (`e92b71f`); Mindaugas, Gediminas, Algirdas and
Kęstutis (`bf5180c`); Ordoño II, Alfonso V, Urraca and Alfonso IX of León
(`0613742`); Engelbrekt Engelbrektsson; and Sten Sture the Elder.

**The regent question was answered both ways, and that is the right answer.**
Engelbrekt is **not** marked a ruler and carries no succession box:
*rikshövitsman* was a war command created in an emergency, Eric of Pomerania
stayed crowned king of all three kingdoms throughout, and Engelbrekt settled with
that king in October 1435 and took Örebro in fief from him. Sten Sture **is** a
ruler: Sweden had no king at all from 1470, the regent exercised royal
government, and the chain is documented on both sides. The `birger-jarl`
precedent is not "regents get boxes" but "a named office of the realm, held as
head of government, with a documented succession" — the same test producing
different results.

**The scope conflict was surfaced, not resolved quietly.** Sten Sture's regency
begins in 1470, which CLAUDE.md's 1453 rule excludes *"whatever a task spec
says"* — while this very item named him. Two owner instructions genuinely
conflicted, so the article was written, gated green and **held** rather than
shipped or dropped on the assistant's judgement. The owner ruled that he ships,
and the override is now recorded beside the rule in CLAUDE.md so no future
session deletes him by the letter of it.

**Two corrections to the briefs, both kept.** Ordoño II did not move the capital
from Oviedo to León — García I already held court there from about 910, and
Ordoño made it irreversible by giving his palace for the cathedral. Alfonso IX's
curia of 1188 is written as a *curia regia* widened by a king with a contested
title, not a standing institution, with UNESCO's 2013 inscription quoted and the
point made that the claim is documentary rather than evolutionary.

The batch also produced the **"Teresa of Portugal"** guard: `teresa-of-leon`
owns that alias, but Alfonso IX married a different Teresa in 1191 — Sancho I's
daughter and his own first cousin, which is why it was annulled — and she has no
article. The natural phrasing would have sent readers to Afonso Henriques's
mother, sixty years dead by the wedding.


## City locator maps — queue item 0k — closed 2026-09-17

**Every place in the archive that has coordinates now carries a locator: 100 of
them, across 18 base maps.** It began the day at 50 and the feature at 4.

**The route was bounds, not calibration, and that finding is the item.** Fitting
a projection to a historical map's own town LABELS failed at 102 units of error
on a 1405-wide map, and the projection was not the cause — Mercator,
equirectangular and a quadratic all landed within 2% of each other. A label sits
left, right, above or below its dot depending on space, and that scatter is the
floor. So the maps use the degree box Wikipedia's `Module:Location map/data/`
publishes for each image: correct by construction, no fitting at all.

**Spain is the trap worth remembering.** Its module publishes `left = -26.925`,
which is not the map's western edge at all — it belongs to the Canary Islands,
grafted into the corner by a formula that branches at longitude -10. The mainland
branch is plain and linear, giving a real box of -9.9 to 4.8. Taking the
published number at face value would have crushed Iberia into a fifth of the
frame and put every marker in the Atlantic. **Always check a published box
against the image's aspect ratio** — `Δlon · cos(mid-lat) : Δlat` — before
trusting it.

**Novgorod closed it**, with its own oblast entry rather than a country map:
European Russia's module is formula-driven rather than a degree box, and a full
Russia map would crop to some 45° of longitude, which is a region and not a
locator. It is deliberately absent from `COUNTRY_TO_MAP`, because mapping RU to
an oblast map would hand it to any future Russian place far outside it.

**`gestilren` is permanently excluded, not a gap.** Its own article says nobody
has ever established where the 1210 battle was fought, and sets out the
Västergötland and Uppland cases. A future pass must not "fix" it by inventing
coordinates.

Two tests gate it: every location naming a base map has coordinates that fall on
it, and — added when the item closed — every marker lands inside the *visible
crop*, not merely somewhere on the map. A place near a box edge could otherwise
pass the first and still render with its dot clipped out of the inset.

## Kingdom maps and arms — queue item 0d — closed 2026-09-17

Every polity article leads with a territory map and shows its arms or an attested
emblem. Of 58 polities, none lacks a main image.

**Polities without heraldry get an attested object instead of an invented
shield** — a Frankish solidus, a Carolingian denier, pennies of Alfred and
Eadberht, a Cnut penny, a solidus of Constans II, a hyperpyron, dinars and
dirhams, Vytautas's equestrian seal, a Volodymyr coin — each captioned to say
plainly that the polity bore no coat of arms.

**The last two were emirates, and they were invisible rather than finished.** The
arms gate's type pattern did not include `emirate`, so Crete and Melitene were
neither failing nor tracked while Hamdanid Aleppo happened to pass. The pattern
now covers emirates and both sit on `polity-arms-backlog.json`, which the gate
does watch: it fails if either later gains a panel and stays listed.

Neither has usable coinage, and that was established by category rather than
keyword — `Category:Emirate of Crete` holds only Madrid Skylitzes battle
miniatures, which are Byzantine narrative illustration of the emirate's enemies
rather than its own emblem, and Melitene has no category at all. The emirate did
mint dinars; they are simply not published under a licence this archive can use.

The shared-map defect closed with it: `England_878.svg` led `danelaw` and also
sat on `kingdom-of-england`. Danelaw keeps it, since that map *is* the Danelaw,
and England's origins section took a map of the kingdoms before unification.


## Wrong links: the class closed — 2026-09-17

`check-content-quality` hard-fails on a MISSING link and never on a WRONG one,
so the worst failure the archive can produce — sending a reader to a different
person, place or century — had no gate at all. Five had been found by accident,
one at a time: Alexander (70 strings), Teresa of Portugal, Shrewsbury,
Adrianople, Nájera.

**The method that failed, recorded so nobody repeats it.** Ranking short link
terms by how many articles contain them is useless: the top of that list is
England, France, Constantinople, Denmark, Rome and Scotland — the most-used and
most-CORRECT links in the archive. 422 terms flagged, near-zero precision.

**The method that worked** is one line: *a link term that is also the name or
alias of a different article*. Frequency proves nothing; a name collision is
structural. It found six in a single pass, each verified by dates before being
guarded:

- **Pedro I / Peter the Cruel / Peter the Just** — three shared epithets across
  two contemporary Iberian kings. Peter of Castile (1334–1369) and Peter I of
  Portugal (1320–1367) each carried all three.
- **John the Good** — the Valois king captured at Poitiers in 1356, and also how
  Byzantium remembered John II Komnenos.
- **Birger Magnusson** — Birger Jarl's own name, and his descendant the king's.
- **Eadweard** — Old English for Edward, held by both the Elder and the Martyr.
- **Crécy** — the battle and the village.
- **Phokas** — a family as well as an emperor; eighteen articles write "the
  Phokas family", "Leo Phokas" and "Bardas Phokas" about the tenth century, while
  the bare alias belonged to the usurper of 602–610.

**Two bugs in the generator sat underneath them.** `safeBattleSuffix` promised in
its own comment that Crécy, Stiklestad and Bannockburn were left to their full
form because they are also location articles — but it read only `a.name`, never
aliases, and the Crécy location is *named* the unaccented "Crecy". It now reads
names and aliases, keyed by claimant id: a first attempt without the id
suppressed nine good suffixes, because most battles carry their own suffix and so
collided with themselves. Fixing the check was still not enough, because a suffix
baked into `entityLinks.js` by an earlier run reads back as a curated alias and
survives regeneration — the same trap the file already handled for stale
"Siege of X" suffixes, and now handles for battles.

**`tests/entity-link-guards.test.mjs` closes the class.** A term claimed by two
or more link entries is allowed only when a guard exists to arbitrate it, so a
future article that shares a name with an existing one fails the build instead of
quietly stealing its links. The test also locks the hazards found by hand, checks
every guard is well formed and points at a real article, and catches a guard that
can never fire.

It earned its place three times on the day it was written. Its first version
asserted the opposite of the truth — that a guarded term must NOT also be a
minted alias — and every guard in the file failed it; `resolveAmbiguousAlias`
runs *on top of* the match, so a guarded term absent from the table guards
nothing. Corrected, it caught a genuinely dead guard ("Tours-Poitiers", guarded
but never minted, so it linked to nothing) and a duplicate one ("Alexander",
guarded twice with different contextHints, so whichever lost the array-order race
discarded half its disambiguation).

**One process failure worth keeping.** One commit in this sequence shipped with a
failing test, because the chain that ran it piped the test through `tail`, which
masks the exit code. Never pipe a gate through `tail`.


## Person–place mentions — queue item 0u — closed 2026-09-17

The survey reported **85 person-place pairs** where a birth or death place never
mentions the person. **Three were real.** The rest were either correct as they
stood or artefacts of the survey's own matcher, and finding that out was most of
the work.

**What was added.** Dunfermline Abbey now records that Robert the Bruce's heir
David II was born there on 5 March 1324, five years before his father was
carried into the choir. Roskilde records that Eric VI died in the town on 13
November 1319 and was carried to Ringsted for burial — not every king who died
there stayed in it. Rouen records that the Empress Matilda advised Henry II from
the city and died near it on 10 September 1167, buried at Bec-Hellouin. Each is
a fact about the **place**, not a biography line, and each location now lists the
person in `relatedEntries`.

**The matcher was the bug, twice.** A first-name match called Oslo a hit because
the article names Haakon V; a full-name match called Kirkwall a *gap* while that
article carries a section titled "The death of Haakon IV" — the character is
titled `Haakon IV Haakonsson`, and **the survey never searched section titles at
all**, which is where a large share of real mentions live. Agincourt was flagged
because `Charles d'Albret` in the data uses a straight apostrophe and the prose a
typographic one. Anyone re-running this kind of survey should search titles and
timelines, normalise apostrophes, and match on the regnal core as well as the
full name.

**Three real ones were deliberately left alone**, and that is the item's actual
lesson: *lombardy* ← Guido da Landriano, whose own article says only "associated
with Lombardy", so asserting a birth there invents precision the sources lack;
*oxford* ← Edward the Confessor, who was born at **Islip**, with `oxford` merely
the nearest-article slug, so "born here" would be false; and Rome, Paris and
Constantinople, which cannot name every ruler born or dead in them without
becoming registers.

**No gate was added, on purpose.** The original entry warned that a gate would
have to exclude polity-type locations and cap by article size or it would demand
padding — and the no-filler rules forbid exactly that. The judgement is per-pair,
and a rule that fires on all 85 would be worse than the drift it polices.


## House members linked, and the four that were not — queue item 0t — closed 2026-09-17

A survey found 11 house members named in `notableMembers` or a family tree whose
name matches an existing article while carrying no `personSlug`. Seven were the
same person and were linked: Æthelwulf (Wessex), Charles I of Anjou, Lazar
Hrebeljanović on both surfaces, Alexander (Macedonian), Yaqub al-Mansur, Theodora
wife of Theophilos, Milica of Serbia, and John I of Portugal — identified by his
position in the tree as Pedro I's illegitimate son, not by his name.

**Four would have been wrong links, which is the whole point of the item.**
Courtenay's Baldwin II is the last Latin Emperor, who lost Constantinople in
1261; the archive's only Baldwin II is the king of Jerusalem who died in 1131.
Hauteville's Tancred is the patriarch whose sons took southern Italy, not his
descendant Tancred of Galilee. Welf's Henry V is the Count Palatine of the Rhine,
not the victor of Agincourt. Burgundy-Portugal's John I resolved by name to John
I Tzimiskes, a Byzantine emperor. A mechanical sweep would have written all four.

The new check in `check-content-quality.mjs` gates this as the House-side twin of
the stale succession-endpoint check: a member who gains an article can no longer
sit unlinked unnoticed, and every refusal is recorded in
`AMBIGUOUS_HOUSE_MEMBERS` with its reason instead of being silently skipped. It
compares character IDs rather than name keys — one person carrying both "Yaqub
al-Mansur" and "Ya'qub al-Mansur" is not a name clash, and the first draft of the
survey wrongly called it one.

The standing lesson is the one CLAUDE.md already states, paid for again here: **a
wrong link is worse than a missing link.**


## The battle gap — seven articles and a gate — 2026-09-16 (`4a41a65`)

Six battles the archive named but had never written, plus the commander who
anchored two of its existing battles as an unlinked name.

**Articles written**

| Article | Date | Note |
|---|---|---|
| Battle of the Standard | 1138 | Thurstan's banner-cart; the Galwegian quarrel over the vanguard |
| Battle of Loudoun Hill | 1307 | Bruce's first real victory after exile; the ditches rest on Barbour, and the article says so |
| Battle of Stanhope Park | 1327 | Douglas's night raid on Edward III's camp; led to the 1328 peace |
| Battle of Neville's Cross | 1346 | David II captured; eleven years in English custody |
| Battle of Otterburn | 1388 | Douglas killed, Hotspur taken; the ballad kept as later memory |
| Battle of Homildon Hill | 1402 | Archery against a stationary target; the ransom quarrel that fed the Percy revolt |
| Simon de Montfort | c. 1208–1265 | 10 sections, no succession box — he governed England but was never its monarch |

**The gate.** `validateBattleLinking` only ever scanned for the phrase "Battle of
X", so a bare "Falkirk (1298)" slipped past it. The bare form now fails too.
Shape alone was useless: the archive holds 347 `Name (YYYY)` mentions and 251 of
them name no battle (Domesday Book, the Peace of Constance, a university founded
at Caen). The rule therefore requires a fighting word within 55 characters to the
left of `at/near/before <Name> (<year>)` — 347 down to 34, of which 32 are real
engagements. It surfaced **17 unwritten battles** now recorded in
`BATTLE_BACKLOG`: Lechfeld, Courtrai, Cortenuova, Dandanaqan, La Forbie,
Mansurah, Nechtansmere, Heavenfield, Velbazhd, Soissons, the Trent, the Zab,
Ponza, Val-ès-Dunes, Bornhöved, Åsle, Épila.

**The alias trap.** `gen-entity-links` auto-aliases a bare battle suffix, which
made **"the Standard"** a link target — and that phrase occurs 86 times across 68
files as ordinary English ("the standard weapon of the dismounted man-at-arms").
It is now guarded in `ambiguousEntityAliases` with context hints (1138,
Northallerton, Cowton Moor, Thurstan, David I, Galwegian, Espec, Aumale), so
`resolveAmbiguousAlias` returns null everywhere else and the three real mentions
link through the full label.

**Continuity re-pointed** so no link skips an engagement: Methven → Loudoun Hill,
Bannockburn → Stanhope Park, Halidon Hill → Neville's Cross. Lewes and Evesham
gained Montfort as a linked commander and lost the "no biography yet" notes.
`eventSortDates` gained Neville's Cross (17 October 1346), which shared 1346 with
Crécy.

## Owner reports and batches from 2026-09-15 to 16 — queue items 0a-0c, 0f-0l, 0p

Nine finished queue items, moved here on 2026-09-16 and deleted from QUEUE.md.

- **0a — `harald-greycloak`'s main image.** Redone on the owner's rule that
  "anything is better than a random landscape": a person with no likeness leads
  with something that depicts them, however symbolic, never scenery.
- **0b — Danelaw, Kingdom of York, Kingdom of East Anglia.** Maps and emblems,
  each captioned honestly where the realm bore no coat of arms.
- **0c — the Plantagenet batch**, plus articles for queens and consorts who had
  been named across the archive without pages.
- **0f — empty cards no longer render.** Reported on `danelaw`, whose "Kingdom"
  card sat blank under a "Region in undefined" subtitle. Every hero fact strip
  now builds a list, filters empties, and renders nothing when none remain.
- **0h — empty Key Achievements.** 48 people stored achievements as plain
  sentences, each rendering as a card with no text.
- **0i — 15 person pages showed only a name.** Found on `el-cid`.
- **0j — `sigurd-of-norway`'s crusade section**, 437 to 2,870 characters, with
  the timeline from 7 to 12 entries.
- **0l — follow-ups found while fixing el-cid.**
- **0p — the blank-border image scan.** 1,109 images scanned: 98 frame, 50 pair,
  36 single. **28 real margins** cropped and self-hosted; the rest were
  legitimate — coins and seals the owner decided to keep on white, objects
  photographed on white, light seas, white skies inside engravings, parchment.
  Two decisions closed it: coins and seals stay as they are, and **no baseline
  gate** — it would fail roughly six times wrongly per true catch and would need
  an allowlist longer than the problem, while contradicting the owner's own
  choice on coins. `scripts/audit-image-borders.mjs` stays an on-demand audit.
  The three washed-out maps flagged inside it (`vandal-kingdom`,
  `mongol-empire`, `sasanian-empire`) were replaced in the batch-4 work.

## Owner reports from the first away run — queue item 0n — closed 2026-09-16

Seven reports the owner made while testing the 2026-09-15 away-mode ships. All
seven are closed; the item is deleted from QUEUE.md.

- **Known for must link.** Names, places and events in any article's Known for are
  navigable like body prose — `renderLinkedText` on `quickFacts.knownFor`, and
  `KnownForBlock` receives the article.
- **Insights ran onto the light body.** The cause was in the SHARED rule, not the
  Insights page: `.page-section::before` paints its ground with an `auto` bottom
  and a fixed `min-height`, making it a band rather than the page's height.
  Insights is the only page-section long enough to outrun it. Fixed by clearing
  the min-height for that page alone, so Collection, Search, Index and Topics keep
  the band that is correct for them.
- **`baraka-khan`'s death place had no page.** `kerak` was written: 13,000
  characters, 13 sections, 17 timeline entries.
- **`kingdom-of-jerusalem`'s Conder map was unreadable.** Replaced with
  "Principal locations in the Kingdom of Jerusalem", which later became the one
  calibrated base map behind the city locator feature.
- **`pope-leo-iii`** was written that night.
- **`kerak`'s main image was black and white with the ruins barely visible.** It
  now leads with a 2012 colour photograph of the curtain walls and towers along
  the crest of the spur, the castle filling the frame.
- **`louis-ix-of-france` led with a church.** It now leads with the Bible
  moralisée made in Paris for him and his mother Blanche of Castile, about
  1227–1234 — a contemporary manuscript depicting the man.

**Worth recording about this item rather than its contents:** four of the seven
were closed by *verifying* them, not by doing work. They had been fixed days
earlier and nobody had marked them, so the queue overstated what was left. A
finished item that still reads as open costs a future session the same
investigation twice.

## The markdown sweep — queue item 0g — closed 2026-09-16

The repo carried eight planning files and the owner could not tell which one was
being worked on. It now holds **six markdown files**: `CLAUDE.md`, `CODEX.md`,
`CONTENT_GUIDELINES.md` and `COMPLETED_ROADMAP.md` — the protected set that is
never folded in or deleted — plus `QUEUE.md` as the single work list and
`README.md` as repo documentation.

What the sweep did: folded the rulers programme, the UI/UX refinement, the
civilizations expansion, the growth plan and the SEO how-to into QUEUE.md as
**Appendices A–E**, verbatim and verified byte-for-byte before the originals were
deleted; rewrote all 14 in-file pointers so none dangles; and gave QUEUE.md a
dashboard saying where each programme stands, which was the thing actually
missing. `HOUSES_PLAN.md` was finished work and its record moved here.

CLAUDE.md carries the rule that keeps it from regrowing: never create a new
planning file — a new programme is a queue item and its spec is an appendix.

**The habit it established matters more than the tidy-up.** Since then 0n, 0p and
0g itself have all been retired the same way: a condensed record here, the item
deleted there. Ten items have left the queue, and four of those were closed by
verifying that work already done had simply never been marked.

## Houses / dynasties — a sixth collection — M0–M5, complete 2026-09-15

`HOUSES_PLAN.md`'s work, finished and the file deleted on 2026-09-16. **70 houses
are in the archive**, from House of Wessex and Plantagenet to the Rurikids,
Komnenos, Palaiologos and House of Osman.

What was built: `houses` as a sixth collection beside events, characters,
locations, artifacts and weaponsArmor — the collection key and the URL slug are
the same word, so every slug map fell through unchanged and the only genuinely new
UI was the `HouseHero` / `HouseContent` render path in `DetailPage`. The schema
carries `founder`, `notableMembers`, `cadetBranches`, `familyTree`, `seats`,
`arms` and a timeline, with the `{ personSlug, displayName, note }` convention
reused from succession so a named-but-unwritten member is never a broken link.
Both validators gained house rules, and house↔ruler navigation is bidirectional.

Two things it deliberately did not do: chain into post-1453 branches (Tudor,
Bourbon, later Habsburg are named in prose as continuations), and merge
historically distinct houses through careless aliasing — "House of Anjou" is
claimed by both the Plantagenets and the Capetian House of Anjou, so it is
denylisted and resolves to neither.

**Still open, tracked in QUEUE 0m:** four roster houses never got articles —
Ottonian/Salian, Habsburg, House of Barcelona and Piast. They are prerequisites
for the rulers programme.

## Mention rewrites and the Scottish wars hub — 2026-09-16 (`d97dd2a`, `d1ec15b`)

The 29 drafted rewrites from the Falkirk and Lewes batches, applied: 14 files, 32
replacements, since three sentences are stored twice in their articles and both
copies had to change or they would drift apart. Evesham and Alnwick were the ones
that mattered — both carry year-qualified labels with no bare alias, because a
bare "Evesham" would link the eleventh-century abbey on `edith-of-wessex` and a
bare "Alnwick" would link the 1093 battle in which Malcolm III was killed. Those
mentions had never linked. Left bare on purpose: Dalrigh, the *towns* of Falkirk
and Dunbar on Edward II's 1314 march and escape, and the 1093 Alnwick mentions.

The war overview then got its own battles back. All eleven engagements of the
First and Second Wars listed it in their related entries; it listed three of them
back, so a reader on Falkirk could reach the war but not the reverse. It now runs
Dunbar 1296 to Neville's Cross 1346 in order, each labelled. Otterburn and
Homildon Hill are deliberately excluded: their conflict is the later
Anglo-Scottish Wars.

## People hero, and two pages that lied — 2026-09-16 (`1d5e0a6`, `ffab950`, `7ce123a`)

**The hero band (Option B).** Everything except the image lived in the right hero
column, so on a person it ran to about 810px against a 590px portrait and left
roughly 220px of dead black under the picture. The facts now span both columns
beneath the hero via `grid-column: 1 / -1` — three across, two below 820px, one on
phones — which is the move the battle pages already had. Owner chose this from
three mocked options. "Known for" spans the full band; the succession pair keeps
its own two columns.

**Two specificity collisions, same rule.** `.detail-body p:not(.eyebrow)` paints
hero paragraphs in body ink and beat both the deck and the roles line on a tie,
rendering them near-black on the near-black hero. Both fixed by naming the
paragraphs that get ink rather than out-weighting the rule.

**A grouping bug asserting false history.** The Wars of Scottish Independence page
claimed "No single named commander is securely represented" under both sides while
listing Wallace, Bruce and both Edwards in its own data: leaders group by matching
`leader.faction` to the side's name, and this article filed them under "Scottish
resistance" and "English crown" against factions reading "Kingdom of Scotland" and
"Kingdom of England". Vocabulary aligned in the three events with that shape — the
Treaty of Edinburgh-Northampton and the Treaty of Zamora were found by scanning,
not reported — and the client now prints that sentence only when an article names
no commander at all, so a future mismatch degrades to silence rather than a false
claim. Zamora's papal legate stays under "Papacy" and appears under neither
kingdom.

**Realm/polity links.** It resolved only for military orders, so Henry III's
"Kingdom of England" was plain text beside a linked "House of Plantagenet".
`withRealmLocation` resolves it on exact names and aliases, order check first;
276 realms link, 124 stay plain because compound values like "Frankish Kingdom /
Carolingian Empire" name no single article.

## Bare-named battles, first nine — 2026-09-16 (`0dda0e3`, gate `cd7a266`)

Written after the owner found the archive naming Falkirk 14 times across 7
articles with no article behind it: `battle-of-falkirk` (1298),
`battle-of-dunbar` (1296), `battle-of-methven` (1306), `battle-of-dupplin-moor`
(1332), `battle-of-halidon-hill` (1333), `battle-of-carham` (1018),
`battle-of-lewes` (1264), `battle-of-evesham` (1265), `battle-of-alnwick` (1174).

Evesham and Alnwick are titled with their years, because a bare alias would have
hit the abbey on `edith-of-wessex` and the 1093 battle on `matilda-of-scotland`;
bare "Falkirk" and "Dunbar" carry context guards, because Edward II marched
through both towns in 1314.

`cd7a266` added the rule that continuity must point at the **next** engagement of
the same war: the check hard-fails when another military event of the same
conflict sits between a battle's year and its continuity target's year. That is
what forced Stirling Bridge's link off Bannockburn and onto Falkirk.

## Battle of Loudoun Hill (1307) — queued 2026-09-09, delivered 2026-09-16 (`4a41a65`)

Its own queue item, covering the article and the archive audit for links in.
Delivered with the battle gap above: 6 sections, timeline 9, both sides' strength
marked `debated` with notes recording that the round figures descend from
Barbour's verse epic rather than any muster roll, Bruce linked as commander and
Aymer de Valence documented-unlinked, continuity to Bannockburn, and Methven
re-pointed onto it so the 1306–1314 chain runs in order. Robert the Bruce's
article carries it in related entries and in the timeline, which was the specific
check the item asked for. The main image is the engagement diagram rather than a
photograph of the hill: empty countryside is not an acceptable battle image, a
rule the owner set on the Carham ship the day before.
