'use strict';

const Graph = require('../graphBreadthFirst');
const Vertex = require('../../graph/vertex');

describe('Graph', () => {
  it('should instantiate a new graph', () => {
    const graph = new Graph();
    expect(graph).toBeDefined();
  });

  it('should add new vertex to a graph', () => {
    const graph = new Graph();
    const ten = new Vertex(10);
    const two = new Vertex(2);
    graph.addVertex(ten);
    graph.addVertex(two);
    graph.addDirectedEdge(ten, two);
    expect(graph.getNode()).toEqual(['10 with 2']);
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

    graph.addDirectedEdge(ten, two);
    graph.addDirectedEdge(ten, six);
    graph.addDirectedEdge(two, six);
    graph.addDirectedEdge(two, four);
    graph.addDirectedEdge(six, four);

    expect(graph.size()).toBe(4);
  });
});

describe('A collection of nodes in the order they were visited.', () => {

    let graph = new Graph();

    let one = new Vertex('one');
    let two = new Vertex('two');
    let three = new Vertex('three');
    let four = new Vertex('four');
    let five = new Vertex('five');
    let six = new Vertex('six');
  
    graph.addVertex(one);
    graph.addVertex(two);
    graph.addVertex(three);
    graph.addVertex(four);
    graph.addVertex(five);
    graph.addVertex(six);
  
    graph.addDirectedEdge(one, three);
    graph.addDirectedEdge(two, four);
    graph.addDirectedEdge(one, four);
    graph.addDirectedEdge(four, two);
    graph.addDirectedEdge(four, five);
    graph.addDirectedEdge(two, six);
  
    it('Breadth First The Nodes from a graph', () => {
      expect(graph.breadthFirst(one)).toBeTruthy();
      expect(Array.isArray(graph.breadthFirst(one))).toBeTruthy();
      expect(graph.breadthFirst(one).length).toEqual(6);
    });
});