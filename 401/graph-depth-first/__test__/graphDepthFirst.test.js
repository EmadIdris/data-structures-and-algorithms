'use strict';

const Graph = require('../graphDepthFirst');
const Vertex = require('../vertex');

describe('Graph', () => {
  it('should instantiate a new graph', () => {
    const graph = new Graph();
    expect(graph).toBeDefined();
  });

  it('should calculate the size of the graph', () => {
    const graph = new Graph();

    const ten = new Vertex(10);
    const two = new Vertex(2);
    const six = new Vertex(6);
    const four = new Vertex(4);

    graph.addVertex(ten);
    graph.addVertex(two);
    graph.addVertex(six);
    graph.addVertex(four);

    graph.addEdge(ten, two);
    graph.addEdge(ten, six);
    graph.addEdge(two, six);
    graph.addEdge(two, four);
    graph.addEdge(six, four);

    expect(graph.size()).toBe(null);
  });
});

describe('A collection of nodes in their pre-order depth-first traversal order', () => {

    let graph = new Graph();

    let one = new Vertex('A');
    let two = new Vertex('B');
    let three = new Vertex('C');
    let four = new Vertex('D');
    let five = new Vertex('E');
    let six = new Vertex('F');
    let seven = new Vertex('G');

  
    graph.addVertex(one);
    graph.addVertex(two);
    graph.addVertex(three);
    graph.addVertex(four);
    graph.addVertex(five);
    graph.addVertex(six);
    graph.addVertex(seven);

  
    graph.addEdge(one, three);
    graph.addEdge(one, two);
    graph.addEdge(one, four);
    graph.addEdge(four, five);
    graph.addEdge(five, six);
    graph.addEdge(two, six);
  
    it('Depth First The Nodes from a graph', () => {
      expect(graph.dfs(one)).toBeTruthy();
      expect(graph.dfs(one)).toEqual(true);
    });
});