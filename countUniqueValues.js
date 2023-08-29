function countUniqueValues(arr) {
  arr = arr.sort();
  let i = 0;
  for(let j = 1; j<arr.length; j++) {
      if (arr[i] !== arr[j]) {
          i++;
          arr[i] = arr[j];
      }
  }

  return arr.slice(0, i + 1).length;
}

countUniqueValues([1,1, 1, 2,3,4,1,1,1,2,3]);