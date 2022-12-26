//O(N) First Solution
var isPalindrome = function (x) {
  let convertVariable = x.toString();
  const variablePalindrome = convertVariable.split("").reverse().join("");
  return variablePalindrome === x ? true : false;
};

//O(N) Second Solution
var isPalindrome = function (x) {
  let convertVariable = x.toString();
  let end = convertVariable.length - 1;
  for (let i = 0; i < end; i++) {
    if (convertVariable[i] !== convertVariable[end - i]) return false;
  }
  return true;
};
