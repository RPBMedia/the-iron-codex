// Adds the later Hundred Years' War military events (Siege of Rouen, Battle of
// Verneuil, Siege of Orléans, Battle of Patay, Battle of Formigny, Battle of
// Castillon) as full articles, and rewires battle continuity so the chain moves
// forward through the war instead of looping back to Crécy from Agincourt.
import fs from 'node:fs'

const dataPath = new URL('../server/data/history.json', import.meta.url)
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))

const filePath = (name) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(name)}`
const filePage = (name) => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(name)}`

const newEvents = [
  {
    id: 'siege-of-rouen',
    type: 'event',
    name: 'Siege of Rouen',
    year: 1419,
    location: 'Rouen, Normandy',
    image: filePath('Siège_de_Rouen_(1418-1419).jpg'),
    imageInfo: {
      caption: 'The siege of Rouen (1418–1419), miniature from Martial d\'Auvergne\'s Vigiles de Charles VII, c. 1484.',
      creator: 'Unknown miniaturist',
      date: 'c. 1484',
      source: 'Bibliothèque nationale de France, Ms. Français 5054, fol. 19v — via Wikimedia Commons',
      sourceUrl: filePage('Siège_de_Rouen_(1418-1419).jpg'),
      note: 'A late fifteenth-century French depiction, painted some sixty-five years after the siege; public domain.'
    },
    summary: 'Henry V starved Rouen, the capital of Normandy, into surrender over six winter months, completing the English conquest of the duchy and opening the road to the Treaty of Troyes.',
    details: 'The siege of Rouen ran from late July 1418 to 19 January 1419. Rather than storm the largest city of northern France, Henry V sealed it off with fortified camps, a river blockade, and iron discipline, and let famine do the fighting. The city\'s expulsion of thousands of poor inhabitants — whom Henry refused to let through the siege lines — left civilians dying in the ditch between the walls and the English camps through the winter. Rouen\'s fall gave Lancastrian England the administrative capital of Normandy.',
    eventType: 'Siege',
    conflict: "Hundred Years' War",
    factions: ['Kingdom of England', 'Kingdom of France'],
    leaders: [
      { name: 'Henry V of England', faction: 'English army', personId: 'henry-v-of-england' },
      { name: 'Guy le Bouteiller', faction: 'Rouen garrison' }
    ],
    eventLocation: { name: 'Rouen', locationId: 'rouen' },
    outcome: 'Rouen surrendered on 19 January 1419; Normandy passed under English rule.',
    participants: [
      { side: 'English army', factions: [{ name: 'Kingdom of England', title: 'Kingdom of England', type: 'location', slug: 'kingdom-of-england' }], leaders: [{ name: 'Henry V of England', type: 'person', slug: 'henry-v-of-england' }] },
      { side: 'Rouen garrison and citizens', factions: [{ name: 'Kingdom of France', title: 'Kingdom of France', type: 'location', slug: 'kingdom-of-france' }], leaders: [{ name: 'Guy le Bouteiller', type: 'person' }] }
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'The siege of Rouen, from late July 1418 to 19 January 1419, was the decisive operation of Henry V\'s second French campaign. After Agincourt in 1415, Henry returned to France in 1417 with a different strategy: instead of raiding, he set out to conquer and keep Normandy town by town. Caen fell in 1417, then the lesser Norman towns, until only Rouen — the duchy\'s capital and one of the largest cities in France — remained.',
        'Rouen was too strong to storm. Its walls carried some sixty towers, its garrison had been reinforced, and the city had prepared for a siege. Henry answered with a blockade: four fortified camps linked by trenches, chains across the Seine to stop river traffic, and patrols that cut every road. From August 1418 nothing entered the city. The siege became a contest between English patience and the endurance of a starving population.'
      ]},
      { title: 'Background', paragraphs: [
        'France in 1418 was at war with itself as much as with England. The feud between the Armagnac and Burgundian factions had broken into open violence; in May 1418 the Burgundians seized Paris, and the Dauphin Charles fled south. When Rouen begged for relief, the Burgundian government in Paris and the Dauphin\'s Armagnac party each hesitated to rescue a city the other faction might claim. No relief army ever marched.',
        'Henry V exploited that paralysis systematically. His 1417–1419 campaign took the Norman towns in sequence — Caen, Falaise, Cherbourg, Évreux — isolating Rouen before a single English soldier appeared beneath its walls. By July 1418 the ring was closing, and Vicar-General Robert de Livet\'s defiant garrison prepared the city for the storm that never came, because Henry intended to starve it instead.'
      ]},
      { title: 'Blockade and famine', paragraphs: [
        'By October 1418 food inside Rouen was running out. The defenders had driven perhaps twelve thousand poor inhabitants — the bouches inutiles, "useless mouths" — out of the gates to save provisions. Henry refused to let them pass through the English lines. They remained trapped in the town ditch through the winter, dying of hunger and exposure between the walls of their own city and the army besieging it. Chroniclers on both sides recorded children born and baptised in the ditch, hauled up in baskets, and lowered back down to die.',
        'Inside the walls, the population ate horses, then dogs, cats, and rats, at prices the chronicler-eyewitness John Page recorded in verse. The garrison under Guy le Bouteiller launched sorties and negotiated in bad faith to buy time, still hoping Burgundian Paris would send an army. By Christmas 1418 the city\'s leaders knew none was coming.'
      ]},
      { title: 'Surrender', paragraphs: [
        'Negotiations opened in earnest at the turn of the year. The terms sealed on 13 January 1419 were harsh: a payment of 300,000 gold crowns, the surrender of the city\'s arms, and the handover of named men — including Robert de Livet, who had excommunicated Henry from the walls, and Alain Blanchard, commander of the crossbowmen, who had hanged English prisoners from them. Blanchard was executed; de Livet died in an English prison.',
        'On 19 January 1419 the gates opened and Henry V entered Rouen. He came as duke as much as conqueror: Norman institutions were kept running under English officers, exiled citizens were invited back on oath, and Rouen became the seat of English government in France for the next thirty years.'
      ]},
      { title: 'Aftermath and the road to Troyes', paragraphs: [
        'With Rouen taken, English control of Normandy was complete, and events in France accelerated. In September 1419, Armagnac partisans murdered Duke John the Fearless of Burgundy on the bridge at Montereau during a parley with the Dauphin — a killing that drove his heir, Philip the Good, into open alliance with England.',
        'That alliance produced the Treaty of Troyes in May 1420: Charles VI recognised Henry V as his heir and regent of France, and Henry married the king\'s daughter Catherine of Valois. The treaty disinherited the Dauphin and split France into Lancastrian and Dauphinist halves — the political frame of the war for the next fifteen years. None of it would have been possible while Rouen still held out.'
      ]},
      { title: 'Significance', paragraphs: [
        'Rouen shows the character of Henry V\'s warfare more clearly than Agincourt does. The famous battle had been forced on him during a retreat; the siege was his chosen instrument — methodical, administrative, and pitiless. His treatment of the expelled civilians was debated even by contemporaries: by the customs of siege warfare he owed them nothing, and he let that logic run to its end.',
        'Strategically, the siege turned a raiding war into a war of occupation. An English administration ruled from Rouen, Norman revenues paid for the English garrisons, and every later phase of the war — Verneuil, the Loire campaign, the final collapse at Formigny — was fought over the conquest completed in January 1419.'
      ]}
    ],
    sources: [
      { title: 'Wikimedia Commons image record — Vigiles de Charles VII miniature', author: 'Wikimedia Commons', type: 'image source', url: filePage('Siège_de_Rouen_(1418-1419).jpg') },
      { title: 'Siege of Rouen (1418–1419) — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Siege_of_Rouen_(1418%E2%80%931419)' },
      { title: 'Agincourt: Henry V and the Battle That Made England', author: 'Juliet Barker', type: 'book', note: 'Covers the 1417–1419 Normandy campaign and the siege of Rouen in detail.' }
    ],
    relatedEntries: {
      people: [
        { title: 'Henry V of England', type: 'person', slug: 'henry-v-of-england', label: 'Commanded the siege' }
      ],
      events: [
        { title: 'Battle of Agincourt', type: 'event', slug: 'battle-of-agincourt', label: 'His famous victory three years earlier' },
        { title: "Hundred Years' War", type: 'event', slug: 'hundred-years-war', label: 'The wider conflict' },
        { title: 'Battle of Verneuil', type: 'event', slug: 'battle-of-verneuil', label: 'Defence of the conquest, 1424' }
      ],
      locations: [
        { title: 'Rouen', type: 'location', slug: 'rouen', label: 'The besieged city' },
        { title: 'Duchy of Normandy', type: 'location', slug: 'duchy-of-normandy', label: 'The conquered duchy' },
        { title: 'Kingdom of England', type: 'location', slug: 'kingdom-of-england' },
        { title: 'Kingdom of France', type: 'location', slug: 'kingdom-of-france' }
      ]
    },
    battleContinuity: {
      label: 'Follow the Lancastrian war in France',
      battleSlug: 'battle-of-verneuil',
      relationship: 'same-war',
      reason: 'Henry V died in 1422 with the conquest incomplete; two years later his brother John, Duke of Bedford, destroyed a Franco-Scottish army at Verneuil — a victory contemporaries ranked beside Agincourt — to secure English Normandy.'
    }
  },
  {
    id: 'battle-of-verneuil',
    type: 'event',
    name: 'Battle of Verneuil',
    year: 1424,
    location: 'Verneuil-sur-Avre, Normandy',
    image: filePath('Vigiles_du_roi_Charles_VII_49.jpg'),
    imageInfo: {
      caption: 'The battle of Verneuil (1424), miniature from Martial d\'Auvergne\'s Vigiles de Charles VII, c. 1484.',
      creator: 'Unknown miniaturist',
      date: 'c. 1484',
      source: 'Bibliothèque nationale de France, Ms. Français 5054 — via Wikimedia Commons',
      sourceUrl: filePage('Vigiles_du_roi_Charles_VII_49.jpg'),
      note: 'A French manuscript depiction made six decades after the battle; public domain.'
    },
    summary: 'John, Duke of Bedford, destroyed a combined French and Scottish army at Verneuil in 1424 — a Lancastrian victory so complete that contemporaries called it a second Agincourt.',
    details: 'Fought on 17 August 1424, Verneuil was the bloodiest defeat inflicted on the Dauphinist cause between Agincourt and the war\'s turn at Orléans. Bedford\'s English army met a larger Franco-Scottish force in open battle north of the town. The Scottish contingent, some six thousand strong under the Earls of Douglas and Buchan, had refused quarter and received none: it was annihilated, and with it Scotland\'s army in France.',
    eventType: 'Battle',
    conflict: "Hundred Years' War",
    factions: ['Kingdom of England', 'Kingdom of France'],
    leaders: [
      { name: 'John, Duke of Bedford', faction: 'English army' },
      { name: 'John Stewart, Earl of Buchan', faction: 'Franco-Scottish army' },
      { name: 'Archibald Douglas, 4th Earl of Douglas', faction: 'Franco-Scottish army' }
    ],
    outcome: 'Decisive English victory; the Scottish army in France was annihilated and its commanders killed.',
    participants: [
      { side: 'English army', factions: [{ name: 'Kingdom of England', title: 'Kingdom of England', type: 'location', slug: 'kingdom-of-england' }], leaders: [{ name: 'John, Duke of Bedford', type: 'person' }] },
      { side: 'Franco-Scottish army', factions: [{ name: 'Kingdom of France', title: 'Kingdom of France', type: 'location', slug: 'kingdom-of-france' }], leaders: [{ name: 'John Stewart, Earl of Buchan', type: 'person' }, { name: 'Archibald Douglas, 4th Earl of Douglas', type: 'person' }] }
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'The battle of Verneuil, fought on 17 August 1424 outside Verneuil-sur-Avre on the southern edge of Normandy, was the greatest English field victory of the war after Agincourt — contemporaries on both sides called it exactly that, a "second Agincourt". John, Duke of Bedford, regent of Lancastrian France for the infant Henry VI, met the main Dauphinist field army, stiffened by the largest Scottish expeditionary force ever sent to the continent, and destroyed it.',
        'Unlike Agincourt, Verneuil was a battle both sides chose. The Franco-Scottish command believed its numbers, its Lombard armoured cavalry, and the Scots\' hatred of the English would carry the day. The result instead confirmed English military dominance for another five years and left the Dauphin Charles without a field army worth the name.'
      ]},
      { title: 'Background', paragraphs: [
        'Henry V had died in August 1422, followed within weeks by Charles VI. The Treaty of Troyes made the infant Henry VI king of both realms, with Bedford governing France from Rouen. South of the Loire, the disinherited Dauphin Charles maintained his rival court, and Scotland — England\'s old enemy — supplied him with soldiers by the thousand. A Scottish army under the Earl of Buchan had already beaten the English at Baugé in 1421, where Henry V\'s brother Thomas, Duke of Clarence, was killed.',
        'In August 1424 the allies assembled at Le Mans perhaps fourteen to sixteen thousand men — French men-at-arms under the Viscount of Narbonne and the Duke of Alençon, Buchan\'s and Douglas\'s Scots, and a corps of Lombard mercenary cavalry in the new Italian plate armour. Verneuil, an English-held border town, was taken by a ruse; Bedford marched south from Rouen with roughly eight to ten thousand men to take it back, and the allies decided to stand and fight.'
      ]},
      { title: 'The battle', paragraphs: [
        'Bedford deployed in the proven English manner: dismounted men-at-arms in two divisions, archers on the wings and in front behind driven stakes, the baggage laagered to the rear under an archer guard. The battle opened with a shock the English system had not faced before — the Lombard heavy cavalry charged straight through the archer screen on one wing, the stakes failing in the hard summer ground, and rode on to plunder the baggage train.',
        'It should have been the beginning of a rout. Instead the English line closed ranks and fought. Bedford\'s division ground down Narbonne\'s French; the reserve of two thousand archers, kept back precisely for such a crisis, threw the returning Lombards off the field and then swung into the flank of the Scots. Douglas\'s and Buchan\'s men, who had taunted the English before the battle that they would give no quarter, were surrounded and cut down where they stood. Both earls died; so did Narbonne, whose body was afterwards quartered for his part in the murder of John the Fearless.'
      ]},
      { title: 'The Scottish catastrophe', paragraphs: [
        'Verneuil ended Scotland\'s war in France. Of roughly six thousand Scots, contemporary estimates put the dead at four thousand or more, including Buchan — Constable of France since Baugé — and Douglas, created Duke of Touraine only months before. No Scottish army of comparable size ever crossed to the continent again; survivors were folded into French service as individual companies, the nucleus of what became the Garde Écossaise.',
        'For the Dauphin the defeat was numerically worse than Agincourt had been for his father\'s generation. Perhaps seven thousand of his soldiers were dead against a few hundred English casualties, and the lords of his party — Alençon captured, Narbonne dead, Aumale dead — were swept from the board at a stroke.'
      ]},
      { title: 'Aftermath and significance', paragraphs: [
        'Bedford used the victory methodically, as he did everything: Maine was overrun in the following two years, and English garrisons pushed to the Loire. Yet Verneuil also marked the limit of what battlefield victory could achieve. The Dauphin\'s cause survived because it rested on the loyalty of southern France, not on any single army, and Bedford lacked the men and money to conquer beyond the Loire.',
        'Militarily, Verneuil vindicated the English tactical system one final time at full scale — and exposed its dependence on circumstances. The Lombard charge had shown that determined plate-armoured cavalry could ride through the archers; only discipline and the tactical reserve had saved Bedford. When the war turned at Orléans and Patay five years later, French commanders had learned to attack before the English position was set. Verneuil was the last great battle the old system won.'
      ]}
    ],
    sources: [
      { title: 'Wikimedia Commons image record — Vigiles de Charles VII miniature', author: 'Wikimedia Commons', type: 'image source', url: filePage('Vigiles_du_roi_Charles_VII_49.jpg') },
      { title: 'Battle of Verneuil — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Battle_of_Verneuil' },
      { title: 'The Battle of Verneuil (17 August 1424): Towards a History of Courage', author: 'Michael K. Jones, War in History 9/4 (2002)', type: 'academic article', note: 'The standard modern study of the battle.' }
    ],
    relatedEntries: {
      people: [
        { title: 'Henry V of England', type: 'person', slug: 'henry-v-of-england', label: 'The conquest he began was defended here' }
      ],
      events: [
        { title: 'Siege of Rouen', type: 'event', slug: 'siege-of-rouen', label: 'The conquest of Normandy, 1418–19' },
        { title: 'Battle of Agincourt', type: 'event', slug: 'battle-of-agincourt', label: 'The victory it was compared to' },
        { title: "Hundred Years' War", type: 'event', slug: 'hundred-years-war', label: 'The wider conflict' }
      ],
      locations: [
        { title: 'Duchy of Normandy', type: 'location', slug: 'duchy-of-normandy', label: 'The province it secured' },
        { title: 'Kingdom of England', type: 'location', slug: 'kingdom-of-england' },
        { title: 'Kingdom of France', type: 'location', slug: 'kingdom-of-france' }
      ]
    },
    battleContinuity: {
      label: 'The war turns at Orléans',
      battleSlug: 'siege-of-orleans',
      relationship: 'same-war',
      reason: 'Verneuil gave Lancastrian France five more years of dominance; when the English pushed to the Loire and besieged Orléans in 1428, Joan of Arc\'s relief of the city turned the entire war against them.'
    }
  },
  {
    id: 'siege-of-orleans',
    type: 'event',
    name: 'Siege of Orléans',
    year: 1429,
    location: 'Orléans, on the Loire',
    image: filePath('Siege_orleans.jpg'),
    imageInfo: {
      caption: 'The siege of Orléans, miniature from Martial d\'Auvergne\'s Vigiles de Charles VII, c. 1484.',
      creator: 'Unknown miniaturist',
      date: 'c. 1484',
      source: 'Bibliothèque nationale de France — via Wikimedia Commons',
      sourceUrl: filePage('Siege_orleans.jpg'),
      note: 'A French manuscript depiction painted some fifty-five years after the siege; public domain.'
    },
    summary: 'The English siege of Orléans (October 1428 – May 1429) was the turning point of the Hundred Years\' War: Joan of Arc\'s arrival galvanised the defence, and the siege was broken in nine days.',
    details: 'Orléans commanded the main crossing of the Loire and the road into the Dauphin\'s southern France. The English under Salisbury, then Suffolk and Talbot, ringed it with siege forts from October 1428. The city held through the winter; in late April 1429 Joan of Arc entered with a relief convoy, and between 4 and 7 May the French stormed the English forts, culminating in the assault on Les Tourelles. On 8 May 1429 the English abandoned the siege.',
    eventType: 'Siege',
    conflict: "Hundred Years' War",
    factions: ['Kingdom of France', 'Kingdom of England'],
    leaders: [
      { name: 'Joan of Arc', faction: 'French relief force', personId: 'joan-of-arc' },
      { name: 'Jean, the Bastard of Orléans (Dunois)', faction: 'Orléans garrison' },
      { name: 'Thomas Montagu, Earl of Salisbury', faction: 'English army' },
      { name: 'William de la Pole, Earl of Suffolk', faction: 'English army' }
    ],
    outcome: 'The siege was lifted on 8 May 1429; the first major French victory over the English since the war\'s Lancastrian phase began.',
    participants: [
      { side: 'French garrison and relief force', factions: [{ name: 'Kingdom of France', title: 'Kingdom of France', type: 'location', slug: 'kingdom-of-france' }], leaders: [{ name: 'Joan of Arc', type: 'person', slug: 'joan-of-arc' }, { name: 'Jean, the Bastard of Orléans (Dunois)', type: 'person' }] },
      { side: 'English army', factions: [{ name: 'Kingdom of England', title: 'Kingdom of England', type: 'location', slug: 'kingdom-of-england' }], leaders: [{ name: 'Thomas Montagu, Earl of Salisbury', type: 'person' }, { name: 'William de la Pole, Earl of Suffolk', type: 'person' }] }
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'The siege of Orléans, from 12 October 1428 to 8 May 1429, is the hinge of the Hundred Years\' War. Before it, English arms had been effectively unbeaten in the field for a generation; after it, the initiative passed to Charles VII and never fully returned. The city commanded the Loire crossing on the direct road to Bourges, the Dauphin\'s capital — if Orléans fell, the war might have ended in a Lancastrian France.',
        'It is also the siege that made Joan of Arc. The seventeen-year-old from Domrémy arrived with the relief convoy on 29 April 1429; nine days later the English siege lines were broken and burning. Whatever weight historians assign to her generalship against her effect on morale, contemporaries on both sides had no doubt the siege turned on her arrival.'
      ]},
      { title: 'Background', paragraphs: [
        'By 1428 Bedford\'s regency had pushed the frontier of Lancastrian France to the Loire. The war council in Paris chose Orléans as the next objective — over Bedford\'s reported preference for Angers — and in October the veteran Earl of Salisbury invested the city with perhaps four to five thousand men, seizing the bridge suburb and the fortified bridgehead of Les Tourelles.',
        'Salisbury was mortally wounded by a cannon shot within days of taking Les Tourelles, an omen of how the siege would run. His successors Suffolk and Talbot lacked the men to seal off the city completely: the English built a ring of detached forts — the bastilles — covering the west and south, but the eastern approaches stayed porous. Through the winter the garrison under Dunois, the Bastard of Orléans, and the citizens — who paid for and manned much of their own artillery — held on, while the only relief attempt, at the "Battle of the Herrings" in February 1429, ended in a French defeat.'
      ]},
      { title: 'Joan of Arc\'s arrival', paragraphs: [
        'Joan reached Charles VII\'s court at Chinon in February 1429, claiming a divine commission to raise the siege and lead the king to his coronation at Reims. After examination by clergy at Poitiers, she was given armour, a banner, and a place with the relief army assembling at Blois. On 29 April she entered Orléans through the eastern gates with a supply convoy, to a reception the city\'s own journal describes as ecstatic.',
        'Her letters to the English commanders demanding their withdrawal were answered with insults, but inside the walls she changed the arithmetic of the siege. The garrison and citizens, who had endured six months of blockade, now pressed for the attack; the captains — Dunois, La Hire, Gilles de Rais, Poton de Xaintrailles — found themselves fighting alongside a standard the soldiers believed heaven had sent.'
      ]},
      { title: 'Breaking the siege', paragraphs: [
        'The counterattack ran from 4 to 7 May 1429 with a speed that stunned both sides. On 4 May the French stormed the bastille of Saint-Loup east of the city. On 6 May they crossed the river and took the fort of the Augustins on the south bank. On 7 May came the decisive assault on Les Tourelles, the strongest English work, commanding the broken bridge.',
        'The fight for Les Tourelles lasted from morning to dusk. Joan was wounded by an arrow above the collarbone — as she had predicted — withdrew, and returned to the assault in the evening; the sight of her banner at the ditch carried the final storm. The English commander at the bridgehead, William Glasdale, drowned in the Loire when the drawbridge collapsed under him. On the morning of 8 May the remaining English forces under Suffolk and Talbot drew up in battle order, then burned their forts and marched away. The French, on Joan\'s reported insistence that the day was a Sunday, let them go.'
      ]},
      { title: 'Aftermath', paragraphs: [
        'The strategic consequences came fast. In June the French cleared the remaining English garrisons from the Loire at Jargeau, Meung, and Beaugency, and on 18 June destroyed the English field army at Patay. On 17 July 1429 Charles VII was crowned at Reims with Joan beside him — the political objective her voices had named from the start, and a coronation that transformed the Dauphin of Bourges into the anointed King of France.',
        'Orléans itself never forgot. The city kept 8 May as a civic feast in Joan\'s honour — a commemoration that has continued, war and revolution notwithstanding, to the present day.'
      ]},
      { title: 'Significance', paragraphs: [
        'Militarily, the siege\'s failure exposed the overstretch of Lancastrian France: the English lacked the numbers to blockade a great city and simultaneously hold a four-hundred-mile frontier. The porous eastern siege lines let Orléans breathe just enough to survive the winter, and once a determined relief force arrived, the isolated bastilles were destroyed one by one.',
        'Symbolically its weight was greater still. Orléans broke the aura of English invincibility that had hung over the war since Agincourt, and bound Charles VII\'s cause to a story of divine vindication that Reims sealed two months later. English propaganda understood this perfectly — which is why, when Joan was captured the following year, her trial at Rouen was designed to prove the siege had been the devil\'s work rather than God\'s.'
      ]}
    ],
    sources: [
      { title: 'Wikimedia Commons image record — Vigiles de Charles VII miniature', author: 'Wikimedia Commons', type: 'image source', url: filePage('Siege_orleans.jpg') },
      { title: 'Siege of Orléans — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Siege_of_Orl%C3%A9ans' },
      { title: 'The Hundred Years War, vol. 4: Cursed Kings', author: 'Jonathan Sumption', type: 'book', note: 'Detailed narrative of the siege and the Loire campaign of 1429.' }
    ],
    relatedEntries: {
      people: [
        { title: 'Joan of Arc', type: 'person', slug: 'joan-of-arc', label: 'Led the relief of the city' }
      ],
      events: [
        { title: 'Battle of Patay', type: 'event', slug: 'battle-of-patay', label: 'The pursuit six weeks later' },
        { title: 'Battle of Verneuil', type: 'event', slug: 'battle-of-verneuil', label: 'The English dominance it ended' },
        { title: "Hundred Years' War", type: 'event', slug: 'hundred-years-war', label: 'The wider conflict' }
      ],
      locations: [
        { title: 'Kingdom of France', type: 'location', slug: 'kingdom-of-france', label: 'The kingdom it saved' },
        { title: 'Kingdom of England', type: 'location', slug: 'kingdom-of-england' },
        { title: 'Paris', type: 'location', slug: 'paris', label: 'Seat of the English regency' }
      ]
    },
    battleContinuity: {
      label: 'Follow the French recovery',
      battleSlug: 'battle-of-patay',
      relationship: 'same-campaign',
      reason: 'Six weeks after the siege was lifted, the French army caught the retreating English field force near Patay and destroyed it before the longbowmen could set their line — the reverse of Agincourt, and the end of English dominance in open battle.'
    }
  },
  {
    id: 'battle-of-patay',
    type: 'event',
    name: 'Battle of Patay',
    year: 1429,
    location: 'Near Patay, north of Orléans',
    image: filePath('Vigiles_du_roi_Charles_VII_42.jpg'),
    imageInfo: {
      caption: 'The battle of Patay (1429), miniature from Martial d\'Auvergne\'s Vigiles de Charles VII, c. 1484.',
      creator: 'Unknown miniaturist',
      date: 'c. 1484',
      source: 'Bibliothèque nationale de France, Ms. Français 5054 — via Wikimedia Commons',
      sourceUrl: filePage('Vigiles_du_roi_Charles_VII_42.jpg'),
      note: 'A French manuscript depiction made half a century after the battle; public domain.'
    },
    summary: 'On 18 June 1429 the French vanguard caught the English field army before it could form its battle line near Patay, destroying it and capturing John Talbot — the reverse image of Agincourt.',
    details: 'Patay was the climax of the Loire campaign that followed the relief of Orléans. As the English army under Talbot and Fastolf retreated north, French heavy cavalry under La Hire and Poton de Xaintrailles surprised its rearguard before the archers could plant their stakes. The unprotected longbowmen were ridden down, the army disintegrated, and Talbot was taken prisoner. English losses ran over two thousand; the French lost a handful of men.',
    eventType: 'Battle',
    conflict: "Hundred Years' War",
    factions: ['Kingdom of France', 'Kingdom of England'],
    leaders: [
      { name: 'La Hire (Étienne de Vignolles)', faction: 'French vanguard' },
      { name: 'Poton de Xaintrailles', faction: 'French vanguard' },
      { name: 'John Talbot', faction: 'English army' },
      { name: 'Sir John Fastolf', faction: 'English army' }
    ],
    outcome: 'Crushing French victory; the English field army was destroyed and John Talbot captured.',
    participants: [
      { side: 'French army', factions: [{ name: 'Kingdom of France', title: 'Kingdom of France', type: 'location', slug: 'kingdom-of-france' }], leaders: [{ name: 'La Hire (Étienne de Vignolles)', type: 'person' }, { name: 'Poton de Xaintrailles', type: 'person' }] },
      { side: 'English army', factions: [{ name: 'Kingdom of England', title: 'Kingdom of England', type: 'location', slug: 'kingdom-of-england' }], leaders: [{ name: 'John Talbot', type: 'person' }, { name: 'Sir John Fastolf', type: 'person' }] }
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'The battle of Patay, fought on 18 June 1429 on the plain north of Orléans, completed what the relief of the city had begun. For the first time in the war, a French army destroyed an English field army in open country — not by outlasting it in a siege, but by catching it at its moment of weakness and striking before the famous defensive line could form.',
        'The numbers tell the story of how completely the pattern of the war inverted. At Agincourt the French had lost thousands against a few hundred English dead. At Patay the English lost perhaps 2,000 to 2,500 killed or captured out of some 5,000; French casualties were reported in the tens. The English commander John Talbot — the most feared soldier of Lancastrian France — began the day directing a rearguard and ended it a prisoner.'
      ]},
      { title: 'Background', paragraphs: [
        'After abandoning the siege of Orléans on 8 May 1429, the English tried to hold their chain of Loire towns. The French army, with Joan of Arc accompanying and the Duke of Alençon in command, took them in quick succession in mid-June: Jargeau on the 12th, where Suffolk was captured; the Meung bridge on the 15th; Beaugency, surrendered on the 17th. That same day Sir John Fastolf arrived from Paris with reinforcements, joining Talbot\'s troops.',
        'The English commanders disagreed about what to do next — Fastolf, by his own later account, urged withdrawal; Talbot insisted on standing. When Beaugency\'s fall removed the last reason to remain, the combined army began retreating north toward Janville and Paris on the morning of 18 June, with the French army following at speed. Joan, asked whether to pursue, reportedly answered that they would need good spurs, for the enemy would be beaten.'
      ]},
      { title: 'The battle', paragraphs: [
        'The English plan for facing pursuit was the standard one: find good ground, dismount, plant the archers\' stakes, and let the French break themselves on the line. Near Patay, Talbot posted some five hundred picked archers as a screen along a sunken road to buy time while the main body formed on high ground behind. It was the system of Crécy and Agincourt — but it needed minutes the French did not grant.',
        'A stag blundering through the English positions drew a shout from the hidden archers, betraying their position to the French scouts. The vanguard of French heavy cavalry — some 1,500 men under La Hire and Xaintrailles — charged immediately, without waiting for the main body. The stakes were not planted; the screen was ridden down from the flank, and the cavalry rolled straight on into the main body still forming up. Fastolf\'s mounted division, unable to reach the line in time, turned for Janville; the sight broke what remained of English cohesion, and the battle became a slaughter of infantry caught in open country by armoured horsemen.'
      ]},
      { title: 'Aftermath', paragraphs: [
        'Talbot was taken prisoner — he remained in French hands for four years — and Fastolf reached Paris with the survivors, where Bedford stripped him of the Garter for leaving the field, restoring it only after an inquiry. The English field presence between the Loire and Paris ceased to exist for the rest of the campaign season.',
        'The road north lay open, and Charles VII used it for the purpose Joan had urged from the beginning: the coronation march. Town after town opened its gates — Auxerre, Troyes, Châlons — and on 17 July 1429, twenty-nine days after Patay, Charles was anointed King of France at Reims. The battle\'s political product was the legitimacy of the Valois crown.'
      ]},
      { title: 'Significance', paragraphs: [
        'Patay demolished the myth of the invincible English tactical system by demonstrating its precondition: time to deploy. French commanders had absorbed the lessons of a century of defeats — do not charge a prepared line; strike before it exists. The mounted vanguard that won Patay was the instrument of that doctrine, and it pointed toward the professional compagnies d\'ordonnance with which Charles VII would finish the war.',
        'For the longbow itself, Patay began the eclipse that Formigny and Castillon completed a generation later, when artillery joined cavalry in making the static archer line obsolete. The weapon that had defined the war at Crécy, Poitiers, and Agincourt never won another great battle in France.'
      ]}
    ],
    sources: [
      { title: 'Wikimedia Commons image record — Vigiles de Charles VII miniature', author: 'Wikimedia Commons', type: 'image source', url: filePage('Vigiles_du_roi_Charles_VII_42.jpg') },
      { title: 'Battle of Patay — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Battle_of_Patay' },
      { title: 'The Hundred Years War, vol. 4: Cursed Kings', author: 'Jonathan Sumption', type: 'book', note: 'Covers the Loire campaign and Patay within the narrative of 1429.' }
    ],
    relatedEntries: {
      people: [
        { title: 'Joan of Arc', type: 'person', slug: 'joan-of-arc', label: 'Accompanied the pursuing army' }
      ],
      events: [
        { title: 'Siege of Orléans', type: 'event', slug: 'siege-of-orleans', label: 'The siege whose relief began the campaign' },
        { title: 'Battle of Agincourt', type: 'event', slug: 'battle-of-agincourt', label: 'The pattern Patay reversed' },
        { title: "Hundred Years' War", type: 'event', slug: 'hundred-years-war', label: 'The wider conflict' }
      ],
      locations: [
        { title: 'Kingdom of France', type: 'location', slug: 'kingdom-of-france' },
        { title: 'Kingdom of England', type: 'location', slug: 'kingdom-of-england' }
      ]
    },
    battleContinuity: {
      label: 'The reconquest gathers pace',
      battleSlug: 'battle-of-formigny',
      relationship: 'same-war',
      reason: 'Patay opened the road to Charles VII\'s coronation at Reims; two decades later his reformed royal army, now built around cannon as much as cavalry, destroyed England\'s last field force in Normandy at Formigny.'
    }
  },
  {
    id: 'battle-of-formigny',
    type: 'event',
    name: 'Battle of Formigny',
    year: 1450,
    location: 'Formigny, western Normandy',
    image: filePath('Arthur_de_Richemont_enterrant_les_morts_à_la_bataille_de_Formigny_-_BNF_NAF_5174_f40.jpg'),
    imageInfo: {
      caption: 'Arthur de Richemont burying the dead after the battle of Formigny — drawing after the lost Formigny tapestries, made for the antiquary Peiresc.',
      creator: 'After a design associated with Jean Fouquet',
      date: '17th-century copy of a 15th-century original',
      source: 'Bibliothèque nationale de France, NAF 5174, fol. 40 — via Wikimedia Commons',
      sourceUrl: filePage('Arthur_de_Richemont_enterrant_les_morts_à_la_bataille_de_Formigny_-_BNF_NAF_5174_f40.jpg'),
      note: 'A later copy of a near-contemporary commemorative image; the original tapestries are lost. Public domain.'
    },
    summary: 'On 15 April 1450 the French royal army destroyed England\'s last field force in Normandy at Formigny, using field artillery to break the longbow line; within four months the duchy was entirely French again.',
    details: 'Formigny decided the fate of Normandy. An English relief army under Sir Thomas Kyriell, some 4,000 strong, was intercepted by the Count of Clermont\'s French force; when Kyriell\'s archers formed their traditional line, two French culverins raked it from beyond bowshot, and the arrival of Arthur de Richemont\'s Breton cavalry on the flank turned disruption into annihilation. Most of the English army was killed or captured, Kyriell among the prisoners.',
    eventType: 'Battle',
    conflict: "Hundred Years' War",
    factions: ['Kingdom of France', 'Kingdom of England'],
    leaders: [
      { name: 'Jean de Bourbon, Count of Clermont', faction: 'French royal army' },
      { name: 'Arthur de Richemont, Constable of France', faction: 'Breton contingent' },
      { name: 'Sir Thomas Kyriell', faction: 'English army' }
    ],
    outcome: 'Decisive French victory; the last English field army in Normandy was destroyed and the duchy fell within months.',
    participants: [
      { side: 'French royal army', factions: [{ name: 'Kingdom of France', title: 'Kingdom of France', type: 'location', slug: 'kingdom-of-france' }], leaders: [{ name: 'Jean de Bourbon, Count of Clermont', type: 'person' }, { name: 'Arthur de Richemont, Constable of France', type: 'person' }] },
      { side: 'English army', factions: [{ name: 'Kingdom of England', title: 'Kingdom of England', type: 'location', slug: 'kingdom-of-england' }], leaders: [{ name: 'Sir Thomas Kyriell', type: 'person' }] }
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'The battle of Formigny, fought on 15 April 1450 a few miles inland from the Norman coast between Bayeux and Carentan, ended English Normandy. The army Sir Thomas Kyriell had brought from England weeks earlier — the last field force the exhausted Lancastrian government could raise — was caught between two French corps and destroyed. With no army left to relieve them, the remaining English garrisons surrendered in succession; Cherbourg, the last, fell on 12 August 1450.',
        'Formigny is often cited as one of the first battles in Western Europe decided in part by field artillery. The claim needs care — the guns disrupted rather than destroyed — but the tactical fact stands: two French cannon firing from beyond bowshot forced the English line to abandon the defensive posture that had won every great battle from Crécy to Verneuil, and cavalry did the rest.'
      ]},
      { title: 'Background', paragraphs: [
        'The truce of Tours, sealed in 1444 with Henry VI\'s marriage to Margaret of Anjou, bought Lancastrian France five years in which Charles VII rebuilt his state for war. The compagnies d\'ordonnance gave him a standing professional army; the brothers Jean and Gaspard Bureau built the finest siege and field artillery in Europe; and the taille royale paid for both. England, sliding toward the factional collapse that would become the Wars of the Roses, reformed nothing.',
        'When an English freebooter sacked the Breton town of Fougères in March 1449, Charles VII took his pretext. The reconquest of Normandy that began that summer was a procession: Rouen itself opened its gates in October 1449 after thirty years of English rule. The English government scraped together one relief army — some 2,500 men under Kyriell, later reinforced to about 4,000 — which landed at Cherbourg on 15 March 1450 and took Valognes before marching east along the coast toward Bayeux.'
      ]},
      { title: 'The battle', paragraphs: [
        'The Count of Clermont\'s corps of about 3,000 intercepted Kyriell at the village of Formigny on the afternoon of 15 April. Kyriell deployed in the old manner — dismounted men-at-arms in the centre, archers on the wings behind stakes and pits, a stream at his back — and the first French mounted attacks broke against the line exactly as tradition predicted.',
        'Then Clermont brought up two culverins and opened fire on the archers from beyond the range at which they could reply. Unable to stand and be shot, the English wings surged forward, captured the guns, and threw the French line into a confused mêlée — the crisis of the battle. At that moment Arthur de Richemont, Constable of France, arrived from Saint-Lô with some 1,200 Breton troops, appearing on the English flank across the stream. Kyriell had to bend his line into an angle mid-fight; the position broke, and the French attacked from two directions at once. There was no rout to safety — the army was surrounded and cut down where it stood. English dead were counted in the thousands; Kyriell was captured, and only fragments under Sir Matthew Gough cut their way out to Bayeux.'
      ]},
      { title: 'The fall of Normandy', paragraphs: [
        'Formigny removed the only force that might have interrupted the French reconquest, and the Bureau brothers\' siege train did the rest. Vire, Bayeux, and Avranches fell within weeks; Caen capitulated on 1 July after a short siege; and on 12 August 1450 Cherbourg surrendered. Thirty-three years of English Normandy — the conquest begun by Henry V at Caen and sealed at Rouen — ended fourteen months after the campaign began.',
        'In England the collapse fed directly into political catastrophe. The Duke of Suffolk, blamed for the losses, had already been murdered at sea in May 1450; Jack Cade\'s rebellion raised Kent in June with the loss of Normandy among its grievances. The road from Formigny runs recognisably toward St Albans in 1455 and the civil wars that followed.'
      ]},
      { title: 'Significance', paragraphs: [
        'Militarily, Formigny showed the new French army functioning as designed: professional cavalry that could fight all day, artillery integrated into field operations, and coordination between separate corps — Clermont fixing the enemy, Richemont arriving to strike the flank. Against it, the improvised English expedition fought with the tactics and the assumptions of 1415, and was destroyed by them.',
        'The battle also framed the war\'s final act. With Normandy gone, only Gascony remained of the continental empire, and the same combination — Bureau artillery and professional troops — was turned south. Three years later, at Castillon, it finished the work.'
      ]}
    ],
    sources: [
      { title: 'Wikimedia Commons image record — Peiresc copy after the Formigny tapestries', author: 'Wikimedia Commons', type: 'image source', url: filePage('Arthur_de_Richemont_enterrant_les_morts_à_la_bataille_de_Formigny_-_BNF_NAF_5174_f40.jpg') },
      { title: 'Battle of Formigny — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Battle_of_Formigny' },
      { title: 'The Hundred Years War, vol. 5: Triumph and Illusion', author: 'Jonathan Sumption', type: 'book', note: 'The fullest modern account of the fall of Lancastrian Normandy.' }
    ],
    relatedEntries: {
      events: [
        { title: 'Battle of Castillon', type: 'event', slug: 'battle-of-castillon', label: 'The war\'s final battle, three years later' },
        { title: 'Siege of Rouen', type: 'event', slug: 'siege-of-rouen', label: 'The conquest this battle undid' },
        { title: "Hundred Years' War", type: 'event', slug: 'hundred-years-war', label: 'The wider conflict' }
      ],
      locations: [
        { title: 'Duchy of Normandy', type: 'location', slug: 'duchy-of-normandy', label: 'The province regained' },
        { title: 'Rouen', type: 'location', slug: 'rouen', label: 'Recovered by France months earlier' },
        { title: 'Kingdom of France', type: 'location', slug: 'kingdom-of-france' },
        { title: 'Kingdom of England', type: 'location', slug: 'kingdom-of-england' }
      ]
    },
    battleContinuity: {
      label: "The war's final battle",
      battleSlug: 'battle-of-castillon',
      relationship: 'same-war',
      reason: 'With Normandy regained, Charles VII turned the same professional army and Bureau artillery against Gascony; at Castillon in 1453, John Talbot\'s army broke against the French gun park, and three centuries of English Aquitaine ended.'
    }
  },
  {
    id: 'battle-of-castillon',
    type: 'event',
    name: 'Battle of Castillon',
    year: 1453,
    location: 'Castillon, Gascony',
    image: filePath('Battle_of_Castillon.jpg'),
    imageInfo: {
      caption: 'The Battle of Castillon (1453), painted by Charles-Philippe Larivière for the Galerie des Batailles at Versailles, 19th century. John Talbot falls at the centre.',
      creator: 'Charles-Philippe Larivière',
      date: '19th century',
      source: 'Galerie des Batailles, Palace of Versailles — via Wikimedia Commons',
      sourceUrl: filePage('Battle_of_Castillon.jpg'),
      note: 'A romantic 19th-century historical painting, not a contemporary image; used as the clearest available depiction of the battle. Public domain.'
    },
    summary: 'On 17 July 1453 John Talbot\'s Anglo-Gascon army charged Jean Bureau\'s entrenched artillery park at Castillon and was destroyed; Talbot was killed, Bordeaux fell in October, and the Hundred Years\' War was over.',
    details: 'Castillon was the last major battle of the Hundred Years\' War and the first in which massed gunpowder artillery in a prepared position destroyed a medieval attacking army. Talbot, misled by dust clouds into believing the French were retreating, attacked their fortified camp head-on with his vanguard. Up to three hundred guns of every calibre fired into the assault at close range; when Breton cavalry struck the English flank, the army collapsed. Talbot and his son were killed.',
    eventType: 'Battle',
    conflict: "Hundred Years' War",
    factions: ['Kingdom of France', 'Kingdom of England'],
    leaders: [
      { name: 'Jean Bureau, Master of Artillery', faction: 'French royal army' },
      { name: 'John Talbot, Earl of Shrewsbury', faction: 'Anglo-Gascon army' }
    ],
    outcome: 'Decisive French victory; Talbot was killed, Gascony fell, and major fighting ended.',
    participants: [
      { side: 'French royal army', factions: [{ name: 'Kingdom of France', title: 'Kingdom of France', type: 'location', slug: 'kingdom-of-france' }], leaders: [{ name: 'Jean Bureau, Master of Artillery', type: 'person' }] },
      { side: 'Anglo-Gascon army', factions: [{ name: 'Kingdom of England', title: 'Kingdom of England', type: 'location', slug: 'kingdom-of-england' }], leaders: [{ name: 'John Talbot, Earl of Shrewsbury', type: 'person' }] }
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'The battle of Castillon, fought on 17 July 1453 beside the Dordogne east of Bordeaux, is conventionally the last battle of the Hundred Years\' War — and a landmark in military history as the first great field victory won by massed gunpowder artillery. The army of John Talbot, the aged "English Achilles", attacked a fortified French artillery camp on the strength of a false report and was shot to pieces in front of its rampart.',
        'The defeat was final in a way no earlier battle had been. Talbot was dead, no relief could be raised in an England sliding into civil war, and when Bordeaux capitulated on 19 October 1453, three hundred years of Plantagenet Aquitaine ended. No treaty was ever signed; the war simply stopped, because the English had nothing left to fight it with.'
      ]},
      { title: 'Background', paragraphs: [
        'Gascony was not Normandy: Bordeaux had been English for three centuries, its prosperity built on the wine trade with England, and when Bureau\'s armies first overran the duchy in 1451 the Bordelais soon found French taxation and rule intolerable. Their envoys invited the English back, and in October 1452 Talbot landed with a small force and retook Bordeaux to genuine local rejoicing. Reinforced in 1453 to perhaps six to ten thousand English and Gascon troops, he faced three converging French royal armies.',
        'In July 1453 one of those armies, its operations directed by the artillery master Jean Bureau, besieged the town of Castillon on the Dordogne. Bureau, expecting Talbot, did not merely besiege — he built a fortified artillery park outside the town: a ditch and rampart lined with up to three hundred guns, its rear covered by the river, garrisoned by some seven to ten thousand men. It was a trap disguised as a siege camp.'
      ]},
      { title: 'The battle', paragraphs: [
        'Talbot marched hard from Bordeaux, and at dawn on 17 July his vanguard scattered a screen of French archers posted in a priory outside the town — first blood that confirmed his instinct to press on. Then came the report that decided the battle: a great dust cloud was rising from the French camp. Talbot read it as a retreat beginning and ordered an immediate assault. The dust was the camp followers and horses being sent to the rear before the fighting.',
        'The English attacked dismounted, in the front rank Talbot himself — unarmoured and on a pony, keeping an oath sworn during his captivity after Patay never again to wear armour against the King of France. The assault reached the rampart and stayed there, in the killing ground, for perhaps an hour, as guns loaded with ball and scrap fired into it at ranges where a single shot cut files of men in half. When a thousand Breton cavalry under Peter II of Brittany came in on the right flank, the attack disintegrated. Talbot\'s pony was killed under him and he was finished with a hand-axe; his son Lord Lisle died trying to stand over the body.'
      ]},
      { title: 'The end of the war', paragraphs: [
        'Castillon surrendered the next day, and the remaining Gascon towns followed through the summer as Bureau\'s siege train came before their walls. Bordeaux, blockaded by land and river, held until 19 October 1453, then yielded on terms; this time Charles VII garrisoned it with citadels and expelled the leading English partisans. The three-century-old union of England and Aquitaine, older than the war itself, was finished.',
        'England kept only Calais — held until 1558 — and a royal title to France that its kings would not formally abandon until 1802. There was no peace treaty: the war ended by exhaustion, and within two years the veterans of Lancastrian France were fighting each other at St Albans in the opening battle of the Wars of the Roses. The same year Castillon was fought, Constantinople fell to Ottoman guns — 1453 marking, at both ends of Europe, the power of artillery over the medieval world\'s walls and battle lines.'
      ]},
      { title: 'Significance', paragraphs: [
        'Castillon inverted the tactical story the war had told since Crécy. For a century the English had won by standing on the defensive and letting the enemy attack a prepared position; at Castillon it was the French who stood in a fortified position with superior missile weapons — now guns rather than bows — and the English who broke themselves attacking it. Talbot\'s recklessness supplied the occasion, but the deeper cause was institutional: a permanent royal army with the best artillery establishment in Europe against an expedition raised by a bankrupt government.',
        'The battle\'s reputation as the "first field victory of gunpowder" should be stated precisely: guns had appeared on battlefields since Crécy itself, and at Formigny they had played a disruptive part. Castillon is the first great battle in which massed artillery, emplaced and fought as the core of the position, was the decisive arm. Warfare between armies of the old type continued for decades — but after 17 July 1453, no one could doubt what the new weapon meant.'
      ]}
    ],
    sources: [
      { title: 'Wikimedia Commons image record — Larivière, The Battle of Castillon', author: 'Wikimedia Commons', type: 'image source', url: filePage('Battle_of_Castillon.jpg') },
      { title: 'Battle of Castillon — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Battle_of_Castillon' },
      { title: 'The Hundred Years War, vol. 5: Triumph and Illusion', author: 'Jonathan Sumption', type: 'book', note: 'Definitive modern narrative of the fall of Gascony and Castillon.' }
    ],
    relatedEntries: {
      events: [
        { title: 'Battle of Formigny', type: 'event', slug: 'battle-of-formigny', label: 'The fall of Normandy, three years earlier' },
        { title: 'Battle of Patay', type: 'event', slug: 'battle-of-patay', label: 'Where Talbot swore his fatal oath' },
        { title: "Hundred Years' War", type: 'event', slug: 'hundred-years-war', label: 'The war this battle ended' },
        { title: 'Fall of Constantinople', type: 'event', slug: 'fall-of-constantinople', label: 'Artillery\'s other great victory of 1453' }
      ],
      locations: [
        { title: 'Gascony', type: 'location', slug: 'gascony', label: 'The duchy lost' },
        { title: 'Kingdom of France', type: 'location', slug: 'kingdom-of-france' },
        { title: 'Kingdom of England', type: 'location', slug: 'kingdom-of-england' }
      ]
    },
    battleContinuity: {
      label: "Return to the war's earlier phase",
      battleSlug: 'battle-of-crecy',
      relationship: 'earlier-context',
      reason: 'Castillon closed the war that Crécy had opened in 1346. To follow the whole arc — from the longbow\'s first great victory to the artillery that ended English France — return to where the fighting began.'
    }
  }
]

// Continuity rewiring on existing battles.
const continuityUpdates = {
  'battle-of-agincourt': {
    label: "Continue Henry V's campaign",
    battleSlug: 'siege-of-rouen',
    relationship: 'same-campaign',
    reason: 'Agincourt made Henry V\'s reputation, but the conquest came on his return in 1417: the six-month siege of Rouen starved Normandy\'s capital into surrender and led directly to the Treaty of Troyes, which made him heir to France.'
  }
}

// Backward links keep honest relationship semantics.
const relationshipFixes = {
  'battle-of-kosovo': 'earlier-context',
  'battle-of-las-navas-de-tolosa': 'earlier-context',
  'battle-of-gestilren': 'earlier-context'
}

const existingIds = new Set(data.events.map((e) => e.id))
for (const ev of newEvents) {
  if (existingIds.has(ev.id)) {
    console.error(`SKIP: ${ev.id} already exists`)
    continue
  }
  data.events.push(ev)
  console.log(`added event: ${ev.id}`)
}

for (const [id, continuity] of Object.entries(continuityUpdates)) {
  const ev = data.events.find((e) => e.id === id)
  if (!ev) { console.error(`missing event for continuity update: ${id}`); process.exit(1) }
  console.log(`continuity: ${id} -> ${continuity.battleSlug} (was ${ev.battleContinuity?.battleSlug})`)
  ev.battleContinuity = continuity
}

for (const [id, relationship] of Object.entries(relationshipFixes)) {
  const ev = data.events.find((e) => e.id === id)
  if (!ev?.battleContinuity) { console.error(`missing continuity for relationship fix: ${id}`); process.exit(1) }
  ev.battleContinuity.relationship = relationship
}

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2) + '\n')
console.log('done')
