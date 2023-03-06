var deleteDuplicates = function (head) {
  var currentNode = head;
  while (currentNode) {
    var nextNode = currentNode.next;
    if (currentNode.next !== null && currentNode.val === nextNode.val) {
      currentNode.next = nextNode.next;
    } else {
      currentNode = currentNode.next;
    }
  }
  return head;
};
