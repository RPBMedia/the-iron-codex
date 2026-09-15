// Adds ruler succession data (predecessor/successor) to every ruler article.
// Run with --report to list referenced person slugs that do not exist yet.
// See CLAUDE.md "Ruler Succession Boxes".
import fs from 'node:fs'

const dataPath = new URL('../server/data/history.json', import.meta.url)
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))

const P = (personSlug, displayName, note) => ({ personSlug, displayName, ...(note ? { note } : {}) })
const NONE = (displayName, note) => ({ status: 'none', displayName, note })
const UNLINKED = (displayName, note) => ({ displayName, ...(note ? { note } : {}) })
const ENDED = (displayName, note) => ({ status: 'office-ended', displayName, note })

// office, predecessor, successor. Unlinked entries name a real historical
// person for whom no Codex article exists AND none is planned — always with a
// note. Slugged entries must resolve to a Person article.
const SUCCESSION = {
  // ── ENGLAND / WESSEX ──────────────────────────────────────────────────────
  'alfred-the-great': { office: 'King of Wessex', predecessor: P('aethelred-i-of-wessex', 'Æthelred I of Wessex', 'His elder brother, killed fighting the Great Heathen Army'), successor: P('edward-the-elder', 'Edward the Elder') },
  'cnut-the-great': { office: 'King of England', note: 'Succession shown for the English kingship; Cnut also ruled Denmark and Norway.', predecessor: P('edmund-ironside', 'Edmund Ironside', 'Their agreed division of England ended with Edmund\'s death in November 1016'), successor: P('harold-harefoot', 'Harold Harefoot', 'Cnut\'s son by Ælfgifu of Northampton; Harthacnut held Denmark') },
  'harthacnut': { office: 'King of Denmark', note: 'Succession shown for Denmark; he also took the English crown in 1040 after Harold Harefoot\'s death.', predecessor: P('cnut-the-great', 'Cnut the Great'), successor: P('magnus-the-good', 'Magnus the Good', 'Took Denmark under their treaty that whichever king outlived the other should inherit') },
  'edward-the-confessor': { office: 'King of England', predecessor: P('harthacnut', 'Harthacnut', 'His half-brother, who had invited him back from Norman exile'), successor: P('harold-godwinson', 'Harold Godwinson', 'Elected by the witan; the disputed succession of 1066 followed') },
  'harold-godwinson': { office: 'King of England', predecessor: P('edward-the-confessor', 'Edward the Confessor'), successor: P('william-the-conqueror', 'William the Conqueror', 'By conquest at Hastings; Edgar Ætheling\'s brief election was never made effective') },
  'william-the-conqueror': { office: 'King of England', predecessor: P('harold-godwinson', 'Harold Godwinson', 'Defeated and killed at Hastings'), successor: P('william-ii-of-england', 'William II Rufus', 'His second surviving son; Robert Curthose received Normandy') },
  'richard-the-lionheart': { office: 'King of England', predecessor: P('henry-ii-of-england', 'Henry II of England', 'His father'), successor: P('john-of-england', 'John', 'His brother, over the rival claim of their nephew Arthur of Brittany') },
  'edward-i-of-england': { office: 'King of England', predecessor: P('henry-iii-of-england', 'Henry III of England', 'His father'), successor: P('edward-ii-of-england', 'Edward II of England') },
  'edward-ii-of-england': { office: 'King of England', predecessor: P('edward-i-of-england', 'Edward I of England'), successor: P('edward-iii-of-england', 'Edward III of England', 'Crowned after his father\'s forced abdication in 1327') },
  'edward-iii-of-england': { office: 'King of England', predecessor: P('edward-ii-of-england', 'Edward II of England'), successor: P('richard-ii-of-england', 'Richard II of England', 'His grandson; the Black Prince had died the year before') },
  'henry-v-of-england': { office: 'King of England', predecessor: P('henry-iv-of-england', 'Henry IV of England', 'His father, the first Lancastrian king'), successor: P('henry-vi-of-england', 'Henry VI of England', 'Nine months old at his accession') },
  'edward-the-black-prince': { office: 'Principality of Aquitaine', note: 'The Black Prince predeceased his father and was never king of England; succession shown for his rule of Aquitaine (1362–1372).', predecessor: NONE('None as Prince of Aquitaine', 'The principality was created for him by Edward III in 1362'), successor: ENDED('Reverted to the French crown', 'He surrendered the principality in 1372 as his health and the English position in France collapsed') },

  // ── FRANCE ────────────────────────────────────────────────────────────────
  'louis-vii-of-france': { office: 'King of France', predecessor: P('louis-vi-of-france', 'Louis VI of France', 'His father'), successor: P('philip-ii-of-france', 'Philip II Augustus') },
  'philip-ii-of-france': { office: 'King of France', predecessor: P('louis-vii-of-france', 'Louis VII of France', 'His father'), successor: P('louis-viii-of-france', 'Louis VIII of France') },
  'louis-ix-of-france': { office: 'King of France', predecessor: P('louis-viii-of-france', 'Louis VIII of France', 'His father; Blanche of Castile governed during his minority'), successor: P('philip-iii-of-france', 'Philip III of France', 'Proclaimed in the crusader camp at Tunis where his father died') },
  'philip-vi-of-france': { office: 'King of France', predecessor: P('charles-iv-of-france', 'Charles IV of France', 'Last Capetian of the direct line; Philip took the crown as nearest male heir, beginning the Valois line'), successor: P('john-ii-of-france', 'John II of France') },
  'john-ii-of-france': { office: 'King of France', predecessor: P('philip-vi-of-france', 'Philip VI of France', 'His father'), successor: P('charles-v-of-france', 'Charles V of France', 'Regent during his father\'s English captivity after Poitiers') },
  'eleanor-of-aquitaine': { office: 'Duchy of Aquitaine', note: 'Eleanor ruled Aquitaine in her own right; her queenships of France and England were as consort.', predecessor: UNLINKED('William X, Duke of Aquitaine', 'Her father, who died on pilgrimage in 1137 leaving her the duchy'), successor: P('john-of-england', 'John', 'On her death in 1204 the duchy passed to her surviving son, King John, and Philip II overran most of it') },

  // ── SCOTLAND ──────────────────────────────────────────────────────────────
  'robert-the-bruce': { office: 'King of Scots', predecessor: P('john-balliol', 'John Balliol', 'Deposed by Edward I in 1296; Robert seized the vacant throne in 1306 after a decade of interregnum and English occupation'), successor: P('david-ii-of-scotland', 'David II of Scotland', 'His son, aged five at his accession') },

  // ── NORWAY ────────────────────────────────────────────────────────────────
  'harald-fairhair': { office: 'King of Norway', predecessor: NONE('None as King of Norway', 'Tradition remembers him as the first king of a unified Norway after Hafrsfjord; the sagas name only regional kings before him'), successor: P('eric-bloodaxe', 'Eric Bloodaxe', 'His favoured son, in saga tradition') },
  'eric-bloodaxe': { office: 'King of Norway', note: 'Succession shown for Norway; his later reigns in Northumbria ended with his death at Stainmore.', predecessor: P('harald-fairhair', 'Harald Fairhair', 'His father'), successor: P('haakon-the-good', 'Haakon the Good', 'His half-brother, raised in England at Æthelstan\'s court, who drove him out') },
  'haakon-the-good': { office: 'King of Norway', predecessor: P('eric-bloodaxe', 'Eric Bloodaxe'), successor: P('harald-greycloak', 'Harald Greycloak', 'Eric\'s son, who took the coastal kingdom with Danish backing after Haakon\'s death at Fitjar') },
  'olaf-tryggvason': { office: 'King of Norway', predecessor: UNLINKED('Jarl Håkon Sigurdsson', 'Ruled Norway under nominal Danish overlordship; killed as Olaf arrived in 995'), successor: UNLINKED('Jarls Eric and Sweyn Håkonsson', 'After Svolder, Norway was divided under the jarls and their Danish and Swedish patrons') },
  'olaf-ii-haraldsson': { office: 'King of Norway', predecessor: UNLINKED('Jarls Eric and Sweyn Håkonsson', 'Olaf took the kingdom from the jarls\' regime in 1015–1016'), successor: P('cnut-the-great', 'Cnut the Great', 'Whose invasion drove Olaf out in 1028; Olaf died at Stiklestad attempting to return') },
  'magnus-the-good': { office: 'King of Norway', note: 'From 1042 Magnus also ruled Denmark under his treaty with Harthacnut.', predecessor: P('cnut-the-great', 'Cnut the Great', 'Norway rejected the regency of Cnut\'s son Sweyn and called Magnus home from Rus\' exile'), successor: P('harald-hardrada', 'Harald Hardrada', 'His uncle and co-king from 1046; Denmark passed instead to Sweyn Estridsson') },
  'harald-hardrada': { office: 'King of Norway', predecessor: P('magnus-the-good', 'Magnus the Good', 'His nephew, with whom he shared the kingship in Magnus\'s final year'), successor: P('magnus-ii-of-norway', 'Magnus II of Norway', 'His elder son; Olaf III Kyrre became co-king on returning from Stamford Bridge') },
  'magnus-barefoot': { office: 'King of Norway', predecessor: P('olaf-iii-of-norway', 'Olaf III Kyrre', 'His father; Magnus first shared the kingship with his cousin Håkon Magnusson'), successor: P('sigurd-of-norway', 'Sigurd the Crusader', 'Jointly with his brothers Øystein I and Olaf Magnusson') },
  'oystein-i-of-norway': { office: 'King of Norway', note: 'Co-king with his brothers Sigurd and Olaf under the customary joint kingship.', predecessor: P('magnus-barefoot', 'Magnus Barefoot', 'His father'), successor: P('sigurd-of-norway', 'Sigurd the Crusader', 'Sole king after Øystein\'s death in 1123') },
  'sigurd-of-norway': { office: 'King of Norway', predecessor: P('magnus-barefoot', 'Magnus Barefoot', 'His father; Sigurd ruled jointly with Øystein I until 1123'), successor: UNLINKED('Magnus IV and Harald Gille', 'His son Magnus IV was soon challenged by Harald Gille, opening Norway\'s century of civil wars') },
  'sverre-sigurdsson': { office: 'King of Norway', predecessor: UNLINKED('Magnus V Erlingsson', 'Defeated and killed at Fimreite in 1184 after eight years of war with Sverre\'s Birkebeiner'), successor: UNLINKED('Håkon III Sverresson', 'His son, who reigned two years before the crown passed through minors to Håkon IV') },
  'haakon-iv-haakonsson': { office: 'King of Norway', predecessor: UNLINKED('Inge II Bårdsson', 'The Birkebeiner king in whose court the child Håkon, Sverre\'s grandson, was raised'), successor: P('magnus-vi-lawmender', 'Magnus VI Lawmender', 'His son') },
  'magnus-vi-lawmender': { office: 'King of Norway', predecessor: P('haakon-iv-haakonsson', 'Håkon IV Håkonsson', 'His father'), successor: P('eric-ii-of-norway', 'Eric II of Norway') },
  'eric-ii-of-norway': { office: 'King of Norway', predecessor: P('magnus-vi-lawmender', 'Magnus VI Lawmender', 'His father'), successor: P('haakon-v-magnusson', 'Håkon V Magnusson', 'His brother; Eric left no surviving son') },
  'haakon-v-magnusson': { office: 'King of Norway', predecessor: P('eric-ii-of-norway', 'Eric II of Norway', 'His brother'), successor: P('magnus-eriksson', 'Magnus Eriksson', 'His daughter\'s son, aged three, already elected king of Sweden the same year') },
  'haakon-vi-of-norway': { office: 'King of Norway', predecessor: P('magnus-eriksson', 'Magnus Eriksson', 'His father, who gave him the Norwegian kingship in 1355'), successor: P('olaf-iv-of-norway', 'Olaf IV', 'His son by Margaret, already king of Denmark') },
  'olaf-iv-of-norway': { office: 'King of Denmark and Norway', predecessor: P('haakon-vi-of-norway', 'Håkon VI of Norway', 'His father, in Norway; in Denmark he had been elected on Valdemar IV\'s death'), successor: P('margaret-i', 'Margaret I', 'His mother, who ruled both realms after his early death') },

  // ── DENMARK ───────────────────────────────────────────────────────────────
  'godfred-of-denmark': { office: 'King of the Danes', predecessor: UNLINKED('Sigfred', 'The Frankish annals name Sigfred as the Danish king before Godfred; their relationship is unrecorded'), successor: P('hemming-of-denmark', 'Hemming', 'His brother\'s son, who made peace with Charlemagne') },
  'hemming-of-denmark': { office: 'King of the Danes', predecessor: P('godfred-of-denmark', 'Godfred', 'His uncle, murdered by a retainer in 810'), successor: UNLINKED('Sigfred and Anulo', 'Rival kinsmen whose war for the kingship in 812 killed them both') },
  'horik-i-of-denmark': { office: 'King of the Danes', predecessor: UNLINKED('Harald Klak and the sons of Godfred', 'Horik, a son of Godfred, first shared power with his brothers and drove out Harald Klak'), successor: P('horik-ii-of-denmark', 'Horik II', 'A young kinsman, raised up after the civil war of 854 destroyed most of the royal house') },
  'horik-ii-of-denmark': { office: 'King of the Danes', predecessor: P('horik-i-of-denmark', 'Horik I', 'Killed with most of his kin in the war with his nephew Guttorm'), successor: UNLINKED('Unrecorded', 'The Danish king-list after Horik II is obscure until the house of Gorm emerges in the tenth century') },
  'gorm-the-old': { office: 'King of Denmark', predecessor: UNLINKED('Harthacnut Sigtryggsson', 'Named by Adam of Bremen as Gorm\'s father and predecessor at Jelling; the earlier tenth-century king-list is uncertain'), successor: P('harald-bluetooth', 'Harald Bluetooth', 'His son') },
  'harald-bluetooth': { office: 'King of Denmark', predecessor: P('gorm-the-old', 'Gorm the Old', 'His father'), successor: P('sweyn-forkbeard', 'Sweyn Forkbeard', 'His son, who rose against him in his old age') },
  'sweyn-forkbeard': { office: 'King of Denmark', note: 'Sweyn also conquered England, dying as its king in February 1014.', predecessor: P('harald-bluetooth', 'Harald Bluetooth', 'His father, driven out in Sweyn\'s revolt'), successor: P('harald-ii-of-denmark', 'Harald II of Denmark', 'His elder son took Denmark; the younger, Cnut, pursued the English conquest') },
  'sweyn-ii-estridsson': { office: 'King of Denmark', predecessor: P('magnus-the-good', 'Magnus the Good', 'Whose death in 1047 ended their long war for Denmark'), successor: UNLINKED('Harald III Hen', 'The first of five of Sweyn\'s sons who held the crown in turn') },
  'valdemar-i-of-denmark': { office: 'King of Denmark', predecessor: UNLINKED('Sweyn III Grathe', 'Killed at Grathe Heath in 1157, ending the three-way civil war that Valdemar survived'), successor: P('cnut-vi-of-denmark', 'Cnut VI', 'His son') },
  'cnut-vi-of-denmark': { office: 'King of Denmark', predecessor: P('valdemar-i-of-denmark', 'Valdemar I the Great', 'His father'), successor: P('valdemar-ii-of-denmark', 'Valdemar II the Victorious', 'His brother') },
  'valdemar-ii-of-denmark': { office: 'King of Denmark', predecessor: P('cnut-vi-of-denmark', 'Cnut VI', 'His brother'), successor: P('eric-iv-of-denmark', 'Eric IV Ploughpenny', 'His son') },
  'eric-iv-of-denmark': { office: 'King of Denmark', predecessor: P('valdemar-ii-of-denmark', 'Valdemar II the Victorious', 'His father'), successor: UNLINKED('Abel of Denmark', 'The brother widely believed responsible for his murder in 1250') },
  'christopher-i-of-denmark': { office: 'King of Denmark', predecessor: UNLINKED('Abel of Denmark', 'Christopher\'s brother, killed on campaign in 1252; Christopher excluded Abel\'s sons from the succession'), successor: P('eric-v-of-denmark', 'Eric V Klipping', 'His son, crowned as a child under Margaret Sambiria\'s regency') },
  'eric-v-of-denmark': { office: 'King of Denmark', predecessor: P('christopher-i-of-denmark', 'Christopher I', 'His father'), successor: P('eric-vi-of-denmark', 'Eric VI Menved', 'His son, crowned after Eric V\'s murder at Finderup in 1286') },
  'christopher-ii-of-denmark': { office: 'King of Denmark', predecessor: P('eric-vi-of-denmark', 'Eric VI Menved', 'His brother, who died childless and deep in debt'), successor: P('valdemar-iv-atterdag', 'Valdemar IV Atterdag', 'His son — but only after eight kingless years in which the realm was mortgaged to Holstein counts') },
  'valdemar-iv-atterdag': { office: 'King of Denmark', predecessor: P('christopher-ii-of-denmark', 'Christopher II', 'His father; the interregnum of 1332–1340 stood between their reigns'), successor: P('olaf-iv-of-norway', 'Olaf IV', 'His daughter Margaret\'s son, elected as a child') },
  'margaret-i': { office: 'Denmark, Norway and Sweden (Kalmar Union)', predecessor: P('olaf-iv-of-norway', 'Olaf IV', 'Her son, on whose death in 1387 she was acclaimed sovereign lady and regent'), successor: P('eric-of-pomerania', 'Eric of Pomerania', 'Her great-nephew, crowned union king at Kalmar in 1397 while Margaret kept real power') },
  'eric-of-pomerania': { office: 'Kalmar Union', predecessor: P('margaret-i', 'Margaret I', 'His great-aunt and the union\'s architect'), successor: P('christopher-of-bavaria', 'Christopher of Bavaria', 'His sister\'s son, elected after the three realms renounced Eric') },
  'christopher-of-bavaria': { office: 'Kalmar Union', predecessor: P('eric-of-pomerania', 'Eric of Pomerania', 'Deposed in all three kingdoms'), successor: P('christian-i-of-denmark', 'Christian I', 'In Denmark and later Norway; Sweden chose Charles VIII, splitting the union') },
  'christian-i-of-denmark': { office: 'King of Denmark, Norway and Sweden', predecessor: P('christopher-of-bavaria', 'Christopher of Bavaria', 'Died childless in 1448'), successor: UNLINKED('John (Hans) of Denmark', 'His son, who succeeded in 1481, beyond the Codex\'s medieval focus') },

  // ── SWEDEN ────────────────────────────────────────────────────────────────
  'eric-the-victorious': { office: 'King of Sweden', predecessor: UNLINKED('Semi-legendary predecessors', 'The Swedish king-list before Eric — Björn, Olof Björnsson and others — rests on late and uncertain tradition'), successor: P('olof-skotkonung', 'Olof Skötkonung', 'His son, the first Swedish king baptised in office') },
  'olof-skotkonung': { office: 'King of Sweden', predecessor: P('eric-the-victorious', 'Eric the Victorious', 'His father'), successor: P('anund-jacob', 'Anund Jacob', 'His son') },
  'anund-jacob': { office: 'King of Sweden', predecessor: P('olof-skotkonung', 'Olof Skötkonung', 'His father'), successor: P('emund-the-old', 'Emund the Old', 'His half-brother') },
  'emund-the-old': { office: 'King of Sweden', predecessor: P('anund-jacob', 'Anund Jacob', 'His half-brother'), successor: P('stenkil', 'Stenkil', 'His son-in-law, first of a new house; the old Uppsala line ended with Emund') },
  'stenkil': { office: 'King of Sweden', predecessor: P('emund-the-old', 'Emund the Old', 'His father-in-law'), successor: UNLINKED('Rival kings Eric and Eric', 'Adam of Bremen records two rivals named Eric fighting for the crown after Stenkil\'s death') },
  'inge-the-elder': { office: 'King of Sweden', predecessor: UNLINKED('Halsten Stenkilsson', 'Inge\'s brother, driven out earlier; Inge himself was temporarily displaced by the pagan Blot-Sweyn'), successor: UNLINKED('Philip Halstensson', 'His nephew, who ruled jointly with his brother Inge the Younger') },
  'sverker-i-of-sweden': { office: 'King of Sweden', predecessor: UNLINKED('Inge the Younger', 'Last of the Stenkil house; Sverker\'s election from Östergötland began a new dynasty'), successor: P('eric-ix-of-sweden', 'Eric IX the Saint', 'Chosen by the Swedes while Sverker\'s son Charles held Östergötland') },
  'eric-ix-of-sweden': { office: 'King of Sweden', predecessor: P('sverker-i-of-sweden', 'Sverker I', 'Murdered on his way to church in 1156'), successor: UNLINKED('Magnus Henriksson', 'The Danish claimant who killed Eric at Uppsala and briefly held the crown') },
  'knut-eriksson': { office: 'King of Sweden', predecessor: UNLINKED('Charles VII Sverkersson', 'Whom Knut killed on Visingsö in 1167, avenging his father Eric IX'), successor: P('sverker-ii-of-sweden', 'Sverker II', 'The Sverker heir, chosen over Knut\'s young sons') },
  'sverker-ii-of-sweden': { office: 'King of Sweden', predecessor: P('knut-eriksson', 'Knut Eriksson'), successor: P('erik-knutsson', 'Erik Knutsson', 'Who defeated him at Lena in 1208 and finally at Gestilren in 1210') },
  'erik-knutsson': { office: 'King of Sweden', predecessor: P('sverker-ii-of-sweden', 'Sverker II', 'Defeated at Gestilren in 1210'), successor: UNLINKED('John I Sverkersson', 'The last Sverker king, crowned as a minor after Erik\'s sudden death') },
  'valdemar-of-sweden': { office: 'King of Sweden', predecessor: UNLINKED('Eric XI Eriksson', 'His childless uncle; Valdemar was elected while his father Birger Jarl held the real power'), successor: P('magnus-iii-of-sweden', 'Magnus III Ladulås', 'His brother, who deposed him at Hova in 1275') },
  'magnus-iii-of-sweden': { office: 'King of Sweden', predecessor: P('valdemar-of-sweden', 'Valdemar', 'His brother, deposed'), successor: P('birger-magnusson', 'Birger Magnusson', 'His son, under Torgils Knutsson\'s regency') },
  'birger-magnusson': { office: 'King of Sweden', predecessor: P('magnus-iii-of-sweden', 'Magnus III Ladulås', 'His father'), successor: P('magnus-eriksson', 'Magnus Eriksson', 'His nephew\'s son, elected after Birger was driven out for the Nyköping murders') },
  'magnus-eriksson': { office: 'King of Sweden', note: 'Magnus was also king of Norway from 1319, passing that crown to his son Håkon VI in 1355.', predecessor: P('birger-magnusson', 'Birger Magnusson', 'His father\'s cousin, exiled after starving his brothers to death at Nyköping'), successor: P('albert-of-mecklenburg', 'Albert of Mecklenburg', 'Raised up by exiled magnates in 1364') },
  'albert-of-mecklenburg': { office: 'King of Sweden', predecessor: P('magnus-eriksson', 'Magnus Eriksson', 'Driven out with his son Håkon VI'), successor: P('margaret-i', 'Margaret I', 'Who defeated and captured him at Åsle in 1389') },
  'charles-viii-of-sweden': { office: 'King of Sweden', note: 'Charles was elected and deposed three times (1448–57, 1464–65, 1467–70) amid union conflict.', predecessor: P('christopher-of-bavaria', 'Christopher of Bavaria', 'The union king, on whose death Sweden elected its own candidate'), successor: UNLINKED('Sten Sture the Elder', 'As regent of Sweden after Charles\'s final reign; the union monarchy under Christian I was never restored in practice') },
  'birger-jarl': { office: 'Jarl of Sweden', note: 'Birger ruled as jarl and de facto regent; his son Valdemar held the crown.', predecessor: UNLINKED('Ulf Fase', 'His cousin, the previous jarl'), successor: ENDED('Office lapsed', 'Birger was the last jarl of Sweden; power passed to his sons King Valdemar and Duke Magnus') },

  // ── BYZANTIUM & LATIN EAST EMPERORS ──────────────────────────────────────
  'romanos-iv-diogenes': { office: 'Byzantine Emperor', predecessor: P('constantine-x-doukas', 'Constantine X Doukas', 'Whose widow Eudokia married Romanos to give the empire a soldier'), successor: P('michael-vii-doukas', 'Michael VII Doukas', 'Constantine\'s son, whose faction blinded Romanos after Manzikert') },
  'alexios-i-komnenos': { office: 'Byzantine Emperor', predecessor: P('nikephoros-iii-botaneiates', 'Nikephoros III Botaneiates', 'The elderly usurper Alexios deposed in the coup of 1081'), successor: P('john-ii-komnenos', 'John II Komnenos', 'His son') },
  'constantine-xi-palaiologos': { office: 'Byzantine Emperor', predecessor: P('john-viii-palaiologos', 'John VIII Palaiologos', 'His brother'), successor: ENDED('The empire ended', 'Constantine died in the breach on 29 May 1453; Mehmed II took Constantinople and no emperor followed') },
  'baldwin-i-latin-emperor': { office: 'Latin Emperor of Constantinople', predecessor: NONE('None as Latin Emperor', 'The Latin empire was created when the Fourth Crusade sacked Constantinople in 1204'), successor: P('henry-of-flanders', 'Henry of Flanders', 'His brother, regent after Baldwin\'s capture by the Bulgarians, crowned when his death was confirmed') },
  'john-of-brienne': { office: 'King of Jerusalem', note: 'John later ruled as Latin emperor-regent of Constantinople (1231–1237) alongside the young Baldwin II.', predecessor: UNLINKED('Maria of Montferrat', 'The young queen whose husband and king-consort John became in 1210'), successor: P('frederick-ii-holy-roman-emperor', 'Frederick II', 'Who married John\'s daughter Isabella II and claimed the crown through her') },

  // ── ISLAMIC RULERS ────────────────────────────────────────────────────────
  'alp-arslan': { office: 'Seljuk Sultan', predecessor: P('tughril-beg', 'Tughril Beg', 'His uncle, founder of the sultanate, who died childless'), successor: P('malik-shah-i', 'Malik-Shah I', 'His son, under whom the empire reached its height') },
  'kilij-arslan-i': { office: 'Sultan of Rum', predecessor: UNLINKED('Suleiman ibn Qutalmish', 'His father, the founder of the Rum sultanate; Kilij Arslan recovered the throne after years as a hostage'), successor: UNLINKED('Malik Shah of Rum', 'His son, later displaced by his brother Mesud I') },
  'saladin': { office: 'Ayyubid Sultan', predecessor: NONE('None as Ayyubid Sultan', 'Saladin founded the sultanate, abolishing the Fatimid caliphate of Egypt in 1171 and succeeding his nominal overlord Nur ad-Din in Syria'), successor: UNLINKED('Al-Afdal and al-Aziz', 'His sons divided the empire; his brother al-Adil eventually reunited it') },
  'al-adil-i': { office: 'Ayyubid Sultan', predecessor: P('saladin', 'Saladin', 'His brother; al-Adil took the sultanate from Saladin\'s quarrelling sons by 1200'), successor: P('al-kamil', 'Al-Kamil', 'His son') },
  'al-kamil': { office: 'Ayyubid Sultan of Egypt', predecessor: P('al-adil-i', 'Al-Adil I', 'His father'), successor: UNLINKED('Al-Adil II', 'His son, deposed within two years by his brother as-Salih Ayyub') },
  'qutuz': { office: 'Mamluk Sultan', predecessor: UNLINKED('Al-Mansur Ali', 'The boy sultan Qutuz deposed on the eve of the Mongol invasion'), successor: P('baybars', 'Baybars', 'Who murdered Qutuz on the road home from the victory at Ain Jalut') },
  'baybars': { office: 'Mamluk Sultan', predecessor: P('qutuz', 'Qutuz', 'Murdered by Baybars and his conspirators in 1260'), successor: UNLINKED('Baraka Khan', 'His son, deposed within two years by the emirs') },
  'imad-ad-din-zengi': { office: 'Atabeg of Mosul and Aleppo', predecessor: NONE('None as founder of the Zengid state', 'Zengi received Mosul as governor for the Seljuk sultan in 1127 and built an independent dynasty from it'), successor: P('nur-ad-din', 'Nur ad-Din', 'His son took Aleppo; another son, Saif ad-Din, took Mosul') },
  'nur-ad-din': { office: 'Ruler of Aleppo and Damascus', predecessor: P('imad-ad-din-zengi', 'Imad ad-Din Zengi', 'His father, murdered at the siege of Qalat Jabar'), successor: UNLINKED('As-Salih Ismail', 'His young son, whose inheritance Saladin absorbed within a decade') },
  'muhammad-al-nasir': { office: 'Almohad Caliph', predecessor: UNLINKED('Yaqub al-Mansur', 'His father, victor of Alarcos'), successor: UNLINKED('Yusuf II al-Mustansir', 'His ten-year-old son, under whom Almohad authority disintegrated') },
  'mehmed-ii': { office: 'Ottoman Sultan', predecessor: P('murad-ii', 'Murad II', 'His father, who twice handed him the throne and twice returned'), successor: P('bayezid-ii', 'Bayezid II', 'His son, over the rival claim of his brother Cem') },
  'murad-i': { office: 'Ottoman Sultan', predecessor: P('orhan', 'Orhan', 'His father'), successor: P('bayezid-i', 'Bayezid I the Thunderbolt', 'Proclaimed on the field of Kosovo where Murad was killed') },

  // ── HOLY ROMAN EMPIRE & CAROLINGIANS ─────────────────────────────────────
  'charlemagne': { office: 'King of the Franks and Emperor', note: 'Succession shown for the Frankish kingship and the imperial title he assumed in 800.', predecessor: P('pepin-the-short', 'Pepin the Short', 'His father; Charlemagne first shared the kingdom with his brother Carloman'), successor: P('louis-the-pious', 'Louis the Pious', 'His only surviving legitimate son, crowned co-emperor in 813') },
  'charles-martel': { office: 'Frankish Mayor of the Palace', predecessor: UNLINKED('Pepin of Herstal', 'His father; Charles fought his stepmother Plectrude\'s faction to claim the office'), successor: P('pepin-the-short', 'Pepin the Short', 'His son, jointly with Carloman until Carloman entered a monastery') },
  'frederick-i-barbarossa': { office: 'Holy Roman Emperor', predecessor: P('conrad-iii-of-germany', 'Conrad III', 'His uncle, who designated him over his own young son'), successor: P('henry-vi-holy-roman-emperor', 'Henry VI', 'His son') },
  'conrad-iii-of-germany': { office: 'King of Germany', note: 'Conrad was never crowned emperor.', predecessor: UNLINKED('Lothair III', 'The Supplinburg emperor, Conrad\'s long-time rival'), successor: P('frederick-i-barbarossa', 'Frederick Barbarossa', 'His nephew, chosen over Conrad\'s six-year-old son') },
  'otto-iv': { office: 'Holy Roman Emperor', predecessor: P('henry-vi-holy-roman-emperor', 'Henry VI', 'Whose death opened the double election and civil war between Otto and Philip of Swabia'), successor: P('frederick-ii-holy-roman-emperor', 'Frederick II', 'Henry VI\'s son, who displaced Otto after Bouvines') },
  'frederick-ii-holy-roman-emperor': { office: 'Holy Roman Emperor', predecessor: P('otto-iv', 'Otto IV', 'The Welf emperor, abandoned by his supporters after Bouvines'), successor: UNLINKED('Conrad IV', 'His son, never crowned emperor; the Great Interregnum followed') },
  'charles-of-anjou': { office: 'King of Sicily', predecessor: UNLINKED('Manfred of Sicily', 'The Hohenstaufen king Charles defeated and killed at Benevento in 1266'), successor: UNLINKED('Charles II of Naples', 'His son, holding Naples only after the Sicilian Vespers split the kingdom') },

  // ── EASTERN EUROPE, RUS', BALKANS ────────────────────────────────────────
  'wladyslaw-ii-jagiello': { office: 'King of Poland', predecessor: P('jadwiga-of-poland', 'Jadwiga of Poland', 'Crowned king in her own right; Jogaila ruled jointly with her from their marriage in 1386'), successor: UNLINKED('Władysław III', 'His son, later killed at Varna') },
  'vytautas': { office: 'Grand Duke of Lithuania', predecessor: UNLINKED('Skirgaila', 'Jogaila\'s brother, who yielded the grand duchy to Vytautas under the Astrava agreement of 1392'), successor: UNLINKED('Švitrigaila', 'Jogaila\'s youngest brother, whose succession collapsed into civil war') },
  'rurik': { office: 'Ruler of Novgorod (chronicle tradition)', predecessor: NONE('None in the chronicle tradition', 'The Primary Chronicle presents Rurik\'s arrival — traditionally dated 862 — as the beginning of the line; no predecessor is recorded'), successor: P('oleg-of-novgorod', 'Oleg', 'Kinsman and regent for Rurik\'s young son Igor, by the chronicle account') },
  'oleg-of-novgorod': { office: 'Ruler of Novgorod and Kiev (chronicle tradition)', predecessor: P('rurik', 'Rurik', 'By the chronicle account, Oleg ruled as protector of Rurik\'s son Igor'), successor: P('igor-of-kiev', 'Igor of Kiev', 'Rurik\'s son, taking power on Oleg\'s death') },
  'igor-of-kiev': { office: 'Prince of Kiev', predecessor: P('oleg-of-novgorod', 'Oleg', 'His guardian and predecessor in Kiev, by the chronicle account'), successor: P('olga-of-kiev', 'Olga', 'His widow, regent for their son Sviatoslav') },
  'olga-of-kiev': { office: 'Regent of Kievan Rus\'', predecessor: P('igor-of-kiev', 'Igor of Kiev', 'Her husband, killed by the Derevlians'), successor: P('sviatoslav-i-of-kiev', 'Sviatoslav I', 'Her son, who took full power as he came of age') },
  'prince-lazar': { office: 'Ruler of Moravian Serbia', predecessor: NONE('None as ruler of Moravian Serbia', 'Lazar built his principality from the fragments of the Nemanjić empire after Stefan Uroš V died without heir in 1371'), successor: UNLINKED('Stefan Lazarević', 'His son, who ruled as Ottoman vassal and later as despot') },

  // ── CRUSADER STATES & LATIN EAST ─────────────────────────────────────────
  'godfrey-of-bouillon': { office: 'Ruler of Jerusalem', predecessor: NONE('None as ruler of Jerusalem', 'Godfrey was elected after the First Crusade took the city in 1099, refusing the royal title as Advocate of the Holy Sepulchre'), successor: P('baldwin-i-of-jerusalem', 'Baldwin I', 'His brother, who accepted the crown Godfrey had declined') },
  'baldwin-i-of-jerusalem': { office: 'King of Jerusalem', predecessor: P('godfrey-of-bouillon', 'Godfrey of Bouillon', 'His brother, ruler but never crowned king'), successor: P('baldwin-ii-of-jerusalem', 'Baldwin II', 'His cousin, chosen over his absent brother Eustace') },
  'baldwin-ii-of-jerusalem': { office: 'King of Jerusalem', predecessor: P('baldwin-i-of-jerusalem', 'Baldwin I', 'His cousin'), successor: P('melisende-of-jerusalem', 'Melisende', 'His daughter, crowned jointly with her husband Fulk and son Baldwin III') },
  'melisende-of-jerusalem': { office: 'Queen of Jerusalem', predecessor: P('baldwin-ii-of-jerusalem', 'Baldwin II', 'Her father, who designated her heir in her own right'), successor: P('baldwin-iii-of-jerusalem', 'Baldwin III', 'Her son, who forced an end to their joint rule in 1152') },
  'baldwin-iv-of-jerusalem': { office: 'King of Jerusalem', predecessor: P('amalric-i-of-jerusalem', 'Amalric I', 'His father'), successor: UNLINKED('Baldwin V', 'His nephew, a child who died within a year; the crown then passed to Sibylla') },
  'sibylla-of-jerusalem': { office: 'Queen of Jerusalem', predecessor: UNLINKED('Baldwin V', 'Her young son by William of Montferrat, who died in 1186'), successor: P('isabella-i-of-jerusalem', 'Isabella I', 'Her half-sister, after Sibylla and her daughters died in the siege camp at Acre') },
  'guy-of-lusignan': { office: 'King of Jerusalem', note: 'Guy reigned as Sibylla\'s consort; after losing Jerusalem he bought Cyprus from the Templars in 1192.', predecessor: UNLINKED('Baldwin V', 'Guy was crowned through his marriage to Sibylla after the boy king\'s death'), successor: P('conrad-of-montferrat', 'Conrad of Montferrat', 'Elected king by the barons in 1192, days before his assassination') },
  'conrad-of-montferrat': { office: 'King of Jerusalem (elect)', predecessor: P('guy-of-lusignan', 'Guy of Lusignan', 'Set aside by the barons\' election of 1192'), successor: P('henry-ii-of-champagne', 'Henry II of Champagne', 'Married the widowed Isabella I within days of Conrad\'s murder') },
  'henry-ii-of-champagne': { office: 'Ruler of Jerusalem', note: 'Henry governed as Isabella I\'s consort and never used the royal title.', predecessor: P('conrad-of-montferrat', 'Conrad of Montferrat', 'Assassinated in Tyre in 1192'), successor: UNLINKED('Amalric II of Lusignan', 'Guy\'s brother, who married Isabella I after Henry\'s fatal fall from a window') },
  'bohemond-i-of-antioch': { office: 'Prince of Antioch', predecessor: NONE('None as Prince of Antioch', 'Bohemond founded the principality when the First Crusade took Antioch in 1098'), successor: UNLINKED('Bohemond II', 'His infant son, for whom Tancred and then Roger of Salerno governed as regents') },
  'raymond-iv-of-toulouse': { office: 'Count of Toulouse', predecessor: UNLINKED('William IV of Toulouse', 'His brother, whose daughter\'s claim Raymond displaced'), successor: UNLINKED('Bertrand of Toulouse', 'His son, who later completed the conquest of Tripoli') },
  'raymond-iii-of-tripoli': { office: 'Count of Tripoli', predecessor: UNLINKED('Raymond II of Tripoli', 'His father, murdered by Assassins at Tripoli\'s gate'), successor: UNLINKED('Bohemond IV of Antioch', 'Raymond died childless after Hattin, leaving Tripoli to the Antiochene house') },
  'boniface-of-montferrat': { office: 'King of Thessalonica', predecessor: NONE('None as King of Thessalonica', 'Boniface carved the kingdom out of the Byzantine lands partitioned after the Fourth Crusade'), successor: UNLINKED('Demetrius of Montferrat', 'His infant son by Margaret of Hungary') },
  'ferdinand-of-flanders': { office: 'Count of Flanders', note: 'Ferdinand held Flanders jure uxoris with Countess Joan.', predecessor: P('baldwin-i-latin-emperor', 'Baldwin IX of Flanders', 'Joan\'s father, who left for the Fourth Crusade and died Latin emperor'), successor: UNLINKED('Joan of Constantinople', 'His wife continued to rule; after Ferdinand\'s death she governed with her second husband Thomas of Savoy') },
  'enrico-dandolo': { office: 'Doge of Venice', predecessor: UNLINKED('Orio Mastropiero', 'Who abdicated to a monastery in 1192'), successor: UNLINKED('Pietro Ziani', 'Elected after Dandolo\'s death in Constantinople in 1205') },
  'andrew-ii-of-hungary': { office: 'King of Hungary', predecessor: UNLINKED('Emeric of Hungary', 'His brother and rival, followed briefly by Emeric\'s young son Ladislaus III'), successor: UNLINKED('Béla IV', 'His son, who rebuilt Hungary after the Mongol invasion') },

  // ── IBERIA ────────────────────────────────────────────────────────────────
  'alfonso-viii-of-castile': { office: 'King of Castile', predecessor: UNLINKED('Sancho III of Castile', 'His father, who died when Alfonso was two, leaving a decade of noble regencies'), successor: UNLINKED('Henry I of Castile', 'His young son, killed by a falling roof tile within three years') },
  'isabella-of-castile': { office: 'Queen of Castile', predecessor: UNLINKED('Henry IV of Castile', 'Her half-brother; her succession over his daughter Juana was fought out in the War of the Castilian Succession'), successor: UNLINKED('Joanna and Philip I', 'Her daughter Joanna, with the crown\'s effective power passing toward the Habsburg line') }
}

const report = process.argv.includes('--report')
const charIds = new Set(data.characters.map((c) => c.id))
const missing = new Map()
let applied = 0

for (const [id, succession] of Object.entries(SUCCESSION)) {
  const person = data.characters.find((c) => c.id === id)
  if (!person) { console.error(`NO SUCH RULER ARTICLE: ${id}`); process.exitCode = 1; continue }
  for (const side of ['predecessor', 'successor']) {
    const ref = succession[side]
    if (ref?.personSlug && !charIds.has(ref.personSlug)) {
      if (!missing.has(ref.personSlug)) missing.set(ref.personSlug, [])
      missing.get(ref.personSlug).push(`${id}.${side}`)
    }
  }
  if (!report) {
    person.isRuler = true
    person.succession = succession
    applied++
  }
}

if (report) {
  console.log(`${Object.keys(SUCCESSION).length} rulers mapped; ${missing.size} referenced people missing:`)
  for (const [slug, refs] of [...missing.entries()].sort()) console.log(`  ${slug}  <- ${refs.join(', ')}`)
  process.exit(0)
}

if (missing.size) {
  console.error(`Refusing to write: ${missing.size} referenced slugs missing. Run with --report.`)
  process.exit(1)
}

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2) + '\n')
console.log(`Applied succession to ${applied} rulers.`)
