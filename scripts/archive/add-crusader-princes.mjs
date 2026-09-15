/**
 * Crusader Antioch / Tripoli / Latin Empire. Creates three rulers whose named
 * endpoints link to existing anchors: Bohemond II of Antioch (Bohemond I's
 * successor), Raymond II of Tripoli (Raymond III's predecessor), and Peter of
 * Courtenay (Henry of Flanders' successor as Latin Emperor). Open-side
 * neighbours (Constance of Antioch, Pons of Tripoli, Yolanda of Flanders) are
 * noted boundaries. Bohemond IV and Demetrius of Montferrat are deferred: no
 * acceptable individual image exists for them. Idempotent.
 */
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))

const CRU = { title: 'Crusader States', type: 'location', slug: 'crusader-states' }
const JER = { title: 'Kingdom of Jerusalem', type: 'location', slug: 'kingdom-of-jerusalem' }
const BYZ = { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire' }
const per = (slug, title, label) => ({ title, type: 'person', slug, label })
const src = (title, url) => ({ title, author: 'Encyclopaedia Britannica', type: 'encyclopedia', url })

const people = [
  // ── BOHEMOND II OF ANTIOCH ────────────────────────────────────────────────────
  {
    id: 'bohemond-ii-of-antioch', type: 'character', name: 'Bohemond II of Antioch', born: 1108, died: 1130,
    deathAge: 'about 22', causeOfDeath: 'Killed in battle', restingPlace: 'Unknown',
    location: 'Principality of Antioch', aliases: ['Bohemond II', 'Bohémond II d\'Antioche'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Bohemond_II.jpg',
    summary: 'Prince of Antioch (1111/1126–1130), son of the crusader founder Bohemond I, who came from Italy to rule the principality and was killed young, leaving an infant heiress.',
    title: 'Prince of Antioch', roles: ['Prince of Antioch'],
    birth: { date: '1108', place: { name: 'Apulia, southern Italy' }, note: 'Son of Bohemond I of Antioch and Constance of France.' },
    death: { date: 'February 1130', place: { name: 'Cilicia' }, circumstance: 'Killed in an ambush by the Danishmend Turks in the north; his head was embalmed and sent to the caliph.' },
    quickFacts: { realm: 'Principality of Antioch', dynasty: 'House of Hauteville', culture: 'Norman / Frankish (Outremer)', knownFor: 'ruling Antioch as the son of its crusader founder, and his early death' },
    imageInfo: { caption: 'A coin struck for Bohemond II, Prince of Antioch.', creator: 'Antiochene mint', date: 'c. 1126–1130', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Bohemond_II.jpg', license: 'CC0', note: 'A coin of the prince; no portrait of him survives.' },
    overview: [
      'Bohemond II was prince of Antioch, the son of the great crusader leader Bohemond I who had founded the principality on the First Crusade. Born in southern Italy, he inherited the title as an infant in 1111, while a succession of regents governed Antioch on his behalf, and he came east to take personal control only in 1126.',
      'His brief personal rule, sealed by marriage to Alice, a daughter of King Baldwin II of Jerusalem, was cut short in 1130, when he was killed in a battle against the Danishmend Turks in the north. He left only an infant daughter, Constance, as heiress, plunging Antioch into a long and troubled minority.'
    ],
    greatestFeats: ['Prince of Antioch', 'Son and heir of the crusader founder Bohemond I'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Bohemond II was prince of Antioch, the son of the great crusader leader Bohemond I who had founded the principality on the First Crusade. Born in southern Italy, he inherited the title as an infant in 1111, while a succession of regents governed Antioch on his behalf, and he came east to take personal control only in 1126.',
        'His brief personal rule, sealed by marriage to Alice, a daughter of King Baldwin II of Jerusalem, was cut short in 1130, when he was killed in a battle against the Danishmend Turks in the north. He left only an infant daughter, Constance, as heiress, plunging Antioch into a long and troubled minority.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Bohemond was born in 1108 in Apulia, in the Norman lands of southern Italy, the son of Bohemond I of Antioch and Constance, a daughter of King Philip I of France. His father died in 1111, when the boy was only three, leaving him the distant principality of Antioch under the regency of his cousin Tancred and then of others, while Bohemond himself was raised in Italy.',
        'For fifteen years Antioch was governed by regents — Tancred, Roger of Salerno, and King Baldwin II of Jerusalem — until in 1126 the young prince finally sailed east to claim his inheritance in person.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Bohemond II lived too briefly, and left too thin a record, for much of his character to be known; he is seen mostly as the awaited heir of a famous father. The sources present him as a promising young prince — brave, well-born, and welcomed in the East as the legitimate blood of the great Bohemond — whose arrival was expected to end the uncertainties of the long regency.',
        'What the record allows is a picture of headstrong courage that proved his undoing. Barely established in his principality, he threw himself into the dangerous frontier warfare of the north, and it was there, leading his men against the Turks, that he was killed at only twenty-two. He appears as the gallant but short-lived scion of the house of Hauteville, whose early death, rather than any achievement, shaped the history of Antioch after him.'
      ]},
      { title: 'Prince of Antioch', paragraphs: [
        'Taking up personal rule in 1126, Bohemond II married Alice, a daughter of King Baldwin II of Jerusalem, binding Antioch more closely to the senior crusader kingdom. He set about defending and asserting his principality amid the constant pressure of its Muslim and Armenian neighbours and the rival ambitions of the county of Edessa.',
        'In February 1130, campaigning in the mountainous north against the Danishmend Turks and their Cilician Armenian allies, Bohemond fell into an ambush and was killed. So striking was the death of the young Frankish prince that his embalmed head was reportedly sent as a trophy to the caliph in Baghdad.'
      ]},
      { title: 'Death and the succession', paragraphs: [
        'Bohemond II\'s death left Antioch with no male heir — only his infant daughter Constance, born of his marriage to Alice. His widow Alice tried to seize power for herself, and the resulting struggle drew in King Baldwin II and, later, King Fulk of Jerusalem as overseers of the principality. Constance\'s eventual marriages would determine the rule of Antioch for the next generation.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Bohemond II is remembered as the last male ruler of Antioch in the direct male line of its crusader founder, whose early death opened a long period of female inheritance, regency, and disputed marriages. Through his daughter Constance and her descendants the principality would pass to new hands, but the vigorous Hauteville line that Bohemond I had planted in the East effectively ended with his son\'s death in a northern ambush.'
      ]}
    ],
    keyAchievements: [
      { title: 'Prince of Antioch', description: 'Ruled the principality founded by his father Bohemond I.' },
      { title: 'Marriage to Alice of Jerusalem', description: 'Tied Antioch to the royal house of Jerusalem.' }
    ],
    timeline: [
      { date: '1108', title: 'Born', description: 'Born in Apulia, son of Bohemond I of Antioch.', links: [per('bohemond-i-of-antioch', 'Bohemond I of Antioch', 'His father')] },
      { date: '1111', title: 'Inherits Antioch as an infant', description: 'Succeeds his father as prince under a series of regents while raised in Italy.', links: [per('bohemond-i-of-antioch', 'Bohemond I of Antioch', 'His father and predecessor'), CRU] },
      { date: '1126', title: 'Takes personal rule', description: 'Sails east to claim Antioch and marries Alice of Jerusalem.', links: [JER] },
      { date: '1130', title: 'Killed by the Danishmends', description: 'Falls in an ambush in the north; his head is sent to the caliph.' },
      { date: '1130', title: 'Leaves an infant heiress', description: 'His daughter Constance inherits, opening a long and disputed minority.' }
    ],
    relatedEntries: {
      locations: [ { ...CRU, label: 'His crusader realm' }, { ...JER, label: 'The kingdom he married into' } ],
      people: [ per('bohemond-i-of-antioch', 'Bohemond I of Antioch', 'His father and predecessor, founder of Antioch') ],
      events: []
    },
    sources: [ src('Bohemond II | prince of Antioch', 'https://www.britannica.com/place/Antioch-ancient-city-Turkey'), src('Crusades', 'https://www.britannica.com/event/Crusades') ],
    isRuler: true,
    succession: { office: 'Prince of Antioch',
      predecessor: { personSlug: 'bohemond-i-of-antioch', displayName: 'Bohemond I of Antioch', note: 'His father, founder of the principality on the First Crusade.' },
      successor: { displayName: 'Constance of Antioch', note: 'His infant daughter and heiress, whose long minority and successive marriages shaped Antioch for a generation. The later rulers of Antioch are not yet covered in the Codex.' } }
  },

  // ── RAYMOND II OF TRIPOLI ─────────────────────────────────────────────────────
  {
    id: 'raymond-ii-of-tripoli', type: 'character', name: 'Raymond II of Tripoli', born: 1116, died: 1152,
    deathAge: 'about 36', causeOfDeath: 'Assassinated by the Nizari Assassins', restingPlace: 'Tripoli',
    location: 'County of Tripoli', aliases: ['Raymond II', 'Raymond II of Toulouse'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Raymond_IITripoli.jpg',
    summary: 'Count of Tripoli (1137–1152), a crusader lord remembered for his troubled marriage to Hodierna of Jerusalem and for being the first prominent Frank murdered by the Nizari Assassins.',
    title: 'Count of Tripoli', roles: ['Count of Tripoli'],
    birth: { date: 'c. 1116', place: { name: 'County of Tripoli' }, note: 'Son of Pons of Tripoli, of the house of the counts of Toulouse.' },
    death: { date: '1152', place: { name: 'Tripoli' }, circumstance: 'Cut down at the gates of Tripoli by the Nizari Assassins, the first notable Frankish victim of the sect.' },
    quickFacts: { realm: 'County of Tripoli', dynasty: 'House of Toulouse', culture: 'Frankish (Outremer)', knownFor: 'his murder by the Assassins and his troubled marriage' },
    imageInfo: { caption: 'Raymond II, Count of Tripoli, in a later depiction.', creator: 'Later engraving', date: '1894 (later depiction)', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Raymond_IITripoli.jpg', license: 'Public domain', note: 'A nineteenth-century depiction of the count, not a likeness from life.' },
    overview: [
      'Raymond II was count of Tripoli from 1137 to 1152, ruler of the southernmost of the crusader states, which his great-grandfather Raymond of Saint-Gilles had founded. The son of Count Pons, he inherited a county squeezed between the Muslim powers of Syria and the other Frankish states, and spent his reign defending it against the growing power of the atabeg Nur ad-Din of Aleppo.',
      'His reign is remembered as much for its private drama and its violent end as for its wars. His marriage to Hodierna of Jerusalem was notoriously unhappy and jealous, and in 1152 Raymond became the first prominent Frankish lord to be struck down by the Nizari Assassins, murdered at the gate of his own capital.'
    ],
    greatestFeats: ['Count of Tripoli', 'Defended the county against Nur ad-Din'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Raymond II was count of Tripoli from 1137 to 1152, ruler of the southernmost of the crusader states, which his great-grandfather Raymond of Saint-Gilles had founded. The son of Count Pons, he inherited a county squeezed between the Muslim powers of Syria and the other Frankish states, and spent his reign defending it against the growing power of the atabeg Nur ad-Din of Aleppo.',
        'His reign is remembered as much for its private drama and its violent end as for its wars. His marriage to Hodierna of Jerusalem was notoriously unhappy and jealous, and in 1152 Raymond became the first prominent Frankish lord to be struck down by the Nizari Assassins, murdered at the gate of his own capital.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Raymond was born about 1116, the son of Count Pons of Tripoli and grandson of Bertrand, of the great southern French house of the counts of Toulouse, whose head Raymond of Saint-Gilles had founded Tripoli on the First Crusade. When his father Pons was captured and killed by the Damascenes in 1137, Raymond succeeded to a beleaguered county.',
        'He married Hodierna, a daughter of King Baldwin II of Jerusalem, binding Tripoli to the royal house of Jerusalem, as the crusader states increasingly did to hold together against their enemies.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Raymond II is remembered as a capable but jealous and suspicious man, whose personal failings the chroniclers dwelt on almost as much as his rule. His marriage to Hodierna became a byword for domestic strife: his obsessive jealousy grew so extreme that the queen of Jerusalem, Melisende, had to travel to Tripoli to try to reconcile the couple.',
        'As a ruler he was diligent in the hard defence of an exposed and shrinking county, welcoming the military orders — he made important grants to the Knights Hospitaller, including the great castle of Krak des Chevaliers — to help hold his frontiers. But the impression that survives is of a hard, anxious, and unhappy lord, whose reign ended as troubled as it had been lived, in sudden and shocking violence.'
      ]},
      { title: 'Reign and murder', paragraphs: [
        'Raymond\'s county faced relentless pressure from the rising power of Nur ad-Din, and he leaned heavily on the military orders to defend it, granting the Hospitallers a swathe of frontier territory and castles — among them Krak des Chevaliers — that they would make into a bulwark of the crusader states.',
        'In 1152 his marital crisis came to a head: after Queen Melisende brokered a reconciliation, Hodierna set out to visit Jerusalem, and Raymond, having escorted her from the city, was returning through the gate of Tripoli when he was set upon and killed by members of the Nizari sect — the "Assassins". He was the first great Frankish lord to die at their hands.'
      ]},
      { title: 'Death', paragraphs: [
        'Raymond II\'s murder in 1152 left his young son Raymond III as heir, under the regency first of his mother Hodierna and then of the king of Jerusalem. His killing by the Assassins sent a shock through the crusader states and marked the sect\'s dramatic entry into the politics of the Latin East.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Raymond II is remembered as the count whose murder introduced the Assassins to the front rank of crusader politics, and whose reliance on the Knights Hospitaller helped create the great castle-network — above all Krak des Chevaliers — that defended the crusader states. He passed to his son Raymond III a county that would, under that abler ruler, play a central part in the last decades of the Kingdom of Jerusalem before Hattin.'
      ]}
    ],
    keyAchievements: [
      { title: 'Count of Tripoli, 1137–1152', description: 'Defended the southernmost crusader state against Nur ad-Din.' },
      { title: 'Granted Krak des Chevaliers to the Hospitallers', description: 'Handed frontier castles to the military orders to hold his borders.' },
      { title: 'Marriage to Hodierna of Jerusalem', description: 'Tied Tripoli to the royal house of Jerusalem.' }
    ],
    timeline: [
      { date: 'c. 1116', title: 'Born', description: 'Born the son of Count Pons of Tripoli, of the house of Toulouse.' },
      { date: '1137', title: 'Becomes Count of Tripoli', description: 'Succeeds his father Pons, killed by the Damascenes.', links: [CRU] },
      { date: 'c. 1142', title: 'Grants castles to the Hospitallers', description: 'Gives Krak des Chevaliers and frontier lands to the Knights Hospitaller.' },
      { date: '1152', title: 'Marital crisis and reconciliation', description: 'Queen Melisende travels to Tripoli to reconcile Raymond and Hodierna.' },
      { date: '1152', title: 'Murdered by the Assassins', description: 'Killed at the gate of Tripoli by the Nizari Assassins; his son Raymond III succeeds.', links: [per('raymond-iii-of-tripoli', 'Raymond III of Tripoli', 'His son and successor')] }
    ],
    relatedEntries: {
      locations: [ { ...CRU, label: 'His crusader realm' }, { ...JER, label: 'The kingdom he married into' } ],
      people: [ per('raymond-iii-of-tripoli', 'Raymond III of Tripoli', 'His son and successor'), per('nur-ad-din', 'Nur ad-Din', 'The atabeg who pressed his county') ],
      events: []
    },
    sources: [ src('County of Tripoli | Crusader state', 'https://www.britannica.com/place/Tripoli-Lebanon'), src('Crusades', 'https://www.britannica.com/event/Crusades') ],
    isRuler: true,
    succession: { office: 'Count of Tripoli',
      predecessor: { displayName: 'Pons of Tripoli', note: 'His father, count of Tripoli 1112–1137, son of Bertrand. The earlier counts, back to the founder Raymond of Saint-Gilles, are not yet covered in the Codex.' },
      successor: { personSlug: 'raymond-iii-of-tripoli', displayName: 'Raymond III of Tripoli', note: 'His son, who ruled at first under regency and became a leading figure of the Kingdom of Jerusalem.' } }
  },

  // ── PETER OF COURTENAY ────────────────────────────────────────────────────────
  {
    id: 'peter-of-courtenay', type: 'character', name: 'Peter of Courtenay', born: 1155, died: 1219,
    deathAge: 'about 64', causeOfDeath: 'Died in captivity', restingPlace: 'Unknown (Epirus)',
    location: 'Latin Empire of Constantinople', aliases: ['Peter II of Courtenay', 'Pierre de Courtenay'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Petrus2.jpg',
    summary: 'Latin Emperor of Constantinople (1216–1217) who was crowned in Rome but captured by the Greeks of Epirus on his way east, dying in prison without ever reaching his capital.',
    title: 'Latin Emperor of Constantinople', roles: ['Latin Emperor of Constantinople'],
    birth: { date: 'c. 1155', place: { name: 'France' }, note: 'A French prince of the house of Courtenay, cousin of the king of France; married Yolanda of Flanders.' },
    death: { date: '1219', place: { name: 'Epirus' }, circumstance: 'Died in captivity, having been seized by Theodore Komnenos Doukas of Epirus while marching overland to Constantinople.' },
    quickFacts: { realm: 'Latin Empire of Constantinople', dynasty: 'House of Courtenay', culture: 'French / Latin', knownFor: 'being a Latin emperor who never reached his own capital' },
    imageInfo: { caption: 'Peter of Courtenay, Latin Emperor of Constantinople, in a medieval manuscript.', creator: 'Unknown medieval illuminator', date: '14th century', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Petrus2.jpg', license: 'Public domain', note: 'A later medieval manuscript depiction, not a likeness from life.' },
    overview: [
      'Peter of Courtenay was, in title, Latin Emperor of Constantinople from 1216 to 1217, though he never once set foot in the city he was chosen to rule. A French prince of the house of Courtenay and a cousin of the king of France, he was elected to the throne of the Latin Empire — the crusader state set up in Constantinople after the Fourth Crusade — through his marriage to Yolanda, sister of the first two Latin emperors.',
      'Crowned by the pope in Rome in 1217, Peter set out overland to claim his empire, but was ambushed and captured by Theodore Komnenos Doukas, the Greek ruler of Epirus, and died a prisoner. His empire was governed in his absence by his wife Yolanda and then passed to their sons.'
    ],
    greatestFeats: ['Latin Emperor of Constantinople (in title)'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Peter of Courtenay was, in title, Latin Emperor of Constantinople from 1216 to 1217, though he never once set foot in the city he was chosen to rule. A French prince of the house of Courtenay and a cousin of the king of France, he was elected to the throne of the Latin Empire — the crusader state set up in Constantinople after the Fourth Crusade — through his marriage to Yolanda, sister of the first two Latin emperors.',
        'Crowned by the pope in Rome in 1217, Peter set out overland to claim his empire, but was ambushed and captured by Theodore Komnenos Doukas, the Greek ruler of Epirus, and died a prisoner. His empire was governed in his absence by his wife Yolanda and then passed to their sons.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Peter was born about 1155 into the house of Courtenay, a cadet branch of the French royal family; his father was a son of King Louis VI. As count of Nevers, Auxerre, and Tonnerre, and a cousin of King Philip II of France, he was a considerable French magnate who had taken part in crusading ventures in the West.',
        'His link to the throne of Constantinople came through his second wife, Yolanda of Flanders, the sister of Baldwin I and Henry of Flanders, the first two Latin emperors. When Henry died in 1216 leaving no son, the barons of the Latin Empire offered the crown to Peter as Yolanda\'s husband.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Peter of Courtenay is a figure known more for his misfortune than his character; his reign was so brief and so entirely spent in transit and captivity that little of the man himself emerges. He appears as a substantial but not especially distinguished French prince, whose chief qualification for an imperial throne was his marriage and his royal blood rather than any great ability or ambition of his own.',
        'What his short, disastrous reign illustrates is the fragility and over-extension of the Latin Empire itself — a crusader state so weak that its chosen emperor could be waylaid and imprisoned by a regional Greek lord before he ever reached his capital. Peter was, in effect, the victim of a hopeless inheritance: a crown that carried grand titles but could no longer guarantee even the safe passage of the man who wore it.'
      ]},
      { title: 'A reign in transit', paragraphs: [
        'Accepting the crown, Peter travelled to Rome, where in 1217 Pope Honorius III crowned him emperor — though pointedly in a church outside the walls, so as not to imply any imperial claim over Rome itself. His wife Yolanda went ahead by sea to Constantinople, where she took up the regency and where their son Baldwin was born.',
        'Peter, meanwhile, agreed to help the Venetians recover the port of Durazzo on his way east, then struck out overland across the Balkans toward his capital. In the mountains of Epirus he was ambushed and taken prisoner by Theodore Komnenos Doukas, the ambitious Greek ruler of Epirus, and vanished into captivity. He never reached Constantinople and died a prisoner, probably in 1219.'
      ]},
      { title: 'Death', paragraphs: [
        'Peter died in captivity in Epirus around 1219. His wife Yolanda had already been governing the empire as regent from Constantinople; on her own death the throne passed in turn to their sons Robert and, later, Baldwin II, the last Latin emperor.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Peter of Courtenay is remembered as the Latin emperor who never reigned — a striking emblem of the weakness of the crusader empire of Constantinople, whose sovereign could be seized and imprisoned by a Greek provincial ruler before ever seeing his throne. His capture underlined the rising power of the Greek successor states, above all Epirus and Nicaea, that would hem in and ultimately overthrow the Latin Empire, restoring Byzantine rule to Constantinople in 1261.'
      ]}
    ],
    keyAchievements: [
      { title: 'Latin Emperor of Constantinople, 1216–1217', description: 'Elected and crowned emperor, though he never reached the city.' },
      { title: 'Crowned by the pope in Rome', description: 'Received the imperial crown from Honorius III in 1217.' }
    ],
    timeline: [
      { date: 'c. 1155', title: 'Born', description: 'Born a French prince of the house of Courtenay, grandson of Louis VI.' },
      { date: 'c. 1193', title: 'Marries Yolanda of Flanders', description: 'Weds the sister of the first two Latin emperors, his link to the throne.' },
      { date: '1216', title: 'Elected Latin Emperor', description: 'Chosen emperor after the death of his brother-in-law Henry of Flanders.', links: [per('henry-of-flanders', 'Henry of Flanders', 'His predecessor and brother-in-law'), BYZ] },
      { date: '1217', title: 'Crowned in Rome', description: 'Crowned emperor by Pope Honorius III in a church outside the walls of Rome.' },
      { date: '1217', title: 'Captured in Epirus', description: 'Ambushed and imprisoned by Theodore Komnenos Doukas while marching overland east.' },
      { date: '1219', title: 'Dies in captivity', description: 'Dies a prisoner, never having reached Constantinople; his wife Yolanda and sons rule after him.' }
    ],
    relatedEntries: {
      locations: [ { ...BYZ, label: 'The empire he was crowned to rule' } ],
      people: [ per('henry-of-flanders', 'Henry of Flanders', 'His predecessor and brother-in-law'), per('baldwin-i-latin-emperor', 'Baldwin I, Latin Emperor', 'The first Latin emperor, his wife\'s brother') ],
      events: []
    },
    sources: [ src('Latin Empire of Constantinople', 'https://www.britannica.com/place/Latin-Empire-of-Constantinople'), src('Fourth Crusade', 'https://www.britannica.com/event/Fourth-Crusade') ],
    isRuler: true,
    succession: { office: 'Latin Emperor of Constantinople',
      predecessor: { personSlug: 'henry-of-flanders', displayName: 'Henry of Flanders', note: 'His brother-in-law, the second and most capable Latin emperor, on whose death Peter was elected.' },
      successor: { displayName: 'Yolanda of Flanders', note: 'His wife, who governed as regent from Constantinople; the throne then passed to their sons Robert and Baldwin II. Peter, captured en route, never reigned in person.' } }
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
relink('bohemond-i-of-antioch', 'successor', 'bohemond-ii-of-antioch', 'Bohemond II of Antioch', 'His son, who came from Italy to rule Antioch and died young in a northern ambush.')
relink('raymond-iii-of-tripoli', 'predecessor', 'raymond-ii-of-tripoli', 'Raymond II of Tripoli', 'His father, murdered by the Nizari Assassins at the gate of Tripoli in 1152.')
relink('henry-of-flanders', 'successor', 'peter-of-courtenay', 'Peter of Courtenay', 'His brother-in-law, elected emperor but captured before ever reaching Constantinople.')

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`\nCrusader princes added: ${added}, replaced: ${replaced}. Total characters: ${data.characters.length}`)
