 req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);

      const parms = new URLSearchParams(parseBody);
      const bodyObject = Object.fromEntries(params);

      fs.writeFileSync("user.text", JSON.stringify());
    });