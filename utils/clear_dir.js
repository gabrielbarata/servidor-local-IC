const { promises: fs, existsSync,mkdirSync } = require("fs");
const path = require("path");

const clear_dir = async (directory) => {
  if (!existsSync(directory)){
    mkdirSync(directory, { recursive: true });
}

  var files = await fs.readdir(directory);
  files = files.map(async (file) => {
    await fs.unlink(path.join(directory, file));
  });
  await Promise.all(files);
};

module.exports = { clear_dir };
