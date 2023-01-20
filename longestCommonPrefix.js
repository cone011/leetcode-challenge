var longestCommonPrefix = function (strs) {
  if (!strs || !strs.length) return "";
  for (let i = 0; i < strs[0].length; i++) {
    for (let value of strs) {
      if (value[i] !== strs[0][i]) {
        return value.slice(0, i);
      }
    }
  }
  return strs[0];
};

var longestCommonPrefix = function (strs) {
  if (!strs || !strs.length) return "";
  let commonPrefix = "";
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      let currentValue = strs[j];
      if (strs[0][i] !== currentValue[i]) return commonPrefix;
    }
    commonPrefix += strs[0][i];
  }
  return commonPrefix;
};
