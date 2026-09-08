# How to check the SEO is actually working

Written for someone who has not done SEO before. Nothing here needs paid tools.

There are **three levels**, and they answer different questions:

| Level | Question it answers | How long |
| --- | --- | --- |
| 1. Automatic gate | Did we build the pages correctly? | nothing to do |
| 2. Live spot checks | Is the deployed site serving them correctly? | 5 minutes |
| 3. Google's own tools | Is Google actually indexing and ranking us? | weeks |

**The important thing to understand up front:** levels 1 and 2 are pass/fail and
answer today. Level 3 is the real outcome, and it is *slow* — Google takes days to
weeks to crawl a new site and months to rank it. Do not judge the work by level 3
in the first fortnight. Nothing is wrong if traffic is zero in week one.

---

## Level 1 — the automatic gate (nothing for you to do)

**This runs itself. You never need to run a command for it.**

`scripts/check-seo.mjs` is wired into the build in `vercel.json`, so it runs on
**every deployment**, and a failure **fails the deploy**. A build that would ship
809 pages with a broken title, a missing canonical or an invalid sitemap cannot
reach production — it stops at Vercel with a red build instead.

It checks every one of the 800 article pages for: a unique title, a canonical
URL, a description of reasonable length, a social share image, structured data
that actually parses, at least 200 characters of crawlable text, and membership
in the sitemap. It also verifies the two `vercel.json` settings the whole scheme
depends on.

If you ever *want* to run it by hand, `npm run build` includes it and prints:

```
SEO check passed: 800 article pages, 809 sitemap URLs, robots.txt and 404 in place.
```

But the point is that you should not have to. **If a deploy goes green, level 1
passed.**

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

Full click-by-click walkthrough below. **Your DNS is hosted at Vercel**
(nameservers `ns1.vercel-dns.com` / `ns2.vercel-dns.com`), *not* at your
registrar — so the TXT record is added in the Vercel dashboard. This is the part
most guides get wrong for this setup, because they assume you edit DNS wherever
you bought the domain.

#### 1a. Create the property

1. Go to https://search.google.com/search-console and sign in with
   **rui.palma.baiao@gmail.com**.
2. If this is your first property you land straight on the "Select property
   type" screen. Otherwise: click the property dropdown at the **top left** →
   **+ Add property**.
3. You get two boxes side by side. Choose the **left one, "Domain"**.
   - **Domain** covers `theironcodex.org`, `www.theironcodex.org`, http and
     https, all in one property. This is what you want.
   - "URL prefix" (right box) would only cover the exact address you type, so
     `www` and the apex would be separate properties. Avoid it.
4. Type `theironcodex.org` — **no `https://`, no `www`**, just the bare domain.
5. Click **Continue**.

Google now shows a box titled "Verify domain ownership via DNS record" with a
string that looks like:

```
google-site-verification=AbCdEf123456...
```

Click **Copy**. Leave this browser tab open — you come back to it in 1c.

#### 1b. Add the TXT record in Vercel

1. Go to https://vercel.com/dashboard and sign in.
2. In the **top navigation bar**, click **Domains**. (This is an account-level
   page — it is *not* inside the project. Project → Settings → Domains only
   controls which domain points at which project, not the DNS records.)
3. Click **`theironcodex.org`** in the list.
4. You land on the DNS records view. Click **Add** (or "Add Record").
5. Fill in exactly:

   | Field | What to enter |
   | --- | --- |
   | **Name** | leave **blank** (some versions show `@` — either means the root domain) |
   | **Type** | `TXT` |
   | **Value** | paste the whole `google-site-verification=…` string |
   | **TTL** | leave the default (60) |

   **Do not** type `theironcodex.org` in the Name field. Vercel appends the
   domain automatically, so that would create a record for
   `theironcodex.org.theironcodex.org`, which verifies nothing. This is the
   single most common mistake here.

6. Click **Add** / **Save**.

#### 1c. Verify

Vercel's DNS uses a 60-second TTL, so this is fast — usually under two minutes,
not the "up to 72 hours" the generic warnings mention.

Optional but reassuring — check it yourself from a terminal:

```bash
dig +short TXT theironcodex.org
```

When it returns your `"google-site-verification=…"` string, you are ready.

Go back to the Search Console tab and click **Verify**. You should get
"Ownership verified".

If it fails, wait a minute and click Verify again — Google sometimes caches a
negative lookup. **Do not delete the TXT record afterwards.** Google re-checks it
periodically and will unverify the property if it disappears.

#### 1d. Submit the sitemap

1. In Search Console, make sure `theironcodex.org` is selected in the property
   dropdown (top left).
2. In the **left sidebar**, find the **Indexing** group → click **Sitemaps**.
3. There is a field labelled "Add a new sitemap", with
   `https://www.theironcodex.org/` already shown as a fixed prefix.
4. Type just **`sitemap.xml`** into the box — not the full URL. The prefix is
   already there, so typing the whole address gives you
   `https://www.theironcodex.org/https://www.theironcodex.org/sitemap.xml`.
5. Click **Submit**.

**What you should see**, in the "Submitted sitemaps" table below:

| Column | Expected |
| --- | --- |
| Status | **Success** |
| Discovered URLs | **809** |
| Type | Sitemap |

If it says **"Couldn't fetch"**, do not panic and do not resubmit repeatedly.
That status very often appears immediately after submission and resolves itself
within a few hours once Google actually fetches the file. Check the file is fine
yourself by opening https://www.theironcodex.org/sitemap.xml in a browser — if
XML loads, the sitemap is good and the status will catch up.

You only ever submit a sitemap **once**. Google re-reads it automatically from
then on, including after every deploy.

#### 1e. URL Inspection — proving Google sees the content

This is the definitive test, and there is an important detail: **which button you
press depends on whether Google has crawled the page yet.** On a new site it has
not, so the "View crawled page" option will not exist — you use the live test
instead.

1. At the **very top** of Search Console there is a wide search bar reading
   *"Inspect any URL in https://www.theironcodex.org"*.
2. Paste a **full article URL**, including `https://www.` — for example:
   `https://www.theironcodex.org/people/eric-bloodaxe`
3. Press **Enter** and wait 10–30 seconds.

You will see one of two results:

- **"URL is not on Google"** — expected for weeks on a new site. It is not an
  error. It means "not indexed yet", not "something is broken".
- **"URL is on Google"** — indexed.

**Now the actual test.** Click **TEST LIVE URL** at the top right. This makes
Google fetch and render the page *right now*, regardless of indexing status.
Wait ~30 seconds, then:

4. Click **VIEW TESTED PAGE** (right-hand side).
5. Select the **HTML** tab.

This is the exact HTML Googlebot received. Search it (Ctrl+F / Cmd+F) for:

| Search for | You should find |
| --- | --- |
| `<title>` | `Eric Bloodaxe — king of Norway and Northumbria \| The Iron Codex` |
| `canonical` | `https://www.theironcodex.org/people/eric-bloodaxe` |
| `og:image` | a real image URL |
| `Bloodaxe was a son of` | the article's actual prose |

If all four are there, Google is receiving everything it needs. That is the
definitive answer to "is our SEO actually working".

Also check the **Screenshot** tab — it shows the page as Googlebot rendered it,
which confirms the JavaScript app loads correctly for Google too.

Once Google *has* crawled a page (weeks later), a **"View crawled page"** option
appears alongside, showing the stored copy rather than a live fetch. Same tabs,
same things to look for.

**"Request indexing"**: on the inspection result there is a *Request indexing*
link. It pushes one URL to the front of the queue. Use it for a handful of
important pages — the home page, `/archive`, two or three strong articles. There
is a daily quota, and it is not a way to index 809 pages. The sitemap does that.

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

**Before a deploy: nothing.** The gate runs in the build and blocks the deploy if
anything is wrong. A green deployment means the SEO checks passed.

**After a deploy, occasionally:** view source on one article (Cmd+Option+U) and
confirm the title is that article's title and not "The Iron Codex".

**Once a week:** open Search Console and see whether the indexed page count is
going up. That is the only number that really matters.
