import type { Lang } from '../i18n/ui';

type Texto = Record<Lang, string>;

/** Datos de las cabañas. Se reutilizan en la portada y en la página Cabañas. */
export interface Cabana {
  id: string;
  nombre: Texto;
  capacidad: number;
  dormitorios: number;
  banos: number;
  /** Camas de cada pieza (una entrada por dormitorio). */
  piezas: Texto[];
  /** Precio por noche (CLP), cabaña completa. */
  precio: { alta: number; baja: number };
}

export const cabanas: Cabana[] = [
  {
    id: 'cabana-1',
    nombre: { es: 'Cabaña 1', en: 'Cabin 1' },
    capacidad: 6,
    dormitorios: 3,
    banos: 1,
    piezas: [
      { es: '1 litera', en: '1 bunk bed' },
      { es: '1 cama matrimonial', en: '1 double bed' },
      { es: '2 camas de 1 plaza', en: '2 single beds' },
    ],
    precio: { alta: 100000, baja: 80000 },
  },
  {
    id: 'cabana-2',
    nombre: { es: 'Cabaña 2', en: 'Cabin 2' },
    capacidad: 4,
    dormitorios: 3,
    banos: 1,
    piezas: [
      { es: '1 cama matrimonial', en: '1 double bed' },
      { es: '1 cama de plaza y media', en: '1 three-quarter bed' },
      { es: '1 cama de plaza y media', en: '1 three-quarter bed' },
    ],
    precio: { alta: 80000, baja: 60000 },
  },
];

/** Equipamiento que tienen las dos cabañas. */
export const equipamiento: { icono: string; texto: Texto }[] = [
  { icono: 'chef-hat', texto: { es: 'Cocina equipada', en: 'Fully equipped kitchen' } },
  { icono: 'refrigerator', texto: { es: 'Refrigerador', en: 'Fridge' } },
  { icono: 'microwave', texto: { es: 'Horno', en: 'Oven' } },
  { icono: 'flame', texto: { es: 'Estufa a leña', en: 'Wood-burning stove' } },
  { icono: 'shower-head', texto: { es: 'Agua caliente', en: 'Hot water' } },
  { icono: 'wifi', texto: { es: 'Wifi', en: 'Wifi' } },
  { icono: 'beef', texto: { es: 'Parrilla', en: 'Barbecue grill' } },
  { icono: 'armchair', texto: { es: 'Terraza', en: 'Deck' } },
  { icono: 'car', texto: { es: 'Estacionamiento', en: 'Parking' } },
  { icono: 'bed-double', texto: { es: 'Ropa de cama', en: 'Bed linen' } },
  { icono: 'paw-print', texto: { es: 'Se aceptan mascotas', en: 'Pet friendly' } },
  { icono: 'mountain-snow', texto: { es: 'Vista al volcán', en: 'Volcano views' } },
];

/** Temporadas de precio. */
export const temporadas: { id: 'alta' | 'baja'; nombre: Texto; cuando: Texto }[] = [
  {
    id: 'alta',
    nombre: { es: 'Temporada alta', en: 'High season' },
    cuando: {
      es: 'Diciembre a febrero, julio, agosto y fines de semana largos · mínimo 2 noches',
      en: 'December to February, July, August and long weekends · 2-night minimum',
    },
  },
  {
    id: 'baja',
    nombre: { es: 'Temporada baja', en: 'Low season' },
    cuando: { es: 'Resto del año', en: 'Rest of the year' },
  },
];

/** Precio más bajo de todas las cabañas (para el "desde $..."). */
export const precioDesde = Math.min(...cabanas.map((c) => c.precio.baja));

/** Formato de pesos chilenos: 60000 -> "$60.000". */
export function clp(valor: number): string {
  return '$' + valor.toLocaleString('es-CL');
}
