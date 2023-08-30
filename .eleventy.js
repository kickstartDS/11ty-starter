const kdsPlugin = require("@kickstartds/eleventy-plugin-kickstartds");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(kdsPlugin);

  return {
    dir: {
      input: "src",
    },
  };
};
