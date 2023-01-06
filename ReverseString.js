var reverseString = function (s) {
  function getReverseString(str) {
    if (str.length === 0) return str;
    return str[str.length - 1] + getReverseString(str.slice(0, -1));
  }
  Array.from(getReverseString(s));
};

var reverseString = function (s) {
  function getReverseString(left, right) {
    if (left > right) return;
    if (left < right) {
      [s[left], s[right]] = [s[right], s[left]];
    }
    getReverseString(left + 1, right - 1);
  }
  return getReverseString(0, s.length - 1);
};

var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
};
