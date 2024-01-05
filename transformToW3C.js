const fs = require("fs");

// Read the original tokens file
fs.readFile("tokens/converted-tokens.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  // As of now, only "value", "type", "category" and "extensions" are prepended with $
  const convertedData = data
    .replace(/"value":/g, '"$value":')
    .replace(/"type":/g, '"$type":')
    .replace(/"category":/g, '"$category":')
    .replace(/"extensions":/g, '"$extensions":');

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
