// url: https://adventofcode.com/2018/day/4

const getLines = require('../../../utils/getLines')
const getMostCommonEntry = require('../../../utils/getMostCommonEntry')
const sortLines = require('./sortLines')
const parseLine = require('./parseLine')

const getSleepingMinutes = (from, to) =>
  [...Array(to - from)].map((_, index) => from + index)

const solver = logEntries => {
  const parsedAndSortedEntries = sortLines(logEntries.map(parseLine))

  let currentGuard, fellAsleepAt
  const sleepMap = new Map()

  parsedAndSortedEntries.forEach(entry => {
    switch (entry.type) {
      case 'SHIFT_START':
        currentGuard = entry.guardId
        break
      case 'FALLS_ASLEEP':
        fellAsleepAt = entry.date.getMinutes()
        break
      case 'WAKES_UP':
        const sleepingMinutes = getSleepingMinutes(
          fellAsleepAt,
          entry.date.getMinutes()
        )
        sleepMap.set(
          currentGuard,
          sleepMap.has(currentGuard)
            ? sleepMap.get(currentGuard).concat(sleepingMinutes)
            : sleepingMinutes
        )
        break
    }
  })

  const sleepyGuard = [...sleepMap].reduce(
    (mostSleepyGuard, [guardId, minutesSleeping]) => {
      if (minutesSleeping.length > mostSleepyGuard.totalMinutesSleeping) {
        mostSleepyGuard = {
          guardId,
          totalMinutesSleeping: minutesSleeping.length
        }
      }
      return mostSleepyGuard
    },
    { totalMinutesSleeping: 0 }
  )

  return (
    sleepyGuard.guardId *
    getMostCommonEntry(sleepMap.get(sleepyGuard.guardId)).entry
  )
}

module.exports = {
  solver,
  answer: async () => solver(await getLines(`${__dirname}/input.txt`))
}
