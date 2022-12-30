//O(N) TIME
//O(N) SPACE
var titleToNumber = function (columnTitle) {
  let pow = 0;
  function getValueArray(str) {
    if (str.length === 0) return 0;
    let value = str.charCodeAt(str.length - 1) - 64;
    return value * Math.pow(26, pow) + getValueArray(str.slice(0, -1), pow++);
  }
  return getValueArray(columnTitle);
};
