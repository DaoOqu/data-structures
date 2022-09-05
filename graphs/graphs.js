/*
In this Graphs implementation, I will only critical graph methods.
This will be an implementation of an unweighted, undirected graph using an adjacenecy list
The adjacency list will be using a hashtable, or in JS, an object
*/

class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }

  // add vertex
  addVertex(node) {

  }

  // add edge
  addEdge(node1, node2) {
    // undirected graph
  }

  // This is a helper function that lets us visualize the graph
  showConnections() {
    const allNodes = Object.keys(this.adjacentList);
    for(let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = "";
      let vertex;
      for(vertex of nodeConnections) {
        connections += vertex + " ";
      }
      console.log(node + "-->" + connections);
    }
  }
}


const myGraph = new Graph();