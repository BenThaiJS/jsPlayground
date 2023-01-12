/*
Multiple Pointers

Creating pointers or values that correspond to an index
or position and move towards the beginning, end or middle 
based on a certain condition

very efficient for solving problems with minimal space complexity as well
*/


export function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left] + arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

/*
Multiple Pointers - countUniqueValues
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4
Time Complexity - O(n)

Space Complexity - O(n)

Bonus

You must do this with constant or O(1) space and O(n) time.
*/

export function countUniqueValues(arr) {
    if (arr.length === 0) {
      return 0;
    }
    
    let i = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
        i++;
        arr[i] = arr[j];
      }
    }
    return i + 1;
  }