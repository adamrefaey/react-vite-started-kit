// This file should be renamed to postcss.config.cjs for ESM compatibility
module.exports = {
  plugins: [
    require('@tailwindcss/postcss'),
    require('autoprefixer'),
  ],
};
