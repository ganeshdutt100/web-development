const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  res.setHeader("Content-Type", "text/html");
  res.write(`
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="submit-data" method="POST">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required> <br> <br>

        <label for="gender">Choice your Gender : </label>
        <input type="radio" name="gender">male
        <input type="radio" name="gender">Female
        <input type="radio" name="gender">Others

        <br> <br>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required> <br> <br>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
        <br> <br>

        <input type="submit" value="Submit">
    </form>
</body>

</html>
    `);
  return res.end();

  if (req.url === "/submit-data" && req.method === "POST") {
    let body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end" , ()=>{
        let parsedBody = Buffer.concat(body).
    })
  }
});

server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
