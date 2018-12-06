// url: https://adventofcode.com/2018/day/2
const fs = require('fs')
const mapToValues = require('../../../utils/mapToValues')

const getLetterFrequency = (data) =>
  data
    .split('')
    .reduce(
      (freq, letter) => freq.set(letter, freq.has(letter) ? freq.get(letter) + 1 : 1)
      , new Map())

fs.readFile(`${__dirname}/input.txt`, 'utf8', (err, data) => {
  if (err) {
    return console.log(err);
  }

  const letterCount = data
    .split('\n')
    .filter(line => line.length)
    .reduce((count, line) => {
      const freqValues = mapToValues(getLetterFrequency(line))
      return {
        doubleCount: freqValues.includes(2) ? count.doubleCount + 1 : count.doubleCount,
        tripleCount: freqValues.includes(3) ? count.tripleCount + 1 : count.tripleCount
      }
    }, {doubleCount: 0, tripleCount: 0})

  console.log('Solution:', letterCount.doubleCount * letterCount.tripleCount)
})
