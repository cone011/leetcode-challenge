var isPalindrome = function (head) {
  let arr = [];
  let currentNode = head;
  function recursiveIsPalindrome(str) {
    if (str.length <= 1) return true;
    let left = str[0];
    let right = str.slice(-1)[0];
    if (left === right) {
      return recursiveIsPalindrome(str.slice(1, -1));
    } else {
      return false;
    }
  }
  while (currentNode) {
    arr.push(currentNode.val);
    currentNode = currentNode.next;
  }
  return recursiveIsPalindrome(arr);
};

var isPalindrome = function (head) {
  let arr = [];
  let currentNode = head;

  while (currentNode) {
    arr.push(currentNode.val);
    currentNode = currentNode.next;
  }
  let arrReverse = arr.reverse();
  let count = 0;
  for (let i = arrReverse.length - 1; i >= 0; i--) {
    if (arr[count] !== arrReverse[i]) return false;
    count++;
  }
  return true;
};

var isPalindrome = function (head) {
  let arr = [];
  let currentNode = head;

  while (currentNode) {
    arr.push(currentNode.val);
    currentNode = currentNode.next;
  }
  function recursiveIsPalindrome(arr, initial, final) {
    if (arr[initial] === arr[final]) {
      return recursiveIsPalindrome(arr, initial + 1, final - 1);
    } else {
      return false;
    }
  }
  return recursiveIsPalindrome(arr, 0, arr.length - 1);
};
