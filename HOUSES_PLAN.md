# Houses / Dynasties — Feature Plan (M0)

A new **Houses** archive: noble dynasties and ruling lineages of the European
Middle Ages (House of Plantagenet, Capet, Hauteville, Habsburg, Rurikid, …).
Houses sit as a **sixth collection** beside `events`, `characters`, `locations`,
`artifacts`, `weaponsArmor`, and reuse the same article infrastructure, quality
bar, and validators.

Scope stays inside IronCodex's window — **476–1453**. A dynasty whose *defining*
medieval life falls in that window is in scope; branches that only matter after
1453 (e.g. Tudor, Bourbon, later Habsburg) are named as continuations in prose,
never chained into out-of-scope articles.

## Why the wiring is light

`"houses"` is the collection key **and** the URL slug, so — unlike
`characters↔people` and `weaponsArmor↔weapons-armor` — every slug map falls
through unchanged (`publicCollectionName`, `apiCollectionName`, `api.js`
`apiName`, favorites `articleType`). The only genuinely new UI is the
`HouseHero` + `HouseContent` render path in `DetailPage`.

## Data schema (`type: "house"`)

```jsonc
{
  "id": "house-of-plantagenet",
  "type": "house",
  "name": "House of Plantagenet",
  "aliases": ["Plantagenet", "Angevins", "House of Anjou"],
  "originYear": 1154,            // first year the house held its defining crown/realm
  "endYear": 1485,              // null if it continued past 1453 (explain in prose)
  "reignSpan": "1154–1485",     // human display for the fact strip
  "region": "England & western France",
  "originPlace": "Anjou",       // free text; link the seat via `seats`
  "arms": "Gules, three lions passant guardant or",  // blazon, optional
  "image": "https://commons.wikimedia.org/wiki/Special:FilePath/...",
  "imageInfo": {
    "caption": "…", "creator": "…", "date": "…",
    "source": "Wikimedia Commons", "sourceUrl": "https://commons.wikimedia.org/wiki/File:...",
    "note": "Honest note: arms roll / later depiction / manuscript, etc."
  },
  "summary": "One-sentence archive-card summary.",
  "overview": "Lead paragraph for the detail hero.",
  "founder": { "personSlug": "henry-ii-of-england", "displayName": "Henry II", "note": "First Angevin king of England" },
  "seats": [ { "name": "Kingdom of England", "type": "location", "slug": "kingdom-of-england" } ],
  "notableMembers": [
    { "personSlug": "henry-ii-of-england", "displayName": "Henry II", "note": "Founder of the Angevin empire" },
    { "personSlug": "richard-i-of-england", "displayName": "Richard the Lionheart", "note": "Crusader king" }
    // { displayName, note } with no personSlug = named member not (yet) in the archive — never a broken link
  ],
  "cadetBranches": [
    { "name": "House of Lancaster", "note": "Descended from John of Gaunt; held the crown 1399–1461/1470–71." },
    { "name": "House of York", "note": "Descended from Edmund of Langley; held the crown 1461–1485." }
  ],
  "contentSections": [
    { "title": "Origins", "paragraphs": ["…"] },
    { "title": "Rise to power", "paragraphs": ["…"] },
    { "title": "Major rulers", "paragraphs": ["…"] },   // names auto-link to Person articles
    { "title": "Cadet branches", "paragraphs": ["…"] },
    { "title": "Wars and rivalries", "paragraphs": ["…"] },
    { "title": "Decline and end", "paragraphs": ["…"] },
    { "title": "Legacy", "paragraphs": ["…"] }
  ],
  "timeline": [ { "year": 1154, "title": "Henry II crowned", "description": "…", "links": [ { "type": "person", "slug": "henry-ii-of-england" } ] } ],
  "relatedEntries": {
    "people":   [ { "title": "Henry II", "type": "person", "slug": "henry-ii-of-england", "label": "Founder" } ],
    "events":   [ { "title": "…", "type": "event", "slug": "…" } ],
    "locations":[ { "title": "Kingdom of England", "type": "location", "slug": "kingdom-of-england", "label": "Primary realm" } ]
  },
  "sources": [ { "title": "…", "url": "https://…", "note": "…" } ]
}
```

Relations reuse the established shapes: `notableMembers`/`founder` mirror the
succession `{ personSlug, displayName, note }` convention (link real Person
articles; `{ displayName, note }` with no slug for named-but-unwritten members,
never a broken link). `seats` and `relatedEntries` reuse the related-entry
`{ title, type, slug, label? }` shape. `timeline` reuses the location/person
timeline shape and flows through the same auto-linker.

## Quality bar (same as every article type)

- Real, resolving, relevant image with full `imageInfo` metadata (verify the
  exact Commons filename; run `npm run check:images --remote`). For arms, a
  heraldic roll / period seal / manuscript with an honest caption.
- Every `contentSections` section passes the specificity test — named rulers,
  dates, battles, treaties, cadet lines; no filler, no banned phrases.
- Every named ruler written in prose must match a Person article's label/alias
  so the auto-linker resolves it (run `node scripts/gen-entity-links.mjs`).
- `relatedEntries` ≥ 3 real, explainable links; major houses 4–6.
- ≥ 3 sources (Commons/museum + encyclopedia + specialist/academic).

## Full wiring inventory

**Data** — `server/data/history.json`: add top-level `houses: [ … ]`.

**Server** — `server/index.js`:
- `collections()` → add `houses: data.houses ?? []`.
- Slug maps (`publicCollectionName`, `apiCollectionName`) → no change (fall through).
- Detail route `/api/:collection/:id`, favorites, `articleForCollection` → already generic.
- Optional: include houses in the `/api/home` daily-featured pool.

**Client**:
- `App.jsx` → `<Route path="/houses" element={<CollectionPage collection="houses" />} />` (detail via generic `/:collection/:id`).
- `Header.jsx` → nav item `{ label: 'Houses', to: '/houses' }`.
- `CollectionPage.jsx` → `collectionCopy.houses = { eyebrow, title: 'Houses', description }`; check `getFilterConfigs`/`getSortOptions`/`entryMeta` (`client/src/lib/archive.js`) handle houses or fall through.
- `IndexPage.jsx` → category `{ key:'houses', title:'Houses', collection:'houses' }`, `buildIndexGroups.houses`, `entryMeta` case, and add houses to the fetch that populates `collections`.
- `DetailPage.jsx` → `collectionLabels.houses = 'Houses'`; add `article.type === 'house'` → **`HouseHero`** + **`HouseContent`** (new); `labelFor` house case.
- `ArticleCard.jsx` → `labelFor` house → 'House'; `formatDate` house → `reignSpan`; `displayCollection` falls through.
- `api.js` → add houses to `getSearchCollections` (global search); `apiName` falls through.
- `client/src/lib/search.js` → include houses in the search index.
- Favorites (`FavoriteButton.jsx`) → `articleType = 'houses'` falls through.

**Validators** (`scripts/check-images.mjs`, `scripts/check-content-quality.mjs`):
- Both iterate named collections. Add a `houses` image loop with M1 (validate the
  seed house's image), and house content rules (sections non-filler, member links
  resolve, related ≥3) in M5.

## Proposed roster (grouped; prioritise dynasties with existing ruler articles)

- **A — British Isles & Normans:** House of Wessex (Cerdicings), House of Normandy, House of Plantagenet (+ cadets Lancaster, York), House of Hauteville.
- **B — France & the Empire:** Carolingians, House of Capet, House of Valois, House of Hohenstaufen, Ottonian/Salian, House of Habsburg.
- **C — Iberia:** House of Burgundy (Portugal / Afonsine), House of Aviz, House of Trastámara, House of Barcelona (Aragon), Jiménez (Navarre/Castile).
- **D — Scandinavia:** Fairhair dynasty, House of Estridsen (Denmark), House of Bjälbo (Sweden), House of Sverre (Norway).
- **E — East, Byzantium & Islamic:** Rurikids, Árpáds (Hungary), Piast (Poland), Komnenos, Palaiologos, House of Osman (Ottomans), Ayyubids.

## Milestones

- **M0** — Audit + schema + roster (this doc).
- **M1** — Plumbing (server + client + `HouseHero`/`HouseContent`) + **one fully-authored seed house**, both validators green, committed & pushed.
- **M2–M4** — Content batches A→E, cross-linked to existing ruler/location articles.
- **M5** — House-specific validators, heraldry/cadet-branch polish, bidirectional ruler↔house related links.

_Environment note: this repo's CLAUDE.md documents a Windows/PowerShell dev setup
(ports 4000/4001). Current work is on macOS — use `npm` directly; the hard gate is
`npm run check:content-quality` + `npm run check:images` (+ `--remote`), then commit
& push to `main` as RPBMedia._
