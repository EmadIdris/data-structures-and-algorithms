# Challenge Summary
<!-- Short summary or background information -->
Implementation: Graphs

## Challenge Description
<!-- Description of the challenge -->
Implement your own Graph. The graph should be represented as an adjacency list, and should include the following methods:

1. `AddVertex()`

    - Adds a new node to the graph

    - Takes in the value of that node

    - Returns the added node

    - Space: O(1), Time: O(1)

1. `AddEdge()`

    - Adds a new edge between two nodes in the graph

    - Include the ability to have a “weight”

    - Takes in the two nodes to be connected by the edge

    - Both nodes should already be in the Graph

    - Space: O(1), Time: O(1)

1. `GetNodes()`

    - Returns all of the nodes in the graph as a collection (set, list, or similar)

    - Graph of |V| vertices and |E| edges

    - Space: O(n), Time: O(|V| + |E|)

1. `GetNeighbors()`

    - Returns a collection of edges connected to the given node

    - Takes in a given node

    - Include the weight of the connection in the returned collection

    - Graph of |V| vertices and |E| edges

    - Space: O(n), Time: O(n)

1. `Size()`

    - Returns the total number of nodes in the graph

    - Graph of |V| vertices and |E| edges

    - Space: O(n), Time: O(|V| + |E|)

1. `BreadthFirst()`

    - Traverses the entire graph breadth first.

    - Graph of |V| vertices and |E| edges

    - Space: O(n), Time: O(|V| + |E|)

1. `function getEdge()`

    - which takes in a graph, and an array of city names

    - return whether the full trip is possible with direct flights, and how much it would cost

    - Graph of |V| vertices and |E| edges

    - Space: O(n), Time: O((|V| + |E|)^2)

1. `function depthFirstPre()`

    - which takes in adjacency list as a graph and conducts depth first traversal

    - returns collection of nodes in their pre-order

    - Graph of |V| vertices and |E| edges

    - Space: O(n), Time: O(|V| + |E|)



# Author : Emad Idris ✌✌✌✌✌✌✌✌✌✌✌✌✌