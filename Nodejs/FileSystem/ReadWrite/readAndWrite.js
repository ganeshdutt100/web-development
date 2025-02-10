const fs = require("fs");

// Asynchronously file read karna
fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.error("File read error:", err);
    return;
  }
  console.log("File data:", data);
});

// Asynchronously file mein data write karna
fs.writeFile("example.txt", "Hello, Node.js!", (err) => {
  if (err) {
    console.error("File write error:", err);
    return;
  }
  console.log("File written successfully!");
});
