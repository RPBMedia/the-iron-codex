/**
 * Which rulers a polity page names, and which it silently omits.
 *
 * Extracted so the content checker and any audit script share one definition.
 *
 * The gap this exists for: the owner asked why Eric the Victorious was not among
 * Sweden's famous rulers. He had a full article; the page simply never named
 * him. A survey then found 88 such omissions across 13 polities — Denmark naming
 * 4 of its 25, England 6 of 22. Nothing was watching, because no rule connected
 * "this person ruled X" to "X's page should say so".
 */

const POLITY_TYPE = /Kingdom|Empire|Duchy|County|Caliphate|Sultanate|Principality|Polity|Grand duchy|League|Imperial realm|Khanate|Despotate|Emirate/i

export const isPolity = (location) => POLITY_TYPE.test(location?.locationType ?? '')

/** Rulers whose own `quickFacts.realm` names this polity exactly. */
export function rulersOf(polity, data) {
  const realm = String(polity?.name ?? '').toLowerCase()
  if (!realm) return []
  return (data.characters ?? []).filter(
    (c) => c.isRuler && String(c.quickFacts?.realm ?? '').toLowerCase() === realm
  )
}

/**
 * The text a polity page TEACHES from: its prose sections and its timeline.
 *
 * Deliberately NOT the whole article. The first version of this matched anywhere
 * in the JSON, and a falsification test caught it: stripping Eric the Victorious
 * out of Sweden's Major rulers left the gate green, because he was still listed
 * in `relatedEntries`. A name in a sidebar link is not the page telling a reader
 * who ruled — and being satisfied by one is exactly the silent drift this exists
 * to catch.
 */
function teachingText(polity) {
  return JSON.stringify([polity?.contentSections ?? [], polity?.timeline ?? [], polity?.overview ?? []])
}

/** A ruler counts as named if the prose or timeline uses their name or an alias. */
export function namesRuler(text, ruler) {
  if (text.includes(ruler.name)) return true
  return (ruler.aliases ?? []).some((alias) => alias && text.includes(alias))
}

export function coverageFor(polity, data) {
  const rulers = rulersOf(polity, data)
  const text = teachingText(polity)
  const missing = rulers.filter((r) => !namesRuler(text, r))
  return { total: rulers.length, named: rulers.length - missing.length, missing }
}
