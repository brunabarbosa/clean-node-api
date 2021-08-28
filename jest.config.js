module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageProvider: 'v8',
  testEnvironmentOptions: {},
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
