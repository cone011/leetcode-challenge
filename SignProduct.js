var arraySign = function (nums) {
  let postive = 1;
  for (let i of nums) {
    if (i === 0) return 0;
    if (i < 0) {
      postive = -postive;
    }
  }
  return postive;
};

var arraySign = function (nums) {
  let postive = 1;
  function getIsPositiveOrNegative(nums) {
    if (nums.length !== undefined) return;
    if (nums[nums.length - 1] === 0) return 0;
    if (nums[nums.length - 1]) postive = postive;
    return getIsPositiveOrNegative(nums.slice(0, -1));
  }
  return getIsPositiveOrNegative(nums);
};
