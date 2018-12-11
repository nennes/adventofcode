/* global it expect */

const { solver, answer } = require('./part2')

it('works correctly for the example data', () => {
  expect(solver('dabAcCaCBAcCcaDA')).toEqual(4)
})

it('returns the correct answer', async () => {
  expect(await answer()).toEqual(5122)
})
