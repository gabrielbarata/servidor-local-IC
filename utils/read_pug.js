import pugm from "pug";
import { promises as fs } from "fs";
const read_pug = async (file_name, input) => {
  var path = file_name.split("\\").slice(-2).join("/").slice(0, -3);
  if (path !== "pages/index") {
    path = `${path}/index.pug`;
  } else {
    path = `${path}.pug`;
  }
  var pug_file = await fs.readFile(path, "utf8");
  var __html = pugm.render(pug_file, input);
  return __html;
};
module.exports = { read_pug };
