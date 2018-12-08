module.exports = (lines) => (
  lines.sort((lineA, lineB) => new Date(lineA.timestamp) - new Date(lineB.timestamp))
)
