const CleanCSS = require("clean-css");
const { DateTime } = require('luxon');
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("cssmin", (code) => {
    return new CleanCSS({}).minify(code).styles;
  });
  
  eleventyConfig.addFilter("humanDate", (date) => {
    dt = DateTime.fromISO(date);
    return dt.setLocale('en-GB').toLocaleString({
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  });

  eleventyConfig.addFilter("machineDate", (date) => {
    return dt = DateTime.fromISO(date);
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

  eleventyConfig.addPassthroughCopy({ "src/site/_includes/assets/icons": "." });

  return {
    markdownTemplateEngine: "njk",
    dir: {
      input: "src/site",
      output: "dist",
      includes: "_includes"
    }
  };
};
