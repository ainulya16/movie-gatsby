module.exports = {
  transform: {
    '^.+\\.jsx?$': '<rootDir>/jest-preprocess.js',
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/file-mock.js',
  },
  testPathIgnorePatterns: [
    'node_modules',
    '.cache',
    '__mocks__',
    'src/components/Wizard',
  ],
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  globals: {
    __PATH_PREFIX__: '',
  },
  testURL: 'http://localhost',
  setupFiles: ['<rootDir>/loadershim.js'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  verbose: true,
  coverageThreshold: {
    global: {
      branches: 87,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  testMatch: [
    '**/tests/**/*.[jt]s?(x)',
    '**/src/**/?(*.)+(spec|test).[jt]s?(x)',
    '**/**/?(*.)+(spec|test).[jt]s?(x)',
  ],
  reporters: ['default', 'jest-junit'],
  collectCoverage: false,
  coverageDirectory: '<rootDir>/coverage',
  coveragePathIgnorePatterns: ['src/components/Wizard'],
  coverageReporters: ['json', 'lcov', 'text', 'clover', 'text', 'cobertura'],
  collectCoverageFrom: [
    'src/components/**/*.js',
    '!src/layouts/**/components/**/*.js',
    'src/pages/**/*.js',
    '!**/_*.js',
    '!**/**/jest.*.js',
  ],
};
