const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.headers, req.method);

  //sending response start
  res.setHeader("Content-Type", "text/html");

  res.write("<html>");
  res.write("<head>");

  res.write("<title>Home page</title>");
  res.write("</head>");
  res.write("<body>");
  res.write("<h1>This is my home page</h1>");
  res.write("</body>");
  res.write("</html>");
  res.end();
  //sending response end
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
