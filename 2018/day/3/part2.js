// url: https://adventofcode.com/2018/day/3
const flatten = require('lodash/flatten')
const getLines = require('../../../utils/getLines')
const mapToValues = require('../../../utils/mapToValues')
const getDuplicateEntries = require('../../../utils/getDuplicateEntries')
const parseLine = require('./parseLine')
const getCoveredCoordinates = require('./getCoveredCoordinates')

const solver = (claims) => {
  const allCoordinates = flatten(claims.map(getCoveredCoordinates))
  const overlappingCoordinates = getDuplicateEntries(allCoordinates)

  for (let claim of claims) {
    if(!getCoveredCoordinates(claim).some(location => overlappingCoordinates.includes(location))) {
      return parseLine(claim).claimNumber
    }
  }
}

module.exports = {
  solver,
  answer: async() => solver(await getLines(`${__dirname}/input.txt`))
}
