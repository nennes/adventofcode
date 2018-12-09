const extractLogTextInfo = logText => {
  const guardIdRegExp = new RegExp('^Guard #([0-9]+) begins shift$')
  if (guardIdRegExp.test(logText)) {
    const [_, guardId] = guardIdRegExp.exec(logText)
    return {
      type: 'SHIFT_START',
      guardId: Number(guardId)
    }
  }
  if (logText === 'falls asleep') {
    return {
      type: 'FALLS_ASLEEP'
    }
  }
  if (logText === 'wakes up') {
    return {
      type: 'WAKES_UP'
    }
  }
  return {}
}

module.exports = line => {
  const logRegExp = new RegExp(
    '^\\[([0-9]{4}\\-[0-9]{2}\\-[0-9]{2} [0-9]{2}:[0-9]{2})\\] (.*)$'
  )
  const [_, datetime, logText] = logRegExp.exec(line)

  return {
    date: new Date(datetime),
    ...extractLogTextInfo(logText)
  }
}
