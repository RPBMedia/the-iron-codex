/**
 * Early Ottoman sultans. Creates the dynasty's founder Osman I and Mehmed I, who
 * reunited the empire after the Interregnum, closing three open endpoints
 * (Orhan's predecessor, Bayezid I's successor, Murad II's predecessor). Osman I
 * is the first ruler of the line (status:none predecessor); both other ends
 * resolve to existing articles. Idempotent.
 */
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))

const OTT = { title: 'Ottoman Empire', type: 'location', slug: 'ottoman-empire' }
const BYZ = { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire' }
const per = (slug, title, label) => ({ title, type: 'person', slug, label })
const src = (title, url) => ({ title, author: 'Encyclopaedia Britannica', type: 'encyclopedia', url })

const people = [
  // ── OSMAN I ───────────────────────────────────────────────────────────────────
  {
    id: 'osman-i', type: 'character', name: 'Osman I', born: 1258, died: 1326,
    deathAge: 'about 68', causeOfDeath: 'Natural causes', restingPlace: 'Tomb of Osman Gazi, Bursa',
    location: 'Ottoman beylik (Bithynia)', aliases: ['Osman Gazi', 'Osman Bey', 'Othman I'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/I_Osman.jpg',
    summary: 'Founder of the Ottoman dynasty and state (r. c. 1299–1326), the frontier warrior-chief in Bithynia whose small principality grew into one of history\'s great empires, named after him.',
    title: 'Bey of the Ottomans', roles: ['Bey (ruler) of the Ottomans'],
    birth: { date: 'c. 1258', place: { name: 'Söğüt, Bithynia' }, note: 'Son of Ertuğrul, chief of a Turkoman frontier band in northwest Anatolia.' },
    death: { date: 'c. 1323–1326', place: { name: 'Söğüt / Bursa' }, circumstance: 'Died around the time his son Orhan took the Byzantine city of Bursa; the dynasty and empire bore his name.' },
    quickFacts: { realm: 'Ottoman beylik', dynasty: 'House of Osman (founder)', culture: 'Turkish (Oghuz)', knownFor: 'founding the Ottoman dynasty and state' },
    imageInfo: { caption: 'Osman I, founder of the Ottoman dynasty, in an Ottoman miniature of 1579–80.', creator: 'Ottoman miniature painter', date: '1579–80', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:I_Osman.jpg', license: 'Public domain', note: 'A later Ottoman court portrait from the standard series of sultans, not a likeness from life.' },
    overview: [
      'Osman I was the founder of the Ottoman dynasty and the small Anatolian principality that would grow into the Ottoman Empire. The leader of a Turkoman warrior band in Bithynia, on the frontier of the crumbling Byzantine Empire, he rose to prominence around 1300 amid the power vacuum left by the collapse of the Seljuk Sultanate of Rum under Mongol pressure.',
      'A ghazi — a warrior of the Islamic frontier — Osman expanded his territory at Byzantine expense, winning a notable victory at Bapheus in 1302 and hemming in the city of Bursa. He gave his name to his followers, the "Osmanlı" or Ottomans, and to the dynasty that would rule for six centuries. By his death around 1324, the foundations of a new and expansive state had been laid.'
    ],
    greatestFeats: ['Founded the Ottoman dynasty and state', 'Defeated the Byzantines at Bapheus (1302)', 'Gave his name to the Ottoman Empire'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Osman I was the founder of the Ottoman dynasty and the small Anatolian principality that would grow into the Ottoman Empire. The leader of a Turkoman warrior band in Bithynia, on the frontier of the crumbling Byzantine Empire, he rose to prominence around 1300 amid the power vacuum left by the collapse of the Seljuk Sultanate of Rum under Mongol pressure.',
        'A ghazi — a warrior of the Islamic frontier — Osman expanded his territory at Byzantine expense, winning a notable victory at Bapheus in 1302 and hemming in the city of Bursa. He gave his name to his followers, the "Osmanlı" or Ottomans, and to the dynasty that would rule for six centuries. By his death around 1324, the foundations of a new and expansive state had been laid.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Osman was born about 1258, the son of Ertuğrul, chief of the Kayı, a band of Oghuz Turks who had settled as frontier warriors around Söğüt in Bithynia, in the service, nominally, of the Seljuk sultans of Rum. When the Seljuk state disintegrated under the weight of Mongol overlordship in the later thirteenth century, the frontier principalities, or beyliks, that had grown up along the Byzantine border were left to fend and expand for themselves.',
        'Osman inherited his father\'s modest chieftaincy around 1280 and, over the following decades, transformed it into an independent and aggressive power on the very edge of the Byzantine world.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Osman is a half-legendary figure, glimpsed through traditions written down long after his death, and his personality has been shaped as much by the founding myths of the empire as by fact. He appears in them as the ideal ghazi chieftain: brave, just, generous, pious, and blessed with a destiny foretold in the famous "Dream of Osman", in which a great tree, symbolising his empire, grew from his loins to overshadow the world.',
        'Behind the legend stands a shrewd and effective frontier leader. He drew warriors, dervishes, and adventurers to his banner by success and the promise of plunder and land, absorbed neighbouring lords by war and marriage, and combined the raiding energy of the frontier with a growing sense of settled rule. Whatever the man was truly like, the tradition remembered him as the just and god-favoured founder whose virtues legitimised all who came after.'
      ]},
      { title: 'Founder of a state', paragraphs: [
        'Osman built his power on the ghaza, the frontier war against the Byzantines, which drew a steady stream of warriors to his standard. In 1302 he defeated a Byzantine force at Bapheus, near Nicomedia — his first major victory over an imperial army, and a signal that a new power had risen in Bithynia. He steadily overran the countryside and isolated the great cities, laying siege to Bursa, though it would fall only to his son.',
        'As he expanded, Osman took on the trappings of an independent ruler, and his followers came to be known by his name. The state he founded was small, but its position on a rich and vulnerable frontier, and its openness to warriors of every kind, gave it a capacity for growth that none of the rival beyliks could match.'
      ]},
      { title: 'Death', paragraphs: [
        'Osman died around 1323–1326, by tradition just as his son Orhan captured Bursa, which would become the young state\'s first great capital. He was buried at Bursa, and later sultans, on their accession, were girded with the "sword of Osman" in token of their descent from him.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Osman I is remembered as the eponymous founder of the Ottoman Empire, one of the most powerful and enduring states in world history. From the frontier principality he built in Bithynia would grow an empire that spanned three continents and lasted into the twentieth century, and every one of its thirty-six sultans traced his legitimacy back to Osman. His life marks the small, obscure beginning of a power that would conquer Constantinople and dominate the eastern Mediterranean for centuries.'
      ]}
    ],
    keyAchievements: [
      { title: 'Founder of the Ottoman dynasty', description: 'Gave his name to the state and ruling house that would last six centuries.' },
      { title: 'Victory at Bapheus, 1302', description: 'Defeated a Byzantine army, announcing the rise of a new frontier power.' },
      { title: 'Built an expansive frontier state', description: 'Turned a small warrior band into an independent, growing principality.' }
    ],
    timeline: [
      { date: 'c. 1258', title: 'Born', description: 'Born at Söğüt, son of the frontier chief Ertuğrul.' },
      { date: 'c. 1280', title: 'Becomes chief of his band', description: 'Inherits his father\'s Turkoman principality on the Byzantine frontier.', links: [OTT] },
      { date: 'c. 1299', title: 'Founds an independent principality', description: 'Emerges as an independent ruler amid the collapse of Seljuk authority.' },
      { date: '1302', title: 'Victory at Bapheus', description: 'Defeats a Byzantine army, his first great success against the empire.', links: [BYZ] },
      { date: 'c. 1324', title: 'Dies as Bursa falls', description: 'Dies around the time his son Orhan takes Bursa; the dynasty bears his name.', links: [per('orhan', 'Orhan', 'His son and successor')] }
    ],
    relatedEntries: {
      locations: [ { ...OTT, label: 'The empire he founded' }, { ...BYZ, label: 'The empire on whose frontier he rose' } ],
      people: [ per('orhan', 'Orhan', 'His son and successor, who took Bursa') ],
      events: []
    },
    sources: [ src('Osman I | Ottoman sultan', 'https://www.britannica.com/biography/Osman-I'), src('Ottoman Empire', 'https://www.britannica.com/place/Ottoman-Empire') ],
    isRuler: true,
    succession: { office: 'Bey of the Ottomans',
      predecessor: { status: 'none', displayName: 'None — founder of the dynasty', note: 'Osman was the founder of the Ottoman line; his father Ertuğrul was a frontier chief, not a ruler of an Ottoman state, which began with Osman himself.' },
      successor: { personSlug: 'orhan', displayName: 'Orhan', note: 'His son, who captured Bursa and built the beylik into a true state.' } }
  },

  // ── MEHMED I ──────────────────────────────────────────────────────────────────
  {
    id: 'mehmed-i', type: 'character', name: 'Mehmed I', born: 1386, died: 1421,
    deathAge: 'about 35', causeOfDeath: 'Illness (possibly a stroke)', restingPlace: 'Green Tomb, Bursa',
    location: 'Ottoman Empire', aliases: ['Mehmed Çelebi', 'Mehmed I the Restorer', 'Sultan Mehmed I'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Mehmet_I_honoraries_miniature.jpg',
    summary: 'Ottoman sultan (1413–1421) who reunited the empire after the ruinous Interregnum that followed the defeat by Timur, earning renown as the "second founder" of the Ottoman state.',
    title: 'Ottoman Sultan', roles: ['Sultan of the Ottoman Empire'],
    birth: { date: 'c. 1386', place: { name: 'Bursa' }, note: 'A son of Sultan Bayezid I; contender in the Ottoman Interregnum.' },
    death: { date: '26 May 1421', place: { name: 'Edirne' }, circumstance: 'Died in 1421, having restored Ottoman unity; succeeded by his son Murad II.' },
    quickFacts: { realm: 'Ottoman Empire', dynasty: 'House of Osman', culture: 'Turkish', knownFor: 'reuniting the Ottoman Empire after the Interregnum' },
    imageInfo: { caption: 'Sultan Mehmed I in an Ottoman miniature of 1616.', creator: 'Ottoman miniature painter', date: '1616', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Mehmet_I_honoraries_miniature.jpg', license: 'Public domain', note: 'A later Ottoman court miniature, not a likeness from life.' },
    overview: [
      'Mehmed I was Ottoman sultan from 1413 to 1421, and is remembered as the restorer, or "second founder", of the Ottoman Empire. He came to power out of chaos: in 1402 his father Bayezid I had been crushed and captured by Timur at the Battle of Ankara, and the Ottoman state had shattered into rival principalities ruled by Bayezid\'s feuding sons.',
      'Through a decade of civil war — the Ottoman Interregnum — Mehmed outlasted and defeated his brothers to reunite the empire under his sole rule by 1413. He restored order, rebuilt the army and administration, and put down the dangerous religious and social revolt of Sheikh Bedreddin, leaving to his son Murad II a reconstituted and stable state.'
    ],
    greatestFeats: ['Reunited the Ottoman Empire after the Interregnum', 'The "second founder" of the Ottoman state', 'Suppressed the revolt of Sheikh Bedreddin'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Mehmed I was Ottoman sultan from 1413 to 1421, and is remembered as the restorer, or "second founder", of the Ottoman Empire. He came to power out of chaos: in 1402 his father Bayezid I had been crushed and captured by Timur at the Battle of Ankara, and the Ottoman state had shattered into rival principalities ruled by Bayezid\'s feuding sons.',
        'Through a decade of civil war — the Ottoman Interregnum — Mehmed outlasted and defeated his brothers to reunite the empire under his sole rule by 1413. He restored order, rebuilt the army and administration, and put down the dangerous religious and social revolt of Sheikh Bedreddin, leaving to his son Murad II a reconstituted and stable state.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Mehmed was born about 1386, a son of Sultan Bayezid I. He was still a young man in 1402 when the Mongol conqueror Timur destroyed the Ottoman army at the Battle of Ankara and took Bayezid prisoner, an unprecedented catastrophe that dissolved the Ottoman state. Timur parcelled out Anatolia among the old beyliks and among Bayezid\'s sons, and when Bayezid died in captivity in 1403 those sons fell to fighting one another for the inheritance.',
        'Mehmed, governing in the north-central Anatolian region of Amasya, was one of the contenders in the long struggle that followed, known as the Ottoman Interregnum.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Mehmed I is remembered as a patient, resilient, and constructive ruler — a survivor of a decade of fratricidal war who emerged not embittered but bent on rebuilding. Where the Interregnum might have ended the Ottoman enterprise altogether, Mehmed had the tenacity to outlast his rivals and the statesmanship to knit the shattered realm back together.',
        'The sources credit him with courage in the field, shrewd diplomacy, and, notably, a reputation for justice and moderation in victory that helped reconcile the divided lands and loyalties of the empire. He was also a pious patron of religion and architecture, whose Green Mosque and Green Tomb at Bursa are among the masterpieces of early Ottoman art. He is the archetype of the rebuilder-king, whose achievement lay less in conquest than in restoration.'
      ]},
      { title: 'Reuniting the empire', paragraphs: [
        'The Ottoman Interregnum was a war of brothers. Mehmed contended first against his brother İsa, then against Süleyman, who held the European provinces, and finally against Musa, who had seized Rumelia. One by one Mehmed defeated them: he overcame Süleyman, and in 1413, with allies including the Byzantines and Serbs, he defeated and killed Musa, becoming sole ruler of a reunited empire.',
        'As sultan, Mehmed set about consolidation rather than expansion. He rebuilt the army and the central administration, restored Ottoman authority over the Anatolian beyliks and Balkan vassals, and in 1416 crushed the syncretic religious and social revolt led by the learned Sheikh Bedreddin, which had threatened the state from within. He fought to secure his frontiers but avoided overreach, husbanding the recovering empire\'s strength.'
      ]},
      { title: 'Death', paragraphs: [
        'Mehmed I died at Edirne on 26 May 1421, still only in his mid-thirties, and was buried in the magnificent Green Tomb he had built at Bursa. He was succeeded by his son Murad II, who inherited a stable and reunified empire ready to resume its expansion.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Mehmed I is remembered as the saviour and "second founder" of the Ottoman Empire. By reuniting the state that Timur\'s victory had shattered, he ensured that the Ottoman enterprise — which might easily have ended in 1402 — survived to become a world empire. The stable, reconstituted realm he handed to Murad II set the stage for the resumption of conquest that would culminate, a generation later, in his grandson Mehmed II\'s capture of Constantinople.'
      ]}
    ],
    keyAchievements: [
      { title: 'Reunited the Ottoman Empire', description: 'Won the Interregnum civil war to restore the state shattered at Ankara.' },
      { title: 'Suppressed the Bedreddin revolt', description: 'Crushed the dangerous religious and social rising of Sheikh Bedreddin in 1416.' },
      { title: 'Patron of early Ottoman art', description: 'Built the Green Mosque and Green Tomb at Bursa, masterpieces of the age.' }
    ],
    timeline: [
      { date: 'c. 1386', title: 'Born', description: 'Born a son of Sultan Bayezid I.', links: [per('bayezid-i', 'Bayezid I', 'His father')] },
      { date: '1402', title: 'Catastrophe at Ankara', description: 'Timur destroys the Ottoman army and captures Bayezid I; the empire fragments.' },
      { date: '1402–1413', title: 'The Ottoman Interregnum', description: 'Contends with his brothers for the shattered inheritance.' },
      { date: '1413', title: 'Reunites the empire', description: 'Defeats his last rival Musa and becomes sole sultan of a reunited empire.', links: [OTT] },
      { date: '1416', title: 'Suppresses Sheikh Bedreddin', description: 'Crushes the syncretic revolt that threatened the state from within.' },
      { date: '26 May 1421', title: 'Dies', description: 'Dies at Edirne, leaving a stable empire to his son Murad II.', links: [per('murad-ii', 'Murad II', 'His son and successor')] }
    ],
    relatedEntries: {
      locations: [ { ...OTT, label: 'The empire he restored' } ],
      people: [ per('bayezid-i', 'Bayezid I', 'His father, defeated and captured at Ankara'), per('murad-ii', 'Murad II', 'His son and successor') ],
      events: []
    },
    sources: [ src('Mehmed I | Ottoman sultan', 'https://www.britannica.com/biography/Mehmed-I'), src('Ottoman Empire', 'https://www.britannica.com/place/Ottoman-Empire') ],
    isRuler: true,
    succession: { office: 'Ottoman Sultan',
      predecessor: { personSlug: 'bayezid-i', displayName: 'Bayezid I', note: 'His father, captured by Timur at Ankara in 1402; the throne then passed through the decade-long Ottoman Interregnum among Bayezid\'s sons before Mehmed reunited the empire in 1413.' },
      successor: { personSlug: 'murad-ii', displayName: 'Murad II', note: 'His son, who inherited a reunified and stable empire.' } }
  }
]

// Insert / replace
let added = 0, replaced = 0
for (const p of people) {
  const i = data.characters.findIndex(c => c.id === p.id)
  if (i >= 0) { data.characters[i] = p; replaced++ } else { data.characters.push(p); added++ }
}

// Relink the three existing endpoints.
const byId = new Map(data.characters.map(c => [c.id, c]))
const relink = (rulerId, side, personSlug, displayName, note) => {
  const c = byId.get(rulerId)
  if (!c?.succession?.[side]) { console.warn(`SKIP relink ${rulerId}.${side}`); return }
  c.succession[side] = { personSlug, displayName, note }
  console.log(`relinked ${rulerId}.${side} -> ${personSlug}`)
}
relink('orhan', 'predecessor', 'osman-i', 'Osman I', 'His father, founder of the Ottoman dynasty and state.')
relink('bayezid-i', 'successor', 'mehmed-i', 'Mehmed I', 'His son, who reunited the empire after the Interregnum that followed Bayezid\'s capture at Ankara.')
relink('murad-ii', 'predecessor', 'mehmed-i', 'Mehmed I', 'His father, the "second founder" who restored the empire after the Interregnum.')

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`\nEarly Ottoman sultans added: ${added}, replaced: ${replaced}. Total characters: ${data.characters.length}`)
