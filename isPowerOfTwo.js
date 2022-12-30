var isPowerOfTwo = function (n) {
  function PowerOfTwo(n) {
    console.log(n);
    if (n === 1) return true;
    if (n % 2 !== 0) return false;
    return PowerOfTwo(n / 2);
  }

  return PowerOfTwo(n);
};

var isPowerOfTwo = function (n) {
  return Math.log2(n) % 1 === 0;
};

var isPowerOfTwo = function (n) {
  if (n === 0) {
    return false;
  } else if (n === 1) {
    return true;
  } else if (n % 2 !== 0) {
    return false;
  }
  return isPowerOfTwo(n / 2);
};
