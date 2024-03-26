module.exports = {
  source: ["tokens/converted-tokens.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "converted/css/",
      files: [
        {
          destination: "tokens.css",
          format: "css/variables",
        },
      ],
    },
    js: {
      transformGroup: "js",
      buildPath: "converted/js/",
      transforms: ["name/cti/camel", "size/px"],
      files: [
        {
          destination: "tokens.ts",
          format: "javascript/es6",
        },
      ],
    },
  },
  parsers: [
    {
      pattern: "tokens/converted-tokens.json",
      parse: ({ contents, filePath }) => {
        const dsContent = JSON.parse(contents).ds;

        return {
          ds: dsContent,
          filePath,
        };
      },
    },
  ],
};
