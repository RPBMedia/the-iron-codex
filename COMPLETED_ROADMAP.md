# Completed roadmap

Work that is finished, moved here out of the planning files so the working set
stays small. Each entry records **what was built**, the date and the commits —
not the original brief. Open items stay in `QUEUE.md`; standards live in
`CLAUDE.md`, `CODEX.md` and `CONTENT_GUIDELINES.md` and never move here.

---

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
