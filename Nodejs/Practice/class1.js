// const fs = require("fs");
// fs.writeFile("message.text", "Hello world ", (err) => {
//   if (err) throw err;
//   console.log("The file has been saved.");
// });

// fs.readFile("./message.text", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

const fs = require("fs");
// fs.writeFile("normal.text", "This is a normal File", (err) => {
//   if (err) {
//     console.error("File Write Error: ", err);
//     return;
//   }
//   console.log("File Written Successfully");
// });

fs.readFile("./normal.text", "utf8", (err, data) => {
  if (err) {
    console.log("File Read Error:", err);
    return;
  }
  console.log("File Data : ", data);
});
