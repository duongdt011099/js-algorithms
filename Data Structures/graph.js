const Stack = require("./stack");
const Queue = require("./queue");

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.checkVertex(vertex)) this.adjacencyList[vertex] = [];
    return this;
  }

  addEdge(vertex1, vertex2) {
    if (!this.checkVertex(vertex1) || !this.checkVertex(vertex2)) return false;
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
    return true;
  }

  removeEdge(vertex1, vertex2) {
    if (!this.checkVertex(vertex1) || !this.checkVertex(vertex2)) return false;
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
    return true;
  }

  removeVertex(vertex) {
    if (!this.checkVertex(vertex)) return false;
    this.adjacencyList[vertex].forEach((v) => this.removeEdge(vertex, v));
    delete this.adjacencyList[vertex];
    return true;
  }

  checkVertex(vertex) {
    return this.adjacencyList[vertex];
  }

  DFS_recursive(vertex) {
    if (!this.checkVertex(vertex)) return null;
    const adjacencyList = this.adjacencyList;
    const results = [];
    const visited = {};
    (function helper(vertex) {
      if (!visited[vertex]) {
        results.push(vertex);
        visited[vertex] = true;
      }
      adjacencyList[vertex].forEach((v) => {
        if (!visited[v]) return helper(v, adjacencyList);
      });
    })(vertex);
    return results;
  }

  DFS_iterative(vertex) {
    const stack = new Stack();
    const results = [];
    const visited = {};
    stack.push(vertex);
    while (stack.size > 0) {
      const v = stack.pop().val;
      if (!visited[v]) {
        visited[v] = true;
        results.push(v);
        this.adjacencyList[v].forEach((item) => stack.push(item));
      }
    }
    return results;
  }

  BFS(vertex) {
    const queue = new Queue();
    queue.enqueue(vertex);
    const results = [];
    const visited = {};
    visited[vertex] = true;
    let visitedVertex;
    while(queue.size > 0) {
      visitedVertex = queue.dequeue().val;
      results.push(visitedVertex);
      this.adjacencyList[visitedVertex].forEach(v => {
        if (!visited[v]) {
          visited[v] = true;
          queue.enqueue(v);
        }
      });
    }
    return results;
  }
}

var g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
console.log(g.BFS("D"));
