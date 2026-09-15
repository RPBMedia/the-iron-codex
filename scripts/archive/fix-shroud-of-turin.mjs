/**
 * Rewrite the Shroud of Turin, which shipped as a generator template.
 *
 * Four of its six sections were one template with the name substituted in —
 * "Shroud of Turin is a material or textual object whose physical survival helps
 * historians read medieval politics, belief, art, or memory", "The archive date
 * of 1350 is an orientation point" — and the same sentences stand, name for name,
 * in the Lindisfarne Gospels, the Codex Gigas and the Royal Frankish Annals. The
 * content checker never saw it, because a substituted name makes every copy
 * technically unique. (That gate gap is closed separately: see
 * scripts/lib/template-prose.mjs.)
 *
 * WHAT CHANGED AND WHY
 *
 * Image. The old principal image was a side-by-side of the FACE alone, positive
 * and negative — a detail, which the archive's first image question ("can the
 * reader see the entire object?") rejects. Replaced with Giuseppe Enrie's 1931
 * full-length photograph, which shows the whole cloth in positive with the 1532
 * fire lines down both long edges. Commons: File:Shroudofturin_rotated.jpg, a
 * horizontal rotation of File:Shroudofturin.jpg (author Giuseppe Enrie, 1931).
 * Checked by rendering its brightness map, since the image viewer rejected the
 * file: a light cloth carrying darker marks, i.e. a positive, full length.
 *
 * Content. The object's medieval history is unusually well documented and runs
 * in a line — Lirey 1353, Charny's death at Poitiers 1356, the bishops of Troyes,
 * Clement VII's bulls of 6 January 1390, Montfort 1418, Savoy 1453 — so that is
 * what the article now tells, with radiocarbon dating as the coda. Sources for
 * the dates: History of the Shroud of Turin and Geoffroi de Charny (Wikipedia),
 * Damon et al., Nature 337 (1989), and the Chambéry plaque recording the Poor
 * Clares' repair (Commons, File:Incendio 1532.jpg).
 *
 * Deliberately NOT written as fact: that Geoffroi de Charny owned the cloth (the
 * link rests on later family testimony and a pilgrim badge; the 1353 charter is
 * silent), and that the cloth came from Constantinople (an identification with
 * no document behind it). Both are said, and said to be what they are.
 *
 * Related entries. Third Crusade, Crusader States and Kingdom of Jerusalem were
 * removed: nothing in the object's documented history connects it to any of
 * them. They were category neighbours, which the Related Articles rules forbid.
 *
 * Prose notes: the auto-linker is case-insensitive, so "exhibition tours" would
 * have linked the city of Tours — the widow now "travelled with it". Rouen in
 * 1418 is written as "the Siege of Rouen" so it reaches the siege article rather
 * than the city. And Bishop Henri is named "Henri, bishop of Troyes", never by his
 * surname "de Poitiers" — the auto-linker would send that word to the city of
 * Poitiers, and a wrong link is worse than no link.
 *
 * Idempotent: re-running writes the same values.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))

const shroud = data.artifacts.find((a) => a.id === 'shroud-of-turin')
if (!shroud) throw new Error('shroud-of-turin not found')

const FILE = 'Shroudofturin_rotated.jpg'

Object.assign(shroud, {
  year: 1355,
  location: 'Lirey, Champagne; Chambéry; Turin Cathedral',
  image: `https://commons.wikimedia.org/wiki/Special:FilePath/${FILE}`,
  summary:
    'A linen cloth bearing the faint front-and-back image of a man, first recorded at Lirey in Champagne in the 1350s and radiocarbon-dated in 1988 to between 1260 and 1390.',
  details:
    "A strip of herringbone linen about 4.4 metres long, exhibited at Lirey from the 1350s, condemned as a painting by the bishops of Troyes, permitted by Clement VII in 1390 only as a representation of Christ's shroud, and acquired by the House of Savoy in 1453. It has been in Turin since 1578.",
  contentSections: [
    {
      title: 'Overview',
      paragraphs: [
        `The Shroud of Turin is a length of linen about 4.4 metres long and 1.1 metres wide carrying the faint image of the front and back of a naked man, head to head, as though a body had been laid along one half of the cloth and the other half drawn over it. It has been kept in Turin since 1578, and many Catholics venerate it as the cloth in which Jesus was buried.`,
        `Its medieval history is unusually well documented and runs in a straight line: first shown at the collegiate church of Lirey in Champagne in the 1350s, denounced as a painting by the bishops of Troyes, permitted by Clement VII in 1390 only as a representation of Christ's shroud, and passed to the House of Savoy in 1453. When the linen was radiocarbon-dated in 1988, the laboratories placed it between 1260 and 1390, the same window in which the documents first find it.`
      ]
    },
    {
      title: 'The cloth and its image',
      paragraphs: [
        `The linen is woven in a three-to-one herringbone twill. The figure is not drawn in outline but appears as a faint sepia discolouration, with the hands crossed over the groin, and it reads far more clearly in photographic negative than to the naked eye. That is why the first photograph of the cloth, taken by Secondo Pia on 28 May 1898, turned a late-medieval controversy into a modern one.`,
        `The most visible marks on the cloth are damage rather than the figure. On 4 December 1532 fire broke out in the chapel of the dukes of Savoy at Chambéry, and molten silver burned holes and scorch lines down both long sides of the linen. Poor Clare nuns of Chambéry repaired it between 16 April and 2 May 1534, sewing on fourteen large triangular patches and eight smaller ones over a Holland-cloth backing. The 2002 conservation removed the patches and the backing, an intervention that has itself been criticised as damaging.`
      ]
    },
    {
      title: 'First record: Lirey, 1353–1356',
      paragraphs: [
        `Geoffroi de Charny, lord of Savoisy and Lirey, founded a collegiate church at Lirey dedicated to the Annunciation on 20 June 1353. The foundation charter says nothing about the cloth. What ties him to it is later testimony from his son Geoffroi II and his granddaughter Margaret, and a pilgrim badge now in the Musée de Cluny in Paris showing the cloth beside the arms of Charny and of his wife Jeanne de Vergy.`,
        `Charny was a renowned knight of the French court, the author of a book of questions on chivalry, and in 1356 the bearer of the Oriflamme, the royal war banner, for John II of France. He was killed holding it at the Battle of Poitiers on 19 September 1356. The exhibitions at Lirey were probably overseen by his widow, and they drew enough notice for Henri, bishop of Troyes, to open an inquiry and stop them.`,
        `Attempts to give the cloth an earlier history, by identifying it with a burial cloth owned by the Byzantine emperors that vanished when the Fourth Crusade sacked Constantinople in 1204, rest on that identification alone. No document connects the Byzantine cloth to the one exhibited at Lirey a century and a half later.`
      ]
    },
    {
      title: 'Painted, or a representation: 1389–1390',
      paragraphs: [
        `In 1389 Pierre d'Arcis, bishop of Troyes, wrote to Clement VII, the Avignon pope of the Western Schism. His memorandum states that his predecessor Henri had found the cloth to be "cunningly painted", the truth "attested by the artist who had painted it". It names neither the artist nor any record of the inquiry. Charles VI of France ordered the cloth brought to Troyes, but his officers could not carry out the order.`,
        `Clement VII answered in four bulls dated 6 January 1390. The exhibitions could continue, but the cloth was not to be treated as a relic, and whoever displayed it had to declare that it was not the true shroud of Christ but an image or representation of it. The bulls attached indulgences to devotion on those terms, accepting neither d'Arcis's charge of forgery nor the cloth's claim to be a relic.`
      ]
    },
    {
      title: 'From Lirey to the House of Savoy, 1418–1453',
      paragraphs: [
        `In 1418 Humbert of Villersexel, count of La Roche and husband of Charny's granddaughter Margaret, took the cloth from Lirey for protection to his castle at Montfort in the Doubs. It was a year of open war in France: the Burgundians seized Paris that May, and by the end of July Henry V had begun the Siege of Rouen. After Humbert's death the Lirey canons sued for the cloth's return, but the parlement of Dole and the court at Besançon found for Margaret, who kept it and travelled with it, exhibiting it as she went.`,
        `The canons never had it back. In 1453 Margaret passed the cloth to Louis, duke of Savoy, receiving the castle of Varambon in return; the 1913 Catholic Encyclopedia dates the transfer to 1452. It is the last step in the cloth's medieval documentary history. In 1464 Louis agreed to pay the Lirey canons an annual sum to settle their claim, and the Shroud became a dynastic relic of the House of Savoy.`
      ]
    },
    {
      title: 'Dating the linen',
      paragraphs: [
        `On 21 April 1988 samples were cut from a single site on the main body of the cloth, away from the patches and scorch marks, and shared between laboratories at the University of Oxford, the University of Arizona in Tucson and ETH Zürich. Working independently, they placed the flax between 1260 and 1390 at 95 per cent confidence. The result was announced on 13 October 1988 and published by P. E. Damon and colleagues in Nature in 1989.`,
        `The dates fall across the decades in which the documents first find the cloth at Lirey. The principal objection, Raymond Rogers's argument that the sample came from a medieval repair rather than the original weave, has not persuaded textile specialists: the conservator Mechthild Flury-Lemberg judged invisible reweaving of that kind technically impossible without visible traces. How the image itself was formed has never been explained, and the Catholic Church has made no ruling on authenticity; Pope Francis called the cloth "an icon of a man scourged and crucified" while stopping short of calling it the burial cloth of Christ.`
      ]
    },
    {
      title: 'After 1453',
      paragraphs: [
        `The dukes of Savoy kept the cloth in their chapel at Chambéry, where the fire of 1532 marked it, and in 1578 moved it across the Alps to Turin, which had become their capital. There it was photographed by Secondo Pia in 1898 and by Giuseppe Enrie in 1931, and sampled for radiocarbon dating in 1988.`,
        `For medieval history the Shroud is most revealing as a record of how a contested relic was handled within a single century: a bishop of Troyes alleging fraud in the 1350s, a pope in 1390 permitting devotion while refusing to call the object a relic, lawsuits over its ownership after 1418, and a noble widow turning it into a duke's possession in 1453. Few objects show all of those processes at work on one thing.`
      ]
    }
  ],
  imageInfo: {
    caption: 'The Shroud of Turin photographed full-length by Giuseppe Enrie in 1931.',
    creator: 'Giuseppe Enrie',
    date: '1931',
    source: 'Wikimedia Commons',
    sourceUrl: `https://commons.wikimedia.org/wiki/File:${FILE}`,
    note: "Full-length photograph of the whole cloth, rotated to horizontal from Commons' vertical original (File:Shroudofturin.jpg). Shows the faint front and back images and the scorch lines and patches along both long edges left by the 1532 Chambéry fire. Public domain on Commons."
  },
  sources: [
    {
      title: 'Wikimedia Commons image record',
      author: 'Wikimedia Commons',
      type: 'image metadata',
      url: `https://commons.wikimedia.org/wiki/File:${FILE}`
    },
    {
      title: 'Radiocarbon dating of the Shroud of Turin',
      author: 'P. E. Damon et al., Nature 337 (1989), 611–615',
      type: 'journal article',
      url: 'https://www.nature.com/articles/337611a0'
    },
    {
      title: 'History of the Shroud of Turin',
      author: 'Wikipedia',
      type: 'reference work',
      url: 'https://en.wikipedia.org/wiki/History_of_the_Shroud_of_Turin'
    },
    {
      title: 'Encyclopaedia Britannica: Shroud of Turin',
      author: 'Encyclopaedia Britannica',
      type: 'reference work',
      url: 'https://www.britannica.com/topic/Shroud-of-Turin'
    }
  ],
  relatedEntries: {
    events: [
      {
        title: 'Battle of Poitiers',
        type: 'event',
        slug: 'battle-of-poitiers',
        label: 'Geoffroi de Charny, founder of the Lirey church, died here in 1356'
      },
      {
        title: "Hundred Years' War",
        type: 'event',
        slug: 'hundred-years-war',
        label: 'Taken from Lirey for protection in the war year of 1418'
      },
      {
        title: 'Fourth Crusade',
        type: 'event',
        slug: 'fourth-crusade',
        label: 'Unproven link to a burial cloth lost in the 1204 sack'
      }
    ],
    locations: [
      {
        title: 'Kingdom of France',
        type: 'location',
        slug: 'kingdom-of-france',
        label: 'First exhibited at Lirey and condemned at Troyes'
      }
    ]
  }
})

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log('shroud-of-turin rewritten:', shroud.contentSections.length, 'sections,',
  shroud.contentSections.reduce((n, s) => n + s.paragraphs.join(' ').length, 0), 'chars of prose')
