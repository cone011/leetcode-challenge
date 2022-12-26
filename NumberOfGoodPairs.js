var numIdenticalPairs = function (nums) {
  if (!nums.length) return 0;
  let numsObject = {};
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    if (!numsObject[value]) {
      numsObject[value] = 1;
    } else {
      count += numsObject[value];
      numsObject[value]++;
    }
  }
  return count;
};
