/**
 * Targeted fixes so the required person->battle pairs are linked in all three
 * places (related entries, timeline, main body). Related entries were handled by
 * link-people-battles.mjs; this closes the timeline + body gaps for the named
 * examples, and adds Joan's missing Orléans/Patay content.
 */
import fs from 'node:fs'
const path = new URL('../server/data/history.json', import.meta.url)
const d = JSON.parse(fs.readFileSync(path, 'utf8'))
const C = id => d.characters.find(c => c.id === id)
const evName = slug => (d.events.find(e => e.id === slug) || {}).name || slug
const log = []

function tlLink(personId, titleIncludes, slug) {
  const p = C(personId); if (!p) return
  const item = (p.timeline || []).find(t => (t.title || '').includes(titleIncludes) || (t.description || '').includes(titleIncludes))
  if (!item) { log.push(`!! ${personId}: no timeline item matching "${titleIncludes}"`); return }
  if (!item.links) item.links = []
  if (item.links.some(l => l.slug === slug)) return
  item.links.push({ title: evName(slug), type: 'event', slug })
  log.push(`TL ${personId} [${item.date}] +${slug}`)
}
function addTimelineEntry(personId, entry, afterDateIncludes) {
  const p = C(personId); if (!p) return
  if ((p.timeline || []).some(t => t.title === entry.title)) return
  const idx = p.timeline.findIndex(t => (t.date || '').includes(afterDateIncludes))
  p.timeline.splice(idx >= 0 ? idx + 1 : p.timeline.length, 0, entry)
  log.push(`TL+entry ${personId}: ${entry.title}`)
}
function addRel(personId, slug, label) {
  const p = C(personId); if (!p) return
  if (!p.relatedEntries) p.relatedEntries = {}
  if (!p.relatedEntries.events) p.relatedEntries.events = []
  const has = Object.values(p.relatedEntries).flat().some(x => x.slug === slug)
  if (has) return
  const e = { title: evName(slug), type: 'event', slug }
  if (label) e.label = label
  p.relatedEntries.events.push(e)
  log.push(`REL ${personId} +${slug}`)
}
function prose(personId, find, replace) {
  const p = C(personId); if (!p) return
  let done = false
  for (const s of p.contentSections || []) {
    s.paragraphs = (s.paragraphs || []).map(par => {
      if (!done && par.includes(find)) { done = true; return par.replace(find, replace) }
      return par
    })
  }
  // keep overview[] in sync if present
  if (Array.isArray(p.overview)) p.overview = p.overview.map(par => par.includes(find) ? par.replace(find, replace) : par)
  log.push(done ? `BODY ${personId}: "${find.slice(0, 30)}..." -> full name` : `!! ${personId}: prose "${find.slice(0, 30)}" not found`)
}

// richard -> arsuf (body auto-links via "Arsuf" alias; add timeline link)
tlLink('richard-the-lionheart', 'Arsuf', 'battle-of-arsuf')

// edward III -> crécy (timeline link + full-name body)
tlLink('edward-iii-of-england', 'Crecy', 'battle-of-crecy')
prose('edward-iii-of-england', 'at Crécy and Calais', 'at the Battle of Crécy and the capture of Calais')

// philip VI -> crécy (timeline link; body already full name)
tlLink('philip-vi-of-france', 'Crécy', 'battle-of-crecy')
tlLink('philip-vi-of-france', 'Crecy', 'battle-of-crecy')

// harald -> stiklestad (full-name body on first mention; timeline+related already done)
prose('harald-hardrada', 'as a young man at Stiklestad', 'as a young man at the Battle of Stiklestad')

// edward I -> Wars of Scottish Independence (timeline link + body phrase)
tlLink('edward-i-of-england', 'Invades Scotland', 'wars-of-scottish-independence')
tlLink('edward-i-of-england', 'Scottish campaign', 'wars-of-scottish-independence')
prose('edward-i-of-england', 'the subjugation of Scotland', 'the subjugation of Scotland in the Wars of Scottish Independence')
prose('edward-i-of-england', 'pursued the subjugation of Scotland', 'pursued the subjugation of Scotland in the Wars of Scottish Independence')

// joan -> siege of Orléans + Patay + Hundred Years' War (timeline links, new Patay entry, body)
tlLink('joan-of-arc', 'siege of Orleans', 'siege-of-orleans')
addTimelineEntry('joan-of-arc', {
  date: '1429', title: 'Victory at Patay',
  description: 'Days after the relief of Orléans, the French destroyed the retreating English field army at the Battle of Patay, reversing years of English dominance.',
  links: [{ title: 'Battle of Patay', type: 'event', slug: 'battle-of-patay' }]
}, '1429')
addRel('joan-of-arc', 'battle-of-patay', 'Her victory days after Orléans')
addRel('joan-of-arc', 'hundred-years-war', 'The war her campaign turned')

// Joan's body did not name her defining military actions — add a sentence to the
// Overview so the Siege of Orléans, Battle of Patay, and Hundred Years' War link.
function appendOverviewSentence(personId, sentence) {
  const p = C(personId); if (!p) return
  const sec = (p.contentSections || []).find(s => /^overview$/i.test(s.title))
  if (sec && Array.isArray(sec.paragraphs) && sec.paragraphs.length) {
    if (!sec.paragraphs.some(par => par.includes(sentence))) { sec.paragraphs.push(sentence); log.push(`BODY ${personId}: +Overview sentence`) }
  }
  if (Array.isArray(p.overview) && p.overview.length && !p.overview.some(par => par.includes(sentence))) p.overview.push(sentence)
}
appendOverviewSentence('joan-of-arc', 'Joan\'s military fame rests on a few decisive months in 1429: she helped lift the Siege of Orléans, which had come to symbolise French collapse in the Hundred Years\' War, and days later shared in the crushing victory at the Battle of Patay, before leading Charles VII to his coronation at Reims.')

fs.writeFileSync(path, JSON.stringify(d, null, 2))
log.forEach(l => console.log(l))
console.log(`\n${log.filter(l => !l.startsWith('!!')).length} fixes applied, ${log.filter(l => l.startsWith('!!')).length} misses`)
