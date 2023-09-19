const Queue = require('./queue');
const BinarySearchTree = require('./binarySearchTree');

function BFS(tree) {
  var queue = new Queue()
  queue.enqueue(tree.root);
  var visited = [];
  while(queue.size > 0) {
    const visitedNode = queue.dequeue();
    visited.push(visitedNode.val.val);
    if (visitedNode.val.left) {
      queue.enqueue(visitedNode.val.left);
    }
    
    if (visitedNode.val.right) {
      queue.enqueue(visitedNode.val.right);
    }
  }

  return visited;
}

function DFSPreOrder(tree) {
  var visited = [];
  var current = tree.root;
  function helper (node) {
    visited.push(node.val);
    if (node.left) helper(node.left);
    if (node.right) helper(node.right);
  }
  helper(current);
  return visited;
}

function DFSPostOrder(tree) {
  var visited = [];
  function helper (node) {
    if (node.left) helper(node.left);
    if (node.right) helper(node.right);
    visited.push(node.val);
  }
  helper(tree.root);
  return visited;
}

function DFSInOrder(tree) {
  var visited = [];
  function helper (node) {
    if (node.left) helper(node.left);
    visited.push(node.val);
    if (node.right) helper(node.right);
   
  }
  helper(tree.root);
  return visited;
}

var bst = new BinarySearchTree();
bst.insert(59);
bst.insert(42);
bst.insert(80);
bst.insert(18);
bst.insert(48);
bst.insert(60);
console.log(DFSInOrder(bst));