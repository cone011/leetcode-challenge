var sortedSquares = function (nums) {
  function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  }

  function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }

  function mostDigit(numbers) {
    let maxDigit = 0;
    for (let i = 0; i < numbers.length; i++) {
      maxDigit = Math.max(maxDigit, digitCount(numbers[i]));
    }
    return maxDigit;
  }

  function radixSort(num) {
    let maxCountDigits = mostDigit(num);
    for (let k = 0; k < maxCountDigits; k++) {
      let digitBucket = Array.from({ length: 20 }, () => []);
      for (let i = 0; i < num.length; i++) {
        let digit = getDigit(num[i], k);
        digitBucket[digit].push(num[i]);
      }
      num = [].concat(...digitBucket);
    }
    return num;
  }

  let arrNums = nums.map((item) => {
    return Math.pow(item, 2);
  });

  return radixSort(arrNums);
};
