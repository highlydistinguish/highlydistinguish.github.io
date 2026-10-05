export type Source = { label: string; href: string };

export type Card = { title: string; body: string };

export type Faq = { q: string; a: string; sources?: Source[] };

export type IndustrySlug = "accountants" | "mortgage-brokers" | "migration-agents";

export type Industry = {
  slug: IndustrySlug;
  name: string;
  /** One-liner for the homepage card. */
  teaser: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroBody: string;
  useCases: Card[];
  risks: (Card & { sources?: Source[] })[];
  setup: string[];
};

export type CaseStudySlug = "ai-that-shows-its-working" | "secure-by-default";

export type CaseStudy = {
  slug: CaseStudySlug;
  title: string;
  teaser: string;
  metaDescription: string;
  /** Short label, e.g. "Financial documents". */
  tag: string;
  problem: string;
  approach: string[];
  results: { value: string; label: string }[];
  resultsNote: string;
  lesson: string;
  forYou: string;
  links: Source[];
};

export type ServiceTier = {
  name: string;
  price: string;
  summary: string;
  includes: string[];
  cta: string;
};

export type Dictionary = {
  meta: { siteTitle: string; siteDescription: string };
  nav: {
    industries: string;
    services: string;
    caseStudies: string;
    insights: string;
    about: string;
    contact: string;
    cta: string;
    switchLanguage: string;
    switchLanguageLabel: string;
    openMenu: string;
    closeMenu: string;
  };
  common: {
    bookCheck: string;
    learnMore: string;
    readMore: string;
    sources: string;
    callUs: string;
    emailUs: string;
    allInsights: string;
    publishedOn: string;
    minRead: string;
  };
  footer: {
    tagline: string;
    explore: string;
    company: string;
    archive: string;
    archiveTech: string;
    archiveChinese: string;
    privacy: string;
    terms: string;
    disclaimer: string;
  };
  home: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    body: string;
    secondaryCta: string;
    proof: string[];
    checklistTitle: string;
    checklist: string[];
    problemsTitle: string;
    problems: Card[];
    stepsTitle: string;
    stepsIntro: string;
    steps: Card[];
    industriesTitle: string;
    industriesIntro: string;
    industriesMore: { title: string; body: string; cta: string };
    founderBand: {
      eyebrow: string;
      statValue: string;
      statUnit: string;
      statCaption: string;
      banksLabel: string;
      banks: string[];
      body: string;
      signatureName: string;
      signatureRole: string;
      cta: string;
    };
    honestyTitle: string;
    honestyBody: string;
    honestyStats: { value: string; label: string }[];
    honestyFootnote: string;
    honestyCta: string;
    whyTitle: string;
    why: Card[];
    faqTitle: string;
    faqs: Faq[];
    ctaTitle: string;
    ctaBody: string;
  };
  industries: Industry[];
  industryPage: {
    useCasesTitle: string;
    risksTitle: string;
    setupTitle: string;
    ctaTitle: string;
    ctaBody: string;
  };
  services: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    intro: string;
    tiers: ServiceTier[];
    notTitle: string;
    notBody: string;
  };
  caseStudies: CaseStudy[];
  caseStudyPage: {
    indexTitle: string;
    indexIntro: string;
    problem: string;
    approach: string;
    results: string;
    lesson: string;
    forYou: string;
    furtherReading: string;
  };
  insightsPage: { metaDescription: string; title: string; intro: string };
  about: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    intro: string;
    founderTitle: string;
    founderBody: string[];
    principlesTitle: string;
    principles: Card[];
    companyTitle: string;
    companyLabels: { name: string; location: string; phone: string };
    elsewhereTitle: string;
    elsewhere: Source[];
  };
  contact: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    intro: string;
    phoneLabel: string;
    emailLabel: string;
    hours: string;
    emailSubject: string;
    emailBody: string;
    stepsTitle: string;
    steps: Card[];
    area: string;
  };
  notFound: { title: string; body: string; home: string };
};
