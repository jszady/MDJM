/**
 * SEO copy and structure for /services/[slug] pages.
 * Each entry targets high-intent service keywords with 500–800+ words across sections.
 */

export type ServiceFaq = { question: string; answer: string };

export type ServiceProcessStep = { title: string; body: string };

export type ServicePageCopy = {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  includesHeading: string;
  includes: string[];
  valueHeading: string;
  valueParagraphs: string[];
  processHeading: string;
  processSteps: ServiceProcessStep[];
  faqHeading: string;
  faqs: ServiceFaq[];
  relatedSlugs: string[];
  relatedBlog: { slug: string; title: string }[];
};

export const servicePageContent: Record<string, ServicePageCopy> = {
  "web-design": {
    metaTitle: "Web Design Agency for Service Businesses — Toronto",
    metaDescription:
      "Toronto web design agency for service businesses. MJDM builds credible, conversion-focused websites that reflect your positioning and drive qualified inquiries.",
    h1: "Web Design for Ambitious Service Businesses",
    intro:
      "Your website is the first place serious buyers look when they compare you to competitors. In seconds they decide whether you feel established, credible, and worth a conversation. MJDM designs websites for service businesses that cannot afford to look generic: law firms, consultancies, agencies, trades, clinics, and B2B operators who win on trust and clarity. We combine premium visual direction with conversion-led layout, messaging hierarchy, and responsive systems so your brand reads as sharp on mobile as it does on desktop. Whether you are launching a new offer, repositioning, or replacing an outdated build, our web design process is built around commercial outcomes: clearer positioning, stronger first impressions, and a smoother path from visit to inquiry.",
    includesHeading: "What our web design service includes",
    includes: [
      "Discovery on your audience, offer, and competitive set so the design supports how you actually sell",
      "Wireframe-level thinking for key pages: homepage, services, case studies, and contact flows",
      "Premium UI design with typography, colour, spacing, and motion that match a high-end brand",
      "Responsive layouts tested across breakpoints so nothing feels like an afterthought on mobile",
      "Design handoff aligned with development: components, states, and notes that reduce rework",
      "Collaboration on headlines and on-page structure so design and message reinforce each other"
    ],
    valueHeading: "Why MJDM for web design",
    valueParagraphs: [
      "Many agencies can make something pretty. MJDM focuses on service businesses where credibility and clarity directly affect pipeline. That means fewer decorative flourishes that distract, and more discipline around hierarchy, proof, and calls to action. We think like operators: what should a visitor understand in ten seconds, what should they believe after thirty, and what should they do next.",
      "We also design with what comes next in mind—development, SEO, and content—so you are not paying twice to untangle layout decisions later. The result is a site that looks premium, loads with intention, and supports the growth channels you already plan to invest in."
    ],
    processHeading: "How we approach a web design engagement",
    processSteps: [
      {
        title: "Align on positioning and goals",
        body: "We clarify who the site must persuade, what proof you have, and what a qualified lead looks like. That frames every layout and copy decision."
      },
      {
        title: "Structure key journeys",
        body: "We map primary pages and conversion paths so navigation, service detail, and contact flows feel obvious—not clever for the sake of it."
      },
      {
        title: "Design the system, then the pages",
        body: "You get a coherent visual language first, then page designs that apply it consistently—including mobile behaviour and interaction detail."
      },
      {
        title: "Prepare for build and launch",
        body: "We package specifications for development, content, and measurement so the handoff is clean and launch does not erode the design intent."
      }
    ],
    faqHeading: "Web design FAQs",
    faqs: [
      {
        question: "Do you only work with large companies?",
        answer:
          "No. MJDM works with ambitious service brands at different sizes. What matters is that you care about perception and conversion, and you want a site that reflects the quality of your delivery—not a template that looks like everyone else."
      },
      {
        question: "Will my new site work on phones and tablets?",
        answer:
          "Yes. Responsive behaviour is built into the design system from the start, not patched in later. Critical journeys—services, proof, and contact—are reviewed on real breakpoints."
      },
      {
        question: "Can you work with our existing developer or CMS?",
        answer:
          "In most cases, yes. We can design for your stack and collaborate on component constraints. If you need a full build, MJDM also offers web development as a connected service."
      },
      {
        question: "How do you balance creativity with conversion?",
        answer:
          "Premium does not mean busy. We use restraint, typography, and spacing to create a high-end feel, then we place proof and CTAs where decision-makers naturally look—so the site feels elevated and still performs."
      },
      {
        question: "How long does a web design project take?",
        answer:
          "Timelines depend on scope—number of templates, content readiness, and review cycles. We will give you a realistic schedule after a short discovery so you can plan marketing and launch around it."
      }
    ],
    relatedSlugs: ["web-development", "seo", "social-media-management"],
    relatedBlog: [
      {
        slug: "how-much-does-web-design-cost-in-canada-2026-guide",
        title: "How much does web design cost in Canada? (2026 guide)"
      },
      { slug: "why-modern-web-design-still-wins-trust-fast", title: "Why modern web design still wins trust fast" },
      { slug: "building-a-brand-that-looks-expensive-online", title: "Building a brand that looks expensive online" }
    ]
  },

  "web-development": {
    metaTitle: "Web Development Agency Toronto — Fast, SEO-Ready Sites | MJDM",
    metaDescription:
      "Fast, SEO-ready web development for Toronto businesses. MJDM builds in Next.js and modern frameworks with clean code, CMS integration, and performance optimization.",
    h1: "Web Development for Toronto Businesses — Performance, SEO & Scale",
    intro:
      "A strong design still needs a disciplined build. MJDM develops marketing websites and high-impact landing pages with modern front-end architecture, performance in mind, and structure that search engines and marketing teams can work with. We are a strong fit when you need fast load times, maintainable components, CMS-ready patterns, and technical SEO foundations baked in—not a fragile one-off theme. Service businesses rely on their site to capture demand from search, referrals, and campaigns; we engineer the front end so those channels are not undermined by slow scripts, poor Core Web Vitals, or messy markup. From reusable sections to thoughtful state handling, the goal is simple: a site that feels premium in the browser and stays practical to evolve as your offer changes.",
    includesHeading: "What our web development service includes",
    includes: [
      "Implementation of approved designs into production-quality components and layouts",
      "Semantic HTML and accessible patterns that support SEO and screen-reader users",
      "Performance-minded asset handling, lazy loading where appropriate, and render discipline",
      "Responsive behaviour matching the design system across breakpoints",
      "Integration support for analytics, forms, and marketing tools within your stack",
      "Documentation and handover notes so your team or partners can extend the build confidently"
    ],
    valueHeading: "Why MJDM for web development",
    valueParagraphs: [
      "We sit at the intersection of brand, marketing, and engineering judgment. That means we push back when a trendy pattern would hurt conversion or SEO, and we propose alternatives that keep the experience sharp. You get code that is easier to reason about because it is organised around real pages and real user journeys—not abstract cleverness.",
      "When paired with MJDM web design, development stays tightly coupled to the spec so you avoid the classic gap where pixels drift and performance regresses. If you already have designs, we can onboard to your system and ship with the same standards."
    ],
    processHeading: "Our development process",
    processSteps: [
      {
        title: "Technical discovery",
        body: "We confirm hosting, CMS or headless setup, integrations, and success metrics so the build plan matches reality."
      },
      {
        title: "Component build-out",
        body: "We implement the design system as reusable pieces first, then assemble pages so consistency stays enforced."
      },
      {
        title: "Quality and performance pass",
        body: "We check mobile behaviour, accessibility basics, and performance budgets before launch so issues are caught early."
      },
      {
        title: "Launch and handover",
        body: "We support go-live, validate tracking and forms, and leave you with clear notes for the next iteration."
      }
    ],
    faqHeading: "Web development FAQs",
    faqs: [
      {
        question: "Which frameworks or platforms do you work with?",
        answer:
          "We typically work with modern React/Next-style stacks and common CMS patterns, but the right choice depends on your internal tools and growth plans. We align the stack to your team—not the other way around—whenever possible."
      },
      {
        question: "Can you improve an existing site instead of a full rebuild?",
        answer:
          "Often, yes. We can audit performance and structure, then prioritise fixes that move Core Web Vitals, crawlability, and conversion. We will be direct if a rebuild is the better investment."
      },
      {
        question: "How do you handle SEO technically?",
        answer:
          "We implement clean URLs, metadata, structured data where appropriate, sensible heading hierarchy, and fast delivery patterns. For ongoing rankings, pair development with MJDM SEO."
      },
      {
        question: "Who owns the code after launch?",
        answer:
          "You do. Deliverables are yours to host and extend. We structure the project so future developers can onboard without reverse-engineering mystery files."
      }
    ],
    relatedSlugs: ["web-design", "seo", "content-posting-account-management"],
    relatedBlog: [
      {
        slug: "how-much-does-web-design-cost-in-canada-2026-guide",
        title: "How much does web design cost in Canada? (2026 guide)"
      },
      { slug: "why-modern-web-design-still-wins-trust-fast", title: "Why modern web design still wins trust fast" },
      { slug: "seo-foundations-every-service-business-needs", title: "SEO foundations every service business needs" }
    ]
  },

  seo: {
    metaTitle: "SEO Agency for Toronto Service Businesses",
    metaDescription:
      "SEO for Toronto service businesses. MJDM handles technical fixes, keyword strategy, on-page optimization, and local SEO — all tied to leads and pipeline growth.",
    h1: "SEO for Service Businesses That Want to Grow",
    intro:
      "Search is where high-intent buyers look when they need a provider—not a product page for shoes, but a partner for legal advice, construction, consulting, healthcare, or professional services. MJDM helps service businesses earn visibility for the queries that actually drive revenue, not vanity traffic. That means technical SEO that lets Google crawl and understand your site, on-page structure that maps pages to real search intent, and content planning that strengthens authority over time. We focus on the foundations that compound: site architecture, internal linking, page quality, and measurement—then we align recommendations with how your sales team actually wins deals. If your pipeline depends on being found when someone types “near me” or “for [industry]”, SEO should be treated as a growth system, not a monthly checklist.",
    includesHeading: "What our SEO service includes",
    includes: [
      "Technical audit and prioritised fixes for crawlability, indexation, and performance signals",
      "Keyword and intent mapping aligned to services, locations, and commercial priority",
      "On-page recommendations for titles, headings, internal links, and content depth",
      "Content briefs and topical planning that support authority without generic filler",
      "Local and service-business SEO patterns where geography or niche matters",
      "Reporting tied to leads and meaningful traffic segments—not only rankings"
    ],
    valueHeading: "Why MJDM for SEO",
    valueParagraphs: [
      "SEO for services is different from ecommerce playbooks. You need trust, expertise signals, and pages that answer the questions buyers ask before they pick up the phone. MJDM connects SEO work to your positioning and proof—case studies, credentials, process—so rankings translate into conversations, not just clicks.",
      "We also coordinate with web design and development so technical issues do not silently cap your potential. The best content strategy cannot outrun a site that loads slowly, duplicates URLs, or hides key pages from crawlers."
    ],
    processHeading: "How we run an SEO engagement",
    processSteps: [
      {
        title: "Baseline and opportunity mapping",
        body: "We review your current visibility, competitors, and site health, then agree on the highest-impact problems to fix first."
      },
      {
        title: "Fix the technical foundation",
        body: "We address issues that affect crawling, rendering, and indexation so new content and links actually move the needle."
      },
      {
        title: "Strengthen priority pages",
        body: "We upgrade service and commercial pages to match intent, improve internal links, and clarify what action you want visitors to take."
      },
      {
        title: "Publish and iterate",
        body: "We support a steady publishing rhythm with briefs and measurement, adjusting based on what converts—not only what ranks."
      }
    ],
    faqHeading: "SEO FAQs",
    faqs: [
      {
        question: "How long does SEO take to show results?",
        answer:
          "Meaningful movement often takes months because search engines reward sustained quality and relevance. You should still see early wins from technical fixes and clearer page targeting; compounding growth comes from consistent execution."
      },
      {
        question: "Do you guarantee rankings?",
        answer:
          "No ethical agency can guarantee a position. We guarantee disciplined work: prioritised fixes, transparent reporting, and recommendations tied to business intent—not hype."
      },
      {
        question: "Can SEO work with a small site?",
        answer:
          "Yes, if the site targets the right intents and proves expertise. Sometimes fewer, stronger pages outperform dozens of thin ones. We help you choose the right footprint for your market."
      },
      {
        question: "Do you write all content in-house?",
        answer:
          "We can collaborate in multiple ways: MJDM-led briefs and edits, your subject-matter experts, or hybrid workflows. The goal is expertise on the page, not generic AI filler."
      },
      {
        question: "What tools do you use?",
        answer:
          "We use industry-standard SEO tooling for audits and tracking, but decisions are not outsourced to dashboards. Tools inform judgment; they do not replace it."
      }
    ],
    relatedSlugs: ["web-development", "web-design", "content-posting-account-management"],
    relatedBlog: [
      { slug: "seo-for-service-businesses-where-to-start", title: "SEO for service businesses: where to start" },
      { slug: "seo-foundations-every-service-business-needs", title: "SEO foundations every service business needs" },
      { slug: "why-modern-web-design-still-wins-trust-fast", title: "Why modern web design still wins trust fast" }
    ]
  },

  "social-media-management": {
    metaTitle: "Social Media Management Agency Toronto | MJDM",
    metaDescription:
      "Social media management for Toronto service businesses. MJDM handles strategy, content creation, scheduling, and reporting so your brand stays consistent.",
    h1: "Social Media Management for Toronto Businesses That Drives Real Inquiries",
    intro:
      "Social platforms reward consistency, clarity, and creative quality—but most service brands fall into two traps: posting sporadically with no strategy, or staying active with content that does not reflect the calibre of the business. MJDM manages social media for companies that want their feeds to feel as premium as their website: planned cadence, platform-appropriate creative direction, and messaging that supports trust and demand. We handle the operational load—calendars, posting rhythm, captions, and account hygiene—while keeping the brand voice sharp across LinkedIn, Instagram, TikTok, and other channels that matter for your audience. The point is not vanity reach; it is staying visible to buyers during long consideration cycles, warming up referrals, and creating direct paths to inquiry when intent spikes.",
    includesHeading: "What our social media management includes",
    includes: [
      "Channel strategy aligned to where your buyers actually spend time and how they evaluate providers",
      "Content calendars with themes tied to services, proof, and seasonal campaigns",
      "Creative direction for posts, carousels, and short-form concepts that match brand standards",
      "Posting execution, scheduling, and captioning with consistent tone and quality bar",
      "Community and inbox hygiene where needed so the account looks cared-for",
      "Monthly performance snapshots focused on meaningful engagement and downstream leads—not fluff metrics"
    ],
    valueHeading: "Why MJDM for social management",
    valueParagraphs: [
      "We understand service businesses: longer sales cycles, higher trust requirements, and the need for content that reinforces expertise without sounding salesy. MJDM plans social as part of your broader presence—site, SEO, campaigns—so messaging does not contradict what prospects see elsewhere.",
      "When you are ready to amplify with paid social or short-form video, the same team can extend into advertising and reels production without you coordinating three agencies."
    ],
    processHeading: "How we manage your social presence",
    processSteps: [
      {
        title: "Positioning and channel plan",
        body: "We define voice, pillars, proof points, and the right mix of platforms for your market."
      },
      {
        title: "Calendar and creative production",
        body: "We build a rolling plan and produce or direct assets so the feed stays active without last-minute chaos."
      },
      {
        title: "Publish and optimise",
        body: "We execute posting, monitor performance patterns, and adjust themes based on what resonates."
      },
      {
        title: "Quarterly strategic refresh",
        body: "We revisit goals, offers, and campaigns so the account evolves with the business—not a stale template."
      }
    ],
    faqHeading: "Social media management FAQs",
    faqs: [
      {
        question: "Which platforms should we prioritise?",
        answer:
          "It depends on your buyers. B2B service firms often lean on LinkedIn; consumer-facing brands may need Instagram or TikTok. We recommend a focused footprint you can sustain well rather than spreading thin."
      },
      {
        question: "Do you create all creative in-house?",
        answer:
          "We can produce creative end-to-end or pair with your internal team and photographers. The important part is a consistent standard and a calendar that does not slip."
      },
      {
        question: "How often should we post?",
        answer:
          "Consistency beats random bursts. We set a sustainable cadence based on your capacity and what the platform rewards, then protect quality as volume scales."
      },
      {
        question: "Can social support lead generation directly?",
        answer:
          "Yes—through clear CTAs, offers, and retargeting paths, especially when paired with paid social. Organic social often nurtures; paid accelerates conversion."
      },
      {
        question: "What if we already have a marketing manager?",
        answer:
          "We can operate as execution support: they own strategy approvals, we own production rhythm and platform detail. Many teams use MJDM to remove bottlenecks."
      }
    ],
    relatedSlugs: ["social-media-advertising", "reels-video-production", "seo"],
    relatedBlog: [
      {
        slug: "social-media-management-for-small-businesses-what-actually-works",
        title: "Social media management for small businesses: what actually works"
      },
      { slug: "short-form-content-turns-attention-into-inquiries", title: "How short-form content turns attention into inquiries" },
      { slug: "building-a-brand-that-looks-expensive-online", title: "Building a brand that looks expensive online" }
    ]
  },

  "social-media-advertising": {
    metaTitle: "Social Media Advertising Agency Toronto | MJDM",
    metaDescription:
      "Paid social advertising for Toronto businesses. MJDM runs Meta and LinkedIn campaigns built around qualified leads, bookings, and measurable revenue outcomes.",
    h1: "Social Media Advertising for Toronto Businesses — Leads, Bookings & Revenue",
    intro:
      "Organic reach alone rarely moves fast enough when you have aggressive growth targets. MJDM builds paid social advertising systems for service businesses that need predictable pipeline: campaigns structured around offers, creative testing, audience refinement, and reporting that ties spend to inquiries—not vanity impressions. We pair strong visuals with funnel-aware thinking so ads match where the buyer is in the journey, from cold awareness to retargeting people who already visited your site or engaged with your content. Whether you need Meta, LinkedIn, TikTok, or a focused mix, the objective is commercial: more qualified conversations, better cost per lead where measurable, and creative iteration that learns from real performance data—not guesses.",
    includesHeading: "What our paid social service includes",
    includes: [
      "Campaign architecture for prospecting, retargeting, and offer-led conversion paths",
      "Creative direction and ad variations designed for testing hooks, headlines, and formats",
      "Audience strategy using first-party signals, intent signals, and platform best practices",
      "Budget pacing, bid strategy guidance, and ongoing optimisation against agreed KPIs",
      "Landing page alignment recommendations so clicks are not wasted on weak post-click experiences",
      "Performance reporting focused on leads, bookings, and pipeline contribution"
    ],
    valueHeading: "Why MJDM for paid social",
    valueParagraphs: [
      "Paid social fails when creative looks generic or when targeting ignores how services are bought. MJDM brings brand discipline from our web and content work into ad creative, so your campaigns feel like you—not like a stock template with your logo pasted on.",
      "We also coordinate with organic social and SEO so retargeting pools, messaging, and offers stay coherent. Fragmented agencies often leak money here; a unified approach tightens the story from first touch to inquiry."
    ],
    processHeading: "How we run paid social campaigns",
    processSteps: [
      {
        title: "Offer and funnel alignment",
        body: "We clarify what you are selling, what proof supports it, and what conversion action we are optimising for."
      },
      {
        title: "Launch structured tests",
        body: "We launch with deliberate creative and audience contrasts so we learn quickly without burning budget blindly."
      },
      {
        title: "Optimise weekly",
        body: "We tighten targeting, refresh creative, and adjust spend toward what is producing qualified outcomes."
      },
      {
        title: "Scale what works",
        body: "Once winners emerge, we expand carefully—keeping efficiency and brand quality under control."
      }
    ],
    faqHeading: "Paid social FAQs",
    faqs: [
      {
        question: "What budget do we need to start?",
        answer:
          "Minimums depend on platform and geography. We will recommend a range that can support learning without setting you up for inconclusive data. The priority is honest testing, not overspending."
      },
      {
        question: "Can you work with our existing ad account?",
        answer:
          "Yes. We can audit historical performance, restructure campaigns, and improve creative while preserving account history where it helps."
      },
      {
        question: "How do you measure success for services?",
        answer:
          "We track lead form completions, calls, chat events, and downstream CRM signals where available. We align on what a qualified lead means so reporting matches sales reality."
      },
      {
        question: "Do you build landing pages?",
        answer:
          "We can recommend changes and coordinate with MJDM web design/development for high-converting pages when needed."
      }
    ],
    relatedSlugs: ["social-media-management", "reels-video-production", "web-design"],
    relatedBlog: [
      { slug: "short-form-content-turns-attention-into-inquiries", title: "How short-form content turns attention into inquiries" },
      { slug: "seo-foundations-every-service-business-needs", title: "SEO foundations every service business needs" }
    ]
  },

  "reels-video-production": {
    metaTitle: "Reels & Short-Form Video Production Toronto | MJDM",
    metaDescription:
      "Short-form video and Reels production in Toronto. MJDM handles concept to delivery — scroll-stopping content built for your brand, not random trends.",
    h1: "Reels & Short-Form Video Production in Toronto — Built for Attention and Brand",
    intro:
      "Short-form video is not optional for many categories anymore—it is how people discover, compare, and decide which brand feels current. MJDM plans and produces reels-style content for businesses that cannot afford amateur output: concept development, shot planning, direction, and delivery formats tuned to platform behaviour on Instagram, TikTok, and beyond. We focus on ideas that communicate your offer and credibility in the first two seconds, because that is where attention is won or lost. Production is built around efficiency for social cadence: repeatable formats, strong hooks, and brand-consistent visuals that still feel native to each platform. Whether you need a batch of concepts for the quarter or support alongside a broader social management retainer, the goal is simple: creative that stops the scroll and supports inquiries—not random trends disconnected from your positioning.",
    includesHeading: "What our reels and short-form production includes",
    includes: [
      "Creative concepting aligned to offers, proof points, and campaign themes",
      "Shot planning, scripting hooks, and run-of-show that keeps shoots efficient",
      "On-set or remote direction support depending on logistics and budget",
      "Editing pacing, captions, and safe zones optimised for mobile viewing",
      "Platform-native deliverables and aspect ratios for reels, shorts, and vertical ads",
      "Optional packaging into your social calendar when paired with management"
    ],
    valueHeading: "Why MJDM for short-form video",
    valueParagraphs: [
      "We think channel-first but brand-serious. That means hooks and pacing that fit the feed, without abandoning the premium tone you have built on your website and static creative. MJDM also sits beside social management and paid advertising, so content does not float in isolation from distribution.",
      "If you need long-form or polished edits for other channels, our video editing service complements production cleanly."
    ],
    processHeading: "How we produce short-form video",
    processSteps: [
      {
        title: "Creative batch planning",
        body: "We align themes to marketing priorities and decide what formats will repeat well across weeks."
      },
      {
        title: "Production day(s)",
        body: "We capture enough coverage for multiple edits while keeping the schedule tight and costs controlled."
      },
      {
        title: "Edit and platform cut-downs",
        body: "We deliver variations, captions, and end cards so you can test hooks and publish without rework bottlenecks."
      },
      {
        title: "Learn and iterate",
        body: "We review performance signals and carry learnings into the next batch so creative compounds."
      }
    ],
    faqHeading: "Short-form video FAQs",
    faqs: [
      {
        question: "Do we need a full production crew every time?",
        answer:
          "Not always. Some brands need lighter capture with strong editing; others need full shoots. We scope to your goals and realistic publishing cadence."
      },
      {
        question: "Can you work with footage we already shot?",
        answer:
          "Yes. If you have usable rushes, MJDM can edit and repackage into reels-first cuts as part of our video editing workflow."
      },
      {
        question: "How do you keep brand consistency?",
        answer:
          "We document tone, typography overlays, colour, and motion habits so multiple edits still feel like one brand—not a new style every week."
      },
      {
        question: "What platforms do you optimise for?",
        answer:
          "Primarily Instagram Reels and TikTok, with adaptations for YouTube Shorts and vertical paid placements where needed."
      }
    ],
    relatedSlugs: ["video-editing", "social-media-management", "social-media-advertising"],
    relatedBlog: [
      { slug: "short-form-content-turns-attention-into-inquiries", title: "How short-form content turns attention into inquiries" }
    ]
  },

  "video-editing": {
    metaTitle: "Professional Video Editing for Toronto Brands | MJDM",
    metaDescription:
      "Professional video editing for Toronto brands. MJDM handles story structure, color, sound, graphics, and multi-format delivery for marketing and social content.",
    h1: "Video Editing for Toronto Brands — Elevate Your Brand Story",
    intro:
      "Raw footage is only potential. MJDM edits video for service brands and marketing teams that need polished output without hiring a full in-house post team: tighter pacing, modern graphics, colour consistency, and platform-ready deliverables for social, ads, webinars, and website heroes. We pay attention to the details that separate amateur from premium—sound beds, transition discipline, typography hierarchy, and cuts that respect attention spans. Whether you are repurposing long interviews into short clips, tightening a launch film, or packaging testimonial content for campaigns, editing should reinforce positioning, not distract from it. Our editors work with the same brand standards we apply to web and social creative, so your video feels coherent everywhere it appears.",
    includesHeading: "What our video editing service includes",
    includes: [
      "Story tightening: structure, pacing, and removal of friction that loses viewers",
      "Graphics, lower thirds, and titles that match your brand system",
      "Colour correction and basic grading for consistent look across clips",
      "Audio cleanup, music selection guidance, and mix balance for clarity",
      "Deliverables for multiple aspect ratios where needed (16:9, 1:1, 9:16)",
      "Versioning for A/B hooks when paired with paid social testing"
    ],
    valueHeading: "Why MJDM for editing",
    valueParagraphs: [
      "Editing is where brand quality is often won or lost. We edit with marketing intent: what is the viewer supposed to feel, understand, and do next. That discipline keeps videos shorter without feeling rushed, and longer without feeling bloated.",
      "We integrate cleanly with reels production and social management so you have one partner across capture, cut, and distribution when you want that continuity."
    ],
    processHeading: "How we run editing projects",
    processSteps: [
      {
        title: "Brief and asset intake",
        body: "We confirm goals, audience, runtime targets, and file organisation so post-production starts smoothly."
      },
      {
        title: "Assembly cut",
        body: "We establish structure and narrative flow before polishing so feedback is efficient."
      },
      {
        title: "Fine cut and brand polish",
        body: "We add graphics, refine pacing, and lock audio so the piece feels finished and premium."
      },
      {
        title: "Deliverables",
        body: "We export platform-ready masters and variants, with naming conventions your team can reuse."
      }
    ],
    faqHeading: "Video editing FAQs",
    faqs: [
      {
        question: "What software or formats do you accept?",
        answer:
          "We can work with common professional formats and proxy workflows. If you have specific delivery specs for ads or broadcast, we accommodate them in the brief."
      },
      {
        question: "How many revision rounds are included?",
        answer:
          "We structure feedback in clear rounds so timelines stay predictable. Scope defines rounds; we spell that out before work begins."
      },
      {
        question: "Can you add subtitles?",
        answer:
          "Yes. Captions are standard for social cuts, including safe-area and readability best practices for mobile."
      },
      {
        question: "Do you provide music licensing guidance?",
        answer:
          "We guide you on licensed libraries and usage limits so published content does not create compliance risk."
      }
    ],
    relatedSlugs: ["reels-video-production", "social-media-management", "social-media-advertising"],
    relatedBlog: [
      { slug: "short-form-content-turns-attention-into-inquiries", title: "How short-form content turns attention into inquiries" }
    ]
  },

  "content-posting-account-management": {
    metaTitle: "Content Posting & Account Management Toronto | MJDM",
    metaDescription:
      "Social media posting and account management for Toronto businesses. MJDM executes your calendar with precision — consistent, on-brand, and reported weekly.",
    h1: "Content Posting & Account Management for Toronto Businesses",
    intro:
      "Strategy without execution is just a slide deck. MJDM provides operational support for teams that need reliable posting, clean account hygiene, and consistent execution week after week: uploads, scheduling, captions, tagging, link-in-bio maintenance, and the small details that prevent your brand from looking abandoned. This service is ideal when you already have creative direction—or periodic content production—but you lack the internal bandwidth to publish consistently across platforms. We treat posting as a system: checklists, QA, and schedules that reduce errors and last-minute scrambles. For service businesses, consistency signals professionalism. When prospects compare you to competitors, an active, well-maintained presence quietly reinforces that you run a tight operation—not only on the sales call, but everywhere you show up online.",
    includesHeading: "What this service includes",
    includes: [
      "Scheduling and publishing according to an agreed calendar and approval workflow",
      "Caption writing or light editing to match brand voice and compliance needs",
      "Hashtag and tagging hygiene where appropriate for discovery and partnerships",
      "Profile upkeep: bios, highlights structure, pinned posts, and link destinations",
      "Basic QA on assets before publish (safe zones, typos, broken links)",
      "Coordination with campaigns and launches so messaging stays aligned under deadlines"
    ],
    valueHeading: "Why MJDM for operational support",
    valueParagraphs: [
      "This is not “cheap scheduling.” It is disciplined execution with a premium standard. MJDM understands how posting mistakes show up in-market—wrong links, off-brand tone, inconsistent formatting—and we build workflows to prevent them while keeping velocity high.",
      "When you want to grow beyond maintenance, we can layer in social management strategy, paid social, or SEO-led content without changing partners."
    ],
    processHeading: "How we work operationally",
    processSteps: [
      {
        title: "Workflow setup",
        body: "We define approvals, asset handoff, naming conventions, and publishing windows."
      },
      {
        title: "Calendar execution",
        body: "We publish on schedule, document what went live, and flag issues early."
      },
      {
        title: "Weekly QA and reporting",
        body: "We review performance basics and operational health—errors, engagement anomalies, inbox items if included."
      },
      {
        title: "Continuous improvement",
        body: "We tighten processes as volume grows so quality does not collapse under speed."
      }
    ],
    faqHeading: "Posting and account management FAQs",
    faqs: [
      {
        question: "Is this the same as full social media management?",
        answer:
          "It can overlap, but posting/account support is often more operational. If you need strategy, creative direction, and campaign planning, choose social media management—or combine both."
      },
      {
        question: "Who approves content before it goes live?",
        answer:
          "You define approvers and SLAs. We can publish directly after approval or queue drafts depending on your risk preferences."
      },
      {
        question: "Can you post across multiple brands?",
        answer:
          "Yes with separate workflows. We keep assets and access partitioned so teams stay confident in governance."
      },
      {
        question: "What access do you need?",
        answer:
          "Typically platform access via secure handoff. We follow least-privilege principles and document who holds credentials."
      }
    ],
    relatedSlugs: ["social-media-management", "seo", "web-development"],
    relatedBlog: [
      { slug: "short-form-content-turns-attention-into-inquiries", title: "How short-form content turns attention into inquiries" },
      { slug: "seo-foundations-every-service-business-needs", title: "SEO foundations every service business needs" }
    ]
  }
};

export function getServicePageCopy(slug: string): ServicePageCopy | undefined {
  return servicePageContent[slug];
}
