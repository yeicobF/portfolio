module.exports = {
  plugins: ["prettier-plugin-tailwindcss", "prettier-plugin-astro"],
  semi: false,
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
}
