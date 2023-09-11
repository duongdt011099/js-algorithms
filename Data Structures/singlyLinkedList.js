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
      var temp = this.tail;
      while(current) {
          if (current.next === this.tail) {
              current.next = null;
              this.tail = current;
              this.length--;
          } else {
              current = current.next;
          }
      }
      return temp;
  }

  shift() {
      if (!this.head) return undefined;
      var current = this.head;
      this.head = this.head.next;
      this.length--;
      if (this.length === 0) {
          this.head = null;
          this.tail = null;
      }
      return current;
  }

  unshift(val) {
      const newNode = new Node(val);
      var current = this.head;
      if (!current) {
          this.head = newNode;
          this.tail = newNode;
      } else {
          this.head = newNode;
          this.head.next = current;
      }
      this.length++;
      return this;
  }

  get(index) {
      if (index < 0 || index >= this.length) return null;
      var count = 0;
      var current = this.head;
      while (count < index) {
          current = current.next;
          count++;
      }
      return current;
  }

  set(index, val) {
      var node = this.get(index);
      if (node) {
          node.val = val;
          return true;
      }
      return false;
  }

  insert(index, val) {
      if (index < 0 || index >= this.length || !val) return false; 
      if (index === 0) return this.unshift(val); 
      if (index === this.length - 1) return this.push(val);
      var beforeNode = this.get(index - 1);
      var afterNode = this.get(index);
      var newNode = new Node(val);
      beforeNode.next = newNode;
      newNode.next = afterNode;
      this.length++;
      return true;
  }

  remove(index) {
      if (index < 0 || index >= this.length) return undefined;
      if (index === 0) return this.shift();
      if (index === this.length - 1) return this.pop();
      var prev = this.get(index - 1);
      var after = this.get(index);
      prev.next = after;
      this.length--;
      return after;
  }

  reverse() {
      if (this.length > 1) {
          var count = 0;
          var node = this.head;
          this.head = this.tail;
          this.tail = node;
          var prev = null;
          var next = null;
          while(count < this.length) {
              next = node.next;
              node.next = prev;
              prev = node;
              node = next;
              count++;
          }
      }
          
      return this;
  }
}

var list = new SinglyLinkedList();
list.push("Test1");
list.push("Test2");
list.push("Test3");
list.push(30);