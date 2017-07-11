import fs from 'fs';

function writeFile(thingToWrite, writeLocation) {
  return new Promise((resolve, reject) => {
    fs.writeFile(writeLocation, thingToWrite, (err) => {
      if (err) return reject(err);
      return resolve(`Wrote ${writeLocation}`);
    });
  });
}

export { writeFile };
