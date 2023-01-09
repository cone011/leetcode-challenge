//O(N) SPACE, TIME
var singleNumber = function (nums) {
  const numberObject = {};
  for (let key of nums) {
    if (numberObject[key] == null) numberObject[key] = 0;
    numberObject[key]++;
  }
  for (key in numberObject) {
    if (numberObject[n] === 1) return Number(n);
  }
};

//RECURSIVE WAY
var singleNumber = function (nums) {
  let number = {};
  function getData(nums) {
    if (nums.length === 0) return;
    let actualNumber = nums[nums.length - 1];
    if (number[actualNumber] == null) {
      number[actualNumber] = 0;
    } else {
      number[actualNumber]++;
    }

    return getData(nums.slice(0, -1));
  }
  getData(nums);
  for (key in number) {
    if (number[key] === 1) return Number(key);
  }
};
