'use strict';
//-----------------------------------------------------------------------
class Node {
  constructor(value, leftChild = null, rightChild = null) {
    this.value = value;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
  }
}
//-----------------------------------------------------------------------
class BinaryTree {
  constructor() {
    this.root = null;
  }
//-----------------------------------------------------------------------
  preOrder() { // Pre-order: root >> left >> right
    let outputArray = [];
    let currentNode = this.root;
    if (!currentNode) { // Null tree error handling
      return null;
    } else {
      let traverseTree = currentNode => {
        outputArray.push(currentNode.value);
        if (currentNode.leftChild) { traverseTree(currentNode.leftChild); }
        if (currentNode.rightChild) { traverseTree(currentNode.rightChild); }
      };
      traverseTree(currentNode);
      return outputArray;
    }
  }
//-----------------------------------------------------------------------
  inOrder() { // left >> root >> right
    let outputArray = [];
    let currentNode = this.root;
    if (!currentNode) { // Null tree error handling
      return null;
    } else {
      let traverseTree = currentNode => {
        if (currentNode.leftChild) { traverseTree(currentNode.leftChild); }
        outputArray.push(currentNode.value);
        if (currentNode.rightChild) { traverseTree(currentNode.rightChild); }
      };
      traverseTree(currentNode);
      return outputArray;
    }
  }
//-----------------------------------------------------------------------
  postOrder() { 
    let outputArray = [];
    let currentNode = this.root;
    if (!currentNode) { 
      return null;
    } else {
      let traverseTree = currentNode => {
        if (currentNode.leftChild) { traverseTree(currentNode.leftChild); }
        if (currentNode.rightChild) { traverseTree(currentNode.rightChild); }
        outputArray.push(currentNode.value);
      };
      traverseTree(currentNode);
      return outputArray;
    }
  }
//-----------------------------------------------------------------------
  findMaximumValue() {
    let maxValue = null;
    let currentNode = this.root;
    if (!currentNode) { // Null tree error handling
      return null;
    } else {
      let traverseTree = currentNode => {
        if (currentNode.value > maxValue) { maxValue = currentNode.value; }
        if (currentNode.leftChild) { traverseTree(currentNode.leftChild); }
        if (currentNode.rightChild) { traverseTree(currentNode.rightChild); }
      };
      traverseTree(currentNode);
      return maxValue;
    }
  }
//-----------------------------------------------------------------------
  breadthFirstNoPush() {
    let array = [];
    let iter = 0;
    // Find the number of levels in the tree
    const findTreeLevel = (node) => {
      if (node === null) {
        return 0; 
      }
      const leftLevels = findTreeLevel(node.leftChild); 
      const rightLevels = findTreeLevel(node.rightChild); 
      if (leftLevels > rightLevels) { 
        return leftLevels + 1; 
      } else {
        return rightLevels + 1; 
      }
    };
//-----------------------------------------------------------------------
    const levelTraversal = (node) => {
      const levels = findTreeLevel(node);
      for (let i = 1; i <= levels; i++) { 
        _addNodeToArray(node, i); 
      }
    };
    const _addNodeToArray = (node, level) => {
     
      if (!node) {
        return array; 
      }
      if (level === 1){ 
        array[iter] = node.value; 
        iter++; 
      }
      if (level > 1) { 
        _addNodeToArray(node.leftChild, level - 1); 
        _addNodeToArray(node.rightChild, level - 1);
      }
    };
    levelTraversal(this.root);
    return array;
  }
//-----------------------------------------------------------------------
  oldFindMaximumValue(arr) {
    if(!arr) {
      return null;
    }
    let largestSoFar = null;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > largestSoFar) {
        largestSoFar = arr[i];
      }
    }

    return largestSoFar;
  }
}
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
class BinarySearchTree extends BinaryTree {
  add(value) { 
    let currentNode;
    if (Number.isInteger(value)) { currentNode = new Node(value); } else { return null; }
    if (!this.root) { 
      this.root = currentNode;
    } else {
      let _addNode = (node, currentNode) => {
        if (currentNode.value < node.value) { 
          if (!node.leftChild) { 
            node.leftChild = currentNode;
          } else { 
            _addNode(node.leftChild, currentNode);
          }
        } else { 
          if (!node.rightChild) { 
            node.rightChild = currentNode;
          } else {
            _addNode(node.rightChild, currentNode);
          }
        }
      };
      _addNode(this.root, currentNode);
    }
  }
  contains(value) { 
    if (!this.root) { 
      return false;
    } else {
      let _containsNode = (node, value) => {
        if (value < node.value) { 
          // ...go left...
          if (!node.leftChild) { 
            return false;
          } else { 
            _containsNode(node.leftChild, value);
          }
        } else if (value > node.value) { 
          // ...go right...
          if (!node.rightChild) { 
            return false;
          } else { 
            _containsNode(node.rightChild, value);
          }
        } else if (value === node.value) { 
          return true;
        }
        return false;
      };
      return _containsNode(this.root, value);
    }
  }
}
module.exports = { Node, BinaryTree, BinarySearchTree };