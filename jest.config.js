module.exports = {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      diagnostics: false,
      isolatedModules: true,
      tsConfigFile: "tsconfig.json"
    }
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  testEnvironment: 'node',
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  // testMatch: [
  //   "**/test/*.+(ts|tsx|js)"
  // ]
};
