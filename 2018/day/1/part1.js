// url: https://adventofcode.com/2018/day/1
const fs = require('fs')

fs.readFile(`${__dirname}/input.txt`, 'utf8', (err, data) => {
  if (err) {
    return console.log(err);
  }

  const sum = data
    .split('\n')
    .filter(line => line.length)
    .map(Number)
    .reduce((total, current) => total + current, 0)

  console.log('Solution:', sum)
})
