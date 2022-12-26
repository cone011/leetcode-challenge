//O(N) FIRST SOLUTION
var deleteDuplicates = function (head) {
  const returnArr = Array.from(new Set(head));
  return returnArr;
};

//O(N) SECOND SOLUTION
var deleteDuplicates = function (head) {
  if (!head.length) return [];
  let headObject = {};
  const returnArr = [];
  for (let i = 0; i < head.length; i++) {
    const value = head[i];
    if (!headObject[value]) headObject[value] = 1;
  }
  for (let property in headObject) {
    returnArr.push(+property);
  }
  return returnArr;
};
