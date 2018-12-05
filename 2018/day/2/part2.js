// url: https://adventofcode.com/2018/day/2
const fs = require('fs')

const commonLetters = (stringA, stringB) =>
  stringA
    .split('')
    .reduce((sameAcc, letter, index) => sameAcc + (letter === stringB[index] ? letter : ''), '')

const uniqueIdPairs = (ids) => {
  const upperTriangleCoordinates = [...Array(ids.length - 1)]
    .map((_, rowIndex) => [...Array(ids.length - rowIndex - 1)]
      .map((_, columnIndex) => [rowIndex, rowIndex + columnIndex + 1]))

  const flatComparisonIndices = [].concat(...upperTriangleCoordinates)

  return flatComparisonIndices.map(([row, column]) => [ids[row], ids[column]])
}

fs.readFile(`${__dirname}/input.txt`, 'utf8', (err, data) => {
  if (err) {
    return console.log(err);
  }

  const boxIds = data
    .split('\n')
    .filter(line => line.length)

  for (let idPair of uniqueIdPairs(boxIds)) {
    const common = commonLetters(...idPair)
    if(common.length === idPair[0].length - 1) {
      console.log('Solution:', common)
      break;
    }
  }
})
