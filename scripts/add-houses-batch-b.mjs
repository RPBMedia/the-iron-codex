import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dataPath = join(__dirname, '..', 'server', 'data', 'history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))

const P = (slug, displayName, note) => ({ personSlug: slug, displayName, note })

/* ------------------------------------------------------------------ CAPET */
const capet = {
  id: 'house-of-capet',
  type: 'house',
  name: 'House of Capet',
  // Aliases cover every dynasty-string variant used on ruler pages so each one
  // links back (see server withDynastyHouse). "House of Anjou"/"Angevins" are
  // deliberately NOT aliased anywhere (they belong to a distinct Capetian branch).
  aliases: ['House of Capet (founder)', 'House of Capet (direct line, last king)', 'Capetian', 'Capetians', 'Direct Capetians', 'Capetian dynasty'],
  originYear: 987,
  endYear: 1328,
  reignSpan: '987–1328',
  region: 'Kingdom of France',
  originPlace: 'Île-de-France',
  arms: 'Azure, semé-de-lis or (later: azure, three fleurs-de-lis or) — the arms of the kings of France',
  image: 'https://commons.wikimedia.org/wiki/Special:FilePath/King%20Hugh%20Capet.jpg?width=1000',
  imageInfo: {
    caption: 'Hugh Capet, first Capetian king of France, in a later manuscript depiction.',
    creator: 'Medieval manuscript illumination',
    date: 'Later depiction (Hugh Capet r. 987–996)',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:King_Hugh_Capet.jpg',
    note: 'No contemporary portrait survives; the image is a later royal-chronicle depiction of the dynasty’s founder.'
  },
  summary: 'The dynasty that ruled France in the direct male line for over three centuries, turning an elective kingship around Paris into the strongest monarchy in Europe.',
  overview: 'The direct House of Capet held the French crown without a break from Hugh Capet in 987 to the death of Charles IV in 1328. Beginning with little more than the lands around Paris, the Capetians made the crown hereditary, curbed the great feudataries, conquered the Angevin lands in France, and under Saint Louis and Philip IV built a centralised royal state.',
  founder: P('hugh-capet', 'Hugh Capet', 'Elected king of the Franks in 987'),
  seats: [{ name: 'Kingdom of France', type: 'location', slug: 'kingdom-of-france' }],
  notableMembers: [
    P('hugh-capet', 'Hugh Capet', 'Founder; made the crown hereditary in practice'),
    P('robert-ii-of-france', 'Robert II the Pious', 'Consolidated the young dynasty'),
    P('philip-i-of-france', 'Philip I', 'Long reign that steadied the royal demesne'),
    P('louis-vi-of-france', 'Louis VI the Fat', 'Broke the robber-barons of the Île-de-France'),
    P('louis-vii-of-france', 'Louis VII', 'Whose divorce from Eleanor of Aquitaine handed her lands to the Angevins'),
    P('philip-ii-of-france', 'Philip II Augustus', 'Conquered Normandy and Anjou; won at Bouvines'),
    P('louis-viii-of-france', 'Louis VIII the Lion', 'Extended royal power into the south'),
    P('louis-ix-of-france', 'Louis IX (Saint Louis)', 'The model Christian king and crusader'),
    P('philip-iv-of-france', 'Philip IV the Fair', 'Built a hard, bureaucratic monarchy; crushed the Templars'),
    P('charles-iv-of-france', 'Charles IV', 'Last king of the direct line; died without a male heir')
  ],
  cadetBranches: [
    { name: 'House of Valois', note: 'Descended from Charles of Valois, brother of Philip IV; took the throne in 1328 as Philip VI.' },
    { name: 'Capetian House of Anjou', note: 'A distinct branch from Charles of Anjou, brother of Louis IX, that ruled Naples and Hungary — not the Angevin Plantagenets.' }
  ],
  familyTree: {
    caption: 'The direct Capetian line from Hugh Capet to the three sons of Philip IV, after whom the crown passed to the Valois cadet branch in 1328. ⚭ marks a marriage.',
    root: {
      name: 'Hugh Capet', personSlug: 'hugh-capet', note: 'r. 987–996',
      children: [{
        name: 'Robert II', personSlug: 'robert-ii-of-france', note: 'r. 996–1031',
        children: [{
          name: 'Henry I', personSlug: 'henry-i-of-france', note: 'r. 1031–1060',
          children: [{
            name: 'Philip I', personSlug: 'philip-i-of-france', note: 'r. 1060–1108',
            children: [{
              name: 'Louis VI', personSlug: 'louis-vi-of-france', note: 'r. 1108–1137',
              children: [{
                name: 'Louis VII', personSlug: 'louis-vii-of-france', note: 'r. 1137–1180',
                spouse: { name: 'Eleanor of Aquitaine', personSlug: 'eleanor-of-aquitaine', note: 'marriage annulled 1152' },
                children: [{
                  name: 'Philip II Augustus', personSlug: 'philip-ii-of-france', note: 'r. 1180–1223',
                  children: [{
                    name: 'Louis VIII', personSlug: 'louis-viii-of-france', note: 'r. 1223–1226',
                    children: [{
                      name: 'Louis IX', personSlug: 'louis-ix-of-france', note: 'r. 1226–1270',
                      children: [{
                        name: 'Philip III', personSlug: 'philip-iii-of-france', note: 'r. 1270–1285',
                        children: [{
                          name: 'Philip IV the Fair', personSlug: 'philip-iv-of-france', note: 'r. 1285–1314',
                          children: [
                            { name: 'Louis X', personSlug: 'louis-x-of-france', note: 'r. 1314–1316' },
                            { name: 'Philip V', personSlug: 'philip-v-of-france', note: 'r. 1316–1322' },
                            { name: 'Charles IV', personSlug: 'charles-iv-of-france', note: 'r. 1322–1328, no male heir', branch: '→ House of Valois (Philip VI)' }
                          ]
                        }]
                      }]
                    }]
                  }]
                }]
              }]
            }]
          }]
        }]
      }]
    }
  },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'In 987 the Frankish magnates and clergy elected Hugh Capet, Duke of the Franks, as king in place of the last Carolingians. His family, the Robertians, held rich lands around Paris and Orléans, and Hugh at once had his son Robert crowned as co-king — the move that, repeated for generations, quietly turned an elective kingship into a hereditary one.',
      'Early Capetian power was modest. The king ruled directly only the royal demesne of the Île-de-France, while dukes and counts such as those of Normandy, Aquitaine, and Flanders were often richer and stronger. The dynasty’s long achievement was to convert a fragile prestige into real authority.'
    ]},
    { title: 'Consolidating the crown', paragraphs: [
      'Louis VI the Fat spent his reign subduing the castellans of the Île-de-France, with his minister Abbot Suger of Saint-Denis shaping a royal ideology centred on the crown and the abbey. His son Louis VII joined the disastrous Second Crusade and, fatefully, had his marriage to Eleanor of Aquitaine annulled in 1152 — after which she married Henry of Anjou, carrying her vast duchy into what became the Angevin empire.',
      'That blunder made the Angevin (Plantagenet) kings of England the Capetians’ most dangerous rivals, holding more of France than the French king himself.'
    ]},
    { title: 'Philip Augustus and the great expansion', paragraphs: [
      'Philip II Augustus transformed the monarchy. Exploiting King John’s weaknesses, he conquered Normandy, Anjou, Maine, and Touraine from the Angevins between 1202 and 1204, roughly quadrupling the royal demesne. In 1214 his victory at the Battle of Bouvines shattered a coalition of the Emperor Otto IV, England, and Flanders, confirming French dominance.',
      'Philip reorganised royal administration through salaried officials called baillis and prévôts, walled and paved Paris, and left the crown vastly stronger than he found it.'
    ]},
    { title: 'The age of Saint Louis', paragraphs: [
      'Louis IX turned Capetian prestige into moral leadership. Remembered for his justice, his reform of the coinage and administration, and his patronage of the Sainte-Chapelle, he also led two crusades, dying at Tunis in 1270; he was canonised in 1297. Under him and his grandson Philip IV the Fair, royal lawyers, the Parlement of Paris, and a professional treasury built a centralised state.',
      'Philip IV clashed with Pope Boniface VIII, taxed the clergy, expelled Jews and Lombards to seize their wealth, and destroyed the Knights Templar in 1307–1314 to cancel his debts — the ruthless machinery of a modern monarchy.'
    ]},
    { title: 'End of the direct line', paragraphs: [
      'Philip IV’s three sons — Louis X, Philip V, and Charles IV — each reigned in turn, but none left a surviving son. When Charles IV died in 1328, the direct Capetian line was extinct after more than three centuries of unbroken father-to-son succession.',
      'The crown passed to Philip VI of the Valois cadet branch. The English king Edward III’s rival claim through his Capetian mother, rejected in France, became a pretext for the Hundred Years’ War — so the extinction of the direct Capetians shaped the next century of European history.'
    ]}
  ],
  timeline: [
    { date: '987', title: 'Hugh Capet elected king', description: 'The Capetian dynasty replaces the Carolingians.', links: [{ title: 'Hugh Capet', type: 'person', slug: 'hugh-capet' }] },
    { date: '1152', title: 'Louis VII’s marriage annulled', description: 'Eleanor of Aquitaine leaves the French crown for the Angevins.', links: [{ title: 'Eleanor of Aquitaine', type: 'person', slug: 'eleanor-of-aquitaine' }] },
    { date: '1204', title: 'Conquest of Normandy', description: 'Philip Augustus seizes the Angevin lands in northern France.', links: [{ title: 'Philip II Augustus', type: 'person', slug: 'philip-ii-of-france' }] },
    { date: '1214', title: 'Victory at Bouvines', description: 'Philip Augustus defeats a European coalition and secures his conquests.', links: [{ title: 'Battle of Bouvines', type: 'event', slug: 'battle-of-bouvines' }] },
    { date: '1226', title: 'Accession of Louis IX', description: 'The reign of Saint Louis begins, the moral height of Capetian kingship.', links: [{ title: 'Louis IX', type: 'person', slug: 'louis-ix-of-france' }] },
    { date: '1307', title: 'Philip IV strikes the Templars', description: 'Mass arrests begin the destruction of the Knights Templar.', links: [{ title: 'Philip IV the Fair', type: 'person', slug: 'philip-iv-of-france' }] },
    { date: '1328', title: 'Direct line extinct', description: 'Charles IV dies without a male heir; the crown passes to the Valois.', links: [{ title: 'Charles IV', type: 'person', slug: 'charles-iv-of-france' }] }
  ],
  relatedEntries: {
    people: [
      { title: 'Hugh Capet', type: 'person', slug: 'hugh-capet', label: 'Founder' },
      { title: 'Philip II Augustus', type: 'person', slug: 'philip-ii-of-france', label: 'Conqueror of the Angevin lands' },
      { title: 'Louis IX (Saint Louis)', type: 'person', slug: 'louis-ix-of-france', label: 'The model Christian king' },
      { title: 'Philip IV the Fair', type: 'person', slug: 'philip-iv-of-france', label: 'Builder of the bureaucratic state' }
    ],
    events: [
      { title: 'Battle of Bouvines', type: 'event', slug: 'battle-of-bouvines', label: 'Philip Augustus’ decisive victory, 1214' },
      { title: "Hundred Years' War", type: 'event', slug: 'hundred-years-war', label: 'Triggered by the dynasty’s extinction' }
    ],
    locations: [{ title: 'Kingdom of France', type: 'location', slug: 'kingdom-of-france', label: 'The realm they built' }]
  },
  sources: [
    { title: 'House of Capet — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/House_of_Capet' },
    { title: 'Capetian dynasty — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/topic/Capetian-dynasty' },
    { title: 'France: The Capetian kings — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/place/France/The-Capetian-kings' }
  ]
}

/* ------------------------------------------------------------------ OSMAN */
const osman = {
  id: 'house-of-osman',
  type: 'house',
  name: 'House of Osman',
  aliases: ['House of Osman (founder)', 'Ottoman dynasty', 'Ottomans', 'Osmanlı', 'Osmanli dynasty'],
  originYear: 1299,
  endYear: 1453,
  reignSpan: 'from c. 1299 (medieval span to 1453)',
  region: 'Anatolia & the Balkans',
  originPlace: 'Söğüt, north-western Anatolia',
  arms: 'The tughra (calligraphic sultanic monogram) and the crescent — the dynasty had no European-style coat of arms',
  image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bellini,%20Gentile%20-%20Sultan%20Mehmet%20II.jpg?width=1000',
  imageInfo: {
    caption: 'Sultan Mehmed II, conqueror of Constantinople, painted from life by Gentile Bellini in 1480.',
    creator: 'Gentile Bellini',
    date: '1480',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Bellini,_Gentile_-_Sultan_Mehmet_II.jpg',
    note: 'A rare contemporary Western portrait of a reigning Ottoman sultan, made when Bellini worked at Mehmed II’s court.'
  },
  summary: 'The dynasty that grew from a small Anatolian frontier principality into the empire that conquered Byzantine Constantinople in 1453.',
  overview: 'The House of Osman rose from a ghazi frontier beylik in north-western Anatolia around 1299 into a power straddling Europe and Asia. Its sultans — Osman, Orhan, Murad I, Bayezid I, and after the catastrophe of 1402 the restorers Mehmed I, Murad II, and Mehmed II — absorbed the Balkans, survived Timur, and in 1453 took Constantinople, ending the Byzantine Empire.',
  founder: P('osman-i', 'Osman I', 'Eponymous founder of the dynasty, c. 1299'),
  seats: [{ name: 'Ottoman Empire', type: 'location', slug: 'ottoman-empire' }],
  notableMembers: [
    P('osman-i', 'Osman I', 'Eponymous founder of the beylik'),
    P('orhan', 'Orhan', 'Took Bursa and first crossed into Europe'),
    P('murad-i', 'Murad I', 'Conquered the Balkans; died at Kosovo in 1389'),
    P('bayezid-i', 'Bayezid I', 'Won Nicopolis but was captured by Timur at Ankara'),
    P('mehmed-i', 'Mehmed I', 'Reunited the state after the Interregnum'),
    P('murad-ii', 'Murad II', 'Held the Balkans and won at Varna'),
    P('mehmed-ii', 'Mehmed II the Conqueror', 'Took Constantinople in 1453'),
    P('bayezid-ii', 'Bayezid II', 'Consolidated the empire after the Conquest')
  ],
  familyTree: {
    caption: 'The unbroken father-to-son line of the early Ottoman sultans, from Osman I to the conquest of Constantinople and beyond. ⚭ marks a marriage; consorts are omitted for the early sultans, whose households are poorly recorded.',
    root: {
      name: 'Osman I', personSlug: 'osman-i', note: 'r. c. 1299–1323/4',
      children: [{
        name: 'Orhan', personSlug: 'orhan', note: 'r. 1323/4–1362',
        children: [{
          name: 'Murad I', personSlug: 'murad-i', note: 'r. 1362–1389',
          children: [{
            name: 'Bayezid I', personSlug: 'bayezid-i', note: 'r. 1389–1402',
            children: [{
              name: 'Mehmed I', personSlug: 'mehmed-i', note: 'r. 1413–1421',
              children: [{
                name: 'Murad II', personSlug: 'murad-ii', note: 'r. 1421–1451',
                children: [{
                  name: 'Mehmed II the Conqueror', personSlug: 'mehmed-ii', note: 'r. 1451–1481',
                  children: [{ name: 'Bayezid II', personSlug: 'bayezid-ii', note: 'r. 1481–1512' }]
                }]
              }]
            }]
          }]
        }]
      }]
    }
  },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'The dynasty takes its name from Osman I, a Turkish frontier chief in north-western Anatolia around 1299 whose small principality bordered the weakened Byzantine Empire. Ottoman tradition, recorded much later, wraps his rise in the dream of a great tree growing from his body — a legend of destiny rather than documented fact.',
      'Osman’s followers were ghazis, frontier warriors drawn by plunder, land, and faith to raid Byzantine territory. What made the Ottomans outgrow their neighbours was their position on the richest frontier and their early crossing into Europe.'
    ]},
    { title: 'Expansion into the Balkans', paragraphs: [
      'Orhan took the Byzantine city of Bursa in 1326 and made it a capital, and by 1354 the Ottomans held Gallipoli, their first foothold in Europe. Murad I drove deep into the Balkans, taking Adrianople (Edirne) and defeating a Serbian-led coalition at the Battle of Kosovo in 1389, where he was killed in the moment of victory.',
      'His son Bayezid I "the Thunderbolt" pressed on, annihilating a western crusade at the Battle of Nicopolis in 1396 and blockading Constantinople itself.'
    ]},
    { title: 'Catastrophe and recovery', paragraphs: [
      'In 1402 the conqueror Timur invaded Anatolia and destroyed Bayezid’s army at Ankara, taking the sultan prisoner. The Ottoman state fragmented in a civil war between Bayezid’s sons — the Ottoman Interregnum of 1402–1413 — that nearly ended the dynasty.',
      'Mehmed I emerged as sole ruler in 1413 and painstakingly reunited the realm. His son Murad II beat back Hungarian and Polish crusaders at the Battle of Varna in 1444, restoring Ottoman dominance in the Balkans.'
    ]},
    { title: 'The conquest of Constantinople', paragraphs: [
      'Mehmed II came to the throne determined to take the Byzantine capital. In 1453, with huge cannon, a fleet dragged overland into the Golden Horn, and a relentless siege, he stormed Constantinople, ending the thousand-year Byzantine Empire and making the city — Istanbul — his imperial capital.',
      'The Fall of Constantinople turned the Ottoman sultanate into a world empire and earned Mehmed the title "the Conqueror". Under him and his son Bayezid II the state was given the institutions, law, and administration of a great power.'
    ]},
    { title: 'Legacy', paragraphs: [
      'Within a century and a half the House of Osman had risen from a frontier beylik to the master of south-eastern Europe and the Near East. Its early sultans built the devshirme, the Janissary corps, and a centralised military-administrative system that would carry the dynasty for centuries beyond the medieval period.',
      'By 1453 the Ottomans had replaced Byzantium as the dominant power of the eastern Mediterranean, reshaping the political and religious map of Europe and the Islamic world.'
    ]}
  ],
  timeline: [
    { date: 'c. 1299', title: 'Osman founds the beylik', description: 'A frontier principality emerges on the Byzantine border.', links: [{ title: 'Osman I', type: 'person', slug: 'osman-i' }] },
    { date: '1326', title: 'Capture of Bursa', description: 'Orhan takes his first great city and a capital.', links: [{ title: 'Orhan', type: 'person', slug: 'orhan' }] },
    { date: '1389', title: 'Battle of Kosovo', description: 'Murad I defeats the Balkan coalition but is killed.', links: [{ title: 'Battle of Kosovo', type: 'event', slug: 'battle-of-kosovo' }] },
    { date: '1396', title: 'Battle of Nicopolis', description: 'Bayezid I destroys a western crusading army.', links: [{ title: 'Battle of Nicopolis', type: 'event', slug: 'battle-of-nicopolis' }] },
    { date: '1402', title: 'Disaster at Ankara', description: 'Timur captures Bayezid I; the state fragments.', links: [{ title: 'Bayezid I', type: 'person', slug: 'bayezid-i' }] },
    { date: '1444', title: 'Battle of Varna', description: 'Murad II crushes a crusade and secures the Balkans.', links: [{ title: 'Battle of Varna', type: 'event', slug: 'battle-of-varna' }] },
    { date: '1453', title: 'Fall of Constantinople', description: 'Mehmed II takes the city and ends the Byzantine Empire.', links: [{ title: 'Fall of Constantinople', type: 'event', slug: 'fall-of-constantinople' }] }
  ],
  relatedEntries: {
    people: [
      { title: 'Osman I', type: 'person', slug: 'osman-i', label: 'Founder' },
      { title: 'Murad I', type: 'person', slug: 'murad-i', label: 'Conqueror of the Balkans' },
      { title: 'Bayezid I', type: 'person', slug: 'bayezid-i', label: 'Defeated by Timur at Ankara' },
      { title: 'Mehmed II the Conqueror', type: 'person', slug: 'mehmed-ii', label: 'Took Constantinople' }
    ],
    events: [
      { title: 'Fall of Constantinople', type: 'event', slug: 'fall-of-constantinople', label: 'The dynasty’s defining conquest, 1453' },
      { title: 'Battle of Kosovo', type: 'event', slug: 'battle-of-kosovo', label: 'Won the Balkans, 1389' },
      { title: 'Battle of Varna', type: 'event', slug: 'battle-of-varna', label: 'Secured Ottoman Europe, 1444' }
    ],
    locations: [{ title: 'Ottoman Empire', type: 'location', slug: 'ottoman-empire', label: 'The state they built' }]
  },
  sources: [
    { title: 'Ottoman dynasty — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/topic/Ottoman-Empire' },
    { title: 'Osman I — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Osman_I' },
    { title: 'Rise of the Ottoman Empire — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Rise_of_the_Ottoman_Empire' }
  ]
}

/* -------------------------------------------------- BURGUNDY (AFONSINE) */
const afonsine = {
  id: 'house-of-burgundy-portugal',
  type: 'house',
  name: 'House of Burgundy (Afonsine)',
  aliases: ['House of Burgundy (Portuguese branch)', 'Afonsine dynasty', 'Portuguese House of Burgundy', 'Afonsine'],
  originYear: 1139,
  endYear: 1383,
  reignSpan: '1139–1383',
  region: 'Kingdom of Portugal',
  originPlace: 'County of Portugal',
  arms: 'Argent, five escutcheons in cross azure each charged with five plates — the Portuguese quinas',
  image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Est%C3%A1tua%20de%20Dom%20Afonso%20Henriques%20junto%20ao%20Est%C3%A1dio%20Afonso%20Henriques%201.jpg?width=1000',
  imageInfo: {
    caption: 'Statue of Afonso I (Afonso Henriques), founder of Portugal, at Guimarães, the dynasty’s cradle.',
    creator: 'Modern monument at Guimarães',
    date: 'Modern statue; Afonso I r. 1139–1185',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Est%C3%A1tua_de_Dom_Afonso_Henriques_junto_ao_Est%C3%A1dio_Afonso_Henriques_1.jpg',
    note: 'A modern statue commemorating the first king of Portugal in the town where the dynasty and the kingdom began.'
  },
  summary: 'The founding royal dynasty of Portugal, which won independence under Afonso I and ruled until the succession crisis of 1383–85.',
  overview: 'The Portuguese House of Burgundy — the Afonsine dynasty — began with Henry, a Burgundian noble granted the County of Portugal, and became a royal house when his son Afonso I made Portugal an independent kingdom. Over nine reigns it drove the Reconquista to the Algarve, built the kingdom’s laws and towns, and produced King Dinis, before the male line ended in 1383.',
  founder: P('afonso-i-of-portugal', 'Afonso I (Afonso Henriques)', 'First king of an independent Portugal, 1139'),
  seats: [{ name: 'Kingdom of Portugal', type: 'location', slug: 'kingdom-of-portugal' }],
  notableMembers: [
    P('henry-count-of-portugal', 'Henry, Count of Portugal', 'Burgundian progenitor of the line'),
    P('afonso-i-of-portugal', 'Afonso I', 'Won independence; first king of Portugal'),
    P('sancho-i-of-portugal', 'Sancho I the Settler', 'Populated and fortified the young kingdom'),
    P('afonso-ii-of-portugal', 'Afonso II', 'Issued Portugal’s first written laws'),
    P('sancho-ii-of-portugal', 'Sancho II', 'Deposed after conflict with the Church and nobles'),
    P('afonso-iii-of-portugal', 'Afonso III', 'Completed the Reconquista by taking the Algarve'),
    P('denis-of-portugal', 'Dinis I', 'The "Farmer King"; founded the university and championed Portuguese'),
    P('afonso-iv-of-portugal', 'Afonso IV', 'Fought at the Salado; father in the Inês de Castro tragedy'),
    P('peter-i-of-portugal', 'Pedro I the Just', 'Whose love for Inês de Castro became legend'),
    P('ferdinand-i-of-portugal', 'Ferdinand I', 'Last king of the line; his death opened the 1383–85 crisis')
  ],
  cadetBranches: [
    { name: 'House of Aviz', note: 'Founded by John I, illegitimate son of Pedro I, who took the throne after the 1383–85 crisis.' }
  ],
  familyTree: {
    caption: 'The Afonsine kings from Henry of Burgundy and Teresa of León through the winning of independence to Ferdinand I, after whom the crown passed to the House of Aviz. ⚭ marks a marriage.',
    root: {
      name: 'Henry, Count of Portugal', personSlug: 'henry-count-of-portugal', note: 'd. 1112',
      spouse: { name: 'Teresa of León', personSlug: 'teresa-of-leon' },
      children: [{
        name: 'Afonso I', personSlug: 'afonso-i-of-portugal', note: 'r. 1139–1185',
        children: [{
          name: 'Sancho I', personSlug: 'sancho-i-of-portugal', note: 'r. 1185–1211',
          children: [{
            name: 'Afonso II', personSlug: 'afonso-ii-of-portugal', note: 'r. 1211–1223',
            children: [
              { name: 'Sancho II', personSlug: 'sancho-ii-of-portugal', note: 'r. 1223–1248, deposed' },
              {
                name: 'Afonso III', personSlug: 'afonso-iii-of-portugal', note: 'r. 1248–1279',
                children: [{
                  name: 'Dinis I', personSlug: 'denis-of-portugal', note: 'r. 1279–1325',
                  children: [{
                    name: 'Afonso IV', personSlug: 'afonso-iv-of-portugal', note: 'r. 1325–1357',
                    children: [{
                      name: 'Pedro I', personSlug: 'peter-i-of-portugal', note: 'r. 1357–1367',
                      children: [
                        { name: 'Ferdinand I', personSlug: 'ferdinand-i-of-portugal', note: 'r. 1367–1383, no male heir' },
                        { name: 'John I', note: 'illegitimate son', branch: '→ House of Aviz (1385)' }
                      ]
                    }]
                  }]
                }]
              }
            ]
          }]
        }]
      }]
    }
  },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'The line began with Henry of Burgundy, a French noble who around 1096 married Teresa, illegitimate daughter of Alfonso VI of León-Castile, and received the County of Portugal as a frontier fief. Their son Afonso Henriques rebelled against his mother, defeating her faction at the Battle of São Mamede in 1128 and asserting his own rule.',
      'Afonso pushed south against the Moors, and after his victory at the Battle of Ourique in 1139 he took the title of king. The Treaty of Zamora in 1143 won León’s recognition, and papal acknowledgement in 1179 confirmed Portugal as an independent kingdom.'
    ]},
    { title: 'Building the kingdom', paragraphs: [
      'Afonso I and his son Sancho I drove the Reconquista down the Atlantic coast; the capture of Lisbon in the Siege of Lisbon of 1147, with the help of northern crusaders, was the decisive step. Sancho I earned the name "the Populator" for founding towns, granting charters, and settling the reconquered lands.',
      'The early Afonsine kings had to build a state as well as conquer one — organising a frontier society of townsmen, military orders, and a fractious nobility into a working kingdom.'
    ]},
    { title: 'Crown, Church, and law', paragraphs: [
      'Afonso II turned from conquest to government, issuing Portugal’s first written laws and asserting royal rights against the Church and the great nobles. That conflict sharpened under Sancho II, whose reign collapsed into civil war and who was deposed in 1248 in favour of his brother Afonso III.',
      'Afonso III completed the Reconquista by taking the Algarve, summoned the first Portuguese Cortes to include townsmen, and moved the kingdom’s centre of gravity toward Lisbon.'
    ]},
    { title: 'Dinis and the flowering', paragraphs: [
      'King Dinis, the "Farmer King", encouraged agriculture, planted the Leiria pine forest that later built Portugal’s ships, founded the university that became Coimbra in 1290, and made Portuguese rather than Latin the language of the royal chancery. He reorganised the Templars’ Portuguese assets into the new Order of Christ.',
      'His successors ruled a settled kingdom. Afonso IV fought beside Castile against the Moors at the Salado in 1340, but his reign is best remembered for the tragedy of Inês de Castro, mistress of his son Pedro, whom the king had killed.'
    ]},
    { title: 'The end of the line and the 1383–85 crisis', paragraphs: [
      'Pedro I ruled as a stern justiciar, and legend told that he had the murdered Inês de Castro exhumed and honoured as queen. His legitimate son Ferdinand I entangled Portugal in the wars of Castile and married his daughter Beatrice to the Castilian king.',
      'When Ferdinand died in 1383 without a son, that marriage threatened to absorb Portugal into Castile. The resulting 1383–85 crisis ended with the Portuguese victory at the Battle of Aljubarrota in 1385 and the accession of John I, Pedro’s illegitimate son, founding the House of Aviz and preserving Portuguese independence.'
    ]}
  ],
  timeline: [
    { date: '1128', title: 'Battle of São Mamede', description: 'Afonso Henriques defeats his mother’s faction and takes power.', links: [{ title: 'Battle of São Mamede', type: 'event', slug: 'battle-of-sao-mamede' }] },
    { date: '1139', title: 'Battle of Ourique', description: 'Afonso claims the royal title after victory over the Moors.', links: [{ title: 'Battle of Ourique', type: 'event', slug: 'battle-of-ourique' }] },
    { date: '1147', title: 'Siege of Lisbon', description: 'Lisbon is taken from the Moors with crusader help.', links: [{ title: 'Siege of Lisbon', type: 'event', slug: 'siege-of-lisbon' }] },
    { date: '1179', title: 'Papal recognition', description: 'The bull Manifestis Probatum confirms Portugal as a kingdom.' },
    { date: '1249', title: 'Conquest of the Algarve', description: 'Afonso III completes the Portuguese Reconquista.', links: [{ title: 'Afonso III', type: 'person', slug: 'afonso-iii-of-portugal' }] },
    { date: '1290', title: 'University founded', description: 'King Dinis establishes the studium that becomes Coimbra.', links: [{ title: 'Dinis I', type: 'person', slug: 'denis-of-portugal' }] },
    { date: '1385', title: 'Aljubarrota and the House of Aviz', description: 'After Ferdinand I’s death, John I secures independence and a new dynasty.', links: [{ title: 'Battle of Aljubarrota', type: 'event', slug: 'battle-of-aljubarrota' }] }
  ],
  relatedEntries: {
    people: [
      { title: 'Afonso I', type: 'person', slug: 'afonso-i-of-portugal', label: 'Founder; first king' },
      { title: 'Dinis I', type: 'person', slug: 'denis-of-portugal', label: 'The Farmer King' },
      { title: 'Pedro I the Just', type: 'person', slug: 'peter-i-of-portugal', label: 'The Inês de Castro legend' },
      { title: 'Ferdinand I', type: 'person', slug: 'ferdinand-i-of-portugal', label: 'Last king of the line' }
    ],
    events: [
      { title: 'Battle of São Mamede', type: 'event', slug: 'battle-of-sao-mamede', label: 'Founding victory, 1128' },
      { title: 'Siege of Lisbon', type: 'event', slug: 'siege-of-lisbon', label: 'Key Reconquista conquest, 1147' },
      { title: 'Battle of Aljubarrota', type: 'event', slug: 'battle-of-aljubarrota', label: 'Ended the crisis of 1383–85' }
    ],
    locations: [{ title: 'Kingdom of Portugal', type: 'location', slug: 'kingdom-of-portugal', label: 'The kingdom they founded' }]
  },
  sources: [
    { title: 'Portuguese House of Burgundy — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Portuguese_House_of_Burgundy' },
    { title: 'Afonso I — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/biography/Afonso-I-king-of-Portugal' },
    { title: 'Portugal: The house of Burgundy — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/place/Portugal/The-Burgundian-dynasty' }
  ]
}

if (!Array.isArray(data.houses)) data.houses = []
for (const house of [capet, osman, afonsine]) {
  const i = data.houses.findIndex((h) => h.id === house.id)
  if (i >= 0) data.houses[i] = house
  else data.houses.push(house)
}

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`Batch B written. houses now: ${data.houses.map((h) => h.id).join(', ')}`)
