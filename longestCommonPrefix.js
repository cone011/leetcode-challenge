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
