# Map geometry — source record

These three files are the **unmodified upstream originals**. Nothing in this
directory is ever edited by hand or by script. Derived, simplified output goes to
`client/public/map/`, and `scripts/build-map-snapshots.mjs` is the only thing that
writes it. Keeping the original immutable is what makes the "raw versus simplified"
comparison a diff rather than a re-download.

## Provenance

| | |
|---|---|
| **Project** | historical-basemaps |
| **Author** | André Ourednik |
| **Repository** | https://github.com/aourednik/historical-basemaps |
| **Upstream commit** | `da7a4b735ecef70aebdc9c73e409d8a2500d50f3` (`master`) |
| **Retrieved** | 2026-09-20 |
| **Licence** | **GNU General Public License v3.0** |

### Files and hashes

| File | SHA-256 | Bytes |
|---|---|---|
| `world_800.geojson` | `9d046cdc4662109c3f803ae46e2c8cba941aa092ec86eccc7823e6cf1554920c` | 977,296 |
| `world_1100.geojson` | `8b038ee5ec8f032d01a67293e7cf08b7bd3ed58e00defc06af9144e67e708a86` | 1,065,110 |
| `world_1400.geojson` | `c6b0efcb42d9520a1a724f981373296e84ea2c0a0527de7a06f8f9e2465eb6ec` | 1,053,803 |

Re-download and compare the hash before trusting a rebuild: the upstream project is
a work in progress and its geometry changes.

## Licence

The repository is licensed **GPL-3.0**. The README says nothing about the data as
distinct from the code, which is why this file exists.

**Owner decision, 2026-09-20: use it, and attribute it prominently.** Whether
copyleft propagates from a GeoJSON file into an application bundle is genuinely
unsettled, and the owner's call was to proceed with clear attribution rather than
wait on a clarification that may never come. The conditions that decision carries:

- GPL-3.0 and the upstream URL appear **in the map UI itself**, not only here.
- Derived geometry ships as **separate static files under `client/public/map/`** and
  is never `import`ed into a JavaScript module. It is fetched at runtime. This keeps
  the data out of the application bundle, which the bundle budget wanted anyway —
  the licence constraint and the performance constraint happen to point the same way.
- `scripts/check-seo.mjs` asserts the attribution string is present in the built
  page, so the notice cannot be dropped by accident.

## What this data is, and is not

The upstream README is explicit that the project is **work in progress** and warns:
*"verify the maps by comparison to other sources before using in academic work."*
It also states that the data was *"collected, adapted and converted from diverse
sources, sometimes only available through the wayback machine"*, crediting
contributors who are in part anonymous.

So the provenance is **thin**, and the brief's standard — traceable provenance plus
an independent scholarly atlas per date — is not met by this source alone. The map
therefore presents itself as **one named reconstruction**, never as settled fact.
Independent cross-checking is ongoing editorial work, tracked in `QUEUE.md` item 0v.

## Feature properties

`NAME`, `SUBJECTO` (overlord), `PARTOF` (larger cultural area), `BORDERPRECISION`.

**`BORDERPRECISION` is `1` on every single feature in all three files** — 225/225 at
800, 235/235 at 1100, 233/233 at 1400. The scale runs 1–3 (approximate → determined
by international law), and for medieval years nothing is above 1. The legend
therefore states flatly that *every* frontier on this map is approximate. It must not
imply a gradient, because there is no gradient in the data.

## Known errors in the source, and what was done about them

Verified against the real geometry on 2026-09-20, not against the repository's
`index.json` summary:

- **`Seljuk Caliphate` at 1400 — dropped.** The Great Seljuk Empire ended in 1194 and
  the Sultanate of Rum in 1308. By 1400 that ground was Ottoman and the Anatolian
  beyliks. Recorded in `polity-slugs.json` under `dropFrom`.
- **No crusader states at 1100.** The file contains no Kingdom of Jerusalem, Antioch,
  Edessa or Tripoli; the Levant is Fatimid and Seljuk. Jerusalem fell in July 1099,
  so at 1100 the states were weeks old — defensible, but a real coverage gap, and the
  map does not pretend otherwise.
- **Duplicate `NAME` values are normal**, not errors: a polity split across
  disconnected territory is stored as several features (`Carolingian Empire` twice,
  `Ottoman Empire` twice, `Sukhothai` three times). Group by `NAME`; do not assume
  one feature per polity.

### Frontier errors — recorded, not corrected

These are wrong, and the polygons stay anyway. They are inaccurate *frontiers*, not
states that did not exist, and redrawing a border by hand is precisely what the brief
forbids. They are the concrete reason the map calls itself one reconstruction.

| Snapshot | What the source says | What is actually the case |
|---|---|---|
| 1100 | Toledo is Almoravid | Castile took Toledo in 1085 |
| 1100 | Prague is Polish | Bohemia was within the Empire |
| 1100 | Damascus is Fatimid | Burid/Seljuk by then |
| 1400 | Athens is Byzantine | The Latin Duchy of Athens held it |

### Coastal cities cannot be located in this data

**Constantinople falls outside every polygon in all three files, in the raw source,
before any simplification of ours.** So does Reykjavík against the Icelandic
Commonwealth polygon. The upstream coastline is too coarse to resolve a city on a
strait or a peninsula, and the water swallows the point.

This says nothing about who held Constantinople. It says point-in-polygon is the
wrong instrument for a coastal point at this resolution — which matters, because the
obvious test to write for this map is "Constantinople is Byzantine in 1100", and that
test would fail while describing nothing real. `tests/map-geometry.test.mjs` uses
inland anchors only, and says why in its header.

Anything that cannot be checked is dropped rather than published. Unmapped ground is
honest; a stale label is not.
