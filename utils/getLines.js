const readFileAsync = require('./readFileAsync')

module.exports = async( filePath ) => {
  const data = await readFileAsync(filePath)
  return data
    .split('\n')
    .filter(line => line.length)
}
