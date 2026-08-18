export type ExternalLink = {
  label: string
  href: string
}

export type ExperienceEntry = {
  company: string
  role: string
  dates: string
  location: string
  highlights: string[]
  stack?: string[]
  logo?: string
  photo?: { src: string; alt: string; caption: string }
}

export type ProjectEntry = {
  name: string
  tagline: string
  context: string
  dates: string
  award?: string
  link?: ExternalLink
  stack: string[]
  highlights: string[]
  /** Spans the full grid row with the image side by side. */
  featured?: boolean
  /** Spans the full grid row with the image stacked above the text. */
  wide?: boolean
  image?: {
    src: string
    alt: string
    /**
     * 'screen' crops to a wide frame, 'device' preserves a full phone mockup,
     * 'showcase' runs the image full-bleed across the top of a wide card.
     */
    fit: 'screen' | 'device' | 'showcase'
  }
}

export type SkillGroup = {
  label: string
  items: string[]
}

export type EducationEntry = {
  school: string
  program: string
  dates: string
  location: string
  detail?: string
  logo?: string
}

export const profile = {
  fullName: 'Arnoldo Marcelo Sias Saucedo',
  displayName: 'Marcelo Sias',
  role: 'Software Engineer · AI Systems & Apple Platforms',
  location: 'Monterrey, MX',
  email: 'arnoldomarcelos@gmail.com',
  photo: '/marcelo.jpg',
  links: [
    { label: 'GitHub', href: 'https://github.com/MarceloSias05' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/marcelo-sias' },
  ] satisfies ExternalLink[],
}

export const experience: ExperienceEntry[] = [
  {
    company: 'IBM Mexico',
    logo: '/logos/ibm.png',
    role: 'Sales Engineer Intern — Security & AI Portfolio',
    dates: 'Jun 2025 – Jun 2026',
    location: 'Mexico',
    highlights: [
      'Designed and developed a clinical AI assistant with watsonx.ai for a healthcare client, integrating LLMs with real-time patient data to cut physician documentation time by up to 75% and information-omission incidents by 59%.',
      'Built agentic automation workflows in watsonx Orchestrate, letting enterprise clients streamline multi-step business processes without custom code, and demoed generative AI across the watsonx portfolio.',
      'Supported enterprise pre-sales cycles for B2B clients in healthcare, manufacturing and financial services — leading discovery sessions, technical demos and solution proposals.',
    ],
    stack: ['watsonx.ai', 'watsonx Orchestrate', 'LLMs', 'Pre-sales'],
  },
  {
    company: 'Tecnológico de Monterrey',
    logo: '/logos/tec.png',
    role: 'Data Engineer & Analytics Intern',
    dates: 'Mar 2026 – Present',
    location: 'Monterrey, MX',
    highlights: [
      'Analyzed a Salesforce Lightning report of 10K+ interview evaluations in Alteryx; identified a missing School field and designed a multi-phase fix with hierarchical mapping, complex SQL transformations and automated quality-control indicators.',
      'Built SQL workflows consolidating interview and CV assessment data, with automated validation flagging incomplete rubric submissions and scoring inconsistencies across 1,700+ applicants.',
      'Established an Alteryx cross-validation protocol reconciling report totals against Salesforce — 100% traceability for 1,700+ graduate admissions.',
    ],
    stack: ['Alteryx', 'SQL', 'Salesforce'],
  },
  {
    company: 'Government of Nuevo León',
    logo: '/logos/nl.svg',
    role: 'Co-Leader / Software Developer — Secretariat of Social Development',
    dates: 'Nov 2025 – Dec 2025',
    location: 'Nuevo León, MX',
    highlights: [
      'Co-led a 10-engineer team to build and ship a production web platform supporting 200+ government program users.',
      'Implemented the platform with the T3 Stack for end-to-end type safety, adding authentication and role-based access control via NextAuth + Prisma Adapter for secure admin operations.',
      'Established CI/CD pipelines with GitHub Actions, automated Prisma migrations and database seeding for deployment consistency.',
    ],
    stack: ['Next.js', 'TypeScript', 'tRPC', 'Prisma', 'TailwindCSS', 'GitHub Actions'],
  },
]

export const projects: ProjectEntry[] = [
  {
    name: 'LeRe',
    tagline: 'AI project planning assistant — a natural-language idea in, a versioned technical documentation suite out.',
    context: 'Banorte',
    dates: 'Feb 2026 – Jun 2026',
    link: { label: 'portfolio.cocoly.app', href: 'https://portfolio.cocoly.app' },
    image: {
      src: '/projects/lere.jpg',
      alt: 'LeRe documentation suite, showing the generated project portfolio',
      fit: 'screen',
    },
    stack: ['Python', 'Pydantic', 'LLM agents', 'OpenRouter', 'Gemini'],
    featured: true,
    highlights: [
      'Multi-agent system where each artifact — SRS, tech stack recommendation, milestones, architecture diagrams — is produced by a specialized LLM agent orchestrated over shared project context.',
      'Owned the Tech Stack agent end to end: a two-phase generation pipeline returning Pydantic-validated structured output, re-validating every user edit against a curated technology catalog before persisting.',
      'Designed the provider-agnostic AI layer (Strategy + Factory over an AiGenerationProvider protocol) to hot-swap OpenRouter and Gemini models without coupling domain logic, with artifact versioning via a unified output table.',
      'Engineered prompts for multilingual structured generation (es-MX / en), resolving language drift while preserving JSON keys and enums — eliminating malformed outputs that broke schema validation.',
    ],
  },
  {
    name: 'Mabe Flow',
    tagline: 'iOS HR assistant automating 10,000+ monthly employee interactions for a 26,000-person workforce.',
    context: 'Swift Change Makers · Enactus & Apple',
    dates: 'May 2026',
    award: '1st place · National (60 teams, 12 iOS Labs)',
    wide: true,
    image: {
      src: '/projects/mabe.jpg',
      alt: 'Mabe Flow feature overview: MIRA chatbot, smart requests, HR escalation, operations dashboard, TraceFlow status trail and push alerts',
      fit: 'showcase',
    },
    stack: [
      'SwiftUI',
      'SwiftData',
      'Swift Charts',
      'AVFoundation',
      'Foundation Models',
      'Core ML',
    ],
    highlights: [
      'On-device generative AI with Foundation Models and vector search via Ventura Kit — private by default, no round trips to a server.',
      'MIRA, the in-app assistant, answers policy questions around the clock and backs each reply with the real company document it came from.',
      'TraceFlow gives every request a live status trail and audit log, paired with an operations dashboard of indicators, predictions and delay alerts.',
      'Approvals stay human: escalations route to HR with full context instead of the assistant deciding on its own.',
      'National winner among 60 teams across 12 iOS Labs in Mexico.',
    ],
  },
  {
    name: 'Trionda',
    tagline: 'SwiftUI app for FIFA World Cup visitors with offline peer-to-peer messaging.',
    context: 'Changemakers Social Challenge · Enactus & Apple',
    dates: 'Nov 2025',
    award: '1st place · Regional — advanced to National Finals',
    image: {
      src: '/projects/trionda.jpg',
      alt: 'Trionda on two iPhones: World Cup stadium list and match detail',
      fit: 'device',
    },
    stack: ['SwiftUI', 'SwiftData', 'MultipeerConnectivity', 'MVVM'],
    highlights: [
      'Offline peer-to-peer messaging via MultipeerConnectivity — built for stadium crowds where networks fail.',
      'Architected with MVVM and SwiftData for modular UI and local persistence.',
    ],
  },
  {
    name: 'Eco',
    tagline: 'Human-centered AI for mental health — connecting digital habits with emotional well-being.',
    context: 'Swift Change Makers · local stage',
    dates: 'Apr 2026',
    award: '1st place · Local stage — earned the spot at Nationals',
    image: {
      src: '/projects/eco.jpg',
      alt: 'Eco pattern view charting emotional state against daily habits',
      fit: 'device',
    },
    stack: ['SwiftUI', 'CoreML', 'On-device AI'],
    highlights: [
      'Goes beyond logging emotions: connects the dots between digital habits (sleep patterns, screen time) and emotional well-being.',
      'Personalizes the experience from onboarding with a predictive model — 100% private and offline via CoreML.',
    ],
  },
]

export const leadership: ExperienceEntry[] = [
  {
    company: 'C.S. Student Association (SEITC), Tecnológico de Monterrey',
    logo: '/logos/seitc.png',
    role: 'Vice President',
    dates: 'Aug 2025 – Jun 2026',
    location: 'Monterrey, MX',
    highlights: [
      'Led the industry partnership strategy for a 2,000+ student CS community — securing relationships with Bloomberg, Uber, Waymo, Capital One, IBM and Duolingo, among others.',
      'Negotiated a sponsored hackathon with Capital One and the Congress of Technology, managing end-to-end logistics from partner alignment to execution for 350+ students.',
      'SEITC was named Sociedad Sobresaliente at Orgullo CSE — the highest recognition for a student association at Tec — closing the board’s term.',
    ],
    photo: {
      src: '/projects/seitc-award.jpg',
      alt: 'Orgullo CSE trophy and innovation certificate awarded to SEITC',
      caption: 'Orgullo CSE · Sociedad Sobresaliente',
    },
  },
  {
    company: 'C.S. Student Association (SEITC), Tecnológico de Monterrey',
    logo: '/logos/seitc.png',
    role: 'Project Coordinator',
    dates: 'Aug 2024 – Jul 2025',
    location: 'Monterrey, MX',
    highlights: [
      'Oversaw planning and execution of internal initiatives to improve the student experience, coordinating events and managing logistics for workshops across the CS community.',
    ],
  },
]

export type CertificationEntry = {
  name: string
  issuer: string
  date: string
  kind: 'certification' | 'award'
}

export const certifications: CertificationEntry[] = [
  {
    name: 'Machine Learning con Python',
    issuer: 'Data Science Club at Tec',
    date: 'Aug 2024',
    kind: 'certification',
  },
  {
    name: 'Manejo de Bases de Datos',
    issuer: 'Data Science Club at Tec',
    date: 'Aug 2024',
    kind: 'certification',
  },
  {
    name: 'Premio FRISA',
    issuer: 'FRISA — social entrepreneurship',
    date: 'May 2024',
    kind: 'award',
  },
]

export const skills: SkillGroup[] = [
  {
    label: 'programming',
    items: [
      'Swift', 'SwiftUI', 'Kotlin', 'Python', 'TypeScript', 'JavaScript',
      'Node / Next.js', 'React', 'T3 Stack', 'MySQL', 'PostgreSQL', 'Prisma ORM',
    ],
  },
  {
    label: 'ai_and_data',
    items: [
      'LLM agent orchestration', 'Prompt engineering', 'Structured output (Pydantic)',
      'RAG & vector databases', 'watsonx.ai / Orchestrate', 'On-device Foundation Models',
      'Alteryx', 'SQL',
    ],
  },
  {
    label: 'tools',
    items: ['Git', 'GitHub Actions', 'Docker'],
  },
  {
    label: 'spoken',
    items: ['Spanish (native)', 'English (C1 · IELTS)', 'French (B2 · DELF)'],
  },
]

export const education: EducationEntry[] = [
  {
    school: 'Tecnológico de Monterrey, Campus Monterrey',
    logo: '/logos/tec.png',
    program: 'B.S. in Computer Science and Technology',
    dates: 'Expected graduation · Winter 2027',
    location: 'Monterrey, MX',
    detail: 'GPA 90/100',
  },
  {
    school: 'Apple Developer Academy',
    logo: '/logos/federico.png',
    program: 'Università degli Studi di Napoli Federico II',
    dates: 'Sept 2026 – Jun 2027',
    location: 'Naples, IT',
    detail: 'Upcoming',
  },
]
