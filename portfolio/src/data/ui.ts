import { tx } from '../i18n'

/** Interface copy that isn't part of the profile itself. */
export const ui = {
  nav: {
    cerca: tx('Cerca', 'Cerca'),
    projects: tx('Projects', 'Proyectos'),
    experience: tx('Experience', 'Experiencia'),
    skills: tx('Skills', 'Habilidades'),
    contact: tx('Contact', 'Contacto'),
    resume: tx('Résumé', 'CV'),
    language: tx('Language', 'Idioma'),
  },
  hero: {
    eyebrow: tx('Software Engineer', 'Software Engineer'),
    headline: tx('I build across iOS, web, cloud and AI.', 'Construyo en iOS, web, cloud e IA.'),
    lede: tx(
      'Computer Science student at Tec de Monterrey, now at the Apple Developer Academy in Naples. From a clinical AI assistant on watsonx at IBM to national-winning Swift apps and multi-agent AI platforms.',
      'Estudiante de Ciencias Computacionales en el Tec de Monterrey, hoy en la Apple Developer Academy en Nápoles. De un asistente clínico con IA en watsonx en IBM a apps en Swift ganadoras a nivel nacional y plataformas de IA multiagente.',
    ),
    primary: tx('See my work', 'Ver mi trabajo'),
    resume: tx('Download résumé', 'Descargar CV'),
  },
  statement: tx(
    "I like the projects where the hard part isn't one thing. A wearable ECG streaming at 120 Hz into SwiftUI. A multi-agent platform behind a React front end. An admissions report that went from two weeks to three minutes.",
    'Me gustan los proyectos donde lo difícil no es una sola cosa. Un ECG wearable transmitiendo a 120 Hz hacia SwiftUI. Una plataforma multiagente detrás de un frontend en React. Un reporte de admisiones que pasó de dos semanas a tres minutos.',
  ),
  sections: {
    numbers: { eyebrow: tx('By the numbers', 'En números'), title: tx('Work that moved something.', 'Trabajo que movió algo.') },
    projects: { eyebrow: tx('Projects', 'Proyectos'), title: tx('Things I’ve built.', 'Cosas que he construido.') },
    experience: { eyebrow: tx('Experience', 'Experiencia'), title: tx('Where I’ve worked.', 'Dónde he trabajado.') },
    leadership: { eyebrow: tx('Leadership', 'Liderazgo'), title: tx('Beyond the code.', 'Más allá del código.') },
    skills: { eyebrow: tx('Skills', 'Habilidades'), title: tx('What I work with.', 'Con qué trabajo.') },
    education: { eyebrow: tx('Education', 'Educación'), title: tx('Where I’m learning.', 'Dónde estoy aprendiendo.') },
    credentials: tx('Awards', 'Premios'),
  },
  cerca: {
    eyebrow: tx('Now building', 'Construyendo ahora'),
    pitchTitle: tx('The week-2 pitch.', 'El pitch de la semana 2.'),
    profile: tx('My accelerator profile', 'Mi perfil en la aceleradora'),
    role: tx('Role', 'Rol'),
    program: tx('Program', 'Programa'),
    dates: tx('Dates', 'Fechas'),
    mvpNote:tx('MVP designs — the final app is still in progress.', 'Diseños del MVP — la app final sigue en desarrollo.'),
  },
  project: {
    award: tx('Award', 'Premio'),
  },
  gallery: {
    open: tx('Explore the screens', 'Explorar las pantallas'),
    close: tx('Close', 'Cerrar'),
    prev: tx('Previous screen', 'Pantalla anterior'),
    next: tx('Next screen', 'Pantalla siguiente'),
    item: tx('Go to', 'Ir a'),
    photos: tx('photos', 'fotos'),
  },
  video: {
    sound: tx('Turn on sound', 'Activar sonido'),
  },
  footer: {
    title: tx('Let’s build something.', 'Construyamos algo.'),
    lede: tx(
      'Open to software engineering roles and multidisciplinary projects. I reply fast.',
      'Busco roles de software engineering y proyectos multidisciplinarios. Respondo rápido.',
    ),
    top: tx('Back to top', 'Volver arriba'),
  },
}
