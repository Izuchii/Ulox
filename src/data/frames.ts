export type Frame = {
  title: string;
  description: string;
  components: string[];
  trust?: string;
};

export const navigation = {
  topTabs: ['Land & Property Listings', 'Reels', 'DwellHub', 'LabourHub'],
  listingSubTabs: ['Rent', 'Buy', 'HomeBuy Assist'],
  rentSubTabs: ['Properties', 'Roommates'],
};

export const foundations: Frame[] = [
  {
    title: 'Color + Typography Tokens',
    description: 'Neutral modern palette with trust color accents and scalable text system.',
    components: ['Color roles', 'Type scale', 'Spacing', 'Corner radius'],
  },
  {
    title: 'Responsive Grid',
    description: 'Mobile-first with 1-column cards on mobile and desktop 4-column listing grid.',
    components: ['Breakpoints', 'Container widths', 'Adaptive gutters'],
  },
];

export const components: Frame[] = [
  { title: 'Buttons', description: 'Primary, secondary, ghost, destructive.', components: ['Loading', 'Icon button'] },
  { title: 'Inputs', description: 'Text, phone, OTP, dropdown, search.', components: ['Validation', 'Helper text'] },
  { title: 'Cards', description: 'Listing card, product card, service card, reel card.', components: ['Media', 'Badge', 'Price'] },
  { title: 'Navigation', description: 'Top tabs, segmented controls, sticky bottom actions.', components: ['Breadcrumbs', 'Step tracker'] },
  { title: 'Filters', description: 'Filter chips and drawer patterns.', components: ['Sort', 'Map toggle'] },
  { title: 'Badges', description: 'Verification and trust indicators.', components: ['KYC', 'Title verified', 'Insured'] },
  { title: 'Modals', description: 'Bottom sheet and centered modal.', components: ['Confirmation', 'Error state'] },
  { title: 'Tables', description: 'Admin table with row actions.', components: ['Pagination', 'Status tags'] },
  { title: 'Notifications', description: 'Toast, in-app alerts, milestone banners.', components: ['Success', 'Pending', 'Failed'] },
];

export const patterns: Frame[] = [
  { title: 'Search + Filter Interface', description: 'Unified search for listings, roommates, goods, services, and jobs.', components: ['Keyword', 'Location', 'Budget', 'Saved filter presets'] },
  { title: 'Checkout Pattern', description: 'Step-by-step checkout with escrow, identity, and OTP verification.', components: ['Address', 'Payment', 'Review', 'Confirmation'] },
  { title: 'Booking Pattern', description: 'Property tours and services booking with negotiated offers.', components: ['Calendar', 'Time slots', 'Counter-offer'] },
  { title: 'Moderation Pattern', description: 'Admin review workflow with risk scoring and action audit trail.', components: ['Queue', 'Reviewer notes', 'Escalation'] },
];

export const appScreens: Frame[] = [
  { title: 'Home Screen', description: 'Personalized multi-feed discovery hub.', components: ['Top tabs', 'Smart modules', 'CTA rails'] },
  { title: 'Property Listing Grid', description: 'Card-based property marketplace browsing.', components: ['Map/list toggle', '4-column desktop'] },
  { title: 'Property Detail Page', description: 'Gallery, amenities, legal docs, and trust checks.', components: ['Title verification', 'Schedule tour', 'Save/share'], trust: 'Verified owner + title registry' },
  { title: 'Schedule Property Tour', description: 'Time selection, attendee details, and confirmation.', components: ['Calendar', 'Agent chat', 'Reminder setup'] },
  { title: 'Rental Checkout', description: 'Deposit, KYC, lease review, payment.', components: ['Escrow terms', 'Digital signature'] },
  { title: 'Property Purchase Flow', description: 'Purchase milestones for full payment pathway.', components: ['Offer', 'Conveyancing tracker', 'Settlement'] },
  { title: 'Deposit-first Purchase Flow', description: 'Structured staged-payment property acquisition.', components: ['Deposit confirmation', 'Milestone releases'] },
  { title: 'Conveyancing Progress Tracker', description: 'Timeline of legal process with statuses.', components: ['Milestones', 'Assigned professionals'] },
  { title: 'Registry Lodgement Status', description: 'Government registry filing status panel.', components: ['Reference ID', 'Expected SLA'] },
  { title: 'Settlement Confirmation', description: 'Final transfer and document vault.', components: ['Receipt', 'Ownership certificate'] },
  { title: 'Roommate Listing Feed', description: 'Roommate discovery with compatibility snippets.', components: ['Lifestyle tags', 'Budget match'] },
  { title: 'Roommate Detail + Profile', description: 'Detailed profile with trust info and match score.', components: ['Verification badge', 'Contact reveal gate'] },
  { title: 'Reels Feed + Viewer', description: 'Vertical immersive short-form real estate content.', components: ['Like/comment/share', 'Contextual CTA'] },
  { title: 'DwellHub Goods', description: 'Products marketplace from feed to delivery OTP.', components: ['Cart', 'Checkout', 'Delivery verification'] },
  { title: 'DwellHub Services', description: 'Book services, negotiate offers, and confirm completion.', components: ['Provider profile', 'Offer negotiation', 'Completion confirmation'] },
  { title: 'LabourHub Jobs', description: 'Job discovery, funding, attendance, disputes, and settlement.', components: ['Job detail', 'Arbitration questionnaire', 'Settlement result'] },
  { title: 'Authentication', description: 'Login, signup, phone verification, KYC states.', components: ['KYC pending', 'KYC approved'] },
  { title: 'User Profile', description: 'Profile overview, saved content, and settings.', components: ['Saved listings/reels/products'] },
];

export const adminFrames: Frame[] = [
  { title: 'Listing Moderation Dashboard', description: 'High-volume moderation board with queue health metrics.', components: ['Priority queue', 'Bulk actions'] },
  { title: 'Listing Review Interface', description: 'Deep-dive review screen for individual listings.', components: ['Media scanner', 'Risk score', 'Action history'] },
  { title: 'Dispute Resolution Dashboard', description: 'Case management for rentals, labour, and services.', components: ['Evidence panel', 'Decision tools'] },
  { title: 'Transaction Monitoring Dashboard', description: 'Compliance and anomalous payment tracking.', components: ['AML flags', 'Escrow status'] },
  { title: 'User Management Panel', description: 'User lifecycle, permissions, and KYC controls.', components: ['Role editor', 'Suspension controls'] },
  { title: 'CMS Editor', description: 'Curate banners, content blocks, and reel campaigns.', components: ['Scheduling', 'Localization'] },
  { title: 'Analytics Dashboard', description: 'Cross-platform KPI suite.', components: ['Funnels', 'Conversion trends', 'Retention'] },
];
