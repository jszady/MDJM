# MJDM — Advanced SEO Audit (Pass 2)

**Site:** mjdm.agency  
**Audit type:** Second-pass strategic review — assumes Pass 1 technical fixes are complete  
**Audit date:** May 2026  
**Auditor context:** Full codebase reviewed — service page content, blog architecture, schema, internal linking, trust signals, ContentBlock system

---

## CURRENT STRENGTHS

### Architecture is genuinely strong for a new domain

The individual service pages at `/services/[slug]` are above the quality of 90% of local agency competitors. Each has: a keyword-targeted H1, a 200-word contextual intro, a structured includes section, unique value paragraphs, a numbered process, FAQs that target long-tail question queries, and a related content block linking to both sibling services and relevant blog articles. `FAQPage` and `Service` JSON-LD schemas are both present. This is the correct technical structure for service page ranking.

### BlogPosting schema with author is in place

`blogPosts` now carries an `author` field ("MJDM Team") that feeds into `BlogPosting` schema. This is a step toward E-E-A-T compliance — Google can attribute articles to an entity, even if it's organizational rather than individual.

### Service ↔ blog internal linking exists

The `relatedBlog` array in `service-page-content.ts` creates real prose-level links from service pages into specific articles. The web design service page links to three relevant articles. This is correct hub-and-spoke thinking, running in the right direction (authority page → blog).

### Breadcrumbs are structural

`SiteBreadcrumbs` with `BreadcrumbList` JSON-LD runs on all service pages. Google uses these for rich results in search snippets. The implementation is correct.

### TrustSignalsBand provides social proof on conversion-critical pages

The component appears on every service detail page. Stats (75+ projects, 60+ clients, 8+ years experience) and three testimonial quotes appear at a point in the user journey when credibility needs to be re-established before the final CTA.

### 7 articles with genuine depth across 4 topic clusters

The blog now covers Web Design (×2), SEO (×2), Social Media (×2), and Branding (×1). The three newer articles — web design cost UK, SEO for service businesses, and social media management for small businesses — are 1,000+ words targeting real commercial intent queries. This is enough to start building topical signals, but not yet enough to dominate a cluster.

### metaTitle / metaDescription per article

Articles now have independent, optimized meta titles that break from the generic `title | MJDM` format. "UK Web Design Costs 2026 — What Service Brands Pay" is a far stronger click-through signal than "How Much Does Web Design Cost in the UK? | MJDM."

---

## CRITICAL GAPS

These are the specific issues that will prevent ranking progress regardless of how much content is published.

---

### GAP 1 — "MJDM Team" Is Not an E-E-A-T Signal

**Severity: Blocking**

Google's Quality Rater Guidelines score pages on Experience, Expertise, Authoritativeness, and Trustworthiness. For a "Your Money or Your Life" adjacent category like marketing and web services (where bad advice costs businesses real money), Google applies higher E-E-A-T scrutiny.

"MJDM Team" as the author of every article is the organizational equivalent of a Wikipedia page with no citations. It signals nothing about the person who wrote the article, their credentials, or their experience. Every local agency competitor that publishes articles under a named director with a LinkedIn profile and a two-sentence bio is outperforming MJDM on this signal.

**What is required:**
- A named individual as the public face of MJDM's content (founder, director, lead strategist — whoever is real)
- An author page at `/about/[name]` or a bio section on `/about` with: full name, photo, role, years of experience, and a link to their LinkedIn
- Update all 7 articles to credit that named individual
- The author name must appear in the `BlogPosting` schema as a `Person`, not just a string

This one change is more valuable than publishing 5 additional articles.

---

### GAP 2 — Zero External Backlinks = Zero Domain Authority

**Severity: Blocking**

A new domain with no referring domains cannot rank for any keyword with meaningful competition. This is not an opinion — it is a mathematical reality of how PageRank distributes. Currently, no matter how good the content is, MJDM is competing with agencies that have 50–500 referring domains from years of industry presence.

The site has been built for authority. It has not yet earned any. This is the most urgent growth lever.

**Specific required actions:**
1. **Clutch.co** — Create a verified agency profile immediately. Clutch is DA 71 and every agency profile earns a do-follow backlink. This is the single most impactful free link available to a new agency.
2. **DesignRush** — DA 60, free listing, industry-relevant.
3. **Sortlist** — DA 58, free, international reach.
4. **Google Business Profile** — Not a traditional backlink but a trust entity signal and prerequisite for local pack inclusion.
5. **Awwwards Nomination** — Submit the site for consideration. Even a Nomination badge earns a link from a DA 91 domain. MJDM's design quality is genuinely competitive.

---

### GAP 3 — Blog Articles Cannot Link to Anything Inline

**Severity: High — architectural**

**File:** `src/data/blog-content.ts` (ContentBlock type definition, line 1–7)

The current `ContentBlock` union type supports: `paragraph`, `heading2`, `list`, `quote`, `highlight`, `image`. There is no `link` type, and the `paragraph` type carries only a plain `text: string`. This means it is structurally impossible to include a hyperlink inside article body text.

In practice this means:
- The SEO article cannot link to the web design article within the body where it would be most natural
- Articles cannot link to `/services/seo`, `/services/web-design`, or any specific service page contextually
- The only internal links from articles go to `/blog` and `/contact` via the article footer buttons

Inline contextual links are the most powerful type of internal link. A paragraph that says "...which is why technical SEO structure matters so much for conversion..." with a link to `/services/seo` passes link equity, creates a topical connection, and improves UX. The current architecture eliminates all of these opportunities.

**Fix:** Add a `link` inline marker or switch to an `inlineLinks` field on paragraphs:

```ts
// Option A — extend paragraph to support segments:
| { type: "paragraph"; segments: Array<{ text: string; href?: string }> }

// Option B — simpler: add inline HTML support for trusted content:
| { type: "paragraph"; text: string; html?: string }
```

This is a one-time architectural investment that unblocks every future article's internal linking.

---

### GAP 4 — No Related Articles on Blog Posts

**Severity: High**

After reading a 1,000-word article, the user is presented with two buttons: "View all insights" → `/blog`, and "Start a Project" → `/contact`. There is no prompt to read a related article. This:

- Increases bounce rate (visitor leaves after one article)
- Wastes the trust built during the read
- Eliminates a natural internal link chain that would pass equity between articles
- Misses mid-funnel visitors who are researching, not yet ready to buy

A "Related Insights" section on each article page — showing 2–3 articles from the same category or complementary topic — is one of the highest-ROI additions possible at this stage. It keeps qualified visitors on the site longer, improves dwell time signals, and creates automatic internal link architecture as the blog scales.

---

### GAP 5 — Testimonials Are Explicitly Described as Anonymized

**Severity: High**

The `TrustSignalsBand` contains this visible sentence: *"A sample of anonymised feedback from marketing and operations leaders we work with."*

This sentence, written with good intentions (transparency), actively undermines the trust it is trying to build. A skeptical enterprise buyer reads this as: "we cannot verify these testimonials exist, and neither can you." The anonymization note is worse than showing no testimonials at all.

The current quotes are excellent in tone and substance:
- *"They raised the bar on how we show up online"*
- *"What stood out was the commercial discipline"*
- *"Our pipeline finally matches the quality of our delivery team"*

These reads as genuine. But the moment you label them anonymous, every prospect's trust radar activates.

**Required:** Real testimonials with full name, job title, company name, and ideally a photo and LinkedIn URL. If real clients exist, prioritize getting even two verified testimonials. One named testimonial with a real LinkedIn link outperforms five anonymous blockquotes.

---

### GAP 6 — No Pillar Pages / Content Hubs

**Severity: High**

With 7 articles across 4 categories, the blog has the ingredients of topical clusters but no hub that ties them together. A pillar page (also called a topic cluster hub or ultimate guide) is a single comprehensive piece — 2,500–4,000 words — that covers a topic broadly and links to all the related spoke articles.

Example: **"The Complete Guide to Digital Marketing for Service Businesses"** (pillar)
- Links to → "SEO for Service Businesses: Where to Start"
- Links to → "SEO Foundations Every Service Business Needs"
- Links to → "Why Modern Web Design Still Wins Trust Fast"
- Links to → "How Short-Form Content Turns Attention Into Inquiries"
- Links to → "Building a Brand That Looks Expensive Online"
- Links to → "Social Media Management for Small Businesses"

This hub signals to Google: *MJDM covers this topic comprehensively, not just partially.* Topical authority is measured by breadth + depth. The spoke articles provide depth; the pillar provides breadth and the connecting narrative.

Without pillar pages, the cluster articles are isolated. With them, they reinforce each other.

---

### GAP 7 — No Comparison or Bottom-of-Funnel Content

**Severity: High**

All 7 current articles are informational (top of funnel). Someone who reads them learns something but does not necessarily move closer to hiring MJDM. The highest-converting content type for agencies is **bottom-of-funnel commercial content** — articles that target prospects who are already comparing options.

Missing content types:
- "Web Design Agency vs Freelancer: What Service Businesses Should Choose" — high intent, positions MJDM against the most common alternative
- "How to Choose a Web Design Agency (Without Getting Burned)" — captures "hire" intent
- "What Questions to Ask a Digital Agency Before Signing" — pure bottom-funnel research
- "Why Generic Marketing Agencies Fail Service Businesses" — positions MJDM's niche focus as the differentiator

These articles rank for queries like "how to choose web design agency", "web design agency vs freelancer", "questions to ask digital agency" — all of which are searched by people actively evaluating agencies. This is the content that drives direct inquiries, not just traffic.

---

### GAP 8 — No Industry-Specific Content or Landing Pages

**Severity: Medium-High**

The current content is service-specific (web design, SEO, social media) but not industry-specific. The most direct path to conversion for a new agency is industry positioning: become the visible choice for one vertical before competing broadly.

MJDM's existing case study data includes: a law firm, a real estate company, and a home services company. These are three distinct verticals with their own search demand:
- "web design for law firms" — ~600/month, KD ~18
- "digital marketing for real estate agents" — ~400/month, KD ~20
- "SEO for home services businesses" — ~250/month, KD ~15

A `/industries/law-firms` or `/web-design-for-law-firms` landing page targeting one vertical would rank faster than any broad agency term, convert at a higher rate (because the prospect recognizes their own industry), and create a repeatable template for other verticals.

---

### GAP 9 — Blog "Content" Category Is Still Empty

**Severity: Medium**

`blogCategories` includes "Content" but zero of the 7 published articles use this category. A visitor clicking the "Content" filter in the blog interface sees nothing. This is a dead-end state in the UI that undermines trust and wastes a filter option.

Either add an article targeting content marketing topics (e.g., "Content Strategy for Service Businesses: What to Publish and When") or remove "Content" from `blogCategories`.

---

### GAP 10 — CTA Architecture Is Uniform Across All Pages

**Severity: Medium**

Every page, regardless of where a visitor is in their decision journey, ends with the same `CtaBanner`:
- Primary: "Start a Project" → `/contact`
- Secondary: "Email MJDM" → `mailto:`

A visitor reading a top-of-funnel blog article on "Why Modern Web Design Wins Trust" is not ready to start a project. Pushing them to the contact page at this stage creates a mismatch that results in low CTA click rates. The appropriate CTA for that visitor is: read a related article, explore the web design service page, or download something useful.

Conversely, a visitor on the `/services/web-design` page who has read through the process and FAQs is bottom-of-funnel. The CTA should be more urgent: "Book a strategy call" with a direct Calendly link, not a generic contact form.

**Required:** Differentiate CTAs by page type:
- Blog articles → "Explore our [service] service" + "Read related: [article title]"
- Service pages → "Book a 20-minute call" with Calendly embed or urgency framing
- Work/About → "See how we can help [your industry]"

---

## QUICK WINS — Next 30 Days

Ranked by: (ranking impact × speed to implement) ÷ effort required.

---

### QW1 — Create a Clutch.co Agency Profile (Day 1)

**Time:** 45 minutes  
**Impact:** First real do-follow backlink from a DA 71 domain. Adds MJDM to the most-referenced agency directory in B2B procurement. Immediate trust signal for visitors who check directories before hiring.

Go to clutch.co/agencies, create a verified profile, add the company description, services, and website URL. Complete 100% of the profile for maximum visibility.

Also create profiles on: DesignRush (DA 60), Sortlist (DA 58), and Expertise.com. Total time: 3–4 hours. Expected backlinks: 4–6.

---

### QW2 — Name a Real Author and Build an Author Page (Days 2–4)

**Time:** 4–6 hours  
**Impact:** Highest E-E-A-T improvement possible. Transforms every existing article from "MJDM Team wrote this" to a verifiable expert who Google can cross-reference.

Steps:
1. Decide on the named author (founder or lead strategist)
2. Create `/about` section or `/about/[name]` page with: name, photo, role, 2-paragraph bio, years of experience, LinkedIn URL
3. Update `blogPosts` array: change `author: "MJDM Team"` to the real name across all articles
4. Update `BlogPosting` schema in the blog post page to use `"@type": "Person"` with `name`, `url` (LinkedIn), and `sameAs` fields
5. Update the `ArticleFooter` or article header to display author name and link to their bio page

This change retroactively improves the E-E-A-T of all 7 existing articles.

---

### QW3 — Add ContentBlock Inline Link Support and Retrofit Top 3 Articles (Days 3–6)

**Time:** 6–8 hours (architecture + content updates)  
**Impact:** Unlocks contextual internal linking across all current and future articles. Passes link equity to service pages. Improves topical connectivity signals.

The architectural change to `ContentBlock`:

```ts
// In src/data/blog-content.ts — extend the paragraph type:
| { 
    type: "paragraph"; 
    text: string; 
    // Optional: array of substrings to hyperlink within text
    links?: Array<{ anchor: string; href: string }> 
  }

// Or simpler: trusted HTML in a dedicated type
| { type: "html"; content: string }
```

Then update `ArticleContent` to handle the new type. After the architecture is in place, retrofit the three highest-traffic articles with contextual links:
- "SEO for Service Businesses" → link "web design structure" to `/services/web-design` and "social media" to `/services/social-media-management`
- "Web Design Cost UK" → link "SEO-friendly build" to `/services/web-development`
- "Social Media Management" → link "consistent content" to `/services/content-posting-account-management`

---

### QW4 — Add a "Related Insights" Section to Blog Post Pages (Days 4–7)

**Time:** 3–4 hours  
**Impact:** Reduces bounce rate. Passes internal link equity between articles. Creates a natural multi-article reading path that keeps qualified visitors on site.

Add to `src/app/blog/[slug]/page.tsx` after the `<article>` block, before `CtaBanner`:

```tsx
const related = blogPosts
  .filter((p) => p.slug !== slug && (p.category === post.category || p.featured))
  .slice(0, 2);

// Render as a "Continue reading" section with title + excerpt cards
```

This is self-maintaining as new articles are added — no manual curation required.

---

### QW5 — Replace Anonymous Testimonial Description With Verifiable Social Proof (Days 5–7)

**Time:** 2–3 hours (copy) + time to collect real testimonials  
**Impact:** Removes active trust-destroying copy. Even replacing with "We share feedback with client permission, with names visible on request" is better than "anonymised."

The ideal path: email 3–5 real clients this week, request a 2-sentence testimonial and permission to use their name and company. Even one named testimonial changes the conversion dynamic of every service page.

If real testimonials are not yet available, remove the "A sample of anonymised feedback" description from `TrustSignalsBand` and let the quotes stand without the disclosure.

---

### QW6 — Fix the Empty "Content" Blog Category (Day 1)

**Time:** 5 minutes  
**Impact:** Removes a dead-end UI state. Every filter option should return at least one result.

Remove `"Content"` from `blogCategories` in `src/data/blog-posts.ts`. The next content article can add it back when an actual Content article is published.

---

### QW7 — Differentiate Service Page CTAs From Blog CTAs (Days 6–10)

**Time:** 3–4 hours  
**Impact:** Matches CTA to visitor intent. Service page visitors who have read through process + FAQs are primed for a more direct conversion prompt.

Create a `<ServiceCta>` component variant:

```tsx
// High-intent CTA for bottom-of-funnel service pages:
<ServiceCta 
  headline="Ready to build a sharper web presence?"
  subtext="Book a 20-minute discovery call. MJDM will review your current position and suggest the highest-impact first move."
  primaryLabel="Book a Discovery Call"
  primaryHref="https://cal.com/mjdm"   // replace with real booking URL
  secondaryLabel="Send a Brief"
  secondaryHref="/contact"
/>
```

Use this on all `/services/[slug]` pages instead of the generic `CtaBanner`. The generic `CtaBanner` stays on blog posts and informational pages.

---

### QW8 — Submit to Google Search Console and Request Indexing (Day 1)

**Time:** 30 minutes  
**Impact:** Accelerates indexing for all new pages. Without manual submission, new service pages can sit unindexed for weeks.

1. Verify the site in Search Console (DNS or GA4 method)
2. Submit the sitemap: `https://www.mjdm.agency/sitemap.xml`
3. Use "URL Inspection → Request Indexing" for the 8 service pages individually
4. Set up email alerts for coverage issues

---

## GROWTH PLAN — Next 90 Days

### Phase A: Content (Days 1–90)

**Priority: Build the first complete topic cluster**

The web design cluster is MJDM's strongest starting position because:
- There are already 2 web design articles (trust + cost)
- The web design service page exists and is well-optimised
- "Web design" is the primary service and most recognizable offering
- The web design cost article already targets a medium-competition query

**Target: Complete the Web Design Hub-and-Spoke cluster by Day 60**

Publish these 4 articles in sequence, each 1,000–1,500 words, each earning its own informational keyword:

**Article 1 (Days 1–14): "How Long Does a Website Take to Build? A Service Business Guide"**
- Target keyword: "how long does website design take" (~600/month, KD ~14)
- Internal links: → `/services/web-design`, → `/services/web-development`, → web design cost article
- Intent: pre-hire research — prospect is evaluating timeline before committing
- CTA: Link to the web design service page, not contact

**Article 2 (Days 15–28): "Website Redesign Checklist: What to Prepare Before You Brief an Agency"**
- Target keyword: "website redesign checklist" (~1,200/month, KD ~18)
- Internal links: → `/services/web-design`, → web design trust article, → how long does a website take article
- Intent: decision phase — they are about to brief an agency. MJDM should be that agency.
- CTA: "Use this checklist with us" → `/contact`

**Article 3 (Days 29–45): "Web Design Agency vs Freelancer: Which Is Right for Your Business?"**
- Target keyword: "web design agency vs freelancer" (~800/month, KD ~22)
- Internal links: → `/services/web-design`, → web design cost article
- Intent: pure comparison — prospect is actively evaluating options. This is your most bottom-of-funnel content.
- CTA: direct "Talk to MJDM" prompt

**Article 4 (Days 46–60): "Web Design for Service Businesses: The Complete 2026 Guide" (PILLAR)**
- Target keyword: "web design for service businesses" (~400/month, KD ~10)
- Length: 2,500–3,500 words
- This is the hub. Links to: ALL existing web design articles + the redesign checklist + agency vs freelancer
- Every web design spoke article links BACK to this guide
- Internal links: → `/services/web-design`, → `/services/web-development`, → `/services/seo`
- This pillar page signals topical authority for the entire web design cluster

**By Day 60:** The web design cluster has 6 articles + 1 pillar + 1 service page, all cross-linked. Google should classify MJDM as a topical authority on "web design for service businesses."

---

**Priority 2: Launch one industry-specific landing page**

By Day 75, create one industry vertical page. The strongest option based on existing case study data:

**`/web-design-for-professional-services`** (or `/industries/professional-services`)
- H1: "Web Design for Professional Services Firms"
- Target: solicitors, consultancies, financial advisors, accountants, architects
- Target keyword: "web design for professional services" (~300/month, KD ~12)
- Content: why professional services firms need different web treatment (credibility over flash, compliance considerations, long sales cycles)
- Link from: `/services/web-design` → "See our work for professional services"
- Link from: the Sterling Law case study (once real)

This becomes a template. After validation, create: `/web-design-for-real-estate`, `/digital-marketing-for-home-services`, etc.

---

**Priority 3: Add a "Content Strategy" article to fill the empty category**

By Day 45, publish one article in the Content category:

**"Content Strategy for Service Businesses: What to Publish and When"**
- Target keyword: "content strategy for service businesses" (~400/month, KD ~12)
- Category: "Content" — fills the empty filter slot
- Internal links: → `/services/social-media-management`, → `/services/content-posting-account-management`, → social media management article

---

### Phase B: Backlinks (Days 1–90)

This cannot wait for content to be "ready." Start building links in parallel from Day 1.

**Days 1–7 (directory submissions, no outreach required):**
- Clutch.co — verified agency profile with services + URL
- DesignRush — free listing
- Sortlist — free listing
- Expertise.com — verified profile
- Google Business Profile — complete 100%, add photos, description, service areas
- Bing Places — mirrors GBP for Bing's index

**Days 8–30 (design award nominations):**
- Awwwards — submit the site for Honorable Mention or Site of the Day consideration. The nomination itself earns a DA 91 link even without winning.
- CSS Design Awards — submit for Site of the Day (DA 55)
- Siteinspire — submit the site (DA 75, curated gallery, do-follow)
- Dribbble — post design screenshots from the site with a backlink

**Days 30–60 (HARO / journalist outreach):**
- Sign up for HARO (helpareporter.com), Qwoted, and SourceBottle
- Monitor daily for queries in: marketing, web design, digital agencies, small business, branding, SEO
- Respond to 5–10 relevant queries per week with concise, expert commentary (2–3 paragraphs max, attribute to the named author)
- A single successful HARO response in Forbes, Inc., Entrepreneur, or Business Insider earns a high-authority link and brand mention

Realistic target: 2–4 journalist placements in 60 days from consistent HARO effort.

**Days 60–90 (guest post campaign):**
- Identify 20 marketing, web design, or small business blogs with DA 30–70 that publish guest content
- Pitch 5 articles per week to different publications
- Target topics that leverage existing MJDM expertise: "How Service Businesses Should Think About Their Website ROI", "What Makes a Web Design Brief Useful (And What Wastes Agency Time)"
- Each accepted piece earns a do-follow backlink from the author bio + contextual links in the body

Realistic target: 3–6 published guest posts in 90 days.

---

### Phase C: Optimisation (Days 1–90)

**Week 1: Set up measurement so you know what to optimize**
- Google Search Console: submit sitemap, verify all pages indexed, set up email alerts for drops
- Google Analytics 4: confirm events — form submissions, "Book a Call" clicks, scroll depth on blog articles
- Set up a simple tracking dashboard: weekly impressions, clicks, CTR, average position per page

**Week 2–4: Address E-E-A-T systematically**
- Named author in place (QW2 above)
- About page updated with real credentials, photo, LinkedIn
- Add company founding year, registered business name, and physical address to the footer or About page
- Add the named author to the Organization schema's `founder` or `member` field

**Week 4–8: Internal link audit pass**
- After the ContentBlock inline link architecture is updated (QW3), systematically add contextual links to all 7 existing articles
- Target: every article should link to at least 2 service pages and 2 other articles via inline text — not just footer buttons
- Create a simple internal link map (spreadsheet) to track which pages link to which

**Week 8–12: Conversion rate review**
- Pull GA4 data: which service pages have the highest exit rate? These need CTA or social proof improvements.
- Which blog articles have the highest scroll depth but lowest CTA click rate? These need a stronger inline CTA or a lead magnet (e.g., "Download the website brief template")
- A/B test the service page CTA: "Start a Project" vs. "Book a 20-minute Call" — measure which drives more contact form completions

---

## KEYWORD STRATEGY — Targets With Context

### 5 EASY Keywords (KD < 20 — realistic within 60–90 days)

These are winnable on content quality alone before significant backlink authority is built. Prioritize these for the next 3 articles.

| Keyword | Monthly Volume | KD | Current MJDM Coverage | Recommended Action |
|---------|---------------|-----|----------------------|-------------------|
| `web design for service businesses` | ~400 | ~10 | Partial (service page H1 and content) | Publish the pillar article with this exact phrase as H1 |
| `how long does website design take` | ~600 | ~14 | None | Article: "How Long Does a Website Take to Build?" |
| `social media management what actually works` | ~250 | ~10 | Partial (blog article exists) | Optimize existing article title and H2s more aggressively |
| `digital agency for small business uk` | ~350 | ~18 | None | Blog article + internal link from home hero section |
| `what to look for in a web design agency` | ~300 | ~12 | None | Bottom-of-funnel article targeting agency selection intent |

---

### 5 MEDIUM Keywords (KD 25–45 — realistic within 3–7 months with growing authority)

These require a domain with at least 10–20 referring domains and content depth. The timing depends heavily on backlink pace.

| Keyword | Monthly Volume | KD | Current MJDM Coverage | Required to Rank |
|---------|---------------|-----|----------------------|-----------------|
| `how much does web design cost uk` | ~1,900 | ~30 | Article exists — strongest current position | 10+ referring domains, more internal links to this article |
| `web design agency uk` | ~2,400 | ~40 | `/services/web-design` page exists | 20+ referring domains, stronger E-E-A-T, more content depth |
| `seo agency for service businesses` | ~500 | ~28 | `/services/seo` page + 2 SEO articles | SEO cluster pillar page + 5+ domain authority |
| `social media management agency uk` | ~880 | ~35 | `/services/social-media-management` page | Industry-specific social articles + backlinks |
| `brand identity for service business` | ~600 | ~30 | 1 branding article — coverage too thin | 2–3 more branding articles + brand/design service page depth |

---

### 5 HARD Keywords (KD 50+ — 12–24 month targets, require DA 30+)

These are the headline terms. They should inform the brand's long-term ambition but should not consume content resources now — competing on these with a new domain is money poorly spent. Build authority first via the easy and medium tiers.

| Keyword | Monthly Volume | KD | Why It's Hard | When to Target |
|---------|---------------|-----|--------------|----------------|
| `web design agency` | ~18,100 | ~65 | Top results are directories (Clutch, Bark) and agencies with DA 50+ | Month 18+ |
| `seo agency uk` | ~8,100 | ~58 | Dominated by established agencies (Absolute Digital, Salience, Honest) | Month 14+ |
| `digital marketing agency uk` | ~12,100 | ~62 | Extremely competitive — dominated by brands with 200+ referring domains | Month 18+ |
| `best web design agencies uk` | ~2,400 | ~52 | Dominated by round-up articles on sites with DA 70+ | Earn Clutch placement first, then target |
| `social media marketing agency` | ~6,600 | ~56 | Dominated by agencies with 100k+ monthly organic visitors | Month 18+ |

---

## COMPETITOR STRATEGY

### What Local Agencies Are Doing Better

**1. Named humans are visible**
Every competitive local agency — even solo operators — shows a founder photo, name, and usually a LinkedIn profile. This is not vanity; it is E-E-A-T compliance. Google's quality raters are instructed to look for clear authorship and identifiable human expertise. MJDM currently shows none.

**2. Real client logos are displayed**
The most common trust element on any competitive agency homepage is a client logo strip: "Trusted by X, Y, Z." These logos do not need to be famous names — they just need to be recognizable to the visitor's peer group. A single real client's logo is worth more than three anonymized testimonials.

**3. Established Google Business Profiles with reviews**
Local agencies with 20+ Google reviews appear in the local pack for geo-modified searches ("web design agency London"). This local pack placement often drives more leads than organic results. MJDM currently has no GBP, no reviews, and no local pack presence anywhere.

**4. Content volume**
A typical competitive local agency in the UK has published 30–100 blog posts over 3–5 years. Seven articles is not enough to establish topical authority against this baseline. Volume is not the strategy, but 7 articles cannot compete in the depth signals Google uses.

### What Mid-Tier Marketing Firms Are Doing Better

**1. Named author with a personal brand**
Mid-tier firms in the marketing space often have a director or founder who is a recognized voice — LinkedIn thought leader, podcast guest, conference speaker. Their articles are signed by a real person who appears in podcast transcripts, industry panels, and HARO quotes. This multi-channel presence is what Google means by "demonstrated expertise."

**2. Original research**
The most linked-to content in the marketing industry is original data. A survey of 100 SMEs about their digital marketing challenges, published as "State of SMB Marketing 2026," earns 20–50 natural backlinks from journalists, bloggers, and industry sources who cite the data. MJDM has zero original research. One well-executed survey with real data would be the single highest-ROI content investment available in Year 1.

**3. Pricing transparency**
Mid-tier agencies that publish pricing guides (even ranges like "£3,000–£8,000 for a 5-page service site") convert higher-intent visitors who have already made the decision to hire an agency and are comparing costs. Hiding pricing entirely creates a friction point that pushes comparison shoppers to competitors who are more transparent.

### How MJDM Outperforms Both

**Visual quality as a permanent differentiator**
Most local agency websites look like they were built in 2019 by their own team. MJDM's site is objectively at a higher visual standard than 95% of UK regional agencies. This is not subjective — the design language, motion detail, and typography system are at the premium end of the market. This advantage compounds: agencies research other agencies, and a prospect hiring a digital agency will notice the quality of MJDM's own site before anything else.

**Niche authority in "service businesses"**
Rather than positioning as a general agency, MJDM has an implicit niche: service businesses. This is a smart, sustainable positioning. The firm that becomes famous as "the web design agency built for service businesses" will consistently outrank generalist competitors for service-business-specific terms — because its content, case studies, and messaging will all resonate more precisely with that audience.

The move to accelerate this: add 3–4 industry-specific landing pages, publish 2–3 industry-specific articles, and make "service businesses" the explicit anchor phrase in the homepage H1 and the meta descriptions of key pages. Not "web design agency" — "web design for service businesses."

**Content depth beats content volume**
Because MJDM cannot compete on article volume (new site vs. established competitors), it should compete on depth. One 3,000-word definitive guide — with a real example, a real process, a named author, original insight, and comprehensive internal linking — will outperform 15 thin 400-word agency blog posts. The web design pillar article (QW plan above) is this opportunity. A single deeply-researched, authoritative piece of content can earn top-10 rankings for multiple long-tail queries simultaneously.

**Speed of schema and technical implementation**
Most local agency competitors have mediocre technical SEO: no schema, no breadcrumbs, no structured internal linking, poor Core Web Vitals from heavy WordPress themes. MJDM already has all of this built correctly. This is a time-limited advantage — it matters most right now while domain authority is being built. Use this window to capture rankings that better-established but technically weaker competitors cannot hold.

---

## RANKING POTENTIAL — Honest Assessment

**Can MJDM realistically rank in the top 10?**

Yes — but not yet, and not for head terms, and not without backlinks.

**Immediate top-10 potential (no links required):**
- Brand terms: `mjdm`, `mjdm agency`, `mjdm digital agency` — should rank position 1 within weeks of indexing
- Hyper-specific long-tail: any query that precisely matches an H1 or article title with KD < 10

**Top-10 potential within 3–5 months (with 10–20 referring domains):**
- "web design for service businesses" (after pillar article)
- "how long does website design take"
- "how much does web design cost UK" (existing article — strongest current position)
- "website redesign checklist"

**Top-10 potential within 6–12 months (with 20–40 referring domains):**
- "web design agency UK"
- "seo agency for service businesses"
- "social media management for small businesses"

**What is holding it back right now, ranked by impact:**

1. No external backlinks — cannot rank competitively without this
2. No named author — E-E-A-T weakness on all content
3. No pillar pages — topical authority is fragmented across disconnected articles
4. No comparison or decision-stage content — traffic that reaches the site cannot be converted at the bottom of the funnel
5. Anonymous testimonials — social proof exists but cannot be verified
6. ContentBlock architecture prevents inline linking — internal equity flow is blocked
7. No industry-specific content — missing the fastest-converting content type for agencies

None of these are permanent. All are fixable within 90 days. The site has the technical foundation, design quality, and content structure to become a top-10 property in the agency/web design niche within 12–18 months — but only if the backlink program starts immediately and the E-E-A-T gaps are closed in the next 30 days.
