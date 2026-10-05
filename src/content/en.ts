import type { Dictionary, Source } from "./types";

// Official sources, reused across pages. Keep these to regulator / vendor pages.
export const sources = {
  openaiTraining: {
    label: "OpenAI — How your data is used to improve model performance",
    href: "https://help.openai.com/en/articles/5722486-how-your-data-is-used-to-improve-model-performance",
  },
  oaic: { label: "Office of the Australian Information Commissioner (OAIC)", href: "https://www.oaic.gov.au/" },
  tpb: { label: "Tax Practitioners Board — Code of Professional Conduct", href: "https://www.tpb.gov.au/" },
  austrac: { label: "AUSTRAC — AML/CTF reforms for tranche 2 entities", href: "https://www.austrac.gov.au/" },
  asic: { label: "ASIC — credit licensees and best interests duty", href: "https://asic.gov.au/" },
  mara: { label: "Office of the Migration Agents Registration Authority", href: "https://www.mara.gov.au/" },
  homeAffairs: { label: "Department of Home Affairs — translating documents", href: "https://immi.homeaffairs.gov.au/" },
} satisfies Record<string, Source>;

const en: Dictionary = {
  meta: {
    siteTitle: "Highly Distinguish — Safe, practical AI for Australian small firms",
    siteDescription:
      "We help small accounting practices, mortgage brokers and migration agents across Australia use AI to save time — without putting client data or professional obligations at risk.",
  },
  nav: {
    industries: "Industries",
    services: "Services",
    caseStudies: "Case studies",
    insights: "Insights",
    about: "About",
    contact: "Contact",
    cta: "Free AI safety check",
    switchLanguage: "中文",
    switchLanguageLabel: "切换到中文",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  common: {
    bookCheck: "Book a free AI safety check",
    learnMore: "Learn more",
    readMore: "Read more",
    sources: "Sources",
    callUs: "Call us",
    emailUs: "Email us",
    allInsights: "All insights",
    publishedOn: "Published",
    minRead: "min read",
  },
  footer: {
    tagline: "Safe, practical AI for Australia's small professional firms.",
    explore: "Explore",
    company: "Company",
    archive: "Engineering blog",
    archiveTech: "English posts",
    archiveChinese: "中文技术博客",
    privacy: "Privacy policy",
    terms: "Terms of use",
    disclaimer:
      "We provide technology services, not legal, tax or migration advice. For advice about your obligations, speak to your professional body or a lawyer.",
  },
  home: {
    eyebrow: "AI for small accounting, mortgage broking & migration practices",
    title: "Save hours every week with AI —",
    titleHighlight: "without putting client data at risk.",
    body: "We help small Australian firms choose the right AI tools, set them up safely, and train the team. Plain English, fixed prices, and a person checking anything that matters.",
    secondaryCta: "See how it works",
    proof: [
      "20 years in enterprise IT, including global banks",
      "Built and tested real AI systems on financial documents",
      "English & 中文",
      "Australian company · ABN 70 651 431 677",
    ],
    checklistTitle: "Your safe AI setup",
    checklist: [
      "Business-grade AI plan — no training on your data by default",
      "Written AI use policy your staff have read",
      "Client data kept out of personal accounts",
      "A person reviews anything sent to clients",
      "Templates for the tasks that eat your week",
    ],
    problemsTitle: "Sound familiar?",
    problems: [
      {
        title: "Your team is probably already using ChatGPT.",
        body: "On free and personal ChatGPT plans, conversations can be used to train OpenAI's models unless each user switches it off. A client's tax file number pasted in there is a decision nobody meant to make.",
      },
      {
        title: "Everyone says AI will change your industry. Nobody says what to do on Monday.",
        body: "You don't need a strategy deck. You need three or four tasks that take less time next week, set up properly.",
      },
      {
        title: "You can't afford a mistake with client information.",
        body: "Confidentiality duties in your professional code don't shrink because your firm is small — and since 1 July 2026, AML/CTF reforms bring more firms under privacy rules.",
      },
    ],
    stepsTitle: "How it works",
    stepsIntro: "Start free. Only go further if it's worth it to you.",
    steps: [
      {
        title: "1. Free AI safety check",
        body: "A 30-minute conversation about how your team uses AI today. You get a one-page summary of risks to fix and time-savers to try. No obligation.",
      },
      {
        title: "2. Safe AI setup",
        body: "We choose and configure a business-grade AI tool, write your AI use policy, train your staff, and build templates for your real day-to-day tasks. Fixed price, agreed upfront.",
      },
      {
        title: "3. Ongoing support",
        body: "A monthly retainer for questions, reviewing new tools before you adopt them, and automating more of your workflow as you grow.",
      },
    ],
    industriesTitle: "Built for firms like yours",
    industriesIntro: "Each industry has its own rules and its own time-sinks. We start from both.",
    industriesMore: {
      title: "Another kind of firm?",
      body: "If your business handles sensitive client information, the same safe-AI approach applies — whatever your field.",
      cta: "Tell us about your firm",
    },
    founderBand: {
      eyebrow: "The experience behind the advice",
      statValue: "20",
      statUnit: "years",
      statCaption: "in enterprise IT — handling client data where it's non-negotiable.",
      banksLabel: "Previously at",
      banks: ["Morgan Stanley", "HSBC", "Citi"],
      body: "The habits that protect a global bank's client data are exactly what a five-person practice needs — explained plainly and priced for a small firm. That background is why we take your clients' information as seriously as you do.",
      signatureName: "Highly Distinguish",
      signatureRole: "Founder-led · Australian technology company",
      cta: "More about us",
    },
    honestyTitle: "We're honest about what AI can't do.",
    honestyBody:
      "We built and measured an AI system that answers questions about real company financial reports. It does well — and it still gets about one in five multi-step questions wrong. Human experts do better. That's why everything we set up keeps a person reviewing anything that goes to a client, a lender or a regulator.",
    honestyStats: [
      { value: "79.5%", label: "of 1,490 multi-step financial-report questions answered correctly by our best AI setup" },
      { value: "89.4%", label: "scored by human experts on the same benchmark" },
    ],
    honestyFootnote:
      "Measured on ConvFinQA, a published research benchmark (EMNLP 2022). Our method and results are public on GitHub.",
    honestyCta: "Read the case study",
    whyTitle: "Why Highly Distinguish",
    why: [
      {
        title: "Banking-grade habits",
        body: "Our background is enterprise systems at global banks, where client data handling is non-negotiable. We bring the same habits to a five-person office.",
      },
      {
        title: "Plain English — and 中文",
        body: "No jargon, no hype. We can train your team and explain the risks in English or Mandarin.",
      },
      {
        title: "Fixed prices",
        body: "You know the cost before we start. No surprise invoices for 'a few more hours'.",
      },
      {
        title: "Local and accountable",
        body: "We're an Australian company with an ABN and a phone number that a person answers.",
      },
    ],
    faqTitle: "Common questions",
    faqs: [
      {
        q: "Is free ChatGPT safe to use with client information?",
        a: "On ChatGPT Free, Plus and Pro, conversations can be used to improve OpenAI's models by default. Each user can switch this off under Settings → Data controls, but it's per person and easy to miss. ChatGPT Business and Enterprise plans don't use your data for training by default. Even on a business plan, you still need clear rules about what may be shared.",
        sources: [sources.openaiTraining],
      },
      {
        q: "My firm turns over less than $3 million. Does the Privacy Act apply to me?",
        a: "Many small businesses are exempt, but not all. There are exceptions — and since 1 July 2026, firms that become AML/CTF reporting entities must follow the Australian Privacy Principles for information handled for AML/CTF purposes. Your professional code's confidentiality duties apply regardless of size. Removing the small business exemption is also under discussion in the government's next round of privacy reforms. Check your position with your professional body or a lawyer.",
        sources: [sources.oaic, sources.austrac],
      },
      {
        q: "Will AI replace my staff?",
        a: "AI makes certain tasks much cheaper. The firms that do well use the saved time for the work clients actually value — judgement, relationships, getting it right. We help you decide which tasks to automate and which to keep human.",
      },
      {
        q: "Do I need to be technical?",
        a: "No. If you can use email, you can use what we set up. We do the configuration and train your team.",
      },
      {
        q: "Do you give legal or compliance advice?",
        a: "No. We implement technology and point out risks we see, with links to the official guidance. For advice about your specific obligations, speak to your professional body or a lawyer.",
      },
    ],
    ctaTitle: "Find out where you stand in 30 minutes.",
    ctaBody: "Free, no obligation, and you'll leave with a one-page summary you can act on — whether or not you work with us.",
  },
  industries: [
    {
      slug: "accountants",
      name: "Accounting & bookkeeping practices",
      teaser: "Client emails, meeting notes and document chasing — without breaching confidentiality.",
      metaTitle: "AI for small accounting practices in Australia",
      metaDescription:
        "Use AI safely in your accounting or bookkeeping practice: save time on client emails, notes and document collection while meeting TPB confidentiality and AML/CTF obligations.",
      heroTitle: "AI for small accounting practices — the safe way",
      heroBody:
        "Tax time doesn't get shorter, but a lot of the writing, summarising and chasing around it can. We help small practices use AI for the admin, keep client data protected, and keep the numbers in your accounting software where they belong.",
      useCases: [
        {
          title: "Client emails in minutes",
          body: "First drafts of replies, reminders and explanations of tax concepts in plain English — reviewed and sent by you.",
        },
        {
          title: "Meeting notes to action lists",
          body: "Turn a client meeting into a summary, a task list and a follow-up email.",
        },
        {
          title: "Document chasing",
          body: "Personalised checklists and polite reminders for missing documents, generated from your own templates.",
        },
        {
          title: "Making sense of long letters",
          body: "Plain-English summaries of lengthy ATO correspondence or legislative updates, as a starting point for your review.",
        },
      ],
      risks: [
        {
          title: "Confidentiality is a professional duty",
          body: "The Code of Professional Conduct for tax and BAS agents requires you to keep client information confidential. Pasting client data into a consumer AI tool may amount to disclosing it to a third party.",
          sources: [sources.tpb],
        },
        {
          title: "AML/CTF reforms have started",
          body: "From 1 July 2026, accountants providing certain designated services have AML/CTF obligations — and must handle personal information for those purposes under the Australian Privacy Principles, even if otherwise exempt.",
          sources: [sources.austrac, sources.oaic],
        },
        {
          title: "Chatbots are bad calculators",
          body: "AI models can produce confident, wrong numbers. Calculations should come from your accounting software or a deterministic tool — never from a chatbot's text.",
        },
      ],
      setup: [
        "A business-grade AI tool that doesn't train on your data by default — inside the Microsoft 365 or Google Workspace you already use, where possible",
        "A written AI use policy that sets out what may and may not be shared",
        "A training session for your staff, with examples from your practice",
        "Ready-to-use templates for your most common emails and checklists",
      ],
    },
    {
      slug: "mortgage-brokers",
      name: "Mortgage & finance brokers",
      teaser: "Fact-find summaries, client updates and lender research — with your judgement still in charge.",
      metaTitle: "AI for mortgage brokers in Australia",
      metaDescription:
        "Help for small mortgage and finance broking businesses to use AI safely: faster fact-find summaries, client updates and research while protecting credit information.",
      heroTitle: "AI for mortgage brokers — more time with clients, less time typing",
      heroBody:
        "Brokers spend hours on notes, updates and paperwork around every deal. AI can draft much of it. We set it up so sensitive financial information stays protected and the recommendation is always yours.",
      useCases: [
        {
          title: "Fact-find summaries",
          body: "Turn your interview notes into a structured summary of the client's situation, goals and open questions.",
        },
        {
          title: "Drafting file notes",
          body: "First drafts of the notes you keep on why a product suits the client — which you then check, edit and own.",
        },
        {
          title: "Client updates",
          body: "Clear progress updates at each stage of the application, in English or the client's language.",
        },
        {
          title: "Research support",
          body: "Search and summarise lender policy documents you already hold, so you find the right clause faster.",
        },
      ],
      risks: [
        {
          title: "Financial and credit information is highly sensitive",
          body: "Payslips, bank statements and credit history should not go into a consumer AI tool. Information from credit reports carries additional legal restrictions.",
          sources: [sources.oaic],
        },
        {
          title: "Best interests duty stays with you",
          body: "AI can draft notes, but the assessment and recommendation must reflect your own judgement. Records should show your reasoning, not a chatbot's.",
          sources: [sources.asic],
        },
        {
          title: "Check your licensee's rules first",
          body: "Your credit licensee or aggregator may already have rules about AI tools and where client data can be stored. We work within them.",
        },
      ],
      setup: [
        "A business-grade AI tool configured so client data isn't used for training",
        "An AI use policy that fits alongside your licensee's requirements",
        "Templates for fact-find summaries, file notes and client updates",
        "Staff training focused on what never to paste into an AI tool",
      ],
    },
    {
      slug: "migration-agents",
      name: "Migration agents",
      teaser: "Checklists, client updates and evidence organisation — without risking passports and health data.",
      metaTitle: "AI for registered migration agents in Australia",
      metaDescription:
        "Help for small migration practices to use AI safely: faster document checklists, client updates and evidence organisation while protecting sensitive client information.",
      heroTitle: "AI for migration agents — less admin, same care",
      heroBody:
        "Every visa application means checklists, follow-ups and organising evidence. AI can take on much of that load. We set it up so passports, health details and family information stay protected.",
      useCases: [
        {
          title: "Document checklists",
          body: "Generate a tailored checklist for each client from your own templates, then chase what's missing.",
        },
        {
          title: "Client updates in their language",
          body: "Draft status updates and explanations in English and the client's first language, reviewed by you.",
        },
        {
          title: "Organising evidence",
          body: "Sort and summarise large bundles of supporting documents so you can review them faster.",
        },
        {
          title: "Deadline tracking",
          body: "Keep on top of requests for further information and expiry dates with simple automations.",
        },
      ],
      risks: [
        {
          title: "Confidentiality under your Code of Conduct",
          body: "Registered migration agents must protect client information. Passports, health information and family details should never go into a consumer AI tool.",
          sources: [sources.mara],
        },
        {
          title: "AI translations aren't accredited translations",
          body: "AI can help you understand a document, but translations lodged with an application must meet the Department of Home Affairs' requirements.",
          sources: [sources.homeAffairs],
        },
        {
          title: "AI can make up visa rules",
          body: "Chatbots can state outdated or invented requirements with total confidence. Always check against the legislation and current policy.",
        },
      ],
      setup: [
        "A business-grade AI tool configured so client data isn't used for training",
        "An AI use policy covering sensitive information and translations",
        "Checklist and client-update templates based on your own documents",
        "Training for your team, in English or Mandarin",
      ],
    },
  ],
  industryPage: {
    useCasesTitle: "Where AI saves you time",
    risksTitle: "What to be careful about",
    setupTitle: "What we set up for you",
    ctaTitle: "Not sure where to start?",
    ctaBody: "Book a free 30-minute AI safety check. We'll look at how your team works today and show you the safest quick wins.",
  },
  services: {
    metaTitle: "Services",
    metaDescription:
      "A free AI safety check, a fixed-price safe AI setup, and ongoing support for small professional firms across Australia.",
    title: "Simple services, clear prices",
    intro: "Start with a free check. Only go further if it makes sense for your firm.",
    tiers: [
      {
        name: "AI safety check",
        price: "Free · 30 minutes",
        summary: "Find out how AI is being used in your firm today, and where the risks and quick wins are.",
        includes: [
          "A conversation about your team's current tools and habits",
          "A one-page summary of risks to fix and time-savers to try",
          "Honest advice on whether you need us at all",
        ],
        cta: "Book your free check",
      },
      {
        name: "Safe AI setup",
        price: "Fixed price, quoted upfront",
        summary: "Everything you need to start using AI properly, set up for your firm.",
        includes: [
          "Choosing and configuring a business-grade AI tool",
          "A written AI use policy for your staff",
          "A hands-on training session (English or 中文)",
          "Templates for your most common tasks",
          "A follow-up check-in after 30 days",
        ],
        cta: "Ask for a quote",
      },
      {
        name: "Ongoing support",
        price: "Monthly retainer",
        summary: "A technology partner who keeps your AI setup safe and useful as things change.",
        includes: [
          "Answers to your team's AI questions",
          "Reviews of new tools before you adopt them",
          "Workflow automations as you grow",
          "Updates to your policy as rules and tools change",
        ],
        cta: "Talk to us",
      },
    ],
    notTitle: "What we don't do",
    notBody:
      "We're a technology company, not a law firm. We don't give legal, tax or migration advice, and we won't tell you your firm is 'compliant'. We point out risks we see, link you to the official guidance, and build systems that make good practice the easy option.",
  },
  caseStudies: [
    {
      slug: "ai-that-shows-its-working",
      title: "AI that shows its working on financial reports",
      tag: "Financial documents",
      teaser: "How we stopped an AI from doing mental arithmetic — and measured honestly how often it's still wrong.",
      metaDescription:
        "A case study on building AI that answers questions about company financial reports: separating reading from calculating, and measuring accuracy honestly.",
      problem:
        "Ask a chatbot a follow-up question about a financial report — \"and by what percentage did that increase on the previous year?\" — and it often loses track of which year you meant, or does the arithmetic in its head and gets it wrong. Confidently.",
      approach: [
        "Split the job: the AI reads the document and works out which numbers are needed; a separate, locked-down calculator does the maths.",
        "Make the AI write down its reasoning step by step before it gives an answer, so every answer can be checked.",
        "Design it to refuse rather than guess when a table is ambiguous — for example, when two columns have the same heading.",
        "Measure every change on 1,490 real questions, with proper statistics, rather than trusting a few good-looking examples.",
      ],
      results: [
        { value: "79.5%", label: "of 1,490 questions answered correctly (strict scoring)" },
        { value: "68.9%", label: "the original 2022 research model on the same test" },
        { value: "89.4%", label: "human experts on the same test" },
      ],
      resultsNote:
        "The hardest cases — tables with duplicate column headings — scored only 53.1%. That's why the system now refuses to answer those instead of guessing.",
      lesson:
        "Well-engineered AI is genuinely useful on financial documents, and it is still wrong often enough that a qualified person must check anything that matters.",
      forYou:
        "When we set up AI for your practice, we use the same principles: AI drafts and summarises, your software calculates, and a person reviews. We'll be straight with you about where it's reliable and where it isn't.",
      links: [
        { label: "Full method, code and data (GitHub)", href: "https://github.com/CloudsDocker/AI-FDE-Playbook" },
      ],
    },
    {
      slug: "secure-by-default",
      title: "Secure by default: how we build our own AI products",
      tag: "Data protection",
      teaser: "The habits we use in our own apps — and bring to yours.",
      metaDescription:
        "How we protect API keys and user data in our own AI-powered app, hosted in Australia — and the same habits we bring to client setups.",
      problem:
        "Many small apps and tools that use AI ship their secret keys inside the app, store passwords in plain settings, and send data wherever is cheapest. It works — until someone pulls the key out and runs up the bill, or data ends up somewhere it shouldn't.",
      approach: [
        "Secret keys live only on the server, never inside the app people download.",
        "Keys are kept in a dedicated secrets manager, not in configuration files or logs.",
        "Automated deployments use short-lived credentials instead of long-lived passwords.",
        "The service runs in Google Cloud's Australian region, with rate limits to stop abuse.",
      ],
      results: [
        { value: "0", label: "secret keys shipped inside the app" },
        { value: "Australia", label: "where the service's cloud region is" },
      ],
      resultsNote:
        "This is the backend for LessChoice, our AI-powered iOS app that suggests places to visit.",
      lesson:
        "Good security is mostly a set of boring habits, applied every time. It costs little to do from the start and a lot to fix later.",
      forYou:
        "When we configure tools for your firm, we apply the same habits: the right plan, the right settings, data kept where it should be, and access only for the people who need it.",
      links: [{ label: "Backend source code (GitHub)", href: "https://github.com/CloudsDocker/lesschoice-backend" }],
    },
  ],
  caseStudyPage: {
    indexTitle: "Case studies",
    indexIntro: "Real systems we've built, what we learned, and what it means for your firm.",
    problem: "The problem",
    approach: "What we did",
    results: "Results",
    lesson: "The lesson",
    forYou: "What this means for you",
    furtherReading: "Further reading",
  },
  insightsPage: {
    metaDescription:
      "Plain-English articles on using AI safely in small accounting, mortgage broking and migration practices in Australia.",
    title: "Insights",
    intro: "Plain-English guides to using AI safely in a small professional firm.",
  },
  about: {
    metaTitle: "About us",
    metaDescription:
      "Highly Distinguish is an Australian technology company helping small professional firms adopt AI safely.",
    title: "Enterprise experience, small-business focus",
    intro:
      "Highly Distinguish is an Australian technology company. We help small professional firms get the benefits of AI without the risks — using the same standards big banks expect, explained in plain language.",
    founderTitle: "Our founder",
    founderBody: [
      "Our founder has spent 20 years building and running software systems, including engineering roles at global banks such as Morgan Stanley, HSBC and Citi — environments where client data protection is not optional.",
      "Today the work is designing and testing AI systems, including a publicly documented AI for answering questions about financial reports, and an AI-powered iOS app, with engineering write-ups published in English and Chinese.",
      "Our AI practice exists because of a pattern that's common in small firms: pressure to 'do something with AI', staff quietly using free tools with client data, and nobody explaining the trade-offs in plain language.",
    ],
    principlesTitle: "How we work",
    principles: [
      { title: "Honest about limits", body: "We tell you where AI is reliable and where it isn't — even if that means a smaller job for us." },
      { title: "People stay in charge", body: "AI drafts. People decide, check and sign off." },
      { title: "Your data, your control", body: "We favour tools and settings that keep your data out of model training and under your control." },
      { title: "Fixed prices", body: "We quote upfront and stick to it." },
    ],
    companyTitle: "Company details",
    companyLabels: { name: "Name", location: "Location", phone: "Phone" },
    elsewhereTitle: "Find us elsewhere",
    elsewhere: [
      { label: "Our engineering blog", href: "https://www.todzhang.com" },
      { label: "GitHub", href: "https://github.com/CloudsDocker" },
    ],
  },
  contact: {
    metaTitle: "Contact & free AI safety check",
    metaDescription:
      "Book a free 30-minute AI safety check for your accounting, mortgage broking or migration practice, anywhere in Australia.",
    title: "Book your free AI safety check",
    intro: "Call or email us and we'll find a 30-minute slot that suits you — online anywhere in Australia, or in person if you're nearby.",
    phoneLabel: "Phone",
    emailLabel: "Email",
    hours: "Monday to Friday, business hours (Australian Eastern time).",
    emailSubject: "Free AI safety check",
    emailBody:
      "Hi,\n\nI'd like to book a free AI safety check.\n\nBusiness name:\nIndustry:\nNumber of staff:\nBest time to talk:\n\nThanks,",
    stepsTitle: "What happens next",
    steps: [
      { title: "We talk for 30 minutes", body: "About your team, your current tools and the tasks that eat your time." },
      { title: "You get a one-page summary", body: "Risks to fix now and time-savers worth trying, in plain English." },
      { title: "You decide", body: "Use the summary yourself, or ask us for a fixed-price quote. No pressure either way." },
    ],
    area: "Serving clients across Australia online, and in person where we can.",
  },
  notFound: {
    title: "Page not found",
    body: "The page you're looking for has moved or doesn't exist.",
    home: "Back to home",
  },
};

export default en;
