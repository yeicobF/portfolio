module.exports = {
  // Based on https://ota-meshi.github.io/eslint-plugin-astro/user-guide/ and
  // https://github.com/midudev/manitas.dev/blob/main/.eslintrc.
  env: {
    es2022: true,
    node: true,
    browser: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "standard-with-typescript",

    // https://ota-meshi.github.io/eslint-plugin-astro/user-guide/

    "plugin:astro/jsx-a11y-recommended",
    "plugin:astro/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-unused-vars": "warn",
    "@typescript-eslint/consistent-type-definitions": ["error", 'type'],
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/strict-boolean-expressions": "warn",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    "no-multiple-empty-lines": "error",
    "no-tabs": "off",
    indent: ["error", 2],
    quotes: ["warn", "double"],
    "jsx-quotes": ["warn", "prefer-double"],
    "eol-last": 2,
    "@typescript-eslint/quotes": ["warn", "double"],
    "sort-imports": "error",
    "@typescript-eslint/comma-dangle": ["error", "always-multiline"],
  },
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {
        // "astro/no-set-html-directive": "error",
      },
    },
  ],
}
