/* jest it expect */

const { solver, answer } = require('./part2')

it('works correctly for the example situations', () => {
  expect(solver(['+1', '-1'])).toEqual(0)
  expect(solver(['+3', '+3', '+4', '-2', '-4'])).toEqual(10)
  expect(solver(['-6', '+3', '+8', '+5', '-6'])).toEqual(5)
  expect(solver(['+7', '+7', '-2', '-7', '-4'])).toEqual(14)

})

it('returns the correct answer', async() => {
  expect(await answer()).toEqual(621)
})
