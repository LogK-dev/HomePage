import { locales } from "@/i18n/locales";

export { locales };
export type { Locale } from "@/i18n/locales";

export type NavItem = {
  key: "company" | "solution" | "contact" | "pricing";
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
    home: string;
    bookDemo: string;
    menuOpen: string;
    menuClose: string;
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
  };
  /** Home page — segmented media shelf below the hero. Each entry maps a
   *  user-facing tab label to its asset (filename relative to
   *  `/assets/selecAI_mockup/`) and media type. */
  mediaShelf: Array<{
    label: string;
    asset: string;
    type: "image" | "video";
  }>;
  company: {
    eyebrow: string;
    body: string[];
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
  /** Second paragraph of the home page's media-shelf intro (the first
   *  paragraph reuses `productPage.description`). */
  mediaShelfLede: string;
  mockupsPage: {
    eyebrow: string;
    title: string;
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
    /** Plan CTAs all route to the shared contact destination derived via
     *  `getContactHref(dictionary)` — no per-plan href stored here. */
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
    };
  };
};
