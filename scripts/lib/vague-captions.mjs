/**
 * Vague image captions (owner rule, 2026-09-15; CLAUDE.md "Captions say exactly
 * what the image is and when it was made").
 *
 * A caption names the medium and the date or century. These patterns catch the
 * wording that hedges instead: "a medieval or later historical depiction", "image
 * associated with X", "represented with a relevant image". Reported on
 * baldwin-ii-of-jerusalem. The same template on louis-ix-of-france sat under a
 * photograph of a nineteenth-century church, so a vague caption usually means
 * the image itself was never checked either.
 *
 * Shared by scripts/check-images.mjs (the gate) and the baseline it reads.
 */

// The fixed AI disclosure sentence says "real historical depictions" and is correct
// by rule, so it is removed before the patterns run.
const AI_DISCLOSURE = /^AI generated image used due to lack of real historical depictions of [^.]+\.\s*/i

const RULES = [
  [/medieval or later/i, 'hedges between periods ("medieval or later")'],
  [/\bhistorical depiction\b/i, 'says "historical depiction" instead of the medium and date'],
  [/associated visual source/i, 'says "associated visual source"'],
  [/\bimage associated with\b/i, 'says "image associated with" instead of what the image is'],
  [/represented with a relevant/i, 'is a placeholder ("represented with a relevant image")'],
  [/^(an? )?(image|picture|depiction) of\b/i, 'is a bare "image of X" with no medium or date'],
  [/medieval-style/i, 'says "medieval-style" instead of the medium and date'],
  [/\blater depiction\b/i, 'says "later depiction" without a date', (text) => !/\d{3,4}|century/i.test(text)]
]

export function vagueCaptionReasons(caption) {
  const text = String(caption ?? '').trim().replace(AI_DISCLOSURE, '')
  return RULES.filter(([pattern, , applies]) => pattern.test(text) && (!applies || applies(text))).map(([, reason]) => reason)
}

export const vagueCaptionKey = (collection, articleId, caption) => `${collection}/${articleId} :: ${String(caption ?? '').trim()}`
