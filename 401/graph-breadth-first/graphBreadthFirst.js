'use strict';

const Vertex = require('../graph/vertex');
const Edge = require('../graph/edge');

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    return this.adjacencyList.set(vertex, []);
  }

  addDirectedEdge(startVertex, endVertex) {
    if (!this.adjacencyList.has(startVertex) || !this.adjacencyList.has(endVertex)) {
      throw new Error('Invalid vertex');
    }
    const adjacencies = this.adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex));
  }

  getNode() {
    let collection = [];
    for (const [vartex, edge] of this.adjacencyList.entries()) {
      if (edge.length > 0) {
        if (edge.length > 1) {
          edge.forEach((e, i) => collection.push(`${vartex.value} with ${e.vertex.value}`));
        } else {
          collection.push(`${vartex.value} with ${edge[0].vertex.value}`);
        }
      }
    }
    return collection;
  }

   getNeighbors(node) {
      for (const [vertex, edge] of this.adjacencyList.entries()) {
        if (vertex === node) {
          return edge;
        }
      }
   } 
  size() {
    if (this.adjacencyList.size > 0) {
      return this.adjacencyList.size;
    } else {
      return null;
    }
  }

  breadthFirst(vertex) {
    const array = [];
    const visitedNodes = [];

    array.unshift(vertex);
    visitedNodes.push(vertex);

    while (array.length) {

      const currentVertex = array.pop();
      const neighbors = this.getNeighbors(currentVertex);

      for (let neighbor of neighbors) {

        const neighborVertex = neighbor.vertex;

        if (visitedNodes.includes(neighborVertex)) {
          continue;
        } else {
            visitedNodes.push(neighborVertex);
          array.unshift(neighborVertex);
        }
      }
    }

    return visitedNodes;
  }
}


module.exports = Graph ;