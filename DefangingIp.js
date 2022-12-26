//O(N) First Solution
var defangIPaddr = function (address) {
  const returnArr = [];
  for (let i = 0; i < address.length; i++) {
    if (address[i] === ".") {
      returnArr.push(`[${address[i]}]`);
    } else {
      returnArr.push(address[i]);
    }
  }
  return returnArr.join("");
};

//O(N) Second Solution
var defangIPaddr = function (address) {
  return address.split(".").join("[.]");
};
