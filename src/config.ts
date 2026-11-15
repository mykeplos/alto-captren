/** Datos de contacto del negocio. */
export const WHATSAPP = '56992430681';

/** Número para mostrar en pantalla. */
export const WHATSAPP_VISIBLE = '+56 9 9243 0681';

/** Enlace de WhatsApp con un mensaje ya escrito. */
export function enlaceWhatsApp(mensaje = ''): string {
  const texto = mensaje ? `?text=${encodeURIComponent(mensaje)}` : '';
  return `https://wa.me/${WHATSAPP}${texto}`;
}
