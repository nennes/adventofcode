module.exports = array => {
  const allEntriesMap = array.reduce(
    (allEntryFreq, currentEntry) =>
      allEntryFreq.set(
        currentEntry,
        allEntryFreq.has(currentEntry) ? allEntryFreq.get(currentEntry) + 1 : 1
      ),
    new Map()
  )

  return [...allEntriesMap].reduce(
    (mostCommonEntry, [entry, frequency]) => {
      if (frequency > mostCommonEntry.frequency) {
        return {
          entry,
          frequency
        }
      }
      return mostCommonEntry
    },
    { frequency: 0 }
  )
}
