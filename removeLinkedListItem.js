// var removeElements = function (head, val) {
//   let arr = [];
//   let currentNode = head;
//   let returnNode = new ListNode()
//   while (currentNode) {
//     if (currentNode.val !== val) {
//       arr.push(currentNode.val);
//     }
//     currentNode = currentNode.next;
//   }
//   console.log(arr);
//   for(let i = 0; i<arr.length; i++){
//     let
//   }
// };

var removeElements = function (head, val) {
  let returnList = new ListNode();
  let currentValue = head;
  while (currentValue) {
    if (currentValue.val !== val) {
      returnList.next = currentValue;
      returnList = currentValue.next;
    }
  }
  return returnList.next;
};
