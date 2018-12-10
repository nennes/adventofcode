/* global it expect */

const { solver, answer } = require('./part1')

it('works correctly for the example data', () => {
  expect(solver('dabAcCaCBAcCcaDA')).toEqual(10)
})

it('returns the correct answer', async () => {
  expect(await answer()).toEqual(10774)
})
