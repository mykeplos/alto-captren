import type { ImageMetadata } from 'astro';
import type { Lang } from '../i18n/ui';
import cabanaVerano from '../assets/cabana-verano.jpg';
import cabanaInvierno from '../assets/cabana-invierno.jpg';
import saltoCaptren from '../assets/salto-captren.jpg';
import saltoPrincesa from '../assets/salto-princesa.jpg';
import conguillioLlaima from '../assets/conguillio-llaima.jpg';

export interface Foto {
  src: ImageMetadata;
  alt: Record<Lang, string>;
}

const verano: Foto = {
  src: cabanaVerano,
  alt: {
    es: 'Cabaña de madera oscura con techo de tejas, rodeada de pasto y bosque en verano',
    en: 'Dark wooden cabin with a tiled roof, surrounded by grass and forest in summer',
  },
};

const invierno: Foto = {
  src: cabanaInvierno,
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
    alt: {
      es: 'Volcán Llaima nevado sobre un campo de lava en el Parque Nacional Conguillío',
      en: 'Snow-capped Llaima volcano above a lava field in Conguillío National Park',
    },
  },
  'salto-captren': {
    src: saltoCaptren,
    alt: {
      es: 'Salto Captren: cascada ancha de agua turquesa rodeada de bosque, con un arcoíris',
      en: 'Captren waterfall: a wide turquoise waterfall surrounded by forest, with a rainbow',
    },
  },
  'salto-princesa': {
    src: saltoPrincesa,
    alt: {
      es: 'Salto de la Princesa: cascada alta que cae entre paredes de roca a una poza con piedras',
      en: 'Salto de la Princesa: a tall waterfall falling between rock walls into a stony pool',
    },
  },
};
