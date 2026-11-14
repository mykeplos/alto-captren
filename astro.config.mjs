// @ts-check
import { defineConfig } from 'astro/config';

// URL de prueba en GitHub Pages: https://mykeplos.github.io/alto-captren/
// Cuando tengamos dominio propio (altocaptren.cl), cambiar `site` y dejar `base: '/'`.
export default defineConfig({
  site: 'https://mykeplos.github.io',
  base: '/alto-captren',
  trailingSlash: 'always',
});
