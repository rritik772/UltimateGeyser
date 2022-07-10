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
    "contactus-input": 'focus:(outline-none ring-red-500 shadow) hover:(shadow) w-full ring-2 ring-offset-1 ring-transparent px-2 py-3 rounded-lg border duration-500',
    "btn": "hover:(shadow-lg) px-5 py-2 uppercase font-bold rounded-lg shadow duration-300",
    "btn-red": "hover:(bg-red-700) bg-red-500 text-white"
  },
  attributify: true,
})