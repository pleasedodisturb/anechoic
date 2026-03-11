# Ticket-First Communication Pattern

**Category:** Async Communication  
**Effort:** Low  
**Impact:** High  
**Adoption Time:** 2-4 weeks

---

## Summary

> **Create a ticket before any conversation about work.**

Instead of discussing → documenting (maybe), flip it: document → discuss.

---

## The Pattern

### Before (Talk First)
```
Person A asks question verbally/in DM
→ Person B answers
→ Maybe someone creates a ticket later
→ Context lost, repeated explanations, invisible work
```

### After (Ticket First)
```
Person A creates ticket
→ Shares link
→ Discussion happens (if needed)
→ All context preserved, searchable, trackable
```

---

## Why It Works

### 1. Forces Clarity
Writing forces the requester to think through:
- What exactly is the problem?
- What do I expect?
- How urgent is this really?

Many "quick questions" answer themselves during ticket creation.

### 2. Creates Searchable Knowledge
Every ticket becomes:
- Documentation for the next person with the same question
- Onboarding material for new team members
- Historical record for audits and retrospectives

### 3. Respects Focus Time
Instead of:
- Interrupt → context switch → answer → context switch back (expensive)

You get:
- Async ticket → batch review → respond when ready (cheap)

### 4. Enables Timezone Collaboration
When work spans timezones:
- Verbal requests die overnight
- Tickets travel across time zones

### 5. Reduces Repetition
> "How does X work?"

With ticket-first: Answer once in the ticket, link forever.

Without: Answer the same question to different people, repeatedly.

---

## Implementation Guide

### Phase 1: Announce the Change

**Communication template:**

```markdown
# New Team Practice: Ticket First

Starting [date], we're adopting ticket-first for work requests.

## The Rule
Before you Slack/call/tap someone — create a ticket.

## Why
We keep losing context and repeating ourselves. Written requests:
- Don't get lost
- Don't need re-explaining
- Create knowledge for the future

## What's Required
Just the basics:
1. Clear title
2. What's happening / what you need
3. How urgent

Not perfect tickets. Just a ticket.

## What This Means
- ✅ Create ticket → share link → discuss if needed
- ❌ "Hey quick question" → maybe ticket later

Questions? Ask in [channel].
```

### Phase 2: The Minimum Viable Ticket

Don't require perfection. Start with:

```markdown
Title: [What] - [Where]

Description:
1. What's happening / what's needed?
2. What do you expect / want?
3. Urgency: Blocking / Need soon / Nice to have
```

That's it. 60 seconds. Zero friction.

### Phase 3: Gentle Enforcement

When someone bypasses:

**Supportive:** "Let's create a ticket together — I'll type while you talk."

**Redirect:** "Can you throw this in a ticket so we don't lose track?"

**Firm:** "I've been losing requests without tickets. Please file [PROJ-xxx] and I'll prioritize."

### Phase 4: Evolve Quality Over Time

After habit is established (2-3 weeks), add:
- Steps to reproduce
- Screenshots
- Related tickets
- Acceptance criteria

But **never** make these required up front. Get the habit first.

---

## The Floor-Cleaning Principle

> 🧹 **To clean a floor, first stop throwing trash on it.**

Many teams try to "clean up the backlog" while still accepting verbal requests that create new mess.

**Wrong approach:** Spend weekend cleaning backlog → Monday people DM you new requests → back to chaos.

**Right approach:** Stop the inflow first (ticket-first) → then backlog naturally shrinks.

---

## FAQ / Objections

### "But it's faster to just ask"

For YOU, yes. For the TEAM, no.

Every verbal request:
- Interrupts the responder's focus
- Creates no record
- Requires re-explanation later
- Excludes absent team members

The "fast" DM is actually expensive.

### "What about urgent issues?"

Urgent ≠ untracked.

1. Create ticket (90 seconds)
2. Share link in urgent channel
3. Tag people

Now you have urgency AND tracking.

### "Not everything needs a ticket"

Correct. Rule of thumb:
- < 2 min to answer AND no tracking needed → chat is fine
- Everything else → ticket

"What's the Confluence URL?" = chat
"How does feature X work?" = ticket

### "People will resist"

Yes. That's normal. Strategies:
- Leaders model the behavior first
- Help people create tickets (pair with them)
- Celebrate good tickets publicly
- Be patient — habits take 2-4 weeks

### "Our tickets are already a mess"

That's exactly why you need ticket-first.

Existing mess = past. Don't spend effort there yet.
New tickets = future. Control that first.

Once inflow is clean, cleanup becomes tractable.

---

## Companies Using This Pattern

| Company | Implementation |
|---------|---------------|
| **GitLab** | Everything starts with an issue |
| **Basecamp** | "No chat without a to-do" (Hill Charts) |
| **Linear** | Issues as primary communication layer |
| **Automattic** | P2 posts before meetings |

### GitLab's Version
> "Forming an issue and writing it down is a forcing function. It forces people to think through their request... The issue is the start of work, not the end."
> — GitLab Handbook

### Basecamp's Version
> "Real-time chat is great for quick, informal conversation. But when it comes to work, we default to Basecamp — where things are tracked, searchable, and organized."

---

## Metrics to Track

| Metric | Target | Signal |
|--------|--------|--------|
| % requests starting as tickets | > 90% | Policy adoption |
| Repeat questions | Decreasing | Knowledge capture working |
| "What's the status?" asks | Decreasing | Visibility working |
| Average ticket quality score | Improving | Maturity increasing |

---

## Related Patterns

- **Handbook-First**: Document decisions in persistent docs
- **Async Updates**: Status via written updates, not meetings
- **Decision Documents**: Major decisions get their own artifact
- **Meeting Optional**: Tickets replace many "quick syncs"

---

## Template: Quick Reference Card

```
┌─────────────────────────────────────────┐
│          📋 TICKET FIRST                │
├─────────────────────────────────────────┤
│                                         │
│  Before Slack/call/DM about work:       │
│                                         │
│  1. Create ticket                       │
│  2. Include: What + Expected + Urgency  │
│  3. Share link, then discuss            │
│                                         │
├─────────────────────────────────────────┤
│  Minimum ticket (60 sec):               │
│  • Title: [What] - [Where]              │
│  • What happened?                       │
│  • What do you expect?                  │
│  • How urgent?                          │
├─────────────────────────────────────────┤
│  Quick question (< 2 min) = Slack OK    │
│  Everything else = Ticket first         │
└─────────────────────────────────────────┘
```

---

*This pattern is part of the [anechoic](../../START-HERE.md) knowledge base.*
