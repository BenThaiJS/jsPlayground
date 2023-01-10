
  // EASY SORTING ALGORITHMS

  /* a sorting algorithm where the largest values bubbles up to the top! */
  export function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
      for (let j = 0; j < i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          //SWAP!
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }

  /* similar to bubble sort, but instead of first placing larger values into
  sorted position, it places small values into sorted position */

  export function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      let lowest = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[lowest]) {
          lowest = j;
        }
      }
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
    return arr;
  }

  // builds up the sort by gradually creating a larger left half which is always sorted

  export function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let currentVal = arr[i];
      let j = i - 1
      while (j >= 0 && arr[j] > currentVal) {
        arr[j + 1] = arr[j];
        j -= 1;
      }
      arr[j + 1] = currentVal;
    }
    return arr;
  }

  // INTERMEDIATE SORTING ALGORITHMS

  export function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
      if (arr2[j] > arr1[i]) {
        results.push(arr1[i]);
        i++;
      } else {
        results.push(arr2[j]);
        j++;
      }
    }
    while (i < arr1.length) {
      results.push(arr1[i]);
      i++;
    }
    while (j < arr2.length) {
      results.push(arr2[j]);
      j++;
    }
    return results;
  }

  /* its a combination of two things- merging and sorting
  exploits the fact that arrays of 0 or 1 elements are always sorted
  works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array
*/
  export function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
  }

  export function pivot(arr, start = 0, end = arr.length + 1) {
    let pivot = arr[start];
    let swapIdx = start;

    function swap(array, i, j) {
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    for (let i = start + 1; i < arr.length; i++) {
      if (pivot > arr[i]) {
        swapIdx++;
        swap(arr, swapIdx, i);
      }
    }
  }

  /*
  exploits the fact that arrays of 0 or 1 elements are always sorted
  works by selecting one element (called the pivot) and finding the index where the 
  pivot should end up in the sorted array
  once the pivot is positioned appropriately , quick sort can be applied
  on either side of the pivot
  */
  export function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
      let pivotIndex = pivot(arr, left, right);
      // LEFT
      quickSort(arr, left, pivotIndex - 1);

      //RIGHT
      quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
  }

  export function isValid(s) {
    let array = [];

    if (s.length == 1) {
      return false;
    }

    for (let i = 0; i < s.length; i++) {
      if (s[i] == "(" || s[i] == "[" || s[i] == "{") {
        array.push(s[i]);
      } else {
        let val = array[array.length - 1];
        if (val === "(" && s[i] === ")") {
          array.pop();
        } else if (val === "[" && s[i] === "]") {
          array.pop();
        } else if (val === "{" && s[i] === "}") {
          array.pop();
        } else array.push(s[i]);
      }
    }

    if (array.length == 0) {
      return true;
    } else {
      return false;
    }
  }

  export function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  }

  export function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }

  export function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
      maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
  }

  /*
  radix sort is a special sorting algorithm that works on lists of numbers
  it never makes comparisons between elements!
  it exploits the fact that information about the size of a number is encoded
  in the number of digits
  more digits means a bigger number
  */

  export function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);
    for (let k = 0; k < maxDigitCount; k++) {
      let digitBuckets = Array.from({ length: 10 }, () => []);
      for (let i = 0; i < nums.length; i++) {
        let digit = getDigit(nums[i], k);
        digitBuckets[digit].push(nums[i]);
      }
      nums = [].concat(...digitBuckets);
    }
    return nums;
  }