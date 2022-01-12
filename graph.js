// Edge List - lists all of the connections of the graph.

// const graph = [
//   [0, 2],
//   [2, 3],
//   [2, 1],
//   [1, 3],
// ];

// Adjacent List - index is the node and values of the arrays are connected nodes.

// const graph = [[2], [2, 3], [0, 1, 3], [1, 2]];

// ADjacent Matrix - same as list except you have a binary array at each node for its connection to each other array.

// const graph = [
//   [0, 0, 1, 0],
//   [0, 0, 1, 1],
//   [1, 1, 0, 1],
//   [0, 1, 1, 0],
// ];

class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }

  addVertex(node) {
    this.adjacentList[node] = [];
    this.numberOfNodes++;
  }

  addEdge(node1, node2) {
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }

  showCOnnections() {
    const allNodes = Object.keys(this.adjacentList);
    console.log(allNodes);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = "";
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      }
      console.log(node + " --> " + connections);
    }
  }
}

const myGraph = new Graph();
myGraph.addVertex("0");
myGraph.addVertex("1");
myGraph.addVertex("2");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("6");
console.log(myGraph);
myGraph.addEdge("3", "1");
myGraph.addEdge("3", "4");
myGraph.addEdge("4", "2");
myGraph.addEdge("4", "5");
myGraph.addEdge("1", "2");
myGraph.addEdge("1", "0");
myGraph.addEdge("0", "2");
myGraph.addEdge("6", "5");

myGraph.showCOnnections();
