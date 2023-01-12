//O(log(n)) iterative way
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let begin = 1;
    let end = n;
    let minVer = 0;
    while (begin <= end) {
      let middle = Math.floor((begin + end) / 2);
      if (isBadVersion(middle)) {
        minVer = middle;
        end = middle - 1;
      } else {
        begin = middle + 1;
      }
    }
    return minVer;
  };
};

//O(log(n)) recursive but in some cases it breaks
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let begin = 1;
    let end = n;
    let minVer = 0;
    function getMinVersion(start, end) {
      if (start > end) return minVer;
      let middle = Math.floor((start + start) / 2);
      if (isBadVersion(middle)) {
        minVer = middle;
        return getMinVersion(start, middle - 1);
      } else {
        return getMinVersion(middle + 1, end);
      }
    }
    return getMinVersion(begin, end);
  };
};
