# Ulox UI System — Admin Console

## Admin Information Architecture
- Sidebar:
  - Listing Moderation
  - Dispute Resolution
  - Transaction Monitoring
  - User Management
  - CMS Editor
  - Analytics

## Frames
1. **Listing Moderation Dashboard**
   - Queue metrics, SLA cards, source breakdown.
2. **Listing Review Interface**
   - Split-pane review with approve/reject/request-info actions.
3. **Dispute Resolution Dashboard**
   - Case pipeline, priority labels, mediator assignment.
4. **Transaction Monitoring Dashboard**
   - Suspicious activity alerts, payment lifecycle chart.
5. **User Management Panel**
   - KYC state filters, account actions, trust score.
6. **CMS Editor**
   - Dynamic banners, help content, reel CTA mappings.
7. **Analytics Dashboard**
   - GMV, conversion funnels, time-to-close, dispute rates.

## Table Standards
- Sticky header, server-side pagination, multi-sort, row selection.
- Row-level quick actions and bulk actions.
- Export CSV + audit log access.

## Moderation Decision Model
- Severity tiers: low, medium, high, critical.
- Rules engine recommendations + human override.
- Mandatory rationale note for reject/ban/escalate.

## Admin Trust & Compliance Widgets
- Escrow anomalies monitor.
- Title verification failure tracker.
- Registry lodgement delay tracker.
- Settlement exception queue.
