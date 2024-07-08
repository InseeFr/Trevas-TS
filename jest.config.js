module.exports = {
    collectCoverageFrom: ["src/**/*.{js,jsx}", "!src/**/index.js", "!src/**/*.stories.js"],
    transform: {
        "\\.[jt]sx?$": "babel-jest"
    },
    coverageProvider: "v8",
    testResultsProcessor: "jest-sonar-reporter",
    coveragePathIgnorePatterns: ["/node_modules/"]
};
