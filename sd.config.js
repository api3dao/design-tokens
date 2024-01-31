const StyleDictionaryModule = require("style-dictionary");
const { makeSdTailwindConfig } = require("sd-tailwindcss-transformer");

const fs = require("fs");

const tokens = require("./tokens/converted-tokens.json");
const _ = require("lodash");
const finalTokens = _.merge(tokens.ds.core, tokens.ds.semantic);
finalTokens.colors = finalTokens.color;
delete finalTokens.color;

fs.writeFileSync(
  "./tokens/tailwind-converted-tokens.json",
  JSON.stringify(finalTokens)
);

const StyleDictionary = StyleDictionaryModule.extend(
  makeSdTailwindConfig({
    source: ["tokens/tailwind-converted-tokens.json"],
    buildPath: "build/tailwind/",
    type: "all",
    tailwind: {
      plugins: ["forms", "typography"],
    },
  })
);

StyleDictionary.buildAllPlatforms();
