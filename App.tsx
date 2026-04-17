import React, { useMemo, useState } from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';

type TopTab = 'Land & Property Listings' | 'Reels' | 'DwellHub' | 'LabourHub' | 'Admin';
type LandSubTab = 'Rent' | 'Buy' | 'HomeBuy Assist';
type RentSubTab = 'Properties' | 'Roommates';
type DesignPage = 'Foundations' | 'Components' | 'Patterns' | 'App Screens' | 'Admin';

type Frame = {
  title: string;
  desc: string;
  tags?: string[];
};

const topTabs: TopTab[] = ['Land & Property Listings', 'Reels', 'DwellHub', 'LabourHub', 'Admin'];
const landSubTabs: LandSubTab[] = ['Rent', 'Buy', 'HomeBuy Assist'];
const rentSubTabs: RentSubTab[] = ['Properties', 'Roommates'];
const pages: DesignPage[] = ['Foundations', 'Components', 'Patterns', 'App Screens', 'Admin'];

const tokenRows = [
  { key: 'Color / Primary', value: '#1459E6' },
  { key: 'Color / Accent', value: '#12B76A' },
  { key: 'Color / Surface', value: '#FFFFFF' },
  { key: 'Color / Surface Muted', value: '#F5F7FB' },
  { key: 'Color / Text', value: '#101828' },
  { key: 'Radius / Card', value: '18' },
  { key: 'Spacing scale', value: '4, 8, 12, 16, 20, 24, 32' },
  { key: 'Typography', value: 'Inter-like / 12-28 / medium-semibold' },
  { key: 'Trust indicators', value: 'Verified, KYC, Registry Passed' },
];

const componentFrames: Frame[] = [
  { title: 'Buttons', desc: 'Primary, secondary, destructive, ghost, icon buttons in all sizes.' },
  { title: 'Inputs', desc: 'Text, number, date, OTP, password, segmented controls and search bars.' },
  { title: 'Cards', desc: 'Listing card, roommate card, product card, service card, admin insight card.' },
  { title: 'Navigation', desc: 'Top tabs, sub-tabs, bottom nav, breadcrumbs, sticky action bars.' },
  { title: 'Filters', desc: 'Quick filters, chip groups, advanced modal filter drawer.' },
  { title: 'Badges', desc: 'Trust, KYC, transaction stage, moderation status badges.' },
  { title: 'Modals', desc: 'Schedule tour, offer negotiation, dispute submission, OTP verification.' },
  { title: 'Tables', desc: 'Admin moderation table, transaction monitor, user management table.' },
  { title: 'Notifications', desc: 'Toasts, push cards, in-app alerts, timeline updates.' },
];

const patternFrames: Frame[] = [
  { title: 'Discovery Feed Pattern', desc: 'Personalized, sectioned cards with trust signals and CTAs.' },
  { title: 'Detail Page Pattern', desc: 'Hero media, key facts, timeline, sticky CTA footer.' },
  { title: 'Checkout Pattern', desc: 'Step progress, fees, escrow indicator, payment methods, success state.' },
  { title: 'Booking Pattern', desc: 'Calendar + slot + negotiation + confirmation flow.' },
  { title: 'Moderation Pattern', desc: 'Review queue, AI score, side-by-side evidence, decision controls.' },
  { title: 'Admin Dashboard Pattern', desc: 'KPI cards, charts, queue widgets, table drill-down.' },
];

const appFrames: Record<string, Frame[]> = {
  'Land & Property Listings': [
    { title: 'Home Screen', desc: 'Featured property grid, quick filters, trust badges, map/list switch.' },
    { title: 'Search + Filter', desc: 'Budget, location, tenure, verified title only, move-in date.' },
    { title: 'Property Listing Grid', desc: 'Card-based grid and responsive desktop 4-column mode.', tags: ['grid'] },
    { title: 'Property Detail Page', desc: 'Gallery, amenities, owner verification, similar listings.' },
    { title: 'Schedule Property Tour', desc: 'Calendar selection, preferred channel, tour confirmation.' },
    { title: 'Rental Checkout', desc: 'Rent breakdown, deposit, service fee, checkout CTA.' },
    { title: 'Property Purchase Flow', desc: 'Offer, escrow deposit, legal steps, milestone updates.' },
    { title: 'Title Verification Display', desc: 'Registry check status, issuer, timestamp and score.' },
    { title: 'Deposit-first Purchase', desc: 'Deposit commitment, countdown, completion requirements.' },
    { title: 'Conveyancing Progress Tracker', desc: 'Step-by-step legal transfer timeline with stakeholders.' },
    { title: 'Registry Lodgement Status', desc: 'Filed, accepted, correction required, completed status cards.' },
    { title: 'Settlement Confirmation', desc: 'Receipt, legal docs, next actions and move-in readiness.' },
    { title: 'Roommate Listing Feed', desc: 'Compatibility tags, verified profile, budget and lifestyle.' },
    { title: 'Roommate Detail Page', desc: 'Bio, preferences, tenancy split and compatibility score.' },
    { title: 'Roommate Profile', desc: 'Identity, verification badges, references and social proofs.' },
    { title: 'Contact Reveal Interface', desc: 'Pay/redeem credits, consent modal, masked to full reveal.' },
  ],
  Reels: [
    { title: 'Vertical Reels Feed', desc: 'Swipe-up videos with property and service story content.' },
    { title: 'Reel Viewer', desc: 'Immersive full-screen media with profile and listing context.' },
    { title: 'Reel Engagement Actions', desc: 'Like, comment, save, share, follow, report actions.' },
    { title: 'Contextual CTAs', desc: 'Book tour, chat agent, save listing, buy now overlays.' },
  ],
  DwellHub: [
    { title: 'Goods Discovery Feed', desc: 'Home furnishing and appliance product feed with ranking chips.' },
    { title: 'Product Card', desc: 'Image, price, stock, delivery ETA, trust badge.' },
    { title: 'Product Detail Page', desc: 'Gallery, specs, vendor rating, warranty, shipping options.' },
    { title: 'Cart', desc: 'Line items, promo, delivery options, fees summary.' },
    { title: 'Checkout', desc: 'Address, payment, escrow support, order review.' },
    { title: 'Delivery OTP Verification', desc: 'Recipient OTP capture and successful handoff state.' },
    { title: 'Service Discovery', desc: 'Cleaning, repairs, moving, legal, valuations with filters.' },
    { title: 'Service Provider Profile', desc: 'Portfolio, ratings, verification, cancellation policy.' },
    { title: 'Booking Interface', desc: 'Schedule + requirements + location + budget input.' },
    { title: 'Negotiated Offer Interface', desc: 'Counter offers with structured pricing and timeline.' },
    { title: 'Booking Confirmation', desc: 'Booking ID, provider details, reminders and chat entry.' },
    { title: 'Service Completion Confirmation', desc: 'Acceptance checklist, rating, release payment.' },
  ],
  LabourHub: [
    { title: 'Available Jobs Feed', desc: 'Role cards with pay rate, urgency, verified hirer flag.' },
    { title: 'Job Detail Page', desc: 'Scope, milestones, job site, legal and safety notices.' },
    { title: 'Job Funding Confirmation', desc: 'Escrow funded confirmation before work starts.' },
    { title: 'Worker Attendance Interface', desc: 'Clock in/out, location confirmation, attendance logs.' },
    { title: 'Dispute Reporting Interface', desc: 'Guided issue report with evidence uploads.' },
    { title: 'Questionnaire Arbitration', desc: 'Structured Q&A for fair dispute adjudication.' },
    { title: 'Settlement Result Screen', desc: 'Final ruling, payout split, downloadable decision.' },
  ],
  Admin: [
    { title: 'Listing Moderation Dashboard', desc: 'Queue metrics, flagged inventory, priority stacks.' },
    { title: 'Listing Review Interface', desc: 'Approve, reject, request edits with audit trail.' },
    { title: 'Dispute Resolution Dashboard', desc: 'Case load, SLA, assigned arbitrators and aging.' },
    { title: 'Transaction Monitoring Dashboard', desc: 'Anomaly alerts, escrow state, transfers and failures.' },
    { title: 'User Management Panel', desc: 'KYC state, account actions, permission management.' },
    { title: 'CMS Editor', desc: 'Campaign banners, content blocks, moderation-safe publishing.' },
    { title: 'Analytics Dashboard', desc: 'Conversion, retention, marketplace liquidity and trust KPIs.' },
  ],
};

const authFrames: Frame[] = [
  { title: 'Login', desc: 'Phone/email login, social auth, trust notice.' },
  { title: 'Signup', desc: 'Progressive registration with preferred marketplace profile.' },
  { title: 'Phone Verification', desc: 'OTP input and fallback resend flow.' },
  { title: 'KYC Verification', desc: 'ID capture, selfie, proof of address upload.' },
  { title: 'KYC Pending', desc: 'Timeline and expected review turnaround.' },
  { title: 'KYC Approved', desc: 'Verified badge grant and unlocked capabilities.' },
  { title: 'Profile Overview', desc: 'Identity card, trust score, account completeness.' },
  { title: 'Saved Listings', desc: 'Watchlist cards with status update chips.' },
  { title: 'Saved Reels', desc: 'Saved media board with contextual shortcuts.' },
  { title: 'Saved Products', desc: 'Wishlist and restock alerts.' },
  { title: 'Settings', desc: 'Notification, privacy, payment, security preferences.' },
];

function Chip({ label, active, onPress }: { label: string; active?: boolean; onPress?: () => void }) {
  return (
    <Pressable onPress={onPress} style={[styles.chip, active && styles.chipActive]}>
      <Text style={[styles.chipText, active && styles.chipTextActive]}>{label}</Text>
    </Pressable>
  );
}

function FrameCard({ frame }: { frame: Frame }) {
  return (
    <View style={styles.frameCard}>
      <View style={styles.rowBetween}>
        <Text style={styles.frameTitle}>{frame.title}</Text>
        <Text style={styles.badge}>Frame</Text>
      </View>
      <Text style={styles.frameDesc}>{frame.desc}</Text>
      <View style={styles.tagRow}>
        {(frame.tags ?? ['Card UI', 'Reusable', 'Mobile-first']).map((tag) => (
          <View key={`${frame.title}-${tag}`} style={styles.softBadge}>
            <Text style={styles.softBadgeText}>{tag}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

function ResponsivePropertyGrid() {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 1080;
  const columns = isDesktop ? 4 : width >= 768 ? 2 : 1;
  const items = Array.from({ length: 8 }).map((_, idx) => ({
    id: idx.toString(),
    title: `${idx % 2 === 0 ? 'Verified' : 'Premium'} 2BR Apartment`,
    price: `$${(980 + idx * 55).toLocaleString()}/mo`,
  }));

  return (
    <View style={styles.gridSection}>
      <View style={styles.rowBetween}>
        <Text style={styles.sectionTitle}>Responsive Listing Grid</Text>
        <Text style={styles.helperText}>{columns} columns</Text>
      </View>
      <FlatList
        data={items}
        numColumns={columns}
        scrollEnabled={false}
        key={columns}
        columnWrapperStyle={columns > 1 ? styles.columnWrap : undefined}
        renderItem={({ item }) => (
          <View style={[styles.propertyCard, { width: columns > 1 ? `${94 / columns}%` : '100%' }]}>
            <View style={styles.mediaStub} />
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardPrice}>{item.price}</Text>
            <View style={styles.trustRow}>
              <Text style={styles.badgeSuccess}>KYC</Text>
              <Text style={styles.badgeSuccess}>Title Verified</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

export default function App() {
  const [topTab, setTopTab] = useState<TopTab>('Land & Property Listings');
  const [landTab, setLandTab] = useState<LandSubTab>('Rent');
  const [rentTab, setRentTab] = useState<RentSubTab>('Properties');
  const [page, setPage] = useState<DesignPage>('App Screens');

  const currentFrames = useMemo(() => {
    if (page === 'Foundations') return [];
    if (page === 'Components') return componentFrames;
    if (page === 'Patterns') return patternFrames;
    if (page === 'Admin') return appFrames.Admin;
    return appFrames[topTab];
  }, [page, topTab]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <Text style={styles.brand}>Ulox Super-Platform UI System</Text>
        <Text style={styles.subtitle}>
          Mobile-first, responsive design system and complete app/admin frame library.
        </Text>

        <View style={styles.block}>
          <Text style={styles.sectionTitle}>Pages</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.inlineRow}>
              {pages.map((tab) => (
                <Chip key={tab} label={tab} active={page === tab} onPress={() => setPage(tab)} />
              ))}
            </View>
          </ScrollView>
        </View>

        {page === 'App Screens' && (
          <>
            <View style={styles.block}>
              <Text style={styles.sectionTitle}>Top Navigation Tabs</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.inlineRow}>
                  {topTabs.map((tab) => (
                    <Chip key={tab} label={tab} active={topTab === tab} onPress={() => setTopTab(tab)} />
                  ))}
                </View>
              </ScrollView>
            </View>

            {topTab === 'Land & Property Listings' && (
              <View style={styles.block}>
                <Text style={styles.sectionTitle}>Land & Property Sub-tabs</Text>
                <View style={styles.inlineRowWrap}>
                  {landSubTabs.map((tab) => (
                    <Chip key={tab} label={tab} active={landTab === tab} onPress={() => setLandTab(tab)} />
                  ))}
                </View>
                {landTab === 'Rent' && (
                  <View style={styles.inlineRowWrap}>
                    {rentSubTabs.map((tab) => (
                      <Chip key={tab} label={tab} active={rentTab === tab} onPress={() => setRentTab(tab)} />
                    ))}
                  </View>
                )}
              </View>
            )}
          </>
        )}

        {page === 'Foundations' && (
          <View style={styles.block}>
            <Text style={styles.sectionTitle}>Design Tokens</Text>
            {tokenRows.map((row) => (
              <View key={row.key} style={styles.tokenRow}>
                <Text style={styles.tokenKey}>{row.key}</Text>
                <Text style={styles.tokenValue}>{row.value}</Text>
              </View>
            ))}
          </View>
        )}

        {(page === 'Components' || page === 'Patterns' || page === 'App Screens' || page === 'Admin') && (
          <View style={styles.block}>
            <Text style={styles.sectionTitle}>Frames</Text>
            {currentFrames.map((frame) => (
              <FrameCard key={`${page}-${frame.title}`} frame={frame} />
            ))}
          </View>
        )}

        {(page === 'App Screens' || page === 'Admin') && <ResponsivePropertyGrid />}

        <View style={styles.block}>
          <Text style={styles.sectionTitle}>User System</Text>
          {authFrames.map((frame) => (
            <FrameCard key={frame.title} frame={frame} />
          ))}
        </View>

        <View style={styles.block}>
          <Text style={styles.sectionTitle}>Quick Prototype Controls</Text>
          <TextInput placeholder="Search any frame, module, or component" placeholderTextColor="#667085" style={styles.searchInput} />
          <View style={styles.actionRow}>
            <Pressable style={styles.buttonPrimary}>
              <Text style={styles.buttonPrimaryText}>Generate Spec Export</Text>
            </Pressable>
            <Pressable style={styles.buttonSecondary}>
              <Text style={styles.buttonSecondaryText}>Share Prototype</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#EEF2F8' },
  container: { flex: 1 },
  content: { padding: 16, paddingBottom: 80 },
  brand: { fontSize: 24, fontWeight: '700', color: '#101828' },
  subtitle: { marginTop: 8, fontSize: 14, color: '#344054' },
  block: {
    marginTop: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 14,
    borderWidth: 1,
    borderColor: '#E4E7EC',
  },
  sectionTitle: { fontSize: 16, fontWeight: '700', color: '#101828' },
  inlineRow: { marginTop: 10, flexDirection: 'row', gap: 8 },
  inlineRowWrap: { marginTop: 10, flexDirection: 'row', gap: 8, flexWrap: 'wrap' },
  chip: {
    backgroundColor: '#F2F4F7',
    borderWidth: 1,
    borderColor: '#D0D5DD',
    borderRadius: 999,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  chipActive: { backgroundColor: '#DCE8FF', borderColor: '#1459E6' },
  chipText: { color: '#344054', fontWeight: '600', fontSize: 12 },
  chipTextActive: { color: '#1459E6' },
  frameCard: {
    marginTop: 12,
    borderRadius: 16,
    padding: 12,
    backgroundColor: '#FCFCFD',
    borderWidth: 1,
    borderColor: '#EAECF0',
  },
  rowBetween: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 8 },
  frameTitle: { fontSize: 15, fontWeight: '700', color: '#101828', flex: 1 },
  frameDesc: { marginTop: 6, color: '#475467', fontSize: 13 },
  badge: {
    fontSize: 11,
    color: '#1459E6',
    backgroundColor: '#EEF4FF',
    borderRadius: 999,
    paddingVertical: 4,
    paddingHorizontal: 10,
    overflow: 'hidden',
    fontWeight: '700',
  },
  tagRow: { marginTop: 8, flexDirection: 'row', flexWrap: 'wrap', gap: 6 },
  softBadge: {
    borderRadius: 999,
    backgroundColor: '#F2F4F7',
    borderWidth: 1,
    borderColor: '#D0D5DD',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  softBadgeText: { fontSize: 11, color: '#475467', fontWeight: '600' },
  tokenRow: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#F2F4F7',
    paddingBottom: 8,
  },
  tokenKey: { color: '#475467', fontSize: 13 },
  tokenValue: { color: '#101828', fontWeight: '600', fontSize: 13 },
  gridSection: {
    marginTop: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 14,
    borderWidth: 1,
    borderColor: '#E4E7EC',
  },
  helperText: { fontSize: 12, color: '#667085', fontWeight: '600' },
  columnWrap: { justifyContent: 'space-between' },
  propertyCard: {
    marginTop: 12,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E4E7EC',
    borderRadius: 14,
    padding: 10,
  },
  mediaStub: { height: 90, borderRadius: 10, backgroundColor: '#EAECF0' },
  cardTitle: { marginTop: 8, fontSize: 13, fontWeight: '700', color: '#101828' },
  cardPrice: { marginTop: 2, fontSize: 13, color: '#1459E6', fontWeight: '700' },
  trustRow: { marginTop: 8, flexDirection: 'row', gap: 6, flexWrap: 'wrap' },
  badgeSuccess: {
    borderRadius: 999,
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: '#ECFDF3',
    color: '#027A48',
    fontSize: 11,
    fontWeight: '700',
    overflow: 'hidden',
  },
  searchInput: {
    marginTop: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D0D5DD',
    backgroundColor: '#FFFFFF',
    color: '#101828',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  actionRow: { marginTop: 12, gap: 8 },
  buttonPrimary: {
    backgroundColor: '#1459E6',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonPrimaryText: { color: '#FFFFFF', fontWeight: '700' },
  buttonSecondary: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1459E6',
  },
  buttonSecondaryText: { color: '#1459E6', fontWeight: '700' },
});
