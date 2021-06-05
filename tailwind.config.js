const TailwindCSSPseudo = require('tailwindcss-pseudo');

module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      // it seems that *-[inherit] is not able to used.
      borderRadius: {
        inherit: 'inherit',
      },
      colors: {
        primary: '#3f51b5',
      },
    },
    pseudo: {
      'before': 'before',
      'after': 'after',
      'not-first': 'not(:first-child)',
      'checked-label': 'checked + label',
      'disabled-label': 'disabled + label',
      'scrollbar': ':-webkit-scrollbar',
    },
  },
  plugins: [
    new TailwindCSSPseudo({
      empty: true,
    }),
  ],
};
