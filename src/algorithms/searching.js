
  // SEARCHING ALGORITHMS

  export function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === val) return i;
    }
    return -1;
  }

  export function binarySearch(arr, elem) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    while (arr[middle] !== elem && start <= end) {
      if (elem < arr[middle]) end = middle - 1;
      else {
        start = middle + 1;
      }
      middle = Math.floor((start + end) / 2);
    }
    if (arr[middle] === elem) {
      return middle;
    }
    return -1;
  }

  export function naiveSearch(long, short) {
    let count = 0;
    for (let i = 0; i < long.length; i++) {
      for (let j = 0; j < short.length; j++) {
        if (short[j] !== long[i + j]) break;
        if (j === short.length - 1) count++;
      }
    }
    return count;
  }
