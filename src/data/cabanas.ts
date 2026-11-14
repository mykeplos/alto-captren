import type { Lang } from '../i18n/ui';

/** Datos de las cabañas. Se reutilizan en la portada y en la página Cabañas. */
export interface Cabana {
  id: string;
  nombre: Record<Lang, string>;
  capacidad: number;
  dormitorios: number;
  banos: number;
  camas: Record<Lang, string[]>;
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
    camas: {
      es: ['1 litera', '1 cama matrimonial', '2 camas de 1 plaza'],
      en: ['1 bunk bed', '1 double bed', '2 single beds'],
    },
    precio: { alta: 100000, baja: 80000 },
  },
  {
    id: 'cabana-2',
    nombre: { es: 'Cabaña 2', en: 'Cabin 2' },
    capacidad: 4,
    dormitorios: 3,
    banos: 1,
    camas: {
      es: ['1 cama matrimonial', '2 camas de plaza y media'],
      en: ['1 double bed', '2 three-quarter beds'],
    },
    precio: { alta: 80000, baja: 60000 },
  },
];

/** Precio más bajo de todas las cabañas (para el "desde $..."). */
export const precioDesde = Math.min(...cabanas.map((c) => c.precio.baja));

/** Formato de pesos chilenos: 60000 -> "$60.000". */
export function clp(valor: number): string {
  return '$' + valor.toLocaleString('es-CL');
}
