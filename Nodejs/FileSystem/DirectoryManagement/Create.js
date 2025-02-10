// const fs = require("fs");
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

// Append Data to a file------
// fs.appendFile("./CreateExample.text", "This is the appended data", (err) => {
//   if (err) throw err;
//   console.log("Data appended successfully!");
// });

// fs.readFile("./CreateExample.text", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log("this is your Update Data :  ", data);
// });

// Rename---------------
// fs.rename("./CreateExample.text", "RenameExample.text", (err) => {
//   console.log("File Renamed Successfully");
// });

// unlink-----
// fs.unlink("renameExample.text", (err) => {
//   if (err) throw err;
//   console.log("File Deleted Successfully");
// });

// create a folder
// fs.mkdir("myFolder", (err) => {
//   if (err) throw err;
//   console.log("Folder Created Successfully!");
// });

// Read Directory Contents-------
// fs.readdir("myFolder", (err, files) => {
//   if (err) throw err;
//   console.log("Directory contents:", files);
// });

// fs.rmdir("myFolder", (err) => {
//   if (err) throw err;
//   console.log("Directory removed successfully!");
// });

fs.mkdir("myFolder", (err) => {
  if (err) throw err;
  console.log("Directory created successfully!");
});
