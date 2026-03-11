# Template: Decision Document (RFC)

Copy and customize for major decisions.

---

```markdown
# Decision: [Clear Title]

**Status:** 🔵 Draft | 🟡 Review | 🟢 Decided | ⚫ Superseded  
**Author:** @name  
**Created:** [Date]  
**Decision Deadline:** [Date]  
**Decision Maker:** @name

---

## Context

[What situation led to this decision? Provide background so someone new to the program can understand why this matters. Include relevant history and constraints.]

## Problem Statement

[What specific problem are we solving? Be precise. What happens if we do nothing?]

## Goals & Non-Goals

**Goals:**
- [What we're trying to achieve]
- [Success criteria]

**Non-Goals:**
- [What's explicitly out of scope]
- [What we're not optimizing for]

---

## Options Considered

### Option A: [Name]

**Description:** [Brief description of this approach]

| Pros | Cons |
|------|------|
| [Pro 1] | [Con 1] |
| [Pro 2] | [Con 2] |

- **Effort:** S / M / L / XL
- **Timeline:** [Estimate]
- **Risk Level:** Low / Medium / High

### Option B: [Name]

**Description:** [Brief description of this approach]

| Pros | Cons |
|------|------|
| [Pro 1] | [Con 1] |
| [Pro 2] | [Con 2] |

- **Effort:** S / M / L / XL
- **Timeline:** [Estimate]
- **Risk Level:** Low / Medium / High

### Option C: [Name] ⭐ Recommended

**Description:** [Brief description of this approach]

| Pros | Cons |
|------|------|
| [Pro 1] | [Con 1] |
| [Pro 2] | [Con 2] |

- **Effort:** S / M / L / XL
- **Timeline:** [Estimate]
- **Risk Level:** Low / Medium / High

---

## Recommendation

**Recommended Option:** [Option C]

**Reasoning:**
[Why this option best addresses the problem given our constraints. Address the key trade-offs and why they're acceptable.]

---

## Decision

> **Decision Maker:** @name  
> **Date Decided:** [Date]  
> **Decision:** [Option chosen]

**Rationale:**
[Why this option was chosen. Include any modifications to the original recommendation.]

---

## Implementation

**Next Steps:**
1. [Step 1] - Owner: @name - Due: [Date]
2. [Step 2] - Owner: @name - Due: [Date]
3. [Step 3] - Owner: @name - Due: [Date]

**Tracking:** [Link to Jira epic/tickets]

---

## Stakeholders

### Consulted (Input Gathered)
- @name1 - [Role] - [Key input/concern]
- @name2 - [Role] - [Key input/concern]

### Informed (Need to Know)
- @name3 - [Role]
- @name4 - [Role]

---

## Appendix

### Related Documents
- [Link 1]
- [Link 2]

### Changelog
| Date | Change | Author |
|------|--------|--------|
| [Date] | Created draft | @name |
| [Date] | Updated based on feedback | @name |
| [Date] | Decision made | @name |

---

*Feedback welcome in thread by [deadline]. For async discussion, prefer comments over DMs so others can benefit.*
```

---

## RFC Process

1. **Draft** (1-2 days): TPM creates decision doc
2. **Review** (2-3 days): Share with stakeholders for async feedback
3. **Consolidate** (1 day): Update doc with feedback
4. **Decide** (1 day): Decision maker makes call
5. **Communicate** (same day): Share decision widely
6. **Implement** (ongoing): Track and report progress
