module.exports = function (eleventyConfig) {
  // eleventyConfig.setServerPassthroughCopyBehavior("passthrough");

  eleventyConfig.addPassthroughCopy({
    "./node_modules/alpinejs/dist/cdn.js": "./js/alpine.js",
    "./assets": "./assets",
  });
};
