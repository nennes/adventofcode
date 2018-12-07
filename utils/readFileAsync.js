const fs = require('fs');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);

module.exports = async (filePath) => {
  try {
    return await readFile(filePath, 'utf8');
  } catch (e) {
    console.error(e);
    return null;
  }
};
