/**
 * Second images for the four M13 articles that shipped with one.
 *
 * The five battles all carry two or three images; the two polities and the two
 * people did not, and the archive's editorial standard for major figures and
 * anchor realms is a strong main image plus one or two supporting section
 * figures. Each of these was fetched and looked at before use.
 *
 * The Rashidun conquest map is the interesting case. It is the better map by a
 * distance — phased by caliph, with scale bar and compass — but its legend is
 * entirely in Arabic, so it could not lead the article for an English-reading
 * audience. As a section image it works, because the caption can carry the four
 * phases the colours encode and the reader loses nothing.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const img = (f) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(f)}`

const find = (id) => [...data.locations, ...data.characters].find((a) => a.id === id)

const add = (id, section, file, caption, meta) => {
  const a = find(id)
  if (!a) throw new Error(`missing ${id}`)
  a.sectionImages ??= []
  const src = img(file)
  if (a.sectionImages.some((s) => s.src === src)) return
  a.sectionImages.push({ section, src, caption, ...meta })
  console.log(`${id} += "${section}"`)
}

add('rashidun-caliphate', 'The conquests',
  'Map of Rashidun Caliphate Conquests (632–656 CE).png',
  'The conquests phase by phase: the territory held at Muhammad\'s death, then the gains under Abu Bakr, under Umar, and under Uthman.',
  {
    creator: 'Wikimedia Commons contributor, after Muhammad al-Salimi',
    date: 'modern map of 632–656',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Map_of_Rashidun_Caliphate_Conquests_(632%E2%80%93656_CE).png',
    note: 'The legend is in Arabic, so the phases are given here instead: purple is the territory held when Muhammad died in 632, green the conquests under Abu Bakr (632–634), red those under Umar (634–644) — which is Syria, Egypt and Persia — and yellow those under Uthman (644–656). The dotted line marks the shifting Muslim–Byzantine frontier zone. CC BY 4.0.'
  })

add('sultanate-of-rum', 'Konya and the Seljuk cultural flowering',
  'Konya Alaeddin Mosque 3945.jpg',
  'The Alâeddin Mosque on the citadel hill at Konya, with the dome over the remains of the Seljuk palace in the foreground.',
  {
    creator: 'Photograph by Dosseman',
    date: 'modern photograph of a twelfth-century building',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Konya_Alaeddin_Mosque_3945.jpg',
    note: 'The dynastic mosque of the sultans of Rum, built and extended across the twelfth century on the citadel mound. The palace whose remains are sheltered under the modern dome is the building the enthronement tile of Kilij Arslan II came from. CC BY-SA 4.0.'
  })

add('khalid-ibn-al-walid', 'Legacy',
  'Homs Khalid Ibn al-Walid Mosque 3057.jpg',
  'The portico of the Khalid ibn al-Walid Mosque at Homs, which holds his reputed tomb.',
  {
    creator: 'Photograph by Dosseman',
    date: 'photographed 2008',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Homs_Khalid_Ibn_al-Walid_Mosque_3057.jpg',
    note: 'The present building is not medieval: it was rebuilt between 1908 and 1913 on the site of an Ayyubid mosque, in the banded ablaq masonry of the Syrian tradition. The tomb it shelters is a reputed one — Medina is also claimed as his burial place. Photographed before the Syrian civil war, in which the mosque was damaged. CC BY-SA 4.0.'
  })

add('kilij-arslan-ii', 'Legacy',
  'Türbe Kilij Arslan II.jpg',
  'The türbe of Kilij Arslan II in the courtyard of the Alâeddin Mosque at Konya, holding the tombs of the sultans of Rum.',
  {
    creator: 'Wikimedia Commons contributor',
    date: 'modern photograph of a twelfth-century tomb',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:T%C3%BCrbe_Kilij_Arslan_II.jpg',
    note: 'The octagonal plan under a conical roof is the standard Anatolian Seljuk tomb form, and the band below the roofline carries a Qur\'anic inscription. It was begun in his reign and holds several sultans of Rum besides him. CC BY-SA 3.0.'
  })

writeFileSync(dataPath, JSON.stringify(data, null, 2))
