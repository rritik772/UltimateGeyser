// /** @type {import('tailwindcss').Config} */

import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: [
      './pages/**/*.{jsx,tsx,css}',
      './components/**/*.{jsx,tsx,css}'
    ],
    exclude: ['node_modules', '.git', '.next'],
  },
  shortcuts: {
  },
  attributify: true,
})