const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const dirImagesForConvert = path.join(__dirname, "images");
const dirWithConvertedImages = path.join(__dirname, "convertedImages");
const newNameForImage = "new-name";
const imageFormat = "jpg";

const images = fs.readdirSync(dirImagesForConvert);

fs.writeFile("images.json", JSON.stringify(images), "utf8", (err) => {
  if (err) console.log(err);
});

for (let i = 0; i < images.length; i++) {
  sharp(path.join(dirImagesForConvert, images[i])).toFile(
    path.join(
      dirWithConvertedImages,
      newNameForImage + "_" + (i + 1) + "." + imageFormat
    ),
    (err, info) => {
      if (err) console.log(err);
    }
  );
}
