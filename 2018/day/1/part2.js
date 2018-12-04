// url: https://adventofcode.com/2018/day/1
const fs = require('fs')

fs.readFile('./input.txt', 'utf8', (err, data) => {
  if (err) {
    return console.log(err);
  }

  const inputArray = data
    .split('\n')
    .filter(line => line.length)
    .map(Number)
  const frequencies = new Map()

  let freq = 0
  let solutionFound = false

  while(!solutionFound) {
    freq = inputArray.reduce((sum, curr) => {
      if(solutionFound) {
        return null
      }
      const total = sum + curr
      if(frequencies.has(total)) {
        console.log('Solution:', total)
        solutionFound = true
      } else {
        frequencies.set(total, null)
      }
      return total
    }, freq)
  }
})
