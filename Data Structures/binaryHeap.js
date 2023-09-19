class BinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    // var parentIndex = Math.floor((this.values.length - 1) / 2); => recursion
    // this.bubble(this.values.length - 1, parentIndex);
    this.bubble();
    return this.values;
  }

  // doing with recursion
  // bubble(currentIndex, parentIndex) {
  //   if (this.values[currentIndex] > this.values[parentIndex]) {
  //     var temp = this.values[currentIndex];
  //     this.values[currentIndex] = this.values[parentIndex];
  //     this.values[parentIndex] = temp;
  //     this.bubble(parentIndex, Math.floor((parentIndex - 1) / 2));
  //   }
  // }

  bubble() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parent = Math.floor((idx - 1) / 2);
      if (element <= this.values[parent]) break;
      this.values[idx] = this.values[parent];
      this.values[parent] = element;
      idx = parent;
    }
  }

  extractMax() {
    if (this.values.length === 0) return null;
    const max = this.values[0];
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
        this.values[leftChildIndex] > this.values[rightChildIndex]
          ? leftChildIndex
          : rightChildIndex;
      if (this.values[currentRootIndex] > this.values[childIndexToCompare])
        break;
      this.swap(currentRootIndex, childIndexToCompare);
      currentRootIndex = childIndexToCompare;
    }
    return max;
  }

  swap(index, swapIndex) {
    const temp = this.values[index];
    this.values[index] = this.values[swapIndex];
    this.values[swapIndex] = temp;
  }
}

var binaryHeap = new BinaryHeap();
binaryHeap.insert(41);
binaryHeap.insert(39);
binaryHeap.insert(33);
binaryHeap.insert(18);
binaryHeap.insert(27);
binaryHeap.insert(12);
binaryHeap.insert(55);
binaryHeap.insert(100);
console.log(binaryHeap.values);
console.log(binaryHeap.extractMax());

console.log(binaryHeap.values);
console.log(binaryHeap.extractMax());

console.log(binaryHeap.values);
