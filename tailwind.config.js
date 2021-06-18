const TailwindCSSPseudo = require('tailwindcss-pseudo');

module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3f51b5',
      },
    },
    pseudo: {
      'not-first': 'not(:first-child)',
      'scrollbar': ':-webkit-scrollbar',
    },
  },
  plugins: [
    new TailwindCSSPseudo({
      empty: true,
    }),
  ],
};
