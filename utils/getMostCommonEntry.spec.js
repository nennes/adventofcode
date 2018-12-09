/* global describe it expect */

const getMostCommonEntry = require('./getMostCommonEntry')

describe('getMostCommonEntry', () => {
  it('returns the most common entry in the array', () => {
    expect(getMostCommonEntry([1,2,3,2])).toEqual(2)
  })
})
