const TailwindCSSPseudo = require('tailwindcss-pseudo');

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  purge: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      backgroundOpacity: {
        '4': '0.04',
      },
      borderRadius: {
        inherit: 'inherit',
      },
      colors: {
        primary: '#3f51b5',
      },
      gridTemplateColumns: {
        'fill': 'repeat(auto-fill, 80px)',
      },
      height: {
        'fit': 'fit-content',
      },
      inset: {
        '12': '3rem',
        '1/2': '50%',
      },
      minWidth: {
        '16': '4rem',
        '40': '10rem',
      },
      zIndex: {
        '-1': '-1',
        '1000': 1000,
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
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'not-first', 'checked-label'],
    borderRadius: ['responsive', 'first', 'last'],
    borderWidth: ['responsive', 'not-first'],
    textColor: ['responsive', 'checked-label'],
    opacity: ['responsive', 'hover', 'focus', 'disabled-label'],
    padding: ['responsive', 'not-first'],
    display: ['responsive', 'scrollbar'],
  },
  plugins: [
    new TailwindCSSPseudo({
      empty: true,
    }),
  ],
};
