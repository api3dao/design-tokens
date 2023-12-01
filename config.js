const fs = require("fs");
const glob = require("glob");

module.exports = {
  source: ["tokens/converted-tokens.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "build/css/",
      files: [
        {
          destination: "variables.css",
          format: "css/variables",
        },
      ],
    },
  },
  parsers: [
    {
      pattern: "tokens/converted-tokens.json",
      parse: ({ contents, filePath }) => {
        // Rudimentary way to obtain fully qualify references
        const qualifiedContent = contents;

        return {
          contents: JSON.parse(qualifiedContent),
          filePath,
        };
      },
    },
  ],
};
