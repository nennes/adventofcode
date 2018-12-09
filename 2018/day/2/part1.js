// url: https://adventofcode.com/2018/day/2
const getLines = require('../../../utils/getLines')
const mapToValues = require('../../../utils/mapToValues')

const getLetterFrequency = data =>
  data
    .split('')
    .reduce(
      (freq, letter) =>
        freq.set(letter, freq.has(letter) ? freq.get(letter) + 1 : 1),
      new Map()
    )

const solver = lines => {
  const letterCount = lines.reduce(
    (count, line) => {
      const freqValues = mapToValues(getLetterFrequency(line))
      return {
        doubleCount: freqValues.includes(2)
          ? count.doubleCount + 1
          : count.doubleCount,
        tripleCount: freqValues.includes(3)
          ? count.tripleCount + 1
          : count.tripleCount
      }
    },
    { doubleCount: 0, tripleCount: 0 }
  )

  return letterCount.doubleCount * letterCount.tripleCount
}

module.exports = {
  getLetterFrequency,
  solver,
  answer: async () => solver(await getLines(`${__dirname}/input.txt`))
}
