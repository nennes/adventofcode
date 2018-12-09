// url: https://adventofcode.com/2018/day/3
const flatten = require('lodash/flatten')
const getLines = require('../../../utils/getLines')
const getDuplicateEntries = require('../../../utils/getDuplicateEntries')
const getCoveredCoordinates = require('./getCoveredCoordinates')

const solver = claims => {
  const allCoordinates = flatten(claims.map(getCoveredCoordinates))
  return getDuplicateEntries(allCoordinates).length
}

module.exports = {
  solver,
  answer: async () => solver(await getLines(`${__dirname}/input.txt`))
}
