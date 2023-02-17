//SOLUTION USING CLASSES
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class singleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 1;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 1 || index > this.length) return null;
    var count = 1;
    var current = this.head;
    while (count !== index) {
      current = current.next;
      count++;
    }
    return current;
  }
  remove(index) {
    if (index < 1 || index > this.tail) return false;
    var previousNode = this.get(this.tail - index);
    var removeNode = previousNode.next;
    previousNode.next = removeNode.next;
    this.length--;
    return true;
  }
}

var removeNthFromEnd = function (head, n) {
  let currentNode = head;
  let listNode = new singleLinkedList();
  while (currentNode) {
    listNode.push(currentNode.val);
  }
  listNode.remove(n);
  console.log(listNode);
};

//LeetCode Solution
var removeNthFromEnd = function (head, n) {
  function getTotalNodes(head) {
    let count = 0;
    while (head) {
      head = head.next;
      count++;
    }
    return count;
  }
  let totalNodes = getTotalNodes(head) - n;
  if (totalNodes === 0) return head.next;
  let currentValue = head;
  let nextValue = head.next;
  for (let i = 1; i < totalNodes; i++) {
    currentValue = currentValue.next;
    nextValue = nextValue.next;
  }
  currentValue.next = nextValue.next;
  return head;
};
