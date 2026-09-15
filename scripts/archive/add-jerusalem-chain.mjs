/**
 * Closes the Kingdom of Jerusalem succession web. Creates full ruler articles
 * for Baldwin V, Amalric II of Lusignan (Aimery), and Maria of Montferrat, and
 * relinks the six existing endpoints that named them as bare text. Every end of
 * the batch resolves to a real Person article — no new loose ends. Idempotent.
 */
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))

const JER = { title: 'Kingdom of Jerusalem', type: 'location', slug: 'kingdom-of-jerusalem' }
const per = (slug, title, label) => ({ title, type: 'person', slug, label })
const ev = (slug, title, label, type = 'event') => ({ title, type, slug, label })
const src = (title, url) => ({ title, author: 'Encyclopaedia Britannica', type: 'encyclopedia', url })

const people = [
  // ── BALDWIN V OF JERUSALEM ────────────────────────────────────────────────────
  {
    id: 'baldwin-v-of-jerusalem', type: 'character', name: 'Baldwin V of Jerusalem', born: 1177, died: 1186,
    deathAge: 'about 9', causeOfDeath: 'Childhood illness', restingPlace: 'Church of the Holy Sepulchre, Jerusalem',
    location: 'Kingdom of Jerusalem', aliases: ['Baldwin V', 'Baudouin V', 'Baldwin the Child'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/db/Baldwin_V_of_Jerusalem.jpg',
    summary: 'Child king of Jerusalem (1185–1186), crowned co-king to secure the succession of his dying uncle Baldwin IV; his death at about nine triggered the crisis that led to Hattin.',
    title: 'King of Jerusalem', roles: ['King of Jerusalem'],
    birth: { date: '1177', place: { name: 'Kingdom of Jerusalem' }, note: 'Son of William of Montferrat and Sibylla of Jerusalem; grandson of Amalric I.' },
    death: { date: 'late summer 1186', place: { name: 'Acre' }, circumstance: 'Died as a small child, probably of illness, after a reign of barely a year under regency.' },
    quickFacts: { realm: 'Kingdom of Jerusalem', dynasty: 'House of Anjou / Montferrat', culture: 'Frankish (Outremer)', knownFor: 'being crowned king as a small child, whose early death opened the succession crisis before Hattin' },
    imageInfo: { caption: 'Baldwin V of Jerusalem in a thirteenth-century manuscript of the history of Outremer.', creator: 'Unknown manuscript illuminator', date: '13th century', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Baldwin_V_of_Jerusalem.jpg', license: 'Public domain', note: 'A later manuscript illumination from the tradition of William of Tyre\'s history, not a likeness from life.' },
    overview: [
      'Baldwin V was king of Jerusalem from 1185 to 1186, a child who reigned for barely a year. The son of Sibylla of Jerusalem and grandson of King Amalric I, he was crowned co-king in 1183, while still an infant, alongside his uncle the leper king Baldwin IV, in an attempt to secure the succession of the crusader kingdom before Baldwin IV\'s death.',
      'When Baldwin IV died in 1185 the boy became sole king under the regency of Raymond III of Tripoli, but he was sickly and died the following year at about the age of nine. His death removed the compromise heir and plunged the kingdom into the succession dispute — between his mother Sibylla with Guy of Lusignan and the barons who favoured Isabella — that fatally divided Jerusalem on the eve of the disaster at Hattin.'
    ],
    greatestFeats: ['Crowned King of Jerusalem as a child', 'The compromise heir of the crusader kingdom'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Baldwin V was king of Jerusalem from 1185 to 1186, a child who reigned for barely a year. The son of Sibylla of Jerusalem and grandson of King Amalric I, he was crowned co-king in 1183, while still an infant, alongside his uncle the leper king Baldwin IV, in an attempt to secure the succession of the crusader kingdom before Baldwin IV\'s death.',
        'When Baldwin IV died in 1185 the boy became sole king under the regency of Raymond III of Tripoli, but he was sickly and died the following year at about the age of nine. His death removed the compromise heir and plunged the kingdom into the succession dispute — between his mother Sibylla with Guy of Lusignan and the barons who favoured Isabella — that fatally divided Jerusalem on the eve of the disaster at Hattin.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Baldwin was born in 1177, the only son of Sibylla of Jerusalem and her first husband, William "Longsword" of Montferrat, who died shortly before or after the boy\'s birth. Through his mother he was the grandson of King Amalric I and the nephew of the reigning king, Baldwin IV, whose leprosy meant he could father no heir of his own.',
        'The child therefore stood close to the throne from birth. As Baldwin IV\'s illness advanced, the boy became the focus of the kingdom\'s desperate search for a stable succession that would not simply hand power to his mother\'s controversial second husband, Guy of Lusignan.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Baldwin V died too young for any real character to be recorded; he is remembered less as a person than as a symbol of the crusader kingdom\'s dynastic desperation. What the sources dwell on is his frailty — a sickly child whose life was the thread on which the peace of the realm hung.',
        'His significance is entirely that of the innocent placeholder. The barons crowned an infant precisely because he was neutral: not Guy of Lusignan, not any single faction, but the pure blood-claim of the royal house. That the kingdom\'s survival should rest on so fragile a life is itself the measure of how divided and endangered Jerusalem had become in the 1180s.'
      ]},
      { title: 'A child on the throne', paragraphs: [
        'To forestall a disputed succession, Baldwin IV had the boy crowned co-king in 1183, carried to his coronation in the arms of a tall knight so the people could see him. Arrangements were made for a regency and even for the great powers of Europe to arbitrate the succession should the child die young.',
        'On Baldwin IV\'s death in 1185 the boy reigned alone as Baldwin V, with Raymond III of Tripoli as regent and Joscelin of Courtenay as his guardian. But the careful settlement lasted barely a year: Baldwin V died in the late summer of 1186, and the compromise died with him.'
      ]},
      { title: 'Death and the succession crisis', paragraphs: [
        'Baldwin V\'s death in 1186 removed the one figure all parties had accepted. His mother Sibylla and her husband Guy of Lusignan moved swiftly, and Sibylla was crowned queen on condition — which she then evaded — of setting Guy aside; instead she crowned Guy king with her own hands. The barons who had backed the claim of her half-sister Isabella were outmanoeuvred but not reconciled.',
        'The kingdom thus entered its gravest crisis bitterly divided between Guy\'s party and its opponents. Within a year that division helped bring on the catastrophe of the Battle of Hattin in 1187 and the loss of Jerusalem to Saladin.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Baldwin V is remembered as the child king whose brief life and early death mark the hinge on which the crusader Kingdom of Jerusalem turned toward ruin. So long as he lived, the succession was settled; when he died, the kingdom fractured, Guy of Lusignan took the crown, and the road to Hattin and the fall of Jerusalem lay open. His reign is a study in how a realm can be undone by the failure of a single fragile life.'
      ]}
    ],
    keyAchievements: [
      { title: 'Crowned King of Jerusalem as a child', description: 'Made co-king in 1183 and sole king in 1185 to secure the succession.' },
      { title: 'The compromise heir', description: 'His neutral blood-claim briefly held the kingdom\'s rival factions together.' }
    ],
    timeline: [
      { date: '1177', title: 'Born', description: 'Born to Sibylla of Jerusalem and William of Montferrat, grandson of Amalric I.' },
      { date: '1183', title: 'Crowned co-king as an infant', description: 'Crowned alongside his dying uncle Baldwin IV to secure the succession.', links: [per('baldwin-iv-of-jerusalem', 'Baldwin IV of Jerusalem', 'His uncle and co-king')] },
      { date: '1185', title: 'Becomes sole king', description: 'Reigns as Baldwin V on Baldwin IV\'s death, under the regency of Raymond III of Tripoli.', links: [JER, per('raymond-iii-of-tripoli', 'Raymond III of Tripoli', 'His regent')] },
      { date: '1186', title: 'Dies as a child', description: 'Dies at about nine; his mother Sibylla and Guy of Lusignan seize the throne.', links: [per('sibylla-of-jerusalem', 'Sibylla of Jerusalem', 'His mother and successor')] },
      { date: '1187', title: 'The crisis leads to Hattin', description: 'The succession dispute his death opened helps bring on the catastrophe at Hattin.', links: [ev('battle-of-hattin', 'Battle of Hattin', 'The disaster that followed the crisis', 'event')] }
    ],
    relatedEntries: {
      locations: [ { ...JER, label: 'His kingdom' } ],
      people: [ per('baldwin-iv-of-jerusalem', 'Baldwin IV of Jerusalem', 'His uncle, predecessor, and co-king'), per('sibylla-of-jerusalem', 'Sibylla of Jerusalem', 'His mother and successor'), per('raymond-iii-of-tripoli', 'Raymond III of Tripoli', 'His regent') ],
      events: [ ev('battle-of-hattin', 'Battle of Hattin', 'The 1187 disaster his death helped precipitate', 'event') ]
    },
    sources: [ src('Baldwin V | king of Jerusalem', 'https://www.britannica.com/place/Kingdom-of-Jerusalem'), src('Baldwin IV | king of Jerusalem', 'https://www.britannica.com/biography/Baldwin-IV') ],
    isRuler: true,
    succession: { office: 'King of Jerusalem',
      predecessor: { personSlug: 'baldwin-iv-of-jerusalem', displayName: 'Baldwin IV of Jerusalem', note: 'His uncle, the leper king, who had him crowned co-king in 1183 to secure the succession.' },
      successor: { personSlug: 'sibylla-of-jerusalem', displayName: 'Sibylla of Jerusalem', note: 'His mother, who took the throne with her husband Guy of Lusignan after the boy\'s death.' } }
  },

  // ── AMALRIC II OF LUSIGNAN (AIMERY) ───────────────────────────────────────────
  {
    id: 'amalric-ii-of-lusignan', type: 'character', name: 'Amalric II of Lusignan', born: 1145, died: 1205,
    deathAge: 'about 60', causeOfDeath: 'Illness (a surfeit of fish, by tradition)', restingPlace: 'Kingdom of Jerusalem',
    location: 'Kingdom of Jerusalem', aliases: ['Aimery of Cyprus', 'Aimery of Lusignan', 'Amalric II', 'Amaury de Lusignan'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Aimery_II_de_Lusignan.png',
    summary: 'King of Jerusalem (1197–1205) and first king of Cyprus, who stabilised the crusader states after the Third Crusade through truces with the Ayyubids and a firm, pragmatic rule.',
    title: 'King of Jerusalem', roles: ['King of Jerusalem', 'King of Cyprus'],
    birth: { date: 'c. 1145', place: { name: 'Poitou' }, note: 'Elder brother of Guy of Lusignan; came east and rose through the offices of the crusader kingdom.' },
    death: { date: '1 April 1205', place: { name: 'Acre' }, circumstance: 'Died at Acre in 1205, by tradition after eating a surfeit of fish; his wife Isabella I died soon after.' },
    quickFacts: { realm: 'Kingdom of Jerusalem and Cyprus', dynasty: 'House of Lusignan', culture: 'Poitevin / Frankish (Outremer)', knownFor: 'uniting the crowns of Jerusalem and Cyprus and stabilising the crusader states by truce' },
    imageInfo: { caption: 'A drawing of the royal seal of Amalric II (Aimery), from Gustave Schlumberger\'s study of the seals of the Latin East.', creator: 'Gustave Schlumberger (drawing of the seal)', date: '1903 (drawing of a c. 1200 seal)', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Aimery_II_de_Lusignan.png', license: 'Public domain', note: 'A scholarly drawing of his contemporary royal seal rather than a portrait.' },
    overview: [
      'Amalric II of Lusignan, often called Aimery, was king of Jerusalem from 1197 to 1205 and the first king of Cyprus. The elder brother of the disastrous Guy of Lusignan, he was a far abler ruler, who had risen through the great offices of the crusader kingdom before making his own fortune on Cyprus.',
      'After the accidental death of Henry II of Champagne in 1197, Aimery married the heiress Isabella I and became king of Jerusalem, holding both crusader crowns in personal union. His reign brought a rare period of stability: he secured long truces with Saladin\'s Ayyubid successors, restored order to the shrunken kingdom based at Acre, and gave it competent government until his death in 1205.'
    ],
    greatestFeats: ['First King of Cyprus', 'King of Jerusalem', 'Stabilised the crusader states by truce with the Ayyubids'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Amalric II of Lusignan, often called Aimery, was king of Jerusalem from 1197 to 1205 and the first king of Cyprus. The elder brother of the disastrous Guy of Lusignan, he was a far abler ruler, who had risen through the great offices of the crusader kingdom before making his own fortune on Cyprus.',
        'After the accidental death of Henry II of Champagne in 1197, Aimery married the heiress Isabella I and became king of Jerusalem, holding both crusader crowns in personal union. His reign brought a rare period of stability: he secured long truces with Saladin\'s Ayyubid successors, restored order to the shrunken kingdom based at Acre, and gave it competent government until his death in 1205.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Aimery was born about 1145 into the house of Lusignan in Poitou, the elder brother of Guy. He came east to the Kingdom of Jerusalem and rose in its service, becoming constable of the kingdom and marrying into the powerful Ibelin family. Captured at Hattin in 1187 alongside the other leaders, he was later released.',
        'When Richard the Lionheart conquered Cyprus during the Third Crusade and sold it on, Aimery acquired the island and established himself as its lord, then as its first king, founding the Lusignan dynasty that would rule Cyprus for three centuries.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Aimery is remembered as the capable brother — everything that Guy of Lusignan was not. Where Guy\'s rule ended in the catastrophe of Hattin, Aimery showed patience, political skill, and a sound grasp of what the diminished crusader states could and could not do. He preferred negotiation and consolidation to reckless war.',
        'Contemporary opinion, even among those who despised his brother, credited Aimery with wisdom and firmness. He was a careful administrator who restored the laws and government of the kingdom, and a realist in diplomacy who understood that the survival of Outremer after Saladin depended on truces, not on hopeless offensives. He stands as one of the more competent rulers the crusader states produced.'
      ]},
      { title: 'King of Cyprus and Jerusalem', paragraphs: [
        'Aimery secured a royal crown for Cyprus, becoming its first king and founding the long Lusignan rule of the island. In 1197, when Henry II of Champagne died in a fall from a window at Acre, the barons offered the crown of Jerusalem to Aimery, who married Henry\'s widow — the four-times-married heiress Isabella I — and so united the two crowns in his own person.',
        'As king he governed the rump kingdom, now centred on Acre, with notable success. He concluded a series of truces with the Ayyubid sultan al-Adil, Saladin\'s brother, that gave the crusader states years of peace, and he restored order and law after the upheavals of the Third Crusade. His reign is remembered as a rare interval of stable, effective rule in the kingdom\'s troubled later history.'
      ]},
      { title: 'Death', paragraphs: [
        'Aimery died at Acre on 1 April 1205 — by a persistent tradition, from eating a surfeit of fish. His wife Isabella I died within weeks. The crown of Jerusalem passed to Isabella\'s eldest daughter, Maria of Montferrat, while Cyprus passed to Aimery\'s own line, permanently separating the two crowns he had briefly joined.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Amalric II is remembered as one of the ablest kings of the later crusader states and as the founder of the Lusignan Kingdom of Cyprus, which outlasted the mainland kingdom by nearly two centuries. His truces with the Ayyubids bought Outremer a valuable breathing space, and his firm government stabilised Jerusalem after the disasters of the 1180s. In the contrast between him and his brother Guy, the chroniclers found a lesson in the difference an able ruler could make.'
      ]}
    ],
    keyAchievements: [
      { title: 'First King of Cyprus', description: 'Founded the Lusignan dynasty that ruled Cyprus for nearly three centuries.' },
      { title: 'King of Jerusalem, 1197–1205', description: 'United the crowns of Jerusalem and Cyprus by marrying the heiress Isabella I.' },
      { title: 'Stabilised Outremer', description: 'Secured long truces with the Ayyubid sultan al-Adil and restored order to the kingdom.' }
    ],
    timeline: [
      { date: 'c. 1145', title: 'Born', description: 'Born into the house of Lusignan in Poitou, elder brother of Guy.' },
      { date: '1187', title: 'Captured at Hattin', description: 'Taken prisoner with the other leaders at the Battle of Hattin, later released.', links: [ev('battle-of-hattin', 'Battle of Hattin', 'Where he was captured', 'event')] },
      { date: 'c. 1194', title: 'Becomes King of Cyprus', description: 'Establishes himself as first king of Cyprus, founding the Lusignan dynasty there.' },
      { date: '1197', title: 'Becomes King of Jerusalem', description: 'Marries the heiress Isabella I after Henry II of Champagne\'s death and unites the two crowns.', links: [JER, per('henry-ii-of-champagne', 'Henry II of Champagne', 'His predecessor as king')] },
      { date: 'c. 1198', title: 'Truces with the Ayyubids', description: 'Concludes long truces with Sultan al-Adil that give the crusader states years of peace.' },
      { date: '1 April 1205', title: 'Dies at Acre', description: 'Dies in 1205; the crown of Jerusalem passes to Maria of Montferrat.', links: [per('maria-of-montferrat', 'Maria of Montferrat', 'His successor as ruler of Jerusalem')] }
    ],
    relatedEntries: {
      locations: [ { ...JER, label: 'His kingdom' } ],
      people: [ per('henry-ii-of-champagne', 'Henry II of Champagne', 'His predecessor as king of Jerusalem'), per('isabella-i-of-jerusalem', 'Isabella I of Jerusalem', 'His wife, the heiress of the kingdom'), per('guy-of-lusignan', 'Guy of Lusignan', 'His younger brother and the earlier king'), per('maria-of-montferrat', 'Maria of Montferrat', 'His stepdaughter and successor') ],
      events: [ ev('battle-of-hattin', 'Battle of Hattin', 'Where he was captured in 1187', 'event'), ev('third-crusade', 'Third Crusade', 'The war that reshaped the states he came to rule', 'event') ]
    },
    sources: [ src('Kingdom of Jerusalem', 'https://www.britannica.com/place/Kingdom-of-Jerusalem'), src('House of Lusignan', 'https://www.britannica.com/topic/Lusignan-family') ],
    isRuler: true,
    succession: { office: 'King of Jerusalem', note: 'Succession shown for the kingship of Jerusalem; Amalric II was also the first king of Cyprus, a crown that passed separately to his own line.',
      predecessor: { personSlug: 'henry-ii-of-champagne', displayName: 'Henry II of Champagne', note: 'The previous husband-king of the heiress Isabella I, who died in a fall at Acre in 1197.' },
      successor: { personSlug: 'maria-of-montferrat', displayName: 'Maria of Montferrat', note: 'His stepdaughter, Isabella I\'s eldest daughter, who inherited Jerusalem while Cyprus passed to his own line.' } }
  },

  // ── MARIA OF MONTFERRAT ───────────────────────────────────────────────────────
  {
    id: 'maria-of-montferrat', type: 'character', name: 'Maria of Montferrat', born: 1192, died: 1212,
    deathAge: 'about 20', causeOfDeath: 'Complications of childbirth', restingPlace: 'Kingdom of Jerusalem',
    location: 'Kingdom of Jerusalem', aliases: ['Marie of Montferrat', 'Maria la Marquise', 'Marie de Montferrat'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Marie_de_Montferrat.jpg',
    summary: 'Queen of Jerusalem (1205–1212), daughter of Conrad of Montferrat and Isabella I, who ruled through regents and her husband John of Brienne until she died in childbirth.',
    title: 'Queen of Jerusalem', roles: ['Queen regnant of Jerusalem'],
    birth: { date: '1192', place: { name: 'Kingdom of Jerusalem' }, note: 'Daughter of Conrad of Montferrat and Queen Isabella I of Jerusalem.' },
    death: { date: '1212', place: { name: 'Acre' }, circumstance: 'Died in 1212 giving birth to her daughter Isabella II (Yolande), the heiress of the kingdom.' },
    quickFacts: { realm: 'Kingdom of Jerusalem', dynasty: 'House of Montferrat / Aleramici', culture: 'Frankish (Outremer)', knownFor: 'inheriting the crusader crown as a girl and ruling through her husband John of Brienne' },
    imageInfo: { caption: 'Maria of Montferrat in a fourteenth-century French manuscript of the history of Outremer.', creator: 'Anonymous, northern France', date: '14th century', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Marie_de_Montferrat.jpg', license: 'Public domain', note: 'A later manuscript illumination (BnF, Français 2824), not a likeness from life.' },
    overview: [
      'Maria of Montferrat was queen regnant of Jerusalem from 1205 to 1212. The daughter of Conrad of Montferrat and Queen Isabella I, she inherited the crusader crown as a girl of thirteen when her mother and stepfather, Amalric II, both died in 1205.',
      'Known as "Marie la Marquise" for her father\'s marquisate, she ruled first through regents drawn from the Ibelin family and then, from 1210, through her husband John of Brienne, who was brought from France to be king by right of his wife. She died in 1212 giving birth to her daughter Isabella II, through whom the crown would pass, by a later marriage, to the Emperor Frederick II.'
    ],
    greatestFeats: ['Queen regnant of Jerusalem', 'Carried the royal line of the crusader kingdom', 'Mother of the heiress Isabella II'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Maria of Montferrat was queen regnant of Jerusalem from 1205 to 1212. The daughter of Conrad of Montferrat and Queen Isabella I, she inherited the crusader crown as a girl of thirteen when her mother and stepfather, Amalric II, both died in 1205.',
        'Known as "Marie la Marquise" for her father\'s marquisate, she ruled first through regents drawn from the Ibelin family and then, from 1210, through her husband John of Brienne, who was brought from France to be king by right of his wife. She died in 1212 giving birth to her daughter Isabella II, through whom the crown would pass, by a later marriage, to the Emperor Frederick II.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Maria was born in 1192, the daughter of Conrad of Montferrat — briefly king-elect of Jerusalem before his assassination that same year — and Isabella I, the heiress through whom the crusader crown descended. She grew up at the court of her mother and her mother\'s later husbands, in the reduced kingdom that now clustered around Acre after the loss of Jerusalem itself to Saladin.',
        'When Isabella I and her fourth husband, King Amalric II, both died in 1205, the thirteen-year-old Maria became queen. As the senior heiress of the royal line, she carried the legitimacy of the whole kingdom in her person.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Maria\'s brief life left little record of her own personality; like several of the heiress-queens of Jerusalem, she is glimpsed mainly through the men who ruled in her name. The chroniclers present a young queen of unquestioned legitimacy but limited independent power, around whom the great baronial families — above all the Ibelins — and then a foreign husband-king organised the government.',
        'What her career illustrates is the peculiar position of the queens regnant of Outremer: the crown descended strictly through the female line, so a woman\'s hand carried a kingdom, yet real authority was exercised by regents and consorts. Maria appears as a dutiful bearer of that inheritance, whose personal fate — early marriage, early death in childbirth — was bound entirely to the dynastic needs of a beleaguered kingdom.'
      ]},
      { title: 'Queen of Jerusalem', paragraphs: [
        'For the first years of her reign Maria was a minor, and the kingdom was governed by regents, chiefly John of Ibelin, lord of Beirut. The barons then sought a suitable husband who could lead the kingdom in war, and with the advice of Philip II of France they chose John of Brienne, an experienced French knight, who came east and married Maria in 1210, becoming king by right of his wife.',
        'Maria\'s own reign was thus exercised jointly with, and largely through, John of Brienne. Her role was to transmit the legitimate royal line: the marriage produced a daughter, Isabella II (also called Yolande), who would be the next heiress of Jerusalem.'
      ]},
      { title: 'Death', paragraphs: [
        'Maria died in 1212, still only about twenty, from complications of giving birth to her daughter Isabella II. Her husband John of Brienne continued to rule as king, now as regent for their infant daughter, the new heiress of the kingdom.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Maria of Montferrat is remembered as a link in the fragile chain of heiress-queens through whom the crown of Jerusalem descended after the city itself was lost. Her marriage brought John of Brienne to the throne, and her daughter Isabella II carried the royal claim onward — marrying the Emperor Frederick II and so drawing the crusader kingdom into the orbit of the Hohenstaufen empire. Maria\'s short life sits at the point where the old royal line of Jerusalem passed toward its imperial future.'
      ]}
    ],
    keyAchievements: [
      { title: 'Queen regnant of Jerusalem', description: 'Inherited and carried the crusader crown from 1205 to 1212.' },
      { title: 'Brought John of Brienne to the throne', description: 'Her marriage in 1210 gave the kingdom an experienced warrior king.' },
      { title: 'Mother of the heiress Isabella II', description: 'Transmitted the royal line that would pass to the Emperor Frederick II.' }
    ],
    timeline: [
      { date: '1192', title: 'Born', description: 'Born to Conrad of Montferrat and Queen Isabella I of Jerusalem.', links: [per('conrad-of-montferrat', 'Conrad of Montferrat', 'Her father'), per('isabella-i-of-jerusalem', 'Isabella I of Jerusalem', 'Her mother')] },
      { date: '1205', title: 'Becomes Queen of Jerusalem', description: 'Inherits the crown at thirteen when her mother Isabella I and stepfather Amalric II both die.', links: [JER, per('amalric-ii-of-lusignan', 'Amalric II of Lusignan', 'Her stepfather and predecessor')] },
      { date: '1205–1210', title: 'Rule through regents', description: 'The kingdom is governed by regents, chiefly John of Ibelin, during her minority.' },
      { date: '1210', title: 'Marries John of Brienne', description: 'Marries the French knight John of Brienne, who becomes king by right of his wife.', links: [per('john-of-brienne', 'John of Brienne', 'Her husband and king-consort')] },
      { date: '1212', title: 'Dies in childbirth', description: 'Dies giving birth to her daughter Isabella II; John of Brienne rules on as regent.', links: [per('john-of-brienne', 'John of Brienne', 'Who continued as king-regent')] }
    ],
    relatedEntries: {
      locations: [ { ...JER, label: 'Her kingdom' } ],
      people: [ per('isabella-i-of-jerusalem', 'Isabella I of Jerusalem', 'Her mother and predecessor'), per('conrad-of-montferrat', 'Conrad of Montferrat', 'Her father'), per('amalric-ii-of-lusignan', 'Amalric II of Lusignan', 'Her stepfather, whom she succeeded'), per('john-of-brienne', 'John of Brienne', 'Her husband, king by right of his wife') ],
      events: [ ev('third-crusade', 'Third Crusade', 'The war whose aftermath shaped her kingdom', 'event') ]
    },
    sources: [ src('Kingdom of Jerusalem', 'https://www.britannica.com/place/Kingdom-of-Jerusalem'), src('John of Brienne | king of Jerusalem', 'https://www.britannica.com/biography/John-Of-Brienne') ],
    isRuler: true,
    succession: { office: 'Queen of Jerusalem',
      predecessor: { personSlug: 'amalric-ii-of-lusignan', displayName: 'Amalric II of Lusignan', note: 'Her stepfather, the husband-king of her mother Isabella I, who died in 1205.' },
      successor: { personSlug: 'john-of-brienne', displayName: 'John of Brienne', note: 'Her husband, who ruled as king by right of his wife and then as regent for their daughter Isabella II.' } }
  }
]

// Insert / replace the three new articles
let added = 0, replaced = 0
for (const p of people) {
  const i = data.characters.findIndex(c => c.id === p.id)
  if (i >= 0) { data.characters[i] = p; replaced++ } else { data.characters.push(p); added++ }
}

// Relink the six existing endpoints that named these three as bare text.
const byId = new Map(data.characters.map(c => [c.id, c]))
const relink = (rulerId, side, personSlug, displayName, note) => {
  const c = byId.get(rulerId)
  if (!c?.succession?.[side]) { console.warn(`SKIP relink ${rulerId}.${side}`); return }
  c.succession[side] = { personSlug, displayName, note }
  console.log(`relinked ${rulerId}.${side} -> ${personSlug}`)
}
relink('baldwin-iv-of-jerusalem', 'successor', 'baldwin-v-of-jerusalem', 'Baldwin V of Jerusalem', 'His nephew, crowned co-king as a child to secure the succession.')
relink('guy-of-lusignan', 'predecessor', 'baldwin-v-of-jerusalem', 'Baldwin V of Jerusalem', 'The child king whose death let Guy and his wife Sibylla take the throne.')
relink('sibylla-of-jerusalem', 'predecessor', 'baldwin-v-of-jerusalem', 'Baldwin V of Jerusalem', 'Her son, the child king, on whose death she claimed the crown.')
relink('henry-ii-of-champagne', 'successor', 'amalric-ii-of-lusignan', 'Amalric II of Lusignan', 'Who married the widowed heiress Isabella I and united the crowns of Jerusalem and Cyprus.')
relink('isabella-i-of-jerusalem', 'successor', 'maria-of-montferrat', 'Maria of Montferrat', 'Her eldest daughter, by Conrad of Montferrat, who inherited the crown in 1205.')
relink('john-of-brienne', 'predecessor', 'maria-of-montferrat', 'Maria of Montferrat', 'His wife, the queen regnant by whose right he became king of Jerusalem.')

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`\nJerusalem articles added: ${added}, replaced: ${replaced}. Total characters: ${data.characters.length}`)
