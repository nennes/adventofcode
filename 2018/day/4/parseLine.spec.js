/* global describe, it expect */

const parseLine = require('./parseLine')

describe('parseLine', () => {
  it('parses a shift beginning line correctly', () => {
    const expectedDate = new Date('1518-11-01T00:00:00')
    expect(parseLine('[1518-11-01 00:00] Guard #103456 begins shift')).toEqual({
      date: expectedDate,
      type: 'SHIFT_START',
      guardId: 103456
    })
  })

  it('parses a falling asleep line correctly', () => {
    const expectedDate = new Date('1518-11-01T00:00:00')
    expect(parseLine('[1518-11-01 00:00] falls asleep')).toEqual({
      date: expectedDate,
      type: 'FALLS_ASLEEP'
    })
  })

  it('parses a waking up line correctly', () => {
    const expectedDate = new Date('1518-11-01T00:00:00')
    expect(parseLine('[1518-11-01 00:00] wakes up')).toEqual({
      date: expectedDate,
      type: 'WAKES_UP'
    })
  })
})
