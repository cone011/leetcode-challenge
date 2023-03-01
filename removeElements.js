var removeElements = function (head, val) {
  if (!head) return null;
  function getNodes(node) {
    if (node.next === null) return;
    let currentNode = node.next;
    let previousNode = node;
    if (currentNode.val === val) {
      currentNode = currentNode.next;
      previousNode.next = currentNode;
    } else {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    return getNodes(node.next);
  }
  getNodes(head);
  if (head.val === val) return head.next;
  return head;
};

// var removeElements = function(head, val) {
//     if(!head)return null;
//     let cur = head.next,
//         prev = head;
//     while(cur){
//         if(cur.val === val){
//             cur = cur.next;
//             prev.next = cur;
//         }else{
//             prev = cur;
//             cur = cur.next
//         }
//     }
//     if(head.val === val)return head.next;
//     return head;
// };
