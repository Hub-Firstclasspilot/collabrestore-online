/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0a0a0a',
          panel: '#1a1a1a',
          card: '#2a2a2a',
          purple: '#9333ea',
          purpleDark: '#7c3aed',
        },
      },
    },
  },
  plugins: [],
}

