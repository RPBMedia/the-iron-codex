// Phase 1 battle-leader audit implementation: create the 11 missing commander
// Person articles (full quality — verified Commons images, Character and
// Personality, timelines, reciprocal battle links, succession where rulers),
// link them as leaders on their battles (participants[].leaders slug + legacy
// top-level leaders[].personId), and apply the targeted graph fixes
// (Wallace on the Wars of Scottish Independence, Bayezid I on Kosovo, the
// unnamed qadi of Lisbon). Idempotent: characters upsert by id, event edits
// check before writing.
import fs from 'node:fs'

const dataPath = new URL('../server/data/history.json', import.meta.url)
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))

const fp = (n) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(n)}`
const pg = (n) => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(n)}`

// ---------------------------------------------------------------------------
// A. The eleven new Person articles
// ---------------------------------------------------------------------------
const characters = [
  {
    id: 'guthrum', type: 'character', name: 'Guthrum',
    born: null, died: 890, deathAge: 'unknown', causeOfDeath: 'Unrecorded',
    restingPlace: 'Hadleigh, Suffolk (by later tradition)',
    location: 'East Anglia',
    aliases: ['Guthrum the Old'],
    image: fp('Æthelstan II Guthrum, silver penny; struck circa 879–890.png'),
    summary: 'Danish leader of the Great Heathen Army who nearly destroyed Wessex in 878, was defeated by Alfred the Great at Edington, accepted baptism as Æthelstan, and ruled East Anglia as a Christian king until his death around 890.',
    title: 'Viking leader and King of East Anglia',
    roles: ['Viking army commander', 'King of East Anglia'],
    birth: { date: 'Unknown', note: 'Nothing is recorded of Guthrum\'s birth or early life; he is assumed to be Danish from the composition of the Great Heathen Army, but no source names his family or homeland.' },
    death: { date: 'c. 890', place: { name: 'East Anglia' }, circumstance: 'The Anglo-Saxon Chronicle records the death of "the northern king, whose baptismal name was Æthelstan" around 890; a later tradition holds that he was buried at Hadleigh in Suffolk.' },
    quickFacts: { realm: 'East Anglia (Danish kingdom)', dynasty: 'None recorded', culture: 'Danish (Norse)', knownFor: 'fighting Alfred the Great, defeat at Edington, and ruling East Anglia as the baptised king Æthelstan' },
    imageInfo: {
      caption: 'Silver penny struck in East Anglia c. 879/80–890 in the name of Æthelstan — Guthrum\'s baptismal name — with a cross on the obverse and the moneyer Abenel on the reverse.',
      creator: 'Photograph by Classical Numismatic Group',
      date: 'c. 879/80–890',
      source: 'Wikimedia Commons',
      sourceUrl: pg('Æthelstan II Guthrum, silver penny; struck circa 879–890.png'),
      license: 'CC BY-SA 2.5',
      note: 'A coin from Guthrum\'s own reign — the closest thing to a contemporary image of his kingship. No portrait of Guthrum exists; the coinage imitates Alfred\'s types and uses his Christian name.'
    },
    overview: [
      'Guthrum was the Danish leader whose war with Alfred the Great decided whether any English kingdom would survive the Viking invasions. Arriving among the reinforcements of the Great Heathen Army, he emerges by name in the Anglo-Saxon Chronicle in 875 as one of the kings who led the southern Danish forces from Cambridge against Wessex, the last unconquered English kingdom.',
      'His midwinter seizure of Chippenham in January 878 came close to ending the West Saxon monarchy, driving Alfred into the marshes of Athelney. Defeat at the Battle of Edington that May reversed everything: Guthrum surrendered, accepted baptism under the name Æthelstan with Alfred as his godfather, and withdrew to rule East Anglia from about 880 as a Christian king, striking coins in his baptismal name until his death around 890.'
    ],
    greatestFeats: [
      'Led the Danish assault that nearly conquered Wessex in 878',
      'Ruled East Anglia as king from c. 880',
      'Sealed the peace of Wedmore through baptism as Æthelstan'
    ],
    contentSections: [
      {
        title: 'Overview',
        paragraphs: [
          'Guthrum was the Danish leader whose war with Alfred the Great decided whether any English kingdom would survive the Viking invasions. Arriving among the reinforcements of the Great Heathen Army, he emerges by name in the Anglo-Saxon Chronicle in 875 as one of the kings who led the southern Danish forces from Cambridge against Wessex, the last unconquered English kingdom.',
          'His midwinter seizure of Chippenham in January 878 came close to ending the West Saxon monarchy, driving Alfred into the marshes of Athelney. Defeat at the Battle of Edington that May reversed everything: Guthrum surrendered, accepted baptism under the name Æthelstan with Alfred as his godfather, and withdrew to rule East Anglia from about 880 as a Christian king, striking coins in his baptismal name until his death around 890.'
        ]
      },
      {
        title: 'Birth and early life',
        paragraphs: [
          'Guthrum\'s origins are simply not recorded. No source names his father, his birthplace, or the date he crossed to England; he is assumed to be Danish because the armies he led were, and because the Anglo-Saxon Chronicle later calls him "the northern king". He first appears by name in 875, when the Great Heathen Army split at Repton: while Halfdan took his forces north, Guthrum — with the kings Oscetel and Anwend — led the southern host to Cambridge, from which the assault on Wessex would come. Everything before that is guesswork, and this article does not fill the gap with invented detail.'
        ]
      },
      {
        title: 'Character and Personality',
        paragraphs: [
          'Every source for Guthrum\'s character was written by his enemies. The Anglo-Saxon Chronicle and Asser\'s Life of King Alfred record a commander of daring and bad faith in war: at Wareham in 876 he swore peace to Alfred on the sacred ring — an oath, Asser notes, the Danes had never before given anyone — and promptly broke it, slipping his army away to Exeter by night. The strike on Chippenham in January 878, timed for Twelfth Night when a Christian court was feasting and armies were dispersed, shows the same cold opportunism: a general who treated treaties and holy seasons alike as weapons.',
          'Yet the second half of his career forces a more complicated judgment, even from the West Saxon record. After Edington, Guthrum kept the peace of 878 in its essentials for the rest of his life — a rare thing among Viking leaders — settled his army on the land of East Anglia in 880, and governed as a Christian king who minted coins under his baptismal name, Æthelstan, on the model of Alfred\'s own coinage. Whether his conversion was conviction or statecraft cannot be known, but the sources allow this much: the oath-breaker of Wareham proved capable, once beaten, of holding to a settlement for a decade.'
        ]
      },
      {
        title: 'The war for Wessex',
        paragraphs: [
          'From Cambridge, Guthrum opened his campaign against Wessex in 875, seizing Wareham in Dorset and, after the broken oath, Exeter in 877. Storms wrecked a supporting Danish fleet off Swanage, and Alfred was able to bring him to terms; the Danes withdrew to Gloucester in Mercia. Then, in January 878, Guthrum struck the blow that nearly ended English history: a surprise descent on the royal estate at Chippenham in Wiltshire, where Alfred was keeping Christmas. The West Saxon court scattered, much of Wessex submitted, and Alfred fled to the marsh-fort of Athelney in Somerset with a handful of followers.',
          'In the seventh week after Easter 878, Alfred summoned the levies of Somerset, Wiltshire, and Hampshire to Egbert\'s Stone and met Guthrum\'s army at the Battle of Edington. The Danes were routed and driven back to their fortress at Chippenham, where Alfred besieged them for two weeks until hunger forced surrender. The terms were unprecedented: Guthrum gave hostages, swore to leave Wessex, and — three weeks later at Aller, near Athelney — accepted baptism with Alfred standing as his godfather. The twelve days of feasting at Wedmore that followed sealed what tradition calls the Treaty of Wedmore, turning a pagan invader into a Christian client king.'
        ]
      },
      {
        title: 'King in East Anglia',
        paragraphs: [
          'Guthrum led his army from Chippenham to Cirencester in 879, and in 880 into East Anglia, where — in the Chronicle\'s words — they "settled and shared out the land". The kingdom whose native line had ended with the killing of King Edmund in 869 now had a Danish king, and Guthrum ruled it for roughly a decade as Æthelstan, the name of his baptism. His coinage is the best evidence of what that rule meant: silver pennies struck in East Anglia, probably at Ipswich among other mints, carrying his Christian name and copying the designs of Alfred\'s Wessex — a Viking warlord presenting himself as a legitimate Christian monarch.',
          'At some point between 878 and his death, Guthrum and Alfred concluded the written agreement known as the Treaty of Alfred and Guthrum, which drew the boundary between their spheres up the Thames, along the River Lea, to Bedford and up the Ouse to Watling Street, and fixed compensation values between Englishmen and Danes. That line made the settlement of 878 into a legal frontier, and the lands beyond it — East Anglia, the east midlands, and the Danish north — would become known as the Danelaw, inside which Danish law and lordship shaped eastern England for generations.'
        ]
      },
      {
        title: 'Death',
        paragraphs: [
          'The Anglo-Saxon Chronicle records under 890 the death of "the northern king, whose baptismal name was Æthelstan" — Guthrum — noting that he was Alfred\'s godson and had dwelt in East Anglia, the land he was first to settle. Nothing is said of the cause. A later tradition, first recorded well after his lifetime, holds that he was buried at Hadleigh in Suffolk; it is tradition, not documented fact. Within a decade of his death his successor Eohric had thrown East Anglia back into war with Wessex, dying in battle at the Holme in 902.'
        ]
      },
      {
        title: 'Legacy',
        paragraphs: [
          'Guthrum\'s defeat and conversion shaped England more than most victories shaped anything. Edington saved Wessex, and the Wedmore settlement created the model — defeat, baptism, defined frontier — by which Alfred and his heirs dealt with Danish power; the treaty boundary along Watling Street defined the Danelaw whose legal and linguistic traces outlasted the Middle Ages. His own kingdom proved shorter-lived: Edward the Elder\'s campaigns reconquered East Anglia by 917, folding it into the emerging Kingdom of England. Guthrum remains the example every later account reaches for when it explains how Viking conquest turned into settlement — the enemy king who ended his life as a Christian ruler striking English-style coins.'
        ]
      }
    ],
    keyAchievements: [
      { title: 'Nearly conquered Wessex', description: 'His midwinter seizure of Chippenham in January 878 drove Alfred the Great into the marshes of Athelney.' },
      { title: 'The Wedmore settlement', description: 'After defeat at Edington he accepted baptism as Æthelstan, with Alfred as godfather, and kept the peace.' },
      { title: 'Danish kingship in East Anglia', description: 'Settled East Anglia in 880 and ruled it as a coin-striking Christian king until c. 890.' }
    ],
    timeline: [
      { date: '875', title: 'Named among the Danish kings', description: 'First appears in the Anglo-Saxon Chronicle, leading the southern half of the Great Heathen Army to Cambridge with the kings Oscetel and Anwend; nothing earlier is recorded of him.' },
      { date: '876–877', title: 'Wareham and Exeter', description: 'Seizes Wareham, swears peace to Alfred on the sacred ring, breaks the oath, and slips away to Exeter before withdrawing to Gloucester after a Danish fleet is wrecked off Swanage.' },
      { date: 'January 878', title: 'Seizure of Chippenham', description: 'Surprises the West Saxon court at Chippenham in midwinter; Wessex largely submits and Alfred flees to Athelney.', links: [{ title: 'Alfred the Great', type: 'person', slug: 'alfred-the-great', label: 'Driven into the marshes' }] },
      { date: 'May 878', title: 'Defeated at Edington', description: 'Routed by Alfred at the Battle of Edington, besieged at Chippenham for two weeks, and forced to surrender hostages and terms.', links: [{ title: 'Battle of Edington', type: 'event', slug: 'battle-of-edington', label: 'His decisive defeat' }] },
      { date: 'June 878', title: 'Baptised as Æthelstan', description: 'Baptised at Aller with Alfred as godfather, followed by twelve days of feasting at Wedmore — the settlement known as the Treaty of Wedmore.' },
      { date: '880', title: 'Settles East Anglia', description: 'Leads his army from Cirencester into East Anglia, shares out the land, and rules as king, striking pennies in his baptismal name.' },
      { date: 'c. 890', title: 'Dies in East Anglia', description: 'The Anglo-Saxon Chronicle records his death; later tradition — no more than that — places his burial at Hadleigh in Suffolk.' }
    ],
    relatedEntries: {
      people: [
        { title: 'Alfred the Great', type: 'person', slug: 'alfred-the-great', label: 'His great adversary and godfather' }
      ],
      events: [
        { title: 'Battle of Edington', type: 'event', slug: 'battle-of-edington', label: 'His decisive defeat, 878' }
      ],
      locations: [
        { title: 'Kingdom of Wessex', type: 'location', slug: 'kingdom-of-wessex', label: 'The kingdom he nearly destroyed' },
        { title: 'Kingdom of England', type: 'location', slug: 'kingdom-of-england', label: 'The Danelaw boundary he agreed helped define its shape' }
      ]
    },
    sources: [
      { title: 'Guthrum | Danish king of East Anglia', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/biography/Guthrum' },
      { title: 'Guthrum — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Guthrum' },
      { title: 'Wikimedia Commons image record (Æthelstan II Guthrum penny)', author: 'Wikimedia Commons / Classical Numismatic Group', type: 'image source', url: pg('Æthelstan II Guthrum, silver penny; struck circa 879–890.png') }
    ],
    isRuler: true,
    succession: {
      office: 'King of East Anglia',
      note: 'Succession shown for the Danish kingdom of East Anglia Guthrum established c. 880.',
      predecessor: { status: 'unknown', displayName: 'Danish interregnum after King Edmund', note: 'After the Great Heathen Army killed King Edmund of East Anglia in 869 the kingdom lay under Danish power with no securely recorded single ruler until Guthrum took it as his kingdom around 880.' },
      successor: { displayName: 'Eohric of East Anglia', note: 'Danish king of East Anglia after Guthrum; killed fighting Edward the Elder\'s forces at the Holme in 902.' }
    }
  },

  {
    id: 'john-talbot', type: 'character', name: 'John Talbot, Earl of Shrewsbury',
    born: 1387, died: 1453, deathAge: 'about 66', causeOfDeath: 'Killed at the Battle of Castillon',
    restingPlace: 'St Alkmund\'s, Whitchurch, Shropshire',
    location: 'Kingdom of England',
    aliases: ['John Talbot', 'Talbot'],
    image: fp('Presentation scene - British Library Royal MS 15 E vi f2v (detail).jpg'),
    summary: 'England\'s most feared field commander of the later Hundred Years\' War — captured at Patay in 1429, terror of the French frontier for two decades, and killed charging entrenched guns at Castillon in 1453.',
    title: '1st Earl of Shrewsbury, English commander in France',
    roles: ['English commander in the Hundred Years\' War', 'Lieutenant of Ireland', 'Earl of Shrewsbury'],
    birth: { date: 'c. 1387', place: { name: 'Shropshire, England' }, note: 'Second son of Richard Talbot, 4th Baron Talbot of Goodrich; the exact date and place of his birth are not securely recorded.' },
    death: { date: '17 July 1453', place: { name: 'Castillon, Gascony' }, circumstance: 'Killed when his charge against Jean Bureau\'s fortified artillery park failed; his horse was brought down by a cannonball and he was finished with a hand axe. His son John, Viscount Lisle, died beside him.' },
    quickFacts: { realm: 'Kingdom of England', dynasty: 'Talbot of Goodrich', culture: 'English', knownFor: 'two decades of relentless war in France, capture at Patay, and his death at Castillon' },
    imageInfo: {
      caption: 'John Talbot, Earl of Shrewsbury, presents the "Talbot Shrewsbury Book" to Queen Margaret of Anjou, seated beside Henry VI. Miniature by the Talbot Master, 1444–45 (British Library, Royal MS 15 E vi, f. 2v).',
      creator: 'The Talbot Master',
      date: '1444–45',
      source: 'British Library / Wikimedia Commons',
      sourceUrl: pg('Presentation scene - British Library Royal MS 15 E vi f2v (detail).jpg'),
      license: 'Public domain',
      note: 'A contemporary manuscript image made for Talbot himself — he kneels at left in the presentation scene — though a ceremonial depiction rather than a studied portrait.'
    },
    overview: [
      'John Talbot was the commander the French frontier feared for a generation — the "English Achilles" whose name, chroniclers claimed, mothers used to frighten children. A hard apprenticeship in Wales and Ireland made him a master of the sudden march and the storm assault, and from the mid-1420s he applied those methods across Normandy and the Loire in the service of Henry VI\'s France.',
      'His war turned on two disasters. At Patay in June 1429, in the pursuit after the relief of Orléans, the French cavalry caught the English army before its archers could fix their stakes; Talbot was taken and spent four years a prisoner. Twenty years of stubborn fighting later, the old earl was sent to recover Gascony, and at Castillon on 17 July 1453 he charged a fortified artillery camp and was killed — the defeat that ended the Hundred Years\' War.'
    ],
    greatestFeats: [
      'Commanded England\'s field war in France for two decades',
      'Recovered Bordeaux for England in 1452',
      'Died leading the last English army of the Hundred Years\' War at Castillon'
    ],
    contentSections: [
      {
        title: 'Overview',
        paragraphs: [
          'John Talbot was the commander the French frontier feared for a generation — the "English Achilles" whose name, chroniclers claimed, mothers used to frighten children. A hard apprenticeship in Wales and Ireland made him a master of the sudden march and the storm assault, and from the mid-1420s he applied those methods across Normandy and the Loire in the service of Henry VI\'s France.',
          'His war turned on two disasters. At Patay in June 1429, in the pursuit after the relief of Orléans, the French cavalry caught the English army before its archers could fix their stakes; Talbot was taken and spent four years a prisoner. Twenty years of stubborn fighting later, the old earl was sent to recover Gascony, and at Castillon on 17 July 1453 he charged a fortified artillery camp and was killed — the defeat that ended the Hundred Years\' War.'
        ]
      },
      {
        title: 'Birth and early life',
        paragraphs: [
          'Talbot was born around 1387, the second son of Richard Talbot, 4th Baron Talbot of Goodrich Castle on the Welsh march. His schooling in war came young and rough: service against Owain Glyndŵr\'s rising in Wales in the 1400s, then two spells as King\'s Lieutenant in Ireland from 1414, where he campaigned relentlessly against the Gaelic lords and earned a reputation for energy and severity that never left him. Marriage to Maud Neville brought him the barony of Furnivall and its Yorkshire lands; the wars of Henry V\'s brothers would bring him everything else.'
        ]
      },
      {
        title: 'Character and Personality',
        paragraphs: [
          'Friend and enemy agreed on the core of the man: speed, aggression, and personal fearlessness pushed to the edge of recklessness. English eulogists made him the "English Achilles" and the terror of France; French writers paid the same tribute in reverse — the Bourgeois of Paris and later chroniclers treated "Talbot" as a byword for sudden assault, and his name was reportedly used along the frontier to hush children. His hallmark operations — night marches, dawn escalades, the recapture of towns like Pontoise in 1437 by men crossing the ice — were feats of tempo rather than mass.',
          'The same sources record the flaws welded to those virtues. He was quarrelsome in command — his feud with the Earl of Ormond poisoned English Ireland for years — harsh in reprisal, and at the end fatally proud: at Castillon, bound by his parole terms (having sworn after his 1450 release never again to wear armour against the French king), he led the attack unarmoured and pressed it against entrenched guns rather than break off. Modern historians such as A. J. Pollard see less a tactical genius than a superb fighting leader of the old school, whose gifts belonged to the raid and the storm, not to the artillery age that killed him.'
        ]
      },
      {
        title: 'The war in France',
        paragraphs: [
          'Talbot joined the French war in earnest in 1427 under the regent John, Duke of Bedford, and made his name in the fighting around Maine and the Loire. He shared command of the siege lines before Orléans, and after Joan of Arc\'s relief of the city in May 1429 he fought the rearguard action of the collapsing English position. At Patay on 18 June 1429 the French vanguard under La Hire and Poton de Xaintrailles rode down the English army before it could form; Sir John Fastolf escaped with the mounted troops, and Talbot was captured. He remained a prisoner until 1433, exchanged at last for Xaintrailles himself.',
          'Released, he became the sword-arm of Lancastrian France for two decades: Marshal of France for Henry VI, captor and recaptor of towns beyond counting — Pontoise taken across the frozen Oise in 1437, Harfleur recovered in 1440 — and from 1442 Earl of Shrewsbury. The great illuminated "Shrewsbury Book" he presented to Margaret of Anjou for her wedding in 1445 shows the other face of the frontier soldier: a magnate of chivalric letters, kneeling in his Garter robes. When Normandy collapsed in 1449–50 he was a hostage for the surrender of Rouen; released on oath never to bear armour against the French crown again, he had one campaign left.'
        ]
      },
      {
        title: 'Death',
        paragraphs: [
          'In October 1452 Talbot landed in Gascony with a small army and retook Bordeaux, whose citizens preferred their old English allegiance to their new French taxes. The next summer Charles VII\'s armies converged, and Jean Bureau\'s siege force dug a fortified artillery park outside Castillon on the Dordogne. On 17 July 1453, misled by reports that the French were retreating and unwilling to wait for his full strength, Talbot attacked the camp head-on. The guns wrecked the assault columns; a Breton counterattack broke them; and Talbot — unarmoured because of his parole oath — was pinned under his horse when a cannonball killed it, and dispatched with an axe. His son John, Viscount Lisle, refused to leave him and died in the same field. Bordeaux fell that October, ending the Hundred Years\' War; Talbot\'s remains were eventually brought home to Whitchurch in Shropshire.'
        ]
      },
      {
        title: 'Legacy',
        paragraphs: [
          'Castillon made Talbot a legend at the moment it made him obsolete: the last great English captain of the Hundred Years\' War, killed by the gunpowder arm that ended the age of the raid and the longbow. French tradition honoured him — a monument, Notre-Dame de Talbot, long marked the spot where he fell — and English memory enlarged him further; Shakespeare\'s Henry VI, Part 1 built its first act around "the terror of the French" and his death beside his son. For military historians his career frames the collapse of Lancastrian France, from the frontier mastery of the 1430s to the fatal charge against Bureau\'s guns.'
        ]
      }
    ],
    keyAchievements: [
      { title: 'Two decades of frontier command', description: 'Held and retook towns across Normandy and the Île-de-France for Henry VI\'s France, including Pontoise in 1437 and Harfleur in 1440.' },
      { title: 'Recovery of Bordeaux, 1452', description: 'Landed in Gascony and restored English rule in Bordeaux for a final year.' },
      { title: 'The Shrewsbury Book', description: 'Presented the great illuminated Royal MS 15 E vi to Margaret of Anjou in 1445 — the manuscript that preserves his contemporary image.' }
    ],
    timeline: [
      { date: 'c. 1387', title: 'Born', description: 'Born into the Talbot family of Goodrich Castle on the Welsh march, second son of the 4th Baron Talbot.' },
      { date: '1414–1419', title: 'Lieutenant of Ireland', description: 'Governs and campaigns in Ireland for Henry V, gaining his reputation for speed and severity.' },
      { date: '18 June 1429', title: 'Captured at Patay', description: 'The French vanguard destroys the English army in the open after the relief of Orléans; Talbot is taken prisoner for four years.', links: [{ title: 'Battle of Patay', type: 'event', slug: 'battle-of-patay', label: 'His capture' }] },
      { date: '1433', title: 'Exchanged and returns to war', description: 'Freed in exchange for Poton de Xaintrailles; becomes the leading English field commander in France.' },
      { date: '1442', title: 'Created Earl of Shrewsbury', description: 'Raised to an earldom for his service in France; presents the Shrewsbury Book to Margaret of Anjou three years later.' },
      { date: 'October 1452', title: 'Retakes Bordeaux', description: 'Lands in Gascony and recovers Bordeaux, whose citizens open their gates to the old English allegiance.' },
      { date: '17 July 1453', title: 'Killed at Castillon', description: 'Dies charging Jean Bureau\'s entrenched artillery park with his son; the defeat ends the Hundred Years\' War.', links: [{ title: 'Battle of Castillon', type: 'event', slug: 'battle-of-castillon', label: 'His death' }] }
    ],
    relatedEntries: {
      people: [
        { title: 'Joan of Arc', type: 'person', slug: 'joan-of-arc', label: 'Her Loire campaign led to his capture at Patay' },
        { title: 'John, Duke of Bedford', type: 'person', slug: 'john-duke-of-bedford', label: 'The regent he served in France' }
      ],
      events: [
        { title: 'Battle of Patay', type: 'event', slug: 'battle-of-patay', label: 'Captured here, 1429' },
        { title: 'Battle of Castillon', type: 'event', slug: 'battle-of-castillon', label: 'Killed here, 1453' },
        { title: 'Hundred Years\' War', type: 'event', slug: 'hundred-years-war', label: 'The war of his whole career' }
      ],
      locations: [
        { title: 'Kingdom of France', type: 'location', slug: 'kingdom-of-france', label: 'The realm he fought across for thirty years' }
      ]
    },
    sources: [
      { title: 'John Talbot, 1st earl of Shrewsbury — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/John_Talbot,_1st_Earl_of_Shrewsbury' },
      { title: 'John Talbot and the War in France 1427–1453', author: 'A. J. Pollard', type: 'book' },
      { title: 'Wikimedia Commons image record (Talbot Shrewsbury Book presentation scene)', author: 'British Library / Wikimedia Commons', type: 'image source', url: pg('Presentation scene - British Library Royal MS 15 E vi f2v (detail).jpg') }
    ]
  },

  {
    id: 'sigismund-of-luxembourg', type: 'character', name: 'Sigismund of Luxembourg',
    born: 1368, died: 1437, deathAge: '69', causeOfDeath: 'Natural causes',
    restingPlace: 'Oradea (Nagyvárad)',
    location: 'Kingdom of Hungary',
    aliases: ['Sigismund of Hungary', 'Emperor Sigismund'],
    image: fp('Pisanello 024.jpg'),
    summary: 'King of Hungary from 1387, leader of the disastrous Nicopolis crusade of 1396, convener of the Council of Constance, and finally Holy Roman Emperor — the last ruler of the House of Luxembourg.',
    title: 'King of Hungary and Holy Roman Emperor',
    roles: ['King of Hungary', 'King of the Romans and Holy Roman Emperor', 'King of Bohemia', 'Crusade leader at Nicopolis'],
    birth: { date: '15 February 1368', place: { name: 'Nuremberg' }, note: 'Son of Emperor Charles IV of the House of Luxembourg and Elizabeth of Pomerania.' },
    death: { date: '9 December 1437', place: { name: 'Znojmo, Moravia' }, circumstance: 'Died while travelling from Bohemia, having arranged for his son-in-law Albert of Habsburg to succeed him; with him the male line of Luxembourg ended.' },
    quickFacts: { realm: 'Hungary, the Holy Roman Empire, Bohemia', dynasty: 'Luxembourg', culture: 'German-Hungarian (Luxembourg dynasty)', knownFor: 'the Nicopolis crusade, the Council of Constance, and half a century of rule across central Europe' },
    imageInfo: {
      caption: 'Portrait of Emperor Sigismund of Luxembourg in a fur cap, c. 1433, formerly attributed to Pisanello (Kunsthistorisches Museum, Vienna).',
      creator: 'Formerly attributed to Pisanello',
      date: 'c. 1430–1437',
      source: 'Kunsthistorisches Museum, Vienna / Wikimedia Commons',
      sourceUrl: pg('Pisanello 024.jpg'),
      license: 'Public domain',
      note: 'One of the earliest true portraits of a Holy Roman Emperor, made in Sigismund\'s lifetime, though the attribution to Pisanello is no longer accepted by all scholars.'
    },
    overview: [
      'Sigismund of Luxembourg spent fifty years holding together more crowns than any ruler of his age: king of Hungary from 1387, king of the Romans from 1411, king of Bohemia from 1419, and Holy Roman Emperor from 1433. Son of the emperor Charles IV, he won Hungary through marriage to Queen Mary and defended it for the rest of his life against the advancing Ottoman Empire.',
      'That defence produced the catastrophe that marked him: the great crusade he assembled in 1396, the largest of the late Middle Ages, was annihilated by Bayezid I at the Battle of Nicopolis, and Sigismund escaped down the Danube in a fishing boat. His later fame rests on diplomacy rather than arms — above all the Council of Constance (1414–1418), which he forced into being and which ended the Great Schism of the papacy, though at the cost of Jan Hus\'s burning and the Hussite wars that scarred his Bohemian inheritance.'
    ],
    greatestFeats: [
      'Led the Nicopolis crusade of 1396',
      'Convened the Council of Constance that ended the Great Schism',
      'United the crowns of Hungary, Bohemia, and the Empire'
    ],
    contentSections: [
      {
        title: 'Overview',
        paragraphs: [
          'Sigismund of Luxembourg spent fifty years holding together more crowns than any ruler of his age: king of Hungary from 1387, king of the Romans from 1411, king of Bohemia from 1419, and Holy Roman Emperor from 1433. Son of the emperor Charles IV, he won Hungary through marriage to Queen Mary and defended it for the rest of his life against the advancing Ottoman Empire.',
          'That defence produced the catastrophe that marked him: the great crusade he assembled in 1396, the largest of the late Middle Ages, was annihilated by Bayezid I at the Battle of Nicopolis, and Sigismund escaped down the Danube in a fishing boat. His later fame rests on diplomacy rather than arms — above all the Council of Constance (1414–1418), which he forced into being and which ended the Great Schism of the papacy, though at the cost of Jan Hus\'s burning and the Hussite wars that scarred his Bohemian inheritance.'
        ]
      },
      {
        title: 'Birth and early life',
        paragraphs: [
          'Sigismund was born in Nuremberg on 15 February 1368, a younger son of the emperor Charles IV, the Luxembourg ruler who had made Prague the capital of the Empire and issued the Golden Bull of 1356. Betrothed as a child to Mary, heiress of Louis the Great of Hungary and Poland, he was raised partly at the Hungarian court for that inheritance. Winning it proved brutal: after Louis died in 1382 Mary\'s succession collapsed into civil war, her rival Charles of Durazzo was murdered, and Mary and her mother were imprisoned by rebel barons. Sigismund fought his way to the crown of Hungary, being crowned at Székesfehérvár in March 1387, and ruled first alongside Mary and, after her death in 1395, alone.'
        ]
      },
      {
        title: 'Character and Personality',
        paragraphs: [
          'Contemporaries found Sigismund magnificent, charming, and impossible to pin down. Tall, striking, fluent in several languages, he dazzled the courts of Europe on the great diplomatic circuits of 1414–1417 that carried him to Paris, London, and Aragon in pursuit of church union; even hostile observers conceded his energy and his gift for the grand occasion. The Constance chroniclers show a ruler who genuinely drove the council — bullying, mediating, and stage-managing until the schism of three rival popes was ended.',
          'The debts of the style were as visible as its triumphs. He was chronically short of money, pawning towns and offices — including the Brandenburg electorate his father had gathered — to fund his projects; his promises could be flexible, and the safe conduct he issued to Jan Hus, who was burned at Constance in 1415 regardless, left a permanent stain that Czech tradition never forgave. Hungarian and German chroniclers alike noted the gap between his imperial vision and his patience for administration; modern historians tend to see a ruler of real strategic intelligence — the Ottoman danger, the church crisis, and the Hussite problem were all correctly judged — whose resources never matched the scale of his ambitions.'
        ]
      },
      {
        title: 'Nicopolis and the Ottoman frontier',
        paragraphs: [
          'Hungary under Sigismund stood on the front line of Ottoman expansion into the Balkans, and after Bayezid I\'s armies pressed to the Danube he appealed to all Christendom. The response of 1396 was the last great international crusade: French and Burgundian chivalry under John the Fearless, then count of Nevers, joined Sigismund\'s Hungarians, with German, Wallachian, and Hospitaller contingents, and marched down the Danube to besiege the fortress of Nicopolis. On 25 September 1396 Bayezid\'s relieving army destroyed them at the Battle of Nicopolis; the French knights charged uphill against Sigismund\'s advice, broke themselves on the Ottoman lines, and the counterattack swept the field. Sigismund escaped by boat down the Danube and returned home by sea through Constantinople.',
          'The defeat fixed the pattern of his southern policy for forty years: no more grand crusades, but a defensive system of border fortresses, client princes in Serbia, Bosnia, and Wallachia, and the militia and banderial reforms of 1397 and after that reorganised Hungary\'s defence. It bought time rather than victory, but the Danube line he organised — anchored on Belgrade after 1427 — held the Ottoman advance at bay for a generation beyond his death, until the wars of John Hunyadi.'
        ]
      },
      {
        title: 'Empire, Constance, and Bohemia',
        paragraphs: [
          'Elected king of the Romans in 1411, Sigismund made the healing of the Great Schism his imperial mission. He compelled the Pisan pope John XXIII to summon a general council to Constance in 1414, and for four years acted as its protector and chief political engine: the council deposed or accepted the resignation of the three rival popes and elected Martin V in 1417, restoring a single head to the Latin Church for the first time in nearly forty years. It was the greatest diplomatic achievement of the age — and it was bought with the burning of the Czech reformer Jan Hus in 1415, who had come to Constance under Sigismund\'s safe conduct.',
          'Bohemia never forgave it. When his childless brother Wenceslas IV died in 1419, Sigismund inherited the Bohemian crown just as the Hussite revolution exploded; his crusades against the Hussites in the 1420s were repeatedly routed by Jan Žižka\'s war-wagon armies, and only the negotiated Compacts of Basel allowed him to be accepted in Prague in 1436, a year before his death. The imperial crown itself came late: he was crowned Holy Roman Emperor in Rome by Pope Eugenius IV on 31 May 1433, the first emperor crowned there in over eighty years.'
        ]
      },
      {
        title: 'Death',
        paragraphs: [
          'Sigismund died at Znojmo in Moravia on 9 December 1437, aged sixty-nine, while withdrawing from a Bohemia again slipping toward revolt. He had arranged the succession of his son-in-law Albert of Habsburg — husband of his daughter Elizabeth — to Hungary and Bohemia, a settlement that pointed toward the Habsburg future of central Europe. He was buried at Oradea (Nagyvárad) beside the shrine of St Ladislaus, the warrior-king of Hungary he had venerated all his life. With him the House of Luxembourg, which had given the Empire four rulers, ended in the male line.'
        ]
      },
      {
        title: 'Legacy',
        paragraphs: [
          'Sigismund\'s reign linked every great crisis of his era: the Ottoman advance he failed to stop at Nicopolis but contained on the Danube; the papal schism he ended at Constance; the Hussite storm his own safe conduct helped ignite. Hungarian historiography remembers a king of fifty years who reorganised the realm\'s defences and raised Buda into a great royal capital; Czech tradition remembers the "ginger fox" who betrayed Hus. Both are him. His dynastic settlement carried the crowns of Hungary and Bohemia to the Habsburgs through Albert, prefiguring the central European monarchy of later centuries, and his portrait in the Vienna Kunsthistorisches Museum stands among the first true likenesses of any emperor.'
        ]
      }
    ],
    keyAchievements: [
      { title: 'The Council of Constance', description: 'Forced the general council of 1414–1418 into being and steered it to the end of the Great Schism.' },
      { title: 'Defence of the Danube frontier', description: 'After Nicopolis, built the fortress and client-state system that held the Ottoman advance for a generation.' },
      { title: 'Union of three crowns', description: 'Ruled Hungary from 1387, the Empire from 1411, and Bohemia from 1419, crowned emperor in Rome in 1433.' }
    ],
    timeline: [
      { date: '15 February 1368', title: 'Born in Nuremberg', description: 'Born a younger son of Emperor Charles IV, the Luxembourg builder of Golden-Bull Prague.' },
      { date: '31 March 1387', title: 'Crowned King of Hungary', description: 'Crowned at Székesfehérvár after fighting through the succession chaos that followed Louis the Great\'s death; rules first with his wife Queen Mary.' },
      { date: '25 September 1396', title: 'Disaster at Nicopolis', description: 'His great international crusade is destroyed by Bayezid I at the Battle of Nicopolis; Sigismund escapes down the Danube by boat.', links: [{ title: 'Battle of Nicopolis', type: 'event', slug: 'battle-of-nicopolis', label: 'His crusade\'s destruction' }] },
      { date: '1411', title: 'King of the Romans', description: 'Elected ruler of the Holy Roman Empire and turns to the crisis of the divided papacy.' },
      { date: '1414–1418', title: 'Council of Constance', description: 'Convenes and protects the council that ends the Great Schism and elects Martin V — and that burns Jan Hus in 1415 despite his safe conduct.' },
      { date: '31 May 1433', title: 'Crowned Holy Roman Emperor', description: 'Crowned in Rome by Pope Eugenius IV, the first imperial coronation there in more than eighty years.' },
      { date: '9 December 1437', title: 'Dies at Znojmo', description: 'Dies in Moravia after securing the succession of his son-in-law Albert of Habsburg; the male line of Luxembourg ends.' }
    ],
    relatedEntries: {
      people: [
        { title: 'Bayezid I', type: 'person', slug: 'bayezid-i', label: 'Destroyed his crusade at Nicopolis' },
        { title: 'John the Fearless', type: 'person', slug: 'john-the-fearless', label: 'Led the Franco-Burgundian crusaders under him in 1396' },
        { title: 'Louis I of Hungary', type: 'person', slug: 'louis-i-of-hungary', label: 'Father of Queen Mary, whose inheritance made him king' }
      ],
      events: [
        { title: 'Battle of Nicopolis', type: 'event', slug: 'battle-of-nicopolis', label: 'Commanded the crusader army, 1396' }
      ],
      locations: [
        { title: 'Holy Roman Empire', type: 'location', slug: 'holy-roman-empire', label: 'The empire he ruled from 1411' },
        { title: 'Ottoman Empire', type: 'location', slug: 'ottoman-empire', label: 'The power he fought on the Danube for forty years' }
      ]
    },
    sources: [
      { title: 'Sigismund | Holy Roman emperor', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/biography/Sigismund-Holy-Roman-emperor' },
      { title: 'Sigismund, Holy Roman Emperor — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Sigismund,_Holy_Roman_Emperor' },
      { title: 'Wikimedia Commons image record (Kunsthistorisches Museum portrait)', author: 'Wikimedia Commons', type: 'image source', url: pg('Pisanello 024.jpg') }
    ],
    isRuler: true,
    succession: {
      office: 'King of Hungary',
      note: 'Succession shown for the Hungarian kingship, held from 1387; Sigismund also became King of the Romans (1411), King of Bohemia (1419), and Holy Roman Emperor (1433).',
      predecessor: { displayName: 'Mary of Hungary', note: 'Queen regnant of Hungary from 1382 and Sigismund\'s wife; he was crowned king in 1387 and ruled beside her until her death in 1395.' },
      successor: { displayName: 'Albert II of Germany', note: 'His son-in-law Albert of Habsburg, who succeeded to Hungary and Bohemia on Sigismund\'s death in 1437.' }
    }
  },

  {
    id: 'john-the-fearless', type: 'character', name: 'John the Fearless',
    born: 1371, died: 1419, deathAge: '48', causeOfDeath: 'Murdered at Montereau',
    restingPlace: 'Charterhouse of Champmol, Dijon',
    location: 'Duchy of Burgundy',
    aliases: ['John of Nevers', 'Jean sans Peur'],
    image: fp('John II, Duke of Burgundy.jpg'),
    summary: 'Duke of Burgundy who won his epithet as the captured crusader of Nicopolis, ordered the murder of Louis of Orléans, plunged France into the Armagnac–Burgundian civil war, and was himself murdered on the bridge at Montereau in 1419.',
    title: 'Duke of Burgundy',
    roles: ['Duke of Burgundy', 'Crusader at Nicopolis', 'Leader of the Burgundian faction in the French civil war'],
    birth: { date: '28 May 1371', place: { name: 'Dijon' }, note: 'Eldest son of Philip the Bold, first Valois duke of Burgundy, and Margaret of Flanders.' },
    death: { date: '10 September 1419', place: { name: 'Montereau, France' }, circumstance: 'Cut down by the dauphin\'s companions during a parley on the bridge at Montereau — a murder that drove his son Philip the Good into alliance with Henry V of England.' },
    quickFacts: { realm: 'Duchy of Burgundy and the Burgundian Low Countries', dynasty: 'Valois-Burgundy', culture: 'French-Burgundian', knownFor: 'Nicopolis, the murder of Louis of Orléans, and his own murder at Montereau' },
    imageInfo: {
      caption: 'Portrait of John the Fearless, Duke of Burgundy, after Jean Malouel (Musée du Louvre).',
      creator: 'Anonymous, after Jean Malouel',
      date: 'early 15th century (the portrait type dates from the duke\'s lifetime)',
      source: 'Musée du Louvre / Wikimedia Commons',
      sourceUrl: pg('John II, Duke of Burgundy.jpg'),
      license: 'Public domain',
      note: 'The standard portrait type of the duke, deriving from his court painter Jean Malouel; surviving versions are early copies of a likeness made in his lifetime.'
    },
    overview: [
      'John the Fearless ruled Burgundy for fifteen years and dominated — and poisoned — French politics for all of them. He earned his epithet young: as Count of Nevers he led the Franco-Burgundian chivalry on the Nicopolis crusade of 1396, charged the Ottoman army against all advice, and survived the massacre of the prisoners because his captors knew what his ransom was worth.',
      'As duke from 1404 he fought his cousin Louis of Orléans for control of mad Charles VI\'s kingdom, and in 1407 settled the quarrel with hired killers in a Paris street. The murder split France into Armagnac and Burgundian camps whose civil war opened the door to Henry V of England. On 10 September 1419, meeting the dauphin Charles for a reconciliation on the bridge at Montereau, John was struck down in his turn — and his son Philip the Good took Burgundy into the English alliance that nearly unmade France.'
    ],
    greatestFeats: [
      'Led the Franco-Burgundian crusaders at Nicopolis',
      'Dominated Paris and the government of Charles VI\'s France',
      'Built the Burgundian faction that shaped the Hundred Years\' War'
    ],
    contentSections: [
      {
        title: 'Overview',
        paragraphs: [
          'John the Fearless ruled Burgundy for fifteen years and dominated — and poisoned — French politics for all of them. He earned his epithet young: as Count of Nevers he led the Franco-Burgundian chivalry on the Nicopolis crusade of 1396, charged the Ottoman army against all advice, and survived the massacre of the prisoners because his captors knew what his ransom was worth.',
          'As duke from 1404 he fought his cousin Louis of Orléans for control of mad Charles VI\'s kingdom, and in 1407 settled the quarrel with hired killers in a Paris street. The murder split France into Armagnac and Burgundian camps whose civil war opened the door to Henry V of England. On 10 September 1419, meeting the dauphin Charles for a reconciliation on the bridge at Montereau, John was struck down in his turn — and his son Philip the Good took Burgundy into the English alliance that nearly unmade France.'
        ]
      },
      {
        title: 'Birth and early life',
        paragraphs: [
          'John was born at Dijon on 28 May 1371, eldest son of Philip the Bold — youngest son of King John II of France and first Valois duke of Burgundy — and of Margaret of Flanders, whose inheritance brought the rich cities of the Low Countries into the Burgundian orbit. As Count of Nevers he was groomed for the crusade that would make his name: in 1396 he took command, at twenty-five, of the French and Burgundian contingent that joined Sigismund of Hungary\'s great expedition against Bayezid I. At the Battle of Nicopolis the western knights insisted on charging first and were destroyed; John fought well enough in the disaster for later tradition to coin the epithet "the Fearless", and was one of the few nobles spared in the mass execution of prisoners, ransomed home in 1397–98 for a sum that strained even Burgundian finances.'
        ]
      },
      {
        title: 'Character and Personality',
        paragraphs: [
          'Burgundian writers celebrated the courage that Nicopolis advertised and their duke\'s common touch — John cultivated the guilds, butchers, and university of Paris, posed as the enemy of courtly corruption, and was genuinely popular in the capital in ways his glittering father never sought. He was also, by the agreement of every party, a ruler of secretive, suspicious intensity: small, unimpressive in person beside his rival Louis of Orléans, he worked through calculation, propaganda, and patience. His chosen emblems said it plainly — the carpenter\'s plane, adopted to answer Orléans\'s knotted club, promised to shave his enemies smooth.',
          'The murder of 1407 defines him because he defined himself by it. Far from hiding, John admitted the deed within days and had the theologian Jean Petit argue publicly in 1408 that killing a "tyrant" was lawful — one of the most notorious justifications of political murder of the Middle Ages. Chroniclers of the Armagnac side painted him as treacherous beyond redemption; even Burgundian ones concede the ruthlessness. Modern historians, following Richard Vaughan, tend to see a formidably able politician whose one great crime locked France into the civil war he could exploit but never end — and which, on the bridge at Montereau, ended him.'
        ]
      },
      {
        title: 'Burgundy against Orléans: the French civil war',
        paragraphs: [
          'Succeeding his father as duke in 1404, John inherited Burgundy, Flanders, and his father\'s claim to govern France during the recurring madness of King Charles VI. His rival was the king\'s brother Louis, Duke of Orléans, and their struggle over the regency, the royal treasury, and war policy toward England escalated past reconciliation: on 23 November 1407, assassins in John\'s pay ambushed Orléans in the rue Vieille-du-Temple in Paris and hacked him down. After a brief exile from favour, John returned to dominate the capital, backed by the Parisian populace and legitimised by Jean Petit\'s defence of tyrannicide.',
          'The dead duke\'s cause passed to his son Charles of Orléans and his father-in-law Bernard of Armagnac, and France split into Burgundian and Armagnac factions in open civil war. John rode popular movements like the Cabochien revolt of 1413 until they turned to riot and cost him Paris; the Armagnacs held the government when Henry V of England invaded in 1415, and John kept Burgundy\'s knights home from the campaign that ended at the Battle of Agincourt — his brothers Anthony and Philip of Nevers died there. In 1418 his partisans retook Paris in a bloodbath of Armagnac prisoners, and John, holding the mad king and the capital, faced a new France divided between his enemies: the young dauphin Charles at Bourges, and the English king conquering Normandy town by town.'
        ]
      },
      {
        title: 'Death',
        paragraphs: [
          'With Henry V advancing after the fall of Rouen, John and the sixteen-year-old dauphin Charles — the future Charles VII — agreed to meet and settle the civil war. On 10 September 1419, on the bridge at Montereau where the Yonne meets the Seine, the two parties met inside a wooden enclosure; words were exchanged, and the dauphin\'s companions, led by Tanguy du Châtel, cut the duke down with axe and sword. Whether it was planned vengeance for Orléans or a parley that exploded no source settles beyond doubt; the dauphin\'s party called it justice, everyone else called it murder. A century later a Carthusian prior at Dijon, showing François I the duke\'s broken skull, delivered the epitaph history kept: "this is the hole through which the English entered France."'
        ]
      },
      {
        title: 'Legacy',
        paragraphs: [
          'Montereau accomplished what John\'s whole career had threatened: it married Burgundy to England. His son Philip the Good sealed the alliance with Henry V in the Treaty of Troyes of 1420, which disinherited the dauphin and made the English king heir of France; for fifteen years Lancastrian France stood on the foundation of the murdered duke\'s feud. John\'s tomb at the Charterhouse of Champmol in Dijon, with its alabaster mourners, remains one of the masterworks of Burgundian sculpture, and his reign marks the moment the Valois dukes of Burgundy stopped being French princes first — the state-building of Philip the Good and Charles the Bold grew directly from the ambitions and enmities John left behind.'
        ]
      }
    ],
    keyAchievements: [
      { title: 'Survived Nicopolis', description: 'Commanded the western chivalry on the 1396 crusade and returned from Ottoman captivity with the epithet "the Fearless".' },
      { title: 'Mastery of Paris', description: 'Controlled the capital and the government of Charles VI for long stretches between 1408 and 1419.' },
      { title: 'The Burgundian state', description: 'Consolidated the Burgundy–Flanders power bloc whose weight decided the next phase of the Hundred Years\' War.' }
    ],
    timeline: [
      { date: '28 May 1371', title: 'Born at Dijon', description: 'Born eldest son of Philip the Bold, first Valois duke of Burgundy, and Margaret of Flanders.' },
      { date: '25 September 1396', title: 'Captured at Nicopolis', description: 'Leads the Franco-Burgundian crusaders at the Battle of Nicopolis; the charge fails, and he is held for a crushing ransom until 1397–98.', links: [{ title: 'Battle of Nicopolis', type: 'event', slug: 'battle-of-nicopolis', label: 'His crusade and capture' }] },
      { date: '27 April 1404', title: 'Duke of Burgundy', description: 'Succeeds Philip the Bold and takes up the struggle with Louis of Orléans for control of Charles VI\'s France.' },
      { date: '23 November 1407', title: 'Murder of Louis of Orléans', description: 'His hired killers cut down the king\'s brother in the rue Vieille-du-Temple; Jean Petit\'s tyrannicide defence follows in 1408.' },
      { date: '1413', title: 'Loses Paris to the Armagnacs', description: 'The Cabochien revolt he encouraged collapses into riot, and John withdraws from the capital as the Armagnac faction takes the government.' },
      { date: '29 May 1418', title: 'Retakes Paris', description: 'His partisans seize the capital amid massacres of Armagnac prisoners; John controls the king while Henry V conquers Normandy.' },
      { date: '10 September 1419', title: 'Murdered at Montereau', description: 'Killed by the dauphin\'s companions during a parley on the bridge at Montereau; Burgundy passes to Philip the Good and into alliance with England.' }
    ],
    relatedEntries: {
      people: [
        { title: 'Sigismund of Luxembourg', type: 'person', slug: 'sigismund-of-luxembourg', label: 'Commanded the crusade he joined in 1396' },
        { title: 'Bayezid I', type: 'person', slug: 'bayezid-i', label: 'His captor after Nicopolis' },
        { title: 'Charles VII of France', type: 'person', slug: 'charles-vii-of-france', label: 'The dauphin at whose parley he was murdered' },
        { title: 'Henry V of England', type: 'person', slug: 'henry-v-of-england', label: 'His murder drove Burgundy into this king\'s alliance' }
      ],
      events: [
        { title: 'Battle of Nicopolis', type: 'event', slug: 'battle-of-nicopolis', label: 'Commanded the western crusaders, 1396' },
        { title: 'Battle of Agincourt', type: 'event', slug: 'battle-of-agincourt', label: 'Stayed away, but his brothers died there' }
      ],
      locations: [
        { title: 'Kingdom of France', type: 'location', slug: 'kingdom-of-france', label: 'The realm his feud tore in two' }
      ]
    },
    sources: [
      { title: 'John the Fearless — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/John_the_Fearless' },
      { title: 'John the Fearless: The Growth of Burgundian Power', author: 'Richard Vaughan', type: 'book' },
      { title: 'Wikimedia Commons image record (Louvre portrait after Jean Malouel)', author: 'Musée du Louvre / Wikimedia Commons', type: 'image source', url: pg('John II, Duke of Burgundy.jpg') }
    ],
    isRuler: true,
    succession: {
      office: 'Duke of Burgundy',
      predecessor: { displayName: 'Philip the Bold', note: 'His father, youngest son of John II of France and first Valois duke of Burgundy, who died in 1404.' },
      successor: { displayName: 'Philip the Good', note: 'His son, who answered the murder at Montereau by allying Burgundy with Henry V of England in the Treaty of Troyes of 1420.' }
    }
  },

  {
    id: 'batu-khan', type: 'character', name: 'Batu Khan',
    born: 1205, died: 1255, deathAge: 'about 50', causeOfDeath: 'Natural causes (as recorded)',
    restingPlace: 'Unknown; the Jochid heartland on the lower Volga',
    location: 'Golden Horde',
    aliases: ['Batu', 'Sain Khan'],
    image: fp('Batu Khan on the Throne by Rashid al-Din.jpg'),
    summary: 'Grandson of Genghis Khan who commanded the Mongol western campaign of 1236–1242, crushed Hungary at Mohi, and founded the Golden Horde that dominated the Rus\' lands for over two centuries.',
    title: 'Khan of the Golden Horde',
    roles: ['Commander of the Mongol western campaign', 'Khan of the Golden Horde'],
    birth: { date: 'c. 1205', note: 'Son of Jochi, eldest son of Genghis Khan; the sources record neither the place of his birth nor a precise date.' },
    death: { date: 'c. 1255', place: { name: 'The lower Volga' }, circumstance: 'Died in his own horde on the Volga around 1255, the dates given by the Persian and Rus\' sources varying by a year or two; his burial place is not known.' },
    quickFacts: { realm: 'The Golden Horde (Jochid ulus)', dynasty: 'Borjigin (house of Jochi)', culture: 'Mongol', knownFor: 'the conquest of the Rus\' lands, the invasion of Hungary, and founding the Golden Horde' },
    imageInfo: {
      caption: 'Batu Khan enthroned, from a fifteenth-century copy of Rashid al-Din\'s Jami\' al-tawarikh (Compendium of Chronicles).',
      creator: 'Workshop of Rashid al-Din Hamadani',
      date: 'c. 1300 original; this copy c. 1430–1434',
      source: 'Bibliothèque nationale de France / Wikimedia Commons',
      sourceUrl: pg('Batu Khan on the Throne by Rashid al-Din.jpg'),
      license: 'Public domain',
      note: 'A Persian miniature made two generations after Batu\'s death — a conventional image of Mongol kingship, not a likeness from life.'
    },
    overview: [
      'Batu Khan led the largest sustained westward assault the Mongol Empire ever mounted. As son of Jochi and grandson of Genghis Khan, he was given the westernmost inheritance of the empire, and between 1236 and 1242 — with the veteran general Subutai directing strategy — his armies destroyed Volga Bulgaria, burned the cities of the Rus\' from Ryazan to Kiev, and broke the field armies of Poland and Hungary within days of each other in April 1241.',
      'The Battle of Mohi left Hungary open to a year of devastation; only the news of the great khan Ögedei\'s death turned the armies east in 1242. Batu never returned to Europe. Instead he built a state: from Sarai on the lower Volga he ruled the Jochid ulus — the Golden Horde — as khan and imperial kingmaker, holding the Rus\' princes as tributaries and deciding the imperial succession itself when he raised Möngke to the throne in 1251.'
    ],
    greatestFeats: [
      'Commanded the Mongol conquest of the Rus\' lands, 1237–1240',
      'Destroyed the Hungarian royal army at Mohi in 1241',
      'Founded the Golden Horde on the lower Volga'
    ],
    contentSections: [
      {
        title: 'Overview',
        paragraphs: [
          'Batu Khan led the largest sustained westward assault the Mongol Empire ever mounted. As son of Jochi and grandson of Genghis Khan, he was given the westernmost inheritance of the empire, and between 1236 and 1242 — with the veteran general Subutai directing strategy — his armies destroyed Volga Bulgaria, burned the cities of the Rus\' from Ryazan to Kiev, and broke the field armies of Poland and Hungary within days of each other in April 1241.',
          'The Battle of Mohi left Hungary open to a year of devastation; only the news of the great khan Ögedei\'s death turned the armies east in 1242. Batu never returned to Europe. Instead he built a state: from Sarai on the lower Volga he ruled the Jochid ulus — the Golden Horde — as khan and imperial kingmaker, holding the Rus\' princes as tributaries and deciding the imperial succession itself when he raised Möngke to the throne in 1251.'
        ]
      },
      {
        title: 'Birth and early life',
        paragraphs: [
          'Batu was born around 1205, a son of Jochi, the eldest and most contested of Genghis Khan\'s sons — the whispers about Jochi\'s paternity, born after his mother Börte\'s captivity, shadowed the whole line. The sources name no birthplace and no reliable birth year; like most of the early Chinggisid princes he is visible only where the Persian historians Juvaini and Rashid al-Din, the Rus\' chronicles, or the Secret History happen to light him up. When Jochi died shortly before Genghis in 1227, Batu received the paternal inheritance: the lands "as far west as Mongol hooves had trodden" — a grant that was less a territory than an instruction to conquer one.'
        ]
      },
      {
        title: 'Character and Personality',
        paragraphs: [
          'The tradition that reached the Persian historians remembered Batu as "Sain Khan" — the Good or Wise Khan — a byname that reflected his reputation for generosity and rough justice within the Horde rather than any gentleness toward enemies; the Rus\' chronicles, written by the conquered, record the same man as the destroyer of Ryazan, Vladimir, and Kiev. Both portraits are source-bound and both are true to their vantage: to his own people a steady, open-handed lord; to the lands he broke, a catastrophe.',
          'What the records agree on is political weight rather than battlefield brilliance. The friar William of Rubruck, who saw him in the 1250s, noted his commanding presence and compared his state to a court of kings; Juvaini stresses the deference even reigning khans paid him. His feuds were dynastic and he pursued them with patience — the drunken quarrel at the victory feast on the western campaign, when his cousins Güyük and Büri insulted him, became a decade-long enmity that Batu settled not with armies but by outliving Güyük and installing Möngke as great khan in 1251. Strategy on campaign he was content to leave to Subutai; power he kept for himself.'
        ]
      },
      {
        title: 'The western campaign and Mohi',
        paragraphs: [
          'The great western campaign decreed by the khan Ögedei began in 1236: a coalition of Chinggisid princes nominally under Batu, with Subutai as its operational brain. Volga Bulgaria was destroyed first; then, in the winters of 1237–38 and 1239–40 — the Mongols deliberately campaigned when the rivers froze — the cities of the Rus\' fell one after another: Ryazan, Vladimir, Torzhok, and in December 1240 Kiev itself, stormed and sacked so thoroughly that travellers years later reported fields of bones. The Rus\' principalities passed under a tributary yoke that would last more than two centuries.',
          'In 1241 the army split to strike Latin Europe. A northern wing shattered the Polish-Silesian host at Legnica on 9 April; two days later Batu and Subutai destroyed King Béla IV of Hungary\'s army at the Battle of Mohi on the Sajó river, forcing the bridge in a night operation while Subutai\'s wing crossed downstream to envelop the Hungarian camp. Hungary was ravaged for a year and Béla hunted to the Adriatic. Then, in the spring of 1242, word came that Ögedei had died in Mongolia in December 1241, and the whole army withdrew through the Balkans to the steppe. Whether the succession alone caused the withdrawal is still argued — pasture, losses, and the campaign\'s design all get weight in modern accounts — but Europe was never invaded on that scale again.'
        ]
      },
      {
        title: 'Khan of the Golden Horde',
        paragraphs: [
          'From 1242 until his death Batu ruled his father\'s ulus from the lower Volga, where the city of Sarai grew up as his capital — the seat of what later centuries called the Golden Horde. The Rus\' princes travelled there to receive their patents to rule: Yaroslav of Vladimir came, and so, famously, did Alexander Nevsky, whom Batu\'s court confirmed and used. Tribute, census, and the yarlik system of investiture — the machinery of two hundred years of Mongol overlordship over the Rus\' lands — took shape under him.',
          'Within the empire he was the kingmaker. He refused for years to attend the election of his enemy Güyük, and the two were near open war when Güyük died in 1248. Batu then threw the weight of the Jochid ulus behind Möngke, son of Tolui, and the assembly of 1251 that crowned him — and the purge of the Ögedeid princes that followed — made Batu effectively co-ruler of the empire, supreme in its western half. The aqa, the senior prince of the Chinggisids: that, more than any battle, is what Batu had become by his last years.'
        ]
      },
      {
        title: 'Death',
        paragraphs: [
          'Batu died on the lower Volga around 1255 — the Persian and Rus\' sources scatter the date between 1255 and 1256, and record no dramatic circumstance; he seems simply to have died in his own horde, in his fifties. His burial place is unknown, as is usual for the Chinggisids, whose graves were concealed. The great khan Möngke confirmed Batu\'s son Sartaq — reported by Rubruck to be sympathetic to Christianity — as his successor, but Sartaq died within a year or two, and after the brief reign of the boy Ulaghchi the Horde passed to Batu\'s brother Berke, under whom it turned toward Islam.'
        ]
      },
      {
        title: 'Legacy',
        paragraphs: [
          'Batu\'s campaign redrew eastern Europe. The sack of Kiev ended the old Rus\' world and shifted its weight north toward Vladimir and, eventually, Moscow — whose princes rose precisely as tax-gatherers and clients of the Horde Batu founded. Hungary rebuilt itself in stone against his return, as Béla IV\'s castle-building programme attests. The state he left on the Volga outlasted every other Mongol successor khanate in the west, shaping the politics, trade, and vocabulary of the steppe frontier into the fifteenth century; when Rus\' bookmen later wrote of the "Tatar yoke", it was Batu\'s achievement they were naming.'
        ]
      }
    ],
    keyAchievements: [
      { title: 'Conquest of the Rus\'', description: 'Directed the winter campaigns of 1237–1240 that took Ryazan, Vladimir, and Kiev and made the Rus\' principalities tributaries.' },
      { title: 'Victory at Mohi', description: 'With Subutai, destroyed the Hungarian royal army on the Sajó in April 1241.' },
      { title: 'Founding of the Golden Horde', description: 'Built Sarai on the lower Volga into the capital of the Jochid ulus and its system of tribute and investiture.' }
    ],
    timeline: [
      { date: 'c. 1205', title: 'Born', description: 'Born a son of Jochi and grandson of Genghis Khan; no source records where.' },
      { date: '1227', title: 'Inherits the Jochid ulus', description: 'On the deaths of Jochi and Genghis Khan, receives the westernmost inheritance of the empire — with a mandate to extend it.' },
      { date: '1236–1240', title: 'Conquest of Volga Bulgaria and the Rus\'', description: 'Destroys Volga Bulgaria, then takes the Rus\' cities in winter campaigns ending with the sack of Kiev in December 1240.' },
      { date: '11 April 1241', title: 'Victory at Mohi', description: 'With Subutai, forces the Sajó crossing by night and envelops Béla IV\'s army at the Battle of Mohi; Hungary is ravaged for a year.', links: [{ title: 'Battle of Mohi', type: 'event', slug: 'battle-of-mohi', label: 'His great victory' }] },
      { date: '1242', title: 'Withdrawal from Europe', description: 'Turns the armies east on news of the great khan Ögedei\'s death and settles on the lower Volga, where Sarai becomes his capital.' },
      { date: '1251', title: 'Kingmaker of the empire', description: 'Throws Jochid support behind Möngke\'s election as great khan, becoming the senior prince of the Chinggisids and master of the empire\'s west.' },
      { date: 'c. 1255', title: 'Dies on the Volga', description: 'Dies in his horde; his son Sartaq is confirmed as successor by Möngke but survives him only briefly.' }
    ],
    relatedEntries: {
      people: [
        { title: 'Subutai', type: 'person', slug: 'subutai', label: 'The strategist of his western campaign' },
        { title: 'Béla IV of Hungary', type: 'person', slug: 'bela-iv-of-hungary', label: 'The king he defeated at Mohi' }
      ],
      events: [
        { title: 'Battle of Mohi', type: 'event', slug: 'battle-of-mohi', label: 'Commanded the Mongol army, 1241' }
      ],
      locations: [
        { title: 'Kievan Rus\'', type: 'location', slug: 'kievan-rus', label: 'The lands his campaigns made tributary' }
      ]
    },
    sources: [
      { title: 'Batu | Mongol ruler', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/biography/Batu' },
      { title: 'Batu Khan — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Batu_Khan' },
      { title: 'The Mongols and the Islamic World', author: 'Peter Jackson', type: 'book' }
    ],
    isRuler: true,
    succession: {
      office: 'Khan of the Golden Horde',
      predecessor: { status: 'none', displayName: 'None as khan of the Golden Horde', note: 'Batu founded the Horde: he was the first ruler of the Jochid ulus as a settled khanate on the Volga, built from his father Jochi\'s inheritance after the western campaign of 1236–1242.' },
      successor: { displayName: 'Sartaq Khan', note: 'His son, confirmed by the great khan Möngke but dead within a year or two of Batu; the Horde soon passed to Batu\'s brother Berke.' }
    }
  },

  {
    id: 'subutai', type: 'character', name: 'Subutai',
    born: 1175, died: 1248, deathAge: 'about 72', causeOfDeath: 'Natural causes',
    restingPlace: 'Unknown; he retired to the Tuul river region of Mongolia',
    location: 'Mongol Empire',
    aliases: ['Sübötei', 'Subotai', 'Subedei'],
    image: fp('Subudei.jpg'),
    summary: 'Genghis Khan\'s greatest general — the strategist of the Kalka raid, the conquest of the Jin, and the European campaign of 1236–1242, who planned the coordinated destruction of Poland and Hungary in a single week.',
    title: 'Mongol general and strategist',
    roles: ['General of Genghis Khan and Ögedei', 'Strategist of the Mongol western campaign'],
    birth: { date: 'c. 1175', note: 'Born into the Uriankhai people of the Mongolian forest fringe; tradition makes his family blacksmiths who attached themselves early to Temüjin, the future Genghis Khan.' },
    death: { date: 'c. 1248', place: { name: 'Mongolia' }, circumstance: 'Died in retirement on the steppe around 1248, in his seventies — one of the few great conquerors of the age to die neither in battle nor in politics.' },
    quickFacts: { realm: 'The Mongol Empire', dynasty: 'None — Uriankhai commoner by birth', culture: 'Mongol (Uriankhai)', knownFor: 'directing Mongol grand strategy from China to Hungary, including the victory at Mohi' },
    imageInfo: {
      caption: 'Subutai as imagined in a Chinese drawing of the sixteenth century.',
      creator: 'Unknown Chinese artist',
      date: '16th century',
      source: 'Wikimedia Commons',
      sourceUrl: pg('Subudei.jpg'),
      license: 'Public domain',
      note: 'A later East Asian depiction, made some three centuries after Subutai\'s death; no contemporary portrait of him exists.'
    },
    overview: [
      'Subutai was the finest general the Mongol Empire produced, and by the reckoning of many military historians one of the most effective commanders in recorded history. A commoner of the forest Uriankhai who joined Temüjin\'s following as a boy, he rose through ability alone to membership among the khan\'s "four dogs of war" and to independent command of campaigns fought a continent apart.',
      'His signature was the coordinated deep operation: the pursuit of the Khwarazm-shah across Persia, the great reconnaissance ride around the Caspian that annihilated a Rus\'-Cuman army at the Kalka in 1223, the final destruction of Jin China in 1233–34, and the western campaign of 1236–1242, in which armies moving hundreds of kilometres apart crushed Poland at Legnica and Hungary at Mohi within forty-eight hours of each other — a synchronisation European warfare could not answer.'
    ],
    greatestFeats: [
      'Rode around the Caspian and destroyed the Rus\'-Cuman army at the Kalka in 1223',
      'Planned the twin strikes on Poland and Hungary in April 1241',
      'Directed the fall of the Jin capital Kaifeng in 1233'
    ],
    contentSections: [
      {
        title: 'Overview',
        paragraphs: [
          'Subutai was the finest general the Mongol Empire produced, and by the reckoning of many military historians one of the most effective commanders in recorded history. A commoner of the forest Uriankhai who joined Temüjin\'s following as a boy, he rose through ability alone to membership among the khan\'s "four dogs of war" and to independent command of campaigns fought a continent apart.',
          'His signature was the coordinated deep operation: the pursuit of the Khwarazm-shah across Persia, the great reconnaissance ride around the Caspian that annihilated a Rus\'-Cuman army at the Kalka in 1223, the final destruction of Jin China in 1233–34, and the western campaign of 1236–1242, in which armies moving hundreds of kilometres apart crushed Poland at Legnica and Hungary at Mohi within forty-eight hours of each other — a synchronisation European warfare could not answer.'
        ]
      },
      {
        title: 'Birth and early life',
        paragraphs: [
          'Subutai was born around 1175 among the Uriankhai, a people of the forest fringe northwest of the Mongol heartland — outsiders to the steppe aristocracy. The Secret History of the Mongols has his family attached to Temüjin\'s from early days, his elder brother Jelme serving first, and tradition (recorded in the Chinese sources) makes them blacksmiths. He joined the future Genghis Khan as a boy of about fourteen and held the humblest posts — keeper of the tent door, by his own later boast — before proving himself in the wars that unified the steppe, above all in the long hunt for the Merkits. Nothing about his origins predicted command; everything about the Mongol system, which promoted by tested ability, explains it.'
        ]
      },
      {
        title: 'Character and Personality',
        paragraphs: [
          'The sources remember Subutai through his craft. The Secret History records the exchange that fixed his image: sent against the Merkits, he promised Genghis Khan to be "a rat gathering up others\' leavings, a crow picking at things outside" — the self-portrait of a man who won by information, patience, and preparation rather than display. The Chinese biographies in the Yuan shi describe a heavy, taciturn veteran who in later life could no longer ride at speed and travelled the Hungarian campaign in an iron-framed wagon, still out-thinking every army sent against him.',
          'Two traits stand out in the record. He was implacable in execution — the deception at the Kalka, where a feigned nine-day retreat stretched the Rus\' princes to destruction, and the massacre that followed, are his work as much as any battle honour. And he was uninterested in power: alone among the great figures of the empire he founded no faction, took no ulus, and served four rulers — Genghis, Ögedei, Güyük, and the regency — without a recorded act of political ambition, retiring at last to his herds by the Tuul river. At Mohi, when the assault on the bridge stalled, the Yuan shi has him shame the princes by pressing on while Batu wavered; the anecdote may be polished, but it is how the Mongols themselves chose to remember him.'
        ]
      },
      {
        title: 'Campaigns from China to the Kalka',
        paragraphs: [
          'Subutai\'s independent reputation was made in the west. When Genghis Khan destroyed the Khwarazmian empire in 1219–1221, Subutai and Jebe led the flying columns that hunted Shah Muhammad to his death on a Caspian island; then, with the khan\'s leave, the two generals took perhaps twenty thousand riders on the most audacious reconnaissance in medieval history — through Azerbaijan and Georgia, over the Caucasus in winter, and onto the steppe, defeating every army that met them. On 31 May 1223, on the Kalka river above the Sea of Azov, they annihilated the combined host of the Rus\' princes and the Cumans after a feigned retreat lasting nine days; Prince Mstislav of Kiev surrendered and was crushed under the victory platform. The raid mapped Europe\'s eastern approaches for the invasion Subutai would lead back, fifteen years later.',
          'In between, he served wherever the empire\'s heaviest fighting was. Under Ögedei he directed the last campaigns against Jin China, including the siege of the capital Kaifeng in 1232–33, coordinating with Song allies and reducing the greatest fortified cities of the age. The range is the point: no other commander of the era fought — and won — set-piece wars in Persia, China, the steppe, and Europe.'
        ]
      },
      {
        title: 'The European campaign and Mohi',
        paragraphs: [
          'The western campaign of 1236–1242 was nominally Batu Khan\'s; its design was Subutai\'s. Volga Bulgaria, the Kipchak steppe, and the Rus\' cities were reduced in sequence — Ryazan and Vladimir in the winter of 1237–38, Kiev in December 1240 — with the campaigns deliberately timed for frozen rivers. In 1241 he split the army: a northern wing wrecked Poland and its Silesian host at Legnica on 9 April, while the main body entered Hungary through the Carpathian passes on a converging timetable. Two days after Legnica, at the Battle of Mohi on the Sajó, Subutai took his wing across the river on a hastily built bridge downstream while Batu stormed the main crossing, enveloping King Béla IV\'s fortified camp at dawn; the Hungarian army was destroyed trying to escape down a corridor the Mongols left deliberately open.',
          'The withdrawal of 1242, after news of Ögedei\'s death, closed the campaign. Subutai returned east, led one more war — against the Song frontier in 1246–47 — and then went home to Mongolia, where he died around 1248. Later reckonings credit him with some sixty-five pitched battles and the conquest, in whole or part, of more than thirty peoples; the precise numbers are traditional, but the scale they gesture at is not disputed.'
        ]
      },
      {
        title: 'Death',
        paragraphs: [
          'Subutai died on the steppe around 1248, in his early seventies, having retired from his last Song campaign to his herds near the Tuul river. The Yuan shi records the honours his memory received from the dynasty his conquests made possible — posthumous titles culminating in "King of Honan", the Chinese province his armies had taken from the Jin. His son Uriyangkhadai and grandson Aju carried the family\'s command tradition on into the Song wars, a three-generation line of generals unmatched in the empire.'
        ]
      },
      {
        title: 'Legacy',
        paragraphs: [
          'Subutai\'s legacy is a body of operations still studied as the outer limit of pre-industrial warfare: campaigns synchronised across hundreds of kilometres without maps or telegraphs, feigned retreats sustained for days, sieges, river crossings, and winter marches used as weapons in themselves. The destruction of Hungary\'s army at Mohi and Poland\'s at Legnica in the same week of April 1241 remains the classic example of coordinated strategic movement before the modern era. He also stands for the Mongol meritocracy at its purest — the blacksmith\'s son from the forest fringe who ended as the empire\'s senior soldier, served four sovereigns, and died in bed.'
        ]
      }
    ],
    keyAchievements: [
      { title: 'The Caspian ride and the Kalka', description: 'With Jebe, circled the Caspian Sea through the Caucasus and destroyed the Rus\'-Cuman army at the Kalka river in 1223.' },
      { title: 'Fall of the Jin', description: 'Directed the campaigns that took Kaifeng in 1233 and ended the Jin dynasty.' },
      { title: 'The 1241 double blow', description: 'Designed the converging invasions that defeated Poland at Legnica and Hungary at Mohi within two days.' }
    ],
    timeline: [
      { date: 'c. 1175', title: 'Born among the Uriankhai', description: 'Born on the forest fringe of Mongolia; his family attaches itself early to Temüjin, the future Genghis Khan.' },
      { date: '1219–1221', title: 'Hunts the Khwarazm-shah', description: 'With Jebe, pursues Shah Muhammad across Persia to his death on a Caspian island.' },
      { date: '31 May 1223', title: 'Victory at the Kalka', description: 'Destroys the combined Rus\'-Cuman army on the Kalka river after a nine-day feigned retreat, closing the great ride around the Caspian.' },
      { date: '1232–1234', title: 'Destruction of the Jin', description: 'Directs the final campaigns in northern China, including the siege of the Jin capital Kaifeng.' },
      { date: '11 April 1241', title: 'The envelopment at Mohi', description: 'Crosses the Sajó downstream while Batu storms the bridge, enveloping and destroying Béla IV\'s Hungarian army at the Battle of Mohi.', links: [{ title: 'Battle of Mohi', type: 'event', slug: 'battle-of-mohi', label: 'His masterpiece of coordination' }] },
      { date: 'c. 1248', title: 'Dies in Mongolia', description: 'Dies in retirement by the Tuul river, having served four rulers of the empire without ever seeking power.' }
    ],
    relatedEntries: {
      people: [
        { title: 'Batu Khan', type: 'person', slug: 'batu-khan', label: 'The prince whose western campaign he directed' },
        { title: 'Béla IV of Hungary', type: 'person', slug: 'bela-iv-of-hungary', label: 'The king his envelopment defeated at Mohi' }
      ],
      events: [
        { title: 'Battle of Mohi', type: 'event', slug: 'battle-of-mohi', label: 'Engineered the victory, 1241' }
      ],
      locations: [
        { title: 'Kievan Rus\'', type: 'location', slug: 'kievan-rus', label: 'Scene of the Kalka raid and the conquests of 1237–1240' }
      ]
    },
    sources: [
      { title: 'Subutai — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Subutai' },
      { title: 'The Mongol Art of War', author: 'Timothy May', type: 'book' },
      { title: 'Wikimedia Commons image record (16th-century Chinese drawing)', author: 'Wikimedia Commons', type: 'image source', url: pg('Subudei.jpg') }
    ]
  },

  {
    id: 'john-hunyadi', type: 'character', name: 'John Hunyadi',
    born: 1406, died: 1456, deathAge: 'about 50', causeOfDeath: 'Plague, after the defence of Belgrade',
    restingPlace: 'St Michael\'s Cathedral, Alba Iulia (Gyulafehérvár)',
    location: 'Kingdom of Hungary',
    aliases: ['Hunyadi János', 'Hunyadi', 'the White Knight'],
    image: fp('Thuróczy krónika - Hunyadi János.jpg'),
    summary: 'Voivode of Transylvania and regent of Hungary — the great Christian border captain of the fifteenth century, who survived the crusade\'s destruction at Varna in 1444 and died days after his triumph at Belgrade in 1456.',
    title: 'Voivode of Transylvania and Regent of Hungary',
    roles: ['Voivode of Transylvania', 'Regent-Governor of Hungary', 'Commander of the Varna crusade'],
    birth: { date: 'c. 1406', place: { name: 'Transylvania' }, note: 'Son of Voyk (Vajk), a Wallachian noble granted Hunyad Castle by King Sigismund in 1409; the exact year and place of John\'s birth are not securely recorded.' },
    death: { date: '11 August 1456', place: { name: 'Zimony (Zemun), near Belgrade' }, circumstance: 'Died of plague in the camp weeks after repelling Mehmed II from Belgrade — a death and a victory that both fall just beyond the Codex\'s 1453 horizon and are noted here for completeness.' },
    quickFacts: { realm: 'Kingdom of Hungary', dynasty: 'Hunyadi', culture: 'Hungarian (family of Wallachian origin)', knownFor: 'a generation of border war against the Ottomans, the Varna crusade, and the regency of Hungary' },
    imageInfo: {
      caption: 'John Hunyadi in the Thuróczy Chronicle (Chronica Hungarorum), printed in 1488.',
      creator: 'Johannes de Thurocz (Thuróczy Chronicle)',
      date: '1488',
      source: 'Wikimedia Commons',
      sourceUrl: pg('Thuróczy krónika - Hunyadi János.jpg'),
      license: 'Public domain',
      note: 'A woodcut made a generation after Hunyadi\'s death for the great printed chronicle of Hungary — a period image of his fame, not a likeness from life.'
    },
    overview: [
      'John Hunyadi rose from the middling nobility of Transylvania to become the most famous Christian soldier of his age — the "White Knight" of the Ottoman frontier. Trained in the wars and courts of Sigismund of Luxembourg, he made his name defending the southern marches, and as Voivode of Transylvania from 1441 he carried the war across the Danube with a professional, wage-paid army built around Hussite-style war wagons.',
      'His victories of 1441–1443, culminating in the "Long Campaign" into the Balkans, convinced Europe the Ottomans could be rolled back — a hope broken at the Battle of Varna in 1444, where the young king Władysław III of Poland died charging the janissaries and Hunyadi barely escaped. Elected regent-governor of Hungary in 1446 for the child king Ladislaus V, he governed the realm for seven years and never stopped fighting; his defence of Belgrade in July 1456, just beyond this archive\'s 1453 horizon, was the victory of his life and the end of it.'
    ],
    greatestFeats: [
      'Built Hungary\'s professional frontier army against the Ottomans',
      'Led the field army of the Varna crusade in 1444',
      'Governed Hungary as regent from 1446 to 1453'
    ],
    contentSections: [
      {
        title: 'Overview',
        paragraphs: [
          'John Hunyadi rose from the middling nobility of Transylvania to become the most famous Christian soldier of his age — the "White Knight" of the Ottoman frontier. Trained in the wars and courts of Sigismund of Luxembourg, he made his name defending the southern marches, and as Voivode of Transylvania from 1441 he carried the war across the Danube with a professional, wage-paid army built around Hussite-style war wagons.',
          'His victories of 1441–1443, culminating in the "Long Campaign" into the Balkans, convinced Europe the Ottomans could be rolled back — a hope broken at the Battle of Varna in 1444, where the young king Władysław III of Poland died charging the janissaries and Hunyadi barely escaped. Elected regent-governor of Hungary in 1446 for the child king Ladislaus V, he governed the realm for seven years and never stopped fighting; his defence of Belgrade in July 1456, just beyond this archive\'s 1453 horizon, was the victory of his life and the end of it.'
        ]
      },
      {
        title: 'Birth and early life',
        paragraphs: [
          'Hunyadi was born around 1406, the son of Voyk (Vajk), a noble of Wallachian origin to whom King Sigismund granted the castle of Hunyad (Hunedoara) in Transylvania in 1409 — the charter from which the family took its name. The exact year of John\'s birth is unrecorded, and later legend (including the persistent rumour making him Sigismund\'s natural son) filled the gap; it is legend, and should be read as such. His schooling was service: as a young knight he followed magnate households, served Sigismund in Italy and Bohemia — where he studied the Hussites\' wagon-fortress tactics at first hand — and married Elizabeth Szilágyi, whose family\'s network would anchor his own. By the late 1430s he held border commands against the Ottomans; the frontier made him.'
        ]
      },
      {
        title: 'Character and Personality',
        paragraphs: [
          'Hungarian tradition, crystallised in the Thuróczy Chronicle a generation after his death, remembered Hunyadi as the ideal border lord: tireless, pious, personally brave to a fault, and implacable toward the "pagan" enemy — the athleta Christi, Christ\'s champion, as papal letters styled him. The Ottoman chronicles paid a darker version of the same tribute, remembering him as the most dangerous of the Hungarian commanders. Contemporaries on both sides agree on the energy: he fought or governed continuously for twenty years, financing armies from his own vast estates when the diet would not pay.',
          'The criticisms are equally consistent. Rivals among the magnates — the Cilli and Garai factions above all — saw an upstart accumulating unprecedented wealth and office, and his feuds with them were pursued as hard as his wars; his aggressive risk-taking lost battles as well as won them, at Varna and again on the Kosovo field in 1448, where his second great gamble against Murad II ended in a three-day defeat. Modern historians see both truths together: an extraordinary self-made commander and political operator whose ambition and daring were inseparable — the qualities that broke crusades at Varna were the same ones that saved Belgrade.'
        ]
      },
      {
        title: 'The Ottoman wars and Varna',
        paragraphs: [
          'Appointed Voivode of Transylvania and captain of Belgrade in 1441 by King Władysław, Hunyadi turned defence into offence. He beat Ottoman armies at Szeben (Sibiu) in 1442 and at the Iron Gates, and in the winter of 1443–44 led the "Long Campaign" — a strike through Serbia toward Sofia beside the king and the Serbian despot George Branković — that forced Sultan Murad II to terms at Szeged in 1444. When the papal legate absolved the king of the treaty and the crusade marched for the Black Sea coast, the promised Venetian fleet failed to stop Murad recrossing the straits.',
          'At the Battle of Varna on 10 November 1444, Hunyadi commanded the field army\'s fighting wings and had beaten both Ottoman flanks when the twenty-year-old Władysław III of Poland charged the janissary lines around the sultan and was cut down; his head on a spear broke the crusader army. Hunyadi escaped through Wallachia — briefly imprisoned by its prince — and returned to a kingdom without a king. In 1448 he tried once more to force a decision, marching into Serbia to join the Albanian leader Skanderbeg, and was defeated by Murad II in three days of fighting on the Kosovo field; after that, Hungary\'s war became the fortress defence Hunyadi had begun with.'
        ]
      },
      {
        title: 'Regent of Hungary',
        paragraphs: [
          'In 1446 the Hungarian diet elected Hunyadi regent-governor (gubernator) for the child king Ladislaus V, then held in Habsburg custody — the first man below royal rank to govern the realm. He was regent, not king, and this archive accordingly treats him as a non-ruler: he exercised royal power in another\'s name, wrestling the magnate leagues of the Cilli and Garai, keeping the coinage and the border fortresses funded, and negotiating with Emperor Frederick III for the king\'s release. He resigned the governorship when Ladislaus came of age in 1453, receiving the county of Beszterce and the captaincy-general of the kingdom.',
          'The southern defence system he maintained — Belgrade above all, garrisoned and provisioned at his own expense — was his real government. After Constantinople fell to Mehmed II in 1453, everyone knew where the next blow would land, and Hunyadi spent his last three years preparing the Danube line to receive it.'
        ]
      },
      {
        title: 'Death',
        paragraphs: [
          'The end lies just past this archive\'s 1453 boundary and is recorded here briefly. In July 1456 Mehmed II brought the army that had taken Constantinople against Belgrade; Hunyadi broke the Ottoman river blockade, reinforced the fortress, and on 21–22 July repelled the great assault, the peasant crusaders of the friar John of Capistrano surging out to overrun the sultan\'s siege lines. Plague swept the victorious camp, and Hunyadi died of it at Zimony on 11 August 1456. He was buried in St Michael\'s Cathedral at Alba Iulia in Transylvania. The noon bell rung across Latin Christendom, ordered by Pope Callixtus III in 1456, became bound in tradition to the Belgrade victory.'
        ]
      },
      {
        title: 'Legacy',
        paragraphs: [
          'Hunyadi\'s defence system held Belgrade — and with it the Hungarian frontier — for seventy years after his death; the Ottomans did not take the fortress until 1521. His political legacy was a dynasty: his younger son Matthias Corvinus was elected king of Hungary in 1458, the fulfilment of the family\'s rise from a Wallachian knight\'s grant to the throne itself. In Hungarian, Romanian, and Serbian tradition alike he remains the emblematic Ottoman-frontier hero — János Hunyadi, Iancu de Hunedoara, Sibinjanin Janko — a rare figure claimed as their own by all the peoples he fought among.'
        ]
      }
    ],
    keyAchievements: [
      { title: 'The Long Campaign', description: 'Led the winter offensive of 1443–44 through Serbia that forced Murad II to the Peace of Szeged.' },
      { title: 'Commander at Varna', description: 'Led the crusade\'s field army in 1444 and fought its wings to the edge of victory before the king\'s fatal charge.' },
      { title: 'Regency of Hungary', description: 'Governed the kingdom as elected regent from 1446 to 1453, funding the southern fortress line from his own estates.' }
    ],
    timeline: [
      { date: 'c. 1406', title: 'Born in Transylvania', description: 'Born to Voyk, a Wallachian noble granted Hunyad Castle by Sigismund of Luxembourg in 1409.' },
      { date: '1441', title: 'Voivode of Transylvania', description: 'Appointed voivode and captain of Belgrade; begins the counteroffensive victories at Szeben and the Iron Gates.' },
      { date: '1443–1444', title: 'The Long Campaign', description: 'Drives with King Władysław III through Serbia toward Sofia, forcing Murad II to the Peace of Szeged.' },
      { date: '10 November 1444', title: 'Catastrophe at Varna', description: 'Commands the crusader field army at the Battle of Varna; the king dies charging the janissaries and the crusade is destroyed.', links: [{ title: 'Battle of Varna', type: 'event', slug: 'battle-of-varna', label: 'The crusade\'s destruction' }] },
      { date: '1446', title: 'Elected regent of Hungary', description: 'The diet makes him governor for the absent child king Ladislaus V — royal power without royal rank.' },
      { date: '1448', title: 'Defeat on the Kosovo field', description: 'His second offensive against Murad II is beaten in three days of fighting in Kosovo; Hungary turns to fortress defence.' },
      { date: '11 August 1456', title: 'Dies after Belgrade', description: 'Repels Mehmed II from Belgrade in July 1456 and dies of camp plague weeks later — victory and death both just beyond the Codex\'s 1453 horizon.' }
    ],
    relatedEntries: {
      people: [
        { title: 'Władysław III of Poland', type: 'person', slug: 'wladyslaw-iii-of-poland', label: 'The king he served and lost at Varna' },
        { title: 'Murad II', type: 'person', slug: 'murad-ii', label: 'His great Ottoman adversary' },
        { title: 'Sigismund of Luxembourg', type: 'person', slug: 'sigismund-of-luxembourg', label: 'The king whose service raised his family' }
      ],
      events: [
        { title: 'Battle of Varna', type: 'event', slug: 'battle-of-varna', label: 'Commanded the field army, 1444' }
      ],
      locations: [
        { title: 'Ottoman Empire', type: 'location', slug: 'ottoman-empire', label: 'The power he fought for twenty years' }
      ]
    },
    sources: [
      { title: 'János Hunyadi | Hungarian military leader', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/biography/Janos-Hunyadi' },
      { title: 'John Hunyadi — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/John_Hunyadi' },
      { title: 'Wikimedia Commons image record (Thuróczy Chronicle woodcut)', author: 'Wikimedia Commons', type: 'image source', url: pg('Thuróczy krónika - Hunyadi János.jpg') }
    ]
  },

  {
    id: 'andrew-moray', type: 'character', name: 'Andrew Moray',
    born: null, died: 1297, deathAge: 'unknown (a young man)', causeOfDeath: 'Wounds received at Stirling Bridge',
    restingPlace: 'Unrecorded',
    location: 'Kingdom of Scotland',
    aliases: ['Andrew de Moray', 'Andrew Murray'],
    image: fp('The Old Stirling Bridge - still tells its story.jpg'),
    summary: 'Leader of the northern rising of 1297 and joint commander with William Wallace at Stirling Bridge, where he took the wounds that killed him within weeks — the co-victor Scottish memory nearly forgot.',
    title: 'Scottish commander, joint victor of Stirling Bridge',
    roles: ['Leader of the northern rising of 1297', 'Joint commander of the army of Scotland'],
    birth: { date: 'Unknown', place: { name: 'Moray, Scotland' }, note: 'Son of Sir Andrew Moray of Petty, justiciar of Scotia, of the great northern house of Moray; his birth year is not recorded.' },
    death: { date: 'Late 1297', place: { name: 'Scotland' }, circumstance: 'Died of wounds received at Stirling Bridge, probably by November 1297; official letters of that autumn still carried his name beside Wallace\'s.' },
    quickFacts: { realm: 'Kingdom of Scotland', dynasty: 'House of Moray (de Moravia)', culture: 'Scottish', knownFor: 'clearing the north of English garrisons in 1297 and the victory at Stirling Bridge' },
    imageInfo: {
      caption: 'The Old Bridge at Stirling. The stone bridge is fifteenth- or early sixteenth-century; the wooden bridge where Moray and Wallace won their victory in 1297 stood a short distance upstream.',
      creator: 'Photograph by Annboeva',
      date: '2018',
      source: 'Wikimedia Commons',
      sourceUrl: pg('The Old Stirling Bridge - still tells its story.jpg'),
      license: 'CC BY-SA 4.0',
      note: 'No portrait, seal image, or tomb of Andrew Moray survives; the crossing at Stirling where he took his death-wounds stands for him here.'
    },
    overview: [
      'Andrew Moray was the other victor of Stirling Bridge — the commander whose northern rising did as much as William Wallace\'s to break English rule in Scotland in 1297, and whose early death left Wallace alone with the legend. Heir to one of the great baronial houses of the north, he was captured with the Scottish host at Dunbar in 1296 and escaped English imprisonment to raise Moray in revolt by the spring of 1297.',
      'In a summer of raids and sieges he took or neutralised the English-held castles of the north — Urquhart, Inverness, Elgin, Banff — until north of the Tay English government had effectively ceased. Joining forces with Wallace, he shared command at the Battle of Stirling Bridge on 11 September 1297, where the English army was destroyed crossing the Forth; somewhere in that fighting he took the wounds from which he died within weeks, a name on victory letters by October and a dead man by November.'
    ],
    greatestFeats: [
      'Raised and led the northern rising of 1297',
      'Cleared the English garrisons from Moray and the north',
      'Joint commander of the victory at Stirling Bridge'
    ],
    contentSections: [
      {
        title: 'Overview',
        paragraphs: [
          'Andrew Moray was the other victor of Stirling Bridge — the commander whose northern rising did as much as William Wallace\'s to break English rule in Scotland in 1297, and whose early death left Wallace alone with the legend. Heir to one of the great baronial houses of the north, he was captured with the Scottish host at Dunbar in 1296 and escaped English imprisonment to raise Moray in revolt by the spring of 1297.',
          'In a summer of raids and sieges he took or neutralised the English-held castles of the north — Urquhart, Inverness, Elgin, Banff — until north of the Tay English government had effectively ceased. Joining forces with Wallace, he shared command at the Battle of Stirling Bridge on 11 September 1297, where the English army was destroyed crossing the Forth; somewhere in that fighting he took the wounds from which he died within weeks, a name on victory letters by October and a dead man by November.'
        ]
      },
      {
        title: 'Birth and early life',
        paragraphs: [
          'Moray\'s birth year is unrecorded, but his blood was among the best in Scotland: he was son and heir of Sir Andrew Moray of Petty, justiciar of Scotia — the senior royal judge north of the Forth — and nephew of Sir William Moray of Bothwell, "le riche", builder of the mightiest private castle in the land. The family, de Moravia in the documents, had dominated the province of Moray since the twelfth century. When Edward I of England forced the Scottish crisis to war in 1296, father and son fought in the battle at Dunbar in April; both were captured, the father sent to the Tower of London, the son to Chester Castle — from which, over the winter of 1296–97, the young man escaped north.'
        ]
      },
      {
        title: 'Character and Personality',
        paragraphs: [
          'No chronicler drew Andrew Moray\'s portrait — he died too soon, and the legend that swallowed Stirling Bridge belonged to Wallace. What survives instead is the evidence of action, and it is coherent: the escape from Chester; the raising of his father\'s province within months, rallying knights, burgesses of Inverness, and highlanders alike; a guerrilla summer of night raids and castle surprises — at Urquhart on Loch Ness he failed by assault, then took the castle by blockade — that shows patience and adaptability as much as daring. The English official record complained it could not bring him to battle; that, too, is a kind of character sketch.',
          'The one direct document is the letter he issued jointly with Wallace from Haddington on 11 October 1297 to the merchants of Lübeck and Hamburg, announcing that Scotland was "recovered by war" and open for trade — the act of a commander thinking about the kingdom\'s economy within a month of the battle that killed him. That he, the great baron\'s heir, shared the style "commanders of the army of the kingdom of Scotland" on equal terms with Wallace, a knight\'s younger son, suggests a man more interested in the war than in precedence — though it must be said plainly that this is inference from documents, not description from any witness.'
        ]
      },
      {
        title: 'The rising of 1297 and Stirling Bridge',
        paragraphs: [
          'By May 1297 Moray had raised his standard at Avoch in the Black Isle, and through the summer he dismantled English control of the north: Urquhart Castle blockaded into surrender, the garrisons of Inverness, Elgin, and Banff taken or driven out, the justiciar\'s machinery of occupation collapsing behind them. Edward I\'s administration, distracted by war in Flanders, relied on local magnates to suppress him; they conspicuously failed to. By late summer Moray\'s northern army and Wallace\'s bands from the southwest had joined, and the two moved on Stirling, the hinge of Scotland, where the Earl of Surrey and the treasurer Hugh de Cressingham brought the English field army to restore the conquest.',
          'On 11 September 1297, from the high ground above the Forth, the Scots watched the English army begin filing across the narrow wooden bridge — then struck when the vanguard was over, seized the bridgehead, and destroyed everything on the north bank; Cressingham was killed and flayed, Surrey fled to Berwick, and English rule in Scotland collapsed for a season. The sources do not say where in the fighting Moray fell wounded — only the aftermath records it. The victory letters of October name "Andrew Murray and William Wallace, commanders of the army of the kingdom of Scotland"; by a document of that November, Wallace\'s name stands alone.'
        ]
      },
      {
        title: 'Death',
        paragraphs: [
          'Moray died of his Stirling Bridge wounds in the autumn of 1297 — after 11 October, when he still appears in the Haddington letter, and before November was out. Neither the place of his death nor his grave is recorded. His wife was pregnant when he died; the posthumous son, another Andrew Murray, grew up to marry Robert the Bruce\'s sister Christina and to serve twice as Guardian of Scotland in the 1330s — the father\'s war carried on a generation by the son who never knew him.'
        ]
      },
      {
        title: 'Legacy',
        paragraphs: [
          'Because he died and Wallace lived, Moray was written down to a supporting part in the story he had jointly authored: Blind Harry\'s epic and everything descended from it made Stirling Bridge Wallace\'s battle alone. Modern Scottish historiography, led by G. W. S. Barrow\'s work on the period, has restored the balance — the northern rising was Moray\'s, the joint command is documented in the surviving letters, and some historians have argued the battlefield plan owed as much to the baron\'s heir as to Wallace. A commemorative plaque at the Wallace Monument above the battlefield now names them together, and his son\'s two guardianships kept the house of Moray at the centre of the independence wars for another forty years.'
        ]
      }
    ],
    keyAchievements: [
      { title: 'The northern rising', description: 'Raised Moray in revolt in May 1297 and cleared the English garrisons from Urquhart, Inverness, Elgin, and Banff.' },
      { title: 'Stirling Bridge', description: 'Shared command of the Scottish army in the victory of 11 September 1297.' },
      { title: 'The Lübeck letter', description: 'With Wallace, announced Scotland\'s recovered freedom to the Hanseatic merchants in October 1297.' }
    ],
    timeline: [
      { date: 'Before 1296', title: 'Heir of the house of Moray', description: 'Grows up son of Sir Andrew Moray of Petty, justiciar of Scotia, in the dominant baronial family of northern Scotland.' },
      { date: 'April 1296', title: 'Captured at Dunbar', description: 'Taken prisoner with his father when Edward I\'s army routs the Scottish host at Dunbar; imprisoned at Chester Castle.' },
      { date: 'Winter 1296–97', title: 'Escape from Chester', description: 'Escapes English custody and makes his way north to his family\'s lands in Moray.' },
      { date: 'May 1297', title: 'Raises the north', description: 'Raises his standard at Avoch and begins the campaign that takes Urquhart, Inverness, Elgin, and Banff from their English garrisons.' },
      { date: '11 September 1297', title: 'Victory at Stirling Bridge', description: 'Commands the Scottish army jointly with William Wallace at the Battle of Stirling Bridge and is mortally wounded in the victory.', links: [{ title: 'Battle of Stirling Bridge', type: 'event', slug: 'battle-of-stirling-bridge', label: 'His victory and death-wound' }] },
      { date: '11 October 1297', title: 'The Lübeck letter', description: 'Still named beside Wallace as commander of the army of Scotland in the letter to the merchants of Lübeck and Hamburg.' },
      { date: 'By November 1297', title: 'Dies of his wounds', description: 'Dies of the wounds taken at Stirling Bridge; his posthumous son will twice be Guardian of Scotland.' }
    ],
    relatedEntries: {
      people: [
        { title: 'William Wallace', type: 'person', slug: 'william-wallace', label: 'His fellow commander at Stirling Bridge' },
        { title: 'Edward I of England', type: 'person', slug: 'edward-i-of-england', label: 'The king whose occupation he broke in the north' }
      ],
      events: [
        { title: 'Battle of Stirling Bridge', type: 'event', slug: 'battle-of-stirling-bridge', label: 'Joint commander, mortally wounded, 1297' },
        { title: 'Wars of Scottish Independence', type: 'event', slug: 'wars-of-scottish-independence', label: 'The war his rising opened in the north' }
      ],
      locations: [
        { title: 'Kingdom of Scotland', type: 'location', slug: 'kingdom-of-scotland', label: 'The realm he fought for' }
      ]
    },
    sources: [
      { title: 'Andrew Moray — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Andrew_Moray' },
      { title: 'Robert Bruce and the Community of the Realm of Scotland', author: 'G. W. S. Barrow', type: 'book' },
      { title: 'Wikimedia Commons image record (Old Stirling Bridge)', author: 'Wikimedia Commons', type: 'image source', url: pg('The Old Stirling Bridge - still tells its story.jpg') }
    ]
  },

  {
    id: 'olaf-guthfrithson', type: 'character', name: 'Olaf Guthfrithson',
    born: null, died: 941, deathAge: 'unknown (a young man)', causeOfDeath: 'Unrecorded; he died in 941 after raiding into Lothian',
    restingPlace: 'Unrecorded',
    location: 'Kingdom of Dublin',
    aliases: ['Anlaf', 'Anlaf Guthfrithsson', 'Olaf Guthfrithsson', 'Amlaíb mac Gofraid'],
    image: fp('NARC-5C7DED, Penny, Anlaf Guthfrithsson (FindID 962073).jpg'),
    summary: 'Norse-Gael king of Dublin who led the great coalition beaten at Brunanburh in 937, then seized York and the Five Boroughs after Æthelstan\'s death — and died in 941 with a Norse kingdom spanning the Irish Sea.',
    title: 'King of Dublin and of York',
    roles: ['King of Dublin', 'Coalition leader at Brunanburh', 'King at York'],
    birth: { date: 'Unknown', note: 'Son of Gofraid ua Ímair, king of Dublin, of the Uí Ímair dynasty descended from Ímar; no source records his birth.' },
    death: { date: '941', place: { name: 'Northumbria or its northern marches' }, circumstance: 'The chronicles record only that he died in 941 after plundering the church of St Balthere at Tyninghame; the manner of his death is not reliably recorded.' },
    quickFacts: { realm: 'Dublin and, from 939, York', dynasty: 'Uí Ímair', culture: 'Norse-Gael', knownFor: 'leading the Brunanburh coalition and briefly reuniting Dublin and York' },
    imageInfo: {
      caption: 'Modern replica by the moneyer David Greenhalgh of a silver "raven" penny of Anlaf (Olaf) Guthfrithson, king at York 939–941; the original type carries the raven and the title ANLAF CVNVNC.',
      creator: 'Replica by David Greenhalgh; photograph by the Portable Antiquities Scheme (Eleanore Cox)',
      date: 'Replica, 21st century; original type struck 939–941',
      source: 'Portable Antiquities Scheme / Wikimedia Commons',
      sourceUrl: pg('NARC-5C7DED, Penny, Anlaf Guthfrithsson (FindID 962073).jpg'),
      license: 'CC BY-SA 4.0',
      note: 'A clearly labelled modern replica of Olaf\'s famous raven coinage, shown because no freely licensed photograph of an original raven penny is available; the design is that of his own York mint.'
    },
    overview: [
      'Olaf Guthfrithson was the most dangerous enemy the new English kingdom faced in its first generation. King of Dublin from 934 in succession to his father Gofraid of the Uí Ímair — the dynasty of Ímar that dominated the Norse Irish Sea — he crushed his family\'s Viking rivals at Limerick, married a daughter of Constantine II of Scotland, and in 937 assembled the great coalition of Dublin Norse, Scots, and Strathclyde Britons that Æthelstan destroyed at the Battle of Brunanburh.',
      'Brunanburh broke the coalition but not Olaf. When Æthelstan died in October 939, Olaf crossed at once from Dublin, was accepted as king at York, and by 940 had forced the young English king Edmund to cede the Five Boroughs of the east midlands — the high-water mark of Norse power in England. He died suddenly in 941, after plundering the church of St Balthere at Tyninghame in Lothian, and the empire of the Irish Sea he had briefly joined together fell apart within three years.'
    ],
    greatestFeats: [
      'Led the coalition of kings at Brunanburh in 937',
      'Seized York within weeks of Æthelstan\'s death in 939',
      'Forced the cession of the Five Boroughs in 940'
    ],
    contentSections: [
      {
        title: 'Overview',
        paragraphs: [
          'Olaf Guthfrithson was the most dangerous enemy the new English kingdom faced in its first generation. King of Dublin from 934 in succession to his father Gofraid of the Uí Ímair — the dynasty of Ímar that dominated the Norse Irish Sea — he crushed his family\'s Viking rivals at Limerick, married a daughter of Constantine II of Scotland, and in 937 assembled the great coalition of Dublin Norse, Scots, and Strathclyde Britons that Æthelstan destroyed at the Battle of Brunanburh.',
          'Brunanburh broke the coalition but not Olaf. When Æthelstan died in October 939, Olaf crossed at once from Dublin, was accepted as king at York, and by 940 had forced the young English king Edmund to cede the Five Boroughs of the east midlands — the high-water mark of Norse power in England. He died suddenly in 941, after plundering the church of St Balthere at Tyninghame in Lothian, and the empire of the Irish Sea he had briefly joined together fell apart within three years.'
        ]
      },
      {
        title: 'Birth and early life',
        paragraphs: [
          'Nothing is recorded of Olaf\'s birth. He was a son of Gofraid ua Ímair — Guthfrith in the English sources — who ruled Dublin from 921 and briefly held York before Æthelstan expelled him in 927, and thus a great-grandson (in the dynasty\'s reckoning) of Ímar, founder of the Uí Ímair sea-kingdom. His world was the axis between Dublin and York that his family had fought to hold for two generations. The Irish annals first show him campaigning in his father\'s wars in the early 930s; on Gofraid\'s death in 934 he took the kingship of Dublin, and in 937 he settled the family\'s feud with the rival Vikings of Limerick by smashing their fleet on Lough Ree and capturing their king — clearing his back for the great gamble in Britain that same year.'
        ]
      },
      {
        title: 'Character and Personality',
        paragraphs: [
          'Olaf is known from annals, not sagas — terse Irish entries and the hostile magnificence of the Anglo-Saxon Chronicle\'s Brunanburh poem, which casts him as the beaten "Anlaf" fleeing over dingy water. No source describes the man; what the record supports is a reading of his acts, and the acts show speed and scale of ambition remarkable even for the Uí Ímair. Within three years of taking Dublin he had destroyed Limerick\'s fleet, married into the Scottish royal house, and built the widest anti-English coalition of the age; within weeks of Æthelstan\'s death he had crossed the sea and taken York. The pattern is a ruler who moved faster than his enemies\' expectations, and who treated setbacks — even a defeat as bloody as Brunanburh — as interruptions rather than verdicts.',
          'The record\'s last note is the one medieval churchmen made sure survived: in 941 he plundered the church of St Balthere at Tyninghame, and died — the juxtaposition, in the northern annals, carrying its own monastic judgment of sacrilege punished. Whether his death had any connection to the raid no source can actually establish, and it should be read as the chroniclers\' framing rather than fact. That even his enemies\' poem at Brunanburh grants him standing among "kings" — one of five who fell or fled that day — is as close to a contemporary character reference as Olaf gets.'
        ]
      },
      {
        title: 'Brunanburh and the kingdom of York',
        paragraphs: [
          'The coalition of 937 was Olaf\'s work: his own Dublin Norse, his father-in-law Constantine II\'s Scots, and the Strathclyde Britons under Owain, united by fear of the West Saxon kings\' northward march since Æthelstan had taken York in 927 and invaded Scotland in 934. Olaf sailed with the Dublin fleet, joined his allies, and met Æthelstan and his brother Edmund somewhere at the unidentified field of Brunanburh. The Battle of Brunanburh was remembered for a generation simply as "the great battle": the coalition was routed after a day\'s fighting that killed five kings and seven of Olaf\'s earls, a son of Constantine among the dead, and Olaf escaped by ship back to Dublin.',
          'Two years later the verdict reversed. Æthelstan died in October 939, and Northumbria — never reconciled to southern rule — accepted Olaf as king at York almost at once. In 940 he struck south, and after a confrontation at Leicester mediated by the archbishops Wulfstan of York and Oda of Canterbury, the young King Edmund ceded the Five Boroughs — Lincoln, Nottingham, Derby, Leicester, and Stamford — to Norse rule, with Watling Street once more the border. For a moment Olaf held what no king of his line had held: Dublin, York, and the east midlands together. His raven pennies, struck at York with the title ANLAF CVNVNC, are the numismatic mark of that moment.'
        ]
      },
      {
        title: 'Death',
        paragraphs: [
          'In 941 Olaf raided north into Lothian and plundered the church of St Balthere at Tyninghame — and in the same year, the annals record, he died. No source reliably explains how: illness, wound, or accident are all guesses, and the northern chronicle tradition that linked his death to the saint\'s vengeance is monastic interpretation, not information. His kingdom split along the line it had always joined: his cousin Olaf Sihtricson (Amlaíb Cuarán) took York, where English reconquest soon followed, while Dublin passed to his brother Blácaire mac Gofraid. Edmund recovered the Five Boroughs by 942; the whole Norse position Olaf had built unravelled within three years of his death.'
        ]
      },
      {
        title: 'Legacy',
        paragraphs: [
          'Olaf\'s career defined the last realistic attempt to reverse the unification of England. Brunanburh, the battle he brought about, became the founding victory of the English kingdom — "never yet in this island", the Chronicle poem boasts, "was a greater slaughter" — and his brief reunion of Dublin and York in 939–941 showed how fragile that unification still was: it took a coalition\'s defeat and his own early death to secure it. In Irish and Norse tradition he stands among the greatest of the Uí Ímair sea-kings; in English tradition he is Anlaf, the archetypal northern enemy. The raven coinage of his York mint remains among the most striking images Viking-age Britain produced.'
        ]
      }
    ],
    keyAchievements: [
      { title: 'Victory on Lough Ree', description: 'Destroyed the Limerick Viking fleet in 937 and captured their king, securing Uí Ímair supremacy in Ireland.' },
      { title: 'The Brunanburh coalition', description: 'Assembled Dublin, Alba, and Strathclyde against Æthelstan in the greatest battle of the age.' },
      { title: 'York and the Five Boroughs', description: 'Took York in 939 and forced Edmund to cede the Five Boroughs in 940, briefly restoring the Dublin–York axis.' }
    ],
    timeline: [
      { date: '934', title: 'King of Dublin', description: 'Succeeds his father Gofraid ua Ímair as king of Dublin, head of the Uí Ímair dynasty.' },
      { date: '937', title: 'Victory on Lough Ree', description: 'Crushes the rival Vikings of Limerick on Lough Ree, capturing their king and uniting Norse Ireland behind him.' },
      { date: '937', title: 'Defeat at Brunanburh', description: 'Leads the Dublin–Alba–Strathclyde coalition against Æthelstan at the Battle of Brunanburh and escapes the rout by sea.', links: [{ title: 'Battle of Brunanburh', type: 'event', slug: 'battle-of-brunanburh', label: 'His great defeat' }] },
      { date: '939', title: 'Takes York', description: 'Crosses from Dublin within weeks of Æthelstan\'s death and is accepted as king by Norse Northumbria.' },
      { date: '940', title: 'Wins the Five Boroughs', description: 'After the confrontation at Leicester, King Edmund cedes Lincoln, Nottingham, Derby, Leicester, and Stamford; Watling Street again divides England.' },
      { date: '941', title: 'Dies after the Tyninghame raid', description: 'Plunders the church of St Balthere in Lothian and dies the same year, cause unrecorded; his sea-kingdom fragments within three years.' }
    ],
    relatedEntries: {
      people: [
        { title: 'Æthelstan', type: 'person', slug: 'aethelstan', label: 'The king who broke his coalition at Brunanburh' },
        { title: 'Constantine II of Scotland', type: 'person', slug: 'constantine-ii-of-scotland', label: 'His father-in-law and ally in 937' }
      ],
      events: [
        { title: 'Battle of Brunanburh', type: 'event', slug: 'battle-of-brunanburh', label: 'Led the coalition, 937' }
      ],
      locations: [
        { title: 'Northumbria', type: 'location', slug: 'northumbria', label: 'The kingdom he took at York in 939' },
        { title: 'Kingdom of England', type: 'location', slug: 'kingdom-of-england', label: 'The unification he nearly reversed' }
      ]
    },
    sources: [
      { title: 'Olaf Guthfrithson — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Olaf_Guthfrithson' },
      { title: 'Viking Kings of Britain and Ireland: The Dynasty of Ívarr to A.D. 1014', author: 'Clare Downham', type: 'book' },
      { title: 'Wikimedia Commons image record (replica raven penny, Portable Antiquities Scheme)', author: 'Portable Antiquities Scheme / Wikimedia Commons', type: 'image source', url: pg('NARC-5C7DED, Penny, Anlaf Guthfrithsson (FindID 962073).jpg') }
    ],
    isRuler: true,
    succession: {
      office: 'King of Dublin',
      note: 'Succession shown for the Dublin kingship; Olaf also ruled York from 939 until his death.',
      predecessor: { displayName: 'Gofraid ua Ímair', note: 'His father, king of Dublin from 921 and briefly of York, who died in 934.' },
      successor: { displayName: 'Blácaire mac Gofraid', note: 'His brother, who held Dublin when Olaf crossed to York in 939 and ruled it after his death in 941.' }
    }
  },

  {
    id: 'constantine-ii-of-scotland', type: 'character', name: 'Constantine II of Scotland',
    born: null, died: 952, deathAge: 'probably over 70', causeOfDeath: 'Natural causes, in religious retirement',
    restingPlace: 'St Andrews (by the accepted tradition)',
    location: 'Kingdom of Scotland',
    aliases: ['Causantín mac Áeda', 'Constantine II'],
    image: fp('St Andrews Cathedral ruins - geograph.org.uk - 6316273.jpg'),
    summary: 'King of Alba for forty-three years — survivor of the Viking storms, ally and enemy of the West Saxon kings, defeated in the great coalition at Brunanburh in 937, and the rare early medieval king who abdicated to a monastery.',
    title: 'King of Alba',
    roles: ['King of Alba', 'Coalition leader at Brunanburh', 'Abbot at St Andrews after his abdication'],
    birth: { date: 'Before 879', note: 'Son of Áed, king of the Picts/Alba (died 878); his birth is unrecorded, but he was old enough to take the kingship in 900 and lived until 952.' },
    death: { date: '952', place: { name: 'St Andrews' }, circumstance: 'Died in religious retirement among the Céli Dé of St Andrews, nearly a decade after resigning the kingship — a death in bed almost unique among the kings of his line.' },
    quickFacts: { realm: 'Kingdom of Alba (Scotland)', dynasty: 'Alpínid (house of Cináed mac Ailpín)', culture: 'Gaelic (Scoto-Pictish)', knownFor: 'the longest reign of early Scotland, the Brunanburh coalition, and his abdication to St Andrews' },
    imageInfo: {
      caption: 'The ruins of St Andrews Cathedral, Fife. Constantine II resigned his kingship around 943 and ended his life in the religious community of St Andrews, where tradition places his burial in 952.',
      creator: 'Photograph by Gordon Hatton',
      date: '2019',
      source: 'Wikimedia Commons',
      sourceUrl: pg('St Andrews Cathedral ruins - geograph.org.uk - 6316273.jpg'),
      license: 'CC BY-SA 2.0',
      note: 'No contemporary or reliable later portrait of Constantine exists; the place of his retirement and death stands for him here. The cathedral ruins are twelfth-century and later, successors of the church community he joined.'
    },
    overview: [
      'Constantine son of Áed ruled Alba from 900 to about 943 — forty-three years, the longest reign of any early Scottish king — through the most dangerous age the northern kingdom ever faced. He fought the grandsons of Ímar when they stormed back into the Irish Sea world, met them at Corbridge on the Tyne in 918, and steered his Gaelic-Pictish kingdom between the hammer of the Vikings and the rising power of Wessex.',
      'His reign\'s great crisis came when Æthelstan invaded Alba by land and sea in 934, and its great gamble three years later, when Constantine joined Olaf Guthfrithson of Dublin and Owain of Strathclyde in the coalition destroyed at the Battle of Brunanburh — where one of his sons was among the dead. Around 943 he did what almost no king of his violent age did: he resigned the throne to Malcolm I and entered the Céli Dé community of St Andrews, where he lived nearly ten more years and died in 952.'
    ],
    greatestFeats: [
      'Reigned over Alba for forty-three years',
      'Led Alba into the great coalition of Brunanburh',
      'Abdicated to the religious life at St Andrews — and lived'
    ],
    contentSections: [
      {
        title: 'Overview',
        paragraphs: [
          'Constantine son of Áed ruled Alba from 900 to about 943 — forty-three years, the longest reign of any early Scottish king — through the most dangerous age the northern kingdom ever faced. He fought the grandsons of Ímar when they stormed back into the Irish Sea world, met them at Corbridge on the Tyne in 918, and steered his Gaelic-Pictish kingdom between the hammer of the Vikings and the rising power of Wessex.',
          'His reign\'s great crisis came when Æthelstan invaded Alba by land and sea in 934, and its great gamble three years later, when Constantine joined Olaf Guthfrithson of Dublin and Owain of Strathclyde in the coalition destroyed at the Battle of Brunanburh — where one of his sons was among the dead. Around 943 he did what almost no king of his violent age did: he resigned the throne to Malcolm I and entered the Céli Dé community of St Andrews, where he lived nearly ten more years and died in 952.'
        ]
      },
      {
        title: 'Birth and early life',
        paragraphs: [
          'Constantine was born before 879, son of Áed mac Cináeda, who was killed in 878 after a reign of barely a year; his grandfather was Cináed mac Ailpín (Kenneth MacAlpin) himself, from whom the whole royal line of Alba descended. Of his youth the sources — chiefly the terse Chronicle of the Kings of Alba and the Irish annals — record nothing directly; a plausible later tradition has the young Constantine and his cousin sheltered in Gaelic Ireland during Viking convulsions in the 870s and 880s, but it is inference from the dynasty\'s Irish ties rather than documented fact. He took the kingship in 900 when his cousin Donald II, Domnall mac Causantín, was killed at Dunnottar, and inherited a realm under immediate assault from the sea.'
        ]
      },
      {
        title: 'Character and Personality',
        paragraphs: [
          'The sources for Constantine are annals and king-lists written by churchmen, and they preserve verdicts rather than portraits. What they consistently show is a king of unusual endurance and adaptability: he survived the Viking storm of his first years, absorbed a defeat by Ragnall\'s Norsemen at Corbridge in 918 without losing his kingdom, and outlasted every rival and ally of his generation. The Chronicle of the Kings of Alba gives him its most suggestive entry: in 906, at the Hill of Faith at Scone, he and Bishop Cellach "pledged to keep the laws and disciplines of the faith and the rights of the churches and gospels" — the first recorded act of its kind in Scotland, and evidence of a king who governed with and through the church long before he retired into it.',
          'His statecraft was flexible to the point of reversal, and the English sources judged it accordingly: he submitted to Edward the Elder\'s overlordship in some form, accepted terms from Æthelstan at Eamont in 927, then built the pagan-Christian coalition of 937 against him — the Brunanburh poem sneers at the "hoary warrior" who fled north leaving his son on the field. The abdication of c. 943 is the act that most defines him in tradition: whether weariness, piety, or dynastic pressure drove it cannot be recovered, but a tenth-century warrior king ending his life as a Céli Dé religious at St Andrews — after four decades of rule — impressed even the hostile chroniclers, and later Scottish tradition remembered him as much for the renunciation as for the reign.'
        ]
      },
      {
        title: 'The long reign of Alba',
        paragraphs: [
          'Constantine\'s first decade was a fight for survival. The grandsons of Ímar returned to the Irish Sea in force after their expulsion from Dublin in 902; Alba was raided, and in 918 Constantine marched south to meet Ragnall\'s army at Corbridge on the Tyne — a bloody, indecisive battle that nonetheless checked Norse expansion into the lands north of the Tweed. It was under Constantine that the kingdom is first consistently called Alba in the chronicles, and his long partnership with the church — the Scone assembly of 906, the promotion of St Andrews — gave the hybrid Gaelic-Pictish realm an increasingly settled identity.',
          'The south posed the subtler problem. Edward the Elder and then Æthelstan pressed their overlordship northward; Constantine treated, submitted when he had to — at Eamont in 927 among the northern kings — and married his daughter to Olaf Guthfrithson of Dublin when he chose resistance. Æthelstan answered in 934 with the first English royal invasion of Scotland, his army reaching the north-east while his fleet harried Caithness. Constantine\'s reply was the great coalition of 937: Alba, Strathclyde, and Dublin together at the Battle of Brunanburh, where the allies were cut down in the bloodiest battle of the age and a son of Constantine was left among the dead. He kept his throne — Æthelstan pursued no conquest — and reigned six more years before laying the kingship down.'
        ]
      },
      {
        title: 'Abdication and death',
        paragraphs: [
          'Around 943 Constantine resigned the kingship to Malcolm I, son of his predecessor Donald II — the alternation between the two branches of the Alpínid line resuming — and entered the community of the Céli Dé at St Andrews, where the sources style him abbot. He lived there nearly a decade; one Irish chronicle claims that in his old age he urged or blessed a raid south into English territory, a story more likely memory of his lifelong policy than fact about an aged monk. He died in peace in 952 — a death in religion, in bed, that almost no other king of his line achieved — and tradition places his burial at St Andrews.'
        ]
      },
      {
        title: 'Legacy',
        paragraphs: [
          'Constantine\'s forty-three years made the kingdom of Alba durable. He held the realm together through the worst of the Viking age, fixed its partnership with the church at Scone and St Andrews, and — even in defeat at Brunanburh — established that the king of Alba was one of the powers of Britain, courted and feared by Dublin and Wessex alike. Historians of early Scotland, Alex Woolf among them, treat his reign as the period in which "Alba" ceased to be a name and became a state; the royal line he stabilised ran on through Malcolm I to the kings of medieval Scotland. His abdication gave Scottish tradition its lasting image of him: the old king of the battles ending his days in the cloister above the sea at St Andrews.'
        ]
      }
    ],
    keyAchievements: [
      { title: 'Survival of the Viking storm', description: 'Defended Alba through the return of the Uí Ímair, meeting Ragnall\'s Norse at Corbridge in 918.' },
      { title: 'The Scone covenant of 906', description: 'With Bishop Cellach at the Hill of Faith, made the first recorded royal pledge to the church in Scottish history.' },
      { title: 'Forty-three years of kingship', description: 'The longest reign of any early Scottish king, ended by his own choice around 943.' }
    ],
    timeline: [
      { date: '900', title: 'Becomes King of Alba', description: 'Takes the kingship after his cousin Donald II is killed at Dunnottar by Norse raiders.' },
      { date: '906', title: 'Covenant at Scone', description: 'With Bishop Cellach on the Hill of Faith at Scone, pledges to uphold the laws and rights of the church — the first such recorded act in Scotland.' },
      { date: '918', title: 'Battle at Corbridge', description: 'Meets Ragnall\'s Norse army at Corbridge on the Tyne; the fight is bloody and indecisive but checks Norse expansion beyond the Tweed.' },
      { date: '927', title: 'Terms at Eamont', description: 'Among the northern kings who accept Æthelstan\'s supremacy after the English king takes York.' },
      { date: '934', title: 'Æthelstan invades Alba', description: 'The English king marches north by land and sea, harrying as far as the north-east; Constantine is forced to terms.' },
      { date: '937', title: 'Defeat at Brunanburh', description: 'Joins Olaf Guthfrithson and Owain of Strathclyde in the great coalition destroyed at the Battle of Brunanburh, where one of his sons is killed.', links: [{ title: 'Battle of Brunanburh', type: 'event', slug: 'battle-of-brunanburh', label: 'The coalition\'s defeat' }] },
      { date: 'c. 943', title: 'Abdicates to St Andrews', description: 'Resigns the kingship to Malcolm I and enters the Céli Dé community of St Andrews as a religious.' },
      { date: '952', title: 'Dies at St Andrews', description: 'Dies in religious retirement after nearly a decade in the community, and is buried there by tradition.' }
    ],
    relatedEntries: {
      people: [
        { title: 'Æthelstan', type: 'person', slug: 'aethelstan', label: 'His overlord, invader, and victor at Brunanburh' },
        { title: 'Olaf Guthfrithson', type: 'person', slug: 'olaf-guthfrithson', label: 'His son-in-law and coalition ally' }
      ],
      events: [
        { title: 'Battle of Brunanburh', type: 'event', slug: 'battle-of-brunanburh', label: 'Coalition leader, 937' }
      ],
      locations: [
        { title: 'Kingdom of Scotland', type: 'location', slug: 'kingdom-of-scotland', label: 'The realm of Alba he ruled for forty-three years' },
        { title: 'Scone', type: 'location', slug: 'scone', label: 'Site of his covenant with the church, 906' }
      ]
    },
    sources: [
      { title: 'Constantine II of Scotland — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Constantine_II_of_Scotland' },
      { title: 'From Pictland to Alba, 789–1070', author: 'Alex Woolf', type: 'book' },
      { title: 'Wikimedia Commons image record (St Andrews Cathedral ruins)', author: 'Wikimedia Commons', type: 'image source', url: pg('St Andrews Cathedral ruins - geograph.org.uk - 6316273.jpg') }
    ],
    isRuler: true,
    succession: {
      office: 'King of Alba',
      predecessor: { displayName: 'Donald II', note: 'His cousin Domnall mac Causantín, killed at Dunnottar in 900.' },
      successor: { displayName: 'Malcolm I', note: 'Donald II\'s son Máel Coluim mac Domnaill, to whom Constantine resigned the kingship around 943 when he entered religion at St Andrews.' }
    }
  },

  {
    id: 'john-duke-of-bedford', type: 'character', name: 'John, Duke of Bedford',
    born: 1389, died: 1435, deathAge: '46', causeOfDeath: 'Illness (unrecorded in detail)',
    restingPlace: 'Rouen Cathedral',
    location: 'Kingdom of England',
    aliases: ['John of Lancaster', 'Duke of Bedford'],
    image: fp('John, Duke of Bedford - British Library Add MS 18850 f256v.jpg'),
    summary: 'Brother of Henry V and regent of France for the infant Henry VI — victor of Verneuil in 1424, ruler of Lancastrian France through the era of Joan of Arc, and dead at Rouen in 1435 as his life\'s work unravelled.',
    title: 'Duke of Bedford, Regent of France',
    roles: ['Regent of France for Henry VI', 'Victor of Verneuil', 'Governor of Lancastrian Normandy'],
    birth: { date: '20 June 1389', place: { name: 'England' }, note: 'Third surviving son of Henry IV of England; brother of Henry V.' },
    death: { date: '14 September 1435', place: { name: 'Rouen' }, circumstance: 'Died at Rouen Castle as the Congress of Arras broke up — days before Burgundy formally abandoned the English alliance he had spent his regency preserving.' },
    quickFacts: { realm: 'Lancastrian France and England', dynasty: 'Lancaster', culture: 'English', knownFor: 'the regency of France, victory at Verneuil, and the government under which Joan of Arc was tried' },
    imageInfo: {
      caption: 'John of Lancaster, Duke of Bedford, kneeling before St George — from the Bedford Hours, the great Paris manuscript made for him (British Library, Add MS 18850, f. 256v).',
      creator: 'The Bedford Master and workshop',
      date: 'c. 1410–1430',
      source: 'British Library / Wikimedia Commons',
      sourceUrl: pg('John, Duke of Bedford - British Library Add MS 18850 f256v.jpg'),
      license: 'Public domain',
      note: 'A contemporary donor portrait from Bedford\'s own book of hours — one of the finest surviving likenesses of any English magnate of the age.'
    },
    overview: [
      'John of Lancaster, Duke of Bedford, carried the heaviest inheritance in English history: when Henry V died in 1422 leaving a nine-month-old heir, Bedford became regent of the France his brother had half-conquered. For thirteen years he governed Lancastrian France from Paris and Rouen — general, administrator, and diplomat at once — holding together the English occupation and the Burgundian alliance on which it depended.',
      'His greatest day was Verneuil in August 1424, the "second Agincourt", where his army destroyed the Franco-Scottish host and killed the Earls of Buchan and Douglas. His hardest years followed the failed siege of Orléans in 1429, when Joan of Arc turned the war; her trial and burning at Rouen in 1431 happened under his government, and his answering move — crowning the boy Henry VI in Paris that December — could not stop the erosion. He died at Rouen in September 1435, in the very days the Congress of Arras took Burgundy out of the English alliance for good.'
    ],
    greatestFeats: [
      'Regent of France for thirteen years',
      'Won the battle of Verneuil, the "second Agincourt"',
      'Held the Anglo-Burgundian alliance together for a decade'
    ],
    contentSections: [
      {
        title: 'Overview',
        paragraphs: [
          'John of Lancaster, Duke of Bedford, carried the heaviest inheritance in English history: when Henry V died in 1422 leaving a nine-month-old heir, Bedford became regent of the France his brother had half-conquered. For thirteen years he governed Lancastrian France from Paris and Rouen — general, administrator, and diplomat at once — holding together the English occupation and the Burgundian alliance on which it depended.',
          'His greatest day was Verneuil in August 1424, the "second Agincourt", where his army destroyed the Franco-Scottish host and killed the Earls of Buchan and Douglas. His hardest years followed the failed siege of Orléans in 1429, when Joan of Arc turned the war; her trial and burning at Rouen in 1431 happened under his government, and his answering move — crowning the boy Henry VI in Paris that December — could not stop the erosion. He died at Rouen in September 1435, in the very days the Congress of Arras took Burgundy out of the English alliance for good.'
        ]
      },
      {
        title: 'Birth and early life',
        paragraphs: [
          'John was born on 20 June 1389, third surviving son of the future Henry IV, and grew up in the hard school of the Lancastrian usurpation. As a teenager he held the East March against Scotland as warden; created Duke of Bedford at his brother Henry V\'s accession in 1413, he served as Lieutenant of England — the kingdom\'s governor — during the Agincourt campaign of 1415, and in August 1416 commanded the fleet that broke the Franco-Genoese blockade of Harfleur in a day-long sea battle at the mouth of the Seine. The pattern of his life was set early: the utterly reliable brother, trusted with whatever the king could not do himself.'
        ]
      },
      {
        title: 'Character and Personality',
        paragraphs: [
          'Bedford is one of the rare medieval commanders whose enemies wrote his best character reference: French chroniclers of the next generation, and the Burgundian Waurin who fought at Verneuil, remembered him as wise, just, and honourable — a regent who governed Normandy with a real concern for order and law, kept his soldiers in better discipline than most, and was mourned in Rouen. His piety and magnificence were of a piece: the Bedford Hours, the great illuminated manuscript he commissioned in Paris, and his patronage of the university and the abbeys were statements that Lancastrian France was a government, not a garrison.',
          'He was also the man under whose administration Joan of Arc was bought from her Burgundian captors, tried by a church court under Bishop Pierre Cauchon, and burned in the market square of Rouen in May 1431 — a proceeding his government needed, financed, and used. His letters call her a "limb of the Fiend"; whatever the legal forms, the responsibility of his regime is not in doubt, and any honest portrait holds the just administrator and the sponsor of that trial in the same frame. Modern historians tend to echo the contemporary verdict with that correction attached: the ablest and most principled of Henry IV\'s sons, spending his health and fortune on an occupation that could not, in the end, be held.'
        ]
      },
      {
        title: 'Regent of France',
        paragraphs: [
          'Henry V\'s death in August 1422, followed within weeks by Charles VI\'s, made the infant Henry VI king of England and — under the Treaty of Troyes — of France; Bedford took the French regency. His first tasks were military, and he met them: the Franco-Scottish army that had beaten the English at Baugé in 1421 was brought to battle at Verneuil on 17 August 1424 and annihilated — the Battle of Verneuil killed the Earl of Buchan, constable of France, and Archibald Douglas, and broke Scotland\'s army in France as a fighting force. Contemporaries ranked the victory with Agincourt, and it secured Lancastrian France south to the Loire.',
          'The regency\'s foundation was the Burgundian alliance, and Bedford\'s marriage in 1423 to Anne of Burgundy, sister of Duke Philip the Good, made it personal; by most accounts the marriage was also genuinely close. The turning point came in 1428–29: the great siege of Orléans, undertaken against his better judgment after the Earl of Salisbury\'s death, collapsed when Joan of Arc brought relief in May 1429, and the field army was destroyed at Patay in June — John Talbot captured, the myth of English invincibility gone, and Charles VII crowned at Reims within a month. Bedford stabilised the line, arranged Henry VI\'s Paris coronation in December 1431 to answer Reims, and fought on; but Anne\'s death in 1432, his hasty remarriage to Jacquetta of Luxembourg, which offended Duke Philip, and England\'s failing money and manpower wore the regency down.'
        ]
      },
      {
        title: 'Death',
        paragraphs: [
          'In the summer of 1435 the powers met at the Congress of Arras to negotiate a general peace; the English delegation, refusing to surrender the royal title, withdrew, and Burgundy prepared to make terms with Charles VII alone. Bedford, ill at Rouen, died in the castle there on 14 September 1435 — a week before Philip the Good signed the Treaty of Arras that ended the Anglo-Burgundian alliance. He was buried in Rouen Cathedral, beside the high altar, in the capital of the Normandy he had governed. Even after the French recovery of the city, his tomb was respected; when a courtier later urged its destruction, King Charles VII\'s reported refusal — let the body of a prince who would have been honoured by any realm lie in peace — became part of Bedford\'s legend.'
        ]
      },
      {
        title: 'Legacy',
        paragraphs: [
          'Bedford\'s regency was the high-water mark and the long ebb of English France, and historians have generally judged that no one could have managed the ebb better. Verneuil stands as one of the great English victories of the Hundred Years\' War; his administration of Normandy — parlement justice, sound coinage, university patronage — is treated by historians of the occupation as the most serious attempt England ever made to govern rather than merely hold French territory. Within five years of his death Paris was lost; within twenty, everything but Calais. The Bedford Hours in the British Library, with his kneeling portrait, remains the most vivid personal monument of the man, and his tomb at Rouen the emblem of an Englishman who died, as he had lived, in Lancastrian France.'
        ]
      }
    ],
    keyAchievements: [
      { title: 'Victory at Verneuil', description: 'Destroyed the Franco-Scottish army on 17 August 1424, killing the Earls of Buchan and Douglas.' },
      { title: 'Government of Lancastrian France', description: 'Ruled the occupied kingdom from Paris and Rouen for thirteen years with unusual administrative seriousness.' },
      { title: 'The Bedford Hours', description: 'Commissioned one of the greatest illuminated manuscripts of the age, preserving his contemporary portrait.' }
    ],
    timeline: [
      { date: '20 June 1389', title: 'Born', description: 'Born third surviving son of the future Henry IV of England.' },
      { date: '1415', title: 'Lieutenant of England', description: 'Governs England while Henry V wins the Battle of Agincourt; commands the sea relief of Harfleur the next year.' },
      { date: '1422', title: 'Regent of France', description: 'Takes the regency of France for the infant Henry VI after the deaths of Henry V and Charles VI.' },
      { date: '17 August 1424', title: 'Victory at Verneuil', description: 'Annihilates the Franco-Scottish army at the Battle of Verneuil — the "second Agincourt" — killing Buchan and Douglas.', links: [{ title: 'Battle of Verneuil', type: 'event', slug: 'battle-of-verneuil', label: 'His greatest victory' }] },
      { date: '1429', title: 'Orléans and Patay', description: 'The siege of Orléans collapses before Joan of Arc\'s relief and the field army is destroyed at the Battle of Patay; the war turns.', links: [{ title: 'Siege of Orléans', type: 'event', slug: 'siege-of-orleans', label: 'The turning point against him' }] },
      { date: '30 May 1431', title: 'Joan of Arc burned at Rouen', description: 'The Maid is executed after a church trial conducted under his government; in December he answers Reims by crowning Henry VI in Paris.' },
      { date: '14 September 1435', title: 'Dies at Rouen', description: 'Dies as the Congress of Arras ends the Burgundian alliance; buried in Rouen Cathedral.' }
    ],
    relatedEntries: {
      people: [
        { title: 'Henry V of England', type: 'person', slug: 'henry-v-of-england', label: 'His brother, whose conquest he inherited' },
        { title: 'Joan of Arc', type: 'person', slug: 'joan-of-arc', label: 'Turned the war against him; tried under his government' },
        { title: 'Charles VII of France', type: 'person', slug: 'charles-vii-of-france', label: 'The rival king who outlasted his regency' },
        { title: 'John Talbot, Earl of Shrewsbury', type: 'person', slug: 'john-talbot', label: 'His captain, captured at Patay' }
      ],
      events: [
        { title: 'Battle of Verneuil', type: 'event', slug: 'battle-of-verneuil', label: 'Commander and victor, 1424' },
        { title: 'Siege of Orléans', type: 'event', slug: 'siege-of-orleans', label: 'The siege whose failure broke his position' }
      ],
      locations: [
        { title: 'Rouen', type: 'location', slug: 'rouen', label: 'His capital in Normandy, where he died and lies buried' }
      ]
    },
    sources: [
      { title: 'John of Lancaster, 1st Duke of Bedford — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/John_of_Lancaster,_1st_Duke_of_Bedford' },
      { title: 'Conquest: The English Kingdom of France 1417–1450', author: 'Juliet Barker', type: 'book' },
      { title: 'Wikimedia Commons image record (Bedford Hours donor portrait)', author: 'British Library / Wikimedia Commons', type: 'image source', url: pg('John, Duke of Bedford - British Library Add MS 18850 f256v.jpg') }
    ]
  }
]

// Upsert characters by id
let added = 0, updated = 0
for (const c of characters) {
  const i = data.characters.findIndex((x) => x.id === c.id)
  if (i >= 0) { data.characters[i] = c; updated++ } else { data.characters.push(c); added++ }
}

// ---------------------------------------------------------------------------
// B. Link leaders on the battles (participants[].leaders slug + legacy
//    top-level leaders[].personId)
// ---------------------------------------------------------------------------
const ev = (id) => data.events.find((e) => e.id === id)

function linkLeader(eventId, nameRe, slug) {
  const e = ev(eventId)
  if (!e) { console.warn(`MISSING EVENT ${eventId}`); return }
  for (const p of e.participants || []) {
    for (const l of p.leaders || []) {
      const nm = l.name || l.title || ''
      if (nameRe.test(nm) && l.slug !== slug) { l.slug = slug; l.type = 'person' }
    }
  }
  for (const l of e.leaders || []) {
    if (nameRe.test(l.name || '') && l.personId !== slug) l.personId = slug
  }
}

linkLeader('battle-of-edington', /^Guthrum$/, 'guthrum')
linkLeader('battle-of-patay', /John Talbot/, 'john-talbot')
linkLeader('battle-of-castillon', /John Talbot/, 'john-talbot')
linkLeader('battle-of-nicopolis', /^Sigismund of Hungary$/, 'sigismund-of-luxembourg')
linkLeader('battle-of-nicopolis', /^John the Fearless$/, 'john-the-fearless')
linkLeader('battle-of-mohi', /^Batu Khan$/, 'batu-khan')
linkLeader('battle-of-mohi', /^Subutai$/, 'subutai')
linkLeader('battle-of-varna', /^John Hunyadi$/, 'john-hunyadi')
linkLeader('battle-of-stirling-bridge', /^Andrew Moray$/, 'andrew-moray')
linkLeader('battle-of-brunanburh', /^Olaf Guthfrithson$/, 'olaf-guthfrithson')
linkLeader('battle-of-brunanburh', /^Constantine II of Scotland$/, 'constantine-ii-of-scotland')
linkLeader('battle-of-verneuil', /^John, Duke of Bedford$/, 'john-duke-of-bedford')

// Add Guthrum to Edington's related entries
{
  const e = ev('battle-of-edington')
  e.relatedEntries = e.relatedEntries || {}
  e.relatedEntries.people = e.relatedEntries.people || []
  if (!e.relatedEntries.people.some((p) => p.slug === 'guthrum')) {
    e.relatedEntries.people.push({ name: 'Guthrum', title: 'Guthrum', type: 'person', slug: 'guthrum', label: 'The defeated Danish commander' })
  }
}

// ---------------------------------------------------------------------------
// C. Targeted graph fixes
// ---------------------------------------------------------------------------

// Wars of Scottish Independence: William Wallace in leaders + related entries
{
  const e = ev('wars-of-scottish-independence')
  e.leaders = e.leaders || []
  if (!e.leaders.some((l) => l.personId === 'william-wallace')) {
    e.leaders.push({ name: 'William Wallace', faction: 'Scottish resistance', personId: 'william-wallace' })
  }
  e.relatedEntries = e.relatedEntries || {}
  e.relatedEntries.people = e.relatedEntries.people || []
  if (!e.relatedEntries.people.some((p) => p.slug === 'william-wallace')) {
    e.relatedEntries.people.push({ title: 'William Wallace', type: 'person', slug: 'william-wallace', label: 'Victor of Stirling Bridge and Guardian of Scotland' })
  }
}

// Battle of Kosovo: Bayezid I took command when Murad I was killed.
// (Reciprocity holds: bayezid-i already lists battle-of-kosovo in his related entries.)
{
  const e = ev('battle-of-kosovo')
  e.leaders = e.leaders || []
  if (!e.leaders.some((l) => l.personId === 'bayezid-i')) {
    e.leaders.push({ name: 'Bayezid I', faction: 'Ottoman army', personId: 'bayezid-i' })
  }
  const ottoman = (e.participants || []).find((p) => /ottoman/i.test(p.side || ''))
  if (ottoman) {
    ottoman.leaders = ottoman.leaders || []
    if (!ottoman.leaders.some((l) => l.slug === 'bayezid-i')) {
      ottoman.leaders.push({ name: 'Bayezid I', title: 'Bayezid I', type: 'person', slug: 'bayezid-i' })
    }
  }
  e.relatedEntries = e.relatedEntries || {}
  e.relatedEntries.people = e.relatedEntries.people || []
  if (!e.relatedEntries.people.some((p) => p.slug === 'bayezid-i')) {
    e.relatedEntries.people.push({ title: 'Bayezid I', type: 'person', slug: 'bayezid-i', label: 'Took command of the Ottoman army when Murad I was killed' })
  }
}

// Siege of Lisbon: the qadi's name is not recorded — say so, matching the
// battle-of-ourique convention for unnamed commanders.
{
  const e = ev('siege-of-lisbon')
  for (const l of e.leaders || []) {
    if (/qadi/i.test(l.name || '') && !/not recorded/i.test(l.name || '')) {
      l.name = 'The qadi of Lisbon (name not recorded) and the garrison'
    }
  }
  for (const p of e.participants || []) {
    for (const l of p.leaders || []) {
      if (/qadi/i.test(l.name || '') && !/not recorded/i.test(l.name || '')) {
        l.name = 'The qadi of Lisbon (name not recorded)'
      }
    }
  }
}

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2) + '\n')
console.log(`Characters: ${added} added, ${updated} updated. Battle leader links and graph fixes applied.`)
