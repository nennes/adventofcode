// url: https://adventofcode.com/2018/day/3
const flatten = require('lodash/flatten')
const getLines = require('../../../utils/getLines')
const getDuplicateEntries = require('../../../utils/getDuplicateEntries')
const parseLine = require('./parseLine')
const getCoveredCoordinates = require('./getCoveredCoordinates')

const solver = claims => {
  const allCoordinates = flatten(claims.map(getCoveredCoordinates))
  const overlappingCoordinates = new Set(getDuplicateEntries(allCoordinates))

  for (const claim of claims) {
    if (
      !getCoveredCoordinates(claim).some(location =>
        overlappingCoordinates.has(location)
      )
    ) {
      return parseLine(claim).claimNumber
    }
  }
  return null
}

module.exports = {
  solver,
  answer: async () => solver(await getLines(`${__dirname}/input.txt`))
}
