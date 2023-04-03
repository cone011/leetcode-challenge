var swapPairs = function (head) {
  let linkedList = new ListNode();
  linkedList = head;
  let currentNode = head;
  while (currentNode != null && currentNode.next != null) {
    let temporal = currentNode.val;
    currentNode.val = currentNode.next.val;
    currentNode = currentNode.next;
    currentNode.val = temporal;
    currentNode = currentNode.next;
  }
  return linkedList;
};
