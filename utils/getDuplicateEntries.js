module.exports = (array) => {
  const allEntriesMap = array
    .reduce((allEntries, currentEntry) => allEntries.set(currentEntry, allEntries.has(currentEntry)), new Map())

  return [...allEntriesMap]
    .filter(([_, value]) => value)
    .map(([key, _]) => key)
}

