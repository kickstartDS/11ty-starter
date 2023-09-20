const kdsPlugin = require("@kickstartds/eleventy-plugin-kickstartds");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(kdsPlugin);
  eleventyConfig.addPassthroughCopy("static/**/*");
  eleventyConfig.addPassthroughCopy({ "static/img": "img" });
  eleventyConfig.addPassthroughCopy({ "node_modules/@kickstartds/ds-agency/dist/static/favicon": "/" });
  return {
    dir: {
      input: "src",
    },
  };
};
