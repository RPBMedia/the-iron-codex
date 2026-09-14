/**
 * Name-substituted template prose — how to recognise it.
 *
 * The content checker has always failed a paragraph reused VERBATIM across two
 * articles. That check has a blind spot the size of a barn door: generator
 * templates put the article's own name into the sentence, so every copy differs
 * from every other by exactly that name, and none of them is verbatim.
 *
 * Found on 2026-09-14, starting from the Shroud of Turin, whose "Description"
 * read "Shroud of Turin is a material or textual object whose physical survival
 * helps historians read medieval politics, belief, art, or memory." Masking the
 * subject's name showed the same sentence in the Lindisfarne Gospels, the Codex
 * Gigas and the Royal Frankish Annals — and 24 such templates across 87 articles,
 * including one opening shared by 51 Scandinavian kings.
 *
 * This is the archive's Specificity Test made mechanical: "could this paragraph
 * be copied into another article with only the name changed?" If masking the
 * name makes two paragraphs identical, the answer is yes.
 */
import { createHash } from 'node:crypto'

const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

/** Strings that identify an article's subject, longest first so "Kingdom of León" masks before "León". */
export function subjectNames(entry) {
  return [entry.name, ...(entry.aliases ?? []), entry.location, entry.kingdom]
    .filter((x) => typeof x === 'string' && x.length > 2)
    .sort((a, b) => b.length - a.length)
}

/** Every content paragraph of an article with its own subject names replaced by "§". */
export function maskedParagraphs(entry) {
  const names = subjectNames(entry)
  const out = []
  for (const section of entry.contentSections ?? []) {
    for (const paragraph of section.paragraphs ?? []) {
      let text = (typeof paragraph === 'string' ? paragraph : '').trim()
      // Same floor as the verbatim check: very short lines repeat innocently.
      if (text.length < 40) continue
      for (const name of names) text = text.replace(new RegExp(escapeRe(name), 'gi'), '§')
      out.push(text)
    }
  }
  return out
}

/** Stable short key for a masked paragraph, used by the baseline file. */
export const templateHash = (text) => createHash('sha1').update(text).digest('hex').slice(0, 12)
