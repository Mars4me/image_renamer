const fs = require("fs");
const sharp = require("sharp");


const pathToImages = "./images";
const pathToOutputImages = "./convertedImages/";
const newNameForImage = "new-name";

const images = fs.readdirSync(pathToImages);

fs.writeFile("images.json", JSON.stringify(images), "utf8", (err) => {
  console.log(err);
});

for (let i = 0; i < images.length; i++) {
  sharp(pathToImages + "/" + images[i]).toFile(
    pathToOutputImages + newNameForImage + "_" + (i + 1) + ".jpg",
    (err, info) => {
      console.log(err);
    }
  );
}
