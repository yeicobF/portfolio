module.exports = {
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
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
