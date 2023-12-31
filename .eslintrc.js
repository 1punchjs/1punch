module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  env: {
    es6: true,
  },
  extends: ["plugin:prettier/recommended"],
  ignorePatterns: ["**/dist.js"],
};
