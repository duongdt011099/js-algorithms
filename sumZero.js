function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while(left <= right) {
      let sum = arr[left] + arr[right];
      if (sum > 0) {
          right--;
      } else if (sum < 0) {
          left++;
      } else {
          return [arr[left], arr[right]];
      }
  }
}

sumZero([-3, -2, 0, 2, 3, 5, 6])