const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head> <title> my Website</title> </head>");

    res.write("<body><h1>Home Page </h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/about") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head> <title> About Page</title> </head>");
    res.write("<body><h1>About Page </h1></body>");
    res.write("</html>");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  //   res.write("<html>");
  //   res.write("<head> <title> Error Page</title> </head>");
  //   res.write("<body><h1>Error 404 - Page Not Found</h1></body>");
  //   res.write("</html>");
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
</html>
`);
  return res.end();
});

server.listen(3002, () => {
  console.log("Server is running at http://localhost:3002"); //listen for requests on port 3002
});
