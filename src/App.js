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
// import { search } from "./problemSolvingPatterns/divideAndConquer";
// import {same, validAnagram} from "./problemSolvingPatterns/frequencyCounter";
// import { countUniqueValues, sumZero } from "./problemSolvingPatterns/multiplePointers";
// import { maxSubArraySum } from "./problemSolvingPatterns/slidingWindow";
// import { MaxBinaryHeap } from "./dataStructures/binaryHeap";
// import { binarySearchTree } from "./dataStructures/binarySearchTree";
// import { PriorityQueue, WeightedGraph} from "./dataStructures/dijkstrasAlgorithm";
// import { DoublyLinkedList } from "./dataStructures/doublyLinkedList";
// import { fib_memo, fib_table } from "./dataStructures/dynamicProgramming";
// import { Graph } from "./dataStructures/graphTraversal";
// import { HashTable } from "./dataStructures/hashTables";
// import { PriorityQueue } from "./dataStructures/dijkstrasAlgorithm";
// import { Queue } from "./dataStructures/queue";
// import { SinglyLinkedList } from "./dataStructures/singlyLinkedList";
// import { Stack } from "./dataStructures/stacks";

import "./App.css";
function App() {
  // Question
  const question = null;
  const question2 = null;
  
  // Playground

  const value = null;

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
        <textarea className='textarea' placeholder='Pseudocode...' autoFocus />
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
