const fs = require("fs");

// fs.writeFileSync("code1a.text", "hello world", (err) => {
//   if (err) throw err;
//   console.log("File saved successfully");
// });

// try {
//   const data = fs.readFileSync("code1a.text", "utf8");

//   console.log("File read successfully :  ", data);
// } catch (err) {
//   console.log("File read error : ", err);
//   return; // if error occurs, then stop the execution of the program.
// }

// fs.writeFile("code1.text", "this is code 1.text file", (err) => {
//   if (err) throw err;
//   console.log("File created successfully!");
// });

// fs.readFile("code1.text", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log("Your Data :  ", data);
// });

fs.writeFile("./textFiles/code2.text", "this is code 2.text file", (err) => {
  if (err) throw err;
  console.log("File created successfully!");
});

fs.appendFile("./textFiles/code2.text", " i am learnig node.js ", (err) => {
  if (err) throw err;
  console.log("data appended successfully!");
});
