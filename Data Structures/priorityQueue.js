class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(node) {
    this.values.push(node);
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parent = Math.floor((idx - 1) / 2);
      if (element.priority >= this.values[parent]?.priority) break;
      this.values[idx] = this.values[parent];
      this.values[parent] = element;
      idx = parent;
    }
    return this;
  }

  dequeue() {
    if (this.values.length === 0) return null;
    const min = this.values[0];
    this.values[0] = this.values.pop();
    var currentRootIndex = 0;
    while (true) {
      const leftChildIndex = currentRootIndex * 2 + 1;
      const rightChildIndex = currentRootIndex * 2 + 2;
      if (
        leftChildIndex >= this.values.length ||
        rightChildIndex >= this.values.length
      )
        break;
      const childIndexToCompare =
        this.values[leftChildIndex].priority <
        this.values[rightChildIndex].priority
          ? leftChildIndex
          : rightChildIndex;
      if (
        this.values[currentRootIndex].priority <
        this.values[childIndexToCompare].priority
      )
        break;
      this.swap(currentRootIndex, childIndexToCompare);
      currentRootIndex = childIndexToCompare;
    }

    return min;
  }

  swap(index, swapIndex) {
    const temp = this.values[index];
    this.values[index] = this.values[swapIndex];
    this.values[swapIndex] = temp;
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
    this.insertedTime = new Date();
  }
}

var priorityQueue = new PriorityQueue();
priorityQueue.enqueue(new Node("broken legs", 0));
priorityQueue.enqueue(new Node("sickness", 0));
priorityQueue.enqueue(new Node("car crash", 0));
priorityQueue.enqueue(new Node("minor skin crash", 0));
priorityQueue.enqueue(new Node("head explosion", 0));
console.log(priorityQueue.values);
priorityQueue.dequeue();
console.log(priorityQueue.values);
priorityQueue.dequeue();
console.log(priorityQueue.values);
