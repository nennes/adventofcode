/* global it expect */

const { getLetterFrequency, solver, answer } = require('./part1')

it('calculates the letter frequency correctly', () => {
  expect(getLetterFrequency('aabcdd')).toEqual(
    new Map([['a', 2], ['b', 1], ['c', 1], ['d', 2]])
  )
})

it('works correctly for the example situations', () => {
  const exampleData = [
    'abcdef',
    'bababc',
    'abbcde',
    'abcccd',
    'aabcdd',
    'abcdee',
    'ababab'
  ]
  expect(solver(exampleData)).toEqual(12)
})

it('returns the correct answer', async () => {
  expect(await answer()).toEqual(4920)
})
