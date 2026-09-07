/**
 * TRACK A, M6 — the Umayyad siege of Constantinople, 717–718.
 *
 * Two articles: the siege, and Leo III, the emperor who had held the throne for
 * five months when it began.
 *
 * MASLAMA IBN ABD AL-MALIK IS DEFERRED, and this one is worth flagging rather
 * than filing. He commanded the whole enterprise and there is no image of him in
 * any form: no portrait, no coin (he was never caliph), nothing on Commons but a
 * modern decorative calligraphy plate, and his own Wikipedia article leads with
 * the Manasses miniature of the siege — the image used here for the siege itself.
 * He is named in prose without a link, as with Vitiges (M3), Shahrbaraz (M4) and
 * Sergius and Bonus (M5). That is now four consecutive deferrals, all of them
 * non-Latin, non-Byzantine figures, which is a pattern in the archive's image
 * rule rather than a coincidence — raised with the owner in QUEUE.md.
 *
 * The source position is the mirror of M5's. For 626 there was nothing from the
 * other side at all; here there is an Arabic tradition through al-Tabari and the
 * later compilers, and it disagrees with Theophanes about almost everything
 * except the outcome. The article says which side each claim comes from.
 *
 * 626's continuity is deliberately NOT re-pointed at this siege. The selection
 * rule puts "next major event later in the same war" first, and for 626 that is
 * Nineveh. The pairing of the two sieges lives in related entries instead.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const S = (title, ...paragraphs) => ({ title, paragraphs })
const img = (f) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(f)}`

const siege = {
  id: 'siege-of-constantinople-717', type: 'event', eventType: 'Siege',
  name: 'Siege of Constantinople (717–718)',
  aliases: ['Umayyad siege of Constantinople', 'Arab siege of Constantinople'],
  year: 717,
  location: 'Constantinople',
  eventLocation: 'The Theodosian land walls, the Bosphorus and the Sea of Marmara',
  conflict: 'The Arab–Byzantine wars',
  image: img('47-cropped-manasses-chronicle.jpg'),
  imageInfo: {
    caption: 'A fourteenth-century Manasses Chronicle miniature of the Arab attack on Constantinople in the reign of Leo III, the emperor enthroned at the left.',
    creator: 'Manuscript of the Constantine Manasses Chronicle',
    date: '14th century',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:47-cropped-manasses-chronicle.jpg',
    note: 'A Bulgarian manuscript made some six centuries after the siege, and the companion of the miniature used for the Avar siege of 626 in the same chronicle. It is evidence for how the sieges were remembered in the fourteenth century, not for how they were fought. Public domain.'
  },
  sectionImages: [
    {
      section: 'Greek fire',
      src: img('Greekfire-madridskylitzes1.jpg'),
      caption: 'Greek fire projected from a bronze siphon in the bow of a Byzantine ship, in a twelfth-century Madrid Skylitzes miniature.',
      creator: 'Madrid Skylitzes manuscript',
      date: '12th century',
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Greekfire-madridskylitzes1.jpg',
      note: 'The standard surviving depiction of the weapon, and it shows a different engagement: the manuscript labels it as the fleet of the rebel Thomas the Slav, burned in 821. No image of its use in 717 exists. Public domain.'
    },
    {
      section: 'The blockade',
      src: img('Siege of Constantinople (717–718).png'),
      caption: 'The siege lines of 717–718: the Umayyad army astride the land walls, the fleet dividing the Bosphorus and the Sea of Marmara.',
      creator: 'Kandi (Wikimedia Commons)',
      date: 'modern plan of the siege',
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Siege_of_Constantinople_(717%E2%80%93718).png',
      note: 'A modern plan. It shows the problem Maslama had set himself: an investment that only works if the fleet can close the water, which is exactly what Greek fire prevented. Licensed CC BY-SA 4.0.'
    }
  ],
  summary: 'From August 717 to August 718 an Umayyad army and fleet blockaded Constantinople by land and sea. Greek fire, an exceptional winter, mass defections and a Bulgar attack destroyed the expedition, and the caliphate never tried again.',
  details: 'The most serious attempt on the city between the Avars and the Ottomans, and the one that failed most completely.',
  outcome: 'Decisive Byzantine victory; the Umayyad fleet burned, the army starved out, and the survivors wrecked on the voyage home.',
  background: 'The caliph Sulayman planned the conquest of the Roman capital; Leo III seized the Byzantine throne five months before the army arrived.',
  battle: 'The fleet was burned by Greek fire on entering the strait, the winter starved the besiegers, and the Egyptian squadrons of 718 lost their Christian crews to desertion.',
  aftermath: 'The siege was lifted on 15 August 718 and the retreating fleet was destroyed by storm. No caliphal army ever besieged the city again.',
  contentSections: [
    S('Overview',
      'The Umayyad caliphate attacked Constantinople in August 717 with an army under Maslama ibn Abd al-Malik, brother of the caliph Sulayman, and a fleet large enough to close the sea approaches. It was not a raid. The intention was to take the city and end the Roman empire, and the preparation had run for years.',
      'The city was held by Leo III, who had been emperor for five months. He had taken the throne in March from Theodosius III, and the reason the empire accepted a usurper that spring was that he was the general most likely to survive the summer.',
      'The siege lasted twelve months and destroyed the attacking force. Greek fire broke the fleet, an exceptionally hard winter starved the army, the reinforcing squadrons of 718 lost their crews to desertion, and a Bulgar army fell on the besiegers from behind. The caliphate never attempted the city again.'),
    S('Background',
      'By 717 the Arab conquests had taken Syria, Egypt, North Africa and Spain, and the Roman empire had been reduced to Anatolia, the Aegean and fragments of Italy. Constantinople had already been raided and blockaded in the 670s, and the Umayyads had learned that a fleet alone could not do it.',
      'Sulayman prepared accordingly: a land army marching through Anatolia, and a fleet to cut the city from the sea and prevent grain reaching it. The two arms together were the correct plan, and it was the plan that the Avars and Persians had failed to execute in 626 for want of ships.',
      'On the Roman side the empire had spent twenty years in political collapse, with six emperors between 695 and 717. Leo, strategos of the Anatolic theme, negotiated with Maslama during the Umayyad advance and then used the time to take Constantinople for himself. Theophanes presents this as Leo outwitting Maslama with false promises; the Arabic tradition presents Maslama as having been deceived by an ally who then turned. Both accounts are written to explain a failure or a success, and neither can be checked.'),
    S('The blockade',
      'Maslama crossed the Dardanelles at Abydos in July 717 and reached the land walls in August, where he dug a ditch and built a wall of his own facing the city — investing the defenders and covering his own rear against attack from Thrace.',
      'The fleet arrived in September and moved to close the Bosphorus and the Sea of Marmara, which was the decisive part of the plan. If the water was shut, the city would starve; the Theodosian walls had never been forced, but they could not feed anyone.',
      'The garrison\'s response was the same as in 626, and it worked for the same reason. The chain was drawn across the Golden Horn, the imperial fleet stayed inside it, and it came out to fight when the besieging ships were divided by the currents.'),
    S('Greek fire',
      'As the Umayyad squadrons moved past the city to take station in the Bosphorus, the Byzantine fleet attacked them with Greek fire — a petroleum-based incendiary pumped through bronze siphons mounted in the bows, which burned on water and could not be put out with it.',
      'The composition was a state secret and remains unrecovered; what the sources describe consistently is the effect, and the effect in September 717 was that a substantial part of the Umayyad fleet was destroyed or scattered in a single action. The survivors withdrew out of range.',
      'That single engagement decided the campaign, though it took another eleven months to become obvious. The blockade by sea was never fully re-established, supplies continued to reach the city, and an army built to besiege was left sitting outside a city better fed than it was.'),
    S('The winter',
      'The winter of 717–718 was exceptionally severe, and the sources say snow lay on the ground for a hundred days. The besieging army had provisioned for a short campaign against a city expected to fall.',
      'What follows in Theophanes is a famine account: the horses and pack animals eaten, then whatever could be dug from under the snow, then disease through a camp that could not bury its dead. The details are hostile and the numbers unusable, but the outcome is confirmed from the other side — the Arabic tradition also records the army destroyed by hunger and cold rather than by fighting.',
      'Sulayman died in the autumn of 717 and was succeeded by Umar II, who did not abandon the siege but did not reinforce it adequately either. The army spent the winter waiting for a relief that arrived too late and in the wrong form.'),
    S('The defections of 718',
      'In spring 718 two fleets arrived from Egypt and North Africa with supplies and reinforcements, and they were manned largely by Egyptian Christians. Their crews deserted to the Byzantines in large numbers, taking their ships with them and reporting where the rest were anchored.',
      'The imperial fleet went out and burned them. Constantinople had been supplied by Egypt for centuries before the conquest, and the Umayyad fleet was crewed by the same population — the caliphate had built its navy from the maritime resources of the provinces it had taken, and in 718 that dependence turned on it.',
      'A relieving army marching overland through Anatolia was ambushed and destroyed near Nicomedia in the same season. After that there was no prospect of the siege succeeding and no safe way to maintain it.'),
    S('The Bulgars',
      'The Bulgars attacked the besieging army from the north, in what the Byzantine sources present as the intervention that finished it — Theophanes gives twenty-two thousand Arab dead, which is a chronicle number rather than a count.',
      'Which Bulgar ruler led them is not settled. The intervention is traditionally credited to Khan Tervel, who had helped restore Justinian II a decade earlier and had a treaty with the empire, but Tervel\'s reign may have ended before 718 and the ruler in 718 may have been Kormesiy. The sources do not resolve it and this archive does not pretend otherwise.',
      'What is clear is the strategic point. Maslama\'s wall faced the city, and the Bulgars came at the side that was not fortified against a European enemy — the one contingency the plan had not covered.'),
    S('The withdrawal',
      'Umar II ordered the withdrawal, and the siege was lifted on 15 August 718, twelve months to the day after it had begun. The date is the feast of the Dormition of the Theotokos, and Byzantine writers made the most of it, exactly as they had with the deliverance of 626.',
      'The retreat was worse than the siege. The fleet was caught by storms in the Sea of Marmara and the Aegean, and a volcanic eruption at Thera added to the wreckage; Theophanes claims that five ships of more than two thousand reached home, which is a way of saying the losses were beyond counting rather than a figure to be believed.',
      'The Umayyads continued raiding Anatolia for decades — deep, damaging raids, one of which reached Nicaea. But no caliphal army came to the walls of Constantinople again.'),
    S('Significance',
      'The siege is usually paired with the Battle of Tours in 732 as the check on Umayyad expansion into Europe, and of the two this was the larger commitment and the heavier defeat: an imperial capital, a year-long siege, and a fleet and army destroyed together.',
      'For the empire it was the foundation of a recovery. Leo III turned a state that had lost six emperors in twenty years into one that survived, reorganised its provinces and its law, and passed the throne to his son. The Isaurian century begins here.',
      'For the city, 717 confirmed what 626 had suggested: the combination of the Theodosian walls, the chain across the Golden Horn and a fleet that could burn what came near it was not solvable by the siege technology of the age. It was solved in 1204 by getting inside the alliance, and in 1453 by artillery.'),
    S('Sources',
      'The Byzantine account is Theophanes the Confessor, writing about eighty years later and drawing on earlier material, with the patriarch Nikephoros as a shorter parallel. Both are hostile to Leo III for reasons that have nothing to do with the siege — he began the iconoclast policy their tradition detested — which makes their praise for his defence more useful than praise usually is.',
      'Unlike 626, there is a substantial account from the other side. The Arabic tradition preserved through al-Tabari and later compilers describes the expedition, the winter and the withdrawal, and disagrees with Theophanes on the negotiations, the sequence and the scale.',
      'Where they agree is on the outcome and the cause: the fire, the hunger and the winter rather than any assault on the walls. Where they disagree — above all on whether Leo deceived Maslama before taking the throne — no source can settle it, because each tradition is explaining the same event to a different audience.')
  ],
  timeline: [
    { date: 'March 717', title: 'Leo III takes the throne', description: 'The strategos of the Anatolic theme deposes Theodosius III five months before the Umayyad army arrives.' },
    { date: 'July 717', title: 'The army crosses at Abydos', description: 'Maslama ibn Abd al-Malik brings the Umayyad army across the Dardanelles into Thrace.' },
    { date: 'August 717', title: 'The siege begins', description: 'The army invests the land walls, digging a ditch and building a wall facing the city.' },
    { date: 'September 717', title: 'Greek fire breaks the fleet', description: 'Byzantine ships attack the Umayyad squadrons entering the strait and destroy a large part of them.' },
    { date: 'Winter 717–718', title: 'The hundred days of snow', description: 'An exceptionally hard winter starves the besieging army, which had provisioned for a short campaign.' },
    { date: 'Spring 718', title: 'The Egyptian fleets desert', description: 'Christian crews of the reinforcing squadrons defect to the Byzantines, who then burn the ships they left.' },
    { date: 'Summer 718', title: 'The Bulgars attack', description: 'A Bulgar army falls on the besiegers from the north; the leader is either Tervel or Kormesiy, and the sources do not settle it.' },
    { date: '15 August 718', title: 'The siege is lifted', description: 'Umar II orders the withdrawal, twelve months to the day after the army arrived.' },
    { date: 'Autumn 718', title: 'The fleet is wrecked', description: 'Storms in the Marmara and the Aegean destroy most of the returning ships.' }
  ],
  participants: [
    {
      side: 'Byzantine Empire',
      factions: [{ name: 'Byzantine Empire', title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire' }],
      leaders: [{ name: 'Leo III', title: 'Leo III', type: 'person', slug: 'leo-iii-the-isaurian' }],
      strength: { display: 'Unknown; the city garrison and the imperial fleet', confidence: 'unknown', note: 'No figure survives for the defenders. The decisive asset was not manpower but the fleet and its incendiary weapon, which is what the sources describe rather than numbers.' }
    },
    {
      side: 'Umayyad Caliphate',
      factions: [{ name: 'Umayyad Caliphate', title: 'Umayyad Caliphate', type: 'location', slug: 'umayyad-caliphate' }],
      leaders: [{ name: 'Maslama ibn Abd al-Malik' }],
      strength: { display: 'Chronicle claims 80,000–200,000 men and up to 1,800 ships; modern estimates far lower', confidence: 'chronicle-claim', note: 'The figures come from Theophanes and the Arabic compilers and cannot be reconciled with each other or with what the Umayyad state could move and feed. Maslama has no article in this archive: no image of him exists in any form.' }
    },
    {
      side: 'Bulgars',
      factions: [{ name: 'Bulgars' }],
      leaders: [{ name: 'The Bulgar ruler (Tervel or Kormesiy — the sources do not settle it)' }],
      strength: { display: 'Unknown; a field army attacking the besiegers from the north', confidence: 'unknown', note: 'No reliable figure survives. Theophanes gives 22,000 Arab dead, which is a chronicle claim about the enemy rather than a count of the Bulgar force.' }
    }
  ],
  battleContinuity: {
    label: 'Continue to the western check on the same expansion',
    battleSlug: 'battle-of-tours',
    relationship: 'same-crisis',
    reason: 'Fourteen years after the caliphate failed at Constantinople, the other end of the same expansion was stopped near Tours in 732 — the two engagements are conventionally read as the pair of defeats that fixed the limits of Umayyad conquest in Europe.'
  },
  relatedEntries: {
    people: [
      { title: 'Leo III', type: 'person', slug: 'leo-iii-the-isaurian', label: 'Emperor for five months when the army arrived' }
    ],
    events: [
      { title: 'Siege of Constantinople (626)', type: 'event', slug: 'siege-of-constantinople-626', label: 'The earlier attempt on the same walls, and the same answer' },
      { title: 'Battle of Tours', type: 'event', slug: 'battle-of-tours', label: 'The western check on the same expansion, in 732' },
      { title: 'Fall of Constantinople', type: 'event', slug: 'fall-of-constantinople', label: 'What finally solved the walls, seven centuries later' }
    ],
    locations: [
      { title: 'Constantinople', type: 'location', slug: 'constantinople', label: 'The city blockaded for twelve months' },
      { title: 'Umayyad Caliphate', type: 'location', slug: 'umayyad-caliphate', label: 'Whose army and fleet were destroyed here' },
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'The empire whose recovery begins here' }
    ]
  },
  sources: [
    { title: 'Theophanes the Confessor, Chronicle', url: 'https://en.wikipedia.org/wiki/Theophanes_the_Confessor', type: 'primary source' },
    { title: 'Al-Tabari, History of the Prophets and Kings', url: 'https://en.wikipedia.org/wiki/History_of_the_Prophets_and_Kings', type: 'primary source' },
    { title: 'Siege of Constantinople (717–718)', url: 'https://en.wikipedia.org/wiki/Siege_of_Constantinople_(717%E2%80%93718)', type: 'encyclopedia' },
    { title: 'Byzantine and Christian Museum, Athens', url: 'https://www.byzantinemuseum.gr/en/', type: 'museum collection', institution: 'Byzantine and Christian Museum' }
  ]
}

const leo = {
  id: 'leo-iii-the-isaurian', type: 'character', name: 'Leo III',
  aliases: ['Leo III the Isaurian', 'Leo the Isaurian', 'Leon III', 'Konon'],
  born: 685, died: 741, deathAge: 'about 56',
  causeOfDeath: 'Died of dropsy at Constantinople in June 741.',
  restingPlace: 'Church of the Holy Apostles, Constantinople',
  location: 'Constantinople',
  title: 'Emperor of the Romans',
  roles: ['Emperor', 'Commander'],
  image: img('Solidus-Leo III and Constantine V-sb1504.jpg'),
  imageInfo: {
    caption: 'A gold solidus of about 737–741 showing Leo III on the obverse and his son and heir Constantine V on the reverse.',
    creator: 'Constantinople mint',
    date: 'c. 737–741',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Solidus-Leo_III_and_Constantine_V-sb1504.jpg',
    note: 'A contemporary object struck in his own reign, used because no portrait of Leo III exists — and could not: he removed images of Christ and the saints from public display, and later iconophile writers had no interest in preserving his likeness. The bust is a conventional image of imperial office rather than a portrait. Licensed CC BY-SA 3.0.'
  },
  sectionImages: [
    {
      section: 'Iconoclasm',
      src: img('Emperor Leo III had the images of saints destroyed, 726–729.jpg'),
      caption: 'An 1868 engraving imagining Leo III ordering the destruction of images, from a Viennese history of the popes.',
      creator: 'J. N. Schönberg and others, in Patuzzi, Geschichte der Päpste (Vienna, 1868)',
      date: '1868',
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Emperor_Leo_III_had_the_images_of_saints_destroyed,_726%E2%80%93729.jpg',
      note: 'A nineteenth-century imagining, not evidence, and included because it shows the shape the story had taken by then: a tyrant ordering sacred art smashed in front of horrified clergy. What Leo actually legislated, and when, is far less certain than this picture suggests. Public domain.'
    }
  ],
  summary: 'Leo III ruled the eastern empire from 717 to 741, held Constantinople through a twelve-month Umayyad siege in the first year of his reign, and began the iconoclast policy that made his memory a battleground.',
  overview: 'The general who saved the empire and then legislated the thing its historians could never forgive, which is why almost everything written about him was written by people who hated him.',
  greatestFeats: [
    'Held Constantinople against the Umayyad siege of 717–718 in his first year as emperor',
    'Ended twenty years of imperial instability and founded a dynasty that lasted to 802',
    'Issued the Ecloga, a shortened and practical revision of Roman law'
  ],
  birth: { date: 'c. 685', place: { name: 'Germanikeia, in northern Syria' } },
  death: { date: '741', place: { name: 'Constantinople', slug: 'constantinople' }, circumstance: 'Died of dropsy in June 741 after twenty-four years on the throne, succeeded without dispute by his son.' },
  quickFacts: { realm: 'Eastern Roman Empire', dynasty: 'Isaurian dynasty', culture: 'Roman, of Syrian origin', knownFor: 'Saving Constantinople in 717–718 and beginning iconoclasm' },
  isRuler: true,
  succession: {
    office: 'Emperor of the Romans',
    predecessor: { displayName: 'Theodosius III', note: 'A reluctant emperor raised by a mutiny, who abdicated in March 717 and became a monk rather than fight Leo with an Umayyad army approaching. No article yet in this archive.' },
    successor: { displayName: 'Constantine V', note: 'His son, crowned co-emperor as a child and sole emperor from 741; he continued and hardened his father\'s religious policy. Article planned for Track A M7.' }
  },
  contentSections: [
    S('Overview',
      'Leo III came to the throne in March 717 and spent his first year as emperor under siege. An Umayyad army and fleet arrived in August intending to take the city and end the empire, and twelve months later they were gone, the fleet burned and the army starved.',
      'That single achievement would have secured his reputation. Instead his name is attached to iconoclasm — the removal of religious images from churches and public places — and the writers who preserved the seventh and eighth centuries were the party that eventually defeated it.',
      'The result is an unusually distorted record. The same authors who describe his defence of the city with something close to admiration explain the rest of his reign as the work of a heretic, and there is almost no independent tradition to set against them.'),
    S('Birth and early life',
      'He was born in the 680s at Germanikeia in northern Syria, in territory the caliphate had taken, and his birth name was Konon. His family was resettled in Thrace under Justinian II, which is how a Syrian provincial ended up in imperial service.',
      'The epithet "the Isaurian" attached to him and to his dynasty is probably a mistake. Isauria is in southern Anatolia and he was not from it; the label appears in later sources and has stuck to the dynasty regardless of the geography.',
      'He rose through the reign of Justinian II — a diplomatic mission to the Caucasus, then command of the Anatolic theme, the largest and most exposed of the military provinces. By 716 he was the senior soldier facing the Umayyad advance, and the empire had spent twenty years going through emperors at a rate of one every three or four years.'),
    S('Character and Personality',
      'Reading his character requires allowing for the source problem throughout. Theophanes and Nikephoros wrote after iconoclasm had been defeated and regarded him as the man who began it, so praise from them is more reliable than criticism.',
      'What survives of that praise is consistently practical: a commander who prepared, who used the fleet rather than trusting the walls alone, who kept the city fed, and who was not panicked by a year of blockade. His negotiation with Maslama before the siege — whether it was a deception or an understanding that later broke down — shows a man comfortable operating on both sides of a frontier he had grown up on.',
      'The hostile material describes a hard, obstinate ruler who forced a religious policy on an unwilling church and city. Some of that is likely true and some is the standard vocabulary applied to any emperor the tradition condemned. What cannot be recovered is his own account of why he did it: nothing he wrote about images survives except through the pens of people refuting him.'),
    S('The seizure of power',
      'In 716 the Umayyads advanced through Anatolia under Maslama, and Leo, as strategos of the Anatolics, dealt with him directly. The Byzantine tradition says he strung Maslama along with promises of submission and used the delay to march on the capital; the Arabic tradition says Maslama supported him and was betrayed.',
      'Theodosius III, an unwilling emperor raised by a mutiny of the Opsikian troops, saw what was coming and made terms. He abdicated in March 717 and entered a monastery, and Leo was crowned in Hagia Sophia.',
      'It was a usurpation, the sixth in twenty years, and it was accepted because the alternative was facing the largest invasion in living memory under a man nobody thought capable of it.'),
    S('The siege of 717–718',
      'The Umayyad army reached the land walls in August 717 and built its own wall facing the city; the fleet came in September to close the Bosphorus and starve it out. Leo\'s answer was the fleet and the fire.',
      'Byzantine ships attacked the squadrons as they moved into the strait and destroyed much of the fleet with Greek fire, and the sea blockade was never properly re-established. The besiegers spent a brutal winter outside a city that was still being supplied, lost their Egyptian reinforcement squadrons to mass desertion in the spring, and were attacked from the north by the Bulgars.',
      'The siege was lifted on 15 August 718 and the returning fleet was wrecked by storms. Leo had been emperor for seventeen months and had destroyed the offensive capability the caliphate had spent years assembling.'),
    S('Government and law',
      'The rest of the reign was reconstruction. He continued the reorganisation of the provinces into themes — military districts under a strategos, which put soldiers on land they had a reason to defend — and split the oversized Anatolic and Opsikian commands that had produced so many usurpers, including himself.',
      'In 726 he issued the Ecloga, a short practical revision of Justinian\'s law in Greek rather than Latin, aimed at judges who had to use it. It reduced the death penalty in favour of mutilation — which reads as barbarous now and was intended as leniency then — and strengthened protections in marriage and inheritance for wives and children.',
      'He also restored the state\'s finances and its frontier defence to the point where the Umayyad raids of the 720s and 730s, damaging as they were, no longer threatened the empire\'s existence. In 740 he and his son beat a major raiding army at Akroinon in Phrygia.'),
    S('Iconoclasm',
      'From the 720s Leo moved against religious images. The traditional account has him removing the icon of Christ from the Chalke gate of the palace in 726 and issuing an edict against images in 730, deposing the patriarch Germanos when he refused to comply.',
      'Every element of that account comes from writers of the winning side a century or more later, and modern scholarship has questioned the Chalke episode, the dating and the scope. What can be said is that the policy existed, that it had real support in the army and the eastern provinces, and that it was not the private eccentricity the iconophile tradition presents.',
      'Why he did it is genuinely unknown. Contemporaries reached for the volcanic eruption at Thera in 726 as a sign of divine anger; historians have proposed the influence of Islamic and Jewish objections to images, the argument that God had favoured the empire\'s enemies, or a bid to assert imperial authority over the church. All are inference. He left no statement of his own.'),
    S('Legacy',
      'He founded a dynasty that ruled until 802 and handed on a state that could survive. The empire he inherited had lost six emperors in twenty years and most of its territory; the empire he left had beaten the caliphate at its walls, reorganised its provinces and army, and rewritten its law.',
      'Iconoclasm outlived him by more than a century and was then condemned, and with it went any chance of a balanced record. His son Constantine V, who pursued the policy harder, was given the nickname Kopronymos by the tradition that beat him, which is a fair measure of how these emperors were remembered.',
      'The 717–718 siege remains the achievement nobody disputes, including his enemies. It is the reason the eastern empire existed to be argued over at all.')
  ],
  timeline: [
    { date: 'c. 685', title: 'Born', description: 'Born Konon at Germanikeia in northern Syria; his family is later resettled in Thrace.' },
    { date: 'c. 713', title: 'Strategos of the Anatolics', description: 'Given command of the largest and most exposed military province of the empire.' },
    { date: 'March 717', title: 'Crowned emperor', description: 'Theodosius III abdicates rather than fight him with an Umayyad invasion approaching.' },
    { date: '717–718', title: 'The siege of Constantinople', description: 'Holds the city through a twelve-month Umayyad blockade by land and sea.', links: [{ title: 'Siege of Constantinople (717–718)', type: 'event', slug: 'siege-of-constantinople-717' }] },
    { date: '726', title: 'The Ecloga', description: 'Issues a short practical revision of Roman law in Greek, aimed at the judges who had to apply it.' },
    { date: '726–730', title: 'Iconoclasm begins', description: 'Moves against religious images and deposes the patriarch Germanos; the details rest on later hostile sources.' },
    { date: '740', title: 'Victory at Akroinon', description: 'He and his son Constantine destroy a major Umayyad raiding army in Phrygia.' },
    { date: '741', title: 'Died', description: 'Dies of dropsy in June, succeeded without dispute by Constantine V.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Heraclius', type: 'person', slug: 'heraclius', label: 'Beat Persia and lost the east to the Arabs; Leo stopped the same expansion at the walls' }
    ],
    events: [
      { title: 'Siege of Constantinople (717–718)', type: 'event', slug: 'siege-of-constantinople-717', label: 'His first year as emperor' },
      { title: 'Siege of Constantinople (626)', type: 'event', slug: 'siege-of-constantinople-626', label: 'The earlier siege whose defence his repeated' }
    ],
    locations: [
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'The realm he ruled and stabilised' },
      { title: 'Constantinople', type: 'location', slug: 'constantinople', label: 'The city he held in 717–718' },
      { title: 'Umayyad Caliphate', type: 'location', slug: 'umayyad-caliphate', label: 'The power he defeated at the walls' }
    ]
  },
  sources: [
    { title: 'Theophanes the Confessor, Chronicle', url: 'https://en.wikipedia.org/wiki/Theophanes_the_Confessor', type: 'primary source' },
    { title: 'The Ecloga', url: 'https://en.wikipedia.org/wiki/Ecloga', type: 'primary source' },
    { title: 'Leo III the Isaurian', url: 'https://en.wikipedia.org/wiki/Leo_III_the_Isaurian', type: 'encyclopedia' },
    { title: 'Dumbarton Oaks — Byzantine Collection', url: 'https://www.doaks.org/resources/coins', type: 'museum collection', institution: 'Dumbarton Oaks' }
  ]
}

data.events.push(siege)
data.characters.push(leo)

// ── Link the new material into what already exists (bidirectional) ─────────────
const push = (arr, item) => { if (!arr.some((x) => x.slug === item.slug)) arr.push(item) }
const loc = (id) => data.locations.find((l) => l.id === id)
const chr = (id) => data.characters.find((c) => c.id === id)
const evt = (id) => data.events.find((e) => e.id === id)

const siegeRef = (label) => ({ title: 'Siege of Constantinople (717–718)', type: 'event', slug: 'siege-of-constantinople-717', label })
const leoRef = (label) => ({ title: 'Leo III', type: 'person', slug: 'leo-iii-the-isaurian', label })

const byz = loc('byzantine-empire')
push((byz.relatedEntries.events ??= []), siegeRef('The twelve-month Umayyad siege it survived in 717–718'))
push((byz.relatedEntries.people ??= []), leoRef('Emperor 717–741; held the city and began iconoclasm'))

const cpl = loc('constantinople')
push((cpl.relatedEntries.events ??= []), siegeRef('Blockaded by land and sea for twelve months in 717–718'))
push((cpl.relatedEntries.people ??= []), leoRef('Held the city through the siege of 717–718'))

const umayyad = loc('umayyad-caliphate')
push((umayyad.relatedEntries.events ??= []), siegeRef('Where its army and fleet were destroyed in 717–718'))

const tours = evt('battle-of-tours')
push((tours.relatedEntries.events ??= []), siegeRef('The eastern check on the same expansion, fourteen years earlier'))

const siege626 = evt('siege-of-constantinople-626')
push((siege626.relatedEntries.events ??= []), siegeRef('The next attempt on the same walls, and the same answer'))

const hera = chr('heraclius')
push((hera.relatedEntries.people ??= []), leoRef('Stopped at the walls the expansion that took Heraclius\'s eastern provinces'))

console.log('+ events     : siege-of-constantinople-717')
console.log('+ characters : leo-iii-the-isaurian')
console.log('~ linked     : byzantine-empire, constantinople, umayyad-caliphate,')
console.log('               battle-of-tours, siege-of-constantinople-626, heraclius')

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`\nM6 written — characters ${data.characters.length}, locations ${data.locations.length}, events ${data.events.length}`)
