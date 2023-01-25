var largestPerimeter = function (nums) {
  if (nums.length === 0) return 0;
  nums.sort((a, b) => b - a);
  for (let i = 0; i < nums.length; i++) {
    if (!nums[i + 1]) return 0;
    if (!nums[i + 2]) return 0;
    let sideA = nums[i];
    let sideB = nums[i + 1];
    let sideC = nums[i + 2];
    if (sideB + sideC > sideA) return sideA + sideB + sideC;
  }
  return 0;
};

var largestPerimeter = function (nums) {
  if (nums.length === 0) return 0;
  nums.sort((a, b) => b - a);
  let position = 0;
  while (position < nums.length) {
    if (!nums[position + 1]) return 0;
    if (!nums[position + 2]) return 0;
    let sideA = nums[position];
    let sideB = nums[position + 1];
    let sideC = nums[position + 2];
    if (sideB + sideC > sideA) return sideA + sideB + sideC;
    position++;
  }
  return 0;
};

var largestPerimeter = function (nums) {
  if (nums.length === 0) return 0;
  nums.sort((a, b) => b - a);
  function recursePerimeter(arr) {
    if (arr.length <= 2) return 0;
    let sideA = arr[0];
    let sideB = arr[1];
    let sideC = arr[2];
    if (sideB + sideC > sideA) return sideA + sideB + sideC;
    return recursePerimeter(arr.slice(1));
  }
  return recursePerimeter(nums);
};
