/*
a graph data structure consists of a finite (and possibly mutable) set
of vertices or nodes or points, together with a set of unordered pairs
of these vertices for an undirected graph or a set of ordered pairs for a 
directed graph
*/


class Graph {
    constructor() {
      this.adjacencyList = {};
    }
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
      }
    }
    addEdge(v1, v2) {
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1);
    }
    removeEdge(v1, v2) {
      this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
      this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
    }
    removeVertex(vertex) {
      while (this.adjacencyList[vertex].length) {
        const adjacentVertex = this.adjacencyList[vertex].pop();
        this.removeEdge(vertex, adjacentVertex);
      }
      delete this.adjacencyList[vertex];
    }
    depthFirstRecursive(start) {
      const result = [];
      const visited = {};
      const adjacencyList = this.adjacencyList;
      function dfs(vertex) {
        if (!vertex) return null;
        visited[vertex] = true;
        result.push(vertex);
        adjacencyList[vertex].forEach((neighbor) => {
          if (!visited[neighbor]) {
            return dfs(neighbor);
          }
        });
      }
      dfs(start);
      return result;
    }
    depthFirstIterative(start) {
      const stack = [start];
      const result = [];
      const visited = {};
      const adjacencyList = this.adjacencyList;
      let currentVertex;
      visited[start] = true;
      while (stack.length) {
        currentVertex = stack.pop();
        result.push(currentVertex);
        adjacencyList[currentVertex].forEach((neighbor) => {
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            stack.push(neighbor);
          }
        });
      }
      return result;
    }
    breadthFirst(start) {
      const queue = [start];
      const result = [];
      const visited = {};
      const adjacencyList = this.adjacencyList;
      visited[start] = true;

      let currentVertex;
      while (queue.length) {
        currentVertex = queue.shift();
        result.push(currentVertex);

        adjacencyList[currentVertex].forEach((neighbor) => {
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            queue.push(neighbor);
          }
        });
      }
      return result;
    }
  }