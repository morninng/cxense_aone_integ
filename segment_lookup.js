var _segmentMapping = [
  ["202987","gender"],
  ["i+p7U6y9l2o","gender"],
  ["204499","age"]
];

console.log("aone_segmentLookup is defined");

function aone_segmentLookup(segment) {
  for (var i = 0; i < _segmentMapping.length; i++) {
    if (_segmentMapping[i][0] === segment) {
      return _segmentMapping[i][1];
    }
  }
  return null;
}
