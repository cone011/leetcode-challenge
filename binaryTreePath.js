var binaryTreePaths = function (root) {
  const returnTree = [];
  //using a function for recursive method
  function recursiveAway(node, arr) {
    //first we check if we dont have any node
    if (!node) return;
    //second we check if we dont have any right or left node
    //to looking for in the tree and if we dont we push the value
    if (!node.left && !node.right) {
      returnTree.push([...arr, node.val]);
      return;
    }
    //First we do the left side of the tree
    recursiveAway(node.left, [...arr, node.val]);
    //then we do the right side of the tree
    recursiveAway(node.right, [...arr, node.val]);
  }
  recursiveAway(root, []);
  return returnTree.map((item) => item.join("->"));
};
