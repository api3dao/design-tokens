module.exports = {
  source: ["tokens/converted-tokens-w3c.json"],
  platforms: {
    js: {
      transformGroup: "js",
      buildPath: "converted/js/",
      files: [
        {
          destination: "tokens.json",
          format: "json",
        },
      ],
    },
  },
  parsers: [
    {
      pattern: "tokens/converted-tokens-w3c.json",
      parse: ({ contents }) => {
        const dsContent = JSON.parse(contents).ds;

        // Whenever we reach a $value and $type on the same level, take only the $value and assigned it to the key.
        // This is to make the structure more flat
        const flatten = (obj) => {
          const result = {};
          Object.keys(obj).forEach((key) => {
            if (obj[key].$value && obj[key].$type) {
              result[key] = obj[key].$value;
            } else {
              result[key] = flatten(obj[key]);
            }
          });
          return result;
        };

        return {
          ...flatten(dsContent),
        };
      },
    },
  ],
};
