/**
 * The Justinian dynasty, demanded by the rule.
 *
 * Creating Justin I and Justin II in the M8b backfill gave the archive three
 * rulers carrying `dynasty: "Justinian dynasty"` — with Justinian I, who was
 * already here — and no House article. validateDynastyHouseCoverage hard-failed,
 * which is the second time in one day that the owner's rule has caught a real gap
 * the moment it opened.
 *
 * Also trims Constantine VII's epithet note, which the epithet validator
 * correctly rejected at over 200 characters.
 *
 * The family tree is worth reading for what it is not: almost none of this
 * dynasty inherited from a father. Justinian I succeeded his uncle, Justin II his
 * uncle, Tiberius II by adoption, Maurice by marriage. It is a dynasty held
 * together by adoption and marriage rather than descent, which is why it ended
 * the moment somebody was willing to murder for it.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const S = (title, ...paragraphs) => ({ title, paragraphs })
const img = (f) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(f)}`

// 1. Trim the over-long epithet note.
const c7 = data.characters.find((c) => c.id === 'constantine-vii')
c7.epithets[0].note = 'Means "born in the purple", in the chamber reserved for a reigning emperor\'s children. He used it constantly: his legitimacy was attacked from birth, his parents\' marriage being an irregular fourth.'
console.log(`~ constantine-vii epithet note trimmed to ${c7.epithets[0].note.length} chars`)

const house = {
  id: 'justinian-dynasty', type: 'house', name: 'Justinian dynasty',
  aliases: ['Justinianic dynasty', 'House of Justinian', 'Justinian'],
  originYear: 518, endYear: 602, reignSpan: '518–602',
  region: 'Byzantine Empire',
  originPlace: 'Bederiana, in Latin-speaking Illyricum',
  arms: 'The Byzantine emperors bore no Western coat of arms.',
  image: img('Meister von San Vitale in Ravenna 008.jpg'),
  imageInfo: {
    caption: 'The empress Theodora in the mosaic of San Vitale at Ravenna, crowned and haloed among her retinue.',
    creator: 'San Vitale workshop, Ravenna',
    date: 'c. 547',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Meister_von_San_Vitale_in_Ravenna_008.jpg',
    note: 'Made within the dynasty\'s own lifetime, in a church built while Justinian\'s reconquest of Italy was still being fought. Theodora had been an actress before she was an empress, which the mosaic\'s halo and regalia are arguing about as much as depicting. Public domain.'
  },
  summary: 'The dynasty that ruled the eastern Roman empire from 518 to 602, reconquered Africa and Italy, codified Roman law, built Hagia Sophia, and ended in the mutiny that started a century of catastrophe.',
  overview: 'Four emperors and a peasant\'s nephew who tried to put the Roman empire back together, and one murdered successor whose death let it fall apart.',
  founder: {
    personSlug: 'justin-i',
    displayName: 'Justin I',
    note: 'A Thracian peasant who rose through the palace guard and took the throne at about seventy in 518'
  },
  seats: [
    { name: 'Constantinople', type: 'location', slug: 'constantinople' },
    { name: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire' }
  ],
  notableMembers: [
    { personSlug: 'justin-i', displayName: 'Justin I', note: 'r. 518–527; illiterate former guardsman who brought his nephew to court' },
    { personSlug: 'justinian-i', displayName: 'Justinian I', note: 'r. 527–565; the Corpus Juris Civilis, Hagia Sophia and the reconquest of Africa and Italy' },
    { personSlug: 'justin-ii', displayName: 'Justin II', note: 'r. 565–578; stopped paying the empire\'s neighbours and lost Italy and the east' },
    { displayName: 'Tiberius II Constantine', note: 'r. 578–582; adopted as Caesar during Justin II\'s illness, and remembered for open-handed generosity' },
    { displayName: 'Maurice', note: 'r. 582–602; a capable soldier-emperor murdered with five of his sons by the mutiny that raised Phocas' }
  ],
  familyTree: {
    caption: 'The Justinianic succession, which runs almost entirely through nephews, adoption and marriage rather than through sons. ⚭ marks a marriage.',
    root: {
      name: 'Justin I',
      personSlug: 'justin-i',
      note: 'r. 518–527',
      children: [
        {
          name: 'Justinian I',
          personSlug: 'justinian-i',
          note: 'r. 527–565; his nephew, adopted as heir',
          spouse: { name: 'Theodora', note: 'Empress; died of cancer in 548' },
          children: [
            {
              name: 'Justin II',
              personSlug: 'justin-ii',
              note: 'r. 565–578; nephew of Justinian',
              spouse: { name: 'Sophia', note: 'Niece of Theodora; governed with Tiberius during Justin\'s illness' },
              children: [
                {
                  name: 'Tiberius II Constantine',
                  note: 'r. 578–582; adopted as Caesar, not a blood relation',
                  children: [
                    { name: 'Maurice', note: 'r. 582–602; married Tiberius\'s daughter Constantina; murdered with his sons by Phocas' }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  },
  contentSections: [
    S('Origins',
      'The dynasty begins with a peasant. Justin came from Bederiana in the Latin-speaking Balkans, walked to Constantinople as a young man to enlist, and rose through the palace guard over half a century to command it.',
      'When the emperor Anastasius died childless in 518, Justin was about seventy and in the right place, and the throne went to him in circumstances that involved both accident and money.',
      'He brought his nephew Petrus Sabbatius to court, adopted him, and gave him the name by which the century is known. It is one of the more consequential acts of nepotism in European history.'),
    S('Justinian and the reconquest',
      'Justinian I ruled from 527 to 565 with an ambition no later emperor matched: to restore the Roman empire in the Mediterranean, in law, in building and in fact.',
      'His generals Belisarius and Narses took Africa from the Vandals in 533–534 and Italy from the Ostrogoths in a war that ran from 535 to 554 — campaigns this archive covers in detail. The Corpus Juris Civilis reorganised a thousand years of Roman law into the form that western Europe rediscovered in the twelfth century. Hagia Sophia was built in five years and remains the dynasty\'s most visible monument.',
      'The costs were correspondingly enormous, and they were paid by his successors. The plague of 541 killed a large share of the empire\'s population, the reconquered provinces were devastated and hard to hold, and the treasury Anastasius had filled was empty.'),
    S('The collapse of the settlement',
      'Justin II inherited that bill in 565 and refused to pay the subsidies that had kept the Persians and the Avars quiet. Within a decade the Lombards had taken most of Italy, the Persian war had restarted and Dara had fallen, and he had suffered a mental collapse from which he never fully recovered.',
      'Tiberius II, adopted as Caesar in a lucid interval, ruled four years and was remembered for a generosity the treasury could not afford. Maurice, who married his daughter, was the ablest of them: he ended the Persian war on favourable terms in 591 by restoring Khosrow II to his throne, and fought the Avars and Slavs on the Danube for a decade.',
      'It was the Danube that killed him. In 602 he ordered the army to winter north of the river, and it mutinied, marched on Constantinople and proclaimed a junior officer named Phocas. Maurice was executed after being made to watch the killing of five of his sons.'),
    S('Legacy',
      'The murder of Maurice is the hinge. Khosrow II owed his throne to him personally, declared war to avenge him, and the twenty-six-year conflict that followed exhausted both the Roman and the Persian empires so completely that the Arab conquests took Syria, Egypt and all of Iran within a generation of its end.',
      'The dynasty\'s achievements outlasted its territory. Justinian\'s law code is the foundation of the civil law tradition across continental Europe and beyond; Hagia Sophia stood as the largest church in Christendom for nine hundred years; and the reconquest, though it did not hold, is the last time a Roman empire ruled both shores of the Mediterranean.',
      'Its structural weakness is visible in the family tree. Four of the five emperors reached the throne through a nephew\'s adoption, an adoption in illness, or a marriage — never through an undisputed son. A dynasty that improvises its succession four times in eighty years is one mutiny away from ending, and in 602 it met one.')
  ],
  timeline: [
    { date: '518', title: 'Justin I proclaimed', description: 'A Thracian peasant who commanded the palace guard takes the throne at about seventy.' },
    { date: '527', title: 'Justinian I succeeds', description: 'The nephew his uncle brought to court begins a thirty-eight-year reign.' },
    { date: '533–534', title: 'Africa reconquered', description: 'Belisarius destroys the Vandal Kingdom in a single campaign.' },
    { date: '537', title: 'Hagia Sophia completed', description: 'The great church is finished in five years and remains the dynasty\'s most visible monument.' },
    { date: '541', title: 'The plague', description: 'Bubonic plague reaches Constantinople and kills a large share of the empire\'s population.' },
    { date: '554', title: 'Italy reconquered', description: 'Narses completes the twenty-year Gothic War, at ruinous cost to Italy.' },
    { date: '568', title: 'The Lombards enter Italy', description: 'Three years after Justinian\'s death, the reconquest of Italy begins to come apart.' },
    { date: '591', title: 'Maurice restores Khosrow II', description: 'The Persian war is ended by putting a Sasanian claimant back on his throne — a debt that will matter enormously.' },
    { date: '602', title: 'The dynasty ends', description: 'The Danube army mutinies and Phocas has Maurice executed with five of his sons.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Justinian I', type: 'person', slug: 'justinian-i', label: 'Its greatest emperor' },
      { title: 'Justin I', type: 'person', slug: 'justin-i', label: 'Its founder' },
      { title: 'Phocas', type: 'person', slug: 'phocas', label: 'The usurper who ended it' }
    ],
    events: [
      { title: 'Battle of Tricamarum', type: 'event', slug: 'battle-of-tricamarum', label: 'Where the Vandal Kingdom was destroyed' },
      { title: 'Siege of Rome', type: 'event', slug: 'siege-of-rome-537', label: 'The hardest year of the Gothic War' }
    ],
    locations: [
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'The realm it ruled for eighty-four years' },
      { title: 'Constantinople', type: 'location', slug: 'constantinople', label: 'Its capital, and where its last emperor was overthrown' }
    ]
  },
  sources: [
    { title: 'Procopius, History of the Wars', url: 'https://en.wikipedia.org/wiki/History_of_the_Wars', type: 'primary source' },
    { title: 'Theophanes the Confessor, Chronicle', url: 'https://en.wikipedia.org/wiki/Theophanes_the_Confessor', type: 'primary source' },
    { title: 'Justinian dynasty', url: 'https://en.wikipedia.org/wiki/Justinian_dynasty', type: 'encyclopedia' },
    { title: 'Dumbarton Oaks — Byzantine studies', url: 'https://www.doaks.org/research/byzantine', type: 'academic resource', institution: 'Dumbarton Oaks' }
  ]
}

data.houses.push(house)
console.log('+ houses : justinian-dynasty')

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`\nHouses now ${data.houses.length}`)
