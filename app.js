const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Set your image parameters
const inputFolder = './images';
const outputFolder = './output';
const imageWidth = 1200;

//joining path of directory
const directoryPath = path.join(__dirname, inputFolder);

// Get all files in directory
fs.readdir(directoryPath, (err, files) => {
  if (err) console.log(err);

  //listing all files using forEach
  files.forEach((file) => {
    // Resize file
    sharp(`./${inputFolder}/${file}`)
      .resize(imageWidth)
      .toFile(`./${outputFolder}/${file}`, (err, info) => {
        if (err) console.log('err', err);
        console.log(info);
        console.log(`${file} ... done`);
      });
  });
});
