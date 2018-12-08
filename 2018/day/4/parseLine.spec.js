/* global describe, it expect */

const parseLine = require('./parseLine')

describe('parseLine', () => {
  it('parses a shift beginning line correctly', () => {
    const expectedTimestamp = Date.parse('1518-11-01T00:00:00')
    expect(parseLine('[1518-11-01 00:00] Guard #10 begins shift')).toEqual({
      timestamp: expectedTimestamp,
      info: {
        type: 'SHIFT_START',
        guardId: '10'
      }
    })
  })

  it('parses a falling asleep line correctly', () => {
    const expectedTimestamp = Date.parse('1518-11-01T00:00:00')
    expect(parseLine('[1518-11-01 00:00] falls asleep')).toEqual({
      timestamp: expectedTimestamp,
      info: {
        type: 'FALLS_ASLEEP'
      }
    })
  })

  it('parses a waking up line correctly', () => {
    const expectedTimestamp = Date.parse('1518-11-01T00:00:00')
    expect(parseLine('[1518-11-01 00:00] wakes up')).toEqual({
      timestamp: expectedTimestamp,
      info: {
        type: 'WAKES_UP'
      }
    })
  })
})
