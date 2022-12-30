var buildArray = function (nums) {
  if (!nums.length) return [];
  let returnArr = [];
  for (let i = 1; i < nums.length; i++) {
    const value = nums[i];
    returnArr.push(nums[value === nums.length ? value - 1 : value]);
  }
  return returnArr;
};
