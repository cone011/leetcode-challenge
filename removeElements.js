var removeElements = function (head, val) {
  if (!head) return null;
  let current = head.next;
  let previous = head;
  if (head.val === val) return head.next;
  while (current) {
    if (current.val === val) {
      current = current.next;
      previous.next = current;
    } else {
      previous = current;
      current = current.next;
    }
  }
  return head;
};

//Recursive way
var removeElements = function (head, val) {
  //First we check if the head have some value if not we return null
  if (!head) return null;
  //Second we check if the value is equal to the value are passing our function for remove
  if (head.val === val) {
    //if are equal we change the current position which have the value to remove
    //and we swap for the next node
    head = removeElements(head.next, val);
  } else {
    //if not equal we dont make any change we only go for the next node
    head.next = removeElements(head.next, val);
  }
  return head;
};
