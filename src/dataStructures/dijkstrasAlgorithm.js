
/*
  finds the shortest path between 2 vertices on a graph
*/
class Node {
    constructor(value, priority) {
      this.value = value;
      this.priority = priority;
      this.insertTime = Date.now();
    }
  }

  class PriorityQueue {
    constructor() {
      this.values = [];
    }
    enqueue(value, priority) {
      let newNode = new Node(value, priority);
      this.values.push(newNode);
      this.bubbleUp();
    }
    bubbleUp() {
      let index = this.values.length - 1;
      const element = this.values[index];
      while (true) {
        let parentIndex = Math.floor((index - 1) / 2);
        let parent = this.values[parentIndex];
        if (element.priority >= parent.priority) break;
        this.values[parentIndex] = element;
        this.values[index] = parent;
        index = parentIndex;
      }
    }
    dequeue() {
      let min = this.values[0];
      let end = this.values.pop();
      if (this.values.length > 0) {
        this.values[0] = end;
        this.sinkDown();
      }
      return min;
    }
    sinkDown() {
      let index = 0;
      const length = this.values.length;
      const element = this.values[0];
      while (true) {
        let leftChildIndex = 2 * index + 1;
        let rightChildIndex = 2 * index + 2;
        let leftChild, rightChild;
        let swap = null;

        if (leftChildIndex < length) {
          leftChild = this.values[leftChildIndex];
          if (leftChild.priority < element.priority) {
            swap = leftChildIndex;
          }
          if (rightChildIndex < length) {
            rightChild = this.values[rightChildIndex];
            if (
              (swap === null && rightChild.priority < element.priority) ||
              (swap !== null && rightChild.priority < leftChild.priority)
            ) {
              swap = rightChildIndex;
            }
          }
        }
        if (swap === null) break;
        this.values[index] = this.values[swap];
        this.values[swap] = element;
        index = swap;
      }
    }
  }

  class WeightedGraph {
    constructor() {
      this.adjacencyList = {};
    }
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
      }
    }
    addEdge(vertex1, vertex2, weight) {
      this.adjacencyList[vertex1].push({ node: vertex2, weight });
      this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }
    dijkstra(start, finish) {
      const nodes = new PriorityQueue();
      const distances = {};
      const previous = {};
      let path = [];
      let smallest;
      // build up initial state
      for (let vertex in this.adjacencyList) {
        if (vertex === start) {
          distances[vertex] = 0;
          nodes.enqueue(vertex, 0);
        } else {
          distances[vertex] = Infinity;
          nodes.enqueue(vertex, Infinity);
        }
        previous[vertex] = null;
      }
      // as long as there is something to visit
      while (nodes.values.length) {
        smallest = nodes.dequeue().val;
        if (smallest === finish) {
          // WE ARE DONE
          // BUILD UP PATH TO RETURN AT END
          while (previous[smallest]) {
            path.push(smallest);
            smallest = previous[smallest];
          }
          break;
        }
        if (smallest || distances[smallest] !== Infinity) {
          for (let neighbor in this.adjacencyList[smallest]) {
            // find neighboring node
            let nextNode = this.adjacencyList[smallest][neighbor];
            //calculate new distance to neighboring node
            let candidate = distances[smallest] + nextNode.weight;
            let nextNeighbor = nextNode.node;
            if (candidate < distances[nextNeighbor]) {
              // updating new smallest distance to neighbor
              distances[nextNeighbor] = candidate;
              // updating previous - How we got to neighbor
              previous[nextNeighbor] = smallest;
              // enqueue in priority queue with new priority
              nodes.enqueue(nextNeighbor, candidate);
            }
          }
        }
      }
      return path.concat(smallest).reverse();
    }
  }

  let g = new WeightedGraph();
  g.addVertex("A");
  g.addVertex("B");
  g.addVertex("C");
  g.addVertex("D");
  g.addVertex("E");
  g.addVertex("F");

  g.addEdge("A", "B", 4);
  g.addEdge("A", "C", 2);
  g.addEdge("B", "E", 3);
  g.addEdge("C", "D", 2);
  g.addEdge("C", "F", 4);
  g.addEdge("D", "E", 3);
  g.addEdge("D", "F", 1);
  g.addEdge("E", "F", 1);

  g.dijkstra("A", "E");