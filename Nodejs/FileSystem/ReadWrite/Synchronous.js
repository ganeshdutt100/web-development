const fs = require("fs");

// Synchronously file read karna
try {
  const data = fs.readFileSync("example.txt", "utf8");
  console.log("File data:", data);
} catch (err) {
  console.error("File read error:", err);
}

// Synchronously file mein data write karna
try {
  fs.writeFileSync("example.txt", "Hello, Node.js!");
  console.log("File written successfully!");
} catch (err) {
  console.error("File write error:", err);
}
