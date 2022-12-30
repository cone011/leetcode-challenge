var isPowerOfFour = function (n) {
  if (n === 0) {
    return false;
  } else if (n === 1) {
    return true;
  } else if (n % 4 !== 0) {
    return false;
  }
  return isPowerOfFour(n / 4);
};

var isPowerOfFour = function (n) {
  function PowerOfFour(n) {
    if (n === 0) return false;
    if (n === 1) return true;
    if (n % 2 !== 0) return false;
    return PowerOfFour(n / 2);
  }

  return PowerOfFour(n);
};
