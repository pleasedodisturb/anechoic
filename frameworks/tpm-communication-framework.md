# TPM Communication Framework

A ready-to-implement guide synthesizing best practices from 17+ remote-first companies, tailored for Technical Program Managers.

---

## Executive Summary

**Goal:** Transform program communication from meeting-heavy to async-first while maintaining visibility and alignment.

**Expected Impact (4 weeks):**
- 30-40% reduction in status meetings
- Decision cycle time cut in half
- Clear status visibility without meetings
- +2-3 hours/week focus time per person
- Better decision documentation and traceability

---

## Part 1: Foundation Principles

### The TPM Communication Philosophy

> **"Every Slack message, Jira comment, and email that seems insignificant in a day's scope shapes culture."**

As a TPM, you set the communication tone for your programs. These principles guide every interaction:

### Principle 1: Async-First (Not Async-Only)
- **Default:** Can this be async?
- **Exception:** Sensitive, urgent, or complex
- **Always:** Document sync outcomes async

### Principle 2: Written as Primary
- Long-form over chat fragments
- Complete thoughts with context
- Assume reader has no background
- Searchable and permanent

### Principle 3: Transparent by Default
- Share early, share widely
- Err on side of over-communication
- Status visible without asking
- Decisions documented for history

### Principle 4: Tool Purpose Clarity
- Each tool has ONE primary purpose
- Don't fragment across tools
- Know where to find what
- Reduce notification noise

### Principle 5: Timezone as Feature
- Design for global participation
- Rotate meeting times fairly
- Async enables 24h progress
- Document for async readers

---

## Part 2: Core Communication Structures

### Structure 1: Weekly Async Update (Replaces Status Meetings)

**Purpose:** Maintain stakeholder visibility without meetings

**Template:**
```markdown
# [Program Name] - Week of [Date]

## 🎯 Executive Summary
[2-3 sentences: What matters most this week]

## ✅ Completed This Week
- [Achievement 1] - Impact: [why it matters]
- [Achievement 2] - Impact: [why it matters]

## 🔄 In Progress
| Work Item | Owner | Status | ETA |
|-----------|-------|--------|-----|
| [Item 1] | @name | On track | [date] |
| [Item 2] | @name | At risk | [date] |

## 🚧 Risks & Blockers
| Risk/Blocker | Impact | Mitigation | Help Needed |
|--------------|--------|------------|-------------|
| [Issue 1] | [High/Med/Low] | [Action] | [From whom] |

## 📅 Next Week's Focus
- [Priority 1]
- [Priority 2]

## ❓ Decisions Needed
- [Decision 1] - Need input from: @stakeholder - Deadline: [date]

---
*Posted: [day] | Respond in thread by [deadline]*
```

**Cadence:** Every Friday by 3pm local time
**Channel:** Program Confluence page or Slack channel
**Response:** Stakeholders comment in thread with questions/feedback

### Structure 2: Decision Document (RFC Pattern)

**Purpose:** Clear, documented decisions that don't require meetings

**Template:**
```markdown
# Decision: [Title]

## Status: [Draft | Review | Decided | Superseded]

## Context
[What situation led to this decision? Background for someone new.]

## Problem Statement
[What specific problem are we solving?]

## Options Considered

### Option A: [Name]
- **Pros:** [List]
- **Cons:** [List]
- **Effort:** [T-shirt size]

### Option B: [Name]
- **Pros:** [List]
- **Cons:** [List]
- **Effort:** [T-shirt size]

### Option C: [Name] (Recommended)
- **Pros:** [List]
- **Cons:** [List]
- **Effort:** [T-shirt size]

## Recommendation
[Option C] because [reasoning].

## Decision
**Decided:** [Date]
**Decision Maker:** @name
**Decision:** [Option chosen and why]

## Implementation
[Link to implementation plan/tickets]

## Stakeholders Consulted
- @name1 - [role]
- @name2 - [role]

---
*Feedback deadline: [date] | Async feedback preferred*
```

**Process:**
1. TPM drafts decision doc
2. Share with stakeholders async (24-48h for feedback)
3. Consolidate feedback
4. Decision maker decides
5. Document and communicate decision

### Structure 3: Program Status Hub (Replaces Status Meetings)

**Purpose:** Single source of truth for program health

**Location:** Confluence page (pinned in Slack)

**Sections:**
- **Program Overview** - Scope, timeline, key stakeholders
- **Current Status** - RAG status, key metrics
- **Weekly Updates** - Linked archive of weekly updates
- **Decisions Log** - All decisions with links
- **Risks & Issues** - Active tracker
- **Meeting Notes** - If sync happened, notes here
- **Key Links** - Jira board, Slack channel, etc.

**Maintenance:** Update weekly, review monthly

### Structure 4: When to Meet (Decision Tree)

```
Is this urgent (< 24h action needed)?
├── Yes → Sync (call/meeting)
└── No → Continue...

Is this sensitive (personnel, conflict, bad news)?
├── Yes → 1:1 call
└── No → Continue...

Has async discussion stalled after 2+ rounds?
├── Yes → Short sync to unblock, then back to async
└── No → Continue...

Is this complex AND needs multiple perspectives simultaneously?
├── Yes → Working session (time-boxed)
└── No → Async

Default: Async first
```

---

## Part 3: Stakeholder Communication

### Stakeholder Communication Matrix

| Stakeholder Type | Primary Channel | Cadence | Format |
|------------------|-----------------|---------|--------|
| Leadership | Email + Confluence | Weekly | Executive summary |
| Product | Slack + Confluence | As needed | Decision docs |
| Engineering | Slack + Jira | Daily async | Status updates |
| Cross-functional | Slack | Weekly | Program update |
| External | Email | Bi-weekly | Formal update |

### Communication by Urgency

| Urgency | Channel | Response Expected |
|---------|---------|-------------------|
| P0 (outage) | Slack + call | Immediate |
| P1 (urgent) | Slack DM | < 4 hours |
| P2 (important) | Slack channel | < 24 hours |
| P3 (normal) | Email/Confluence | < 48 hours |
| P4 (FYI) | Email/Confluence | No response needed |

### Cross-Timezone Strategies

- **Overlap windows:** Find 2-3h of common time for essential sync
- **Rotate meeting times:** Share the burden fairly
- **Async bridges:** End-of-day handoff summaries
- **Record everything:** Enable async participation
- **Schedule sends:** Land in recipient's morning

---

## Part 4: Ready-to-Use Templates

### Template 1: Executive Summary (Weekly)

```markdown
## [Program Name] - Executive Summary - Week [#]

**Overall Status:** 🟢 Green / 🟡 Yellow / 🔴 Red

**One-line:** [What leadership needs to know in one sentence]

**Key Updates:**
- [Update 1]
- [Update 2]

**Risks:**
- [Risk 1] - Mitigation: [Action]

**Decisions Needed:**
- [Decision] - From: [Name] - By: [Date]

**Budget/Timeline:** On track / [Variance description]
```

### Template 2: Risk Escalation

```markdown
## Risk Escalation: [Title]

**Severity:** High / Critical
**Program:** [Name]
**Date Identified:** [Date]

### Description
[What is the risk and its potential impact]

### Impact if Realized
- Timeline: [X weeks delay]
- Budget: [$X impact]
- Scope: [What would be cut]

### Mitigation Options
1. [Option 1] - Effort: [X] - Reduces impact by [Y]
2. [Option 2] - Effort: [X] - Reduces impact by [Y]

### Recommendation
[Recommended action]

### Decision Needed
From: @stakeholder
By: [Date]

### Escalation Path
If no decision by [date], escalating to [next level]
```

### Template 3: Meeting Request (When Sync is Justified)

```markdown
## Meeting Request: [Topic]

**Why sync is needed:** [Brief justification - reference decision tree]

**Goal:** [Specific outcome expected]

**Duration:** [Time] (minimum needed)

**Attendees (essential only):**
- @name1 - [role/contribution]
- @name2 - [role/contribution]

**Pre-work required:**
- Read: [Link to context]
- Prepare: [What to bring/think about]

**Agenda:**
1. [Topic 1] - [Time]
2. [Topic 2] - [Time]
3. Decision/Next steps - [Time]

**Alternative if you can't attend:**
- Async input: [How to contribute]
- Recording: Will be shared

**Post-meeting:** Notes and decisions posted to [location] within 24h
```

---

## Part 5: Implementation Roadmap

### Phase 1: Foundation (Weeks 1-2)

**Week 1:**
- [ ] Set up Program Status Hub (Confluence)
- [ ] Create first weekly async update
- [ ] Communicate change to stakeholders
- [ ] Cancel one recurring status meeting (trial)

**Week 2:**
- [ ] Post second weekly update
- [ ] Create first decision document
- [ ] Gather feedback on new format
- [ ] Iterate based on feedback

### Phase 2: Expansion (Weeks 3-4)

**Week 3:**
- [ ] Extend async updates to all programs
- [ ] Document tool purposes for team
- [ ] Introduce decision doc template to leads
- [ ] Track meeting reduction metrics

**Week 4:**
- [ ] Review metrics and feedback
- [ ] Adjust templates as needed
- [ ] Share wins with leadership
- [ ] Plan next iteration

### Phase 3: Scaling (Weeks 5-8)

- [ ] Train other TPMs on framework
- [ ] Create playbook for common scenarios
- [ ] Build async feedback loops
- [ ] Measure and report impact

---

## Part 6: Common Pitfalls & Solutions

### ❌ Pitfall 1: Going Async-Only Overnight
**Solution:** Start with ONE practice, prove value, expand gradually

### ❌ Pitfall 2: Async Updates Nobody Reads
**Solution:** Keep updates scannable, highlight what matters, ask for feedback in thread

### ❌ Pitfall 3: Decisions Stalling in Async
**Solution:** Set clear deadlines, escalate to sync if stuck after 2 rounds

### ❌ Pitfall 4: Stakeholders Miss Updates
**Solution:** Tag explicitly, use consistent format, send digest summary

### ❌ Pitfall 5: Creating More Documentation Overhead
**Solution:** Templates reduce effort, not add it. One good update > many fragments

### ❌ Pitfall 6: Losing Human Connection
**Solution:** Intentional social time (coffee chats), occasional sync, retreats

---

## Part 7: Measurement Framework

### Leading Indicators (Weekly)
- [ ] Weekly updates posted on time
- [ ] Decision docs created for major decisions
- [ ] Response rate on async updates
- [ ] Meeting hours vs. baseline

### Lagging Indicators (Monthly)
- [ ] Total meeting hours reduced by X%
- [ ] Decision cycle time improved
- [ ] Stakeholder satisfaction (survey)
- [ ] Team focus time increased

### Success Metrics (Quarter)
| Metric | Baseline | Target | Actual |
|--------|----------|--------|--------|
| Status meetings/week | X | X-30% | |
| Decision cycle time | X days | X/2 days | |
| Async response rate | X% | 80%+ | |
| Stakeholder satisfaction | X/5 | 4+/5 | |

---

## Quick Reference Card

**Daily:**
- Check program channels
- Respond to async requests
- Update blockers immediately

**Weekly:**
- Post async program update (Friday)
- Review metrics and risks
- 1:1s with key stakeholders

**Monthly:**
- Update Program Status Hub
- Review decision log
- Stakeholder satisfaction check

**Quarterly:**
- Measure and report impact
- Iterate on framework
- Share learnings

---

*This framework synthesizes practices from GitLab, Basecamp, Zapier, Doist, Automattic, and Help Scout. Adapt to your context and iterate based on feedback.*
