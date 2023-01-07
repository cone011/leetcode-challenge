var plusOne = function (digits) {
  let numberConvert = digits.join("");
  let stringNumber = "";
  function getNumberValue(arr) {
    if (arr.length <= 1) return arr[arr.length - 1];
    return getNumberValue(arr.slice(0, -1)) + arr[arr.length - 1];
  }
  stringNumber = BigInt(getNumberValue(numberConvert)) + BigInt(1);
  return Array.from(String(stringNumber), (num) => Number(num));
};
