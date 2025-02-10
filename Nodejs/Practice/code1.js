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
    <title>Simple Navbar</title>
</head>
<body style="margin: 0; font-family: Arial, sans-serif;">

    <div style="background-color: #333; padding: 10px 0; text-align: center;">
        <a href="home.html" style="color: white; text-decoration: none; padding: 15px; display: inline-block;">Home</a>
        <a href="men.html" style="color: white; text-decoration: none; padding: 15px; display: inline-block;">Men</a>
        <a href="women.html" style="color: white; text-decoration: none; padding: 15px; display: inline-block;">Women</a>
        <a href="kids.html" style="color: white; text-decoration: none; padding: 15px; display: inline-block;">Kids</a>
        <a href="carts.html" style="color: white; text-decoration: none; padding: 15px; display: inline-block;">Carts</a>
    </div>

</body>
</html>
  
        `);
    return res.end();
  } else if (req.url === "/home.html") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
    <div style="background-color: #333; padding: 10px 0; text-align: center;">
        <a href="home.html" style="color: white; text-decoration: none; padding: 15px; display: inline-block;">Home</a>
        <a href="men.html" style="color: white; text-decoration: none; padding: 15px; display: inline-block;">Men</a>
        <a href="women.html" style="color: white; text-decoration: none; padding: 15px; display: inline-block;">Women</a>
        <a href="kids.html" style="color: white; text-decoration: none; padding: 15px; display: inline-block;">Kids</a>
        <a href="carts.html" style="color: white; text-decoration: none; padding: 15px; display: inline-block;">Carts</a>
    </div>
        <h1>This is a home page </h1>
    </body>
    </html>
    `);
    return res.end();
  } else if (req.url === "/men.html") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title>
      </head>
      <body>
      <div style="background-color: #333; padding: 10px 0; text-align: center;">
        <a href="home.html" style="color: white; text-decoration: none; padding: 15px; display: inline-block;">Home</a>
        <a href="men.html" style="color: white; text-decoration: none; padding: 15px; display: inline-block;">Men</a>
        <a href="women.html" style="color: white; text-decoration: none; padding: 15px; display: inline-block;">Women</a>
        <a href="kids.html" style="color: white; text-decoration: none; padding: 15px; display: inline-block;">Kids</a>
        <a href="carts.html" style="color: white; text-decoration: none; padding: 15px; display: inline-block;">Carts</a>
    </div>
          <h1>This is a Men page </h1>
      </body>
      </html>
      `);
    return res.end();
  } else if (req.url === "/women.html") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title>
      </head>
      <body>
      <div style="background-color: #333; padding: 10px 0; text-align: center;">
        <a href="home.html" style="color: white; text-decoration: none; padding: 15px; display: inline-block;">Home</a>
        <a href="men.html" style="color: white; text-decoration: none; padding: 15px; display: inline-block;">Men</a>
        <a href="women.html" style="color: white; text-decoration: none; padding: 15px; display: inline-block;">Women</a>
        <a href="kids.html" style="color: white; text-decoration: none; padding: 15px; display: inline-block;">Kids</a>
        <a href="carts.html" style="color: white; text-decoration: none; padding: 15px; display: inline-block;">Carts</a>
    </div>
          <h1>This is a women page </h1>
      </body>
      </html>
      `);
    return res.end();
  } else if (req.url === "/kids.html") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title>
      </head>
      <body>
      <div style="background-color: #333; padding: 10px 0; text-align: center;">
        <a href="home.html" style="color: white; text-decoration: none; padding: 15px; display: inline-block;">Home</a>
        <a href="men.html" style="color: white; text-decoration: none; padding: 15px; display: inline-block;">Men</a>
        <a href="women.html" style="color: white; text-decoration: none; padding: 15px; display: inline-block;">Women</a>
        <a href="kids.html" style="color: white; text-decoration: none; padding: 15px; display: inline-block;">Kids</a>
        <a href="carts.html" style="color: white; text-decoration: none; padding: 15px; display: inline-block;">Carts</a>
    </div>
          <h1>This is a Kids page </h1>
      </body>
      </html>
      `);
    return res.end();
  } else if (req.url === "/carts.html") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title>
      </head>
      <body>
      <div style="background-color: #333; padding: 10px 0; text-align: center;">
        <a href="home.html" style="color: white; text-decoration: none; padding: 15px; display: inline-block;">Home</a>
        <a href="men.html" style="color: white; text-decoration: none; padding: 15px; display: inline-block;">Men</a>
        <a href="women.html" style="color: white; text-decoration: none; padding: 15px; display: inline-block;">Women</a>
        <a href="kids.html" style="color: white; text-decoration: none; padding: 15px; display: inline-block;">Kids</a>
        <a href="carts.html" style="color: white; text-decoration: none; padding: 15px; display: inline-block;">Carts</a>
    </div>
          <h1>This is a Carts page </h1>
      </body>
      </html>
      `);
    return res.end();
  }
});

server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
