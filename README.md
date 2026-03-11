# anechoic

**An anechoic chamber doesn't fight noise. It's designed so noise cannot exist.**

That's the idea. The best async-first companies — GitLab, Basecamp, Doist, Automattic — didn't bolt "async practices" onto noisy cultures. They built environments where the noise never forms in the first place. Written-first. Handbook-first. Async by default. The architecture eliminates the echo.

This repo is what happens when you stop trying to invent yet another async framework and instead absorb everything that already works. 17+ companies. 31 source guides. Thousands of pages of handbooks distilled into patterns, templates, and principles you can actually use.

---

## Why "anechoic"

An [anechoic chamber](https://en.wikipedia.org/wiki/Anechoic_chamber) is a room engineered to completely absorb reflections of sound or electromagnetic waves. No echo. No reverberation. No noise floor. Just pure signal.

Most organizations try to solve communication problems by adding more communication — another Slack channel, another standup, another sync. That's soundproofing. It dampens noise but doesn't eliminate it.

Async-first culture is anechoic. You don't filter noise after the fact. You design systems, habits, and norms where noise has nowhere to live:

- **Written over spoken** — thoughts are complete before they're shared
- **Async over sync** — people respond when they have something worth saying
- **Documented over discussed** — decisions persist, not just the memory of a meeting
- **Public over private** — information flows without someone having to relay it

The result isn't silence. It's clarity.

---

## Origin Story

The world doesn't need another blog post about "how to do async." There are already brilliant, battle-tested handbooks written by companies that have been doing this for a decade+. GitLab has 2,000+ pages. Basecamp literally wrote the book. Doist runs 95% async across 10+ timezones.

The problem isn't a lack of ideas. It's that the ideas are scattered across company handbooks, blog posts, PDFs, and podcasts — and nobody has stitched them together.

So instead of inventing something new, this repo absorbs everything that already exists. Every practice is attributed. Every principle is cross-referenced against what multiple companies independently arrived at. When GitLab, Basecamp, Doist, and Automattic all agree on something despite having wildly different cultures, sizes, and industries — that's signal.

---

## What's Inside

```
anechoic/
├── START-HERE.md                       # 20-minute quick start
├── knowledge-base/
│   ├── handbook-summaries/             # Distilled company handbooks
│   │   ├── gitlab-summary.md           # GitLab (2000+ pages → bulletpoints)
│   │   ├── basecamp-summary.md         # Basecamp/37signals
│   │   ├── zapier-summary.md           # Zapier Remote Work Guide
│   │   ├── doist-summary.md            # Doist (Todoist/Twist)
│   │   ├── automattic-summary.md       # Automattic (WordPress.com)
│   │   └── helpscout-summary.md        # Help Scout
│   ├── master-async-playbook.md        # The consolidated playbook
│   ├── master-index.md                 # Cross-company comparison
│   ├── company-comparison-matrix.md    # Side-by-side practices
│   ├── quick-reference-cards.md        # Printable one-pagers
│   ├── patterns/
│   │   └── ticket-first-communication.md
│   └── sources/
│       ├── links.md                    # All source URLs
│       └── raw/                        # 31 raw handbook excerpts
├── frameworks/
│   ├── tpm-communication-framework.md  # TPM-specific guide
│   └── templates/
│       ├── weekly-update.md            # Async status updates
│       └── decision-document.md        # RFC-style decisions
└── integration/
    └── applying-to-your-project.md     # How to apply this
```

---

## Companies Absorbed

| Company | Size | Why They Matter |
|---------|------|-----------------|
| **GitLab** | 1200+ | Handbook-first at scale. 2,000+ pages of how they actually work. |
| **Basecamp** | 50 | The OG. Shape Up, Daily Q&A, "meetings are toxic." |
| **Doist** | 50+ | 95% async. Built Twist because Slack wasn't async enough. |
| **Automattic** | 2000+ | 2,000 people, 97 countries, P2 platform, 5-level maturity model. |
| **Zapier** | 800 | Friday Updates, clear tool purpose, manager playbooks. |
| **Help Scout** | 80-100 | Buddy system, FIKA, "invest in People Ops earlier than you think." |
| Buffer | 85 | Radical transparency — published salaries, equity, revenue. |
| Hotjar | 200+ | Core hours model, burnout prevention. |
| PostHog | 40+ | Open source handbook, no-meeting days. |
| Gumroad | — | No meetings. No deadlines. Just shipping. |
| + 4 more | | Elastic, Trello, Toptal, Toggl, Thoughtworks |

---

## The Eight Principles

These aren't opinions. They're what every successful async-first company independently converges on:

1. **Async-First** — Real-time is the exception, not the rule
2. **Written-First** — If it's not written down, it doesn't exist
3. **Transparent** — Public by default within the org
4. **Results-Focused** — Output over activity, always
5. **Tool Clarity** — Each tool has ONE purpose
6. **Timezone-Friendly** — Designed for global, not despite it
7. **Handbook-First** — Document before you implement
8. **Meeting-Minimal** — Clear criteria for when sync is actually needed

---

## Quick Start

1. Read [START-HERE.md](./START-HERE.md) — 20 minutes
2. Pick ONE practice (recommend: weekly async updates)
3. Try it for two weeks
4. Iterate

**Expected first win:** 30-40% fewer status meetings while maintaining full visibility.

---

## Running Tests

```bash
npm test
```

Four test suites validate the knowledge base stays clean:
- **Link validation** — all internal links resolve
- **Banned words** — no leftover company-specific references
- **Structure** — required files and directories exist
- **Markdown lint** — consistent formatting

---

## Contributing

Found a practice that works? Add it:
- New patterns → `knowledge-base/patterns/`
- Better templates → `frameworks/templates/`
- Company insights → `knowledge-base/handbook-summaries/`

---

## Sources

- [GitLab Handbook](https://handbook.gitlab.com) — The gold standard
- [Basecamp Handbook](https://github.com/basecamp/handbook) — On GitHub, naturally
- [Shape Up](https://basecamp.com/shapeup) — Free book on building product
- [Zapier Remote Work Guide](https://zapier.com/resources/guides/remote-work)
- [Doist: How We Work](https://doist.com/how-we-work)
- [PostHog Handbook](https://posthog.com/handbook) — Open source

Full source list: [knowledge-base/sources/links.md](./knowledge-base/sources/links.md)

---

*The best communication culture isn't loud. It's anechoic.*
