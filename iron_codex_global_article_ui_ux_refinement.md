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
