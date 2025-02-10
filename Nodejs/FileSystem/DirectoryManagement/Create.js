const fs = require("fs");
// create
// fs.writeFile("CreateExample.text", "Hello world from Node.js", (err) => {
//   if (err) throw err;
//   console.log("File created successfully!");
// });

// read/
// fs.readFile("./CreateExample.text", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log("this is your Data :  ", data);
// });

// Append Data to a file
// fs.appendFile("./CreateExample.text", "This is the appended data", (err) => {
//   if (err) throw err;
//   console.log("Data appended successfully!");
// });

fs.readFile("./CreateExample.text", "utf8", (err, data) => {
  if (err) throw err;
  console.log("this is your Update Data :  ", data);
});
