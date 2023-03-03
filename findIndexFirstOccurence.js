var strStr = function (haystack, needle) {
  let hayLength = haystack.length;
  let needleLength = needle.length;
  if (needleLength === 0) return 0;
  let length = hayLength - needleLength;
  for (let i = 0; i < length + 1; i++) {
    let currentValue = haystack.slice(i, i + needleLength);
    if (currentValue === needle) return i;
  }
  return -1;
};

var strStr = function (haystack, needle) {
  let hayLength = haystack.length;
  let needleLength = needle.length;
  let count = 0;
  let length = hayLength - needleLength;
  if (needleLength === 0) return 0;
  while (count > length) {
    let currentValue = haystack.slice(count, count + needleLength);
    if (currentValue === needle) return count;
    count++;
  }
  return -1;
};

var strStr = function (haystack, needle) {
  let hayLength = haystack.length;
  let needleLength = needle.length;
  let count = 0;
  let length = hayLength - needleLength;
  if (needleLength.length === 0) return 0;
  function recursiveWay(count) {
    if (count > length) return -1;
    let currentValue = haystack.slice(count, count + needleLength);
    if (currentValue === needle) return count;
    recursiveWay(count++);
  }
  return recursiveWay(count);
};

//Input: haystack = "sadbutsad", needle = "sad"
