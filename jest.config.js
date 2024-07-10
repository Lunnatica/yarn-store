module.exports = {
  testEnvironment: "jsdom",
  setupFiles: ['./jest.setup.ts'],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "<rootDir>/src/test/styleMock.js",
  },
};
