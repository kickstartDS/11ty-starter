const kdsPlugin = require("@kickstartds/eleventy-plugin-kickstartds");
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(kdsPlugin);
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addPassthroughCopy({
    "static": "static",
    "static/img": "img",
    "node_modules/@kickstartds/ds-agency/dist/static/favicon": "/",
  });
  return {
    dir: {
      input: "src",
    },
  };
};
