var isPowerOfThree = function (n) {
  if (n === 0) {
    return false;
  } else if (n === 1) {
    return true;
  } else if (n % 3 !== 0) {
    return false;
  }
  return isPowerOfThree(n / 3);
};

var isPowerOfThree = function (n) {
  if (n === 0) return false;
  if (n === 1) return true;
  if (n % 3 !== 0) return false;
  return isPowerOfThree(n / 3);
};
