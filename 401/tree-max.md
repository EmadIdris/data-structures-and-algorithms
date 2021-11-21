# tree-max

Create a Node class
- Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.

Create a BinaryTree class

- Define a method for each of the depth first traversals called preOrder, inOrder, and postOrder which returns an array of the values, ordered appropriately. Also add findMaximumValue(arr) which find the maximum value in an array returned by the previous methods. Add a breadthFirst method which should return an array representing a level order traversal.

Create a BinarySearchTree class

- Define a method named add that accepts a value, and adds a new node with that value in the correct location in the binary search tree.
- Define a method named contains that accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.

## Authors

Authors: Emad Idris  

## Challenge

**BinaryTree should have these five different methods:**

>`.preOrder()` ()  
>Input: the binary tree the method is called on  
>Output: array of values using preOrder sort

>`.inOrder()` ()  
>Input: the binary tree the method is called on  
>Output: array of values using preOrder sort

>`.postOrder()` ()  
>Input: the binary tree the method is called on  
>Output: array of values using inOrder sort

>`.findMaximumValue(arr)` (takes in an array returned by one of the methods above)  
>Input: an array returned by `preOrder()`, `inOrder()` or `postOrder()`  
>Output: an integer with the maximum value found in the tree

>`.breadthFirst()` ()  
>Input: the binary tree the method is called on  
>Output: array of values using breadth first, level order sort

**BinarySearchTree should have these two different methods:**

>`.add(value)` (adds a node with `value` to the binary search tree)  
>Input: a `value` object to add to the binary tree at the proper location  
>Output: none  

>`.contains(value)` (searches for a `value` in the binary search tree)  
>Input: a `value` to search for in the tree  
>Output: a boolean representing whether or not the value is in the tree  

## Approach & Efficiency

### Big O Notation

- Binary search tree insertion and search is a worst case of O(log n) on a balanced tree, or on an unbalanced tree it is O(height). Space should be Big O(1) for search. For methods that show a representation of the tree the Big O time varies from O(1) to O(height^2).

## Testing

Write tests to prove the following functionality:
- Can successfully return the correct maximum value from the tree

***

## Whiteboard(s)

![cc15](./whiteboard/tree-Max.png)


## TEST

![Test](./ScreenShot/cc16Test.JPG)

***

## [Pull Request]()
