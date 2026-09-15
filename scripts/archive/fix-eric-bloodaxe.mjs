/**
 * Eric Bloodaxe: the coin comes out of the primary slot.
 *
 * The owner objected that his article led with a coin that depicts nothing of
 * him. Checked, and he is exactly right — the penny carries the legend ERIC REX
 * and a sword, and no portrait of any kind. It is evidence that he ruled at York
 * and evidence of nothing else.
 *
 * THE DISTINCTION THAT MATTERS, and it is now written into CLAUDE.md: a coin may
 * lead a biography only when it carries a portrait. The Byzantine solidi this
 * archive uses for Heraclius, Leo III, Irene, Justin I and the rest all show the
 * ruler's bust — conventional rather than a likeness, but a depiction of a person.
 * A coin bearing only an inscription, a sword, a cross or a monogram depicts the
 * office or the name, and must not be the main image of a human being.
 *
 * WHAT IS AVAILABLE, stated plainly because it is a real limitation: the only
 * depiction of Eric Bloodaxe on Wikimedia Commons is a single small illustration
 * by Christian Krohg for the 1899 Heimskringla — 180 by 296 pixels. There is no
 * statue, no manuscript portrait, no higher-resolution scan, and no modern
 * illustration. I checked the Commons category, both Wikipedia articles, the
 * Heimskringla illustration categories and the Krohg series by filename.
 *
 * It is used here because a small real depiction of the man beats a large picture
 * of a sword, and the caption says what it is. If the owner wants better, the
 * options are a commissioned illustration or a licensed one from outside Commons;
 * I cannot generate images.
 *
 * The coin moves to the section on his York kingship, where it is genuinely the
 * best evidence there is.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const S = (title, ...paragraphs) => ({ title, paragraphs })
const img = (f) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(f)}`

const e = data.characters.find((c) => c.id === 'eric-bloodaxe')
const was = (e.contentSections ?? []).reduce((n, s) => n + s.paragraphs.join(' ').length, 0)

e.image = img('Eirik Blodøks with Gunhild, Egil Skallagrimsson standing.jpg')
e.imageInfo = {
  caption: 'Eirik Bloodaxe enthroned with his queen Gunnhild, with the poet Egil Skallagrímsson standing before them, drawn by Christian Krohg.',
  creator: 'Christian Krohg',
  date: 'c. 1899',
  source: 'Wikimedia Commons',
  sourceUrl: 'https://commons.wikimedia.org/wiki/File:Eirik_Blod%C3%B8ks_with_Gunhild,_Egil_Skallagrimsson_standing.jpg',
  note: 'A nineteenth-century illustration for an edition of the Heimskringla, not a likeness — nobody knows what Eirik looked like, and no depiction of him made in his lifetime exists. It shows the scene from Egil\'s saga in which the poet composes his way out of a death sentence at Eirik\'s court in York. The only image of the man available anywhere, and a small one.'
}

e.sectionImages = [
  {
    section: 'King at York',
    src: img('Eric Bloodaxe silver penny; struck 952-954 AD (obverse).jpg'),
    caption: 'A silver penny struck for Eric at York between 952 and 954, reading ERIC REX around a sword.',
    creator: 'Northumbrian moneyer, York',
    date: 'c. 952–954',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Eric_Bloodaxe_silver_penny;_struck_952-954_AD_(obverse).jpg',
    note: 'The hardest evidence that exists for his reign, and the reason it is here rather than at the top of the article: the coin carries his name, his title and a sword, and no portrait. It proves he ruled at York and shows nothing of the man.'
  }
]

e.summary = 'Eric Bloodaxe was a tenth-century Norwegian king and the last independent ruler of Viking York, whose career is known mostly through Icelandic sagas written three centuries after his death.'
e.overview = [
  'He ruled Norway briefly in the 930s, was driven out, and twice held the kingdom of York before being killed at Stainmore in 954.',
  'His byname and most of his story come from saga tradition, and the reliable evidence for him amounts to a handful of coins, some brief chronicle notices, and a great deal of literature.'
]

e.contentSections = [
  S('Overview',
    'Eric Bloodaxe was a son of Harald Fairhair, the king credited with unifying Norway, and he is one of those figures whose fame rests almost entirely on how good the stories about him are.',
    'The verifiable outline is short: he ruled part or all of Norway for a few years around 930, was displaced by his half-brother Håkon the Good, appears in England in the 940s, held the kingdom of York twice in the late 940s and early 950s, and was killed at Stainmore in 954.',
    'Everything vivid — the byname, the fratricides, the sorceress queen, the poem that saved a man\'s life — comes from Icelandic sagas written between two and three hundred years afterwards, and the article separates the two as it goes.'),
  S('Birth and early life',
    'He was born early in the tenth century, a son of Harald Fairhair, and the sagas make him the favourite among a large number of sons — Harald is said to have had many, by several women, which is itself part of the problem the succession created.',
    'The saga tradition has him raised as a warrior and sent raiding young, to the Baltic, to Frisia, to Scotland and Ireland, before his father made him overking above his brothers.',
    'He married Gunnhild, who in the sagas is a figure of enormous and sinister power — a queen with a reputation for sorcery, blamed for much of what he did and outliving him by decades. How much of her is a real political actor and how much is a literary type is unrecoverable, and the sagas are hostile to her in ways that say more about their authors than about her.'),
  S('Character and Personality',
    'The sagas give him a consistent character — violent, effective, badly advised — and it is worth being clear that this is a literary portrait built by Icelanders writing under Norwegian kings descended from his rivals.',
    'The byname itself is the clearest case. Blóðøx, "bloody axe", is explained in the sagas as earned by killing several of his own brothers to secure the succession, and it may equally have been earned as a raider, or applied long after his death by people who knew the stories rather than the man. It does not appear in any contemporary source.',
    'The one scene everyone remembers is from Egil\'s saga: Egil Skallagrímsson, Eirik\'s enemy, is captured at York and composes a praise-poem for him overnight — the Höfuðlausn, the "head-ransom" — and is released for it. It is a wonderful story about the power of poetry, told by poets, about a king who was safely dead.'),
  S('King in Norway',
    'Harald Fairhair set him over his brothers as overking, probably around 930, and he did not hold it. The sagas say he killed several brothers; what is clear is that his rule was resented and his support narrow.',
    'His half-brother Håkon, who had been fostered at the English court of Æthelstan, returned to Norway with English backing and took the country with the support of the magnates. Eirik left, apparently without a serious fight.',
    'This is the pattern of Norwegian politics in the century after Harald: a kingdom that could be taken by whoever the regional aristocracy preferred, and lost the same way. It is the same dynamic that killed Olaf II at Stiklestad a century later.'),
  S('King at York',
    'He appears in England in the 940s, and the Anglo-Saxon Chronicle records the Northumbrians accepting a king called Eric — twice, in 947–948 and again in 952–954, with the West Saxon king Eadred expelling him in between.',
    'York in this period was the last independent Scandinavian kingdom in England, ruled alternately by Norse kings from Dublin and by adventurers like Eirik, and its acceptance of him was a political calculation by the Northumbrian magnates and the archbishop of York rather than an act of conquest.',
    'The coins are the hard evidence. Pennies struck at York read ERIC REX around a sword, which tells us he ruled there, that he minted in his own name, and — since the coin carries no portrait — nothing whatever about him as a person.'),
  S('Death at Stainmore',
    'In 954 the Northumbrians expelled him for the second time, and he was killed at Stainmore, on the pass over the Pennines between Yorkshire and Cumbria, in circumstances the sources do not agree on.',
    'The fullest account is late and describes a betrayal by a man named Maccus and an ambush, with Eirik dying alongside his son and several other kings. The Anglo-Saxon Chronicle simply says he was killed.',
    'What is not in doubt is the consequence: Northumbria was absorbed into the kingdom of England and never again had a king of its own. The Rey Cross on Stainmore, a Norse-style stone traditionally associated with the site, is the only physical marker of any of it.'),
  S('Legacy',
    'His death is a genuine end point. The independent Scandinavian kingdom of York went with him, and England north of the Humber became part of a single English realm.',
    'His literary afterlife is enormous by comparison with the two paragraphs of secure fact. The Eiríksmál, a poem composed for Gunnhild after his death, imagines Odin preparing Valhalla to receive him — one of the finest surviving pieces of Norse court poetry, and propaganda commissioned by his widow.',
    'He also stands in this archive as a caution about evidence. Eirik is famous, and almost everything that makes him famous was written by people two or three centuries later, in another country, about a dynasty they had reason to disparage. The coins say he was king; the sagas say everything else.')
]

e.timeline = [
  { date: 'c. 895–905', title: 'Born', description: 'Born a son of Harald Fairhair; the year is not recorded.' },
  { date: 'c. 930', title: 'Overking in Norway', description: 'Harald sets him above his brothers; the sagas say he secured it by killing several of them.' },
  { date: 'c. 934', title: 'Driven out', description: 'His half-brother Håkon the Good returns from the English court with backing and takes Norway.' },
  { date: '947–948', title: 'King at York', description: 'The Anglo-Saxon Chronicle records the Northumbrians accepting him as king; Eadred expels him.' },
  { date: '952–954', title: 'King at York again', description: 'He returns to York and strikes pennies reading ERIC REX around a sword.' },
  { date: '954', title: 'Killed at Stainmore', description: 'Expelled a second time and killed on the Pennine pass; Northumbria is absorbed into England.' },
  { date: 'after 954', title: 'The Eiríksmál', description: 'A poem commissioned by his widow Gunnhild imagines Odin preparing Valhalla to receive him.' }
]

const now = e.contentSections.reduce((n, s) => n + s.paragraphs.join(' ').length, 0)
console.log(`eric-bloodaxe: primary image coin -> Krohg depiction; coin moved to "King at York"`)
console.log(`  prose ${was} -> ${now} chars, timeline ${e.timeline.length}, section images ${e.sectionImages.length}`)

writeFileSync(dataPath, JSON.stringify(data, null, 2))
