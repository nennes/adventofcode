// url: https://adventofcode.com/2018/day/5

const getLines = require('../../../utils/getLines')
const { solver: part1solver } = require('./part1')

const allLettersList = () =>
  [...Array(26).keys()].map(value =>
    String.fromCharCode('a'.charCodeAt(0) + value)
  )

const solver = polymer => {
  const allSolutions = allLettersList().map(letter => {
    const polymerWithoutLetter = polymer.replace(
      new RegExp(`[${letter}${letter.toUpperCase()}]`, 'g'),
      ''
    )
    return part1solver(polymerWithoutLetter)
  })

  return Math.min.apply(Math, allSolutions)
}

module.exports = {
  solver,
  answer: async () => solver((await getLines(`${__dirname}/input.txt`))[0])
}

module.exports.answer()
