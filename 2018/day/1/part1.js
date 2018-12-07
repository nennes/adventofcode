// url: https://adventofcode.com/2018/day/1
const getLines = require('../../../utils/getLines');

const solver = lines => (
  lines
    .map(Number)
    .reduce((total, current) => total + current, 0)
);

module.exports = {
  solver,
  answer: async () => solver(await getLines(`${__dirname}/input.txt`)),
};
