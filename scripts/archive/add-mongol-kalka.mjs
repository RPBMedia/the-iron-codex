/**
 * Mongol invasions of Europe — Batch 1: the Kalka River (1223), the first clash.
 * Adds: Battle of the Kalka River (1223), Mstislav the Bold (person). Anchors the
 * Mongol side to the existing House of Borjigin and Subutai, the Rus' side to the
 * existing Kievan Rus'. Verified Wikimedia images, aliases, sources. Idempotent.
 * (The Mongol Empire polity gets its own batch — it triggers full polity standards.)
 */
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))

const loc = (slug, title, label) => ({ title, type: 'location', slug, label })
const per = (slug, title, label) => ({ title, type: 'person', slug, label })
const evt = (slug, title, label) => ({ title, type: 'event', slug, label })
const hse = (slug, title, label) => ({ title, type: 'house', slug, label })
const fp = (file) => `https://commons.wikimedia.org/wiki/Special:FilePath/${file}`
const upsert = (arr, e) => { const i = arr.findIndex((x) => x.id === e.id); if (i >= 0) { arr[i] = e; return 'updated' } arr.push(e); return 'added' }

// ---------------------------------------------------------------- EVENT
const kalka = {
  id: 'battle-of-the-kalka-river', type: 'event', name: 'Battle of the Kalka River', year: 1223,
  aliases: ['Battle of Kalka', 'Battle on the Kalka', 'Battle of the Kalka'],
  location: 'Kalka River, near the Sea of Azov', eventType: 'Battle',
  conflict: 'Mongol invasions — first clash with the Rus\'',
  image: fp('Bataille%20de%20la%20Kalka%2C%20en%201224.jpg'),
  summary: 'In 1223 a Mongol reconnaissance army under Jebe and Subutai destroyed a large but disunited coalition of Rus\' princes and Cumans on the Kalka River — Europe\'s first, catastrophic encounter with the Mongols.',
  details: 'The Mongol expedition, sent west by Genghis Khan on a great scouting raid around the Caspian, drew the Rus\'-Cuman host across the steppe and broke it in detail. The victors then withdrew east, and the Rus\' lands would not see them again for fourteen years.',
  factions: ['Rus\'–Cuman coalition', 'Mongol Empire'],
  leaders: [
    { name: 'Mstislav the Bold', faction: 'Rus\'–Cuman coalition', personId: 'mstislav-the-bold' },
    { name: 'Mstislav III of Kiev', faction: 'Rus\'–Cuman coalition' },
    { name: 'Subutai', faction: 'Mongol expedition', personId: 'subutai' },
    { name: 'Jebe', faction: 'Mongol expedition' }
  ],
  eventLocation: { name: 'The Kalka River' },
  outcome: 'Crushing Mongol victory; several Rus\' princes were killed, but the Mongols withdrew east and did not follow up until 1237.',
  background: [
    'While Genghis Khan campaigned in Persia, he sent two of his best generals, Jebe and Subutai, on a vast reconnaissance raid around the Caspian Sea and into the steppe north of the Black Sea. There they clashed with the Cumans (Kipchaks), who appealed to their sometime enemies, the princes of the Rus\', for help.',
    'A large coalition assembled under the leading princes — Mstislav the Bold of Galicia and Mstislav III of Kiev among them — but it was a fractious alliance of rival rulers with no single command. The Mongols, feigning weakness, drew it eastward across the steppe.'
  ],
  battle: 'After days of pursuit the armies met at the Kalka River. The coalition attacked piecemeal: Mstislav the Bold and the Cumans crossed and engaged without waiting for the others, and when the Mongols counterattacked, the Cumans broke and fled back through the still-forming Rus\' ranks, spreading panic. The Mongols destroyed the divided army in detail. Mstislav III of Kiev, who had fortified a camp on a hill and taken no part, held out for three days before surrendering on a promise of mercy; the Mongols then bound the captured princes, laid boards over them, and feasted on top as they were crushed to death. As ever the numbers are uncertain, but the Rus\' losses were severe and several princes fell.',
  aftermath: 'The defeat was a shock, but its consequences were delayed: Jebe and Subutai turned back east to rejoin Genghis Khan, and the Rus\' principalities, still divided, drew no lasting lesson. Only in 1237 did the Mongols return in force under Batu Khan and Subutai to conquer the Rus\' lands outright, and from there to strike into Poland and Hungary. Kalka was the warning that Rus\' failed to heed.',
  imageInfo: {
    caption: 'The Battle of the Kalka River (dated 1224 on the image; usually placed in 1223), in a later depiction.',
    creator: 'Later depiction, Wikimedia Commons',
    date: 'Later depiction of the 1223 battle',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Bataille_de_la_Kalka,_en_1224.jpg',
    license: 'Public domain',
    note: 'A later imagining of the battle, not a contemporary record; sources differ between 1223 and 1224.'
  },
  contentSections: [
    { title: 'Overview', paragraphs: [
      'The Battle of the Kalka River, fought in 1223, was the first encounter between the Mongols and the powers of eastern Europe. A Mongol reconnaissance army under the generals Jebe and Subutai destroyed a large coalition of Rus\' princes and their Cuman allies on the river Kalka, near the Sea of Azov.',
      'It was a catastrophe for the Rus\', costing the lives of several princes, yet it had no immediate sequel: the Mongols withdrew eastward, and the full invasion of the Rus\' lands would not come until 1237. Kalka stands as a grim warning that went unheeded.'
    ]},
    { title: 'Background', paragraphs: [
      'The clash grew out of a huge Mongol scouting expedition. While Genghis Khan warred in Persia, he detached Jebe and Subutai to ride around the Caspian and probe the steppe beyond, where they defeated the Cumans (Kipchaks).',
      'The Cuman khans, driven west, appealed to the Rus\' princes — with whom they had often fought — for aid against the new enemy. A great but disunited coalition of rival princes gathered, and the Mongols lured it eastward with a feigned retreat.'
    ]},
    { title: 'Forces and commanders', paragraphs: [
      'The Rus\'-Cuman host was large but fatally divided, a coalition of independent princes with no agreed commander; Mstislav the Bold of Galicia and Mstislav III of Kiev were among its leaders. Rivalry and mistrust ran through it.',
      'The Mongol force under Jebe and Subutai was smaller but united, disciplined, and expertly led — a professional army against a quarrelsome alliance. The exact numbers are unrecoverable, but the difference in cohesion, not size, decided the battle.'
    ]},
    { title: 'The battle', paragraphs: [
      'The coalition threw itself forward piecemeal. Mstislav the Bold and the Cumans crossed the Kalka and attacked without waiting for the rest; when the Mongols turned on them, the Cumans broke and fled back through the unformed Rus\' ranks, carrying panic with them.',
      'The Mongols destroyed the scattered army in detail. Mstislav III of Kiev, who had held back in a fortified camp, resisted for three days before surrendering on a promise that no blood would be shed — a promise the Mongols kept to the letter by crushing the bound princes beneath boards on which they feasted.'
    ]},
    { title: 'Aftermath', paragraphs: [
      'The Rus\' had suffered a shattering defeat, but the Mongols simply rode away east to rejoin Genghis Khan, and the shock faded. The still-fragmented principalities made no common preparation against a return.',
      'That return came in 1237, when Batu Khan and Subutai led the western campaign that conquered the Rus\' lands and drove on into Poland and Hungary. Kalka had shown exactly how the Mongols fought and how Rus\' disunity would be exploited, but the lesson was lost.'
    ]},
    { title: 'Historical significance', paragraphs: [
      'Kalka is remembered as the moment Europe first met the Mongols — and misread them. Because the raiders withdrew, the Rus\' treated the disaster as a passing storm rather than the herald of conquest.',
      'It also set the pattern of the later campaigns: a united, mobile, superbly commanded Mongol army against divided opponents unable to combine. The same disunity that doomed the coalition on the Kalka would doom the Rus\' principalities one by one after 1237.'
    ]}
  ],
  sources: [
    { title: 'Battle of the Kalka River', author: 'Wikipedia', type: 'reference', url: 'https://en.wikipedia.org/wiki/Battle_of_the_Kalka_River' }
  ],
  participants: [
    {
      side: 'Rus\'–Cuman coalition',
      factions: [ { name: 'Kievan Rus\' principalities', title: 'Kievan Rus\'', type: 'location', slug: 'kievan-rus' }, { name: 'Cumans (Kipchaks)', title: 'Cumans' } ],
      leaders: [ { name: 'Mstislav the Bold', title: 'Mstislav the Bold', type: 'person', slug: 'mstislav-the-bold' } ],
      strength: { display: 'A large but disunited coalition; no reliable figure', confidence: 'debated', note: 'Several princely contingents plus the Cumans, with no single command; chronicle totals are unreliable.' }
    },
    {
      side: 'Mongol expedition',
      factions: [ { name: 'Mongol Empire', title: 'House of Borjigin', type: 'house', slug: 'house-of-borjigin' } ],
      leaders: [ { name: 'Subutai', title: 'Subutai', type: 'person', slug: 'subutai' } ],
      strength: { display: 'A reconnaissance army (perhaps c. 20,000); estimates vary', confidence: 'debated', note: 'A detached scouting force under Jebe and Subutai; figures are estimates, not firm counts.' }
    }
  ],
  battleContinuity: {
    label: 'When the Mongols returned in force',
    battleSlug: 'battle-of-mohi',
    relationship: 'same-war',
    reason: 'Kalka in 1223 was a Mongol reconnaissance raid that withdrew; the full western invasion returned in 1237–1241 under Batu and Subutai, culminating in the destruction of the Hungarian army at Mohi in 1241.'
  },
  relatedEntries: {
    people: [
      per('mstislav-the-bold', 'Mstislav the Bold', 'Led the Rus\' coalition'),
      per('subutai', 'Subutai', 'Co-commander of the Mongol force')
    ],
    locations: [ loc('kievan-rus', 'Kievan Rus\'', 'The Rus\' world defeated here') ],
    houses: [ hse('house-of-borjigin', 'House of Borjigin', 'The Mongol ruling house') ]
  }
}

// ---------------------------------------------------------------- PERSON
const mstislav = {
  id: 'mstislav-the-bold', type: 'person', name: 'Mstislav the Bold',
  aliases: ['Mstislav Mstislavich', 'Mstislav Udatny', 'Mstislav the Daring', 'Mstislav of Galicia'],
  born: 'c. 1180', died: '1228', deathAge: 'about 48', restingPlace: 'unknown',
  birth: { date: 'c. 1180', place: 'the Rus\' lands' },
  death: { date: '1228', place: 'the Rus\' lands' },
  location: 'Novgorod, Galicia and the Rus\' lands',
  image: fp('Mstislav%20Galitsky.jpg'),
  title: 'prince of Galicia and Novgorod', isRuler: true,
  roles: ['Prince of Galicia', 'Prince of Novgorod', 'Commander at the Kalka River'],
  epithets: [ { name: 'the Bold', type: 'byname', note: 'Udatny — "the Bold" or "the Daring"; also rendered "the Fortunate".' } ],
  summary: 'Mstislav the Bold was the most celebrated Rus\' warrior-prince of his generation, ruler of Novgorod and Galicia, who led the coalition of Rus\' princes to disaster against the Mongols at the Kalka River in 1223.',
  details: 'A restless, much-travelled prince who held Novgorod, Galicia and other seats in turn, Mstislav won a great reputation in the wars between the Rus\' principalities before the catastrophe on the Kalka.',
  overview: 'Mstislav Udatny embodied both the martial brilliance and the fatal disunity of the Rus\' princes on the eve of the Mongol conquest.',
  quickFacts: { realm: 'Galicia and Novgorod', dynasty: 'Rurikid dynasty', culture: 'Rus\'', knownFor: 'Commanding the Rus\' coalition at the Battle of the Kalka River (1223)' },
  contentSections: [
    { title: 'Overview', paragraphs: [
      'Mstislav Mstislavich, called Udatny — "the Bold" or "the Daring" — was among the most famous Rus\' princes of the early 13th century. A Rurikid, he ruled Novgorod, Galicia and other principalities in turn and built a reputation as the finest warrior-prince of his age.',
      'His fame rests uneasily on the Battle of the Kalka River in 1223, where he led the Rus\'-Cuman coalition against the Mongols. His impatience helped bring on the disaster, though he himself escaped, and the defeat foreshadowed the conquest of the Rus\' lands a generation later.'
    ]},
    { title: 'A prince of the Rus\' wars', paragraphs: [
      'Mstislav spent his career in the ceaseless wars between the Rus\' principalities, holding Novgorod — where the citizens prized his generalship — and later seizing the contested principality of Galicia in 1219 amid a three-way struggle with Hungary and Poland.',
      'He was the model of the mobile, hard-fighting Rus\' prince, respected and feared across the fragmented Rus\' world. That very world of competing princes, unable to unite, was the weakness the Mongols would exploit.'
    ]},
    { title: 'The Kalka and after', paragraphs: [
      'When the Cumans appealed for help against the Mongols in 1223, Mstislav was a leading voice for war and a chief commander of the coalition. At the Kalka he crossed the river and attacked before the other princes were ready; when the assault failed, the rout spread through the divided army.',
      'Mstislav escaped the slaughter, breaking the boats behind him to slow the pursuit, but the defeat cost the lives of many princes and much of the Rus\' military strength. He died a few years later, in 1228, having handed Galicia toward his son-in-law Daniel; the chronicles remember him as the boldest and most tragic of the princes of his time.'
    ]},
    { title: 'Character and Personality', paragraphs: [
      'The Rus\' chronicles present Mstislav as the beau ideal of a warrior-prince: brave to a fault, loved by the men of Novgorod, restless and quick to fight. His byname Udatny captures the mixture of daring and luck that clung to his reputation.',
      'That same boldness shades into the flaw the sources hint at on the Kalka — an impatience that would not wait for the coalition to form before striking. Later tradition remembers him admiringly, but his career also stands for the proud, quarrelsome independence of the Rus\' princes that left them unable to face the Mongols together.'
    ]}
  ],
  keyAchievements: [
    'Ruled Novgorod and won renown in the inter-princely wars',
    'Seized and held the contested principality of Galicia (1219)',
    'Led the Rus\'–Cuman coalition at the Battle of the Kalka River (1223)'
  ],
  timeline: [
    { date: 'c. 1180', title: 'Born', description: 'Born into the Rurikid princely house.' },
    { date: 'c. 1210', title: 'Prince of Novgorod', description: 'Takes Novgorod, where his generalship is prized.' },
    { date: '1219', title: 'Prince of Galicia', description: 'Seizes the contested principality of Galicia.' },
    { date: '1223', title: 'Battle of the Kalka River', description: 'Leads and loses the Rus\' coalition against the Mongols.' },
    { date: '1228', title: 'Died', description: 'Dies having ceded Galicia toward his son-in-law Daniel.' }
  ],
  succession: {
    office: 'Prince of Galicia',
    predecessor: { status: 'disputed', displayName: 'The contested Galician succession', note: 'Galicia was fought over by Rus\', Hungarian and Polish claimants; Mstislav seized it in 1219.' },
    successor: { displayName: 'Daniel of Galicia', note: 'His son-in-law, to whom Galicia eventually passed.' }
  },
  imageInfo: {
    caption: 'Mstislav the Bold (Mstislav Mstislavich of Galicia) in a later depiction; no contemporary likeness survives.',
    creator: 'Later depiction, Wikimedia Commons',
    date: 'Later depiction',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Mstislav_Galitsky.jpg',
    license: 'Public domain',
    note: 'A later image of the prince; no portrait from life exists.'
  },
  sources: [
    { title: 'Mstislav Mstislavich', author: 'Wikipedia', type: 'reference', url: 'https://en.wikipedia.org/wiki/Mstislav_Mstislavich' }
  ],
  relatedEntries: {
    events: [ evt('battle-of-the-kalka-river', 'Battle of the Kalka River', 'His great defeat') ],
    locations: [ loc('kievan-rus', 'Kievan Rus\'', 'The Rus\' world he belonged to') ],
    houses: [ hse('house-of-rurik', 'Rurikid dynasty', 'His dynasty') ]
  }
}

const results = []
results.push(['event', kalka.name, upsert(data.events, kalka)])
results.push(['person', mstislav.name, upsert(data.characters, mstislav)])

// Backlink: existing Subutai -> Kalka.
const sub = data.characters.find((c) => c.id === 'subutai')
if (sub) {
  sub.relatedEntries = sub.relatedEntries || {}
  const evs = sub.relatedEntries.events = sub.relatedEntries.events || []
  if (!evs.some((e) => e.slug === 'battle-of-the-kalka-river')) { evs.push(evt('battle-of-the-kalka-river', 'Battle of the Kalka River', 'His victory over the Rus\' in 1223')); results.push(['backlink', 'Subutai → Kalka', 'added']) }
}
// Backlink: existing Kievan Rus' -> Kalka.
const rus = data.locations.find((l) => l.id === 'kievan-rus')
if (rus) {
  rus.relatedEntries = rus.relatedEntries || {}
  const evs = rus.relatedEntries.events = rus.relatedEntries.events || []
  if (!evs.some((e) => e.slug === 'battle-of-the-kalka-river')) { evs.push(evt('battle-of-the-kalka-river', 'Battle of the Kalka River', 'The first Mongol defeat of the Rus\'')); results.push(['backlink', 'Kievan Rus\' → Kalka', 'added']) }
}

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))
for (const [t, n, a] of results) console.log(`${a.padEnd(8)} ${t.padEnd(9)} ${n}`)
console.log('\nDone. Run gen-entity-links + gates.')
