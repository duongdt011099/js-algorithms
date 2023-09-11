function pivotHelper(
  arr, 
  start = 0, 
  end = arr?.length + 1) {

  var pivot = arr[start];
  var swapIndex = start;
  
  for (let i = start + 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
          swapIndex++;
          swap(arr, swapIndex, i);
      }
  }
  swap(arr, swapIndex, start);
  return swapIndex;
}

function swap(arr, index1, index2) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
  return arr;
}

function quickSort(arr, left = 0, right = arr.length) {
  if (left < right)  {
      let pivotIndex = pivotHelper(arr, left, right);
      quickSort(arr, left, pivotIndex - 1);
      quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

quickSort([5, 2, 1, 3, 69, 45, 100]);