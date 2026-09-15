/**
 * Every commander who appears in a Battle/Siege article without an article of
 * their own now says WHY, in a short note under the name.
 *
 * The defect the owner found on the 717–718 siege: Maslama commanded the entire
 * expedition, is named eleven times in the prose, and rendered in the Leaders
 * block as plain grey text beside a blue linked Leo III. Nothing distinguished
 * "deferred for a documented reason" from "we forgot", and the reader has no way
 * to tell. The archive states its unknowns everywhere else — succession boxes
 * carry a status, army strengths carry a confidence and a note — and the leader
 * cards were the one place carrying an absence silently.
 *
 * Idempotent: run it again after adding a commander and it fills only what is
 * missing. A commander who later gets an article keeps the slug and drops the
 * note, since the renderer only shows the note when there is no link.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))

// Keyed by event id, then by the leader's name exactly as stored.
const NOTES = {
  'siege-of-rome-537': {
    'Vitiges': 'No article: no image of him survives in any form — no coin, no later depiction — so the archive cannot give him a page.'
  },
  'battle-of-nineveh': {
    'Rhahzadh': 'No article: he is known only as the commander killed in this battle, and no image or biography survives to build one from.'
  },
  'siege-of-constantinople-626': {
    'Bonus': 'No article: the patrician who commanded the defence, and no image of him survives in any form.',
    'Sergius': 'No article: the patriarch who carried the icon along the walls. No image of him survives — even his own encyclopedia entries carry none.',
    'The Khagan of the Avars (name not recorded)': 'Not a gap in this archive: no surviving source of any kind records the name of the khagan who besieged the city.',
    'Shahrbaraz': 'No article: no image of him survives in any form, not even a coin, despite his briefly taking the Persian throne in 630.'
  },
  'siege-of-constantinople-717': {
    'Maslama ibn Abd al-Malik': 'No article: he commanded the whole expedition, and no image of him survives in any form — no portrait and no coin, since he was never caliph.',
    'The Bulgar ruler (Tervel or Kormesiy — the sources do not settle it)': 'Not a gap in this archive: the sources disagree over which Bulgar ruler led the attack of 718, so neither can be named with confidence.'
  },

  // ---------------------------------------------------------------------
  // The rest of the archive, added by the M14 integration pass.
  //
  // These are worded differently from the Track A ones above on purpose. Those
  // say "no image survives", because each was searched for and none was found.
  // Most of the ones below are simply NOT WRITTEN YET — several are well known
  // and well illustrated — and saying "no image survives" about them would be a
  // claim this pass has not checked. "No article yet" is the honest form, and it
  // also states the right thing to the reader: a gap in this archive's coverage,
  // not a gap in the historical record. Where the record itself is the problem,
  // the note says so and begins "Not a gap in this archive".
  // ---------------------------------------------------------------------

  'battle-of-svolder': {
    'Eric Hákonarson': 'No article yet: Jarl of Lade and one of the victors here, who went on to govern Norway for the Danish kings and Northumbria for Cnut.'
  },
  'battle-of-fulford': {
    'Edwin of Mercia': 'No article yet: earl of Mercia, whose defeat here with his brother left Harold Godwinson to meet two invasions in three weeks.',
    'Morcar of Northumbria': 'No article yet: earl of Northumbria, beaten here five days before Stamford Bridge.'
  },
  'battle-of-stirling-bridge': {
    'John de Warenne, Earl of Surrey': 'No article yet: the English commander, who let half his army cross a narrow bridge before the other half could follow.'
  },
  'battle-of-hafrsfjord': {
    'Kjotve the Rich': 'No article yet, and unlikely ever to have one: a petty king of Agder named in skaldic verse as leading the coalition against Harald Fairhair. Almost nothing else about him is recoverable.'
  },
  'battle-of-covadonga': {
    'al-Qama': 'No article yet: the Umayyad commander defeated here, known only from Asturian chronicles written a century and a half later to magnify the victory.'
  },
  'siege-of-rouen': {
    'Guy le Bouteiller': 'No article yet: the Burgundian captain who commanded the defence through the starvation winter of 1418–19 and afterwards entered English service.'
  },
  'battle-of-verneuil': {
    'John Stewart, Earl of Buchan': 'No article yet: constable of France and commander of the Scottish army in French service, killed in the battle.',
    'Archibald Douglas, 4th Earl of Douglas': 'No article yet: duke of Touraine, killed here alongside Buchan; the defeat effectively ended the Scottish expeditionary army in France.'
  },
  'siege-of-orleans': {
    'Jean, the Bastard of Orléans (Dunois)': 'No article yet: the defender of Orléans and one of the ablest French commanders of the war, later count of Dunois.',
    'Thomas Montagu, Earl of Salisbury': 'No article yet: the English commander who began the siege and was mortally wounded by a cannon shot in its first weeks.',
    'William de la Pole, Earl of Suffolk': 'No article yet: took over the siege after Salisbury died, and was captured at Jargeau soon after it was raised.'
  },
  'battle-of-patay': {
    'La Hire (Étienne de Vignolles)': 'No article yet: one of the two captains whose vanguard caught the English archers before their stakes were planted.',
    'Poton de Xaintrailles': 'No article yet: the other, later marshal of France.',
    'Sir John Fastolf': 'No article yet: the English commander who escaped the rout and was stripped of the Garter for it, later restored.'
  },
  'battle-of-formigny': {
    'Jean de Bourbon, Count of Clermont': 'No article yet: commanded the French force that engaged first and held until Richemont arrived.',
    'Arthur de Richemont, Constable of France': 'No article yet: constable of France, whose arrival on the flank decided the battle and effectively ended English Normandy.',
    'Sir Thomas Kyriell': 'No article yet: the English commander, captured here with most of his army.'
  },
  'battle-of-castillon': {
    'Jean Bureau, Master of Artillery': 'No article yet: the artillery officer whose entrenched gun park won the battle and the war, and the reason Castillon is treated as the end of the medieval military age.'
  },
  'battle-of-atoleiros': {
    'Fernando Sánchez de Tovar': 'No article yet: commanded the Castilian force defeated here by a dismounted Portuguese square.',
    'Pedro Álvares Pereira': 'No article yet: master of the Order of Christ in Castilian service, and brother of the Portuguese commander Nuno Álvares Pereira, against whom he fought.'
  },
  'battle-of-sao-mamede': {
    'Fernando Pérez de Traba': 'No article yet: the Galician count who was Teresa of León\'s partner and the effective ruler she governed with, against whom the Portuguese barons rebelled.'
  },
  'battle-of-ourique': {
    'Almoravid field commanders': 'Not a gap in this archive: no source reliably names the Almoravid commanders at Ourique. The traditional account of five Moorish kings is a later Portuguese legend, not a record.'
  },
  'siege-of-lisbon': {
    'Hervey de Glanvill': 'No article yet: leader of the East Anglian contingent, and the speaker of the address that held the crusader fleet together when it nearly broke up.',
    'The qadi of Lisbon (name not recorded)': 'Not a gap in this archive: the Anglo-Norman account of the siege records his speech to the besiegers at length but never gives his name.'
  },
  'siege-of-ryazan': {
    'Yuri Igorevich of Ryazan': 'No article yet: prince of Ryazan, killed when the city fell after five days — the first Rus city taken in the invasion.'
  },
  'siege-of-vladimir': {
    'Prince Vsevolod Yurievich': 'No article yet: son of Yuri II, left to hold the capital while his father raised an army in the north, and killed when it fell.'
  },
  'battle-of-the-sit-river': {
    'Yuri II of Vladimir': 'No article yet: grand prince of Vladimir, caught assembling his army and killed here with it.',
    'Burundai': 'No article yet: the Mongol general who found and destroyed Yuri\'s army, and who commanded again in the Rus campaigns twenty years later.'
  },
  'siege-of-kyiv': {
    'Voivode Dmytro': 'No article yet: commanded the defence of Kyiv for Danylo of Galicia, and was spared by Batu for the courage of it.'
  },
  'battle-of-legnica': {
    'Henry II the Pious': 'No article yet: duke of Silesia, killed here leading the Polish and German coalition; his head was carried to Legnica on a spear.',
    'Baidar': 'No article yet: grandson of Genghis Khan, and one of the two commanders of the Mongol force that entered Poland.',
    'Kadan': 'No article yet: son of Ögedei, who commanded with Baidar in Poland and then rejoined the main army in Hungary.'
  }
}

let filled = 0
for (const [eventId, byName] of Object.entries(NOTES)) {
  const event = data.events.find((e) => e.id === eventId)
  if (!event) { console.warn(`! missing event ${eventId}`); continue }
  for (const participant of event.participants ?? []) {
    for (const leader of participant.leaders ?? []) {
      const note = byName[leader.name]
      if (!note || leader.slug || leader.note) continue
      leader.note = note
      filled++
      console.log(`+ ${eventId}: ${leader.name}`)
    }
  }
}

// Report anything still bare, so a future milestone cannot quietly reintroduce
// the same silent absence.
const stillBare = []
for (const event of data.events) {
  if (!['Battle', 'Siege'].includes(event.eventType)) continue
  for (const participant of event.participants ?? []) {
    for (const leader of participant.leaders ?? []) {
      if (!leader.slug && !leader.note) stillBare.push(`${event.id}: ${leader.name}`)
    }
  }
}

console.log(`\n${filled} commander note(s) added.`)
if (stillBare.length) {
  console.log(`${stillBare.length} unlinked commander(s) still carry no explanation:`)
  stillBare.forEach((s) => console.log('  -', s))
} else {
  console.log('Every unlinked commander in the archive now explains itself.')
}

writeFileSync(dataPath, JSON.stringify(data, null, 2))
