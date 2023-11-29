const fs = require("fs");
const glob = require("glob");

module.exports = {
  source: ["tokens/**/*.json"],
  platforms: {
    scss: {
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
      pattern: /\.json$/,
      parse: ({ contents, filePath }) => {
        // Rudimentary way to obtain fully qualify references
        const qualifiedContent = contents
          .replaceAll("{ds.core.", "{contents.theme.global.ds.core.")
          .replaceAll(
            "{core.font-size.REM}",
            "{contents.theme.global.ds.core.font.size.REM}"
          );

        return {
          contents: JSON.parse(qualifiedContent),
          filePath,
        };
      },
    },
  ],
};
