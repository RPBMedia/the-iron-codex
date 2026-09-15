# Archived one-off scripts

These scripts each ran once, to add, fix, rewrite or migrate content, and are kept
only as a record of how the archive was built. **Do not run them.** They read and
wrote `server/data/history.json`, which no longer exists: since 2026-09-15 (QUEUE
0m, M1) the archive lives in `server/data/archive/`, one file per article, read
with `loadArchive()` and written with `saveArchive()` from
`server/data/archive.mjs`.

`split-history.mjs` is the migration that produced that layout. It proved that the
split archive reproduces `history.json` exactly before the old file was deleted.
