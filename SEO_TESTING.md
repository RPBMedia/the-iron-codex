# How to check the SEO is actually working

Written for someone who has not done SEO before. Nothing here needs paid tools.

There are **three levels**, and they answer different questions:

| Level | Question it answers | How long |
| --- | --- | --- |
| 1. Local gate | Did we build the pages correctly? | 10 seconds |
| 2. Live spot checks | Is the deployed site serving them correctly? | 5 minutes |
| 3. Google's own tools | Is Google actually indexing and ranking us? | weeks |

**The important thing to understand up front:** levels 1 and 2 are pass/fail and
answer today. Level 3 is the real outcome, and it is *slow* — Google takes days to
weeks to crawl a new site and months to rank it. Do not judge the work by level 3
in the first fortnight. Nothing is wrong if traffic is zero in week one.

---

## Level 1 — the local gate (10 seconds)

```bash
npm run build && npm run check:seo
```

Expected output:

```
SEO check passed: 800 article pages, 809 sitemap URLs, robots.txt and 404 in place.
```

If it prints failures instead, it names the file and the problem. This runs
automatically as part of any build and checks every one of the 800 article pages
for: a unique title, a canonical URL, a description of reasonable length, a
social share image, valid structured data that actually parses, at least 200
characters of crawlable text, and membership in the sitemap.

**Run this before every deploy.** It is the cheapest check and catches almost
everything.

---

## Level 2 — is the live site serving it? (5 minutes)

### 2a. The single most important test: view source, not the page

In a browser, open any article, then press **Ctrl+U** (Windows) or **Cmd+Option+U**
(Mac). That shows the **raw HTML the server sent**, before JavaScript runs — which
is what a crawler sees.

Near the top you should see a real title and description for *that article*:

```html
<title>Eric Bloodaxe — king of Norway and Northumbria | The Iron Codex</title>
<meta name="description" content="Eric Bloodaxe was a tenth-century Norwegian king…" />
<link rel="canonical" href="https://www.theironcodex.org/people/eric-bloodaxe" />
```

**Red flag:** if every article shows `<title>The Iron Codex</title>`, the
prerendering has broken.

Scroll further and you should see the article's actual prose inside
`<div id="root">`. That is the text search engines read.

### 2b. Status codes — the thing most sites get wrong

Paste this into a terminal:

```bash
S=https://www.theironcodex.org
for u in / /people /people/eric-bloodaxe /archive /robots.txt /sitemap.xml; do
  printf 'want 200  %-30s ' "$u"; curl -s -o /dev/null -w '%{http_code}\n' "$S$u"
done
for u in /this-does-not-exist /people/not-a-real-person; do
  printf 'want 404  %-30s ' "$u"; curl -s -o /dev/null -w '%{http_code}\n' "$S$u"
done
for u in /characters/eric-bloodaxe /artifacts/joyeuse; do
  printf 'want 30x  %-30s ' "$u"; curl -s -o /dev/null -w '%{http_code}\n' "$S$u"
done
```

Every line must match what it says it wants.

**Why 404 matters so much:** before this work, *every* URL returned 200 —
including ones that did not exist. Google calls that a "soft 404" and counts it
against the whole site's quality. A page that does not exist must say so.

### 2c. Social sharing — the part that is invisible until it embarrasses you

Social networks do **not** run JavaScript, so this was completely broken before
and would never have shown up in Google.

The easiest test: **paste an article link into a WhatsApp, Slack or Discord
message and look at the preview before you send it.** You should see the article
title, its description and its image. Not "The Iron Codex" with a blank square.

Official validators, which show you exactly what each network sees:

- **Facebook / WhatsApp:** https://developers.facebook.com/tools/debug/
- **LinkedIn:** https://www.linkedin.com/post-inspector/
- **X/Twitter:** https://cards-dev.twitter.com/validator (login required)

If you change a page's image or title later, use the Facebook debugger's
**"Scrape Again"** button — these networks cache previews aggressively.

### 2d. Structured data

Paste any article URL into **https://validator.schema.org/** or Google's
**https://search.google.com/test/rich-results**.

You should see `Person`, `Event`, `Place`, `Organization` or `CreativeWork`
detected, plus a `BreadcrumbList`. Warnings about optional fields are fine.
**Errors** are not.

### 2e. Robots and sitemap

Open both in a browser:

- https://www.theironcodex.org/robots.txt — plain text, ends with a `Sitemap:` line
- https://www.theironcodex.org/sitemap.xml — XML with 809 `<loc>` entries

**Red flag:** if either renders as the website instead of as text/XML, the
routing has regressed.

---

## Level 3 — Google's own tools (the real answer, slowly)

This is where you find out whether it worked. **It requires setup that only you
can do**, because it proves you own the domain.

### Step 1 — Google Search Console (do this first, it is the whole game)

1. Go to https://search.google.com/search-console
2. Add a property → choose **Domain** → enter `theironcodex.org`
3. It asks you to add a **TXT record** to your DNS. Do that wherever the domain
   is registered. Verification usually completes within an hour.
4. Once verified: **Sitemaps** in the left menu → enter `sitemap.xml` → Submit.

Then wait. Genuinely — days to weeks.

**What to look at afterwards, and what "good" looks like:**

| Report | What it tells you | Healthy sign |
| --- | --- | --- |
| **Pages** (Indexing) | How many of the 809 URLs Google has indexed | Climbing toward 809 over weeks |
| **Sitemaps** | Whether the sitemap parsed | "Success", 809 discovered |
| **Performance** | Actual searches you appear in | Impressions appearing at all |
| **URL Inspection** (top bar) | Everything about one specific URL | "URL is on Google" |

**The single most useful tool** is **URL Inspection**. Paste any article URL into
the search bar at the top. It tells you whether Google has it, when it last
crawled it, and — via **"View crawled page"** — the exact HTML Google received.
That is the definitive answer to "does Google see our content?".

If a page is not indexed yet, press **"Request indexing"**. Useful for a handful
of pages; not something to do 809 times.

### Step 2 — Bing Webmaster Tools (5 minutes, worth it)

https://www.bing.com/webmasters — it can **import directly from Google Search
Console**, so once step 1 is done this is a two-click job. Bing also feeds
DuckDuckGo and ChatGPT search.

### Step 3 — the crude reality check

Search Google for:

```
site:theironcodex.org
```

That lists what Google has indexed. Early on it will show few or no results.
The number climbing over the following weeks is the signal that this worked.

---

## What to expect, honestly

| When | What is normal |
| --- | --- |
| Day 1 | `site:` search shows almost nothing. Correct. |
| Week 1–2 | Google discovers the sitemap and starts crawling. Indexed count begins to climb. |
| Month 1–2 | Most pages indexed. First impressions in the Performance report. |
| Month 3–6 | Rankings develop for specific, low-competition phrases. |

A new site has no authority, and that is the one thing technical SEO cannot buy.
What this work did was remove every *technical* reason for the site not to rank.
Growing authority is Track C's later milestones — internal linking, landing pages
and promotion.

**One caution:** do not repeatedly change titles and descriptions to chase
rankings in the first months. It resets Google's understanding of the page.

---

## The five-second version

Before every deploy:

```bash
npm run build && npm run check:seo
```

After every deploy, view source on one article and confirm the title is that
article's title and not "The Iron Codex".

Once a week, open Search Console and look at whether the indexed page count is
going up.
