/** @type {import('ts-jest').JestConfigWithTsJest} */
const config = {
  displayName: 'shared',
  injectGlobals: true,

  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  setupFiles: ['./jest.setup.ts'],

  collectCoverage: false,
  coverageProvider: 'v8',
  coverageDirectory: 'coverage',

  moduleDirectories: ['node_modules', '<rootDir>/src'],
  transform: {
    '^.+\\.m?tsx?$': ['ts-jest', { tsconfig: 'tsconfig.test.json', diagnostics: false }],
  },
};

module.exports = config;
