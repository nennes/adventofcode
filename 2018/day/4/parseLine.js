const extractLogTextInfo = (logText) => {
  if(logText.startsWith('Guard #')) {
    return {
      type: 'SHIFT_START',
      guardId: logText.substring(7,9)
    }
  }
  if(logText === 'falls asleep') {
    return {
      type: 'FALLS_ASLEEP'
    }
  }
  if(logText === 'wakes up') {
    return {
      type: 'WAKES_UP'
    }
  }
  return {}
}

module.exports = (line) => {
  const logRegExp = new RegExp('^\\[([0-9]{4}\\-[0-9]{2}\\-[0-9]{2} [0-9]{2}:[0-9]{2})\\] (.*)$')
  const [_, datetime, logText] = logRegExp.exec(line)
  const timestamp = Date.parse(datetime)
  const info = extractLogTextInfo(logText)

  return {
    timestamp,
    info
  }
}
