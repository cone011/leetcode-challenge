var moveZeroes = function (nums) {
  var begin = 0;
  var next = begin + 1;
  while (next < nums.length) {
    if (nums[begin] !== 0) {
      begin++, next++;
    } else {
      if (nums[next] !== 0) {
        [nums[begin], nums[next]] = [nums[next], nums[begin]];
        begin++;
      }
      next++;
    }
  }
};
