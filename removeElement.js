//DONT ACEPT THE RESULT BUT YOU CAN DO IT IN A
//RECURSIVE WAY
var removeElement = function (nums, val) {
  let count = 0;
  function countElement(num) {
    if (num.length === 0) return 0;
    if (num[num.length - 1] !== val) {
      count++;
    }
    countElement(num.slice(0, -1));
  }
  countElement(nums);
  return count;
};

//ANOTHER SOLUTION
var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i -= 1;
    }
  }
};
