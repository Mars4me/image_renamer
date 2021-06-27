const fs = require("fs");
const sharp = require("sharp");

// init func
function renameImages(inputDir, outputDir, newImageName) {
  fs.existsSync(outputDir) || fs.mkdirSync(outputDir);

  let images = fs.readdirSync(inputDir);

  images.forEach((el, index) => {
    sharp(inputDir + "/" + el).toFile(
      outputDir + '/' + newImageName + "_" + (index + 1) + ".jpg",
      (err, info) => {
        if(err) {
          console.log(err);
        }
      }
    );
  })
}

// use
renameImages('./images', './convertedImages', 'test-name')
