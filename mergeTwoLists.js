var mergeTwoLists = function (list1, list2) {
  const newLinkedList = new ListNode();
  let head = newLinkedList;
  while (list1 && list2) {
    if (list1.val > list2.val) {
      head.next = list2;
      list2 = list2.next;
    } else {
      head.next = list1;
      list1 = list1.next;
    }
    head = head.next;
  }
  head.next = list1 || list2;
  return newLinkedList.next;
};
