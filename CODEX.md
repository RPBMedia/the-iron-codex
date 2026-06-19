# IronCodex Codex Instructions

These instructions apply to future Codex work on IronCodex.

## Audit Standard

- Treat audit requests as full archive integrity work, not quick spot fixes.
- When auditing content, inspect and revise articles thoroughly across the requested scope.
- Do not leave known shallow, generic, placeholder-like, stale, or misleading article content untouched just because the visible example was fixed.
- Verify the rendered/data path where possible, especially after large content changes.

## Completion Workflow

- After making project changes, run the configured checks that apply to the change.
- Restart the local IronCodex server after changes so the browser and API are not served by stale in-memory data.
- Commit completed changes to git.
- Push committed changes to the remote branch.
- Do this workflow by default without waiting for an extra reminder.

## Server Freshness

- The app can show stale archive data if an old Node process is still serving port 4000.
- If the browser or API does not reflect updated content, check for a stale server process, restart the server, and verify the live endpoint again.

## Image Integrity

- Every article image `src` must point to an actual renderable image file or resolver URL.
- Keep source/citation URLs separate from render URLs; Wikimedia Commons file pages belong in `sourceUrl`, not in `image` or `sectionImages[].src`.
- Validate section images as well as hero/card images before completing content-heavy tasks.
- Do not fix broken images with placeholders, unrelated medieval art, or AI-generated portraits.

## Weapons & Armor

- The Weapons & Armor archive is for medieval European weapons, armor, shields, helmets, and famous specific arms or armor objects.
- Do not add ancient, non-European, fantasy, or clearly early modern material unless the article explicitly explains a late medieval European context.
- General weapon and armor articles must explain design, construction, battlefield use, historical development, regional variation, and legacy with concrete details.
- Famous weapons and armor must distinguish legend, ceremonial memory, and material history. Joyeuse belongs here as a coronation sword with a Charlemagne tradition; the surviving sword should not be presented as a securely verified personal weapon of Charlemagne.
- Artifacts that are primarily weapons or armor belong in Weapons & Armor rather than Artifacts. Military units or institutions, such as the Varangian Guard, should not be listed as artifacts.
- Every Weapons & Armor entry needs a real renderable image, source metadata, and historically honest captioning.
