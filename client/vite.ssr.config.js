import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const here = path.dirname(fileURLToPath(import.meta.url))

/**
 * Builds the render-gate entry into a node-runnable SSR bundle.
 *
 * Everything here stays inside `client/` on purpose. Vite resolves a config's
 * imports from the config's own directory, and node resolves a bundle's
 * externals from the bundle's own directory — so a config or an entry under
 * `scripts/` fails to find `vite`, `@vitejs/plugin-react` and
 * `react-dom/server`, all of which live in `client/node_modules`.
 *
 * `copyPublicDir: false` matters: without it Vite copies the whole public
 * directory into the output, which produced 53MB of duplicated images the first
 * time this ran.
 *
 * It is a build, not a dev server — no process, no port. `npm run check:render`
 * builds, asserts, and exits.
 */
export default defineConfig({
  plugins: [react()],
  logLevel: 'warn',
  build: {
    ssr: path.join(here, 'src', 'render-gate-entry.jsx'),
    outDir: path.join(here, '.render-gate'),
    emptyOutDir: true,
    copyPublicDir: false,
    minify: false,
    rollupOptions: {
      output: { entryFileNames: 'entry.js', format: 'es' }
    }
  }
})
