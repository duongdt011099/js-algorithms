function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
      var minIndex = i;
      for (let j = i + 1; j < arr.length; j ++) {
          if (arr[j] < arr[i]) {
              minIndex = j;
          }
      }
      if (i !== minIndex) {
          [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
      }
  }
  return arr;
}

selectionSort([78, 73, 80, 60, 100, -3]);