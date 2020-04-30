// get config
let url;
if (process.env.NODE_ENV === "PRODUCTION") {
  // if we're in PRODUCTION mode, then read the configration from a file
  // use blocking file io to do this...
  const fs = require("fs");
  const path = require("path");
  const fn = path.join(__dirname, "../../config.json");
  const data = fs.readFileSync(fn);

  // our configuration file will be in json, so parse it and set the
  // conenction string appropriately!
  const conf = JSON.parse(data);
  url = conf.backend_url;
} else {
  // if we're not in PRODUCTION mode, then use
  url = "http://localhost:3000";
}


const BACKEND_URL = url;

export { BACKEND_URL };