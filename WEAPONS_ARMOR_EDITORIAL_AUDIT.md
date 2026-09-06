# Weapons & Armor — editorial audit (M5)

Audit run 2026-09-06 across all 42 articles, measured rather than impressionistic:
prose length, paragraphs per section, concrete anchors (dates and named
people/places/battles), structured-field coverage, and the red-flag phrase list
from `CLAUDE.md`.

## Headline finding

**The archive fails its own documented standard in 40 of 42 articles**, and the
existing checker does not catch it because it tests for bad *phrases* rather than
for absent *substance*.

`CLAUDE.md` requires of every Weapons & Armor article:

- `contentSections` — **minimum 5 sections, each with at least 3 substantial paragraphs**
- seven mandated topics for a weapon (design, battlefield use, **strengths and
  weaknesses**, historical development, regional variation, **famous examples or
  users**, legacy); seven for armour, including **surviving examples with real
  accession data**
- **Named Examples Required** — every article must reference at least one named
  battle, named individual, or surviving museum object
- "Every section must contain subject-specific substance: named people, named
  places, dates, battles, events, institutions, physical details…"

What is actually there:

| Measure | Archive reality |
|---|---|
| Median prose | **~1,150 characters** — roughly 190 words for a whole article |
| Paragraphs per section | **1** (the standard requires 3+) |
| Sections under 400 chars | **6 of 6, in 40 of 42 articles** |
| Average dates per article | **1** |
| Average named people/places | **1** |
| Articles with the mandated 7 topics | **0** — the template has 6 and omits *strengths and weaknesses* and *famous examples or users* |
| Structured fields beyond `specs` | **1 article** (Longsword) |

The two rigid templates found in M1 are the mechanism: 20 articles share one
section signature, 18 share another, and each section carries a single
one-or-two-sentence paragraph.

### Worked example — the entire `pavise` article

> **Overview** — "The pavise was a large shield used to protect crossbowmen and
> other troops, especially during reloading or siege operations."
> **Design and construction** — "Pavises were tall, often slightly curved wooden
> shields, sometimes with central ridges and painted fronts. Some had props or
> could be held by assistants."
> **Protection and battlefield role** — "The pavise created portable cover against
> arrows, bolts, and stones…"
> **Historical development** — "Pavises became prominent in late medieval urban,
> siege, and mercenary warfare…"
> **Regional variations** — "Italian, Bohemian, German, and other regional pavises
> differed in size and decoration…"
> **Legacy** — "The pavise shows that medieval defense was not only worn on the
> body."

No date. No named siege. No named town or workshop. No museum object. No
dimensions. Nothing a reader could not have guessed from the word "pavise".
It passes the current checker because it contains no banned phrase — the prose is
not padded, there simply is not enough of it.

## Classification

| Rating | Count | Articles |
|---|---|---|
| **EXEMPLARY** | 1 | `longsword` — 4,700 chars, 7/7 structured fields, museum examples with accession numbers, myths section |
| **STRONG** | 1 | `war-bow` — 5,500 chars and 12 dates, genuinely researched prose, but only 1 structured field, so it reads as a wall of text |
| **UNEVEN** | 11 | `arming-sword`, `dane-axe`, `longbow`, `crossbow`, `lance`, `viking-sword`, `seax`, `plate-armor`, `rondel-dagger`, `spear`, `sutton-hoo-helmet` — 1,300–1,750 chars; better than the rest, still far below standard |
| **WEAK** | 29 | Everything else, ~1,000–1,250 chars, one paragraph per section, typically zero dates and zero named entities |
| **MISCLASSIFIED** | 0 resolved, 1 open | `war-bow` vs `longbow` overlap — `war-bow`'s own summary calls itself "an umbrella term … including but not limited to the English longbow" (see Taxonomy, below) |

## Why the checker missed this

`check-content-quality.mjs` hard-fails on banned phrases, verbatim paragraph
reuse, buzzword lists and standalone reliability sections. All are *presence*
tests. Nothing tests for **absence**: an article of six one-sentence sections with
no dates and no named entities passes every rule.

**Fix, to land after the content is rewritten** (adding it first would fail the
build): a `validateWeaponsArmorDepth` check enforcing the documented minimums —
sections, paragraphs per section, minimum prose per section, and at least one
concrete anchor (a date, a named battle, a named person, or a museum object) per
article. Sequencing matters, the same lesson as the image allowlist.

## Taxonomy issues to resolve in M6

- **`war-bow` vs `longbow`** — overlapping subjects; `war-bow` describes itself as
  an umbrella term for the same weapon. Merge, or restructure as parent/child.
- **`mail-coif` is typed `Helmet`** — it is mail head-and-neck protection, not a
  helmet. Better as Armor.
- **`surcoat` is typed `Armor`** — it is a textile garment worn *over* armour and
  protects nothing. Consider a Clothing/Livery type or keep with an honest note.
- **`ulfberht-swords` is typed `Famous weapon`** but is a *group* of ~170 blades,
  not one named object.

## Plan

Rewrite all 40 sub-standard articles to the documented standard, in batches by
category so tone and structure stay consistent:

1. Shields (5) · 2. Helmets (7) · 3. Body armour (8) · 4. Swords and daggers (6)
5. Hafted and pole weapons (9) · 6. Missile weapons (4) · 7. Named artifacts (3)

Each article gets: the seven mandated topics adapted to its subject, 3+
substantial paragraphs per section, at least one named battle, individual or
surviving museum object with its collection, real dimensions expressed as ranges,
and structured fields where they genuinely help (`specs` for all, plus
`survivingExamples`, `myths`, `comparison` or `timeline` where the subject
supports them). Then the depth validator, then re-run the full suite.
