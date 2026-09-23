/**
 * The card version of an article: what an archive page, the index and a card
 * actually read, and nothing else.
 *
 * WHY. Archive pages used to download whole collections — People was 4 MB,
 * image credits, timelines, relations and every paragraph included — to draw
 * cards that show a picture, a name, a date and one lead paragraph. Every visit
 * paid for it through the server function, and on 2026-09-23 that pushed the
 * site past Vercel's free 10 GB of origin transfer. Cards for all eight
 * collections now come to about 180 KB compressed, built once per deploy by
 * `scripts/build-static-data.mjs` and served as static files.
 *
 * The full text the search box needs is NOT here; see archiveText.js.
 *
 * ⚠️ A NEW FIELD READ BY ArticleCard, CollectionPage (filters, sort) or
 * IndexPage MUST BE ADDED HERE, or it will be undefined on every card.
 *
 * Plain ESM with no JSX and no browser globals, like pageMeta.js.
 */
import { leadText } from './pageMeta.js'

const CARD_FIELDS = [
  'id', 'type', 'name', 'title', 'image', 'details',
  // Dates, for the card's date line, sorting and the century filter.
  'born', 'died', 'year', 'originYear', 'founded', 'reignSpan', 'chronology',
  // Types and places, for labels and filters.
  'eventType', 'locationType', 'kingdom', 'weaponArmorType', 'period', 'region',
  'material', 'civilizationType', 'culturalFamily', 'conflict', 'location',
  'battlefieldRole', 'endonym',
  // Names a reader might search by, for relevance ranking.
  'aliases', 'roles', 'knownFor'
]

export function cardFor(item) {
  const card = {}

  for (const field of CARD_FIELDS) {
    if (item[field] !== undefined) card[field] = item[field]
  }

  // The lead paragraph, resolved once, so a card never needs `overview`.
  const lead = leadText(item)
  if (lead) card.summary = lead

  if (item.birth?.date) card.birth = { date: item.birth.date }

  if (item.quickFacts) {
    const { realm, culture, knownFor } = item.quickFacts
    card.quickFacts = { realm, culture, knownFor }
  }

  return card
}
