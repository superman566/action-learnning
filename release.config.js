module.exports = {
  branches: ["main"],
  repositoryUrl: "git@github.com:superman566/action-learnning.git",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    ["@semantic-release/github", {
      asserts: [
        { path: "build.zip", label: "Build" },
        { path: "coverage.zip", label: "coverage" }
      ]
    }]
  ],
};
