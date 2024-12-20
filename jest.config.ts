import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest", // Use ts-jest for TypeScript support
  testEnvironment: "jsdom", // Simulates a browser environment
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy", // Mock CSS/SCSS imports
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // Custom setup file
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // Transpile TS/JSX files
  },
  collectCoverage: true, // Enable coverage reports
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}", // Include all TS/TSX files
    "!src/**/*.d.ts", // Exclude type declaration files
    "!src/**/index.ts", // Exclude barrel files
  ],
  coverageReporters: ["text", "lcov"], // Coverage output formats
  testMatch: ["<rootDir>/src/**/*.test.(ts|tsx)"], // Match test files
};

export default config;
