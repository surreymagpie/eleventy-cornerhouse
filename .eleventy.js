const CleanCSS = require("clean-css");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addCollection("treatmentCategories", collection => {
      let treatmentCategories = new Map();

      collection
        .getFilteredByTag("treatment")
        .filter( item => {
          item.data.categories.forEach(category => {

            if ( ! treatmentCategories.has(category)) {
              treatmentCategories.set(category, new Array)
            }

            treatmentCategories.get(category).push(item);
          });
        });
      return treatmentCategories;
  });

  return {
    dir: {
      input: "src/site",
      output: "dist",
      includes: "_includes"
    }
  };
};
