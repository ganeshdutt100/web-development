const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.headers, req.method);

  if (req.url == "/") {
    res.setHeader("Content-Type", "text/html");

    res.write(`
             <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f8f9fa; text-align: center; padding: 50px;">

    <h2 style="color: #333;">Contact Us</h2>
    
    <form action="/submit-details" method="POST" style="max-width: 400px; margin: auto; background: white; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);">
        
        <label for="name" style="display: block; text-align: left; margin-bottom: 5px; font-weight: bold;">Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" required 
            style="width: 100%; padding: 10px; margin-bottom: 15px; border: 1px solid #ccc; border-radius: 5px;">

        <label for="email" style="display: block; text-align: left; margin-bottom: 5px; font-weight: bold;">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required 
            style="width: 100%; padding: 10px; margin-bottom: 15px; border: 1px solid #ccc; border-radius: 5px;">

        <label for="message" style="display: block; text-align: left; margin-bottom: 5px; font-weight: bold;">Message:</label>
        <textarea id="message" name="message" placeholder="Enter your message" rows="4" required 
            style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 5px;"></textarea>

        <button type="submit" style="width: 100%; padding: 10px; background-color: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 16px; margin-top: 10px;">
            Submit
        </button>
    
    </form>

</body>
</html>
            `);
    return res.end();
  } else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method === "POST"
  ) {
    const body = [];

    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);

      const parms = new URLSearchParams(parseBody);
      const bodyObject = Object.fromEntries(params);

      fs.writeFileSync("user.text", JSON.stringify());
    });
  }
});
