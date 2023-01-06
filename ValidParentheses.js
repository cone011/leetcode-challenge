//O(N)
var isValid = function (s) {
  let caracterObjects = {};
  for (let key in s) {
    let value = s[key];
    if (!caracterObjects.hasOwnProperty(value)) {
      caracterObjects[value] = { count: 1 };
    } else {
      caracterObjects[value].count++;
    }
  }
  if (caracterObjects.hasOwnProperty("(")) {
    if (caracterObjects["("].count !== caracterObjects[")"].count) return false;
  }

  if (caracterObjects.hasOwnProperty("[")) {
    if (caracterObjects["["].count !== caracterObjects["]"].count) return false;
  }

  if (caracterObjects.hasOwnProperty("{")) {
    if (caracterObjects["{"].count !== caracterObjects["}"].count) return false;
  }
  return true;
};
