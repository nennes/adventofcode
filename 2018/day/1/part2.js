/* eslint no-loop-func: 0 */
// url: https://adventofcode.com/2018/day/1
const getLines = require('../../../utils/getLines')

const solver = lines => {
  const linesToNumbers = lines.map(Number)
  const frequencies = new Set([0])

  let freq = 0
  let solutionFound = false
  let solution

  while (!solutionFound) {
    freq = linesToNumbers.reduce((sum, curr) => {
      if (solutionFound) {
        return null
      }
      const total = sum + curr
      if (frequencies.has(total)) {
        solution = total
        solutionFound = true
      } else {
        frequencies.add(total)
      }
      return total
    }, freq)
  }
  return solution
}

module.exports = {
  solver,
  answer: async () => solver(await getLines(`${__dirname}/input.txt`))
}
