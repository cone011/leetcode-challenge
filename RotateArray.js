var rotate = function (nums, k) {
  k = k % nums.length;
  function changeSites(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  }
  function getRotateArray(arr, start, end) {
    if (start > end) return;
    changeSites(arr, start, end);
    start++, end--;
    return getRotateArray(arr, start, end);
  }
  getRotateArray(nums, 0, nums.length - 1);
  getRotateArray(nums, 0, k - 1);
  getRotateArray(nums, k, nums.length - 1);
  return nums;
};
