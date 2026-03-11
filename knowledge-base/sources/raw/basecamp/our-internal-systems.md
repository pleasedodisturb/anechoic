# Our Internal Systems at Basecamp/37signals

*Source: Basecamp Handbook - https://github.com/basecamp/handbook*

Besides the customer-facing applications, like the different versions of Basecamp, we have a number of internal systems that help us support, report, and operate the company.

---

## Dash

Dash is the main hub for everything that has to do with:
- **Logging** (like finding why a request is slow or whether an email has been delivered)
- **Reporting** (everything from number of support cases handled to split of devices used to access Basecamp)
- **Application health** (response times, job queue exceptions etc.)

---

## Queenbee

Queenbee is our invoice, accounting, and identity system.

Here you can:
- Look up any customer account
- See whether they are comped
- Refund an invoice
- Login as a customer

### Important Note on Customer Privacy

> **That's an immense amount of power and we take its use very seriously.**
>
> **We only ever login as a customer after having been given explicit permission to do so, never preemptively.**
>
> Our customers expect that their information is confidential, even from us, and we intend to honor that expectation at all times.

---

## Sentry

We track programming exceptions on Sentry.

When a customer hits a "Oops, something went wrong!" screen, that means there'll be an entry in Sentry explaining to programmers why they saw that screen.

**Keeping the exceptions under control and monitored is primarily the responsibility of SIP and Jim via on-call.**

---

## Grafana

We monitor our systems and their health through Grafana.

Here you'll find:
- Dashboards
- Alerting rules

**It is our go-to for diagnosing performance issues, outages, and any other form of operational insight.**

---

## Omarchy

Omarchy is our new Linux distribution that everyone on Ops, SIP, and Ruby programmers on Product are moving to.

**We developed it in-house and continue to lead the development.**

---

## Kandji

Kandji is how we make sure all work Mac laptops are securely configured and running the latest software updates.

**It helps us reduce our exposure to security incidents.**

---

## Shipshape

Shipshape is the OG in-house tool for ensuring your work Mac laptop is safe and secure. We still run it, but it's gradually being superseded by Kandji.

When you're given access to the company's GitHub account, you can run Shipshape to be sure you're up to code.

**Shipshape will also test your machine periodically** to let you know (and our SIP team know) if your machine springs a leak and needs bailing out.

---

*Return to the main handbook for more guides.*
