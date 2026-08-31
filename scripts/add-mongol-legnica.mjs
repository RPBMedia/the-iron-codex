// Mongol invasions — Batch 3: the Battle of Legnica (9 April 1241), the northern
// half of the twin Mongol victories of 1241 (with Mohi two days later). Also
// cross-links Legnica and Kyiv into the existing Mohi entry. Idempotent.
import { readFileSync, writeFileSync } from 'node:fs'

const dataPath = new URL('../server/data/history.json', import.meta.url)
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const evt = (slug, title, label) => ({ title, type: 'event', slug, label })
const loc = (slug, title, label) => ({ title, type: 'location', slug, label })
const ord = (slug, title, label) => ({ title, type: 'order', slug, label })

const legnica = {
  id: 'battle-of-legnica', type: 'event', name: 'Battle of Legnica', year: 1241,
  aliases: ['Battle of Liegnitz', 'Battle of Wahlstatt', 'Legnica'],
  location: 'Silesia (Legnica)', eventType: 'Battle', conflict: 'Mongol invasion of Europe',
  image: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Battle_of_Legnica1241-From_Legend_of_Saint_Hedwig.jpg',
  imageInfo: { caption: 'The Battle of Legnica, from an illuminated Legend of Saint Hedwig (1353).', creator: 'Unknown', date: '1353 manuscript', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Battle_of_Legnica1241-From_Legend_of_Saint_Hedwig.jpg', note: 'A 14th-century manuscript image; the severed head on the lance is Duke Henry II’s.' },
  summary: 'On 9 April 1241 a Mongol column destroyed a Polish and German army under Duke Henry II the Pious of Silesia at Legnica. Henry was killed and his head paraded on a lance — a crushing defeat that shielded the flank of the main horde as it prepared to annihilate Hungary two days later.',
  details: 'Legnica and Mohi together showed that no European army could stand against the Mongols in the field.',
  eventLocation: { name: 'Legnica (Liegnitz), Silesia' },
  background: [
    'As Batu and Subutai drove into Hungary in 1241, a detached northern column under the princes Baidar and Kadan swept through Poland to guard the main army’s flank, burning Kraków on its way.',
    'Duke Henry II the Pious of Silesia gathered an army of Polish and German knights — with small contingents of Templars, Hospitallers, and Teutonic Knights and a body of German miners — and marched to stop them, hoping to join the king of Bohemia’s approaching army but forced to fight before it arrived.'
  ],
  battle: 'The Mongols drew the Christian knights into a headlong pursuit with a feigned retreat, then enveloped them, using smoke to blind and separate the cavalry before destroying it piecemeal.',
  outcome: 'Decisive Mongol victory; Henry II the Pious was killed and his army annihilated.',
  aftermath: 'The Mongols carried Henry’s head on a lance to the walls of Legnica but did not storm the castle; having secured the flank, the northern column turned south to rejoin the main army. Two days later, at the Battle of Mohi, Subutai destroyed the Hungarian royal army.',
  contentSections: [
    { title: 'Overview', paragraphs: ['The Battle of Legnica on 9 April 1241 was the northern half of the Mongols’ twin victories in Latin Europe. A flanking column shattered a Polish-German army under Henry II the Pious of Silesia, proving that western knighthood was as helpless against the Mongols as the Rus’ and the Hungarians.'] },
    { title: 'Background', paragraphs: ['The invasion of Europe in 1241 came in two prongs. While Batu and Subutai led the main horde into Hungary, a northern column under Baidar and Kadan ravaged Poland to protect the flank, sacking Kraków. Duke Henry II of Silesia assembled a mixed force of Polish and German knights — including small detachments of the Templars, Hospitallers, and Teutonic Knights — and gave battle near Legnica before the Bohemian army could reach him.'] },
    { title: 'The battle', paragraphs: ['The Mongols used their standard tactics with deadly effect: a feigned flight drew the Christian knights into a disordered charge, after which the horse-archers wheeled, enveloped them, and cut them apart. Chronicles describe a smoke screen that blinded and confused the heavy cavalry.', 'Henry II the Pious was killed trying to escape, and the flower of Silesian and Polish chivalry fell with him; the military orders’ contingents were largely destroyed. A surviving Templar reported the disaster in a letter to the king of France.'] },
    { title: 'Aftermath', paragraphs: ['The Mongols paraded Henry’s severed head on a lance before Legnica’s castle but did not besiege it. Their task — to shield the main army’s flank — was done, and the column rode south to rejoin Batu. Two days later the Hungarian army was destroyed at the Battle of Mohi, and for a few months it seemed all of Latin Europe lay open.'] }
  ],
  participants: [
    { side: 'Polish–German coalition', factions: [
        { name: 'Poland and Silesia', title: 'Kingdom of Poland', type: 'location', slug: 'kingdom-of-poland' },
        { name: 'Templars, Hospitallers and Teutonic Knights (small contingents)' }
      ],
      leaders: [{ name: 'Henry II the Pious', title: 'Duke of Silesia' }],
      strength: { display: 'A few thousand knights and levies; figures debated', confidence: 'debated', note: 'Estimates for Henry’s army vary widely; the military-order contingents were small.' } },
    { side: 'Mongol Empire', factions: [{ name: 'Mongol Empire', title: 'House of Borjigin', type: 'house', slug: 'house-of-borjigin' }],
      leaders: [{ name: 'Baidar', title: 'Mongol prince' }, { name: 'Kadan', title: 'Mongol prince' }],
      strength: { display: 'A flanking column of one or two tumens; estimates vary', confidence: 'estimated', note: 'A detached corps of the western horde; exact numbers are uncertain.' } }
  ],
  leaders: [
    { name: 'Henry II the Pious', faction: 'Polish–German coalition' },
    { name: 'Baidar', faction: 'Mongol Empire' },
    { name: 'Kadan', faction: 'Mongol Empire' }
  ],
  factions: ['Polish–German coalition', 'Mongol Empire'],
  battleContinuity: { label: 'Two days to catastrophe', battleSlug: 'battle-of-mohi', relationship: 'same-campaign', reason: 'Legnica and Mohi were the twin blows of the 1241 invasion: two days after Legnica, Subutai destroyed the Hungarian royal army at Mohi.' },
  relatedEntries: {
    events: [evt('battle-of-mohi', 'Battle of Mohi'), evt('siege-of-kyiv', 'Siege of Kyiv'), evt('battle-of-the-kalka-river', 'Battle of the Kalka River')],
    locations: [loc('kingdom-of-poland', 'Kingdom of Poland')],
    orders: [ord('knights-templar', 'Knights Templar'), ord('teutonic-order', 'Teutonic Order')]
  },
  sources: [
    { title: 'The Mongol invasion of Europe (survey histories)', author: 'various', type: 'book' },
    { title: 'The Devil’s Horsemen: The Mongol Invasion of Europe', author: 'James Chambers', type: 'book' },
    { title: 'Encyclopaedia Britannica: Battle of Legnica', author: 'Encyclopaedia Britannica', type: 'reference work', url: 'https://www.britannica.com/event/Battle-of-Legnica' }
  ]
}

// upsert Legnica
const ei = data.events.findIndex((x) => x.id === legnica.id)
if (ei >= 0) { data.events[ei] = legnica; console.log('events: updated', legnica.id) }
else { data.events.push(legnica); console.log('events: added', legnica.id) }

// cross-link Legnica + Kyiv into Mohi's related entries (bidirectional)
const mohi = data.events.find((x) => x.id === 'battle-of-mohi')
if (mohi) {
  mohi.relatedEntries = mohi.relatedEntries ?? {}
  mohi.relatedEntries.events = mohi.relatedEntries.events ?? []
  for (const e of [evt('battle-of-legnica', 'Battle of Legnica', 'The twin Mongol victory, two days earlier'), evt('siege-of-kyiv', 'Siege of Kyiv', 'The fall of Rus’ that preceded the invasion')]) {
    if (!mohi.relatedEntries.events.some((x) => x.slug === e.slug)) { mohi.relatedEntries.events.push(e); console.log('  + Mohi related:', e.slug) }
  }
}

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`events collection now has ${data.events.length}`)
