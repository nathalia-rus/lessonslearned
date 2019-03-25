const next = require("next");
const PORT = parseInt(process.env.PORT, 10) || 3000;

const nextApp = next({ dev: process.env.NODE_ENV !== "production" });
const nextHandler = nextApp.getRequestHandler();
const express = require("express");

nextApp
  .prepare()
  .then(() => {
    const server = express();

    server.get("*", (req, res) => {
      return nextHandler(req, res);
    });

    server.listen(3000, err => {
      if (err) {
        throw err;
        console.log("> Ready on http://localhost:3000");
      }
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(i);
  });
