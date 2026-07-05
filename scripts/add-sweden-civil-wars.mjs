/**
 * Swedish civil-war era: the Stenkil dynasty tail and the Sverker-Erik
 * alternation. Creates six kings/jarls with real images (Philip Halstensson,
 * Inge the Younger, Charles VII Sverkersson, John I Sverkersson, Eric XI
 * Eriksson, Ulf Fase) and converts the two no-image usurper/co-king moments
 * (Halsten Stenkilsson, Magnus Henriksson) to disputed status with notes. Links
 * the Swedish royal line continuously from Inge the Elder to Valdemar. Idempotent.
 */
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))

const SWE = { title: 'Kingdom of Sweden', type: 'location', slug: 'kingdom-of-sweden' }
const per = (slug, title, label) => ({ title, type: 'person', slug, label })
const ev = (slug, title, label) => ({ title, type: 'event', slug, label })
const src = (title, url) => ({ title, author: 'Encyclopaedia Britannica', type: 'encyclopedia', url })
const vreta = 'A detail of the shared grave monument of the co-kings Inge the Younger and Philip at Vreta Abbey (the surviving monument is a later cenotaph, c. 1580), not a likeness from life.'

const people = [
  // ── PHILIP HALSTENSSON ────────────────────────────────────────────────────────
  {
    id: 'philip-halstensson', type: 'character', name: 'Philip Halstensson', born: 1080, died: 1118,
    deathAge: 'about 38', causeOfDeath: 'Unknown', restingPlace: 'Vreta Abbey',
    location: 'Kingdom of Sweden', aliases: ['Philip of Sweden', 'Filip Halstensson'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Ingold_the_Younger_of_Sweden_%26_Philip_of_Sweden_%281110s%29_grave_detail_2009.jpg',
    summary: 'King of Sweden (c. 1105–1118) of the Stenkil dynasty, who ruled jointly with his brother Inge the Younger in the obscure last years of their house.',
    title: 'King of Sweden', roles: ['King of Sweden'],
    birth: { date: 'c. 1080', place: { name: 'Sweden' }, note: 'Son of Halsten Stenkilsson; nephew of Inge the Elder.' },
    death: { date: 'c. 1118', place: { name: 'Sweden' }, circumstance: 'Died around 1118 after a co-reign with his brother; little of his rule is recorded.' },
    quickFacts: { realm: 'Kingdom of Sweden', dynasty: 'House of Stenkil', culture: 'Swedish', knownFor: 'his joint reign in the last years of the Stenkil dynasty' },
    imageInfo: { caption: 'A detail of the grave monument of the co-kings Inge the Younger and Philip at Vreta Abbey.', creator: 'Grave monument (later cenotaph)', date: 'Monument c. 1580 (photographed 2009)', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Ingold_the_Younger_of_Sweden_%26_Philip_of_Sweden_(1110s)_grave_detail_2009.jpg', license: 'Public domain', note: vreta },
    overview: [
      'Philip Halstensson was king of Sweden in the early twelfth century, one of the last rulers of the Stenkil dynasty. A son of Halsten Stenkilsson and nephew of Inge the Elder, he came to the throne on his uncle\'s death and ruled jointly with his brother, Inge the Younger.',
      'His reign is among the most obscure in Swedish history, poorly documented and modest in achievement, falling in the shadowy period before the great struggle between the houses of Sverker and Erik. He died around 1118, leaving his brother Inge the Younger to rule on as the last of their line.'
    ],
    greatestFeats: ['King of Sweden'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Philip Halstensson was king of Sweden in the early twelfth century, one of the last rulers of the Stenkil dynasty. A son of Halsten Stenkilsson and nephew of Inge the Elder, he came to the throne on his uncle\'s death and ruled jointly with his brother, Inge the Younger.',
        'His reign is among the most obscure in Swedish history, poorly documented and modest in achievement, falling in the shadowy period before the great struggle between the houses of Sverker and Erik. He died around 1118, leaving his brother Inge the Younger to rule on as the last of their line.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Philip was born about 1080, a son of Halsten Stenkilsson, who had briefly been king, and a grandson of King Stenkil, founder of the dynasty. His uncle Inge the Elder was the dominant figure of the family, a long-reigning and vigorous Christian king; Philip and his brother Inge the Younger grew up as the heirs of that line.',
        'On the death of Inge the Elder, the two brothers succeeded together to the Swedish throne.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Almost nothing survives from which to reconstruct Philip\'s character; he belongs to the deepest obscurity of the early Swedish monarchy, a king known little more than by name and lineage. The sparse sources record no great deeds, no wars, and no lawmaking that can be securely attributed to him.',
        'What can be said is that he ruled, in the manner of his family, as one of a pair of royal brothers rather than as a sole king — a shared kingship that suggests a realm still loosely organised, in which authority was held collectively by a ruling kin rather than concentrated in one man. He is a figure defined almost entirely by his place in the dynasty, the elder of the last two Stenkil kings, remembered chiefly because his line was about to end.'
      ]},
      { title: 'A joint reign', paragraphs: [
        'Philip and Inge the Younger ruled Sweden together, continuing the Christian kingship their uncle and grandfather had built up against the still-strong pagan traditions of the Svear. The joint rule of brothers was characteristic of the early Swedish monarchy, in which the kingship was often shared and the realm loosely held.',
        'Philip\'s part in this reign left little mark on the record. He died around 1118, after which his brother Inge the Younger continued to rule alone until the extinction of their dynasty.'
      ]},
      { title: 'Death', paragraphs: [
        'Philip died around 1118 and was, by tradition, buried at Vreta Abbey, where a later monument commemorates him alongside his brother. Inge the Younger reigned on as the last king of the Stenkil line.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Philip Halstensson is remembered as one of the last, and least known, kings of the Stenkil dynasty — a figure of the obscure dawn of the Swedish monarchy. With the death of his brother Inge the Younger a few years later, their house ended, and Sweden passed into the long and violent alternation between the rival royal houses of Sverker and Erik that would dominate the following century.'
      ]}
    ],
    keyAchievements: [
      { title: 'King of Sweden', description: 'One of the last kings of the Stenkil dynasty, ruling jointly with his brother.' }
    ],
    timeline: [
      { date: 'c. 1080', title: 'Born', description: 'Born a son of Halsten Stenkilsson, grandson of King Stenkil.' },
      { date: 'c. 1105', title: 'Becomes king with his brother', description: 'Succeeds his uncle Inge the Elder, ruling jointly with Inge the Younger.', links: [per('inge-the-elder', 'Inge the Elder', 'His uncle and predecessor'), SWE] },
      { date: 'c. 1110', title: 'Joint Christian kingship', description: 'Continues the Christian monarchy of his family over the Svear and Götar.' },
      { date: 'c. 1118', title: 'Dies', description: 'Dies after a co-reign; his brother Inge the Younger rules on alone.', links: [per('inge-the-younger', 'Inge the Younger', 'His brother and successor')] },
      { date: 'c. 1125', title: 'End of the Stenkil dynasty', description: 'The death of his brother soon after ends their line and opens the Sverker-Erik struggle.' }
    ],
    relatedEntries: {
      locations: [ { ...SWE, label: 'His kingdom' } ],
      people: [ per('inge-the-elder', 'Inge the Elder', 'His uncle and predecessor'), per('inge-the-younger', 'Inge the Younger', 'His brother and co-king') ],
      events: []
    },
    sources: [ src('Sweden — history', 'https://www.britannica.com/place/Sweden/History'), src('Stenkil | king of Sweden', 'https://www.britannica.com/place/Sweden') ],
    isRuler: true,
    succession: { office: 'King of Sweden',
      predecessor: { personSlug: 'inge-the-elder', displayName: 'Inge the Elder', note: 'His uncle, the long-reigning Christian king, on whose death the brothers succeeded together.' },
      successor: { personSlug: 'inge-the-younger', displayName: 'Inge the Younger', note: 'His brother and co-king, who ruled on as the last of the Stenkil dynasty.' } }
  },

  // ── INGE THE YOUNGER ──────────────────────────────────────────────────────────
  {
    id: 'inge-the-younger', type: 'character', name: 'Inge the Younger', born: 1082, died: 1125,
    deathAge: 'about 43', causeOfDeath: 'Illness, by tradition poisoned', restingPlace: 'Vreta Abbey',
    location: 'Kingdom of Sweden', aliases: ['Inge the Younger', 'Inge Halstensson', 'Ingold the Younger'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Ingold_the_Younger_of_Sweden_%26_Philip_of_Sweden_%281110s%29_grave_detail_1905.jpg',
    summary: 'King of Sweden (c. 1105–1125), the last ruler of the Stenkil dynasty, whose death without a clear heir opened the century-long struggle between the houses of Sverker and Erik.',
    title: 'King of Sweden', roles: ['King of Sweden'],
    birth: { date: 'c. 1082', place: { name: 'Sweden' }, note: 'Son of Halsten Stenkilsson; brother of Philip.' },
    death: { date: 'c. 1125', place: { name: 'Vreta' }, circumstance: 'Died around 1125, by later tradition poisoned; the last king of the Stenkil dynasty.' },
    quickFacts: { realm: 'Kingdom of Sweden', dynasty: 'House of Stenkil', culture: 'Swedish', knownFor: 'being the last king of the Stenkil dynasty' },
    imageInfo: { caption: 'A detail of the grave monument of the co-kings Inge the Younger and Philip at Vreta Abbey.', creator: 'Grave monument (later cenotaph)', date: 'Monument c. 1580 (photographed 1905)', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Ingold_the_Younger_of_Sweden_%26_Philip_of_Sweden_(1110s)_grave_detail_1905.jpg', license: 'Public domain', note: vreta },
    overview: [
      'Inge the Younger was king of Sweden in the early twelfth century, the last ruler of the Stenkil dynasty. A son of Halsten Stenkilsson, he ruled at first jointly with his brother Philip and then, after Philip\'s death, alone, continuing the Christian kingship his family had established over the Swedes.',
      'His death around 1125, without a son to follow him, ended the Stenkil line and left the Swedish throne open. There followed the long and bloody rivalry between the houses of Sverker and Erik, whose alternating and often violent successions would define Swedish history for the next hundred years.'
    ],
    greatestFeats: ['King of Sweden', 'Last king of the Stenkil dynasty'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Inge the Younger was king of Sweden in the early twelfth century, the last ruler of the Stenkil dynasty. A son of Halsten Stenkilsson, he ruled at first jointly with his brother Philip and then, after Philip\'s death, alone, continuing the Christian kingship his family had established over the Swedes.',
        'His death around 1125, without a son to follow him, ended the Stenkil line and left the Swedish throne open. There followed the long and bloody rivalry between the houses of Sverker and Erik, whose alternating and often violent successions would define Swedish history for the next hundred years.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Inge was born about 1082, the younger son of Halsten Stenkilsson and grandson of King Stenkil. With his brother Philip he inherited the Swedish throne on the death of their formidable uncle, Inge the Elder — from whom the younger Inge took his royal name.',
        'He grew up in a kingdom still only partly Christian, where the old pagan cult remained strong at the great temple of Uppsala and the king\'s authority was limited and shared.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Like his brother, Inge the Younger is a deeply obscure figure, and the sources preserve little beyond his name, his lineage, and the tradition of his death. He appears as a king of the old, loosely organised Swedish monarchy — one of a ruling pair rather than a commanding sole ruler, presiding over a realm in which royal power was still weak and contested.',
        'The one vivid thing later tradition attached to him is the manner of his end: the story that he was poisoned, whether by rivals or by design, at Vreta. Whatever the truth, it fits the pattern of a monarchy about to descend into a century of murder and usurpation. Inge the Younger stands, more than for anything he did, as the last of his house — the quiet close of the Stenkil dynasty before the storm.'
      ]},
      { title: 'The last Stenkil king', paragraphs: [
        'After his brother Philip died around 1118, Inge the Younger ruled Sweden alone. His reign continued the work of consolidating a Christian monarchy that his uncle and grandfather had advanced, but the kingdom remained fragile, its unity provisional and its succession uncertain.',
        'When Inge died around 1125 — by later tradition poisoned at Vreta — he left no son to inherit. The Stenkil dynasty, which had given Sweden its first line of firmly Christian kings, came to an end with him.'
      ]},
      { title: 'Death', paragraphs: [
        'Inge the Younger died around 1125 and was buried at Vreta, where a later monument commemorates him beside his brother Philip. His death without an heir threw open the Swedish succession.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Inge the Younger is remembered as the last king of the Stenkil dynasty, whose death without an heir marks a great turning point in Swedish history. From the vacuum he left arose the rival royal houses of Sverker and Erik, whose century-long contest — a grim succession of usurpations, battles, and murders — forms the substance of the Swedish civil-war era that followed.'
      ]}
    ],
    keyAchievements: [
      { title: 'King of Sweden', description: 'Ruled with his brother and then alone as the last Stenkil king.' },
      { title: 'Last of the Stenkil dynasty', description: 'His death without an heir opened the Sverker-Erik struggle.' }
    ],
    timeline: [
      { date: 'c. 1082', title: 'Born', description: 'Born a son of Halsten Stenkilsson, grandson of King Stenkil.' },
      { date: 'c. 1105', title: 'Becomes king with his brother', description: 'Succeeds Inge the Elder, ruling jointly with his brother Philip.', links: [per('philip-halstensson', 'Philip Halstensson', 'His brother and co-king'), SWE] },
      { date: 'c. 1118', title: 'Rules alone', description: 'Continues as sole king after the death of his brother Philip.' },
      { date: 'c. 1125', title: 'Dies without an heir', description: 'Dies, by tradition poisoned, ending the Stenkil dynasty.' },
      { date: 'c. 1130', title: 'Sverker takes the throne', description: 'The vacant throne passes to Sverker I, beginning the Sverker-Erik era.', links: [per('sverker-i-of-sweden', 'Sverker I of Sweden', 'Who took the vacant throne')] }
    ],
    relatedEntries: {
      locations: [ { ...SWE, label: 'His kingdom' } ],
      people: [ per('philip-halstensson', 'Philip Halstensson', 'His brother and co-king'), per('sverker-i-of-sweden', 'Sverker I of Sweden', 'Who took the throne after his death') ],
      events: []
    },
    sources: [ src('Sweden — history', 'https://www.britannica.com/place/Sweden/History'), src('Stenkil | king of Sweden', 'https://www.britannica.com/place/Sweden') ],
    isRuler: true,
    succession: { office: 'King of Sweden',
      predecessor: { personSlug: 'philip-halstensson', displayName: 'Philip Halstensson', note: 'His brother and co-king, after whose death Inge the Younger ruled alone.' },
      successor: { personSlug: 'sverker-i-of-sweden', displayName: 'Sverker I of Sweden', note: 'Who took the throne vacant at the extinction of the Stenkil dynasty, founding the House of Sverker.' } }
  },

  // ── CHARLES VII SVERKERSSON ───────────────────────────────────────────────────
  {
    id: 'charles-vii-sverkersson', type: 'character', name: 'Charles VII Sverkersson', born: 1130, died: 1167,
    deathAge: 'about 37', causeOfDeath: 'Killed by his rival\'s forces', restingPlace: 'Alvastra Abbey',
    location: 'Kingdom of Sweden', aliases: ['Karl Sverkersson', 'Charles VII of Sweden', 'Carl I'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Carl_I_of_Sweden_seal_c_1165_detail.jpg',
    summary: 'King of Sweden (1161–1167) of the House of Sverker, who took the throne after the fall of the usurper Magnus Henriksson and founded the archbishopric of Uppsala before being killed by Knut Eriksson.',
    title: 'King of Sweden', roles: ['King of Sweden'],
    birth: { date: 'c. 1130', place: { name: 'Sweden' }, note: 'Son of Sverker I; of the House of Sverker.' },
    death: { date: '12 April 1167', place: { name: 'Visingsö' }, circumstance: 'Killed on the island of Visingsö by the forces of Knut Eriksson, of the rival House of Erik.' },
    quickFacts: { realm: 'Kingdom of Sweden', dynasty: 'House of Sverker', culture: 'Swedish', knownFor: 'founding the archbishopric of Uppsala and his death in the Sverker-Erik feud' },
    imageInfo: { caption: 'A detail of the royal seal of Charles VII (Karl Sverkersson) of Sweden, c. 1165.', creator: 'Royal Swedish chancery', date: 'c. 1165', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Carl_I_of_Sweden_seal_c_1165_detail.jpg', license: 'Public domain', note: 'A detail of the king\'s contemporary seal — among the oldest surviving Swedish royal seals.' },
    overview: [
      'Charles VII Sverkersson was king of Sweden from 1161 to 1167, a ruler of the House of Sverker during the violent alternation of the crown between his family and the rival House of Erik. He came to the throne after the brief usurpation of Magnus Henriksson, the killer of St Eric, whom Charles overthrew.',
      'His reign saw an important consolidation of the Swedish Church: in 1164 the archbishopric of Uppsala was founded, giving Sweden its own metropolitan see, independent of Lund. But the feud between the royal houses was unrelenting, and in 1167 Charles was surprised and killed on the island of Visingsö by the forces of Knut Eriksson, the son of St Eric, who seized the throne in his place.'
    ],
    greatestFeats: ['King of Sweden', 'Founded the archbishopric of Uppsala (1164)'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Charles VII Sverkersson was king of Sweden from 1161 to 1167, a ruler of the House of Sverker during the violent alternation of the crown between his family and the rival House of Erik. He came to the throne after the brief usurpation of Magnus Henriksson, the killer of St Eric, whom Charles overthrew.',
        'His reign saw an important consolidation of the Swedish Church: in 1164 the archbishopric of Uppsala was founded, giving Sweden its own metropolitan see, independent of Lund. But the feud between the royal houses was unrelenting, and in 1167 Charles was surprised and killed on the island of Visingsö by the forces of Knut Eriksson, the son of St Eric, who seized the throne in his place.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Charles was born about 1130, a son of Sverker I, the king who had taken the Swedish throne after the extinction of the Stenkil dynasty and founded the House of Sverker. When Sverker I was murdered in 1156, the crown passed not to Charles but to Eric — later St Eric — of the rival house, and then, after Eric\'s murder in 1160, to the usurper Magnus Henriksson.',
        'Charles gathered the strength of his family and struck back, defeating and killing Magnus Henriksson in 1161 to take the throne as king.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Charles VII is remembered as an able and pious king caught in the merciless dynastic feud of his age. The most substantial of the earlier Sverker kings, he showed genuine statecraft in his dealings with the Church, and his seal and charters mark him as a ruler consciously building the dignity and institutions of the Swedish monarchy.',
        'Yet his reign was lived under the constant shadow of the vendetta between his house and the sons of St Eric, and it is the violence of that feud, as much as his own qualities, that defines him. He had won his crown by killing a usurper and lost it, and his life, to the vengeance of a rival dynasty. He appears as a capable king whose real achievements — above all the Uppsala archbishopric — were framed by a struggle for survival he ultimately lost.'
      ]},
      { title: 'The archbishopric of Uppsala and the feud', paragraphs: [
        'The lasting achievement of Charles\'s reign was ecclesiastical. In 1164, through negotiation with the papacy and the archbishop of Lund, the see of Uppsala was raised to an archbishopric — the metropolitan church of a now self-standing Swedish province, a milestone in the making of the Swedish kingdom and Church. Charles was the first Swedish king whose royal seal survives.',
        'Politically, however, he could not escape the feud. The House of Erik, and above all Knut Eriksson, son of the murdered St Eric, pursued the throne relentlessly. In 1167 Knut\'s men caught Charles on the royal island of Visingsö and killed him.'
      ]},
      { title: 'Death', paragraphs: [
        'Charles VII was killed on Visingsö on 12 April 1167. His young son Sverker, later Sverker II, was carried to safety in Denmark, and the throne passed to his killer, Knut Eriksson, continuing the alternation of the crown between the two houses.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Charles VII is remembered as one of the more effective kings of the Sverker-Erik era and as the founder of the archbishopric of Uppsala, a decisive step in the organisation of the Swedish Church and kingdom. His murder, like those before and after it, exemplifies the deadly rhythm of the Swedish civil-war era, in which the crown swung between the houses of Sverker and Erik by way of the battlefield and the assassin.'
      ]}
    ],
    keyAchievements: [
      { title: 'King of Sweden, 1161–1167', description: 'Took the throne by overthrowing the usurper Magnus Henriksson.' },
      { title: 'Founded the archbishopric of Uppsala (1164)', description: 'Gave Sweden its own metropolitan see, independent of Lund.' },
      { title: 'Oldest surviving Swedish royal seal', description: 'The first Swedish king whose royal seal is preserved.' }
    ],
    timeline: [
      { date: 'c. 1130', title: 'Born', description: 'Born a son of Sverker I, founder of the House of Sverker.' },
      { date: '1156', title: 'His father Sverker I murdered', description: 'The murder of Sverker I hands the throne to the rival House of Erik, deepening the feud that shaped Charles\'s life.' },
      { date: '1161', title: 'Becomes King of Sweden', description: 'Defeats and kills the usurper Magnus Henriksson to take the throne.', links: [SWE] },
      { date: '1164', title: 'Founds the archbishopric of Uppsala', description: 'Secures a Swedish metropolitan see, independent of Lund.' },
      { date: '1167', title: 'Killed on Visingsö', description: 'Surprised and killed by the forces of Knut Eriksson of the House of Erik.', links: [per('knut-eriksson', 'Knut Eriksson', 'His rival and successor')] }
    ],
    relatedEntries: {
      locations: [ { ...SWE, label: 'His kingdom' } ],
      people: [ per('sverker-i-of-sweden', 'Sverker I of Sweden', 'His father, founder of the House of Sverker'), per('knut-eriksson', 'Knut Eriksson', 'His rival, killer, and successor') ],
      events: []
    },
    sources: [ src('Sweden — history', 'https://www.britannica.com/place/Sweden/History'), src('Uppsala | Sweden', 'https://www.britannica.com/place/Uppsala') ],
    isRuler: true,
    succession: { office: 'King of Sweden',
      predecessor: { status: 'disputed', displayName: 'Magnus Henriksson', note: 'Charles took the throne by defeating and killing the usurper Magnus Henriksson in 1161; Magnus had himself seized power by murdering St Eric in 1160.' },
      successor: { personSlug: 'knut-eriksson', displayName: 'Knut Eriksson', note: 'The son of St Eric, who killed Charles on Visingsö and took the throne for the House of Erik.' } }
  },

  // ── JOHN I SVERKERSSON ────────────────────────────────────────────────────────
  {
    id: 'john-i-sverkersson', type: 'character', name: 'John I Sverkersson', born: 1201, died: 1222,
    deathAge: 'about 21', causeOfDeath: 'Illness', restingPlace: 'Alvastra Abbey',
    location: 'Kingdom of Sweden', aliases: ['Johan Sverkersson', 'John I of Sweden'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Coin_of_John_I_of_Sweden_c._1220.jpg',
    summary: 'King of Sweden (1216–1222), the last king of the House of Sverker, a young ruler who launched a crusade to Estonia and died without an heir.',
    title: 'King of Sweden', roles: ['King of Sweden'],
    birth: { date: 'c. 1201', place: { name: 'Sweden' }, note: 'Son of Sverker II; the last king of the House of Sverker.' },
    death: { date: '10 March 1222', place: { name: 'Visingsö' }, circumstance: 'Died young in 1222 without an heir, ending the House of Sverker.' },
    quickFacts: { realm: 'Kingdom of Sweden', dynasty: 'House of Sverker', culture: 'Swedish', knownFor: 'being the last Sverker king and his Baltic crusade' },
    imageInfo: { caption: 'A coin of King John I (Johan Sverkersson) of Sweden, c. 1220.', creator: 'Royal Swedish mint', date: 'c. 1220', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Coin_of_John_I_of_Sweden_c._1220.jpg', license: 'Public domain', note: 'A coin of the king; no portrait of him survives.' },
    overview: [
      'John I Sverkersson was king of Sweden from 1216 to 1222, and the last king of the House of Sverker. He came to the throne as a boy after the death of Erik Knutsson of the rival House of Erik, in a rare peaceful transfer of the crown between the two feuding dynasties.',
      'The most notable act of his short reign was a crusade into the eastern Baltic, part of the Swedish drive to conquer and Christianise the pagan lands across the sea; a Swedish army briefly held a stronghold in Estonia before being destroyed. John died young in 1222, without children, extinguishing the House of Sverker and leaving the throne to the young Eric of the House of Erik.'
    ],
    greatestFeats: ['King of Sweden', 'Last king of the House of Sverker', 'Led a crusade to Estonia'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'John I Sverkersson was king of Sweden from 1216 to 1222, and the last king of the House of Sverker. He came to the throne as a boy after the death of Erik Knutsson of the rival House of Erik, in a rare peaceful transfer of the crown between the two feuding dynasties.',
        'The most notable act of his short reign was a crusade into the eastern Baltic, part of the Swedish drive to conquer and Christianise the pagan lands across the sea; a Swedish army briefly held a stronghold in Estonia before being destroyed. John died young in 1222, without children, extinguishing the House of Sverker and leaving the throne to the young Eric of the House of Erik.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'John was born about 1201, the son of Sverker II, who had been driven from the throne and killed in battle by Erik Knutsson of the House of Erik. As a child John was taken to safety, but when Erik Knutsson died in 1216 leaving only an unborn or infant heir, the magnates chose John — the grown representative of the Sverker line — as king, in a peaceful alternation of the crown.',
        'He was crowned king, the first Swedish coronation for which clear record survives, a sign of the growing dignity of the monarchy.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'John I is a lightly recorded king, remembered more for the events of his brief reign than for any strong impression of character. He appears as a young and, by the standards of his murderous age, unusually uncontested king, raised up in a rare interval of peace between the warring houses and cooperating with the Church and the great men of the realm.',
        'His backing of the Baltic crusade suggests a ruler willing to channel the energies of the Swedish nobility outward, into the profitable and pious business of conquest across the sea, rather than into renewed civil war at home. But his early death cut short whatever promise the reign held, and he remains chiefly significant as the last of his dynasty — the quiet end of the House of Sverker.'
      ]},
      { title: 'The Baltic crusade', paragraphs: [
        'The defining venture of John\'s reign was a crusade across the Baltic. In 1220 a Swedish expedition, blessed by the Church, sailed to Estonia — where Danes and German crusaders were also carving out conquests — and established a garrison at Lihula in the region of Rotalia. The venture ended in disaster: a pagan Estonian and Oeselian attack destroyed the Swedish force soon after, killing its leaders.',
        'The failed crusade was part of the wider Northern Crusades, in which the Scandinavian and German powers competed to subjugate and convert the last pagan peoples of the Baltic.'
      ]},
      { title: 'Death', paragraphs: [
        'John I died on 10 March 1222, still only about twenty-one, and was buried at Alvastra, the traditional resting place of his house. He left no children, and with him the House of Sverker came to an end. The throne passed to the young Eric, son of Erik Knutsson, of the House of Erik.'
      ]},
      { title: 'Legacy', paragraphs: [
        'John I is remembered as the last king of the House of Sverker, whose peaceful accession and early, heirless death mark a hinge in the Swedish civil-war era. After him the crown rested, for a time, with the House of Erik under Eric XI, but real power increasingly passed to the great jarls — above all Birger Jarl — who would soon eclipse the old royal houses altogether and found a new dynasty.'
      ]}
    ],
    keyAchievements: [
      { title: 'King of Sweden, 1216–1222', description: 'Took the throne in a rare peaceful alternation between the feuding houses.' },
      { title: 'Last king of the House of Sverker', description: 'His heirless death ended his dynasty.' },
      { title: 'Led a crusade to Estonia', description: 'Backed the ill-fated Swedish crusade to Rotalia in the eastern Baltic.' }
    ],
    timeline: [
      { date: 'c. 1201', title: 'Born', description: 'Born a son of Sverker II of the House of Sverker.' },
      { date: '1216', title: 'Becomes King of Sweden', description: 'Chosen king on the death of Erik Knutsson, in a peaceful transfer of the crown.', links: [per('erik-knutsson', 'Erik Knutsson', 'His predecessor'), SWE] },
      { date: '1219', title: 'Crowned king', description: 'Receives a formal coronation, among the earliest clearly recorded in Sweden, a sign of the monarchy\'s growing dignity.' },
      { date: '1220', title: 'Crusade to Estonia', description: 'Sends a Swedish crusading expedition to Rotalia, which is destroyed by the Estonians.' },
      { date: '10 March 1222', title: 'Dies without an heir', description: 'Dies young, ending the House of Sverker; Eric XI of the House of Erik succeeds.', links: [per('eric-xi-eriksson', 'Eric XI Eriksson', 'His successor')] }
    ],
    relatedEntries: {
      locations: [ { ...SWE, label: 'His kingdom' } ],
      people: [ per('erik-knutsson', 'Erik Knutsson', 'His predecessor, of the rival House of Erik'), per('eric-xi-eriksson', 'Eric XI Eriksson', 'His successor') ],
      events: []
    },
    sources: [ src('Sweden — history', 'https://www.britannica.com/place/Sweden/History'), src('Northern Crusades', 'https://www.britannica.com/event/Northern-Crusades') ],
    isRuler: true,
    succession: { office: 'King of Sweden',
      predecessor: { personSlug: 'erik-knutsson', displayName: 'Erik Knutsson', note: 'Of the rival House of Erik, on whose death the crown passed peacefully to the Sverker line.' },
      successor: { personSlug: 'eric-xi-eriksson', displayName: 'Eric XI Eriksson', note: 'The son of Erik Knutsson, who succeeded for the House of Erik on John\'s heirless death.' } }
  },

  // ── ERIC XI ERIKSSON ──────────────────────────────────────────────────────────
  {
    id: 'eric-xi-eriksson', type: 'character', name: 'Eric XI Eriksson', born: 1216, died: 1250,
    deathAge: 'about 34', causeOfDeath: 'Natural causes', restingPlace: 'Varnhem Abbey',
    location: 'Kingdom of Sweden', aliases: ['Erik Eriksson', 'Eric the Lisp and Lame', 'Erik läspe och halte'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Eric_Lisper-Halter_of_Sweden_at_Vink%C3%B6l.jpg',
    summary: 'King of Sweden (1222–1229, 1234–1250), the last king of the House of Erik, whose reign was dominated by the powerful jarls — above all Birger Jarl — who succeeded him in power.',
    title: 'King of Sweden', roles: ['King of Sweden'],
    birth: { date: '1216', place: { name: 'Sweden' }, note: 'Son of Erik Knutsson; the last king of the House of Erik.' },
    death: { date: '2 February 1250', place: { name: 'Visingsö' }, circumstance: 'Died in 1250 without an heir, ending the House of Erik; power passed to Birger Jarl\'s line.' },
    quickFacts: { realm: 'Kingdom of Sweden', dynasty: 'House of Erik', culture: 'Swedish', knownFor: 'being the last king of the House of Erik, overshadowed by the jarls' },
    imageInfo: { caption: 'A memorial depiction of Eric XI Eriksson ("the Lisp and Lame") at Vinköl.', creator: 'Later memorial', date: 'Later depiction', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Eric_Lisper-Halter_of_Sweden_at_Vinköl.jpg', license: 'Public domain', note: 'A later memorial image of the king, not a likeness from life.' },
    overview: [
      'Eric XI Eriksson, nicknamed "the Lisp and Lame" for his infirmities, was king of Sweden from 1222 to 1250, with an interruption when he was briefly deposed. The son of Erik Knutsson, he was the last king of the House of Erik, and his long but weak reign saw real power pass increasingly into the hands of the great jarls.',
      'Deposed by a rival for a few years in the late 1220s and restored in 1234, Eric ruled thereafter under the growing dominance of his brother-in-law Birger Jarl, who governed the kingdom in all but name. When Eric died childless in 1250, the male lines of both old royal houses were spent, and the crown passed to Birger Jarl\'s son, founding a new dynasty.'
    ],
    greatestFeats: ['King of Sweden', 'Last king of the House of Erik'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Eric XI Eriksson, nicknamed "the Lisp and Lame" for his infirmities, was king of Sweden from 1222 to 1250, with an interruption when he was briefly deposed. The son of Erik Knutsson, he was the last king of the House of Erik, and his long but weak reign saw real power pass increasingly into the hands of the great jarls.',
        'Deposed by a rival for a few years in the late 1220s and restored in 1234, Eric ruled thereafter under the growing dominance of his brother-in-law Birger Jarl, who governed the kingdom in all but name. When Eric died childless in 1250, the male lines of both old royal houses were spent, and the crown passed to Birger Jarl\'s son, founding a new dynasty.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Eric was born in 1216, the posthumous or infant son of King Erik Knutsson, who died that same year. The throne first went to the Sverker king John I, and only on John\'s death in 1222 did the child Eric succeed, under the guidance of regents and magnates. His bynames, "the Lisp and Lame", record the physical weaknesses that, together with his youth, made him a king easily overshadowed.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Eric XI is remembered as a gentle, pious, and physically weak king, more a figurehead than a ruler, around whom stronger men contended for control. His speech impediment and lameness became his defining nickname, and the sources present him as a mild and ineffective monarch, overshadowed first by rival claimants and then decisively by his formidable brother-in-law Birger Jarl.',
        'It is a measure of his weakness that the great events of his reign — the consolidation of royal government, the crusade into Finland, the crushing of rebellious magnates at Sparrsätra — were the work of Birger Jarl rather than of the king himself. Eric appears as an amiable but powerless ruler, the last of an exhausted dynasty, whose chief historical role was to preside, harmlessly, over the transfer of real power to the house that would replace his own.'
      ]},
      { title: 'A reign under the jarls', paragraphs: [
        'Eric\'s reign was troubled from the start by the old feud and by baronial revolt. In 1229 he was defeated and driven into exile in Denmark by a rebel, Knut Långe, who held the throne until his death, after which Eric was restored in 1234. From then on the dominant figure was Birger Jarl, who married Eric\'s sister and, as jarl, effectively ruled the kingdom.',
        'Under Birger\'s direction the crown grew stronger: rebellious magnates were crushed at the Battle of Sparrsätra, royal law was extended, and a crusade carried Swedish power into Finland. But these were the achievements of the jarl, not the king, and Eric remained a shadow at the centre of his own reign.'
      ]},
      { title: 'Death', paragraphs: [
        'Eric XI died on 2 February 1250, without children. With him the House of Erik came to an end, as the House of Sverker had before it. By prior arrangement, and by the power of Birger Jarl, the crown passed to Birger\'s young son Valdemar.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Eric XI is remembered as the last king of the House of Erik and as the weak monarch under whom power passed decisively to the jarls. His reign, dominated by Birger Jarl, ended the century-long alternation of the crown between the houses of Sverker and Erik: on his death the old royal lines were extinct, and the Bjälbo (Folkung) dynasty of Birger Jarl\'s descendants took the throne, opening a new and more centralised age in Swedish history.'
      ]}
    ],
    keyAchievements: [
      { title: 'King of Sweden, 1222–1250', description: 'Reigned long but weakly as the last king of the House of Erik.' },
      { title: 'Restored after deposition', description: 'Regained the throne in 1234 after being driven into exile.' },
      { title: 'Reign of Birger Jarl\'s rise', description: 'Under him, real power passed to the jarls and the future royal dynasty.' }
    ],
    timeline: [
      { date: '1216', title: 'Born', description: 'Born a son of King Erik Knutsson, who died the same year.' },
      { date: '1222', title: 'Becomes King of Sweden', description: 'Succeeds the last Sverker king John I as a child.', links: [per('john-i-sverkersson', 'John I Sverkersson', 'His predecessor'), SWE] },
      { date: '1229', title: 'Deposed and exiled', description: 'Defeated by the rebel Knut Långe and driven into exile in Denmark.' },
      { date: '1234', title: 'Restored to the throne', description: 'Returns to rule, increasingly under the dominance of Birger Jarl.', links: [per('birger-jarl', 'Birger Jarl', 'Who effectively ruled the kingdom')] },
      { date: '2 February 1250', title: 'Dies without an heir', description: 'Dies childless, ending the House of Erik; Birger Jarl\'s son Valdemar succeeds.', links: [per('valdemar-of-sweden', 'Valdemar of Sweden', 'His successor')] }
    ],
    relatedEntries: {
      locations: [ { ...SWE, label: 'His kingdom' } ],
      people: [ per('john-i-sverkersson', 'John I Sverkersson', 'His predecessor'), per('birger-jarl', 'Birger Jarl', 'Who ruled in his name'), per('valdemar-of-sweden', 'Valdemar of Sweden', 'His successor, son of Birger Jarl') ],
      events: []
    },
    sources: [ src('Sweden — history', 'https://www.britannica.com/place/Sweden/History'), src('Birger Jarl | Swedish statesman', 'https://www.britannica.com/biography/Birger-Jarl') ],
    isRuler: true,
    succession: { office: 'King of Sweden',
      predecessor: { personSlug: 'john-i-sverkersson', displayName: 'John I Sverkersson', note: 'The last Sverker king, on whose heirless death the crown returned to the House of Erik.' },
      successor: { personSlug: 'valdemar-of-sweden', displayName: 'Valdemar of Sweden', note: 'The son of Birger Jarl, who took the throne on Eric\'s death, founding the Bjälbo dynasty.' } }
  },

  // ── ULF FASE ──────────────────────────────────────────────────────────────────
  {
    id: 'ulf-fase', type: 'character', name: 'Ulf Fase', born: 1195, died: 1248,
    deathAge: 'about 53', causeOfDeath: 'Natural causes', restingPlace: 'Sweden',
    location: 'Kingdom of Sweden', aliases: ['Ulf Karlsson Fase', 'Ulf jarl'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Mynt_Ulf_Fase.jpg',
    summary: 'Jarl of Sweden (to 1248), the chief magnate and royal deputy of the realm under Eric XI, and the immediate predecessor in that office of his kinsman Birger Jarl.',
    title: 'Jarl of Sweden', roles: ['Jarl of Sweden'],
    birth: { date: 'c. 1195', place: { name: 'Sweden' }, note: 'Of the powerful Bjälbo family; jarl of the realm under Eric XI.' },
    death: { date: '1248', place: { name: 'Sweden' }, circumstance: 'Died in 1248; the office of jarl passed to his kinsman Birger.' },
    quickFacts: { realm: 'Kingdom of Sweden', dynasty: 'Bjälbo family', culture: 'Swedish', knownFor: 'holding the office of jarl before Birger Jarl' },
    imageInfo: { caption: 'A coin associated with Ulf Fase, jarl of Sweden.', creator: 'Swedish mint', date: 'Early 13th century', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Mynt_Ulf_Fase.jpg', license: 'CC BY 4.0', note: 'A coin linked to the jarl; no portrait of him survives.' },
    overview: [
      'Ulf Fase was jarl of Sweden — the highest office in the realm below the king — under Eric XI in the first half of the thirteenth century. A leading member of the powerful Bjälbo family, he served as the chief magnate and effective deputy of a weak king, in the years when the jarls were rising to dominate Swedish government.',
      'He is remembered above all as the immediate predecessor of his far more famous kinsman, Birger Jarl, who succeeded him in the office on his death in 1248 and went on to become the true master of Sweden and founder of a royal dynasty.'
    ],
    greatestFeats: ['Jarl of Sweden'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Ulf Fase was jarl of Sweden — the highest office in the realm below the king — under Eric XI in the first half of the thirteenth century. A leading member of the powerful Bjälbo family, he served as the chief magnate and effective deputy of a weak king, in the years when the jarls were rising to dominate Swedish government.',
        'He is remembered above all as the immediate predecessor of his far more famous kinsman, Birger Jarl, who succeeded him in the office on his death in 1248 and went on to become the true master of Sweden and founder of a royal dynasty.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Ulf was born around 1195 into the Bjälbo family, one of the greatest noble houses of Sweden, which supplied the realm with its jarls. He rose to that office — the jarl, or earl, being the king\'s chief officer and commander — during the reign of the weak king Eric XI, at a time when royal authority was faltering and the great magnates were the real powers in the land.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Ulf Fase is a shadowy figure, recorded chiefly as a name in the office of jarl and as a forerunner of Birger. The sources preserve little of his personality, and he is overshadowed almost entirely by the towering reputation of his successor and kinsman.',
        'What his career represents, more than any individual traits, is the growing power of the office he held. As jarl under an ineffective king, Ulf embodied the shift of real authority from the enfeebled royal houses to the great magnate families, above all his own Bjälbo kin. He was, in effect, the immediate forerunner of the arrangement by which Birger Jarl would rule Sweden outright — a capable royal deputy in an age when the deputy was becoming more powerful than the king.'
      ]},
      { title: 'Jarl of Sweden', paragraphs: [
        'As jarl, Ulf Fase governed and campaigned on behalf of King Eric XI, holding together the administration and defence of a kingdom whose monarch was weak and whose politics were still shadowed by the old dynastic feuds. He led armies and exercised the wide authority that the office of jarl had come to carry.',
        'His tenure prepared the ground for what followed. When Ulf died in 1248, the office — and with it effective control of the kingdom — passed to his kinsman Birger, under whom the jarlship would reach the height of its power before being abolished.'
      ]},
      { title: 'Death', paragraphs: [
        'Ulf Fase died in 1248. King Eric XI appointed Birger, of the same Bjälbo family, as the new jarl — a choice that would prove momentous, for Birger Jarl would soon dominate Sweden entirely and place his own son on the throne.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Ulf Fase is remembered as the jarl before Birger Jarl — the last holder of the office in its older form, before his successor transformed it into the effective mastery of the kingdom. His career marks the point at which the jarls of the Bjälbo family were poised to eclipse the ancient royal houses of Sverker and Erik and to found, in Birger\'s line, a new Swedish dynasty.'
      ]}
    ],
    keyAchievements: [
      { title: 'Jarl of Sweden', description: 'Held the realm\'s highest office under King Eric XI.' },
      { title: 'Forerunner of Birger Jarl', description: 'His kinsman and successor would come to rule Sweden outright.' }
    ],
    timeline: [
      { date: 'c. 1195', title: 'Born', description: 'Born into the powerful Bjälbo family of Sweden.' },
      { date: 'c. 1220', title: 'Rises among the magnates', description: 'Emerges as a leading man of the Bjälbo house as royal authority weakens under Eric XI.' },
      { date: 'c. 1230', title: 'Becomes jarl', description: 'Rises to the office of jarl under the weak king Eric XI.', links: [per('eric-xi-eriksson', 'Eric XI Eriksson', 'The king he served'), SWE] },
      { date: 'c. 1240', title: 'Governs for the king', description: 'Leads armies and administration as the realm\'s chief magnate.' },
      { date: '1248', title: 'Dies', description: 'Dies in office; his kinsman Birger Jarl succeeds him.', links: [per('birger-jarl', 'Birger Jarl', 'His successor as jarl')] }
    ],
    relatedEntries: {
      locations: [ { ...SWE, label: 'The realm he served' } ],
      people: [ per('eric-xi-eriksson', 'Eric XI Eriksson', 'The king he served as jarl'), per('birger-jarl', 'Birger Jarl', 'His kinsman and successor in the office') ],
      events: []
    },
    sources: [ src('Birger Jarl | Swedish statesman', 'https://www.britannica.com/biography/Birger-Jarl'), src('Sweden — history', 'https://www.britannica.com/place/Sweden/History') ],
    isRuler: true,
    succession: { office: 'Jarl of Sweden',
      predecessor: { status: 'unknown', displayName: 'Earlier jarls of Sweden', note: 'The holders of the office of jarl before Ulf Fase are not securely recorded in an established sequence.' },
      successor: { personSlug: 'birger-jarl', displayName: 'Birger Jarl', note: 'His kinsman of the Bjälbo family, who succeeded him and came to rule Sweden outright.' } }
  }
]

// Insert / replace
let added = 0, replaced = 0
for (const p of people) {
  const i = data.characters.findIndex(c => c.id === p.id)
  if (i >= 0) { data.characters[i] = p; replaced++ } else { data.characters.push(p); added++ }
}

const byId = new Map(data.characters.map(c => [c.id, c]))

// Relink the six existing endpoints to the new articles.
const relink = (rulerId, side, personSlug, displayName, note) => {
  const c = byId.get(rulerId)
  if (!c?.succession?.[side]) { console.warn(`SKIP relink ${rulerId}.${side}`); return }
  c.succession[side] = { personSlug, displayName, note }
  console.log(`relinked ${rulerId}.${side} -> ${personSlug}`)
}
relink('inge-the-elder', 'successor', 'philip-halstensson', 'Philip Halstensson', 'His nephew, who ruled jointly with Inge the Younger as the Stenkil dynasty waned.')
relink('sverker-i-of-sweden', 'predecessor', 'inge-the-younger', 'Inge the Younger', 'The last Stenkil king, on whose heirless death Sverker took the vacant throne.')
relink('knut-eriksson', 'predecessor', 'charles-vii-sverkersson', 'Charles VII Sverkersson', 'The Sverker king whom Knut killed on Visingsö to take the throne.')
relink('erik-knutsson', 'successor', 'john-i-sverkersson', 'John I Sverkersson', 'The last Sverker king, who succeeded in a rare peaceful alternation of the crown.')
relink('valdemar-of-sweden', 'predecessor', 'eric-xi-eriksson', 'Eric XI Eriksson', 'The last king of the House of Erik, under whom Birger Jarl rose to power.')
relink('birger-jarl', 'predecessor', 'ulf-fase', 'Ulf Fase', 'His kinsman, the previous jarl of Sweden.')

// Convert the two no-image usurper/co-king moments to disputed status.
const disputed = (id, side, displayName, note) => {
  const c = byId.get(id)
  if (!c?.succession?.[side]) { console.warn(`SKIP disputed ${id}.${side}`); return }
  c.succession[side] = { status: 'disputed', displayName, note }
  console.log(`${id}.${side} -> disputed (${displayName})`)
}
disputed('inge-the-elder', 'predecessor', 'Halsten Stenkilsson',
  'His brother and co-king, a son of Stenkil; the succession after Stenkil was contested between rival claimants (including two kings named Eric) before the sons of Stenkil ruled.')
disputed('eric-ix-of-sweden', 'successor', 'Magnus Henriksson',
  'Magnus Henriksson killed St Eric in 1160 and usurped the throne; he was in turn overthrown and killed by Charles VII Sverkersson in 1161.')

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`\nSwedish civil-war figures added: ${added}, replaced: ${replaced}. Total characters: ${data.characters.length}`)
