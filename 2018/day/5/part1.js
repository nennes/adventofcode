// url: https://adventofcode.com/2018/day/5

const getLines = require('../../../utils/getLines')

const unitsReact = (unitA, unitB = '') =>
  unitA !== unitB && unitA.toLowerCase() === unitB.toLowerCase()

const solver = polymer => {
  let unitReacted = false
  const reducedPolymer = polymer
    .split('')
    .reduce((reducedAcc, currentUnit, currentIndex) => {
      if (unitReacted) {
        unitReacted = false
        return reducedAcc
      }
      if (unitsReact(currentUnit, polymer[currentIndex + 1])) {
        unitReacted = true
        return reducedAcc
      }
      return reducedAcc + currentUnit
    }, '')

  if (reducedPolymer.length === polymer.length) {
    return polymer.length
  }

  return solver(reducedPolymer)
}

module.exports = {
  solver,
  answer: async () => solver((await getLines(`${__dirname}/input.txt`))[0])
}
