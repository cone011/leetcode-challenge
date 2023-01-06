var isPalindrome = function (s) {
  let str = s.toLowerCase().replace(/[^a-z0-9]/gi, "");
  function getValueString(str) {
    if (str.length === 0) return true;
    if (str[0] !== str.slice(-1)) return false;
    return getValueString(str.slice(1, -1));
  }
  return getValueString(str);
};
