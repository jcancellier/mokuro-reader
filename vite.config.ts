import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    host: true
  },
  base: 'https://github.com/jcancellier/mokuro-reader',
});
