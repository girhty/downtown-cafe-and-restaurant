import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  base: '/downtown-cafe-and-restaurant/',
  output: 'static',
  integrations: [tailwind()]
});