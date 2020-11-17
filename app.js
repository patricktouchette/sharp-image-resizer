const fs = require('fs');
const sharp = require('sharp');

sharp('./images/canoe.jpg')
  .resize(1500)
  .toFile('./output/test.jpg', (err, info) => {
    if (err) {
      console.log('err', err);
    }
    console.log(info);
  });
