  // RECURSIVE FUNCTIONS

  export function countDown(num) {
    if (num <= 0) {
      return;
    }
    num--;
    return countDown(num);
  }

  export function sumRange(num) {
    if (num === 1) return 1;
    return num + sumRange(num - 1);
  }

  export function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(num - 1);
  }

  export function helperMethodRecursion(arr) {
    let result = [];
    function helper(helperInput) {
      if (helperInput.length === 0) {
        return;
      }

      if (helperInput[0] % 2 !== 0) {
        result.push(helperInput[0]);
      }
      helper(helperInput.slice(1));
    }
    helper(arr);
    return result;
  }

  export function pureRecursion(arr) {
    let newArr = [];
    if (arr.length === 0) {
      return newArr;
    }
    //odd
    if (arr[0] % 2 !== 0) {
      newArr.push(arr[0]);
    }

    newArr = newArr.concat(pureRecursion(arr.slice(1)));
    return newArr;
  }
