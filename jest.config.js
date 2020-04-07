module.exports = {
    collectCoverageFrom: [
      "**/src/**/*.{js,jsx}",
      "!**/src/index.js",
      "!**/src/registerServiceWorker.js",
    ],
    setupFiles: [
      "<rootDir>/config/setupTests.js"
    ],
    moduleNameMapper: {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/__mocks__/fileMock.js",
      "\\.(css|less|scss)$": "identity-obj-proxy"
    },
    coverageThreshold: {
      global: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80
      }
    },
    reporters: [
      "default",
      [
        "jest-html-reporters",
        {
          publicPath: "./html-report",
          filename: "report.html",
          expand: true
        }
      ]
    ],
    collectCoverage: true,
    coverageReporters: [
      "lcov",
      "json",
      "text",
      "html"
    ]
}