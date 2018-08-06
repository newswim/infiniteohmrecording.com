const tailwindcss = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss");
const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");

module.exports = {
  plugins: [
    tailwindcss("./tailwind.js"),
    // NOTE: use the follow options when it comes time to build for production
    // cssnano({
    //   preset: "default"
    // }),
    // purgecss({
    //   content: ["./index.html"]
    // }),
    autoprefixer
  ]
};
