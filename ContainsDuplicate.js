var containsDuplicate = function (nums) {
  let objectNums = {};
  for (let i of nums) {
    if (objectNums[i]) {
      return true;
    }
    objectNums[i] = true;
  }
  return false;
};

var containsDuplicate = function (nums) {
  let objectNums = {};
  function getValueNumber(arr) {
    if (arr.length === 0) return false;
    let value = arr[0];
    if (objectNums[value]) return true;
    objectNums[value] = true;
    return getValueNumber(arr.slice(1));
  }
  return getValueNumber(nums);
};
