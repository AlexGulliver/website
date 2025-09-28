module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/styles");
  eleventyConfig.addPassthroughCopy("./src/fonts");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/scripts");
  eleventyConfig.addPassthroughCopy("./src/photos");

  return {
    dir: {
      input: "src",    // where your content lives
      output: "public" // Vercel expects this as output
    }
  };
};
