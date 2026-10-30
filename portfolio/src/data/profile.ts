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
  /** A strip of photos that open full screen on click. */
  photos?: { src: string; caption: Text; video?: string }[]
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
     * 'showcase' runs the whole image, uncropped, across the top of a wide card.
     */
    fit: 'device' | 'showcase'
  }
  /** iPhone screens: three on the card, all of them in a viewer that opens on click. */
  gallery?: {
    screens: { src: string; caption: Text }[]
    /** Indexes of the screens shown on the card, left to right. */
    cover: [number, number, number]
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
    'A 100% native iOS app that keeps students abroad — 7.5M worldwide — close to the everyday lives of the people they love.',
    'Una app 100% nativa de iOS para que quienes estudian en el extranjero — 7.5M en el mundo — no se pierdan la vida diaria de sus seres queridos.',
  ),
  intro: tx(
    'My pitch ranked #1 of 24 ideas in Apple and JPMorgan Chase’s 12-week “Startup to 1000” accelerator, and I lead the 4-person team building it.',
    'Mi pitch quedó en el #1 de 24 ideas en “Startup to 1000”, la aceleradora de 12 semanas de Apple y JPMorgan Chase, y lidero al equipo de 4 personas que la construye.',
  ),
  role: tx('Team Lead', 'Team Lead'),
  program: tx(
    'Everyone Can Code + Create Chicago · City of Chicago, Apple & JPMorgan Chase',
    'Everyone Can Code + Create Chicago · City of Chicago, Apple y JPMorgan Chase',
  ),
  dates: tx('Sept 2026 – Dec 2026', 'Sept 2026 – Dic 2026'),
  profileLink: 'https://www.eccchicago.org/2026-startup-to-1000.html#arnoldo',
  programLink: 'https://www.eccchicago.org/',
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
        'Projected up to 75% less physician documentation time and 59% fewer information-omission incidents by designing a clinical AI assistant on watsonx.ai that integrates LLMs with real-time patient data.',
        'Diseñé un asistente clínico en watsonx.ai que integra LLMs con datos de pacientes en tiempo real, con una reducción proyectada de hasta 75% en el tiempo de documentación médica y de 59% en omisiones de información.',
      ),
    ],
    stack: ['watsonx.ai', 'watsonx Orchestrate', 'LLMs'],
  },
  {
    company: 'Everyone Can Code + Create Chicago',
    logo: '/logos/ecc.jpg',
    org: tx('City of Chicago, Apple & JPMorgan Chase', 'City of Chicago, Apple y JPMorgan Chase'),
    role: tx('Team Lead & iOS Developer, App Accelerator', 'Team Lead & iOS Developer, App Accelerator'),
    dates: tx('Sept 2026 – Dec 2026', 'Sept 2026 – Dic 2026'),
    location: tx('Chicago, IL (Remote)', 'Chicago, IL (Remoto)'),
    highlights: [
      tx(
        'Pitched Cerca, a 100% native iOS app that keeps students abroad (7.5M worldwide) close to loved ones; ranked #1 of 24 ideas and now leading a 4-person team.',
        'Presenté Cerca, una app 100% nativa de iOS que mantiene a quienes estudian en el extranjero (7.5M en el mundo) cerca de sus seres queridos; quedó #1 de 24 ideas y hoy lidero un equipo de 4 personas.',
      ),
      tx(
        'Shipping Cerca 1.0 and 2.0 to the App Store across 3 Demo Days of the 12-week program, targeting 1,000 users.',
        'Lanzando Cerca 1.0 y 2.0 en el App Store a lo largo de 3 Demo Days del programa de 12 semanas, con la meta de 1,000 usuarios.',
      ),
    ],
    stack: ['Swift', 'SwiftUI'],
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
        'Cut graduate-admissions report preparation from ~2 weeks of manual Excel work to a ~3-minute automated run by building Python (pandas), SQL and Alteryx ETL pipelines over 1M+ applicant records.',
        'Reduje la preparación del reporte de admisiones de posgrado de ~2 semanas de Excel manual a una ejecución automática de ~3 minutos, con pipelines ETL en Python (pandas), SQL y Alteryx sobre más de 1M de registros de aspirantes.',
      ),
      tx(
        'Delivered 100% traceability of admission non-compliance across every Tec campus in Mexico by automating validation that scores each applicant against admission-route thresholds.',
        'Logré 100% de trazabilidad de los incumplimientos de admisión en todos los campus del Tec en México, automatizando una validación que evalúa a cada aspirante contra los umbrales de su vía de admisión.',
      ),
    ],
    stack: ['Python', 'pandas', 'SQL', 'Alteryx'],
  },
  {
    company: 'Government of Nuevo León',
    org: tx('Secretariat of Social Development', 'Secretaría de Desarrollo Social'),
    logo: '/logos/nl.svg',
    role: tx('Co-Lead Software Developer', 'Co-Lead Software Developer'),
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
    stack: ['Python', 'FastAPI', 'LangGraph', 'PostgreSQL', 'React', 'TypeScript', 'GCP'],
    wide: true,
    highlights: [
      tx(
        'Built a LangGraph + FastAPI multi-agent platform that fans out 4 parallel subagents to turn an idea into Banorte-compliant requirements, tech stack, milestones and diagrams; 88% task success and 92% satisfaction in user testing.',
        'Construí una plataforma multiagente con LangGraph + FastAPI que reparte el trabajo entre 4 subagentes en paralelo para convertir una idea en requerimientos, tech stack, milestones y diagramas alineados a Banorte; 88% de tareas completadas y 92% de satisfacción en pruebas de usuario.',
      ),
      tx(
        'Kept every recommendation within Banorte’s approved tech catalog by owning the Tech Stack agent (Pydantic structured output).',
        'Mantuve cada recomendación dentro del catálogo tecnológico aprobado por Banorte como responsable del agente de Tech Stack (salida estructurada con Pydantic).',
      ),
      tx(
        'Built a Strategy + Factory LLM layer to hot-swap OpenRouter and Gemini.',
        'Construí una capa de LLM con Strategy + Factory para alternar OpenRouter y Gemini en caliente.',
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
    award: tx('1st place · National (1st of 60 teams, 12 iOS Labs)', '1.er lugar · Nacional (1.º de 60 equipos, 12 iOS Labs)'),
    wide: true,
    image: {
      src: '/projects/mabe.jpg',
      alt: tx(
        'Mabe Flow feature overview: MIRA chatbot, smart requests, HR escalation, operations dashboard, TraceFlow status trail and push alerts',
        'Funciones de Mabe Flow: chatbot MIRA, solicitudes inteligentes, escalamiento a RH, dashboard de operaciones, trazabilidad TraceFlow y alertas push',
      ),
      fit: 'showcase',
    },
    stack: ['SwiftUI', 'SwiftData', 'Foundation Models', 'PDFKit', 'VecturaKit', 'NLContextualEmbedder', 'Core ML'],
    highlights: [
      tx(
        'Runs Apple Foundation Models 100% on-device with 21 tool-calling functions across employee, manager and HR roles — private by default, no round trips to a server.',
        'Ejecuta Apple Foundation Models 100% en el dispositivo con 21 funciones de tool calling para los roles de empleado, gerente y RH — privada por defecto, sin viajes a un servidor.',
      ),
      tx(
        'On-device RAG over HR policy PDFs (PDFKit, VecturaKit, NLContextualEmbedder) with source citations, plus a Core ML model that predicts request resolution time.',
        'RAG en el dispositivo sobre los PDFs de políticas de RH (PDFKit, VecturaKit, NLContextualEmbedder) con citas a la fuente, más un modelo de Core ML que predice el tiempo de resolución de cada solicitud.',
      ),
    ],
  },
  {
    name: 'Trionda',
    tagline: tx(
      'Offline SwiftUI app for FIFA World Cup visitors: group chat, location sharing, UWB finding and on-device itineraries.',
      'App en SwiftUI sin conexión para visitantes del Mundial de la FIFA: chat grupal, ubicación compartida, búsqueda por UWB e itinerarios en el dispositivo.',
    ),
    context: tx('Changemakers Social Challenge · Enactus & Apple', 'Changemakers Social Challenge · Enactus y Apple'),
    dates: tx('Nov 2025', 'Nov 2025'),
    award: tx('1st place · Regional — advanced to National Finals', '1.er lugar · Regional — pase a la final nacional'),
    gallery: {
      screens: [
        { src: '/projects/trionda/home.jpg', caption: tx('Home: host countries and upcoming matches.', 'Inicio: países sede y próximos partidos.') },
        { src: '/projects/trionda/match.jpg', caption: tx('Match detail, one tap to add it to Calendar.', 'Detalle del partido, a un toque de agregarlo al Calendario.') },
        { src: '/projects/trionda/country.jpg', caption: tx('Host country profiles on MapKit.', 'Perfiles de los países sede en MapKit.') },
        { src: '/projects/trionda/discover.jpg', caption: tx('Discover: places around the stadium city.', 'Descubrir: lugares en la ciudad sede.') },
        { src: '/projects/trionda/itinerary.jpg', caption: tx('An itinerary streamed from on-device Foundation Models.', 'Un itinerario generado en streaming con Foundation Models en el dispositivo.') },
        { src: '/projects/trionda/friends.jpg', caption: tx('Friends group: location, UWB and privacy without data.', 'Grupo de amigos: ubicación, UWB y privacidad sin datos móviles.') },
        { src: '/projects/trionda/group.jpg', caption: tx('Join an offline group by scanning an expiring QR.', 'Únete a un grupo sin conexión escaneando un QR con caducidad.') },
      ],
      cover: [0, 4, 6],
    },
    stack: ['SwiftUI', 'MultipeerConnectivity', 'NearbyInteraction', 'Foundation Models', 'Vision', 'Core ML'],
    highlights: [
      tx(
        'Reached National Finals with an offline app for FIFA World Cup visitors, built for stadium crowds where cellular networks fail.',
        'Llegó a la final nacional con una app sin conexión para visitantes del Mundial de la FIFA, pensada para estadios llenos donde la red celular falla.',
      ),
      tx(
        'MultipeerConnectivity group chat and location sharing over an encrypted MCSession, with groups joined by scanning an expiring QR code.',
        'Chat grupal y ubicación compartida con MultipeerConnectivity sobre un MCSession cifrado; a los grupos se entra escaneando un código QR con caducidad.',
      ),
      tx(
        'UWB finding with NearbyInteraction: peers exchange discovery tokens over the P2P channel and fall back to GPS when the device has no U1 chip.',
        'Búsqueda por UWB con NearbyInteraction: los dispositivos intercambian tokens de descubrimiento por el canal P2P y recurren a GPS si el equipo no tiene chip U1.',
      ),
      tx(
        'Foundation Models itineraries generated as @Generable structured output and streamed into the UI, plus a Vision + Core ML flag classifier on the live camera feed.',
        'Itinerarios con Foundation Models generados como salida estructurada @Generable y mostrados en streaming, más un clasificador de banderas con Vision + Core ML sobre la cámara en vivo.',
      ),
    ],
  },
  {
    name: 'Lūma',
    tagline: tx(
      'A mental health companion for iOS that connects your digital habits with your mood — entirely on your phone.',
      'Una app de acompañamiento en salud mental para iOS que conecta tus hábitos digitales con tu estado de ánimo, todo dentro de tu teléfono.',
    ),
    context: tx('Swift Change Makers · SwiftTec local stage', 'Swift Change Makers · etapa local SwiftTec'),
    role: tx('iOS Developer · intelligence & personalization · team of 3', 'iOS Developer · inteligencia y personalización · equipo de 3'),
    dates: tx('Apr 2026', 'Abr 2026'),
    award: tx('1st place · Local stage — earned the spot at Nationals', '1.er lugar · Etapa local — pase al Nacional'),
    gallery: {
      screens: [
        { src: '/projects/luma/hello.jpg', caption: tx('A welcome that asks for nothing.', 'Una bienvenida que no pide nada.') },
        { src: '/projects/luma/reasons.jpg', caption: tx('What brought you here — no wrong answers.', 'Qué te trajo aquí, sin respuestas incorrectas.') },
        { src: '/projects/luma/name.jpg', caption: tx('A nickname, your name, or nothing.', 'Un apodo, tu nombre o nada.') },
        { src: '/projects/luma/notify.jpg', caption: tx('Notifications only when they matter.', 'Notificaciones solo cuando valen la pena.') },
        { src: '/projects/luma/mood.jpg', caption: tx('A first check-in before you enter.', 'Un primer check-in antes de entrar.') },
        { src: '/projects/luma/home.jpg', caption: tx('Home: daily check-in and the patterns behind it.', 'Inicio: check-in diario y los patrones detrás.') },
        { src: '/projects/luma/diary.jpg', caption: tx('Your diary, day by day.', 'Tu diario, día a día.') },
        { src: '/projects/luma/patterns.jpg', caption: tx('Mood against sleep and screen time.', 'Ánimo frente a sueño y tiempo en pantalla.') },
      ],
      cover: [0, 5, 7],
    },
    link: {
      label: tx('Read the LinkedIn post', 'Leer el post en LinkedIn'),
      href: 'https://www.linkedin.com/posts/marcelo-sias_iosdev-swiftui-ondeviceai-ugcPost-7507331620996247552-1oSR/',
    },
    stack: ['SwiftUI', 'Foundation Models', 'SwiftData', 'ActivityKit', 'WidgetKit', 'CryptoKit'],
    highlights: [
      tx(
        'Goes beyond “how do you feel today?”: pairs sleep and screen time with mood check-ins to surface patterns, with nothing leaving the device.',
        'Va más allá de “¿cómo te sientes hoy?”: cruza sueño y tiempo en pantalla con check-ins de ánimo para mostrar patrones, sin que nada salga del dispositivo.',
      ),
      tx(
        'Owned the intelligence and personalization layer: an empathetic greeting generated 100% on-device with Apple Foundation Models (@Generable structured output, LanguageModelSession) and zero cloud calls.',
        'Fui responsable de la capa de inteligencia y personalización: un saludo empático generado 100% en el dispositivo con Apple Foundation Models (salida estructurada con @Generable, LanguageModelSession) y cero llamadas a la nube.',
      ),
      tx(
        'Onboarding and user state on SwiftData; wellness streaks as Live Activities and widgets (ActivityKit, WidgetKit); a Silent Support Circle that asks for help without words, with signals encrypted via CryptoKit.',
        'Onboarding y estado del usuario con SwiftData; rachas de bienestar como Live Activities y widgets (ActivityKit, WidgetKit); un Círculo de Apoyo Silencioso para pedir ayuda sin palabras, con señales cifradas con CryptoKit.',
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
        'Built the industry partnership program for a 2,000+ student CS community — Bloomberg, Uber, Waymo, Capital One, IBM, Duolingo, EY, Softtek and Hey Banco.',
        'Construí el programa de alianzas con la industria para una comunidad de CS de más de 2,000 estudiantes — Bloomberg, Uber, Waymo, Capital One, IBM, Duolingo, EY, Softtek y Hey Banco.',
      ),
      tx(
        'Opened recruiting channels via tech talks with Duolingo, Uber and EY, workshops, a 3-day Bloomberg campus visit and a Softtek HQ visit.',
        'Abrí canales de reclutamiento con tech talks de Duolingo, Uber y EY, talleres, una visita de 3 días de Bloomberg al campus y una visita a las oficinas de Softtek.',
      ),
      tx(
        'Negotiated and executed a Capital One–sponsored hackathon for 350+ students, owning end-to-end logistics.',
        'Negocié y ejecuté un hackathon patrocinado por Capital One para más de 350 estudiantes, a cargo de la logística de principio a fin.',
      ),
      tx(
        'Co-organized SEITC’s Congress of Technology for 200 students, with sessions from IBM, NVIDIA, Snowflake and Hey Banco.',
        'Co-organicé el Congreso de Tecnología de la SEITC para 200 estudiantes, con sesiones de IBM, NVIDIA, Snowflake y Hey Banco.',
      ),
    ],
    photos: [
      { src: '/seitc/award.jpg', caption: tx('Orgullo CSE · Sociedad Sobresaliente', 'Orgullo CSE · Sociedad Sobresaliente') },
      { src: '/seitc/orgullo-cse.jpg', caption: tx('The night SEITC was named Sociedad Sobresaliente.', 'La noche en que la SEITC fue nombrada Sociedad Sobresaliente.') },
      { src: '/seitc/ama-panel.jpg', caption: tx('Ask Me Anything panel at Tec de Monterrey.', 'Panel Ask Me Anything en el Tec de Monterrey.') },
      { src: '/seitc/bloomberg.jpg', caption: tx('Bloomberg Tech Lab on campus.', 'Bloomberg Tech Lab en el campus.') },
      { src: '/seitc/b-puzzled.jpg', caption: tx('Bloomberg B-Puzzled at Tec.', 'B-Puzzled de Bloomberg en el Tec.') },
      { src: '/seitc/bloomberg-team.jpg', caption: tx('With the Bloomberg team.', 'Con el equipo de Bloomberg.') },
      {
        src: '/seitc/softtek-poster.jpg',
        video: '/seitc/softtek.mp4',
        caption: tx('Day 1 at Softtek: a visit to their offices.', 'Día 1 en Softtek: visita a sus oficinas.'),
      },
      { src: '/seitc/workshop.jpg', caption: tx('A workshop for the CS community.', 'Un taller para la comunidad de CS.') },
      { src: '/seitc/planning.jpg', caption: tx('The IT team planning logistics and registrations for upcoming events.', 'El equipo de TI planeando logística y registros para próximos eventos.') },
      { src: '/seitc/fetec.jpg', caption: tx('At FETEC.', 'En FETEC.') },
      { src: '/seitc/campus-event.jpg', caption: tx('At an international science competition, talking about the CS program with high school students.', 'En un concurso internacional de ciencias, platicando de la carrera con estudiantes de preparatoria.') },
    ],
  },
]

export const skills: SkillGroup[] = [
  {
    label: tx('Languages', 'Lenguajes'),
    items: ['Python', 'C++', 'TypeScript', 'JavaScript', 'Swift', 'SQL', 'Kotlin'],
  },
  {
    label: tx('Databases & cloud', 'Bases de datos y cloud'),
    items: ['MongoDB', 'PostgreSQL', 'Redis', 'Firebase', 'Docker', 'Kubernetes (basics)', 'Terraform', 'GCP'],
  },
  {
    label: tx('Frameworks & tools', 'Frameworks y herramientas'),
    items: ['FastAPI', 'Node.js', 'Next.js', 'React', 'tRPC', 'Prisma', 'SwiftUI', 'LangGraph', 'pandas', 'Git', 'CI/CD'],
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
    dates: tx('Expected Dec 2027', 'Graduación esperada · Dic 2027'),
    location: tx('Monterrey, MX', 'Monterrey, MX'),
    detail: tx('GPA 3.8/4.0', 'GPA 3.8/4.0'),
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
    name: 'Premio FRISA',
    issuer: 'FRISA — social entrepreneurship',
    date: tx('May 2024', 'May 2024'),
    kind: 'award',
  },
]
