module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        title: '#272e50',
        subtitle: '#757575',
        primary: '#4d4191',
        secondary: '#52bc94',
      },
      fontFamily: {
        body: ['Merriweather']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')]
}
