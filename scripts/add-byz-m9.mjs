/**
 * TRACK A, M9 — the eastern conquests, 962–969.
 *
 * Eight articles: the sack of Aleppo (962), the conquest of Cilicia (964–965),
 * the conquest of Cyprus (965), the fall of Antioch (969), the Hamdanid Emirate
 * of Aleppo as the opponent realm, and John Tzimiskes, Michael Bourtzes and
 * Sayf al-Dawla.
 *
 * The agreed correction lands here and it is the best story in the milestone.
 * **Antioch was taken by Michael Bourtzes and Peter the Stratopedarch against
 * Nikephoros's express intent** — he had forbidden a storm, wanting the city to
 * surrender intact — and Bourtzes was dismissed for winning. Two months later he
 * was one of the men who murdered the emperor in his bedchamber. M8 told the end
 * of that story before this milestone told the beginning.
 *
 * The second agreed correction: **Cyprus was taken by Niketas Chalkoutzes, not
 * by Nikephoros personally.**
 *
 * Cilicia and Cyprus are `eventType: "War"` because they are campaigns rather
 * than single engagements, which also keeps the archive from inventing strength
 * figures for operations that ran over two years. Only Battle and Siege carry
 * `participants[].strength` and `battleContinuity`.
 *
 * CONTINUITY: Chandax is re-pointed off Manzikert onto Aleppo — nearer and
 * forward, which the selection rule prefers over the M8 note's suggestion of
 * Antioch. The chain now runs Lalakaon → Chandax → Aleppo → Antioch → Manzikert.
 *
 * IMAGE CAVEAT — the weakest in the batch, flagged rather than buried. The only
 * two images on Commons that name Michael Bourtzes are the Skylitzes miniature of
 * Antioch, which this milestone uses for the siege itself, and a nineteenth-
 * century costume plate from the New York Public Library's Vinkhuijzen
 * collection. The plate is used for his article under the archive's "later
 * artwork, honestly captioned" rule, and the caption says plainly that it is a
 * costume study and not a likeness. If the owner would rather defer him than
 * carry it, that is a reasonable call and the article can be pulled.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const S = (title, ...paragraphs) => ({ title, paragraphs })
const img = (f) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(f)}`

// ── Events ────────────────────────────────────────────────────────────────────

const aleppo = {
  id: 'siege-of-aleppo-962', type: 'event', eventType: 'Siege', name: 'Sack of Aleppo',
  aliases: ['Sack of Aleppo (962)', 'Byzantine capture of Aleppo'],
  year: 962,
  location: 'Aleppo, in northern Syria',
  eventLocation: 'Aleppo, the capital of the Hamdanid emirate',
  conflict: 'The Byzantine eastern conquests',
  image: img('Phokas captures Halep 962.jpg'),
  imageInfo: {
    caption: 'The Byzantine army under Nikephoros Phokas takes Aleppo, in a Madrid Skylitzes miniature.',
    creator: 'Madrid Skylitzes manuscript',
    date: '12th–13th century',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Phokas_captures_Halep_962.jpg',
    note: 'Painted two to three centuries after the event. The manuscript uses the Greek name Berrhoea for the city, which is what Byzantine writers called Aleppo. Public domain.'
  },
  summary: 'In December 962 Nikephoros Phokas and John Tzimiskes stormed and sacked Aleppo, the capital of the Hamdanid emir Sayf al-Dawla. The citadel held, but the emirate never recovered.',
  details: 'A sack rather than a conquest — and the moment the strongest Muslim power on the Syrian frontier stopped being a threat.',
  outcome: 'Byzantine victory; the city sacked and Sayf al-Dawla driven out, though the citadel was not taken.',
  background: 'Sayf al-Dawla had raided Byzantine Anatolia for twenty years; by 962 the balance of the frontier had turned decisively against him.',
  battle: 'The Byzantine army stormed the walls and sacked the city over several days while the garrison held out in the citadel.',
  aftermath: 'Sayf al-Dawla returned to a ruined capital and never campaigned effectively again; he died in 967.',
  contentSections: [
    S('Overview',
      'In the winter of 962 a Byzantine army under Nikephoros Phokas, with John Tzimiskes commanding under him, crossed into Syria and took Aleppo — the seat of Sayf al-Dawla, the Hamdanid emir who had been the empire\'s most persistent enemy on the eastern frontier for two decades.',
      'The city was stormed and sacked. The citadel, on its great mound in the centre, was not taken and held out, so this was not a conquest: the Byzantines left with the plunder rather than a province.',
      'What it destroyed was not the emirate but its capacity. Sayf al-Dawla came back to a wrecked capital, a scattered army and a lost treasury, and the frontier war that had run since the 940s effectively ended with him on the defensive for the rest of his life.'),
    S('Background',
      'Sayf al-Dawla had made Aleppo the centre of resistance to Byzantine expansion, raiding into Anatolia year after year in the 940s and early 950s, and the empire had not always got the better of it.',
      'The turn came in the mid-950s. Nikephoros Phokas and his family took over the eastern commands, the theme armies were reinforced by the new professional regiments, and the raids started to be intercepted rather than absorbed. By 960 Sayf al-Dawla had lost his field army twice.',
      'The reconquest of Crete in 961 freed the fleet and the treasury for exactly this. Nikephoros sailed back from Chandax, celebrated a triumph, and was in Cilicia the following campaigning season.'),
    S('The sack',
      'The army came through the passes in the late autumn of 962, took the Hamdanid palace outside the walls, and then stormed the city itself in December. Sayf al-Dawla escaped with what he could.',
      'The plunder was enormous even by the standards of a period that measured success in it, and the accounts on both sides dwell on the scale of what was carried off, along with thousands of captives.',
      'The citadel is the reason this is a sack and not a capture. Aleppo\'s fortress sits on a steep artificial mound in the middle of the city and could hold out long after the walls were breached, and it did. The Byzantines burned what they could reach and withdrew.'),
    S('Aftermath',
      'Sayf al-Dawla returned to rule a capital that had been gutted and an emirate whose military reputation had gone with it. He was already ill, and he died in Aleppo in February 967 without recovering the initiative.',
      'For Nikephoros the campaign confirmed what Crete had established. Within a year of the sack he had been proclaimed emperor by his army, and the eastern offensive became state policy rather than a general\'s enterprise.',
      'Aleppo itself became a Byzantine tributary in 969 rather than a Byzantine possession — the empire took Antioch and left the emirate standing as a client, which is a distinction the following century would test.'),
    S('Significance',
      'This is the campaign that broke the last organised Muslim power on the northern Syrian frontier. Everything the empire took in the next seven years — Cilicia, Cyprus, Antioch — was taken against a region that had lost its principal defender here.',
      'It also established the partnership that would define the decade and then destroy itself. Nikephoros and John Tzimiskes campaigned together at Aleppo; seven years later Tzimiskes murdered him and took his throne.',
      'And it is a useful corrective to the idea of the reconquest as a steady advance. The empire could sack the greatest city in northern Syria in 962 and still not hold it, because storming walls and holding territory were different problems.')
  ],
  timeline: [
    { date: '944', title: 'Sayf al-Dawla takes Aleppo', description: 'The Hamdanid prince establishes the emirate that becomes the centre of frontier resistance.' },
    { date: '950s', title: 'The balance turns', description: 'The Phokas family takes over the eastern commands and Sayf al-Dawla begins losing field armies.' },
    { date: '961', title: 'Crete retaken', description: 'The Cretan victory frees the Byzantine fleet and treasury for the Syrian frontier.', links: [{ title: 'Siege of Chandax', type: 'event', slug: 'siege-of-chandax' }] },
    { date: 'December 962', title: 'Aleppo stormed', description: 'Nikephoros Phokas and John Tzimiskes sack the city; the citadel holds and the emir escapes.' },
    { date: '963', title: 'Nikephoros proclaimed emperor', description: 'Within a year of the sack the army raises its commander to the throne.' },
    { date: '967', title: 'Death of Sayf al-Dawla', description: 'The emir dies at Aleppo, having never recovered the initiative after the sack.' }
  ],
  participants: [
    {
      side: 'Byzantine Empire',
      factions: [{ name: 'Byzantine Empire', title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire' }],
      leaders: [
        { name: 'Nikephoros II Phokas', title: 'Nikephoros II Phokas', type: 'person', slug: 'nikephoros-ii-phokas' },
        { name: 'John I Tzimiskes', title: 'John I Tzimiskes', type: 'person', slug: 'john-i-tzimiskes' }
      ],
      strength: { display: 'Unknown; a full eastern field army', confidence: 'unknown', note: 'No reliable figure survives. The force was the eastern army reinforced after the Cretan expedition returned, and the sources are more interested in the plunder than in its size.' }
    },
    {
      side: 'Hamdanid Emirate of Aleppo',
      factions: [{ name: 'Hamdanid Emirate of Aleppo', title: 'Hamdanid Emirate of Aleppo', type: 'location', slug: 'hamdanid-emirate-of-aleppo' }],
      leaders: [{ name: 'Sayf al-Dawla', title: 'Sayf al-Dawla', type: 'person', slug: 'sayf-al-dawla' }],
      strength: { display: 'Unknown; the emirate\'s remaining forces and the city garrison', confidence: 'unknown', note: 'Sayf al-Dawla had lost field armies twice in the preceding decade and what he had at Aleppo is not recorded. The citadel garrison held out after the city fell.' }
    }
  ],
  battleContinuity: {
    label: 'Continue to the city the empire actually kept',
    battleSlug: 'siege-of-antioch-969',
    relationship: 'same-war',
    reason: 'Aleppo was sacked and abandoned because the citadel held; seven years later at Antioch the empire took a greater city outright and kept it, and made Aleppo a tributary rather than a target.'
  },
  relatedEntries: {
    people: [
      { title: 'Nikephoros II Phokas', type: 'person', slug: 'nikephoros-ii-phokas', label: 'Commanded the campaign' },
      { title: 'Sayf al-Dawla', type: 'person', slug: 'sayf-al-dawla', label: 'Lost his capital here' },
      { title: 'John I Tzimiskes', type: 'person', slug: 'john-i-tzimiskes', label: 'Served under Nikephoros in the campaign' }
    ],
    events: [
      { title: 'Siege of Chandax', type: 'event', slug: 'siege-of-chandax', label: 'The victory that freed the resources for this' },
      { title: 'Siege of Antioch (969)', type: 'event', slug: 'siege-of-antioch-969', label: 'Where the empire took and kept a Syrian city' }
    ],
    locations: [
      { title: 'Hamdanid Emirate of Aleppo', type: 'location', slug: 'hamdanid-emirate-of-aleppo', label: 'Whose capital this was' },
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'Whose eastern offensive begins in earnest here' }
    ]
  },
  sources: [
    { title: 'Leo the Deacon, History', url: 'https://en.wikipedia.org/wiki/Leo_the_Deacon', type: 'primary source' },
    { title: 'Yahya of Antioch, Chronicle', url: 'https://en.wikipedia.org/wiki/Yahya_of_Antioch', type: 'primary source' },
    { title: 'Sack of Aleppo (962)', url: 'https://en.wikipedia.org/wiki/Sack_of_Aleppo_(962)', type: 'encyclopedia' },
    { title: 'Biblioteca Nacional de España — Madrid Skylitzes', url: 'https://www.bne.es/en', type: 'museum collection', institution: 'Biblioteca Nacional de España' }
  ]
}

const cilicia = {
  id: 'byzantine-conquest-of-cilicia', type: 'event', eventType: 'War',
  name: 'Byzantine conquest of Cilicia',
  aliases: ['Conquest of Cilicia'],
  year: 964,
  location: 'Cilicia, in south-eastern Anatolia',
  eventLocation: 'The Cilician plain, between the Taurus mountains and the sea',
  conflict: 'The Byzantine eastern conquests',
  image: img('Map of the Byzantine Empire, 1025 AD.svg'),
  imageInfo: {
    caption: 'The Byzantine Empire in 1025, holding Cilicia, Cyprus, Crete and the Syrian corner won in the campaigns of the 960s.',
    creator: 'Wikimedia Commons contributor',
    date: 'modern map of the empire in 1025',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Map_of_the_Byzantine_Empire,_1025_AD.svg',
    note: 'A modern map showing the result rather than the campaign — sixty years after Cilicia fell, at the empire\'s greatest medieval extent. The south-eastern corner is what these two years bought. Public domain.'
  },
  summary: 'In 964 and 965 Nikephoros II Phokas took the Cilician plain city by city, opening the passes through the Taurus that Arab armies had used against Anatolia for three centuries.',
  details: 'Not a battle but a methodical two-year reduction of fortified cities.',
  outcome: 'Cilicia annexed; Mopsuestia stormed in July 965 and Tarsus surrendered in August.',
  background: 'Cilicia was the base of the frontier raiding, and its passes were the door into Anatolia.',
  contentSections: [
    S('Overview',
      'Cilicia is a coastal plain shut off from Anatolia by the Taurus mountains and from Syria by the Amanus, and the passes through them — the Cilician Gates above all — are the reason it mattered. For three centuries Arab armies had used them to enter Anatolia, and the fortified cities of the plain existed to support that traffic.',
      'Nikephoros II Phokas took the whole of it in two campaigning seasons, in 964 and 965, and he did it the way he did everything: methodically, city by city, with a supply system behind him.',
      'When it was finished the empire held the passes from the southern side for the first time since the seventh century, and the strategic problem that had defined the eastern frontier since the Arab conquests simply ceased to exist.'),
    S('The campaign of 964',
      'The first season took the inland cities. Anazarbus fell and was destroyed, Adana was taken, and the smaller fortresses of the plain were reduced or abandoned.',
      'The two great prizes — Mopsuestia on the Pyramus and Tarsus, the largest city of the plain — were left for the following year, because both were strongly walled and neither could be starved out in a single season.',
      'The pattern of the campaign is the pattern of all Nikephoros\'s work: no dramatic engagement, a great deal of fortification and supply, and an enemy given no opportunity to fight the sort of battle that might have gone differently.'),
    S('Mopsuestia and Tarsus',
      'In July 965 Mopsuestia was taken by mining: the Byzantines dug beneath a section of wall, propped it, fired the props and brought the wall down, then stormed the breach. The population was deported.',
      'Tarsus held out until August. With Mopsuestia gone and no relief possible from a Syria that had lost Aleppo three years earlier, the city negotiated, and it was allowed to surrender on terms — the inhabitants could leave with what they could carry, and many went to Syria.',
      'Nikephoros entered Tarsus in August 965 and the conquest of the plain was complete. The great mosque was converted, and the region was resettled over the following years with Greeks and Armenians.'),
    S('Consequences',
      'The Cilician Gates in Byzantine hands changed the arithmetic of the whole frontier. Anatolia could no longer be raided from Syria without first fighting through territory the empire held and fortified, and the annual campaign season that had shaped both societies for three hundred years ended.',
      'It also gave the empire a base for what came next. Antioch is a week\'s march from the Cilician plain, and Cyprus is visible from its coast in clear weather; both fell within four years of Tarsus.',
      'The resettlement had a long tail. Armenian communities established in Cilicia in this period grew, and after the Seljuk conquest of the Armenian highlands they became the basis of the Armenian kingdom of Cilicia — a state that outlived Byzantine rule in the region by two centuries.')
  ],
  timeline: [
    { date: '962', title: 'Aleppo sacked', description: 'The principal Muslim power in northern Syria loses its capital and its capacity to relieve Cilicia.', links: [{ title: 'Sack of Aleppo', type: 'event', slug: 'siege-of-aleppo-962' }] },
    { date: '964', title: 'Anazarbus and Adana', description: 'The inland cities of the Cilician plain are taken in the first campaigning season.' },
    { date: 'July 965', title: 'Mopsuestia stormed', description: 'The walls are mined and brought down, and the city is taken and its population deported.' },
    { date: 'August 965', title: 'Tarsus surrenders', description: 'The largest city of the plain negotiates terms; the inhabitants are allowed to leave for Syria.' },
    { date: '965', title: 'Cilicia annexed', description: 'The plain is organised as Byzantine territory and resettled with Greeks and Armenians.' },
    { date: '969', title: 'Antioch falls', description: 'The base Cilicia provided makes the conquest of northern Syria possible.', links: [{ title: 'Siege of Antioch (969)', type: 'event', slug: 'siege-of-antioch-969' }] }
  ],
  relatedEntries: {
    people: [
      { title: 'Nikephoros II Phokas', type: 'person', slug: 'nikephoros-ii-phokas', label: 'Commanded both campaigning seasons' }
    ],
    events: [
      { title: 'Sack of Aleppo', type: 'event', slug: 'siege-of-aleppo-962', label: 'Which removed any prospect of relief' },
      { title: 'Siege of Antioch (969)', type: 'event', slug: 'siege-of-antioch-969', label: 'What the Cilician base made possible' },
      { title: 'Byzantine conquest of Cyprus', type: 'event', slug: 'byzantine-conquest-of-cyprus', label: 'Taken in the same year, from the same coast' }
    ],
    locations: [
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'Which held the Taurus passes from the south for the first time since the 600s' },
      { title: 'Hamdanid Emirate of Aleppo', type: 'location', slug: 'hamdanid-emirate-of-aleppo', label: 'Too weakened to intervene' }
    ]
  },
  sources: [
    { title: 'Leo the Deacon, History', url: 'https://en.wikipedia.org/wiki/Leo_the_Deacon', type: 'primary source' },
    { title: 'Byzantine conquest of Cilicia', url: 'https://en.wikipedia.org/wiki/Cilicia', type: 'encyclopedia' },
    { title: 'Dumbarton Oaks — Byzantine studies', url: 'https://www.doaks.org/research/byzantine', type: 'academic resource', institution: 'Dumbarton Oaks' }
  ]
}

const cyprus = {
  id: 'byzantine-conquest-of-cyprus', type: 'event', eventType: 'War',
  name: 'Byzantine conquest of Cyprus',
  aliases: ['Reconquest of Cyprus'],
  year: 965,
  location: 'Cyprus',
  eventLocation: 'The island of Cyprus, in the eastern Mediterranean',
  conflict: 'The Byzantine eastern conquests',
  image: img('Kyrenia 01-2017 img03 Castle Byzantine chapel.jpg'),
  imageInfo: {
    caption: 'A Byzantine chapel inside the castle at Kyrenia on the north coast of Cyprus.',
    creator: 'A. Savin',
    date: 'photographed 2017',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Kyrenia_01-2017_img03_Castle_Byzantine_chapel.jpg',
    note: 'A surviving Byzantine building on the island, photographed in the modern era. Cyprus has no monument specific to the annexation of 965; this stands for the Byzantine centuries that followed it. Licensed under the Free Art License.'
  },
  summary: 'In 965 a Byzantine expedition under Niketas Chalkoutzes annexed Cyprus outright, ending an extraordinary arrangement under which the island had been shared between the empire and the caliphate for nearly three centuries.',
  details: 'The end of the longest-running condominium in medieval politics.',
  outcome: 'Cyprus annexed and organised as a Byzantine theme.',
  background: 'Since 688 the island had paid its taxes to both Constantinople and Damascus, and been governed by neither alone.',
  contentSections: [
    S('Overview',
      'Cyprus in 965 was not conquered from an enemy so much as removed from a shared arrangement. Since a treaty of 688 between Justinian II and the caliph Abd al-Malik, the island had occupied a genuinely strange position: neutral ground, its revenues divided between the two empires, garrisoned by neither.',
      'The arrangement lasted, with interruptions, for nearly three hundred years — longer than most medieval states — and it survived because both powers found a demilitarised island in the middle of the eastern Mediterranean more useful than a contested one.',
      'In 965 Nikephoros II ended it. An expedition under the patrician Niketas Chalkoutzes took the island, and Cyprus was organised as a Byzantine theme.'),
    S('The condominium',
      'The 688 agreement is one of the more remarkable documents of the early medieval Mediterranean. Cyprus paid tax to Constantinople and to Damascus in equal shares; neither side was to fortify it; and its inhabitants lived under a local administration that answered to both and to neither.',
      'It broke down repeatedly. Justinian II deported much of the population to the Hellespont in 691 and had to allow them back; Arab fleets used the island as a staging point in the eighth century; Byzantine expeditions raided it in the ninth. But the framework kept re-forming, because it kept suiting both sides.',
      'What ended it was the change in the balance. Once the empire held Crete, Cilicia and a fleet that could dominate the sea lanes, an island that was formally half-Muslim in the middle of Byzantine waters was an anomaly rather than a convenience.'),
    S('The annexation',
      'The expedition of 965 was commanded by Niketas Chalkoutzes, a patrician and naval officer, and this is worth stating plainly because popular accounts routinely give the credit to Nikephoros II in person. He was not there; he was in Cilicia and then in the capital.',
      'The operation itself was small and is barely described. There was resistance from the Muslim community on the island and it was overcome quickly, and no siege of consequence is recorded.',
      'Cyprus became a theme with a strategos, and remained Byzantine for the next two centuries until Richard the Lionheart took it during the Third Crusade and sold it on.'),
    S('Significance',
      'The strategic value was in the sea lanes. Cyprus sits off the Syrian and Cilician coasts, and holding it meant that any fleet moving between Egypt, Syria and the Aegean did so under Byzantine observation.',
      'Combined with Crete four years earlier and Cilicia in the same year, it completed Byzantine control of the eastern Mediterranean, and it is why the empire could supply and reinforce Antioch after 969 without difficulty.',
      'The condominium\'s end is also the more interesting historical loss. For three centuries two empires at more or less permanent war had maintained a shared, demilitarised island between them, and the arrangement worked. It is a reminder that the frontier was never only a place where armies met.')
  ],
  timeline: [
    { date: '688', title: 'The condominium agreed', description: 'Justinian II and the caliph Abd al-Malik agree to share the island\'s revenues and fortify it for neither side.' },
    { date: '691', title: 'The first breakdown', description: 'Justinian II deports much of the population to the Hellespont, then has to permit their return.' },
    { date: '8th–9th centuries', title: 'Repeated violations', description: 'Arab fleets use the island as a staging point and Byzantine expeditions raid it; the framework re-forms each time.' },
    { date: '961', title: 'Crete retaken', description: 'The balance at sea shifts decisively toward Constantinople.', links: [{ title: 'Siege of Chandax', type: 'event', slug: 'siege-of-chandax' }] },
    { date: '965', title: 'Cyprus annexed', description: 'Niketas Chalkoutzes takes the island and it is organised as a Byzantine theme.' },
    { date: '1191', title: 'Lost to the crusaders', description: 'Richard the Lionheart takes Cyprus during the Third Crusade and sells it on.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Nikephoros II Phokas', type: 'person', slug: 'nikephoros-ii-phokas', label: 'Ordered the annexation, though he did not command it' }
    ],
    events: [
      { title: 'Byzantine conquest of Cilicia', type: 'event', slug: 'byzantine-conquest-of-cilicia', label: 'Taken in the same year, on the facing coast' },
      { title: 'Siege of Chandax', type: 'event', slug: 'siege-of-chandax', label: 'The victory that made Byzantine sea power decisive' }
    ],
    locations: [
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'Which completed its control of the eastern sea lanes' },
      { title: 'Constantinople', type: 'location', slug: 'constantinople', label: 'Which had shared the island\'s revenues since 688' }
    ]
  },
  sources: [
    { title: 'Leo the Deacon, History', url: 'https://en.wikipedia.org/wiki/Leo_the_Deacon', type: 'primary source' },
    { title: 'Byzantine Cyprus', url: 'https://en.wikipedia.org/wiki/Cyprus_in_the_Middle_Ages', type: 'encyclopedia' },
    { title: 'Dumbarton Oaks — Byzantine studies', url: 'https://www.doaks.org/research/byzantine', type: 'academic resource', institution: 'Dumbarton Oaks' }
  ]
}

const antioch = {
  id: 'siege-of-antioch-969', type: 'event', eventType: 'Siege', name: 'Siege of Antioch (969)',
  aliases: ['Byzantine recovery of Antioch', 'Fall of Antioch (969)'],
  year: 969,
  location: 'Antioch, in northern Syria',
  eventLocation: 'Antioch on the Orontes, beneath Mount Silpius',
  conflict: 'The Byzantine eastern conquests',
  image: img('Fall of Antioch in 969.png'),
  imageInfo: {
    caption: 'A Byzantine soldier climbing a scaling ladder onto the wall of Antioch, with the command tent below, in a Madrid Skylitzes miniature.',
    creator: 'Madrid Skylitzes manuscript',
    date: '12th–13th century',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Fall_of_Antioch_in_969.png',
    note: 'The manuscript names Michael Bourtzes as the commander who took the city on 28 October 969 — which is the point of the story, since he did it against the emperor\'s express orders. Public domain.'
  },
  summary: 'On 28 October 969 Michael Bourtzes seized a tower on the wall of Antioch with three hundred men and held it until the army came up. He had been ordered not to attack, and was dismissed for succeeding.',
  details: 'The greatest recovery of the reconquest, and its commander was disgraced for it.',
  outcome: 'Decisive Byzantine victory; Antioch taken after 331 years and held permanently until 1084.',
  background: 'Nikephoros II had blockaded the city and forbidden an assault, wanting it to surrender intact rather than be sacked.',
  battle: 'Bourtzes and three hundred men took a tower on a cold October night and held it for three days until Peter the Stratopedarch arrived with the army.',
  aftermath: 'Bourtzes was dismissed for disobedience and joined the conspiracy that murdered Nikephoros two months later.',
  contentSections: [
    S('Overview',
      'Antioch had been in Muslim hands since 638 — one of the great cities of the ancient world, a patriarchal see of the Christian church, and the place whose loss had symbolised the Arab conquest of the east more than any other.',
      'It fell on 28 October 969 to a night escalade by Michael Bourtzes and about three hundred men, who seized a tower on the wall and held it for three days until the main army arrived.',
      'The emperor had ordered them not to do it. Nikephoros II wanted Antioch to surrender on terms and had forbidden an assault, and when he learned the city had been stormed he dismissed Bourtzes from his command. Two months later Bourtzes was one of the men who killed him.'),
    S('Background',
      'Nikephoros had been working towards Antioch for years. Cilicia was taken in 964–965, giving him a base and the passes; the Hamdanids had lost Aleppo in 962 and their emir in 967; and by 968 he was campaigning through Syria almost unopposed.',
      'Rather than storm the city he blockaded it. He built a fort at Baghras commanding the road, left a covering force under Michael Bourtzes and Peter the Stratopedarch, and went back to Constantinople expecting hunger to do the work.',
      'His reasoning was not squeamishness. A city taken by storm was, by the customs of the age, a city sacked — and Nikephoros wanted Antioch as a functioning provincial capital with its Christian population and its walls intact, not as a ruin. He is said to have forbidden an assault explicitly.'),
    S('The escalade',
      'Bourtzes had been gathering intelligence from inside the city and had made contact with a man who indicated a weak point in the defences. On a cold night in late October, with the garrison thin, he took about three hundred men up scaling ladders and seized two towers on the wall above the slope of Mount Silpius.',
      'Holding them was the hard part. The garrison counterattacked for three days while Bourtzes\'s men were cut off on the wall, and messages went back to Peter the Stratopedarch begging him to bring the army up.',
      'Peter came, the walls were taken, and the city fell. The sack that followed was the one Nikephoros had tried to prevent, though the city and its population survived it well enough to become the empire\'s eastern capital within a few years.'),
    S('The commander who was punished for winning',
      'Nikephoros\'s response was to dismiss Bourtzes. The order had been explicit and had been disobeyed, and the emperor was a disciplinarian who had built his career on doing what he had planned rather than what looked good at the time.',
      'It was, as a matter of command, defensible. As politics it was catastrophic. Bourtzes was a great aristocrat of the eastern military class, publicly humiliated for the most celebrated feat of arms of the reign, and he did not accept it.',
      'On the night of 10–11 December 969, six weeks after Antioch fell, Michael Bourtzes was among the conspirators who entered the palace with John Tzimiskes and killed Nikephoros II in his bedchamber. The emperor who had spent his reign taking cities was murdered by the man who took the greatest of them.'),
    S('Aftermath',
      'Antioch stayed Byzantine for 115 years. It became the seat of a duke, the anchor of the empire\'s Syrian position, and a great city again — Yahya of Antioch, one of the sources for this whole period, wrote there under Byzantine rule.',
      'Aleppo became a tributary the following year rather than a conquest, and the frontier settled on a line the empire held comfortably until the Seljuk Turks arrived in the 1070s. Antioch fell to them in 1084 and was taken by the First Crusade in 1098.',
      'Bourtzes prospered under the regime he had helped install, and much later commanded at Antioch himself as its duke.'),
    S('Significance',
      'Antioch is the high-water mark of the Byzantine reconquest in the east. Nothing taken afterwards mattered as much, and nothing was held as long.',
      'For the archive it also carries the sharpest illustration of a theme running through this whole track: the gap between what an emperor decides and what his commanders on the spot actually do. The city fell because a subordinate disobeyed, and the empire gained a province and lost a ruler in the same season.',
      'The chain of consequence is unusually tight. Crete made Nikephoros emperor; Cilicia gave him Antioch\'s approaches; Antioch made Bourtzes an enemy; and Bourtzes helped kill him nine weeks later.')
  ],
  timeline: [
    { date: '638', title: 'Antioch lost', description: 'The city falls to the Arab conquest, and stays in Muslim hands for 331 years.' },
    { date: '964–965', title: 'Cilicia taken', description: 'Nikephoros secures the passes and the plain that give access to northern Syria.', links: [{ title: 'Byzantine conquest of Cilicia', type: 'event', slug: 'byzantine-conquest-of-cilicia' }] },
    { date: '968', title: 'The blockade', description: 'Nikephoros builds a fort at Baghras, leaves a covering force, and forbids an assault on the city.' },
    { date: '28 October 969', title: 'The escalade', description: 'Bourtzes takes two towers with three hundred men and holds them for three days until Peter arrives with the army.' },
    { date: 'November 969', title: 'Bourtzes dismissed', description: 'The emperor removes him from command for disobeying the order not to attack.' },
    { date: '10–11 December 969', title: 'Nikephoros murdered', description: 'Bourtzes joins the conspiracy under John Tzimiskes that kills the emperor in the palace.' },
    { date: '1084', title: 'Antioch lost again', description: 'The city falls to the Seljuk Turks after 115 years of Byzantine rule.' }
  ],
  participants: [
    {
      side: 'Byzantine Empire',
      factions: [{ name: 'Byzantine Empire', title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire' }],
      leaders: [
        { name: 'Michael Bourtzes', title: 'Michael Bourtzes', type: 'person', slug: 'michael-bourtzes' },
        { name: 'Peter the Stratopedarch', note: 'No article: the eunuch general who brought the army up to hold what Bourtzes had seized. No image of him exists, and he is known almost entirely from this campaign.' }
      ],
      strength: { display: 'c. 300 in the escalade, with the covering army behind it', confidence: 'estimated', note: 'The figure of about three hundred for the party that seized the towers is consistent across the sources. The size of the covering force under Peter is not recorded.' }
    },
    {
      side: 'Antioch',
      factions: [{ name: 'Hamdanid Emirate of Aleppo', title: 'Hamdanid Emirate of Aleppo', type: 'location', slug: 'hamdanid-emirate-of-aleppo' }],
      leaders: [{ name: 'The city garrison (no commander is named)', note: 'Not a gap in this archive: the sources describe the defence without naming its commander, the city having been under blockade and reduced governance for a year.' }],
      strength: { display: 'Unknown; a garrison thinned by a year of blockade', confidence: 'unknown', note: 'No figures survive. The escalade succeeded partly because the walls were undermanned on a cold night after a long blockade.' }
    }
  ],
  battleContinuity: {
    label: 'Continue to where the eastern frontier collapsed',
    battleSlug: 'battle-of-manzikert',
    relationship: 'same-region',
    reason: 'Antioch was the high-water mark of the reconquest and the empire held it for 115 years; Manzikert in 1071 opened Anatolia to the Seljuks, and Antioch itself was lost to them thirteen years later.'
  },
  relatedEntries: {
    people: [
      { title: 'Michael Bourtzes', type: 'person', slug: 'michael-bourtzes', label: 'Took the city against orders, and was dismissed for it' },
      { title: 'Nikephoros II Phokas', type: 'person', slug: 'nikephoros-ii-phokas', label: 'Forbade the assault, and was murdered nine weeks later' }
    ],
    events: [
      { title: 'Sack of Aleppo', type: 'event', slug: 'siege-of-aleppo-962', label: 'The campaign that removed Syria\'s defender' },
      { title: 'Byzantine conquest of Cilicia', type: 'event', slug: 'byzantine-conquest-of-cilicia', label: 'Which gave the army its base and its road' }
    ],
    locations: [
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'Which held the city for the next 115 years' },
      { title: 'Hamdanid Emirate of Aleppo', type: 'location', slug: 'hamdanid-emirate-of-aleppo', label: 'Reduced to a tributary the following year' }
    ]
  },
  sources: [
    { title: 'Leo the Deacon, History', url: 'https://en.wikipedia.org/wiki/Leo_the_Deacon', type: 'primary source' },
    { title: 'Yahya of Antioch, Chronicle', url: 'https://en.wikipedia.org/wiki/Yahya_of_Antioch', type: 'primary source' },
    { title: 'Siege of Antioch (968–969)', url: 'https://en.wikipedia.org/wiki/Siege_of_Antioch_(968%E2%80%93969)', type: 'encyclopedia' },
    { title: 'Biblioteca Nacional de España — Madrid Skylitzes', url: 'https://www.bne.es/en', type: 'museum collection', institution: 'Biblioteca Nacional de España' }
  ]
}

// ── Realm ─────────────────────────────────────────────────────────────────────

const hamdanids = {
  id: 'hamdanid-emirate-of-aleppo', type: 'location', locationType: 'Emirate',
  name: 'Hamdanid Emirate of Aleppo', aliases: ['Hamdanids', 'Hamdanid dynasty', 'Emirate of Aleppo'],
  kingdom: 'Hamdanid Emirate of Aleppo', year: 945,
  image: img('Citadel of Aleppo.jpg'),
  imageInfo: {
    caption: 'The citadel of Aleppo on its mound above the city, the fortress that held out when the Byzantines sacked the town in 962.',
    creator: 'Memorino',
    date: 'photographed 2010',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Citadel_of_Aleppo.jpg',
    note: 'The mound and its defensive role are ancient, but almost all the masonry visible here is Ayyubid work of the twelfth and thirteenth centuries, two hundred years after the Hamdanids. It shows the position that saved the citadel in 962, not the fortress Sayf al-Dawla knew. Licensed CC BY-SA 3.0.'
  },
  sectionImages: [
    {
      section: 'Major rulers',
      src: img('Hamdanid gold dinar, Nasir al-Dawla and Sayf al-Dawla.jpg'),
      caption: 'A Hamdanid gold dinar naming Nasir al-Dawla and his brother Sayf al-Dawla, struck in 943–944.',
      creator: 'Hamdanid mint, Madinat al-Salam',
      date: 'AH 331 / AD 943–944',
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Hamdanid_gold_dinar,_Nasir_al-Dawla_and_Sayf_al-Dawla.jpg',
      note: 'A contemporary object naming both brothers, struck the year before Sayf al-Dawla took Aleppo. Public domain.'
    }
  ],
  summary: 'The Hamdanid emirate of Aleppo was the Arab frontier state that fought Byzantium for northern Syria in the tenth century, and the court of the poet al-Mutanabbi and the philosopher al-Farabi.',
  overview: 'A small emirate that carried the whole weight of resistance to the Byzantine reconquest, and produced the most celebrated literary court of its century while losing.',
  knownFor: [
    'Founded when Sayf al-Dawla took Aleppo in 944, as Abbasid central authority collapsed.',
    'Fought the Byzantine empire for northern Syria for more than twenty years.',
    'Its court patronised al-Mutanabbi, the most celebrated poet in Arabic, and the philosopher al-Farabi.',
    'Lost its capital to a Byzantine sack in 962 and became a Byzantine tributary in 970.',
    'Survived as a client state until the Mirdasids replaced the dynasty in 1004.'
  ],
  contentSections: [
    S('Overview',
      'The Hamdanids were an Arab dynasty of the Banu Taghlib who governed Mosul for the Abbasids and then, as caliphal authority disintegrated in the tenth century, governed for themselves. In 944 one of them, Ali ibn Abi al-Hayja — known by his title Sayf al-Dawla, "Sword of the Dynasty" — took Aleppo and made it the seat of an independent emirate.',
      'For the next twenty-five years that emirate was the principal military obstacle to Byzantine expansion in northern Syria, and it fought that war essentially alone: the caliphate could not help, Egypt would not, and the other frontier emirates had already been broken.',
      'It is remembered as much for its court as for its wars. Sayf al-Dawla\'s Aleppo drew al-Mutanabbi, whose poems in his praise are among the most famous in the Arabic language, and the philosopher al-Farabi, who died there.'),
    S('Foundation',
      'The Hamdanid rise is a symptom of Abbasid collapse. The family held Mosul and the Jazira as governors, and in the 940s, with caliphs in Baghdad controlled by their own soldiery, the brothers Nasir al-Dawla and Sayf al-Dawla converted governorship into possession.',
      'Sayf al-Dawla took Aleppo in 944 and, after a struggle with the Ikhshidids of Egypt over Damascus, settled for northern Syria and the frontier. The division of the family holdings — Mosul to his brother, Aleppo to him — left him with the more dangerous half.',
      'The emirate\'s legitimacy was still formally Abbasid: coins named the caliph, and the titles came from Baghdad. Its actual position was that of an independent frontier state whose neighbours were the Byzantine empire and other people\'s ambitions.'),
    S('The Byzantine war',
      'Sayf al-Dawla spent his reign raiding into Byzantine Anatolia and defending against raids in return, and for the first decade he did well enough to become the empire\'s most notorious opponent since the emirs of Melitene.',
      'From the mid-950s it went wrong. The Phokas family took over the eastern commands, the Byzantine army was reorganised and reinforced, and Sayf al-Dawla lost field armies at intervals — including a catastrophe in 960 when his army was destroyed in the passes on its way home.',
      'The end came in December 962, when Nikephoros Phokas and John Tzimiskes stormed Aleppo itself and sacked it. The citadel held out, so the emirate survived, but its treasury, its army and its standing did not recover.'),
    S('Major rulers',
      'The dynasty at Aleppo is short and dominated by its founder.',
      'Sayf al-Dawla ruled from 944 to 967 and is the figure everything else attaches to: the frontier war, the poets, the collapse. His son Sa\'d al-Dawla succeeded him and spent his reign, from 967 to 991, keeping the emirate alive between two much stronger powers — accepting Byzantine suzerainty in 970 and paying tribute.',
      'Sa\'id al-Dawla followed him and the dynasty ended in 1004, when its own ghulam commander pushed the family aside and the Mirdasids eventually took over. The emirate outlived its independence by more than thirty years.'),
    S('The court',
      'Aleppo under Sayf al-Dawla is one of the great literary courts of the Islamic middle ages, and this is not an ornament to the political story but part of it: a frontier emir at war with a Christian empire had every reason to fund poets who could make the war mean something.',
      'Al-Mutanabbi, generally regarded as the greatest poet in the Arabic language, spent nine years there and wrote the panegyrics that made Sayf al-Dawla a permanent figure in Arabic literature. The relationship ended badly, as such relationships did, and the poet left for Egypt.',
      'Al-Farabi, the philosopher who did more than anyone to bring Aristotle into Arabic thought, spent his last years at the court and died in Damascus in 950 while attached to it. Abu Firas, the emir\'s cousin, was a poet of the first rank himself and wrote much of his best work as a Byzantine prisoner.'),
    S('Decline and end',
      'After 962 the emirate was a state waiting to find out who would absorb it. Nikephoros took Cilicia and then Antioch; in 970 Sa\'d al-Dawla accepted Byzantine suzerainty, paying tribute and acknowledging the empire\'s protection.',
      'That arrangement suited Constantinople better than annexation. A client emirate at Aleppo was a buffer against the Fatimids of Egypt, who were the new power in the region and who besieged the city repeatedly in the 990s — Basil II marched from Bulgaria to relieve it in 995.',
      'The Hamdanids were removed by their own servants in 1004 and the Mirdasids succeeded them. Aleppo remained a contested buffer between Byzantium and Egypt until the Seljuks changed the question entirely.'),
    S('Legacy',
      'The emirate is the clearest case in this archive of a small state whose cultural memory has entirely outlived its political record. Sayf al-Dawla lost, comprehensively, to an empire that took his capital, his frontier and eventually his family\'s independence — and he is remembered because al-Mutanabbi wrote about him.',
      'Its military record deserves better than it usually gets. For twenty years a single frontier emirate held the line against an empire that had already destroyed Melitene and Crete, and it did so with no support from any larger Muslim power.',
      'For the Byzantine story the Hamdanids are the last organised opponent of the reconquest. After Aleppo there was no Muslim field army in northern Syria capable of contesting the empire, and Antioch fell seven years later.')
  ],
  timeline: [
    { date: '944', title: 'Sayf al-Dawla takes Aleppo', description: 'The Hamdanid prince establishes an independent emirate on the Byzantine frontier as Abbasid authority collapses.' },
    { date: '940s–950s', title: 'The frontier war', description: 'Annual raiding into Byzantine Anatolia and Byzantine counter-raids into Syria.' },
    { date: 'c. 948–957', title: 'Al-Mutanabbi at court', description: 'The greatest poet in Arabic spends nine years at Aleppo writing panegyrics for the emir.' },
    { date: '960', title: 'The army destroyed in the passes', description: 'A returning Hamdanid army is caught and annihilated by Leo Phokas, and the initiative is lost for good.' },
    { date: '962', title: 'Aleppo sacked', description: 'Nikephoros Phokas and John Tzimiskes storm the city; the citadel holds but the emirate is broken.', links: [{ title: 'Sack of Aleppo', type: 'event', slug: 'siege-of-aleppo-962' }] },
    { date: '967', title: 'Death of Sayf al-Dawla', description: 'The founder dies at Aleppo, paralysed by illness, his frontier lost.' },
    { date: '969', title: 'Antioch falls', description: 'The Byzantines take northern Syria\'s greatest city; the emirate is surrounded.', links: [{ title: 'Siege of Antioch (969)', type: 'event', slug: 'siege-of-antioch-969' }] },
    { date: '970', title: 'A Byzantine tributary', description: 'Sa\'d al-Dawla accepts Byzantine suzerainty and pays tribute; Aleppo becomes a buffer state.' },
    { date: '995', title: 'Basil II relieves Aleppo', description: 'The emperor marches from Bulgaria to break a Fatimid siege of his own client city.' },
    { date: '1004', title: 'The dynasty ends', description: 'The Hamdanids are pushed aside by their own commanders; the Mirdasids eventually succeed them.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Sayf al-Dawla', type: 'person', slug: 'sayf-al-dawla', label: 'Its founder and the emir of the frontier war' },
      { title: 'Nikephoros II Phokas', type: 'person', slug: 'nikephoros-ii-phokas', label: 'Who sacked its capital and took its frontier' }
    ],
    events: [
      { title: 'Sack of Aleppo', type: 'event', slug: 'siege-of-aleppo-962', label: 'Where its capital was stormed' },
      { title: 'Siege of Antioch (969)', type: 'event', slug: 'siege-of-antioch-969', label: 'Which left it surrounded and made it a tributary' }
    ],
    locations: [
      { title: 'Abbasid Caliphate', type: 'location', slug: 'abbasid-caliphate', label: 'Whose collapse it was founded in' },
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'Its opponent, and eventually its overlord' },
      { title: 'Emirate of Melitene', type: 'location', slug: 'emirate-of-melitene', label: 'The frontier emirate it succeeded as the empire\'s chief enemy' }
    ]
  },
  sources: [
    { title: 'Yahya of Antioch, Chronicle', url: 'https://en.wikipedia.org/wiki/Yahya_of_Antioch', type: 'primary source' },
    { title: 'Hamdanid dynasty', url: 'https://en.wikipedia.org/wiki/Hamdanid_dynasty', type: 'encyclopedia' },
    { title: 'The Metropolitan Museum of Art — Islamic art collection', url: 'https://www.metmuseum.org/about-the-met/collection-areas/islamic-art', type: 'museum collection', institution: 'The Metropolitan Museum of Art' }
  ]
}

// Antioch itself. Added because the content-quality gate refused the milestone
// without it, and the refusal was right: the phrase "Siege of Antioch" could not
// resolve, because unlike Constantinople the city had no article for it to
// resolve to. The archive has been naming Antioch since M7 and describing it as
// the greatest prize of the reconquest while having nothing to send a reader to.
const antiochCity = {
  id: 'antioch', type: 'location', locationType: 'City',
  name: 'Antioch', aliases: ['Antakya', 'Antioch on the Orontes', 'Antiocheia'],
  kingdom: 'Byzantine Empire', kingdomId: 'byzantine-empire',
  image: img('Habib-i Neccar Mosque Antakya.jpg'),
  imageInfo: {
    caption: 'The Habib-i Neccar mosque in Antakya, founded after the Arab conquest of 638 on the site of a Byzantine church, with the slopes of Mount Silpius behind it.',
    creator: 'Selin Gücüm',
    date: 'photographed 2018',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Habib-i_Neccar_Mosque_Antakya.jpg',
    note: 'The foundation is the oldest mosque site in Anatolia and marks the conquest of 638 exactly — a church converted when the city changed hands. The visible fabric is largely later rebuilding after repeated earthquakes, and the building was severely damaged again in 2023. The mountain behind is Silpius, whose walls Michael Bourtzes climbed in 969. Licensed CC BY-SA 4.0.'
  },
  summary: 'Antioch on the Orontes was one of the great cities of the ancient world, a patriarchal see of the Christian church, and the prize both sides fought over for six centuries of Byzantine and Muslim warfare.',
  overview: 'A city that changed hands between Rome, Persia, the caliphate, Byzantium, the crusaders and the Mamluks, and was destroyed by earthquakes almost as often as by armies.',
  knownFor: [
    'Founded about 300 BC by Seleucus I and grown into one of the largest cities of the Roman world.',
    'Where the followers of Jesus were first called Christians, and one of the five patriarchates of the early church.',
    'Sacked by the Persians under Khosrow I in 540 and lost to the Arab conquest in 638.',
    'Recovered by the Byzantines in 969 and held for 115 years.',
    'Taken by the First Crusade in 1098 and destroyed by the Mamluk sultan Baibars in 1268.'
  ],
  contentSections: [
    S('Overview',
      'Antioch stands on the Orontes where the river cuts between Mount Silpius and the plain, on the road that joins Anatolia to Syria. That position made it one of the largest cities of the Roman empire and the reason it was fought over for a thousand years.',
      'It was a Greek foundation, a Roman metropolis, a patriarchal see of the Christian church, a Persian conquest, an Arab frontier capital, a Byzantine province, a crusader principality and finally a ruin.',
      'For this archive it is the great prize of the eastern reconquest — the city Nikephoros II spent years working towards and whose capture in 969 cost him his life nine weeks later.'),
    S('The ancient city',
      'Seleucus I founded it about 300 BC as a capital for the Seleucid empire, and under Rome it became the administrative centre of the province of Syria and, by most estimates, the third city of the empire after Rome and Alexandria.',
      'Its Christian importance is older than its imperial importance. The Acts of the Apostles records that the followers of Jesus were first called Christians at Antioch, and its bishop became one of the five patriarchs of the early church alongside Rome, Constantinople, Alexandria and Jerusalem.',
      'It was also catastrophically unlucky in its geology. The city sits near a major fault, and earthquakes levelled it repeatedly — in 115, in 526 when tens of thousands died, and many times since, including the destruction of much of modern Antakya in 2023.'),
    S('Persians, Arabs and the long loss',
      'In 540 the Sasanian king Khosrow I took and sacked the city and deported much of its population to a purpose-built settlement near Ctesiphon. Justinian I rebuilt it, but it never recovered its ancient scale.',
      'In 638, six years after the death of Muhammad, it fell to the Arab conquest along with the rest of Syria. It became a frontier city of the caliphate, its walls maintained and its Christian population substantial but subordinate, and it stayed in Muslim hands for 331 years.',
      'The Byzantine empire never stopped regarding it as its own. The patriarchate of Antioch continued in exile and in place, and every emperor who campaigned in the east had it in view.'),
    S('The Byzantine century',
      'Nikephoros II Phokas took Cilicia in 964–965 to open the road and then blockaded the city rather than storming it, wanting a working provincial capital rather than a sack. On 28 October 969 Michael Bourtzes disobeyed him, took the walls by escalade, and the city fell.',
      'It became the seat of a Byzantine duke and the anchor of the empire\'s Syrian position for 115 years — a genuinely prosperous period in which the historian Yahya of Antioch wrote, and which supplied much of what this archive knows about the tenth-century east.',
      'It ended with the Seljuk Turks, who took the city in 1084, thirteen years after Manzikert had opened Anatolia to them.'),
    S('Crusaders and destruction',
      'The First Crusade besieged Antioch for eight months in 1097–1098, took it, and was then besieged inside it by a relieving Muslim army — the episode that produced the discovery of the Holy Lance and one of the strangest reversals in crusading history.',
      'Bohemond of Taranto kept the city rather than handing it to the Byzantine emperor as the crusade\'s agreements required, and the principality of Antioch that resulted was one of the four crusader states and a source of Byzantine grievance for a century.',
      'The end came in 1268, when the Mamluk sultan Baibars took the city and destroyed it. The massacre and enslavement that followed were exceptional even by the standards of the period, and Antioch never again became a city of consequence.'),
    S('Legacy',
      'What survives is a Turkish provincial city, Antakya, on a fraction of the ancient footprint, with the Habib-i Neccar mosque marking the conquest of 638 and long stretches of wall still visible on the slopes of Mount Silpius.',
      'Its place in the archive is as a marker of where the frontier was. Antioch in Muslim hands means the empire is on the defensive; Antioch Byzantine means the reconquest has succeeded; Antioch crusader means the eastern Mediterranean has a new set of actors in it.',
      'And its patriarchate outlived all of them. The see founded in the first century still exists, though its holders have not lived in the city for a very long time.')
  ],
  timeline: [
    { date: 'c. 300 BC', title: 'Founded', description: 'Seleucus I founds the city on the Orontes as a Seleucid capital.' },
    { date: '1st century', title: 'A patriarchal see', description: 'The followers of Jesus are first called Christians here, and the bishopric becomes one of the five patriarchates.' },
    { date: '526', title: 'Earthquake', description: 'A catastrophic earthquake kills tens of thousands and levels much of the city.' },
    { date: '540', title: 'Sacked by Khosrow I', description: 'The Sasanian king takes the city and deports its population to a new settlement near Ctesiphon.' },
    { date: '638', title: 'Lost to the Arab conquest', description: 'The city falls with the rest of Syria and remains in Muslim hands for 331 years.' },
    { date: '969', title: 'Recovered by Byzantium', description: 'Michael Bourtzes takes the walls by escalade against the emperor\'s orders.', links: [{ title: 'Siege of Antioch (969)', type: 'event', slug: 'siege-of-antioch-969' }] },
    { date: '1084', title: 'Taken by the Seljuks', description: 'The city falls to the Turks thirteen years after Manzikert.' },
    { date: '1098', title: 'Taken by the First Crusade', description: 'An eight-month siege ends with the crusaders inside and then themselves besieged.' },
    { date: '1268', title: 'Destroyed by Baibars', description: 'The Mamluk sultan takes and destroys the city; it never recovers.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Michael Bourtzes', type: 'person', slug: 'michael-bourtzes', label: 'Took its walls in 969' },
      { title: 'Nikephoros II Phokas', type: 'person', slug: 'nikephoros-ii-phokas', label: 'Spent years working towards it, and forbade the assault that won it' }
    ],
    events: [
      { title: 'Siege of Antioch (969)', type: 'event', slug: 'siege-of-antioch-969', label: 'Its recovery after 331 years' },
      { title: 'Byzantine conquest of Cilicia', type: 'event', slug: 'byzantine-conquest-of-cilicia', label: 'The campaign that opened the road to it' }
    ],
    locations: [
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'Which held it from 969 to 1084' },
      { title: 'Sasanian Empire', type: 'location', slug: 'sasanian-empire', label: 'Whose king sacked it in 540' },
      { title: 'Crusader States', type: 'location', slug: 'crusader-states', label: 'One of which was the principality founded here in 1098' }
    ]
  },
  sources: [
    { title: 'Procopius, History of the Wars', url: 'https://en.wikipedia.org/wiki/History_of_the_Wars', type: 'primary source' },
    { title: 'Yahya of Antioch, Chronicle', url: 'https://en.wikipedia.org/wiki/Yahya_of_Antioch', type: 'primary source' },
    { title: 'Antioch', url: 'https://en.wikipedia.org/wiki/Antioch', type: 'encyclopedia' },
    { title: 'Dumbarton Oaks — Byzantine studies', url: 'https://www.doaks.org/research/byzantine', type: 'academic resource', institution: 'Dumbarton Oaks' }
  ]
}

// ── People ────────────────────────────────────────────────────────────────────

const tzimiskes = {
  id: 'john-i-tzimiskes', type: 'character', name: 'John I Tzimiskes',
  aliases: ['John Tzimiskes', 'Ioannes I Tzimiskes', 'John I'],
  born: 925, died: 976, deathAge: 'about 51',
  causeOfDeath: 'Died in January 976 returning from campaign in Syria, of an illness his contemporaries suspected was poison.',
  restingPlace: 'Church of Christ Chalkites, Constantinople',
  location: 'Constantinople',
  title: 'Emperor of the Romans',
  roles: ['Emperor', 'Commander'],
  image: img('Coronation of John Tzimiskes.jpg'),
  imageInfo: {
    caption: 'The patriarch crowning John Tzimiskes, in a Madrid Skylitzes miniature.',
    creator: 'Madrid Skylitzes manuscript',
    date: '12th–13th century',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Coronation_of_John_Tzimiskes.jpg',
    note: 'A manuscript image painted centuries later. The coronation it shows was not straightforward: the patriarch Polyeuctus refused to crown him until he had done public penance for murdering his predecessor, expelled the empress and punished the other conspirators. Public domain.'
  },
  summary: 'John I Tzimiskes murdered Nikephoros II in 969, took the throne, destroyed the Rus\' invasion of Bulgaria, and campaigned deep into Syria before dying in 976.',
  overview: 'A first-rate general who came to the throne by assassination and was made to atone for it publicly before he was allowed to wear the crown.',
  greatestFeats: [
    'Destroyed Sviatoslav\'s Rus\' army at Dorostolon in 971 and annexed eastern Bulgaria',
    'Campaigned through Syria as far as the approaches to Jerusalem in 974–975',
    'Held together the eastern conquests he had helped Nikephoros win'
  ],
  birth: { date: 'c. 925', place: { name: 'Armenia, in the Byzantine east' } },
  death: { date: '976', place: { name: 'Constantinople', slug: 'constantinople' }, circumstance: 'Died in January 976 on returning from Syria; poisoning by the chamberlain Basil Lekapenos was widely suspected and never proved.' },
  quickFacts: { realm: 'Eastern Roman Empire', dynasty: 'Kourkouas family', culture: 'Roman, of Armenian descent', knownFor: 'Murdering his predecessor and then ruling well' },
  isRuler: true,
  succession: {
    office: 'Emperor of the Romans',
    predecessor: { personSlug: 'nikephoros-ii-phokas', displayName: 'Nikephoros II Phokas', note: 'His commander, his kinsman by marriage, and the man he murdered in the palace on the night of 10–11 December 969.' },
    successor: { displayName: 'Basil II', note: 'Son of Romanos II, who had been a nominal co-emperor throughout and took power in his own right in 976. Article planned for Track A M10.' }
  },
  contentSections: [
    S('Overview',
      'John Tzimiskes was an Armenian aristocrat of the Kourkouas family, a general of the first rank, and the nephew by marriage of Nikephoros II Phokas, under whom he fought at Aleppo in 962.',
      'In December 969 he led the conspiracy that murdered Nikephoros in the palace, and took the throne himself. The patriarch made him do public penance and expel the empress Theophano before he would crown him, which he did.',
      'What followed was one of the more effective short reigns in Byzantine history: the Rus\' driven out of Bulgaria, eastern Bulgaria annexed, and Syrian campaigns that reached further south than any Byzantine army had gone in three centuries. He died in 976, probably of illness, possibly of poison.'),
    S('Birth and early life',
      'He was born around 925 in the Byzantine east to an Armenian family connected to the Kourkouas clan, which had already produced John Kourkouas, the general who took Melitene in 934.',
      'The nickname Tzimiskes is usually explained from an Armenian word for short stature, and the sources describe him as a small, fair, physically extraordinary man — an outstanding horseman and athlete, and personally brave to the point of recklessness.',
      'He rose under Nikephoros Phokas, commanded in the eastern campaigns of the early 960s, and was one of the two generals who took Aleppo in 962. When Nikephoros became emperor, Tzimiskes became Domestic of the Schools of the East.'),
    S('Character and Personality',
      'The sources are unusually consistent, and they are not flattering in a simple way. He was generous, charming, physically magnetic and popular with soldiers in a manner Nikephoros never managed — and he murdered a sleeping man to take his throne.',
      'Leo the Deacon, who is broadly favourable, does not conceal the killing or the fact that it was squalid. Nor does the tradition conceal the penance: Polyeuctus refused him the crown until he had confessed publicly, named and exiled his accomplices, expelled Theophano, and repealed Nikephoros\'s laws against the church.',
      'He accepted all of it, which tells you something. He wanted the throne enough to kill for it and enough to be humiliated for it, and having got it he governed with an energy and competence that made the manner of his accession an awkward footnote rather than the story.'),
    S('The Rus\' war',
      'His most dangerous inheritance was in Europe. Nikephoros had invited Sviatoslav of Kiev to attack Bulgaria as a proxy, and Sviatoslav had come, won, and decided to stay — with a Rus\' army established on the Danube and no intention of going home.',
      'Tzimiskes went north in 971, took the Bulgarian capital Preslav by storm, and pinned Sviatoslav in the fortress of Dorostolon on the Danube. The siege lasted three months and involved several savage engagements outside the walls, with the Byzantine fleet closing the river behind the Rus\'.',
      'Sviatoslav came to terms and withdrew, and was killed by Pechenegs on the way home. Tzimiskes annexed eastern Bulgaria outright — the Bulgarian patriarchate was abolished and the emperor Boris II was deposed in a ceremony in Constantinople — which solved a problem Byzantium had had for three centuries and created the one Basil II would spend his reign finishing.'),
    S('The Syrian campaigns',
      'In 974 and 975 he campaigned in the east with the army Nikephoros had built, and went further than the reconquest had yet reached: through Syria, taking Homs, Baalbek and Damascus into tributary status, and down toward the coast of Palestine.',
      'Byzantine and later Latin writers made a great deal of how close he came to Jerusalem, and his own letter to the Armenian king Ashot III claims more than the campaign achieved. What he actually did was reduce a string of Syrian cities to tribute without holding them.',
      'He died in January 976 shortly after returning, of an illness the sources describe with enough detail to suggest typhoid and enough suspicion to suggest poison — the chamberlain Basil Lekapenos, whose corruption Tzimiskes had begun investigating, being the usual candidate.'),
    S('Legacy',
      'He held together everything Nikephoros had taken and added Bulgaria to it, and he handed the empire to Basil II in a condition that made the following half-century possible.',
      'His accession remains the difficulty. The archive\'s account of Nikephoros\'s murder and of Antioch belongs to the same six weeks as the start of this reign, and the two men cannot be assessed apart: the best general of the generation killed the best general of the one before, and then governed better than anyone expected.',
      'The Byzantine tradition\'s solution was the penance. It let the murder be atoned for and the reign be judged separately, which is a very Byzantine resolution to a problem of legitimacy and is more or less how history has treated him since.')
  ],
  timeline: [
    { date: 'c. 925', title: 'Born', description: 'Born to an Armenian aristocratic family of the Byzantine east, connected to the Kourkouas clan.' },
    { date: '962', title: 'Aleppo', description: 'Commands under Nikephoros Phokas in the campaign that sacks the Hamdanid capital.', links: [{ title: 'Sack of Aleppo', type: 'event', slug: 'siege-of-aleppo-962' }] },
    { date: '963', title: 'Domestic of the East', description: 'Takes the senior eastern command when Nikephoros becomes emperor.' },
    { date: '10–11 December 969', title: 'Murders Nikephoros II', description: 'Leads the conspiracy that kills the emperor in his bedchamber, and takes the throne.' },
    { date: '969', title: 'Penance before coronation', description: 'The patriarch Polyeuctus crowns him only after public penance, the exile of Theophano and the punishment of his accomplices.' },
    { date: '971', title: 'Preslav and Dorostolon', description: 'Storms the Bulgarian capital and pins Sviatoslav\'s Rus\' army on the Danube until it comes to terms.' },
    { date: '971', title: 'Eastern Bulgaria annexed', description: 'Boris II is deposed in Constantinople and the Bulgarian patriarchate abolished.' },
    { date: '974–975', title: 'The Syrian campaigns', description: 'Reduces Homs, Baalbek and Damascus to tribute and advances toward the Palestinian coast.' },
    { date: '976', title: 'Died', description: 'Dies in January on returning from Syria; poisoning was suspected and never proved.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Nikephoros II Phokas', type: 'person', slug: 'nikephoros-ii-phokas', label: 'His commander, and the man he murdered to take the throne' },
      { title: 'Michael Bourtzes', type: 'person', slug: 'michael-bourtzes', label: 'His fellow conspirator, dismissed by Nikephoros for taking Antioch' },
      { title: 'Sviatoslav I of Kiev', type: 'person', slug: 'sviatoslav-i-of-kiev', label: 'Driven out of Bulgaria at Dorostolon in 971' }
    ],
    events: [
      { title: 'Sack of Aleppo', type: 'event', slug: 'siege-of-aleppo-962', label: 'Where he commanded under Nikephoros' }
    ],
    locations: [
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'The realm he ruled from 969 to 976' },
      { title: 'Kievan Rus', type: 'location', slug: 'kievan-rus', label: 'Whose army he expelled from Bulgaria' }
    ]
  },
  sources: [
    { title: 'Leo the Deacon, History', url: 'https://en.wikipedia.org/wiki/Leo_the_Deacon', type: 'primary source' },
    { title: 'John Skylitzes, Synopsis of Histories', url: 'https://en.wikipedia.org/wiki/John_Skylitzes', type: 'primary source' },
    { title: 'John I Tzimiskes', url: 'https://en.wikipedia.org/wiki/John_I_Tzimiskes', type: 'encyclopedia' }
  ]
}

const bourtzes = {
  id: 'michael-bourtzes', type: 'character', name: 'Michael Bourtzes',
  aliases: ['Michael Burtzes', 'Bourtzes'],
  born: 930, died: 996, deathAge: 'unknown',
  causeOfDeath: 'Date and circumstances of death unrecorded; he was alive in 996 and disappears from the sources afterwards.',
  restingPlace: 'Unknown',
  location: 'Antioch',
  title: 'Doux of Antioch',
  roles: ['Commander'],
  image: img('Nicolas Alonsianos, Johannes Tsimisces, Leon Ballantes, Michael Bourtzes (NYPL b14896507-120241).tiff'),
  imageInfo: {
    caption: 'A nineteenth-century costume study of Byzantine commanders, with Michael Bourtzes named at the right, from the New York Public Library\'s Vinkhuijzen collection.',
    creator: 'Vinkhuijzen Collection of Military Uniforms, New York Public Library',
    date: '19th century',
    source: 'Wikimedia Commons (New York Public Library)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Nicolas_Alonsianos,_Johannes_Tsimisces,_Leon_Ballantes,_Michael_Bourtzes_(NYPL_b14896507-120241).tiff',
    note: 'This is a modern artist\'s reconstruction of dress and not a likeness — no image of Bourtzes made in his lifetime survives, and the only medieval picture connected to him is the Skylitzes miniature of the fall of Antioch, which this archive uses for that event. The plate is included so his article is not imageless; it is evidence for nineteenth-century costume history, not for the man. Public domain.'
  },
  summary: 'Michael Bourtzes took Antioch in 969 by escalade against the emperor\'s express orders, was dismissed for it, and joined the conspiracy that murdered Nikephoros II nine weeks later.',
  overview: 'The commander who won the greatest prize of the reconquest and was punished for the manner of it — and who took a spectacular revenge.',
  greatestFeats: [
    'Seized the walls of Antioch on 28 October 969 with about three hundred men',
    'Held the towers for three days until the main army arrived',
    'Governed Antioch as its doux in the following decades'
  ],
  birth: { date: 'c. 930s', place: { name: 'The Byzantine east' } },
  death: { date: 'After 996', place: { name: 'Unknown' }, circumstance: 'He is last recorded in 996 and the date of his death is not preserved.' },
  quickFacts: { realm: 'Eastern Roman Empire', dynasty: 'Bourtzes family', culture: 'Roman, of the eastern military aristocracy', knownFor: 'Taking Antioch, and helping to kill the emperor who dismissed him for it' },
  contentSections: [
    S('Overview',
      'Michael Bourtzes belonged to the eastern military aristocracy — the class of great Anatolian landholding families that supplied the empire\'s generals and, when provoked, its usurpers.',
      'He is remembered for one night. On 28 October 969 he led about three hundred men up ladders onto the wall of Antioch, seized two towers, and held them for three days until the army came up and the city fell. Antioch had been in Muslim hands for 331 years.',
      'The emperor had forbidden the assault. Nikephoros II had wanted the city to surrender intact and dismissed Bourtzes for disobedience; six weeks later Bourtzes was among the men who murdered him.'),
    S('Birth and early life',
      'His birth is not recorded and the year is a guess from his career; the family was established in the eastern themes and produced officers for generations afterwards.',
      'He appears in the sources as a subordinate commander during the Syrian campaigns of the 960s, by which time he held the rank of patrician and a regional command in the region of Antioch.',
      'By 968 he was one of the two officers Nikephoros left to maintain the blockade of the city, alongside Peter the Stratopedarch, with instructions that were explicit and that he did not follow.'),
    S('Character and Personality',
      'What the record shows is a man of considerable nerve and no great patience with instruction, and it is fair to say the sources find him hard to admire and impossible to dismiss.',
      'The Antioch escalade was a genuine feat — a night climb onto a defended wall with a small force, then three days holding a position that could not be reinforced, sending increasingly desperate messages to a colleague who was in no hurry. It was also a direct breach of orders by a subordinate who judged that success would excuse him.',
      'When it did not excuse him, he took the second decision that defines him. Joining a conspiracy to murder an emperor is not the response of a man who accepted authority easily, and the archive should not smooth that into a story of injured merit. He was proud, he was slighted, and he committed regicide.'),
    S('Antioch',
      'The city had been blockaded for a year and its garrison was thin. Bourtzes had built up intelligence from inside and identified a stretch of wall on the slopes of Mount Silpius where the defence was weakest.',
      'On a cold night in late October he went up with about three hundred men and took two towers. The garrison counterattacked repeatedly over the following three days while his party held on, cut off above the city, sending word to Peter the Stratopedarch to bring the army.',
      'Peter came, the walls fell, and Antioch was Byzantine for the first time since 638. The sack that followed was exactly what Nikephoros had been trying to avoid, which is why the reward for the most celebrated feat of arms of the reign was dismissal.'),
    S('The murder of Nikephoros',
      'The conspiracy was John Tzimiskes\'s, and its motives were mixed — ambition, the empress Theophano\'s hostility to her husband, and the resentment of officers Nikephoros had disciplined. Bourtzes belonged firmly in the third category.',
      'On the night of 10–11 December 969 the conspirators were brought into the palace and killed the emperor in his chamber. Bourtzes was among them.',
      'He prospered under Tzimiskes and afterwards, and eventually governed Antioch itself as doux — the city he had taken and been broken for taking. He was still commanding in the 990s, when he was beaten by the Fatimids on the Orontes in 994 and subsequently dismissed by Basil II.'),
    S('Legacy',
      'The Bourtzes family remained prominent in the eastern aristocracy for generations, and Michael is its most famous member.',
      'His career is the clearest illustration in this archive of a structural problem the Byzantine state never solved: the eastern military families produced the commanders the empire could not do without, and those commanders were powerful enough that punishing one was dangerous.',
      'Nikephoros was right on the merits and wrong on the consequences, and both halves of that are worth keeping in view. The order was sound, the discipline was defensible, and it cost him his life.')
  ],
  timeline: [
    { date: 'c. 930s', title: 'Born', description: 'Born into the Bourtzes family of the eastern military aristocracy; the year is not recorded.' },
    { date: '960s', title: 'Serves in the Syrian campaigns', description: 'Appears as a subordinate commander during Nikephoros II\'s eastern conquests.' },
    { date: '968', title: 'Left to blockade Antioch', description: 'Given a share of the covering command with orders not to assault the city.' },
    { date: '28 October 969', title: 'Takes Antioch', description: 'Seizes two towers by night with about three hundred men and holds them until the army arrives.', links: [{ title: 'Siege of Antioch (969)', type: 'event', slug: 'siege-of-antioch-969' }] },
    { date: 'November 969', title: 'Dismissed', description: 'Nikephoros removes him from command for disobeying the order not to attack.' },
    { date: '10–11 December 969', title: 'Joins the murder of Nikephoros', description: 'Takes part in the conspiracy that kills the emperor in the palace.' },
    { date: '990s', title: 'Doux of Antioch', description: 'Governs the city he had captured, until defeat by the Fatimids on the Orontes in 994.' },
    { date: 'After 996', title: 'Disappears from the record', description: 'Last recorded in 996; the date and place of his death are not preserved.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Nikephoros II Phokas', type: 'person', slug: 'nikephoros-ii-phokas', label: 'Dismissed him for taking Antioch, and was murdered by him' },
      { title: 'John I Tzimiskes', type: 'person', slug: 'john-i-tzimiskes', label: 'Led the conspiracy he joined' }
    ],
    events: [
      { title: 'Siege of Antioch (969)', type: 'event', slug: 'siege-of-antioch-969', label: 'The escalade he led against orders' }
    ],
    locations: [
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'Whose greatest eastern prize he took' },
      { title: 'Hamdanid Emirate of Aleppo', type: 'location', slug: 'hamdanid-emirate-of-aleppo', label: 'The power whose northern Syria he helped end' }
    ]
  },
  sources: [
    { title: 'Leo the Deacon, History', url: 'https://en.wikipedia.org/wiki/Leo_the_Deacon', type: 'primary source' },
    { title: 'Yahya of Antioch, Chronicle', url: 'https://en.wikipedia.org/wiki/Yahya_of_Antioch', type: 'primary source' },
    { title: 'Michael Bourtzes', url: 'https://en.wikipedia.org/wiki/Michael_Bourtzes', type: 'encyclopedia' },
    { title: 'New York Public Library — Vinkhuijzen Collection', url: 'https://digitalcollections.nypl.org/collections/the-vinkhuijzen-collection-of-military-uniforms', type: 'museum collection', institution: 'New York Public Library' }
  ]
}

const sayf = {
  id: 'sayf-al-dawla', type: 'character', name: 'Sayf al-Dawla',
  aliases: ['Sayf al-Dawla al-Hamdani', 'Ali ibn Abi al-Hayja', 'Saif al-Dawla'],
  born: 916, died: 967, deathAge: '50',
  causeOfDeath: 'Died at Aleppo in February 967 after years of illness that had left him partly paralysed.',
  restingPlace: 'Mayyafariqin, in a tomb built for him by his sister',
  location: 'Aleppo',
  title: 'Emir of Aleppo',
  roles: ['Emir', 'Commander'],
  image: img('Sayf al-Dawla at his court.png'),
  imageInfo: {
    caption: 'Sayf al-Dawla, named as "Hambdan", receiving at his court in a Madrid Skylitzes miniature.',
    creator: 'Madrid Skylitzes manuscript',
    date: '13th century',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sayf_al-Dawla_at_his_court.png',
    note: 'The only medieval depiction of him available, and it comes from the chronicle of his enemies — a Byzantine manuscript painted three centuries after his death, which garbles his name into his family\'s. Not a likeness. Public domain.'
  },
  epithets: [
    { name: 'Sayf al-Dawla', type: 'honorific', note: 'Means "Sword of the Dynasty", a title granted by the Abbasid caliph. His given name was Ali ibn Abi al-Hayja, and almost no one uses it.' }
  ],
  summary: 'Sayf al-Dawla ruled Aleppo from 944 to 967, fought the Byzantine reconquest almost single-handed for twenty years, lost, and is remembered through the greatest poetry in the Arabic language.',
  overview: 'The emir whose court produced al-Mutanabbi and al-Farabi while his frontier was being taken away from him city by city.',
  greatestFeats: [
    'Founded the emirate of Aleppo in 944 and made it the centre of resistance to Byzantine expansion',
    'Raided Byzantine Anatolia for two decades as the empire\'s most persistent eastern opponent',
    'Presided over the most celebrated literary court of the tenth-century Islamic world'
  ],
  birth: { date: '916', place: { name: 'Mesopotamia, in the Hamdanid lands' } },
  death: { date: '967', place: { name: 'Aleppo' }, circumstance: 'Died in February 967 at Aleppo, partly paralysed by illness and with his frontier lost.' },
  quickFacts: { realm: 'Hamdanid Emirate of Aleppo', dynasty: 'Hamdanid dynasty', culture: 'Arab, of the Banu Taghlib', knownFor: 'Twenty years of war with Byzantium, and the court of al-Mutanabbi' },
  isRuler: true,
  succession: {
    office: 'Emir of Aleppo',
    predecessor: { status: 'none', displayName: 'None as emir of Aleppo', note: 'He founded the emirate himself, taking Aleppo in 944 from the Ikhshidids as Abbasid authority collapsed; there was no previous Hamdanid emir of the city.' },
    successor: { displayName: 'Sa\'d al-Dawla', note: 'His son, who spent his reign from 967 to 991 keeping the emirate alive between Byzantium and the Fatimids, and accepted Byzantine suzerainty in 970. No article yet in this archive.' }
  },
  contentSections: [
    S('Overview',
      'Ali ibn Abi al-Hayja, known by the title Sayf al-Dawla — "Sword of the Dynasty" — took Aleppo in 944 and ruled northern Syria until his death in 967. For most of that time he was the Byzantine empire\'s principal enemy in the east.',
      'He fought that war almost alone. The Abbasid caliphate was in no condition to help, Egypt was a rival rather than an ally, and the other frontier emirates had already been destroyed. What he had was a small, wealthy emirate and a talent for raiding.',
      'He lost. From the mid-950s the Byzantines under the Phokas family beat him repeatedly, in 962 they sacked his capital, and he died five years later with the frontier gone. And he is one of the most celebrated figures in Arabic literature, because the poets who wrote for him were the best of their age.'),
    S('Birth and early life',
      'He was born in 916 into the Hamdanid family, Arabs of the Banu Taghlib who governed Mosul and the Jazira for the Abbasid caliphs and were converting that governorship into possession as central authority failed.',
      'He and his brother Nasir al-Dawla operated as a partnership in the 930s and early 940s, intervening in Baghdad politics as the caliphate\'s military strongmen came and went, and receiving their grand titles from a caliph in no position to refuse.',
      'In 944 he took Aleppo, and after a contest with the Ikhshidids of Egypt over southern Syria he settled for the north and the Byzantine frontier — the more dangerous inheritance, and the one that made him famous.'),
    S('Character and Personality',
      'He comes down to us through two traditions that barely overlap. Byzantine writers describe a persistent, dangerous and eventually beaten opponent; Arabic literary tradition describes a paragon of Arab princely virtue — generous, brave, cultivated, the ideal patron.',
      'The second portrait is largely the work of men he paid. Al-Mutanabbi\'s panegyrics are magnificent and they are panegyrics, composed by a poet who left in bitterness when the relationship soured, and they should be read as literature about a patron rather than evidence about a man.',
      'What survives outside the poetry suggests real courage, real cultivation, and a strategic judgement that did not adapt. He went on raiding into Anatolia for years after the Byzantines had learned to intercept him, and the disaster of 960 — his army destroyed in the passes on the way home — was the kind of defeat that repetition invites. His last years were spent ill and increasingly paralysed, watching his frontier disappear.'),
    S('The war with Byzantium',
      'The pattern of the first decade was the traditional one: summer raids into Anatolia, plunder and captives, and Byzantine counter-raids into Syria. He was good at it, and Byzantine sources treat him as the successor to the emirs of Melitene as the frontier\'s chief menace.',
      'It stopped working in the 950s. The empire reorganised its eastern commands under the Phokas family, and the raids began to be caught. In 960 Leo Phokas ambushed his returning army in the passes and destroyed it, and after that he had no field force capable of contesting a Byzantine campaign.',
      'In December 962 Nikephoros Phokas and John Tzimiskes stormed Aleppo. The citadel held, so the emirate survived, but the city was sacked, the treasury and the palace went, and thousands were taken. He returned to rule the wreck for five more years.'),
    S('The court',
      'Aleppo under Sayf al-Dawla was the most celebrated literary court of its century, and the reason he is remembered when other defeated emirs are not.',
      'Al-Mutanabbi — regarded by many as the greatest poet in the Arabic language — spent nine years there from about 948, and the poems he wrote in the emir\'s praise are still memorised across the Arabic-speaking world. The relationship ended in resentment and the poet went to Egypt.',
      'Al-Farabi, the philosopher who did more than anyone to naturalise Aristotle in Arabic thought, was attached to the court in his last years. The emir\'s cousin Abu Firas was a poet of the first rank in his own right, and wrote his best-known work as a Byzantine prisoner — a set of verses from captivity that are among the most personal in classical Arabic.'),
    S('Legacy',
      'His political record is a defeat. He inherited a frontier and lost it, his capital was sacked in his lifetime, his son became a Byzantine tributary three years after his death, and the dynasty was gone within forty years.',
      'His cultural afterlife is enormous and almost entirely detached from that. He became the model of the Arab warrior-prince in later literature — the patron in whose hall the greatest poetry was recited — and modern Arab nationalism found him a useful symbol of resistance to a Christian empire, which is a use he would have recognised and his poets would have approved.',
      'For this archive he is the last serious opponent of the Byzantine reconquest, and a reminder that the record a ruler leaves depends heavily on who he employed. Melitene had no poets, and nobody remembers Umar al-Aqta.')
  ],
  timeline: [
    { date: '916', title: 'Born', description: 'Born into the Hamdanid family, Arabs of the Banu Taghlib governing Mosul for the Abbasids.' },
    { date: '930s', title: 'Rises with his brother', description: 'Operates with Nasir al-Dawla in the politics of a caliphate controlled by its own soldiery.' },
    { date: '944', title: 'Takes Aleppo', description: 'Establishes the emirate that becomes the centre of resistance to Byzantine expansion.' },
    { date: 'c. 948', title: 'Al-Mutanabbi arrives', description: 'The greatest poet in Arabic joins his court and stays nine years.' },
    { date: '950s', title: 'The frontier war turns', description: 'The Phokas family reorganises the Byzantine east and his raids begin to be intercepted.' },
    { date: '960', title: 'Disaster in the passes', description: 'Leo Phokas destroys his returning army; he never fields another capable of contesting a campaign.' },
    { date: 'December 962', title: 'Aleppo sacked', description: 'Nikephoros Phokas and John Tzimiskes storm his capital; the citadel holds but the emirate is broken.', links: [{ title: 'Sack of Aleppo', type: 'event', slug: 'siege-of-aleppo-962' }] },
    { date: '967', title: 'Died', description: 'Dies at Aleppo in February, partly paralysed, and is buried at Mayyafariqin.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Nikephoros II Phokas', type: 'person', slug: 'nikephoros-ii-phokas', label: 'Sacked his capital in 962' },
      { title: 'John I Tzimiskes', type: 'person', slug: 'john-i-tzimiskes', label: 'Commanded alongside Nikephoros at the sack of Aleppo' }
    ],
    events: [
      { title: 'Sack of Aleppo', type: 'event', slug: 'siege-of-aleppo-962', label: 'Where he lost his capital' }
    ],
    locations: [
      { title: 'Hamdanid Emirate of Aleppo', type: 'location', slug: 'hamdanid-emirate-of-aleppo', label: 'The emirate he founded and ruled' },
      { title: 'Abbasid Caliphate', type: 'location', slug: 'abbasid-caliphate', label: 'Whose collapse gave him his independence and left him unsupported' },
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'The empire he fought for twenty years' }
    ]
  },
  sources: [
    { title: 'Yahya of Antioch, Chronicle', url: 'https://en.wikipedia.org/wiki/Yahya_of_Antioch', type: 'primary source' },
    { title: 'Al-Mutanabbi, Diwan', url: 'https://en.wikipedia.org/wiki/Al-Mutanabbi', type: 'primary source' },
    { title: 'Sayf al-Dawla', url: 'https://en.wikipedia.org/wiki/Sayf_al-Dawla', type: 'encyclopedia' },
    { title: 'The Metropolitan Museum of Art — Islamic art collection', url: 'https://www.metmuseum.org/about-the-met/collection-areas/islamic-art', type: 'museum collection', institution: 'The Metropolitan Museum of Art' }
  ]
}

data.events.push(aleppo, cilicia, cyprus, antioch)
data.locations.push(hamdanids, antiochCity)
data.characters.push(tzimiskes, bourtzes, sayf)

// ── Re-point Chandax's continuity onto Aleppo ─────────────────────────────────
// M8 left it on Manzikert and suggested Antioch. Aleppo is nearer and forward,
// which the selection rule prefers, and the chain now runs
// Lalakaon → Chandax → Aleppo → Antioch → Manzikert.
const chandax = data.events.find((e) => e.id === 'siege-of-chandax')
chandax.battleContinuity = {
  label: 'Continue east with the same army',
  battleSlug: 'siege-of-aleppo-962',
  relationship: 'same-war',
  reason: 'Nikephoros sailed back from Crete to a triumph and was in Syria within two campaigning seasons; the fleet and treasury that Chandax freed paid for the sack of Aleppo and everything after it.'
}

// ── Link into what already exists (bidirectional) ─────────────────────────────
const push = (arr, item) => { if (!arr.some((x) => x.slug === item.slug)) arr.push(item) }
const loc = (id) => data.locations.find((l) => l.id === id)
const chr = (id) => data.characters.find((c) => c.id === id)

const antiochRef = (label) => ({ title: 'Siege of Antioch (969)', type: 'event', slug: 'siege-of-antioch-969', label })
const aleppoRef = (label) => ({ title: 'Sack of Aleppo', type: 'event', slug: 'siege-of-aleppo-962', label })
const hamdanidRef = (label) => ({ title: 'Hamdanid Emirate of Aleppo', type: 'location', slug: 'hamdanid-emirate-of-aleppo', label })

const byz = loc('byzantine-empire')
push((byz.relatedEntries.events ??= []), antiochRef('The high-water mark of the eastern reconquest, in 969'))
push((byz.relatedEntries.locations ??= []), hamdanidRef('Its last organised opponent in northern Syria'))

push((chandax.relatedEntries.events ??= []), aleppoRef('Where the same army went next'))

const abbasid = loc('abbasid-caliphate')
push((abbasid.relatedEntries.locations ??= []), hamdanidRef('A frontier emirate that governed for itself as caliphal authority failed'))

// Nikephoros commanded at Aleppo, so the commander→battle reciprocity rule
// requires both campaigns in his own related entries.
const nikephoros = chr('nikephoros-ii-phokas')
push((nikephoros.relatedEntries.events ??= []), aleppoRef('His Syrian campaign of 962'))
push((nikephoros.relatedEntries.events ??= []), antiochRef('Taken against his orders, nine weeks before his murder'))
push((nikephoros.relatedEntries.people ??= []), { title: 'John I Tzimiskes', type: 'person', slug: 'john-i-tzimiskes', label: 'His subordinate at Aleppo, and his murderer' })
push((nikephoros.relatedEntries.people ??= []), { title: 'Sayf al-Dawla', type: 'person', slug: 'sayf-al-dawla', label: 'The emir whose capital he sacked' })

// Sviatoslav gains the reciprocal link for Dorostolon.
// The siege and the city point at each other.
const antiochEvent = data.events.find((e) => e.id === 'siege-of-antioch-969')
push((antiochEvent.relatedEntries.locations ??= []), { title: 'Antioch', type: 'location', slug: 'antioch', label: 'The city itself' })
push((byz.relatedEntries.locations ??= []), { title: 'Antioch', type: 'location', slug: 'antioch', label: 'Its eastern capital from 969 to 1084' })

const sviatoslav = chr('sviatoslav-i-of-kiev')
push((sviatoslav.relatedEntries.people ??= []), { title: 'John I Tzimiskes', type: 'person', slug: 'john-i-tzimiskes', label: 'The emperor who forced him out of Bulgaria in 971' })

console.log('+ events     : siege-of-aleppo-962, byzantine-conquest-of-cilicia,')
console.log('               byzantine-conquest-of-cyprus, siege-of-antioch-969')
console.log('+ locations  : hamdanid-emirate-of-aleppo, antioch')
console.log('+ characters : john-i-tzimiskes, michael-bourtzes, sayf-al-dawla')
console.log('~ siege-of-chandax continuity re-pointed: manzikert -> siege-of-aleppo-962')
console.log('~ linked     : byzantine-empire, abbasid-caliphate, nikephoros-ii-phokas,')
console.log('               sviatoslav-i-of-kiev')

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`\nM9 written — characters ${data.characters.length}, locations ${data.locations.length}, events ${data.events.length}`)
