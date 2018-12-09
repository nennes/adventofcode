/* global describe, it expect */

const sortLines = require('./sortLines')
const parseLine = require('./parseLine')

describe('sortLines', () => {
  it('sorts lines by date ASC', () => {
    const input = [
      parseLine('[1518-11-05 00:55] wakes up'),
      parseLine('[1518-11-01 00:00] Guard #10 begins shift'),
      parseLine('[1518-11-05 00:03] Guard #99 begins shift'),
      parseLine('[1518-11-01 00:05] falls asleep'),
      parseLine('[1518-11-04 00:36] falls asleep'),
      parseLine('[1518-11-03 00:29] wakes up'),
      parseLine('[1518-11-01 00:25] wakes up'),
      parseLine('[1518-11-01 00:30] falls asleep'),
      parseLine('[1518-11-03 00:05] Guard #10 begins shift'),
      parseLine('[1518-11-01 00:55] wakes up'),
      parseLine('[1518-11-02 00:40] falls asleep'),
      parseLine('[1518-11-01 23:58] Guard #99 begins shift'),
      parseLine('[1518-11-02 00:50] wakes up'),
      parseLine('[1518-11-03 00:24] falls asleep'),
      parseLine('[1518-11-04 00:02] Guard #99 begins shift'),
      parseLine('[1518-11-04 00:46] wakes up'),
      parseLine('[1518-11-05 00:45] falls asleep')
    ]

    const expectedOutput = [
      parseLine('[1518-11-01 00:00] Guard #10 begins shift'),
      parseLine('[1518-11-01 00:05] falls asleep'),
      parseLine('[1518-11-01 00:25] wakes up'),
      parseLine('[1518-11-01 00:30] falls asleep'),
      parseLine('[1518-11-01 00:55] wakes up'),
      parseLine('[1518-11-01 23:58] Guard #99 begins shift'),
      parseLine('[1518-11-02 00:40] falls asleep'),
      parseLine('[1518-11-02 00:50] wakes up'),
      parseLine('[1518-11-03 00:05] Guard #10 begins shift'),
      parseLine('[1518-11-03 00:24] falls asleep'),
      parseLine('[1518-11-03 00:29] wakes up'),
      parseLine('[1518-11-04 00:02] Guard #99 begins shift'),
      parseLine('[1518-11-04 00:36] falls asleep'),
      parseLine('[1518-11-04 00:46] wakes up'),
      parseLine('[1518-11-05 00:03] Guard #99 begins shift'),
      parseLine('[1518-11-05 00:45] falls asleep'),
      parseLine('[1518-11-05 00:55] wakes up')
    ]
    expect(sortLines(input)).toEqual(expectedOutput)
  })
})
