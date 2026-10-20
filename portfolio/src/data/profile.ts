import { tx, type Text } from '../i18n'

export type ExternalLink = {
  label: Text
  href: string
}

export type ExperienceEntry = {
  company: string
  /** Partners or parent organization, shown under the company name. */
  org?: Text
  role: Text
  dates: Text
  location: Text
  highlights: Text[]
  stack?: string[]
  logo?: string
  link?: ExternalLink
  photo?: { src: string; alt: Text; caption: Text }
}

export type ProjectEntry = {
  name: string
  tagline: Text
  context: Text
  role?: Text
  dates: Text
  award?: Text
  link?: ExternalLink
  stack: string[]
  highlights: Text[]
  /** Spans the full grid row with the media stacked above the text. */
  wide?: boolean
  /** Replaces the still image with a player that starts once scrolled into view. */
  video?: {
    id: string
    label: Text
    poster: string
  }
  /** Drawn artwork instead of a screenshot. */
  art?: 'ecg'
  image?: {
    src: string
    alt: Text
    /**
     * 'device' preserves a full phone mockup,
     * 'showcase' runs the image full-bleed across the top of a wide card.
     */
    fit: 'device' | 'showcase'
  }
}

export type SkillGroup = {
  label: Text
  items: string[]
}

export type EducationEntry = {
  school: string
  program: Text
  dates: Text
  location: Text
  detail?: Text
  logo?: string
}

export type CertificationEntry = {
  name: string
  issuer: string
  date: Text
  kind: 'certification' | 'award'
}

export type Stat = {
  /** Counted up from zero when it scrolls into view. */
  to?: number
  /** Shown as-is when the value isn't a plain number. */
  text?: Text
  prefix?: string
  suffix?: Text
  label: Text
}

export type CercaStep = {
  image: string
  alt: Text
  title: Text
  body: Text
}

export const profile = {
  fullName: 'Arnoldo Marcelo Sias Saucedo',
  displayName: 'Marcelo Sias',
  location: tx('Naples, IT · Monterrey, MX', 'Nápoles, IT · Monterrey, MX'),
  email: 'arnoldomarcelos@gmail.com',
  photo: '/marcelo.jpg',
  resume: '/Marcelo_Sias_Resume.pdf',
  links: [
    { label: tx('GitHub', 'GitHub'), href: 'https://github.com/MarceloSias05' },
    { label: tx('LinkedIn', 'LinkedIn'), href: 'https://linkedin.com/in/marcelo-sias' },
  ] satisfies ExternalLink[],
}

export const stats: Stat[] = [
  {
    to: 3,
    prefix: '~',
    suffix: tx(' min', ' min'),
    label: tx(
      'To build the graduate-admissions report at Tec — down from ~2 weeks of manual Excel work.',
      'Para generar el reporte de admisiones de posgrado en el Tec — antes, ~2 semanas de Excel manual.',
    ),
  },
  {
    text: tx('1st', '1.er'),
    label: tx(
      'Place nationally among 60 teams at Swift Change Makers, with Mabe Flow.',
      'Lugar nacional entre 60 equipos en Swift Change Makers, con Mabe Flow.',
    ),
  },
  {
    to: 88,
    suffix: tx('%', '%'),
    label: tx(
      'Task success in LeRe user testing, with 92% satisfaction.',
      'De tareas completadas en las pruebas de usuario de LeRe, con 92% de satisfacción.',
    ),
  },
  {
    to: 2000,
    suffix: tx('+', '+'),
    label: tx(
      'Students in the CS community whose partnership program I built.',
      'Estudiantes en la comunidad de CS cuyo programa de alianzas construí.',
    ),
  },
]

export const cerca = {
  tagline: tx(
    'A native iOS app that keeps you close to the everyday lives of the people you love.',
    'Una app nativa de iOS para no perderte la vida diaria de tus seres queridos.',
  ),
  intro: tx(
    'My pitch was selected for Apple and JPMorgan Chase’s 12-week “Startup to 1000” accelerator, and I lead the team building it.',
    'Mi pitch fue seleccionado para “Startup to 1000”, la aceleradora de 12 semanas de Apple y JPMorgan Chase, y lidero al equipo que la construye.',
  ),
  role: tx('Team Lead', 'Team Lead'),
  program: tx(
    'Everyone Can Code + Create Chicago · City of Chicago, Apple & JPMorgan Chase',
    'Everyone Can Code + Create Chicago · City of Chicago, Apple y JPMorgan Chase',
  ),
  dates: tx('Sept 2026 – Dec 2026', 'Sept 2026 – Dic 2026'),
  profileLink: 'https://www.eccchicago.org/2026-startup-to-1000.html#arnoldo',
  pitch: {
    id: 'w32D_Z2Fxa8',
    label: tx('Play the week-2 pitch', 'Ver el pitch de la semana 2'),
    poster: '/projects/cerca/pitch.jpg',
  },
  steps: [
    {
      image: '/projects/cerca/thread.jpg',
      alt: tx(
        'Cerca thread with Mom: her latest moment, the time in Monterrey and Naples, and a thread to pull',
        'Hilo de Cerca con Mamá: su último momento, la hora en Monterrey y Nápoles, y un hilo para jalar',
      ),
      title: tx('A thread between two places.', 'Un hilo entre dos lugares.'),
      body: tx(
        'Each person you love has a thread: their latest moment, both local times and the distance between you. Pull it to tell them something.',
        'Cada ser querido tiene su hilo: su último momento, la hora en cada ciudad y la distancia entre ustedes. Jálalo para contarle algo.',
      ),
    },
    {
      image: '/projects/cerca/capture.jpg',
      alt: tx('Cerca camera capturing a pizza for Mom', 'Cámara de Cerca capturando una pizza para Mamá'),
      title: tx('Share the small things.', 'Comparte lo pequeño.'),
      body: tx(
        'A photo or a letter, sent the moment it happens — a pizza in Naples, rain back home.',
        'Una foto o una carta, en el momento en que pasa: una pizza en Nápoles, la lluvia en casa.',
      ),
    },
    {
      image: '/projects/cerca/feel.jpg',
      alt: tx(
        'A moment from Mom in Monterrey with a 24-second voice note',
        'Un momento de Mamá en Monterrey con una nota de voz de 24 segundos',
      ),
      title: tx('Feel it, not just see it.', 'Siéntelo, no solo lo veas.'),
      body: tx(
        'Moments arrive with a voice note. Press and hold to listen and feel them.',
        'Los momentos llegan con una nota de voz. Mantén presionado para escucharla y sentirla.',
      ),
    },
    {
      image: '/projects/cerca/memories.jpg',
      alt: tx(
        'Memories on a map, linking Monterrey and Naples',
        'Recuerdos en un mapa, uniendo Monterrey y Nápoles',
      ),
      title: tx('Every moment, kept.', 'Cada momento, guardado.'),
      body: tx(
        'Your shared memories by time, calendar or map — every moment between Monterrey and Naples.',
        'Sus recuerdos compartidos por tiempo, calendario o mapa: cada momento entre Monterrey y Nápoles.',
      ),
    },
  ] satisfies CercaStep[],
}

export const experience: ExperienceEntry[] = [
  {
    company: 'IBM Mexico',
    logo: '/logos/ibm.png',
    role: tx(
      'Technical Sales Intern — Security & Artificial Intelligence Portfolio',
      'Technical Sales Intern — Portafolio de Seguridad e Inteligencia Artificial',
    ),
    dates: tx('Jun 2025 – Jun 2026', 'Jun 2025 – Jun 2026'),
    location: tx('Mexico', 'México'),
    highlights: [
      tx(
        'Led 3 discovery sessions and live demos for B2B prospects in healthcare, manufacturing and finance, scoping watsonx proposals.',
        'Dirigí 3 sesiones de discovery y demos en vivo para prospectos B2B de salud, manufactura y finanzas, definiendo propuestas de watsonx.',
      ),
      tx(
        'Designed a clinical AI assistant with watsonx.ai integrating LLMs with real-time patient data, projected to cut physician documentation time by up to 75% and information-omission incidents by 59%.',
        'Diseñé un asistente clínico con watsonx.ai que integra LLMs con datos de pacientes en tiempo real; se proyectó una reducción de hasta 75% en el tiempo de documentación médica y de 59% en omisiones de información.',
      ),
      tx(
        'Built no-code agentic workflows in watsonx Orchestrate for client demos, and completed hands-on IBM labs provisioning infrastructure with Terraform on IBM Cloud and Red Hat OpenShift.',
        'Construí flujos agénticos no-code en watsonx Orchestrate para demos con clientes, y completé labs prácticos de IBM aprovisionando infraestructura con Terraform en IBM Cloud y Red Hat OpenShift.',
      ),
    ],
    stack: ['watsonx.ai', 'watsonx Orchestrate', 'LLMs', 'IBM Cloud', 'Red Hat OpenShift', 'Terraform'],
  },
  {
    company: 'Everyone Can Code + Create Chicago',
    org: tx('City of Chicago, Apple & JPMorgan Chase', 'City of Chicago, Apple y JPMorgan Chase'),
    role: tx('App Accelerator — Team Lead, Cerca', 'App Accelerator — Team Lead, Cerca'),
    dates: tx('Sept 2026 – Dec 2026', 'Sept 2026 – Dic 2026'),
    location: tx('Chicago, IL (Remote)', 'Chicago, IL (Remoto)'),
    highlights: [
      tx(
        'Selected for Apple and JPMorgan Chase’s 12-week “Startup to 1000” accelerator; shipping App 1.0 and 2.0 to the App Store across three Demo Days with a pitch deck and marketing funnel, targeting 1,000 users at launch.',
        'Parte de “Startup to 1000”, la aceleradora de 12 semanas de Apple y JPMorgan Chase; lanzando App 1.0 y 2.0 en el App Store a lo largo de tres Demo Days, con pitch deck y embudo de marketing, con la meta de 1,000 usuarios en el lanzamiento.',
      ),
      tx(
        'My pitch for Cerca was chosen among the top six ideas; teams were formed through a matching process and I lead the one building it.',
        'Mi pitch de Cerca quedó entre las seis mejores ideas; los equipos se formaron con un proceso de matching y lidero el que la construye.',
      ),
    ],
    stack: ['Swift', 'SwiftUI', 'Product', 'Go-to-market'],
    link: {
      label: tx('Accelerator profile', 'Perfil en la aceleradora'),
      href: 'https://www.eccchicago.org/2026-startup-to-1000.html#arnoldo',
    },
  },
  {
    company: 'Tecnológico de Monterrey',
    logo: '/logos/tec.png',
    role: tx('Data Engineer & Analytics Intern', 'Data Engineer & Analytics Intern'),
    dates: tx('May 2026 – Present', 'May 2026 – Actual'),
    location: tx('Monterrey, MX', 'Monterrey, MX'),
    highlights: [
      tx(
        'Cut graduate-admissions report preparation from ~2 weeks of manual Excel work to a ~3-minute automated run by building Alteryx, pandas and SQL pipelines that consolidate 1M+ SharePoint applicant records by program, modality and admission route.',
        'Reduje la preparación del reporte de admisiones de posgrado de ~2 semanas de Excel manual a una ejecución automática de ~3 minutos, con pipelines en Alteryx, pandas y SQL que consolidan más de 1M de registros de SharePoint por programa, modalidad y vía de admisión.',
      ),
      tx(
        'Automated validation that scores every applicant against their admission-route thresholds and flags each non-compliance with 100% traceability, used by admissions leadership across every Tec campus in Mexico.',
        'Automaticé una validación que evalúa a cada aspirante contra los umbrales de su vía de admisión y marca cada incumplimiento con 100% de trazabilidad; la usa la dirección de admisiones en todos los campus del Tec en México.',
      ),
    ],
    stack: ['Alteryx', 'pandas', 'SQL', 'SharePoint'],
  },
  {
    company: 'Government of Nuevo León',
    org: tx('Secretariat of Social Development', 'Secretaría de Desarrollo Social'),
    logo: '/logos/nl.svg',
    role: tx('Co-Leader / Software Developer', 'Co-Leader / Software Developer'),
    dates: tx('Nov 2025 – Dec 2025', 'Nov 2025 – Dic 2025'),
    location: tx('Monterrey, MX', 'Monterrey, MX'),
    highlights: [
      tx(
        'Co-led a 10-engineer team that replaced Excel- and paper-based processes with a production web platform for 200+ program users.',
        'Co-lideré un equipo de 10 ingenieros que reemplazó procesos en Excel y papel con una plataforma web en producción para más de 200 usuarios del programa.',
      ),
      tx(
        'Built it on the T3 Stack (Next.js, TypeScript, tRPC, Prisma, TailwindCSS) with role-based access control via NextAuth, and automated delivery with GitHub Actions CI/CD and Prisma migrations.',
        'La construí con el T3 Stack (Next.js, TypeScript, tRPC, Prisma, TailwindCSS) con control de acceso por roles vía NextAuth, y automaticé la entrega con CI/CD en GitHub Actions y migraciones de Prisma.',
      ),
    ],
    stack: ['Next.js', 'TypeScript', 'tRPC', 'Prisma', 'TailwindCSS', 'NextAuth', 'GitHub Actions'],
  },
]

export const projects: ProjectEntry[] = [
  {
    name: 'LeRe',
    tagline: tx(
      'AI project planning assistant — a project idea in, Banorte-compliant requirements, tech stack, milestones and architecture diagrams out, in minutes.',
      'Asistente de planeación de proyectos con IA — entra una idea, salen requerimientos, tech stack, milestones y diagramas de arquitectura alineados a Banorte, en minutos.',
    ),
    context: tx('Banorte', 'Banorte'),
    role: tx('Software Engineer', 'Software Engineer'),
    dates: tx('Feb 2026 – Jun 2026', 'Feb 2026 – Jun 2026'),
    link: { label: tx('portfolio.cocoly.app', 'portfolio.cocoly.app'), href: 'https://portfolio.cocoly.app' },
    video: {
      id: 'CkEhiust5QM',
      label: tx('Play the LeRe walkthrough', 'Ver el recorrido de LeRe'),
      poster: '/projects/lere.jpg',
    },
    stack: ['Python', 'FastAPI', 'LangGraph', 'Pydantic', 'React', 'Docker', 'Google Cloud', 'PostgreSQL'],
    wide: true,
    highlights: [
      tx(
        'Built a LangGraph + FastAPI multi-agent platform; 88% task success and 92% satisfaction in user testing.',
        'Construí una plataforma multiagente con LangGraph + FastAPI; 88% de tareas completadas y 92% de satisfacción en pruebas de usuario.',
      ),
      tx(
        'Owned the Tech Stack agent end to end: two-phase generation with Pydantic-validated structured output and catalog-backed validation that rejects non-approved technologies and proposes valid alternatives.',
        'Fui responsable del agente de Tech Stack de principio a fin: generación en dos fases con salida estructurada validada con Pydantic y validación contra catálogo que rechaza tecnologías no aprobadas y propone alternativas válidas.',
      ),
      tx(
        'Designed a provider-agnostic AI layer (Strategy + Factory) to hot-swap OpenRouter and Gemini models, streaming progress over Server-Sent Events; containerized the backend and React/nginx frontend with Docker and deployed on Google Cloud with PostgreSQL.',
        'Diseñé una capa de IA agnóstica al proveedor (Strategy + Factory) para alternar modelos de OpenRouter y Gemini en caliente, con progreso en streaming vía Server-Sent Events; contenericé el backend y el frontend React/nginx con Docker y lo desplegué en Google Cloud con PostgreSQL.',
      ),
    ],
  },
  {
    name: 'CorAI',
    tagline: tx(
      'AI-powered wearable ECG for early atrial fibrillation detection.',
      'ECG wearable con IA para la detección temprana de fibrilación auricular.',
    ),
    context: tx(
      'Prometheus-Vulcanus Research Group · Tec de Monterrey & Etalonet',
      'Grupo de investigación Prometheus-Vulcanus · Tec de Monterrey y Etalonet',
    ),
    role: tx('iOS Developer & Researcher · team of 9', 'iOS Developer & Researcher · equipo de 9'),
    dates: tx('Dec 2025 – Jun 2026', 'Dic 2025 – Jun 2026'),
    art: 'ecg',
    wide: true,
    link: {
      label: tx('Read the LinkedIn post', 'Leer el post en LinkedIn'),
      href: 'https://www.linkedin.com/posts/marcelo-sias_corai-poster-paper-ugcPost-7505513517349892097-ulB9/',
    },
    stack: ['Swift', 'SwiftUI', 'MVVM', 'CoreBluetooth', 'WebSocket', 'FastAPI', 'JWT'],
    highlights: [
      tx(
        'Led the native iOS client: 120 Hz CoreBluetooth streaming with WebSocket fallback to FastAPI, JWT-secured roles, and a synthetic ECG generator for hardware-free testing.',
        'Lideré el cliente nativo de iOS: streaming por CoreBluetooth a 120 Hz con respaldo por WebSocket hacia FastAPI, roles protegidos con JWT y un generador de ECG sintético para probar sin hardware.',
      ),
      tx(
        'The team’s Random Forest classifier over 39 features reached 97.4% accuracy on the AFDB clinical benchmark.',
        'El clasificador Random Forest del equipo, con 39 features, alcanzó 97.4% de precisión en el benchmark clínico AFDB.',
      ),
      tx(
        'Built around a textile shirt with ECG electrodes at an estimated USD 50–80, versus USD 250–500 for commercial wearables.',
        'Basado en una camiseta textil con electrodos de ECG, con un costo estimado de 50–80 USD frente a 250–500 USD de los wearables comerciales.',
      ),
    ],
  },
  {
    name: 'Mabe Flow',
    tagline: tx(
      'SwiftUI HR assistant with on-device Foundation Models automating 10,000+ monthly interactions for Mabe’s 26,000 employees.',
      'Asistente de RH en SwiftUI con Foundation Models en el dispositivo, automatizando más de 10,000 interacciones mensuales para los 26,000 empleados de Mabe.',
    ),
    context: tx('Swift Change Makers · Enactus & Apple', 'Swift Change Makers · Enactus y Apple'),
    dates: tx('May 2026', 'May 2026'),
    award: tx('1st place · National (60 teams, 12 iOS Labs)', '1.er lugar · Nacional (60 equipos, 12 iOS Labs)'),
    wide: true,
    image: {
      src: '/projects/mabe.jpg',
      alt: tx(
        'Mabe Flow feature overview: MIRA chatbot, smart requests, HR escalation, operations dashboard, TraceFlow status trail and push alerts',
        'Funciones de Mabe Flow: chatbot MIRA, solicitudes inteligentes, escalamiento a RH, dashboard de operaciones, trazabilidad TraceFlow y alertas push',
      ),
      fit: 'showcase',
    },
    stack: ['SwiftUI', 'SwiftData', 'Swift Charts', 'AVFoundation', 'Foundation Models', 'Core ML'],
    highlights: [
      tx(
        'On-device generative AI with Foundation Models and vector search via Ventura Kit — private by default, no round trips to a server.',
        'IA generativa en el dispositivo con Foundation Models y búsqueda vectorial con Ventura Kit — privada por defecto, sin viajes a un servidor.',
      ),
      tx(
        'MIRA, the in-app assistant, answers policy questions around the clock and backs each reply with the real company document it came from.',
        'MIRA, el asistente de la app, responde dudas de políticas a cualquier hora y respalda cada respuesta con el documento real de la empresa.',
      ),
      tx(
        'TraceFlow gives every request a live status trail and audit log, paired with an operations dashboard of indicators, predictions and delay alerts.',
        'TraceFlow da a cada solicitud un seguimiento en vivo y bitácora de auditoría, junto a un dashboard de operaciones con indicadores, predicciones y alertas de retraso.',
      ),
      tx(
        'Approvals stay human: escalations route to HR with full context instead of the assistant deciding on its own.',
        'Las aprobaciones siguen siendo humanas: los escalamientos llegan a RH con todo el contexto, en lugar de que el asistente decida.',
      ),
    ],
  },
  {
    name: 'Trionda',
    tagline: tx(
      'SwiftUI app for FIFA World Cup visitors with offline peer-to-peer messaging.',
      'App en SwiftUI para visitantes del Mundial de la FIFA con mensajería peer-to-peer sin conexión.',
    ),
    context: tx('Changemakers Social Challenge · Enactus & Apple', 'Changemakers Social Challenge · Enactus y Apple'),
    dates: tx('Nov 2025', 'Nov 2025'),
    award: tx('1st place · Regional — advanced to National Finals', '1.er lugar · Regional — pase a la final nacional'),
    image: {
      src: '/projects/trionda.jpg',
      alt: tx(
        'Trionda on two iPhones: World Cup stadium list and match detail',
        'Trionda en dos iPhone: lista de estadios del Mundial y detalle de partido',
      ),
      fit: 'device',
    },
    stack: ['SwiftUI', 'SwiftData', 'MultipeerConnectivity', 'MVVM'],
    highlights: [
      tx(
        'Offline peer-to-peer messaging via MultipeerConnectivity — built for stadium crowds where networks fail.',
        'Mensajería peer-to-peer sin conexión con MultipeerConnectivity — pensada para estadios llenos donde la red falla.',
      ),
      tx(
        'Architected with MVVM and SwiftData for modular UI and local persistence.',
        'Arquitectura MVVM con SwiftData para una UI modular y persistencia local.',
      ),
    ],
  },
  {
    name: 'Eco',
    tagline: tx(
      'Human-centered AI for mental health — connecting digital habits with emotional well-being.',
      'IA centrada en las personas para la salud mental — conecta los hábitos digitales con el bienestar emocional.',
    ),
    context: tx('Swift Change Makers · local stage', 'Swift Change Makers · etapa local'),
    dates: tx('Apr 2026', 'Abr 2026'),
    award: tx('1st place · Local stage — earned the spot at Nationals', '1.er lugar · Etapa local — pase al Nacional'),
    image: {
      src: '/projects/eco.jpg',
      alt: tx(
        'Eco pattern view charting emotional state against daily habits',
        'Vista de patrones de Eco que relaciona el estado emocional con los hábitos diarios',
      ),
      fit: 'device',
    },
    stack: ['SwiftUI', 'Core ML', 'On-device AI'],
    highlights: [
      tx(
        'Goes beyond logging emotions: connects the dots between digital habits (sleep patterns, screen time) and emotional well-being.',
        'Va más allá de registrar emociones: conecta los hábitos digitales (sueño, tiempo en pantalla) con el bienestar emocional.',
      ),
      tx(
        'Personalizes the experience from onboarding with a predictive model — 100% private and offline via Core ML.',
        'Personaliza la experiencia desde el onboarding con un modelo predictivo — 100% privado y sin conexión con Core ML.',
      ),
    ],
  },
]

export const leadership: ExperienceEntry[] = [
  {
    company: 'C.S. Student Association (SEITC)',
    org: tx('Tecnológico de Monterrey', 'Tecnológico de Monterrey'),
    logo: '/logos/seitc.png',
    role: tx('Vice President', 'Vice President'),
    dates: tx('Aug 2025 – Jun 2026', 'Ago 2025 – Jun 2026'),
    location: tx('Monterrey, MX', 'Monterrey, MX'),
    highlights: [
      tx(
        'Built the partnership program for a 2,000+ student CS community — Bloomberg, Uber, Waymo, Capital One, IBM, Duolingo and EY.',
        'Construí el programa de alianzas para una comunidad de CS de más de 2,000 estudiantes — Bloomberg, Uber, Waymo, Capital One, IBM, Duolingo y EY.',
      ),
      tx(
        'Ran a Capital One–sponsored hackathon for 350+ students, from partner alignment to execution.',
        'Organicé un hackathon patrocinado por Capital One para más de 350 estudiantes, desde la alineación con el patrocinador hasta la ejecución.',
      ),
      tx(
        'SEITC was named Sociedad Sobresaliente at Orgullo CSE — the highest recognition for a student association at Tec — closing the board’s term.',
        'La SEITC fue nombrada Sociedad Sobresaliente en Orgullo CSE — el máximo reconocimiento para una sociedad de alumnos en el Tec — al cierre de la gestión.',
      ),
    ],
    photo: {
      src: '/projects/seitc-award.jpg',
      alt: tx(
        'Orgullo CSE trophy and innovation certificate awarded to SEITC',
        'Trofeo Orgullo CSE y certificado de innovación otorgados a la SEITC',
      ),
      caption: tx('Orgullo CSE · Sociedad Sobresaliente', 'Orgullo CSE · Sociedad Sobresaliente'),
    },
  },
  {
    company: 'C.S. Student Association (SEITC)',
    org: tx('Tecnológico de Monterrey', 'Tecnológico de Monterrey'),
    logo: '/logos/seitc.png',
    role: tx('Project Coordinator', 'Project Coordinator'),
    dates: tx('Aug 2024 – Jul 2025', 'Ago 2024 – Jul 2025'),
    location: tx('Monterrey, MX', 'Monterrey, MX'),
    highlights: [
      tx(
        'Oversaw planning and execution of internal initiatives to improve the student experience, coordinating events and managing logistics for workshops across the CS community.',
        'Coordiné la planeación y ejecución de iniciativas internas para mejorar la experiencia estudiantil, organizando eventos y la logística de talleres en la comunidad de CS.',
      ),
    ],
  },
]

export const skills: SkillGroup[] = [
  {
    label: tx('Languages', 'Lenguajes'),
    items: ['Python', 'TypeScript', 'JavaScript', 'Swift', 'Kotlin', 'C++', 'SQL', 'MATLAB', 'Assembly'],
  },
  {
    label: tx('Apple platforms', 'Plataformas Apple'),
    items: [
      'SwiftUI', 'SwiftData', 'Swift Charts', 'Core ML', 'Foundation Models',
      'CoreBluetooth', 'MultipeerConnectivity', 'AVFoundation',
    ],
  },
  {
    label: tx('AI', 'IA'),
    items: [
      'Multi-agent systems', 'RAG', 'Structured outputs (Pydantic)', 'Prompt engineering',
      'watsonx.ai / Orchestrate', 'OpenRouter', 'Gemini',
    ],
  },
  {
    label: tx('Frameworks & data', 'Frameworks y datos'),
    items: [
      'FastAPI', 'LangChain', 'LangGraph', 'React', 'Next.js', 'T3 Stack', 'Prisma',
      'PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'pandas', 'Alteryx',
    ],
  },
  {
    label: tx('Cloud & DevOps', 'Cloud y DevOps'),
    items: [
      'Google Cloud (GCP)', 'IBM Cloud', 'Red Hat OpenShift', 'Kubernetes (fundamentals)',
      'Terraform', 'Docker', 'GitHub Actions',
    ],
  },
  {
    label: tx('Spoken', 'Idiomas'),
    items: ['Spanish (native)', 'English (C1 · IELTS)', 'French (B2 · DELF)'],
  },
]

export const education: EducationEntry[] = [
  {
    school: 'Tecnológico de Monterrey',
    logo: '/logos/tec.png',
    program: tx('B.S. in Computer Science and Technology', 'Ingeniería en Tecnologías Computacionales'),
    dates: tx('Expected graduation · Winter 2027', 'Graduación esperada · Invierno 2027'),
    location: tx('Monterrey, MX', 'Monterrey, MX'),
    detail: tx('GPA 90/100', 'Promedio 90/100'),
  },
  {
    school: 'Apple Developer Academy',
    logo: '/logos/federico.png',
    program: tx('Università degli Studi di Napoli Federico II', 'Università degli Studi di Napoli Federico II'),
    dates: tx('Sept 2026 – Jun 2027', 'Sept 2026 – Jun 2027'),
    location: tx('Naples, IT', 'Nápoles, IT'),
    detail: tx('Current', 'Actual'),
  },
]

export const certifications: CertificationEntry[] = [
  {
    name: 'Machine Learning con Python',
    issuer: 'Data Science Club at Tec',
    date: tx('Aug 2024', 'Ago 2024'),
    kind: 'certification',
  },
  {
    name: 'Manejo de Bases de Datos',
    issuer: 'Data Science Club at Tec',
    date: tx('Aug 2024', 'Ago 2024'),
    kind: 'certification',
  },
  {
    name: 'Premio FRISA',
    issuer: 'FRISA — social entrepreneurship',
    date: tx('May 2024', 'May 2024'),
    kind: 'award',
  },
]
