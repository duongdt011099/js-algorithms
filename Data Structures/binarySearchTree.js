class Node {
  constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
  }
}

class BinarySearchTree {
  constructor () {
      this.root = null;
  }
  
  insert(val) {
      const node = new Node(val);
      if (!this.root) {
          this.root = node;
      } else {
          var current = this.root;
          while(true) {
              if (node.val < current.val) {
                  if (!current.left) {
                      current.left = node;
                      return this;
                  } 
                  else current = current.left;
              } else {
                  if (!current.right) {
                      current.right = node
                      return this;
                  }
                  else current = current.right;
              }
          }
      }
  }

  find(val) {
      if (!this.root) return null;
      var current = this.root;
      while(current) {
          if (current.val === val) {
              return current;
          } else if (val < current.val) {
              current = current.left;
          } else {
              current = current.right;
          }
      }
      return current;
  }
}

var bst = new BinarySearchTree();
bst.insert(59);
bst.insert(42);
bst.insert(80);
bst.insert(18);
bst.insert(48);
bst.insert(60);