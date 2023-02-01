var isValid = function (s) {
  if (s.length === 0) return false;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let value = s.charAt(i);
    switch (value) {
      case "(":
        stack.push(")");
        break;
      case "{":
        stack.push("}");
        break;
      case "[":
        stack.push("]");
        break;
      default:
        if (value !== stack.pop()) {
          return false;
        }
    }
  }
  return stack.length === 0;
};

var isValid = function (s) {
  if (s.length === 0) return false;
  let stack = [];
  function recursiveStack(arr) {
    if (arr.length === 0) return stack.length === 0;
    switch (arr[0]) {
      case "(":
        stack.push(")");
        break;
      case "{":
        stack.push("}");
        break;
      case "[":
        stack.push("]");
        break;
      default:
        if (arr[0] !== stack.pop()) {
          return false;
        }
    }
    return recursiveStack(arr.slice(1));
  }
  return recursiveStack(s);
};

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop() {
    if (!this.first) return null;
    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

var isValid = function (s) {
  var stack = new Stack();
  for (let i = 0; i < s.length; i++) {
    let value = s.charAt(i);
    switch (value) {
      case "(":
        stack.push(")");
        break;
      case "{":
        stack.push("}");
        break;
      case "[":
        stack.push("]");
        break;
      default:
        if (value !== stack.pop()) {
          console.log(stack.pop());
          return false;
        }
    }
  }
  return stack.size === 0;
};

var isValid = function (s) {
  var stack = new Stack();
  for (let i = 0; i < s.length; i++) {
    let value = s.charAt(i);
    switch (value) {
      case "(":
        stack.push(")");
        break;
      case "{":
        stack.push("}");
        break;
      case "[":
        stack.push("]");
        break;
      default:
        if (value !== stack.pop()) {
          console.log(stack.pop());
          return false;
        }
    }
  }
  return stack.size === 0;
};
