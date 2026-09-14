/**
 * Maintain the template-prose backlog: the articles that ALREADY carried
 * name-substituted generator templates when the check was introduced.
 *
 * The check itself lives in check-content-quality.mjs. It hard-fails on:
 *   - any NEW template: a paragraph shared by 2+ articles once their subject
 *     names are masked, that is not in this baseline;
 *   - a known template SPREADING to an article not listed for it;
 *   - a STALE entry: a listed article that no longer carries the template.
 *
 * The third rule is what makes this a backlog rather than an amnesty. When an
 * article is rewritten, the checker fails until this script is re-run, so the
 * baseline can only shrink, and the size of the debt stays visible in git.
 *
 *   node scripts/baseline-template-prose.mjs          shrink after fixing articles
 *   node scripts/baseline-template-prose.mjs --init   write it from scratch
 *
 * Without --init the script REFUSES to add anything. Re-running it to silence a
 * newly written template would defeat the whole gate, so that path does not
 * exist: new template prose gets rewritten, not baselined.
 */
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { maskedParagraphs, templateHash } from './lib/template-prose.mjs'

const dataUrl = new URL('../server/data/history.json', import.meta.url)
const baselineUrl = new URL('./lib/template-prose-baseline.json', import.meta.url)
const init = process.argv.includes('--init')

const data = JSON.parse(readFileSync(dataUrl, 'utf8'))
const groups = new Map()
for (const [collection, entries] of Object.entries(data)) {
  if (!Array.isArray(entries)) continue
  for (const entry of entries) {
    const key = `${collection}/${entry.id}`
    for (const text of new Set(maskedParagraphs(entry))) {
      const hash = templateHash(text)
      if (!groups.has(hash)) groups.set(hash, { sample: text.slice(0, 140), articles: new Set() })
      groups.get(hash).articles.add(key)
    }
  }
}

const previous = existsSync(baselineUrl) ? JSON.parse(readFileSync(baselineUrl, 'utf8')).templates ?? {} : null
if (!init && !previous) {
  console.error('No baseline exists yet. Run with --init to create it.')
  process.exit(1)
}

const templates = {}
for (const [hash, group] of [...groups].sort(([a], [b]) => a.localeCompare(b))) {
  let articles = [...group.articles].sort()
  if (!init) {
    // Shrink-only: keep a template only for articles already listed under it.
    const allowed = new Set(previous[hash]?.articles ?? [])
    const added = articles.filter((a) => !allowed.has(a))
    if (added.length && (group.articles.size > 1 || allowed.size)) {
      console.error(`Refusing to baseline new template prose in: ${added.join(', ')}`)
      console.error(`  "${group.sample}…"`)
      console.error('Rewrite those paragraphs instead. (--init rebuilds from scratch, and is not for this.)')
      process.exit(1)
    }
    articles = articles.filter((a) => allowed.has(a))
    if (!articles.length) continue
  } else if (articles.length < 2) {
    continue
  }
  templates[hash] = { sample: group.sample, articles }
}

const articleCount = new Set(Object.values(templates).flatMap((t) => t.articles)).size
const out = {
  note: 'Articles carrying name-substituted template prose. A backlog to be rewritten, never extended. See scripts/baseline-template-prose.mjs.',
  templateCount: Object.keys(templates).length,
  articleCount,
  templates
}
writeFileSync(baselineUrl, `${JSON.stringify(out, null, 2)}\n`)
console.log(`template-prose baseline: ${out.templateCount} templates across ${articleCount} articles`)
