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
