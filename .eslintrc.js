module.exports = {
  extends: [
    "standard-with-typescript",
    "prettier", // keep prettier* last
    "prettier/standard",
    "prettier/@typescript-eslint"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaFeatures: {
      tsx: true
    }
  },
  plugins: ["@typescript-eslint", "prettier", "standard"],
  root: true,
  rules: {
    "react/jsx-uses-vars": true
  }
}