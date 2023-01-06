var multiply = function (num1, num2) {
  function getValue(arr, power) {
    if (arr.length === 0) return 0;
    return arr[arr.length - 1] * power + getValue(arr.slice(0, -1), power * 10);
  }
  return (getValue(num1, 1) * getValue(num2, 1)).toString();
};
