/**
 * Datos de contacto del negocio.
 * TODO: confirmar el número con el dueño (sacado de la pegatina: +56 9 8570 3076).
 */
export const WHATSAPP = '56985703076';

/** Número para mostrar en pantalla. */
export const WHATSAPP_VISIBLE = '+56 9 8570 3076';

/** Enlace de WhatsApp con un mensaje ya escrito. */
export function enlaceWhatsApp(mensaje = ''): string {
  const texto = mensaje ? `?text=${encodeURIComponent(mensaje)}` : '';
  return `https://wa.me/${WHATSAPP}${texto}`;
}
