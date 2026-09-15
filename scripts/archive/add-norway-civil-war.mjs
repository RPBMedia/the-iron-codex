/**
 * Norwegian civil-war era. Creates the three missing kings that bridge the two
 * existing anchors Sverre Sigurdsson and Haakon IV Haakonsson — Magnus V
 * Erlingsson, Håkon III Sverresson, and Inge II Bårdsson — so succession runs
 * continuously Magnus V -> Sverre -> Håkon III -> Inge II -> Haakon IV. The
 * child-king Guttorm Sigurdsson (r. 1204, a few months) is handled in notes
 * rather than a stub. Bounded above by Håkon II Herdebrei (noted). Idempotent.
 */
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))

const NOR = { title: 'Kingdom of Norway', type: 'location', slug: 'kingdom-of-norway' }
const per = (slug, title, label) => ({ title, type: 'person', slug, label })
const src = (title, url) => ({ title, author: 'Encyclopaedia Britannica', type: 'encyclopedia', url })

const people = [
  // ── MAGNUS V ERLINGSSON ───────────────────────────────────────────────────────
  {
    id: 'magnus-v-erlingsson', type: 'character', name: 'Magnus V Erlingsson', born: 1156, died: 1184,
    deathAge: 'about 28', causeOfDeath: 'Killed at the naval Battle of Fimreite', restingPlace: 'Christ Church, Bergen',
    location: 'Kingdom of Norway', aliases: ['Magnus Erlingsson', 'Magnus V'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Magnus_Erlingssons_saga-Kongen_tek_hyllest-Werenskiold.jpg',
    summary: 'King of Norway (1161–1184), the first Norwegian king crowned and anointed by the Church, whose reign under his father Erling Skakke ended in defeat and death at the hands of Sverre.',
    title: 'King of Norway', roles: ['King of Norway'],
    birth: { date: '1156', place: { name: 'Norway' }, note: 'Son of the magnate Erling Skakke and Kristin, a daughter of Sigurd I the Crusader.' },
    death: { date: '15 June 1184', place: { name: 'Fimreite, Sognefjord' }, event: { name: 'Battle of Fimreite', type: 'event' },
      circumstance: 'Killed in the great naval battle of Fimreite, decisively defeated by Sverre and the Birkebeiner.' },
    quickFacts: { realm: 'Kingdom of Norway', dynasty: 'Gille / Skakke line', culture: 'Norse', knownFor: 'being the first Norwegian king crowned by the Church, and his war with Sverre' },
    imageInfo: { caption: 'Magnus V Erlingsson receiving homage, illustrated by Erik Werenskiold for an edition of Snorri\'s Heimskringla.', creator: 'Erik Werenskiold', date: 'c. 1899', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Magnus_Erlingssons_saga-Kongen_tek_hyllest-Werenskiold.jpg', license: 'Public domain', note: 'A late nineteenth-century saga illustration, not a contemporary likeness.' },
    overview: [
      'Magnus V Erlingsson was king of Norway from 1161 to 1184, during the long civil-war era that followed the death of Sigurd the Crusader. His claim was unusual: he was raised to the throne as a child through his mother Kristin, a daughter of Sigurd the Crusader, while real power lay with his formidable father, the magnate Erling Skakke.',
      'His reign is landmark for the coronation of about 1163–1164, when Magnus became the first Norwegian king to be crowned and anointed by the Church, sealing an alliance with Archbishop Eystein of Nidaros that gave the Church a decisive voice in kingship. But the settlement did not bring peace: the pretender Sverre and his Birkebeiner rose against him, killed Erling Skakke, and finally destroyed Magnus at the sea-battle of Fimreite in 1184.'
    ],
    greatestFeats: ['First Norwegian king crowned by the Church', 'King of Norway for over two decades', 'Issued a Church-backed law of succession'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Magnus V Erlingsson was king of Norway from 1161 to 1184, during the long civil-war era that followed the death of Sigurd the Crusader. His claim was unusual: he was raised to the throne as a child through his mother Kristin, a daughter of Sigurd the Crusader, while real power lay with his formidable father, the magnate Erling Skakke.',
        'His reign is landmark for the coronation of about 1163–1164, when Magnus became the first Norwegian king to be crowned and anointed by the Church, sealing an alliance with Archbishop Eystein of Nidaros that gave the Church a decisive voice in kingship. But the settlement did not bring peace: the pretender Sverre and his Birkebeiner rose against him, killed Erling Skakke, and finally destroyed Magnus at the sea-battle of Fimreite in 1184.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Magnus was born in 1156 to Erling Skakke, one of the greatest magnates of the realm, and Kristin, a daughter of King Sigurd I the Crusader. In the tangled dynastic politics of the civil-war era, his father put him forward as king in 1161 on the strength of that maternal royal descent — a departure from the rule that only the sons of kings could claim the throne.',
        'Because Magnus was a child, the government of the kingdom was in the hands of his father, and Erling Skakke ruthlessly eliminated rival claimants to secure his son\'s position.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Magnus is a king seen mostly in his father\'s shadow, and the sources present him as an appealing but overshadowed figure — brave and well-liked, but never the true master of his own reign while Erling Skakke lived. His personality is bound up with his dependence on that powerful father and on the Church that had crowned him.',
        'What the saga tradition allows him is a certain gallantry: a king who came into his own only in adversity, fighting on for his crown after his father\'s death against the relentless rise of Sverre, and dying sword in hand at Fimreite rather than yielding. He appears as the sympathetic loser of his generation of the civil wars — legitimate, consecrated, and ultimately outmatched.'
      ]},
      { title: 'The Church coronation and the war with Sverre', paragraphs: [
        'The masterstroke of the reign belonged to Erling Skakke: an alliance with the powerful Archbishop Eystein of Nidaros. In about 1163–1164 Magnus was crowned and anointed king by the Church — the first Norwegian coronation of its kind — and in return granted the Church privileges and issued a law of royal succession shaped to favour legitimate, Church-approved kingship. The deal bound crown and Church together as never before.',
        'It could not end the civil wars. From 1177 a new pretender, Sverre, claiming to be a son of King Sigurd Munn, gathered the ragged Birkebeiner faction and waged a brilliant guerrilla war. In 1179 Sverre defeated and killed Erling Skakke at Kalvskinnet, near Nidaros, robbing Magnus of the father who had made him. Magnus fought on alone for five more years.'
      ]},
      { title: 'Death', paragraphs: [
        'The end came at sea. On 15 June 1184, at Fimreite in the Sognefjord, Sverre\'s smaller but better-led fleet annihilated Magnus\'s forces. Magnus V was killed in the battle, and Sverre took the throne. Magnus was buried at Christ Church in Bergen.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Magnus V is remembered as the first Norwegian king crowned by the Church, a precedent of lasting importance for the sacral, Church-sanctioned monarchy that followed, and as the royal antagonist whose fall raised the extraordinary Sverre to power. His defeat at Fimreite marked the triumph of the Birkebeiner cause and opened the Sverrir dynasty that would rule Norway into its thirteenth-century golden age.'
      ]}
    ],
    keyAchievements: [
      { title: 'First Norwegian king crowned by the Church', description: 'His coronation of c. 1163–1164 gave the Church a lasting role in Norwegian kingship.' },
      { title: 'King of Norway, 1161–1184', description: 'Held the throne through more than two decades of the civil-war era.' },
      { title: 'A Church-backed law of succession', description: 'Issued a succession law shaped to favour legitimate, consecrated kingship.' }
    ],
    timeline: [
      { date: '1156', title: 'Born', description: 'Born to the magnate Erling Skakke and Kristin, daughter of Sigurd the Crusader.', links: [per('sigurd-of-norway', 'Sigurd the Crusader', 'His maternal grandfather')] },
      { date: '1161', title: 'Made king as a child', description: 'Raised to the throne through his mother\'s royal descent, with his father Erling Skakke ruling in fact.', links: [NOR] },
      { date: 'c. 1163', title: 'Crowned by the Church', description: 'Becomes the first Norwegian king crowned and anointed, in alliance with Archbishop Eystein.' },
      { date: '1179', title: 'Erling Skakke killed at Kalvskinnet', description: 'Sverre defeats and kills Magnus\'s father, the true power of the reign.', links: [per('sverre-sigurdsson', 'Sverre Sigurdsson', 'His Birkebeiner rival')] },
      { date: '15 June 1184', title: 'Killed at Fimreite', description: 'Defeated and killed in the great sea-battle of Fimreite; Sverre takes the throne.', links: [per('sverre-sigurdsson', 'Sverre Sigurdsson', 'His victor and successor')] }
    ],
    relatedEntries: {
      locations: [ { ...NOR, label: 'His kingdom' } ],
      people: [ per('sverre-sigurdsson', 'Sverre Sigurdsson', 'His Birkebeiner rival, victor, and successor'), per('sigurd-of-norway', 'Sigurd the Crusader', 'His maternal grandfather, through whom he claimed the throne') ],
      events: []
    },
    sources: [ src('Magnus V Erlingsson | king of Norway', 'https://www.britannica.com/place/Norway'), src('Sverre Sigurdsson | king of Norway', 'https://www.britannica.com/biography/Sverre-Sigurdsson') ],
    isRuler: true,
    succession: { office: 'King of Norway',
      predecessor: { displayName: 'Håkon II Herdebrei', note: 'Håkon II "the Broadshouldered", the boy-king defeated and killed in 1162, whom Magnus and his father Erling Skakke supplanted. The earlier civil-war kings are a separate set not yet covered in the Codex.' },
      successor: { personSlug: 'sverre-sigurdsson', displayName: 'Sverre Sigurdsson', note: 'The Birkebeiner leader who defeated and killed him at Fimreite and took the throne.' } }
  },

  // ── HÅKON III SVERRESSON ──────────────────────────────────────────────────────
  {
    id: 'hakon-iii-sverresson', type: 'character', name: 'Håkon III Sverresson', born: 1177, died: 1204,
    deathAge: 'about 27', causeOfDeath: 'Sudden illness, rumoured poisoning', restingPlace: 'Christ Church, Bergen',
    location: 'Kingdom of Norway', aliases: ['Haakon III', 'Håkon Sverresson', 'Haakon Sverresson'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/be/H%C3%A5kon_III-Hamar_01.png',
    summary: 'King of Norway (1202–1204), son of Sverre, who made peace with the Church after his father\'s long conflict, then died young amid rumours of poison — leaving the unborn Haakon IV.',
    title: 'King of Norway', roles: ['King of Norway'],
    birth: { date: 'c. 1177', place: { name: 'Norway' }, note: 'Son of King Sverre Sigurdsson.' },
    death: { date: '1 January 1204', place: { name: 'Bergen' }, circumstance: 'Died suddenly on New Year\'s Day 1204, widely rumoured to have been poisoned; his mistress was then carrying the future Haakon IV.' },
    quickFacts: { realm: 'Kingdom of Norway', dynasty: 'House of Sverre', culture: 'Norse', knownFor: 'reconciling the crown with the Church, and dying young amid poisoning rumours' },
    imageInfo: { caption: 'A nineteenth-century depiction of Håkon III Sverresson of Norway.', creator: 'C. I. Schive (lithograph)', date: '1865', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Håkon_III-Hamar_01.png', license: 'Public domain', note: 'A nineteenth-century antiquarian depiction, not a contemporary likeness.' },
    overview: [
      'Håkon III Sverresson was king of Norway from 1202 to 1204. The son of the great warrior-king Sverre, he inherited a realm still torn by the civil wars and, above all, by the bitter conflict between his father and the Church, which had left Sverre excommunicated and the country under interdict.',
      'Håkon\'s brief reign was defined by reconciliation: he made peace with the exiled bishops and lifted the shadow of the Church\'s ban, winning wide popularity. But he died suddenly on New Year\'s Day 1204, only about twenty-seven, amid persistent rumours that he had been poisoned. His death without a recognised heir was momentous, for his mistress Inga of Varteig was pregnant with the boy who would become Haakon IV.'
    ],
    greatestFeats: ['Reconciled the Norwegian crown with the Church', 'King of Norway', 'Father of Haakon IV'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Håkon III Sverresson was king of Norway from 1202 to 1204. The son of the great warrior-king Sverre, he inherited a realm still torn by the civil wars and, above all, by the bitter conflict between his father and the Church, which had left Sverre excommunicated and the country under interdict.',
        'Håkon\'s brief reign was defined by reconciliation: he made peace with the exiled bishops and lifted the shadow of the Church\'s ban, winning wide popularity. But he died suddenly on New Year\'s Day 1204, only about twenty-seven, amid persistent rumours that he had been poisoned. His death without a recognised heir was momentous, for his mistress Inga of Varteig was pregnant with the boy who would become Haakon IV.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Håkon was born about 1177, a son of Sverre Sigurdsson, in the years when Sverre was fighting his way from landless pretender to king of Norway. He grew up amid the Birkebeiner cause and the ceaseless warfare of his father\'s reign, and on Sverre\'s death in 1202 he succeeded to the throne.',
        'He inherited not only the crown but its great unresolved quarrel: Sverre had defied the Church, been excommunicated, and driven the bishops into exile, so that Håkon came to power with the kingdom still under a papal interdict.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Håkon III is remembered as a conciliator, a marked contrast to his combative father. Where Sverre had fought the Church to a standstill, Håkon chose to heal the breach, and the sources credit him with the good sense and popularity of a king who preferred to end conflicts rather than prolong them.',
        'The saga tradition treats him warmly, as a young ruler of promise cut off too soon. His willingness to make peace with the bishops, even at the cost of conceding some of what his father had fought for, suggests a pragmatic temperament that valued stability over vindication — the outlook of a king trying to close, rather than extend, the wounds of a generation of civil war.'
      ]},
      { title: 'Reconciliation and sudden death', paragraphs: [
        'Håkon\'s central act was to make peace with the Church. He recalled the exiled bishops, reached a settlement that ended the interdict, and restored the crown\'s standing with Rome, undoing the isolation of his father\'s last years. The reconciliation was popular and seemed to promise a more peaceful reign.',
        'It was cut brutally short. On 1 January 1204 Håkon died suddenly at Bergen. Rumour at once blamed poison, and suspicion fell on his stepmother, Sverre\'s widow Margaret of Sweden, though nothing was proven. He left no legitimate heir — but his mistress, Inga of Varteig, was pregnant, and the child she bore later that year would be recognised as his son.'
      ]},
      { title: 'Death and the succession', paragraphs: [
        'Håkon\'s unexpected death threw the succession open. The Birkebeiner first raised his young kinsman Guttorm Sigurdsson, a child who reigned only a few months before dying, and then chose Inge II Bårdsson as king. Håkon\'s own posthumous son, born to Inga of Varteig, would be brought up in obscurity and danger before emerging, years later, as King Haakon IV.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Håkon III\'s short reign mattered out of all proportion to its length. His reconciliation with the Church repaired the great rupture of his father\'s day, and his posthumous son Haakon IV would go on to end the civil wars for good and lead Norway into its medieval golden age. Håkon III thus stands as the bridge between Sverre\'s embattled kingship and the settled, powerful monarchy of his own son.'
      ]}
    ],
    keyAchievements: [
      { title: 'Made peace with the Church', description: 'Recalled the exiled bishops and ended the interdict of his father\'s reign.' },
      { title: 'King of Norway, 1202–1204', description: 'A brief but popular reign of reconciliation after Sverre\'s wars.' },
      { title: 'Father of Haakon IV', description: 'His posthumous son would end the civil wars and rule Norway\'s golden age.' }
    ],
    timeline: [
      { date: 'c. 1177', title: 'Born', description: 'Born a son of Sverre Sigurdsson during his father\'s rise to power.', links: [per('sverre-sigurdsson', 'Sverre Sigurdsson', 'His father')] },
      { date: '1202', title: 'Becomes King of Norway', description: 'Succeeds his father Sverre on the throne.', links: [per('sverre-sigurdsson', 'Sverre Sigurdsson', 'His father and predecessor'), NOR] },
      { date: '1202', title: 'Reconciles with the Church', description: 'Recalls the exiled bishops and ends the interdict that had isolated his father.' },
      { date: '1 January 1204', title: 'Dies suddenly', description: 'Dies at Bergen amid rumours of poison; his mistress carries the future Haakon IV.' },
      { date: '1204', title: 'The disputed succession', description: 'The throne passes to the child Guttorm, then to Inge II Bårdsson.', links: [per('inge-ii-bardsson', 'Inge II Bårdsson', 'Who became king after the child Guttorm')] }
    ],
    relatedEntries: {
      locations: [ { ...NOR, label: 'His kingdom' } ],
      people: [ per('sverre-sigurdsson', 'Sverre Sigurdsson', 'His father and predecessor'), per('haakon-iv-haakonsson', 'Haakon IV Haakonsson', 'His posthumous son, later king'), per('inge-ii-bardsson', 'Inge II Bårdsson', 'Who took the throne after him') ],
      events: []
    },
    sources: [ src('Haakon III | king of Norway', 'https://www.britannica.com/place/Norway'), src('Haakon IV | king of Norway', 'https://www.britannica.com/biography/Haakon-IV') ],
    isRuler: true,
    succession: { office: 'King of Norway',
      predecessor: { personSlug: 'sverre-sigurdsson', displayName: 'Sverre Sigurdsson', note: 'His father, the great Birkebeiner king, whom he succeeded in 1202.' },
      successor: { personSlug: 'inge-ii-bardsson', displayName: 'Inge II Bårdsson', note: 'Chosen king after the few-month reign of the child Guttorm Sigurdsson, who briefly held the throne in 1204.' } }
  },

  // ── INGE II BÅRDSSON ──────────────────────────────────────────────────────────
  {
    id: 'inge-ii-bardsson', type: 'character', name: 'Inge II Bårdsson', born: 1185, died: 1217,
    deathAge: 'about 32', causeOfDeath: 'Illness', restingPlace: 'Christ Church, Bergen',
    location: 'Kingdom of Norway', aliases: ['Inge Bårdsson', 'Inge II'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Inge_B%C3%A5rdsson_seal.jpg',
    summary: 'King of Norway (1204–1217), a Birkebeiner leader chosen after the child-king Guttorm, whose reign wound down the civil wars before the crown passed to the young Haakon IV.',
    title: 'King of Norway', roles: ['King of Norway'],
    birth: { date: 'c. 1185', place: { name: 'Trøndelag' }, note: 'Son of Bård Guttormsson of Rein and Cecilia, a daughter of King Sigurd Munn; nephew of Sverre.' },
    death: { date: '23 April 1217', place: { name: 'Nidaros (Trondheim)' }, circumstance: 'Died of illness in 1217; the Birkebeiner then chose the young Haakon Haakonsson as king over Inge\'s brother Skule.' },
    quickFacts: { realm: 'Kingdom of Norway', dynasty: 'House of Sverre (Birkebeiner)', culture: 'Norse', knownFor: 'ruling through the last phase of the civil wars against the Bagler faction' },
    imageInfo: { caption: 'The royal seal of Inge II Bårdsson of Norway.', creator: 'Oluf Bagge (drawing of the seal, c. 1812)', date: 'Seal of 1204–1217 (drawn c. 1812)', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Inge_Bårdsson_seal.jpg', license: 'Public domain', note: 'A drawing of the king\'s contemporary seal, the closest thing to an official image of him.' },
    overview: [
      'Inge II Bårdsson was king of Norway from 1204 to 1217, during the last generation of the long civil wars. A leader of the Birkebeiner and a nephew of King Sverre, he was chosen for the throne after the sudden death of Håkon III and the brief reign of the child-king Guttorm Sigurdsson.',
      'His reign was dominated by the continuing struggle with the rival Bagler faction, entrenched in eastern Norway, a conflict that was patched up by partition and negotiation rather than outright victory. When Inge died in 1217 the Birkebeiner passed over his own ambitious half-brother, Earl Skule, and raised instead the thirteen-year-old Haakon Haakonsson — the posthumous son of Håkon III — as king, opening the reign that would finally end the civil wars.'
    ],
    greatestFeats: ['King of Norway through the late civil wars', 'Held the Birkebeiner cause together against the Bagler'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Inge II Bårdsson was king of Norway from 1204 to 1217, during the last generation of the long civil wars. A leader of the Birkebeiner and a nephew of King Sverre, he was chosen for the throne after the sudden death of Håkon III and the brief reign of the child-king Guttorm Sigurdsson.',
        'His reign was dominated by the continuing struggle with the rival Bagler faction, entrenched in eastern Norway, a conflict that was patched up by partition and negotiation rather than outright victory. When Inge died in 1217 the Birkebeiner passed over his own ambitious half-brother, Earl Skule, and raised instead the thirteen-year-old Haakon Haakonsson — the posthumous son of Håkon III — as king, opening the reign that would finally end the civil wars.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Inge was born about 1185, the son of Bård Guttormsson of Rein, a leading magnate, and Cecilia, a daughter of King Sigurd Munn — which made Inge a nephew of King Sverre through the royal line. He grew up within the Birkebeiner party as it consolidated its hold on the country under Sverre and Håkon III.',
        'When Håkon III died in 1204 and the child Guttorm Sigurdsson, raised up in his place, died after only a few months, the Birkebeiner turned to Inge as a grown and capable member of the royal kin.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Inge II is remembered as a steady rather than a brilliant king, a solid Birkebeiner leader who held a difficult position together at a time when the civil wars were grinding toward their end. The sagas dwell less on his personality than on the tense politics around him, and above all on his relationship with his forceful half-brother, Earl Skule Bårdsson.',
        'What emerges is a ruler content to share and manage power rather than to dominate — governing alongside Skule and the great men of the Birkebeiner, and dealing with the Bagler through compromise. His was a reign of consolidation and containment, the work of a king holding the line through the last, exhausted phase of a war none of his generation had been able to win outright.'
      ]},
      { title: 'Reign and the Bagler wars', paragraphs: [
        'Inge\'s reign was shaped by the last round of the civil wars, against the Bagler, the church- and magnate-backed faction that held eastern Norway around the Oslofjord. Rather than crush them, the two sides reached the settlement of Kvitsøy in 1208, which recognised a Bagler king in the east under Inge\'s overlordship — an uneasy partition that gradually gave way to reunification as the Bagler cause faded.',
        'Throughout, Inge governed in partnership with his powerful half-brother Earl Skule Bårdsson, whose ambitions were barely contained by their shared interest. The kingdom Inge held together was war-weary but no longer tearing itself apart as it had a generation before.'
      ]},
      { title: 'Death and the succession', paragraphs: [
        'Inge II died of illness at Nidaros on 23 April 1217. His half-brother Skule expected the crown, but the Birkebeiner chose instead the thirteen-year-old Haakon Haakonsson, the posthumous son of Håkon III, whose better hereditary claim the party rallied behind. The decision — and Skule\'s resentment of it — set the stage for the final act of the civil wars under the new king.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Inge II is remembered as the king who steered Norway through the last phase of its civil wars, holding the Birkebeiner cause together and containing the Bagler until the conflict burned out. By keeping the realm intact he handed to his successor, Haakon IV, a kingdom ready to be unified and pacified at last — the achievement that would define Norway\'s thirteenth-century golden age.'
      ]}
    ],
    keyAchievements: [
      { title: 'King of Norway, 1204–1217', description: 'Chosen by the Birkebeiner to rule through the late civil wars.' },
      { title: 'The Kvitsøy settlement, 1208', description: 'Ended the worst of the Bagler war by a negotiated partition under his overlordship.' },
      { title: 'Held the realm together', description: 'Kept Norway intact for his successor Haakon IV to unify and pacify.' }
    ],
    timeline: [
      { date: 'c. 1185', title: 'Born', description: 'Born to Bård Guttormsson and Cecilia, a daughter of Sigurd Munn; a nephew of Sverre.' },
      { date: '1204', title: 'Chosen King of Norway', description: 'Raised to the throne by the Birkebeiner after Håkon III\'s death and the child Guttorm\'s brief reign.', links: [per('hakon-iii-sverresson', 'Håkon III Sverresson', 'His predecessor'), NOR] },
      { date: '1208', title: 'The Kvitsøy settlement', description: 'Ends the worst of the Bagler war by a negotiated partition of the realm.' },
      { date: 'c. 1208–1217', title: 'Rules with Earl Skule', description: 'Governs in tense partnership with his ambitious half-brother, Earl Skule Bårdsson.' },
      { date: '23 April 1217', title: 'Dies', description: 'Dies of illness; the Birkebeiner choose the young Haakon Haakonsson over Earl Skule.', links: [per('haakon-iv-haakonsson', 'Haakon IV Haakonsson', 'His successor')] }
    ],
    relatedEntries: {
      locations: [ { ...NOR, label: 'His kingdom' } ],
      people: [ per('hakon-iii-sverresson', 'Håkon III Sverresson', 'His predecessor as king'), per('haakon-iv-haakonsson', 'Haakon IV Haakonsson', 'His successor, who ended the civil wars'), per('sverre-sigurdsson', 'Sverre Sigurdsson', 'His uncle, the Birkebeiner king') ],
      events: []
    },
    sources: [ src('Inge II Bårdsson | king of Norway', 'https://www.britannica.com/place/Norway'), src('Haakon IV | king of Norway', 'https://www.britannica.com/biography/Haakon-IV') ],
    isRuler: true,
    succession: { office: 'King of Norway',
      predecessor: { personSlug: 'hakon-iii-sverresson', displayName: 'Håkon III Sverresson', note: 'Whose death in 1204, and the few-month reign of the child Guttorm Sigurdsson that followed, brought Inge to the throne.' },
      successor: { personSlug: 'haakon-iv-haakonsson', displayName: 'Haakon IV Haakonsson', note: 'The young son of Håkon III, chosen by the Birkebeiner over Inge\'s half-brother Earl Skule.' } }
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
relink('sverre-sigurdsson', 'predecessor', 'magnus-v-erlingsson', 'Magnus V Erlingsson', 'The Church-crowned king he defeated and killed at Fimreite in 1184.')
relink('sverre-sigurdsson', 'successor', 'hakon-iii-sverresson', 'Håkon III Sverresson', 'His son, who reconciled the crown with the Church.')
relink('haakon-iv-haakonsson', 'predecessor', 'inge-ii-bardsson', 'Inge II Bårdsson', 'The Birkebeiner king after whose death Haakon was chosen over Earl Skule.')

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`\nNorwegian civil-war kings added: ${added}, replaced: ${replaced}. Total characters: ${data.characters.length}`)
