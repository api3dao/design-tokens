const StyleDictionaryModule = require("style-dictionary");
const { makeSdTailwindConfig } = require("sd-tailwindcss-transformer");

const fs = require("fs");

const tokens = require("./tokens/converted-tokens.json");

// convert the tokens to the format that tailwindcss uses
// https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/config.full.js
//https://tailwindcss.com/docs/configuration

let finalTokens = {
  colors: { ...tokens.ds.core.color, ...tokens.ds.semantic.color },
  fontFamily: tokens.ds.core.font.family,
  fontSize: tokens.ds.core.font.size,
  fontWeight: tokens.ds.core.font.weight,
  lineHeight: tokens.ds.core.font["line-height"],
  scale: tokens.ds.core.scale,
  letterSpacing: tokens.ds.core["letter-spacing"],
  borderRadius: { ...tokens.ds.core.border.radius },
  borderWidth: { DEFAULT: tokens.ds.core["border-width"][1] },
  spacing: tokens.ds.core.spacing,
  screens: tokens.ds.core.breakpoints,

  //semantic

  dropShadow: {
    DEFAULT: getShadowString(tokens.ds.semantic.shadow.dropdown),
    type: "dropShadow",
  },

  typography: {
    ...tokens.ds.semantic.font,
  },

  form: {
    input: {
      ...tokens.ds.semantic.input,
    },
    search: { ...tokens.ds.semantic.search },
  },
};

finalTokens.colors.primary = finalTokens.colors.emerald;
finalTokens.colors.secondary = finalTokens.colors.purple;
finalTokens.colors.accent = finalTokens.colors.purple;
finalTokens.colors.neutral = finalTokens.colors.gray;

// deeply check if there are any keys with "default" and rename them to "DEFAULT"
function renameKeys(obj) {
  for (let key in obj) {
    switch (key) {
      case "default":
        obj.DEFAULT = obj.default;
        delete obj.default;
        break;
      case "xxxs":
        obj["3xs"] = obj.xxxs;
        delete obj.xxxs;
        break;
      case "xxs":
        obj["2xs"] = obj.xxs;
        delete obj.xxs;
        break;
      case "s":
        obj.sm = obj.s;
        delete obj.s;
        break;

      case "m":
        obj.md = obj.m;
        delete obj.m;
        break;

      case "l":
        obj.lg = obj.l;
        delete obj.l;
        break;

      case "xxl":
        obj["2xl"] = obj.xxl;
        delete obj.xxl;
        break;
      case "xxxl":
        obj["3xl"] = obj.xxxl;
        delete obj.xxxl;
        break;
      default:
        break;
    }

    if (typeof obj[key] === "object") {
      renameKeys(obj[key]);
    }
  }
  return obj;
}

function getShadowString(obj) {
  let dropShadow = obj.value;
  console.log(dropShadow);
  let shadow = `${dropShadow.x} ${dropShadow.y} ${dropShadow.blur} ${dropShadow.spread} ${dropShadow.color}`;

  console.log(shadow);
  return shadow;
}

//
//
// rename the keys to the tailwindcss format
finalTokens = renameKeys(finalTokens);

// write the tokens to a json
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
