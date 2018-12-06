/* jest it expect */

const { solver, answer } = require('./part2')

it('works correctly for the example situations', () => {
  const exampleData = ['abcde', 'fghij', 'klmno', 'pqrst', 'fguij', 'axcye', 'wvxyz']
  expect(solver(exampleData)).toEqual('fgij')
})

it('returns the correct answer', async() => {
  expect(await answer()).toEqual('fonbwmjquwtapeyzikghtvdxl')
})
