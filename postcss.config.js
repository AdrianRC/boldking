const postcssPurgecss = require("@fullhuman/postcss-purgecss");

const purgecss = postcssPurgecss({
  content: ["./public/**/*.html", "./src/**/*.vue"],
  defaultExtractor: content => content.match(/[\w-/:](?<!:)/g) || [],
  whitelistPatterns: [
    /-(leave|enter|appear)(|-(to|from|active))$/,
    /^(?!(|.*?:)cursor-move).-move$/,
    /^router-link(|-exact)-active$/
  ]
});

module.exports = {
  plugins: [require("tailwindcss"), require("autoprefixer")]
};
