function merge (arr1, arr2) {
  var arr = [];
  var i = 0;
  var j = 0;
  while (i < arr1.length && j < arr2.length) {        
      if (arr1[i] > arr2[j]) {
          arr.push(arr2[j]);
          j++;
      } else {
          arr.push(arr1[i]);
          i++;
      }
  }
  
  while(i < arr1.length) {
      arr.push(arr1[i]);
      i++;
  }
  
  while(j < arr2.length) {
      arr.push(arr2[j]);
      j++;
  }
  
  return arr;
}

function mergeSort (arr) {
  var middle = Math.floor(arr.length / 2);
  var firstArray = arr.slice(0, middle);
  var secondArray = arr.slice(middle, arr.length);
  if (firstArray.length <= 1 && secondArray.length <= 1) {
      return merge(firstArray, secondArray);
  } else {
      return merge(mergeSort(firstArray), mergeSort(secondArray));
  }
}

function betterMergeSort(arr) {
  if (arr.length <= 1) return arr;
  let middle = Math.floor(arr.length / 2);
  let left = betterMergeSort(arr.slice(0, middle));
  let right = betterMergeSort(arr.slice(middle, arr.length));
  return merge(left, right);
}

//mergeSort([1,10,50,-3,100, 2,14,99])
betterMergeSort(Array.apply(null, { length: 100000 }).map(Function.call, Math.random));