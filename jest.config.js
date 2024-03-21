module.exports = {
    testEnvironment: 'node', // Node environment, suitable for testing server-side code
    transform: {
      '^.+\\.tsx?$': 'ts-jest', // Use ts-jest to transpile TypeScript code
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$', // The regex Jest uses to detect test files
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'], // The file extensions Jest will accept
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.json' // Specify the path to your tsconfig.json
      }
    }
  };