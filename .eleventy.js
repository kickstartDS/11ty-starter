const kdsPlugin = require("@kickstartds/eleventy-plugin-kickstartds");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(kdsPlugin);
  eleventyConfig.addPassthroughCopy("static/**/*");
  eleventyConfig.addPassthroughCopy({ "static/img": "img" });
  return {
    dir: {
      input: "src",
    },
  };
};
