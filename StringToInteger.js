var myAtoi = function (s) {
  let max = Math.pow(2, 31) - 1;
  let min = Math.pow(-2, 31);
  let value = Number(s.trimLeft().match(/^[-\+]?\d+/));
  if (value < min) return min;
  if (value > max) return max;
  return value;
};

var myAtoi = function (s) {
  const max = Math.pow(2, 31) - 1;
  const min = Math.pow(-2, 31);
  let value = parseInt(s.trim());
  if (!value) return 0;
  if (value < min) return min;
  if (value > max) return max;
  return value;
};

//We can made in a recursive way but leetcode do not reconize the code
var myAtoi = function (s) {
  const max = Math.pow(2, 31) - 1;
  const min = Math.pow(-2, 31);
  const num = 48;
  let numberReturn = "";
  function getNumber(str) {
    if (str.length === 0) return true;
    if (str[str.length - 1].charCodeAt(0) === 45)
      numberReturn = "-" + numberReturn;
    if (str[str.length - 1].charCodeAt(0) === 43)
      numberReturn = "+" + numberReturn;
    if (
      str[str.length - 1].charCodeAt(0) - num >= 0 &&
      str[str.length - 1].charCodeAt(0) - num <= 9
    ) {
      numberReturn = str[str.length - 1] + numberReturn;
    }
    return getNumber(str.slice(0, -1));
  }
  getNumber(s);
  if (Number(numberReturn) < min) return min;
  if (Number(numberReturn) > max) return max;
  return Number(numberReturn);
};
