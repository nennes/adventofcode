module.exports = (line) => {
  const claimRegExp = new RegExp('^#([0-9]+) @ ([0-9]+),([0-9]+): ([0-9]+)x([0-9]+)$');
  const [_, claimNumber, inFromLeft, inFromTop, inWide, inTall] = claimRegExp.exec(line).map(Number);
  return {
    claimNumber,
    inFromLeft,
    inFromTop,
    inWide,
    inTall,
  };
};
