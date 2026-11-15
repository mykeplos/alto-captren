import type { ImageMetadata } from 'astro';
import type { Lang } from '../i18n/ui';
import cabanaVerano from '../assets/cabana-verano.jpg';
import cabanaInvierno from '../assets/cabana-invierno.jpg';
import saltoCaptren from '../assets/salto-captren.jpg';
import saltoPrincesa from '../assets/salto-princesa.jpg';
import conguillioLlaima from '../assets/conguillio-llaima.jpg';
import portadaLlaima from '../assets/portada-llaima.jpg';
import volcanCerca from '../assets/volcan-cerca.jpg';
import volcanCamino from '../assets/volcan-camino.jpg';

export interface Foto {
  src: ImageMetadata;
  alt: Record<Lang, string>;
  /** Nombre corto para mostrar bajo la foto en el visor. */
  titulo?: Record<Lang, string>;
}

const verano: Foto = {
  src: cabanaVerano,
  titulo: { es: 'La cabaña en verano', en: 'The cabin in summer' },
  alt: {
    es: 'Cabaña de madera oscura con techo de tejas, rodeada de pasto y bosque en verano',
    en: 'Dark wooden cabin with a tiled roof, surrounded by grass and forest in summer',
  },
};

const invierno: Foto = {
  src: cabanaInvierno,
  titulo: { es: 'Atardecer de invierno', en: 'Winter dusk' },
  alt: {
    es: 'Cabaña con las luces encendidas al atardecer en invierno, con árboles sin hojas y cerros al fondo',
    en: 'Cabin with lights on at dusk in winter, with bare trees and hills behind',
  },
};

/**
 * Fotos de cada cabaña (por id). Por ahora solo hay fotos exteriores.
 * TODO(#10): agregar fotos del interior y confirmar qué foto corresponde a cada cabaña.
 */
export const fotosCabana: Record<string, Foto[]> = {
  'cabana-1': [verano, invierno],
  'cabana-2': [invierno, verano],
};

/** Fotos de los alrededores, por clave de actividad. */
export const fotosLugares: Record<string, Foto> = {
  conguillio: {
    src: conguillioLlaima,
    titulo: { es: 'Parque Nacional Conguillío', en: 'Conguillío National Park' },
    alt: {
      es: 'Volcán Llaima nevado sobre un campo de lava en el Parque Nacional Conguillío',
      en: 'Snow-capped Llaima volcano above a lava field in Conguillío National Park',
    },
  },
  'salto-captren': {
    src: saltoCaptren,
    titulo: { es: 'Salto Captren', en: 'Captren waterfall' },
    alt: {
      es: 'Salto Captren: cascada ancha de agua turquesa rodeada de bosque, con un arcoíris',
      en: 'Captren waterfall: a wide turquoise waterfall surrounded by forest, with a rainbow',
    },
  },
  'salto-princesa': {
    src: saltoPrincesa,
    titulo: { es: 'Salto de la Princesa', en: 'Salto de la Princesa' },
    alt: {
      es: 'Salto de la Princesa: cascada alta que cae entre paredes de roca a una poza con piedras',
      en: 'Salto de la Princesa: a tall waterfall falling between rock walls into a stony pool',
    },
  },
};

/** Paisajes del sector (volcán Llaima). */
const llaimaPortada: Foto = {
  src: portadaLlaima,
  titulo: { es: 'Volcán Llaima', en: 'Llaima volcano' },
  alt: {
    es: 'Volcán Llaima visto desde el camino a Captren, rodeado de bosque',
    en: 'Llaima volcano seen from the road to Captren, surrounded by forest',
  },
};

const llaimaCerca: Foto = {
  src: volcanCerca,
  titulo: { es: 'La cumbre del Llaima', en: 'The summit of Llaima' },
  alt: {
    es: 'Volcán Llaima con nieve en la cumbre',
    en: 'Llaima volcano with snow on the summit',
  },
};

const llaimaCamino: Foto = {
  src: volcanCamino,
  titulo: { es: 'Camino a Captren', en: 'The road to Captren' },
  alt: {
    es: 'Camino hacia Captren con el volcán Llaima al fondo',
    en: 'Road to Captren with Llaima volcano in the background',
  },
};

/** Todas las fotos para la galería de la portada, en el orden en que se muestran. */
export const galeria: Foto[] = [
  llaimaPortada,
  verano,
  fotosLugares['salto-captren'],
  invierno,
  fotosLugares.conguillio,
  fotosLugares['salto-princesa'],
  llaimaCamino,
  llaimaCerca,
];
