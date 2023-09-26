class Node {
  constructor(val) {
      this.val = val;
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
      const newNode = new Node(val);
      if (!this.first) {
          this.first = newNode;
          this.last = newNode;
      } else {
          newNode.next = this.first;
          this.first = newNode;
      }
      this.size++;
      return this;
  }

  pop() {
      if (!this.first) return null;
      const returnValue = this.first;
      this.first = this.first.next;
      this.size--;
      if (this.size === 0) {
          this.first = null;
          this.last = null;
      }
      return returnValue;
  }  
}

var stack = new Stack();
module.exports = Stack;