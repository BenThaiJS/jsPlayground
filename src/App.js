// import {
//   sumRange,
//   countDown,
//   factorial,
//   helperMethodRecursion,
//   pureRecursion,
// } from "./algorithms/recursive";
// import {
//   linearSearch,
//   binarySearch,
//   naiveSearch,
// } from "./algorithms/searching";
// import {
//   bubbleSort,
//   selectionSort,
//   insertionSort,
//   merge,
//   mergeSort,
//   pivot,
//   quickSort,
//   isValid,
//   getDigit,
//   digitCount,
//   mostDigits,
//   radixSort,
// } from "./algorithms/sorting";
import "./app.css";
function App() {
  // Question
  const question = null;
  const question2 = null;
  // Playground
  const numbers = [1, 2, 3, 1, 1, 3];
  const numIdenticalPairs = (nums) => {
    const map = {};
    let count = 0;

    for (const number of nums) {
      if (map[number]) {
        count += map[number];
        map[number] += 1;
      } else {
        map[number] = 1;
      }
    }
    return count;
  };

  const value = numIdenticalPairs(numbers);

  return (
    <div className='app'>
      <header>
        <h1>JS PLAYGROUND </h1>
        <p>Designed to make LeetCode EASIER. HAVE FUN!!</p>
      </header>
      <div className='question'>
        <p>
          <b>Leetcode Question:</b>
        </p>
        <p>{question}</p>
        <p>{question2}</p>
      </div>
      <div className='note'>
        <textarea className='textarea' placeholder='Pseudocode...' autofocus />
      </div>
      <div className='answer'>
        <p>
          <b>Your Answer: </b>
          {value}
        </p>
      </div>
    </div>
  );
}

export default App;
