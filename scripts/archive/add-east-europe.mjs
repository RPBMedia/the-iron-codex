/**
 * Hungarian & East European cluster. Eight rulers whose named endpoints link to
 * existing anchors: Emeric & Béla IV of Hungary (Andrew II's neighbours),
 * Władysław III of Poland (Jagiełło's successor), Skirgaila & Švitrigaila of
 * Lithuania (Vytautas's neighbours), Louis I of Hungary (Jadwiga's predecessor),
 * Stefan Lazarević of Serbia (Lazar's successor), and Yaropolk I of Kiev
 * (Sviatoslav's successor). Open-side neighbours are noted boundaries. Idempotent.
 */
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))

const HRE = { title: 'Holy Roman Empire', type: 'location', slug: 'holy-roman-empire' }
const POL = { title: 'Kingdom of Poland', type: 'location', slug: 'kingdom-of-poland' }
const LIT = { title: 'Grand Duchy of Lithuania', type: 'location', slug: 'grand-duchy-of-lithuania' }
const RUS = { title: 'Kievan Rus\'', type: 'location', slug: 'kievan-rus' }
const OTT = { title: 'Ottoman Empire', type: 'location', slug: 'ottoman-empire' }
const per = (slug, title, label) => ({ title, type: 'person', slug, label })
const ev = (slug, title, label) => ({ title, type: 'event', slug, label })
const src = (title, url) => ({ title, author: 'Encyclopaedia Britannica', type: 'encyclopedia', url })

const people = [
  // ── EMERIC OF HUNGARY ─────────────────────────────────────────────────────────
  {
    id: 'emeric-of-hungary', type: 'character', name: 'Emeric of Hungary', born: 1174, died: 1204,
    deathAge: 'about 30', causeOfDeath: 'Illness', restingPlace: 'Eger, Hungary',
    location: 'Kingdom of Hungary', aliases: ['Imre', 'Emeric I'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/19/ImrichEmeric_of_Hungary.jpg',
    summary: 'King of Hungary (1196–1204), the elder son of Béla III, whose reign was consumed by revolts led by his ambitious brother, the future Andrew II.',
    title: 'King of Hungary', roles: ['King of Hungary'],
    birth: { date: '1174', place: { name: 'Hungary' }, note: 'Elder son of Béla III of Hungary.' },
    death: { date: '30 November 1204', place: { name: 'Hungary' }, circumstance: 'Died in 1204, leaving an infant son who reigned only months before the crown passed to his brother Andrew.' },
    quickFacts: { realm: 'Kingdom of Hungary', dynasty: 'Árpád', culture: 'Hungarian', knownFor: 'his struggle against his rebellious brother Andrew' },
    imageInfo: { caption: 'King Emeric of Hungary in a later depiction.', creator: 'Later depiction', date: '1896', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:ImrichEmeric_of_Hungary.jpg', license: 'Public domain', note: 'A later portrait of the king, not a likeness from life.' },
    overview: [
      'Emeric was king of Hungary from 1196 to 1204, the elder son of the powerful Béla III. He inherited a strong and prosperous kingdom, but spent almost his entire reign contending with the relentless ambition of his younger brother Andrew, who had been left great wealth and repeatedly rose in revolt to seize power.',
      'Emeric managed to hold the throne and even to have his infant son Ladislaus crowned to secure the succession, but he died in 1204 while the boy was still a child. Within months Ladislaus too was dead, and the crown passed to the very brother Emeric had fought all his life — Andrew II.'
    ],
    greatestFeats: ['King of Hungary', 'Held the throne against repeated revolts'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Emeric was king of Hungary from 1196 to 1204, the elder son of the powerful Béla III. He inherited a strong and prosperous kingdom, but spent almost his entire reign contending with the relentless ambition of his younger brother Andrew, who had been left great wealth and repeatedly rose in revolt to seize power.',
        'Emeric managed to hold the throne and even to have his infant son Ladislaus crowned to secure the succession, but he died in 1204 while the boy was still a child. Within months Ladislaus too was dead, and the crown passed to the very brother Emeric had fought all his life — Andrew II.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Emeric was born in 1174, the elder son of Béla III of Hungary, one of the greatest of the Árpád kings, under whom Hungary reached a height of power and wealth. Crowned in his father\'s lifetime to secure his succession, Emeric came to the throne in 1196. But Béla III had also left his younger son Andrew a fortune and a charge to crusade, and Andrew used his resources instead to build a faction against his brother.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Emeric is remembered as a capable and reasonably firm king whose reign was defined less by his own qualities than by the ceaseless disloyalty of his brother. The sources credit him with a certain dignity and courage, and one famous episode has him walk unarmed and alone into his rebel brother\'s camp, daring the traitors to strike their king, and lead Andrew out a prisoner by sheer force of royal authority.',
        'That story captures the paradox of his reign: a king with the presence and the right to command, yet unable finally to master a brother who would not be reconciled. He was, in the judgement of history, an adequate ruler dealt an impossible hand — forced to spend on civil strife the strength his father had built up, and to die knowing his line\'s hold on the throne was fatally weak.'
      ]},
      { title: 'The struggle with Andrew', paragraphs: [
        'The dominant theme of Emeric\'s reign was the recurring rebellion of his brother Andrew, who twice or more raised armies against the king and forced him into confrontations and uneasy settlements. At times Andrew held whole provinces; at times Emeric captured and imprisoned him, only to release and forgive him. The struggle sapped the kingdom and entangled it in the affairs of Serbia, Bulgaria, and the papacy.',
        'Determined to secure the throne for his own child, Emeric had his little son Ladislaus crowned king in 1204, entrusting the boy\'s guardianship — with grim irony — to Andrew himself.'
      ]},
      { title: 'Death', paragraphs: [
        'Emeric died on 30 November 1204, leaving the throne to his infant son Ladislaus III under the regency of Andrew. But the child-king Ladislaus died within months, in 1205, and the crown passed at last to Andrew, who ruled as Andrew II.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Emeric is remembered as the elder brother who held the Hungarian throne against Andrew\'s ambition but could not keep it in his own line. His death, and that of his infant heir, brought to power the very brother he had fought — Andrew II, whose reign would see the great charter of Hungarian liberties, the Golden Bull, and whose son Béla IV would rebuild the kingdom after the Mongols.'
      ]}
    ],
    keyAchievements: [
      { title: 'King of Hungary, 1196–1204', description: 'Held the throne of a great kingdom against repeated revolts.' },
      { title: 'Secured his son\'s coronation', description: 'Had the infant Ladislaus crowned to protect the succession.' }
    ],
    timeline: [
      { date: '1174', title: 'Born', description: 'Born the elder son of Béla III of Hungary.' },
      { date: '1196', title: 'Becomes King of Hungary', description: 'Succeeds his father Béla III to a strong and wealthy kingdom.' },
      { date: 'c. 1197', title: 'Revolt of his brother Andrew', description: 'His brother Andrew rises in rebellion, beginning years of civil strife.', links: [per('andrew-ii-of-hungary', 'Andrew II of Hungary', 'His rebellious brother')] },
      { date: '1204', title: 'Crowns his infant son', description: 'Has his little son Ladislaus III crowned to secure the succession.' },
      { date: '30 November 1204', title: 'Dies', description: 'Dies leaving a child-king; within months the crown passes to Andrew II.', links: [per('andrew-ii-of-hungary', 'Andrew II of Hungary', 'His brother and eventual successor')] }
    ],
    relatedEntries: {
      locations: [ { ...HRE, label: 'The empire whose rulers claimed influence over Hungary' } ],
      people: [ per('andrew-ii-of-hungary', 'Andrew II of Hungary', 'His brother, rival, and successor'), per('bela-iv-of-hungary', 'Béla IV of Hungary', 'His nephew, who rebuilt Hungary after the Mongols') ],
      events: []
    },
    sources: [ src('Hungary — history', 'https://www.britannica.com/place/Hungary/History'), src('Árpád dynasty', 'https://www.britannica.com/topic/Arpad-dynasty') ],
    isRuler: true,
    succession: { office: 'King of Hungary',
      predecessor: { displayName: 'Béla III of Hungary', note: 'His father, one of the greatest Árpád kings, who had him crowned in his own lifetime.' },
      successor: { personSlug: 'andrew-ii-of-hungary', displayName: 'Andrew II of Hungary', note: 'His brother, who took the throne after the few-month reign of Emeric\'s infant son Ladislaus III in 1204–1205.' } }
  },

  // ── BÉLA IV OF HUNGARY ────────────────────────────────────────────────────────
  {
    id: 'bela-iv-of-hungary', type: 'character', name: 'Béla IV of Hungary', born: 1206, died: 1270,
    deathAge: 'about 64', causeOfDeath: 'Natural causes', restingPlace: 'Esztergom',
    location: 'Kingdom of Hungary', aliases: ['Béla IV', 'the second founder of Hungary'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/98/B%C3%A9la_IV_%28Chronica_Hungarorum%29.jpg',
    summary: 'King of Hungary (1235–1270) who rebuilt his kingdom after the catastrophic Mongol invasion of 1241, earning renown as the "second founder" of Hungary.',
    title: 'King of Hungary', roles: ['King of Hungary'],
    birth: { date: '29 November 1206', place: { name: 'Hungary' }, note: 'Son of Andrew II of Hungary.' },
    death: { date: '3 May 1270', place: { name: 'Csepel Island' }, circumstance: 'Died in 1270 having reconstructed the kingdom the Mongols had devastated.' },
    quickFacts: { realm: 'Kingdom of Hungary', dynasty: 'Árpád', culture: 'Hungarian', knownFor: 'rebuilding Hungary after the Mongol invasion' },
    imageInfo: { caption: 'King Béla IV of Hungary in the fifteenth-century Chronica Hungarorum.', creator: 'Chronica Hungarorum', date: '1488', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Béla_IV_(Chronica_Hungarorum).jpg', license: 'Public domain', note: 'A later chronicle woodcut of the king, not a likeness from life.' },
    overview: [
      'Béla IV was king of Hungary from 1235 to 1270, and is remembered as the "second founder" of the kingdom. The son of Andrew II, he set out to restore royal authority after his father\'s lavish grants had weakened the crown, only to face the greatest catastrophe in Hungary\'s medieval history.',
      'In 1241 the Mongols invaded and destroyed his army at the Battle of Mohi, then ravaged the country; Béla fled to the Adriatic coast as Hungary was devastated. When the Mongols withdrew in 1242, he returned and threw himself into reconstruction — building stone castles, fortifying towns, and inviting settlers — rebuilding the kingdom on stronger foundations against the day the horsemen might return.'
    ],
    greatestFeats: ['Rebuilt Hungary after the Mongol invasion', 'King of Hungary', 'Fortified the kingdom with stone castles'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Béla IV was king of Hungary from 1235 to 1270, and is remembered as the "second founder" of the kingdom. The son of Andrew II, he set out to restore royal authority after his father\'s lavish grants had weakened the crown, only to face the greatest catastrophe in Hungary\'s medieval history.',
        'In 1241 the Mongols invaded and destroyed his army at the Battle of Mohi, then ravaged the country; Béla fled to the Adriatic coast as Hungary was devastated. When the Mongols withdrew in 1242, he returned and threw himself into reconstruction — building stone castles, fortifying towns, and inviting settlers — rebuilding the kingdom on stronger foundations against the day the horsemen might return.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Béla was born in 1206, the son of Andrew II of Hungary. He grew up dismayed by his father\'s prodigal grants of crown land to the nobility, which had gravely weakened the monarchy, and on succeeding in 1235 he set about recovering the lost royal estates — a policy that alienated the great magnates whose support he would soon desperately need.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Béla IV was a serious, determined, and far-sighted king, marked by the twin experiences of his reign: the humbling struggle to rebuild royal power, and the trauma of the Mongol catastrophe. He could be stern and unbending — his early campaign to reclaim crown lands was so rigorous it cost him the loyalty he needed in the crisis — but he learned hard lessons and applied them with tenacity.',
        'His greatness lay in his response to disaster. Where a lesser king might have been broken by the annihilation of his army and the devastation of his realm, Béla returned from exile and rebuilt with method and vision, reversing his earlier hostility to the magnates, encouraging castle-building and immigration, and refounding towns. The last years of his reign were troubled by conflict with his own son, but his reconstruction of Hungary after 1242 is his enduring monument.'
      ]},
      { title: 'The Mongol catastrophe and the rebuilding', paragraphs: [
        'In 1241 the Mongol armies of Batu Khan and Subutai swept into Hungary. At the Battle of Mohi they destroyed the royal host, and Béla barely escaped, fleeing across the country and finally to an island off the Dalmatian coast as the Mongols burned and slaughtered through the kingdom. Only the Mongols\' sudden withdrawal in 1242, on news of the great khan\'s death, saved Hungary from lasting conquest.',
        'Béla returned to a ruined land and devoted the rest of his reign to reconstruction. He reversed his policy toward the nobles, encouraging them and the towns to build the stone castles that had proved the only effective defence, invited German, Slavic, and Cuman settlers to repopulate the country, and refortified his realm — so that Hungary emerged from the disaster stronger than before.'
      ]},
      { title: 'Death', paragraphs: [
        'Béla IV\'s last years were embittered by war with his son and heir, the future Stephen V, over the division of power. He died on 3 May 1270 and was succeeded by that son.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Béla IV is remembered as the "second founder of Hungary", the king who raised the kingdom from the ashes of the Mongol invasion. His programme of stone castles, fortified towns, and new settlement reshaped the country and equipped it to survive; when the Mongols raided again in 1285, the defences he had built held. His reign stands as one of the great feats of recovery in medieval European history.'
      ]}
    ],
    keyAchievements: [
      { title: 'Rebuilt Hungary after 1241', description: 'Reconstructed the kingdom devastated by the Mongol invasion.' },
      { title: 'Fortified the realm', description: 'Promoted stone castles and fortified towns that would repel later raids.' },
      { title: 'Repopulated the country', description: 'Invited settlers to restore lands emptied by the Mongols.' }
    ],
    timeline: [
      { date: '29 November 1206', title: 'Born', description: 'Born the son of Andrew II of Hungary.', links: [per('andrew-ii-of-hungary', 'Andrew II of Hungary', 'His father')] },
      { date: '1235', title: 'Becomes King of Hungary', description: 'Succeeds Andrew II and moves to recover crown lands from the nobility.', links: [per('andrew-ii-of-hungary', 'Andrew II of Hungary', 'His father and predecessor')] },
      { date: '1241', title: 'Disaster at Mohi', description: 'The Mongols destroy his army at the Battle of Mohi and devastate Hungary.' },
      { date: '1242', title: 'Returns to rebuild', description: 'Returns from exile after the Mongol withdrawal and begins the reconstruction.', links: [HRE] },
      { date: 'c. 1250', title: 'Fortifies the kingdom', description: 'Builds stone castles and invites settlers to restore the ravaged land.' },
      { date: '3 May 1270', title: 'Dies', description: 'Dies after conflict with his son; Stephen V succeeds.' }
    ],
    relatedEntries: {
      locations: [ { ...HRE, label: 'The empire from which he sought help against the Mongols' } ],
      people: [ per('andrew-ii-of-hungary', 'Andrew II of Hungary', 'His father and predecessor'), per('emeric-of-hungary', 'Emeric of Hungary', 'His uncle, the earlier king') ],
      events: []
    },
    sources: [ src('Béla IV | king of Hungary', 'https://www.britannica.com/biography/Bela-IV'), src('Hungary — history', 'https://www.britannica.com/place/Hungary/History') ],
    isRuler: true,
    succession: { office: 'King of Hungary',
      predecessor: { personSlug: 'andrew-ii-of-hungary', displayName: 'Andrew II of Hungary', note: 'His father, whose lavish grants had weakened the crown Béla worked to restore.' },
      successor: { displayName: 'Stephen V of Hungary', note: 'His son, with whom he warred over power in his last years and who succeeded him in 1270.' } }
  },

  // ── WŁADYSŁAW III OF POLAND ───────────────────────────────────────────────────
  {
    id: 'wladyslaw-iii-of-poland', type: 'character', name: 'Władysław III of Poland', born: 1424, died: 1444,
    deathAge: 'about 20', causeOfDeath: 'Killed at the Battle of Varna', restingPlace: 'Unknown (fell at Varna)',
    location: 'Kingdom of Poland', aliases: ['Władysław of Varna', 'Władysław Warneńczyk', 'Ulászló I'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/71/W%C5%82adys%C5%82aw_Warne%C5%84czyk_seal_1438_%28cropped%29.PNG',
    summary: 'King of Poland (1434–1444) and Hungary (1440–1444), a young crusader-king killed leading a Christian army against the Ottomans at the Battle of Varna.',
    title: 'King of Poland', roles: ['King of Poland', 'King of Hungary'],
    birth: { date: '31 October 1424', place: { name: 'Kraków' }, note: 'Son of Władysław II Jagiełło; king of Poland from the age of nine.' },
    death: { date: '10 November 1444', place: { name: 'Varna' }, event: { name: 'Battle of Varna', type: 'event' },
      circumstance: 'Killed leading a rash charge against the Ottoman sultan at the Battle of Varna; his body was never found.' },
    quickFacts: { realm: 'Kingdom of Poland and Hungary', dynasty: 'Jagiellon', culture: 'Polish', knownFor: 'his death crusading against the Ottomans at Varna' },
    imageInfo: { caption: 'The royal seal of Władysław III of Poland, 1438.', creator: 'Royal Polish chancery', date: '1438', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Władysław_Warneńczyk_seal_1438_(cropped).PNG', license: 'Public domain', note: 'A detail of the king\'s great seal; no portrait from life survives.' },
    overview: [
      'Władysław III was king of Poland from 1434 and king of Hungary from 1440, a young Jagiellon monarch who became the great hope of a Christian crusade against the advancing Ottoman Turks. The son of Władysław II Jagiełło, he came to the Polish throne as a boy of nine and was later elected to the embattled Hungarian crown as well.',
      'Drawn into the war against the Ottomans on the Balkan frontier, he led a crusading army into Bulgaria in 1444 in violation of a recent truce, and met Sultan Murad II at Varna on the Black Sea. There, in a reckless charge at the sultan himself, the twenty-year-old king was killed and his army destroyed — a catastrophe that ended the last great medieval crusade and earned him the name "Władysław of Varna".'
    ],
    greatestFeats: ['King of Poland and Hungary', 'Led the last great crusade against the Ottomans'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Władysław III was king of Poland from 1434 and king of Hungary from 1440, a young Jagiellon monarch who became the great hope of a Christian crusade against the advancing Ottoman Turks. The son of Władysław II Jagiełło, he came to the Polish throne as a boy of nine and was later elected to the embattled Hungarian crown as well.',
        'Drawn into the war against the Ottomans on the Balkan frontier, he led a crusading army into Bulgaria in 1444 in violation of a recent truce, and met Sultan Murad II at Varna on the Black Sea. There, in a reckless charge at the sultan himself, the twenty-year-old king was killed and his army destroyed — a catastrophe that ended the last great medieval crusade and earned him the name "Władysław of Varna".'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Władysław was born in 1424, the elder son of the aged Władysław II Jagiełło, the Lithuanian grand duke who had become king of Poland and founded the Jagiellonian dynasty. On his father\'s death in 1434 the nine-year-old boy was crowned king of Poland, the realm governed for years by a regency dominated by the powerful bishop Zbigniew Oleśnicki.',
        'In 1440, with the Ottoman threat pressing on Hungary, the Hungarian magnates elected the young Polish king to their vacant throne as well, hoping his combined strength could turn back the Turks.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Władysław III is remembered as a brave, devout, and idealistic young king, fired by the crusading spirit and the ambition to be the champion of Christendom against the Ottomans — but also as impetuous and easily led, whose courage outran his judgement. The influence of the papal legate Cardinal Cesarini and the crusading enthusiasm of his age pushed him toward a fatal boldness.',
        'That combination of piety, valour, and recklessness defined his end. Persuaded to break the recently sworn truce with the sultan in the hope of a decisive victory, and then, at Varna, to fling himself in a headlong charge at the Ottoman lines, he embodied both the noblest and the most self-destructive impulses of the late crusading ideal. He is remembered as a gallant youth whose rashness cost him his life and Christendom its last great chance to check the Ottomans in the Balkans.'
      ]},
      { title: 'The crusade and Varna', paragraphs: [
        'As king of Hungary, Władysław was drawn into the war against the Ottomans, and in 1443 a Christian campaign under the great general John Hunyadi won successes in the Balkans, leading to a favourable truce with Sultan Murad II at Szeged in 1444. But, urged on by the papal legate and the promise of a crusade, Władysław broke the truce and marched south toward the Black Sea coast to link up with a promised fleet.',
        'At Varna on 10 November 1444 the crusaders met Murad\'s army. The battle was hard-fought, but when Władysław led an impetuous charge directly at the sultan\'s guard, he was cut down and killed. His death broke the Christian army, which was routed, and ended the crusade in disaster.'
      ]},
      { title: 'Death', paragraphs: [
        'Władysław III was killed at Varna at the age of twenty; his body was never recovered, giving rise to legends that he had survived. His death left both his kingdoms without a ruler: Poland endured a three-year interregnum before his younger brother Casimir IV took the throne.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Władysław of Varna is remembered as the crusader-king whose death marked the failure of the last great effort to drive the Ottomans from the Balkans. The catastrophe at Varna confirmed Ottoman dominance in south-eastern Europe and helped seal the fate of Constantinople, which fell nine years later. In Poland his death opened the way for his brother Casimir IV, under whom the Jagiellonian dynasty reached the height of its power.'
      ]}
    ],
    keyAchievements: [
      { title: 'King of Poland and Hungary', description: 'United the two crowns in the struggle against the Ottomans.' },
      { title: 'Led the crusade of 1443–1444', description: 'Championed the last great medieval crusade in the Balkans.' }
    ],
    timeline: [
      { date: '31 October 1424', title: 'Born', description: 'Born the elder son of Władysław II Jagiełło.', links: [per('wladyslaw-ii-jagiello', 'Władysław II Jagiełło', 'His father')] },
      { date: '1434', title: 'Becomes King of Poland', description: 'Crowned king at nine on his father\'s death, under a regency.', links: [per('wladyslaw-ii-jagiello', 'Władysław II Jagiełło', 'His father and predecessor'), POL] },
      { date: '1440', title: 'Elected King of Hungary', description: 'Chosen by the Hungarian magnates to lead the fight against the Ottomans.' },
      { date: '1443', title: 'The crusade in the Balkans', description: 'Campaigns with John Hunyadi against the Ottomans, winning a favourable truce.', links: [OTT] },
      { date: '10 November 1444', title: 'Killed at Varna', description: 'Breaks the truce and is killed in a rash charge at the sultan; the crusade is destroyed.' }
    ],
    relatedEntries: {
      locations: [ { ...POL, label: 'His kingdom' }, { ...OTT, label: 'The empire he died fighting' } ],
      people: [ per('wladyslaw-ii-jagiello', 'Władysław II Jagiełło', 'His father and predecessor') ],
      events: []
    },
    sources: [ src('Władysław III | king of Poland and Hungary', 'https://www.britannica.com/biography/Wladyslaw-III'), src('Battle of Varna', 'https://www.britannica.com/event/Battle-of-Varna') ],
    isRuler: true,
    succession: { office: 'King of Poland',
      predecessor: { personSlug: 'wladyslaw-ii-jagiello', displayName: 'Władysław II Jagiełło', note: 'His father, founder of the Jagiellonian dynasty, whom he succeeded as a boy of nine.' },
      successor: { displayName: 'Casimir IV Jagiellon', note: 'His younger brother, who took the Polish throne after the three-year interregnum that followed Władysław\'s death at Varna.' } }
  },

  // ── SKIRGAILA ─────────────────────────────────────────────────────────────────
  {
    id: 'skirgaila', type: 'character', name: 'Skirgaila', born: 1354, died: 1397,
    deathAge: 'about 43', causeOfDeath: 'Illness, possibly poison', restingPlace: 'Kiev',
    location: 'Grand Duchy of Lithuania', aliases: ['Skirgaila', 'Ivan (baptismal name)'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Skirgaj%C5%82a._%D0%A1%D0%BA%D1%96%D1%80%D0%B3%D0%B0%D0%B9%D0%BB%D0%B0_%28A._Guagnini%2C_1578%29.jpg',
    summary: 'Regent and duke of Lithuania (1386–1392), the brother of Jogaila who governed Lithuania when Jogaila became king of Poland, until supplanted by Vytautas.',
    title: 'Regent of Lithuania', roles: ['Regent and Duke of Lithuania'],
    birth: { date: 'c. 1354', place: { name: 'Lithuania' }, note: 'Son of Grand Duke Algirdas; brother of Jogaila (Władysław II Jagiełło).' },
    death: { date: '11 January 1397', place: { name: 'Kiev' }, circumstance: 'Died at Kiev, which he held as duke, reportedly of poison.' },
    quickFacts: { realm: 'Grand Duchy of Lithuania', dynasty: 'Gediminid', culture: 'Lithuanian', knownFor: 'governing Lithuania for his brother Jogaila before Vytautas' },
    imageInfo: { caption: 'Skirgaila of Lithuania in Alessandro Guagnini\'s chronicle of 1578.', creator: 'Alessandro Guagnini', date: '1578', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Skirgajła._Скіргайла_(A._Guagnini,_1578).jpg', license: 'Public domain', note: 'A sixteenth-century chronicle depiction, not a likeness from life.' },
    overview: [
      'Skirgaila was the ruler of the Grand Duchy of Lithuania from 1386 to 1392, governing the vast Lithuanian realm on behalf of his brother Jogaila. When Jogaila married the queen of Poland and became King Władysław II Jagiełło, uniting Poland and Lithuania, he left Skirgaila behind as his regent and deputy to rule Lithuania in his name.',
      'But Skirgaila\'s regency was contested by his ambitious cousin Vytautas, who rose in revolt against him. By the Ostrów Agreement of 1392, Jogaila abandoned Skirgaila and recognised Vytautas as grand duke instead; Skirgaila was compensated with the Kievan lands, where he died in 1397.'
    ],
    greatestFeats: ['Ruled Lithuania as regent for Jogaila'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Skirgaila was the ruler of the Grand Duchy of Lithuania from 1386 to 1392, governing the vast Lithuanian realm on behalf of his brother Jogaila. When Jogaila married the queen of Poland and became King Władysław II Jagiełło, uniting Poland and Lithuania, he left Skirgaila behind as his regent and deputy to rule Lithuania in his name.',
        'But Skirgaila\'s regency was contested by his ambitious cousin Vytautas, who rose in revolt against him. By the Ostrów Agreement of 1392, Jogaila abandoned Skirgaila and recognised Vytautas as grand duke instead; Skirgaila was compensated with the Kievan lands, where he died in 1397.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Skirgaila was born about 1354, a son of Algirdas, the great pagan grand duke of Lithuania, and a full brother of Jogaila. He was among his brother\'s closest supporters in the struggles for power within the sprawling Gediminid family, and when Jogaila accepted Christianity and the Polish crown in 1386, he was the natural choice to hold Lithuania together in his absence.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Skirgaila is remembered as a loyal but harsh and unpopular ruler, devoted to his brother Jogaila\'s interests but lacking the qualities to win the affection of the Lithuanian nobility and the largely Orthodox population of the Ruthenian lands. The sources describe him as capable in war but severe and heavy-drinking, and he failed to conciliate the many factions of the vast and diverse duchy.',
        'His fatal weakness was that he ruled as a deputy, not a sovereign, and could not command the loyalty that a grand duke in his own right might. Against the charismatic and determined Vytautas, Skirgaila\'s dependence on his absent brother\'s backing proved no match; when Jogaila judged it politic to change deputies, Skirgaila was simply set aside. He appears as a faithful lieutenant undone by the impossible position of governing a kingdom that was not truly his.'
      ]},
      { title: 'Regent of Lithuania', paragraphs: [
        'As Jogaila\'s regent, Skirgaila governed Lithuania and led its armies, but he faced constant challenge from his cousin Vytautas, whose father Kęstutis had been killed in the earlier family struggles and who now claimed his own patrimony. Vytautas allied even with the Teutonic Knights against Skirgaila and Jogaila, ravaging the country in a damaging civil war.',
        'Unable to defeat Vytautas and anxious to end the ruinous conflict, Jogaila came to terms with his cousin. By the Ostrów Agreement of 1392, Vytautas was recognised as the ruler of Lithuania, and Skirgaila was removed from the regency and granted instead the duchy of Kiev and other Ruthenian lands.'
      ]},
      { title: 'Death', paragraphs: [
        'Skirgaila ruled his Kievan lands until his death on 11 January 1397, which contemporaries suspected was caused by poison. He was buried at the Monastery of the Caves in Kiev.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Skirgaila is remembered as the loyal brother who held Lithuania for Jogaila in the first years of the Polish-Lithuanian union, only to be displaced by the greater figure of Vytautas. His removal in 1392 marked the emergence of Vytautas as the near-independent ruler of Lithuania, under whom the grand duchy would reach the height of its power, stretching from the Baltic almost to the Black Sea.'
      ]}
    ],
    keyAchievements: [
      { title: 'Ruler of Lithuania, 1386–1392', description: 'Governed the grand duchy as regent for his brother Jogaila.' },
      { title: 'Duke of Kiev', description: 'Held the Kievan lands after his removal from the Lithuanian regency.' }
    ],
    timeline: [
      { date: 'c. 1354', title: 'Born', description: 'Born a son of Grand Duke Algirdas; brother of Jogaila.' },
      { date: '1386', title: 'Becomes regent of Lithuania', description: 'Left to govern Lithuania when Jogaila becomes king of Poland.', links: [per('wladyslaw-ii-jagiello', 'Władysław II Jagiełło', 'His brother, whom he served'), LIT] },
      { date: '1389–1392', title: 'Civil war with Vytautas', description: 'Contends with his cousin Vytautas, who allies with the Teutonic Knights.', links: [per('vytautas', 'Vytautas', 'His rival for Lithuania')] },
      { date: '1392', title: 'Displaced by the Ostrów Agreement', description: 'Removed from the regency in favour of Vytautas, and granted Kiev instead.', links: [per('vytautas', 'Vytautas', 'Who succeeded him as ruler of Lithuania')] },
      { date: '11 January 1397', title: 'Dies at Kiev', description: 'Dies ruling his Kievan lands, reportedly of poison.' }
    ],
    relatedEntries: {
      locations: [ { ...LIT, label: 'The realm he governed' } ],
      people: [ per('wladyslaw-ii-jagiello', 'Władysław II Jagiełło', 'His brother, for whom he ruled Lithuania'), per('vytautas', 'Vytautas', 'His rival and successor') ],
      events: []
    },
    sources: [ src('Lithuania — history', 'https://www.britannica.com/place/Lithuania/History'), src('Jogaila | grand duke of Lithuania and king of Poland', 'https://www.britannica.com/biography/Wladyslaw-II-Jagiello') ],
    isRuler: true,
    succession: { office: 'Regent of Lithuania',
      predecessor: { personSlug: 'wladyslaw-ii-jagiello', displayName: 'Władysław II Jagiełło (Jogaila)', note: 'His brother, who ruled Lithuania before taking the Polish crown and leaving Skirgaila as his regent.' },
      successor: { personSlug: 'vytautas', displayName: 'Vytautas', note: 'His cousin, recognised as ruler of Lithuania by the Ostrów Agreement of 1392.' } }
  },

  // ── ŠVITRIGAILA ───────────────────────────────────────────────────────────────
  {
    id: 'svitrigaila', type: 'character', name: 'Švitrigaila', born: 1370, died: 1452,
    deathAge: 'about 82', causeOfDeath: 'Natural causes', restingPlace: 'Vilnius Cathedral',
    location: 'Grand Duchy of Lithuania', aliases: ['Švitrigaila', 'Bolesław (baptismal name)'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Svitrigaila_%28118503655%29.jpg',
    summary: 'Grand Duke of Lithuania (1430–1432), the brother of Jogaila whose bid for an independent, Orthodox-backed Lithuania against Poland plunged the realm into civil war.',
    title: 'Grand Duke of Lithuania', roles: ['Grand Duke of Lithuania'],
    birth: { date: 'c. 1370', place: { name: 'Lithuania' }, note: 'Youngest son of Algirdas; brother of Jogaila (Władysław II Jagiełło).' },
    death: { date: '10 February 1452', place: { name: 'Lutsk' }, circumstance: 'Died in 1452, long after losing the grand duchy, holding only Volhynia.' },
    quickFacts: { realm: 'Grand Duchy of Lithuania', dynasty: 'Gediminid', culture: 'Lithuanian', knownFor: 'his war for an independent Lithuania against Poland' },
    imageInfo: { caption: 'Švitrigaila of Lithuania in Alessandro Guagnini\'s chronicle of 1578.', creator: 'Alessandro Guagnini', date: '1578', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Svitrigaila_(118503655).jpg', license: 'Public domain', note: 'A sixteenth-century chronicle depiction, not a likeness from life.' },
    overview: [
      'Švitrigaila was Grand Duke of Lithuania from 1430 to 1432, the restless and rebellious youngest brother of Jogaila. He succeeded the great Vytautas as ruler of Lithuania on his cousin\'s death, and at once pursued a policy that set Lithuania against Poland: he sought to make the grand duchy fully independent of the Polish crown and drew his support from the Orthodox Ruthenian nobility of the eastern lands.',
      'His challenge to the Polish-Lithuanian union provoked a coup in 1432 by the pro-Polish party, who raised Sigismund Kęstutaitis in his place. The result was a bitter civil war that raged for years across Lithuania and Ruthenia, and though Švitrigaila fought on, he was ultimately defeated, ending his long life as merely a duke in Volhynia.'
    ],
    greatestFeats: ['Grand Duke of Lithuania', 'Champion of Lithuanian independence and the Orthodox nobility'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Švitrigaila was Grand Duke of Lithuania from 1430 to 1432, the restless and rebellious youngest brother of Jogaila. He succeeded the great Vytautas as ruler of Lithuania on his cousin\'s death, and at once pursued a policy that set Lithuania against Poland: he sought to make the grand duchy fully independent of the Polish crown and drew his support from the Orthodox Ruthenian nobility of the eastern lands.',
        'His challenge to the Polish-Lithuanian union provoked a coup in 1432 by the pro-Polish party, who raised Sigismund Kęstutaitis in his place. The result was a bitter civil war that raged for years across Lithuania and Ruthenia, and though Švitrigaila fought on, he was ultimately defeated, ending his long life as merely a duke in Volhynia.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Švitrigaila was born about 1370, the youngest son of Grand Duke Algirdas and a brother of Jogaila. Ambitious and turbulent from his youth, he spent decades as a perennial malcontent within the Gediminid family, repeatedly intriguing and rebelling against his brother Jogaila and his cousin Vytautas, and at times allying with the Teutonic Knights and other enemies of the union.',
        'When the long-dominant Vytautas died in 1430 without a son, the Lithuanian nobles, asserting their right to choose, elected Švitrigaila grand duke — to the alarm of the Poles.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Švitrigaila is remembered as a bold, energetic, and deeply unstable figure — a lifelong rebel whose driving passion was resistance to Polish domination of Lithuania, but whose impulsiveness and poor judgement repeatedly wrecked his own cause. Restless and quarrelsome, he made and broke alliances with reckless abandon and alienated even his natural supporters.',
        'Yet his career gave voice to something real and lasting: the desire of many Lithuanians, and especially of the Orthodox Ruthenian nobility, for a Lithuania independent of Poland and respectful of their faith and rights. That he championed the Orthodox lords, previously excluded from the highest offices, made him a figure of genuine significance in the history of the grand duchy — even as his own volatility ensured that the cause he embodied went down to defeat.'
      ]},
      { title: 'Grand duke and civil war', paragraphs: [
        'As grand duke, Švitrigaila broke sharply with Poland. He refused to acknowledge Polish overlordship, courted the Emperor Sigismund and the Teutonic Order, and above all drew his strength from the Orthodox nobility of the vast Ruthenian lands, promising them a share in power. This threatened to pull Lithuania out of its union with Poland altogether.',
        'In 1432 the pro-Polish party struck back in a coup that installed Sigismund Kęstutaitis as grand duke. Švitrigaila fled to the Ruthenian east, where his Orthodox supporters proclaimed him, and a long and destructive civil war followed. Defeated in a great battle at Wiłkomierz in 1435, his cause collapsed, though he lingered for years as a claimant before finally accepting a modest lordship in Volhynia.'
      ]},
      { title: 'Death', paragraphs: [
        'Švitrigaila died at Lutsk on 10 February 1452, an old man of over eighty, holding only the duchy of Volhynia. He was the last of the sons of Algirdas.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Švitrigaila is remembered as the grand duke whose war for an independent Lithuania and for the rights of the Orthodox nobility failed, but whose challenge marked a decisive moment in the long struggle over the nature of the Polish-Lithuanian union. His defeat confirmed the union and the primacy of the Catholic nobility, yet the grievances he championed — Lithuanian autonomy and Orthodox rights — would echo through the later history of the grand duchy.'
      ]}
    ],
    keyAchievements: [
      { title: 'Grand Duke of Lithuania, 1430–1432', description: 'Succeeded Vytautas and sought Lithuanian independence from Poland.' },
      { title: 'Champion of the Orthodox nobility', description: 'Drew his support from the Ruthenian Orthodox lords of the east.' }
    ],
    timeline: [
      { date: 'c. 1370', title: 'Born', description: 'Born the youngest son of Grand Duke Algirdas; brother of Jogaila.' },
      { date: '1430', title: 'Becomes Grand Duke of Lithuania', description: 'Elected grand duke on the death of Vytautas.', links: [per('vytautas', 'Vytautas', 'His predecessor'), LIT] },
      { date: '1431', title: 'Breaks with Poland', description: 'Pursues independence, courting the Teutonic Order and the Orthodox nobility.' },
      { date: '1432', title: 'Overthrown in a coup', description: 'Deposed by the pro-Polish party, who install Sigismund Kęstutaitis.' },
      { date: '1435', title: 'Defeated at Wiłkomierz', description: 'His army is crushed at Wiłkomierz, breaking his cause in the civil war.', links: [per('wladyslaw-ii-jagiello', 'Władysław II Jagiełło', 'His brother, whose union he fought')] },
      { date: '10 February 1452', title: 'Dies', description: 'Dies at Lutsk, holding only Volhynia, the last son of Algirdas.' }
    ],
    relatedEntries: {
      locations: [ { ...LIT, label: 'The grand duchy he ruled' } ],
      people: [ per('vytautas', 'Vytautas', 'His predecessor as grand duke'), per('wladyslaw-ii-jagiello', 'Władysław II Jagiełło', 'His brother, whose Polish union he opposed') ],
      events: []
    },
    sources: [ src('Lithuania — history', 'https://www.britannica.com/place/Lithuania/History'), src('Vytautas the Great', 'https://www.britannica.com/biography/Vytautas-the-Great') ],
    isRuler: true,
    succession: { office: 'Grand Duke of Lithuania',
      predecessor: { personSlug: 'vytautas', displayName: 'Vytautas', note: 'His cousin, the great grand duke, on whose death the Lithuanian nobles elected Švitrigaila.' },
      successor: { displayName: 'Sigismund Kęstutaitis', note: 'Raised up by the pro-Polish party in the coup of 1432 that began the Lithuanian civil war.' } }
  },

  // ── LOUIS I OF HUNGARY ────────────────────────────────────────────────────────
  {
    id: 'louis-i-of-hungary', type: 'character', name: 'Louis I of Hungary', born: 1326, died: 1382,
    deathAge: 'about 56', causeOfDeath: 'Illness', restingPlace: 'Székesfehérvár',
    location: 'Kingdom of Hungary', aliases: ['Louis the Great', 'Lajos I', 'Louis I of Hungary and Poland'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Louis_I_%28Chronicon_Pictum%29.jpg',
    summary: 'King of Hungary (1342–1382) and Poland (1370–1382), a powerful Angevin monarch under whom Hungary reached its greatest medieval extent and influence.',
    title: 'King of Hungary and Poland', roles: ['King of Hungary', 'King of Poland'],
    birth: { date: '5 March 1326', place: { name: 'Visegrád' }, note: 'Son of Charles I of Hungary, of the Angevin dynasty.' },
    death: { date: '10 September 1382', place: { name: 'Nagyszombat' }, circumstance: 'Died in 1382, his crowns passing to his daughters — Mary in Hungary and Jadwiga in Poland.' },
    quickFacts: { realm: 'Kingdom of Hungary and Poland', dynasty: 'Capetian House of Anjou', culture: 'Hungarian', knownFor: 'ruling Hungary at its greatest medieval power and uniting it with Poland' },
    imageInfo: { caption: 'Louis I of Hungary in the fourteenth-century Chronicon Pictum.', creator: 'Chronicon Pictum', date: '14th century', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Louis_I_(Chronicon_Pictum).jpg', license: 'Public domain', note: 'A near-contemporary illuminated chronicle image of the king.' },
    overview: [
      'Louis I, called "the Great", was king of Hungary from 1342 and king of Poland from 1370, one of the most powerful European monarchs of the fourteenth century. The son of the Angevin king Charles I, he inherited a strong and wealthy Hungary and raised it to the height of its medieval power and prestige.',
      'He waged wars across a vast arc — in Italy to avenge his murdered brother, against Venice for Dalmatia, and in the Balkans, where his overlordship reached deep into Serbia, Bosnia, and Bulgaria. In 1370 he inherited the Polish crown as well, briefly uniting the two realms. He died in 1382 without a son, leaving Hungary to his daughter Mary and Poland to his daughter Jadwiga.'
    ],
    greatestFeats: ['Ruled Hungary at its greatest medieval extent', 'King of Poland', 'Extended Hungarian power across the Balkans and Adriatic'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Louis I, called "the Great", was king of Hungary from 1342 and king of Poland from 1370, one of the most powerful European monarchs of the fourteenth century. The son of the Angevin king Charles I, he inherited a strong and wealthy Hungary and raised it to the height of its medieval power and prestige.',
        'He waged wars across a vast arc — in Italy to avenge his murdered brother, against Venice for Dalmatia, and in the Balkans, where his overlordship reached deep into Serbia, Bosnia, and Bulgaria. In 1370 he inherited the Polish crown as well, briefly uniting the two realms. He died in 1382 without a son, leaving Hungary to his daughter Mary and Poland to his daughter Jadwiga.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Louis was born in 1326, the son of Charles I of Hungary, who had restored the Hungarian monarchy after the extinction of the Árpád line and made it strong and rich through his reform of the mines and coinage. Louis inherited this flourishing kingdom in 1342, a well-educated and chivalrous prince raised to the ideals of knighthood and crusade.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Louis the Great embodied the ideal of the chivalric warrior-king: brave, pious, cultivated, and restlessly ambitious for glory and dominion. Contemporaries admired his knightly virtues, his devotion to the Church and to justice, and the splendour of his court, which became a centre of chivalry and learning. He founded the University of Pécs and patronised the arts and the crusading orders.',
        'His energy carried him into war on every frontier, from the plains of Naples to the Dalmatian coast and the Balkan mountains, in pursuit of dynastic claims and Christian conquest. If his campaigns won more glory than lasting territorial gain, and his vast realm depended heavily on his own person, he nonetheless raised Hungary to a peak of prestige it would not see again. He is remembered as one of the greatest of Hungarian kings and the very model of a fourteenth-century chivalric monarch.'
      ]},
      { title: 'Wars and the union with Poland', paragraphs: [
        'Louis\'s reign was a whirl of campaigns. He twice invaded Italy to avenge the murder of his brother Andrew, husband of Queen Joanna I of Naples; he warred repeatedly with Venice, wresting from it control of the Dalmatian coast; and he pushed Hungarian overlordship deep into the Balkans, over Serbia, Bosnia, Wallachia, and Bulgaria, and even campaigned against the Lithuanians and the Golden Horde.',
        'In 1370, on the death of his uncle Casimir the Great of Poland, Louis inherited the Polish crown, uniting Hungary and Poland in his person — though he governed Poland at a distance and largely through regents. To secure the Polish succession for his daughters, he granted the Polish nobility the important privilege of Košice in 1374.'
      ]},
      { title: 'Death', paragraphs: [
        'Louis I died on 10 September 1382, leaving no son. His elder surviving daughter Mary succeeded him in Hungary, and his younger daughter Jadwiga was made "king" of Poland — whose marriage to Jogaila of Lithuania would found the Jagiellonian dynasty and the Polish-Lithuanian union.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Louis the Great is remembered as the monarch under whom medieval Hungary reached its zenith of power, wealth, and prestige, its influence stretching across the Balkans and to the Adriatic and the Baltic. His personal union with Poland and his daughters\' inheritances shaped the future of Central Europe: through Jadwiga\'s marriage to Jogaila, his Polish crown passed to the Jagiellonians, one of the great dynasties of the age.'
      ]}
    ],
    keyAchievements: [
      { title: 'King of Hungary at its height', description: 'Ruled medieval Hungary at its greatest power and prestige.' },
      { title: 'King of Poland from 1370', description: 'United Hungary and Poland in a personal union.' },
      { title: 'Extended Balkan and Adriatic power', description: 'Won Dalmatia from Venice and overlordship across the Balkans.' }
    ],
    timeline: [
      { date: '5 March 1326', title: 'Born', description: 'Born the son of the Angevin king Charles I of Hungary.' },
      { date: '1342', title: 'Becomes King of Hungary', description: 'Succeeds his father to a strong and wealthy kingdom.' },
      { date: '1347–1350', title: 'Campaigns in Italy', description: 'Invades Naples to avenge his murdered brother Andrew.' },
      { date: '1358', title: 'Wins Dalmatia', description: 'Forces Venice to cede control of the Dalmatian coast.' },
      { date: '1370', title: 'Becomes King of Poland', description: 'Inherits the Polish crown on the death of Casimir the Great.', links: [POL] },
      { date: '10 September 1382', title: 'Dies', description: 'Dies without a son; Mary succeeds in Hungary and Jadwiga in Poland.', links: [per('jadwiga-of-poland', 'Jadwiga of Poland', 'His daughter and successor in Poland')] }
    ],
    relatedEntries: {
      locations: [ { ...POL, label: 'The kingdom he inherited in 1370' } ],
      people: [ per('jadwiga-of-poland', 'Jadwiga of Poland', 'His daughter and successor in Poland'), per('wladyslaw-ii-jagiello', 'Władysław II Jagiełło', 'Who married his daughter Jadwiga and founded the Jagiellonian line') ],
      events: []
    },
    sources: [ src('Louis I | king of Hungary and Poland', 'https://www.britannica.com/biography/Louis-I-king-of-Hungary-and-Poland'), src('Hungary — history', 'https://www.britannica.com/place/Hungary/History') ],
    isRuler: true,
    succession: { office: 'King of Hungary and Poland', note: 'Succession shown for the Polish crown, which passed to his daughter Jadwiga; his Hungarian crown went to his daughter Mary.',
      predecessor: { displayName: 'Charles I of Hungary', note: 'His father, the Angevin king who restored and enriched the Hungarian monarchy. (In Poland his predecessor was his uncle Casimir the Great.)' },
      successor: { personSlug: 'jadwiga-of-poland', displayName: 'Jadwiga of Poland', note: 'His younger daughter, crowned "king" of Poland, whose marriage to Jogaila founded the Jagiellonian dynasty.' } }
  },

  // ── STEFAN LAZAREVIĆ ──────────────────────────────────────────────────────────
  {
    id: 'stefan-lazarevic', type: 'character', name: 'Stefan Lazarević', born: 1377, died: 1427,
    deathAge: 'about 50', causeOfDeath: 'Stroke, while hunting', restingPlace: 'Koporin Monastery',
    location: 'Serbian Despotate', aliases: ['Stefan Lazarević', 'Stephen Lazarević', 'Stefan the Tall'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Stefan_Lazarevic-freska.JPG',
    summary: 'Ruler and despot of Serbia (1389–1427), the son of Prince Lazar, who steered Serbia between the Ottomans and Hungary and made it a last centre of Serbian culture.',
    title: 'Despot of Serbia', roles: ['Despot of Serbia'],
    birth: { date: 'c. 1377', place: { name: 'Serbia' }, note: 'Son of Prince Lazar of Serbia and Princess Milica.' },
    death: { date: '19 July 1427', place: { name: 'near Belgrade' }, circumstance: 'Died of a stroke while hunting, having named his nephew Đurađ Branković his heir.' },
    quickFacts: { realm: 'Serbian Despotate', dynasty: 'Lazarević', culture: 'Serbian', knownFor: 'ruling Serbia between the Ottomans and Hungary and his patronage of culture' },
    imageInfo: { caption: 'Stefan Lazarević of Serbia in a medieval fresco.', creator: 'Serbian fresco painter', date: 'Early 15th century', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Stefan_Lazarevic-freska.JPG', license: 'Public domain', note: 'A near-contemporary Serbian fresco portrait of the ruler.' },
    overview: [
      'Stefan Lazarević was the ruler of Serbia from 1389 to 1427, the son of Prince Lazar, who had fallen at the great Battle of Kosovo. Coming to power as a youth in the shadow of that catastrophe, Stefan for years ruled as a vassal of the Ottoman sultan, fighting in the sultan\'s armies at Ankara and elsewhere, before turning to Hungary as the balance of power shifted.',
      'From about 1402 he held the Byzantine court title of "despot", by which his realm became the Serbian Despotate. A gifted soldier, statesman, and man of letters, he gave war-torn Serbia a generation of relative stability and made his capital, Belgrade, a flourishing centre of Serbian culture — a last golden age before the Ottoman conquest.'
    ],
    greatestFeats: ['Despot of Serbia', 'Steered Serbia between the Ottomans and Hungary', 'Patron of Serbian culture and letters'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Stefan Lazarević was the ruler of Serbia from 1389 to 1427, the son of Prince Lazar, who had fallen at the great Battle of Kosovo. Coming to power as a youth in the shadow of that catastrophe, Stefan for years ruled as a vassal of the Ottoman sultan, fighting in the sultan\'s armies at Ankara and elsewhere, before turning to Hungary as the balance of power shifted.',
        'From about 1402 he held the Byzantine court title of "despot", by which his realm became the Serbian Despotate. A gifted soldier, statesman, and man of letters, he gave war-torn Serbia a generation of relative stability and made his capital, Belgrade, a flourishing centre of Serbian culture — a last golden age before the Ottoman conquest.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Stefan was born about 1377, the son of Prince Lazar of Serbia and Princess Milica. He was still a boy when his father was killed and the Serbian army shattered at the Battle of Kosovo in 1389, leaving Serbia at the mercy of the victorious Ottomans. His mother Milica governed at first, and Serbia was forced to accept Ottoman overlordship, sealed by the marriage of Stefan\'s sister to the sultan.',
        'Stefan grew up a loyal Ottoman vassal, obliged to serve the sultan in war.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Stefan Lazarević was a figure of unusual breadth: a brave and skilled warrior, a subtle and pragmatic statesman, and a genuine intellectual and patron of the arts. Contemporaries praised his courage in battle — he distinguished himself even in the eyes of his Ottoman overlords — and his wisdom in the near-impossible task of preserving a Serbian state between two great powers.',
        'He was also a man of learning and piety, himself the author of the celebrated lyric "Slovo ljubve" ("Word of Love"), a patron of scholars, translators, and manuscript workshops, and a builder of monasteries and of his capital at Belgrade. In him the martial and the cultivated were combined to a remarkable degree, and he used both to shield his people. He is remembered as perhaps the ablest and most admirable of Serbia\'s late medieval rulers.'
      ]},
      { title: 'Between the Ottomans and Hungary', paragraphs: [
        'For over a decade Stefan served as an Ottoman vassal, fighting in Sultan Bayezid I\'s armies — including, by tradition, with distinction at the Battle of Nicopolis against the crusaders and at the catastrophic Battle of Ankara in 1402, where Bayezid was destroyed by Timur. The Ottoman collapse after Ankara freed Stefan\'s hand, and from the Byzantines he received the title of despot.',
        'Reading the shifting balance shrewdly, Stefan increasingly turned to Hungary, becoming a vassal and ally of King Sigismund, from whom he received Belgrade and other lands. He played the Ottoman contenders during their civil war against one another, and used the respite to consolidate and enrich his despotate, developing the Novo Brdo silver mines and making Belgrade his splendid capital.'
      ]},
      { title: 'Death', paragraphs: [
        'Stefan Lazarević died of a stroke while hunting near Belgrade on 19 July 1427, having arranged for his nephew Đurađ Branković to succeed him. He was buried at the monastery of Koporin.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Stefan Lazarević is remembered as one of the greatest of medieval Serbian rulers — the warrior-statesman-poet who, in the desperate generation after Kosovo, preserved a Serbian state and gave it a last flowering of culture and prosperity. Under his successor Đurađ Branković the despotate would struggle on for another three decades before the Ottomans finally extinguished it in 1459, but Stefan\'s reign remained the model of that doomed independence.'
      ]}
    ],
    keyAchievements: [
      { title: 'Despot of Serbia', description: 'Ruled Serbia through the perilous generation after Kosovo.' },
      { title: 'Balanced Ottomans and Hungary', description: 'Preserved a Serbian state between the two great powers.' },
      { title: 'Patron of culture and a poet', description: 'Made Belgrade a cultural centre and wrote the lyric "Slovo ljubve".' }
    ],
    timeline: [
      { date: 'c. 1377', title: 'Born', description: 'Born the son of Prince Lazar of Serbia.', links: [per('prince-lazar', 'Prince Lazar', 'His father')] },
      { date: '1389', title: 'Succeeds after Kosovo', description: 'Comes to power as a youth after his father\'s death at the Battle of Kosovo.', links: [per('prince-lazar', 'Prince Lazar', 'His father and predecessor'), ev('battle-of-kosovo', 'Battle of Kosovo', 'Where his father fell')] },
      { date: '1402', title: 'Fights at Ankara; gains the despot title', description: 'Serves the sultan at Ankara; after the Ottoman collapse, receives the title of despot.', links: [OTT] },
      { date: 'c. 1403', title: 'Turns to Hungary', description: 'Becomes a vassal of King Sigismund of Hungary and receives Belgrade.' },
      { date: 'c. 1410', title: 'A golden age at Belgrade', description: 'Makes Belgrade his capital and a flourishing centre of Serbian culture.' },
      { date: '19 July 1427', title: 'Dies', description: 'Dies of a stroke while hunting; his nephew Đurađ Branković succeeds.' }
    ],
    relatedEntries: {
      locations: [ { ...OTT, label: 'The empire he served and resisted' } ],
      people: [ per('prince-lazar', 'Prince Lazar', 'His father and predecessor') ],
      events: [ ev('battle-of-kosovo', 'Battle of Kosovo', 'Where his father fell, shaping his reign') ]
    },
    sources: [ src('Stefan Lazarević | Serbian ruler', 'https://www.britannica.com/place/Serbia/History'), src('Battle of Kosovo', 'https://www.britannica.com/event/Battle-of-Kosovo-1389') ],
    isRuler: true,
    succession: { office: 'Despot of Serbia',
      predecessor: { personSlug: 'prince-lazar', displayName: 'Prince Lazar', note: 'His father, who fell at the Battle of Kosovo in 1389.' },
      successor: { displayName: 'Đurađ Branković', note: 'His nephew, whom Stefan named heir and who ruled the despotate until the Ottoman conquest neared.' } }
  },

  // ── YAROPOLK I OF KIEV ────────────────────────────────────────────────────────
  {
    id: 'yaropolk-i-of-kiev', type: 'character', name: 'Yaropolk I of Kiev', born: 958, died: 980,
    deathAge: 'about 22', causeOfDeath: 'Murdered by his brother\'s men', restingPlace: 'Kiev',
    location: 'Kievan Rus\'', aliases: ['Yaropolk Sviatoslavich', 'Yaropolk I'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/68/%D0%9E%D1%82%D1%8A%D0%B5%D0%B7%D0%B4_%D0%AF%D1%80%D0%BE%D0%BF%D0%BE%D0%BB%D0%BA%D0%B0_%D0%B8%D0%B7_%D0%9A%D0%B8%D0%B5%D0%B2%D0%B0_%D0%B2_%D0%B3%D0%BE%D1%80%D0%BE%D0%B4_%D0%A0%D0%BE%D0%B4%D0%BD%D1%8E.jpg',
    summary: 'Grand Prince of Kiev (972–980), the eldest son of Sviatoslav I, whose war with his brothers ended when Vladimir the Great defeated and killed him to seize Kiev.',
    title: 'Grand Prince of Kiev', roles: ['Grand Prince of Kiev'],
    birth: { date: 'c. 958', place: { name: 'Kiev' }, note: 'Eldest son of Sviatoslav I of Kiev.' },
    death: { date: '980', place: { name: 'Rodnya' }, circumstance: 'Murdered by two Varangians at his brother Vladimir\'s bidding during a parley.' },
    quickFacts: { realm: 'Kievan Rus\'', dynasty: 'Rurikid', culture: 'Rus\'', knownFor: 'the fratricidal war that ended with Vladimir the Great\'s seizure of Kiev' },
    imageInfo: { caption: 'Yaropolk I departing Kiev for Rodnya, from the illuminated Radziwiłł Chronicle.', creator: 'Radziwiłł Chronicle', date: '15th-century copy of an earlier chronicle', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Отъезд_Ярополка_из_Киева_в_город_Родню.jpg', license: 'CC BY-SA 4.0', note: 'An illumination from the Radziwiłł Chronicle, not a likeness from life.' },
    overview: [
      'Yaropolk I was Grand Prince of Kiev from 972 to 980, the eldest son of the warrior-prince Sviatoslav I. When Sviatoslav died on his way home from the Balkans, his lands were divided among his three sons: Yaropolk received Kiev itself, Oleg the land of the Drevlians, and Vladimir the northern city of Novgorod.',
      'The division soon dissolved into fratricidal war. Yaropolk defeated and killed his brother Oleg, and drove Vladimir into exile abroad. But Vladimir returned with a Varangian army, and by force and treachery overcame Yaropolk, who was murdered at a parley in 980 — leaving Vladimir sole ruler of Rus\', the future Vladimir the Great.'
    ],
    greatestFeats: ['Grand Prince of Kiev'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Yaropolk I was Grand Prince of Kiev from 972 to 980, the eldest son of the warrior-prince Sviatoslav I. When Sviatoslav died on his way home from the Balkans, his lands were divided among his three sons: Yaropolk received Kiev itself, Oleg the land of the Drevlians, and Vladimir the northern city of Novgorod.',
        'The division soon dissolved into fratricidal war. Yaropolk defeated and killed his brother Oleg, and drove Vladimir into exile abroad. But Vladimir returned with a Varangian army, and by force and treachery overcame Yaropolk, who was murdered at a parley in 980 — leaving Vladimir sole ruler of Rus\', the future Vladimir the Great.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Yaropolk was born about 958, the eldest son of Sviatoslav I, the last great pagan warlord of the Rurikid house, whose campaigns had shattered the Khazars and reached deep into the Balkans. Before setting out on his final campaign, Sviatoslav divided his realm among his sons, placing Yaropolk in Kiev, the chief city of the Rus\'. When Sviatoslav was killed by the Pechenegs on his way home in 972, Yaropolk became grand prince.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Yaropolk is a shadowy figure, seen through the hostile lens of chronicles written to glorify the brother who overthrew him, and his character is hard to recover. Some traditions credit him with a mild disposition and even a leaning toward Christianity — his grandmother Olga had been a Christian, and he is said to have received envoys from the pope — which the later Christian chroniclers, oddly, did little to celebrate, committed as they were to the sanctity of his conqueror Vladimir.',
        'What the record shows is a prince caught, like so many of his house, in the deadly logic of divided inheritance. Whether by his own ambition or that of his counsellors — one adviser is blamed for goading him into the war with Oleg — he was drawn into the fratricidal struggle that consumed his father\'s realm. He appears less as a villain or a hero than as a loser in the merciless contest among Sviatoslav\'s sons, remembered chiefly as the obstacle that Vladimir the Great had to remove.'
      ]},
      { title: 'The war of the brothers', paragraphs: [
        'The peace among Sviatoslav\'s sons did not last. War broke out between Yaropolk and Oleg, and in a battle near the Drevlian capital Oleg was killed in the rout, crushed as his men fled across a bridge. On hearing of Oleg\'s death and fearing Yaropolk, the youngest brother Vladimir fled from Novgorod overseas to the Varangians, and for a time Yaropolk ruled all of Rus\'.',
        'But Vladimir returned with a Varangian host, retook Novgorod, and marched on Kiev. Outmanoeuvred and betrayed by his own commander Blud, Yaropolk was lured to a parley with his brother, where two of Vladimir\'s Varangians ran him through with their swords.'
      ]},
      { title: 'Death', paragraphs: [
        'Yaropolk was murdered at Rodnya in 980 at his brother\'s bidding. His death left Vladimir sole ruler of the Rus\'. By one account Vladimir took Yaropolk\'s pregnant widow, and their son Sviatopolk — later "the Accursed" — would carry on the family\'s murderous rivalries in the next generation.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Yaropolk I is remembered chiefly as the brother whom Vladimir the Great overthrew to unite the Rus\' under his own hand. His fall cleared the way for one of the great turning points of Russian and Ukrainian history: Vladimir\'s consolidation of Kievan Rus\' and, a few years later, his conversion to Orthodox Christianity and the baptism of his people. Yaropolk\'s brief, war-torn reign stands at the threshold of Christian Rus\'.'
      ]}
    ],
    keyAchievements: [
      { title: 'Grand Prince of Kiev, 972–980', description: 'Ruled Kiev after his father Sviatoslav\'s death.' },
      { title: 'Briefly reunited the Rus\'', description: 'Held all his father\'s lands after defeating his brother Oleg.' }
    ],
    timeline: [
      { date: 'c. 958', title: 'Born', description: 'Born the eldest son of Sviatoslav I of Kiev.', links: [per('sviatoslav-i-of-kiev', 'Sviatoslav I of Kiev', 'His father')] },
      { date: '972', title: 'Becomes Grand Prince of Kiev', description: 'Succeeds to Kiev on his father\'s death, his brothers holding other lands.', links: [per('sviatoslav-i-of-kiev', 'Sviatoslav I of Kiev', 'His father and predecessor'), RUS] },
      { date: 'c. 977', title: 'War with his brother Oleg', description: 'Defeats and kills his brother Oleg; Vladimir flees abroad.' },
      { date: 'c. 978', title: 'Rules all the Rus\'', description: 'Holds all his father\'s lands after Vladimir\'s flight.' },
      { date: '980', title: 'Killed by Vladimir\'s men', description: 'Lured to a parley and murdered; Vladimir the Great becomes sole ruler.' }
    ],
    relatedEntries: {
      locations: [ { ...RUS, label: 'The realm he ruled from Kiev' } ],
      people: [ per('sviatoslav-i-of-kiev', 'Sviatoslav I of Kiev', 'His father and predecessor'), per('olga-of-kiev', 'Olga of Kiev', 'His Christian grandmother') ],
      events: []
    },
    sources: [ src('Kievan Rus | medieval state', 'https://www.britannica.com/place/Kievan-Rus'), src('Vladimir I | grand prince of Kiev', 'https://www.britannica.com/biography/Vladimir-I') ],
    isRuler: true,
    succession: { office: 'Grand Prince of Kiev',
      predecessor: { personSlug: 'sviatoslav-i-of-kiev', displayName: 'Sviatoslav I of Kiev', note: 'His father, who divided the Rus\' among his sons before his death in 972.' },
      successor: { displayName: 'Vladimir the Great', note: 'His brother, who defeated and killed him in 980 to become sole ruler of the Rus\' and later converted it to Christianity.' } }
  }
]

let added = 0, replaced = 0
for (const p of people) {
  const i = data.characters.findIndex(c => c.id === p.id)
  if (i >= 0) { data.characters[i] = p; replaced++ } else { data.characters.push(p); added++ }
}
const byId = new Map(data.characters.map(c => [c.id, c]))
const relink = (rulerId, side, personSlug, displayName, note) => {
  const c = byId.get(rulerId)
  if (!c?.succession?.[side]) { console.warn(`SKIP ${rulerId}.${side}`); return }
  c.succession[side] = { personSlug, displayName, note }
  console.log(`relinked ${rulerId}.${side} -> ${personSlug}`)
}
relink('andrew-ii-of-hungary', 'predecessor', 'emeric-of-hungary', 'Emeric of Hungary', 'His brother, against whom he repeatedly rebelled before finally gaining the throne.')
relink('andrew-ii-of-hungary', 'successor', 'bela-iv-of-hungary', 'Béla IV of Hungary', 'His son, the "second founder" who rebuilt Hungary after the Mongols.')
relink('wladyslaw-ii-jagiello', 'successor', 'wladyslaw-iii-of-poland', 'Władysław III of Poland', 'His son, the crusader-king killed at Varna.')
relink('vytautas', 'predecessor', 'skirgaila', 'Skirgaila', 'Jogaila\'s regent in Lithuania, whom Vytautas supplanted by the Ostrów Agreement of 1392.')
relink('vytautas', 'successor', 'svitrigaila', 'Švitrigaila', 'Jogaila\'s brother, elected grand duke on Vytautas\'s death.')
relink('jadwiga-of-poland', 'predecessor', 'louis-i-of-hungary', 'Louis I of Hungary', 'Her father, king of Hungary and Poland, whose Polish crown she inherited.')
relink('prince-lazar', 'successor', 'stefan-lazarevic', 'Stefan Lazarević', 'His son, who ruled Serbia as despot after Kosovo.')
relink('sviatoslav-i-of-kiev', 'successor', 'yaropolk-i-of-kiev', 'Yaropolk I of Kiev', 'His eldest son, who took Kiev before the war of the brothers.')

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`\nEast Europe added: ${added}, replaced: ${replaced}. Total: ${data.characters.length}`)
