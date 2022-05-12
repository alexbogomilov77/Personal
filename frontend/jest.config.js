/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./jest.setup.ts"],
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  // moduleNameMapper: {
  //   "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
  //     "frontend/src/__mocks__/fileMock.js",
  //   "\\.(css|less|scss)$": "frontend/src/__mocks__/styleMock.js",
  // },
  roots: ["./src"],
  transform: {
    ".(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "./src/__mocks__/file-mock.js",
    ".(css|less|scss)$": "./src/__mocks__/style-mock.js",
  },
};
