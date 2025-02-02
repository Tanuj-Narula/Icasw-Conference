/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'custom': 'repeat(2, minmax(300px, 300px) 1fr)',
        'custom-1': 'repeat(2, minmax(0px, 200px))',
      },
      boxShadow: {
        'cstm': '0 0 0.5rem rgba(0, 0, 0, 0.3)',
        'heading' :'5px 5px black'
      },
      screens: {
        'xs': '350px',
      }
    },
  },
  plugins: [],
}

