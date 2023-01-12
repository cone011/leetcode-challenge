var twoSum = function (numbers, target) {
  var start = 0;
  var end = numbers.length - 1;
  while (start < end) {
    var sum = numbers[start] + numbers[end];
    if (target === sum) return [start + 1, end + 1];
    else if (target > sum) start++;
    else end--;
  }
};

var twoSum = function (numbers, target) {
  function getNumberSum(start, end) {
    if (start > end) return;
    let sum = numbers[start] + numbers[end];
    if (target === sum) return [start + 1, end + 1];
    else if (target > sum) start++;
    else end--;
    return getNumberSum(start, end);
  }
  return getNumberSum(0, numbers.length - 1);
};

var twoSum = function (numbers, target) {
  var start = 0;
  var end = numbers.length - 1;
  for (let i = start; i < end; start < end) {
    let sum = numbers[start] + numbers[end];
    if (target === sum) return [start + 1, end + 1];
    else if (target > sum) start++;
    else end--;
  }
};
