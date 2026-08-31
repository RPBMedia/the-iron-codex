// M5 (People, batch 4): the last two significant Templar Grand Masters named in
// the order table — Guillaume de Beaujeu (died defending Acre, 1291) and Robert
// de Craon (won the order its great papal privileges). Non-rulers. Idempotent.
import { readFileSync, writeFileSync } from 'node:fs'

const dataPath = new URL('../server/data/history.json', import.meta.url)
const data = JSON.parse(readFileSync(dataPath, 'utf8'))

const per = (slug, title) => ({ title, type: 'person', slug })
const loc = (slug, title) => ({ title, type: 'location', slug })
const ord = (slug, title) => ({ title, type: 'order', slug })

const beaujeu = {
  id: 'guillaume-de-beaujeu',
  type: 'character',
  name: 'Guillaume de Beaujeu',
  aliases: ['William of Beaujeu', 'Guillaume de Beaujeu'],
  born: null,
  died: 1291,
  deathAge: 'unknown',
  causeOfDeath: 'Guillaume was mortally wounded leading the defence of Acre in the great siege of 1291.',
  restingPlace: 'Acre',
  location: 'Kingdom of Jerusalem',
  image: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/1332_-_Guillaume_de_Beaujeu.jpg',
  title: 'Grand Master of the Knights Templar who died defending Acre',
  roles: ['Grand Master of the Knights Templar'],
  birth: { date: 'unknown', place: null },
  death: { date: '18 May 1291', place: null, circumstance: 'Mortally wounded in the fall of Acre.' },
  quickFacts: { realm: 'Kingdom of Jerusalem', dynasty: 'Knights Templar', culture: 'Latin Christian (Crusader)', knownFor: 'Died defending Acre in 1291' },
  imageInfo: { caption: 'Guillaume de Beaujeu, Grand Master of the Temple, in a 14th-century depiction.', creator: 'Unknown', date: 'c. 1332 manuscript', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:1332_-_Guillaume_de_Beaujeu.jpg', note: 'A later manuscript depiction; no contemporary portrait survives.' },
  overview: [
    'Guillaume de Beaujeu was Grand Master of the Knights Templar in the last years of the Crusader states, a well-connected diplomat-soldier who tried to hold the Latin East together and died leading the defence of Acre in 1291.',
    'His death in the fall of the city marked the effective end of the Crusader mainland.'
  ],
  contentSections: [
    { title: 'Overview', paragraphs: ['Guillaume de Beaujeu (Grand Master 1273–1291) led the Templars through the twilight of the Crusader states, mixing diplomacy with defence, and fell at last in the great siege of Acre.'] },
    { title: 'Birth and early life', paragraphs: ['A kinsman of the French royal house and of Charles of Anjou, Beaujeu came from the high nobility of France and served the order in the West before being elected Grand Master in 1273 and sailing east.'] },
    { title: 'Character and Personality', paragraphs: [
      'Beaujeu was a shrewd, politically connected leader who understood that the Latin East could no longer be saved by force alone. He worked truces with the Mamluk sultans, cultivated informants, and ran what amounted to an intelligence network to give the Crusader states warning of danger.',
      'That realism made him unpopular. When his agents warned of the coming Mamluk assault on Acre, the fractious commune of the city distrusted him, suspecting the Templars of self-interest, and his warnings went unheeded.',
      'In the end he proved as brave as he was clear-eyed. When Acre was stormed in 1291 he led the Templars and the other defenders in desperate fighting and was mortally wounded at the walls, dying as the city fell. He is remembered as a capable and loyal master overwhelmed by a hopeless strategic position.'
    ] },
    { title: 'The fall of Acre', paragraphs: [
      'By 1291 Acre was the last great Crusader city. When the Mamluk sultan al-Ashraf Khalil brought a huge army against it, Beaujeu marshalled the military orders in its defence.',
      'He was struck down leading a counter-attack as the walls were breached; the Templars held their quarter for a few days more before it too fell, ending two centuries of Crusader presence on the Syrian coast.'
    ] },
    { title: 'Death', paragraphs: ['Beaujeu died of his wounds during the siege of Acre in May 1291, and with him fell the last real hope of the Latin East on the mainland.'] },
    { title: 'Legacy', paragraphs: [
      'Beaujeu is remembered as the Grand Master who died with the Crusader kingdom, a realist whose warnings were ignored and whose courage in the final battle was not.',
      'After Acre the Templars withdrew to Cyprus, their reason for being suddenly gone — a crisis that would help make them vulnerable to suppression a generation later.'
    ] }
  ],
  timeline: [
    { date: '1273', title: 'Elected Grand Master', description: 'The well-connected French noble takes command of the Temple.' },
    { date: '1280s', title: 'Diplomacy and truces', description: 'Beaujeu works truces with the Mamluks and builds an intelligence network.' },
    { date: '1290', title: 'Warnings ignored', description: 'His warnings of a coming assault on Acre are distrusted by the city commune.' },
    { date: 'May 1291', title: 'The fall of Acre', description: 'Beaujeu is mortally wounded leading the defence as the city is stormed.' },
    { date: '1291', title: 'Death', description: 'He dies of his wounds as Acre falls; the Templars withdraw to Cyprus.' }
  ],
  relatedEntries: {
    locations: [loc('kingdom-of-jerusalem', 'Kingdom of Jerusalem')],
    orders: [ord('knights-templar', 'Knights Templar'), ord('knights-hospitaller', 'Knights Hospitaller')]
  },
  sources: [
    { title: 'The New Knighthood: A History of the Order of the Temple', author: 'Malcolm Barber', type: 'book' },
    { title: 'The Fall of Acre, 1291 (crusade histories)', author: 'various', type: 'book' }
  ]
}

const craon = {
  id: 'robert-de-craon',
  type: 'character',
  name: 'Robert de Craon',
  aliases: ['Robert de Craon', 'Robert the Burgundian', 'Robert of Craon'],
  born: null,
  died: 1149,
  deathAge: 'unknown',
  causeOfDeath: 'Robert died in 1149, having led the Templars for over a decade.',
  restingPlace: 'Unknown',
  location: 'Kingdom of Jerusalem',
  image: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Blason_Robert_de_Craon.svg',
  title: 'second Grand Master of the Knights Templar',
  roles: ['Grand Master of the Knights Templar'],
  birth: { date: 'unknown', place: null },
  death: { date: '13 January 1149', place: null, circumstance: 'Died as Grand Master of the Temple.' },
  quickFacts: { realm: 'Kingdom of Jerusalem', dynasty: 'Knights Templar', culture: 'Latin Christian (Crusader)', knownFor: 'Won the Templars their great papal privileges' },
  imageInfo: { caption: 'Arms attributed to Robert de Craon, second Grand Master of the Temple.', creator: 'Heraldic reconstruction', date: 'attributed arms', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Blason_Robert_de_Craon.svg', note: 'Attributed arms; no likeness of Robert de Craon survives.' },
  overview: [
    'Robert de Craon was the second Grand Master of the Knights Templar, the shrewd organiser who turned Hugh de Payns’ small brotherhood into a wealthy, privileged, and independent order.',
    'His great achievement was the papal bull Omne Datum Optimum of 1139, which freed the Templars from all authority but the pope’s.'
  ],
  contentSections: [
    { title: 'Overview', paragraphs: ['Robert de Craon (Grand Master 1136–1149) succeeded the founder Hugh de Payns and, through skilful management and diplomacy, secured the privileges and endowments that made the Templars a great institution.'] },
    { title: 'Birth and early life', paragraphs: ['A nobleman of western France — from Craon in Anjou, and sometimes called Robert the Burgundian — he gave up a planned marriage to join the Templars, and rose to lead the order on the death of Hugh de Payns in 1136.'] },
    { title: 'Character and Personality', paragraphs: [
      'Where Hugh de Payns had been the pious founder, Robert de Craon was the builder — an able administrator and canny politician rather than a warrior-saint. His gift was for organisation and for winning friends in high places.',
      'His decisive success came in Rome. In 1139 he obtained from Pope Innocent II the bull Omne Datum Optimum, which placed the Templars directly under papal protection, exempted them from tithes and from the authority of local bishops, and allowed them their own priests. At a stroke it made the order independent, wealthy, and answerable to no one but the pope.',
      'Craon thus did as much as anyone to shape what the Templars became. Later generations would find that this very independence made powerful enemies — but in his own day it was the foundation of the order’s extraordinary rise.'
    ] },
    { title: 'Builder of the order', paragraphs: [
      'Under Craon the Templars expanded rapidly across Europe, accumulating estates and recruits and organising the provinces that would fund the war in the East. The papal privileges he won were confirmed and extended by later popes.',
      'He also led the order through the difficult years of the Second Crusade, when the Templars provided crucial discipline and credit to the struggling army of Louis VII of France.'
    ] },
    { title: 'Death', paragraphs: ['Robert de Craon died in January 1149, leaving the Templars far stronger and better endowed than he had found them.'] },
    { title: 'Legacy', paragraphs: [
      'Craon is remembered as the organiser who made the Templars a great power — the master who won them their independence and set them on the path to wealth and influence.',
      'The privileges he secured in 1139 defined the order’s standing in the Church for the rest of its existence.'
    ] }
  ],
  timeline: [
    { date: '1136', title: 'Succeeds Hugh de Payns', description: 'Becomes the second Grand Master of the Temple on the founder’s death.' },
    { date: '1139', title: 'Omne Datum Optimum', description: 'Wins the papal bull that frees the order from all authority but the pope’s.' },
    { date: '1140s', title: 'Expansion across Europe', description: 'The order accumulates estates, recruits, and provinces under his management.' },
    { date: '1147–1148', title: 'The Second Crusade', description: 'The Templars lend discipline and credit to the crusade of Louis VII.' },
    { date: '1149', title: 'Death', description: 'Craon dies, leaving a far wealthier and stronger order.' }
  ],
  relatedEntries: {
    people: [per('hugh-de-payns', 'Hugh de Payns'), per('bernard-of-clairvaux', 'Bernard of Clairvaux')],
    locations: [loc('kingdom-of-jerusalem', 'Kingdom of Jerusalem')],
    orders: [ord('knights-templar', 'Knights Templar')]
  },
  sources: [
    { title: 'The New Knighthood: A History of the Order of the Temple', author: 'Malcolm Barber', type: 'book' },
    { title: 'The Templars (survey histories)', author: 'various', type: 'book' }
  ]
}

const upsert = (e) => {
  const i = data.characters.findIndex((x) => x.id === e.id)
  if (i >= 0) { data.characters[i] = e; return 'updated' }
  data.characters.push(e); return 'added'
}

for (const c of [beaujeu, craon]) console.log('characters:', upsert(c), c.id)
writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`characters collection now has ${data.characters.length}`)
