/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: '#3294F8',
        base: {
          title: '#E7EDF4',
          subtitle: '#C4D4E3',
          text: '#AFC2D4',
          span: '#7B96B2',
          label: '#3A536B',
          border: '#1C2F41',
          post: '#112131',
          profile: '#0B1B2B',
          background: '#071422',
          input: '#040F1A',
        },
      },

      backgroundImage:{
        'header': "url('/src/assets/cover.svg')"
      },

      fontFamily:{
        nunito: ['Nunito', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
