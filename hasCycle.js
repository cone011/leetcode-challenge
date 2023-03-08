var hasCycle = function (head) {
  while (head) {
    if (head.visited) return true;
    head.visited = true;
    head = head.next;
  }
  return false;
};

var hasCycle = function (head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    console.log("slow", slow);
    console.log("fast", fast);
    if (slow === fast) return true;
  }
  return false;
};
