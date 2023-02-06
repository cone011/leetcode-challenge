var middleNode = function (head) {
  var currentNode = head;
  var count = 1;
  while (currentNode.next) {
    currentNode = currentNode.next;
    count++;
  }
  count = Math.floor(count / 2);
  while (count--) {
    head = head.next;
  }
  return head;
};

var middleNode = function (head) {
  function getLengthNode(node) {
    var count = 0;
    while (node.next) {
      count++;
      node = node.next;
    }
    return count;
  }
  function returnNodePosition(node, length) {
    for (let i = 0; i < length; i++) {
      node = node.next;
    }
    return node;
  }
  let middleNode = Math.ceil(getLengthNode(head) / 2);
  return returnNodePosition(head, middleNode);
};

var middleNode = function (head) {
  let arr = [];
  function getNodes(node) {
    if (node === null) {
      return;
    }
    arr.push(node);
    return getNodes(node.next);
  }
  getNodes(head);
  return arr[Math.ceil((arr.length - 1) / 2)];
};
