import { PREVIEW_TAB_IDS, type PreviewTabId } from "@/shared/tabs";
import { locales } from "@/i18n/locales";

export { PREVIEW_TAB_IDS, locales };
export type PreviewFeatureId = PreviewTabId;
export type { Locale } from "@/i18n/locales";

export type NavItem = {
  key: "company" | "solution" | "technology" | "contact" | "pricing";
  label: string;
  href: string;
};

export type SiteDictionary = {
  meta: {
    siteName: string;
    homeTitle: string;
    homeDescription: string;
    productTitle: string;
    productDescription: string;
    pricingTitle: string;
    pricingDescription: string;
    mockupsTitle: string;
    mockupsDescription: string;
  };
  nav: {
    items: NavItem[];
    product: string;
    pricing: string;
    talkToSales: string;
    home: string;
    bookDemo: string;
    menuOpen: string;
    menuClose: string;
  };
  theme: {
    light: string;
    dark: string;
    toggleLabel: string;
  };
  localeSwitcher: {
    label: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    lede: string;
    primaryCta: string;
    secondaryCta: string;
    metrics: Array<{ value: string; label: string }>;
    previewFeatures: Array<{
      // First entry becomes the default tab — order is load-bearing.
      id: PreviewFeatureId;
      label: string;
      summary: string;
    }>;
    previewFallback: {
      title: string;
      body: string;
    };
  };
  trust: string[];
  solution: {
    eyebrow: string;
    title: string;
    description: string;
    cards: Array<{
      index: string;
      title: string;
      body: string;
      bullets?: string[];
      tall?: boolean;
    }>;
  };
  showcase: {
    eyebrow: string;
    title: string;
    description: string;
    tabs: Array<{
      id: "plan" | "build" | "review";
      label: string;
      title: string;
      body: string;
      visualLabel?: string;
      visualTitle?: string;
      bullets?: string[];
      stack?: string[];
      reviewLines?: string[];
    }>;
  };
  technology: {
    eyebrow: string;
    title: string;
    description: string;
    graphicEyebrow: string;
    graphicTitle: string;
    graphicBody: string;
    cards: Array<{ index: string; title: string; body: string }>;
    stats: Array<{ value: number; label: string }>;
  };
  company: {
    eyebrow: string;
    title: string;
    description: string;
    cards: Array<
      | { index: string; title: string; body: string; wide?: boolean }
      | { index: string; principles: Array<{ title: string; body: string }>; wide?: boolean }
    >;
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
  };
  productPage: {
    eyebrow: string;
    title: string;
    description: string;
    stages: Array<{ label: string; title: string; body: string }>;
    surfaces: Array<{ index: string; title: string; body: string; wide?: boolean }>;
    flowEyebrow: string;
    flowTitle: string;
    flowDescription: string;
    steps: Array<{ number: string; title: string; body: string }>;
    nextEyebrow: string;
    nextTitle: string;
    nextBody: string;
    primaryCta: string;
    secondaryCta: string;
    gallery: {
      workspaceLabel: string;
      workspaceTitle: string;
      workspaceBody: string;
      workspaceAlt: string;
      pricingLabel: string;
      pricingTitle: string;
      pricingBody: string;
      pricingAlt: string;
    };
  };
  features: {
    eyebrow: string;
    title: string;
    description: string;
    rows: Array<{
      eyebrow: string;
      title: string;
      body: string;
      bullets?: string[];
    }>;
    adminSection: {
      eyebrow: string;
      title: string;
      description: string;
      corp: { title: string; body: string; alt: string };
      user: { title: string; body: string; alt: string };
    };
  };
  mockupsPage: {
    eyebrow: string;
    title: string;
    description: string;
    lede: string;
    note: string;
    primaryCta: string;
    secondaryCta: string;
    scenes: Array<{ eyebrow: string; title: string; body: string }>;
  };
  pricingPage: {
    eyebrow: string;
    badge: string;
    title: string;
    titleEmphasis?: string; // wrapped in <em> and coloured accent
    description: string;
    toggle: {
      monthly: string;
      yearly: string;
      discount: string;
      annualNote: string;
    };
    creditLabel: string;
    plans: Array<{
      key: string;
      name: string;
      tagline: string;
      currency: string;
      monthlyPrice: string;
      yearlyPrice: string;
      credits: string;
      bonusCredits?: string;
      badge?: string;
      ctaLabel: string;
      ctaHref: string;
      highlight?: boolean;
      features: Array<{
        text: string;
        sub?: string;
        icon?: "shield";
      }>;
    }>;
    enterprise: {
      title: string;
      description: string;
      tags: string[];
      ctaLabel: string;
      ctaHref: string;
      note: string;
    };
    creditNotes: string[];
    faq: {
      title: string;
      items: Array<{ question: string; answer: string }>;
    };
    trialBanner: {
      title: string;
      body: string;
      ctaLabel: string;
      ctaHref: string;
    };
  };
};
