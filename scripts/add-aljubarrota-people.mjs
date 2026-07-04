/**
 * Creates two full Person articles for the Battle of Aljubarrota leaders that
 * were unlinked: John I of Castile (the defeated Castilian king) and Nuno
 * Álvares Pereira (the victorious Portuguese constable, the "Holy Constable").
 * Both follow IronCodex person standards; John I of Castile is a ruler with a
 * succession box. Idempotent by id.
 */
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))

const ALJ = { title: 'Battle of Aljubarrota', type: 'event', slug: 'battle-of-aljubarrota' }
const CAST = { title: 'Kingdom of Castile', type: 'location', slug: 'kingdom-of-castile' }
const PT = { title: 'Kingdom of Portugal', type: 'location', slug: 'kingdom-of-portugal' }
const JOAO = (label) => ({ title: 'John I of Portugal', type: 'person', slug: 'john-i-of-portugal', label })
const FERN = (label) => ({ title: 'Ferdinand I of Portugal', type: 'person', slug: 'ferdinand-i-of-portugal', label })

const people = [
  {
    id: 'john-i-of-castile', type: 'character', name: 'John I of Castile', born: 1358, died: 1390,
    deathAge: 'about 32', causeOfDeath: 'A fall from his horse', restingPlace: 'Toledo Cathedral',
    location: 'Crown of Castile', aliases: ['Juan I of Castile', 'Juan I de Castilla'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/%28Juan_I%29_Virgen_de_Tobed_%28cropped%29.jpg',
    summary: 'King of Castile and León (1379–1390) whose claim to the Portuguese throne through his wife triggered the 1383–1385 crisis and ended in catastrophic defeat at Aljubarrota.',
    title: 'King of Castile and León', roles: ['King of Castile and León'],
    birth: { date: '1358', place: { name: 'Épila, Aragon' }, note: 'Son of Henry II of Castile, founder of the Trastámara dynasty.' },
    death: { date: '9 October 1390', place: { name: 'Alcalá de Henares' }, event: { name: 'Died in a riding accident', type: 'event' },
      circumstance: 'Died at Alcalá de Henares in 1390 after a fall from his horse, still only in his early thirties.' },
    quickFacts: { realm: 'Crown of Castile', dynasty: 'House of Trastámara', culture: 'Castilian', knownFor: 'the failed claim to Portugal and the defeat at Aljubarrota' },
    imageInfo: {
      caption: 'John I of Castile depicted in the Virgen de Tobed altarpiece by Jaume Serra, c. 1359–1362 — a near-contemporary devotional image of the Trastámara royal family.',
      creator: 'Jaume Serra', date: 'c. 1359–1362', source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:(Juan_I)_Virgen_de_Tobed_(cropped).jpg',
      license: 'Public domain', note: 'A near-contemporary devotional painting, not a formal state portrait.'
    },
    overview: [
      'John I was king of Castile and León from 1379 to 1390, the second monarch of the Trastámara dynasty founded by his father Henry II. His reign was dominated by two great dynastic contests: the Lancastrian claim to Castile pressed by John of Gaunt, and his own claim to the throne of Portugal.',
      'Through his marriage to Beatrice, the only heir of Ferdinand I of Portugal, John claimed the Portuguese crown on Ferdinand\'s death in 1383, triggering the succession crisis known as the 1383–1385 Interregnum. His invasion ended in disaster at the Battle of Aljubarrota in 1385, which secured Portuguese independence. He died in a riding accident in 1390.'
    ],
    greatestFeats: ['King of Castile and León', 'Claimed the throne of Portugal', 'Settled the Lancastrian claim to Castile by treaty'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'John I was king of Castile and León from 1379 to 1390, the second monarch of the Trastámara dynasty founded by his father Henry II. His reign was dominated by two great dynastic contests: the Lancastrian claim to Castile pressed by John of Gaunt, and his own claim to the throne of Portugal.',
        'Through his marriage to Beatrice, the only heir of Ferdinand I of Portugal, John claimed the Portuguese crown on Ferdinand\'s death in 1383, triggering the succession crisis known as the 1383–1385 Interregnum. His invasion ended in disaster at the Battle of Aljubarrota in 1385, which secured Portuguese independence. He died in a riding accident in 1390.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'John was born in 1358, the son of Henry of Trastámara — the illegitimate half-brother of Peter the Cruel — and Juana Manuel. His father seized the Castilian throne as Henry II after killing Peter in 1369, founding the Trastámara dynasty, so John grew up as the heir of a usurping line whose legitimacy was still contested.',
        'That contested inheritance shaped his reign from the start: the marriage of Peter the Cruel\'s daughter Constance to John of Gaunt gave the English prince a claim to Castile that John I would have to face down for much of his rule.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'John I is remembered as a conscientious and reform-minded but unlucky king, more administrator than warrior. Castilian chronicle tradition, especially the account of Pero López de Ayala who served at his court, presents a ruler genuinely concerned with the government, law, and church of his kingdom, who summoned the Cortes frequently and took counsel seriously.',
        'The same tradition, and the judgement of later historians, dwells on the misfortune and misjudgement that dogged him. The decision to press the Portuguese claim by force, and the reckless advance that ended at Aljubarrota, are remembered as the great errors of an otherwise careful reign. He appears as an earnest, dutiful ruler whose defining choices — the Portuguese war above all — brought catastrophe rather than the consolidation he sought.'
      ]},
      { title: 'As king of Castile', paragraphs: [
        'John succeeded his father in 1379 and worked to stabilise the young Trastámara monarchy. He faced the most dangerous phase of the Lancastrian claim when John of Gaunt landed in Iberia to make good Constance\'s right to Castile; John I resolved the threat by diplomacy, arranging the marriage of his heir, the future Henry III, to Gaunt\'s daughter Catherine of Lancaster, which united the rival claims.',
        'At home he was an active legislator who relied on the Cortes and on reform of the royal administration and the church. He also maintained Castile\'s French alliance, a legacy of his father\'s partnership with France against England during the Hundred Years\' War.'
      ]},
      { title: 'Role in the Portuguese succession crisis and Aljubarrota', paragraphs: [
        'In 1383 John married Beatrice, the only surviving legitimate child of Ferdinand I of Portugal, on terms meant to unite the two crowns. When Ferdinand died later that year leaving no son, John claimed the Portuguese throne in Beatrice\'s name, raising the prospect that Portugal would be absorbed into Castile.',
        'Portuguese resistance rallied around John of Aviz, and John I invaded to enforce his claim. On 14 August 1385 his large army was destroyed at the Battle of Aljubarrota by the smaller Portuguese force under John of Aviz and the constable Nuno Álvares Pereira, fighting from a prepared defensive position with English longbowmen. The defeat shattered Castilian ambitions in Portugal and confirmed the House of Aviz on the Portuguese throne.'
      ]},
      { title: 'Death', paragraphs: [
        'John I died on 9 October 1390 at Alcalá de Henares after a fall from his horse, aged only about thirty-two. His unexpected death left the throne to his young son Henry III, whose minority reopened the factional struggles of the Castilian nobility.'
      ]},
      { title: 'Legacy', paragraphs: [
        'John I is remembered chiefly for the disaster of Aljubarrota, which ended Castile\'s attempt to unite the Iberian crowns and guaranteed Portuguese independence for two centuries. His settlement of the Lancastrian claim through Henry III\'s marriage, by contrast, secured the Trastámara dynasty against its most dangerous external threat. His reign thus combined a lasting diplomatic success at home with the defining military catastrophe that made him, in Portuguese memory, the defeated king of Aljubarrota.'
      ]}
    ],
    keyAchievements: [
      { title: 'King of Castile and León, 1379–1390', description: 'The second Trastámara king, who worked to consolidate his father\'s usurped dynasty.' },
      { title: 'Settled the Lancastrian claim to Castile', description: 'Ended John of Gaunt\'s claim by marrying his heir Henry III to Catherine of Lancaster.' },
      { title: 'Claimed the throne of Portugal', description: 'His claim through his wife Beatrice triggered the 1383–1385 crisis and ended at Aljubarrota.' }
    ],
    timeline: [
      { date: '1358', title: 'Born', description: 'Born to Henry of Trastámara, later Henry II of Castile, and Juana Manuel.' },
      { date: '1379', title: 'Becomes King of Castile and León', description: 'Succeeds his father Henry II as the second Trastámara king.', links: [CAST] },
      { date: '1383', title: 'Marries Beatrice of Portugal', description: 'Marries the heir of Ferdinand I of Portugal on terms meant to unite the crowns.', links: [FERN('Beatrice\'s father')] },
      { date: '1383', title: 'Claims the Portuguese throne', description: 'On Ferdinand I\'s death he claims Portugal in Beatrice\'s name, triggering the 1383–1385 Interregnum.', links: [PT] },
      { date: '1385', title: 'Defeated at Aljubarrota', description: 'His invading army is destroyed by John of Aviz and Nuno Álvares Pereira, securing Portuguese independence.', links: [ALJ, JOAO('The victor of Aljubarrota')] },
      { date: '1387–1388', title: 'Settles the Lancastrian claim', description: 'Ends John of Gaunt\'s claim to Castile through the marriage of his heir to Catherine of Lancaster.' },
      { date: '9 October 1390', title: 'Dies in a riding accident', description: 'Dies at Alcalá de Henares after falling from his horse; his young son succeeds as Henry III.' }
    ],
    relatedEntries: {
      events: [ { ...ALJ, label: 'His great defeat, which secured Portuguese independence' } ],
      locations: [ { ...CAST, label: 'His realm' }, { ...PT, label: 'The throne he claimed and failed to win' } ],
      people: [ JOAO('The Portuguese king who defeated him'), FERN('His father-in-law, whose death began the crisis') ]
    },
    sources: [
      { title: 'John I | king of Castile and Leon', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/biography/John-I-king-of-Castile-and-Leon' },
      { title: 'Battle of Aljubarrota', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/event/Battle-of-Aljubarrota' }
    ],
    isRuler: true,
    succession: {
      office: 'King of Castile and León',
      predecessor: { displayName: 'Henry II of Castile', note: 'His father, founder of the Trastámara dynasty, who took the throne by killing Peter the Cruel in 1369.' },
      successor: { displayName: 'Henry III of Castile', note: 'His son, who succeeded as a child in 1390 and whose marriage to Catherine of Lancaster united the rival claims to Castile.' }
    }
  },

  {
    id: 'nuno-alvares-pereira', type: 'character', name: 'Nuno Álvares Pereira', born: 1360, died: 1431,
    deathAge: 'about 71', causeOfDeath: 'Natural causes', restingPlace: 'Carmo Convent, Lisbon',
    location: 'Kingdom of Portugal', aliases: ['the Holy Constable', 'o Santo Condestável', 'Saint Nuno of Saint Mary', 'São Nuno de Santa Maria'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Condestavel-1554.jpg',
    summary: 'Constable of Portugal and the victorious commander at Aljubarrota, later a Carmelite friar and, since 2009, a canonised saint — the "Holy Constable".',
    title: 'Constable of Portugal', roles: ['Constable of Portugal', 'Count of Ourém and Barcelos', 'Carmelite friar'],
    birth: { date: '24 June 1360', place: { name: 'Cernache do Bonjardim' }, note: 'Born into the Pereira family, of the lesser Portuguese nobility.' },
    death: { date: '1 November 1431', place: { name: 'Lisbon' }, circumstance: 'Died in 1431 as a Carmelite friar at the Carmo Convent in Lisbon, which he had founded.' },
    quickFacts: { realm: 'Kingdom of Portugal', dynasty: 'House of Aviz (military service); ancestor of the House of Braganza', culture: 'Portuguese', knownFor: 'winning the Battle of Aljubarrota and later becoming a friar and saint' },
    imageInfo: {
      caption: 'Nuno Álvares Pereira, the Holy Constable, in a 1554 portrait.',
      creator: 'Unknown', date: '1554', source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Condestavel-1554.jpg',
      license: 'Public domain', note: 'A 16th-century portrait, later than his lifetime, from the tradition of his cult.'
    },
    overview: [
      'Nuno Álvares Pereira was the Constable of Portugal and the outstanding Portuguese general of his age, remembered above all as the victor of the Battle of Aljubarrota in 1385, which secured Portuguese independence from Castile and confirmed the House of Aviz on the throne.',
      'A devout and disciplined commander, he won a string of victories during the 1383–1385 crisis in the name of John of Aviz. In his last years he gave away his vast wealth, became a Carmelite friar, and was venerated as the "Holy Constable"; the Catholic Church canonised him as Saint Nuno of Saint Mary in 2009.'
    ],
    greatestFeats: ['Constable of Portugal', 'Commanded the winning army at Aljubarrota (1385)', 'Won the battles of Atoleiros and Valverde', 'Canonised as a saint in 2009'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Nuno Álvares Pereira was the Constable of Portugal and the outstanding Portuguese general of his age, remembered above all as the victor of the Battle of Aljubarrota in 1385, which secured Portuguese independence from Castile and confirmed the House of Aviz on the throne.',
        'A devout and disciplined commander, he won a string of victories during the 1383–1385 crisis in the name of John of Aviz. In his last years he gave away his vast wealth, became a Carmelite friar, and was venerated as the "Holy Constable"; the Catholic Church canonised him as Saint Nuno of Saint Mary in 2009.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Nuno was born in 1360 into the Pereira family of the lesser Portuguese nobility, an illegitimate son of the prior of the Hospitallers in Portugal. Trained for arms from boyhood and reportedly inspired by tales of chivalry, he entered royal service young and married into wealth, becoming a substantial landholder before the crisis that made his name.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Nuno Álvares Pereira is remembered for an unusual fusion of hard military discipline and intense personal piety, a combination that his own age already found remarkable and that his later cult amplified. Portuguese chronicle tradition, especially the account of Fernão Lopes, presents a commander of absolute resolve — famous for refusing to retreat and for holding his outnumbered troops to a disciplined defensive fight at Aljubarrota — who was at the same time devoted to the Virgin Mary and rigorous in his religious observance.',
        'That devotion was not a late addition. Even as constable and one of the richest men in Portugal, he was known for austerity, chastity, and charity, and his eventual renunciation of wealth and entry into the Carmelite order struck contemporaries as the logical end of the man they had known. The chivalric-saintly image that made him the "Holy Constable" rests on genuine features of his conduct as much as on the needs of his cult.'
      ]},
      { title: 'As Constable and victor of Aljubarrota', paragraphs: [
        'When the death of Ferdinand I in 1383 opened the succession crisis, Nuno threw his support behind John of Aviz against the Castilian claim, and was made constable — supreme field commander — of the Portuguese army. In 1384 he won the Battle of Atoleiros against a Castilian force using dismounted, disciplined infantry tactics.',
        'His masterpiece came at Aljubarrota on 14 August 1385. Commanding the Portuguese line from a prepared hilltop position, stiffened by English longbowmen, he broke the much larger Castilian army of John I of Castile, destroying it and securing Portuguese independence. Weeks later he defeated another Castilian force at the Battle of Valverde inside Castile itself, cementing his reputation as an undefeated general.'
      ]},
      { title: 'Later life and sainthood', paragraphs: [
        'Rewarded with vast estates and the titles of Count of Ourém and Barcelos, Nuno became one of the wealthiest and most powerful men in Portugal; through his daughter\'s marriage he became an ancestor of the House of Braganza, Portugal\'s later royal dynasty.',
        'In 1423, however, he gave away almost all his property and entered the Carmelite Convent of Carmo in Lisbon, which he had founded, living out his days as a humble friar known as Nuno de Santa Maria. Venerated as the "Holy Constable" for centuries, he was beatified in 1918 and canonised by Pope Benedict XVI in 2009 as Saint Nuno of Saint Mary.'
      ]},
      { title: 'Death', paragraphs: [
        'Nuno Álvares Pereira died on 1 November 1431 at the Carmo Convent in Lisbon, having spent his final years as a friar. He was buried there, and his tomb became a place of veneration.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Nuno Álvares Pereira is one of the great figures of Portuguese national and religious memory: the undefeated general who secured the kingdom\'s independence at Aljubarrota, the founder of a line that led to the House of Braganza, and a canonised saint. His fusion of the warrior and the friar made him a lasting symbol of Portuguese chivalry and faith, and his victory alongside John I of Portugal is remembered as a founding moment of the Aviz age.'
      ]}
    ],
    keyAchievements: [
      { title: 'Constable of Portugal', description: 'Supreme field commander of the Portuguese army during the 1383–1385 crisis.' },
      { title: 'Victory at Aljubarrota, 1385', description: 'Broke the larger Castilian army from a prepared position, securing Portuguese independence.' },
      { title: 'Battles of Atoleiros and Valverde', description: 'Further victories that confirmed his reputation as an undefeated general.' },
      { title: 'Canonised as a saint, 2009', description: 'Venerated as the "Holy Constable"; canonised as Saint Nuno of Saint Mary.' }
    ],
    timeline: [
      { date: '24 June 1360', title: 'Born', description: 'Born at Cernache do Bonjardim into the Pereira family of the lesser nobility.' },
      { date: '1383', title: 'Joins John of Aviz', description: 'Backs John of Aviz against the Castilian claim and is made Constable of Portugal.', links: [JOAO('The Aviz claimant he served')] },
      { date: '1384', title: 'Wins the Battle of Atoleiros', description: 'Defeats a Castilian force using disciplined dismounted infantry tactics.' },
      { date: '14 August 1385', title: 'Commands the victory at Aljubarrota', description: 'Breaks the larger Castilian army of John I of Castile, securing Portuguese independence.', links: [ALJ] },
      { date: '1385', title: 'Wins the Battle of Valverde', description: 'Defeats another Castilian force inside Castile, cementing his undefeated reputation.' },
      { date: '1423', title: 'Becomes a Carmelite friar', description: 'Gives away his wealth and enters the Carmo Convent he founded in Lisbon.' },
      { date: '1 November 1431', title: 'Dies as a friar', description: 'Dies at the Carmo Convent; venerated as the "Holy Constable".' },
      { date: '2009', title: 'Canonised as a saint', description: 'Pope Benedict XVI canonises him as Saint Nuno of Saint Mary.' }
    ],
    relatedEntries: {
      events: [ { ...ALJ, label: 'The battle he won as constable' } ],
      locations: [ { ...PT, label: 'The kingdom whose independence he secured' }, { ...CAST, label: 'The invader he defeated' } ],
      people: [ JOAO('The king he served and fought for'), FERN('Whose death began the crisis') ]
    },
    sources: [
      { title: 'Nuno Álvares Pereira | Portuguese general and saint', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/biography/Nuno-Alvares-Pereira' },
      { title: 'Battle of Aljubarrota', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/event/Battle-of-Aljubarrota' }
    ]
  }
]

const existing = new Set(data.characters.map(c => c.id))
let added = 0, replaced = 0
for (const p of people) {
  const i = data.characters.findIndex(c => c.id === p.id)
  if (i >= 0) { data.characters[i] = p; replaced++ } else { data.characters.push(p); added++ }
}
fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`People added: ${added}, replaced: ${replaced}. Total characters: ${data.characters.length}`)
