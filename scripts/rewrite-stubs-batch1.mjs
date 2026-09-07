/**
 * Stub rewrite, batch 1 — the five most consequential thin articles.
 *
 * Chosen by `scripts/audit-stubs.mjs`, which ranks by inbound links first: a stub
 * nobody links to is a gap, a stub that sixty articles send readers to is a
 * broken promise.
 *
 *   third-crusade              61 inbound links, 1,846 chars, no timeline
 *   battle-of-stamford-bridge  32 inbound links, 1,871 chars, no timeline
 *   al-andalus                 31 inbound links,   242 chars, one section
 *   first-crusade-called       30 inbound links, 1,182 chars, no timeline
 *   battle-of-stiklestad       13 inbound links,   845 chars, no timeline
 *
 * al-Andalus was the worst article in the archive by some distance: two
 * paragraphs and 242 characters, carrying the whole Reconquista corpus.
 *
 * Only contentSections, timeline, knownFor, relatedEntries and sources are
 * touched. Images, participants, strengths and battle continuity are left exactly
 * as they are — those already pass their validators and are not what was wrong.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const S = (title, ...paragraphs) => ({ title, paragraphs })
const all = [...data.events, ...data.locations, ...data.characters]
const get = (id) => all.find((x) => x.id === id)
const T = (d, t, x, links) => ({ date: d, title: t, description: x, ...(links ? { links } : {}) })
const src = (t, u, y = 'encyclopedia') => ({ title: t, url: u, type: y })
const before = {}
for (const id of ['third-crusade', 'battle-of-stamford-bridge', 'al-andalus', 'first-crusade-called', 'battle-of-stiklestad']) {
  before[id] = (get(id).contentSections ?? []).reduce((n, s) => n + s.paragraphs.join(' ').length, 0)
}

// ── al-Andalus ────────────────────────────────────────────────────────────────
const andalus = get('al-andalus')
andalus.aliases = [...new Set([...(andalus.aliases ?? []), 'Muslim Iberia', 'Moorish Spain', 'Andalus'])]
andalus.summary = 'Al-Andalus was Muslim-ruled Iberia, from the conquest of 711 to the fall of Granada in 1492 — for three centuries the wealthiest and most learned society in western Europe.'
andalus.knownFor = [
  'Conquered from the Visigothic kingdom in 711 and held, in shrinking form, until 1492.',
  'The Caliphate of Córdoba, proclaimed in 929, was the richest state in western Europe.',
  'Its scholars transmitted Aristotle, Greek medicine and Indian mathematics into Latin Europe.',
  'Fragmented into the taifa kingdoms after 1031 and was twice rescued by North African empires.',
  'Reduced to the Emirate of Granada after Las Navas de Tolosa in 1212.'
]
andalus.contentSections = [
  S('Overview',
    'Al-Andalus is the name Arabic sources give to the parts of the Iberian peninsula under Muslim rule, from the conquest that began in 711 to the surrender of Granada in 1492 — seven hundred and eighty-one years, though the territory at the end was a fraction of the territory at the start.',
    'For roughly its first three centuries it was the most economically advanced and intellectually productive society in western Europe. Córdoba in the tenth century had paved and lit streets, running water, hospitals and a library said to hold hundreds of thousands of volumes, at a time when the largest cities of Latin Christendom held a few thousand people.',
    'It is also the region this archive returns to most often, because the Reconquista, the Almoravids, the Almohads, the military orders and half the Iberian kingdoms are all defined against it.'),
  S('The conquest',
    'In 711 a force under Tariq ibn Ziyad crossed from North Africa and destroyed the Visigothic king Roderic at the Guadalete. The Visigothic kingdom collapsed with a speed that has been argued about ever since — it had been weakened by succession disputes, and substantial parts of its nobility came to terms rather than fight.',
    'Within a decade almost the whole peninsula was under Muslim control, and raiding parties had crossed the Pyrenees into Frankish Gaul. The advance north was checked near Tours in 732, and the frontier settled along the Duero and the Ebro.',
    'What remained Christian was the mountainous north — Asturias, and later León, Navarre, Aragon and the Catalan counties. The Battle of Covadonga, traditionally dated to 722, is where later Christian tradition placed the beginning of the Reconquista, though it was a small engagement enlarged by hindsight.'),
  S('Emirate and caliphate',
    'When the Abbasids destroyed the Umayyad dynasty in Syria in 750, one prince escaped: Abd al-Rahman I reached Iberia in 756 and made himself emir of Córdoba, founding a state independent of Baghdad in fact if not in theory.',
    'His descendants ruled for two and a half centuries. In 929 Abd al-Rahman III took the title of caliph outright, in direct challenge to both Baghdad and the Fatimids of Egypt, and built the palace-city of Madinat al-Zahra outside Córdoba as its expression.',
    'The tenth-century caliphate is the high point. Christian kings in the north paid tribute, embassies came from Constantinople and the German emperors, and the state ran on a professional army, a gold coinage and an agricultural system transformed by irrigation techniques and crops — citrus, rice, sugar cane, cotton — brought from the eastern Islamic world.'),
  S('Learning',
    'Al-Andalus is the principal route by which Greek philosophy and science reached Latin Europe, and this is not a small claim about a cultural ornament — it is most of the intellectual history of the twelfth century.',
    'Ibn Rushd, known in Latin as Averroes, wrote the commentaries on Aristotle that shaped scholastic philosophy for three centuries; Maimonides, born in Córdoba, is the central figure of medieval Jewish thought; al-Zahrawi\'s surgical encyclopaedia was used in European medicine into the eighteenth century.',
    'The transmission ran largely through Toledo after its capture in 1085, where Arabic and Hebrew texts were translated into Latin by teams of Christian, Jewish and Muslim scholars. The convenient word for the coexistence that made this possible is convivencia, and it should be used carefully: the relationship between the three communities ranged from genuine collaboration to legal subordination to episodes of massacre, and it varied by century and by ruler.'),
  S('The taifas',
    'The caliphate destroyed itself. A succession crisis after 1009 became a civil war, and in 1031 the caliphate was formally abolished, leaving perhaps thirty independent principalities — the taifa kingdoms — at Seville, Zaragoza, Toledo, Granada, Badajoz and elsewhere.',
    'They were militarily feeble and culturally brilliant: the taifa courts competed in poetry and patronage while paying protection money, the parias, to the Christian kings in the north. That tribute is what funded the expansion of León-Castile, and it is the mechanism by which the balance of the peninsula reversed.',
    'It was also unsustainable. When Alfonso VI took Toledo in 1085 — the old Visigothic capital, and a shock to the whole Muslim world — the taifa rulers appealed to North Africa for help.'),
  S('Almoravids and Almohads',
    'The Almoravids came from Morocco in 1086, beat Alfonso VI at Sagrajas, and then annexed the taifa kingdoms they had come to rescue. The Almohads replaced them from the 1140s and did the same thing again, defeating Castile heavily at Alarcos in 1195.',
    'Both were reforming Berber movements from the Maghreb, and both regarded the Andalusi elite as decadent. The intellectual life of al-Andalus continued under them — Averroes served the Almohad caliphs — but the political independence of Muslim Iberia did not survive its rescuers.',
    'The reversal came at Las Navas de Tolosa in 1212, where a coalition of Castile, Aragon and Navarre destroyed the Almohad army. Within forty years Córdoba, Seville and Valencia had all fallen.'),
  S('Granada and the end',
    'What survived was the Emirate of Granada, founded in 1238 under the Nasrid dynasty, holding the mountainous south-east and surviving as a tributary of Castile for two and a half centuries.',
    'It was small, rich, and skilled at playing Castile\'s internal divisions against each other, and it built the Alhambra — the most complete surviving palace complex of the Islamic middle ages anywhere.',
    'The union of Castile and Aragon under Isabella and Ferdinand ended it. Granada surrendered on 2 January 1492, and the terms guaranteeing Muslim religious practice were abandoned within a decade; expulsions and forced conversions followed for both Muslims and Jews.'),
  S('Legacy',
    'The material legacy is visible from Córdoba to Granada — the Great Mosque, the Giralda, the Alhambra, and the irrigation systems of Valencia and Murcia still in use.',
    'The linguistic legacy is in Spanish, which carries several thousand words of Arabic origin, and in the technical vocabulary of European mathematics and astronomy: algebra, algorithm, zenith, azimuth, cipher.',
    'The intellectual legacy is the largest and the least visible. The Aristotle that European universities argued over from the thirteenth century arrived through Arabic translation and Andalusi commentary, and the scholastic method that shaped western thought was built on it.')
]
andalus.timeline = [
  T('711', 'The conquest begins', 'Tariq ibn Ziyad crosses from North Africa and destroys the Visigothic king Roderic at the Guadalete.'),
  T('732', 'Checked in Gaul', 'The northward advance is stopped near Tours; the frontier settles in northern Iberia.', [{ title: 'Battle of Tours', type: 'event', slug: 'battle-of-tours' }]),
  T('756', 'The emirate of Córdoba', 'Abd al-Rahman I, the surviving Umayyad prince, establishes a state independent of Baghdad.'),
  T('929', 'The caliphate proclaimed', 'Abd al-Rahman III takes the title of caliph and builds Madinat al-Zahra.'),
  T('1031', 'The caliphate abolished', 'Civil war ends the Umayyad state; some thirty taifa kingdoms replace it.'),
  T('1085', 'Toledo falls', 'Alfonso VI takes the old Visigothic capital, and the taifa rulers appeal to North Africa.'),
  T('1086', 'The Almoravids arrive', 'Alfonso VI is beaten at Sagrajas; the rescuers then annex the kingdoms they came to save.', [{ title: 'Battle of Sagrajas', type: 'event', slug: 'battle-of-sagrajas' }]),
  T('1195', 'Alarcos', 'The Almohads defeat Castile heavily and the Christian advance stalls for a generation.', [{ title: 'Battle of Alarcos', type: 'event', slug: 'battle-of-alarcos' }]),
  T('1212', 'Las Navas de Tolosa', 'A Christian coalition destroys the Almohad army; the balance of the peninsula turns for good.', [{ title: 'Battle of Las Navas de Tolosa', type: 'event', slug: 'battle-of-las-navas-de-tolosa' }]),
  T('1236–1248', 'Córdoba and Seville fall', 'The great cities of the Guadalquivir pass to Castile within twelve years.'),
  T('1238', 'The Emirate of Granada', 'The Nasrid dynasty establishes the last Muslim state in Iberia, as a tributary of Castile.'),
  T('1492', 'Granada surrenders', 'The last emir gives up the city on 2 January; expulsions and forced conversions follow within a decade.')
]
andalus.sources = [
  src('Ibn Khaldun, Muqaddimah', 'https://en.wikipedia.org/wiki/Muqaddimah', 'primary source'),
  src('Al-Andalus', 'https://en.wikipedia.org/wiki/Al-Andalus'),
  { title: 'The Metropolitan Museum of Art — Islamic art collection', url: 'https://www.metmuseum.org/about-the-met/collection-areas/islamic-art', type: 'museum collection', institution: 'The Metropolitan Museum of Art' }
]

// ── The Third Crusade ─────────────────────────────────────────────────────────
const third = get('third-crusade')
third.summary = 'The Third Crusade (1189–1192) was western Europe\'s answer to Saladin\'s capture of Jerusalem: three kings set out, one drowned, one went home, and the third failed to take the city and settled for access to it.'
third.contentSections = [
  S('Overview',
    'Saladin destroyed the army of the kingdom of Jerusalem at Hattin in July 1187 and took the city itself in October. Within two years almost every Latin possession in the Holy Land had fallen except Tyre.',
    'The response was the largest crusading effort yet mounted: the German emperor Frederick Barbarossa, Philip II of France and Richard I of England all took the cross, in what was intended to be a decisive reconquest.',
    'It was not. Barbarossa drowned in Anatolia before reaching Syria, Philip went home after the fall of Acre, and Richard — who won every battle he fought — twice advanced within sight of Jerusalem and twice turned back. The crusade ended in 1192 with a treaty that left the city in Muslim hands and the coast in Christian ones.'),
  S('Background',
    'The kingdom of Jerusalem had been living on borrowed time for a generation, and the succession crisis after the death of the leper king Baldwin IV brought it to a head. Guy of Lusignan took an army into waterless country in July 1187 and lost it at the Horns of Hattin.',
    'The True Cross was captured with the army. Jerusalem, defended by a garrison of the men Hattin had not killed, surrendered on terms in October, and Saladin permitted the Christian population to ransom itself rather than sacking the city — a deliberate contrast with the crusader conquest of 1099 that western writers found difficult to explain.',
    'News of the fall reportedly killed Pope Urban III, and the crusade was preached across Europe. England and France raised the Saladin tithe, a general tax on movable property, which was resented in exactly the way general taxes are.'),
  S('The three kings',
    'Frederick Barbarossa left in 1189 with the largest army of the three, marched overland through Hungary and Anatolia, beat the Seljuks at Iconium — and drowned crossing a river in Cilicia in June 1190. Most of his army turned round and went home.',
    'Richard I and Philip II travelled by sea. Richard took Cyprus from its Byzantine ruler on the way, which was not part of the plan and turned out to be the crusade\'s most durable acquisition — it remained a Latin kingdom for four centuries.',
    'The two kings loathed each other. Philip left for France within weeks of Acre falling, having secured what he needed, and spent the following years attacking Richard\'s continental possessions while Richard was still on crusade.'),
  S('Acre and Arsuf',
    'Guy of Lusignan had begun besieging Acre in 1189 with a force too small for the task, and the siege became the crusade\'s centre of gravity: a Christian army besieging a city while itself besieged by Saladin\'s field army outside.',
    'It lasted two years, killed enormous numbers on both sides through disease and starvation, and ended in July 1191 when the city surrendered shortly after the kings arrived. Richard then had some two thousand seven hundred prisoners executed when the surrender terms were not met on time — an act his own admirers found hard to defend.',
    'Marching south along the coast, he beat Saladin at Arsuf in September 1191 in a battle that demonstrated what disciplined crusader cavalry could do when it did not charge too early. He took Jaffa, and the road to Jerusalem was open.'),
  S('Why Jerusalem was not taken',
    'Richard advanced towards Jerusalem twice, in early 1192 and again that summer, and turned back both times without attempting a siege. It is the decision the crusade is judged on and it was almost certainly correct.',
    'The military argument was that taking the city was possible and holding it was not: Saladin\'s field army was intact, the crusaders\' supply line from the coast was long and exposed, and most of the army intended to go home once the city was taken, leaving a garrison too small to keep it.',
    'The political argument was that Philip II was attacking his lands in France and his brother John was intriguing in England. Both were true. The tradition that Richard refused to look at the city he could not take is a later embellishment, and a good one.'),
  S('The treaty and after',
    'The Treaty of Jaffa in September 1192 ended the crusade. Saladin kept Jerusalem; the Latins kept the coast from Tyre to Jaffa; and Christian pilgrims were guaranteed access to the holy places.',
    'Richard sailed home and was shipwrecked, captured by the duke of Austria — whose banner he had thrown down at Acre — and handed to the German emperor, who held him for a ransom that took a special tax in England to raise.',
    'Saladin died in Damascus in March 1193, six months after the treaty, having spent his last years exhausted and his treasury empty.'),
  S('Significance',
    'The crusade failed in its stated objective and succeeded in almost everything else: it recovered the coast, secured the kingdom of Jerusalem for another century, and took Cyprus.',
    'It also established the reputations that outlived it. Richard\'s military competence and Saladin\'s reputation for magnanimity both date substantially from these three years, and both were built by writers on the other side as much as their own.',
    'And it exhausted the model. The Fourth Crusade, launched a decade later, never reached the Holy Land at all — it sacked Constantinople instead, which did more damage to eastern Christendom than any Muslim victory.')
]
third.timeline = [
  T('July 1187', 'Hattin', 'Saladin destroys the army of the kingdom of Jerusalem and captures the True Cross.', [{ title: 'Battle of Hattin', type: 'event', slug: 'battle-of-hattin' }]),
  T('October 1187', 'Jerusalem surrenders', 'The city capitulates on terms; the Christian population is permitted to ransom itself.'),
  T('1189', 'The siege of Acre begins', 'Guy of Lusignan invests the city with a force too small to take it.'),
  T('June 1190', 'Barbarossa drowns', 'The German emperor dies crossing a river in Cilicia and most of his army goes home.'),
  T('May 1191', 'Richard takes Cyprus', 'An unplanned conquest that becomes the crusade\'s most durable acquisition.'),
  T('July 1191', 'Acre falls', 'The city surrenders after two years; Philip II leaves for France within weeks.'),
  T('August 1191', 'The prisoners executed', 'Richard has some 2,700 prisoners killed when the surrender terms are not met on time.'),
  T('September 1191', 'Arsuf', 'Richard defeats Saladin in the field on the march south to Jaffa.', [{ title: 'Battle of Arsuf', type: 'event', slug: 'battle-of-arsuf' }]),
  T('1192', 'Two advances on Jerusalem', 'Richard comes within reach of the city twice and turns back both times without a siege.'),
  T('September 1192', 'The Treaty of Jaffa', 'Saladin keeps Jerusalem, the Latins keep the coast, and pilgrims are guaranteed access.'),
  T('December 1192', 'Richard captured', 'Shipwrecked on the way home, he is taken by the duke of Austria and held for ransom.'),
  T('March 1193', 'Death of Saladin', 'He dies at Damascus six months after the treaty, his treasury empty.')
]

// ── The First Crusade called ──────────────────────────────────────────────────
const clermont = get('first-crusade-called')
clermont.summary = 'At Clermont in November 1095 Urban II called on the knighthood of western Europe to march to the aid of the eastern Christians and recover Jerusalem — and got a far larger response than he had asked for.'
clermont.contentSections = [
  S('Overview',
    'On 27 November 1095, at the end of a church council at Clermont in the Auvergne, Pope Urban II preached a sermon in an open field outside the city to a crowd too large for the cathedral.',
    'He called on the knights of the west to stop fighting each other and go to the aid of the eastern Christians, and to recover Jerusalem. He offered those who went the remission of penance for their sins.',
    'The response exceeded anything he had planned for. Within four years an army had crossed Anatolia, taken Antioch and stormed Jerusalem — and the framework of holy war Urban improvised at Clermont shaped European politics for the next two centuries.'),
  S('Background',
    'The immediate cause was a request from Constantinople. The Byzantine emperor Alexios I, rebuilding after the loss of Anatolia to the Seljuk Turks, sent envoys to a council at Piacenza in March 1095 asking for western mercenaries.',
    'That is what he asked for and it is not what he got. Urban converted a request for troops into an armed pilgrimage under papal authority — a different thing entirely, with its own leadership, its own objectives and no obligation to serve a Greek emperor.',
    'The papacy had its own reasons. Urban was in the middle of the Investiture Controversy with the German emperor, had a rival pope in Rome, and led a reform movement that had been trying for decades to direct aristocratic violence outward. A war fought at the pope\'s call, by an army that answered to a papal legate, answered several problems at once.'),
  S('The sermon and what it said',
    'Five accounts of the sermon survive and no two agree. All of them were written after Jerusalem had fallen in 1099, by men shaping a speech to fit an outcome they already knew, and one of the five was not present.',
    'What the versions share is a call to aid the eastern Christians, an account of atrocities against pilgrims, an appeal to knightly honour, and the offer of an indulgence. The cry "Deus vult" — God wills it — is reported as the crowd\'s response, and may well be the one detail everyone remembered accurately.',
    'What is genuinely uncertain is how central Jerusalem was to what Urban actually said, as opposed to what the chroniclers put in his mouth once the city had been taken. Historians have argued the point for a century, and the archive states it as unresolved rather than picking a side.'),
  S('The response',
    'Urban expected a disciplined force of knights departing the following August. What happened first was the People\'s Crusade: tens of thousands of poor pilgrims under preachers including Peter the Hermit, who left months early, massacred Jewish communities in the Rhineland on the way, and were destroyed by the Turks in Anatolia within weeks of crossing.',
    'The pogroms of 1096 are the first mass violence against European Jewry of this kind, and they were carried out against the explicit instruction of local bishops, several of whom tried to shelter the communities and failed.',
    'The princes\' armies left in August 1096 as planned, under Raymond of Toulouse, Godfrey of Bouillon, Bohemond of Taranto and others — no king among them, and no single commander. They reached Constantinople, quarrelled with Alexios over oaths, crossed into Anatolia, took Antioch after an eight-month siege, and stormed Jerusalem on 15 July 1099.'),
  S('Significance',
    'Clermont created the crusade as an institution: a war with a papal indulgence attached, fought by volunteers who took a vow, with legal protections for their property while away. Every later crusade — to the Holy Land, against the Albigensians, in Iberia, in the Baltic — works within the framework improvised here.',
    'It also permanently altered the relationship between eastern and western Christendom. Alexios asked for mercenaries and received an independent armed movement that founded its own states in territory he regarded as imperial; the mutual grievance that produced runs directly to the sack of Constantinople in 1204.',
    'And the indulgence had consequences the reformers did not intend. The idea that an act could remit penance, and later that it could be extended and eventually purchased, is one of the threads that leads to the Reformation four centuries later.')
]
clermont.timeline = [
  T('1071', 'Manzikert', 'The Byzantine defeat opens Anatolia to the Seljuk Turks and begins the crisis Alexios inherits.', [{ title: 'Battle of Manzikert', type: 'event', slug: 'battle-of-manzikert' }]),
  T('March 1095', 'The appeal from Constantinople', 'Alexios I\'s envoys ask the Council of Piacenza for western mercenaries.'),
  T('27 November 1095', 'The sermon at Clermont', 'Urban II calls for an armed pilgrimage and offers the remission of penance.'),
  T('Spring 1096', 'The People\'s Crusade', 'Tens of thousands leave early under popular preachers, months before the appointed date.'),
  T('1096', 'The Rhineland massacres', 'Jewish communities are attacked and destroyed, against the efforts of local bishops.'),
  T('August 1096', 'The princes depart', 'The main armies leave under Raymond of Toulouse, Godfrey of Bouillon and Bohemond of Taranto.'),
  T('June 1098', 'Antioch taken', 'The crusade takes the city after an eight-month siege and is then besieged inside it.'),
  T('15 July 1099', 'Jerusalem stormed', 'The city is taken and its population massacred; the crusader states are founded.')
]

// ── Stamford Bridge ───────────────────────────────────────────────────────────
const stamford = get('battle-of-stamford-bridge')
stamford.contentSections = [
  S('Overview',
    'On 25 September 1066 Harold Godwinson destroyed a Norwegian invasion army at Stamford Bridge, seven miles east of York, killing its king, Harald Hardrada, and his own brother Tostig.',
    'It was a complete victory won by a forced march of about two hundred miles in four days, and it arrived as a total surprise: the Norwegians were encamped without most of their armour, having taken hostages from York two days earlier.',
    'Nineteen days later Harold was dead at Hastings, sixty miles from the south coast, having marched his army the length of England twice in three weeks. Stamford Bridge is therefore both one of the most impressive feats of arms in English history and a substantial part of the reason the English lost the country.'),
  S('Background',
    'The death of Edward the Confessor in January 1066 left three serious claimants: Harold Godwinson, crowned immediately; William of Normandy, who claimed a promise; and Harald Hardrada of Norway, whose claim ran through an agreement between earlier kings and who had spent his life fighting for thrones.',
    'Hardrada was joined by Tostig Godwinson, Harold\'s own brother, exiled from the earldom of Northumbria the previous year after a rising against him.',
    'They landed in September with something over three hundred ships, took York, and beat the northern earls Edwin and Morcar at Fulford on 20 September. Harold was on the south coast waiting for William, and the news reached him within days.'),
  S('The march',
    'Harold moved north immediately with his housecarls and whatever levies could keep up, covering the distance from London to Yorkshire in about four days.',
    'The Norwegians knew nothing of it. They had arranged to receive hostages from the Yorkshire nobility at Stamford Bridge on 25 September, and had left roughly a third of their force with the ships at Riccall, some miles away.',
    'It was a warm day and they had left most of their mail behind. The first the Norwegian army knew of an English army was seeing the dust of one approaching.'),
  S('The battle',
    'The fighting was hard despite the surprise. The Norwegians formed a shield wall on the far bank and were driven back; Hardrada was killed by an arrow through the throat while fighting in the front rank, and Tostig died later in the day.',
    'The story everyone knows — a single Norse axeman holding the bridge alone against the English army until a man in a barrel speared him from beneath — appears only in a manuscript of the Anglo-Saxon Chronicle written some decades afterwards, and not in the earliest versions. It is a very good story and it is not contemporary evidence.',
    'The reinforcements from the ships arrived late and exhausted and were destroyed in their turn. The Norwegian survivors needed twenty-four ships to sail home out of the three hundred or more that had come.'),
  S('Aftermath',
    'Harold accepted the surrender of Hardrada\'s son and let him go, which was a mark of a decisive victory rather than of generosity.',
    'Three days later he learned that William had landed at Pevensey on 28 September — the wind that had pinned the Norman fleet in port all summer had finally turned, at the exact moment the English army was two hundred and fifty miles away.',
    'Harold marched south, gathered what forces he could, and fought at Hastings on 14 October with an army that had marched the length of the country twice and had left many of its best men on the field in Yorkshire.'),
  S('Significance',
    'Stamford Bridge ended the Scandinavian claim to England, which had been live since Cnut and had produced two dynasties. It is a genuine end point: no Norwegian king ever came so close again.',
    'It also decided Hastings, though not in the way the victors would have wanted. An army that had not marched to Yorkshire and back, and had not lost men at Stamford Bridge, would have met William fresh and in greater numbers.',
    'Hardrada is often called the last Viking, which is a neat phrase for a man who had served in the Varangian Guard at Constantinople, fought in Sicily and Palestine, ruled Norway for twenty years and died invading England. He is in this archive precisely because his career runs through most of it.')
]
stamford.timeline = [
  T('January 1066', 'Edward the Confessor dies', 'Harold Godwinson is crowned; William of Normandy and Harald Hardrada both claim the throne.'),
  T('September 1066', 'The Norwegians land', 'Hardrada and Tostig arrive with over three hundred ships and take York.'),
  T('20 September 1066', 'Fulford', 'The northern earls Edwin and Morcar are defeated outside York.', [{ title: 'Battle of Fulford', type: 'event', slug: 'battle-of-fulford' }]),
  T('c. 21–24 September 1066', 'The forced march', 'Harold covers roughly two hundred miles from the south coast in about four days.'),
  T('25 September 1066', 'Stamford Bridge', 'The Norwegian army is destroyed; Hardrada is killed by an arrow and Tostig falls later in the day.'),
  T('28 September 1066', 'William lands at Pevensey', 'The Norman fleet crosses three days after the battle, with the English army in Yorkshire.'),
  T('14 October 1066', 'Hastings', 'Harold fights and dies with an army that has marched the length of England twice in three weeks.', [{ title: 'Battle of Hastings', type: 'event', slug: 'battle-of-hastings' }])
]

// ── Stiklestad ────────────────────────────────────────────────────────────────
const stiklestad = get('battle-of-stiklestad')
stiklestad.contentSections = [
  S('Overview',
    'On 29 July 1030 Olaf II Haraldsson, attempting to recover the Norwegian throne he had lost to Cnut the Great, was defeated and killed at Stiklestad in Trøndelag by an army of Norwegian magnates and farmers.',
    'It was a defeat so complete that it should have ended his cause, and instead it created a saint. Within a year miracles were being reported at his grave, within twelve months he had been declared holy by the local bishop, and within a generation Norway was Christian in a way his reign had failed to make it.',
    'Olaf became the eternal king of Norway, the country\'s patron saint, and the focus of a cult that reached from Iceland to Constantinople — where his half-brother Harald Hardrada, who fought here as a boy of fifteen, later served in the Varangian Guard.'),
  S('Background',
    'Olaf had ruled Norway from about 1015, imposing Christianity and royal authority on a country used to neither, and doing it with a directness that made enemies of exactly the regional magnates whose support he needed.',
    'Cnut the Great, ruling England and Denmark, funded that opposition. In 1028 he arrived with a fleet, Olaf\'s support evaporated, and the king fled into exile among the Rus\' at Kiev.',
    'He returned in 1030 with a small force, gathering what support he could as he came south-west through Sweden into Trøndelag — the heartland of the old aristocracy and of resistance to him.'),
  S('The battle',
    'The armies met at Stiklestad on 29 July. The force opposing Olaf was substantially larger and drawn from the local magnates and the farmers they led, and the sagas name three men as delivering his death wounds.',
    'Everything vivid about the battle comes from Snorri Sturluson and the other saga writers of the twelfth and thirteenth centuries, writing two hundred years later about a saint. Their accounts are literature and hagiography before they are reporting.',
    'One detail is worth naming as a caution: the sagas describe the sun darkening as Olaf fell, and a solar eclipse did occur in 1030 — but on 31 August, a month after the battle, and not visible as described in Norway. It is the clearest available demonstration of how the account was shaped after the fact.'),
  S('The cult',
    'Olaf\'s body was buried in secret at Nidaros, and within a year reports of miracles and of the incorruption of the body had begun. Bishop Grimkell declared him holy on 3 August 1031.',
    'The political effect was immediate and entirely against the victors. Cnut\'s son Svein ruled Norway badly and was driven out by 1035, and Olaf\'s son Magnus the Good was brought back from exile and made king — restored by the same magnates who had killed his father five years earlier.',
    'Nidaros, modern Trondheim, became the greatest pilgrimage site in northern Europe, and the cathedral built over the grave is still Norway\'s national church. Churches to St Olaf were founded across Scandinavia, in the British Isles, in the Baltic and in Constantinople.'),
  S('Significance',
    'Stiklestad is the clearest case in this archive of a battle whose military result was reversed entirely by what people made of it afterwards. Olaf lost, and Olaf won.',
    'It also completed the Christianisation of Norway more effectively than his reign had. A martyred royal saint gave the new religion a national focus that missionary work had failed to supply, and the conversion stopped being something imposed from outside.',
    'And it sent Harald Hardrada into exile. He fled the field at fifteen, went east to the Rus\' and then to Constantinople, served in the Varangian Guard, came back rich, took the Norwegian throne, and died invading England at Stamford Bridge in 1066 — which is where this archive picks him up again.')
]
stiklestad.timeline = [
  T('c. 1015', 'Olaf takes the throne', 'He begins imposing Christianity and royal authority on a country resistant to both.'),
  T('1028', 'Cnut invades', 'Backed by Cnut\'s money, the magnates abandon Olaf and he flees into exile among the Rus\'.'),
  T('1030', 'The return', 'Olaf comes back through Sweden with a small force, gathering support as he goes.'),
  T('29 July 1030', 'Stiklestad', 'Olaf is defeated and killed by an army of magnates and farmers; his half-brother Harald, aged fifteen, escapes.'),
  T('3 August 1031', 'Declared a saint', 'Bishop Grimkell proclaims Olaf holy a year after the battle, on reports of miracles at the grave.'),
  T('1035', 'Magnus restored', 'Olaf\'s son is brought back from exile and made king by the men who killed his father.'),
  T('1066', 'Stamford Bridge', 'Harald Hardrada, who fled this field at fifteen, dies invading England.', [{ title: 'Battle of Stamford Bridge', type: 'event', slug: 'battle-of-stamford-bridge' }])
]

for (const [id, was] of Object.entries(before)) {
  const now = get(id).contentSections.reduce((n, s) => n + s.paragraphs.join(' ').length, 0)
  console.log(`${id.padEnd(28)} ${String(was).padStart(5)} -> ${String(now).padStart(5)} chars, timeline ${(get(id).timeline ?? []).length}`)
}

writeFileSync(dataPath, JSON.stringify(data, null, 2))
