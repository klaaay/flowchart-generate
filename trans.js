const path = require("path");
const fs = require("fs");
const process = require("child_process");
const IMGS_DIR_NAME = "imgs";
const IMG_MD_FILE_NAME = "img";

const CUR_DIR_NAME = "贪婪的多巴胺";
const FULL_BOOK_PATH = `${__dirname}/${CUR_DIR_NAME}`;

fs.readdir(FULL_BOOK_PATH, function (err, files) {
  if (!files.includes(IMGS_DIR_NAME)) {
    process.exec(`mkdir ${path.join(FULL_BOOK_PATH, IMGS_DIR_NAME)}`);
  }
  for (let i = 0; i < files.length; i++) {
    if (files[i].includes(".md") && !files[i].includes(IMG_MD_FILE_NAME)) {
      const fileName = files[i].split(".")[0];
      process.exec(
        `mmdc -i ${path.join(FULL_BOOK_PATH, files[i])} -o ${path.join(
          FULL_BOOK_PATH,
          IMGS_DIR_NAME,
          `${fileName}.png`
        )} -t dark -b transparent`,
        (err) => {
          console.log(err);
        }
      );
    }
  }
});
