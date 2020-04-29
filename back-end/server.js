#!/usr/bin/env node
const server = require("./app");

// get config
let port;
if (process.env.NODE_ENV === "PRODUCTION") {
  const fs = require("fs");
  const path = require("path");
  const fn = path.join(__dirname, "../config.json");
  const data = fs.readFileSync(fn);

  const conf = JSON.parse(data);
  port = conf.port;
} else {
  // if we're not in PRODUCTION mode, then use
  port = 3000;
}

const listener = server.listen(port, function() {
  console.log(`Server running on port: ${port}`);
});

const close = () => {
  listener.close();
};

module.exports = {
  close: close
};


