/* global it expect */

const { solver, answer } = require('./part1');

it('works correctly for the example situations', () => {
  expect(solver(['+1', '+1', '+1'])).toEqual(3);
  expect(solver(['+1', '+1', '-2'])).toEqual(0);
  expect(solver(['-1', '-2', '-3'])).toEqual(-6);
});

it('returns the correct answer', async () => {
  expect(await answer()).toEqual(543);
});
