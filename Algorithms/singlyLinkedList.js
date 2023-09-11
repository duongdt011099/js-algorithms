class Node {
  constructor(val) {
      this.val = val;
      this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
      this.length = 0;
      this.head = null;
      this.tail = null;
  }

  push(val) {
      const node = new Node(val);
      if (!this.head) {
          this.head = node;
          this.tail = node;
      } else {
          this.tail.next = node;
          this.tail = node;
      }
      this.length++;
      return this;
  }

  traverse() {
      var current = this.head;
      while(current) {
          console.log(current.val);
          current = current.next;
      }
  }

  pop() {
      if (this.length === 0) return undefined;
      var current = this.head;
      while(current) {
          if (current.next === this.tail) {
              current.next = null;
              this.tail = current;
              this.length--;
          }
      }
  }
}

var list = new SinglyLinkedList();
list.push("Test1");
list.push("Test2");
list.push(30);
list.pop();