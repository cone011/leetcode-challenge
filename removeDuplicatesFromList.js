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

var deleteDuplicates = function (head) {
  function RecursiveWay(node) {
    if (!node) return node;
    var nextNode = node.next;
    if (node.next !== null && node.val === nextNode.val) {
      return RecursiveWay(nextNode.next);
    } else {
      return RecursiveWay(node.next);
    }
  }
  return RecursiveWay(head);
};
