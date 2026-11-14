export const languages = { es: 'Español', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'es';

/** Textos comunes del sitio (menú, pie de página, botones). */
export const ui = {
  es: {
    'site.name': 'Cabañas Alto Captren',
    'site.tagline': 'A 10 minutos del Parque Nacional Conguillío',
    'site.description':
      'Dos cabañas con vista al volcán en Captren, Curacautín, a 10 minutos del Parque Nacional Conguillío. Estufa a leña, wifi y se aceptan mascotas.',
    'nav.home': 'Inicio',
    'nav.cabins': 'Cabañas',
    'nav.location': 'Ubicación',
    'nav.activities': 'Qué hacer',
    'nav.faq': 'Preguntas',
    'nav.contact': 'Contacto',
    'nav.book': 'Reservar',
    'nav.menu': 'Menú',
    'lang.switch': 'English',
    'footer.location': 'Captren, Curacautín · Región de La Araucanía, Chile',
    'footer.contact': 'Datos de contacto muy pronto.',
    'footer.rights': 'Todos los derechos reservados.',
  },
  en: {
    'site.name': 'Alto Captren Cabins',
    'site.tagline': '10 minutes from Conguillío National Park',
    'site.description':
      'Two cabins with volcano views in Captren, Curacautín, 10 minutes from Conguillío National Park. Wood stove, wifi and pet friendly.',
    'nav.home': 'Home',
    'nav.cabins': 'Cabins',
    'nav.location': 'Location',
    'nav.activities': 'Things to do',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.book': 'Book now',
    'nav.menu': 'Menu',
    'lang.switch': 'Español',
    'footer.location': 'Captren, Curacautín · Araucanía Region, Chile',
    'footer.contact': 'Contact details coming soon.',
    'footer.rights': 'All rights reserved.',
  },
} as const;

export type UiKey = keyof (typeof ui)['es'];

export function useTranslations(lang: Lang) {
  return (key: UiKey): string => ui[lang][key] ?? ui[defaultLang][key];
}

/** Devuelve el otro idioma (para el botón ES / EN). */
export function otherLang(lang: Lang): Lang {
  return lang === 'es' ? 'en' : 'es';
}
