// url: https://adventofcode.com/2018/day/3
const fs = require('fs')

const mapToValues = (map) =>
  Array.from(map, ([key, value]) => value)

const getCoveredSquareIntchCoordinates = (claim) => {
  const claimRegExp = new RegExp('^#[0-9]+ @ ([0-9]+),([0-9]+): ([0-9]+)x([0-9]+)$')
  const [_, inFromLeft, inFromTop, inWide, inTall] = claimRegExp.exec(claim).map(Number)

  const coveredSqIn = [...Array(inWide)]
    .map((_, colIndex) => [...Array(inTall)]
      .map((_, rowIndex) => `${inFromTop + rowIndex}:${inFromLeft + colIndex}`))

  return [].concat(...coveredSqIn)
}

fs.readFile(`${__dirname}/input.txt`, 'utf8', (err, data) => {
  if (err) {
    return console.log(err);
  }

  const allSqInCoordinates = data
    .split('\n')
    .filter(line => line.length)
    .map(getCoveredSquareIntchCoordinates)
    .reduce((allUsedCoordinates, coveredSquareIntchCoordinates) => {
      coveredSquareIntchCoordinates.forEach(location => {
        allUsedCoordinates.set(location, allUsedCoordinates.has(location))
      })
      return allUsedCoordinates
    }, new Map())

  const offendingSqIntchesCount = mapToValues(allSqInCoordinates).filter(Boolean).length

  console.log('Solution:', offendingSqIntchesCount)
})
