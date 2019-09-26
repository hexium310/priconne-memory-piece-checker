const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions: { paths } } = require('./tsconfig');

module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: {
        allowSyntheticDefaultImports: true,
      },
    },
    window: {},
  },
  moduleNameMapper: pathsToModuleNameMapper(paths, { prefix: '<rootDir>/' }),
  transform: {
    '^.+\\.[jt]sx?$': 'ts-jest',
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!lodash-es/.*)',
  ],
  testEnvironment: 'jsdom',
};
