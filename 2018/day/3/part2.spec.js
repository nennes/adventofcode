/* jest it expect */

const { solver, answer } = require('./part2')

it('works correctly for the example situations', () => {
  const exampleData = ['#1 @ 1,3: 4x4', '#2 @ 3,1: 4x4', '#3 @ 5,5: 2x2']
  expect(solver(exampleData)).toEqual(3)
})

it('returns the correct answer', async() => {
  expect(await answer()).toEqual(775)
})
