const CleanCSS = require("clean-css");
const { DateTime } = require('luxon');
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const fs = require("fs");

module.exports = function (eleventyConfig) {
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

  eleventyConfig.addFilter("encodeURI", (string) => {
    return encodeURI(string);
  });

  eleventyConfig.setFrontMatterParsingOptions({
    excerpt_separator: "<!-- excerpt -->",
    excerpt: true
  });

  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addCollection("treatmentCategories", collection => {
    let treatmentCategories = new Map();

    collection
      .getFilteredByTag("treatment")
      .filter(item => {
        item.data.categories.forEach(category => {

          if (!treatmentCategories.has(category)) {
            treatmentCategories.set(category, new Array)
          }

          treatmentCategories.get(category).push(item);
        });
      });
    return treatmentCategories;
  });

  eleventyConfig.addPassthroughCopy({ "src/site/_includes/assets/icons": "." });
  eleventyConfig.addPassthroughCopy("src/site/sitemap.xsl");

  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, bs) {

        bs.addMiddleware("*", (req, res) => {
          const content_404 = fs.readFileSync('dist/404.html');
          // Add 404 http status code in request header.
          res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      }
    }
  });

  return {
    markdownTemplateEngine: "njk",
    dir: {
      input: "src/site",
      output: "dist",
      includes: "_includes"
    }
  };
};
