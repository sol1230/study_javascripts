// module.exports = {
//   presets: ["@babel/preset-env"],
//   env: {
//     test: {
//       plugins: [
//         "@babel/plugin-transform-modules-commonjs",
//         "@babel/plugin-transform-runtime",
//       ],
//     },
//   },
// };

// export const presets = ["@babel/preset-env"];
// export const env = {
//   test: {
//     plugins: [
//       "@babel/plugin-transform-modules-commonjs",
//       "@babel/plugin-transform-runtime",
//     ],
//   },
// };

module.exports = {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "identity-obj-proxy",
  },
};
