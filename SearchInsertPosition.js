//O(log(n)) iterative way
var searchInsert = function (nums, target) {
  var begin = 0;
  var end = nums.length - 1;
  while (begin <= end) {
    let middle = Math.floor((begin + end) / 2);
    if (nums[middle] < target) begin = middle + 1;
    else if (nums[middle] > target) start = middle - 1;
    else return middle;
  }
  return begin;
};

//O(log(n)) recursive way
var searchInsert = function (nums, target) {
  function searchMost(arr, target, begin, end) {
    if (begin > end) return begin;
    let middle = Math.floor((begin + end) / 2);
    if (arr[middle] === target) return middle;
    if (arr[middle] > target) return searchMost(arr, target, begin, middle - 1);
    if (arr[middle] < target) return searchMost(arr, target, middle + 1, end);
  }
  return searchMost(nums, target, 0, nums.length - 1);
};
