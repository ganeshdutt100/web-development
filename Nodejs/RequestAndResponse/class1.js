const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url, req.headers, req.method);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<header> <title>My First Page</title> </header>");
    res.write("<body><h1>Hello from Node.js Server! , ganesh dutt</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/products") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<header> <title>My First Page</title> </header>");
    res.write("<body><h1>Welcome to product</h1></body>");
    res.write("</html>");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head> <title>My First Page</title> </head>");
  res.write(
    '<body><h1>Home page</h1> <a href="https://www.google.com">Go to Google</a> </body>'
  );
  res.write("</html>");
  return res.end();

  // process.exit();
});

server.listen(3001, () => {
  console.log(`Server running at http://localhost:${3001}/`);
});
