/**
 * The render gate: asserts what article pages ACTUALLY render.
 *
 * Every other check in this project reads data or CSS. None of them can see the
 * rendered DOM, because the prerenderer writes a hand-built SEO skeleton rather
 * than React output — so a component can be deleted, never written, or silently
 * broken and every gate still passes.
 *
 * That is not hypothetical. The contents rail was recorded as shipped in
 * milestone U2 and had never been built; grepping the deployed HTML for it
 * returned zero, and so did grepping for `detail-hero` and `bio-section`,
 * because none of that markup is in the prerendered page at all. Three
 * "verified live" claims the same day were matching the inlined JSON payload
 * instead of markup.
 *
 * This renders one article per family through the real component tree and
 * asserts structural invariants. It is deliberately about STRUCTURE, not
 * styling: whether the elements exist, carry the right classes, and appear in
 * the right relationship. Whether they look right is still a human's job.
 *
 * Usage:  node scripts/check-render.mjs
 * The SSR bundle is built first by `npm run check:render`.
 */
import { existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { loadArchive } from '../server/data/archive.mjs'
import { enrichArticle } from '../server/article-enrichment.js'

// The bundle lives under client/ because node resolves its externals (react,
// react-dom/server, react-router-dom) from the bundle's own directory.
const here = path.dirname(fileURLToPath(import.meta.url))
const bundle = path.join(here, '..', 'client', '.render-gate', 'entry.js')

if (!existsSync(bundle)) {
  console.error('Render gate bundle missing. Run: npm run check:render')
  console.error(`  expected: ${bundle}`)
  process.exit(1)
}

const { renderArticle, renderMapPage } = await import(pathToFileURL(bundle).href)
const data = loadArchive()

const collectionFor = {
  events: 'events',
  characters: 'people',
  locations: 'locations',
  houses: 'houses',
  orders: 'orders',
  weaponsArmor: 'weapons-armor',
  artifacts: 'artifacts',
  civilizations: 'civilizations'
}

const findIn = (collection, predicate) => (data[collection] ?? []).find(predicate)
const sectionCount = (a) => (a.contentSections ?? []).filter((s) => s.title).length
const has = (html, needle) => html.includes(needle)
const countOf = (html, needle) => html.split(needle).length - 1

/**
 * One representative per article family, chosen for what it exercises rather
 * than for being typical: a battle with factions, a ruler with succession, a
 * city with a locator map, a house with a family tree.
 */
const CASES = [
  {
    label: 'battle (event)',
    collection: 'events',
    pick: () => findIn('events', (e) => e.id === 'battle-of-brunanburh'),
    expect: [
      ['hero image figure', (h) => has(h, 'detail-media')],
      ['article title', (h) => has(h, '<h1')],
      ['deck under the title', (h) => has(h, 'article-deck')],
      ['factions block', (h) => has(h, 'event-side-card') || has(h, 'event-intel')],
      ['outcome block', (h) => has(h, 'info-block-outcome') || has(h, 'event-outcome')],
      ['continuity card', (h) => has(h, 'battle-continuity') || has(h, 'continuity')],
      ['body sections', (h) => has(h, 'bio-section')]
    ]
  },
  {
    label: 'person / ruler',
    collection: 'characters',
    pick: () => findIn('characters', (c) => c.id === 'edward-i-of-england') ?? findIn('characters', (c) => c.isRuler),
    expect: [
      ['hero image figure', (h) => has(h, 'detail-media')],
      ['roles line carries .person-role', (h) => has(h, 'person-role')],
      ['fact band spans the hero', (h) => has(h, 'person-hero-band')],
      ['succession box', (h) => has(h, 'succession')],
      ['body sections', (h) => has(h, 'bio-section')]
    ]
  },
  {
    label: 'person without succession',
    collection: 'characters',
    pick: () => findIn('characters', (c) => c.id === 'simon-de-montfort'),
    expect: [
      ['fact band present', (h) => has(h, 'person-hero-band')],
      ['NO succession box on a non-ruler', (h) => !has(h, 'succession-strip')]
    ]
  },
  {
    label: 'location / polity',
    collection: 'locations',
    pick: () => findIn('locations', (l) => l.id === 'kingdom-of-england'),
    expect: [
      ['hero image figure', (h) => has(h, 'detail-media')],
      ['arms panel', (h) => has(h, 'detail-media-arms') || has(h, 'arms')],
      ['body sections', (h) => has(h, 'bio-section')]
    ]
  },
  {
    label: 'house',
    collection: 'houses',
    pick: () => findIn('houses', (h) => h.id === 'house-of-plantagenet') ?? (data.houses ?? [])[0],
    expect: [
      ['family tree', (h) => has(h, 'house-tree')],
      ['body sections', (h) => has(h, 'bio-section')]
    ]
  },
  {
    label: 'weapon / armour',
    collection: 'weaponsArmor',
    pick: () => findIn('weaponsArmor', (w) => w.id === 'longsword') ?? (data.weaponsArmor ?? [])[0],
    expect: [
      ['full-object render mode', (h) => has(h, 'detail-media-weaponArmor')],
      ['body sections', (h) => has(h, 'bio-section')]
    ]
  },
  {
    label: 'order',
    collection: 'orders',
    pick: () => findIn('orders', (o) => o.id === 'teutonic-order') ?? (data.orders ?? [])[0],
    expect: [['body sections', (h) => has(h, 'bio-section')]]
  },
  {
    label: 'artifact',
    collection: 'artifacts',
    pick: () => (data.artifacts ?? [])[0],
    expect: [['body sections', (h) => has(h, 'bio-section')]]
  },
  {
    // CivilizationHero and CivilizationContent were written, compiled, shipped
    // and covered by no gate at all — exactly the hole this file's header
    // describes, and it went unnoticed because the prerendered page contains
    // the article JSON, so grepping it for "Names and Identity" returns a hit
    // whether or not a single component ran.
    //
    // The assertions are chosen for what is specific to a people rather than
    // what any article has.
    //
    // An arms-panel assertion USED to sit here and was wrong. It was written
    // when the only two civilizations were Pechenegs and Cumans, both of which
    // carry an object standing in for heraldry — a grave axe, a kurgan stele —
    // and it over-generalised from that sample. The Ostrogoths have no such
    // emblem, and inventing one to satisfy a test would breach the rule against
    // fabricating arms. A civilization MAY carry an emblem; it must not be
    // required to. ArmsImage is still wired for the type (see DetailPage), which
    // is what actually mattered.
    label: 'civilization',
    collection: 'civilizations',
    // Ostrogoths, not Pechenegs: it is the article carrying the boundary rule
    // against a realm article that already exists, so it is where the people /
    // state split would visibly fail if it failed anywhere.
    pick: () => findIn('civilizations', (c) => c.id === 'ostrogoths')
      ?? findIn('civilizations', (c) => c.id === 'pechenegs')
      ?? (data.civilizations ?? [])[0],
    expect: [
      ['hero image figure', (h) => has(h, 'detail-media')],
      ['civilization hero renders', (h) => has(h, 'civilization-profile')],
      ['hero fact strip', (h) => has(h, 'fact-strip')],
      ['endonym subtitle, where one is recorded', (h) => has(h, 'article-subtitle')],
      ['body sections', (h) => has(h, 'bio-section')],
      ['NO polity-only markup leaked in', (h) => !has(h, 'locator-figure')]
    ]
  }
]

const failures = []
const notes = []

for (const testCase of CASES) {
  const article = testCase.pick()
  if (!article) {
    failures.push(`${testCase.label}: no article found to render`)
    continue
  }

  let html
  try {
    html = renderArticle(enrichArticle(article, data), collectionFor[testCase.collection])
  } catch (error) {
    failures.push(`${testCase.label} (${article.id}): threw while rendering — ${error.message}`)
    continue
  }

  if (html.includes('Opening article') || html.includes('LoadingState')) {
    failures.push(`${testCase.label} (${article.id}): rendered the loading state, not the article`)
    continue
  }

  for (const [name, assertion] of testCase.expect) {
    if (!assertion(html)) failures.push(`${testCase.label} (${article.id}): ${name}`)
  }
  notes.push(`  ${testCase.label.padEnd(26)} ${article.id.padEnd(30)} ${String(html.length).padStart(6)} bytes`)
}

/**
 * The contents rail, checked against the threshold rather than merely present:
 * it must appear at 4+ sections and must NOT appear below that, and every link
 * it renders must point at a heading id that exists in the same document.
 */
for (const [id, collection, expectRail] of [
  ['battle-of-brunanburh', 'events', true],
  ['simon-de-montfort', 'characters', true],
  ['jalbolung', 'locations', true],
  ['wantage', 'locations', true],
  ['bouvines', 'locations', false],
  ['treaty-of-zamora', 'events', false]
]) {
  const article = findIn(collection, (a) => a.id === id)
  if (!article) { notes.push(`  (skipped rail check, no article: ${id})`); continue }

  const html = renderArticle(enrichArticle(article, data), collectionFor[collection])
  const railPresent = has(html, 'contents-rail')
  const sections = sectionCount(article)

  if (railPresent !== expectRail) {
    failures.push(
      `contents rail on ${id} (${sections} sections): expected ${expectRail ? 'a rail' : 'NO rail'}, got ${railPresent ? 'a rail' : 'none'}`
    )
  }

  if (railPresent) {
    const anchors = [...html.matchAll(/href="#(section-[a-z0-9-]+)"/g)].map((m) => m[1])
    if (!anchors.length) failures.push(`contents rail on ${id}: rendered no links`)
    for (const anchor of anchors) {
      if (!has(html, `id="${anchor}"`)) {
        failures.push(`contents rail on ${id}: link #${anchor} has no matching heading id`)
      }
    }
    if (anchors.length !== sections) {
      notes.push(`  (rail on ${id}: ${anchors.length} links for ${sections} sections)`)
    }
  }
}

/** No article may render the development-only broken-image state. */
for (const [collection, arr] of Object.entries(data)) {
  if (!Array.isArray(arr) || !collectionFor[collection]) continue
  const sample = arr.slice(0, 3)
  for (const article of sample) {
    const html = renderArticle(enrichArticle(article, data), collectionFor[collection])
    if (has(html, 'Image unavailable')) {
      failures.push(`${collection}/${article.id}: renders "Image unavailable"`)
    }
    if (countOf(html, '<h1') !== 1) {
      failures.push(`${collection}/${article.id}: expected exactly one <h1>, found ${countOf(html, '<h1')}`)
    }
  }
}

/**
 * The map page (QUEUE 0v).
 *
 * Gated here because it can be, and it can be because it is inline SVG rather
 * than WebGL. A mapping library would have had to be lazy-loaded out of this
 * check, which would leave the one page on the site that states historical
 * claims as the one page nothing structurally verifies.
 *
 * The year 1147 is chosen deliberately: it is not a source date, so the page has
 * to render the *gap* wording. A map that quietly rendered "1147" as though the
 * borders were reconstructed for 1147 would be the single worst failure this
 * feature can have, and it would be invisible to every other gate.
 */
{
  const html = renderMapPage()
  // The shell only. Server-side the page is in its loading state, because the
  // geometry arrives by fetch — so `.map-figure` is legitimately absent here and
  // asserting it would be asserting that the map fetches during SSR, which it
  // must not. What has to survive without data is the honesty furniture.
  for (const marker of ['map-evidence', 'map-year', 'map-attribution', 'loading-state']) {
    if (!has(html, marker)) failures.push(`map page: did not render .${marker}`)
  }
  if (!has(html, '1147')) failures.push('map page: the selected year from the URL did not reach the page')
  if (!has(html, 'Map evidence: 1100')) {
    failures.push('map page: 1147 did not resolve to the 1100 snapshot — the evidence date is wrong or missing')
  }
  if (!has(html, 'Nothing here is a reconstruction of 1147')) {
    failures.push('map page: the gap between the chosen year and the evidence year is not stated')
  }
  if (!has(html, 'GPL-3.0')) failures.push('map page: the geometry licence is not attributed')
  if (countOf(html, '<h1') !== 1) {
    failures.push(`map page: expected exactly one <h1>, found ${countOf(html, '<h1')}`)
  }
  notes.push('  map page (/map?year=1147 → 1100 snapshot, gap stated)')
}

console.log('Rendered:')
for (const note of notes) console.log(note)

if (failures.length) {
  console.error(`\nRender check FAILED with ${failures.length} problem(s):`)
  for (const failure of failures) console.error(`  - ${failure}`)
  process.exit(1)
}

console.log('\nRender check passed: every article family renders its expected structure.')
