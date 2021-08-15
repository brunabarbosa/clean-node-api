module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageProvider: 'v8',
  testEnvironmentOptions: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
