/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'cstm': '0 0 0.5rem rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}

