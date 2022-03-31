module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./styles/tailwind.config.js')
  eleventyConfig.addWatchTarget('./styles/tailwind.css')

  eleventyConfig.addPassthroughCopy({
    './node_modules/alpinejs/dist/cdn.js': './js/alpine.js',
    './assets': './assets'
  })
};