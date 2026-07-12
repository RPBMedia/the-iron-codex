import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

const repoRoot = new URL('..', import.meta.url)
const dataPath = new URL('../server/data/history.json', import.meta.url)
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))
const checkRemote = process.argv.includes('--remote') || process.env.CHECK_REMOTE_IMAGES === '1'
const timeoutMs = Number(process.env.IMAGE_CHECK_TIMEOUT_MS ?? 12000)
const remoteConcurrency = Number(process.env.IMAGE_CHECK_CONCURRENCY ?? 4)
const findings = []
const warnings = []
const remoteCache = new Map()

const renderFields = ['image', 'thumbnail', 'imageUrl', 'imageSrc', 'mainImage', 'heroImage']
const primaryImageFields = ['image', 'thumbnail', 'imageUrl', 'imageSrc', 'mainImage', 'heroImage', 'cardImage']
const placeholderPattern = /placeholder|placehold|dummy|example\.com|blank-image|missing-image|fallback|initials|avatar|default-image|generic-logo/i
const commonsFilePagePattern = /^https:\/\/commons\.wikimedia\.org\/wiki\/File:/i
const sourcePageAsImagePattern = /\/wiki\/File:/i
const generatedPlaceholderPattern = /THE IRON CODEX|<svg|data:image\/svg\+xml|initials/i
// Placeholder-flavoured metadata values: text that pretends to be metadata but
// describes nothing specific. e.g. date "modern photograph, map, or historical image".
const placeholderMetadataPattern = /^(modern photograph, map, or historical image|real representative image used for the linked medieval place|representative image|n\/?a|tbd|placeholder|various)\.?$/i

// Weapons & Armor permanent rule: the MAIN image must show the full, unmistakable
// object — never a manuscript page, tapestry scene, texture/detail crop, fragment,
// statue, or effigy. These tokens in the main-image filename or caption flag a
// likely violation. Entries that genuinely have no full-object photograph (e.g. a
// garment with no surviving example) may be added to the reviewed-fallback
// allowlist below once a human has confirmed it is the best honest option.
const weaponsArmorNonObjectPattern = /codex|\bbible\b|psalter|manuscript|tapisserie|tapestry|bayeux|manesse|froissart|morgan bible|miniature|\(cropped\)|texture|_detail|\bdetail\b|effigy|statue/i
const weaponsArmorFullObjectFallbackAllowlist = new Set([
  // id: reason — no surviving object or clean photographic example exists on Commons
  'surcoat', // contemporary tomb effigy; no medieval European surcoat survives intact
  'buckler' // MS I.33 depiction; no clear photograph of a surviving plain medieval buckler found on Commons
])

for (const [collection, entries] of Object.entries(data)) {
  if (!Array.isArray(entries)) continue

  entries.forEach((entry, index) => {
    const article = entry.name || entry.title || entry.id || `${collection}[${index}]`
    const primaryImageField = primaryImageFields.find((field) => stringValue(entry[field]))

    if (!primaryImageField) {
      addFinding(collection, article, 'image', 'article is missing a primary render image')
    }

    for (const field of renderFields) {
      if (entry[field] !== undefined) {
        validateImageReference({
          collection,
          article,
          field,
          src: entry[field],
          metadata: entry.imageInfo,
          articleSources: entry.sources
        })
      }
    }

    if (collection === 'weaponsArmor' && primaryImageField) {
      validateWeaponsArmorFullObject(article, entry)
    }

    ;(entry.sectionImages ?? []).forEach((image, imageIndex) => {
      validateImageReference({
        collection,
        article,
        field: `sectionImages[${imageIndex}].src`,
        src: image.src,
        metadata: image,
        articleSources: entry.sources
      })
    })

    ;(entry.galleryImages ?? []).forEach((image, imageIndex) => {
      validateImageReference({
        collection,
        article,
        field: `galleryImages[${imageIndex}].src`,
        src: image.src,
        metadata: image,
        articleSources: entry.sources
      })
    })
  })
}

// Major Figure Image Enrichment (see CLAUDE.md): selected major figures should
// have more than one image (main + section images). Warning only — this is an
// editorial standard for listed major figures, not a hard rule for every person.
const MAJOR_FIGURES = new Set([
  'charlemagne', 'charles-martel', 'alfred-the-great', 'aethelstan', 'cnut-the-great',
  'harald-fairhair', 'harald-hardrada', 'sweyn-forkbeard', 'harald-bluetooth',
  'william-the-conqueror', 'harold-godwinson', 'henry-ii-of-england', 'henry-v-of-england',
  'edward-i-of-england', 'edward-iii-of-england', 'richard-the-lionheart', 'saladin',
  'joan-of-arc', 'afonso-i-of-portugal', 'john-i-of-portugal', 'robert-the-bruce',
  'william-wallace', 'mehmed-ii', 'philip-ii-of-france', 'philip-iv-of-france',
  'philip-vi-of-france', 'isabella-of-castile', 'eleanor-of-aquitaine', 'margaret-i',
  'rurik', 'oleg-of-novgorod', 'igor-of-kiev', 'frederick-i-barbarossa',
  'louis-ix-of-france', 'godfrey-of-bouillon', 'constantine-xi-palaiologos'
])
const VERY_MAJOR_FIGURES = new Set([
  'charlemagne', 'william-the-conqueror', 'alfred-the-great', 'saladin',
  'richard-the-lionheart', 'joan-of-arc', 'mehmed-ii', 'harald-hardrada',
  'cnut-the-great', 'afonso-i-of-portugal', 'robert-the-bruce'
])
for (const person of data.characters ?? []) {
  if (!MAJOR_FIGURES.has(person.id)) continue
  const total = (stringValue(person.image) ? 1 : 0) + (person.sectionImages?.length ?? 0)
  if (total < 2) {
    warnings.push(`characters/${person.id}: major figure has only ${total} image(s) — should have a main image plus at least one section image`)
  } else if (VERY_MAJOR_FIGURES.has(person.id) && total < 3) {
    warnings.push(`characters/${person.id}: very major figure has ${total} images — should usually have two section images where good sources exist`)
  }
}

if (checkRemote) {
  await validateRemoteImages()
}

if (findings.length) {
  console.error(`Image check found ${findings.length} issue(s):`)
  for (const finding of findings) {
    console.error(`- ${finding.collection}/${finding.article} ${finding.field}: ${finding.issue}`)
    if (finding.src) console.error(`  ${finding.src}`)
  }
  process.exit(1)
}

if (warnings.length) {
  console.warn(`Image check completed with ${warnings.length} remote warning(s):`)
  for (const warning of warnings.slice(0, 20)) {
    console.warn(`- ${warning}`)
  }
  if (warnings.length > 20) {
    console.warn(`- ${warnings.length - 20} additional warning(s) omitted.`)
  }
}

console.log(`Image check passed: ${remoteCache.size || 'all'} render image reference(s) validated${checkRemote ? ' with remote fetches' : ''}.`)

function validateImageReference({ collection, article, field, src, metadata, articleSources }) {
  if (typeof src !== 'string' || !src.trim()) {
    addFinding(collection, article, field, 'missing or non-string image src', src)
    return
  }

  const trimmedSrc = src.trim()

  if (placeholderPattern.test(trimmedSrc)) {
    addFinding(collection, article, field, 'placeholder-like image src', trimmedSrc)
  }

  if (generatedPlaceholderPattern.test(trimmedSrc)) {
    addFinding(collection, article, field, 'generated placeholder or initials image used as render image src', trimmedSrc)
  }

  if (commonsFilePagePattern.test(trimmedSrc) || sourcePageAsImagePattern.test(trimmedSrc)) {
    addFinding(collection, article, field, 'source page URL used as render image src', trimmedSrc)
  }

  if (trimmedSrc.startsWith('/')) {
    validateLocalPath(collection, article, field, trimmedSrc)
  } else {
    validateUrlShape(collection, article, field, trimmedSrc)
  }

  validateMetadata(collection, article, field, metadata, articleSources)

  if (checkRemote && isRemoteUrl(trimmedSrc)) {
    remoteCache.set(trimmedSrc, remoteCache.get(trimmedSrc) ?? [])
    remoteCache.get(trimmedSrc).push({ collection, article, field })
  }
}

function validateWeaponsArmorFullObject(article, entry) {
  if (weaponsArmorFullObjectFallbackAllowlist.has(entry.id)) return

  const decodedFilename = decodeImageFilename(entry.image)
  const caption = stringValue(entry.imageInfo?.caption) ? entry.imageInfo.caption : ''

  if (weaponsArmorNonObjectPattern.test(decodedFilename) || weaponsArmorNonObjectPattern.test(caption)) {
    addFinding(
      'weaponsArmor',
      article,
      'image',
      'main image may not show the full object (looks like a manuscript page, tapestry, detail/texture, fragment, statue, or effigy). Replace with a clear full-object photo, or add the id to weaponsArmorFullObjectFallbackAllowlist with a reviewed reason.',
      entry.image
    )
  }
}

function decodeImageFilename(src) {
  if (typeof src !== 'string') return ''
  const tail = src.split('/').pop() ?? src
  try {
    return decodeURIComponent(tail)
  } catch {
    return tail
  }
}

function validateLocalPath(collection, article, field, src) {
  const candidates = [
    new URL(`../client/public${src}`, import.meta.url),
    new URL(`../server/public${src}`, import.meta.url),
    new URL(`..${src}`, import.meta.url)
  ]

  if (!candidates.some((candidate) => fs.existsSync(candidate))) {
    addFinding(collection, article, field, 'local image file does not exist', src)
  }
}

function validateUrlShape(collection, article, field, src) {
  try {
    const url = new URL(src)
    if (!['http:', 'https:', 'data:'].includes(url.protocol)) {
      addFinding(collection, article, field, `unsupported image URL protocol ${url.protocol}`, src)
    }
  } catch {
    addFinding(collection, article, field, 'malformed image URL or unresolved relative path', src)
  }
}

function validateMetadata(collection, article, field, metadata, articleSources) {
  if (!metadata || typeof metadata !== 'object') {
    addFinding(collection, article, field, 'missing image metadata object')
    return
  }

  if (!stringValue(metadata.caption)) {
    addFinding(collection, article, field, 'missing image caption')
  }

  if (!stringValue(metadata.source)) {
    addFinding(collection, article, field, 'missing image source label')
  }

  if (!stringValue(metadata.sourceUrl) && !hasSourceUrlInSources(metadata) && !hasImageSourceUrl(articleSources)) {
    addFinding(collection, article, field, 'missing source URL metadata')
  }

  for (const key of ['date', 'note', 'creator']) {
    const value = stringValue(metadata[key]) ? metadata[key].trim() : ''
    if (value && placeholderMetadataPattern.test(value)) {
      addFinding(collection, article, field, `placeholder-like image metadata in "${key}" ("${value}")`)
    }
  }
}

function hasSourceUrlInSources(metadata) {
  return Array.isArray(metadata.sources) && metadata.sources.some((source) => stringValue(source?.url))
}

function hasImageSourceUrl(sources) {
  return Array.isArray(sources) && sources.some((source) => (
    stringValue(source?.url) &&
    /image|commons|collection|metadata|source/i.test(`${source.title ?? ''} ${source.type ?? ''} ${source.institution ?? ''}`)
  ))
}

function stringValue(value) {
  return typeof value === 'string' && value.trim().length > 0
}

function isRemoteUrl(src) {
  try {
    const url = new URL(src)
    return url.protocol === 'http:' || url.protocol === 'https:'
  } catch {
    return false
  }
}

async function validateRemoteImages() {
  const entries = [...remoteCache.entries()]
  const concurrency = Math.max(1, remoteConcurrency)
  let cursor = 0

  await Promise.all(Array.from({ length: concurrency }, async () => {
    while (cursor < entries.length) {
      const [src, uses] = entries[cursor++]
      const issue = await remoteImageIssue(src)
      if (issue) {
        uses.forEach((use) => addFinding(use.collection, use.article, use.field, issue, src))
      }
    }
  }))
}

async function remoteImageIssue(src) {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), timeoutMs)

  try {
    const response = await fetch(src, {
      method: 'GET',
      redirect: 'follow',
      signal: controller.signal,
      headers: {
        'User-Agent': 'IronCodex image validation; contact: local-development',
        Range: 'bytes=0-0'
      }
    })

    if (!response.ok) {
      if (response.status === 429) {
        warnings.push(`remote server rate-limited ${src}`)
        return null
      }

      return `remote image request failed with HTTP ${response.status}`
    }

    const contentType = response.headers.get('content-type') ?? ''
    if (!contentType.toLowerCase().startsWith('image/')) {
      return `remote image returned non-image content type ${contentType || 'unknown'}`
    }

    const finalUrl = response.url ?? src
    if (commonsFilePagePattern.test(finalUrl) || sourcePageAsImagePattern.test(finalUrl)) {
      return 'remote image resolved to a Commons source page, not an image file'
    }

    return null
  } catch (error) {
    return `remote image request failed: ${error.name === 'AbortError' ? 'timeout' : error.message}`
  } finally {
    clearTimeout(timeout)
  }
}

function addFinding(collection, article, field, issue, src = '') {
  findings.push({ collection, article, field, issue, src })
}
