// url: https://adventofcode.com/2018/day/2
const getLines = require('../../../utils/getLines')

const commonLetters = (stringA, stringB) =>
  stringA
    .split('')
    .reduce(
      (sameAcc, letter, index) =>
        sameAcc + (letter === stringB[index] ? letter : ''),
      ''
    )

const uniqueIdPairs = ids => {
  const upperTriangleCoordinates = [...Array(ids.length - 1)].map(
    (_, rowIndex) =>
      [...Array(ids.length - rowIndex - 1)].map((_, columnIndex) => [
        ids[rowIndex],
        ids[rowIndex + columnIndex + 1]
      ])
  )

  return [].concat(...upperTriangleCoordinates)
}

const solver = boxIds => {
  for (const idPair of uniqueIdPairs(boxIds)) {
    const common = commonLetters(...idPair)
    if (common.length === idPair[0].length - 1) {
      return common
    }
  }
  return null
}

module.exports = {
  solver,
  answer: async () => solver(await getLines(`${__dirname}/input.txt`))
}
