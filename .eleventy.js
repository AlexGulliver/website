module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("styles");
    eleventyConfig.addPassthroughCopy("fonts");
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("scripts");
    eleventyConfig.addPassthroughCopy("photos");
  };

  return {
    dir: {
      input: "src",
      output: "public"
    }
  };