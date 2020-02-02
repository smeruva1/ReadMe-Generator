const fs = require('fs');

const writeFile = (fileName, fileData) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, fileData, err => {
      if (err) {
        return reject(err);
      }

      resolve({
        status: true,
        message: 'File Created!'
      });
    });
  });
};

module.exports = writeFile;
