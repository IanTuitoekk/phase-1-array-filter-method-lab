function findMatching(arr, string) {
  return arr.filter(
    possibleMatch => possibleMatch.toLowerCase() === string.toLowerCase()
  );
}

function fuzzyMatch(arr, string) {
  return arr.filter(
    possibleMatch =>
      possibleMatch.toLowerCase().indexOf(string.toLowerCase()) === 0
  );
}

function matchName(arr, stringName) {
  return arr.filter(record => record.name === stringName);
}