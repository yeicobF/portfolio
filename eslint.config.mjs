import eslint from "@eslint/js"
import eslintPluginAstro from "eslint-plugin-astro"
import globals from "globals"
import stylistic from "@stylistic/eslint-plugin"
import tseslint from "typescript-eslint"

export default tseslint.config(
  // { files: ["**/*.{.astro,js,mjs,cjs,ts}"] },
  {
    ignores: ["astro"],
  },
  { plugins: { "@stylistic": stylistic } },

  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },

  eslint.configs.recommended,
  tseslint.configs.recommended,

  // https://ota-meshi.github.io/eslint-plugin-astro/user-guide/
  eslintPluginAstro.configs.recommended,
  eslintPluginAstro.configs["jsx-a11y-recommended"],

  {
    "rules": {
      "@stylistic/semi": ["error", "never"],
      "@stylistic/indent": ["error", 2],
      "@stylistic/quotes": ["warn", "double"],
      "@stylistic/jsx-quotes": ["warn", "prefer-double"],
      "@stylistic/comma-dangle": ["error", "always-multiline"],

      "no-multiple-empty-lines": "error",
      "no-tabs": "off",
      "eol-last": 2,
      "sort-imports": "error",
      "no-unused-vars": "warn",

      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
)
