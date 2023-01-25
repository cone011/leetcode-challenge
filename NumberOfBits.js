var hammingWeight = function (n) {
  let count = 0;
  let newArr = n.toString(2).split("");
  for (let key of newArr) {
    if (key === "1") count++;
  }
  return count;
};

var hammingWeight = function (n) {
  let count = 0;
  let newArr = n.toString(2).split("");
  function recursiveArray(arr) {
    if (arr.length === 0) return;
    let currentValue = arr[arr.length - 1];
    if (currentValue === "1") count++;
    return recursiveArray(arr.slice(0, -1));
  }
  recursiveArray(newArr);
  return count;
};

var hammingWeight = function (n) {
  let arr = n.toString(2).split("");
  return arr.filter((item) => item === "1").length;
};
