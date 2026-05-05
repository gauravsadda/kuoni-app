module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  collectCoverage: true,
  coverageDirectory: "coverage",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
