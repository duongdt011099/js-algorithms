function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function countDigits(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, countDigits(nums[i]));
    }
    return maxDigits;
}

function radixSort(arr) {
    for (let k = 0; k < mostDigits(arr); k++) {
        let buckets = Array.from({ length: 10 }, () => []);
        for (let j = 0; j < arr.length; j++) {
            const digit = getDigit(arr[j], k);
            buckets[digit].push(arr[j]);
        }
        arr = [].concat(...buckets);
    }    
    
    return arr;
}

radixSort([90, 80, 30, 50, 10]);
