const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  if (req.url === "/") {
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
    return res.end("Hello from Node.js Server!");
  } else if (req.url === "/submit-details" && req.method === "POST") {
    res.write(`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Congratulations</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f8f9fa; text-align: center; padding: 50px;">

    <div style="max-width: 400px; margin: auto; background: white; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);">
        <h1 style="color: #28a745; font-size: 36px;">🎉 Congratulations! 🎉</h1>
        <p style="color: #333; font-size: 18px;">Your form has been successfully submitted.</p>
        <p style="color: #6c757d;">Thank you for reaching out to us. We will get back to you soon!</p>
        
        <a href="/" style="display: inline-block; margin-top: 20px; padding: 10px 20px; font-size: 16px; color: white; background-color: #007bff; text-decoration: none; border-radius: 5px;">
            Go Back to Home
        </a>
    </div>

</body>
</html>

        `);
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>404 - Page Not Found</title>
        </head>
        <body style="text-align: center; font-family: Arial, sans-serif; background-color: #f8f9fa; color: #333; padding: 50px;">
            <h1 style="font-size: 80px; margin: 0; color: #dc3545;">404</h1>
            <h2 style="margin: 10px 0;">Oops! Page Not Found</h2>
            <p style="font-size: 18px; color: #6c757d;">The page you are looking for might have been removed or is temporarily unavailable.</p>
            <a href="/" style="display: inline-block; margin-top: 20px; padding: 10px 20px; font-size: 16px; color: white; background-color: #007bff; text-decoration: none; border-radius: 5px;">
                Go Back to Home
            </a>
        </body>
        </html>`);
    return res.end();
  }
});

server.listen(3003, () => {
  console.log("Server is running at http://localhost:3003"); //listen for requests on port 3003
});
