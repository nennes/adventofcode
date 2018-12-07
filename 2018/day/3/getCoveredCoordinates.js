const flatten = require('lodash/flatten')
const parseLine = require('./parseLine')

module.exports = (claim) => {
  const {inFromLeft, inFromTop, inWide, inTall} = parseLine(claim)

  const coveredSqIn = [...Array(inWide)]
    .map((_, colIndex) => [...Array(inTall)]
      .map((_, rowIndex) => `${inFromTop + rowIndex}:${inFromLeft + colIndex}`))

  return flatten(coveredSqIn)
}
