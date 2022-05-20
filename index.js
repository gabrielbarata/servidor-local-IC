const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const axios = require("axios");
const { promises: fs } = require("fs");
// const morgan = require("morgan");
const { try_async } = require("./utils/try_async");

const { clear_dir } = require("./utils/clear_dir");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;
    // morgan("common")(req,res,()=>{})
    // if (pathname === '/a') {
    //   app.render(req, res, '/a', query)
    handle(req, res, parsedUrl);
    // }
  }).listen(3000, (err) => {
    if (err) throw err;
    try_async(async () => {
      var { data: files } = await axios.get("http://localhost:4000");
      clear_dir("Database");
      clear_dir("public/images");
      files.forEach(async ({ name, file: { data } }) => {
        data = Buffer.from(data);
        if (name.split(".").slice(-1)[0] === "jpg") {
          await fs.writeFile(`public/images/${name}`, data);
        } else {
          await fs.writeFile(`Database/${name}`, data);
        }
      });
    }, "database server disconnected")();
    console.log("> Ready on http://localhost:3000");
  });
});
