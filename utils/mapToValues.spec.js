/* jest it expect */

const mapToValues = require('./mapToValues')

it('returns the values of the map', () => {
  const map = new Map()
  map.set(1, 'one value')
  map.set('bla', 2)
  expect(mapToValues(map)).toEqual(['one value', 2])
})

it('returns an empty array if the map is empty', () => {
  expect(mapToValues(new Map())).toEqual([])
})
