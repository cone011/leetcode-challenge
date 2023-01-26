var canMakeArithmeticProgression = function (arr) {
  let formatArr = arr.sort((a, b) => a - b);
  let minValue = Math.abs(formatArr[0] - formatArr[1]);
  for (let i = 1; i < formatArr.length; i++) {
    let firstValue = formatArr[i];
    let secondValue = formatArr[i - 1];
    if (Math.abs(firstValue - secondValue) !== minValue) return false;
  }
  return true;
};
