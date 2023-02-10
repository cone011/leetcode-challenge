class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var node = new Node(val);
    if (this.head === null) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.tail) return null;
    var popedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = popedNode.prev;
      this.tail.next = null;
      popedNode.prev = null;
    }
    this.length--;
    return popedNode;
  }
  shift() {
    if (!this.head) return null;
    var oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    var count, currentNode;
    if (index < Math.floor(this.length / 2)) {
      count = 0;
      currentNode = this.head;
      while (count !== index) {
        currentNode = currentNode.next;
        count++;
      }
    } else {
      count = this.length - 1;
      currentNode = this.tail;
      while (count !== index) {
        currentNode = currentNode.prev;
        count--;
      }
    }
    return currentNode;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) this.pop();
    if (index === this.length) this.shift();
    var removeNode = this.get(index);
    var beforeNode = removeNode.prev;
    var afterNode = removeNode.next;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    removeNode.next = null;
    removeNode.prev = null;
    this.length--;
    return removeNode;
  }
}
