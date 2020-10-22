const { colors } = require('tailwindcss/defaultTheme');
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
    colors: {
      ...colors,
      primary: '#3f51b5',
    },
    extend: {
      gridTemplateColumns: {
        'fill': 'repeat(auto-fill, 80px)',
      },
    },
    pseudo: {
      'before': 'before',
      'after': 'after',
      'not-first': 'not(:first-child)',
      'checked-label': 'checked + label',
      'disabled-label': 'disabled + label',
    },
  },
  variants: {
    backgroundColor: ['responsive', 'not-first', 'checked-label'],
    borderRadius: ['responsive', 'first', 'last'],
    borderWidth: ['responsive', 'not-first'],
    textColor: ['responsive', 'checked-label'],
    opacity: ['responsive', 'hover', 'focus', 'disabled-label'],
  },
  plugins: [
    new TailwindCSSPseudo({
      empty: true,
    }),
  ],
};
