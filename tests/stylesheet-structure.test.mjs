/**
 * The stylesheet is structurally intact.
 *
 * This exists because of a real, shipped, invisible break. The archive filter
 * controls carried two rules that had been truncated to dangling selector lists:
 *
 *     .archive-search,
 *     .archive-select,
 *                          <- the declaration block was gone
 *     .archive-search {
 *       flex-direction: column;
 *     }
 *
 * A CSS parser resolves that by continuing the selector list into the next rule,
 * so `.archive-search, .archive-select, .archive-search { flex-direction: column }`
 * is what actually applied — and every declaration the missing block held was
 * silently dropped. On the page that meant `display: flex` was lost, the labels
 * kept the dark panel's own text colour on the dark panel (invisible), and the
 * inputs fell back to raw native chrome: white boxes and a blue clear button on a
 * near-black card.
 *
 * Nothing caught it. It is not a syntax error, the build succeeds, every other
 * gate passes, and the only symptom is that a page looks wrong — which no test
 * here was in a position to notice. It survived at least one pull before the
 * owner spotted it on 2026-09-20.
 *
 * These checks are deliberately crude. They are not a CSS parser and should not
 * become one; they catch the shape of a truncated edit, which is the failure that
 * actually happened.
 */

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const css = readFileSync(join(root, 'client', 'src', 'styles.css'), 'utf8')
const lines = css.split('\n')

test('no rule is truncated to a dangling selector list', () => {
  // A selector line ending in a comma whose next line is blank means the
  // declaration block it belonged to is gone.
  const dangling = []
  for (let i = 0; i < lines.length - 1; i++) {
    const line = lines[i].trim()
    if (!line.endsWith(',')) continue
    if (line.startsWith('*') || line.startsWith('/*')) continue
    if (lines[i + 1].trim() === '') dangling.push(`${i + 1}: ${line}`)
  }
  assert.deepEqual(dangling, [], `selector lists with no declaration block:\n${dangling.join('\n')}`)
})

test('braces balance across the whole stylesheet', () => {
  // Counted outside comments and strings, so a `{` inside a comment about CSS
  // does not register. A mismatch means a rule was cut mid-block, which breaks
  // every rule after it rather than only its own.
  let depth = 0
  let inComment = false
  let inString = null
  let minDepth = 0

  for (let i = 0; i < css.length; i++) {
    const c = css[i]
    const next = css[i + 1]

    if (inComment) {
      if (c === '*' && next === '/') { inComment = false; i++ }
      continue
    }
    if (inString) {
      if (c === '\\') { i++; continue }
      if (c === inString) inString = null
      continue
    }
    if (c === '/' && next === '*') { inComment = true; i++; continue }
    if (c === '"' || c === "'") { inString = c; continue }
    if (c === '{') depth++
    if (c === '}') { depth--; minDepth = Math.min(minDepth, depth) }
  }

  assert.equal(inComment, false, 'the stylesheet ends inside an unclosed comment')
  assert.equal(minDepth, 0, 'a closing brace appears with no rule open')
  assert.equal(depth, 0, `the stylesheet ends ${depth} brace(s) deep — a rule was cut mid-block`)
})

test('the archive filter controls keep the rules that make them legible', () => {
  // Named rather than left to the generic checks above, because this is the block
  // that was broken and the symptom was specific: labels invisible, controls
  // native. Each of these is one of the declarations that had gone missing.
  const block = css.slice(css.indexOf('.archive-search,'), css.indexOf('.archive-count'))
  assert.ok(block.length > 200, 'the archive controls block is missing or much smaller than expected')

  assert.match(block, /display:\s*flex/, 'the label no longer stacks above its control')
  assert.match(block, /\.archive-search > span[\s\S]{0,200}text-transform:\s*uppercase/, 'the filter labels have no styling — they will inherit the dark panel colour on a dark panel')
  assert.match(block, /background:\s*rgba\(20, 20, 24/, 'the inputs have no background — they will render as native white boxes on a dark card')
  assert.match(block, /color-scheme:\s*dark/, 'without color-scheme the native select dropdown opens white')
  assert.match(block, /padding:\s*10px 12px/, 'the controls have no padding')
})
