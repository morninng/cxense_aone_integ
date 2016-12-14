var _segmentMapping = [
  ["202987","gender"],
  ["205172","gender"],
  ["204499","age"],
  ["202987","gender"],
  ["205173","gender"],
  ["205174","age"]
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
