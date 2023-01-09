//O(N)
var search = function (arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else if (elem > arr[middle]) {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === elem) return middle;
  return -1;
};

//O(log(n))
var search = function (arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  while (start <= end) {
    var middle = Math.floor(start + (end - start) / 2);
    if (elem < arr[middle]) end = mid - 1;
    else if (elem > arr[middle]) start = middle + 1;
    else return middle;
  }
  return -1;
};

var search = function (arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  function binarySearch(arr, elem, begin, end) {
    if (begin > end) return -1;
    let middle = Math.floor(begin + (end - begin) / 2);
    if (elem < arr[middle]) return binarySearch(arr, elem, begin, middle - 1);
    else if (elem > arr[middle])
      return binarySearch(arr, elem, middle + 1, end);
    else return middle;
  }
  return binarySearch(arr, elem, start, end);
};
