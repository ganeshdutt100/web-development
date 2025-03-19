const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, res.status);
  //   res.statusCode = 200;
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
         <!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Form</title>
  </head>
  
  <body>
      <form action="/submit" method="POST">
          <div>
              <label for="name">Name:</label>
              <input type="text" id="name" name="name" required>
          </div>
          <div>
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" required>
          </div>
          <div>
              <label for="message">Message:</label>
              <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit">Submit</button>
      </form>
  </body>
  
  </html>
      `);
    return res.end();
  } else if (req.url === "/submit" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      //   console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const paresedBody = Buffer.concat(body).toString();
      console.log(paresedBody);

      const params = new URLSearchParams(paresedBody);
      const readObject = Object.fromEntries(params);
      console.log(readObject);
      fs.writeFile(
        "./Nodejs/Practice/demo1.text",
        JSON.stringify(readObject),
        (err) => {
          if (err) {
            console.error("Error writing file:", err);
          } else {
            console.log("File written successfully");
          }
        }
      );
      //   fs.writeFile("/demo1.text", JSON.stringify(readObject), (err) => {
      //     if (err) {
      //       console.error("Error writing file:", err);
      //     } else {
      //       console.log("File written successfully");
      //     }
      //   });

      //   fs.writeFileSync("demo1.text", JSON.stringify(readObject));
    });

    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify({ message: "Form submitted successfully" }));
    return res.end();
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.write("Page not found");
    return res.end();
  }
});

server.listen(3001, () => {
  console.log("Server is running at http://localhost:3001");
});
