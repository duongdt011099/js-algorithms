class Node {
  constructor(val) {
      this.val = val;
      this.next = null;
      this.prev = null;
  }
}

class DoublyLinkedList {
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
          node.prev = this.tail;
          this.tail = node;
      }
      this.length++;
      return this;
  }

  pop() {
      if (!this.tail) return undefined;
      const currentTail = this.tail;
      if (this.length === 1) {
          this.tail = null;
          this.head = null;
      } else {
          const newTail = this.tail.prev;
          this.tail = newTail;
          this.tail.next = null;
      }
      this.length--;
      return currentTail;
  }

  shift() {
      if (!this.head) return undefined;
      const currentHead = this.head;
      if (this.length === 1) {
          this.head = null; 
          this.tail = null;
      } else {
          this.head = this.head.next;
          this.head.prev = null;
      }
      this.length--;
      return currentHead;
  }

  unshift(val) {
      const node = new Node(val);
      if (!this.head) {
          this.head = node;
          this.tail = node;
      } else {
          this.head.prev = node;
          node.next = this.head;
          this.head = node;
      }
      this.length++;
      return this;
  }

  get(index) {
      if (index < 0 || index > this.length - 1) return undefined;
      const middlePoint = Math.floor(this.length / 2);
      var counter;
      var currentNode;
      if (index <= middlePoint) {
          counter = 0;
          currentNode = this.head;
          while(counter < index) {
              currentNode = currentNode.next;
              counter++;
          }
      } else {
          counter = this.length - 1;
          currentNode = this.tail;
          while(counter > index) {
              currentNode = currentNode.prev;
              counter--;
          }
      }
      return currentNode;
  }

  set(index, val) {
      var valueToBeUpdated = this.get(index);
      if (!valueToBeUpdated) return false;
      valueToBeUpdated.val = val; return true;
  }

  insert(index, val) {
      if (index < 0 || index > this.length || !val) return false; 
      if (index === 0) return this.unshift(val);
      if (index === this.length) return this.push(val);
      var prevNode = this.get(index - 1);
      var nextNode = this.get(index);
      const node = new Node(val);
      node.prev = prevNode;
      node.next = nextNode;
      prevNode.next = node;
      nextNode.prev = node;
      this.length++;
      return true;
  }

  remove(index) {
      if (index < 0 || index >= this.length) return false;
      if (index === 0) return this.shift();
      if (index === this.length - 1) return this.pop();
      var itemToBeRemoved = this.get(index);
      var prevItem = itemToBeRemoved.prev;
      var nextItem = itemToBeRemoved.next;
      prevItem.next = nextItem;
      nextItem.prev = prevItem;
      this.length--;
      return true;
  }
}

var list = new DoublyLinkedList();
list.push('hello');
list.push('world');
list.push('programmer!!!');