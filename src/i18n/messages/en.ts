import type { SiteDictionary } from "@/i18n/schema";

export const en: SiteDictionary = {
  meta: {
    siteName: "LogK",
    homeTitle: "LogK | Delegate across the best AI models",
    homeDescription:
      "LogK lets users select multiple AI models, preview cost, delegate one question across them, aggregate answers, and apply privacy-aware routing.",
    productTitle: "LogK Product | Multi-model delegation for AI services",
    productDescription: "Explore LogK's product for model selection, cost-aware delegation, answer aggregation, verification loops, and privacy blocking.",
    pricingTitle: "LogK Pricing | Simple, usage-based plans",
    pricingDescription: "Choose the plan that fits your workflow. All plans include model routing, cost preview, and answer comparison."
  },
  nav: {
    items: [
      { key: "company", label: "Company", href: "#company" },
      { key: "solution", label: "Solution", href: "#solution" },
      { key: "technology", label: "Technology", href: "#technology" },
      { key: "contact", label: "Contact", href: "#contact" },
      { key: "pricing", label: "Pricing", href: "pricing" }
    ],
    product: "Product",
    pricing: "Pricing",
    talkToSales: "Talk to sales",
    home: "Home",
    bookDemo: "Book a demo",
    menuOpen: "Open menu",
    menuClose: "Close menu"
  },
  theme: {
    light: "Light",
    dark: "Dark",
    toggleLabel: "Toggle color theme"
  },
  localeSwitcher: {
    label: "Language"
  },
  hero: {
    eyebrow: "Multi-model AI delegation",
    title: "Delegate across models.",
    titleAccent: "Decide with evidence.",
    lede:
      "LogK gives users one dashboard to select ChatGPT, Claude, Gemini, and other models together, preview expected spend, dispatch the task, and compare or aggregate the results.",
    primaryCta: "See the product",
    secondaryCta: "Explore the system",
    metrics: [
      { value: "1 question", label: "fan out a prompt to multiple models at once" },
      { value: "live estimate", label: "preview expected credits before you run" },
      { value: "privacy filter", label: "block or redact sensitive information before dispatch" }
    ],
    previewFeatures: [
      {
        id: "chats",
        label: "Chats",
        summary: "Run one conversation across multiple models while preserving context."
      },
      {
        id: "projects",
        label: "Projects",
        summary: "Organize AI workspaces by goal, owners, and reusable workflow presets."
      },
      {
        id: "agents",
        label: "Agents",
        summary: "Configure role-based delegates for drafting, critique, and verification."
      },
      {
        id: "usage",
        label: "Usage",
        summary: "Review request and token usage trends by team and workflow."
      },
      {
        id: "spending",
        label: "Spending",
        summary: "Track credits and budget impact before and after delegated runs."
      },
      {
        id: "billing",
        label: "Billing",
        summary: "Manage invoices, payment methods, and account-level billing controls."
      }
    ],
    previewFallback: {
      title: "Loading product preview…",
      body: "Enable JavaScript to see the interactive demo."
    }
  },
  trust: [
    "Built for ChatGPT, Claude, Gemini, and more",
    "Designed for teams and power users",
    "Credit-based billing with visible spend",
    "Private prompt blocking before provider dispatch"
  ],
  solution: {
    eyebrow: "Solution",
    title: "One question can run across many AI services.",
    description:
      "Current products mostly optimize for developer gateways, single-chat access, or observability. LogK is built as the decision layer above the models: choose them, compare them, price them, and verify them in one product.",
    cards: [
      {
        index: "01",
        title: "Select multiple models from one dashboard",
        body:
          "Users can choose one model or several model cards at once, depending on whether they want a single answer, side-by-side comparison, or aggregated synthesis.",
        bullets: [
          "Model cards for provider, speed, quality, and modality",
          "One click to compare multiple answers",
          "Recommendation layer for the current task"
        ],
        tall: true
      },
      {
        index: "02",
        title: "See cost before you delegate",
        body:
          "LogK estimates expected spend before the request runs so users can make an intentional tradeoff between price, breadth, and answer quality."
      },
      {
        index: "03",
        title: "Add follow-up verification automatically",
        body:
          "The system can ask clarifying or verifying follow-up queries when models disagree, confidence is low, or the answer needs one more pass."
      }
    ]
  },
  showcase: {
    eyebrow: "Product surfaces",
    title: "One product, three operating modes.",
    description:
      "The interaction shifts with the task: choose your model stack, dispatch work across providers, then inspect and verify the result.",
    tabs: [
      {
        id: "plan",
        label: "Select",
        title: "Select the right model stack for the task",
        body:
          "Choose one model for speed, several models for comparison, or a recommended stack for writing, coding, reasoning, or research-heavy queries.",
        visualLabel: "Model stack",
        visualTitle: "Board review across GPT-5.2, Claude Sonnet, and Gemini Pro",
        bullets: [
          "Show expected credits before run",
          "Balance quality, latency, and privacy rules",
          "Save reusable stacks for repeated workflows"
        ]
      },
      {
        id: "build",
        label: "Delegate",
        title: "Delegate once and route to many providers",
        body:
          "LogK fans out the request across selected models, tracks cost centrally, and keeps the run structured even when providers, models, or follow-up steps differ.",
        stack: [
          "OpenAI: first-pass answer with tools",
          "Anthropic: reasoning and critique",
          "Google: verification and multimodal follow-up"
        ]
      },
      {
        id: "review",
        label: "Verify",
        title: "Aggregate, compare, and verify the final answer",
        body:
          "Instead of forcing users to trust one output, LogK shows model differences, confidence gaps, and verification passes so the final answer is easier to trust.",
        reviewLines: [
          "Highlight disagreement across providers before synthesis",
          "Trigger verifier prompts when confidence is low",
          "Produce one aggregated answer with cited model traces"
        ]
      }
    ]
  },
  technology: {
    eyebrow: "Technology",
    title: "Designed for model choice, cost control, and privacy-aware delegation.",
    description:
      "The system is not just another provider switch. It is a routing and decision layer that helps users choose models intelligently, manage credit spend, and keep sensitive context out of unsafe paths.",
    graphicEyebrow: "Routing graph",
    graphicTitle: "Task-aware model orchestration",
    graphicBody:
      "Map the user request to a stack of candidate models, privacy rules, expected costs, and optional verification steps before a provider call is even made.",
    cards: [
      {
        index: "A",
        title: "Multi-model recommendation and routing",
        body:
          "Suggest the right model or stack for the current prompt, then route the request based on price, quality, availability, or workflow presets."
      },
      {
        index: "B",
        title: "Privacy blocking and spend governance",
        body:
          "Apply redaction or blocking rules before dispatch, and keep credit-based billing visible at the run, team, and account level."
      }
    ],
    stats: [
      { value: 7, label: "model and provider paths evaluated before dispatch in the demo story" },
      { value: 3, label: "core user actions: select, delegate, verify" },
      { value: 100, label: "percent of sensitive fields checked before the run leaves LogK" }
    ]
  },
  company: {
    eyebrow: "Company",
    title: "Building the delegation layer for the AI model ecosystem.",
    description:
      "LogK exists because the model landscape keeps expanding while user workflows stay fragmented. We want interacting with many AI services to feel coherent, economic, and trustworthy.",
    cards: [
      {
        index: "Mission",
        title: "Make model choice a product feature, not a burden.",
        body: "Users should not need seven tabs and manual copy-paste to get the best answer from the current AI landscape."
      },
      {
        index: "Approach",
        title: "Above the models, close to the user.",
        body:
          "The market already has developer gateways and observability tools. LogK is focused on the user-facing layer: model selection, delegation UX, answer comparison, and trust."
      },
      {
        index: "Operating principles",
        wide: true,
        principles: [
          { title: "Visible economics", body: "Cost should be legible before a request runs, not discovered afterwards." },
          { title: "Private by default", body: "Sensitive information should be blocked, redacted, or routed intentionally." },
          { title: "Trust through comparison", body: "Better answers come from structured disagreement and verification, not blind single-model trust." }
        ]
      }
    ]
  },
  contact: {
    eyebrow: "Contact",
    title: "Bring LogK into your AI workflow.",
    body:
      "LogK is designed for teams and advanced users who want to delegate across models with clear pricing, privacy controls, and stronger trust in the final answer.",
    primaryCta: "hello@logk.ai",
    secondaryCta: "Explore product details"
  },
  productPage: {
    eyebrow: "Product",
    title: "The dashboard for choosing, delegating, and verifying across AI models.",
    description:
      "LogK is organized around the real user workflow for multi-model AI: select the stack, estimate the cost, dispatch across providers, then compare or verify the outcome.",
    stages: [
      {
        label: "Select",
        title: "Choose one model or many",
        body: "Pick a single model for speed, or a multi-model stack for comparison, aggregation, and task-specific coverage."
      },
      {
        label: "Estimate",
        title: "See expected credits before run",
        body: "Make price visible up front so users can decide whether broader delegation is worth it for the task."
      },
      {
        label: "Delegate",
        title: "Dispatch across providers",
        body: "Send the request through one system while LogK handles provider choice, central tracking, and workflow structure."
      },
      {
        label: "Verify",
        title: "Follow up when needed",
        body: "Trigger verifier passes, compare outputs, and produce one trusted final answer instead of stopping at first response."
      }
    ],
    surfaces: [
      {
        index: "Surface 01",
        title: "Model board for intelligent selection",
        body:
          "LogK turns model choice into a clear product surface with cards, presets, recommendations, and spend visibility, rather than forcing users to remember vendor-specific behavior.",
        wide: true
      },
      {
        index: "Surface 02",
        title: "Cost-aware delegation",
        body:
          "Credit estimates and centralized billing make it practical to fan out across multiple models without losing visibility into spend."
      },
      {
        index: "Surface 03",
        title: "Answer aggregation and disagreement handling",
        body:
          "LogK compares outputs, identifies disagreement, and lets users choose between direct comparison or aggregated synthesis."
      },
      {
        index: "Surface 04",
        title: "Privacy and policy controls",
        body:
          "Sensitive inputs can be blocked, redacted, or routed according to policy before they ever leave the product."
      }
    ],
    flowEyebrow: "Flow",
    flowTitle: "A product story that users understand in seconds.",
    flowDescription:
      "Strong startup sites show the workflow clearly. LogK should communicate the loop quickly: choose models, see price, delegate, verify, decide.",
    steps: [
      { number: "01", title: "Write the question once", body: "Start with a single prompt, task, or file set that needs the best available answer." },
      { number: "02", title: "Select the model stack", body: "Choose one or many models manually, or accept LogK's recommendation for the current task." },
      { number: "03", title: "Run delegation with controls", body: "Preview credits, apply privacy blocking, and dispatch through one coordinated system." },
      { number: "04", title: "Inspect and verify the result", body: "Compare outputs, run follow-up verification, and finish with one answer you can actually trust." }
    ],
    nextEyebrow: "Next step",
    nextTitle: "Use this as the product destination linked from the homepage hero.",
    nextBody:
      "For a real company site, this page can grow into pricing, privacy guarantees, model coverage, and enterprise workflow details without overloading the homepage.",
    primaryCta: "Request a product demo",
    secondaryCta: "Back to homepage",
    gallery: {
      workspaceLabel: "Workspace",
      workspaceTitle: "A real workspace flow instead of an abstract demo",
      workspaceBody: "Model choice, execution controls, privacy blocking, and spend estimation all read as one product surface.",
      workspaceAlt: "LogK workspace dashboard screenshot",
      pricingLabel: "Pricing",
      pricingTitle: "Usage and spend presented as product UI",
      pricingBody: "Pricing should feel like an operating surface, not a detached spreadsheet, so credit-based billing becomes easier to trust.",
      pricingAlt: "LogK pricing dashboard screenshot"
    }
  },
  mockupsPage: {
    eyebrow: "Capture-ready mockups",
    title: "LogK product surfaces prepared for screenshots and iteration.",
    description: "Original LogK mockups for model selection, answer comparison, privacy controls, and credit-based billing.",
    lede:
      "LogK is the delegation layer for AI services. Users select several models, preview expected spend, apply privacy blocking, compare outputs, aggregate answers, and trigger automatic follow-up verification from one workspace.",
    note:
      "The category leaders repeat the same UI pattern: direct hero framing, an immediately legible dashboard surface, strong pricing or policy modules, and quick trust cues. These mockups translate those patterns into LogK's actual workflow instead of copying competitor assets.",
    primaryCta: "Open product page",
    secondaryCta: "Back to homepage",
    scenes: [
      {
        eyebrow: "Scene 01",
        title: "Model board",
        body: "Lead with the idea that model selection is the primary product interaction."
      },
      {
        eyebrow: "Scene 02",
        title: "Answer compare",
        body: "Show disagreement and synthesis explicitly instead of hiding behind one answer."
      },
      {
        eyebrow: "Scene 03",
        title: "Privacy control",
        body: "Make sensitive-data blocking and provider policy visible as operating surfaces."
      },
      {
        eyebrow: "Scene 04",
        title: "Credit wallet",
        body: "Turn credit-based billing and run-level spend into a product-native view."
      }
    ]
  },
  pricingPage: {
    eyebrow: "Pricing",
    badge: "Start today · KRW billing available",
    title: "Choose the plan that fits\nyour AI workflow",
    description: "Every plan includes multi-LLM comparison. Higher tiers unlock more credits and advanced features.",
    toggle: {
      monthly: "Monthly",
      yearly: "Yearly",
      discount: "Save 20%",
      annualNote: "20% discount on annual subscription"
    },
    creditLabel: "Monthly credits",
    plans: [
      {
        key: "lite",
        name: "Lite",
        tagline: "Start light with AI",
        currency: "₩",
        monthlyPrice: "10,000",
        yearlyPrice: "8,000",
        credits: "10,000",
        ctaLabel: "Get started →",
        ctaHref: "mailto:hello@logk.ai",
        features: [
          { text: "Multi-LLM simultaneous use", sub: "ChatGPT · Claude · Gemini included" },
          { text: "Response comparison" },
          { text: "Conversation history" }
        ]
      },
      {
        key: "standard",
        name: "Standard",
        tagline: "Optimised for real work",
        currency: "₩",
        monthlyPrice: "30,000",
        yearlyPrice: "24,000",
        credits: "33,000",
        bonusCredits: "+3,000",
        ctaLabel: "Get started →",
        ctaHref: "mailto:hello@logk.ai",
        features: [
          { text: "Multi-LLM simultaneous use", sub: "ChatGPT · Claude · Gemini included" },
          { text: "Response comparison" },
          { text: "File attachment analysis (PDF · images)" },
          { text: "Conversation history" }
        ]
      },
      {
        key: "pro",
        name: "Pro",
        tagline: "Advanced use · security features",
        currency: "₩",
        monthlyPrice: "50,000",
        yearlyPrice: "40,000",
        credits: "60,000",
        bonusCredits: "+10,000",
        badge: "🔥 Most popular plan",
        highlight: true,
        ctaLabel: "Start now →",
        ctaHref: "mailto:hello@logk.ai",
        features: [
          { text: "Multi-LLM simultaneous use", sub: "ChatGPT · Claude · Gemini included" },
          { text: "Response comparison & optimisation" },
          { text: "File attachment analysis (PDF · images)" },
          { text: "PII de-identification (basic)", icon: "shield" },
          { text: "Conversation history" },
          { text: "Priority support" }
        ]
      },
      {
        key: "business",
        name: "Business",
        tagline: "Full-spec plan for teams",
        currency: "₩",
        monthlyPrice: "100,000",
        yearlyPrice: "80,000",
        credits: "140,000",
        bonusCredits: "+40,000",
        ctaLabel: "Get started →",
        ctaHref: "mailto:hello@logk.ai",
        features: [
          { text: "Multi-LLM simultaneous use", sub: "ChatGPT · Claude · Gemini included" },
          { text: "Response comparison & optimisation" },
          { text: "File attachment + OCR analysis" },
          { text: "PII de-identification (full)", icon: "shield" },
          { text: "Internal document RAG", icon: "shield" },
          { text: "Org security policy integration", icon: "shield" },
          { text: "Conversation history" },
          { text: "Dedicated support manager" }
        ]
      }
    ],
    enterprise: {
      title: "🏢 Enterprise — On-premise custom",
      description: "On-premise deployment optimised for high-security environments: public sector, finance, healthcare, and large enterprises. Supports KRW billing and organisation-specific security configuration.",
      tags: ["On-premise", "Air-gapped support", "KRW billing", "Full PII de-identification", "Internal document RAG", "SLA guarantee"],
      ctaLabel: "Contact sales →",
      ctaHref: "mailto:hello@logk.ai",
      note: "Response within 3 business days"
    },
    creditNotes: [
      "Credit consumption varies by model, prompt length, and file size.",
      "Multi-LLM simultaneous dispatch consumes credits per model selected.",
      "Monthly credits reset on the 1st of each month; unused credits do not carry over."
    ],
    faq: {
      title: "Frequently asked questions",
      items: [
        {
          question: "How are credits consumed?",
          answer: "Credits are consumed when sending a prompt to an LLM and receiving a response. The amount varies by model type, prompt length, and file size. When sending to multiple LLMs simultaneously, credits are consumed separately for each model selected."
        },
        {
          question: "Do unused credits roll over to the next month?",
          answer: "Monthly credits reset on the 1st of each month and unused credits do not carry over by default. Business plan users will be able to roll over up to one month of credits in a future update."
        },
        {
          question: "Can public institutions and educational organizations use the service?",
          answer: "Yes. We provide a KRW billing system so organisations with foreign currency restrictions can pay easily by domestic card or bank transfer. Contact us for public procurement options."
        },
        {
          question: "How does PII de-identification work?",
          answer: "Before sending prompts to external LLM servers, we automatically detect and de-identify personal and sensitive information using NER + regex + proprietary sLLM. Names, emails, phone numbers, and other PII are replaced with placeholders (e.g. '김철수' → '[이름_1]') while preserving document structure."
        },
        {
          question: "Can I upgrade or change my plan mid-cycle?",
          answer: "You can upgrade at any time. Remaining credits are preserved and the new plan's features and credits apply from the change date. Downgrades take effect at the start of the next billing cycle."
        },
        {
          question: "Which LLM models are available?",
          answer: "We currently support 25+ models including ChatGPT, Claude, Gemini, Grok, DeepSeek, and Perplexity. The model list is continuously expanded as the AI industry evolves."
        }
      ]
    },
    trialBanner: {
      title: "Experience LogK today",
      body: "Try the free demo to see multi-LLM comparison and privacy features in action.",
      ctaLabel: "Request a free demo",
      ctaHref: "mailto:hello@logk.ai"
    }
  }
};
