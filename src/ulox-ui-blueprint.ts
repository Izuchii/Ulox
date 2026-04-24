export type TopTab = "Land & Property Listings" | "Reels" | "DwellHub" | "LabourHub";

export interface DesignTokenSet {
  colors: Record<string, string>;
  spacing: number[];
  radius: number[];
}

export const designTokens: DesignTokenSet = {
  colors: {
    primary600: "#2563EB",
    primary500: "#3B82F6",
    primary100: "#DBEAFE",
    neutral900: "#111827",
    neutral700: "#374151",
    neutral500: "#6B7280",
    neutral300: "#D1D5DB",
    neutral100: "#F3F4F6",
    surface: "#FFFFFF",
    background: "#F8FAFC",
    success: "#16A34A",
    warning: "#D97706",
    danger: "#DC2626",
    info: "#0284C7",
    verified: "#0891B2",
  },
  spacing: [4, 8, 12, 16, 20, 24, 32, 40, 48],
  radius: [8, 12, 16, 24],
};

export const navigation = {
  topTabs: ["Land & Property Listings", "Reels", "DwellHub", "LabourHub"] as TopTab[],
  landAndPropertySubTabs: ["Rent", "Buy", "HomeBuy Assist"],
  rentSubTabs: ["Properties", "Roommates"],
};

export const componentLibrary = [
  "buttons",
  "inputs",
  "cards",
  "navigation",
  "filters",
  "badges",
  "modals",
  "tables",
  "notifications",
] as const;

export const appFrames = {
  home: ["Home Screen", "Discovery Feeds"],
  propertyMarketplace: [
    "property listing grid",
    "property detail page",
    "search and filter interface",
    "schedule property tour",
    "rental checkout",
    "property purchase flow",
    "title verification display",
    "deposit-first purchase flow",
    "conveyancing progress tracker",
    "registry lodgement status",
    "settlement confirmation",
  ],
  roommatesMarketplace: [
    "roommate listing feed",
    "roommate detail page",
    "roommate profile",
    "contact reveal interface",
  ],
  reels: [
    "vertical reels feed",
    "reel viewer",
    "reel engagement actions",
    "reels with contextual CTAs",
  ],
  dwellHubGoods: [
    "product discovery feed",
    "product card",
    "product detail page",
    "cart",
    "checkout",
    "delivery OTP verification",
  ],
  dwellHubServices: [
    "service discovery",
    "service provider profile",
    "booking interface",
    "negotiated offer interface",
    "booking confirmation",
    "service completion confirmation",
  ],
  labourHub: [
    "available jobs feed",
    "job detail page",
    "job funding confirmation",
    "worker attendance interface",
    "dispute reporting interface",
    "questionnaire arbitration interface",
    "settlement result screen",
  ],
  authentication: [
    "login",
    "signup",
    "phone verification",
    "KYC verification",
    "KYC pending",
    "KYC approved",
  ],
  userProfile: ["profile overview", "saved listings", "saved reels", "saved products", "settings"],
  admin: [
    "listing moderation dashboard",
    "listing review interface",
    "dispute resolution dashboard",
    "transaction monitoring dashboard",
    "user management panel",
    "CMS editor",
    "analytics dashboard",
  ],
} as const;

export const figmaPages = ["Foundations", "Components", "Patterns", "App Screens", "Admin"] as const;
