import type { Lang } from '../i18n/ui';

/**
 * Opiniones REALES de huéspedes. Solo se publican opiniones que el huésped escribió de verdad.
 * Mientras esta lista esté vacía, la sección "Opiniones" no aparece en la página.
 *
 * Para agregar una, copia este molde dentro de la lista:
 * {
 *   nombre: 'Camila R.',            // nombre e inicial del apellido (con su permiso)
 *   origen: 'Santiago',             // de dónde venían
 *   fecha: '2026-07',               // año y mes de la estadía
 *   estrellas: 5,                   // de 1 a 5
 *   texto: { es: 'Lo que escribió…', en: 'Traducción al inglés…' },
 *   cabana: 'cabana-1',             // opcional: 'cabana-1' o 'cabana-2'
 * },
 */
export interface Opinion {
  nombre: string;
  origen: string;
  /** Año y mes de la estadía, formato AAAA-MM. */
  fecha: string;
  estrellas: 1 | 2 | 3 | 4 | 5;
  texto: Record<Lang, string>;
  cabana?: 'cabana-1' | 'cabana-2';
}

export const opiniones: Opinion[] = [];
