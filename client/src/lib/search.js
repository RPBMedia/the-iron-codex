import { getSearchCollections } from './api.js'

let cachedIndexPromise

export function getGlobalSearchIndex() {
  if (!cachedIndexPromise) {
    cachedIndexPromise = getSearchCollections().then(buildSearchIndex)
  }

  return cachedIndexPromise
}

export function buildSearchIndex(collections) {
  return [
    ...collections.people.map((item) => normalizePerson(item)),
    ...collections.events.map((item) => normalizeEvent(item)),
    ...collections.locations.map((item) => normalizeLocation(item)),
    ...collections.artifacts.map((item) => normalizeArtifact(item)),
    ...(collections.weaponsArmor ?? []).map((item) => normalizeWeaponArmor(item)),
    ...(collections.houses ?? []).map((item) => normalizeHouse(item)),
    ...(collections.orders ?? []).map((item) => normalizeOrder(item))
  ]
}

export function searchArchive(index, query, limit = 50) {
  const normalizedQuery = normalize(query)

  if (!normalizedQuery) {
    return []
  }

  const queryYear = yearFromQuery(normalizedQuery)

  return index
    .map((entry) => {
      const match = scoreEntry(entry, normalizedQuery, queryYear)
      return { ...entry, matchKind: match.kind, score: match.score }
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
    .slice(0, limit)
}

export function shouldNavigateDirectly(results, query) {
  const normalizedQuery = normalize(query)

  if (!normalizedQuery || yearFromQuery(normalizedQuery) || results.length === 0) {
    return false
  }

  const exactMatches = results.filter((result) => result.matchKind === 'exact')

  if (exactMatches.length === 1) {
    return true
  }

  return results.length === 1 && results[0].score >= 600
}

function scoreEntry(entry, query, queryYear) {
  const exactTitle = normalize(entry.title) === query
  const exactAlias = entry.aliases.some((alias) => normalize(alias) === query)
  const exactSlug = normalize(entry.slug) === query
  const titleIncludes = normalize(entry.title).includes(query)
  const aliasIncludes = entry.aliases.some((alias) => normalize(alias).includes(query))
  const tagIncludes = entry.tags.some((tag) => normalize(tag).includes(query))
  const relatedIncludes = entry.related.some((related) => normalize(related).includes(query))
  const textIncludes = entry.searchableText.includes(query)
  const yearMatches = queryYear ? entry.years.includes(queryYear) : false
  const timelineMatches = queryYear ? entry.timelineYears.includes(queryYear) : false

  if (exactTitle) {
    entry.matchKind = 'exact'
    return { kind: 'exact', score: 1000 + typePriority(entry, queryYear) }
  }

  if (exactAlias) {
    return { kind: 'exact', score: 920 + typePriority(entry, queryYear) }
  }

  if (exactSlug) {
    return { kind: 'exact', score: 860 + typePriority(entry, queryYear) }
  }

  if (queryYear && yearMatches) {
    return { kind: 'year', score: 700 + typePriority(entry, queryYear) }
  }

  if (queryYear && timelineMatches) {
    return { kind: 'year', score: 560 + typePriority(entry, queryYear) }
  }

  if (titleIncludes || aliasIncludes) {
    return { kind: 'partial', score: 620 + typePriority(entry, queryYear) }
  }

  if (tagIncludes) {
    return { kind: 'tag', score: 380 }
  }

  if (relatedIncludes) {
    return { kind: 'related', score: 260 }
  }

  if (textIncludes) {
    return { kind: 'text', score: 140 }
  }

  return { kind: '', score: 0 }
}

function normalizePerson(item) {
  const years = compactYears([item.born, item.died, yearFromText(item.birth?.date), yearFromText(item.death?.date)])
  const timelineYears = compactYears((item.timeline ?? []).map((timelineItem) => yearFromText(timelineItem.date)))
  const related = relatedText(item.relatedEntries)
  const roles = item.roles ?? []

  return {
    id: item.id,
    title: item.name,
    type: 'person',
    typeLabel: 'Person',
    slug: item.id,
    url: `/people/${item.id}`,
    description: item.summary,
    dateLabel: [item.birth?.date ?? item.born, item.death?.date ?? item.died].filter(Boolean).join('-'),
    aliases: [item.title, ...(item.aliases ?? []), ...roles].filter(Boolean),
    tags: [item.quickFacts?.culture, item.quickFacts?.realm, item.quickFacts?.knownFor, ...roles].filter(Boolean),
    years,
    timelineYears,
    related,
    searchableText: normalize([
      item.name,
      item.id,
      item.summary,
      item.location,
      item.roleNote,
      item.historicalReliability,
      item.quickFacts?.realm,
      item.quickFacts?.culture,
      item.quickFacts?.knownFor,
      item.birth?.place?.name,
      item.death?.place?.name,
      ...roles,
      ...related,
      ...(item.overview ?? []),
      ...(item.contentSections ?? []).flatMap((section) => [section.title, ...(section.paragraphs ?? [])]),
      ...(item.keyAchievements ?? []).flatMap((achievement) => [achievement.title, achievement.description])
    ])
  }
}

function normalizeEvent(item) {
  const eventType = item.eventType === 'Battle' ? 'battle' : 'event'
  const years = compactYears([item.year])

  return {
    id: item.id,
    title: item.name,
    type: eventType,
    typeLabel: item.eventType || 'Event',
    slug: item.id,
    url: `/events/${item.id}`,
    description: item.summary,
    dateLabel: String(item.year ?? ''),
    aliases: [item.eventType, ...(item.aliases ?? [])].filter(Boolean),
    tags: [item.eventType, item.location, item.conflict, ...(item.factions ?? [])].filter(Boolean),
    years,
    timelineYears: [],
    related: [
      ...(item.leaders ?? []).map((leader) => leader.name),
      item.eventLocation?.name,
      ...relatedText(item.relatedEntries)
    ].filter(Boolean),
    searchableText: normalize([
      item.name,
      item.id,
      item.summary,
      item.details,
      item.location,
      item.eventType,
      item.conflict,
      item.outcome,
      item.battle,
      item.aftermath,
      ...(item.background ?? []),
      ...(item.contentSections ?? []).flatMap((section) => [section.title, ...(section.paragraphs ?? [])]),
      ...(item.factions ?? []),
      ...(item.leaders ?? []).flatMap((leader) => [leader.name, leader.faction])
    ])
  }
}

function normalizeLocation(item) {
  const type = item.locationType === 'Kingdom' ? 'kingdom' : 'location'

  return {
    id: item.id,
    title: item.name,
    type,
    typeLabel: item.locationType || 'Location',
    slug: item.id,
    url: `/locations/${item.id}`,
    description: item.summary,
    dateLabel: String(item.year ?? ''),
    aliases: [item.kingdom, ...(item.aliases ?? [])].filter(Boolean),
    tags: [item.locationType, item.kingdom].filter(Boolean),
    years: compactYears([item.year]),
    timelineYears: [],
    related: [item.kingdom].filter(Boolean),
    searchableText: normalize([
      item.name,
      item.id,
      item.summary,
      item.locationType,
      item.kingdom,
      ...(item.overview ?? []),
      ...(item.knownFor ?? [])
    ])
  }
}

function normalizeArtifact(item) {
  const isDocument = /charter|carta|book|manuscript|document|codex|chronicle|tapestry/i.test(`${item.name} ${item.summary}`)

  return {
    id: item.id,
    title: item.name,
    type: isDocument ? 'document' : 'artifact',
    typeLabel: isDocument ? 'Document' : 'Artifact',
    slug: item.id,
    url: `/artifacts/${item.id}`,
    description: item.summary,
    dateLabel: String(item.year ?? ''),
    aliases: item.aliases ?? [],
    tags: [item.location, isDocument ? 'document' : 'artifact'].filter(Boolean),
    years: compactYears([item.year]),
    timelineYears: [],
    related: [item.location].filter(Boolean),
    searchableText: normalize([item.name, item.id, item.summary, item.details, item.location])
  }
}

function normalizeWeaponArmor(item) {
  return {
    id: item.id,
    title: item.name,
    type: 'weaponArmor',
    typeLabel: item.weaponArmorType ?? 'Weapons & Armor',
    slug: item.id,
    url: `/weapons-armor/${item.id}`,
    description: item.summary,
    dateLabel: item.period ?? String(item.year ?? ''),
    aliases: item.aliases ?? [],
    tags: [item.weaponArmorType, item.period, item.region, item.material, item.battlefieldRole, ...(item.knownFor ?? [])].filter(Boolean),
    years: compactYears([item.year]),
    timelineYears: [],
    related: relatedText(item.relatedEntries),
    searchableText: normalize([
      item.name,
      item.id,
      item.summary,
      item.details,
      item.weaponArmorType,
      item.period,
      item.region,
      item.material,
      item.battlefieldRole,
      ...(item.aliases ?? []),
      ...(item.knownFor ?? []),
      ...relatedText(item.relatedEntries),
      ...(item.contentSections ?? []).flatMap((section) => [section.title, ...(section.paragraphs ?? [])])
    ])
  }
}

function normalizeHouse(item) {
  return {
    id: item.id,
    title: item.name,
    type: 'house',
    typeLabel: 'Dynasty',
    slug: item.id,
    url: `/houses/${item.id}`,
    description: item.summary,
    dateLabel: item.reignSpan ?? String(item.originYear ?? ''),
    aliases: item.aliases ?? [],
    tags: [item.region, item.originPlace, ...(item.notableMembers ?? []).map((m) => m.displayName), ...(item.cadetBranches ?? []).map((b) => b.name)].filter(Boolean),
    years: compactYears([item.originYear, item.endYear]),
    timelineYears: (item.timeline ?? []).map((entry) => entry.year).filter(Boolean),
    related: relatedText(item.relatedEntries),
    searchableText: normalize([
      item.name,
      item.id,
      item.summary,
      item.overview,
      item.region,
      item.originPlace,
      item.arms,
      ...(item.aliases ?? []),
      ...(item.notableMembers ?? []).map((m) => m.displayName),
      ...(item.cadetBranches ?? []).map((b) => b.name),
      ...relatedText(item.relatedEntries),
      ...(item.contentSections ?? []).flatMap((section) => [section.title, ...(section.paragraphs ?? [])])
    ])
  }
}

function normalizeOrder(item) {
  const grandMasters = (item.grandMasters ?? []).map((m) => m.name)
  const battles = (item.battles ?? []).map((b) => b.name)
  const strongholds = (item.strongholds ?? []).map((s) => s.name)
  const timelineYears = compactYears((item.timeline ?? []).map((entry) => yearFromText(entry.date)))

  return {
    id: item.id,
    title: item.name,
    type: 'order',
    typeLabel: 'Military order',
    slug: item.id,
    url: `/orders/${item.id}`,
    description: item.summary,
    dateLabel: item.founded ?? String(item.originYear ?? ''),
    aliases: item.aliases ?? [],
    tags: [item.habit, item.allegiance, item.patron, item.headquarters, ...grandMasters].filter(Boolean),
    years: compactYears([item.originYear]),
    timelineYears,
    related: [...grandMasters, ...battles, ...relatedText(item.relatedEntries)].filter(Boolean),
    searchableText: normalize([
      item.name,
      item.id,
      item.summary,
      item.purpose,
      item.habit,
      item.allegiance,
      item.headquarters,
      item.patron,
      ...(item.aliases ?? []),
      ...grandMasters,
      ...battles,
      ...strongholds,
      ...relatedText(item.relatedEntries),
      ...(item.contentSections ?? []).flatMap((section) => [section.title, ...(section.paragraphs ?? [])])
    ])
  }
}

function typePriority(entry, queryYear) {
  if (!queryYear) return 0

  return {
    battle: 80,
    event: 70,
    person: 25,
    kingdom: 20,
    location: 15,
    document: 10,
    weaponArmor: 8,
    artifact: 5
  }[entry.type] ?? 0
}

function compactYears(values) {
  return [...new Set(values.map((value) => Number(value)).filter(Number.isFinite))]
}

function yearFromText(value) {
  const match = String(value ?? '').match(/\d{3,4}/)
  return match ? Number(match[0]) : undefined
}

function yearFromQuery(query) {
  return /^\d{3,4}$/.test(query) ? Number(query) : undefined
}

function relatedText(groups) {
  return Object.values(groups ?? {})
    .flat()
    .flatMap((entry) => [entry.title, entry.label, entry.type])
    .filter(Boolean)
}

function normalize(value) {
  return [value]
    .flat(Infinity)
    .filter(Boolean)
    .join(' ')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}
