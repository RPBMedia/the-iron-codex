/**
 * W&A upgrade M3 — the fencing masters behind the Longsword article.
 * Adds Johannes Liechtenauer and Fiore dei Liberi as full Person articles and
 * links them from the Longsword (related entries + the prose already names them,
 * so the auto-linker resolves them after gen-entity-links). Idempotent.
 */
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))

const wa = (slug, title, label) => ({ title, type: 'weaponArmor', slug, label })
const per = (slug, title, label) => ({ title, type: 'person', slug, label })
const fp = (file) => `https://commons.wikimedia.org/wiki/Special:FilePath/${file}`
const upsert = (arr, entry) => {
  const i = arr.findIndex((e) => e.id === entry.id)
  if (i >= 0) { arr[i] = entry; return 'updated' }
  arr.push(entry); return 'added'
}

const liechtenauer = {
  id: 'johannes-liechtenauer', type: 'person', name: 'Johannes Liechtenauer',
  aliases: ['Johann Liechtenauer', 'Hans Liechtenauer', 'Master Liechtenauer'],
  born: '14th century', died: '14th century (uncertain)', deathAge: 'unknown',
  birth: { date: 'unknown', place: 'the German lands (unknown)' },
  death: { date: 'late 14th century (uncertain)', place: 'unknown' },
  location: 'The Holy Roman Empire',
  image: fp('De%20Fechtbuch%20Talhoffer%20025.jpg'),
  title: 'fencing master', isRuler: false,
  roles: ['Fencing master', 'Founder of the German school of fencing'],
  summary: 'Johannes Liechtenauer was the 14th-century German fencing master regarded as the founder of the German school of swordsmanship, whose longsword teaching, preserved as a cryptic verse, shaped Central European martial arts for two centuries.',
  details: 'Almost nothing certain is known of Liechtenauer\'s life. His art survives only through his mnemonic "recital" (Zettel) and the later glosses that explain it, the earliest recorded around 1389.',
  overview: 'Liechtenauer is a foundational yet shadowy figure: hugely influential through his followers, but barely documented as a person.',
  quickFacts: { culture: 'German', knownFor: 'Founding the German (Liechtenauer) school of longsword fencing' },
  contentSections: [
    { title: 'Overview', paragraphs: [
      'Johannes Liechtenauer was a German fencing master of the 14th century, remembered as the founder of the Kunst des Fechtens — the German art of fencing. His system for the two-handed longsword became the dominant martial tradition of the German-speaking lands into the 16th century.',
      'He taught his art not as a manual but as a compressed mnemonic verse, the Zettel or "recital", deliberately obscure so that outsiders could not learn it without a master. The verse was later written down and explained by his successors.',
      'The man himself is almost invisible to history. He is known only through references in the fight-books of his tradition, which credit him as the source of their teaching without recording where he lived, learned, or died.'
    ]},
    { title: 'The art and its transmission', paragraphs: [
      'Liechtenauer\'s longsword system is built on seizing the initiative (the Vor), five "master cuts" that both attack and defend, and the play of the bind — winding (Winden) and feeling pressure (Fühlen) to open a new line. It treats the sword as a lever and probe rather than a bludgeon.',
      'The earliest surviving record of his verse is the Nuremberg Hausbuch (MS 3227a) of about 1389. Over the 15th century a chain of masters — Sigmund Ringeck, Peter von Danzig, Paulus Kal, and the illustrator Hans Talhoffer among them — wrote commentaries (glosses) that unpack the cryptic lines into a teachable system.',
      'Because of this written tradition, the German longsword is one of the best-reconstructed martial arts of the Middle Ages, studied today directly from those manuscripts.'
    ]},
    { title: 'Character and Personality', paragraphs: [
      'There is essentially no personal record of Liechtenauer, so any "character" belongs to how his tradition remembered him: as a supreme authority whose word settled questions of technique. The glossators cite him almost as scripture, quoting his verse and then explaining "this is what the master means".',
      'The one trait the sources do imply is a jealous guarding of knowledge. His teaching was cast in riddling verse precisely so that "common fencers" could not steal it, which tells us the art was a valuable, closely-held professional secret. Beyond that, the historical Liechtenauer is a name attached to a body of technique rather than a documented individual, and honest accounts say so.'
    ]}
  ],
  keyAchievements: [
    'Founded the German school of fencing (Kunst des Fechtens)',
    'Composed the longsword recital (Zettel) that anchored the tradition',
    'Inspired the 15th-century glossators who preserved and taught his art'
  ],
  timeline: [
    { date: '14th century', title: 'Life', description: 'Active as a fencing master in the German lands; his biography is almost entirely unrecorded.' },
    { date: 'Mid-14th century', title: 'The recital (Zettel)', description: 'Composes a mnemonic verse encoding his longsword system, deliberately obscure to outsiders.' },
    { date: 'c. 1389', title: 'Earliest record', description: 'The Nuremberg Hausbuch (MS 3227a) preserves the first known copy of his verse.' },
    { date: '15th century', title: 'The glossators', description: 'Ringeck, Peter von Danzig and Paulus Kal write commentaries explaining the verse.' },
    { date: '1467', title: 'Talhoffer’s fight-books', description: 'Hans Talhoffer’s illustrated manuals carry the tradition to a wider audience.' }
  ],
  imageInfo: {
    caption: 'A longsword plate from Hans Talhoffer’s 1467 fight-book — a manuscript of the German (Liechtenauer) tradition. No likeness of Liechtenauer himself survives.',
    creator: 'Hans Talhoffer (1467 fight-book)',
    date: '1467 manuscript',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:De_Fechtbuch_Talhoffer_025.jpg',
    note: 'A later manuscript of the tradition Liechtenauer founded, not a depiction of the man.'
  },
  sources: [
    { title: 'Johannes Liechtenauer', author: 'Wikipedia', type: 'reference', url: 'https://en.wikipedia.org/wiki/Johannes_Liechtenauer' },
    { title: 'Johannes Liechtenauer (treatises and glosses)', author: 'Wiktenauer (HEMA Alliance)', type: 'primary-source tradition', url: 'https://wiktenauer.com/wiki/Johannes_Liechtenauer' }
  ],
  relatedEntries: {
    weaponsArmor: [
      wa('longsword', 'Longsword', 'The weapon his system taught'),
      wa('rondel-dagger', 'Rondel Dagger', 'The armoured-combat sidearm in the tradition'),
      wa('poleaxe', 'Poleaxe', 'Also taught in the armoured-fighting curriculum')
    ],
    people: [ per('fiore-dei-liberi', 'Fiore dei Liberi', 'His Italian contemporary and counterpart') ]
  }
}

const fiore = {
  id: 'fiore-dei-liberi', type: 'person', name: 'Fiore dei Liberi',
  aliases: ['Fiore dei Liberi da Cividale', 'Fiore Furlano', 'Fiore de’ Liberi'],
  born: 'c. 1350', died: 'c. 1420', deathAge: 'unknown',
  birth: { date: 'c. 1350', place: 'Cividale del Friuli, Patriarchate of Aquileia' },
  death: { date: 'c. 1420 (uncertain)', place: 'northern Italy' },
  location: 'Friuli and northern Italy',
  image: fp('Flos%20Duellatorum%2C%20Flor%20de%20Batalla%201409.JPG'),
  title: 'fencing master', isRuler: false,
  roles: ['Fencing master', 'Author of the Fior di Battaglia'],
  summary: 'Fiore dei Liberi was the Italian fencing master whose illustrated treatise, the Fior di Battaglia (c. 1409), lays out an integrated art of wrestling, dagger, sword, armoured combat, poleaxe, and mounted fighting — the foundation of the Italian school.',
  details: 'A master from Cividale del Friuli, Fiore taught soldiers and noblemen across northern Italy and compiled his life’s teaching into a richly illustrated manual dedicated to Niccolò III d’Este of Ferrara.',
  overview: 'Fiore is the earliest Italian fencing master whose work survives in full, and one of the most complete martial systems of the Middle Ages.',
  quickFacts: { culture: 'Italian (Friulian)', knownFor: 'The Fior di Battaglia (Flower of Battle), c. 1409' },
  contentSections: [
    { title: 'Overview', paragraphs: [
      'Fiore dei Liberi was an Italian master-at-arms from Cividale del Friuli, active around 1400. He is the author of the Fior di Battaglia ("Flower of Battle"), an illustrated treatise of about 1409 that is the earliest complete record of the Italian martial tradition.',
      'Unlike Liechtenauer’s cryptic verse, Fiore’s work is a full illustrated curriculum. It moves from unarmed wrestling through the dagger, the sword in one and two hands, armoured combat, the poleaxe and spear, to fighting on horseback — a whole system, not a single weapon.',
      'Because Fiore wrote a prologue about his own life, he is far better documented than his German contemporary, and his manuscripts survive in several closely-related copies.'
    ]},
    { title: 'The Fior di Battaglia', paragraphs: [
      'In his prologue Fiore says he studied under many masters, German and Italian, over decades, and fought five duels against envious rivals who wished to test him. He compiled the Fior di Battaglia for Niccolò III d’Este, marquis of Ferrara, presenting the whole of his art in ordered images with captions.',
      'The system is organised as an integrated whole: the longsword sits between the dagger and the poleaxe, and the same principles of leverage, timing and control run through armed and unarmed play alike. Techniques are taught through a memorable scheme of "masters" and "scholars" and the four virtues.',
      'The treatise survives in four manuscripts — the Getty, Pisani-Dossi, Morgan and Paris copies — whose overlaps and differences let scholars reconstruct his teaching in detail.'
    ]},
    { title: 'Character and Personality', paragraphs: [
      'Fiore speaks in his own voice in the prologue, and the impression is of a proud, careful professional: a man who insists on the difficulty and danger of his art, who guards it from the unworthy, and who is quietly boastful about besting jealous rivals in earnest combat.',
      'He presents himself as a lifelong student as much as a teacher, crediting many masters and long experience rather than natural genius. That self-portrait is of course his own advertisement, but the meticulous, humane organisation of his book — built to be learned, not just admired — supports the picture of a serious practitioner rather than a showman.'
    ]}
  ],
  keyAchievements: [
    'Wrote the Fior di Battaglia (c. 1409), the earliest complete Italian martial treatise',
    'Set out an integrated art of wrestling, dagger, sword, poleaxe and mounted combat',
    'Founded the Italian school later carried on by masters such as Filippo Vadi'
  ],
  timeline: [
    { date: 'c. 1350', title: 'Born', description: 'Born at Cividale del Friuli in the Patriarchate of Aquileia.' },
    { date: 'Late 14th century', title: 'Career', description: 'Trains under several masters and teaches soldiers and noblemen across northern Italy.' },
    { date: 'c. 1409', title: 'Fior di Battaglia', description: 'Completes his illustrated treatise, dedicated to Niccolò III d’Este of Ferrara.' },
    { date: 'early 15th century', title: 'The manuscripts', description: 'His art survives in four closely-related manuscripts (Getty, Pisani-Dossi, Morgan, Paris).' },
    { date: 'c. 1420', title: 'Died', description: 'Died in the early 15th century; the exact date is not recorded.' }
  ],
  imageInfo: {
    caption: 'A page from Fiore dei Liberi’s Flos Duellatorum / Fior di Battaglia (1409), showing the illustrated martial teaching that made his reputation.',
    creator: 'Fiore dei Liberi (Pisani-Dossi manuscript)',
    date: '1409 manuscript',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Flos_Duellatorum,_Flor_de_Batalla_1409.JPG',
    note: 'A near-contemporary manuscript of Fiore’s own treatise; no portrait of the man survives.'
  },
  sources: [
    { title: 'Fiore dei Liberi', author: 'Wikipedia', type: 'reference', url: 'https://en.wikipedia.org/wiki/Fiore_dei_Liberi' },
    { title: 'Fiore dei Liberi (Fior di Battaglia manuscripts)', author: 'Wiktenauer (HEMA Alliance)', type: 'primary-source tradition', url: 'https://wiktenauer.com/wiki/Fiore_de%27i_Liberi' }
  ],
  relatedEntries: {
    weaponsArmor: [
      wa('longsword', 'Longsword', 'Central to his system'),
      wa('rondel-dagger', 'Rondel Dagger', 'The dagger of his armoured play'),
      wa('poleaxe', 'Poleaxe', 'Part of his integrated curriculum')
    ],
    people: [ per('johannes-liechtenauer', 'Johannes Liechtenauer', 'His German contemporary and counterpart') ]
  }
}

const results = []
results.push(['person', liechtenauer.name, upsert(data.characters, liechtenauer)])
results.push(['person', fiore.name, upsert(data.characters, fiore)])

// Link the masters from the Longsword article.
const ls = data.weaponsArmor.find((w) => w.id === 'longsword')
if (ls) {
  ls.relatedEntries = ls.relatedEntries || {}
  ls.relatedEntries.people = [
    per('johannes-liechtenauer', 'Johannes Liechtenauer', 'Founder of the German fencing tradition'),
    per('fiore-dei-liberi', 'Fiore dei Liberi', 'Author of the Italian Fior di Battaglia')
  ]
  results.push(['link', 'Longsword → fencing masters', 'updated'])
}

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))
for (const [t, n, a] of results) console.log(`${a.padEnd(8)} ${t.padEnd(7)} ${n}`)
console.log('\nDone. Run gen-entity-links + gates + build.')
