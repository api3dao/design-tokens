const fs = require("fs");

// Read the original tokens file
fs.readFile("tokens/converted-tokens.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  // Format types to match W3C format: https://second-editors-draft.tr.designtokens.org/format/
  // We are using a custom solution because a generic one hasn't been developed yet, to our knowledge. I (Bogdan) asked zeroheight support about this, and they weren't aware of any solution either.
  // As of now, only "value", "type", "category" and "extensions" are prepended with $
  const convertedData = data
    .replace(/"value":/g, '"$value":')
    .replace(/"type":/g, '"$type":')
    .replace(/"category":/g, '"$category":')
    .replace(/"extensions":/g, '"$extensions":')
    .replace(/: "fontWeights"/g, ': "fontWeight"')
    .replace(/: "fontFamilies"/g, ': "fontFamily"')
    .replace(/: "fontSizes"/g, ': "fontSize"')
    .replace(/: "lineHeights"/g, ': "lineHeight"')
    .replace(/"x"/g, '"offsetX"')
    .replace(/"y"/g, '"offsetY"')
    .replace(/"\$type": "dropShadow"/g, '"$type": "shadow"')
    .replace(/"\$type": "boxShadow"/g, '"$type": "shadow"');

  fs.writeFile(
    "tokens/converted-tokens-w3c.json",
    JSON.stringify(JSON.parse(convertedData), null, 2),
    (err) => {
      if (err) {
        console.error("Error writing the file:", err);
        return;
      }
      console.log("Tokens converted and saved to tokens-converted-w3c.json");
    }
  );
});
