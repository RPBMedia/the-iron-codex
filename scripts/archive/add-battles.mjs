/**
 * Adds three defining battle articles missing from the archive: Aljubarrota
 * (John I of Portugal), Hattin (Saladin), and Arsuf (Richard the Lionheart).
 * Full-quality: sections, factions, leaders, participants, outcome, image,
 * related entries (>=3), battleContinuity, sources. Idempotent by id.
 */
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))

const loc = (slug, title, label) => ({ title, type: 'location', slug, label })
const per = (slug, title, label) => ({ title, type: 'person', slug, label })
const evt = (slug, title, label) => ({ title, type: 'event', slug, label })

const battles = [
  {
    id: 'battle-of-aljubarrota', type: 'event', name: 'Battle of Aljubarrota', year: 1385,
    location: 'Aljubarrota, Portugal', eventType: 'Battle', conflict: '1383–1385 Portuguese Interregnum',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Batalha_de_Aljubarrota_02.jpg',
    summary: 'A Portuguese army under John of Aviz and Nuno Álvares Pereira destroyed a much larger Castilian invasion in 1385, securing Portugal\'s independence and the House of Aviz.',
    details: 'Fought on 14 August 1385, Aljubarrota ended the succession crisis that followed the death of Ferdinand I. Using a strong defensive position, dismounted men-at-arms, and English longbowmen, the Portuguese shattered the Castilian host and confirmed John of Aviz as King John I.',
    factions: ['Kingdom of Portugal', 'Kingdom of Castile'],
    leaders: [
      { name: 'John I of Portugal', faction: 'Portuguese army', personId: 'john-i-of-portugal' },
      { name: 'Nuno Álvares Pereira', faction: 'Portuguese army' },
      { name: 'John I of Castile', faction: 'Castilian army' }
    ],
    eventLocation: { name: 'Aljubarrota' },
    outcome: 'Decisive Portuguese victory; independence from Castile secured and the House of Aviz confirmed on the throne.',
    background: [
      'When Ferdinand I of Portugal died in 1383 leaving only a daughter married to John I of Castile, the prospect of Portugal passing to the Castilian crown provoked a national crisis known as the 1383–1385 Interregnum.',
      'John of Aviz, illegitimate son of Peter I and Master of the Order of Aviz, emerged as leader of the resistance. In 1385 the Cortes of Coimbra acclaimed him king as John I, and John I of Castile invaded to enforce his own claim.'
    ],
    battle: 'The Portuguese took a strong defensive position on a hill near Aljubarrota, their men-at-arms dismounted and flanked by archers, including English longbowmen sent under the Anglo-Portuguese partnership. The Castilian vanguard attacked uphill in a constricted front and was cut down; when the main body followed it was thrown into the same killing ground and broken. The constable Nuno Álvares Pereira commanded the Portuguese line while the king held the reserve.',
    aftermath: 'The Castilian army was destroyed and John I of Castile fled. The victory secured Portuguese independence for two centuries and confirmed the House of Aviz. John I founded the Monastery of Batalha ("Battle") in thanksgiving, and sealed the Treaty of Windsor with England the following year.',
    imageInfo: {
      caption: 'The Battle of Aljubarrota depicted in Jean de Wavrin\'s Chronique d\'Angleterre (c. 1479–1480).',
      creator: 'Jean de Wavrin, Chronique d\'Angleterre',
      date: '15th century (c. 1479–1480)',
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Batalha_de_Aljubarrota_02.jpg',
      license: 'Public domain',
      note: 'A near-period manuscript miniature, stylised rather than a literal battlefield record.'
    },
    contentSections: [
      { title: 'Overview', paragraphs: [
        'The Battle of Aljubarrota was fought on 14 August 1385 between the Kingdom of Portugal, led by the newly acclaimed John I and his constable Nuno Álvares Pereira, and a much larger invading army of the Kingdom of Castile under John I of Castile. It was the decisive engagement of the 1383–1385 Interregnum, the succession crisis that followed the death of Ferdinand I.',
        'The outnumbered Portuguese won a crushing victory using a prepared defensive position, dismounted men-at-arms, and English longbowmen. The result secured Portuguese independence from Castile and confirmed the House of Aviz on the throne, shaping the kingdom that would soon launch the Age of Discovery.'
      ]},
      { title: 'Background', paragraphs: [
        'Ferdinand I, the last king of the House of Burgundy, died in 1383 leaving only a daughter, Beatrice, married to John I of Castile. The prospect that Portugal would be absorbed into the Castilian crown provoked widespread resistance, and the regency of the queen mother Leonor Teles was distrusted.',
        'John of Aviz, an illegitimate son of Peter I and Master of the Order of Aviz, led the opposition, and in 1385 the Cortes of Coimbra acclaimed him King John I. John I of Castile invaded Portugal to enforce his own claim, and the two armies met near the village of Aljubarrota.'
      ]},
      { title: 'Forces and commanders', paragraphs: [
        'The Portuguese army was significantly smaller but well positioned and disciplined, commanded in the field by the constable Nuno Álvares Pereira, one of the ablest generals of the age, while the king held the reserve. It included a contingent of English longbowmen, reflecting the growing Anglo-Portuguese partnership.',
        'The Castilian army was larger and included French allied men-at-arms and crossbowmen. Its size gave it confidence, but the narrow, prepared battlefield chosen by the Portuguese neutralised that advantage.'
      ]},
      { title: 'The battle', paragraphs: [
        'The Portuguese occupied a hill with their flanks protected, men-at-arms dismounted in the centre and archers on the wings, and dug ditches and pits to break up a mounted charge. The Castilian vanguard, attacking uphill into a constricted front, was shot down and driven back onto the advancing main body.',
        'As the main Castilian host pressed forward it lost cohesion in the same killing ground, exposed to the longbowmen and unable to bring its numbers to bear. The Portuguese line under Nuno Álvares held and then counterattacked, turning the Castilian confusion into a rout.'
      ]},
      { title: 'Aftermath', paragraphs: [
        'The Castilian army was destroyed and John I of Castile fled the field. Portuguese independence was secured, and John I\'s throne and the House of Aviz were confirmed beyond challenge.',
        'In thanksgiving John I founded the Monastery of Batalha — literally "Battle" — one of the masterpieces of Portuguese Gothic architecture, and in 1386 he sealed the Treaty of Windsor with England, the oldest active alliance in the world.'
      ]},
      { title: 'Historical significance', paragraphs: [
        'Aljubarrota is the founding military event of the House of Aviz and one of the decisive battles of Portuguese history: it preserved the kingdom\'s independence at the moment it was most in danger of Castilian absorption.',
        'It also demonstrated, like the contemporary battles of the Hundred Years\' War, the power of a prepared defensive position combining dismounted men-at-arms and massed archery against a larger force of mounted and heavy troops.'
      ]}
    ],
    sources: [
      { title: 'Battle of Aljubarrota', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/event/Battle-of-Aljubarrota' },
      { title: 'Battle of Aljubarrota', author: 'World History Encyclopedia', type: 'reference article', url: 'https://www.worldhistory.org/' },
      { title: 'Aljubarrota miniature, Chronique d\'Angleterre', author: 'Wikimedia Commons', type: 'manuscript image', url: 'https://commons.wikimedia.org/wiki/File:Batalha_de_Aljubarrota_02.jpg' }
    ],
    relatedEntries: {
      people: [ per('john-i-of-portugal', 'John I of Portugal', 'Victor; founder of the House of Aviz'), per('ferdinand-i-of-portugal', 'Ferdinand I of Portugal', 'His death began the succession crisis') ],
      locations: [ loc('kingdom-of-portugal', 'Kingdom of Portugal', 'The realm whose independence was secured'), loc('kingdom-of-castile', 'Kingdom of Castile', 'The defeated invader'), loc('kingdom-of-england', 'Kingdom of England', 'Ally whose longbowmen fought here') ],
      events: []
    },
    participants: [
      { side: 'Portuguese army', factions: [{ name: 'Kingdom of Portugal', title: 'Kingdom of Portugal', type: 'location', slug: 'kingdom-of-portugal' }], leaders: [{ name: 'John I of Portugal', title: 'John I of Portugal', type: 'person', slug: 'john-i-of-portugal' }, { name: 'Nuno Álvares Pereira', title: 'Nuno Álvares Pereira' }] },
      { side: 'Castilian army', factions: [{ name: 'Kingdom of Castile', title: 'Kingdom of Castile', type: 'location', slug: 'kingdom-of-castile' }], leaders: [{ name: 'John I of Castile', title: 'John I of Castile' }] }
    ],
    battleContinuity: {
      label: 'Iberia\'s earlier decisive battle',
      battleSlug: 'battle-of-las-navas-de-tolosa',
      relationship: 'earlier-context',
      reason: 'Aljubarrota secured Portugal\'s independence from Castile, but the Iberian kingdoms that fought it were themselves shaped by the Reconquista — whose decisive Christian victory came at Las Navas de Tolosa in 1212, breaking Almohad power and fixing the peninsula\'s balance of Christian crowns.'
    }
  },

  {
    id: 'battle-of-hattin', type: 'event', name: 'Battle of Hattin', year: 1187,
    location: 'Horns of Hattin, near Tiberias', eventType: 'Battle', conflict: 'Crusades',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Saladin_Guy.jpg',
    summary: 'Saladin destroyed the army of the Kingdom of Jerusalem at Hattin in 1187, opening the way to his recapture of Jerusalem and triggering the Third Crusade.',
    details: 'On 4 July 1187 Saladin lured the crusader field army into waterless country near the Horns of Hattin, surrounded and broke it, and captured King Guy of Lusignan and the relic of the True Cross. The disaster left the Kingdom of Jerusalem defenceless.',
    factions: ['Ayyubid Sultanate', 'Kingdom of Jerusalem'],
    leaders: [
      { name: 'Saladin', faction: 'Ayyubid army', personId: 'saladin' },
      { name: 'Guy of Lusignan', faction: 'Crusader army', personId: 'guy-of-lusignan' },
      { name: 'Raymond III of Tripoli', faction: 'Crusader army', personId: 'raymond-iii-of-tripoli' }
    ],
    eventLocation: { name: 'Horns of Hattin' },
    outcome: 'Decisive Ayyubid victory; the crusader field army destroyed, its king captured, and Jerusalem left open to conquest.',
    background: [
      'By 1187 Saladin had united Egypt and Muslim Syria and was pressing the Kingdom of Jerusalem hard. Provocations by Reynald of Châtillon, who raided Muslim caravans and pilgrim routes in defiance of truces, gave Saladin both cause and justification for a decisive campaign.',
      'When Saladin besieged Tiberias, the crusader leadership was divided: Raymond III of Tripoli urged caution, but King Guy of Lusignan was persuaded by the hawkish faction to march the whole field army across dry country to relieve the town.'
    ],
    battle: 'Saladin\'s forces harassed the thirsty crusader column and cut it off from water. Near the twin hills called the Horns of Hattin the army was surrounded; smoke from grass fires and constant arrow fire wore it down. The infantry broke for water and was destroyed, and the encircled knights, exhausted and parched, were overwhelmed after desperate charges failed to reach Saladin.',
    aftermath: 'King Guy of Lusignan was captured along with most of the surviving nobility and the relic of the True Cross. Saladin executed Reynald of Châtillon and the captured Templars and Hospitallers but spared Guy. With the field army gone, the fortified towns of the kingdom fell one after another, and Jerusalem itself surrendered in October 1187.',
    imageInfo: {
      caption: 'Saladin and the captured King Guy of Lusignan after Hattin, in a 13th-century manuscript by Matthew Paris.',
      creator: 'Matthew Paris',
      date: '13th century',
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Saladin_Guy.jpg',
      license: 'Public domain',
      note: 'A near-contemporary Latin manuscript depiction of the battle\'s outcome, not a literal battlefield record.'
    },
    contentSections: [
      { title: 'Overview', paragraphs: [
        'The Battle of Hattin was fought on 4 July 1187 between the army of the Ayyubid sultan Saladin and the field army of the Kingdom of Jerusalem under King Guy of Lusignan. It was the most catastrophic defeat in the history of the crusader states.',
        'Saladin drew the crusaders into waterless country near the Horns of Hattin, surrounded and destroyed their army, and captured the king and the relic of the True Cross. The victory left the kingdom defenceless and led directly to Saladin\'s recapture of Jerusalem and to the calling of the Third Crusade.'
      ]},
      { title: 'Background', paragraphs: [
        'By the 1180s Saladin had united Egypt and Muslim Syria and framed the war against the crusader states as a jihad to recover Jerusalem. Repeated truce-breaking raids by Reynald of Châtillon against Muslim caravans and the pilgrim routes gave him both motive and justification for an all-out campaign.',
        'In 1187 Saladin besieged Tiberias to draw out the crusader army. The kingdom\'s leaders were divided: Raymond III of Tripoli argued against marching across dry country in high summer, but the faction led by Reynald and the Templar master persuaded King Guy of Lusignan to advance and relieve the town.'
      ]},
      { title: 'Forces and commanders', paragraphs: [
        'Saladin commanded a large, well-supplied army with strong cavalry and horse-archers, and crucially held the wells and springs of the region. His discipline and control of water and terrain shaped the whole battle.',
        'Guy of Lusignan led nearly the entire military strength of the kingdom — knights, sergeants, and infantry, including the Templars and Hospitallers. Committing this single army to a march through arid country was a gamble that left nothing in reserve if it failed.'
      ]},
      { title: 'The battle', paragraphs: [
        'As the crusaders marched toward Tiberias, Saladin\'s horsemen harassed the column and cut it off from water, forcing it to halt overnight in a waterless place. The next day, tormented by thirst and by fires the Muslims lit in the dry grass, the crusaders struggled toward the springs near the Horns of Hattin.',
        'Saladin surrounded the army. The demoralised infantry broke away toward water and was cut to pieces, leaving the knights isolated. Despite desperate charges — Raymond III of Tripoli cut his way out with a few followers — the encircled and exhausted cavalry could not break Saladin\'s lines and was overwhelmed on the hillside.'
      ]},
      { title: 'Aftermath', paragraphs: [
        'Saladin captured King Guy of Lusignan, most of the surviving nobles, and the relic of the True Cross. He spared the king but executed Reynald of Châtillon with his own hand and had the captured Templars and Hospitallers put to death as irreconcilable enemies.',
        'With the kingdom\'s army destroyed, its fortresses and towns fell in quick succession, and Jerusalem surrendered to Saladin in October 1187 after negotiation with Balian of Ibelin. The loss of the holy city stunned Latin Christendom and prompted the launching of the Third Crusade.'
      ]},
      { title: 'Historical significance', paragraphs: [
        'Hattin was the decisive battle of Saladin\'s career and the greatest disaster ever suffered by the crusader states, reducing the Kingdom of Jerusalem in weeks from a functioning realm to a few coastal enclaves.',
        'It is a classic study of a commander using thirst, terrain, and control of water to destroy a stronger-looking enemy, and its consequence — the fall of Jerusalem — reshaped the crusading movement for the next century.'
      ]}
    ],
    sources: [
      { title: 'Battle of Ḥaṭṭīn', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/event/Battle-of-Hattin' },
      { title: 'Battle of Hattin', author: 'World History Encyclopedia', type: 'reference article', url: 'https://www.worldhistory.org/Battle_of_Hattin/' },
      { title: 'Saladin and Guy of Lusignan, Matthew Paris', author: 'Wikimedia Commons', type: 'manuscript image', url: 'https://commons.wikimedia.org/wiki/File:Saladin_Guy.jpg' }
    ],
    relatedEntries: {
      people: [ per('saladin', 'Saladin', 'Victorious Ayyubid sultan'), per('guy-of-lusignan', 'Guy of Lusignan', 'Crusader king, captured in the battle'), per('raymond-iii-of-tripoli', 'Raymond III of Tripoli', 'Warned against the march; cut his way out'), per('reynald-of-chatillon', 'Reynald of Châtillon', 'Executed by Saladin after the battle') ],
      locations: [ loc('kingdom-of-jerusalem', 'Kingdom of Jerusalem', 'The realm whose army was destroyed'), loc('ayyubid-sultanate', 'Ayyubid Sultanate', 'Saladin\'s realm') ],
      events: [ evt('third-crusade', 'Third Crusade', 'Launched in response to the loss of Jerusalem') ]
    },
    participants: [
      { side: 'Ayyubid army', factions: [{ name: 'Ayyubid Sultanate', title: 'Ayyubid Sultanate', type: 'location', slug: 'ayyubid-sultanate' }], leaders: [{ name: 'Saladin', title: 'Saladin', type: 'person', slug: 'saladin' }] },
      { side: 'Crusader army', factions: [{ name: 'Kingdom of Jerusalem', title: 'Kingdom of Jerusalem', type: 'location', slug: 'kingdom-of-jerusalem' }], leaders: [{ name: 'Guy of Lusignan', title: 'Guy of Lusignan', type: 'person', slug: 'guy-of-lusignan' }, { name: 'Raymond III of Tripoli', title: 'Raymond III of Tripoli', type: 'person', slug: 'raymond-iii-of-tripoli' }] }
    ],
    battleContinuity: {
      label: 'The crusaders strike back',
      battleSlug: 'battle-of-arsuf',
      relationship: 'same-factions',
      reason: 'The catastrophe at Hattin and the loss of Jerusalem triggered the Third Crusade; its first great field victory came in 1191 at Arsuf, where Richard the Lionheart broke Saladin\'s attempt to destroy the crusader march down the coast.'
    }
  },

  {
    id: 'battle-of-arsuf', type: 'event', name: 'Battle of Arsuf', year: 1191,
    location: 'Arsuf, near Jaffa', eventType: 'Battle', conflict: 'Third Crusade',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Schlacht_von_Arsuf.jpg',
    summary: 'Richard the Lionheart defeated Saladin at Arsuf in 1191, the first major field victory of the Third Crusade and proof that Saladin could be beaten in open battle.',
    details: 'On 7 September 1191 Richard I held his marching column together under constant harassment, then unleashed a disciplined charge that routed Saladin\'s army near Arsuf, restoring crusader morale after the disaster of Hattin.',
    factions: ['Third Crusade', 'Ayyubid Sultanate'],
    leaders: [
      { name: 'Richard the Lionheart', faction: 'Crusader army', personId: 'richard-the-lionheart' },
      { name: 'Saladin', faction: 'Ayyubid army', personId: 'saladin' }
    ],
    eventLocation: { name: 'Arsuf' },
    outcome: 'Crusader victory; Saladin\'s field army driven off and the myth of his invincibility broken, though Jerusalem was not retaken.',
    background: [
      'After the fall of Acre in 1191, Richard the Lionheart led the army of the Third Crusade south along the coast toward Jaffa, aiming eventually at Jerusalem. Saladin shadowed the march, seeking to wear the crusaders down with heat, thirst, and constant harassment.',
      'Richard imposed rigid discipline on the march, keeping his infantry and crossbowmen on the seaward-protected flank as a shield for the knights, and forbidding any charge until he gave the order.'
    ],
    battle: 'Near Arsuf, Saladin committed his whole army to break the column, pressing hardest against the rearguard of Hospitallers. Under mounting casualties the Hospitallers charged before Richard\'s signal; rather than let the attack fail piecemeal, Richard threw his whole force into a coordinated charge that caught Saladin\'s army off balance and drove it from the field.',
    aftermath: 'Saladin\'s army withdrew in disorder, having failed to stop the crusader march. Arsuf restored crusader confidence and secured the coast, allowing Richard to take Jaffa, but he judged Jerusalem impossible to hold and the crusade ended in 1192 with the Treaty of Jaffa rather than the city\'s recapture.',
    imageInfo: {
      caption: 'The Battle of Arsuf, painted by Éloi Firmin Féron (1839).',
      creator: 'Éloi Firmin Féron',
      date: '19th century (1839)',
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Schlacht_von_Arsuf.jpg',
      license: 'Public domain',
      note: 'A 19th-century history painting, a later romanticised depiction rather than a contemporary record.'
    },
    contentSections: [
      { title: 'Overview', paragraphs: [
        'The Battle of Arsuf was fought on 7 September 1191 between the army of the Third Crusade under Richard the Lionheart and the forces of the Ayyubid sultan Saladin, on the coastal march from Acre toward Jaffa. It was the first great field victory of the Third Crusade.',
        'By holding his harassed column together and then launching a disciplined, coordinated charge, Richard drove Saladin\'s army from the field. Arsuf broke the aura of invincibility Saladin had gained at Hattin and secured the coast, even though the crusade ultimately failed to recover Jerusalem.'
      ]},
      { title: 'Background', paragraphs: [
        'After the crusaders retook Acre in 1191, Richard the Lionheart led the army of the Third Crusade south along the Mediterranean coast toward Jaffa, intending to advance on Jerusalem. Saladin, still dominant since his victory at Hattin four years earlier, shadowed the march to wear the crusaders down.',
        'Richard enforced strict march discipline: the fleet supplied the army along the shore, infantry and crossbowmen guarded the exposed inland flank, and the knights were forbidden to charge until the king judged the moment right.'
      ]},
      { title: 'Forces and commanders', paragraphs: [
        'Richard commanded a mixed crusader army of English, French, and other contingents, with the Templars and Hospitallers forming the vanguard and rearguard. His control over this fractious force, and his refusal to be provoked into a premature charge, were decisive.',
        'Saladin fielded a fast, aggressive army of horse-archers and light cavalry suited to harassment, counting on heat, thirst, and constant missile fire to break the crusader column before it could bring its heavy cavalry to bear.'
      ]},
      { title: 'The battle', paragraphs: [
        'As the column passed the woods near Arsuf, Saladin committed his whole army, concentrating on the rearguard of Hospitallers, who suffered badly under the arrow storm while forbidden to break ranks. Their master repeatedly begged Richard for permission to charge.',
        'When two Hospitaller knights finally charged without orders and the rest surged after them, Richard chose to convert the unplanned attack into a general assault, launching his whole line in a coordinated charge. The sudden weight of armoured cavalry caught Saladin\'s troops in the open and routed them; Richard held his men in hand to prevent a scattered pursuit and a counterattack.'
      ]},
      { title: 'Aftermath', paragraphs: [
        'Saladin\'s army withdrew, having failed to stop the crusader march or inflict a decisive blow. The victory secured the coastal road and allowed Richard to occupy Jaffa and refortify it as a base.',
        'Arsuf restored crusader morale after the long shadow of Hattin, but it did not open Jerusalem: Richard twice advanced toward the city and twice judged it impossible to take and hold. The Third Crusade ended in 1192 with the Treaty of Jaffa, which left Jerusalem in Saladin\'s hands but guaranteed Christian pilgrimage.'
      ]},
      { title: 'Historical significance', paragraphs: [
        'Arsuf is remembered as the battle that proved Saladin could be beaten in the open, and as a showcase of Richard the Lionheart\'s generalship: his mastery of march discipline, combined arms, and timing over impatience.',
        'Its limits are as instructive as its success. A brilliant tactical victory could restore the crusaders\' position on the coast without achieving the campaign\'s true objective, underlining how hard it was to translate battlefield wins into the recapture of Jerusalem.'
      ]}
    ],
    sources: [
      { title: 'Battle of Arsūf', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/event/Battle-of-Arsuf' },
      { title: 'Battle of Arsuf', author: 'World History Encyclopedia', type: 'reference article', url: 'https://www.worldhistory.org/' },
      { title: 'The Battle of Arsuf by Éloi Firmin Féron', author: 'Wikimedia Commons', type: 'painting', url: 'https://commons.wikimedia.org/wiki/File:Schlacht_von_Arsuf.jpg' }
    ],
    relatedEntries: {
      people: [ per('richard-the-lionheart', 'Richard the Lionheart', 'Victorious crusader commander'), per('saladin', 'Saladin', 'Ayyubid sultan, defeated in the open') ],
      locations: [ loc('crusader-states', 'Crusader States', 'The Latin territories the crusade fought to restore'), loc('ayyubid-sultanate', 'Ayyubid Sultanate', 'Saladin\'s realm') ],
      events: [ evt('third-crusade', 'Third Crusade', 'The campaign this victory belonged to'), evt('battle-of-hattin', 'Battle of Hattin', 'The 1187 disaster that had summoned the crusade') ]
    },
    participants: [
      { side: 'Crusader army', factions: [{ name: 'Crusader States', title: 'Crusader States', type: 'location', slug: 'crusader-states' }], leaders: [{ name: 'Richard the Lionheart', title: 'Richard the Lionheart', type: 'person', slug: 'richard-the-lionheart' }] },
      { side: 'Ayyubid army', factions: [{ name: 'Ayyubid Sultanate', title: 'Ayyubid Sultanate', type: 'location', slug: 'ayyubid-sultanate' }], leaders: [{ name: 'Saladin', title: 'Saladin', type: 'person', slug: 'saladin' }] }
    ],
    battleContinuity: {
      label: 'The catastrophe that summoned the crusade',
      battleSlug: 'battle-of-hattin',
      relationship: 'earlier-context',
      reason: 'Arsuf was the Third Crusade\'s answer to disaster: the crusade existed only because Saladin had annihilated the Kingdom of Jerusalem\'s army at the Battle of Hattin in 1187 and taken the holy city, the calamity that Richard the Lionheart had come east to reverse.'
    }
  }
]

const existing = new Set(data.events.map(e => e.id))
let added = 0, replaced = 0
for (const b of battles) {
  const i = data.events.findIndex(e => e.id === b.id)
  if (i >= 0) { data.events[i] = b; replaced++ } else { data.events.push(b); added++ }
}
fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`Battles added: ${added}, replaced: ${replaced}. Total events: ${data.events.length}`)
